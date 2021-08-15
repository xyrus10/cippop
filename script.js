var counter = 0;
window.onclick = function () {
    var audio = new Audio('pop.mp3');
    audio.play();
    document.getElementById('counter').innerHTML = counter
    document.getElementById('diem').classList.add('ilang')
    document.getElementById('mangap').classList.remove('ilang')
    audio.onended = function () {
        document.getElementById('diem').classList.remove('ilang')
        document.getElementById('mangap').classList.add('ilang')
    }
    counter++;
}
document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
}, false);
document.addEventListener("keydown", function (e) {
    if (e.ctrlKey && e.shiftKey && e.keyCode == 73) {
        disabledEvent(e);
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 74) {
        disabledEvent(e);
    }
    if (e.keyCode == 83 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
        disabledEvent(e);
    }
    if (e.ctrlKey && e.keyCode == 85) {
        disabledEvent(e);
    }
    if (event.keyCode == 123) {
        disabledEvent(e);
    }
}, false);

function disabledEvent(e) {
    if (e.stopPropagation) {
        e.stopPropagation();
    } else if (window.event) {
        window.event.cancelBubble = true;
    }
    e.preventDefault();
    return false;
}