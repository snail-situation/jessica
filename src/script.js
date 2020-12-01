var isVisible = false
var links = document.getElementById('main-links')
if (links) {
    links.addEventListener('click', ev => {
        update()
    })
}

var btn = document.querySelector('button.clicker')
if (btn) {
    btn.addEventListener('click', (ev) => {
        update()
    })
}

function update () {
    var linksEl = document.getElementById('main-links')
    if (!isVisible) {
        isVisible = true
        return linksEl.classList.add("is-visible");
    }
    isVisible = false
    linksEl.classList.remove("is-visible");
}
