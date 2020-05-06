function toolsEventHandler(evt) {
  switch (evt) {
    case '0':
      planeOn();
      break;
    case '1':
      planeOff();
      break;
    case '2':
      printElements();
      break;
    case '3':
      createCube();
      break;
    case '4':
      break;
    case '5':
      createSphere();
      break;
    case '6':
    break;
    case '7':
      break;
    case '8':
      break;
    case '9':
      break;
    case '10':
      changeColor();
      break;
    case '11':
      deleteCube();
    break;
  }
}

function createCube() {
  var geometry = new THREE.BoxGeometry();
  var material = new THREE.MeshBasicMaterial({color: color});
  mesh = new THREE.Mesh(geometry, material);
  mesh.name="cubos" + cubos++;
  var x = parseFloat(document.getElementById("text-x").value);
  var y = parseFloat(document.getElementById("text-y").value);
  var z = parseFloat(document.getElementById("text-z").value);
  var base = parseFloat(document.getElementById("base-square").value);
  console.log(x);
  console.log(y);
  console.log(z);
  console.log(base);
  mesh.position.set(x, y, z);
  mesh.scale.set(base, base, base);
  scene.add(mesh);
  arr.push({"obj" : mesh, "figura" : "cube"});
  // sceneReady = true;
}

function createSphere() {
  var geometry = new THREE.SphereGeometry();
  var material = new THREE.MeshBasicMaterial( {color: color} );
  var sphere = new THREE.Mesh( geometry, material );
  sphere.name = "esferas" + esferas++;
  var x = parseFloat(document.getElementById("text-x").value);
  var y = parseFloat(document.getElementById("text-y").value);
  var z = parseFloat(document.getElementById("text-z").value);
  var radius = parseFloat(document.getElementById("sphere-radius").value);
  console.log(x);
  console.log(y);
  console.log(z);
  console.log(radius);
  sphere.position.set(x, y, z);
  sphere.scale.set(radius, radius, radius);
  scene.add(sphere);
  arr.push({"obj" : sphere, "figura" : "sphere"});
  // sceneReady = true;
}

function planeOn() {
  if(!hasPlane){
    var planeGeometry = new THREE.PlaneGeometry(10, 10, 10, 10);
    var planeMaterial = new THREE.MeshBasicMaterial({color: "white", wireframe: true});
    var plane = new THREE.Mesh(planeGeometry, planeMaterial);
    plane.rotation.x = -0.5 * Math.PI; 
    scene.add(plane);
    arr.push({"obj" : plane, "figura" : "plane"});
    // sceneReady = true;
    hasPlane = true;
  }
}

function planeOff() {
  if(hasPlane){
    for (var i = 0; i < arr.length; i++){
      if (arr[i].figura == "plane"){
        console.log(arr[i].obj);
        var plane = arr[i].obj;
        arr.splice(i);
        break;
      } 
    }
    scene.remove(plane);
    hasPlane = false;
  }
}

function printElements() {
  for (var i = 0; i < arr.length; i++){
    console.log(arr[i]);
    console.log("---------");
    // console.log(arr[i].obj.uuid);
    // console.log(scene.getObjectByName( arr[i].obj.name ));
  }
  scene.dispose();
}

function deleteCube(){
  console.log(arr.length);
  console.log(arr[arr.length-1]);
  var contador = arr.length-1;
  console.log(contador);
  for (var i = contador; i >= 0; i--){
    console.log(arr[i]);
    if (arr[i].figura == "cube"){
      console.log("elemento a borrar");
      var name = arr[i].obj.name;
      arr.splice(i);
      break;
    } 
  }
  console.log(scene.getObjectByName(name));
  scene.remove(scene.getObjectByName(name));
}

function deleteSphere(){
  console.log(arr.length);
  console.log(arr[arr.length-1]);
  var contador = arr.length-1;
  console.log(contador);
  for (var i = contador; i >= 0; i--){
    console.log(arr[i]);
    if (arr[i].figura == "sphere"){
      console.log("elemento a borrar");
      var name = arr[i].obj.name;
      arr.splice(i);
      break;
    } 
  }
  console.log(scene.getObjectByName(name));
  scene.remove(scene.getObjectByName(name));
}

function changeColor(){
  color = document.getElementById("color-palette").value;
  console.log(color);
}


function initEventHandler(evt)
{
	
}
