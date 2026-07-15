// game.js

const game = document.getElementById("game");

const Game = {
    score: 0,
    coins: 0,
    health: 100,
    level: 1,
    running: true,
    zombies: [],
    bullets: [],
    effects: [],
    boss: null
};

// HUD
const scoreText = document.getElementById("score");
const healthText = document.getElementById("health");
const coinText = document.getElementById("coins");

function updateHUD() {
    scoreText.innerHTML = "⭐ " + Game.score;
    healthText.innerHTML = "❤️ " + Game.health;
    coinText.innerHTML = "🪙 " + Game.coins;
}

function addScore(points = 1) {
    Game.score += points;
    updateHUD();
}

function addCoins(value = 1) {
    Game.coins += value;
    updateHUD();
}

function damagePlayer(value = 10) {
    Game.health -= value;

    if (Game.health < 0)
        Game.health = 0;

    updateHUD();

    if (Game.health <= 0)
        gameOver();
}

function nextLevel() {

    if (Game.score >= Game.level * 20) {
        Game.level++;
        alert("🎉 Level " + Game.level);
    }

}

function gameOver() {

    Game.running = false;

    alert(
        "💀 GAME OVER\n\n" +
        "⭐ Score : " + Game.score +
        "\n🪙 Coins : " + Game.coins
    );

    location.reload();

}

function gameLoop() {

    if (!Game.running)
        return;

    nextLevel();

    requestAnimationFrame(gameLoop);

}

updateHUD();
gameLoop();
