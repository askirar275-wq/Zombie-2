// player.js

const player = {
    x: window.innerWidth / 2,
    y: window.innerHeight - 120,
    speed: 8,
    emoji: "🪖",
    element: null
};

function createPlayer() {
    player.element = document.getElementById("player");
    player.element.innerHTML = player.emoji;
    updatePlayer();
}

function updatePlayer() {
    player.element.style.left = player.x + "px";
    player.element.style.top = player.y + "px";
}

window.addEventListener("touchmove", (e) => {
    player.x = e.touches[0].clientX - 30;

    if (player.x < 0) player.x = 0;
    if (player.x > window.innerWidth - 60)
        player.x = window.innerWidth - 60;

    updatePlayer();
});

window.addEventListener("keydown", (e) => {

    if (e.key === "ArrowLeft")
        player.x -= player.speed;

    if (e.key === "ArrowRight")
        player.x += player.speed;

    if (player.x < 0) player.x = 0;
    if (player.x > window.innerWidth - 60)
        player.x = window.innerWidth - 60;

    updatePlayer();
});

createPlayer();
