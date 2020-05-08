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

function selectMaterial(material){
    switch(material){
      case 1:
        materialSelected = new THREE.MeshNormalMaterial();
        break;
      case 2:
        materialSelected = new THREE.MeshDepthMaterial({color: "gray"});
        break;
      case 3:
        materialSelected = new THREE.MeshDistanceMaterial({color: "gray"});
        break;
      case 4:
        materialSelected = new THREE.MeshLambertMaterial({color: "blue", emissive: "skyblue", emissiveIntensity: 0.5});
        
        break;
      case 5:
        materialSelected = new THREE.MeshMatcapMaterial({color: "red"});
        break;
      case 6:
        materialSelected = new THREE.MeshPhongMaterial({color: "blue", specular: "white", shininess: 2});
        break;
      case 7:
        materialSelected = new THREE.MeshPhysicalMaterial({color: "purple"});
        break;
      case 8:
        materialSelected = new THREE.MeshToonMaterial({color: "orange"});
        break;
      default:
        new THREE.MeshBasicMaterial({color: color, wireframe: false });
        break;
    }
}


function createCube() {
  var geometry = new THREE.BoxGeometry();
  var isWire = document.getElementById("radio-wire").checked;
  
  if (!document.getElementById("radio-material").checked){
    var material = new THREE.MeshBasicMaterial({color: color, wireframe: isWire });
  }else{
    var material = materialSelected;
  }
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
  addCombo(cube.name);
  addComboEdit(cube.name);
  mesh = cube;
  sceneReady = true;
}

function createSphere() {
  var geometry = new THREE.SphereGeometry();
  var isWire = document.getElementById("radio-wire").checked;
  if (!document.getElementById("radio-material").checked){
    var material = new THREE.MeshBasicMaterial({color: color, wireframe: isWire });
  }else{
    var material = materialSelected;
  }
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
  addCombo(sphere.name);
  addComboEdit(sphere.name);
  mesh = sphere;
  sceneReady = true;
  
}

function createCylinder(){
  var geometry = new THREE.CylinderGeometry();
  var isWire = document.getElementById("radio-wire").checked;
  if (!document.getElementById("radio-material").checked){
    var material = new THREE.MeshBasicMaterial({color: color, wireframe: isWire });
  }else{
    var material = materialSelected;
  }
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
  addCombo(cylinder.name);
  addComboEdit(cylinder.name);
  mesh = cylinder;
  sceneReady = true;
}

function crearObjetoCompuesto() {
  // var g = new geometru();
  // g.name = "geometriaCompuesta" = geometriasCompuestas++;
  // arr.push({"obj" : g, "figura" : "geometriaCompuesta"});
}

function createCone(){
  var geometry = new THREE.ConeGeometry();
  var isWire = document.getElementById("radio-wire").checked;
  if (!document.getElementById("radio-material").checked){
    var material = new THREE.MeshBasicMaterial({color: color, wireframe: isWire });
  }else{
    var material = materialSelected;
  }
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
  addCombo(cone.name);
  addComboEdit(cone.name);
  mesh = cone;
  sceneReady = true;
}

function createSilla(){
  var silla = new Chair();
  silla.name = "silla" + sillas++;
  var x = parseFloat(document.getElementById("text-x").value);
  var y = parseFloat(document.getElementById("text-y").value);
  var z = parseFloat(document.getElementById("text-z").value);
  var size = parseFloat(document.getElementById("silla-size").value);
  silla.position.set(x, y, z);
  silla.scale.set(size, size, size);
  scene.add(silla);
  arr.push({"obj" : silla, "figura" : "silla"});
  addCombo(silla.name);
  addComboEdit(silla.name);
  mesh = silla;
  sceneReady = true;
}


function createTetrahedron(){
  var geometry = new THREE.TetrahedronGeometry();
  var isWire = document.getElementById("radio-wire").checked;
  if (!document.getElementById("radio-material").checked){
    var material = new THREE.MeshBasicMaterial({color: color, wireframe: isWire });
  }else{
    var material = materialSelected;
  }
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
  addCombo(tetrahedron.name);
  addComboEdit(tetrahedron.name);
  mesh = tetrahedron;
  sceneReady = true;
}

function createTorus(){
  var geometry = new THREE.TorusGeometry();
  var isWire = document.getElementById("radio-wire").checked;
  if (!document.getElementById("radio-material").checked){
    var material = new THREE.MeshBasicMaterial({color: color, wireframe: isWire });
  }else{
    var material = materialSelected;
  }
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
  addCombo(torus2.name);
  addComboEdit(torus2.name);
  mesh = torus2;
  sceneReady = true;
}

function createTorusKnot(){
  var geometry = new THREE.TorusKnotGeometry();
  var isWire = document.getElementById("radio-wire").checked;
  if (!document.getElementById("radio-material").checked){
    var material = new THREE.MeshBasicMaterial({color: color, wireframe: isWire });
  }else{
    var material = materialSelected;
  }
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
  addCombo(torusknot.name);
  addComboEdit(torusknot.name);
  mesh = torusknot;
  sceneReady = true;
}

function createIcosahedron(){
  var geometry = new THREE.IcosahedronGeometry();
  var isWire = document.getElementById("radio-wire").checked;
  if (!document.getElementById("radio-material").checked){
    var material = new THREE.MeshBasicMaterial({color: color, wireframe: isWire });
  }else{
    var material = materialSelected;
  }
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
  addCombo(icosahedron.name);
  addComboEdit(icosahedron.name);
  mesh = icosahedron;
  sceneReady = true;
}

function createDodecahedron(){
  var geometry = new THREE.DodecahedronGeometry();
  var isWire = document.getElementById("radio-wire").checked;
  if (!document.getElementById("radio-material").checked){
    var material = new THREE.MeshBasicMaterial({color: color, wireframe: isWire });
  }else{
    var material = materialSelected;
  }
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
  addCombo(dodecahedron.name);
  addComboEdit(dodecahedron.name);
  mesh = dodecahedron;
  sceneReady = true;
}

function createOctahedron(){
  var geometry = new THREE.OctahedronGeometry();
  var isWire = document.getElementById("radio-wire").checked;
  if (!document.getElementById("radio-material").checked){
    var material = new THREE.MeshBasicMaterial({color: color, wireframe: isWire });
  }else{
    var material = materialSelected;
  }
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
  addCombo(octahedron.name);
  addComboEdit(octahedron.name);
  mesh = octahedron;
  sceneReady = true;
}

function import3DModel(){

  var manager = new THREE.LoadingManager();
  manager.onProgress = function ( item, loaded, total ) {
      console.log( item, loaded, total );
  };
  var loader = new THREE.OBJLoader( manager );
  loader.load( '/3DModels/avion.obj', function ( object ) {

  object.traverse( function ( child ) {

      if ( child instanceof THREE.Mesh ) {
          // child.material.map = texture;
      }
  });
  var x = parseFloat(document.getElementById("text-x").value);
  var y = parseFloat(document.getElementById("text-y").value);
  var z = parseFloat(document.getElementById("text-z").value);
  var size = parseFloat(document.getElementById("extra-size").value);
  object.position.set(x, y, z);
  object.position.set(size,size,size)
  scene.add(object);
  object.name = "extra" + extras++;
  arr.push({"obj" : object, "figura" : "extra"});
  addCombo(object.name);
  addComboEdit(object.name);
});
}

function seleccionaModelo(){

}

function planeOn() {
  if(!hasPlane){
    var planeGeometry = new THREE.PlaneGeometry(10, 10, 10, 10);
    var planeMaterial = new THREE.MeshBasicMaterial({color: "white", wireframe: true});
    var plane = new THREE.Mesh(planeGeometry, planeMaterial);
    plane.name = "piso0"
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
      if (arr[i].obj.name == "piso0"){
        console.log(arr[i].obj);
        var plane = arr[i].obj;
        arr.splice(i);
        break;
      } 
    }
    scene.remove(scene.getObjectByName("piso0"));
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

function addCombo(name) {
  if(arr.length < 1) return;
  var combo = document.getElementById("comboBox");
  if(name !== "piso0"){
    var option = document.createElement("option");
    option.text = name;
    option.value = name;
    try {
        combo.add(option, null); //Standard
    }catch(error) {
        combo.add(option); // IE only
    }
  }
}

function addComboEdit(name) {
  if(arr.length < 1) return;
  var combo2 = document.getElementById("comboBoxEdit");
  if(name !== "piso0"){
    var option2 = document.createElement("option");
    option2.text = name;
    option2.value = name;
    try {
        combo2.add(option2, null); //Standard
    }catch(error) {
        combo2.add(option2); // IE only
    }
  }
}

function deleteFigure(){
  var name = document.getElementById("comboBox").value;
  console.log(name);
  if(name === "") return;
  var i;
  for ( i= 0; i < arr.length; i++){
    if (arr[i].obj.name == name){
      console.log("elemento a borrar");
      console.log(i);
      console.log(arr[i]);
      arr.splice(i);
      // renderLoop();
      break;
    } 
  }
  var x = document.getElementById("comboBox");
  x.remove(x.selectedIndex);
  var x2 = document.getElementById("comboBoxEdit");
  x2.remove(i);
  console.log(scene.getObjectByName(name));
  scene.remove(scene.getObjectByName(name));
}

function editFigure(){
  var name = document.getElementById("comboBoxEdit").value;
  console.log("objeto a editar");
  console.log(name);
  var objeto = scene.getObjectByName(name);
  var x = parseFloat(document.getElementById("new-text-x").value);
  var y = parseFloat(document.getElementById("new-text-y").value);
  var z = parseFloat(document.getElementById("new-text-z").value);
  var size = parseFloat(document.getElementById("new-size").value);
  objeto.position.set(x, y, z);
  objeto.scale.set(size, size, size);
}

function changeColor(){
  color = document.getElementById("color-palette").value;
  console.log(color);
}

