/**
 * This code places 'block' objects on the map in a specific pattern.
 * 
 * The changes made are just changing the increment of y in the loop to increase the gap between the number of boxes.
 * 
 * The first loop places 'block' objects at the left and right edges of the map, starting from y = 3 and incrementing by 2.
 * 
 * The second loop places 'block' objects at the top and bottom edges of the map, starting from x = 5 and incrementing by 1.
 */
for (var y = 3; y <= map.getHeight() - 10; y+=2) {
    map.placeObject(4, y, 'block');
    map.placeObject(map.getWidth() - 5, y, 'block');
}

for (var x = 5; x <= map.getWidth() - 5; x++) {
    map.placeObject(x, 3, 'block');

    map.placeObject(x, map.getHeight() - 10, 'block');
}

// The changes made are just changing the increment of y in the loop to increase the gap between the number of boxes.