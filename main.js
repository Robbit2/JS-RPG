const player = {
    stats : {
        health : 100,
        maxHealth : 100,
        strength : 1,
        defense : 1,
        magicPoints : 10,
        magicPointsMax : 10,
        gold : 0
    },
    bag : {
        weight : 0,
        maxWeight : 200,
        contents : [{image:"./img/gold_coin.png"},{image:"./img/copper_coin.png"},{image:"./img/silver_coin.png"}]
    },
    equipped : {
        head : null,
        body : null,
        legs : null,
        mainhand : null,
        offhand : null,
        charm : null
    }
};

renderStats(player.stats);
renderInventory(player.bag);
setInterval(() => {
    renderOtherStats(player.stats);
},50)