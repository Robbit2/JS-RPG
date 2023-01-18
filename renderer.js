const renderStats = (stats) => {
    const UIDom = document.querySelector("#stats");
    //UIDom.innerHTML = JSON.stringify(stats);
    gsap.to("#healthBar", {
        width : `${stats.health / stats.maxHealth}%`
    });
    gsap.to("#magicBar", {
        width : `${stats.magicPoints / stats.magicPointsMax}%`
    })
};