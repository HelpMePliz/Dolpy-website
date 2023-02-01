function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    )
}

animation = function() {
    let arrs = document.getElementsByClassName('animator')
    for (x of arrs) {
        // console.log(x.style)
        if (isInViewport(x)) {
            x.classList.add('animator-show')
        }
        else {
            x.classList.remove('animator-show')
        }
    }
}
