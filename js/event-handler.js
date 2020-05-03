function toolsEvent(evt) 
{
	// MODEL
    // GEOMETRY
    var geometry = new THREE.BoxGeometry();        
    // MATERIAL
    var material = new THREE.MeshNormalMaterial();  
    // MESH (GEOMETRY + MATERIAL)
  	mesh = new THREE.Mesh(geometry, material);
  	scene.add(mesh);
  	sceneReady = true;
}


function initEventHandler(evt)
{
	
}
