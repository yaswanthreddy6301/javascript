// Step 1: Set up the game world
const rooms = {
    'hall': {
        description: 'You are in a hall. There are doors to the east and west.',
        items: [],
        directions: { 'east': 'bedroom', 'west': 'kitchen' }
    },
    'kitchen': {
        description: 'You are in a kitchen. The smell of food is in the air. There is a door to the east.',
        items: ['knife'],
        directions: { 'east': 'hall' }
    },
    'bedroom': {
        description: 'You are in a bedroom. It is cozy here. There is a door to the west.',
        items: ['pillow'],
        directions: { 'west': 'hall' }
    }
};

let currentRoom = 'hall';
let inventory = [];

// Step 2: Functions for moving and interacting

// 1. Moving between rooms
function move(direction) {
    let room = rooms[currentRoom];
    if (direction in room.directions) {
        currentRoom = room.directions[direction];
        displayRoom();
    } else {
        console.log('You cannot go that way.');
    }
}

// 2. Looking around
function look() {
    let room = rooms[currentRoom];
    console.log(room.description);
    if (room.items.length > 0) {
        console.log('You see: ' + room.items.join(', '));
    } else {
        console.log('There is nothing of interest here.');
    }
}

// 3. Picking up items
function pick(item) {
    let room = rooms[currentRoom];
    let itemIndex = room.items.indexOf(item);
    if (itemIndex !== -1) {
        inventory.push(item);
        room.items.splice(itemIndex, 1);
        console.log(`You picked up the ${item}.`);
    } else {
        console.log(`There is no ${item} here.`);
    }
}

// 4. Showing inventory
function showInventory() {
    if (inventory.length > 0) {
        console.log('You are carrying: ' + inventory.join(', '));
    } else {
        console.log('Your inventory is empty.');
    }
}

// Step 3: Command processing
function processCommand() {
    const input = document.getElementById('command').value.toLowerCase().split(' ');
    document.getElementById('command').value = '';  // Clear the input field
    
    if (input.length === 0) return;
    
    const action = input[0];
    const target = input[1];
    
    switch (action) {
        case 'go':
            if (target) move(target);
            else console.log('Go where?');
            break;
        case 'look':
            look();
            break;
        case 'get':
            if (target) pick(target);
            else console.log('Get what?');
            break;
        case 'inventory':
            showInventory();
            break;
        case 'help':
            console.log('Commands: go [direction], look, get [item], inventory, help');
            break;
        default:
            console.log('Unknown command. Try "help" for a list of commands.');
            break;
    }
}

function displayRoom() {
    let room = rooms[currentRoom];
    document.getElementById('game-output').innerText = room.description;
}

// Start the game by showing the initial room description
displayRoom();
