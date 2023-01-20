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
  for(item in inventory.contents){
    document.querySelector("#bag").innerHTML += `<div id="item"><img class="darkmode-ignore" src="${inventory.contents[item].image}" height="100%" width="100%"></div>`;
  }
};

const renderOtherStats = (stats) => {
  document.querySelector("#strength").innerHTML = `<svg id="swordSVG" class="darkmode-ignore" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#de5f0b"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path fill="none" d="M0 0h24v24H0z"></path> <path fill-rule="nonzero" d="M7.05 13.406l3.534 3.536-1.413 1.414 1.415 1.415-1.414 1.414-2.475-2.475-2.829 2.829-1.414-1.414 2.829-2.83-2.475-2.474 1.414-1.414 1.414 1.413 1.413-1.414zM3 3l3.546.003 11.817 11.818 1.415-1.414 1.414 1.414-2.474 2.475 2.828 2.829-1.414 1.414-2.829-2.829-2.475 2.475-1.414-1.414 1.414-1.415L3.003 6.531 3 3zm14.457 0L21 3.003l.002 3.523-4.053 4.052-3.536-3.535L17.457 3z"></path> </g> </g></svg><p>${numberformat.format(stats.strength)}</p>`;
  document.querySelector("#defense").innerHTML = `<svg id="shieldSVG" class="darkmode-ignore" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5 7C5 6.72386 5.22455 6.50109 5.49837 6.4653C7.64664 6.18449 10.7797 4.2789 11.722 3.67986C11.8923 3.57156 12.1077 3.57156 12.278 3.67986C13.2203 4.2789 16.3534 6.18449 18.5016 6.4653C18.7754 6.50109 19 6.72386 19 7V11.75C19 18.25 12 20.5 12 20.5C12 20.5 5 18.25 5 11.75V7Z" fill="#27cf54"></path> </g></svg><p>${numberformat.format(stats.defense)}</p>`;
  document.querySelector("#gold").innerHTML = `<svg id="coinsSVG" class="darkmode-ignore" fill="#deb70b" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M15,22a6,6,0,1,1,6-6A6,6,0,0,1,15,22ZM8.5,8.857c3.038,0,5.5-1.535,5.5-3.428S11.538,2,8.5,2,3,3.535,3,5.429,5.462,8.857,8.5,8.857ZM7.673,12.8a8.018,8.018,0,0,1,1.368-2.119c-.18.011-.356.033-.541.033C5.462,10.714,3,9.179,3,7.286V9.428C3,11.145,5.032,12.549,7.673,12.8Zm-.534,4.656A8.03,8.03,0,0,1,7,16c0-.24.015-.477.036-.712C4.712,14.889,3,13.576,3,12v2.143C3,15.742,4.762,17.077,7.139,17.456ZM8.5,22a8.83,8.83,0,0,0,1.079-.067,5.451,5.451,0,0,1-.673-.762,8.064,8.064,0,0,1-.929-1.345C5.188,19.66,3,18.211,3,16.429v2.142C3,20.465,5.462,22,8.5,22Z"></path></g></svg><p>${numberformat.format(stats.gold)}</p>`;
}

const renderTooltip = () => {
  return true;
}

