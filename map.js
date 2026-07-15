// map.js

const map = document.getElementById("map");

const trees = ["🌲","🌳","🌴"];
const rocks = ["🪨"];
const grass = ["🌿","🍀","🌱"];

function addItem(emoji,x,y,size){

    const item=document.createElement("div");

    item.innerHTML=emoji;

    item.style.position="absolute";
    item.style.left=x+"px";
    item.style.top=y+"px";
    item.style.fontSize=size+"px";
    item.style.pointerEvents="none";

    map.appendChild(item);

}

function createForest(){

    // Trees
    for(let i=0;i<30;i++){

        addItem(
            trees[Math.floor(Math.random()*trees.length)],
            Math.random()*window.innerWidth,
            Math.random()*window.innerHeight,
            45+Math.random()*20
        );

    }

    // Rocks
    for(let i=0;i<15;i++){

        addItem(
            rocks[0],
            Math.random()*window.innerWidth,
            Math.random()*window.innerHeight,
            28+Math.random()*10
        );

    }

    // Grass
    for(let i=0;i<60;i++){

        addItem(
            grass[Math.floor(Math.random()*grass.length)],
            Math.random()*window.innerWidth,
            Math.random()*window.innerHeight,
            16+Math.random()*8
        );

    }

}

createForest();
