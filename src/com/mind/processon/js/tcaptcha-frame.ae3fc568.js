!function(e) {
    var t = {};
    function i(r) {
        if (t[r])
            return t[r].exports;
        var n = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(n.exports, n, n.exports, i),
            n.l = !0,
            n.exports
    }
    i.m = e,
        i.c = t,
        i.d = function(e, t, r) {
            i.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: r
            })
        }
        ,
        i.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }),
                Object.defineProperty(e, "__esModule", {
                    value: !0
                })
        }
        ,
        i.t = function(e, t) {
            if (1 & t && (e = i(e)),
            8 & t)
                return e;
            if (4 & t && "object" == typeof e && e && e.__esModule)
                return e;
            var r = Object.create(null);
            if (i.r(r),
                Object.defineProperty(r, "default", {
                    enumerable: !0,
                    value: e
                }),
            2 & t && "string" != typeof e)
                for (var n in e)
                    i.d(r, n, function(t) {
                        return e[t]
                    }
                        .bind(null, n));
            return r
        }
        ,
        i.n = function(e) {
            var t = e && e.__esModule ? function() {
                    return e["default"]
                }
                : function() {
                    return e
                }
            ;
            return i.d(t, "a", t),
                t
        }
        ,
        i.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }
        ,
        i.p = "",
        i(i.s = 55)
}([function(e, t, i) {
    "use strict";
    var r = function() {
        var e = 1
            , t = /subsid=(\d+)/.exec(location.href);
        t && (e = parseInt(t[1], 10) + 1);
        var i = function(t, i) {
            var r = i || e;
            return t = /subsid=\d+/.test(t) ? t.replace(/subsid=\d+/g, "subsid=" + r) : t + "&subsid=" + r,
            i || e++,
                t
        };
        return i.get = function() {
            return e
        }
            ,
            i.bind = function() {
                var t = e++;
                return function(e) {
                    return i(e, t)
                }
            }
            ,
            i
    }();
    e.exports = r
}
    , function(e, t, i) {
        "use strict";
        var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            , n = Object.assign || i(2)
            , o = function(e) {
            return function(t) {
                return Object.prototype.toString.call(t) == "[object " + e + "]"
            }
        }
            , a = o("Object")
            , s = o("Function")
            , c = function() {
            return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
        }
            , p = function() {
            return window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
        }
            , d = function(e, t, i) {
            if (-1 != e.indexOf("?")) {
                var r = new RegExp("(\\?|&" + t + ")=[^&]*");
                e = r.test(e) ? e.replace(r, "$1=" + i) : e + "&" + t + "=" + i
            } else
                e = e + "?" + t + "=" + i;
            return e
        }
            , u = function(e, t) {
            return e.currentStyle ? e.currentStyle[t] : document.defaultView.getComputedStyle(e, !1)[t]
        }
            , f = function(e, t) {
            if (e && t) {
                if (a(t)) {
                    for (var i in t)
                        e.style[i] = t[i];
                    return t
                }
                return u(e, t)
            }
        }
            , l = /(iPhone|iPad|iPod|Android|ios|SymbianOS|Mobile)/i.test(navigator.userAgent)
            , h = /chrome\/7[567]/i.test(navigator.userAgent)
            , m = function() {
            var e = 1
                , t = void 0;
            if (document.querySelector)
                t = document.querySelector('meta[name="viewport"]');
            else
                for (var i = document.getElementsByTagName("meta"), r = 0, n = i.length; r < n; r++) {
                    "viewport" == i[r].getAttribute("name") && (t = i[r])
                }
            if (t) {
                var o = t.getAttribute("content").match(/initial\-scale=([\d\.]+)/);
                o && (e = parseFloat(o[1]))
            }
            return e
        }
            , g = ["absolute", "fixed", "static", "relative"]
            , y = !!window.ActiveXObject && 8 == document.documentMode;
        e.exports = {
            extend: n,
            isObject: a,
            isFunction: s,
            isHorizontal: function(e, t) {
                if ("number" == typeof window.orientation && "object" === r(window.onorientationchange) && (-90 == window.orientation || 90 == window.orientation))
                    return !0;
                if (e) {
                    if (t.windowHeight < t.windowWidth)
                        return !0
                } else if (window.innerHeight < window.innerWidth)
                    return !0;
                return !1
            },
            callbackExecutor: function(e, t) {
                e.closeSecurityCode(),
                    setTimeout(function() {
                        for (var i = 0, r = e.listenFunc.length; i < r; i++)
                            try {
                                e.listenFunc[i](t)
                            } catch (n) {}
                    }, 0)
            },
            addUrlParam: function(e, t) {
                for (var i in t)
                    e = d(e, encodeURIComponent(i), encodeURIComponent(t[i]));
                return e
            },
            removeIfExist: function(e) {
                for (var t = window.document.getElementById(e); t; )
                    t.parentNode.removeChild(t),
                        t = window.document.getElementById(e)
            },
            createElement: function(e) {
                return document.createElement(e)
            },
            CSS: f,
            computeBaseFontSize: function() {
                var e = c()
                    , t = p()
                    , i = 0;
                "orientation"in window ? i = window.orientation : screen && screen.orientation && (i = screen.orientation.angle);
                var r = (90 === Math.abs(i) ? t : e) / 375
                    , n = void 0
                    , o = m();
                return r = (r = 0 == o || 1 == o ? r > 1.3 ? 1.3 : r : o >= .5 ? r > 2 ? 2 : r : r > 3 ? 3 : r) < .85 ? .85 : r,
                    n = parseInt(1e4 * r) / 1e4 * 16,
                    n = l ? n : 16
            },
            isMobileUa: l,
            getWindowWidth: c,
            getWindowHeight: p,
            getParentScale: m,
            getPosStyle: function(e) {
                var t = "embed" == e.type ? "relative" : "absolute";
                if ("popup" == e.type && e.pos && e.pos.length > 0)
                    for (var i = 0; i < g.length; i++)
                        if (e.pos === g[i]) {
                            t = e.pos;
                            break
                        }
                return t
            },
            initColor: function(e) {
                var t = "#4886ff";
                if (e) {
                    var i = decodeURIComponent(e);
                    i && -1 == i.indexOf("#") && 6 == i.length && /^[0-9a-fA-F]{6}$/g.test(i) && (t = "#" + i)
                }
                return t
            },
            getCSS: u,
            isIEVer: function(e) {
                var t = document.createElement("b");
                return t.innerHTML = "\x3c!--[if IE " + e + "]><i></i><![endif]--\x3e",
                t.getElementsByTagName("i") && 1 === t.getElementsByTagName("i").length
            },
            getPos: function(e) {
                if ("undefined" != typeof e.offsetParent) {
                    for (var t = 0, i = 0; e; e = e.offsetParent) {
                        var r = u(e, "borderLeftWidth");
                        r = r && r.indexOf("px") > -1 ? parseInt(r, 10) : 0;
                        var n = u(e, "borderTopWidth");
                        n = n && n.indexOf("px") > -1 ? parseInt(n, 10) : 0,
                        y && (r = n = 0),
                            t += e.offsetLeft + r,
                            i += e.offsetTop + n
                    }
                    return [t, i]
                }
                return [e.x, e.y]
            },
            getSize: function(e) {
                var t = f(e, "width")
                    , i = f(e, "height");
                return [parseInt(t, 10), parseInt(i, 10)]
            },
            getScrollTop: function() {
                return document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop
            },
            isLowIE: function() {
                var e, t, i = navigator.userAgent.toLowerCase(), r = i.indexOf("msie") > -1;
                if (r) {
                    if (e = i.match(/msie ([\d.]+)/)[1],
                        t = r && document.documentMode,
                    e && e <= 8)
                        return !0;
                    if (t && t < 9)
                        return !0
                }
                return !1
            },
            getCapType: function(e, t) {
                e = parseInt(e, 10),
                    t = parseInt(t, 10);
                var i = "defaultSize";
                if (0 != e && 1 != e || 0 != t) {
                    if (1 == e || 2 == e)
                        switch (t) {
                            case 1:
                                i = "click";
                                break;
                            case 4:
                                i = "piece";
                                break;
                            case 7:
                                i = "coordinate";
                                break;
                            case 8:
                                i = "slide";
                                break;
                            case 9:
                                i = "slidepuzzle";
                                break;
                            case 11:
                                i = "vtt";
                                break;
                            case 12:
                                i = "f_limit";
                                break;
                            case 10:
                            case 13:
                            case 14:
                                i = "slidepuzzle_new";
                                break;
                            case 15:
                                i = "slidepuzzle_opt";
                                break;
                            default:
                                i = "defaultSize"
                        }
                } else
                    i = "char";
                return i
            },
            setPopPosition: function(e, t, i, r) {
                var n = 0
                    , o = 0
                    , a = c()
                    , s = p();
                return r && r.width || (n = Math.floor((s - i - 2) / 2),
                    o = Math.floor((a - t - 2) / 2)),
                    f(e, {
                        top: n + "px",
                        left: o + "px",
                        width: t + "px",
                        height: i + "px"
                    })
            },
            addClass: function(e, t) {
                var i = e.className
                    , r = i + ("" != i ? " " : "") + t;
                e.className = r
            },
            removeClass: function(e, t) {
                var i = " " + e.className + " "
                    , r = (i = i.replace(/(\s+)/gi, " ")).replace(" " + t + " ", " ");
                r = r.replace(/(^\s+)|(\s+$)/g, ""),
                    e.className = r
            },
            isChrome75: h
        }
    }
    , function(e, t, i) {
        "use strict";
        var r = Object.prototype.hasOwnProperty
            , n = Object.prototype.toString
            , o = Object.defineProperty
            , a = Object.getOwnPropertyDescriptor
            , s = function(e) {
            return "function" == typeof Array.isArray ? Array.isArray(e) : "[object Array]" === n.call(e)
        }
            , c = function(e) {
            if (!e || "[object Object]" !== n.call(e))
                return !1;
            var t, i = r.call(e, "constructor"), o = e.constructor && e.constructor.prototype && r.call(e.constructor.prototype, "isPrototypeOf");
            if (e.constructor && !i && !o)
                return !1;
            for (t in e)
                ;
            return void 0 === t || r.call(e, t)
        }
            , p = function(e, t) {
            o && "__proto__" === t.name ? o(e, t.name, {
                enumerable: !0,
                configurable: !0,
                value: t.newValue,
                writable: !0
            }) : e[t.name] = t.newValue
        }
            , d = function(e, t) {
            if ("__proto__" === t) {
                if (!r.call(e, t))
                    return;
                if (a)
                    return a(e, t).value
            }
            return e[t]
        };
        e.exports = function u() {
            var e, t, i, r, n, o, a = arguments[0], f = 1, l = arguments.length, h = !1;
            for ("boolean" == typeof a && (h = a,
                a = arguments[1] || {},
                f = 2),
                 (null == a || "object" != typeof a && "function" != typeof a) && (a = {}); f < l; ++f)
                if (null != (e = arguments[f]))
                    for (t in e)
                        i = d(a, t),
                        a !== (r = d(e, t)) && (h && r && (c(r) || (n = s(r))) ? (n ? (n = !1,
                            o = i && s(i) ? i : []) : o = i && c(i) ? i : {},
                            p(a, {
                                name: t,
                                newValue: u(h, o, r)
                            })) : void 0 !== r && p(a, {
                            name: t,
                            newValue: r
                        }));
            return a
        }
    }
    , function(e, t, i) {
        "use strict";
        var r, n, o = i(0), a = {
            ERROR_TYPE_FRAMEJS_DOWNLOAD_FAIL: 16,
            ERROR_TYPE_JSONP_PREHANDLE: 17,
            ERROR_TYPE_FRAMEJS_CODE_ERROR: 18,
            CALLBACK_NAME: 19
        }, s = {
            ERROR_TYPE_FRAMEJS_DOWNLOAD_FAIL: "ERROR_TYPE_FRAMEJS_DOWNLOAD_FAIL",
            ERROR_TYPE_JSONP_PREHANDLE: "ERROR_TYPE_JSONP_PREHANDLE",
            ERROR_TYPE_FRAMEJS_CODE_ERROR: "ERROR_TYPE_FRAMEJS_CODE_ERROR",
            CALLBACK_NAME: "CALLBACK_NAME"
        }, c = (r = document.referrer,
            n = location.href || document.URL,
            r = r.length > 512 ? r.substr(0, 512) : r,
            n = n.length > 1024 ? n.substr(0, 1024) : n,
            ["referer=" + encodeURIComponent(r), "href=" + encodeURIComponent(n)].join("&"));
        e.exports = {
            type: a,
            send: function(e, t, i) {
                try {
                    (i = i || s[e]).length > 1024 && i.substr(0, 1024);
                    var r = ["type=" + (e = a[e]), "appid=" + t, "reason=" + encodeURIComponent(i)]
                        , n = "https://aq.qq.com/cn2/manage/mbtoken/cap_monitor?" + c + "&" + r.join("&");
                    (new Image).src = o(n)
                } catch (p) {}
            },
            perfectStack: function(e) {
                var t = "";
                e && e.stack && (t = e.stack.replace(/\n/gi, "").split(/\bat\b/).join("\n").replace(/\?[^:]+/gi, ""));
                try {
                    var i = e.toString();
                    t.indexOf(i) < 0 && (t = i + "@" + t)
                } catch (r) {}
                return t
            }
        }
    }
    , , function(e, t, i) {
        "use strict";
        e.exports = {
            add: function(e, t, i) {
                e && (e.addEventListener ? e.addEventListener(t, i, !1) : e.attachEvent ? e.attachEvent("on" + t, i) : e["on" + t] = i)
            },
            remove: function(e, t, i) {
                e && (e.removeEventListener ? e.removeEventListener(t, i, !1) : e.detachEvent ? e.detachEvent("on" + t, i) : e["on" + t] = null)
            }
        }
    }
    , , , , , , , function(e, t) {
        e.exports = function(e) {
            var t = [];
            return t.toString = function() {
                return this.map(function(t) {
                    var i = function(e, t) {
                        var i = e[1] || ""
                            , r = e[3];
                        if (!r)
                            return i;
                        if (t && "function" == typeof btoa) {
                            var n = (a = r,
                            "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(a)))) + " */")
                                , o = r.sources.map(function(e) {
                                return "/*# sourceURL=" + r.sourceRoot + e + " */"
                            });
                            return [i].concat(o).concat([n]).join("\n")
                        }
                        var a;
                        return [i].join("\n")
                    }(t, e);
                    return t[2] ? "@media " + t[2] + "{" + i + "}" : i
                }).join("")
            }
                ,
                t.i = function(e, i) {
                    "string" == typeof e && (e = [[null, e, ""]]);
                    for (var r = {}, n = 0; n < this.length; n++) {
                        var o = this[n][0];
                        "number" == typeof o && (r[o] = !0)
                    }
                    for (n = 0; n < e.length; n++) {
                        var a = e[n];
                        "number" == typeof a[0] && r[a[0]] || (i && !a[2] ? a[2] = i : i && (a[2] = "(" + a[2] + ") and (" + i + ")"),
                            t.push(a))
                    }
                }
                ,
                t
        }
    }
    , function(e, t) {
        var i = {}
            , r = function(e) {
            var t;
            return function() {
                return void 0 === t && (t = e.apply(this, arguments)),
                    t
            }
        }
            , n = r(function() {
            return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())
        })
            , o = r(function() {
            return document.head || document.getElementsByTagName("head")[0]
        })
            , a = null
            , s = 0;
        function c(e, t) {
            for (var r = 0; r < e.length; r++) {
                var n = e[r]
                    , o = i[n.id];
                if (o) {
                    o.refs++;
                    for (var a = 0; a < o.parts.length; a++)
                        o.parts[a](n.parts[a]);
                    for (; a < n.parts.length; a++)
                        o.parts.push(f(n.parts[a], t))
                } else {
                    var s = [];
                    for (a = 0; a < n.parts.length; a++)
                        s.push(f(n.parts[a], t));
                    i[n.id] = {
                        id: n.id,
                        refs: 1,
                        parts: s
                    }
                }
            }
        }
        function p(e) {
            for (var t = [], i = {}, r = 0; r < e.length; r++) {
                var n = e[r]
                    , o = n[0]
                    , a = {
                    css: n[1],
                    media: n[2],
                    sourceMap: n[3]
                };
                i[o] ? i[o].parts.push(a) : t.push(i[o] = {
                    id: o,
                    parts: [a]
                })
            }
            return t
        }
        function d(e, t) {
            var i = Array.prototype.slice.call(arguments, 2);
            return function() {
                var r = Array.prototype.slice.call(arguments);
                e.apply(t, i.concat(r))
            }
        }
        function u() {
            var e = document.createElement("style")
                , t = o();
            return e.type = "text/css",
                t.appendChild(e),
                e
        }
        function f(e, t) {
            var i, r, n, c, p;
            if (t.singleton) {
                var f = s++;
                i = a || (a = u()),
                    r = d(m, null, i, f, !1),
                    n = d(m, null, i, f, !0)
            } else
                e.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (c = document.createElement("link"),
                        p = o(),
                        c.rel = "stylesheet",
                        p.appendChild(c),
                        r = d(y, null, i = c),
                        n = function() {
                            i.parentNode.removeChild(i),
                            i.href && URL.revokeObjectURL(i.href)
                        }
                ) : (i = u(),
                        r = d(g, null, i),
                        n = function() {
                            i.parentNode.removeChild(i)
                        }
                );
            return r(e),
                function(t) {
                    if (t) {
                        if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap)
                            return;
                        r(e = t)
                    } else
                        n()
                }
        }
        e.exports = function(e, t) {
            if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document)
                throw new Error("The style-loader cannot be used in a non-browser environment");
            "undefined" == typeof (t = t || {}).singleton && (t.singleton = n());
            var r = p(e);
            return c(r, t),
                function(e) {
                    for (var n = [], o = 0; o < r.length; o++) {
                        var a = r[o];
                        (s = i[a.id]).refs--,
                            n.push(s)
                    }
                    e && c(p(e), t);
                    for (o = 0; o < n.length; o++) {
                        var s;
                        if (0 === (s = n[o]).refs) {
                            for (var d = 0; d < s.parts.length; d++)
                                s.parts[d]();
                            delete i[s.id]
                        }
                    }
                }
        }
        ;
        var l, h = (l = [],
                function(e, t) {
                    var i = [];
                    l[e] = t;
                    for (var r = 0; r < l.length; r++)
                        l[r] && i.push(l[r]);
                    return i.join("\n")
                }
        );
        function m(e, t, i, r) {
            var n = i ? "" : r.css;
            if (e.styleSheet)
                e.styleSheet.cssText = h(t, n);
            else {
                var o = document.createTextNode(n)
                    , a = e.childNodes;
                a[t] && e.removeChild(a[t]),
                    a.length ? e.insertBefore(o, a[t]) : e.appendChild(o)
            }
        }
        function g(e, t) {
            var i = t.css
                , r = t.media;
            t.sourceMap;
            if (r && e.setAttribute("media", r),
                e.styleSheet)
                e.styleSheet.cssText = i;
            else {
                for (; e.firstChild; )
                    e.removeChild(e.firstChild);
                e.appendChild(document.createTextNode(i))
            }
        }
        function y(e, t) {
            var i = t.css
                , r = (t.media,
                t.sourceMap);
            r && (i += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(r)))) + " */");
            var n = new Blob([i],{
                type: "text/css"
            })
                , o = e.href;
            e.href = URL.createObjectURL(n),
            o && URL.revokeObjectURL(o)
        }
    }
    , function(module, exports, __webpack_require__) {
        "use strict";
        var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
        ;
        "object" !== ("undefined" == typeof JSON ? "undefined" : _typeof(JSON)) && (JSON = {}),
            function() {
                var rx_one = /^[\],:{}\s]*$/, rx_two = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, rx_three = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, rx_four = /(?:^|:|,)(?:\s*\[)+/g, rx_escapable = /[\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, rx_dangerous = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, gap, indent, meta, rep;
                function f(e) {
                    return e < 10 ? "0" + e : e
                }
                function this_value() {
                    return this.valueOf()
                }
                function quote(e) {
                    return rx_escapable.lastIndex = 0,
                        rx_escapable.test(e) ? '"' + e.replace(rx_escapable, function(e) {
                            var t = meta[e];
                            return "string" == typeof t ? t : "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
                        }) + '"' : '"' + e + '"'
                }
                function str(e, t) {
                    var i, r, n, o, a, s = gap, c = t[e];
                    switch (c && "object" === (void 0 === c ? "undefined" : _typeof(c)) && "function" == typeof c.toJSON && (c = c.toJSON(e)),
                    "function" == typeof rep && (c = rep.call(t, e, c)),
                        void 0 === c ? "undefined" : _typeof(c)) {
                        case "string":
                            return quote(c);
                        case "number":
                            return isFinite(c) ? String(c) : "null";
                        case "boolean":
                        case "null":
                            return String(c);
                        case "object":
                            if (!c)
                                return "null";
                            if (gap += indent,
                                a = [],
                            "[object Array]" === Object.prototype.toString.apply(c)) {
                                for (o = c.length,
                                         i = 0; i < o; i += 1)
                                    a[i] = str(i, c) || "null";
                                return n = 0 === a.length ? "[]" : gap ? "[\n" + gap + a.join(",\n" + gap) + "\n" + s + "]" : "[" + a.join(",") + "]",
                                    gap = s,
                                    n
                            }
                            if (rep && "object" === (void 0 === rep ? "undefined" : _typeof(rep)))
                                for (o = rep.length,
                                         i = 0; i < o; i += 1)
                                    "string" == typeof rep[i] && (n = str(r = rep[i], c)) && a.push(quote(r) + (gap ? ": " : ":") + n);
                            else
                                for (r in c)
                                    Object.prototype.hasOwnProperty.call(c, r) && (n = str(r, c)) && a.push(quote(r) + (gap ? ": " : ":") + n);
                            return n = 0 === a.length ? "{}" : gap ? "{\n" + gap + a.join(",\n" + gap) + "\n" + s + "}" : "{" + a.join(",") + "}",
                                gap = s,
                                n
                    }
                }
                "function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function() {
                    return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null
                }
                    ,
                    Boolean.prototype.toJSON = this_value,
                    Number.prototype.toJSON = this_value,
                    String.prototype.toJSON = this_value),
                "function" != typeof JSON.stringify && (meta = {
                        "\b": "\\b",
                        "\t": "\\t",
                        "\n": "\\n",
                        "\f": "\\f",
                        "\r": "\\r",
                        '"': '\\"',
                        "\\": "\\\\"
                    },
                        JSON.stringify = function(e, t, i) {
                            var r;
                            if (gap = "",
                                indent = "",
                            "number" == typeof i)
                                for (r = 0; r < i; r += 1)
                                    indent += " ";
                            else
                                "string" == typeof i && (indent = i);
                            if (rep = t,
                            t && "function" != typeof t && ("object" !== (void 0 === t ? "undefined" : _typeof(t)) || "number" != typeof t.length))
                                throw new Error("JSON.stringify");
                            return str("", {
                                "": e
                            })
                        }
                ),
                "function" != typeof JSON.parse && (JSON.parse = function(text, reviver) {
                        var j;
                        function walk(e, t) {
                            var i, r, n = e[t];
                            if (n && "object" === (void 0 === n ? "undefined" : _typeof(n)))
                                for (i in n)
                                    Object.prototype.hasOwnProperty.call(n, i) && ((r = walk(n, i)) !== undefined ? n[i] = r : delete n[i]);
                            return reviver.call(e, t, n)
                        }
                        if (text = String(text),
                            rx_dangerous.lastIndex = 0,
                        rx_dangerous.test(text) && (text = text.replace(rx_dangerous, function(e) {
                            return "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
                        })),
                            rx_one.test(text.replace(rx_two, "@").replace(rx_three, "]").replace(rx_four, "")))
                            return j = eval("(" + text + ")"),
                                "function" == typeof reviver ? walk({
                                    "": j
                                }, "") : j;
                        throw new SyntaxError("JSON.parse")
                    }
                )
            }()
    }
    , function(e, t, i) {
        "use strict";
        var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            , n = "[CODE_VERIFY]"
            , o = "postMessage"in window;
        function a(e, t, i) {
            var n = "";
            if (arguments.length < 2 ? n = "[Msger] error 1" : "object" != (void 0 === e ? "undefined" : r(e)) ? n = "[Msger] error 2" : "string" != typeof t && (n = "[Msger] error 3"),
                n)
                throw new Error(n);
            this.target = e,
                this.name = t,
                this.domain = i || "*"
        }
        function s(e, t) {
            this.targets = {},
                this.name = e,
                this.listenFunc = [],
            "string" != typeof (n = t || n) && (n = n.toString()),
                this.initListen()
        }
        a.prototype.send = o ? function(e) {
                this.target.postMessage(e, this.domain)
            }
            : function(e) {
                var t = window.navigator[n + this.name];
                if ("function" != typeof t)
                    throw new Error("target callback function is not defined");
                t(e, window)
            }
            ,
            s.prototype.addTarget = function(e, t, i) {
                var r = new a(e,t,i);
                this.targets[t] = r
            }
            ,
            s.prototype.initListen = function() {
                var e = this
                    , t = function(t) {
                    "object" == (void 0 === t ? "undefined" : r(t)) && t.data && (t = t.data);
                    for (var i = 0; i < e.listenFunc.length; i++)
                        e.listenFunc[i](t)
                };
                o ? "addEventListener"in document ? window.addEventListener("message", t, !1) : "attachEvent"in document && window.attachEvent("onmessage", t) : window.navigator[n + this.name] = t
            }
            ,
            s.prototype.listen = function(e) {
                this.listenFunc.push(e)
            }
            ,
            s.prototype.clear = function() {
                this.listenFunc = []
            }
            ,
            s.prototype.send = function(e) {
                var t, i = this.targets;
                for (t in i)
                    i.hasOwnProperty(t) && i[t].send(e)
            }
            ,
            window.TCapMsg = s,
            e.exports = s
    }
    , , function(e, t, i) {
        "use strict";
        e.exports = function() {
            var e = document.body || document.getElementsByTagName("body")[0]
                , t = document.createElement("div");
            try {
                t.style.fontSize = "1rem",
                    t.innerText = "REM TEST",
                    e.appendChild(t);
                var i = t.clientHeight > 0;
                return e.removeChild(t),
                    i
            } catch (r) {}
            return !1
        }
    }
    , , , , function(e, t, i) {
        "use strict";
        var r = function(e) {
            e = e;
            return function() {
                return window.document.getElementById(e)
            }
        }
            , n = function(e) {
            e = e;
            return function() {
                return function(e) {
                    if (document.getElementsByClassName)
                        return document.getElementsByClassName(e);
                    for (var t = document.getElementsByTagName("*"), i = /(^\s*)|(\s*$)/g, r = [], n = new RegExp("(^" + e + "\\s+|\\s+" + e + "\\s+|\\s+" + e + "$|^" + e + "$)"), o = 0; o < t.length; o++) {
                        var a = t[o].className.replace(i, "");
                        a && n.test(a) && r.push(t[o])
                    }
                    return r
                }(e)
            }
        }
            , o = r("tcaptcha_transform")
            , a = r("tcaptcha_container")
            , s = r("ticon_refresh")
            , c = r("transform_header")
            , p = r("transform_text")
            , d = r("transform_close")
            , u = r("transform_eicon")
            , f = r("transform_eb")
            , l = r("transform_eh")
            , h = n("dots_item")
            , m = r("t_verify")
            , g = r("verify_text")
            , y = r("verify_icon")
            , v = r("tcaptcha_iframe")
            , S = n("ticons");
        e.exports = {
            border: o,
            refIcon: s,
            ref1Text: c,
            ref2Text: p,
            popClose: d,
            fullBackIcon: u,
            fullBackText: f,
            fullHeader: l,
            dots: h,
            tVerify: m,
            verifyText: g,
            verifyIcon: y,
            tIframe: v,
            tIcons: S,
            container: a
        }
    }
    , function(e, t, i) {
        "use strict";
        e.exports = {
            char: {
                size: [18.6, 13.6]
            },
            click: {
                size: [18.2, 19.6]
            },
            coordinate: {
                size: [18.2, 19.6]
            },
            piece: {
                size: [18.2, 19.6]
            },
            slide: {
                size: [18.2, 18.1]
            },
            slidepuzzle: {
                size: [18.2, 16.1]
            },
            slidepuzzle_new: {
                size: [19, 19],
                hasBorder: !0,
                unionSizeType: !0,
                isOpt: !0
            },
            slidepuzzle_opt: {
                size: [19, 19],
                hasBorder: !0,
                unionSizeType: !0,
                isOpt: !0
            },
            vtt: {
                size: [19, 19],
                hasBorder: !0,
                unionSizeType: !0,
                isOpt: !0
            },
            f_limit: {
                size: [18.6, 13.6],
                hasBorder: !0
            },
            char_pc: {
                btn_width: 298,
                height: 152,
                width: 300
            },
            click_pc: {
                btn_width: 326,
                height: 483,
                width: 328
            },
            coordinate_pc: {
                btn_width: 298,
                width: 300,
                height: 277
            },
            piece_pc: {
                height: 516,
                btn_width: 362,
                width: 366
            },
            slide_pc: {
                height: 260,
                width: 300,
                btn_width: 298
            },
            slidepuzzle_pc: {
                height: 232,
                width: 300,
                btn_width: 298
            },
            slidepuzzle_new_pc: {
                height: 360,
                width: 360,
                btn_width: 298
            },
            slidepuzzle_opt_pc: {
                height: 360,
                width: 360,
                btn_width: 298
            },
            vtt_pc: {
                height: 360,
                width: 360,
                btn_width: 298
            },
            f_limit_pc: {
                height: 230,
                width: 300,
                btn_width: 298
            },
            defaultSize: {
                size: ["100%", "100%"]
            }
        }
    }
    , function(e, t, i) {
        "use strict";
        e.exports = {
            SMART_VERIFY_SZ: {
                height: 8,
                width: 8
            },
            CONST_DEFAULT_SIZE: {
                width: "100%",
                height: "100%"
            },
            CONST_SC_PS: {
                top: "0%",
                left: "0%"
            },
            threshold: 10,
            baseWidth: 320,
            CONST_PTR: {
                minHeight: 40,
                minWidth: 230
            },
            CONST_SLIDE_PTR: {
                height: 40,
                width: 300
            }
        }
    }
    , , , , , function(e, t, i) {
        "use strict";
        var r = i(57);
        e.exports = {
            langPack: r,
            detectWxLang: function() {
                var e = location.search
                    , t = /(wehcat_real_lang|wechat_real_lang)=([a-zA-Z_\-]+)/.exec(e);
                if (t)
                    return t[2];
                for (var i = document.getElementsByTagName("script"), r = 0; r < i.length; r++) {
                    var n = i[r].src;
                    if (n && /TCapIframeApi/i.test(n)) {
                        var o = /lang=([a-zA-Z_\-]+)/.exec(n);
                        if (o)
                            return o[1].toLowerCase()
                    }
                }
                return ""
            }
        }
    }
    , function(e, t, i) {
        "use strict";
        var r, n, o = (r = 1,
            (n = function(e) {
                    return e = /subsid=\d+/.test(e) ? e.replace(/subsid=\d+/g, "subsid=" + r) : e.indexOf("?") >= 0 ? e + "&subsid=" + r : e + "?subsid=" + r,
                        r++,
                        e
                }
            ).reset = function() {
                r = 1
            }
            ,
            n.set = function(e) {
                e && (r = e)
            }
            ,
            n);
        e.exports = o
    }
    , function(e, t, i) {
        "use strict";
        var r = i(1)
            , n = i(22)
            , o = i(21)
            , a = i(23)
            , s = (i(17),
            i(3))
            , c = !!window.ActiveXObject && 8 == document.documentMode;
        function p(e) {
            return "slidepuzzle_new" === e || "slidepuzzle_opt" === e || "vtt" === e
        }
        function d(e, t, i, c) {
            try {
                var d = n[e].size[0]
                    , u = n[e].size[1]
                    , f = 0
                    , l = 0;
                i ? (f = t.windowWidth,
                    l = t.windowHeight) : (f = r.getWindowWidth(),
                    l = r.getWindowHeight(),
                    t.windowWidth = f,
                    t.windowHeight = l);
                var h = "popup" == t.opts.type && t.opts.fwidth ? parseFloat(t.opts.fwidth) : 0;
                if (h > 0 && h <= 2 * d * 16) {
                    var m = parseInt(1e4 * (h / (16 * d))) / 1e4;
                    d = d * m * 16 + 3,
                        u = u * m * 16 + 3,
                    1 == c && t.readyFunc && t.readyFunc({
                        state: 2,
                        info: "",
                        fwidth: d - 3,
                        fheight: u - 3
                    }),
                        t.sizeSC.width = parseInt(d),
                        t.sizeSC.height = parseInt(u),
                        t.posSC.top = "0px",
                        t.posSC.left = "0px"
                } else {
                    var g = Math.min(f / a.baseWidth)
                        , y = Math.min(l / a.baseWidth)
                        , v = r.isHorizontal(i, t) ? .85 * y : g
                        , S = r.getParentScale();
                    v = (v = 0 == S || 1 == S ? v > 1.3 ? 1.3 : v : S >= .5 ? v > 2 ? 2 : v : v > 3 ? 3 : v) < .85 ? .85 : v;
                    var b = parseInt(1e4 * v) / 1e4;
                    d = d * b * 16 + 3,
                        u = u * b * 16 + 3,
                    r.isMobileUa || (d = n[e + "_pc"].width,
                        u = n[e + "_pc"].height,
                    p(e) || "popup" != t.opts.type || (u += 40)),
                        t.sizeSC.width = parseInt(d),
                        t.sizeSC.height = parseInt(u);
                    var w = l - u;
                    t.posSC.top = w < 0 ? "0px" : Math.floor(w / 2) + "px";
                    var C = f - d;
                    if (t.posSC.left = n[e].hasBorder ? Math.floor((C - 2) / 2) + "px" : Math.floor(C / 2) + "px",
                        i) {
                        var _ = {
                            width: t.sizeSC.width + "px",
                            height: t.sizeSC.height + "px"
                        };
                        if ("embed" === t.opts.type)
                            return void r.CSS(o.tIframe(), _);
                        var x = o.border();
                        x && r.setPopPosition(x, t.sizeSC.width, t.sizeSC.height, t.opts.sdkOpts),
                            r.setPopPosition(o.tIframe(), t.sizeSC.width, t.sizeSC.height, t.opts.sdkOpts);
                        var E = o.container();
                        E && (r.CSS(E, _),
                            t.TCaptchaFrame.setDivPosition(E))
                    }
                }
            } catch (P) {
                var T = s.perfectStack(P);
                s.send("ERROR_TYPE_FRAMEJS_CODE_ERROR", t.opts.appid, T || "setCaptchaIframeSizeAndPos code error")
            }
        }
        function u(e) {
            e.src = "about:blank",
            e.parentNode && e.parentNode.removeChild(e),
                e.onload = null
        }
        function f(e) {
            var t, i, n, o, a = 0, s = 0, c = (n = e,
                r.getPos(n.preTrigerPoint)), p = function(e) {
                return r.getSize(e.preTrigerPoint)
            }(e), d = r.getWindowHeight(), u = r.getScrollTop();
            return (o = c[1] - u) >= e.sizeSC.height / 2 && d - o - p[1] / 2 >= e.sizeSC.height / 2 ? (a = c[1] + p[1] / 2 - e.sizeSC.height / 2,
                s = c[0] + 45,
                t = "top: 50%;",
                i = "top: 50%;") : o <= e.sizeSC.height / 2 ? (a = c[1] - o,
                s = c[0] + 45,
                i = t = "top: " + (o + p[1] / 2) / e.sizeSC.height * 100 + "%;") : d - o >= p[1] && d - o - p[1] / 2 <= e.sizeSC.height / 2 ? (a = d - e.sizeSC.height + u,
                s = c[0] + 45,
                i = t = "top: " + (e.sizeSC.height - (d - o - p[1] / 2)) / e.sizeSC.height * 100 + "%;") : d - o <= p[1] ? (a = c[1] + p[1] - e.sizeSC.height,
                s = c[0] + 45,
                i = t = "top: " + (e.sizeSC.height - p[1] / 2) / e.sizeSC.height * 100 + "%;") : (a = c[1] + p[1] / 2 - e.sizeSC.height / 2,
                s = c[0] + 45,
                t = "top: 50%;",
                i = "top: 50%;"),
                [a, s, t, i]
        }
        e.exports = {
            setCaptchaIframeSizeAndPos: d,
            isNewCapType: p,
            addPopupStyle: function(e) {
                try {
                    var t = r.computeBaseFontSize()
                        , i = ".tcaptcha-transform{font-family:\"Helvtical,microsoft yahei,sans-serif\";-webkit-background-size:20% 20%;background-size:20%;background-position:50% 32%;background-color:#fff;-webkit-border-radius:.08rem;border-radius:.08rem;visibility:visible;z-index:2000000002;overflow:hidden}.tcaptcha-transform.chrome-75{overflow:auto!important;-webkit-border-radius:0!important;border-radius:0!important}.tcaptcha-transform .ticons{position:absolute;visibility:hidden;z-index:-1}.tcaptcha-transform .ticons.show-icon{visibility:visible}.tcaptcha-transform .ticon-refresh{height:rem2px(4);width:rem2px(4);left:0;right:0;margin:rem2px(6) auto;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAAB4CAMAAAANIQqNAAABm1BMVEUAAAA9pf8Zif8chf8chf8dhv8chf8chf8chv8chf8chf8chf8chf8chf8fiP8chf8bhP8ehf8chf8Vif8chv8bhf8bhf8chf8bhf8chv8bhf8ah/8bhP8chf8chf8chf8dhf8chf8chf8bhf8dhv8chf8chf////8chf8chf8chv8dg/////8chf8chf8chv////8dhP8lhv8chv8chf////////8ahv9Xpf8bhf8bhf8bhv8bhf////////8bhP8giv////////8chP8bhf8chf////8bhv8chf////8chf////////8chP////////////////////////8chv/////////////7/f/J4v////////////////8fhf8chf/////6/P8miv9Amf+Gvv/x+P/j8P+o0f91tf9Knv8gh//q9P+z1//E3/++3f+Mwf9ssP9HnP85lf8zkv/2+v9jq/9apv9Qof8tj//9/v/O5f/I4v+72/+32P+w1f+Wx/99uv9xsv/d7f/X6f/S5/+q0v+gzP+ayf+jzv+pdUB1AAAAX3RSTlMAAgn9ZRHxxUi9+fLjrw6qNyDfBFI7hEXq0oocnm3003NqPk005tCMzcqkK8l3m2IgFgaTWVNBMf3XoF1UTGJBGNDFuZV+WyXtiVzbvLQnDgru4aWRbi8W9OzptJNnGRL7ICoAAAiSSURBVGjevJj5W5JBEMeHK0QOQUQLtZDK0kqz1LRS08zyqKye7nrmVbzAvNIsNbPL6s/O/b6yK8iZS59f2H2fgdl39jszu1DROKKt1c2uRs89N7P7nqfR1VzdGnXQf+FKKOL1cEY83kjoCpWUNnuFm3Pi9trbqET47C4bF4DNZfeRfvzXT3LBnLzuJ61YqpypL1l5+2pD2ZmAw0fkcwTOlDVcvV2ZGh5nlUWj+xOsOOaN+K2UAas/4j3GihO6ltB3niWV4WiQchCMhitZcr6Pjk5ts3r3QX9BahlUcaioPWr062XaddutVCBWe7dMy/q0fRjv7Bmnggk45Ya2B6kIgu1SNs4AKc5dNPboP0eFMZKMZSP0VKRyG5M7N0L7PBDuwcUHhRTdFjY5bv8nOVvsx9mkxSzQz/sNSf/z/OprYmCr++cu46izMWiCFvH+MgaUh2tnGXhq6AjUeBicvUZ0Do4nFhYnMMijgzI3g4ojNllHBQN3WQfcTq8wx6cx7KAcVJWzoLyejky9+VOxF3j/LjHuQgwe5RBiu81UX4g0EIIWNw3BHIO5PDKoMv13B0gLgW7m33A5y/vM5pRBmRk0p4M04XCuwuGPSd5n8gceXKZMXDD157KSNqwvIYAVlqxABq8z5r9Hu3/qNARLLPjwDR9LeNSZof41mfG3kkb6sQEJ3uP99FpMfCawCf10iBZTfz7SiFmC1lmwYBg/sZL1zDocMfPvLulkVLhaZMFXtReLYjianjHHUH9CpJMOKBCBX13D+D1K08Themgx+389aWVMOHrHgl0DmJN3YjiWWjbN+k9auQyfSMH4hmHyEal4qBbUutH/HETaJbgptx1sYbqZLkN0LlsN6eWibAJxA8gQzKV1hChaQB3p5SFk90kpAHwR80+Q4UOpwPPIQAfppUc4WUADWDOAWtGCGPbIHsgCO2lmWDiZ4j2WjQOgIE+J0XAyADhINwZJMwNyy78YJioTP4rRAJmcZkEZacYifGygD88bB5jHpmBoIeBEDyKguwrMoA0ZKayKZzOqEvj1BwB0Sg12GSl0QYWqJ9eJ+SkLAd2NYFtqULEsnm3LduDD/x+tpJ1e4WJXlh3FnDwb9go7O25xVtLOEMpOtgggMYaEnUtMB0k/HTLn1o0U1tEQk1twC1XYT/qBCLdkJ1DExbMtiDC5A5VSgtrTUCa9YjIlDb1iFqbsWGsaLjX4g6TIb5leiL5L53JNG/uFKIiTWIiy4QvDgD32IIEiLPOVYvTjEHIg649fUP98OdsIFG45LI+h3w5l4VTyRBIRMy9lofY4K074CBRsiXb8EwE/0AymJ+WRqCcpgUi2dtLEB2khULDlOBzG0koRQhIzkgcST64kvMmC8ubwfeSq7S5RUZZj6l68KxWAu8mfZDd24HvZyqAXKXqBiPpQr+8QFWU5pK4F/HUe8V9KyIsBziNRNKJscYWsazC+hGsrFWn5CsfiBIP48nLcHCZQhR4Ji9ZctwGEx20xRY5XpCIs1dXwF6exoy6H1WJena2wlAtFp4yLtRyAqx1OYenA3zTNOU+jYWbbjZRxsZbPzAvR4ipLVrcN8AwGrtyHodOXzqSOi7OEDsHaToxBbGfNAG8J4EIA81LRK1vA59nZxZnk7CkBswwEqJRgBQrlHyB9fFRSOkeNNL53URJ3iRcALG8gRcmvhJuSsIBKz9CTxwZ4/AQ3s/+8AHD5b/fm1pNGEMXxAQQWipI1FmpFNogYtFFrIKFeQ9KaPvXN5x7agpfQmxesqZoYY/RrF2aaGTPTmTNbN1vq722zgWHYnXP5n3M2t7Y2X/IlpUcQHmPUaPLLxL/5AQl+WWHHMERcWsXgl3PMEIXILJUCCEWY4hBxuLeWnFFY0DxkgVCEO0aJOrlayfSo8rlUprqGVPnkFUVAguBkgZJ+l5twicKKk6OP0kpqzd77z5GQjLMN90kkC9sbs80IIVG3MbFdSImA3Ebr86DPDKHog1JVxVVJp0FBpHnG2AnihIGF5ZQ8+KRMDFA9KMMvkcSEsgMDjtq3+4dg4GBv96aNKN5KJoalZsJYXrGs6rLdOwKFs9P2RUdEn8+IjHbDSHJKceUEv3O+1+4dnA3C++PDXnvvvNsS0J/3gmhQk3EkPecqZq+lcnLSUjkVCYpA3u8TsV8LgSLPhD5LfiDbeS49cS7RGPJ+lsxaQpVwg5Awrpr+ZgxxiPTgduzW/0p3g7jCWJNwEJlO3L9rWXEFfdaIljdqiosLlYtcbkb5AAPqejOYUJ8ALtW+B64oYFBDVCRalul9KQLExeosMHUb5QLMzj3iKd7KSq53gMmtGNfUCqWRYEh1PHjBIgdMajOz+woGlIgEvg5esmHNWd87xhP4CfNEjtZXRjykaOUA5fizfv1vQJmP693AnPZdw8t2JWD0Lv68/O0xMPJINAoTRMKycDnN3f5dV3n5rz4CwzOsH6eRW1Vz2GbQcK6cEV0o+3eXP6+73e7uzZe+Zz7jN0abRE8BWDCoAS9ejy0AwqIxsIvpXlH78n3dAwNrDjEQz9BAYIpI+GxgqKd0XdU1B8kGkKTBuoWjOf26CBKrSxuEgp2ipM7c+2xiaYzsjM6vViqV8blUIVdeIShP09TjIjLAOm/jCZq3LHdaJwhLvNoRLGOTyCFXW7kCJZpkRlqaPwirmY1E2cnJyCcwlHY+sX5RTlbCa2hkmbRsJrCWTi+olk5mPGOKoUCbWivBNLVW2Pp1ooC39ZbIgyn9/ipl/2E3NhOJ0Fu7ZUJvbvdPNLj2fsSk4AMO1TLxTbkKjATif+xGPJJOxNfuHfFJN6Ahl8ll+yGX5UndkIt/prJCHa3ZjfnUpDGf/3zQiQ7MeH8z6uVtSP9+4MNuDTce7a8bdxvGYbdHMe43DAOPQzDyOQxDr2Lsd4SN/RYBimzsd+QBY7+/AL2t7PuyoWBRAAAAAElFTkSuQmCC) no-repeat;-webkit-background-size:contain;background-size:contain}.tcaptcha-transform .transform-eicon{top:rem2px(1.375);left:rem2px(.5);width:rem2px(.625);height:rem2px(.625);border-style:solid;border-width:rem2px(.125) rem2px(.125) 0 0;border-color:#1a79ff;-webkit-transform-origin:75% 25% 0;-ms-transform-origin:75% 25% 0;transform-origin:75% 25% 0;-webkit-transform:rotate(225deg);-ms-transform:rotate(225deg);transform:rotate(225deg);-webkit-transition:.1s ease-in .1s;-o-transition:.1s ease-in .1s;transition:.1s ease-in .1s}.tcaptcha-transform .transform-eb{width:rem2px(3.2);height:rem2px(3.2);line-height:rem2px(3.2);font-size:rem2px(1);text-align:left;left:rem2px(1.9);color:#1a79ff}.tcaptcha-transform .transform-eb.middle-fontsize{font-size:rem2px(1.6)}.tcaptcha-transform .transform-eb.small-fontsize{font-size:rem2px(1.2)}.tcaptcha-transform .transform-eh{width:100%;height:rem2px(3.2);line-height:rem2px(3.2);margin:0;font-size:rem2px(1.3);text-align:center;font-weight:700;color:#333;border-bottom:.026667rem solid #e6e6e6;z-index:-2}.tcaptcha-transform .transform-eh.middle-fontsize{font-size:rem2px(1.1)}.tcaptcha-transform .transform-eh.small-fontsize{font-size:rem2px(1)}.tcaptcha-transform .transform-header{width:100%;font-size:rem2px(1.2);text-align:center;margin-top:rem2px(11)}.tcaptcha-transform .transform-text{width:100%;font-size:rem2px(1);text-align:center;padding-left:5%;padding-right:5%;margin-top:rem2px(13);word-break:break-all;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.tcaptcha-transform .transform-close{height:rem2px(1.5);width:rem2px(1.5);bottom:rem2px(1);right:rem2px(1);background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAZlBMVEUAAACzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Nj9GtKAAAAIXRSTlMAnAYRmO3pq6A2h+Pf07OVXlgcT00zw4R5eGBM8afFxIgs0CidAAABfUlEQVQ4y5WV25aCMAxFQwNCEQS5eEMd+/8/OekEJm2hSz1PNt0QcppG8KWveZ0Zk9X5VUNUXbk3jvZlt4lhY1ZqcM0dd4a0K24alUJ9K3h9DDCV2vCzV06of9pYqjzuQKFqgEBDReGDCrgcYSXMfdLmPcOmzjb7fx20KCGikjbninBHeSGqB/mPS+IK4yBWc/KO3s31tlnjEk3Wcu0EdPwRP7xz50dnJZSSf524BDrfftliMlz0dO4Ams5JzXYWdlO4BFiKqtVwMaYA8EnhWBS+Anl/A49MQg5a619tXyvkHxJwMBpTA/UzQkAGHKA1gIIKXCUrDhRFPgbD1BBNTcWMIJJilF+M2OP6LKTYI4YLx61cKM9wOULhhJQjdJuiYU7IRJrCa7NMOCbv0mZz4078zffNxp24cSnw4VUApJSPN5fru+v6fgB8N1KErKaQmyrhvLF3GtyHhxOPvcggbUc7SMdWBmkoTM1K6ba/3csf9q8OotKX5e/josHTL8HeNiRMGCf8AAAAAElFTkSuQmCC) no-repeat;-webkit-background-size:contain;background-size:contain}.tcaptcha-iframe{z-index:2000000002;margin:auto}.tcaptcha-iframe.hide-iframe{visibility:hidden}.t-verify{z-index:2000000002;width:rem2px(8);height:rem2px(8);background:#fff;-webkit-border-radius:.08rem;border-radius:.08rem;left:0;top:0}.verify-icon{position:absolute;margin-top:rem2px(3.5)}.verify-icon.success-icon{width:rem2px(2.5);height:rem2px(2.5);left:0;right:0;margin:rem2px(2) auto;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAAzFBMVEUAAAAs0AAu1AAs0AAr0AAq1QAs0AAt0AAs0AAs0AAr0AAq0wAs0AAq0QAs0AAs0AAs0AAs0AAr0AAs0AAr0AAs0AAr0QAs0QAs0AApygAs0AAs0AAs0AAs0AAs0QAr0QAt0gAs0AAt0QAtzwAq0QArzwAs0AAqzQAs0QAs0AAs0AAs0AD////l+d/8/vty4FVG1iCI5W/X989G1h881BNy31My0gd34Vr5/vjt++qk65Gd6omO5naB42Za2jdL1ybR9cjA8bNp3kpZ2jY9PuX7AAAAK3RSTlMA/APuFwfUZln0OxLIVEbr49vZzsKxmW1MDvmsqIxpXiGejlA3NGgk1pyDVbbBQAAAArxJREFUaN7Nmody2kAURZ9QQRIyTTTRDDauV3GsFNzjlP//p8CQjAZLwLY3w/mAc9EWZvftIzGS8HIyitp2AAR2OxpNLsOETFHzex5K8Hp+Td/u9DsWdmJ1+o6OvTLoWjiA1R1UFPVutQ0h2lVX5ddXmxCmWZX+ijCGFHEot3BuIM1cYkmd21DAPhcd/TMociY0E7MIysQzgdltQIPGxSH/yRBaBPX9/lMLmgz9vX4Y4HTP+FgwgHWyy78IYIThYsf6bMAQjasyvxvDGLFLRW5gkHnJBMMohYl2bBjFdmibMQwz3vbXYZz61j+0B+N4FcqpgoFq7nebYKDpFj6A6xMqLbDQ+j8LAzAxoA1dMNH9t4kt6PL+/Ov5DwpYm+3chy7fH9M0vctQoE9rOtr+u3TN3Ts+0ln7a5a+f8NrcYzWx0nflD99QQF/FdAz5U8fUKC3CvCgw+fc/2WJAh5RYsr/6R4lJHTB6kdIPqsfU7pl9WNCY1Y/RhSx+hFRCzv4/fPx6Xmp6UeLbJTzsFnb3/T8sClAKcunNE9Q9yMglPMjTfMEdT+wOyBP0PFjzxDlCRr+YN8k5wnKfti7l2lWSFDwo0URhBIU/YhoDLEENT9GdAvBhIL/KwSYkA/RBBU/pnQB4QQFP0JKIJzwJu9HQuQJJ6Tyfk/g2JJp+NETOXhl6n74QkfHTNlv1cQOv5miHx3R43um5kdf+AKSKfktR/wKlSn40ZW5BL49rvealB8DqWvs/evLwxIytCrMF/FL9lICdzGEvZzDXZBiLqmN2IuC7GXNAnMYZM5cWvZcKuGKqTiesxjCCMGC94FiWGd+YvG5H4m4n7nYH+oOMouhTDwjAVz1x1L3OJ57VzhjSDN2SIa6Bym8+rE1Daxwp6JtD1P3OBs3+FtP8uaZa5RwnTfP6JOE0+32n6lo+89fOWa8/GcTqREAAAAASUVORK5CYII=);-webkit-background-size:contain;background-size:contain}.dots_item{width:rem2px(.75);height:rem2px(.75);margin-right:rem2px(.375)}.dots_item.show-none{display:none!important}.verify-text{position:absolute;width:100%;font-size:rem2px(1);text-align:center;line-height:rem2px(1.375);margin-top:rem2px(5.25);z-index:-1}.verify-text.little-fontsize{font-size:rem2px(.8)}".replace(/rem2px\((.*?)\)/g, function(e, i) {
                        return t * parseFloat(i) + "px"
                    });
                    window.addEventListener && document.querySelector || (i += ".tcaptcha-transform .ticon-refresh{background: url(https://captcha.gtimg.com/public/res/tcaptcha-icons-merge.34d219bf.png) no-repeat;background-position: 0px 0px;*left:148px;}.tcaptcha-transform .transform-close{background: url(https://captcha.gtimg.com/public/res/tcaptcha-icons-merge.34d219bf.png) no-repeat;background-position: -51px -75px;}");
                    var n = "style-" + Math.floor(1e7 * Math.random())
                        , o = document.createElement("style");
                    o.id = n,
                        o.type = "text/css",
                        document.getElementsByTagName("head").item(0).appendChild(o),
                        o.styleSheet ? o.styleSheet.cssText = i : o.innerHTML = i
                } catch (c) {
                    var a = s.perfectStack(c);
                    s.send("ERROR_TYPE_FRAMEJS_CODE_ERROR", e.opts.appid, a || "addPopupStyle code error")
                }
            },
            createPreTrigerPoint: function(e) {
                var t = e;
                t.wrap = "",
                t.preTrigerPoint && function(e, t) {
                    if (t)
                        return u(e.preTrigerPoint),
                            void (e.preTrigerPoint = null);
                    u(e.securityIframe),
                        e.securityIframe = null
                }(e, !0);
                var i = document.createElement("div");
                i.id = "loading_animation";
                var n = t.opts.htdoc_path + "/loading_grey.gif"
                    , o = document.createElement("iframe");
                o.setAttribute("frameborder", "0", 0),
                    o.setAttribute("border", "0"),
                    o.marginheight = 0,
                    o.marginwidth = 0,
                    o.setAttribute("marginheight", "0", 0),
                    o.setAttribute("marginwidth", "0", 0),
                    o.scrolling = "no";
                var s = r.getCSS(t.ele, "width")
                    , p = r.getCSS(t.ele, "height")
                    , d = 0;
                s && "auto" != s ? parseInt(s, 10) < a.CONST_PTR.minWidth ? (t.clientW = a.CONST_PTR.minWidth + "px",
                    d = a.CONST_PTR.minWidth - 2 + "px") : (t.clientW = s,
                    d = parseInt(s, 10) - 2 + "px") : (t.clientW = "100%",
                    d = c ? "99%" : "100%"),
                    !p || "auto" == p || parseInt(p, 10) < a.CONST_PTR.minHeight ? t.clientH = a.CONST_PTR.minHeight + "px" : t.clientH = p;
                var f = {
                    width: t.clientW,
                    height: t.clientH,
                    border: "1px solid #e7e7e7",
                    position: "relative",
                    borderRadius: "2px",
                    lineHeight: t.clientH,
                    boxSizing: "border-box",
                    background: "url(" + n + ") center no-repeat"
                };
                r.CSS(i, f);
                var l = {
                    width: d,
                    height: parseInt(t.clientH, 10) - 2 + "px",
                    border: "none",
                    position: "relative",
                    minHeight: a.CONST_PTR.minHeight - 2 + "px",
                    minWidth: a.CONST_PTR.minWidth - 2 + "px",
                    zIndex: 10
                };
                if (t.opts.firstvrytype && 2 == t.opts.firstvrytype && (t.clientW = a.CONST_SLIDE_PTR.width + "px",
                    t.clientH = a.CONST_SLIDE_PTR.height + "px",
                    l = {
                        width: t.clientW,
                        height: t.clientH,
                        border: "none",
                        position: "relative",
                        minHeight: t.clientH,
                        minWidth: t.clientW,
                        zIndex: 10
                    }),
                    r.CSS(o, l),
                    t.src) {
                    t.opts.themeColor && (t.src = r.addUrlParam(t.src, {
                        color: t.opts.themeColor
                    }));
                    var h = 0;
                    t.clientH.length > 2 && (h = t.clientH.substr(0, t.clientH.length - 2)),
                        t.src = r.addUrlParam(t.src, {
                            uid: t.opts.uin,
                            cap_cd: t.opts.capcd,
                            height: h,
                            lang: t.opts.lang,
                            fb: t.opts.fb,
                            theme: t.opts.theme,
                            rnd: Math.floor(1e6 * Math.random()),
                            forcestyle: t.opts.forcestyle
                        }),
                        o.src = t.src
                }
                t.preTrigerPoint = o,
                    t.wrap = i,
                    t.wrap.appendChild(t.preTrigerPoint),
                    t.ele.appendChild(t.wrap),
                    function(e) {
                        e.msg.addTarget(e.preTrigerPoint.contentWindow, "preTrigerPoint")
                    }(e)
            },
            setPosition: function(e, t) {
                if ("embed" != e.opts.type) {
                    var i = 0
                        , n = 0;
                    if ("popup" == e.opts.type) {
                        var o = function(e) {
                            return [e.sizeSC.width, e.sizeSC.height]
                        }(e)
                            , a = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
                        i = ((window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight) - o[1]) / 2,
                            n = (a - o[0]) / 2
                    }
                    if ("point" == e.opts.type) {
                        var s = f(e);
                        i = s[0],
                            n = s[1]
                    }
                    return r.CSS(t, {
                        top: i + "px",
                        left: n + "px"
                    })
                }
            },
            changePos: f,
            smartverification: function(e, t) {
                var i = e;
                i.opts.tcaptchaFlag ? (setTimeout(function() {
                    i.TCaptchaFrame.changeVerifyType(),
                    i.opts.sdkOpts && i.opts.sdkOpts.width && i.readyFunc && i.readyFunc({
                        sdkView: {
                            width: i.opts.sdkOpts.width,
                            height: i.opts.sdkOpts.height
                        }
                    })
                }, 350),
                    setTimeout(function() {
                        r.removeIfExist("t_verify"),
                            r.removeIfExist("t_mask"),
                            r.callbackExecutor(i, {
                                ret: 0,
                                ticket: t.ticket,
                                randstr: t.randstr
                            })
                    }, 1350)) : r.callbackExecutor(i, {
                    ret: 0,
                    ticket: t.ticket,
                    randstr: t.randstr
                })
            },
            popupResize: function(e, t) {
                var i = e
                    , n = 0;
                n = window.innerWidth;
                var s = void 0;
                window.onresize = function() {
                    clearTimeout(s),
                        s = setTimeout(function() {
                            if (!(i.opts.tcaptchaFlag && i.opts.sdkOpts && i.opts.sdkOpts.width || Math.abs(window.innerWidth - n) < a.threshold)) {
                                n = window.innerWidth,
                                    d(t, i, !1, !0);
                                var e = {
                                    height: i.sizeSC.height + "px",
                                    width: i.sizeSC.width + "px",
                                    top: i.posSC.top,
                                    left: i.posSC.left
                                }
                                    , s = o.border();
                                s && r.CSS(s, e),
                                    r.CSS(i.securityIframe, e),
                                r.isMobileUa && i.send2securityCode(JSON.stringify({
                                    message: {
                                        type: 1,
                                        width: i.sizeSC.width,
                                        height: i.sizeSC.height
                                    }
                                }))
                            }
                        }, 50)
                }
            },
            fullScreen: function(e, t) {
                var i = e;
                setTimeout(function() {
                    var e = r.getWindowHeight()
                        , n = r.getWindowWidth();
                    i.sizeSC.height = e,
                        i.sizeSC.width = n,
                        i.windowHeight = e,
                        i.windowWidth = n,
                        i.TCaptchaFrame.createSecurityCode(t),
                        window.onresize = function() {
                            setTimeout(function() {
                                var e = r.getWindowHeight()
                                    , t = r.getWindowWidth();
                                if (!(Math.abs(i.windowWidth - t) < 30)) {
                                    i.sizeSC.height = e,
                                        i.sizeSC.width = t,
                                        i.windowHeight = e,
                                        i.windowWidth = t;
                                    var n = {
                                        height: i.sizeSC.height + "px",
                                        width: i.sizeSC.width + "px"
                                    }
                                        , a = o.border();
                                    a && r.CSS(a, n),
                                        r.CSS(i.securityIframe, n),
                                    r.isMobileUa && i.send2securityCode(JSON.stringify({
                                        message: {
                                            type: 1,
                                            width: i.sizeSC.width,
                                            height: i.sizeSC.height
                                        }
                                    }))
                                }
                            }, 200)
                        }
                }, 350)
            }
        }
    }
    , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, i) {
        "use strict";
        i(14);
        var r = i(15)
            , n = i(1)
            , o = i(56)
            , a = i(21)
            , s = i(22)
            , c = i(23)
            , p = i(58)
            , d = i(28)
            , u = d.langPack
            , f = i(29)
            , l = d.detectWxLang()
            , h = i(30)
            , m = i(60)
            , g = i(3)
            , y = "securityCode"
            , v = "preTrigerPoint"
            , S = void 0
            , b = !1
            , w = new r("parent")
            , C = !1;
        function _() {
            return S || (S = this.init.apply(this, arguments))
        }
        _.prototype = {
            init: function(e) {
                var t = {
                    ele: document.body,
                    src: "",
                    uid: "",
                    capcd: "",
                    startFn: function() {},
                    endFn: function() {}
                };
                return this.wxLang = l,
                    this.opts = n.extend({}, t, e),
                    this.isPop = "popup" == this.opts.type,
                    this.initOptions(),
                    this.initLang(),
                    this.listenFunc = [],
                    this.readyFunc = function() {}
                    ,
                    this.msg = w,
                    this.initListener(),
                    this.windowHeight = 0,
                    this.windowWidth = 0,
                    this.sess = "",
                    this.TCaptchaFrame = m.getInstance(this),
                    this
            },
            initOptions: function() {
                this.ele = this.opts.ele ? this.opts.ele == document ? document.body : this.opts.ele : document.body,
                    this.ele = this.opts.type && this.isPop ? document.body : this.ele,
                    this.src = this.opts.src,
                    this.ticket = "",
                    this.randstr = "",
                null == this.sizeSC && (this.sizeSC = n.extend({}, c.CONST_DEFAULT_SIZE)),
                null == this.posSC && (this.posSC = n.extend({}, c.CONST_SC_PS))
            },
            initLang: function() {
                if (this.wxLang)
                    u.init(this.wxLang);
                else {
                    var e = /lang=([\d]{4})/.exec(this.opts.params);
                    e && u.init(e[1])
                }
                this.langPack = u
            },
            pointSuccess: function() {
                n.CSS(window.document.getElementById("loading_animation"), {
                    border: "1px solid #42dd18"
                }),
                    this.send2preTriggerPoint(JSON.stringify({
                        message: {
                            type: "success"
                        }
                    }))
            },
            initListener: function() {
                var e = this;
                this.msg.clear(),
                    this.msg.listen(function(t) {
                        try {
                            t = JSON.parse(t)
                        } catch (y) {
                            return
                        }
                        if (t && t.message && t.message.type) {
                            var i = (t = t.message).type;
                            switch (i) {
                                case 3:
                                    if (e.opts.startFn(),
                                    t && t.ticket)
                                        e.ticket = t.ticket,
                                            e.randstr = t.randstr,
                                            n.removeIfExist("tcaptcha_container"),
                                            n.removeIfExist("tcaptcha_transform"),
                                            n.removeIfExist("t_mask"),
                                            n.callbackExecutor(e, {
                                                ret: 0,
                                                ticket: t.ticket,
                                                randstr: t.randstr
                                            }),
                                        "point" == e.opts.type && (t.noVerify ? setTimeout(e.pointSuccess, 1e3) : e.pointSuccess());
                                    else {
                                        if (t && t.src) {
                                            var r = n.getCapType(t.captype, t.subcaptype);
                                            h.setCaptchaIframeSizeAndPos(r, e, !1, !0);
                                            var c = t.src;
                                            t.src.indexOf("http:") > -1 && e.opts.domain && e.opts.domain.indexOf("https:") > -1 && (c = (c = c.replace("http://captcha.qq.com", "https://ssl.captcha.qq.com")).replace("http://ssl.captcha.qq.com", "https://ssl.captcha.qq.com")),
                                                e.TCaptchaFrame.createSecurityCode(r, f(c))
                                        }
                                        e.securityIframe && h.setPosition(e, e.securityIframe)
                                    }
                                    return;
                                case 4:
                                    return n.removeIfExist("tcaptcha_transform"),
                                        void n.callbackExecutor(e, {
                                            ret: 1,
                                            ticket: "",
                                            randstr: ""
                                        });
                                case 13:
                                case 6:
                                    return n.removeIfExist("tcaptcha_transform"),
                                        n.removeIfExist("t_mask"),
                                        n.callbackExecutor(e, {
                                            ret: 2,
                                            ticket: "",
                                            randstr: ""
                                        }),
                                        void ("point" == e.opts.type && (n.removeIfExist("tcaptcha_container"),
                                            e.send2preTriggerPoint(JSON.stringify({
                                                message: {
                                                    type: "closePopup"
                                                }
                                            }))));
                                case 7:
                                    n.removeIfExist("t_verify"),
                                        n.setPopPosition(e.securityIframe, e.sizeSC.width, e.sizeSC.height, e.opts.sdkOpts);
                                    var p = {
                                        background: "#ffffff",
                                        opacity: "1"
                                    };
                                    return n.isChrome75 || (p["border-radius"] = "3px"),
                                        void n.CSS(e.securityIframe, p);
                                case 8:
                                    f.set(t.subsid);
                                    var d = {
                                        gettype: o.getType(e.opts),
                                        data: {
                                            sess: t.sess
                                        },
                                        success: function(t) {
                                            e.src = o.getIframeSrc(e.opts, t, e);
                                            var i = {
                                                uid: e.opts.uid,
                                                cap_cd: e.opts.capcd,
                                                rnd: Math.floor(1e6 * Math.random())
                                            };
                                            e.src = n.addUrlParam(e.src, i),
                                                e.sess = t.sess;
                                            var r = n.getCapType(t.capclass, t.subcapclass);
                                            h.setCaptchaIframeSizeAndPos(r, e, !0, !0),
                                            "embed" === e.opts.type && (e.src = n.addUrlParam(e.src, {
                                                noBorder: "noborder",
                                                fb: e.opts.fb,
                                                forcestyle: e.opts.forcestyle
                                            })),
                                            e.securityIframe && (e.securityIframe.src = e.src),
                                                e.opts.capType = r
                                        },
                                        error: function() {}
                                    };
                                    return void e.getPrehandle(d);
                                case 9:
                                    var u = window.document.getElementById("loading_animation");
                                    return u && setTimeout(function() {
                                        u.style.background = "none"
                                    }, 100),
                                        void ("point" == e.opts.type && e.send2preTriggerPoint(JSON.stringify({
                                            message: {
                                                type: "triggerSuccess"
                                            }
                                        })));
                                case 10:
                                    return e.readyFunc && e.readyFunc({
                                        sdkView: {
                                            width: e.sizeSC.width,
                                            height: e.sizeSC.height
                                        },
                                        state: t.loadstate,
                                        info: t.info,
                                        fwidth: t.fwidth ? t.fwidth : 0,
                                        fheight: t.fheight ? t.fheight : 0
                                    }),
                                        void ("point" == e.opts.type && e.send2preTriggerPoint(JSON.stringify({
                                            message: {
                                                type: "loadDone"
                                            }
                                        })));
                                case 15:
                                case 11:
                                    if (11 == i && "vtt" == e.opts.capType && 2 == e.opts.clientype)
                                        return;
                                    if ("point" == e.opts.type)
                                        n.removeIfExist("tcaptcha_container"),
                                            e.send2preTriggerPoint(JSON.stringify({
                                                message: {
                                                    type: "fLimit"
                                                }
                                            })),
                                            n.callbackExecutor(e, {
                                                ret: 2,
                                                ticket: "",
                                                randstr: ""
                                            });
                                    else if ("popup" == e.opts.type || "" == e.opts.type) {
                                        var l = {
                                            gettype: o.getType(e.opts),
                                            data: {
                                                sess: ""
                                            },
                                            success: function(t) {
                                                e.src = o.getIframeSrc(e.opts, t, e);
                                                var i = n.getCapType(t.capclass, t.subcapclass)
                                                    , r = a.tIframe();
                                                e.isPop && h.setCaptchaIframeSizeAndPos(i, e, !0, !0),
                                                    a.border() && s[i].unionSizeType ? e.TCaptchaFrame.showRefreshDom() : r.src = e.src
                                            },
                                            error: function() {}
                                        };
                                        e.getPrehandle(l)
                                    } else
                                        e.refresh();
                                    return;
                                case 16:
                                case 12:
                                    var m = {
                                        gettype: o.getType(e.opts),
                                        data: {
                                            sess: ""
                                        },
                                        success: function(t) {
                                            e.src = o.getIframeSrc(e.opts, t, e),
                                                a.tIframe().src = e.src
                                        },
                                        error: function() {}
                                    };
                                    return void e.getPrehandle(m);
                                case 14:
                                    "point" == e.opts.type && e.send2preTriggerPoint(JSON.stringify({
                                        message: {
                                            type: "loadDone"
                                        }
                                    }));
                                    var g = a.container();
                                    return g && setTimeout(function() {
                                        n.CSS(g, {
                                            display: "block",
                                            zoom: 1
                                        }),
                                            n.CSS(e.securityIframe, {
                                                zoom: 1
                                            })
                                    }, 16),
                                        void n.removeIfExist("t_verify")
                            }
                        }
                    })
            },
            initPos: function(e) {
                e && e.top && (this.posSC.top = e.top),
                e && e.left && (this.posSC.left = e.left)
            },
            create: function() {
                switch (this.opts.type) {
                    case "point":
                        h.createPreTrigerPoint(this);
                        break;
                    case "embed":
                        var e = window.document.getElementById("tcaptcha_load");
                        e && (e.style.display = "none"),
                            this.createPrehandle();
                        break;
                    case "popup":
                    default:
                        b || (h.addPopupStyle(this),
                            b = !0),
                        this.opts.tcaptchaFlag && this.isPop && this.TCaptchaFrame.createSmartVerify(),
                            this.createPrehandle()
                }
            },
            createPrehandle: function() {
                if (!C) {
                    C = !0;
                    var e = this;
                    e.loadStart = (new Date).getTime();
                    var t = 0
                        , i = {
                        gettype: o.getType(e.opts),
                        data: {
                            sess: ""
                        },
                        success: function(t) {
                            C = !1,
                                e.prehandleSuccess(t)
                        },
                        error: function() {
                            C = !1,
                                g.send("ERROR_TYPE_JSONP_PREHANDLE", e.opts.appid),
                                ++t < 2 ? e.getPrehandle(i) : e.prehandleError()
                        }
                    };
                    e.getPrehandle(i)
                }
            },
            getPrehandle: function(e) {
                f.reset(),
                    p({
                        url: f(e.gettype),
                        data: e.data,
                        success: e.success,
                        error: e.error
                    })
            },
            prehandleSuccess: function(e) {
                var t = this;
                try {
                    t.src = o.getIframeSrc(t.opts, e, t),
                        t.sess = e.sess;
                    var i = n.getCapType(e.capclass, e.subcapclass)
                        , r = (new Date).getTime();
                    if (t.prehandleLoadTime = r - t.loadStart,
                        t.createIframeStart = r,
                    "embed" == t.opts.type)
                        return h.setCaptchaIframeSizeAndPos(i, t, !1, !0),
                            t.src = n.addUrlParam(t.src, {
                                noBorder: "noborder",
                                fb: t.opts.fb,
                                forcestyle: t.opts.forcestyle
                            }),
                            void t.TCaptchaFrame.createSecurityCode(i);
                    t.isPop ? (window.onresize = function() {
                        a.tVerify() && n.setPopPosition(a.tVerify(), t.sizeSC.width, t.sizeSC.height)
                    }
                        ,
                        e.ticket ? h.smartverification(t, e) : setTimeout(function() {
                            h.setCaptchaIframeSizeAndPos(i, t, !1, !0),
                            t.opts.tcaptchaFlag && t.TCaptchaFrame.enlargeVerifyType(a.tVerify(), t.sizeSC.width, t.sizeSC.height, t.opts.sdkOpts),
                                t.TCaptchaFrame.createSecurityCode(i),
                                h.popupResize(t, i)
                        }, 350)) : e.ticket ? n.callbackExecutor(t, {
                        ret: 0,
                        ticket: e.ticket,
                        randstr: e.randstr
                    }) : h.fullScreen(t, i),
                        t.opts.capType = i
                } catch (c) {
                    var s = g.perfectStack(c);
                    g.send("ERROR_TYPE_FRAMEJS_CODE_ERROR", t.opts.appid, s || "prehandleSuccess code error")
                }
            },
            prehandleError: function() {
                n.removeIfExist("t_verify"),
                    n.removeIfExist("t_mask"),
                    n.callbackExecutor(this, {
                        ret: 0,
                        ticket: Math.random().toString(36).substr(2),
                        randstr: "@" + Math.random().toString(36).substr(2)
                    })
            },
            destroy: function() {
                n.removeIfExist("t_mask"),
                    n.removeIfExist("tcaptcha_transform"),
                    n.removeIfExist("tcaptcha_container"),
                    n.removeIfExist("t_verify"),
                S && (this.closeSecurityCode(),
                    this.listenFunc = [],
                    this.listenFunc.length = 0,
                    this.readyFunc = function() {}
                    ,
                    S = null)
            },
            refresh: function(e) {
                n.removeIfExist("tcaptcha_container"),
                    n.removeIfExist("t_verify"),
                S && (this.closeSecurityCode(),
                    this.clearContainer(),
                    this.initOptions(),
                e && n.isObject(e) && ("undefined" != typeof e.uin && (this.opts.uid = e.uin),
                "undefined" != typeof e.uid && (this.opts.uid = e.uid),
                "undefined" != typeof e.capcd && (this.opts.capcd = e.capcd)),
                    this.create())
            },
            clearContainer: function() {
                "popup" != this.opts.type && "" != this.opts.type && this.ele && (this.ele.innerHTML = "")
            },
            listen: function(e, t) {
                this.listenFunc = [],
                    this.listenFunc.push(e),
                    this.readyFunc = function() {}
                    ,
                t && (this.readyFunc = t)
            },
            send2securityCode: function(e) {
                var t = y;
                this.msg.targets[t].send(e)
            },
            send2preTriggerPoint: function(e) {
                if ("point" == this.opts.type) {
                    var t = v;
                    this.msg.targets[t].send(e)
                }
            },
            closeSecurityCode: function(e) {
                try {
                    this.opts.endFn()
                } catch (t) {}
                this.securityIframe && (this.securityIframe.parentNode && this.securityIframe.parentNode.removeChild(this.securityIframe),
                    this.securityIframe = null),
                n.isFunction(e) && e(),
                window.CollectGarbage && window.CollectGarbage()
            },
            getTicket: function() {
                return {
                    ticket: this.ticket,
                    randstr: this.randstr
                }
            },
            start: function(e) {
                this.opts.startFn = e
            },
            end: function(e) {
                this.opts.endFn = e
            }
        },
            window.AqSCode = _
    }
    , function(e, t, i) {
        "use strict";
        var r = i(1)
            , n = i(28)
            , o = i(29)
            , a = i(5)
            , s = r.getParentScale()
            , c = n.detectWxLang();
        e.exports = {
            getType: function(e) {
                var t = e.domain + "/" + e.gettype + e.params
                    , i = {
                    cap_cd: e.capcd,
                    uid: e.uid,
                    wxLang: c
                };
                return t = r.addUrlParam(t, i)
            },
            getIframeSrc: function(e, t, i) {
                var n = "";
                if (2 == t.state)
                    return function(e) {
                        a.add(document, "click", function t(i) {
                            var r = i || window.event
                                , n = r.srcElement || r.target;
                            "t_mask" == n.id && (a.remove(document, "click", t),
                            e.destroy && e.destroy())
                        })
                    }(i),
                        n = o("https://captcha.gtimg.com/public/1/captcha_error_tips.html");
                n = o(e.domain + "/" + t.src_1 + e.params);
                var p = {
                    sess: t.sess,
                    fwidth: e.fwidth,
                    sid: t.sid,
                    forcestyle: e.forcestyle,
                    wxLang: c,
                    tcScale: s
                };
                return n = r.addUrlParam(n, p)
            }
        }
    }
    , function(e, t, i) {
        "use strict";
        var r = ["c2", "c3", "c11", "c12", "c21", "c22", "c23"]
            , n = {
            "zh-cn": ["\u5b89\u5168\u9a8c\u8bc1", "\u9a8c\u8bc1\u6210\u529f", "\u8fd4\u56de", "\u9a8c\u8bc1\u4e2d...", "\u9a8c\u8bc1\u6210\u529f", "\u5c1d\u8bd5\u592a\u591a\u4e86", "2s\u540e\u81ea\u52a8\u4e3a\u60a8\u5237\u65b0\u9a8c\u8bc1\u7801"],
            "zh-hk": ["\u5b89\u5168\u9a57\u8b49", "\u9a57\u8b49\u6210\u529f", "\u8fd4\u56de", "\u9a57\u8b49\u4e2d\u22ef", "\u9a57\u8b49\u6210\u529f", "\u932f\u8aa4\u6b21\u6578\u592a\u591a", "\u9a57\u8b49\u78bc\u5c07\u65bc 2 \u79d2\u5f8c\u81ea\u52d5\u66f4\u65b0"],
            "zh-tw": ["\u5b89\u5168\u9a57\u8b49", "\u9a57\u8b49\u6210\u529f", "\u8fd4\u56de", "\u9a57\u8b49\u4e2d...", "\u9a57\u8b49\u6210\u529f", "\u5617\u8a66\u6b21\u6578\u592a\u591a", "2\u79d2\u5f8c\u81ea\u52d5\u70ba\u60a8\u91cd\u65b0\u6574\u7406\u9a57\u8b49\u78bc"],
            en: ["Security Verification", "Verification is successful", "Back", "Verifying...", "Verification is successful", "Refreshing too often", "Verification Code will refresh in 2 sec."],
            ar: ["\u0627\u0644\u062a\u062d\u0642\u0642 \u0645\u0646 \u0627\u0644\u062d\u0645\u0627\u064a\u0629", "\u0646\u062c\u0627\u062d \u0627\u0644\u062a\u062d\u0642\u0642", "\u0639\u0648\u062f\u0629", "\u062c\u0627\u0631\u064a \u0627\u0644\u062a\u062d\u0642\u0642...", "\u0646\u062c\u0627\u062d \u0627\u0644\u062a\u062d\u0642\u0642", "\u0643\u062b\u0631\u0629 \u0627\u0644\u062a\u062d\u062f\u064a\u062b", "\u0633\u064a\u062a\u0645 \u062a\u062d\u062f\u064a\u062b \u0643\u0648\u062f \u0627\u0644\u062a\u062d\u0642\u0642 \u062e\u0644\u0627\u0644 2 \u062b\u0627\u0646\u064a\u0629."],
            my: ["\u101c\u1036\u102f\u107f\u1001\u1036\u1033\u1031\u101b\u1038\u1021\u1010\u100a\u1039\u103b\u1015\u1033\u103b\u1001\u1004\u1039\u1038", "\u1021\u1010\u100a\u1039\u103b\u1015\u1033\u1019\u1088 \u1031\u1021\u102c\u1004\u1039\u103b\u1019\u1004\u1039\u1015\u102b\u101e\u100a\u1039", "\u1031\u1014\u102c\u1000\u1039\u101e\u102d\u102f\u1094", "\u1021\u1010\u100a\u1039\u103b\u1015\u1033\u1031\u1014\u101e\u100a\u1039...", "\u1021\u1010\u100a\u1039\u103b\u1015\u1033\u1019\u1088 \u1031\u1021\u102c\u1004\u1039\u103b\u1019\u1004\u1039\u1015\u102b\u101e\u100a\u1039", "\u1019\u107e\u1000\u102c\u1001\u1014\u103b\u1015\u1014\u1039\u1016\u103c\u1004\u1039\u1037\u1031\u1014\u101b\u101e\u100a\u1039\u104b", "2 \u1005\u1000\u1060\u1014\u1039\u1094\u1021\u1010\u103c\u1004\u1039\u1038 \u1021\u1010\u100a\u1039\u103b\u1015\u1033\u101b\u1014\u1039Code \u1021\u101e\u1005\u1039\u1031\u1015\u105a\u1015\u102b\u1019\u100a\u1039"],
            fr: ["V\xe9rification de s\xe9curit\xe9", "La v\xe9rification est r\xe9ussie", "Retour", "V\xe9rification...", "La v\xe9rification est r\xe9ussie", "Trop actualis\xe9", "Le code de v\xe9rification s'actualisera dans 2 sec."],
            de: ["Sicherheitsbest\xe4tigung", "Verifizierung erfolgreich", "Zur\xfcck", "Wird verifziert\xa0\u2026", "Verifizierung erfolgreich", "Zu oft aktualisiert", "Verifizierungscode wird in 2 Sekunden aktualisiert."],
            he: ["\u05d0\u05d9\u05de\u05d5\u05ea \u05d0\u05d1\u05d8\u05d7\u05d4", "\u05d4\u05d0\u05d9\u05de\u05d5\u05ea \u05e2\u05d1\u05e8 \u05d1\u05d4\u05e6\u05dc\u05d7\u05d4", "\u05d7\u05d6\u05e8\u05d4", "\u05de\u05d0\u05de\u05ea", "\u05d4\u05d0\u05d9\u05de\u05d5\u05ea \u05e2\u05d1\u05e8 \u05d1\u05d4\u05e6\u05dc\u05d7\u05d4", "\u05de\u05e8\u05e2\u05e0\u05df \u05dc\u05e2\u05ea\u05d9\u05dd \u05e7\u05e8\u05d5\u05d1\u05d5\u05ea \u05de\u05d9\u05d3\u05d9", "\u05e7\u05d5\u05d3 \u05d4\u05d0\u05d9\u05de\u05d5\u05ea \u05d9\u05ea\u05d7\u05d3\u05e9 \u05d1\u05ea\u05d5\u05da 2 \u05e9\u05e0\u05d9\u05d5\u05ea"],
            hi: ["\u0938\u0941\u0930\u0915\u094d\u0937\u093e \u0938\u0924\u094d\u092f\u093e\u092a\u0928", "\u0938\u0924\u094d\u092f\u093e\u092a\u0928 \u0938\u092b\u0932", "\u092a\u0940\u091b\u0947", "\u0938\u0924\u094d\u092f\u093e\u092a\u0928 \u091c\u093e\u0930\u0940...", "\u0938\u0924\u094d\u092f\u093e\u092a\u0928 \u0938\u092b\u0932", "\u0905\u0915\u094d\u0938\u0930 \u0930\u0940\u092b\u094d\u0930\u0947\u0936 \u0939\u094b \u0930\u0939\u093e \u0939\u0948\u0964", "\u0938\u0924\u094d\u092f\u093e\u092a\u0928 \u0915\u094b\u0921 2 \u0938\u0947\u0915. \u092e\u0947\u0902 \u0930\u0940\u092b\u094d\u0930\u0947\u0936 \u0939\u094b\u0917\u093e"],
            id: ["Verifikasi Keamanan", "Verifikasi berhasil", "Kembali", "Memverifikasi...", "Verifikasi berhasil", "Terlalu sering merefresh.", "Kode Verifikasi akan di-refresh dalam 2 detik."],
            it: ["Verifica di sicurezza", "Verifica completata", "Indietro", "Verifica in corso", "Verifica completata", "Troppo frequente", "Il codice di verifica sar\xe0 aggiornato tra 2 secondi"],
            ja: ["\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u8a8d\u8a3c", "\u8a8d\u8a3c\u304c\u6b63\u5e38\u306b\u5b8c\u4e86", "\u623b\u308b", "\u8a8d\u8a3c\u4e2d\u2026", "\u8a8d\u8a3c\u304c\u6b63\u5e38\u306b\u5b8c\u4e86", "\u66f4\u65b0\u983b\u5ea6\u304c\u9ad8\u3059\u304e\u307e\u3059", "\u8a8d\u8a3c\u30b3\u30fc\u30c9\u306f2\u79d2\u5f8c\u306b\u30ea\u30d5\u30ec\u30c3\u30b7\u30e5\u3055\u308c\u307e\u3059\u3002"],
            ko: ["\ubcf4\uc548 \uc778\uc99d", "\uc778\uc99d \uc131\uacf5", "\ub4a4\ub85c\uac00\uae30", "\uc778\uc99d \uc911...", "\uc778\uc99d \uc131\uacf5", "\uc0c8\ub85c\uace0\uce68\uc774 \ub108\ubb34 \uc7a6\uc2b5\ub2c8\ub2e4", "\uc778\uc99d \ucf54\ub4dc\uac00 2\ucd08 \ud6c4\uc5d0 \uc0c8\ub85c\uace0\uce68 \ub429\ub2c8\ub2e4."],
            lo: ["\u0e81\u0eb2\u0e99\u0ea2\u0eb7\u0e99\u0ea2\u0eb1\u0e99\u0e84\u0ea7\u0eb2\u0ea1\u0e9b\u0ead\u0e94\u0ec4\u0e9e", "\u0e81\u0eb2\u0e99\u0ea2\u0eb7\u0e99\u0ea2\u0eb1\u0e99\u0ec4\u0e94\u0ec9\u0eaa\u0eb3\u0ec0\u0ea5\u0eb1\u0e94\u0ec1\u0ea5\u0ec9\u0ea7", "\u0e81\u0eb1\u0e9a\u0e84\u0eb7\u0e99", "\u0e81\u0eb3\u0ea5\u0eb1\u0e87\u0ea2\u0eb7\u0e99\u0ea2\u0eb1\u0e99...", "\u0e81\u0eb2\u0e99\u0ea2\u0eb7\u0e99\u0ea2\u0eb1\u0e99\u0ec4\u0e94\u0ec9\u0eaa\u0eb3\u0ec0\u0ea5\u0eb1\u0e94\u0ec1\u0ea5\u0ec9\u0ea7", "\u0e9f\u0eb7\u0ec9\u0e99\u0e9f\u0eb9\u0e84\u0eb7\u0e99\u0ec0\u0ea5\u0eb7\u0ec9\u0ead\u0e8d\u0ec6", "\u0ea5\u0eb0\u0eab\u0eb1\u0e94\u0ea2\u0eb7\u0e99\u0ea2\u0eb1\u0e99\u0e88\u0eb0\u0ea1\u0eb5\u0e81\u0eb2\u0e99\u0e9f\u0eb7\u0ec9\u0e99\u0e9f\u0eb9\u0e84\u0eb7\u0e99\u0ec3\u0eab\u0ea1\u0ec8\u0e9e\u0eb2\u0e8d\u0ec3\u0e99 2 \u0ea7\u0eb4\u0e99\u0eb2\u0e97\u0eb5"],
            ms: ["Pengesahan Keselamatan", "Pengesahan berjaya", "Kembali", "Mengesahkan...", "Pengesahan berjaya", "Terlalu kerap segar semula", "Kod Pengesahan akan disegar semula dalam 2 saat"],
            pl: ["Weryfikacja bezpiecze\u0144stwa", "Weryfikacja powiod\u0142a si\u0119", "Wstecz", "Weryfikowanie...", "Weryfikacja powiod\u0142a si\u0119", "Za cz\u0119sto od\u015bwie\u017casz", "Kod weryfikacyjny zostanie od\u015bwie\u017cony za 2 s."],
            pt: ["Verifica\xe7\xe3o de Seguran\xe7a", "Verificado com sucesso", "Voltar", "Verificando...", "Verificado com sucesso", "Atualizando muito", "C\xf3digo de Verifica\xe7\xe3o ser\xe1 atualizado em 2 seg."],
            ru: ["\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0432 \u0446\u0435\u043b\u044f\u0445 \u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u043e\u0441\u0442\u0438", "\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u043f\u0440\u043e\u0439\u0434\u0435\u043d\u0430", "\u041d\u0430\u0437\u0430\u0434", "\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430...", "\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u043f\u0440\u043e\u0439\u0434\u0435\u043d\u0430", "\u0421\u043b\u0438\u0448\u043a\u043e\u043c \u0447\u0430\u0441\u0442\u043e\u0435 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435", "\u041f\u0440\u043e\u0432\u0435\u0440\u043e\u0447\u043d\u044b\u0439 \u043a\u043e\u0434 \u0431\u0443\u0434\u0435\u0442 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d \u0447\u0435\u0440\u0435\u0437 2 \u0441\u0435\u043a."],
            es: ["Verificaci\xf3n de seguridad", "Verificaci\xf3n correcta", "Atr\xe1s", "Verificando...", "Verificaci\xf3n correcta", "Actualizaci\xf3n muy frecuente", "El c\xf3digo se actualizar\xe1 en 2 segundos."],
            th: ["\u0e01\u0e32\u0e23\u0e22\u0e37\u0e19\u0e22\u0e31\u0e19\u0e04\u0e27\u0e32\u0e21\u0e1b\u0e25\u0e2d\u0e14\u0e20\u0e31\u0e22", "\u0e01\u0e32\u0e23\u0e22\u0e37\u0e19\u0e22\u0e31\u0e19\u0e2a\u0e33\u0e40\u0e23\u0e47\u0e08\u0e41\u0e25\u0e49\u0e27", "\u0e01\u0e25\u0e31\u0e1a", "\u0e01\u0e33\u0e25\u0e31\u0e07\u0e22\u0e37\u0e19\u0e22\u0e31\u0e19...", "\u0e01\u0e32\u0e23\u0e22\u0e37\u0e19\u0e22\u0e31\u0e19\u0e2a\u0e33\u0e40\u0e23\u0e47\u0e08\u0e41\u0e25\u0e49\u0e27", "\u0e23\u0e35\u0e40\u0e1f\u0e23\u0e0a\u0e1a\u0e48\u0e2d\u0e22\u0e40\u0e01\u0e34\u0e19\u0e44\u0e1b", "\u0e23\u0e2b\u0e31\u0e2a\u0e01\u0e32\u0e23\u0e22\u0e37\u0e19\u0e22\u0e31\u0e19\u0e08\u0e30\u0e23\u0e35\u0e40\u0e1f\u0e23\u0e0a\u0e20\u0e32\u0e22\u0e43\u0e19 2 \u0e27\u0e34\u0e19\u0e32\u0e17\u0e35"],
            tr: ["G\xfcvenlik Do\u011frulamas\u0131", "Do\u011frulama ba\u015far\u0131l\u0131", "Geri", "Do\u011frulan\u0131yor", "Do\u011frulama ba\u015far\u0131l\u0131", "Yenilemeler \xe7ok s\u0131k", "Do\u011frulama Kodu 2 sn. sonra yenilenecek."],
            vi: ["X\xe1c minh b\u1ea3o m\u1eadt", "X\xe1c minh th\xe0nh c\xf4ng", "Quay l\u1ea1i", "\u0110ang x\xe1c minh...", "X\xe1c minh th\xe0nh c\xf4ng", "L\xe0m m\u1edbi qu\xe1 th\u01b0\u1eddng xuy\xean", "M\xe3 x\xe1c minh s\u1ebd \u0111\u01b0\u1ee3c l\xe0m m\u1edbi sau 2 gi\xe2y."]
        };
        n.zh = n["zh-cn"],
            n.iw = n.he,
            n["in"] = n.id;
        var o = {
            2052: "zh-cn",
            1028: "zh-hk",
            1033: "en"
        }
            , a = "zh";
        /MicroMessenger/.test(navigator.userAgent) && (a = "en");
        var s = navigator.languages && navigator.languages[0] ? navigator.languages[0] : navigator.language || navigator.userLanguage || ""
            , c = {
            rightToLeft: !1
        };
        c.total = n,
            c.langExist = function(e) {
                var t = e;
                return /-/.test(e) && (t = e.split("-")[0]),
                    n[e] ? e : !!n[t] && t
            }
            ,
            c.init = function(e) {
                /^\d+$/.test(e) && (e = o[e]);
                var t = (e || s || a).toLowerCase().replace(/_/, "-")
                    , i = c.langExist(t);
                i || (i = "en");
                for (var p = n[i], d = 0; d < r.length; d++)
                    c[r[d]] = p[d] || n[a][d];
                "ar" !== i && "he" !== i && "iw" !== i || (c.rightToLeft = !0),
                    c.currentLanguage = i
            }
            ,
            c.init(),
            e.exports = c
    }
    , function(e, t, i) {
        "use strict";
        var r = Object.assign || i(2)
            , n = i(59).add;
        e.exports = function(e) {
            var t = window.document.getElementsByTagName("script")[0]
                , i = window.document.createElement("script")
                , o = e.callback || "callback"
                , a = "_aq_" + Math.floor(1e6 * Math.random());
            window[a] = function() {
                try {
                    delete window[a]
                } catch (t) {}
                e.success && e.success.apply(null, Array.prototype.slice.call(arguments))
            }
            ;
            var s = e.url
                , c = {};
            c[o] = a,
            e.data && (c = r(c, e.data)),
                s = n(s, c),
                i.async = !!e.async,
                i.src = s,
                i.onload = function() {
                    i && t.parentNode && t.parentNode.removeChild(i)
                }
                ,
                i.onerror = e.error || function() {}
                ,
                t.parentNode.insertBefore(i, t)
        }
    }
    , function(e, t, i) {
        "use strict";
        var r = function(e, t, i) {
            if (-1 != e.indexOf("?")) {
                var r = new RegExp("(\\?|&" + t + ")=[^&]*");
                e = r.test(e) ? e.replace(r, "$1=" + i) : e + "&" + t + "=" + i
            } else
                e = e + "?" + t + "=" + i;
            return e
        };
        e.exports = {
            add: function(e, t) {
                for (var i in t)
                    e = r(e, encodeURIComponent(i), encodeURIComponent(t[i]));
                return e
            }
        }
    }
    , function(e, t, i) {
        "use strict";
        var r = i(1)
            , n = i(30)
            , o = i(23)
            , a = i(5)
            , s = i(21)
            , c = i(22)
            , p = i(3)
            , d = {
            securityCode: "securityCode",
            preTrigerPoint: "preTrigerPoint"
        }
            , u = r.isIEVer(6)
            , f = !1
            , l = function() {
            function e(e) {
                e = e || {};
                this.name = "TCaptchaFrameProxy",
                    this.initSecurityCodeTarget = function() {
                        e.msg.addTarget(e.securityIframe.contentWindow, d.securityCode)
                    }
                    ,
                    this.hasSecurityCode = function() {
                        return !!e.securityIframe && e.securityIframe
                    }
                    ,
                    this.createSmartVerify = function() {
                        var t = r.createElement("div");
                        t.className = "t-mask",
                            t.id = "t_mask",
                            window.document.body.appendChild(t);
                        var i = r.createElement("div");
                        i.id = "t_verify",
                            i.className = "t-verify";
                        var n = r.createElement("div");
                        n.className = "verify-icon",
                            n.id = "verify_icon",
                            i.appendChild(n);
                        var a = r.createElement("span");
                        a.className = "dots_item";
                        var s = r.createElement("span");
                        s.className = "dots_item";
                        var c = r.createElement("span");
                        c.className = "dots_item";
                        var p = {
                            background: r.initColor(e.opts.themeColor)
                        };
                        r.CSS(a, p),
                            r.CSS(s, p),
                            r.CSS(c, p),
                            n.appendChild(a),
                            n.appendChild(s),
                            n.appendChild(c);
                        var d = r.createElement("p");
                        d.className = "verify-text",
                            d.id = "verify_text",
                            i.appendChild(d);
                        var u = r.getPosStyle(e.opts)
                            , f = r.computeBaseFontSize();
                        e.opts.sdkOpts && e.opts.sdkOpts.width && e.opts.sdkOpts.height && (f *= e.opts.sdkOpts.width / (o.SMART_VERIFY_SZ.width * f));
                        var l = {
                            border: e.opts.sdkOpts && e.opts.sdkOpts.width ? "0" : "1px solid #e5e5e5",
                            position: u
                        };
                        r.CSS(i, l),
                            e.ele.appendChild(i),
                            r.setPopPosition(i, o.SMART_VERIFY_SZ.width * f, o.SMART_VERIFY_SZ.height * f, e.opts.sdkOpts)
                    }
                    ,
                    this.createFlimitDom = function() {
                        var t = r.getPosStyle(e.opts)
                            , i = "";
                        e.opts.params.split("lang=")[1] && e.opts.params.split("lang=")[1].split("&")[0] && !e.opts.tcaptchaFlag && (i = e.opts.params.split("lang=")[1].split("&")[0],
                            e.langPack.init(i));
                        var n = r.createElement("div");
                        n.className = "tcaptcha-transform" + (r.isChrome75 && r.isMobileUa ? " chrome-75" : ""),
                            n.id = "tcaptcha_transform";
                        var o = {
                            position: t,
                            width: e.sizeSC.width + "px",
                            height: e.sizeSC.height + "px",
                            top: e.posSC.top,
                            left: e.posSC.left
                        };
                        !e.isPop || e.opts.sdkOpts && e.opts.sdkOpts.width || (o.border = "1px solid #e5e5e5"),
                        u && (o.position = "absolute"),
                            r.CSS(n, o),
                        e.opts.sdkOpts && e.opts.sdkOpts.width && r.setPopPosition(n, e.sizeSC.width, e.sizeSC.height, e.opts.sdkOpts);
                        var s = r.createElement("div");
                        s.className = "ticons ticon-refresh",
                            s.id = "ticon_refresh";
                        var c = r.createElement("p");
                        c.className = "ticons transform-header",
                            c.id = "transform_header",
                            c.innerText = e.langPack.c22;
                        var p = r.createElement("p");
                        if (p.className = "ticons transform-text",
                            p.id = "transform_text",
                            p.innerText = e.langPack.c23,
                            n.appendChild(s),
                            n.appendChild(c),
                            n.appendChild(p),
                            e.isPop) {
                            var d = r.createElement("div");
                            d.id = "transform_close",
                                d.className = "ticons transform-close",
                                n.appendChild(d),
                                a.add(d, "click", function() {
                                    r.removeIfExist("tcaptcha_transform"),
                                        r.removeIfExist("t_mask"),
                                        r.callbackExecutor(e, {
                                            ret: 2,
                                            ticket: "",
                                            randstr: ""
                                        })
                                })
                        } else if (1 == e.opts.showHeader || 0 == e.opts.showheader) {
                            var f = r.createElement("span");
                            f.className = "ticons tback transform-eicon",
                                f.id = "transform_eicon";
                            var l = r.createElement("div");
                            l.className = "ticons tback transform-eb",
                                l.id = "transform_eb",
                                l.innerText = e.langPack.c11;
                            var h = r.createElement("p");
                            h.className = "ticons transform-eh",
                                h.id = "transform_eh",
                                e.langPack.c2.length > 20 ? (r.addClass(h, "middle-fontsize"),
                                    r.addClass(l, "middle-fontsize")) : e.langPack.c2.length > 15 && (r.addClass(h, "small-fontsize"),
                                    r.addClass(l, "small-fontsize")),
                                h.innerText = e.langPack.c2,
                                n.appendChild(f),
                                n.appendChild(l),
                                n.appendChild(h),
                                a.add(l, "click", function() {
                                    r.removeIfExist("tcaptcha_transform"),
                                        r.callbackExecutor(e, {
                                            ret: 1,
                                            ticket: "",
                                            randstr: ""
                                        })
                                })
                        }
                        return n
                    }
                    ,
                    this.createSecurityCode = function(t, o) {
                        try {
                            var a = {
                                uid: e.opts.uid,
                                cap_cd: e.opts.capcd,
                                rnd: Math.floor(1e6 * Math.random()),
                                TCapIframeLoadTime: e.opts.TCapIframeLoadTime,
                                prehandleLoadTime: e.prehandleLoadTime,
                                createIframeStart: e.createIframeStart
                            }
                                , s = "point" == e.opts.type
                                , d = r.getPosStyle(e.opts);
                            if (s) {
                                f || (i(61),
                                    f = !0);
                                var u = (b = "div",
                                    document.createElement(b));
                                u.className = "tcaptcha-container",
                                    u.id = "tcaptcha_container",
                                    e._div = u;
                                var l = {
                                    width: e.sizeSC.width + "px",
                                    height: e.sizeSC.height + "px"
                                };
                                r.CSS(u, l),
                                    (v = document.createElement("iframe")).className = "tcaptcha-container-iframe",
                                    v.id = "tcaptcha_iframe",
                                    v.setAttribute("frameborder", "0", 0),
                                    v.setAttribute("border", "0"),
                                    v.marginheight = 0,
                                    v.marginwidth = 0,
                                    v.setAttribute("marginheight", "0", 0),
                                    v.setAttribute("marginwidth", "0", 0),
                                    v.scrolling = "no",
                                    e.securityIframe = v,
                                    u.appendChild(v),
                                    document.body.appendChild(u),
                                    e.src = r.addUrlParam(e.src, a),
                                    v.src = o || e.src,
                                    this.setDivPosition(u),
                                    this.initSecurityCodeTarget()
                            } else if ((e.isPop || "" == e.opts.type) && n.isNewCapType(t)) {
                                if (this.hasSecurityCode()) {
                                    var h = {
                                        height: e.sizeSC.height + "px",
                                        width: e.sizeSC.width + "px",
                                        top: e.posSC.top,
                                        left: e.posSC.left
                                    };
                                    return r.CSS(e.securityIframe, h),
                                        void (e.securityIframe.src = r.addUrlParam(e.src, a))
                                }
                                var m = r.createElement("iframe");
                                m.id = "tcaptcha_iframe",
                                    m.className = "tcaptcha-iframe",
                                    m.setAttribute("frameborder", "0", 0),
                                    m.setAttribute("border", "0"),
                                    m.setAttribute("marginheight", "0", 0),
                                    m.setAttribute("marginwidth", "0", 0),
                                    e.isPop ? (m.setAttribute("scrolling", "no"),
                                        c[t].isOpt,
                                        r.CSS(m, {
                                            opacity: "1"
                                        })) : r.CSS(m, {
                                        border: "0px"
                                    });
                                var g = {
                                    position: d,
                                    height: e.sizeSC.height + "px",
                                    width: e.sizeSC.width + "px",
                                    background: "#fff"
                                };
                                if (c[t].unionSizeType ? g.position = "static" : (g.top = e.posSC.top,
                                    g.left = e.posSC.left),
                                    r.CSS(m, g),
                                    e.securityIframe = m,
                                    c[t].unionSizeType) {
                                    var y = e.TCaptchaFrame.createFlimitDom();
                                    y.appendChild(m),
                                        e.ele.appendChild(y)
                                } else
                                    e.ele.appendChild(m);
                                e.src = r.addUrlParam(e.src, a),
                                    m.src = e.src,
                                    this.initSecurityCodeTarget()
                            } else {
                                var v;
                                (v = document.createElement("iframe")).setAttribute("frameborder", "0", 0),
                                    v.setAttribute("border", "0"),
                                    v.marginheight = 0,
                                    v.marginwidth = 0,
                                    v.setAttribute("marginheight", "0", 0),
                                    v.setAttribute("marginwidth", "0", 0),
                                    v.scrolling = "no",
                                    v.id = "tcaptcha_iframe";
                                l = {
                                    width: "300px",
                                    height: "230px",
                                    border: "0px",
                                    position: d,
                                    left: "0px",
                                    top: "0px",
                                    zIndex: 2000000002,
                                    background: "#fff"
                                };
                                "embed" != e.opts.type || "slidepuzzle_new" !== t && "slidepuzzle_opt" !== t ? (l.width = e.sizeSC.width + "px",
                                    l.height = e.sizeSC.height + "px") : (l.width = "300px",
                                    l.height = "230px"),
                                    r.CSS(v, l),
                                    e.securityIframe = v,
                                    e.ele.appendChild(v),
                                    e.src = r.addUrlParam(e.src, a),
                                    v.src = e.src,
                                    n.setPosition(e, v),
                                    this.initSecurityCodeTarget()
                            }
                            e.opts.capType = t
                        } catch (w) {
                            var S = p.perfectStack(w);
                            p.send("ERROR_TYPE_FRAMEJS_CODE_ERROR", e.opts.appid, S || "createSecurityCode code error")
                        }
                        var b
                    }
                    ,
                    this.setDivPosition = function(t) {
                        try {
                            if ("embed" == e.opts.type)
                                return;
                            var i = 0
                                , o = 0;
                            if ("point" == e.opts.type) {
                                var a = n.changePos(e);
                                i = a[0],
                                    o = a[1];
                                var s = a[2]
                                    , c = a[3]
                                    , d = document.createElement("style");
                                d.rel = "stylesheet",
                                    d.href = "style.css",
                                    d.type = "text/css",
                                    document.getElementsByTagName("body")[0].appendChild(d),
                                    setTimeout(function() {
                                        h(document.styleSheets[document.styleSheets.length - 1], ".tcaptcha-container:before", s, 0),
                                            h(document.styleSheets[document.styleSheets.length - 1], ".tcaptcha-container:after", c, 0)
                                    }, 1)
                            }
                            return r.CSS(t, {
                                top: i + "px",
                                left: o + "px"
                            })
                        } catch (f) {
                            var u = p.perfectStack(f);
                            p.send("ERROR_TYPE_FRAMEJS_CODE_ERROR", e.opts.appid, u || "setDivPosition code error")
                        }
                    }
                    ,
                    this.enlargeVerifyType = function(e, t, i, n) {
                        var o = s.verifyIcon();
                        o && r.CSS(o, {
                            marginTop: i / 2 + "px"
                        }),
                            r.CSS(e, {
                                width: t + "px",
                                height: i + "px"
                            }),
                            r.setPopPosition(e, t, i, n)
                    }
                    ,
                    this.changeVerifyType = function() {
                        var t = s.dots();
                        if (t)
                            for (var i = 0; i < t.length; i++)
                                r.addClass(t[i], "show-none");
                        var n = s.verifyIcon();
                        r.addClass(n, "success-icon");
                        var o = s.verifyText();
                        e.langPack.c21.length > 19 && r.addClass(o, "little-fontsize"),
                            o.innerText = e.langPack.c21
                    }
                    ,
                    this.showRefreshDom = function() {
                        for (var t = s.tIframe(), i = s.ref2Text(), n = s.tIcons(), o = n.length, a = 0; a < o; a++)
                            n[a] && r.addClass(n[a], "show-icon");
                        t.src = e.src,
                            t.style.visibility = "hidden",
                            setTimeout(function() {
                                i.innerHTML = i.innerHTML.replace(/2/, "1")
                            }, 1e3),
                            setTimeout(function() {
                                t.style.visibility = "visible",
                                    i.innerHTML = i.innerHTML.replace(/1/, "2");
                                for (var e = 0; e < o; e++)
                                    n[e] && r.removeClass(n[e], "show-icon")
                            }, 2e3)
                    }
            }
            return {
                name: "TCaptchaFrameProxy",
                getInstance: function(t) {
                    return new e(t)
                }
            }
        }();
        function h(e, t, i, r) {
            try {
                return e.insertRule ? e.insertRule(t + "{" + i + "}", r) : e.addRule(t, i, r)
            } catch (n) {}
        }
        e.exports = l
    }
    , function(e, t, i) {
        var r = i(62);
        "string" == typeof r && (r = [[e.i, r, ""]]);
        i(13)(r, {});
        r.locals && (e.exports = r.locals)
    }
    , function(e, t, i) {
        (e.exports = i(12)(!1)).push([e.i, '.tcaptcha-container{border:1px solid #e5e5e5;position:absolute;left:0;top:0;z-index:2000000002}.tcaptcha-container:after,.tcaptcha-container:before{content:"";height:0;width:0;position:absolute;left:-17px;top:50%;margin-top:-9.5px;border-left:9px solid transparent;border-top:9px solid transparent;border-bottom:9px solid transparent;border-right:9px solid rgba(63,63,63,.1);z-index:0}.tcaptcha-container:after{border-right:9px solid #fff;z-index:1}.tcaptcha-container-iframe{display:block;width:100%;height:100%;border:0;background:#fff;visibility:visible}', ""])
    }
]);
