/**
 * github pages of Cbdy
 * http://jianzhao.org
 */
const $ = document.querySelector.bind(document)

class PagesLoader {

    constructor() {
        this.container = $('div.markdown-body')
    }

    async doLoad() {
        if (location.hash === '') {
            return await this.loadCatalog()
        }
        const name = location.hash.substring(2)
        return await this.loadArticle(name)
    }

    async loadCatalog() {
        await this.loadHtml(`/blogs/目录.md`)
        const ul = $('ul')
        for (const li of ul.children) {
            const name = li.innerText
            li.innerHTML = `<a href="/#/${name}">${name}<a>`
        }
    }

    async loadArticle(name) {
        await this.loadHtml(`/notes/${name}.md`)
    }

    async loadHtml(path) {
        const response = await fetch(path)
        const text = await response.text()
        this.container.innerHTML = marked(text)
    }
}

document.onreadystatechange = function () {
    if (document.readyState === 'interactive') {
        const pagesLoader = new PagesLoader
        addEventListener('popstate', () => pagesLoader.doLoad())
        pagesLoader.doLoad()
    }
}