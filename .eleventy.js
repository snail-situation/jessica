// function comp (config) {
//     config.addShortcode('foo', function (bar, baz) {
//         return `<div class="foo">
//             ${bar}, ${baz}
//         </div`;
//     })
// }

module.exports = function (config) {
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

    config.addCollection('jobo', function (collection) {
        return collection.getFilteredByTag('jobs')
            .sort (function (a, b) {
                if (a.data.dates > b.data.dates) return 1
                if (a.data.dates < b.data.dates) return -1
                return 0
            })
            .reverse()
    })
}
