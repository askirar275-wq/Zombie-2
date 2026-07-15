// shop.js

const Shop = {

    pistol: {
        price: 0,
        name: "🔫 Pistol",
        damage: 1
    },

    ak47: {
        price: 50,
        name: "🔫 AK-47",
        damage: 2
    },

    shotgun: {
        price: 100,
        name: "💥 Shotgun",
        damage: 4
    },

    sniper: {
        price: 200,
        name: "🎯 Sniper",
        damage: 8
    }

};

let currentGun = Shop.pistol;

function buyGun(gunName){

    const gun = Shop[gunName];

    if(!gun) return;

    if(spendCoins(gun.price)){

        currentGun = gun;

        alert("✅ " + gun.name + " Purchased");

    }else{

        alert("❌ Not enough Coins");

    }

}

function showShop(){

    let choice = prompt(
`🛒 GUN SHOP

1 = AK-47 (50)
2 = Shotgun (100)
3 = Sniper (200)`
);

    if(choice=="1") buyGun("ak47");
    if(choice=="2") buyGun("shotgun");
    if(choice=="3") buyGun("sniper");

}

// Shop खोलने के लिए S दबाओ
window.addEventListener("keydown",e=>{

    if(e.key=="s" || e.key=="S"){

        showShop();

    }

});
