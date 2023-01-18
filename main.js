const player = {
    stats : {
        health : 100,
        maxHealth : 100,
        strength : 1,
        defense : 1,
        magicPoints : 10,
        magicPointsMax : 10
    },
    bag : {
        weight : 0,
        maxWeight : 200,
        contents : []
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