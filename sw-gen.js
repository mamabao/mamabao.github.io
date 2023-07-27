if (!self.define) {
    let e, i = {};
    const c = (c, r) => (c = new URL(c + ".js", r).href, i[c] || new Promise((i => {
        if ("document" in self) {
            const e = document.createElement("script");
            e.src = c, e.onload = i, document.head.appendChild(e)
        } else e = c, importScripts(c), i()
    })).then((() => {
        let e = i[c]; if (!e) throw new Error(`Module ${c} didn’t register its module`);
        return e
    })));

    self.define = (r, o) => {
        const n = e || ("document" in self ? document.currentScript.src : "") || location.href;
        if (i[n]) return;
        let s = {};
        const t = e => c(e, n), a = {
            module: { uri: n }, exports: s, require: t
        }; i[n] = Promise.all(r.map((e => a[e] || t(e)))).then((e => (o(...e), s)))
    }
}

define(["./workbox-2b403519"], (function (e) { "use strict"; self.addEventListener("message", (e => { e.data && "SKIP_WAITING" === e.data.type && self.skipWaiting() })), e.precacheAndRoute([{ url: "converter.css", revision: "39735f1454357b442cb6889c26ce11de" }, { url: "converter.js", revision: "ba10d706609ec8b212bada0c3598f269" }, { url: "favicon.ico", revision: "0e919ed3e0e1878b0067b2a2988fc018" }, { url: "icon512.png", revision: "98abe87b77e7c8bbb0d4dd039811d8a5" }, { url: "img/favicon.ico", revision: "0e919ed3e0e1878b0067b2a2988fc018" }, { url: "manifest.json", revision: "178370c94064c0674631376b610cf89f" }, { url: "package-lock.json", revision: "acb2ca79fe29c1d20aa167b02b7e61f8" }, { url: "package.json", revision: "dacb5afca395b8654b9a418826636c40" }, { url: "sw-1.js", revision: "392027afc7e82af8c97069c79f596b18" }], { ignoreURLParametersMatching: [/^utm_/, /^fbclid$/] }) }));
//# sourceMappingURL=sw.js.map
