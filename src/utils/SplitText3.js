/*!
 * SplitText 3.10.4
 * https://greensock.com
 * 
 * @license Copyright 2022, GreenSock. All rights reserved.
 * *** DO NOT DEPLOY THIS FILE ***
 * This is a trial version that only works locally and on domains like codepen.io and codesandbox.io.
 * Loading it on an unauthorized domain violates the license and will cause a redirect.
 * Get the unrestricted file by joining Club GreenSock at https://greensock.com/club
 * @author: Jack Doyle, jack@greensock.com
 */
const D = /([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/;
let u, e, t, F = /(?:\r|\n|\t\t)/g,
    C = /(?:\s\s+)/g,
    i = function() {
        return String.fromCharCode.apply(null, arguments)
    },
    n = i(103, 114, 101, 101, 110, 115, 111, 99, 107, 46, 99, 111, 109),
    E = true,
    s = D => e.getComputedStyle(D),
    l = Array.isArray,
    r = [].slice,
    o = (D, e) => {
        let t;
        return l(D) ? D : "string" == (t = typeof D) && !e && D ? r.call(u.querySelectorAll(D), 0) : D && "object" === t && "length" in D ? r.call(D, 0) : D ? [D] : []
    },
    d = D => "absolute" === D.position || !0 === D.absolute,
    a = (D, u) => {
        let e, t = u.length;
        for (; --t > -1;)
            if (e = u[t], D.substr(0, e.length) === e) return e.length
    },
    p = (D = "", u) => {
        let e = ~D.indexOf("++"),
            t = 1;
        return e && (D = D.split("++").join("")), () => "<" + u + " style='position:relative;display:inline-block;'" + (D ? " class='" + D + (e ? t++ : "") + "'>" : ">")
    },
    h = (D, u, e) => {
        let t = D.nodeType;
        if (1 === t || 9 === t || 11 === t)
            for (D = D.firstChild; D; D = D.nextSibling) h(D, u, e);
        else 3 !== t && 4 !== t || (D.nodeValue = D.nodeValue.split(u).join(e))
    },
    B = (D, u) => {
        let e = u.length;
        for (; --e > -1;) D.push(u[e])
    },
    A = (D, u, e) => {
        let t;
        for (; D && D !== u;) {
            if (t = D._next || D.nextSibling, t) return t.textContent.charAt(0) === e;
            D = D.parentNode || D._parent
        }
    },
    f = D => {
        let u, e, t = o(D.childNodes),
            F = t.length;
        for (u = 0; u < F; u++) e = t[u], e._isSplit ? f(e) : u && e.previousSibling && 3 === e.previousSibling.nodeType ? (e.previousSibling.nodeValue += 3 === e.nodeType ? e.nodeValue : e.firstChild.nodeValue, D.removeChild(e)) : 3 !== e.nodeType && (D.insertBefore(e.firstChild, e), D.removeChild(e))
    },
    c = (D, u) => parseFloat(u[D]) || 0,
    g = (D, e, t, F, C, i, n) => {
        let E, l, r, o, a, p, g, x, y, _, b, w, S = s(D),
            m = c("paddingLeft", S),
            v = -999,
            T = c("borderBottomWidth", S) + c("borderTopWidth", S),
            N = c("borderLeftWidth", S) + c("borderRightWidth", S),
            L = c("paddingTop", S) + c("paddingBottom", S),
            W = c("paddingLeft", S) + c("paddingRight", S),
            O = c("fontSize", S) * (e.lineThreshold || .2),
            H = S.textAlign,
            V = [],
            R = [],
            j = [],
            M = e.wordDelimiter || " ",
            k = e.tag ? e.tag : e.span ? "span" : "div",
            P = e.type || e.split || "chars,words,lines",
            q = C && ~P.indexOf("lines") ? [] : null,
            z = ~P.indexOf("words"),
            G = ~P.indexOf("chars"),
            I = d(e),
            J = e.linesClass,
            K = ~(J || "").indexOf("++"),
            Q = [],
            U = "flex" === S.display,
            X = D.style.display;
        for (K && (J = J.split("++").join("")), U && (D.style.display = "block"), l = D.getElementsByTagName("*"), r = l.length, a = [], E = 0; E < r; E++) a[E] = l[E];
        if (q || I)
            for (E = 0; E < r; E++) o = a[E], p = o.parentNode === D, (p || I || G && !z) && (w = o.offsetTop, q && p && Math.abs(w - v) > O && ("BR" !== o.nodeName || 0 === E) && (g = [], q.push(g), v = w), I && (o._x = o.offsetLeft, o._y = w, o._w = o.offsetWidth, o._h = o.offsetHeight), q && ((o._isSplit && p || !G && p || z && p || !z && o.parentNode.parentNode === D && !o.parentNode._isSplit) && (g.push(o), o._x -= m, A(o, D, M) && (o._wordEnd = !0)), "BR" === o.nodeName && (o.nextSibling && "BR" === o.nextSibling.nodeName || 0 === E) && q.push([])));
        for (E = 0; E < r; E++)
            if (o = a[E], p = o.parentNode === D, "BR" !== o.nodeName)
                if (I && (y = o.style, z || p || (o._x += o.parentNode._x, o._y += o.parentNode._y), y.left = o._x + "px", y.top = o._y + "px", y.position = "absolute", y.display = "block", y.width = o._w + 1 + "px", y.height = o._h + "px"), !z && G)
                    if (o._isSplit)
                        for (o._next = l = o.nextSibling, o.parentNode.appendChild(o); l && 3 === l.nodeType && " " === l.textContent;) o._next = l.nextSibling, o.parentNode.appendChild(l), l = l.nextSibling;
                    else o.parentNode._isSplit ? (o._parent = o.parentNode, !o.previousSibling && o.firstChild && (o.firstChild._isFirst = !0), o.nextSibling && " " === o.nextSibling.textContent && !o.nextSibling.nextSibling && Q.push(o.nextSibling), o._next = o.nextSibling && o.nextSibling._isFirst ? null : o.nextSibling, o.parentNode.removeChild(o), a.splice(E--, 1), r--) : p || (w = !o.nextSibling && A(o.parentNode, D, M), o.parentNode._parent && o.parentNode._parent.appendChild(o), w && o.parentNode.appendChild(u.createTextNode(" ")), "span" === k && (o.style.display = "inline"), V.push(o));
        else o.parentNode._isSplit && !o._isSplit && "" !== o.innerHTML ? R.push(o) : G && !o._isSplit && ("span" === k && (o.style.display = "inline"), V.push(o));
        else q || I ? (o.parentNode && o.parentNode.removeChild(o), a.splice(E--, 1), r--) : z || D.appendChild(o);
        for (E = Q.length; --E > -1;) Q[E].parentNode.removeChild(Q[E]);
        if (q) {
            for (I && (_ = u.createElement(k), D.appendChild(_), b = _.offsetWidth + "px", w = _.offsetParent === D ? 0 : D.offsetLeft, D.removeChild(_)), y = D.style.cssText, D.style.cssText = "display:none;"; D.firstChild;) D.removeChild(D.firstChild);
            for (x = " " === M && (!I || !z && !G), E = 0; E < q.length; E++) {
                for (g = q[E], _ = u.createElement(k), _.style.cssText = "display:block;text-align:" + H + ";position:" + (I ? "absolute;" : "relative;"), J && (_.className = J + (K ? E + 1 : "")), j.push(_), r = g.length, l = 0; l < r; l++) "BR" !== g[l].nodeName && (o = g[l], _.appendChild(o), x && o._wordEnd && _.appendChild(u.createTextNode(" ")), I && (0 === l && (_.style.top = o._y + "px", _.style.left = m + w + "px"), o.style.top = "0px", w && (o.style.left = o._x - w + "px")));
                0 === r ? _.innerHTML = "&nbsp;" : z || G || (f(_), h(_, String.fromCharCode(160), " ")), I && (_.style.width = b, _.style.height = o._h + "px"), D.appendChild(_)
            }
            D.style.cssText = y
        }
        I && (n > D.clientHeight && (D.style.height = n - L + "px", D.clientHeight < n && (D.style.height = n + T + "px")), i > D.clientWidth && (D.style.width = i - W + "px", D.clientWidth < i && (D.style.width = i + N + "px"))), U && (X ? D.style.display = X : D.style.removeProperty("display")), B(t, V), z && B(F, R), B(C, j)
    },
    x = (e, t, i, n) => {
        let E, s, l, r, o, p, B, A, f = t.tag ? t.tag : t.span ? "span" : "div",
            c = ~(t.type || t.split || "chars,words,lines").indexOf("chars"),
            g = d(t),
            x = t.wordDelimiter || " ",
            y = " " !== x ? "" : g ? "&#173; " : " ",
            _ = "</" + f + ">",
            b = 1,
            w = t.specialChars ? "function" == typeof t.specialChars ? t.specialChars : a : null,
            S = u.createElement("div"),
            m = e.parentNode;
        for (m.insertBefore(S, e), S.textContent = e.nodeValue, m.removeChild(e), E = function D(u) {
                let e = u.nodeType,
                    t = "";
                if (1 === e || 9 === e || 11 === e) {
                    if ("string" == typeof u.textContent) return u.textContent;
                    for (u = u.firstChild; u; u = u.nextSibling) t += D(u)
                } else if (3 === e || 4 === e) return u.nodeValue;
                return t
            }(e = S), B = -1 !== E.indexOf("<"), !1 !== t.reduceWhiteSpace && (E = E.replace(C, " ").replace(F, "")), B && (E = E.split("<").join("{{LT}}")), o = E.length, s = (" " === E.charAt(0) ? y : "") + i(), l = 0; l < o; l++)
            if (p = E.charAt(l), w && (A = w(E.substr(l), t.specialChars))) p = E.substr(l, A || 1), s += c && " " !== p ? n() + p + "</" + f + ">" : p, l += A - 1;
            else if (p === x && E.charAt(l - 1) !== x && l) {
            for (s += b ? _ : "", b = 0; E.charAt(l + 1) === x;) s += y, l++;
            l === o - 1 ? s += y : ")" !== E.charAt(l + 1) && (s += y + i(), b = 1)
        } else "{" === p && "{{LT}}" === E.substr(l, 6) ? (s += c ? n() + "{{LT}}</" + f + ">" : "{{LT}}", l += 5) : p.charCodeAt(0) >= 55296 && p.charCodeAt(0) <= 56319 || E.charCodeAt(l + 1) >= 65024 && E.charCodeAt(l + 1) <= 65039 ? (r = ((E.substr(l, 12).split(D) || [])[1] || "").length || 2, s += c && " " !== p ? n() + E.substr(l, r) + "</" + f + ">" : E.substr(l, r), l += r - 1) : s += c && " " !== p ? n() + p + "</" + f + ">" : p;
        e.outerHTML = s + (b ? _ : ""), B && h(m, "{{LT}}", "<")
    },
    y = (D, u, e, t) => {
        let F, C, i = o(D.childNodes),
            n = i.length,
            E = d(u);
        if (3 !== D.nodeType || n > 1) {
            for (u.absolute = !1, F = 0; F < n; F++) C = i[F], C._next = C._isFirst = C._parent = C._wordEnd = null, (3 !== C.nodeType || /\S+/.test(C.nodeValue)) && (E && 3 !== C.nodeType && "inline" === s(C).display && (C.style.display = "inline-block", C.style.position = "relative"), C._isSplit = !0, y(C, u, e, t));
            return u.absolute = E, void(D._isSplit = !0)
        }
        x(D, u, e, t)
    };
class _ {
    constructor(D, F) {
        t || (u = document, e = window, t = 1), this.elements = o(D), this.chars = [], this.words = [], this.lines = [], this._originals = [], this.vars = F || {}, E && this.split(F)
    }
    split(D) {
        this.isSplit && this.revert(), this.vars = D = D || this.vars, this._originals.length = this.chars.length = this.words.length = this.lines.length = 0;
        let u, e, t, F = this.elements.length,
            C = D.tag ? D.tag : D.span ? "span" : "div",
            i = p(D.wordsClass, C),
            n = p(D.charsClass, C);
        for (; --F > -1;) t = this.elements[F], this._originals[F] = t.innerHTML, u = t.clientHeight, e = t.clientWidth, y(t, D, i, n), g(t, D, this.chars, this.words, this.lines, e, u);
        return this.chars.reverse(), this.words.reverse(), this.lines.reverse(), this.isSplit = !0, this
    }
    revert() {
        let D = this._originals;
        if (!D) throw "revert() call wasn't scoped properly.";
        return this.elements.forEach((u, e) => u.innerHTML = D[e]), this.chars = [], this.words = [], this.lines = [], this.isSplit = !1, this
    }
    static create(D, u) {
        return new _(D, u)
    }
}
_.version = "3.10.4";
export default _;
export {
    _ as SplitText
};