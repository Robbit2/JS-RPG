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