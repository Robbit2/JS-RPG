const rarities = {
  Common: "lightgrey",
  Uncommon : "#13dc2c",
  Rare: "#4287f5",
  Epic: "#9042f5",
  Legendary : "#f5bf42",
  Mythical : "#de50bf",
  Special : "#e82727"
}

class Item {
  constructor({name, level, gilded = false, rarity, type, item, img, strength, damage, defense, reforge, stars, id, weight, dmgBuff, strBuff, defBuff}){
    this.name = name;
    this.level = level;
    this.gilded = gilded;
    this.rarity = rarity;
    this.type = type;
    this.item = item;
    this.img = img;
    this.strength = strength;
    this.damage = damage;
    this.defense = defense;
    this.reforge = reforge;
    this.stars = stars;
    this.id = id;
    this.weight = weight;
    this.dmgBuff = dmgBuff;
    this.strBuff = strBuff;
    this.defBuff = defBuff;
    this.uuid = uuid.v4();
  }
  
}

const items = {
  copper_coin : new Item({name:"Copper Coin", level:0, gilded:false, rarity:"Common", type:"item.mainhand", item:"Collectible", img:"./img/copper_coin.png", strength:0, damage:0, defense:0, reforge:"", stars:"", id:"item:copper_coin",weight:0.1, dmgBuff:0, strBuff:0, defBuff:0})
};

const searchItemDB = (query) => {
  for(item in items){
    if(items[item].id === query){
      return items[item];
    }
  }
};