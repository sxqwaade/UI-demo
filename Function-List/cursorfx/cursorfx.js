// JavaScript Document
// JavaScript Document!
!
function(n) {
    for (var e = 0,
    a = ["webkit", "moz"], t = n.requestAnimationFrame, i = n.cancelAnimationFrame, m = a.length; --m >= 0 && !t;) t = n[a[m] + "RequestAnimationFrame"],
    i = n[a[m] + "CancelAnimationFrame"];
    t && i || (t = function(n) {
        var a = Date.now(),
        t = Math.max(e + 16, a);
        return setTimeout(function() {
            n(e = t)
        },
        t - a)
    },
    i = clearTimeout),
    n.requestAnimationFrame = t,
    n.cancelAnimationFrame = i
} (window),
function(t) {
    "use strict";
    var e = t.GreenSockGlobals || t;
    if (!e.TweenLite) {
        var i, s, r, n, a, o = function(t) {
            var i, s = t.split("."),
            r = e;
            for (i = 0; s.length > i; i++) r[s[i]] = r = r[s[i]] || {};
            return r
        },
        l = o("com.greensock"),
        h = 1e-10,
        _ = [].slice,
        u = function() {},
        m = function() {
            var t = Object.prototype.toString,
            e = t.call([]);
            return function(i) {
                return i instanceof Array || "object" == typeof i && !!i.push && t.call(i) === e
            }
        } (),
        f = {},
        p = function(i, s, r, n) {
            this.sc = f[i] ? f[i].sc: [],
            f[i] = this,
            this.gsClass = null,
            this.func = r;
            var a = [];
            this.check = function(l) {
                for (var h, _, u, m, c = s.length,
                d = c; --c > -1;)(h = f[s[c]] || new p(s[c], [])).gsClass ? (a[c] = h.gsClass, d--) : l && h.sc.push(this);
                if (0 === d && r) for (_ = ("com.greensock." + i).split("."), u = _.pop(), m = o(_.join("."))[u] = this.gsClass = r.apply(r, a), n && (e[u] = m, "function" == typeof define && define.amd ? define((t.GreenSockAMDPath ? t.GreenSockAMDPath + "/": "") + i.split(".").join("/"), [],
                function() {
                    return m
                }) : "undefined" != typeof module && module.exports && (module.exports = m)), c = 0; this.sc.length > c; c++) this.sc[c].check()
            },
            this.check(!0)
        },
        c = t._gsDefine = function(t, e, i, s) {
            return new p(t, e, i, s)
        },
        d = l._class = function(t, e, i) {
            return e = e ||
            function() {},
            c(t, [],
            function() {
                return e
            },
            i),
            e
        };
        c.globals = e;
        var v = [0, 0, 1, 1],
        g = [],
        T = d("easing.Ease",
        function(t, e, i, s) {
            this._func = t,
            this._type = i || 0,
            this._power = s || 0,
            this._params = e ? v.concat(e) : v
        },
        !0),
        w = T.map = {},
        P = T.register = function(t, e, i, s) {
            for (var r, n, a, o, h = e.split(","), _ = h.length, u = (i || "easeIn,easeOut,easeInOut").split(","); --_ > -1;) for (n = h[_], r = s ? d("easing." + n, null, !0) : l.easing[n] || {},
            a = u.length; --a > -1;) o = u[a],
            w[n + "." + o] = w[o + n] = r[o] = t.getRatio ? t: t[o] || new t
        };
        for (r = T.prototype, r._calcEnd = !1, r.getRatio = function(t) {
            if (this._func) return this._params[0] = t,
            this._func.apply(null, this._params);
            var e = this._type,
            i = this._power,
            s = 1 === e ? 1 - t: 2 === e ? t: .5 > t ? 2 * t: 2 * (1 - t);
            return 1 === i ? s *= s: 2 === i ? s *= s * s: 3 === i ? s *= s * s * s: 4 === i && (s *= s * s * s * s),
            1 === e ? 1 - s: 2 === e ? s: .5 > t ? s / 2 : 1 - s / 2
        },
        i = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], s = i.length; --s > -1;) r = i[s] + ",Power" + s,
        P(new T(null, null, 1, s), r, "easeOut", !0),
        P(new T(null, null, 2, s), r, "easeIn" + (0 === s ? ",easeNone": "")),
        P(new T(null, null, 3, s), r, "easeInOut");
        w.linear = l.easing.Linear.easeIn,
        w.swing = l.easing.Quad.easeInOut;
        var y = d("events.EventDispatcher",
        function(t) {
            this._listeners = {},
            this._eventTarget = t || this
        });
        r = y.prototype,
        r.addEventListener = function(t, e, i, s, r) {
            r = r || 0;
            var o, l, h = this._listeners[t],
            _ = 0;
            for (null == h && (this._listeners[t] = h = []), l = h.length; --l > -1;) o = h[l],
            o.c === e && o.s === i ? h.splice(l, 1) : 0 === _ && r > o.pr && (_ = l + 1);
            h.splice(_, 0, {
                c: e,
                s: i,
                up: s,
                pr: r
            }),
            this !== n || a || n.wake()
        },
        r.removeEventListener = function(t, e) {
            var i, s = this._listeners[t];
            if (s) for (i = s.length; --i > -1;) if (s[i].c === e) return s.splice(i, 1),
            void 0
        },
        r.dispatchEvent = function(t) {
            var e, i, s, r = this._listeners[t];
            if (r) for (e = r.length, i = this._eventTarget; --e > -1;) s = r[e],
            s.up ? s.c.call(s.s || i, {
                type: t,
                target: i
            }) : s.c.call(s.s || i)
        };
        var b = t.requestAnimationFrame,
        k = t.cancelAnimationFrame,
        A = Date.now ||
        function() {
            return (new Date).getTime()
        },
        S = A();
        for (i = ["ms", "moz", "webkit", "o"], s = i.length; --s > -1 && !b;) b = t[i[s] + "RequestAnimationFrame"],
        k = t[i[s] + "CancelAnimationFrame"] || t[i[s] + "CancelRequestAnimationFrame"];
        d("Ticker",
        function(t, e) {
            var i, s, r, o, l, h = this,
            _ = A(),
            m = e !== !1 && b,
            f = function(t) {
                S = A(),
                h.time = (S - _) / 1e3;
                var e, n = h.time - l; (!i || n > 0 || t === !0) && (h.frame++, l += n + (n >= o ? .004 : o - n), e = !0),
                t !== !0 && (r = s(f)),
                e && h.dispatchEvent("tick")
            };
            y.call(h),
            h.time = h.frame = 0,
            h.tick = function() {
                f(!0)
            },
            h.sleep = function() {
                null != r && (m && k ? k(r) : clearTimeout(r), s = u, r = null, h === n && (a = !1))
            },
            h.wake = function() {
                null !== r && h.sleep(),
                s = 0 === i ? u: m && b ? b: function(t) {
                    return setTimeout(t, 0 | 1e3 * (l - h.time) + 1)
                },
                h === n && (a = !0),
                f(2)
            },
            h.fps = function(t) {
                return arguments.length ? (i = t, o = 1 / (i || 60), l = this.time + o, h.wake(), void 0) : i
            },
            h.useRAF = function(t) {
                return arguments.length ? (h.sleep(), m = t, h.fps(i), void 0) : m
            },
            h.fps(t),
            setTimeout(function() {
                m && (!r || 5 > h.frame) && h.useRAF(!1)
            },
            1500)
        }),
        r = l.Ticker.prototype = new l.events.EventDispatcher,
        r.constructor = l.Ticker;
        var x = d("core.Animation",
        function(t, e) {
            if (this.vars = e = e || {},
            this._duration = this._totalDuration = t || 0, this._delay = Number(e.delay) || 0, this._timeScale = 1, this._active = e.immediateRender === !0, this.data = e.data, this._reversed = e.reversed === !0, Q) {
                a || n.wake();
                var i = this.vars.useFrames ? G: Q;
                i.add(this, i._time),
                this.vars.paused && this.paused(!0)
            }
        });
        n = x.ticker = new l.Ticker,
        r = x.prototype,
        r._dirty = r._gc = r._initted = r._paused = !1,
        r._totalTime = r._time = 0,
        r._rawPrevTime = -1,
        r._next = r._last = r._onUpdate = r._timeline = r.timeline = null,
        r._paused = !1;
        var C = function() {
            A() - S > 2e3 && n.wake(),
            setTimeout(C, 2e3)
        };
        C(),
        r.play = function(t, e) {
            return arguments.length && this.seek(t, e),
            this.reversed(!1).paused(!1)
        },
        r.pause = function(t, e) {
            return arguments.length && this.seek(t, e),
            this.paused(!0)
        },
        r.resume = function(t, e) {
            return arguments.length && this.seek(t, e),
            this.paused(!1)
        },
        r.seek = function(t, e) {
            return this.totalTime(Number(t), e !== !1)
        },
        r.restart = function(t, e) {
            return this.reversed(!1).paused(!1).totalTime(t ? -this._delay: 0, e !== !1, !0)
        },
        r.reverse = function(t, e) {
            return arguments.length && this.seek(t || this.totalDuration(), e),
            this.reversed(!0).paused(!1)
        },
        r.render = function() {},
        r.invalidate = function() {
            return this
        },
        r.isActive = function() {
            var t, e = this._timeline,
            i = this._startTime;
            return ! e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime()) >= i && i + this.totalDuration() / this._timeScale > t
        },
        r._enabled = function(t, e) {
            return a || n.wake(),
            this._gc = !t,
            this._active = this.isActive(),
            e !== !0 && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)),
            !1
        },
        r._kill = function() {
            return this._enabled(!1, !1)
        },
        r.kill = function(t, e) {
            return this._kill(t, e),
            this
        },
        r._uncache = function(t) {
            for (var e = t ? this: this.timeline; e;) e._dirty = !0,
            e = e.timeline;
            return this
        },
        r._swapSelfInParams = function(t) {
            for (var e = t.length,
            i = t.concat(); --e > -1;)"{self}" === t[e] && (i[e] = this);
            return i
        },
        r.eventCallback = function(t, e, i, s) {
            if ("on" === (t || "").substr(0, 2)) {
                var r = this.vars;
                if (1 === arguments.length) return r[t];
                null == e ? delete r[t] : (r[t] = e, r[t + "Params"] = m(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i, r[t + "Scope"] = s),
                "onUpdate" === t && (this._onUpdate = e)
            }
            return this
        },
        r.delay = function(t) {
            return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), this._delay = t, this) : this._delay
        },
        r.duration = function(t) {
            return arguments.length ? (this._duration = this._totalDuration = t, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0), this) : (this._dirty = !1, this._duration)
        },
        r.totalDuration = function(t) {
            return this._dirty = !1,
            arguments.length ? this.duration(t) : this._totalDuration
        },
        r.time = function(t, e) {
            return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration: t, e)) : this._time
        },
        r.totalTime = function(t, e, i) {
            if (a || n.wake(), !arguments.length) return this._totalTime;
            if (this._timeline) {
                if (0 > t && !i && (t += this.totalDuration()), this._timeline.smoothChildTiming) {
                    this._dirty && this.totalDuration();
                    var s = this._totalDuration,
                    r = this._timeline;
                    if (t > s && !i && (t = s), this._startTime = (this._paused ? this._pauseTime: r._time) - (this._reversed ? s - t: t) / this._timeScale, r._dirty || this._uncache(!1), r._timeline) for (; r._timeline;) r._timeline._time !== (r._startTime + r._totalTime) / r._timeScale && r.totalTime(r._totalTime, !0),
                    r = r._timeline
                }
                this._gc && this._enabled(!0, !1),
                (this._totalTime !== t || 0 === this._duration) && this.render(t, e, !1)
            }
            return this
        },
        r.progress = r.totalProgress = function(t, e) {
            return arguments.length ? this.totalTime(this.duration() * t, e) : this._time / this.duration()
        },
        r.startTime = function(t) {
            return arguments.length ? (t !== this._startTime && (this._startTime = t, this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime
        },
        r.timeScale = function(t) {
            if (!arguments.length) return this._timeScale;
            if (t = t || h, this._timeline && this._timeline.smoothChildTiming) {
                var e = this._pauseTime,
                i = e || 0 === e ? e: this._timeline.totalTime();
                this._startTime = i - (i - this._startTime) * this._timeScale / t
            }
            return this._timeScale = t,
            this._uncache(!1)
        },
        r.reversed = function(t) {
            return arguments.length ? (t != this._reversed && (this._reversed = t, this.totalTime(this._totalTime, !0)), this) : this._reversed
        },
        r.paused = function(t) {
            if (!arguments.length) return this._paused;
            if (t != this._paused && this._timeline) {
                a || t || n.wake();
                var e = this._timeline,
                i = e.rawTime(),
                s = i - this._pauseTime; ! t && e.smoothChildTiming && (this._startTime += s, this._uncache(!1)),
                this._pauseTime = t ? i: null,
                this._paused = t,
                this._active = this.isActive(),
                !t && 0 !== s && this._initted && this.duration() && this.render(e.smoothChildTiming ? this._totalTime: (i - this._startTime) / this._timeScale, !0, !0)
            }
            return this._gc && !t && this._enabled(!0, !1),
            this
        };
        var R = d("core.SimpleTimeline",
        function(t) {
            x.call(this, 0, t),
            this.autoRemoveChildren = this.smoothChildTiming = !0
        });
        r = R.prototype = new x,
        r.constructor = R,
        r.kill()._gc = !1,
        r._first = r._last = null,
        r._sortChildren = !1,
        r.add = r.insert = function(t, e) {
            var i, s;
            if (t._startTime = Number(e || 0) + t._delay, t._paused && this !== t._timeline && (t._pauseTime = t._startTime + (this.rawTime() - t._startTime) / t._timeScale), t.timeline && t.timeline._remove(t, !0), t.timeline = t._timeline = this, t._gc && t._enabled(!0, !0), i = this._last, this._sortChildren) for (s = t._startTime; i && i._startTime > s;) i = i._prev;
            return i ? (t._next = i._next, i._next = t) : (t._next = this._first, this._first = t),
            t._next ? t._next._prev = t: this._last = t,
            t._prev = i,
            this._timeline && this._uncache(!0),
            this
        },
        r._remove = function(t, e) {
            return t.timeline === this && (e || t._enabled(!1, !0), t.timeline = null, t._prev ? t._prev._next = t._next: this._first === t && (this._first = t._next), t._next ? t._next._prev = t._prev: this._last === t && (this._last = t._prev), this._timeline && this._uncache(!0)),
            this
        },
        r.render = function(t, e, i) {
            var s, r = this._first;
            for (this._totalTime = this._time = this._rawPrevTime = t; r;) s = r._next,
            (r._active || t >= r._startTime && !r._paused) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, i) : r.render((t - r._startTime) * r._timeScale, e, i)),
            r = s
        },
        r.rawTime = function() {
            return a || n.wake(),
            this._totalTime
        };
        var D = d("TweenLite",
        function(e, i, s) {
            if (x.call(this, i, s), this.render = D.prototype.render, null == e) throw "Cannot tween a null target.";
            this.target = e = "string" != typeof e ? e: D.selector(e) || e;
            var r, n, a, o = e.jquery || e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType),
            l = this.vars.overwrite;
            if (this._overwrite = l = null == l ? j[D.defaultOverwrite] : "number" == typeof l ? l >> 0 : j[l], (o || e instanceof Array || e.push && m(e)) && "number" != typeof e[0]) for (this._targets = a = _.call(e, 0), this._propLookup = [], this._siblings = [], r = 0; a.length > r; r++) n = a[r],
            n ? "string" != typeof n ? n.length && n !== t && n[0] && (n[0] === t || n[0].nodeType && n[0].style && !n.nodeType) ? (a.splice(r--, 1), this._targets = a = a.concat(_.call(n, 0))) : (this._siblings[r] = B(n, this, !1), 1 === l && this._siblings[r].length > 1 && q(n, this, null, 1, this._siblings[r])) : (n = a[r--] = D.selector(n), "string" == typeof n && a.splice(r + 1, 1)) : a.splice(r--, 1);
            else this._propLookup = {},
            this._siblings = B(e, this, !1),
            1 === l && this._siblings.length > 1 && q(e, this, null, 1, this._siblings); (this.vars.immediateRender || 0 === i && 0 === this._delay && this.vars.immediateRender !== !1) && this.render( - this._delay, !1, !0)
        },
        !0),
        E = function(e) {
            return e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType)
        },
        I = function(t, e) {
            var i, s = {};
            for (i in t) F[i] || i in e && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!N[i] || N[i] && N[i]._autoCSS) || (s[i] = t[i], delete t[i]);
            t.css = s
        };
        r = D.prototype = new x,
        r.constructor = D,
        r.kill()._gc = !1,
        r.ratio = 0,
        r._firstPT = r._targets = r._overwrittenProps = r._startAt = null,
        r._notifyPluginsOfEnabled = !1,
        D.version = "1.11.1",
        D.defaultEase = r._ease = new T(null, null, 1, 1),
        D.defaultOverwrite = "auto",
        D.ticker = n,
        D.autoSleep = !0,
        D.selector = t.$ || t.jQuery ||
        function(e) {
            return t.$ ? (D.selector = t.$, t.$(e)) : t.document ? t.document.getElementById("#" === e.charAt(0) ? e.substr(1) : e) : e
        };
        var O = D._internals = {
            isArray: m,
            isSelector: E
        },
        N = D._plugins = {},
        L = D._tweenLookup = {},
        U = 0,
        F = O.reservedProps = {
            ease: 1,
            delay: 1,
            overwrite: 1,
            onComplete: 1,
            onCompleteParams: 1,
            onCompleteScope: 1,
            useFrames: 1,
            runBackwards: 1,
            startAt: 1,
            onUpdate: 1,
            onUpdateParams: 1,
            onUpdateScope: 1,
            onStart: 1,
            onStartParams: 1,
            onStartScope: 1,
            onReverseComplete: 1,
            onReverseCompleteParams: 1,
            onReverseCompleteScope: 1,
            onRepeat: 1,
            onRepeatParams: 1,
            onRepeatScope: 1,
            easeParams: 1,
            yoyo: 1,
            immediateRender: 1,
            repeat: 1,
            repeatDelay: 1,
            data: 1,
            paused: 1,
            reversed: 1,
            autoCSS: 1
        },
        j = {
            none: 0,
            all: 1,
            auto: 2,
            concurrent: 3,
            allOnStart: 4,
            preexisting: 5,
            "true": 1,
            "false": 0
        },
        G = x._rootFramesTimeline = new R,
        Q = x._rootTimeline = new R;
        Q._startTime = n.time,
        G._startTime = n.frame,
        Q._active = G._active = !0,
        x._updateRoot = function() {
            if (Q.render((n.time - Q._startTime) * Q._timeScale, !1, !1), G.render((n.frame - G._startTime) * G._timeScale, !1, !1), !(n.frame % 120)) {
                var t, e, i;
                for (i in L) {
                    for (e = L[i].tweens, t = e.length; --t > -1;) e[t]._gc && e.splice(t, 1);
                    0 === e.length && delete L[i]
                }
                if (i = Q._first, (!i || i._paused) && D.autoSleep && !G._first && 1 === n._listeners.tick.length) {
                    for (; i && i._paused;) i = i._next;
                    i || n.sleep()
                }
            }
        },
        n.addEventListener("tick", x._updateRoot);
        var B = function(t, e, i) {
            var s, r, n = t._gsTweenID;
            if (L[n || (t._gsTweenID = n = "t" + U++)] || (L[n] = {
                target: t,
                tweens: []
            }), e && (s = L[n].tweens, s[r = s.length] = e, i)) for (; --r > -1;) s[r] === e && s.splice(r, 1);
            return L[n].tweens
        },
        q = function(t, e, i, s, r) {
            var n, a, o, l;
            if (1 === s || s >= 4) {
                for (l = r.length, n = 0; l > n; n++) if ((o = r[n]) !== e) o._gc || o._enabled(!1, !1) && (a = !0);
                else if (5 === s) break;
                return a
            }
            var _, u = e._startTime + h,
            m = [],
            f = 0,
            p = 0 === e._duration;
            for (n = r.length; --n > -1;)(o = r[n]) === e || o._gc || o._paused || (o._timeline !== e._timeline ? (_ = _ || $(e, 0, p), 0 === $(o, _, p) && (m[f++] = o)) : u >= o._startTime && o._startTime + o.totalDuration() / o._timeScale + h > u && ((p || !o._initted) && 2e-10 >= u - o._startTime || (m[f++] = o)));
            for (n = f; --n > -1;) o = m[n],
            2 === s && o._kill(i, t) && (a = !0),
            (2 !== s || !o._firstPT && o._initted) && o._enabled(!1, !1) && (a = !0);
            return a
        },
        $ = function(t, e, i) {
            for (var s = t._timeline,
            r = s._timeScale,
            n = t._startTime; s._timeline;) {
                if (n += s._startTime, r *= s._timeScale, s._paused) return - 100;
                s = s._timeline
            }
            return n /= r,
            n > e ? n - e: i && n === e || !t._initted && 2 * h > n - e ? h: (n += t.totalDuration() / t._timeScale / r) > e + h ? 0 : n - e - h
        };
        r._init = function() {
            var t, e, i, s, r = this.vars,
            n = this._overwrittenProps,
            a = this._duration,
            o = r.immediateRender,
            l = r.ease;
            if (r.startAt) {
                if (this._startAt && this._startAt.render( - 1, !0), r.startAt.overwrite = 0, r.startAt.immediateRender = !0, this._startAt = D.to(this.target, 0, r.startAt), o) if (this._time > 0) this._startAt = null;
                else if (0 !== a) return
            } else if (r.runBackwards && 0 !== a) if (this._startAt) this._startAt.render( - 1, !0),
            this._startAt = null;
            else {
                i = {};
                for (s in r) F[s] && "autoCSS" !== s || (i[s] = r[s]);
                if (i.overwrite = 0, i.data = "isFromStart", this._startAt = D.to(this.target, 0, i), r.immediateRender) {
                    if (0 === this._time) return
                } else this._startAt.render( - 1, !0)
            }
            if (this._ease = l ? l instanceof T ? r.easeParams instanceof Array ? l.config.apply(l, r.easeParams) : l: "function" == typeof l ? new T(l, r.easeParams) : w[l] || D.defaultEase: D.defaultEase, this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets) for (t = this._targets.length; --t > -1;) this._initProps(this._targets[t], this._propLookup[t] = {},
            this._siblings[t], n ? n[t] : null) && (e = !0);
            else e = this._initProps(this.target, this._propLookup, this._siblings, n);
            if (e && D._onPluginEvent("_onInitAllProps", this), n && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), r.runBackwards) for (i = this._firstPT; i;) i.s += i.c,
            i.c = -i.c,
            i = i._next;
            this._onUpdate = r.onUpdate,
            this._initted = !0
        },
        r._initProps = function(e, i, s, r) {
            var n, a, o, l, h, _;
            if (null == e) return ! 1;
            this.vars.css || e.style && e !== t && e.nodeType && N.css && this.vars.autoCSS !== !1 && I(this.vars, e);
            for (n in this.vars) {
                if (_ = this.vars[n], F[n]) _ && (_ instanceof Array || _.push && m(_)) && -1 !== _.join("").indexOf("{self}") && (this.vars[n] = _ = this._swapSelfInParams(_, this));
                else if (N[n] && (l = new N[n])._onInitTween(e, this.vars[n], this)) {
                    for (this._firstPT = h = {
                        _next: this._firstPT,
                        t: l,
                        p: "setRatio",
                        s: 0,
                        c: 1,
                        f: !0,
                        n: n,
                        pg: !0,
                        pr: l._priority
                    },
                    a = l._overwriteProps.length; --a > -1;) i[l._overwriteProps[a]] = this._firstPT; (l._priority || l._onInitAllProps) && (o = !0),
                    (l._onDisable || l._onEnable) && (this._notifyPluginsOfEnabled = !0)
                } else this._firstPT = i[n] = h = {
                    _next: this._firstPT,
                    t: e,
                    p: n,
                    f: "function" == typeof e[n],
                    n: n,
                    pg: !1,
                    pr: 0
                },
                h.s = h.f ? e[n.indexOf("set") || "function" != typeof e["get" + n.substr(3)] ? n: "get" + n.substr(3)]() : parseFloat(e[n]),
                h.c = "string" == typeof _ && "=" === _.charAt(1) ? parseInt(_.charAt(0) + "1", 10) * Number(_.substr(2)) : Number(_) - h.s || 0;
                h && h._next && (h._next._prev = h)
            }
            return r && this._kill(r, e) ? this._initProps(e, i, s, r) : this._overwrite > 1 && this._firstPT && s.length > 1 && q(e, this, i, this._overwrite, s) ? (this._kill(i, e), this._initProps(e, i, s, r)) : o
        },
        r.render = function(t, e, i) {
            var s, r, n, a, o = this._time,
            l = this._duration;
            if (t >= l) this._totalTime = this._time = l,
            this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1,
            this._reversed || (s = !0, r = "onComplete"),
            0 === l && (a = this._rawPrevTime, (0 === t || 0 > a || a === h) && a !== t && (i = !0, a > h && (r = "onReverseComplete")), this._rawPrevTime = a = !e || t ? t: h);
            else if (1e-7 > t) this._totalTime = this._time = 0,
            this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0,
            (0 !== o || 0 === l && this._rawPrevTime > h) && (r = "onReverseComplete", s = this._reversed),
            0 > t ? (this._active = !1, 0 === l && (this._rawPrevTime >= 0 && (i = !0), this._rawPrevTime = a = !e || t ? t: h)) : this._initted || (i = !0);
            else if (this._totalTime = this._time = t, this._easeType) {
                var _ = t / l,
                u = this._easeType,
                m = this._easePower; (1 === u || 3 === u && _ >= .5) && (_ = 1 - _),
                3 === u && (_ *= 2),
                1 === m ? _ *= _: 2 === m ? _ *= _ * _: 3 === m ? _ *= _ * _ * _: 4 === m && (_ *= _ * _ * _ * _),
                this.ratio = 1 === u ? 1 - _: 2 === u ? _: .5 > t / l ? _ / 2 : 1 - _ / 2
            } else this.ratio = this._ease.getRatio(t / l);
            if (this._time !== o || i) {
                if (!this._initted) {
                    if (this._init(), !this._initted || this._gc) return;
                    this._time && !s ? this.ratio = this._ease.getRatio(this._time / l) : s && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                }
                for (this._active || !this._paused && this._time !== o && t >= 0 && (this._active = !0), 0 === o && (this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : r || (r = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === l) && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || g))), n = this._firstPT; n;) n.f ? n.t[n.p](n.c * this.ratio + n.s) : n.t[n.p] = n.c * this.ratio + n.s,
                n = n._next;
                this._onUpdate && (0 > t && this._startAt && this._startTime && this._startAt.render(t, e, i), e || i && 0 === this._time && 0 === o || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || g)),
                r && (this._gc || (0 > t && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(t, e, i), s && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this.vars[r].apply(this.vars[r + "Scope"] || this, this.vars[r + "Params"] || g), 0 === l && this._rawPrevTime === h && a !== h && (this._rawPrevTime = 0)))
            }
        },
        r._kill = function(t, e) {
            if ("all" === t && (t = null), null == t && (null == e || e === this.target)) return this._enabled(!1, !1);
            e = "string" != typeof e ? e || this._targets || this.target: D.selector(e) || e;
            var i, s, r, n, a, o, l, h;
            if ((m(e) || E(e)) && "number" != typeof e[0]) for (i = e.length; --i > -1;) this._kill(t, e[i]) && (o = !0);
            else {
                if (this._targets) {
                    for (i = this._targets.length; --i > -1;) if (e === this._targets[i]) {
                        a = this._propLookup[i] || {},
                        this._overwrittenProps = this._overwrittenProps || [],
                        s = this._overwrittenProps[i] = t ? this._overwrittenProps[i] || {}: "all";
                        break
                    }
                } else {
                    if (e !== this.target) return ! 1;
                    a = this._propLookup,
                    s = this._overwrittenProps = t ? this._overwrittenProps || {}: "all"
                }
                if (a) {
                    l = t || a,
                    h = t !== s && "all" !== s && t !== a && ("object" != typeof t || !t._tempKill);
                    for (r in l)(n = a[r]) && (n.pg && n.t._kill(l) && (o = !0), n.pg && 0 !== n.t._overwriteProps.length || (n._prev ? n._prev._next = n._next: n === this._firstPT && (this._firstPT = n._next), n._next && (n._next._prev = n._prev), n._next = n._prev = null), delete a[r]),
                    h && (s[r] = 1); ! this._firstPT && this._initted && this._enabled(!1, !1)
                }
            }
            return o
        },
        r.invalidate = function() {
            return this._notifyPluginsOfEnabled && D._onPluginEvent("_onDisable", this),
            this._firstPT = null,
            this._overwrittenProps = null,
            this._onUpdate = null,
            this._startAt = null,
            this._initted = this._active = this._notifyPluginsOfEnabled = !1,
            this._propLookup = this._targets ? {}: [],
            this
        },
        r._enabled = function(t, e) {
            if (a || n.wake(), t && this._gc) {
                var i, s = this._targets;
                if (s) for (i = s.length; --i > -1;) this._siblings[i] = B(s[i], this, !0);
                else this._siblings = B(this.target, this, !0)
            }
            return x.prototype._enabled.call(this, t, e),
            this._notifyPluginsOfEnabled && this._firstPT ? D._onPluginEvent(t ? "_onEnable": "_onDisable", this) : !1
        },
        D.to = function(t, e, i) {
            return new D(t, e, i)
        },
        D.from = function(t, e, i) {
            return i.runBackwards = !0,
            i.immediateRender = 0 != i.immediateRender,
            new D(t, e, i)
        },
        D.fromTo = function(t, e, i, s) {
            return s.startAt = i,
            s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender,
            new D(t, e, s)
        },
        D.delayedCall = function(t, e, i, s, r) {
            return new D(e, 0, {
                delay: t,
                onComplete: e,
                onCompleteParams: i,
                onCompleteScope: s,
                onReverseComplete: e,
                onReverseCompleteParams: i,
                onReverseCompleteScope: s,
                immediateRender: !1,
                useFrames: r,
                overwrite: 0
            })
        },
        D.set = function(t, e) {
            return new D(t, 0, e)
        },
        D.getTweensOf = function(t, e) {
            if (null == t) return [];
            t = "string" != typeof t ? t: D.selector(t) || t;
            var i, s, r, n;
            if ((m(t) || E(t)) && "number" != typeof t[0]) {
                for (i = t.length, s = []; --i > -1;) s = s.concat(D.getTweensOf(t[i], e));
                for (i = s.length; --i > -1;) for (n = s[i], r = i; --r > -1;) n === s[r] && s.splice(i, 1)
            } else for (s = B(t).concat(), i = s.length; --i > -1;)(s[i]._gc || e && !s[i].isActive()) && s.splice(i, 1);
            return s
        },
        D.killTweensOf = D.killDelayedCallsTo = function(t, e, i) {
            "object" == typeof e && (i = e, e = !1);
            for (var s = D.getTweensOf(t, e), r = s.length; --r > -1;) s[r]._kill(i, t)
        };
        var M = d("plugins.TweenPlugin",
        function(t, e) {
            this._overwriteProps = (t || "").split(","),
            this._propName = this._overwriteProps[0],
            this._priority = e || 0,
            this._super = M.prototype
        },
        !0);
        if (r = M.prototype, M.version = "1.10.1", M.API = 2, r._firstPT = null, r._addTween = function(t, e, i, s, r, n) {
            var a, o;
            return null != s && (a = "number" == typeof s || "=" !== s.charAt(1) ? Number(s) - i: parseInt(s.charAt(0) + "1", 10) * Number(s.substr(2))) ? (this._firstPT = o = {
                _next: this._firstPT,
                t: t,
                p: e,
                s: i,
                c: a,
                f: "function" == typeof t[e],
                n: r || e,
                r: n
            },
            o._next && (o._next._prev = o), o) : void 0
        },
        r.setRatio = function(t) {
            for (var e, i = this._firstPT,
            s = 1e-6; i;) e = i.c * t + i.s,
            i.r ? e = 0 | e + (e > 0 ? .5 : -.5) : s > e && e > -s && (e = 0),
            i.f ? i.t[i.p](e) : i.t[i.p] = e,
            i = i._next
        },
        r._kill = function(t) {
            var e, i = this._overwriteProps,
            s = this._firstPT;
            if (null != t[this._propName]) this._overwriteProps = [];
            else for (e = i.length; --e > -1;) null != t[i[e]] && i.splice(e, 1);
            for (; s;) null != t[s.n] && (s._next && (s._next._prev = s._prev), s._prev ? (s._prev._next = s._next, s._prev = null) : this._firstPT === s && (this._firstPT = s._next)),
            s = s._next;
            return ! 1
        },
        r._roundProps = function(t, e) {
            for (var i = this._firstPT; i;)(t[this._propName] || null != i.n && t[i.n.split(this._propName + "_").join("")]) && (i.r = e),
            i = i._next
        },
        D._onPluginEvent = function(t, e) {
            var i, s, r, n, a, o = e._firstPT;
            if ("_onInitAllProps" === t) {
                for (; o;) {
                    for (a = o._next, s = r; s && s.pr > o.pr;) s = s._next; (o._prev = s ? s._prev: n) ? o._prev._next = o: r = o,
                    (o._next = s) ? s._prev = o: n = o,
                    o = a
                }
                o = e._firstPT = r
            }
            for (; o;) o.pg && "function" == typeof o.t[t] && o.t[t]() && (i = !0),
            o = o._next;
            return i
        },
        M.activate = function(t) {
            for (var e = t.length; --e > -1;) t[e].API === M.API && (N[(new t[e])._propName] = t[e]);
            return ! 0
        },
        c.plugin = function(t) {
            if (! (t && t.propName && t.init && t.API)) throw "illegal plugin definition.";
            var e, i = t.propName,
            s = t.priority || 0,
            r = t.overwriteProps,
            n = {
                init: "_onInitTween",
                set: "setRatio",
                kill: "_kill",
                round: "_roundProps",
                initAll: "_onInitAllProps"
            },
            a = d("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin",
            function() {
                M.call(this, i, s),
                this._overwriteProps = r || []
            },
            t.global === !0),
            o = a.prototype = new M(i);
            o.constructor = a,
            a.API = t.API;
            for (e in n)"function" == typeof t[e] && (o[n[e]] = t[e]);
            return a.version = t.version,
            M.activate([a]),
            a
        },
        i = t._gsQueue) {
            for (s = 0; i.length > s; s++) i[s]();
            for (r in f) f[r].func || t.console.log("GSAP encountered missing dependency: com.greensock." + r)
        }
        a = !1
    }
} (window),
(window._gsQueue || (window._gsQueue = [])).push(function() {
    "use strict";
    window._gsDefine("easing.Back", ["easing.Ease"],
    function(t) {
        var e, i, s, r = window.GreenSockGlobals || window,
        n = r.com.greensock,
        a = 2 * Math.PI,
        o = Math.PI / 2,
        h = n._class,
        l = function(e, i) {
            var s = h("easing." + e,
            function() {},
            !0),
            r = s.prototype = new t;
            return r.constructor = s,
            r.getRatio = i,
            s
        },
        _ = t.register ||
        function() {},
        u = function(t, e, i, s) {
            var r = h("easing." + t, {
                easeOut: new e,
                easeIn: new i,
                easeInOut: new s
            },
            !0);
            return _(r, t),
            r
        },
        c = function(t, e, i) {
            this.t = t,
            this.v = e,
            i && (this.next = i, i.prev = this, this.c = i.v - e, this.gap = i.t - t)
        },
        p = function(e, i) {
            var s = h("easing." + e,
            function(t) {
                this._p1 = t || 0 === t ? t: 1.70158,
                this._p2 = 1.525 * this._p1
            },
            !0),
            r = s.prototype = new t;
            return r.constructor = s,
            r.getRatio = i,
            r.config = function(t) {
                return new s(t)
            },
            s
        },
        f = u("Back", p("BackOut",
        function(t) {
            return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1
        }), p("BackIn",
        function(t) {
            return t * t * ((this._p1 + 1) * t - this._p1)
        }), p("BackInOut",
        function(t) {
            return 1 > (t *= 2) ? .5 * t * t * ((this._p2 + 1) * t - this._p2) : .5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2)
        })),
        m = h("easing.SlowMo",
        function(t, e, i) {
            e = e || 0 === e ? e: .7,
            null == t ? t = .7 : t > 1 && (t = 1),
            this._p = 1 !== t ? e: 0,
            this._p1 = (1 - t) / 2,
            this._p2 = t,
            this._p3 = this._p1 + this._p2,
            this._calcEnd = i === !0
        },
        !0),
        d = m.prototype = new t;
        return d.constructor = m,
        d.getRatio = function(t) {
            var e = t + (.5 - t) * this._p;
            return this._p1 > t ? this._calcEnd ? 1 - (t = 1 - t / this._p1) * t: e - (t = 1 - t / this._p1) * t * t * t * e: t > this._p3 ? this._calcEnd ? 1 - (t = (t - this._p3) / this._p1) * t: e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t: this._calcEnd ? 1 : e
        },
        m.ease = new m(.7, .7),
        d.config = m.config = function(t, e, i) {
            return new m(t, e, i)
        },
        e = h("easing.SteppedEase",
        function(t) {
            t = t || 1,
            this._p1 = 1 / t,
            this._p2 = t + 1
        },
        !0),
        d = e.prototype = new t,
        d.constructor = e,
        d.getRatio = function(t) {
            return 0 > t ? t = 0 : t >= 1 && (t = .999999999),
            (this._p2 * t >> 0) * this._p1
        },
        d.config = e.config = function(t) {
            return new e(t)
        },
        i = h("easing.RoughEase",
        function(e) {
            e = e || {};
            for (var i, s, r, n, a, o, h = e.taper || "none",
            l = [], _ = 0, u = 0 | (e.points || 20), p = u, f = e.randomize !== !1, m = e.clamp === !0, d = e.template instanceof t ? e.template: null, g = "number" == typeof e.strength ? .4 * e.strength: .4; --p > -1;) i = f ? Math.random() : 1 / u * p,
            s = d ? d.getRatio(i) : i,
            "none" === h ? r = g: "out" === h ? (n = 1 - i, r = n * n * g) : "in" === h ? r = i * i * g: .5 > i ? (n = 2 * i, r = .5 * n * n * g) : (n = 2 * (1 - i), r = .5 * n * n * g),
            f ? s += Math.random() * r - .5 * r: p % 2 ? s += .5 * r: s -= .5 * r,
            m && (s > 1 ? s = 1 : 0 > s && (s = 0)),
            l[_++] = {
                x: i,
                y: s
            };
            for (l.sort(function(t, e) {
                return t.x - e.x
            }), o = new c(1, 1, null), p = u; --p > -1;) a = l[p],
            o = new c(a.x, a.y, o);
            this._prev = new c(0, 0, 0 !== o.t ? o: o.next)
        },
        !0),
        d = i.prototype = new t,
        d.constructor = i,
        d.getRatio = function(t) {
            var e = this._prev;
            if (t > e.t) {
                for (; e.next && t >= e.t;) e = e.next;
                e = e.prev
            } else for (; e.prev && e.t >= t;) e = e.prev;
            return this._prev = e,
            e.v + (t - e.t) / e.gap * e.c
        },
        d.config = function(t) {
            return new i(t)
        },
        i.ease = new i,
        u("Bounce", l("BounceOut",
        function(t) {
            return 1 / 2.75 > t ? 7.5625 * t * t: 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
        }), l("BounceIn",
        function(t) {
            return 1 / 2.75 > (t = 1 - t) ? 1 - 7.5625 * t * t: 2 / 2.75 > t ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : 2.5 / 2.75 > t ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
        }), l("BounceInOut",
        function(t) {
            var e = .5 > t;
            return t = e ? 1 - 2 * t: 2 * t - 1,
            t = 1 / 2.75 > t ? 7.5625 * t * t: 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375,
            e ? .5 * (1 - t) : .5 * t + .5
        })),
        u("Circ", l("CircOut",
        function(t) {
            return Math.sqrt(1 - (t -= 1) * t)
        }), l("CircIn",
        function(t) {
            return - (Math.sqrt(1 - t * t) - 1)
        }), l("CircInOut",
        function(t) {
            return 1 > (t *= 2) ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
        })),
        s = function(e, i, s) {
            var r = h("easing." + e,
            function(t, e) {
                this._p1 = t || 1,
                this._p2 = e || s,
                this._p3 = this._p2 / a * (Math.asin(1 / this._p1) || 0)
            },
            !0),
            n = r.prototype = new t;
            return n.constructor = r,
            n.getRatio = i,
            n.config = function(t, e) {
                return new r(t, e)
            },
            r
        },
        u("Elastic", s("ElasticOut",
        function(t) {
            return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * a / this._p2) + 1
        },
        .3), s("ElasticIn",
        function(t) {
            return - (this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * a / this._p2))
        },
        .3), s("ElasticInOut",
        function(t) {
            return 1 > (t *= 2) ? -.5 * this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * a / this._p2) : .5 * this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * a / this._p2) + 1
        },
        .45)),
        u("Expo", l("ExpoOut",
        function(t) {
            return 1 - Math.pow(2, -10 * t)
        }), l("ExpoIn",
        function(t) {
            return Math.pow(2, 10 * (t - 1)) - .001
        }), l("ExpoInOut",
        function(t) {
            return 1 > (t *= 2) ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
        })),
        u("Sine", l("SineOut",
        function(t) {
            return Math.sin(t * o)
        }), l("SineIn",
        function(t) {
            return - Math.cos(t * o) + 1
        }), l("SineInOut",
        function(t) {
            return - .5 * (Math.cos(Math.PI * t) - 1)
        })),
        h("easing.EaseLookup", {
            find: function(e) {
                return t.map[e]
            }
        },
        !0),
        _(r.SlowMo, "SlowMo", "ease,"),
        _(i, "RoughEase", "ease,"),
        _(e, "SteppedEase", "ease,"),
        f
    },
    !0)
}),
window._gsDefine && window._gsQueue.pop()(),
(window._gsQueue || (window._gsQueue = [])).push(function() {
    "use strict";
    window._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"],
    function(t, e) {
        var i, s, r, n, a = function() {
            t.call(this, "css"),
            this._overwriteProps.length = 0,
            this.setRatio = a.prototype.setRatio
        },
        o = {},
        l = a.prototype = new t("css");
        l.constructor = a,
        a.version = "1.11.0",
        a.API = 2,
        a.defaultTransformPerspective = 0,
        l = "px",
        a.suffixMap = {
            top: l,
            right: l,
            bottom: l,
            left: l,
            width: l,
            height: l,
            fontSize: l,
            padding: l,
            margin: l,
            perspective: l
        };
        var h, u, _, p, f, c, d = /(?:\d|\-\d|\.\d|\-\.\d)+/g,
        m = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
        g = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
        v = /[^\d\-\.]/g,
        y = /(?:\d|\-|\+|=|#|\.)*/g,
        T = /opacity *= *([^)]*)/,
        x = /opacity:([^;]*)/,
        w = /alpha\(opacity *=.+?\)/i,
        b = /^(rgb|hsl)/,
        P = /([A-Z])/g,
        S = /-([a-z])/gi,
        R = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
        k = function(t, e) {
            return e.toUpperCase()
        },
        C = /(?:Left|Right|Width)/i,
        A = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
        O = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
        D = /,(?=[^\)]*(?:\(|$))/gi,
        M = Math.PI / 180,
        L = 180 / Math.PI,
        N = {},
        X = document,
        F = X.createElement("div"),
        I = X.createElement("img"),
        E = a._internals = {
            _specialProps: o
        },
        Y = navigator.userAgent,
        z = function() {
            var t, e = Y.indexOf("Android"),
            i = X.createElement("div");
            return _ = -1 !== Y.indexOf("Safari") && -1 === Y.indexOf("Chrome") && ( - 1 === e || Number(Y.substr(e + 8, 1)) > 3),
            f = _ && 6 > Number(Y.substr(Y.indexOf("Version/") + 8, 1)),
            p = -1 !== Y.indexOf("Firefox"),
            /MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(Y),
            c = parseFloat(RegExp.$1),
            i.innerHTML = "<a style='top:1px;opacity:.55;'>a</a>",
            t = i.getElementsByTagName("a")[0],
            t ? /^0.55/.test(t.style.opacity) : !1
        } (),
        U = function(t) {
            return T.test("string" == typeof t ? t: (t.currentStyle ? t.currentStyle.filter: t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
        },
        B = function(t) {
            window.console && console.log(t)
        },
        j = "",
        V = "",
        q = function(t, e) {
            e = e || F;
            var i, s, r = e.style;
            if (void 0 !== r[t]) return t;
            for (t = t.charAt(0).toUpperCase() + t.substr(1), i = ["O", "Moz", "ms", "Ms", "Webkit"], s = 5; --s > -1 && void 0 === r[i[s] + t];);
            return s >= 0 ? (V = 3 === s ? "ms": i[s], j = "-" + V.toLowerCase() + "-", V + t) : null
        },
        W = X.defaultView ? X.defaultView.getComputedStyle: function() {},
        Q = a.getStyle = function(t, e, i, s, r) {
            var n;
            return z || "opacity" !== e ? (!s && t.style[e] ? n = t.style[e] : (i = i || W(t, null)) ? (t = i.getPropertyValue(e.replace(P, "-$1").toLowerCase()), n = t || i.length ? t: i[e]) : t.currentStyle && (n = t.currentStyle[e]), null == r || n && "none" !== n && "auto" !== n && "auto auto" !== n ? n: r) : U(t)
        },
        Z = function(t, e, i, s, r) {
            if ("px" === s || !s) return i;
            if ("auto" === s || !i) return 0;
            var n, a = C.test(e),
            o = t,
            l = F.style,
            h = 0 > i;
            return h && (i = -i),
            "%" === s && -1 !== e.indexOf("border") ? n = i / 100 * (a ? t.clientWidth: t.clientHeight) : (l.cssText = "border-style:solid;border-width:0;position:absolute;line-height:0;", "%" !== s && o.appendChild ? l[a ? "borderLeftWidth": "borderTopWidth"] = i + s: (o = t.parentNode || X.body, l[a ? "width": "height"] = i + s), o.appendChild(F), n = parseFloat(F[a ? "offsetWidth": "offsetHeight"]), o.removeChild(F), 0 !== n || r || (n = Z(t, e, i, s, !0))),
            h ? -n: n
        },
        H = function(t, e, i) {
            if ("absolute" !== Q(t, "position", i)) return 0;
            var s = "left" === e ? "Left": "Top",
            r = Q(t, "margin" + s, i);
            return t["offset" + s] - (Z(t, e, parseFloat(r), r.replace(y, "")) || 0)
        },
        $ = function(t, e) {
            var i, s, r = {};
            if (e = e || W(t, null)) if (i = e.length) for (; --i > -1;) r[e[i].replace(S, k)] = e.getPropertyValue(e[i]);
            else for (i in e) r[i] = e[i];
            else if (e = t.currentStyle || t.style) for (i in e)"string" == typeof i && void 0 !== r[i] && (r[i.replace(S, k)] = e[i]);
            return z || (r.opacity = U(t)),
            s = be(t, e, !1),
            r.rotation = s.rotation,
            r.skewX = s.skewX,
            r.scaleX = s.scaleX,
            r.scaleY = s.scaleY,
            r.x = s.x,
            r.y = s.y,
            we && (r.z = s.z, r.rotationX = s.rotationX, r.rotationY = s.rotationY, r.scaleZ = s.scaleZ),
            r.filters && delete r.filters,
            r
        },
        G = function(t, e, i, s, r) {
            var n, a, o, l = {},
            h = t.style;
            for (a in i)"cssText" !== a && "length" !== a && isNaN(a) && (e[a] !== (n = i[a]) || r && r[a]) && -1 === a.indexOf("Origin") && ("number" == typeof n || "string" == typeof n) && (l[a] = "auto" !== n || "left" !== a && "top" !== a ? "" !== n && "auto" !== n && "none" !== n || "string" != typeof e[a] || "" === e[a].replace(v, "") ? n: 0 : H(t, a), void 0 !== h[a] && (o = new _e(h, a, h[a], o)));
            if (s) for (a in s)"className" !== a && (l[a] = s[a]);
            return {
                difs: l,
                firstMPT: o
            }
        },
        K = {
            width: ["Left", "Right"],
            height: ["Top", "Bottom"]
        },
        J = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
        te = function(t, e, i) {
            var s = parseFloat("width" === e ? t.offsetWidth: t.offsetHeight),
            r = K[e],
            n = r.length;
            for (i = i || W(t, null); --n > -1;) s -= parseFloat(Q(t, "padding" + r[n], i, !0)) || 0,
            s -= parseFloat(Q(t, "border" + r[n] + "Width", i, !0)) || 0;
            return s
        },
        ee = function(t, e) { (null == t || "" === t || "auto" === t || "auto auto" === t) && (t = "0 0");
            var i = t.split(" "),
            s = -1 !== t.indexOf("left") ? "0%": -1 !== t.indexOf("right") ? "100%": i[0],
            r = -1 !== t.indexOf("top") ? "0%": -1 !== t.indexOf("bottom") ? "100%": i[1];
            return null == r ? r = "0": "center" === r && (r = "50%"),
            ("center" === s || isNaN(parseFloat(s)) && -1 === (s + "").indexOf("=")) && (s = "50%"),
            e && (e.oxp = -1 !== s.indexOf("%"), e.oyp = -1 !== r.indexOf("%"), e.oxr = "=" === s.charAt(1), e.oyr = "=" === r.charAt(1), e.ox = parseFloat(s.replace(v, "")), e.oy = parseFloat(r.replace(v, ""))),
            s + " " + r + (i.length > 2 ? " " + i[2] : "")
        },
        ie = function(t, e) {
            return "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e)
        },
        se = function(t, e) {
            return null == t ? e: "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * Number(t.substr(2)) + e: parseFloat(t)
        },
        re = function(t, e, i, s) {
            var r, n, a, o, l = 1e-6;
            return null == t ? o = e: "number" == typeof t ? o = t: (r = 360, n = t.split("_"), a = Number(n[0].replace(v, "")) * ( - 1 === t.indexOf("rad") ? 1 : L) - ("=" === t.charAt(1) ? 0 : e), n.length && (s && (s[i] = e + a), -1 !== t.indexOf("short") && (a %= r, a !== a % (r / 2) && (a = 0 > a ? a + r: a - r)), -1 !== t.indexOf("_cw") && 0 > a ? a = (a + 9999999999 * r) % r - (0 | a / r) * r: -1 !== t.indexOf("ccw") && a > 0 && (a = (a - 9999999999 * r) % r - (0 | a / r) * r)), o = e + a),
            l > o && o > -l && (o = 0),
            o
        },
        ne = {
            aqua: [0, 255, 255],
            lime: [0, 255, 0],
            silver: [192, 192, 192],
            black: [0, 0, 0],
            maroon: [128, 0, 0],
            teal: [0, 128, 128],
            blue: [0, 0, 255],
            navy: [0, 0, 128],
            white: [255, 255, 255],
            fuchsia: [255, 0, 255],
            olive: [128, 128, 0],
            yellow: [255, 255, 0],
            orange: [255, 165, 0],
            gray: [128, 128, 128],
            purple: [128, 0, 128],
            green: [0, 128, 0],
            red: [255, 0, 0],
            pink: [255, 192, 203],
            cyan: [0, 255, 255],
            transparent: [255, 255, 255, 0]
        },
        ae = function(t, e, i) {
            return t = 0 > t ? t + 1 : t > 1 ? t - 1 : t,
            0 | 255 * (1 > 6 * t ? e + 6 * (i - e) * t: .5 > t ? i: 2 > 3 * t ? e + 6 * (i - e) * (2 / 3 - t) : e) + .5
        },
        oe = function(t) {
            var e, i, s, r, n, a;
            return t && "" !== t ? "number" == typeof t ? [t >> 16, 255 & t >> 8, 255 & t] : ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)), ne[t] ? ne[t] : "#" === t.charAt(0) ? (4 === t.length && (e = t.charAt(1), i = t.charAt(2), s = t.charAt(3), t = "#" + e + e + i + i + s + s), t = parseInt(t.substr(1), 16), [t >> 16, 255 & t >> 8, 255 & t]) : "hsl" === t.substr(0, 3) ? (t = t.match(d), r = Number(t[0]) % 360 / 360, n = Number(t[1]) / 100, a = Number(t[2]) / 100, i = .5 >= a ? a * (n + 1) : a + n - a * n, e = 2 * a - i, t.length > 3 && (t[3] = Number(t[3])), t[0] = ae(r + 1 / 3, e, i), t[1] = ae(r, e, i), t[2] = ae(r - 1 / 3, e, i), t) : (t = t.match(d) || ne.transparent, t[0] = Number(t[0]), t[1] = Number(t[1]), t[2] = Number(t[2]), t.length > 3 && (t[3] = Number(t[3])), t)) : ne.black
        },
        le = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";
        for (l in ne) le += "|" + l + "\\b";
        le = RegExp(le + ")", "gi");
        var he = function(t, e, i, s) {
            if (null == t) return function(t) {
                return t
            };
            var r, n = e ? (t.match(le) || [""])[0] : "",
            a = t.split(n).join("").match(g) || [],
            o = t.substr(0, t.indexOf(a[0])),
            l = ")" === t.charAt(t.length - 1) ? ")": "",
            h = -1 !== t.indexOf(" ") ? " ": ",",
            u = a.length,
            _ = u > 0 ? a[0].replace(d, "") : "";
            return u ? r = e ?
            function(t) {
                var e, p, f, c;
                if ("number" == typeof t) t += _;
                else if (s && D.test(t)) {
                    for (c = t.replace(D, "|").split("|"), f = 0; c.length > f; f++) c[f] = r(c[f]);
                    return c.join(",")
                }
                if (e = (t.match(le) || [n])[0], p = t.split(e).join("").match(g) || [], f = p.length, u > f--) for (; u > ++f;) p[f] = i ? p[0 | (f - 1) / 2] : a[f];
                return o + p.join(h) + h + e + l + ( - 1 !== t.indexOf("inset") ? " inset": "")
            }: function(t) {
                var e, n, p;
                if ("number" == typeof t) t += _;
                else if (s && D.test(t)) {
                    for (n = t.replace(D, "|").split("|"), p = 0; n.length > p; p++) n[p] = r(n[p]);
                    return n.join(",")
                }
                if (e = t.match(g) || [], p = e.length, u > p--) for (; u > ++p;) e[p] = i ? e[0 | (p - 1) / 2] : a[p];
                return o + e.join(h) + l
            }: function(t) {
                return t
            }
        },
        ue = function(t) {
            return t = t.split(","),
            function(e, i, s, r, n, a, o) {
                var l, h = (i + "").split(" ");
                for (o = {},
                l = 0; 4 > l; l++) o[t[l]] = h[l] = h[l] || h[(l - 1) / 2 >> 0];
                return r.parse(e, o, n, a)
            }
        },
        _e = (E._setPluginRatio = function(t) {
            this.plugin.setRatio(t);
            for (var e, i, s, r, n = this.data,
            a = n.proxy,
            o = n.firstMPT,
            l = 1e-6; o;) e = a[o.v],
            o.r ? e = e > 0 ? 0 | e + .5 : 0 | e - .5 : l > e && e > -l && (e = 0),
            o.t[o.p] = e,
            o = o._next;
            if (n.autoRotate && (n.autoRotate.rotation = a.rotation), 1 === t) for (o = n.firstMPT; o;) {
                if (i = o.t, i.type) {
                    if (1 === i.type) {
                        for (r = i.xs0 + i.s + i.xs1, s = 1; i.l > s; s++) r += i["xn" + s] + i["xs" + (s + 1)];
                        i.e = r
                    }
                } else i.e = i.s + i.xs0;
                o = o._next
            }
        },
        function(t, e, i, s, r) {
            this.t = t,
            this.p = e,
            this.v = i,
            this.r = r,
            s && (s._prev = this, this._next = s)
        }),
        pe = (E._parseToProxy = function(t, e, i, s, r, n) {
            var a, o, l, h, u, _ = s,
            p = {},
            f = {},
            c = i._transform,
            d = N;
            for (i._transform = null, N = e, s = u = i.parse(t, e, s, r), N = d, n && (i._transform = c, _ && (_._prev = null, _._prev && (_._prev._next = null))); s && s !== _;) {
                if (1 >= s.type && (o = s.p, f[o] = s.s + s.c, p[o] = s.s, n || (h = new _e(s, "s", o, h, s.r), s.c = 0), 1 === s.type)) for (a = s.l; --a > 0;) l = "xn" + a,
                o = s.p + "_" + l,
                f[o] = s.data[l],
                p[o] = s[l],
                n || (h = new _e(s, l, o, h, s.rxp[l]));
                s = s._next
            }
            return {
                proxy: p,
                end: f,
                firstMPT: h,
                pt: u
            }
        },
        E.CSSPropTween = function(t, e, s, r, a, o, l, h, u, _, p) {
            this.t = t,
            this.p = e,
            this.s = s,
            this.c = r,
            this.n = l || e,
            t instanceof pe || n.push(this.n),
            this.r = h,
            this.type = o || 0,
            u && (this.pr = u, i = !0),
            this.b = void 0 === _ ? s: _,
            this.e = void 0 === p ? s + r: p,
            a && (this._next = a, a._prev = this)
        }),
        fe = a.parseComplex = function(t, e, i, s, r, n, a, o, l, u) {
            i = i || n || "",
            a = new pe(t, e, 0, 0, a, u ? 2 : 1, null, !1, o, i, s),
            s += "";
            var _, p, f, c, g, v, y, T, x, w, P, S, R = i.split(", ").join(",").split(" "),
            k = s.split(", ").join(",").split(" "),
            C = R.length,
            A = h !== !1;
            for (( - 1 !== s.indexOf(",") || -1 !== i.indexOf(",")) && (R = R.join(" ").replace(D, ", ").split(" "), k = k.join(" ").replace(D, ", ").split(" "), C = R.length), C !== k.length && (R = (n || "").split(" "), C = R.length), a.plugin = l, a.setRatio = u, _ = 0; C > _; _++) if (c = R[_], g = k[_], T = parseFloat(c), T || 0 === T) a.appendXtra("", T, ie(g, T), g.replace(m, ""), A && -1 !== g.indexOf("px"), !0);
            else if (r && ("#" === c.charAt(0) || ne[c] || b.test(c))) S = "," === g.charAt(g.length - 1) ? "),": ")",
            c = oe(c),
            g = oe(g),
            x = c.length + g.length > 6,
            x && !z && 0 === g[3] ? (a["xs" + a.l] += a.l ? " transparent": "transparent", a.e = a.e.split(k[_]).join("transparent")) : (z || (x = !1), a.appendXtra(x ? "rgba(": "rgb(", c[0], g[0] - c[0], ",", !0, !0).appendXtra("", c[1], g[1] - c[1], ",", !0).appendXtra("", c[2], g[2] - c[2], x ? ",": S, !0), x && (c = 4 > c.length ? 1 : c[3], a.appendXtra("", c, (4 > g.length ? 1 : g[3]) - c, S, !1)));
            else if (v = c.match(d)) {
                if (y = g.match(m), !y || y.length !== v.length) return a;
                for (f = 0, p = 0; v.length > p; p++) P = v[p],
                w = c.indexOf(P, f),
                a.appendXtra(c.substr(f, w - f), Number(P), ie(y[p], P), "", A && "px" === c.substr(w + P.length, 2), 0 === p),
                f = w + P.length;
                a["xs" + a.l] += c.substr(f)
            } else a["xs" + a.l] += a.l ? " " + c: c;
            if ( - 1 !== s.indexOf("=") && a.data) {
                for (S = a.xs0 + a.data.s, _ = 1; a.l > _; _++) S += a["xs" + _] + a.data["xn" + _];
                a.e = S + a["xs" + _]
            }
            return a.l || (a.type = -1, a.xs0 = a.e),
            a.xfirst || a
        },
        ce = 9;
        for (l = pe.prototype, l.l = l.pr = 0; --ce > 0;) l["xn" + ce] = 0,
        l["xs" + ce] = "";
        l.xs0 = "",
        l._next = l._prev = l.xfirst = l.data = l.plugin = l.setRatio = l.rxp = null,
        l.appendXtra = function(t, e, i, s, r, n) {
            var a = this,
            o = a.l;
            return a["xs" + o] += n && o ? " " + t: t || "",
            i || 0 === o || a.plugin ? (a.l++, a.type = a.setRatio ? 2 : 1, a["xs" + a.l] = s || "", o > 0 ? (a.data["xn" + o] = e + i, a.rxp["xn" + o] = r, a["xn" + o] = e, a.plugin || (a.xfirst = new pe(a, "xn" + o, e, i, a.xfirst || a, 0, a.n, r, a.pr), a.xfirst.xs0 = 0), a) : (a.data = {
                s: e + i
            },
            a.rxp = {},
            a.s = e, a.c = i, a.r = r, a)) : (a["xs" + o] += e + (s || ""), a)
        };
        var de = function(t, e) {
            e = e || {},
            this.p = e.prefix ? q(t) || t: t,
            o[t] = o[this.p] = this,
            this.format = e.formatter || he(e.defaultValue, e.color, e.collapsible, e.multi),
            e.parser && (this.parse = e.parser),
            this.clrs = e.color,
            this.multi = e.multi,
            this.keyword = e.keyword,
            this.dflt = e.defaultValue,
            this.pr = e.priority || 0
        },
        me = E._registerComplexSpecialProp = function(t, e, i) {
            "object" != typeof e && (e = {
                parser: i
            });
            var s, r, n = t.split(","),
            a = e.defaultValue;
            for (i = i || [a], s = 0; n.length > s; s++) e.prefix = 0 === s && e.prefix,
            e.defaultValue = i[s] || a,
            r = new de(n[s], e)
        },
        ge = function(t) {
            if (!o[t]) {
                var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
                me(t, {
                    parser: function(t, i, s, r, n, a, l) {
                        var h = (window.GreenSockGlobals || window).com.greensock.plugins[e];
                        return h ? (h._cssRegister(), o[s].parse(t, i, s, r, n, a, l)) : (B("Error: " + e + " js file not loaded."), n)
                    }
                })
            }
        };
        l = de.prototype,
        l.parseComplex = function(t, e, i, s, r, n) {
            var a, o, l, h, u, _, p = this.keyword;
            if (this.multi && (D.test(i) || D.test(e) ? (o = e.replace(D, "|").split("|"), l = i.replace(D, "|").split("|")) : p && (o = [e], l = [i])), l) {
                for (h = l.length > o.length ? l.length: o.length, a = 0; h > a; a++) e = o[a] = o[a] || this.dflt,
                i = l[a] = l[a] || this.dflt,
                p && (u = e.indexOf(p), _ = i.indexOf(p), u !== _ && (i = -1 === _ ? l: o, i[a] += " " + p));
                e = o.join(", "),
                i = l.join(", ")
            }
            return fe(t, this.p, e, i, this.clrs, this.dflt, s, this.pr, r, n)
        },
        l.parse = function(t, e, i, s, n, a) {
            return this.parseComplex(t.style, this.format(Q(t, this.p, r, !1, this.dflt)), this.format(e), n, a)
        },
        a.registerSpecialProp = function(t, e, i) {
            me(t, {
                parser: function(t, s, r, n, a, o) {
                    var l = new pe(t, r, 0, 0, a, 2, r, !1, i);
                    return l.plugin = o,
                    l.setRatio = e(t, s, n._tween, r),
                    l
                },
                priority: i
            })
        };
        var ve = "scaleX,scaleY,scaleZ,x,y,z,skewX,rotation,rotationX,rotationY,perspective".split(","),
        ye = q("transform"),
        Te = j + "transform",
        xe = q("transformOrigin"),
        we = null !== q("perspective"),
        be = function(t, e, i, s) {
            if (t._gsTransform && i && !s) return t._gsTransform;
            var r, n, o, l, h, u, _, p, f, c, d, m, g, v = i ? t._gsTransform || {
                skewY: 0
            }: {
                skewY: 0
            },
            y = 0 > v.scaleX,
            T = 2e-5,
            x = 1e5,
            w = 179.99,
            b = w * M,
            P = we ? parseFloat(Q(t, xe, e, !1, "0 0 0").split(" ")[2]) || v.zOrigin || 0 : 0;
            for (ye ? r = Q(t, Te, e, !0) : t.currentStyle && (r = t.currentStyle.filter.match(A), r = r && 4 === r.length ? [r[0].substr(4), Number(r[2].substr(4)), Number(r[1].substr(4)), r[3].substr(4), v.x || 0, v.y || 0].join(",") : ""), n = (r || "").match(/(?:\-|\b)[\d\-\.e]+\b/gi) || [], o = n.length; --o > -1;) l = Number(n[o]),
            n[o] = (h = l - (l |= 0)) ? (0 | h * x + (0 > h ? -.5 : .5)) / x + l: l;
            if (16 === n.length) {
                var S = n[8],
                R = n[9],
                k = n[10],
                C = n[12],
                O = n[13],
                D = n[14];
                if (v.zOrigin && (D = -v.zOrigin, C = S * D - n[12], O = R * D - n[13], D = k * D + v.zOrigin - n[14]), !i || s || null == v.rotationX) {
                    var N, X, F, I, E, Y, z, U = n[0],
                    B = n[1],
                    j = n[2],
                    V = n[3],
                    q = n[4],
                    W = n[5],
                    Z = n[6],
                    H = n[7],
                    $ = n[11],
                    G = Math.atan2(Z, k),
                    K = -b > G || G > b;
                    v.rotationX = G * L,
                    G && (I = Math.cos( - G), E = Math.sin( - G), N = q * I + S * E, X = W * I + R * E, F = Z * I + k * E, S = q * -E + S * I, R = W * -E + R * I, k = Z * -E + k * I, $ = H * -E + $ * I, q = N, W = X, Z = F),
                    G = Math.atan2(S, U),
                    v.rotationY = G * L,
                    G && (Y = -b > G || G > b, I = Math.cos( - G), E = Math.sin( - G), N = U * I - S * E, X = B * I - R * E, F = j * I - k * E, R = B * E + R * I, k = j * E + k * I, $ = V * E + $ * I, U = N, B = X, j = F),
                    G = Math.atan2(B, W),
                    v.rotation = G * L,
                    G && (z = -b > G || G > b, I = Math.cos( - G), E = Math.sin( - G), U = U * I + q * E, X = B * I + W * E, W = B * -E + W * I, Z = j * -E + Z * I, B = X),
                    z && K ? v.rotation = v.rotationX = 0 : z && Y ? v.rotation = v.rotationY = 0 : Y && K && (v.rotationY = v.rotationX = 0),
                    v.scaleX = (0 | Math.sqrt(U * U + B * B) * x + .5) / x,
                    v.scaleY = (0 | Math.sqrt(W * W + R * R) * x + .5) / x,
                    v.scaleZ = (0 | Math.sqrt(Z * Z + k * k) * x + .5) / x,
                    v.skewX = 0,
                    v.perspective = $ ? 1 / (0 > $ ? -$: $) : 0,
                    v.x = C,
                    v.y = O,
                    v.z = D
                }
            } else if (! (we && !s && n.length && v.x === n[4] && v.y === n[5] && (v.rotationX || v.rotationY) || void 0 !== v.x && "none" === Q(t, "display", e))) {
                var J = n.length >= 6,
                te = J ? n[0] : 1,
                ee = n[1] || 0,
                ie = n[2] || 0,
                se = J ? n[3] : 1;
                v.x = n[4] || 0,
                v.y = n[5] || 0,
                u = Math.sqrt(te * te + ee * ee),
                _ = Math.sqrt(se * se + ie * ie),
                p = te || ee ? Math.atan2(ee, te) * L: v.rotation || 0,
                f = ie || se ? Math.atan2(ie, se) * L + p: v.skewX || 0,
                c = u - Math.abs(v.scaleX || 0),
                d = _ - Math.abs(v.scaleY || 0),
                Math.abs(f) > 90 && 270 > Math.abs(f) && (y ? (u *= -1, f += 0 >= p ? 180 : -180, p += 0 >= p ? 180 : -180) : (_ *= -1, f += 0 >= f ? 180 : -180)),
                m = (p - v.rotation) % 180,
                g = (f - v.skewX) % 180,
                (void 0 === v.skewX || c > T || -T > c || d > T || -T > d || m > -w && w > m && !1 | m * x || g > -w && w > g && !1 | g * x) && (v.scaleX = u, v.scaleY = _, v.rotation = p, v.skewX = f),
                we && (v.rotationX = v.rotationY = v.z = 0, v.perspective = parseFloat(a.defaultTransformPerspective) || 0, v.scaleZ = 1)
            }
            v.zOrigin = P;
            for (o in v) T > v[o] && v[o] > -T && (v[o] = 0);
            return i && (t._gsTransform = v),
            v
        },
        Pe = function(t) {
            var e, i, s = this.data,
            r = -s.rotation * M,
            n = r + s.skewX * M,
            a = 1e5,
            o = (0 | Math.cos(r) * s.scaleX * a) / a,
            l = (0 | Math.sin(r) * s.scaleX * a) / a,
            h = (0 | Math.sin(n) * -s.scaleY * a) / a,
            u = (0 | Math.cos(n) * s.scaleY * a) / a,
            _ = this.t.style,
            p = this.t.currentStyle;
            if (p) {
                i = l,
                l = -h,
                h = -i,
                e = p.filter,
                _.filter = "";
                var f, d, m = this.t.offsetWidth,
                g = this.t.offsetHeight,
                v = "absolute" !== p.position,
                x = "progid:DXImageTransform.Microsoft.Matrix(M11=" + o + ", M12=" + l + ", M21=" + h + ", M22=" + u,
                w = s.x,
                b = s.y;

                if (null != s.ox && (f = (s.oxp ? .01 * m * s.ox: s.ox) - m / 2, d = (s.oyp ? .01 * g * s.oy: s.oy) - g / 2, w += f - (f * o + d * l), b += d - (f * h + d * u)), v ? (f = m / 2, d = g / 2, x += ", Dx=" + (f - (f * o + d * l) + w) + ", Dy=" + (d - (f * h + d * u) + b) + ")") : x += ", sizingMethod='auto expand')", _.filter = -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(") ? e.replace(O, x) : x + " " + e, (0 === t || 1 === t) && 1 === o && 0 === l && 0 === h && 1 === u && (v && -1 === x.indexOf("Dx=0, Dy=0") || T.test(e) && 100 !== parseFloat(RegExp.$1) || -1 === e.indexOf("gradient(" && e.indexOf("Alpha")) && _.removeAttribute("filter")), !v) {
                    var P, S, R, k = 8 > c ? 1 : -1;
                    for (f = s.ieOffsetX || 0, d = s.ieOffsetY || 0, s.ieOffsetX = Math.round((m - ((0 > o ? -o: o) * m + (0 > l ? -l: l) * g)) / 2 + w), s.ieOffsetY = Math.round((g - ((0 > u ? -u: u) * g + (0 > h ? -h: h) * m)) / 2 + b), ce = 0; 4 > ce; ce++) S = J[ce],
                    P = p[S],
                    i = -1 !== P.indexOf("px") ? parseFloat(P) : Z(this.t, S, parseFloat(P), P.replace(y, "")) || 0,
                    R = i !== s[S] ? 2 > ce ? -s.ieOffsetX: -s.ieOffsetY: 2 > ce ? f - s.ieOffsetX: d - s.ieOffsetY,
                    _[S] = (s[S] = Math.round(i - R * (0 === ce || 2 === ce ? 1 : k))) + "px"
                }
            }
        },
        Se = function() {
            var t, e, i, s, r, n, a, o, l, h, u, _, f, c, d, m, g, v, y, T, x, w, b, P, S, R, k = this.data,
            C = this.t.style,
            A = k.rotation * M,
            O = k.scaleX,
            D = k.scaleY,
            L = k.scaleZ,
            N = k.perspective;
            if (p && (P = C.top ? "top": C.bottom ? "bottom": parseFloat(Q(this.t, "top", null, !1)) ? "bottom": "top", T = Q(this.t, P, null, !1), S = parseFloat(T) || 0, R = T.substr((S + "").length) || "px", k._ffFix = !k._ffFix, C[P] = (k._ffFix ? S + .05 : S - .05) + R), A || k.skewX) v = Math.cos(A),
            y = Math.sin(A),
            t = v,
            r = y,
            k.skewX && (A -= k.skewX * M, v = Math.cos(A), y = Math.sin(A)),
            e = -y,
            n = v;
            else {
                if (! (k.rotationY || k.rotationX || 1 !== L || N)) return C[ye] = "translate3d(" + k.x + "px," + k.y + "px," + k.z + "px)" + (1 !== O || 1 !== D ? " scale(" + O + "," + D + ")": ""),
                void 0;
                t = n = 1,
                e = r = 0
            }
            u = 1,
            i = s = a = o = l = h = _ = f = c = 0,
            d = N ? -1 / N: 0,
            m = k.zOrigin,
            g = 1e5,
            A = k.rotationY * M,
            A && (v = Math.cos(A), y = Math.sin(A), l = u * -y, f = d * -y, i = t * y, a = r * y, u *= v, d *= v, t *= v, r *= v),
            A = k.rotationX * M,
            A && (v = Math.cos(A), y = Math.sin(A), T = e * v + i * y, x = n * v + a * y, w = h * v + u * y, b = c * v + d * y, i = e * -y + i * v, a = n * -y + a * v, u = h * -y + u * v, d = c * -y + d * v, e = T, n = x, h = w, c = b),
            1 !== L && (i *= L, a *= L, u *= L, d *= L),
            1 !== D && (e *= D, n *= D, h *= D, c *= D),
            1 !== O && (t *= O, r *= O, l *= O, f *= O),
            m && (_ -= m, s = i * _, o = a * _, _ = u * _ + m),
            s = (T = (s += k.x) - (s |= 0)) ? (0 | T * g + (0 > T ? -.5 : .5)) / g + s: s,
            o = (T = (o += k.y) - (o |= 0)) ? (0 | T * g + (0 > T ? -.5 : .5)) / g + o: o,
            _ = (T = (_ += k.z) - (_ |= 0)) ? (0 | T * g + (0 > T ? -.5 : .5)) / g + _: _,
            C[ye] = "matrix3d(" + [(0 | t * g) / g, (0 | r * g) / g, (0 | l * g) / g, (0 | f * g) / g, (0 | e * g) / g, (0 | n * g) / g, (0 | h * g) / g, (0 | c * g) / g, (0 | i * g) / g, (0 | a * g) / g, (0 | u * g) / g, (0 | d * g) / g, s, o, _, N ? 1 + -_ / N: 1].join(",") + ")"
        },
        Re = function() {
            var t, e, i, s, r, n, a, o, l, h = this.data,
            u = this.t,
            _ = u.style;
            p && (t = _.top ? "top": _.bottom ? "bottom": parseFloat(Q(u, "top", null, !1)) ? "bottom": "top", e = Q(u, t, null, !1), i = parseFloat(e) || 0, s = e.substr((i + "").length) || "px", h._ffFix = !h._ffFix, _[t] = (h._ffFix ? i + .05 : i - .05) + s),
            h.rotation || h.skewX ? (r = h.rotation * M, n = r - h.skewX * M, a = 1e5, o = h.scaleX * a, l = h.scaleY * a, _[ye] = "matrix(" + (0 | Math.cos(r) * o) / a + "," + (0 | Math.sin(r) * o) / a + "," + (0 | Math.sin(n) * -l) / a + "," + (0 | Math.cos(n) * l) / a + "," + h.x + "," + h.y + ")") : _[ye] = "matrix(" + h.scaleX + ",0,0," + h.scaleY + "," + h.x + "," + h.y + ")"
        };
        me("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,transformPerspective,directionalRotation,parseTransform,force3D", {
            parser: function(t, e, i, s, n, a, o) {
                if (s._transform) return n;
                var l, h, u, _, p, f, c, d = s._transform = be(t, r, !0, o.parseTransform),
                m = t.style,
                g = 1e-6,
                v = ve.length,
                y = o,
                T = {};
                if ("string" == typeof y.transform && ye) u = m.cssText,
                m[ye] = y.transform,
                m.display = "block",
                l = be(t, null, !1),
                m.cssText = u;
                else if ("object" == typeof y) {
                    if (l = {
                        scaleX: se(null != y.scaleX ? y.scaleX: y.scale, d.scaleX),
                        scaleY: se(null != y.scaleY ? y.scaleY: y.scale, d.scaleY),
                        scaleZ: se(null != y.scaleZ ? y.scaleZ: y.scale, d.scaleZ),
                        x: se(y.x, d.x),
                        y: se(y.y, d.y),
                        z: se(y.z, d.z),
                        perspective: se(y.transformPerspective, d.perspective)
                    },
                    c = y.directionalRotation, null != c) if ("object" == typeof c) for (u in c) y[u] = c[u];
                    else y.rotation = c;
                    l.rotation = re("rotation" in y ? y.rotation: "shortRotation" in y ? y.shortRotation + "_short": "rotationZ" in y ? y.rotationZ: d.rotation, d.rotation, "rotation", T),
                    we && (l.rotationX = re("rotationX" in y ? y.rotationX: "shortRotationX" in y ? y.shortRotationX + "_short": d.rotationX || 0, d.rotationX, "rotationX", T), l.rotationY = re("rotationY" in y ? y.rotationY: "shortRotationY" in y ? y.shortRotationY + "_short": d.rotationY || 0, d.rotationY, "rotationY", T)),
                    l.skewX = null == y.skewX ? d.skewX: re(y.skewX, d.skewX),
                    l.skewY = null == y.skewY ? d.skewY: re(y.skewY, d.skewY),
                    (h = l.skewY - d.skewY) && (l.skewX += h, l.rotation += h)
                }
                for (null != y.force3D && (d.force3D = y.force3D, f = !0), p = d.force3D || d.z || d.rotationX || d.rotationY || l.z || l.rotationX || l.rotationY || l.perspective, p || null == y.scale || (l.scaleZ = 1); --v > -1;) i = ve[v],
                _ = l[i] - d[i],
                (_ > g || -g > _ || null != N[i]) && (f = !0, n = new pe(d, i, d[i], _, n), i in T && (n.e = T[i]), n.xs0 = 0, n.plugin = a, s._overwriteProps.push(n.n));
                return _ = y.transformOrigin,
                (_ || we && p && d.zOrigin) && (ye ? (f = !0, i = xe, _ = (_ || Q(t, i, r, !1, "50% 50%")) + "", n = new pe(m, i, 0, 0, n, -1, "transformOrigin"), n.b = m[i], n.plugin = a, we ? (u = d.zOrigin, _ = _.split(" "), d.zOrigin = (_.length > 2 && (0 === u || "0px" !== _[2]) ? parseFloat(_[2]) : u) || 0, n.xs0 = n.e = m[i] = _[0] + " " + (_[1] || "50%") + " 0px", n = new pe(d, "zOrigin", 0, 0, n, -1, n.n), n.b = u, n.xs0 = n.e = d.zOrigin) : n.xs0 = n.e = m[i] = _) : ee(_ + "", d)),
                f && (s._transformType = p || 3 === this._transformType ? 3 : 2),
                n
            },
            prefix: !0
        }),
        me("boxShadow", {
            defaultValue: "0px 0px 0px 0px #999",
            prefix: !0,
            color: !0,
            multi: !0,
            keyword: "inset"
        }),
        me("borderRadius", {
            defaultValue: "0px",
            parser: function(t, e, i, n, a) {
                e = this.format(e);
                var o, l, h, u, _, p, f, c, d, m, g, v, y, T, x, w, b = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                P = t.style;
                for (d = parseFloat(t.offsetWidth), m = parseFloat(t.offsetHeight), o = e.split(" "), l = 0; b.length > l; l++) this.p.indexOf("border") && (b[l] = q(b[l])),
                _ = u = Q(t, b[l], r, !1, "0px"),
                -1 !== _.indexOf(" ") && (u = _.split(" "), _ = u[0], u = u[1]),
                p = h = o[l],
                f = parseFloat(_),
                v = _.substr((f + "").length),
                y = "=" === p.charAt(1),
                y ? (c = parseInt(p.charAt(0) + "1", 10), p = p.substr(2), c *= parseFloat(p), g = p.substr((c + "").length - (0 > c ? 1 : 0)) || "") : (c = parseFloat(p), g = p.substr((c + "").length)),
                "" === g && (g = s[i] || v),
                g !== v && (T = Z(t, "borderLeft", f, v), x = Z(t, "borderTop", f, v), "%" === g ? (_ = 100 * (T / d) + "%", u = 100 * (x / m) + "%") : "em" === g ? (w = Z(t, "borderLeft", 1, "em"), _ = T / w + "em", u = x / w + "em") : (_ = T + "px", u = x + "px"), y && (p = parseFloat(_) + c + g, h = parseFloat(u) + c + g)),
                a = fe(P, b[l], _ + " " + u, p + " " + h, !1, "0px", a);
                return a
            },
            prefix: !0,
            formatter: he("0px 0px 0px 0px", !1, !0)
        }),
        me("backgroundPosition", {
            defaultValue: "0 0",
            parser: function(t, e, i, s, n, a) {
                var o, l, h, u, _, p, f = "background-position",
                d = r || W(t, null),
                m = this.format((d ? c ? d.getPropertyValue(f + "-x") + " " + d.getPropertyValue(f + "-y") : d.getPropertyValue(f) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"),
                g = this.format(e);
                if ( - 1 !== m.indexOf("%") != ( - 1 !== g.indexOf("%")) && (p = Q(t, "backgroundImage").replace(R, ""), p && "none" !== p)) {
                    for (o = m.split(" "), l = g.split(" "), I.setAttribute("src", p), h = 2; --h > -1;) m = o[h],
                    u = -1 !== m.indexOf("%"),
                    u !== ( - 1 !== l[h].indexOf("%")) && (_ = 0 === h ? t.offsetWidth - I.width: t.offsetHeight - I.height, o[h] = u ? parseFloat(m) / 100 * _ + "px": 100 * (parseFloat(m) / _) + "%");
                    m = o.join(" ")
                }
                return this.parseComplex(t.style, m, g, n, a)
            },
            formatter: ee
        }),
        me("backgroundSize", {
            defaultValue: "0 0",
            formatter: ee
        }),
        me("perspective", {
            defaultValue: "0px",
            prefix: !0
        }),
        me("perspectiveOrigin", {
            defaultValue: "50% 50%",
            prefix: !0
        }),
        me("transformStyle", {
            prefix: !0
        }),
        me("backfaceVisibility", {
            prefix: !0
        }),
        me("userSelect", {
            prefix: !0
        }),
        me("margin", {
            parser: ue("marginTop,marginRight,marginBottom,marginLeft")
        }),
        me("padding", {
            parser: ue("paddingTop,paddingRight,paddingBottom,paddingLeft")
        }),
        me("clip", {
            defaultValue: "rect(0px,0px,0px,0px)",
            parser: function(t, e, i, s, n, a) {
                var o, l, h;
                return 9 > c ? (l = t.currentStyle, h = 8 > c ? " ": ",", o = "rect(" + l.clipTop + h + l.clipRight + h + l.clipBottom + h + l.clipLeft + ")", e = this.format(e).split(",").join(h)) : (o = this.format(Q(t, this.p, r, !1, this.dflt)), e = this.format(e)),
                this.parseComplex(t.style, o, e, n, a)
            }
        }),
        me("textShadow", {
            defaultValue: "0px 0px 0px #999",
            color: !0,
            multi: !0
        }),
        me("autoRound,strictUnits", {
            parser: function(t, e, i, s, r) {
                return r
            }
        }),
        me("border", {
            defaultValue: "0px solid #000",
            parser: function(t, e, i, s, n, a) {
                return this.parseComplex(t.style, this.format(Q(t, "borderTopWidth", r, !1, "0px") + " " + Q(t, "borderTopStyle", r, !1, "solid") + " " + Q(t, "borderTopColor", r, !1, "#000")), this.format(e), n, a)
            },
            color: !0,
            formatter: function(t) {
                var e = t.split(" ");
                return e[0] + " " + (e[1] || "solid") + " " + (t.match(le) || ["#000"])[0]
            }
        }),
        me("float,cssFloat,styleFloat", {
            parser: function(t, e, i, s, r) {
                var n = t.style,
                a = "cssFloat" in n ? "cssFloat": "styleFloat";
                return new pe(n, a, 0, 0, r, -1, i, !1, 0, n[a], e)
            }
        });
        var ke = function(t) {
            var e, i = this.t,
            s = i.filter || Q(this.data, "filter"),
            r = 0 | this.s + this.c * t;
            100 === r && ( - 1 === s.indexOf("atrix(") && -1 === s.indexOf("radient(") && -1 === s.indexOf("oader(") ? (i.removeAttribute("filter"), e = !Q(this.data, "filter")) : (i.filter = s.replace(w, ""), e = !0)),
            e || (this.xn1 && (i.filter = s = s || "alpha(opacity=" + r + ")"), -1 === s.indexOf("opacity") ? 0 === r && this.xn1 || (i.filter = s + " alpha(opacity=" + r + ")") : i.filter = s.replace(T, "opacity=" + r))
        };
        me("opacity,alpha,autoAlpha", {
            defaultValue: "1",
            parser: function(t, e, i, s, n, a) {
                var o = parseFloat(Q(t, "opacity", r, !1, "1")),
                l = t.style,
                h = "autoAlpha" === i;
                return "string" == typeof e && "=" === e.charAt(1) && (e = ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + o),
                h && 1 === o && "hidden" === Q(t, "visibility", r) && 0 !== e && (o = 0),
                z ? n = new pe(l, "opacity", o, e - o, n) : (n = new pe(l, "opacity", 100 * o, 100 * (e - o), n), n.xn1 = h ? 1 : 0, l.zoom = 1, n.type = 2, n.b = "alpha(opacity=" + n.s + ")", n.e = "alpha(opacity=" + (n.s + n.c) + ")", n.data = t, n.plugin = a, n.setRatio = ke),
                h && (n = new pe(l, "visibility", 0, 0, n, -1, null, !1, 0, 0 !== o ? "inherit": "hidden", 0 === e ? "hidden": "inherit"), n.xs0 = "inherit", s._overwriteProps.push(n.n), s._overwriteProps.push(i)),
                n
            }
        });
        var Ce = function(t, e) {
            e && (t.removeProperty ? t.removeProperty(e.replace(P, "-$1").toLowerCase()) : t.removeAttribute(e))
        },
        Ae = function(t) {
            if (this.t._gsClassPT = this, 1 === t || 0 === t) {
                this.t.className = 0 === t ? this.b: this.e;
                for (var e = this.data,
                i = this.t.style; e;) e.v ? i[e.p] = e.v: Ce(i, e.p),
                e = e._next;
                1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null)
            } else this.t.className !== this.e && (this.t.className = this.e)
        };
        me("className", {
            parser: function(t, e, s, n, a, o, l) {
                var h, u, _, p, f, c = t.className,
                d = t.style.cssText;
                if (a = n._classNamePT = new pe(t, s, 0, 0, a, 2), a.setRatio = Ae, a.pr = -11, i = !0, a.b = c, u = $(t, r), _ = t._gsClassPT) {
                    for (p = {},
                    f = _.data; f;) p[f.p] = 1,
                    f = f._next;
                    _.setRatio(1)
                }
                return t._gsClassPT = a,
                a.e = "=" !== e.charAt(1) ? e: c.replace(RegExp("\\s*\\b" + e.substr(2) + "\\b"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) : ""),
                n._tween._duration && (t.className = a.e, h = G(t, u, $(t), l, p), t.className = c, a.data = h.firstMPT, t.style.cssText = d, a = a.xfirst = n.parse(t, h.difs, a, o)),
                a
            }
        });
        var Oe = function(t) {
            if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                var e, i, s, r, n = this.t.style,
                a = o.transform.parse;
                if ("all" === this.e) n.cssText = "",
                r = !0;
                else for (e = this.e.split(","), s = e.length; --s > -1;) i = e[s],
                o[i] && (o[i].parse === a ? r = !0 : i = "transformOrigin" === i ? xe: o[i].p),
                Ce(n, i);
                r && (Ce(n, ye), this.t._gsTransform && delete this.t._gsTransform)
            }
        };
        for (me("clearProps", {
            parser: function(t, e, s, r, n) {
                return n = new pe(t, s, 0, 0, n, 2),
                n.setRatio = Oe,
                n.e = e,
                n.pr = -10,
                n.data = r._tween,
                i = !0,
                n
            }
        }), l = "bezier,throwProps,physicsProps,physics2D".split(","), ce = l.length; ce--;) ge(l[ce]);
        l = a.prototype,
        l._firstPT = null,
        l._onInitTween = function(t, e, o) {
            if (!t.nodeType) return ! 1;
            this._target = t,
            this._tween = o,
            this._vars = e,
            h = e.autoRound,
            i = !1,
            s = e.suffixMap || a.suffixMap,
            r = W(t, ""),
            n = this._overwriteProps;
            var l, p, c, d, m, g, v, y, T, w = t.style;
            if (u && "" === w.zIndex && (l = Q(t, "zIndex", r), ("auto" === l || "" === l) && (w.zIndex = 0)), "string" == typeof e && (d = w.cssText, l = $(t, r), w.cssText = d + ";" + e, l = G(t, l, $(t)).difs, !z && x.test(e) && (l.opacity = parseFloat(RegExp.$1)), e = l, w.cssText = d), this._firstPT = p = this.parse(t, e, null), this._transformType) {
                for (T = 3 === this._transformType, ye ? _ && (u = !0, "" === w.zIndex && (v = Q(t, "zIndex", r), ("auto" === v || "" === v) && (w.zIndex = 0)), f && (w.WebkitBackfaceVisibility = this._vars.WebkitBackfaceVisibility || (T ? "visible": "hidden"))) : w.zoom = 1, c = p; c && c._next;) c = c._next;
                y = new pe(t, "transform", 0, 0, null, 2),
                this._linkCSSP(y, null, c),
                y.setRatio = T && we ? Se: ye ? Re: Pe,
                y.data = this._transform || be(t, r, !0),
                n.pop()
            }
            if (i) {
                for (; p;) {
                    for (g = p._next, c = d; c && c.pr > p.pr;) c = c._next; (p._prev = c ? c._prev: m) ? p._prev._next = p: d = p,
                    (p._next = c) ? c._prev = p: m = p,
                    p = g
                }
                this._firstPT = d
            }
            return ! 0
        },
        l.parse = function(t, e, i, n) {
            var a, l, u, _, p, f, c, d, m, g, v = t.style;
            for (a in e) f = e[a],
            l = o[a],
            l ? i = l.parse(t, f, a, this, i, n, e) : (p = Q(t, a, r) + "", m = "string" == typeof f, "color" === a || "fill" === a || "stroke" === a || -1 !== a.indexOf("Color") || m && b.test(f) ? (m || (f = oe(f), f = (f.length > 3 ? "rgba(": "rgb(") + f.join(",") + ")"), i = fe(v, a, p, f, !0, "transparent", i, 0, n)) : !m || -1 === f.indexOf(" ") && -1 === f.indexOf(",") ? (u = parseFloat(p), c = u || 0 === u ? p.substr((u + "").length) : "", ("" === p || "auto" === p) && ("width" === a || "height" === a ? (u = te(t, a, r), c = "px") : "left" === a || "top" === a ? (u = H(t, a, r), c = "px") : (u = "opacity" !== a ? 0 : 1, c = "")), g = m && "=" === f.charAt(1), g ? (_ = parseInt(f.charAt(0) + "1", 10), f = f.substr(2), _ *= parseFloat(f), d = f.replace(y, "")) : (_ = parseFloat(f), d = m ? f.substr((_ + "").length) || "": ""), "" === d && (d = s[a] || c), f = _ || 0 === _ ? (g ? _ + u: _) + d: e[a], c !== d && "" !== d && (_ || 0 === _) && (u || 0 === u) && (u = Z(t, a, u, c), "%" === d ? (u /= Z(t, a, 100, "%") / 100, u > 100 && (u = 100), e.strictUnits !== !0 && (p = u + "%")) : "em" === d ? u /= Z(t, a, 1, "em") : (_ = Z(t, a, _, d), d = "px"), g && (_ || 0 === _) && (f = _ + u + d)), g && (_ += u), !u && 0 !== u || !_ && 0 !== _ ? void 0 !== v[a] && (f || "NaN" != f + "" && null != f) ? (i = new pe(v, a, _ || u || 0, 0, i, -1, a, !1, 0, p, f), i.xs0 = "none" !== f || "display" !== a && -1 === a.indexOf("Style") ? f: p) : B("invalid " + a + " tween value: " + e[a]) : (i = new pe(v, a, u, _ - u, i, 0, a, h !== !1 && ("px" === d || "zIndex" === a), 0, p, f), i.xs0 = d)) : i = fe(v, a, p, f, !0, null, i, 0, n)),
            n && i && !i.plugin && (i.plugin = n);
            return i
        },
        l.setRatio = function(t) {
            var e, i, s, r = this._firstPT,
            n = 1e-6;
            if (1 !== t || this._tween._time !== this._tween._duration && 0 !== this._tween._time) if (t || this._tween._time !== this._tween._duration && 0 !== this._tween._time || this._tween._rawPrevTime === -1e-6) for (; r;) {
                if (e = r.c * t + r.s, r.r ? e = e > 0 ? 0 | e + .5 : 0 | e - .5 : n > e && e > -n && (e = 0), r.type) if (1 === r.type) if (s = r.l, 2 === s) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2;
                else if (3 === s) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3;
                else if (4 === s) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4;
                else if (5 === s) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4 + r.xn4 + r.xs5;
                else {
                    for (i = r.xs0 + e + r.xs1, s = 1; r.l > s; s++) i += r["xn" + s] + r["xs" + (s + 1)];
                    r.t[r.p] = i
                } else - 1 === r.type ? r.t[r.p] = r.xs0: r.setRatio && r.setRatio(t);
                else r.t[r.p] = e + r.xs0;
                r = r._next
            } else for (; r;) 2 !== r.type ? r.t[r.p] = r.b: r.setRatio(t),
            r = r._next;
            else for (; r;) 2 !== r.type ? r.t[r.p] = r.e: r.setRatio(t),
            r = r._next
        },
        l._enableTransforms = function(t) {
            this._transformType = t || 3 === this._transformType ? 3 : 2,
            this._transform = this._transform || be(this._target, r, !0)
        },
        l._linkCSSP = function(t, e, i, s) {
            return t && (e && (e._prev = t), t._next && (t._next._prev = t._prev), t._prev ? t._prev._next = t._next: this._firstPT === t && (this._firstPT = t._next, s = !0), i ? i._next = t: s || null !== this._firstPT || (this._firstPT = t), t._next = e, t._prev = i),
            t
        },
        l._kill = function(e) {
            var i, s, r, n = e;
            if (e.autoAlpha || e.alpha) {
                n = {};
                for (s in e) n[s] = e[s];
                n.opacity = 1,
                n.autoAlpha && (n.visibility = 1)
            }
            return e.className && (i = this._classNamePT) && (r = i.xfirst, r && r._prev ? this._linkCSSP(r._prev, i._next, r._prev._prev) : r === this._firstPT && (this._firstPT = i._next), i._next && this._linkCSSP(i._next, i._next._next, r._prev), this._classNamePT = null),
            t.prototype._kill.call(this, n)
        };
        var De = function(t, e, i) {
            var s, r, n, a;
            if (t.slice) for (r = t.length; --r > -1;) De(t[r], e, i);
            else for (s = t.childNodes, r = s.length; --r > -1;) n = s[r],
            a = n.type,
            n.style && (e.push($(n)), i && i.push(n)),
            1 !== a && 9 !== a && 11 !== a || !n.childNodes.length || De(n, e, i)
        };
        return a.cascadeTo = function(t, i, s) {
            var r, n, a, o = e.to(t, i, s),
            l = [o],
            h = [],
            u = [],
            _ = [],
            p = e._internals.reservedProps;
            for (t = o._targets || o.target, De(t, h, _), o.render(i, !0), De(t, u), o.render(0, !0), o._enabled(!0), r = _.length; --r > -1;) if (n = G(_[r], h[r], u[r]), n.firstMPT) {
                n = n.difs;
                for (a in s) p[a] && (n[a] = s[a]);
                l.push(e.to(_[r], i, n))
            }
            return l
        },
        t.activate([a]),
        a
    },
    !0)
}),
window._gsDefine && window._gsQueue.pop()(),
!
function(e) {
    "object" == typeof exports ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : "undefined" != typeof window ? window.cursorfx = e() : "undefined" != typeof global ? global.cursorfx = e() : "undefined" != typeof self && (self.cursorfx = e())
} (function() {
    return function e(t, n, r) {
        function s(o, u) {
            if (!n[o]) {
                if (!t[o]) {
                    var a = "function" == typeof require && require;
                    if (!u && a) return a(o, !0);
                    if (i) return i(o, !0);
                    throw new Error("Cannot find module '" + o + "'")
                }
                var f = n[o] = {
                    exports: {}
                };
                t[o][0].call(f.exports,
                function(e) {
                    var n = t[o][1][e];
                    return s(n ? n: e)
                },
                f, f.exports, e, t, n, r)
            }
            return n[o].exports
        }
        for (var i = "function" == typeof require && require,
        o = 0; o < r.length; o++) s(r[o]);
        return s
    } ({
        1 : [function(require, module) {
            var Class = require("./Class"),
            ALPHA_THRESHOLD = .1,
            CanvasRenderer = function(parent, width, height, imageURLs, zIndex) {
                this.canvas = $("<canvas>", {
                    "class": "jam3_sparkle_canvas"
                }).css({
                    position: "fixed",
                    top: 0,
                    left: 0,
                    overflow: "hidden",
                    "pointer-events": "none"
                }),
                "undefined" != typeof zIndex && this.canvas.css("z-index", zIndex),
                this.canvas.appendTo(parent),
                this.canvas[0].width = width,
                this.canvas[0].height = height,
                this.width = width,
                this.height = height,
                this.context = this.canvas[0].getContext("2d"),
                this.images = [];
                for (var i = 0; i < imageURLs.length; i++) {
                    var sparkle = new Image;
                    sparkle.src = imageURLs[i],
                    this.images.push(sparkle)
                }
            };
            Class.create(CanvasRenderer, {
                resize: function(width, height) {
                    this.width = width,
                    this.height = height,
                    this.canvas[0].width = width,
                    this.canvas[0].height = height
                },
                draw: function(emitter) {
                    var ctx = this.context;
                    ctx.clearRect(0, 0, this.width, this.height),
                    ctx.globalCompositeOperation = "lighter";
                    for (var i = 0; i < emitter.points.length; i++) {
                        var p = emitter.points[i],
                        img = this.images[p.image];
                        if (img.width && img.height && !(p.alpha < ALPHA_THRESHOLD)) {
                            ctx.globalAlpha = p.alpha;
                            ctx.drawImage(img, p.x - p.size / 2, p.y - p.size / 2, p.size, p.size)
                        }
                    }
                }
            }),
            module.exports = CanvasRenderer
        },
        {
            "./Class": 2
        }],
        2 : [function(require, module) {
            var extend = function(ctor, parent, definition) {
                parent ? (ctor.prototype = Object.create(parent.prototype), ctor.prototype.constructor = ctor) : ctor.prototype.constructor = ctor,
                definition || (definition = {});
                for (var k in definition) if (definition.hasOwnProperty(k)) {
                    var def = definition[k],
                    isProp = "object" == typeof def && (def.get && "function" == typeof def.get || def.set && "function" == typeof def.set);
                    isProp ? Object.defineProperty(ctor.prototype, k, def) : ctor.prototype[k] = definition[k]
                }
                return ctor
            };
            module.exports = {
                create: function(constructor, definition) {
                    return extend(constructor, null, definition)
                },
                extend: function(constructor, parent, definition) {
                    return extend(constructor, parent, definition)
                }
            }
        },
        {}],
        3 : [function(require, module) {
            var smoothstep = (require("./Particle"), require("minimath").distance, require("minimath").smoothstep),
            Class = (require("minimath").random, require("./Class")),
            Emitter = function(maxPoints) {
                this.points = [],
                this.friction = .99,
                this.maxPoints = maxPoints || 300,
                this.pointer = 0,
                this.origin = {
                    x: 0,
                    y: 0
                },
                this.motionRadius = 750,
                this.constraintSpring = .007,
                this.constraintTear = 200,
                this._constraintTearSq = this.constraintTear * this.constraintTear,
                this.maxParticleSpeed = .5,
                this.time = 0
            };
            Class.create(Emitter, {
                solveConstraints: function(p, constraints) {
                    for (var spring = this.constraintSpring,
                    i = constraints.length; i--;) {
                        var c = constraints[i],
                        dx = c.x - p.x,
                        dy = c.y - p.y,
                        distanceSq = dx * dx + dy * dy;
                        distanceSq > this._constraintTearSq ? constraints.pop() : (p.vx += spring * dx * p.springDirection, p.vy += spring * dy * p.springDirection)
                    }
                },
                update: function(dt) {
                    dt = dt || 1,
                    this.time += dt;
                    for (var ox = this.origin.x,
                    oy = this.origin.y,
                    i = 0; i < this.points.length; i++) {
                        {
                            var p = this.points[i];
                            p.constraints
                        }
                        p.rotation += p.rotationSpeed * dt;
                        var x = Math.sin(p.rotation),
                        y = Math.cos(p.rotation);
                        p.vx += x * p.spiralSpeed,
                        p.vy += y * p.spiralSpeed,
                        p.spiralSpeed *= this.friction,
                        p.vx = Math.max(p.vx, -this.maxParticleSpeed),
                        p.vy = Math.max(p.vy, -this.maxParticleSpeed),
                        p.vx = Math.min(p.vx, this.maxParticleSpeed),
                        p.vy = Math.min(p.vy, this.maxParticleSpeed)
                    }
                    for (var i = 0; i < this.points.length; i++) {
                        {
                            var p = this.points[i],
                            dx = ox - p.x,
                            dy = oy - p.y;
                            Math.sqrt(dx * dx + dy * dy)
                        }
                        p.vx *= this.friction,
                        p.vy *= this.friction,
                        p.vx *= p.speed,
                        p.vy *= p.speed;
                        var vel = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
                        p.alpha = smoothstep(0, .5, vel),
                        p.x += p.vx * dt,
                        p.y += p.vy * dt,
                        p.size = Math.max(p.minSize, p.size * p.sizeDecay),
                        p.attenuation *= p.alphaDecay,
                        p.alpha *= p.attenuation,
                        p.alpha *= p.tweenAlpha
                    }
                },
                easeOutExpo: function(t, b, c, d) {
                    return t == d ? b + c: c * ( - Math.pow(2, -10 * t / d) + 1) + b
                },
                emit: function(particle) {
                    this.points[this.pointer] = particle,
                    this.pointer++,
                    this.pointer >= this.maxPoints && (this.pointer = 0)
                }
            }),
            module.exports = Emitter
        },
        {
            "./Class": 2,
            "./Particle": 4,
            minimath: 10
        }],
        4 : [function(require, module) {
            var Class = require("./Class"),
            Particle = function(x, y, vx, vy) {
                this.x = x || 0,
                this.y = y || 0,
                this.vx = vx || 0,
                this.vy = vy || 0,
                this.image = 0,
                this.attenuation = 1,
                this.alpha = 1,
                this.tweenAlpha = 1,
                this.size = 4,
                this.initialAlpha = 1,
                this.alphaDecay = .995,
                this.sizeDecay = .98,
                this.springDirection = 1,
                this.rotation = 0,
                this.rotationSpeed = .07,
                this.spiralSpeed = .027,
                this.life = 0,
                this.totalLife = 100,
                this.constraints = []
            };
            Class.create(Particle),
            module.exports = Particle
        },
        {
            "./Class": 2
        }],
        5 : [function(require, module) {
            var rand = require("minimath").random,
            dist = require("minimath").distance,
            lerp = require("minimath").lerp,
            Emitter = (require("minimath").smoothstep, require("./Emitter")),
            Particle = require("./Particle"),
            vec = require("./vectors"),
            CanvasRenderer = require("./CanvasRenderer");
            module.exports = function(imageURLs, parent, mouseContainer, zIndex) {
                function update() {
                    var startTime = Date.now(),
                    dt = startTime - last;
                    requestAnimationFrame(update),
                    emitter.origin.x = mouseX,
                    emitter.origin.y = mouseY,
                    emitter.update(dt / 10),
                    renderer.draw(emitter),
                    last = startTime
                }
                var width = window.innerWidth,
                height = window.innerHeight;
                mouseContainer = mouseContainer || document;
                var mouseX = 0,
                mouseY = 0,
                lastMouseX = null,
                lastMouseY = null,
                emitter = new Emitter,
                layerSize = [.35, 1],
                layerJitter = [10, 20],
                renderer = new CanvasRenderer(parent, width, height, imageURLs, zIndex),
                last = Date.now();
                requestAnimationFrame(update); {
                    var scrollX = $(mouseContainer).scrollLeft(),
                    scrollY = $(mouseContainer).scrollTop(),
                    prevScrollX = 0,
                    prevScrollY = 0;
                    window.innerWidth,
                    window.innerHeight
                }
                $(window).resize(function() {
                    renderer.resize(window.innerWidth, window.innerHeight)
                }),
                $(mouseContainer).scroll(function() {
                    scrollY = $(mouseContainer).scrollTop(),
                    scrollX = $(mouseContainer).scrollLeft(),
                    prevScrollX = scrollX,
                    prevScrollY = scrollY
                }),
                $(mouseContainer).mouseenter(function(ev) {
                    mouseX = ev.clientX,
                    mouseY = ev.clientY,
                    lastMouseX = ev.clientX,
                    lastMouseY = ev.clientY
                }),
                $(mouseContainer).mousemove(function(ev) {
                    if (mouseX = ev.clientX, mouseY = ev.clientY, null === lastMouseX || null === lastMouseY) return lastMouseX = mouseX,
                    lastMouseY = mouseY,
                    void 0;
                    var moveDistance = dist(mouseX, mouseY, lastMouseX, lastMouseY),
                    maxMove = 20,
                    dirJitter = (Math.floor(lerp(1, 3, moveDistance / maxMove)), 2.15),
                    stepSize = 3,
                    steps = Math.floor(moveDistance / stepSize);
                    if (steps = Math.max(1, steps), !(10 > moveDistance)) {
                        for (var dx = mouseX - lastMouseX,
                        dy = mouseY - lastMouseY,
                        dir = vec.normalize(dx, dy), dirx = dir.x, diry = dir.y, layers = 2, layer = 0; layers > layer; layer++) for (var i = 0; steps > i; i++) {
                            var alpha = i / steps,
                            newMouseX = lerp(lastMouseX, mouseX, alpha),
                            newMouseY = lerp(lastMouseY, mouseY, alpha),
                            mouseJitter = layerJitter[layer],
                            mx = newMouseX + rand( - mouseJitter, mouseJitter) * Math.random(),
                            my = newMouseY + rand( - mouseJitter, mouseJitter) * Math.random();
                            dirx += rand( - dirJitter, dirJitter),
                            diry += rand( - dirJitter, dirJitter);
                            var particle = new Particle(mx, my, dirx, diry);
                            particle.image = Math.floor(Math.random() * imageURLs.length),
                            particle.speed = 1,
                            particle.initialAlpha = rand(.25, .4),
                            particle.minSize = rand(10, 30) * layerSize[layer],
                            particle.size = rand(30, 50) * layerSize[layer],
                            particle.rotation = rand(0, 360) * (Math.PI / 180),
                            particle.rotationSpeed = rand(.06, .07),
                            particle.tweenAlpha = 0;
                            var dur = rand(0, 4);
                            TweenLite.fromTo(particle, dur, {
                                tweenAlpha: 0
                            },
                            {
                                tweenAlpha: .4,
                                ease: Strong.easeOut
                            }),
                            TweenLite.to(particle, 1, {
                                delay: .5 * dur,
                                tweenAlpha: 0,
                                ease: Strong.easeOut
                            });
                            var realSize = particle.size,
                            startSize = particle.size * rand(.5, .75);
                            if (particle.size = startSize, TweenLite.to(particle, .5, {
                                size: realSize,
                                ease: Strong.easeOut
                            }), emitter.pointer > 1) {
                                var rPoint = emitter.points[~~ (Math.random() * emitter.pointer)],
                                dir = Math.random() > .5 ? 1 : -1;
                                particle.springDirection = dir,
                                rPoint.springDirection = dir,
                                rPoint.constraints[0] = particle,
                                particle.constraints[0] = rPoint
                            }
                            emitter.emit(particle)
                        }
                        lastMouseX = mouseX,
                        lastMouseY = mouseY
                    }
                })
            }
        },
        {
            "./CanvasRenderer": 1,
            "./Emitter": 3,
            "./Particle": 4,
            "./vectors": 8,
            minimath: 10
        }],
        6 : [function(require, module) {
            var rand = require("minimath").random;
            module.exports = function(imageURLs, parentContainer, mouseContainer, zIndex) {
                var mouseX = 0,
                mouseY = 0;
                mouseContainer = mouseContainer || document;
                var scrollY = $(mouseContainer).scrollTop(),
                scrollX = $(mouseContainer).scrollLeft(),
                prevPosX = 0,
                prevPosY = 0,
                timestamp = 0;
                $(mouseContainer).scroll(function() {
                    scrollY = $(this).scrollTop(),
                    scrollX = $(this).scrollLeft()
                }),
                $(mouseContainer).mousemove(function(ev) {
                    if (mouseX = ev.clientX + scrollX, mouseY = ev.clientY + scrollY, !timestamp) return timestamp = Date.now(),
                    prevPosX = mouseX,
                    prevPosY = mouseY,
                    void 0;
                    var now = Date.now(),
                    dt = now - timestamp,
                    dx = mouseX - prevPosX,
                    dy = mouseY - prevPosY,
                    speedX = Math.round(dx / dt * 100),
                    speedY = Math.round(dy / dt * 100),
                    speed = Math.sqrt(speedX * speedX + speedY * speedY),
                    accel = speed / dt;
                    accel > 2 && (accel = 2);
                    for (var i = 0; 5 > i; i++) if (mouseX < $(mouseContainer).width() - 120 && mouseY < $(mouseContainer).height() - 120) {
                        var sparkle = new Image;
                        sparkle.src = imageURLs[i],
                        $(sparkle).appendTo(parentContainer),
                        $(sparkle).css({
                            position: "absolute",
                            top: prevPosY > mouseY ? mouseY + rand(10, 40) : mouseY - rand(40, 100),
                            left: prevPosX > mouseX ? mouseX + rand(10, 30) : mouseX + rand( - 30, -10),
                            width: rand(10, 40),
                            margin: 10,
                            "-ms-user-select": "none",
                            "user-select": "none",
                            opacity: rand(0, .4) * accel
                        }),
                        "undefined" != typeof zIndex && $(sparkle).css("z-index", zIndex),
                        $(sparkle).height($(sparkle).width()),
                        $(sparkle).fadeToggle(1e3,
                        function() {
                            $(this).remove()
                        });
                        var xd = Math.abs($(sparkle).offset().left - mouseX),
                        yd = Math.abs($(sparkle).offset().top - mouseY),
                        distance = Math.sqrt(xd * xd + yd * yd);
                        distance > 20 && (TweenLite.to($(sparkle), 1, {
                            x: rand( - 20, 20) * accel,
                            y: rand( - 20, 20) * accel
                        }), $(sparkle).fadeOut(100))
                    }
                    timestamp = now,
                    prevPosX = mouseX,
                    prevPosY = mouseY
                })
            }
        },
        {
            minimath: 10
        }],
        7 : [function(require, module) {
            function isIE() {
                var nav = navigator.userAgent.toLowerCase();
                return - 1 != nav.indexOf("msie") ? parseInt(nav.split("msie")[1]) : !1
            }
            var canvasController = require("./canvasController"),
            domController = require("./domController");
            module.exports = function(imageBase, parentContainer, mouseContainer, zIndex) {
                imageBase = imageBase || "images/";
                for (var imageURLs = [], i = 1; 5 >= i; i++) imageURLs.push(imageBase + "sparkle" + i + ".png");
                isIE() ? domController(imageURLs, parentContainer, mouseContainer, zIndex) : canvasController(imageURLs, parentContainer, mouseContainer, zIndex)
            }
        },
        {
            "./canvasController": 5,
            "./domController": 6
        }],
        8 : [function(require, module) {
            function normalize(x, y) {
                var len = length(x, y);
                return 0 !== len && (x /= len, y /= len),
                temp.x = x,
                temp.y = y,
                temp
            }
            function length(x, y) {
                return Math.sqrt(x * x + y * y)
            }
            var temp = (require("minimath").distance, {
                x: 0,
                y: 0
            });
            module.exports = {
                normalize: normalize,
                length: length
            }
        },
        {
            minimath: 10
        }],
        9 : [function(require, module) {
            var Rectangle = function(x, y, width, height) {
                this.x = x || 0,
                this.y = y || 0,
                this.width = width || 0,
                this.height = height || 0
            };
            Rectangle.prototype.constructor = Rectangle,
            module.exports = Rectangle
        },
        {}],
        10 : [function(require, module) {
            var distanceSq = function(x1, y1, x2, y2) {
                var dx = x2 - x1,
                dy = y2 - y1;
                return dx * dx + dy * dy
            };
            module.exports = {
                random: function(start, end) {
                    return start + Math.random() * (end - start)
                },
                lerp: function(v0, v1, t) {
                    return v0 * (1 - t) + v1 * t
                },
                smoothstep: function(v0, v1, t) {
                    return t = Math.max(0, Math.min(1, (t - v0) / (v1 - v0))),
                    t * t * (3 - 2 * t)
                },
                distanceSq: distanceSq,
                distance: function(x1, y1, x2, y2) {
                    return Math.sqrt(distanceSq(x1, y1, x2, y2))
                },
                shuffle: function(array) {
                    for (var temp, index, counter = array.length; counter--;) index = Math.random() * counter | 0,
                    temp = array[counter],
                    array[counter] = array[index],
                    array[index] = temp;
                    return array
                },
                Rectangle: require("./Rectangle")
            }
        },
        {
            "./Rectangle": 9
        }]
    },
    {},
    [7])(7)
});