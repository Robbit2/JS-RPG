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
renderInventory(player.bag);
setInterval(() => {
    renderOtherStats(player.stats);
},50)


var drake = dragula([document.querySelector("#bag"),document.querySelector("#head"),document.querySelector("#charm"),document.querySelector("#body"),document.querySelector("#mainhand"),document.querySelector("#offhand"),document.querySelector("#legs")],
{   
    accepts : function (el, target, source, sibling){
        let item = JSON.parse(el.getAttribute("data-item"));
        if(target.classList.contains("head") && target.childElementCount === 0 && item.type === "armor.head"){
            return true;
        }else if(target.classList.contains("charm") && target.childElementCount === 0 && item.type === "item.charm"){
            return true;
        }else if(target.classList.contains("body") && target.childElementCount === 0 && item.type === "armor.body"){
            return true;
        }else if(target.classList.contains("mainhand") && target.childElementCount === 0 && item.type === "item.mainhand"){
            return true;
        }else if(target.classList.contains("offhand") && target.childElementCount === 0 && item.type === "item.offhand"){
            return true;
        }else if(target.classList.contains("legs") && target.childElementCount === 0 && item.type === "armor.legs"){
            return true;
        }else if(target.classList.contains("bag")){
            return true;
        }
    }
});