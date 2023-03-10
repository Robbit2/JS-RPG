const tooltip = document.querySelector("#tooltip");

const renderStats = (stats) => {
    gsap.registerPlugin("TextPlugin");
    gsap.to(".healthBar", {
        duration: 1.5,
        width : `${clamp(stats.health / (stats.maxHealth/100), 0, 100)}%`,
        ease: Expo.easeInOut
    });
    gsap.to(".magicBar", {
        duration: 1.5,
        width : `${clamp(stats.magicPoints / (stats.magicPointsMax / 100), 0, 100)}%`,
        ease: Expo.easeInOut
    })
    gsap.to(".magicBar", {duration: 1, text : `${stats.magicPoints} / ${stats.magicPointsMax}`,ease: Expo.easeInOut})
  gsap.to(".healthBar", {duration: 1, text : `${stats.health} / ${stats.maxHealth}`,ease: Expo.easeInOut})
};

const renderInventory = (inventory) => {
  let bagweight = 0;
  document.querySelector("#bag").innerHTML = "";
  for(item in inventory.contents){
    bagweight += inventory.contents[item].weight;
    if(inventory.contents[item].uuid === null){
      inventory.contents[item].uuid = uuid.v4();
    }
    if(inventory.contents[item].reforge === ""){
      document.querySelector("#bag").innerHTML += `<div id="item" class="tooltip" data-pos='${item}' data-item='${JSON.stringify(inventory.contents[item])}'><img src='${inventory.contents[item].img}' height="100%" width="100%"><span class="tooltiptext" style="color:${rarities[inventory.contents[item].rarity]};">[Lv.${inventory.contents[item].level}] ${inventory.contents[item].reforge} ${inventory.contents[item].name} ${inventory.contents[item].stars}<br><br><span style="color:white;">Damage: <span style="color:red;">+${numeral(inventory.contents[item].damage).format("0.0a")}</span></span><br><span style="color:white;">Strength: <span style="color:orange;">+${numeral(inventory.contents[item].strength).format("0.0a")}</span></span><br><span style="color:white;">Defense: <span style="color:lime;">+${numeral(inventory.contents[item].defense).format("0.0a")}</span></span><br><br><span style="color:lightgrey;">This item can be reforged</span><br><span style="color:${rarities[inventory.contents[item].rarity]};"><b>${inventory.contents[item].rarity.toUpperCase()} ${inventory.contents[item].item}</b></span></span></div>`;
    }else{
      document.querySelector("#bag").innerHTML += `<div id="item" class="tooltip" data-pos='${item}' data-item='${JSON.stringify(inventory.contents[item])}'><img src='${inventory.contents[item].img}' height="100%" width="100%" class="gilded"><span class="tooltiptext" style="color:${rarities[inventory.contents[item].rarity]};">[Lv.${inventory.contents[item].level}] ${inventory.contents[item].reforge} ${inventory.contents[item].name} ${inventory.contents[item].stars}<br><br><span style="color:white;">Damage: <span style="color:red;">+${numeral(inventory.contents[item].damage).format("0.0a")}</span><span style="color:#f7ea57;"> (+${numeral(inventory.contents[item].dmgBuff).format("0.0a")})</span></span><br><span style="color:white;">Strength: <span style="color:orange;">+${numeral(inventory.contents[item].strength).format("0.0a")}</span><span style="color:#f7ea57;"> (+${numeral(inventory.contents[item].strBuff).format("0.0a")})</span></span><br><span style="color:white;">Defense: <span style="color:lime;">+${numeral(inventory.contents[item].defense).format("0.0a")}</span><span style="color:#f7ea57;"> (+${numeral(inventory.contents[item].defBuff).format("0.0a")})</span></span><br><br><span style="color:${rarities[inventory.contents[item].rarity]};"><b>${inventory.contents[item].rarity.toUpperCase()} ${inventory.contents[item].item.toUpperCase()}</b></span></span></div>`;
    }
  }
  document.querySelector("#bag-weight").innerHTML = `Weight: ${numeral(bagweight).format("0.0")} <svg fill="#000000" width="16px" height="16px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M510.28 445.86l-73.03-292.13c-3.8-15.19-16.44-25.72-30.87-25.72h-60.25c3.57-10.05 5.88-20.72 5.88-32 0-53.02-42.98-96-96-96s-96 42.98-96 96c0 11.28 2.3 21.95 5.88 32h-60.25c-14.43 0-27.08 10.54-30.87 25.72L1.72 445.86C-6.61 479.17 16.38 512 48.03 512h415.95c31.64 0 54.63-32.83 46.3-66.14zM256 128c-17.64 0-32-14.36-32-32s14.36-32 32-32 32 14.36 32 32-14.36 32-32 32z"></path></g></svg>`;
  return true;
};

const renderEquipped = (equipped) => {
  for(slot in equipped){
    if(equipped[slot] !== null){
      if(equipped[slot].reforge === ""){
        document.querySelector(`#${slot}`).innerHTML = `<div id="item" class="tooltip" data-item='${JSON.stringify(equipped[slot])}'><img src='${equipped[slot].img}' height="100%" width="100%"><span class="tooltiptext" style="color:${rarities[equipped[slot].rarity]};">[Lv.${equipped[slot].level}] ${equipped[slot].reforge} ${equipped[slot].name} ${equipped[slot].stars}<br><br><span style="color:white;">Damage: <span style="color:red;">+${numeral(equipped[slot].damage).format("0.0a")}</span></span><br><span style="color:white;">Strength: <span style="color:orange;">+${numeral(equipped[slot].strength).format("0.0a")}</span></span><br><span style="color:white;">Defense: <span style="color:lime;">+${numeral(equipped[slot].defense).format("0.0a")}</span></span><br><br><span style="color:lightgrey;">This item can be reforged</span><br><span style="color:${rarities[equipped[slot].rarity]};"><b>${equipped[slot].rarity.toUpperCase()} ${equipped[slot].item}</b></span><br></span></div>`;
      }else{
        document.querySelector(`#${slot}`).innerHTML = `<div id="item" class="tooltip" data-item='${JSON.stringify(equipped[slot])}'><img src='${equipped[slot].img}' height="100%" width="100%" class="gilded"><span class="tooltiptext" style="color:${rarities[equipped[slot].rarity]};">[Lv.${equipped[slot].level}] ${equipped[slot].reforge} ${equipped[slot].name} ${equipped[slot].stars}<br><br><span style="color:white;">Damage: <span style="color:red;">+${numeral(equipped[slot].damage).format("0.0a")}</span><span style="color:#f7ea57;"> (+${numeral(equipped[slot].dmgBuff).format("0.0a")})</span></span><br><span style="color:white;">Strength: <span style="color:orange;">+${numeral(equipped[slot].strength).format("0.0a")}</span><span style="color:#f7ea57;"> (+${numeral(equipped[slot].strBuff).format("0.0a")})</span></span><br><span style="color:white;">Defense: <span style="color:lime;">+${numeral(equipped[slot].defense).format("0.0a")}</span><span style="color:#f7ea57;"> (+${numeral(equipped[slot].defBuff).format("0.0a")})</span></span><br><br><span style="color:${rarities[equipped[slot].rarity]};"><b>${equipped[slot].rarity.toUpperCase()} ${equipped[slot].item.toUpperCase()}</b></span><br></span></div>`;
      }
    }
  }
  return true;
};

const renderOtherStats = (stats) => {
  document.querySelector("#strength").innerHTML = `<svg id="swordSVG" class="darkmode-ignore" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#de5f0b"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path fill="none" d="M0 0h24v24H0z"></path> <path fill-rule="nonzero" d="M7.05 13.406l3.534 3.536-1.413 1.414 1.415 1.415-1.414 1.414-2.475-2.475-2.829 2.829-1.414-1.414 2.829-2.83-2.475-2.474 1.414-1.414 1.414 1.413 1.413-1.414zM3 3l3.546.003 11.817 11.818 1.415-1.414 1.414 1.414-2.474 2.475 2.828 2.829-1.414 1.414-2.829-2.829-2.475 2.475-1.414-1.414 1.414-1.415L3.003 6.531 3 3zm14.457 0L21 3.003l.002 3.523-4.053 4.052-3.536-3.535L17.457 3z"></path> </g> </g></svg><p>${numeral(stats.strength).format('0.0a')}</p>`;
  document.querySelector("#defense").innerHTML = `<svg id="shieldSVG" class="darkmode-ignore" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5 7C5 6.72386 5.22455 6.50109 5.49837 6.4653C7.64664 6.18449 10.7797 4.2789 11.722 3.67986C11.8923 3.57156 12.1077 3.57156 12.278 3.67986C13.2203 4.2789 16.3534 6.18449 18.5016 6.4653C18.7754 6.50109 19 6.72386 19 7V11.75C19 18.25 12 20.5 12 20.5C12 20.5 5 18.25 5 11.75V7Z" fill="#27cf54"></path> </g></svg><p>${numeral(stats.defense).format('0.0a')}</p>`;
  document.querySelector("#gold").innerHTML = `<svg id="coinsSVG" class="darkmode-ignore" fill="#deb70b" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M15,22a6,6,0,1,1,6-6A6,6,0,0,1,15,22ZM8.5,8.857c3.038,0,5.5-1.535,5.5-3.428S11.538,2,8.5,2,3,3.535,3,5.429,5.462,8.857,8.5,8.857ZM7.673,12.8a8.018,8.018,0,0,1,1.368-2.119c-.18.011-.356.033-.541.033C5.462,10.714,3,9.179,3,7.286V9.428C3,11.145,5.032,12.549,7.673,12.8Zm-.534,4.656A8.03,8.03,0,0,1,7,16c0-.24.015-.477.036-.712C4.712,14.889,3,13.576,3,12v2.143C3,15.742,4.762,17.077,7.139,17.456ZM8.5,22a8.83,8.83,0,0,0,1.079-.067,5.451,5.451,0,0,1-.673-.762,8.064,8.064,0,0,1-.929-1.345C5.188,19.66,3,18.211,3,16.429v2.142C3,20.465,5.462,22,8.5,22Z"></path></g></svg><p>${numeral(stats.gold).format('0.0a')}</p>`;
};

const showTooltip = (data1) => {
  let data = JSON.parse(data1);
};