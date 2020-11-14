module.exports = function (config) {
    config.addShortcode('nav', function (url) {
        return `<ul class="nav">
            <li class="video-icon${url === '' ? ' active' : ''}">
                <button class="clicker">🎥</button>
            </li>
            <li>
                <a href="/" class="house${url === '/' ? ' active' : ''}">🏠</a>
                <a class="resume${url.includes('/resume') ? ' active' : ''}"
                    href="/resume">👁️</a>
                <a href="mailto:barney@example.com">📧</a>
            </li>
        </ul>`
    })

    config.addCollection('jobo', function (collection) {
        return collection.getFilteredByTag('jobs')
            .sort(function (a, b) {
                if (a.data.dates > b.data.dates) return 1
                if (a.data.dates < b.data.dates) return -1
                return 0
            })
            .reverse()
    })
}

