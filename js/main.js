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
var cubos, esferas, cilindros, conos, tetrahedros, torus, torusknots, icosahedrons, dodecahedrons, octahedrons, geometriasCompuestas;
var color;

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
    
    color = document.getElementById("color-palette").value;
    // RENDERER
    canvas = document.getElementById("canvas");
    renderer = new THREE.WebGLRenderer({canvas: canvas});
    renderer.setSize(canvas.width, canvas.height);
    renderer.setClearColor("black");                    

    // LIGHTS
    light = new THREE.AmbientLight();

    // CAMERAS
    camera = new THREE.PerspectiveCamera(60., canvas.width / canvas.height, 0.01, 10000.);  // CAMERA
    camera.position.set(-3, 3, 10);  
    camera.up = new THREE.Vector3(0, 1, 0);
    camera.lookAt(new THREE.Vector3(0, 0, 0));  
    
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
       
function renderLoop() {
    renderer.render(scene, camera);
    if(sceneReady)
    {
         renderer.render(scene, camera);
         mesh.rotation.x = mesh.rotation.x + 0.01;
         mesh.rotation.y = mesh.rotation.y + 0.01;
    }
    requestAnimationFrame(renderLoop);
}