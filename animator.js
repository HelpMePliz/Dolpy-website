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
    if (arr.length == 0) return;
    let x = arr[0].getElementsByClassName('updown');
    if (x.length == 0) return;
    if (updown && arr.length > 0) {
        x[0].classList.toggle('down');
        x[0].classList.add('moving');
    }
    else x[0].classList.remove('moving');
}
