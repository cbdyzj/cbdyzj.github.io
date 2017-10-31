/**
 * github pages of Cbdy
 * http://jianzhao.org
 */

function asyncLoad(resource, callback) {
    var req = new XMLHttpRequest();
    req.open("GET", resource);
    req.setRequestHeader("Content-Type", "text/plain;charset=utf-8");
    req.onreadystatechange = function () {
        if (req.readyState === 4 && req.status === 200) {
            callback(req.responseText);
        } else if (req.readyState === 4) {
            callback("\"No comment!\"");
        }
    };
    req.send();
}

function loadCatalog(content) {
    var main = document.getElementById("main");
    main.innerHTML = marked(content);
    var nodes = main.children;
    var liNodes = nodes[0].children;
    Array.prototype.map.call(liNodes, function (liNode) {
        var aEl = document.createElement("a");
        aEl.href = "#/" + liNode.textContent;
        aEl.textContent = liNode.textContent;
        liNode.textContent = "";
        liNode.appendChild(aEl);
    });
}

function loadArticle(content) {
    var main = document.getElementById("main");
    main.innerHTML = marked(content);
}

function async() {
    if (location.hash === "") {
        asyncLoad("/blogs/catalog.md", loadCatalog);
    } else {
        asyncLoad("/blogs/" + location.hash.substring(2) + ".md", loadArticle);
    }
}

document.onreadystatechange = function () {
    if (document.readyState === "interactive") {
        async();
        addEventListener('popstate', async);
    }
}