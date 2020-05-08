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
var cubos, esferas, cilindros, conos, tetrahedros, torus, torusknots, icosahedrons, dodecahedrons, octahedrons, geometriasCompuestas, extras;
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

    
    color = document.getElementById("color-palette").value;
    // RENDERER
    canvas = document.getElementById("canvas");
    renderer = new THREE.WebGLRenderer({canvas: canvas});
    renderer.setSize(canvas.width, canvas.height);
    document.body.appendChild(renderer.domElement);
    renderer.setClearColor("black");                    

    // LIGHTS
    var light = new THREE.AmbientLight( 0x404040 ); // soft white light

    // CAMERAS
    camera = new THREE.PerspectiveCamera(60., canvas.width / canvas.height, 0.01, 10000.);  // CAMERA
    camera.position.set(-3, 3, 10);
    camera.up = new THREE.Vector3(0, 1, 0);
    camera.lookAt(new THREE.Vector3(0, 0, 0));

    //Orbit Controlls
    // controls = new THREE.OrbitControls(camera, renderer.domElement);
    // controls.enableDamping = true;
    // controls.campingFactor = 0.25;
    // controls.enableZoom = true;
    
    // SCENE
    scene = new THREE.Scene();                                 
    scene.add(camera);
    scene.add(light);

    // EVENTS
    // initEventHandler();

    // ACTION
    requestAnimationFrame(renderLoop);              // RENDER LOOP

    
    
}

function onMouseMove( event ) {
    event.preventDefault();
    mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
    mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
}

function playPauseRotation(){
    if (isRotating){
        isRotating = false;
    }
    else{
        isRotating = true;
    }
    
}

function rotateObject() {
    
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