// Button Events
function clickSubmitEventListener(event)
{
	var fileNameNew;
	try
	{
		fileNameNew = "/models/obj/" + document.getElementById("file").files[0].name;
	} 
	catch(err)
	{
		document.getElementById("lab-msg").innerHTML = "Error when loading a file!";
	}
	if(fileNameNew)
	{
		if(fileNameNew != fileName)
		{ 
			fileName = fileNameNew;
			loadModel(fileName, init);
		}
	}
}
function clickButtonHomeEventListener(event)
{
	magnitudOrder = 1.;
    autoFocusOffset = 0.5;
	drawingMode = "WIREFRAME";

	xEye = xEyeIni;
	yEye = yEyeIni;
	zEye = zEyeIni;
	xTarget = xTargetIni;
	yTarget = yTargetIni;
	zTarget = zTargetIni;
	xUp = xUpIni;
	yUp = yUpIni;
	zUp = zUpIni;

	dragMode = "ROTATE";
	dragging = false;	// Dragging or not
	xLast = 0;			// Last position
	yLast = 0;			
	rotX = 0.;			// Acumlulation
	rotY = 0.;

	// Update camera transformation
	var eye = [xEye, yEye, zEye];
	var target = [xTarget, yTarget, zTarget];
	var up = [xUp, yUp, zUp];

	var cameraMatrix = glMatrix.mat4.create();	// M-camera = I
	glMatrix.mat4.lookAt(cameraMatrix, eye, target, up);
	glMatrix.mat4.rotate(cameraMatrix, cameraMatrix, rotX, [1., 0., 0.]);
	glMatrix.mat4.rotate(cameraMatrix, cameraMatrix, rotY, [0., 1., 0.]);
	var uCameraMatrixLocation = gl.getUniformLocation(shaderProgram, "uCameraMatrix");
	gl.uniformMatrix4fv(uCameraMatrixLocation, false, cameraMatrix);

	document.getElementById("radio-wireframe").checked = true;
	document.getElementById("radio-rotate").checked = true;
}

// Radio Button Events
function inputRadioPointsEventListener(event)
{
	if(drawingMode == "WIREFRAME")
	{
		indices = indicesPOINTS;
		//Load IBO
		var bufferType = gl.ELEMENT_ARRAY_BUFFER;	// Buffer type to storage float data
		gl.bindBuffer(bufferType, ibo);				// Bind to a type of buffer
		var data = new Uint16Array(indices);		// Data to be storage in a Buffer (a raw device)
		var usage = gl.STATIC_DRAW;					// Used for drawing optimization
		gl.bufferData(bufferType, data, usage);		// Load data into the Buffer
	}
	drawingMode = "POINTS";

}
function inputRadioWireframeEventListener(event)
{
	if(drawingMode != "WIREFRAME")
	{
		indices = indicesLINES;
		//Load IBO
		var bufferType = gl.ELEMENT_ARRAY_BUFFER;	// Buffer type to storage float data
		gl.bindBuffer(bufferType, ibo);				// Bind to a type of buffer
		var data = new Uint16Array(indices);		// Data to be storage in a Buffer (a raw device)
		var usage = gl.STATIC_DRAW;					// Used for drawing optimization
		gl.bufferData(bufferType, data, usage);		// Load data into the Buffer
	}
	drawingMode = "WIREFRAME";
}
function inputRadioSolidEventListener(event)
{
	if(drawingMode == "WIREFRAME")
	{
		indices = indicesTRIANGLES;
		//Load IBO
		var bufferType = gl.ELEMENT_ARRAY_BUFFER;	// Buffer type to storage float data
		gl.bindBuffer(bufferType, ibo);				// Bind to a type of buffer
		var data = new Uint16Array(indices);		// Data to be storage in a Buffer (a raw device)
		var usage = gl.STATIC_DRAW;					// Used for drawing optimization
		gl.bufferData(bufferType, data, usage);		// Load data into the Buffer
	}
	drawingMode = "SOLID";
}

function updateScene()
{
	//VBO
	var bufferType = gl.ARRAY_BUFFER;			// Buffer type to storage float data
	gl.bindBuffer(bufferType, vbo);				// Bind to a type of buffer
	var data = new Float32Array(vertices);		// Data to be storage in a Buffer (a raw device)
	var usage = gl.STATIC_DRAW;					// Used for drawing optimization
	gl.bufferData(bufferType, data, usage);		// Load data into the Buffer

	// IBO
	var ibo = gl.createBuffer();
	var bufferType = gl.ELEMENT_ARRAY_BUFFER;	// Buffer type to storage float data
	gl.bindBuffer(bufferType, ibo);				// Bind to a type of buffer
	var data = new Uint16Array(indices);		// Data to be storage in a Buffer (a raw device)
	var usage = gl.STATIC_DRAW;					// Used for drawing optimization
	gl.bufferData(bufferType, data, usage);		// Load data into the Buffer
}


function mouseDownEventListener(event)
{
	dragging = true;
	var x = event.clientX;
	var y = event.clientY;
	var rect = event.target.getBoundingClientRect();
	x = x - rect.left;
	y = y - rect.top;
	xLast = x;
	yLast = y;
}

function mouseUpEventListener(event)
{
	dragging = false;	// mouse is released
}

function mouseMoveEventListener(event)
{
	if(dragging)
	{	
		var x = event.clientX;
		var y = event.clientY;
		var rect = event.target.getBoundingClientRect();
		x = x - rect.left;
		y = y - rect.top;
		dragMode = document.querySelector("input[name='camera']:checked").value;
		if(dragMode == "ROTATE")
		{
			var factor = 10. / canvas.height; // The rotation ratio
			var dx = factor * (x - xLast);
			var dy = factor * (y - yLast);
			// Limit x-axis rotation angle to [-90, 90] degrees
			rotX = Math.max(Math.min(rotX + dy, 90.), -90.);
			rotY = rotY + dx;
		} else if(dragMode == "PAN")
		{ 				
			var deltaX = (x - xLast) / (63.0);
			var deltaY = (y - yLast) / (-63.0);
			deltaX = deltaX * magnitudOrder;
			deltaY = deltaY * magnitudOrder;
			xEye = xEye + deltaX;
			yEye = yEye + deltaY;
			xTarget = xTarget + deltaX;
			yTarget = yTarget + deltaY;
		} else if(dragMode == "ZOOM")
		{
			if(zEye > zTargetIni)
			{
				var difX = x - xLast;
				var difY = y - yLast;
				var maxDiff = difY;
				if(Math.abs(difX) > Math.abs(difY))
				{
					maxDiff = difX;
				}
				zEye = zEye + maxDiff * magnitudOrder / 10.;
			}
			else
			{
				//zEye = zTarget + 0.0001;
				zEye = zTargetIni + 0.0001;
			}
		}
		xLast = x;
		yLast = y;
	}

	// Update camera transformation
	var eye = [xEye, yEye, zEye];
	var target = [xTarget, yTarget, zTarget];
	var up = [xUp, yUp, zUp];

	var cameraMatrix = glMatrix.mat4.create();	// M-camera = I
	glMatrix.mat4.lookAt(cameraMatrix, eye, target, up);
	glMatrix.mat4.rotate(cameraMatrix, cameraMatrix, rotX, [1., 0., 0.]);
	glMatrix.mat4.rotate(cameraMatrix, cameraMatrix, rotY, [0., 1., 0.]);
	var uCameraMatrixLocation = gl.getUniformLocation(shaderProgram, "uCameraMatrix");
	gl.uniformMatrix4fv(uCameraMatrixLocation, false, cameraMatrix);
}

function updateCamera()
{
	var eye = [xEye, yEye, zEye];
	var target = [xTarget, yTarget, zTarget];
	var up = [xUp, yUp, zUp];
	var cameraMatrix = glMatrix.mat4.create();
	glMatrix.mat4.lookAt(cameraMatrix, eye, target, up);
	var uCameraMatrixLocation = gl.getUniformLocation(shaderProgram, "uCameraMatrix");
	gl.uniformMatrix4fv(uCameraMatrixLocation, false, cameraMatrix);
}

// Function wich set:
// 1. Camera's parameteres: eye, target & up
// 2. Model's magnitud order: units (1), decenas (10), centenas(100), miliars(1000)
// 3. Bounding Box: Pmin(xmin,ymin,zmin), Pmax(xmax,ymax,zmax)
// 4. Bounding Sphere: center, radius
function autoFocus()
{
	// Bounding Box parameters
	var fovy = 60. * Math.PI / 180.;
	xMin = vertices[0];
	xMax = vertices[0];
	var i;
	for(i = 3; i < vertices.length; i = i + 3)
	{
		if(vertices[i] < xMin)
		{
			xMin = vertices[i];
		}
		else if(vertices[i] > xMax)
		{
			xMax = vertices[i];
		}
	}
	yMin = vertices[1];
	yMax = vertices[1];
	for(i = 4; i < vertices.length; i = i + 3)
	{
		if(vertices[i] < yMin)
		{
			yMin = vertices[i];
		}
		else if(vertices[i] > yMax)
		{
			yMax = vertices[i];
		}
	}
	zMin = vertices[2];
	zMax = vertices[2];
	for(i = 5; i < vertices.length; i = i + 3)
	{
		if(vertices[i] < zMin)
		{
			zMin = vertices[i];
		}
		else if(vertices[i] > zMax)
		{
			zMax = vertices[i];
		}
	}
	// Set Magnitud Order
	var diag = Math.sqrt(Math.pow(xMin-xMax, 2.)+Math.pow(yMin-yMax, 2.)+Math.pow(zMin-zMax, 2.));
	if(diag < 5.)
	{
		magnitudOrder = 1.;
	}
	else if(diag < 50.)
	{
		magnitudOrder = 10.;
	}
	else if(diag < 500.)
	{
		magnitudOrder = 100.;
	}
	else if(diag >= 500.)
	{
		magnitudOrder = 1000.;
	}
	// Bounding Sphere parameters
	var xCentroid = (xMin + xMax) / 2.;
	var yCentroid = (yMin + yMax) / 2.;
	var zCentroid = (zMin + zMax) / 2.;
	var radiusBoundingSphere = diag / 2.;
	// Camera's parameters
	// Eye Camera
	xEye = xCentroid;
	yEye = yCentroid;
	var z1 = Math.abs(yMax - yEye) / Math.tan(fovy / 2.) + zMax;
	var z2 = Math.abs(xMax - xEye) / Math.tan(fovy / 2.) + zMax;
	zEye = z1;
	if(z2 > zEye)
	{
		zEye = z2;
	}
	zEye = (1. + autoFocusOffset) * zEye;
	// Target Camera
	xTarget = xCentroid;
	yTarget = yCentroid;
	zTarget = zCentroid;
	// Up Camera
	xUp = 0.;
	yUp = 1.0;
	zUp = 0.;
}

function keyDownEventListener(event)
{
	if(event.keyCode == 32)	// spacer bar
	{
		multiViewport = !multiViewport;
	}
}

function initEventHandler(event)
{
	// Button
	document.getElementById("submit").addEventListener("click", clickSubmitEventListener, false);
	document.getElementById("button-home").addEventListener("click", clickButtonHomeEventListener, false);

	// Radio Buttons
	document.getElementById("radio-points").addEventListener("input", inputRadioPointsEventListener, false);
	document.getElementById("radio-wireframe").addEventListener("input", inputRadioWireframeEventListener, false);
	document.getElementById("radio-solid").addEventListener("input", inputRadioSolidEventListener, false);
	

	// Mouse
	document.addEventListener("mousedown", mouseDownEventListener, false);
	document.addEventListener("mouseup", mouseUpEventListener, false);
	document.addEventListener("mousemove", mouseMoveEventListener, false);

	// keyboard
	document.addEventListener("keydown", keyDownEventListener, "false");
}
