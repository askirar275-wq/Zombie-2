// zombie.js

const zombieTypes = ["🧟", "🧟‍♀️", "☠️"];

function spawnZombie() {

    const zombie = {
        x: Math.random() * (window.innerWidth - 60),
        y: -80,
        speed: 2 + Math.random() * 2,
        hp: 1,
        emoji: zombieTypes[Math.floor(Math.random() * zombieTypes.length)],
        element: document.createElement("div")
    };

    zombie.element.className = "zombie";
    zombie.element.innerHTML = zombie.emoji;

    game.appendChild(zombie.element);

    Game.zombies.push(zombie);
}

function updateZombies() {

    for (let i = Game.zombies.length - 1; i >= 0; i--) {

        let z = Game.zombies[i];

        z.y += z.speed;

        z.element.style.left = z.x + "px";
        z.element.style.top = z.y + "px";

        // Player तक पहुँच गया
        if (z.y > player.y - 20 &&
            Math.abs(z.x - player.x) < 40) {

            damagePlayer(10);

            z.element.remove();
            Game.zombies.splice(i,1);
            continue;
        }

        // Screen से बाहर
        if (z.y > window.innerHeight + 50) {

            z.element.remove();
            Game.zombies.splice(i,1);

        }

    }

}

// हर 1 सेकंड में Zombie
setInterval(spawnZombie,1000);

// लगातार Update
setInterval(updateZombies,16);
