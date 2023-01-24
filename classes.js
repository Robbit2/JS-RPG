const rarities = {
  Common: "white",
  Uncommon : "#13dc2c"
}

class Item {
  constructor({name, level, gilded = false, rarity, type, item, img, strength, damage, defense, reforge, stars, id, weight, dmgBuff, strBuff}){
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
  }

  getName(){
    return `[Lv.${this.level}] ${this.reforge} ${this.name} ${this.stars}`;
  }
  
}

const items = {
  copper_coin : new Item({name:"Copper Coin", level:1, gilded:false, rarity:"Common", type:"item.mainhand", item:"Collectable", img:"./img/copper_coin.png", strength:0, damage:0, defense:0, reforge:"E", stars:"", id:"item:copper_coin",weight:0.1, dmgBuff:1, strBuff:1})
};

const searchItemDB = (query) => {
  for(item in items){
    if(items[item].id === query){
      return items[item];
    }
  }
};