// controls.js

let moveLeft = false;
let moveRight = false;

const joystick = document.createElement("div");
joystick.id = "joystick";

const stick = document.createElement("div");
stick.id = "stick";

joystick.appendChild(stick);
document.body.appendChild(joystick);

function movePlayer() {

    if (moveLeft) {
        player.x -= player.speed;
    }

    if (moveRight) {
        player.x += player.speed;
    }

    if (player.x < 0)
        player.x = 0;

    if (player.x > window.innerWidth - 60)
        player.x = window.innerWidth - 60;

    updatePlayer();

    requestAnimationFrame(movePlayer);
}

movePlayer();

joystick.addEventListener("touchstart", e => {

    e.preventDefault();

});

joystick.addEventListener("touchmove", e => {

    const rect = joystick.getBoundingClientRect();

    const x = e.touches[0].clientX - rect.left;

    if (x < 60)
        moveLeft = true;
    else
        moveRight = true;

});

joystick.addEventListener("touchend", () => {

    moveLeft = false;
    moveRight = false;

});
