function startLevel(map) {
    map.placePlayer(7, 5);

    var maze = new ROT.Map.DividedMaze(map.getWidth(), map.getHeight());

    maze.create( function (x, y, mapValue) {

        // don't write maze over player
        if (map.getPlayer().atLocation(x, y)) {
            return 0;
        }

        else if (mapValue === 1) { //0 is empty space 1 is wall
            map.placeObject(x, y, 'block');
        }
        else {
            map.placeObject(x, y, 'empty');
        }
    });

    map.placeObject(map.getWidth()-4, map.getHeight()-4, 'block');
    map.placeObject(map.getWidth()-6, map.getHeight()-4, 'block');
    map.placeObject(map.getWidth()-5, map.getHeight()-5, 'block');
    map.placeObject(map.getWidth()-5, map.getHeight()-3, 'block');
    // This line is the solution to puzzle 2, we place another exit near us.
    map.placeObject(5, 5, 'exit');
    
    // Optionally, we can reinitialize the maze using (1, 1) to make the map empty.
    // Note that we cannot remove blocks around the given exit; rewriting those places results in an error.
    map.placeObject(map.getWidth()-5, map.getHeight()-4, 'exit');
}
	