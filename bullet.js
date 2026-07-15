// bullet.js

function shootBullet() {

    const bullet = {
        x: player.x + 22,
        y: player.y,
        speed: 10,
        damage: 1,
        element: document.createElement("div")
    };

    bullet.element.className = "bullet";
    bullet.element.innerHTML = "🔸";

    game.appendChild(bullet.element);

    Game.bullets.push(bullet);
}

// 🔫 Auto Fire
setInterval(shootBullet, 250);

function updateBullets() {

    for (let i = Game.bullets.length - 1; i >= 0; i--) {

        let b = Game.bullets[i];

        b.y -= b.speed;

        b.element.style.left = b.x + "px";
        b.element.style.top = b.y + "px";

        // Screen से बाहर
        if (b.y < -40) {

            b.element.remove();
            Game.bullets.splice(i,1);
            continue;

        }

        // Zombie Hit
        for (let j = Game.zombies.length - 1; j >= 0; j--) {

            let z = Game.zombies[j];

            if (
                Math.abs(b.x - z.x) < 30 &&
                Math.abs(b.y - z.y) < 30
            ) {

                // 💥 Hit Effect
                if(typeof createHitEffect==="function"){
                    createHitEffect(z.x,z.y);
                }

                // ⭐ Score
                addScore(1);

                // 🪙 Coins
                addCoins(1);

                // Zombie हटाओ
                z.element.remove();
                Game.zombies.splice(j,1);

                // Bullet हटाओ
                b.element.remove();
                Game.bullets.splice(i,1);

                break;
            }

        }

    }

}

// 60 FPS Update
setInterval(updateBullets,16);
