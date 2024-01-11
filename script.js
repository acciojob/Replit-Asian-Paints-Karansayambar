document.getElementById('change_button').addEventListener('click', function() {
    // Get input values
    var blockId = document.getElementById('block_id').value;
    var color = document.getElementById('color_id').value;

    // Reset all grid items to transparent
    var gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach(function(item) {
        item.style.backgroundColor = 'transparent';
    });

    // Change the background color of the specified block ID
    var targetBlock = document.getElementById('grid-item-' + blockId);
    if (targetBlock) {
        targetBlock.style.backgroundColor = color;
    } else {
        alert('Invalid Block ID');
    }
});

document.getElementById('reset_button').addEventListener('click', function() {
    // Reset all grid items to transparent
    var gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach(function(item) {
        item.style.backgroundColor = 'transparent';
    });
});