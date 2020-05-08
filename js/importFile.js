import {OBJLoader2} from 'https://threejsfundamentals.org/threejs/resources/threejs/r115/examples/jsm/loaders/OBJLoader2.js';

function importModel(){
    const objLoader = new OBJLoader2();
    objLoader.load('https://threejsfundamentals.org/threejs/resources/models/windmill/windmill.obj', (root) => {
      scene.add(root);
    });
}