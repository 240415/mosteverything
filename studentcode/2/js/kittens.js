
let reset = document.getElementById("reset");
// This section contains some game constants. It is not super interesting
var GAME_WIDTH = 800;
var GAME_HEIGHT = 500;

var SPACE_WIDTH = 800;
var SPACE_HEIGHT = 500;

var ENEMY_BLUE_WIDTH = 75;
var ENEMY_BLUE_HEIGHT = 75;
var MAX_ENEMIES_BLUE = 7;

var ENEMY_ORANGE_WIDTH = 75;
var ENEMY_ORANGE_HEIGHT = 75;
var MAX_ENEMIES_ORANGE = 7;

var HEART_WIDTH = 20;
var HEART_HEIGHT = 17;

var PLAYER_WIDTH = 75;
var PLAYER_HEIGHT = 54;

// These two constants keep us from using "magic numbers" in our code
var LEFT_ARROW_CODE = 37;
var RIGHT_ARROW_CODE = 39;

// These two constants allow us to DRY
var MOVE_LEFT = 'left';
var MOVE_RIGHT = 'right';

var KEYS = {
    left: false,
    rigth: false,
    up: false,
    down: false
}

// Preload game images
var images = {};
['green meteor.png', 'space.jpg', 'aircratf3.png', 'orange meteor.png', 'heart.jpg'].forEach(imgName => {
    var img = document.createElement('img');
    img.src = 'images/' + imgName;
    images[imgName] = img;
});



// This section is where you will be doing most of your coding

class Space {
    constructor(xPos) {
        this.x = xPos;
        this.y = - (SPACE_HEIGHT);
        this.sprite = images['space.jpg'];
        this.speed = 0.25;
    }
    render(ctx) { 
        ctx.drawImage(this.sprite, this.x, this.y, SPACE_WIDTH, SPACE_HEIGHT);
    }

    update(timeDiff) {
        this.y = this.y + timeDiff * this.speed;
    }
}

class SpaceSample {
    constructor(xPos, yPos) {
        this.x = xPos;
        this.y = yPos;
        this.sprite = images['space.jpg'];
        this.speed = 0.25;
    }
    render(ctx) { 
        ctx.drawImage(this.sprite, this.x, this.y, SPACE_WIDTH, SPACE_HEIGHT);
    }

    update(timeDiff) {
        this.y = this.y + timeDiff * this.speed;
    }
}

class EnemyBlue {
    constructor(xPos) {
        this.x = xPos;
        this.y = -(ENEMY_BLUE_HEIGHT);
        this.sprite = images['green meteor.png'];

        // Each enemy should have a different speed 
        this.speed = Math.random() / 2 + 0.25;
    }
    render(ctx) { 
        ctx.drawImage(this.sprite, this.x, this.y, ENEMY_BLUE_WIDTH, ENEMY_BLUE_HEIGHT);
    }

    update(timeDiff) {
        this.y = this.y + timeDiff * this.speed;
    }
}

class EnemyORANGE {
    constructor(xPos) {
        this.x = xPos;
        this.y = -(ENEMY_ORANGE_HEIGHT);
        this.sprite = images['orange meteor.png'];

        // Each enemy should have a different speed 
        this.speed = Math.random() / 2 + 0.25;
    }
    render(ctx) { 
        ctx.drawImage(this.sprite, this.x, this.y, ENEMY_ORANGE_WIDTH, ENEMY_ORANGE_HEIGHT);
    }

    update(timeDiff) {
        this.y = this.y + timeDiff * this.speed;
    }
}

class Player{
    constructor() {
        this.x = 2 * PLAYER_WIDTH;
        this.y = GAME_HEIGHT - PLAYER_HEIGHT - 10;
        this.sprite = images['aircratf3.png'];
        this.speed = 0.70;
    }

    // This method is called by the game engine when left/right arrows are pressed
    move(direction) {
        if (direction === MOVE_LEFT && this.x > 0) {
            this.x = this.x - PLAYER_WIDTH;
        }
        else if (direction === MOVE_RIGHT && this.x < GAME_WIDTH - PLAYER_WIDTH) {
            this.x = this.x + PLAYER_WIDTH;
        }
    }
    update(timeDiff) {
        if(KEYS.left === true && this.x > 0){
            this.x = this.x - timeDiff * this.speed;
        } else if(KEYS.right === true && this.x < 725){
            this.x = this.x + timeDiff * this.speed;
        }   
    }

    render(ctx) { 
        ctx.drawImage(this.sprite, this.x, this.y,PLAYER_WIDTH, PLAYER_HEIGHT);
    }
}





/*
This section is a tiny game engine.
This engine will use your Enemy and Player classes to create the behavior of the game.
The engine will try to draw your game at 60 frames per second using the requestAnimationFrame function
*/
class Engine {
    constructor(element) {
        // Setup the player
        this.player = new Player();

        // Setup enemies, making sure there are always three
        this.setupSpace();
        this.setupEnemies();
        this.setupSapceSample();
    

        // Setup the <canvas> element where we will be drawing
        var canvas = document.createElement('canvas');
        canvas.width = GAME_WIDTH;
        canvas.height = GAME_HEIGHT;
        element.appendChild(canvas);

        this.ctx = canvas.getContext('2d');

        // Since gameLoop will be called out of context, bind it once here.
        this.gameLoop = this.gameLoop.bind(this);
    }

    /*
     The game allows for 5 horizontal slots where an enemy can be present.
     At any point in time there can be at most MAX_ENEMIES enemies otherwise the game would be impossible
     */
    setupEnemies() {
        if (!this.enemies) {
            this.enemies = [];
        }

        while (this.enemies.filter(e => !!e).length < MAX_ENEMIES_BLUE) {
            this.addEnemy();
        }
    }

    // This method finds a random spot where there is no enemy, and puts one in there
    addEnemy() {
        var enemySpots = GAME_WIDTH / ENEMY_BLUE_WIDTH;

        var enemySpot;
        // Keep looping until we find a free enemy spot at random
        while (enemySpot === undefined || this.enemies[enemySpot]) {
            enemySpot = Math.floor(Math.random() * enemySpots);
        }

        if(Math.random() > 0.5){
            this.enemies[enemySpot] = new EnemyBlue(enemySpot * ENEMY_BLUE_WIDTH);
        }else{
            this.enemies[enemySpot] = new EnemyORANGE(enemySpot * ENEMY_ORANGE_WIDTH);
        }
    }

    setupSapceSample(){
        if (!this.spacetiles) {
            this.spacetiles = [];
        }
        this.spacetiles[0] = new SpaceSample(0,0);
        this.spacetiles[1] = new SpaceSample(0, SPACE_HEIGHT);
        this.spacetiles[2] = new SpaceSample(0,SPACE_HEIGHT * 2);
        this.spacetiles[3] = new SpaceSample(0,SPACE_HEIGHT * 3);
        this.setupSpace();

    }
    setupSpace() {
        if (!this.spacetiles) {
            this.spacetiles = [];
        }

        while (this.spacetiles.filter(e => !!e).filter(e => e.y < -5).length === 0) {
            this.addSpace();
        }
    }
    addSpace() {
        var enemySpots = 6;

        var enemySpot;
        // Keep looping until we find a free enemy spot at random
        while (enemySpot === undefined || this.spacetiles[enemySpot]) {
            enemySpot = Math.floor(Math.random() * enemySpots);
        }
        this.spacetiles[enemySpot] = new Space(0);
    }

    // This method kicks off the game
    start() {

        this.score = 0;
        this.lastFrame = Date.now();

        // Listen for keyboard left/right and update the player
        document.addEventListener('keydown', e => {
            if (e.keyCode === LEFT_ARROW_CODE) {
                // this.player.move(MOVE_LEFT);
                KEYS.left = true;

            }
            else if (e.keyCode === RIGHT_ARROW_CODE) {
                // this.player.move(MOVE_RIGHT);
                KEYS.right = true;
            }
        });
        document.addEventListener('keyup', e => {
            if (e.keyCode === LEFT_ARROW_CODE) {
                KEYS.left = false;
            }
            else if (e.keyCode === RIGHT_ARROW_CODE) {
                KEYS.right = false;
            }
        });

        this.gameLoop();
    }

    /*
    This is the core of the game engine. The `gameLoop` function gets called ~60 times per second
    During each execution of the function, we will update the positions of all game entities
    It's also at this point that we will check for any collisions between the game entities
    Collisions will often indicate either a player death or an enemy kill

    In order to allow the game objects to self-determine their behaviors, gameLoop will call the `update` method of each entity
    To account for the fact that we don't always have 60 frames per second, gameLoop will send a time delta argument to `update`
    You should use this parameter to scale your update appropriately
     */
    gameLoop() {
        // Check how long it's been since last frame
        var currentFrame = Date.now();
        var timeDiff = currentFrame - this.lastFrame;

        // Increase the score!
        this.score += timeDiff;

        // Call update on all enemies
        this.spacetiles.forEach(enemy => enemy.update(timeDiff));
        this.enemies.forEach(enemy => enemy.update(timeDiff));
        this.player.update(timeDiff);
        // Draw everything!
        this.ctx.drawImage(images['space.jpg'], 0, 0);
        this.spacetiles.forEach(enemy => enemy.render(this.ctx)); // draw the star bg
        this.enemies.forEach(enemy => enemy.render(this.ctx)); // draw the enemies
        this.player.render(this.ctx); // draw the player

        // Check if any enemies should die
        this.spacetiles.forEach((enemy, enemyIdx) => {
            if (enemy.y > GAME_HEIGHT) {
                delete this.spacetiles[enemyIdx];
            }
        });
        this.enemies.forEach((enemy, enemyIdx) => {
            if (enemy.y > GAME_HEIGHT) {
                delete this.enemies[enemyIdx];
            }
        });
        this.setupSpace();
        this.setupEnemies();
        

        // Check if player is dead
        if (this.isPlayerDead()) {
            // If they are dead, then it's game over!
            this.ctx.font = 'bold 30px Impact';
            this.ctx.fillStyle = '#ffffff';
            this.ctx.fillText(this.score + ' GAME OVER', 5, 30);    
            let resetButton = document.createElement("button");
            resetButton.innerHTML = "Reset Game";
            reset.appendChild(resetButton);
            resetButton.addEventListener("click", (e) => { e.stopPropagation(); window.location.reload() });
        }
        else {
            // If player is not dead, then draw the score
            this.ctx.font = 'bold 30px Impact';
            this.ctx.fillStyle = '#ffffff';
            this.ctx.fillText(this.score, 5, 30);

            // Set the time marker and redraw
            this.lastFrame = Date.now();
            requestAnimationFrame(this.gameLoop);
        }
    }   
    hasCollidedWithEnemy(e){
        let playerXLeft = this.player.x;
        let playerXRight = this.player.x + (PLAYER_WIDTH - 10);
        let playerYHead = this.player.y;
        let playerYTail = this.player.y + (PLAYER_HEIGHT -10);
        let enemyXLeft = e.x;
        let enemyXRight = e.x + (ENEMY_BLUE_WIDTH -10);
        let enemyYHead = e.y + (ENEMY_BLUE_HEIGHT -10);
        let enemyYTail = e.y + 30;
        if (playerXRight >= enemyXLeft && playerXLeft <= enemyXRight && playerYHead <= enemyYHead && playerYTail >= enemyYTail){
            return true
            
        }else{
                return false
            }
        }
    isPlayerDead() {
        // // TODO: fix this function!  
        return this.enemies.some((e) => this.hasCollidedWithEnemy(e))
    }
}





// This section will start the game
var gameEngine = new Engine(document.getElementById('app'));
gameEngine.start();