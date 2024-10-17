/************************
 * validationEngaged.js *
 ************************
 *
 * They're really on to us now! The validateLevel function
 * has been activated to enforce constraints on what you can
 * do. In this case, you're not allowed to remove any blocks.
 *
 * They're doing all they can to keep you here. But you
 * can still outsmart them.
 */

 function startLevel(map) {
    map.placePlayer(map.getWidth()-7, map.getHeight()-5);



//    - This ensures proper incrementation since '++' doesn't leave any spaces.

// 2. Created another loop to print boxes:
//    - This is necessary because, unlike Level 1, the solution must match the required number of boxes exactly.
  


    for (var y = 10; y <= map.getHeight() - 3; y+=2) {
        map.placeObject(5, y, 'block');
        map.placeObject(map.getWidth() - 5, y, 'block');
        
    }

	for(let k = 0; k<=12;k++){
    map.placeObject(k,k+1,'block')
    }

    for (var x = 5; x <= map.getWidth() - 5; x++) {
        map.placeObject(x, 10, 'block');
        map.placeObject(x, map.getHeight() - 3, 'block');
    }

    map.placeObject(7, 5, 'exit');
}

function validateLevel(map) {
    var numBlocks = 2 * (map.getHeight()-13) + 2 * (map.getWidth()-10);

    map.validateAtLeastXObjects(numBlocks, 'block');
    map.validateExactlyXManyObjects(1, 'exit');
}
	



