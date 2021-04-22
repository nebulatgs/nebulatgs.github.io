function rotateHeader() {
    var angle = Math.atan((window.innerHeight) / ((window.innerWidth / 2))) * (180 / Math.PI);
    document.getElementById('mainHeader').style.transform = 'rotate(' + (angle * -1) + 'deg)';
}

window.onresize = rotateHeader;
window.onload = rotateHeader;