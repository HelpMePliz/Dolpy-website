function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    )
}

var updown = false
var updownhandler = 0

animation = function() {
    let arrs = document.getElementsByClassName('section')
    for (x of arrs) {
        if (isInViewport(x)) {
            if (x.classList.contains('show-anim')) continue;
            x.classList.add('show-anim');
            updown = false;
            if (updownhandler) clearTimeout(updownhandler);
            updownhandler = setTimeout(() => {updown = true}, 5000);
        }
        else {
            x.classList.remove('show-anim')
            let z = x.getElementsByClassName('moving');
            for (let y of z) y.classList.remove('moving');
        }
    }
}

updownanimation = function() {
    let arr = document.getElementsByClassName('show-anim');
    if (updown && arr.length > 0) {
        let x = arr[0].getElementsByClassName('updown')[0];
        x.classList.toggle('down');
        x.classList.add('moving');
    }
    else document.getElementsByClassName('show-anim')[0].getElementsByClassName('updown')[0].classList.remove('moving');
}
