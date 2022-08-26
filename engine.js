function playSample(e) {
    const sample = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if (!sample) return;
    sample.currentTime = 0;
    sample.play();
    const pad = document.querySelector(`.pad[data-key="${e.keyCode}"]`)
    pad.classList.add('push_btn');
    pad.classList
    const display = document.querySelector('.lcd_text');
    display.textContent = pad.id;
}

function removeRed(e) {
    const pad = document.querySelector(`.pad[data-key="${e.keyCode}"]`)
    pad.classList.remove('push_btn');
}

window.addEventListener("keydown", playSample);
window.addEventListener("keyup", removeRed);

function showSmpOnHover (e) {
    const display = document.querySelector('.lcd_text');
    display.textContent = e.srcElement.id;
}

function hideSmpOnHover (e) {
    const display = document.querySelector('.lcd_text');
    display.textContent = "";
}

const pad = document.querySelectorAll(".pad");
pad.forEach(e => e.addEventListener("mouseover", showSmpOnHover));
pad.forEach(e => e.addEventListener("mouseleave", hideSmpOnHover));