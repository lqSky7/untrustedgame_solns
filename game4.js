function startLevel(map) {

    map.placePlayer(map.getWidth()-5, map.getHeight()-4);

    for (var y = 7; y <= map.getHeight() - 3; y++) {
        map.placeObject(7, y, 'block');
        map.placeObject(map.getWidth() - 3, y, 'block');
    }
	map.placeObject(map.getWidth()-5, 20, 'exit')
    for (var x = 7; x <= map.getWidth() - 3; x++) {
        map.placeObject(x, 7, 'block');
        map.placeObject(x, map.getHeight() - 3, 'block');
    }

    map.placeObject(map.getWidth() - 5, 5, 'exit');
}


// Placed another exit... probably not the optimal solution?