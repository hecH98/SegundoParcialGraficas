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
  var cube = new THREE.Mesh(geometry, material);
  cube.name="cubos" + cubos++;
  var x = parseFloat(document.getElementById("text-x").value);
  var y = parseFloat(document.getElementById("text-y").value);
  var z = parseFloat(document.getElementById("text-z").value);
  var base = parseFloat(document.getElementById("base-square").value);
  console.log(x);
  console.log(y);
  console.log(z);
  console.log(base);
  cube.position.set(x, y, z);
  cube.scale.set(base, base, base);
  scene.add(cube);
  arr.push({"obj" : cube, "figura" : "cube"});
  mesh = cube;
  sceneReady = true;
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
  mesh = sphere;
  sceneReady = true;
}

function createCylinder(){
  var geometry = new THREE.CylinderGeometry();
  var material = new THREE.MeshBasicMaterial( {color: color} );
  var cylinder = new THREE.Mesh( geometry, material );
  cylinder.name = "cilindros" + cilindros++;
  var x = parseFloat(document.getElementById("text-x").value);
  var y = parseFloat(document.getElementById("text-y").value);
  var z = parseFloat(document.getElementById("text-z").value);
  var size = parseFloat(document.getElementById("cylinder-size").value);
  cylinder.position.set(x, y, z);
  cylinder.scale.set(size, size, size);
  scene.add( cylinder );
  arr.push({"obj" : cylinder, "figura" : "cylinder"});
  mesh = cylinder;
  sceneReady = true;
}

function createCone(){
  var geometry = new THREE.ConeGeometry();
  var material = new THREE.MeshBasicMaterial( {color: color} );
  var cone = new THREE.Mesh( geometry, material );
  cone.name = "conos" + conos++;
  var x = parseFloat(document.getElementById("text-x").value);
  var y = parseFloat(document.getElementById("text-y").value);
  var z = parseFloat(document.getElementById("text-z").value);
  var size = parseFloat(document.getElementById("cone-size").value);
  cone.position.set(x, y, z);
  cone.scale.set(size, size, size);
  scene.add( cone );
  arr.push({"obj" : cone, "figura" : "cone"});
  mesh = cone;
  sceneReady = true;
}

function createTetrahedron(){
  var geometry = new THREE.TetrahedronGeometry();
  var material = new THREE.MeshBasicMaterial( {color: color} );
  var tetrahedron = new THREE.Mesh( geometry, material );
  tetrahedron.name = "tetrahedros" + tetrahedros++;
  var x = parseFloat(document.getElementById("text-x").value);
  var y = parseFloat(document.getElementById("text-y").value);
  var z = parseFloat(document.getElementById("text-z").value);
  var size = parseFloat(document.getElementById("tetrahedron-size").value);
  tetrahedron.position.set(x, y, z);
  tetrahedron.scale.set(size, size, size);
  scene.add( tetrahedron );
  arr.push({"obj" : tetrahedron, "figura" : "tetrahedron"});
  mesh = tetrahedron;
  sceneReady = true;
}

function createTorus(){
  var geometry = new THREE.TorusGeometry();
  var material = new THREE.MeshBasicMaterial( { color: color } );
  var torus2 = new THREE.Mesh( geometry, material );
  torus2.name = "torus" + torus++;
  var x = parseFloat(document.getElementById("text-x").value);
  var y = parseFloat(document.getElementById("text-y").value);
  var z = parseFloat(document.getElementById("text-z").value);
  var size = parseFloat(document.getElementById("torus-size").value);
  torus2.position.set(x, y, z);
  torus2.scale.set(size, size, size);
  scene.add( torus2 );
  arr.push({"obj" : torus2, "figura" : "torus"});
  mesh = torus2;
  sceneReady = true;
}

function createTorusKnot(){
  var geometry = new THREE.TorusKnotGeometry();
  var material = new THREE.MeshBasicMaterial( { color: color } );
  var torusknot = new THREE.Mesh( geometry, material );
  torusknot.name = "torusknot" + torusknots++;
  var x = parseFloat(document.getElementById("text-x").value);
  var y = parseFloat(document.getElementById("text-y").value);
  var z = parseFloat(document.getElementById("text-z").value);
  var size = parseFloat(document.getElementById("torusknot-size").value);
  torusknot.position.set(x, y, z);
  torusknot.scale.set(size, size, size);
  scene.add( torusknot );
  arr.push({"obj" : torusknot, "figura" : "torusknot"});
  mesh = torusknot;
  sceneReady = true;
}

function createIcosahedron(){
  var geometry = new THREE.IcosahedronGeometry();
  var material = new THREE.MeshBasicMaterial( { color: color } );
  var icosahedron = new THREE.Mesh( geometry, material );
  icosahedron.name = "icosahedron" + icosahedrons++;
  var x = parseFloat(document.getElementById("text-x").value);
  var y = parseFloat(document.getElementById("text-y").value);
  var z = parseFloat(document.getElementById("text-z").value);
  var size = parseFloat(document.getElementById("icosahedron-size").value);
  icosahedron.position.set(x, y, z);
  icosahedron.scale.set(size, size, size);
  scene.add( icosahedron );
  arr.push({"obj" : icosahedron, "figura" : "icosahedron"});
  mesh = icosahedron;
  sceneReady = true;
}

function createDodecahedron(){
  var geometry = new THREE.DodecahedronGeometry();
  var material = new THREE.MeshBasicMaterial( { color: color } );
  var dodecahedron = new THREE.Mesh( geometry, material );
  dodecahedron.name = "icosahedron" + dodecahedrons++;
  var x = parseFloat(document.getElementById("text-x").value);
  var y = parseFloat(document.getElementById("text-y").value);
  var z = parseFloat(document.getElementById("text-z").value);
  var size = parseFloat(document.getElementById("dodecahedron-size").value);
  dodecahedron.position.set(x, y, z);
  dodecahedron.scale.set(size, size, size);
  scene.add( dodecahedron );
  arr.push({"obj" : dodecahedron, "figura" : "dodecahedron"});
  mesh = dodecahedron;
  sceneReady = true;
}

function createOctahedron(){
  var geometry = new THREE.OctahedronGeometry();
  var material = new THREE.MeshBasicMaterial( { color: color } );
  var octahedron = new THREE.Mesh( geometry, material );
  octahedron.name = "octahedron" + octahedrons++;
  var x = parseFloat(document.getElementById("text-x").value);
  var y = parseFloat(document.getElementById("text-y").value);
  var z = parseFloat(document.getElementById("text-z").value);
  var size = parseFloat(document.getElementById("octahedron-size").value);
  octahedron.position.set(x, y, z);
  octahedron.scale.set(size, size, size);
  scene.add( octahedron );
  arr.push({"obj" : octahedron, "figura" : "octahedron"});
  mesh = octahedron;
  sceneReady = true;
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
  }
  scene.dispose();
}

function deleteFigure(figura){
  console.log(arr.length);
  console.log(arr[arr.length-1]);
  var contador = arr.length-1;
  console.log(contador);
  for (var i = contador; i >= 0; i--){
    if (arr[i].figura == figura){
      console.log("elemento a borrar");
      console.log(arr[i]);
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

