/**
 * github pages of Cbdy
 * http://jianzhao.org
 */

const navigator = {
    getContainer: () => document.querySelector('.markdown-body'),
    async navigate() {
        const path = location.hash.substring(2)
        const title = path ? path.split('/').pop() : ''
        document.title = title ? decodeURI(title) : 'Jian Zhao'
        const response = await fetch(`${path || '/README'}.md`)
        if (response.status !== 200) {
            this.getContainer().innerHTML = '<p>404<p>'
            return
        }
        const content = await response.text()
        this.getContainer().innerHTML = marked(content)
    }
}

document.onreadystatechange = function () {
    if (document.readyState === 'interactive') {
        addEventListener('popstate', () => navigator.navigate())
        navigator.navigate()
    }
}
