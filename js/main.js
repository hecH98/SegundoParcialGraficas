"use strict"
var canvas;
var renderer;
var scene;
var camera;
var light;
var mesh;
var sceneReady = false;

function main()
{
    // RENDERER
    canvas = document.getElementById("canvas");
    renderer = new THREE.WebGLRenderer({canvas: canvas});
    renderer.setSize(canvas.width, canvas.height);
    renderer.setClearColor("black");                    

    // LIGHTS
    light = new THREE.AmbientLight();    

    // CAMERAS
    camera = new THREE.PerspectiveCamera(60., canvas.width / canvas.height, 0.01, 10000.);  // CAMERA
    camera.position.set(0., 0., 5.);           

    // SCENE
    scene = new THREE.Scene();                                 
    scene.add(camera);
    scene.add(light);

    // EVENTS
    initEventHandler();

    // ACTION
    requestAnimationFrame(renderLoop);              // RENDER LOOP
}
       
function renderLoop() {
    if(sceneReady)
    {
         renderer.render(scene, camera);
         mesh.rotation.x = mesh.rotation.x + 0.01;
         mesh.rotation.y = mesh.rotation.y + 0.01;
    }
    requestAnimationFrame(renderLoop);
}