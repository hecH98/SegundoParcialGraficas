"use strict"

var canvas;
var renderer;
var scene;
var camera;
var light;
var mesh;
var sceneReady = false;
var arr = [];
var hasPlane = false;
var cubos, esferas, cilindros, conos, tetrahedros, torus, torusknots, icosahedrons, dodecahedrons, octahedrons, geometriasCompuestas, extras, sillas;
var color;
var isRotating = true;
// var controls;
var materialSelected;

function main()
{  
    cubos = 0;
    esferas = 0;
    cilindros = 0;
    conos=0;
    tetrahedros=0;
    torus=0;
    torusknots = 0;
    icosahedrons=0;
    dodecahedrons=0;
    octahedrons=0;
    geometriasCompuestas=0;
    extras =0;
    sillas=0;

    
    color = document.getElementById("color-palette").value;
    // RENDERER
    canvas = document.getElementById("canvas");
    renderer = new THREE.WebGLRenderer({canvas: canvas});
    renderer.setSize(canvas.width, canvas.height);
    renderer.setClearColor("black");                    

    // LIGHTS
    var light = new THREE.AmbientLight( 0x404040 ); // soft white light

    // CAMERAS
    camera = new THREE.PerspectiveCamera(60., canvas.width / canvas.height, 0.01, 10000.);  // CAMERA
    camera.position.set(-3, 3, 10);
    camera.up = new THREE.Vector3(0, 1, 0);
    camera.lookAt(new THREE.Vector3(0, 0, 0));
    var controls = new THREE.OrbitControls(camera, renderer.domElement);        //rotacion de la camara
    
    // SCENE
    scene = new THREE.Scene();                                 
    scene.add(camera);
    scene.add(light);

    // ACTION
    requestAnimationFrame(renderLoop);              // RENDER LOOP
    initEventHandler();
}

function onMouseMove( event ) {
    event.preventDefault();
    mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
    mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
}

function playPauseRotation(){           //pausa / play rotacion
    if (isRotating){
        isRotating = false;
    }
    else{
        isRotating = true;
    }
    
}

function rotateObject() {               //rota objeto
    
    for (var i =0 ; i<arr.length;i++){
        if (arr[i].figura == "plane"){
        }
        else{
            arr[i].obj.rotation.x = arr[i].obj.rotation.x + 0.01;
            arr[i].obj.rotation.y = arr[i].obj.rotation.y + 0.01;
        }  
    }
 }

 function resetAnimation(){
    for (var i =0 ; i<arr.length;i++){
        if (arr[i].figura == "plane"){
        }
        else{
            arr[i].obj.rotation.x = 0;
            arr[i].obj.rotation.y = 0;
        }  
    }
 }


 function createCORSRequest(method, url) {
	var xhr = new XMLHttpRequest();
	if ("withCredentials" in xhr) {
		// Check if the XMLHttpRequest object has a "withCredentials" property.
		// "withCredentials" only exists on XMLHTTPRequest2 objects.
		xhr.open(method, url, true);

	} else if (typeof XDomainRequest != "undefined") {
		// Otherwise, check if XDomainRequest.
		// XDomainRequest only exists in IE, and is IE's way of making CORS requests.
		xhr = new XDomainRequest();
		xhr.open(method, url);
	} else {
		// Otherwise, CORS is not supported by the browser.
		xhr = null;
	}
	return xhr;
}

function readTextFile(file, callback) {
	var request = createCORSRequest('GET', file);
	request.onreadystatechange = function() 
								 {
									if (request.readyState === 4 && request.status == "200") 
									{
										callback(request.responseText);
									}
    							};
    request.send(null);
}

function loadModel(fileName, callback)
{
	readTextFile(fileName, callback);
}

 //Figuras Compuestas
 class BoxModel extends THREE.Mesh
{
    constructor()
    {
        super(new THREE.BoxGeometry(), new THREE.MeshBasicMaterial({wireframe: true}));
    }
    setNormalMaterial()
    {
        this.material = new THREE.MeshNormalMaterial();
    }
    setWireframeMaterial()
    {
        this.matetrial = new THREE.MeshBasicMaterial({wireframe: true});
    }
}

 class Back extends BoxModel
{
    constructor()
    {
        super();
        // TRANSFORM
        this.position.set(0., 1.20, -0.5);
        this.rotation.x = this.rotation.x - Math.PI / 2.;
        this.scale.set(1.25, 0.3, 1.60);
        this.Diamante1 = new Diamante();
        this.Diamante2 = new Diamante();
        this.Diamante3 = new Diamante();
        this.Diamante4 = new Diamante();
        this.Diamante5 = new Diamante();
        this.Diamante6 = new Diamante();

        this.Diamante1.position.set(.25,-.50,0);
        this.Diamante2.position.set(-.25,-.50,0);
        this.Diamante3.position.set(0,-.50,0);

        this.Diamante4.position.set(.25,-.50,.30);
        this.Diamante5.position.set(-.25,-.50,.30);
        this.Diamante6.position.set(0,-.50,.30);

        
        this.add(this.Diamante1);
        this.add(this.Diamante2);
        this.add(this.Diamante3);
        this.add(this.Diamante4);
        this.add(this.Diamante5);
        this.add(this.Diamante6);
    }
}
class Diamante extends THREE.Mesh
{
    constructor()
    {
        super(new THREE.ConeGeometry(), new THREE.MeshBasicMaterial({wireframe: false}));
        this.scale.set(.05,.10,.05);
        this.rotation.x = this.rotation.x + 90;
    }
    setNormalMaterial()
    {
        this.material = new THREE.MeshNormalMaterial();
    }
    setWireframeMaterial()
    {
        this.matetrial = new THREE.MeshBasicMaterial({wireframe: false});
    }
    
}


class Leg extends BoxModel
{
    constructor()
    {
        super();
        // TRANSFORM
        this.scale.set(0.3, 2., 0.3);
    }
}

class Seat extends THREE.Mesh
{
    constructor()
    {
        super(new THREE.BoxGeometry(), new THREE.MeshBasicMaterial({wireframe: false}));
        // TRANSFORM
        this.scale.set(1.25, 0.3, 1.25);
        this.position.set(0.0, .65, 0.25);
    }
}



class Bench extends THREE.Group 
{
    constructor()
    {
        super();
        // CHILDREN
        this.seat = new Seat();
        this.leftFrontLeg = new Leg();
        this.rightFrontLeg = new Leg();
        this.leftBackLeg = new Leg();
        this.rightBackLeg = new Leg();
        this.anotherLeg = new Leg();
        // TRANSFORMS
        this.leftFrontLeg.position.set(-0.5, -0.5, 0.5);
        this.rightFrontLeg.position.set(0.5, -0.5, 0.5);
        this.leftBackLeg.position.set(-0.5, -0.5, -0.5);
        this.rightBackLeg.position.set(0.5, -0.5, -0.5);
        this.anotherLeg.position.set(0.0, -0.5, 0.0);
        // BUILD HIERARCHY
        this.add(this.seat);
        this.add(this.leftFrontLeg);
        this.add(this.rightFrontLeg);
        this.add(this.leftBackLeg);
        this.add(this.rightBackLeg);
        this.add(this.anotherLeg);
    }
}

class Chair extends THREE.Group 
{
    constructor(size = 1.)
    {
        super();
        // CHILDREN
        this.bench = new Bench();
        this.back = new Back();
        // BUILD HIERARCHY
        this.add(this.bench);
        this.add(this.back);
    }
}
       
function renderLoop() {
    renderer.render(scene, camera);
    // controls.update();
    if(sceneReady)
    {
         renderer.render(scene, camera);
         if (isRotating){
            rotateObject();
         }
         
    }
    requestAnimationFrame(renderLoop);
}