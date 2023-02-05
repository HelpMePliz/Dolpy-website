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

const FPS = 10

onload = function() { 
    var animationhandler = setInterval(animation, 1000/FPS);
    var header_card_change_handler = setInterval(header_card_change, 5000);
    var updownanimation_handler = this.setInterval(updownanimation, 1000)
    x = document.getElementsByClassName('player')[0]
    x.addEventListener('click', function() {
        console.log("click");
    })

}

window.addEventListener('onload', onload);
