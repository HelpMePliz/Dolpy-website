

header_card_change = function() {
    let xs = document.getElementsByClassName('card')
    let i = 0, j = 0;
    for (let x of xs) {
        if (x.classList.contains('hide')) {
            x.classList.toggle('hide')
        }
        if (x.classList.contains('show')) {
            x.classList.toggle('show')
            x.classList.toggle('hide')
            j = i;
            continue;
        }
        i++;
    }
    xs[(j+1)%xs.length].classList.toggle('show')
}

onload = function() { 
    var animationhandler = setInterval(animation, 1000/10);
    var header_card_change_handler = setInterval(header_card_change, 5000);
}

window.addEventListener('onload', onload);