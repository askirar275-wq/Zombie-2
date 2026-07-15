// coins.js

Game.coins = Number(localStorage.getItem("coins")) || 0;

function saveCoins() {
    localStorage.setItem("coins", Game.coins);
}

function addCoins(amount = 1) {
    Game.coins += amount;
    saveCoins();
    updateHUD();
}

function spendCoins(amount) {

    if (Game.coins >= amount) {

        Game.coins -= amount;
        saveCoins();
        updateHUD();

        return true;

    }

    return false;

}

function createCoin(x, y) {

    const coin = document.createElement("div");

    coin.className = "coin";
    coin.innerHTML = "🪙";

    coin.style.left = x + "px";
    coin.style.top = y + "px";

    game.appendChild(coin);

    setTimeout(() => {

        coin.remove();

    }, 1500);

}
