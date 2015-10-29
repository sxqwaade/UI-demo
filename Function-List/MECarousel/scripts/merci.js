var vendor = (function () {
        var vendors = 't,webkitT,MozT,msT,OT'.split(','),
            dummyStyle = document.createElement('div').style,
            t,
            i = 0,
            l = vendors.length;

        for ( ; i < l; i++ ) {
            t = vendors[i] + 'ransform';
            if ( t in dummyStyle ) {
                return vendors[i].substr(0, vendors[i].length - 1);
            }
        }
        return "";
    })()
    , prefixStyle = function () {
        if ( vendor === '' ) return "";
        //style = style.charAt(0).toUpperCase() + style.substr(1);
        return vendor;
    }
var webkit = prefixStyle();
//alert(webkit)

/* This code constitutes proprietary information of Usablenet Inc. copyright 2012 */
Array.prototype.reduce || (Array.prototype.reduce = function(h) {
    if (void 0 === this || null === this) throw new TypeError;
    var g = Object(this),
    p = g.length >>> 0,
    e = 0,
    k;
    if ("function" != typeof h) throw new TypeError;
    if (0 == p && 1 == arguments.length) throw new TypeError;
    if (2 <= arguments.length) k = arguments[1];
    else {
        do {
            if (e in g) {
                k = g[e++];
                break
            }
            if (++e >= p) throw new TypeError;
        } while ( 1 )
    }
    for (; e < p;) e in g && (k = h.call(void 0, k, g[e], e, g)),
    e++;
    return k
});
String.prototype.trim || (String.prototype.trim = function() {
    return this.replace(/^\s+/, "").replace(/\s+$/, "")
});
var Merci = function() {
    function h(a) {
        return {}.toString.call(a) == "[object Function]"
    }
    function g(a) {
        return a instanceof Object
    }
    function p(a) {
        return a instanceof Array
    }
    function e(a) {
        return typeof a.length == "number"
    }
    function k(a) {
        return a.filter(function(a) {
            return a !== j && a !== null
        })
    }
    function x(a) {
        return a.replace(/-+(.)?/g,
        function(a, c) {
            return c ? c.toUpperCase() : ""
        })
    }
    function l(a) {
        return a.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase()
    }
    function y(a) {
        return a.filter(function(a, c, q) {
            return q.indexOf(a) == c
        })
    }
    function s(a) {
        return a in F ? F[a] : F[a] = RegExp("(^|\\s)" + a + "(\\s|$)")
    }
    function t(a, b) {
        b === j && (b = K.test(a) && RegExp.$1);
        b in L || (b = "*");
        var c = L[b];
        c.innerHTML = "" + a;
        return u.call(c.childNodes)
    }
    function z(a, b, c, q) {
        b = i(b);
        if (b.ns) var d = RegExp("(?:^| )" + b.ns.replace(" ", " .* ?") + "(?: |$)");
        return (B[a._mid || (a._mid = G++)] || []).filter(function(a) {
            return a && (!b.e || a.e == b.e) && (!b.ns || d.test(a.ns)) && (!c || a.fn == c) && (!q || a.sel == q)
        })
    }
    function i(a) {
        a = ("" + a).split(".");
        return {
            e: a[0],
            ns: a.slice(1).sort().join(" ")
        }
    }
    function M(a, b, c) {
        d.isObject(a) ? d.each(a, c) : a.split(/\s/).forEach(function(a) {
            c(a, b)
        })
    }
    function C(a, b, c, q, e) {
        var f = a._mid || (a._mid = G++),
        N = B[f] || (B[f] = []);
        M(b, c,
        function(b, c) {
            var f = e && e(c, b),
            j = f || c,
            h = function(b) {
                var c = j.apply(a, [b].concat(b.data));
                c === false && b.preventDefault();
                return c
            },
            f = d.extend(i(b), {
                fn: c,
                proxy: h,
                sel: q,
                del: f,
                i: N.length
            });
            N.push(f);
            a.addEventListener(f.e, h, false)
        })
    }
    function D(a, b, c, q) {
        var d = a._mid || (a._mid = G++);
        M(b || "", c,
        function(b, c) {
            z(a, b, c, q).forEach(function(b) {
                delete B[d][b.i];
                a.removeEventListener(b.e, b.proxy, false)
            })
        })
    }
    function R(a) {
        var b = d.extend({
            originalEvent: a
        },
        a);
        d.each(S,
        function(c, d) {
            b[c] = function() {
                this[d] = T;
                return a[c].apply(a, arguments)
            };
            b[d] = U
        });
        return b
    }
    function V(a) {
        if (! ("defaultPrevented" in a)) {
            a.defaultPrevented = false;
            var b = a.preventDefault;
            a.preventDefault = function() {
                this.defaultPrevented = true;
                b.call(this)
            }
        }
    }
    function A(a, b) {
        a = a || n;
        a.__proto__ = A.prototype;
        a.selector = b || "";
        return a
    }
    function d(a, b) {
        if (!a) return A();
        if (b !== j) return d(b).find(a);
        if (h(a)) return d(f).ready(a);
        if (a instanceof A) return a;
        var c;
        if (p(a)) c = k(a);
        else if (W.indexOf(a.nodeType) >= 0 || a === window) {
            c = [a];
            a = null
        } else if (K.test(a)) {
            c = t(a.trim(), RegExp.$1);
            a = null
        } else c = a.nodeType && a.nodeType == 3 ? [a] : w(f, a);
        return A(c, a)
    }
    function E(a, b) {
        return b === j ? d(a) : d(a).filter(b)
    }
    function v(a, b, c, d) {
        return h(b) ? b.call(a, c, d) : b
    }
    function X(a, b, c) {
        var d = a % 2 ? b: b.parentNode;
        d && d.insertBefore(c, !a ? b.nextSibling: a == 1 ? d.firstChild: a == 2 ? b: null)
    }
    function O(a, b) {
        b(a);
        for (var c in a.childNodes) O(a.childNodes[c], b)
    }
    var n = [],
    u = n.slice,
    f = window.document,
    H = {},
    F = {},
    I = f.defaultView.getComputedStyle,
    K = /^\s*<(\w+)[^>]*>/,
    J = f.createElement("table"),
    P = f.createElement("tr"),
    L = {
        tr: f.createElement("tbody"),
        tbody: J,
        thead: J,
        tfoot: J,
        td: P,
        th: P,
        "*": f.createElement("div")
    },
    j,
    m,
    w,
    o,
    Q = {
        "column-count": 1,
        columns: 1,
        "font-weight": 1,
        "line-height": 1,
        opacity: 1,
        "z-index": 1,
        zoom: 1
    },
    W = [1, 9, 11],
    Y = /complete|loaded|interactive/,
    Z = /^\.([\w-]+)$/,
    _$ = /^#([\w-]+)$/,
    aa = /^[\w-]+$/,
    G = 1,
    B = {},
    T = function() {
        return true
    },
    U = function() {
        return false
    },
    S = {
        preventDefault: "isDefaultPrevented",
        stopImmediatePropagation: "isImmediatePropagationStopped",
        stopPropagation: "isPropagationStopped"
    };
    d.extend = function(a) {
        u.call(arguments, 1).forEach(function(b) {
            for (m in b) a[m] = b[m]
        });
        return a
    };
    d.qsa = w = function(a, b) {
        var c;
        return a === f && _$.test(b) ? (c = a.getElementById(RegExp.$1)) ? [c] : n: u.call(Z.test(b) ? a.getElementsByClassName(RegExp.$1) : aa.test(b) ? a.getElementsByTagName(b) : a.querySelectorAll(b))
    };
    d.isFunction = h;
    d.isObject = g;
    d.isArray = p;
    d.inArray = function(a, b, c) {
        return n.indexOf.call(b, a, c)
    };
    d.map = function(a, b) {
        var c, d = [],
        r;
        if (e(a)) for (r = 0; r < a.length; r++) {
            c = b(a[r], r);
            c != null && d.push(c)
        } else for (r in a) {
            c = b(a[r], r);
            c != null && d.push(c)
        }
        return d.length > 0 ? [].concat.apply([], d) : d
    };
    d.each = function(a, b) {
        var c;
        if (e(a)) for (c = 0; c < a.length; c++) {
            if (b.call(a[c], c, a[c]) === false) break
        } else for (c in a) if (b.call(a[c], c, a[c]) === false) break;
        return a
    };
    d.event = {
        add: C,
        remove: D
    };
    d.Event = function(a, b) {
        var c = f.createEvent("Events"),
        d = true;
        if (b) for (var e in b) e == "bubbles" ? d = !!b[e] : c[e] = b[e];
        c.initEvent(a, d, true);
        return c
    };
    d.fn = A.prototype = {
        forEach: n.forEach,
        reduce: n.reduce,
        push: n.push,
        indexOf: n.indexOf,
        concat: n.concat,
        map: function(a) {
            return d.map(this,
            function(b, c) {
                return a.call(b, c, b)
            })
        },
        slice: function() {
            return d(u.apply(this, arguments))
        },
        ready: function(a) {
            Y.test(f.readyState) ? a(d) : f.addEventListener("DOMContentLoaded",
            function() {
                a(d)
            },
            false);
            return this
        },
        get: function(a) {
            return a === j ? this: this[a]
        },
        size: function() {
            return this.length
        },
        remove: function() {
            return this.each(function() {
                this.parentNode != null && this.parentNode.removeChild(this)
            })
        },
        each: function(a) {
            this.forEach(function(b, c) {
                a.call(b, c, b)
            });
            return this
        },
        filter: function(a) {
            return d([].filter.call(this,
            function(b) {
                return b.parentNode && w(b.parentNode, a).indexOf(b) >= 0
            }))
        },
        end: function() {
            return this.prevObject || d()
        },
        andSelf: function() {
            return this.add(this.prevObject || d())
        },
        add: function(a, b) {
            return d(y(this.concat(d(a, b))))
        },
        is: function(a) {
            return this.length > 0 && d(this[0]).filter(a).length > 0
        },
        not: function(a) {
            var b = [];
            if (h(a) && a.call !== j) this.each(function(c) {
                a.call(this, c) || b.push(this)
            });
            else {
                var c = typeof a == "string" ? this.filter(a) : e(a) && h(a.item) ? u.call(a) : d(a);
                this.forEach(function(a) {
                    c.indexOf(a) < 0 && b.push(a)
                })
            }
            return d(b)
        },
        eq: function(a) {
            return a === -1 ? this.slice(a) : this.slice(a, +a + 1)
        },
        first: function() {
            var a = this[0];
            return a && !g(a) ? a: d(a)
        },
        last: function() {
            var a = this[this.length - 1];
            return a && !g(a) ? a: d(a)
        },
        find: function(a) {
            var b;
            b = this.length == 1 ? w(this[0], a) : this.map(function() {
                return w(this, a)
            });
            return d(b)
        },
        closest: function(a, b) {
            var c = this[0],
            e = w(b || f, a);
            for (e.length || (c = null); c && e.indexOf(c) < 0;) c = c !== b && c !== f && c.parentNode;
            return d(c)
        },
        parents: function(a) {
            for (var b = [], c = this; c.length > 0;) c = d.map(c,
            function(a) {
                if ((a = a.parentNode) && a !== f && b.indexOf(a) < 0) {
                    b.push(a);
                    return a
                }
            });
            return E(b, a)
        },
        parent: function(a) {
            return E(y(this.pluck("parentNode")), a)
        },
        children: function(a) {
            return E(this.map(function() {
                return u.call(this.children)
            }), a)
        },
        siblings: function(a) {
            return E(this.map(function(a, c) {
                return u.call(c.parentNode.children).filter(function(a) {
                    return a !== c
                })
            }), a)
        },
        empty: function() {
            return this.each(function() {
                this.innerHTML = ""
            })
        },
        pluck: function(a) {
            return this.map(function() {
                return this[a]
            })
        },
        show: function() {
            return this.each(function() {
                this.style.display == "none" && (this.style.display = null);
                if (I(this, "").getPropertyValue("display") == "none") {
                    var a = this.style,
                    b = this.nodeName,
                    c, d;
                    if (!H[b]) {
                        c = f.createElement(b);
                        f.body.appendChild(c);
                        d = I(c, "").getPropertyValue("display");
                        c.parentNode.removeChild(c);
                        d == "none" && (d = "block");
                        H[b] = d
                    }
                    a.display = H[b]
                }
            })
        },
        replaceWith: function(a) {
            return this.each(function() {
                d(this).before(a).remove()
            })
        },
        wrap: function(a) {
            return this.each(function() {
                d(this).wrapAll(d(a)[0].cloneNode(false))
            })
        },
        wrapAll: function(a) {
            if (this[0]) {
                d(this[0]).before(a = d(a));
                a.append(this)
            }
            return this
        },
        unwrap: function() {
            this.parent().each(function() {
                d(this).replaceWith(d(this).children())
            });
            return this
        },
        hide: function() {
            return this.css("display", "none")
        },
        toggle: function(a) {
            return (a === j ? this.css("display") == "none": a) ? this.show() : this.hide()
        },
        prev: function() {
            return d(this.pluck("previousElementSibling"))
        },
        next: function() {
            return d(this.pluck("nextElementSibling"))
        },
        html: function(a) {
            return a === j ? this.length > 0 ? this[0].innerHTML: null: this.each(function(b) {
                var c = this.innerHTML;
                d(this).empty().append(v(this, a, b, c))
            })
        },
        text: function(a) {
            return a === j ? this.length > 0 ? this[0].textContent: null: this.each(function() {
                this.textContent = a
            })
        },
        attr: function(a, b) {
            var c;
            return typeof a == "string" && b === j ? this.length == 0 ? j: a == "value" && this[0].nodeName == "INPUT" ? this.val() : !(c = this[0].getAttribute(a)) && a in this[0] ? this[0][a] : c: this.each(function(c) {
                if (g(a)) for (m in a) this.setAttribute(m, a[m]);
                else this.setAttribute(a, v(this, b, c, this.getAttribute(a)))
            })
        },
        removeAttr: function(a) {
            return this.each(function() {
                this.removeAttribute(a)
            })
        },
        data: function(a, b) {
            return this.attr("data-" + a, b)
        },
        val: function(a) {
            return a === j ? this.length > 0 ? this[0].value: null: this.each(function(b) {
                this.value = v(this, a, b, this.value)
            })
        },
        offset: function() {
            if (!this[0]) return null;
            var a = null;
            if (f.documentElement.getBoundingClientRect) a = this[0].getBoundingClientRect();
            else {
                for (var a = this[0], b = 0, c = 0, d = a.offsetWidth, e = a.offsetHeight; a;) {
                    b = b + a.offsetLeft;
                    c = c + a.offsetTop;
                    a = a.offsetParent
                }
                a = {
                    left: b,
                    right: b + d,
                    top: c,
                    bottom: c + e
                };
                a.width = a.right - a.left;
                a.height = a.bottom - a.top
            }
            return {
                left: a.left + f.body.scrollLeft,
                top: a.top + f.body.scrollTop,
                width: a.width,
                height: a.height
            }
        },
        css: function(a, b) {
            if (b === j && typeof a == "string") return this.length == 0 ? j: this[0].style[x(a)] || I(this[0], "").getPropertyValue(a);
            var c = "";
            for (m in a) c = c + (l(m) + ":" + (typeof a[m] == "number" && !Q[l(m)] ? a[m] + "px": a[m]) + ";");
            typeof a == "string" && (c = l(a) + ":" + (typeof b == "number" && !Q[l(a)] ? b + "px": b));
            return this.each(function() {
                this.style.cssText = this.style.cssText + (";" + c)
            })
        },
        index: function(a) {
            return a ? this.indexOf(d(a)[0]) : this.parent().children().indexOf(this[0])
        },
        hasClass: function(a) {
            return this.length < 1 ? false: s(a).test(this[0].className)
        },
        addClass: function(a) {
            return this.each(function(b) {
                o = [];
                var c = this.className;
                v(this, a, b, c).split(/\s+/g).forEach(function(a) {
                    d(this).hasClass(a) || o.push(a)
                },
                this);
                o.length && (this.className = this.className + ((c ? " ": "") + o.join(" ")))
            })
        },
        removeClass: function(a) {
            return this.each(function(b) {
                if (a === j) return this.className = "";
                o = this.className;
                v(this, a, b, o).split(/\s+/g).forEach(function(a) {
                    o = o.replace(s(a), " ")
                });
                this.className = o.trim()
            })
        },
        toggleClass: function(a, b) {
            return this.each(function(c) {
                c = v(this, a, c, this.className); (b === j ? !d(this).hasClass(c) : b) ? d(this).addClass(c) : d(this).removeClass(c)
            })
        },
        submit: function() {
            return this.each(function() {
                try {
                    this.submit()
                } catch(a) {}
            })
        },
        bind: function(a, b) {
            return this.each(function() {
                C(this, a, b)
            })
        },
        unbind: function(a, b) {
            return this.each(function() {
                D(this, a, b)
            })
        },
        once: function(a, b) {
            return this.each(function(c, d) {
                C(this, a, b, null,
                function(a, b) {
                    return function() {
                        var c = a.apply(d, arguments);
                        D(d, b, a);
                        return c
                    }
                })
            })
        },
        trigger: function(a, b) {
            typeof a == "string" && (a = d.Event(a));
            V(a);
            a.data = b;
            return this.each(function() {
                this.dispatchEvent(a)
            })
        },
        delegate: function(a, b, c) {
            return this.each(function(e, f) {
                C(f, b, c, a,
                function(b) {
                    return function(c) {
                        var e, i = d(c.target).closest(a, f).get(0);
                        if (i) {
                            e = d.extend(R(c), {
                                currentTarget: i,
                                liveFired: f
                            });
                            return b.apply(i, [e].concat([].slice.call(arguments, 1)))
                        }
                    }
                })
            })
        },
        undelegate: function(a, b, c) {
            return this.each(function() {
                D(this, b, c, a)
            })
        },
        anim: function(a, b, c, d) {
           var e = [],
            f,
            i;

            for (i in a) i === "opacity" ? f = a[i] : e.push(i + "(" + a[i] + ")");
            h(d) && this.once(webkit+"TransitionEnd", d);

            /*o["-"+webkit+"-transition"] = "all " + (b !== j ? b: 0.5) + "s " + (c || "");
            o["-"+webkit+"-transform"] = e.join(" ");
            o[opacity] = f;
            console.log(o)*/
            //t,webkitT,MozT,msT,OT
            return this.css({
                "-webkit-transition": "all " + (b !== j ? b: 0.5) + "s " + (c || ""),
                "-webkit-transform": e.join(" "),
                "-moz-transition": "all " + (b !== j ? b: 0.5) + "s " + (c || ""),
                "-moz-transform": e.join(" "),
                "-ms-transition": "all " + (b !== j ? b: 0.5) + "s " + (c || ""),
                "-ms-transform": e.join(" "),
                "-o-transition": "all " + (b !== j ? b: 0.5) + "s " + (c || ""),
                "-o-transform": e.join(" "),
                opacity: f
            })
        }
    }; ["filter", "add", "not", "eq", "first", "last", "find", "closest", "parents", "parent", "children", "siblings"].forEach(function(a) {
        var b = d.fn[a];
        d.fn[a] = function() {
            var a = b.apply(this, arguments);
            a.prevObject = this;
            return a
        }
    }); ["width", "height"].forEach(function(a) {
        d.fn[a] = function(b) {
            var c, e = a.replace(/./,
            function(a) {
                return a[0].toUpperCase()
            });
            return b === j ? this[0] == window ? window["inner" + e] : this[0] == f ? f.documentElement["offset" + e] : (c = this.offset()) && c[a] : this.each(function(c) {
                var e = d(this);
                e.css(a, v(this, b, c, e[a]()))
            })
        }
    }); ["after", "prepend", "before", "append"].forEach(function(a, b) {
        d.fn[a] = function() {
            var a = d.map(arguments,
            function(a) {
                return g(a) ? a: t(a)
            });
            if (a.length < 1) return this;
            var e = this.length,
            f = e > 1,
            i = b < 2;
            return this.each(function(d, j) {
                for (var h = 0; h < a.length; h++) {
                    var g = a[i ? a.length - h - 1 : h];
                    O(g,
                    function(a) {
                        a.nodeName != null && a.nodeName.toUpperCase() === "SCRIPT" && (!a.type || a.type === "text/javascript") && window.eval.call(window, a.innerHTML)
                    });
                    f && d < e - 1 && (g = g.cloneNode(true));
                    X(b, j, g)
                }
            })
        };
        d.fn[b % 2 ? a + "To": "insert" + (b ? "Before": "After")] = function(b) {
            d(b)[a](this);
            return this
        }
    });
    return d
} ();
"_$" in window || (window._$ = Merci); (function(h) {
    function g(e, h, g, i) {
        
        var k = Math.abs(e - h),
        l = Math.abs(g - i);
        return k >= l ? e - h > 0 ? "Left": "Right": g - i > 0 ? "Up": "Down"
    }
    function p() {
        if (e.last && Date.now() - e.last >= y) {
            e.el.trigger("longTap");
            e = {}
        }
    }
    var e = {},
    k, x = window,
    l = x.document,
    y = 750;
    h(l).ready(function() {
        h(l.body).bind("touchstart",
        function(i) {
            var g = Date.now(),
            l = g - (e.last || g);
            e.el = h("tagName" in i.touches[0].target ? i.touches[0].target: i.touches[0].target.parentNode);
            k && clearTimeout(k);
            e.x1 = i.touches[0].pageX;
            e.y1 = i.touches[0].pageY;
            if (l > 0 && l <= 250) e.isDoubleTap = true;
            e.last = g;
            setTimeout(p, y)
        }).bind("touchmove",
        function(i) {
            e.x2 = i.touches[0].pageX;
            e.y2 = i.touches[0].pageY
        }).bind("touchend",
        function() {
            if (e.isDoubleTap) {
                e.el.trigger("doubleTap");
                e = {}
            } else if (e.x2 > 0 || e.y2 > 0) {
                (Math.abs(e.x1 - e.x2) > 30 || Math.abs(e.y1 - e.y2) > 30) && e.el.trigger("swipe") && e.el.trigger("swipe" + g(e.x1, e.x2, e.y1, e.y2));
                e.x1 = e.x2 = e.y1 = e.y2 = e.last = 0
            } else if ("last" in e) {
                e.el.trigger("tap");
                k = setTimeout(function() {
                    k = null;
                    e.el.trigger("singleTap");
                    e = {}
                },
                250)
            }
        }).bind("touchcancel",
        function() {
            e = {}
        });
        var s = 0,
        t = 0,
        z = false;
        setInterval(function() {
            var e = x.innerWidth,
            g = x.innerHeight;
            if (e != s && g != t || z) {
                z = false;
                if (h("*:focus").length) {
                    h("*:focus")[0].blur();
                    setTimeout(function() {
                        z = true
                    },
                    300)
                }
                s = e;
                t = g;
                e = l.createEvent("Events");
                e.width = s;
                e.height = t;
                e.portrait = s < t;
                e.initEvent("viewportchange", true, true);
                l.dispatchEvent(e)
            }
        },
        300)
    }); 
	["touchStart", "touchEnd", "touchMove", "swipe", "swipeLeft", "swipeRight", "swipeUp", "swipeDown", "doubleTap", "tap", "singleTap", "longTap"].forEach(
		function(e, g) {
	        h.fn[e] = function(h) {
	            return this.bind(g < 3 ? e.toLowerCase() : e, h)
	        }
    })
})(Merci);
/* This code constitutes proprietary information of Usablenet Inc. copyright 2012 */
