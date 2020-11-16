module.exports = function (config) {
    config.addShortcode('nav', function (url) {
        var isVid = url.includes('animation') ||
            url.includes('editing') ||
            url.includes('diaries') ||
            url.includes('music-videos')

        var selectedLink = url.includes('animation') ?
            'animation' :
            url.includes('editing') ?
            'editing' :
            url.includes('diaries') ?
            'video diaries' :
            url.includes('music-videos') ?
            'music videos' :
            ''

        return `<ul class="nav">
            <li class="video-icon${url === '' ? ' active' : ''}">
                <button class="clicker">🎥</button>
                <span>${selectedLink}</span>
            </li>
            <li>
                <a href="/" class="house${url === '/' ? ' active' : ''}">🏠</a>
                <a class="resume${url.includes('/resume') ? ' active' : ''}"
                    href="/resume">👁️</a>
                <a href="mailto:barney@example.com">📧</a>
            </li>
        </ul>`
    })

    config.addShortcode('vidLinks', function (url) {
        return `<div id="main-links">
            <ul>
                <li>
                    <a href="/music-videos">music videos</a>
                </li>
                <li>
                    <a href="/animation">animation</a>
                </li>
                <li>
                    <a href="/editing">editing</a>
                </li>
                <li>
                    <a href="/video-diaries">video diaries</a>
                </li>
            </ul>
        </div>`
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

