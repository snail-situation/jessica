// function comp (config) {
//     config.addShortcode('foo', function (bar, baz) {
//         return `<div class="foo">
//             ${bar}, ${baz}
//         </div`;
//     })
// }

function nav (config) {
    config.addShortcode('nav', function (url) {
        return `<ul class="nav">
            <li class="house${url === '/' ? ' active' : ''}">
                <a href="/">🏠</a>
            </li>
            <li class="resume${url.includes('/resume') ? ' active' : ''}">
                <a href="/resume">👁️</a>
            </li>
            <li class="email"><a href="mailto:barney@example.com">📧</a></li>
        </ul>`
    })
}

module.exports = nav
