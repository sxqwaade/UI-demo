function MECarousel(e, p, X, ga, Y, Z, aa, ba, ca, ha, da, ea) {
    function J() {
        _$("#" + D + "IndicatorNumber").html(g + 1);
        K.each(function() {
            var a = _$(this);
            a.attr("data-moveto") == g ? a.addClass("meThumbSelected").attr("src", a.attr("data-select")) : a.removeClass("meThumbSelected").attr("src", a.attr("data-src"))
        })
    }
    function i(a, c) {
        if (!r) {
            c || E();
            var d = g + a;
            j ? d > f && (d = g < f ? f: 0) : u ? d = 0 >= d ? 0 : L(d, f) : d > f ? d = 0 : 0 > d && (d = f);
            d != g && (F(d, a), z._stepCallback(d, j))
        }
    }
    function F(a, c) {
        r = !0;
        g = a;
        k && (o.ZoomOut(), o.SetPanel(_$(b[a])));
        J();
        0 < c && 0 == a && (j || !u) ? (M(A), v( - w, x,
        function() {
            v(0, 0, null);
            r = false
        }), j && (A = N(O, P + x))) : 0 > c && a == f && !u ? v(1, x,
        function() {
            v( - a, 0, null);
            r = false
        }) : v( - a, x,
        function() {
            r = false
        })
    }
    function v(a, c, d) {
        B.anim({
            translate: h * a + "px,0px"
        },
        c / 1E3, "", d)
    }
    function O() {
        i(1, !0)
    }
    function E() {
        j = !1;
        M(A);
        Q.show();
        R.hide()
    }
    function S() {
        var a = _$(b[g]).offset();
        q.css({
            top: 0.5 * a.height + "px",
            left: a.width / 2 + "px"
        })
    }
    function T() {
        C() && (S(), y(0.9), U(y, 1E4))
    }
    function y(a) {
        var a = a ? a: "0",
        c = q[0] && q[0].style ? q[0].style: {};

        c.transition = "opacity 1000ms ease-out";
        c.webkitTransition = "opacity 1000ms ease-out";
        c.mozTransition = "opacity 1000ms ease-out";
        c.msTransition = "opacity 1000ms ease-out";
        c.oTransition = "opacity 1000ms ease-out";
        
        a && (c.opacity = a)
    }
    function C() {
        return G || 90 != s(window.orientation)
    }
    function fa(a) {
        function c() {
            q.css("opacity", "0");
            n ? b.ZoomOut() : (G || 90 != s(window.orientation)) && b.ZoomIn(h, i)
        }
        function d(a, c) {

            var b = n ? f: 1,
            d = t.width * (b - 1) / 2,
            e = t.height * (b - 1) / 2;
            a && (s(l * b) > d && (l = d * (0 <= l ? 1 : -1) / b), s(m * b) > e && (m = e * (0 <= m ? 1 : -1) / b));

            //document.title = c;
            _$(t).anim({
                scale: b,
                translate: "" + H(l) + "px," + H(m) + "px"
            },
            c / 1E3, "ease-out")
        }
        function e(a, b) {
            var c = 1E3 * (s(a) / b);
            return {
                dist: c * c / 2E3,
                time: H(c / 1)
            }
        }
        var b = this,
        f = 3,
        g, l, m, j, k, h, i, o, p = a,
        t = _$("img", a)[0];
        q.doubleTap(c).touchStart(function(a) {
            var b = a.touches[0];
            o = a.timeStamp;
            h = b.pageX;
            i = b.pageY
        });
        b.SetPanel = function(a) {
            p = a;
            t = _$("img", a)[0]
        };
        b.bindPanel = function(a) {
            a.doubleTap(c).touchStart(function(a) {
                var b = a.touches[0];
                o = a.timeStamp;
                h = b.pageX;
                i = b.pageY;
                n && (j = l, k = m, a.preventDefault())
            }).touchMove(function(a) {
                g = !0;
                a = a.touches; ! a[1] && n && (l = j + (a[0].pageX - h) / f, m = k + (a[0].pageY - i) / f, d(!1, 100))
                //document.title = a[0].pageX;
            }).touchEnd(function(a) {
                if (n && g) {
                    var a = a.timeStamp - o,
                    b = e(l - j, a),
                    c = e(m - k, a);
                    l += b.dist * (j > l ? -1 : 1);
                    m += c.dist * (k > m ? -1 : 1);
                    d(!0, a + V(V(b.time, c.time), 1))
                }
                g = !1
            })
        };
        b.ZoomIn = function(a, b) {
            h = a;
            i = b;
            n = !n;
            var c = p.offset();
            l = c.left + t.width / 2 - h;
            m = c.top + t.height / 2 - i;
            d(!0, 500);
            r = !0
        };
        b.ZoomOut = function() {
            n && (n = !n, m = l = 0, d(!0, 500), r = !1)
        }
    }
    var z = this,
    D = e,
    Q = _$("#" + e + "Play"),
    R = _$("#" + e + "Pause"),
    q = _$("#" + e + "Overlay"),
    P = aa,
    j = !1,
    x = Z,
    B,
    b,
    w,
    h,
    g,
    f,
    A,
    u = Y,
    r = !1,
    o,
    k = ca,
    n,
    K,
    G = da,
    L = Math.min,
    N = setInterval,
    U = setTimeout,
    M = clearTimeout,
    s = Math.abs,
    I,
    W = {
        width: window.innerWidth,
        height: window.innerHeight,
        portrait: window.innerWidth < window.innerHeight
    },
    H = Math.round,
    V = Math.max;
    this._redraw = function() {
        z._orientationCallback(W);
        var a = Math.round(_$(b[0]).width());
        k && (C() || G ? S() : q.css("opacity", "0"), o.ZoomOut());
        h = a;
        B.css({
            width: h * (w + 2) + "px",
            left: -h + "px"
        });
        1 < b.length && F(g, 0)
    };
    this._isFirst = function() {
        return u && 0 == g
    };
    this._isLast = function() {
        return u && g == f
    };
    this._click = function(a) {
        i(a)
    };
    this._orientationCallback = function() {};
    this._stepCallback = function() {};
    this._moveTo = function(a) {
        var b = a - g;
        k ? (o.ZoomOut(), setTimeout(function() {
            i(b, !0)
        },
        500)) : i(b, !0)
    };
    this._setImg = function(a, c) {
        _$("img", b[a]).attr("src", c);
        0 == a && _$("img", b[f].nextSibling).attr("src", c);
        a == f && _$("img", b[0].previousSibling).attr("src", c)
    };
    this._toggle = function() {
        j ? E() : (j = !0, A = N(O, P + x), Q.hide(), R.show())
    };
    e = _$("#" + D);
    B = e.find("." + p);
    b = e.find("." + X);
    k && (o = new fa(_$(b[0])));
    w = b.length;
    p = _$("#" + D + "Paginate");
    g = 0;
    h = _$(b[0]).width();
    b.each(function() {
        _$(this).css({
            "float": "left"
        }).touchStart(function(a) {
            I = a.touches[0]
        }).touchMove(function(a) {
            var b = a.touches[0],
            d = s(b.pageX - I.pageX),
            b = s(b.pageY - I.pageY);
            d > b && a.preventDefault()
        }).swipeLeft(function() {
            i(1);
            y()
        }).swipeRight(function() {
            i( - 1);
            y()
        }).tap(function() {
            k && (!n && C()) && (0 == q.css("opacity") ? T() : y())
        });
        k && o.bindPanel(_$(this))
    });
    f = w - 1;
    _$(b[f]).after(_$(b[0].cloneNode(!0)));
    _$(b[0]).before(_$(b[f].cloneNode(!0)));
    B.css({
        width: h * (w + 2) + "px",
        left: -h + "px"
    });
    K = p.find("span img").bind("click",
    function(a) {
        E();
        a = parseInt(_$(a.target).attr("data-moveto"));
        a = L(a, f);
        F(a, a > g ? 1 : -1);
        z._stepCallback(a, j)
    });
    J();
    _$(window).bind("viewportchange",
    function(a) {
        W = a;
        z._redraw()
    });
    this._redraw();
    ba && this._toggle();
    k && (ea && C()) && U(T, 1E3)
}
MECarousel.prototype.click = function(e) {
    this._click(e)
};
MECarousel.prototype.moveTo = function(e) {
    this._moveTo(e)
};
MECarousel.prototype.setImg = function(e, p) {
    this._setImg(e, p)
};
MECarousel.prototype.toggle = function() {
    this._toggle()
};
MECarousel.prototype.isFirst = function() {
    return this._isFirst()
};
MECarousel.prototype.isLast = function() {
    return this._isLast()
};
MECarousel.prototype.setOrientationCallback = function(e) {
    this._orientationCallback = e;
    this._redraw()
};
MECarousel.prototype.setStepCallback = function(e) {
    this._stepCallback = e
};
window.MECarousel = MECarousel;