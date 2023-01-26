var scroll_style_element;

function disable_scrolling(){
    
  // Create a style sheet we will only use to disable scrolling :
  scroll_style_element = document.createElement('style');
  document.head.appendChild(scroll_style_element);
  const scroll_style_sheet = scroll_style_element.sheet;
    
  scroll_style_sheet.insertRule('html{height:100%;overflow-y:hidden;}', scroll_style_sheet.cssRules.length);
}

function enable_scrolling(){
  if( scroll_style_element ) document.head.removeChild(scroll_style_element);
}

scrolled = false
function checkScroll() {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 0) scrolled = true;
}
$ = function(x) {return document.getElementById(x)}
ty = function(e) {return e.getBoundingClientRect().top + document.documentElement.scrollTop}

window.onload = function() {
    setInterval(function() {
        checkScroll()
        if (scrolled) {
            // window.scrollTop = $("video").;
            window.scrollTo(0, ty($("video")))
            disable_scrolling()
            
        }
    }, 1000)
}