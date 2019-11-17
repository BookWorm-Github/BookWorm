!function (t, n) {
    "object" == typeof exports && "object" == typeof module ? module.exports = n() : "function" == typeof define && define.amd ? define([], n) : "object" == typeof exports ? exports.deepai = n() : t.deepai = n()
}(window, (function () {
    return function (t) {
        var n = {};

        function r(e) {
            if (n[e]) return n[e].exports;
            var o = n[e] = {i: e, l: !1, exports: {}};
            return t[e].call(o.exports, o, o.exports, r), o.l = !0, o.exports
        }

        return r.m = t, r.c = n, r.d = function (t, n, e) {
            r.o(t, n) || Object.defineProperty(t, n, {enumerable: !0, get: e})
        }, r.r = function (t) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(t, "__esModule", {value: !0})
        }, r.t = function (t, n) {
            if (1 & n && (t = r(t)), 8 & n) return t;
            if (4 & n && "object" == typeof t && t && t.__esModule) return t;
            var e = Object.create(null);
            if (r.r(e), Object.defineProperty(e, "default", {
                enumerable: !0,
                value: t
            }), 2 & n && "string" != typeof t) for (var o in t) r.d(e, o, function (n) {
                return t[n]
            }.bind(null, o));
            return e
        }, r.n = function (t) {
            var n = t && t.__esModule ? function () {
                return t.default
            } : function () {
                return t
            };
            return r.d(n, "a", n), n
        }, r.o = function (t, n) {
            return Object.prototype.hasOwnProperty.call(t, n)
        }, r.p = "", r(r.s = 133)
    }([function (t, n, r) {
        var e = r(1), o = r(7), i = r(15), u = r(11), a = r(18), c = function (t, n, r) {
            var f, s, l, h, p = t & c.F, v = t & c.G, d = t & c.S, y = t & c.P, g = t & c.B,
                m = v ? e : d ? e[n] || (e[n] = {}) : (e[n] || {}).prototype, b = v ? o : o[n] || (o[n] = {}),
                w = b.prototype || (b.prototype = {});
            for (f in v && (r = n), r) l = ((s = !p && m && void 0 !== m[f]) ? m : r)[f], h = g && s ? a(l, e) : y && "function" == typeof l ? a(Function.call, l) : l, m && u(m, f, l, t & c.U), b[f] != l && i(b, f, h), y && w[f] != l && (w[f] = l)
        };
        e.core = o, c.F = 1, c.G = 2, c.S = 4, c.P = 8, c.B = 16, c.W = 32, c.U = 64, c.R = 128, t.exports = c
    }, function (t, n) {
        var r = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
        "number" == typeof __g && (__g = r)
    }, function (t, n) {
        t.exports = function (t) {
            try {
                return !!t()
            } catch (t) {
                return !0
            }
        }
    }, function (t, n, r) {
        var e = r(4);
        t.exports = function (t) {
            if (!e(t)) throw TypeError(t + " is not an object!");
            return t
        }
    }, function (t, n) {
        t.exports = function (t) {
            return "object" == typeof t ? null !== t : "function" == typeof t
        }
    }, function (t, n, r) {
        var e = r(49)("wks"), o = r(30), i = r(1).Symbol, u = "function" == typeof i;
        (t.exports = function (t) {
            return e[t] || (e[t] = u && i[t] || (u ? i : o)("Symbol." + t))
        }).store = e
    }, function (t, n, r) {
        var e = r(20), o = Math.min;
        t.exports = function (t) {
            return t > 0 ? o(e(t), 9007199254740991) : 0
        }
    }, function (t, n) {
        var r = t.exports = {version: "2.6.9"};
        "number" == typeof __e && (__e = r)
    }, function (t, n, r) {
        t.exports = !r(2)((function () {
            return 7 != Object.defineProperty({}, "a", {
                get: function () {
                    return 7
                }
            }).a
        }))
    }, function (t, n, r) {
        var e = r(3), o = r(90), i = r(27), u = Object.defineProperty;
        n.f = r(8) ? Object.defineProperty : function (t, n, r) {
            if (e(t), n = i(n, !0), e(r), o) try {
                return u(t, n, r)
            } catch (t) {
            }
            if ("get" in r || "set" in r) throw TypeError("Accessors not supported!");
            return "value" in r && (t[n] = r.value), t
        }
    }, function (t, n, r) {
        var e = r(25);
        t.exports = function (t) {
            return Object(e(t))
        }
    }, function (t, n, r) {
        var e = r(1), o = r(15), i = r(14), u = r(30)("src"), a = r(138), c = ("" + a).split("toString");
        r(7).inspectSource = function (t) {
            return a.call(t)
        }, (t.exports = function (t, n, r, a) {
            var f = "function" == typeof r;
            f && (i(r, "name") || o(r, "name", n)), t[n] !== r && (f && (i(r, u) || o(r, u, t[n] ? "" + t[n] : c.join(String(n)))), t === e ? t[n] = r : a ? t[n] ? t[n] = r : o(t, n, r) : (delete t[n], o(t, n, r)))
        })(Function.prototype, "toString", (function () {
            return "function" == typeof this && this[u] || a.call(this)
        }))
    }, function (t, n, r) {
        var e = r(0), o = r(2), i = r(25), u = /"/g, a = function (t, n, r, e) {
            var o = String(i(t)), a = "<" + n;
            return "" !== r && (a += " " + r + '="' + String(e).replace(u, "&quot;") + '"'), a + ">" + o + "</" + n + ">"
        };
        t.exports = function (t, n) {
            var r = {};
            r[t] = n(a), e(e.P + e.F * o((function () {
                var n = ""[t]('"');
                return n !== n.toLowerCase() || n.split('"').length > 3
            })), "String", r)
        }
    }, function (t, n, r) {
        "use strict";
        var e = r(124), o = r(330), i = Object.prototype.toString;

        function u(t) {
            return "[object Array]" === i.call(t)
        }

        function a(t) {
            return null !== t && "object" == typeof t
        }

        function c(t) {
            return "[object Function]" === i.call(t)
        }

        function f(t, n) {
            if (null != t) if ("object" != typeof t && (t = [t]), u(t)) for (var r = 0, e = t.length; r < e; r++) n.call(null, t[r], r, t); else for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && n.call(null, t[o], o, t)
        }

        t.exports = {
            isArray: u, isArrayBuffer: function (t) {
                return "[object ArrayBuffer]" === i.call(t)
            }, isBuffer: o, isFormData: function (t) {
                return "undefined" != typeof FormData && t instanceof FormData
            }, isArrayBufferView: function (t) {
                return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(t) : t && t.buffer && t.buffer instanceof ArrayBuffer
            }, isString: function (t) {
                return "string" == typeof t
            }, isNumber: function (t) {
                return "number" == typeof t
            }, isObject: a, isUndefined: function (t) {
                return void 0 === t
            }, isDate: function (t) {
                return "[object Date]" === i.call(t)
            }, isFile: function (t) {
                return "[object File]" === i.call(t)
            }, isBlob: function (t) {
                return "[object Blob]" === i.call(t)
            }, isFunction: c, isStream: function (t) {
                return a(t) && c(t.pipe)
            }, isURLSearchParams: function (t) {
                return "undefined" != typeof URLSearchParams && t instanceof URLSearchParams
            }, isStandardBrowserEnv: function () {
                return ("undefined" == typeof navigator || "ReactNative" !== navigator.product && "NativeScript" !== navigator.product && "NS" !== navigator.product) && ("undefined" != typeof window && "undefined" != typeof document)
            }, forEach: f, merge: function t() {
                var n = {};

                function r(r, e) {
                    "object" == typeof n[e] && "object" == typeof r ? n[e] = t(n[e], r) : n[e] = r
                }

                for (var e = 0, o = arguments.length; e < o; e++) f(arguments[e], r);
                return n
            }, deepMerge: function t() {
                var n = {};

                function r(r, e) {
                    "object" == typeof n[e] && "object" == typeof r ? n[e] = t(n[e], r) : n[e] = "object" == typeof r ? t({}, r) : r
                }

                for (var e = 0, o = arguments.length; e < o; e++) f(arguments[e], r);
                return n
            }, extend: function (t, n, r) {
                return f(n, (function (n, o) {
                    t[o] = r && "function" == typeof n ? e(n, r) : n
                })), t
            }, trim: function (t) {
                return t.replace(/^\s*/, "").replace(/\s*$/, "")
            }
        }
    }, function (t, n) {
        var r = {}.hasOwnProperty;
        t.exports = function (t, n) {
            return r.call(t, n)
        }
    }, function (t, n, r) {
        var e = r(9), o = r(29);
        t.exports = r(8) ? function (t, n, r) {
            return e.f(t, n, o(1, r))
        } : function (t, n, r) {
            return t[n] = r, t
        }
    }, function (t, n, r) {
        var e = r(45), o = r(25);
        t.exports = function (t) {
            return e(o(t))
        }
    }, function (t, n, r) {
        "use strict";
        var e = r(2);
        t.exports = function (t, n) {
            return !!t && e((function () {
                n ? t.call(null, (function () {
                }), 1) : t.call(null)
            }))
        }
    }, function (t, n, r) {
        var e = r(19);
        t.exports = function (t, n, r) {
            if (e(t), void 0 === n) return t;
            switch (r) {
                case 1:
                    return function (r) {
                        return t.call(n, r)
                    };
                case 2:
                    return function (r, e) {
                        return t.call(n, r, e)
                    };
                case 3:
                    return function (r, e, o) {
                        return t.call(n, r, e, o)
                    }
            }
            return function () {
                return t.apply(n, arguments)
            }
        }
    }, function (t, n) {
        t.exports = function (t) {
            if ("function" != typeof t) throw TypeError(t + " is not a function!");
            return t
        }
    }, function (t, n) {
        var r = Math.ceil, e = Math.floor;
        t.exports = function (t) {
            return isNaN(t = +t) ? 0 : (t > 0 ? e : r)(t)
        }
    }, function (t, n, r) {
        var e = r(46), o = r(29), i = r(16), u = r(27), a = r(14), c = r(90), f = Object.getOwnPropertyDescriptor;
        n.f = r(8) ? f : function (t, n) {
            if (t = i(t), n = u(n, !0), c) try {
                return f(t, n)
            } catch (t) {
            }
            if (a(t, n)) return o(!e.f.call(t, n), t[n])
        }
    }, function (t, n, r) {
        var e = r(0), o = r(7), i = r(2);
        t.exports = function (t, n) {
            var r = (o.Object || {})[t] || Object[t], u = {};
            u[t] = n(r), e(e.S + e.F * i((function () {
                r(1)
            })), "Object", u)
        }
    }, function (t, n, r) {
        var e = r(18), o = r(45), i = r(10), u = r(6), a = r(106);
        t.exports = function (t, n) {
            var r = 1 == t, c = 2 == t, f = 3 == t, s = 4 == t, l = 6 == t, h = 5 == t || l, p = n || a;
            return function (n, a, v) {
                for (var d, y, g = i(n), m = o(g), b = e(a, v, 3), w = u(m.length), x = 0, S = r ? p(n, w) : c ? p(n, 0) : void 0; w > x; x++) if ((h || x in m) && (y = b(d = m[x], x, g), t)) if (r) S[x] = y; else if (y) switch (t) {
                    case 3:
                        return !0;
                    case 5:
                        return d;
                    case 6:
                        return x;
                    case 2:
                        S.push(d)
                } else if (s) return !1;
                return l ? -1 : f || s ? s : S
            }
        }
    }, function (t, n) {
        var r = {}.toString;
        t.exports = function (t) {
            return r.call(t).slice(8, -1)
        }
    }, function (t, n) {
        t.exports = function (t) {
            if (null == t) throw TypeError("Can't call method on  " + t);
            return t
        }
    }, function (t, n, r) {
        "use strict";
        if (r(8)) {
            var e = r(31), o = r(1), i = r(2), u = r(0), a = r(60), c = r(85), f = r(18), s = r(43), l = r(29),
                h = r(15), p = r(44), v = r(20), d = r(6), y = r(117), g = r(33), m = r(27), b = r(14), w = r(47),
                x = r(4), S = r(10), _ = r(77), E = r(34), A = r(36), P = r(35).f, O = r(79), R = r(30), T = r(5),
                j = r(23), M = r(50), I = r(48), F = r(81), N = r(41), k = r(53), L = r(42), C = r(80), B = r(108),
                U = r(9), D = r(21), Y = U.f, W = D.f, V = o.RangeError, z = o.TypeError, G = o.Uint8Array,
                q = Array.prototype, H = c.ArrayBuffer, J = c.DataView, X = j(0), $ = j(2), K = j(3), Z = j(4),
                Q = j(5), tt = j(6), nt = M(!0), rt = M(!1), et = F.values, ot = F.keys, it = F.entries,
                ut = q.lastIndexOf, at = q.reduce, ct = q.reduceRight, ft = q.join, st = q.sort, lt = q.slice,
                ht = q.toString, pt = q.toLocaleString, vt = T("iterator"), dt = T("toStringTag"),
                yt = R("typed_constructor"), gt = R("def_constructor"), mt = a.CONSTR, bt = a.TYPED, wt = a.VIEW,
                xt = j(1, (function (t, n) {
                    return Pt(I(t, t[gt]), n)
                })), St = i((function () {
                    return 1 === new G(new Uint16Array([1]).buffer)[0]
                })), _t = !!G && !!G.prototype.set && i((function () {
                    new G(1).set({})
                })), Et = function (t, n) {
                    var r = v(t);
                    if (r < 0 || r % n) throw V("Wrong offset!");
                    return r
                }, At = function (t) {
                    if (x(t) && bt in t) return t;
                    throw z(t + " is not a typed array!")
                }, Pt = function (t, n) {
                    if (!(x(t) && yt in t)) throw z("It is not a typed array constructor!");
                    return new t(n)
                }, Ot = function (t, n) {
                    return Rt(I(t, t[gt]), n)
                }, Rt = function (t, n) {
                    for (var r = 0, e = n.length, o = Pt(t, e); e > r;) o[r] = n[r++];
                    return o
                }, Tt = function (t, n, r) {
                    Y(t, n, {
                        get: function () {
                            return this._d[r]
                        }
                    })
                }, jt = function (t) {
                    var n, r, e, o, i, u, a = S(t), c = arguments.length, s = c > 1 ? arguments[1] : void 0,
                        l = void 0 !== s, h = O(a);
                    if (null != h && !_(h)) {
                        for (u = h.call(a), e = [], n = 0; !(i = u.next()).done; n++) e.push(i.value);
                        a = e
                    }
                    for (l && c > 2 && (s = f(s, arguments[2], 2)), n = 0, r = d(a.length), o = Pt(this, r); r > n; n++) o[n] = l ? s(a[n], n) : a[n];
                    return o
                }, Mt = function () {
                    for (var t = 0, n = arguments.length, r = Pt(this, n); n > t;) r[t] = arguments[t++];
                    return r
                }, It = !!G && i((function () {
                    pt.call(new G(1))
                })), Ft = function () {
                    return pt.apply(It ? lt.call(At(this)) : At(this), arguments)
                }, Nt = {
                    copyWithin: function (t, n) {
                        return B.call(At(this), t, n, arguments.length > 2 ? arguments[2] : void 0)
                    }, every: function (t) {
                        return Z(At(this), t, arguments.length > 1 ? arguments[1] : void 0)
                    }, fill: function (t) {
                        return C.apply(At(this), arguments)
                    }, filter: function (t) {
                        return Ot(this, $(At(this), t, arguments.length > 1 ? arguments[1] : void 0))
                    }, find: function (t) {
                        return Q(At(this), t, arguments.length > 1 ? arguments[1] : void 0)
                    }, findIndex: function (t) {
                        return tt(At(this), t, arguments.length > 1 ? arguments[1] : void 0)
                    }, forEach: function (t) {
                        X(At(this), t, arguments.length > 1 ? arguments[1] : void 0)
                    }, indexOf: function (t) {
                        return rt(At(this), t, arguments.length > 1 ? arguments[1] : void 0)
                    }, includes: function (t) {
                        return nt(At(this), t, arguments.length > 1 ? arguments[1] : void 0)
                    }, join: function (t) {
                        return ft.apply(At(this), arguments)
                    }, lastIndexOf: function (t) {
                        return ut.apply(At(this), arguments)
                    }, map: function (t) {
                        return xt(At(this), t, arguments.length > 1 ? arguments[1] : void 0)
                    }, reduce: function (t) {
                        return at.apply(At(this), arguments)
                    }, reduceRight: function (t) {
                        return ct.apply(At(this), arguments)
                    }, reverse: function () {
                        for (var t, n = At(this).length, r = Math.floor(n / 2), e = 0; e < r;) t = this[e], this[e++] = this[--n], this[n] = t;
                        return this
                    }, some: function (t) {
                        return K(At(this), t, arguments.length > 1 ? arguments[1] : void 0)
                    }, sort: function (t) {
                        return st.call(At(this), t)
                    }, subarray: function (t, n) {
                        var r = At(this), e = r.length, o = g(t, e);
                        return new (I(r, r[gt]))(r.buffer, r.byteOffset + o * r.BYTES_PER_ELEMENT, d((void 0 === n ? e : g(n, e)) - o))
                    }
                }, kt = function (t, n) {
                    return Ot(this, lt.call(At(this), t, n))
                }, Lt = function (t) {
                    At(this);
                    var n = Et(arguments[1], 1), r = this.length, e = S(t), o = d(e.length), i = 0;
                    if (o + n > r) throw V("Wrong length!");
                    for (; i < o;) this[n + i] = e[i++]
                }, Ct = {
                    entries: function () {
                        return it.call(At(this))
                    }, keys: function () {
                        return ot.call(At(this))
                    }, values: function () {
                        return et.call(At(this))
                    }
                }, Bt = function (t, n) {
                    return x(t) && t[bt] && "symbol" != typeof n && n in t && String(+n) == String(n)
                }, Ut = function (t, n) {
                    return Bt(t, n = m(n, !0)) ? l(2, t[n]) : W(t, n)
                }, Dt = function (t, n, r) {
                    return !(Bt(t, n = m(n, !0)) && x(r) && b(r, "value")) || b(r, "get") || b(r, "set") || r.configurable || b(r, "writable") && !r.writable || b(r, "enumerable") && !r.enumerable ? Y(t, n, r) : (t[n] = r.value, t)
                };
            mt || (D.f = Ut, U.f = Dt), u(u.S + u.F * !mt, "Object", {
                getOwnPropertyDescriptor: Ut,
                defineProperty: Dt
            }), i((function () {
                ht.call({})
            })) && (ht = pt = function () {
                return ft.call(this)
            });
            var Yt = p({}, Nt);
            p(Yt, Ct), h(Yt, vt, Ct.values), p(Yt, {
                slice: kt, set: Lt, constructor: function () {
                }, toString: ht, toLocaleString: Ft
            }), Tt(Yt, "buffer", "b"), Tt(Yt, "byteOffset", "o"), Tt(Yt, "byteLength", "l"), Tt(Yt, "length", "e"), Y(Yt, dt, {
                get: function () {
                    return this[bt]
                }
            }), t.exports = function (t, n, r, c) {
                var f = t + ((c = !!c) ? "Clamped" : "") + "Array", l = "get" + t, p = "set" + t, v = o[f], g = v || {},
                    m = v && A(v), b = !v || !a.ABV, S = {}, _ = v && v.prototype, O = function (t, r) {
                        Y(t, r, {
                            get: function () {
                                return function (t, r) {
                                    var e = t._d;
                                    return e.v[l](r * n + e.o, St)
                                }(this, r)
                            }, set: function (t) {
                                return function (t, r, e) {
                                    var o = t._d;
                                    c && (e = (e = Math.round(e)) < 0 ? 0 : e > 255 ? 255 : 255 & e), o.v[p](r * n + o.o, e, St)
                                }(this, r, t)
                            }, enumerable: !0
                        })
                    };
                b ? (v = r((function (t, r, e, o) {
                    s(t, v, f, "_d");
                    var i, u, a, c, l = 0, p = 0;
                    if (x(r)) {
                        if (!(r instanceof H || "ArrayBuffer" == (c = w(r)) || "SharedArrayBuffer" == c)) return bt in r ? Rt(v, r) : jt.call(v, r);
                        i = r, p = Et(e, n);
                        var g = r.byteLength;
                        if (void 0 === o) {
                            if (g % n) throw V("Wrong length!");
                            if ((u = g - p) < 0) throw V("Wrong length!")
                        } else if ((u = d(o) * n) + p > g) throw V("Wrong length!");
                        a = u / n
                    } else a = y(r), i = new H(u = a * n);
                    for (h(t, "_d", {b: i, o: p, l: u, e: a, v: new J(i)}); l < a;) O(t, l++)
                })), _ = v.prototype = E(Yt), h(_, "constructor", v)) : i((function () {
                    v(1)
                })) && i((function () {
                    new v(-1)
                })) && k((function (t) {
                    new v, new v(null), new v(1.5), new v(t)
                }), !0) || (v = r((function (t, r, e, o) {
                    var i;
                    return s(t, v, f), x(r) ? r instanceof H || "ArrayBuffer" == (i = w(r)) || "SharedArrayBuffer" == i ? void 0 !== o ? new g(r, Et(e, n), o) : void 0 !== e ? new g(r, Et(e, n)) : new g(r) : bt in r ? Rt(v, r) : jt.call(v, r) : new g(y(r))
                })), X(m !== Function.prototype ? P(g).concat(P(m)) : P(g), (function (t) {
                    t in v || h(v, t, g[t])
                })), v.prototype = _, e || (_.constructor = v));
                var R = _[vt], T = !!R && ("values" == R.name || null == R.name), j = Ct.values;
                h(v, yt, !0), h(_, bt, f), h(_, wt, !0), h(_, gt, v), (c ? new v(1)[dt] == f : dt in _) || Y(_, dt, {
                    get: function () {
                        return f
                    }
                }), S[f] = v, u(u.G + u.W + u.F * (v != g), S), u(u.S, f, {BYTES_PER_ELEMENT: n}), u(u.S + u.F * i((function () {
                    g.of.call(v, 1)
                })), f, {
                    from: jt,
                    of: Mt
                }), "BYTES_PER_ELEMENT" in _ || h(_, "BYTES_PER_ELEMENT", n), u(u.P, f, Nt), L(f), u(u.P + u.F * _t, f, {set: Lt}), u(u.P + u.F * !T, f, Ct), e || _.toString == ht || (_.toString = ht), u(u.P + u.F * i((function () {
                    new v(1).slice()
                })), f, {slice: kt}), u(u.P + u.F * (i((function () {
                    return [1, 2].toLocaleString() != new v([1, 2]).toLocaleString()
                })) || !i((function () {
                    _.toLocaleString.call([1, 2])
                }))), f, {toLocaleString: Ft}), N[f] = T ? R : j, e || T || h(_, vt, j)
            }
        } else t.exports = function () {
        }
    }, function (t, n, r) {
        var e = r(4);
        t.exports = function (t, n) {
            if (!e(t)) return t;
            var r, o;
            if (n && "function" == typeof (r = t.toString) && !e(o = r.call(t))) return o;
            if ("function" == typeof (r = t.valueOf) && !e(o = r.call(t))) return o;
            if (!n && "function" == typeof (r = t.toString) && !e(o = r.call(t))) return o;
            throw TypeError("Can't convert object to primitive value")
        }
    }, function (t, n, r) {
        var e = r(30)("meta"), o = r(4), i = r(14), u = r(9).f, a = 0, c = Object.isExtensible || function () {
            return !0
        }, f = !r(2)((function () {
            return c(Object.preventExtensions({}))
        })), s = function (t) {
            u(t, e, {value: {i: "O" + ++a, w: {}}})
        }, l = t.exports = {
            KEY: e, NEED: !1, fastKey: function (t, n) {
                if (!o(t)) return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t;
                if (!i(t, e)) {
                    if (!c(t)) return "F";
                    if (!n) return "E";
                    s(t)
                }
                return t[e].i
            }, getWeak: function (t, n) {
                if (!i(t, e)) {
                    if (!c(t)) return !0;
                    if (!n) return !1;
                    s(t)
                }
                return t[e].w
            }, onFreeze: function (t) {
                return f && l.NEED && c(t) && !i(t, e) && s(t), t
            }
        }
    }, function (t, n) {
        t.exports = function (t, n) {
            return {enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: n}
        }
    }, function (t, n) {
        var r = 0, e = Math.random();
        t.exports = function (t) {
            return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++r + e).toString(36))
        }
    }, function (t, n) {
        t.exports = !1
    }, function (t, n, r) {
        var e = r(92), o = r(64);
        t.exports = Object.keys || function (t) {
            return e(t, o)
        }
    }, function (t, n, r) {
        var e = r(20), o = Math.max, i = Math.min;
        t.exports = function (t, n) {
            return (t = e(t)) < 0 ? o(t + n, 0) : i(t, n)
        }
    }, function (t, n, r) {
        var e = r(3), o = r(93), i = r(64), u = r(63)("IE_PROTO"), a = function () {
        }, c = function () {
            var t, n = r(61)("iframe"), e = i.length;
            for (n.style.display = "none", r(65).appendChild(n), n.src = "javascript:", (t = n.contentWindow.document).open(), t.write("<script>document.F=Object<\/script>"), t.close(), c = t.F; e--;) delete c.prototype[i[e]];
            return c()
        };
        t.exports = Object.create || function (t, n) {
            var r;
            return null !== t ? (a.prototype = e(t), r = new a, a.prototype = null, r[u] = t) : r = c(), void 0 === n ? r : o(r, n)
        }
    }, function (t, n, r) {
        var e = r(92), o = r(64).concat("length", "prototype");
        n.f = Object.getOwnPropertyNames || function (t) {
            return e(t, o)
        }
    }, function (t, n, r) {
        var e = r(14), o = r(10), i = r(63)("IE_PROTO"), u = Object.prototype;
        t.exports = Object.getPrototypeOf || function (t) {
            return t = o(t), e(t, i) ? t[i] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? u : null
        }
    }, function (t, n, r) {
        var e = r(5)("unscopables"), o = Array.prototype;
        null == o[e] && r(15)(o, e, {}), t.exports = function (t) {
            o[e][t] = !0
        }
    }, function (t, n, r) {
        var e = r(4);
        t.exports = function (t, n) {
            if (!e(t) || t._t !== n) throw TypeError("Incompatible receiver, " + n + " required!");
            return t
        }
    }, function (t, n, r) {
        var e = r(9).f, o = r(14), i = r(5)("toStringTag");
        t.exports = function (t, n, r) {
            t && !o(t = r ? t : t.prototype, i) && e(t, i, {configurable: !0, value: n})
        }
    }, function (t, n, r) {
        var e = r(0), o = r(25), i = r(2), u = r(67), a = "[" + u + "]", c = RegExp("^" + a + a + "*"),
            f = RegExp(a + a + "*$"), s = function (t, n, r) {
                var o = {}, a = i((function () {
                    return !!u[t]() || "​" != "​"[t]()
                })), c = o[t] = a ? n(l) : u[t];
                r && (o[r] = c), e(e.P + e.F * a, "String", o)
            }, l = s.trim = function (t, n) {
                return t = String(o(t)), 1 & n && (t = t.replace(c, "")), 2 & n && (t = t.replace(f, "")), t
            };
        t.exports = s
    }, function (t, n) {
        t.exports = {}
    }, function (t, n, r) {
        "use strict";
        var e = r(1), o = r(9), i = r(8), u = r(5)("species");
        t.exports = function (t) {
            var n = e[t];
            i && n && !n[u] && o.f(n, u, {
                configurable: !0, get: function () {
                    return this
                }
            })
        }
    }, function (t, n) {
        t.exports = function (t, n, r, e) {
            if (!(t instanceof n) || void 0 !== e && e in t) throw TypeError(r + ": incorrect invocation!");
            return t
        }
    }, function (t, n, r) {
        var e = r(11);
        t.exports = function (t, n, r) {
            for (var o in n) e(t, o, n[o], r);
            return t
        }
    }, function (t, n, r) {
        var e = r(24);
        t.exports = Object("z").propertyIsEnumerable(0) ? Object : function (t) {
            return "String" == e(t) ? t.split("") : Object(t)
        }
    }, function (t, n) {
        n.f = {}.propertyIsEnumerable
    }, function (t, n, r) {
        var e = r(24), o = r(5)("toStringTag"), i = "Arguments" == e(function () {
            return arguments
        }());
        t.exports = function (t) {
            var n, r, u;
            return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof (r = function (t, n) {
                try {
                    return t[n]
                } catch (t) {
                }
            }(n = Object(t), o)) ? r : i ? e(n) : "Object" == (u = e(n)) && "function" == typeof n.callee ? "Arguments" : u
        }
    }, function (t, n, r) {
        var e = r(3), o = r(19), i = r(5)("species");
        t.exports = function (t, n) {
            var r, u = e(t).constructor;
            return void 0 === u || null == (r = e(u)[i]) ? n : o(r)
        }
    }, function (t, n, r) {
        var e = r(7), o = r(1), i = o["__core-js_shared__"] || (o["__core-js_shared__"] = {});
        (t.exports = function (t, n) {
            return i[t] || (i[t] = void 0 !== n ? n : {})
        })("versions", []).push({
            version: e.version,
            mode: r(31) ? "pure" : "global",
            copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
        })
    }, function (t, n, r) {
        var e = r(16), o = r(6), i = r(33);
        t.exports = function (t) {
            return function (n, r, u) {
                var a, c = e(n), f = o(c.length), s = i(u, f);
                if (t && r != r) {
                    for (; f > s;) if ((a = c[s++]) != a) return !0
                } else for (; f > s; s++) if ((t || s in c) && c[s] === r) return t || s || 0;
                return !t && -1
            }
        }
    }, function (t, n) {
        n.f = Object.getOwnPropertySymbols
    }, function (t, n, r) {
        var e = r(24);
        t.exports = Array.isArray || function (t) {
            return "Array" == e(t)
        }
    }, function (t, n, r) {
        var e = r(5)("iterator"), o = !1;
        try {
            var i = [7][e]();
            i.return = function () {
                o = !0
            }, Array.from(i, (function () {
                throw 2
            }))
        } catch (t) {
        }
        t.exports = function (t, n) {
            if (!n && !o) return !1;
            var r = !1;
            try {
                var i = [7], u = i[e]();
                u.next = function () {
                    return {done: r = !0}
                }, i[e] = function () {
                    return u
                }, t(i)
            } catch (t) {
            }
            return r
        }
    }, function (t, n, r) {
        "use strict";
        var e = r(3);
        t.exports = function () {
            var t = e(this), n = "";
            return t.global && (n += "g"), t.ignoreCase && (n += "i"), t.multiline && (n += "m"), t.unicode && (n += "u"), t.sticky && (n += "y"), n
        }
    }, function (t, n, r) {
        "use strict";
        var e = r(47), o = RegExp.prototype.exec;
        t.exports = function (t, n) {
            var r = t.exec;
            if ("function" == typeof r) {
                var i = r.call(t, n);
                if ("object" != typeof i) throw new TypeError("RegExp exec method returned something other than an Object or null");
                return i
            }
            if ("RegExp" !== e(t)) throw new TypeError("RegExp#exec called on incompatible receiver");
            return o.call(t, n)
        }
    }, function (t, n, r) {
        "use strict";
        r(110);
        var e = r(11), o = r(15), i = r(2), u = r(25), a = r(5), c = r(82), f = a("species"), s = !i((function () {
            var t = /./;
            return t.exec = function () {
                var t = [];
                return t.groups = {a: "7"}, t
            }, "7" !== "".replace(t, "$<a>")
        })), l = function () {
            var t = /(?:)/, n = t.exec;
            t.exec = function () {
                return n.apply(this, arguments)
            };
            var r = "ab".split(t);
            return 2 === r.length && "a" === r[0] && "b" === r[1]
        }();
        t.exports = function (t, n, r) {
            var h = a(t), p = !i((function () {
                var n = {};
                return n[h] = function () {
                    return 7
                }, 7 != ""[t](n)
            })), v = p ? !i((function () {
                var n = !1, r = /a/;
                return r.exec = function () {
                    return n = !0, null
                }, "split" === t && (r.constructor = {}, r.constructor[f] = function () {
                    return r
                }), r[h](""), !n
            })) : void 0;
            if (!p || !v || "replace" === t && !s || "split" === t && !l) {
                var d = /./[h], y = r(u, h, ""[t], (function (t, n, r, e, o) {
                    return n.exec === c ? p && !o ? {done: !0, value: d.call(n, r, e)} : {
                        done: !0,
                        value: t.call(r, n, e)
                    } : {done: !1}
                })), g = y[0], m = y[1];
                e(String.prototype, t, g), o(RegExp.prototype, h, 2 == n ? function (t, n) {
                    return m.call(t, this, n)
                } : function (t) {
                    return m.call(t, this)
                })
            }
        }
    }, function (t, n, r) {
        var e = r(18), o = r(105), i = r(77), u = r(3), a = r(6), c = r(79), f = {}, s = {};
        (n = t.exports = function (t, n, r, l, h) {
            var p, v, d, y, g = h ? function () {
                return t
            } : c(t), m = e(r, l, n ? 2 : 1), b = 0;
            if ("function" != typeof g) throw TypeError(t + " is not iterable!");
            if (i(g)) {
                for (p = a(t.length); p > b; b++) if ((y = n ? m(u(v = t[b])[0], v[1]) : m(t[b])) === f || y === s) return y
            } else for (d = g.call(t); !(v = d.next()).done;) if ((y = o(d, m, v.value, n)) === f || y === s) return y
        }).BREAK = f, n.RETURN = s
    }, function (t, n, r) {
        var e = r(1).navigator;
        t.exports = e && e.userAgent || ""
    }, function (t, n, r) {
        "use strict";
        var e = r(1), o = r(0), i = r(11), u = r(44), a = r(28), c = r(57), f = r(43), s = r(4), l = r(2), h = r(53),
            p = r(39), v = r(68);
        t.exports = function (t, n, r, d, y, g) {
            var m = e[t], b = m, w = y ? "set" : "add", x = b && b.prototype, S = {}, _ = function (t) {
                var n = x[t];
                i(x, t, "delete" == t ? function (t) {
                    return !(g && !s(t)) && n.call(this, 0 === t ? 0 : t)
                } : "has" == t ? function (t) {
                    return !(g && !s(t)) && n.call(this, 0 === t ? 0 : t)
                } : "get" == t ? function (t) {
                    return g && !s(t) ? void 0 : n.call(this, 0 === t ? 0 : t)
                } : "add" == t ? function (t) {
                    return n.call(this, 0 === t ? 0 : t), this
                } : function (t, r) {
                    return n.call(this, 0 === t ? 0 : t, r), this
                })
            };
            if ("function" == typeof b && (g || x.forEach && !l((function () {
                (new b).entries().next()
            })))) {
                var E = new b, A = E[w](g ? {} : -0, 1) != E, P = l((function () {
                    E.has(1)
                })), O = h((function (t) {
                    new b(t)
                })), R = !g && l((function () {
                    for (var t = new b, n = 5; n--;) t[w](n, n);
                    return !t.has(-0)
                }));
                O || ((b = n((function (n, r) {
                    f(n, b, t);
                    var e = v(new m, n, b);
                    return null != r && c(r, y, e[w], e), e
                }))).prototype = x, x.constructor = b), (P || R) && (_("delete"), _("has"), y && _("get")), (R || A) && _(w), g && x.clear && delete x.clear
            } else b = d.getConstructor(n, t, y, w), u(b.prototype, r), a.NEED = !0;
            return p(b, t), S[t] = b, o(o.G + o.W + o.F * (b != m), S), g || d.setStrong(b, t, y), b
        }
    }, function (t, n, r) {
        for (var e, o = r(1), i = r(15), u = r(30), a = u("typed_array"), c = u("view"), f = !(!o.ArrayBuffer || !o.DataView), s = f, l = 0, h = "Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array".split(","); l < 9;) (e = o[h[l++]]) ? (i(e.prototype, a, !0), i(e.prototype, c, !0)) : s = !1;
        t.exports = {ABV: f, CONSTR: s, TYPED: a, VIEW: c}
    }, function (t, n, r) {
        var e = r(4), o = r(1).document, i = e(o) && e(o.createElement);
        t.exports = function (t) {
            return i ? o.createElement(t) : {}
        }
    }, function (t, n, r) {
        n.f = r(5)
    }, function (t, n, r) {
        var e = r(49)("keys"), o = r(30);
        t.exports = function (t) {
            return e[t] || (e[t] = o(t))
        }
    }, function (t, n) {
        t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
    }, function (t, n, r) {
        var e = r(1).document;
        t.exports = e && e.documentElement
    }, function (t, n, r) {
        var e = r(4), o = r(3), i = function (t, n) {
            if (o(t), !e(n) && null !== n) throw TypeError(n + ": can't set as prototype!")
        };
        t.exports = {
            set: Object.setPrototypeOf || ("__proto__" in {} ? function (t, n, e) {
                try {
                    (e = r(18)(Function.call, r(21).f(Object.prototype, "__proto__").set, 2))(t, []), n = !(t instanceof Array)
                } catch (t) {
                    n = !0
                }
                return function (t, r) {
                    return i(t, r), n ? t.__proto__ = r : e(t, r), t
                }
            }({}, !1) : void 0), check: i
        }
    }, function (t, n) {
        t.exports = "\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"
    }, function (t, n, r) {
        var e = r(4), o = r(66).set;
        t.exports = function (t, n, r) {
            var i, u = n.constructor;
            return u !== r && "function" == typeof u && (i = u.prototype) !== r.prototype && e(i) && o && o(t, i), t
        }
    }, function (t, n, r) {
        "use strict";
        var e = r(20), o = r(25);
        t.exports = function (t) {
            var n = String(o(this)), r = "", i = e(t);
            if (i < 0 || i == 1 / 0) throw RangeError("Count can't be negative");
            for (; i > 0; (i >>>= 1) && (n += n)) 1 & i && (r += n);
            return r
        }
    }, function (t, n) {
        t.exports = Math.sign || function (t) {
            return 0 == (t = +t) || t != t ? t : t < 0 ? -1 : 1
        }
    }, function (t, n) {
        var r = Math.expm1;
        t.exports = !r || r(10) > 22025.465794806718 || r(10) < 22025.465794806718 || -2e-17 != r(-2e-17) ? function (t) {
            return 0 == (t = +t) ? t : t > -1e-6 && t < 1e-6 ? t + t * t / 2 : Math.exp(t) - 1
        } : r
    }, function (t, n, r) {
        var e = r(20), o = r(25);
        t.exports = function (t) {
            return function (n, r) {
                var i, u, a = String(o(n)), c = e(r), f = a.length;
                return c < 0 || c >= f ? t ? "" : void 0 : (i = a.charCodeAt(c)) < 55296 || i > 56319 || c + 1 === f || (u = a.charCodeAt(c + 1)) < 56320 || u > 57343 ? t ? a.charAt(c) : i : t ? a.slice(c, c + 2) : u - 56320 + (i - 55296 << 10) + 65536
            }
        }
    }, function (t, n, r) {
        "use strict";
        var e = r(31), o = r(0), i = r(11), u = r(15), a = r(41), c = r(104), f = r(39), s = r(36),
            l = r(5)("iterator"), h = !([].keys && "next" in [].keys()), p = function () {
                return this
            };
        t.exports = function (t, n, r, v, d, y, g) {
            c(r, n, v);
            var m, b, w, x = function (t) {
                    if (!h && t in A) return A[t];
                    switch (t) {
                        case"keys":
                        case"values":
                            return function () {
                                return new r(this, t)
                            }
                    }
                    return function () {
                        return new r(this, t)
                    }
                }, S = n + " Iterator", _ = "values" == d, E = !1, A = t.prototype,
                P = A[l] || A["@@iterator"] || d && A[d], O = P || x(d), R = d ? _ ? x("entries") : O : void 0,
                T = "Array" == n && A.entries || P;
            if (T && (w = s(T.call(new t))) !== Object.prototype && w.next && (f(w, S, !0), e || "function" == typeof w[l] || u(w, l, p)), _ && P && "values" !== P.name && (E = !0, O = function () {
                return P.call(this)
            }), e && !g || !h && !E && A[l] || u(A, l, O), a[n] = O, a[S] = p, d) if (m = {
                values: _ ? O : x("values"),
                keys: y ? O : x("keys"),
                entries: R
            }, g) for (b in m) b in A || i(A, b, m[b]); else o(o.P + o.F * (h || E), n, m);
            return m
        }
    }, function (t, n, r) {
        var e = r(75), o = r(25);
        t.exports = function (t, n, r) {
            if (e(n)) throw TypeError("String#" + r + " doesn't accept regex!");
            return String(o(t))
        }
    }, function (t, n, r) {
        var e = r(4), o = r(24), i = r(5)("match");
        t.exports = function (t) {
            var n;
            return e(t) && (void 0 !== (n = t[i]) ? !!n : "RegExp" == o(t))
        }
    }, function (t, n, r) {
        var e = r(5)("match");
        t.exports = function (t) {
            var n = /./;
            try {
                "/./"[t](n)
            } catch (r) {
                try {
                    return n[e] = !1, !"/./"[t](n)
                } catch (t) {
                }
            }
            return !0
        }
    }, function (t, n, r) {
        var e = r(41), o = r(5)("iterator"), i = Array.prototype;
        t.exports = function (t) {
            return void 0 !== t && (e.Array === t || i[o] === t)
        }
    }, function (t, n, r) {
        "use strict";
        var e = r(9), o = r(29);
        t.exports = function (t, n, r) {
            n in t ? e.f(t, n, o(0, r)) : t[n] = r
        }
    }, function (t, n, r) {
        var e = r(47), o = r(5)("iterator"), i = r(41);
        t.exports = r(7).getIteratorMethod = function (t) {
            if (null != t) return t[o] || t["@@iterator"] || i[e(t)]
        }
    }, function (t, n, r) {
        "use strict";
        var e = r(10), o = r(33), i = r(6);
        t.exports = function (t) {
            for (var n = e(this), r = i(n.length), u = arguments.length, a = o(u > 1 ? arguments[1] : void 0, r), c = u > 2 ? arguments[2] : void 0, f = void 0 === c ? r : o(c, r); f > a;) n[a++] = t;
            return n
        }
    }, function (t, n, r) {
        "use strict";
        var e = r(37), o = r(109), i = r(41), u = r(16);
        t.exports = r(73)(Array, "Array", (function (t, n) {
            this._t = u(t), this._i = 0, this._k = n
        }), (function () {
            var t = this._t, n = this._k, r = this._i++;
            return !t || r >= t.length ? (this._t = void 0, o(1)) : o(0, "keys" == n ? r : "values" == n ? t[r] : [r, t[r]])
        }), "values"), i.Arguments = i.Array, e("keys"), e("values"), e("entries")
    }, function (t, n, r) {
        "use strict";
        var e, o, i = r(54), u = RegExp.prototype.exec, a = String.prototype.replace, c = u,
            f = (e = /a/, o = /b*/g, u.call(e, "a"), u.call(o, "a"), 0 !== e.lastIndex || 0 !== o.lastIndex),
            s = void 0 !== /()??/.exec("")[1];
        (f || s) && (c = function (t) {
            var n, r, e, o, c = this;
            return s && (r = new RegExp("^" + c.source + "$(?!\\s)", i.call(c))), f && (n = c.lastIndex), e = u.call(c, t), f && e && (c.lastIndex = c.global ? e.index + e[0].length : n), s && e && e.length > 1 && a.call(e[0], r, (function () {
                for (o = 1; o < arguments.length - 2; o++) void 0 === arguments[o] && (e[o] = void 0)
            })), e
        }), t.exports = c
    }, function (t, n, r) {
        "use strict";
        var e = r(72)(!0);
        t.exports = function (t, n, r) {
            return n + (r ? e(t, n).length : 1)
        }
    }, function (t, n, r) {
        var e, o, i, u = r(18), a = r(98), c = r(65), f = r(61), s = r(1), l = s.process, h = s.setImmediate,
            p = s.clearImmediate, v = s.MessageChannel, d = s.Dispatch, y = 0, g = {}, m = function () {
                var t = +this;
                if (g.hasOwnProperty(t)) {
                    var n = g[t];
                    delete g[t], n()
                }
            }, b = function (t) {
                m.call(t.data)
            };
        h && p || (h = function (t) {
            for (var n = [], r = 1; arguments.length > r;) n.push(arguments[r++]);
            return g[++y] = function () {
                a("function" == typeof t ? t : Function(t), n)
            }, e(y), y
        }, p = function (t) {
            delete g[t]
        }, "process" == r(24)(l) ? e = function (t) {
            l.nextTick(u(m, t, 1))
        } : d && d.now ? e = function (t) {
            d.now(u(m, t, 1))
        } : v ? (i = (o = new v).port2, o.port1.onmessage = b, e = u(i.postMessage, i, 1)) : s.addEventListener && "function" == typeof postMessage && !s.importScripts ? (e = function (t) {
            s.postMessage(t + "", "*")
        }, s.addEventListener("message", b, !1)) : e = "onreadystatechange" in f("script") ? function (t) {
            c.appendChild(f("script")).onreadystatechange = function () {
                c.removeChild(this), m.call(t)
            }
        } : function (t) {
            setTimeout(u(m, t, 1), 0)
        }), t.exports = {set: h, clear: p}
    }, function (t, n, r) {
        "use strict";
        var e = r(1), o = r(8), i = r(31), u = r(60), a = r(15), c = r(44), f = r(2), s = r(43), l = r(20), h = r(6),
            p = r(117), v = r(35).f, d = r(9).f, y = r(80), g = r(39), m = "prototype", b = "Wrong index!",
            w = e.ArrayBuffer, x = e.DataView, S = e.Math, _ = e.RangeError, E = e.Infinity, A = w, P = S.abs,
            O = S.pow, R = S.floor, T = S.log, j = S.LN2, M = o ? "_b" : "buffer", I = o ? "_l" : "byteLength",
            F = o ? "_o" : "byteOffset";

        function N(t, n, r) {
            var e, o, i, u = new Array(r), a = 8 * r - n - 1, c = (1 << a) - 1, f = c >> 1,
                s = 23 === n ? O(2, -24) - O(2, -77) : 0, l = 0, h = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
            for ((t = P(t)) != t || t === E ? (o = t != t ? 1 : 0, e = c) : (e = R(T(t) / j), t * (i = O(2, -e)) < 1 && (e--, i *= 2), (t += e + f >= 1 ? s / i : s * O(2, 1 - f)) * i >= 2 && (e++, i /= 2), e + f >= c ? (o = 0, e = c) : e + f >= 1 ? (o = (t * i - 1) * O(2, n), e += f) : (o = t * O(2, f - 1) * O(2, n), e = 0)); n >= 8; u[l++] = 255 & o, o /= 256, n -= 8) ;
            for (e = e << n | o, a += n; a > 0; u[l++] = 255 & e, e /= 256, a -= 8) ;
            return u[--l] |= 128 * h, u
        }

        function k(t, n, r) {
            var e, o = 8 * r - n - 1, i = (1 << o) - 1, u = i >> 1, a = o - 7, c = r - 1, f = t[c--], s = 127 & f;
            for (f >>= 7; a > 0; s = 256 * s + t[c], c--, a -= 8) ;
            for (e = s & (1 << -a) - 1, s >>= -a, a += n; a > 0; e = 256 * e + t[c], c--, a -= 8) ;
            if (0 === s) s = 1 - u; else {
                if (s === i) return e ? NaN : f ? -E : E;
                e += O(2, n), s -= u
            }
            return (f ? -1 : 1) * e * O(2, s - n)
        }

        function L(t) {
            return t[3] << 24 | t[2] << 16 | t[1] << 8 | t[0]
        }

        function C(t) {
            return [255 & t]
        }

        function B(t) {
            return [255 & t, t >> 8 & 255]
        }

        function U(t) {
            return [255 & t, t >> 8 & 255, t >> 16 & 255, t >> 24 & 255]
        }

        function D(t) {
            return N(t, 52, 8)
        }

        function Y(t) {
            return N(t, 23, 4)
        }

        function W(t, n, r) {
            d(t[m], n, {
                get: function () {
                    return this[r]
                }
            })
        }

        function V(t, n, r, e) {
            var o = p(+r);
            if (o + n > t[I]) throw _(b);
            var i = t[M]._b, u = o + t[F], a = i.slice(u, u + n);
            return e ? a : a.reverse()
        }

        function z(t, n, r, e, o, i) {
            var u = p(+r);
            if (u + n > t[I]) throw _(b);
            for (var a = t[M]._b, c = u + t[F], f = e(+o), s = 0; s < n; s++) a[c + s] = f[i ? s : n - s - 1]
        }

        if (u.ABV) {
            if (!f((function () {
                w(1)
            })) || !f((function () {
                new w(-1)
            })) || f((function () {
                return new w, new w(1.5), new w(NaN), "ArrayBuffer" != w.name
            }))) {
                for (var G, q = (w = function (t) {
                    return s(this, w), new A(p(t))
                })[m] = A[m], H = v(A), J = 0; H.length > J;) (G = H[J++]) in w || a(w, G, A[G]);
                i || (q.constructor = w)
            }
            var X = new x(new w(2)), $ = x[m].setInt8;
            X.setInt8(0, 2147483648), X.setInt8(1, 2147483649), !X.getInt8(0) && X.getInt8(1) || c(x[m], {
                setInt8: function (t, n) {
                    $.call(this, t, n << 24 >> 24)
                }, setUint8: function (t, n) {
                    $.call(this, t, n << 24 >> 24)
                }
            }, !0)
        } else w = function (t) {
            s(this, w, "ArrayBuffer");
            var n = p(t);
            this._b = y.call(new Array(n), 0), this[I] = n
        }, x = function (t, n, r) {
            s(this, x, "DataView"), s(t, w, "DataView");
            var e = t[I], o = l(n);
            if (o < 0 || o > e) throw _("Wrong offset!");
            if (o + (r = void 0 === r ? e - o : h(r)) > e) throw _("Wrong length!");
            this[M] = t, this[F] = o, this[I] = r
        }, o && (W(w, "byteLength", "_l"), W(x, "buffer", "_b"), W(x, "byteLength", "_l"), W(x, "byteOffset", "_o")), c(x[m], {
            getInt8: function (t) {
                return V(this, 1, t)[0] << 24 >> 24
            }, getUint8: function (t) {
                return V(this, 1, t)[0]
            }, getInt16: function (t) {
                var n = V(this, 2, t, arguments[1]);
                return (n[1] << 8 | n[0]) << 16 >> 16
            }, getUint16: function (t) {
                var n = V(this, 2, t, arguments[1]);
                return n[1] << 8 | n[0]
            }, getInt32: function (t) {
                return L(V(this, 4, t, arguments[1]))
            }, getUint32: function (t) {
                return L(V(this, 4, t, arguments[1])) >>> 0
            }, getFloat32: function (t) {
                return k(V(this, 4, t, arguments[1]), 23, 4)
            }, getFloat64: function (t) {
                return k(V(this, 8, t, arguments[1]), 52, 8)
            }, setInt8: function (t, n) {
                z(this, 1, t, C, n)
            }, setUint8: function (t, n) {
                z(this, 1, t, C, n)
            }, setInt16: function (t, n) {
                z(this, 2, t, B, n, arguments[2])
            }, setUint16: function (t, n) {
                z(this, 2, t, B, n, arguments[2])
            }, setInt32: function (t, n) {
                z(this, 4, t, U, n, arguments[2])
            }, setUint32: function (t, n) {
                z(this, 4, t, U, n, arguments[2])
            }, setFloat32: function (t, n) {
                z(this, 4, t, Y, n, arguments[2])
            }, setFloat64: function (t, n) {
                z(this, 8, t, D, n, arguments[2])
            }
        });
        g(w, "ArrayBuffer"), g(x, "DataView"), a(x[m], u.VIEW, !0), n.ArrayBuffer = w, n.DataView = x
    }, function (t, n) {
        var r = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
        "number" == typeof __g && (__g = r)
    }, function (t, n) {
        t.exports = function (t) {
            return "object" == typeof t ? null !== t : "function" == typeof t
        }
    }, function (t, n, r) {
        t.exports = !r(122)((function () {
            return 7 != Object.defineProperty({}, "a", {
                get: function () {
                    return 7
                }
            }).a
        }))
    }, function (t, n, r) {
        "use strict";

        function e(t) {
            return (e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        var o = r(123), i = Object.prototype.toString;

        function u(t) {
            return "[object Array]" === i.call(t)
        }

        function a(t) {
            return null !== t && "object" === e(t)
        }

        function c(t) {
            return "[object Function]" === i.call(t)
        }

        function f(t, n) {
            if (null != t) if ("object" !== e(t) && (t = [t]), u(t)) for (var r = 0, o = t.length; r < o; r++) n.call(null, t[r], r, t); else for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && n.call(null, t[i], i, t)
        }

        t.exports = {
            isArray: u, isArrayBuffer: function (t) {
                return "[object ArrayBuffer]" === i.call(t)
            }, isFormData: function (t) {
                return "undefined" != typeof FormData && t instanceof FormData
            }, isArrayBufferView: function (t) {
                return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(t) : t && t.buffer && t.buffer instanceof ArrayBuffer
            }, isString: function (t) {
                return "string" == typeof t
            }, isNumber: function (t) {
                return "number" == typeof t
            }, isObject: a, isUndefined: function (t) {
                return void 0 === t
            }, isDate: function (t) {
                return "[object Date]" === i.call(t)
            }, isFile: function (t) {
                return "[object File]" === i.call(t)
            }, isBlob: function (t) {
                return "[object Blob]" === i.call(t)
            }, isFunction: c, isStream: function (t) {
                return a(t) && c(t.pipe)
            }, isURLSearchParams: function (t) {
                return "undefined" != typeof URLSearchParams && t instanceof URLSearchParams
            }, isStandardBrowserEnv: function () {
                return ("undefined" == typeof navigator || "ReactNative" !== navigator.product && "NativeScript" !== navigator.product && "NS" !== navigator.product) && ("undefined" != typeof window && "undefined" != typeof document)
            }, forEach: f, merge: function t() {
                var n = {};

                function r(r, o) {
                    "object" === e(n[o]) && "object" === e(r) ? n[o] = t(n[o], r) : n[o] = r
                }

                for (var o = 0, i = arguments.length; o < i; o++) f(arguments[o], r);
                return n
            }, deepMerge: function t() {
                var n = {};

                function r(r, o) {
                    "object" === e(n[o]) && "object" === e(r) ? n[o] = t(n[o], r) : "object" === e(r) ? n[o] = t({}, r) : n[o] = r
                }

                for (var o = 0, i = arguments.length; o < i; o++) f(arguments[o], r);
                return n
            }, extend: function (t, n, r) {
                return f(n, (function (n, e) {
                    t[e] = r && "function" == typeof n ? o(n, r) : n
                })), t
            }, trim: function (t) {
                return t.replace(/^\s*/, "").replace(/\s*$/, "")
            }
        }
    }, function (t, n, r) {
        t.exports = !r(8) && !r(2)((function () {
            return 7 != Object.defineProperty(r(61)("div"), "a", {
                get: function () {
                    return 7
                }
            }).a
        }))
    }, function (t, n, r) {
        var e = r(1), o = r(7), i = r(31), u = r(62), a = r(9).f;
        t.exports = function (t) {
            var n = o.Symbol || (o.Symbol = i ? {} : e.Symbol || {});
            "_" == t.charAt(0) || t in n || a(n, t, {value: u.f(t)})
        }
    }, function (t, n, r) {
        var e = r(14), o = r(16), i = r(50)(!1), u = r(63)("IE_PROTO");
        t.exports = function (t, n) {
            var r, a = o(t), c = 0, f = [];
            for (r in a) r != u && e(a, r) && f.push(r);
            for (; n.length > c;) e(a, r = n[c++]) && (~i(f, r) || f.push(r));
            return f
        }
    }, function (t, n, r) {
        var e = r(9), o = r(3), i = r(32);
        t.exports = r(8) ? Object.defineProperties : function (t, n) {
            o(t);
            for (var r, u = i(n), a = u.length, c = 0; a > c;) e.f(t, r = u[c++], n[r]);
            return t
        }
    }, function (t, n, r) {
        var e = r(16), o = r(35).f, i = {}.toString,
            u = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
        t.exports.f = function (t) {
            return u && "[object Window]" == i.call(t) ? function (t) {
                try {
                    return o(t)
                } catch (t) {
                    return u.slice()
                }
            }(t) : o(e(t))
        }
    }, function (t, n, r) {
        "use strict";
        var e = r(8), o = r(32), i = r(51), u = r(46), a = r(10), c = r(45), f = Object.assign;
        t.exports = !f || r(2)((function () {
            var t = {}, n = {}, r = Symbol(), e = "abcdefghijklmnopqrst";
            return t[r] = 7, e.split("").forEach((function (t) {
                n[t] = t
            })), 7 != f({}, t)[r] || Object.keys(f({}, n)).join("") != e
        })) ? function (t, n) {
            for (var r = a(t), f = arguments.length, s = 1, l = i.f, h = u.f; f > s;) for (var p, v = c(arguments[s++]), d = l ? o(v).concat(l(v)) : o(v), y = d.length, g = 0; y > g;) p = d[g++], e && !h.call(v, p) || (r[p] = v[p]);
            return r
        } : f
    }, function (t, n) {
        t.exports = Object.is || function (t, n) {
            return t === n ? 0 !== t || 1 / t == 1 / n : t != t && n != n
        }
    }, function (t, n, r) {
        "use strict";
        var e = r(19), o = r(4), i = r(98), u = [].slice, a = {}, c = function (t, n, r) {
            if (!(n in a)) {
                for (var e = [], o = 0; o < n; o++) e[o] = "a[" + o + "]";
                a[n] = Function("F,a", "return new F(" + e.join(",") + ")")
            }
            return a[n](t, r)
        };
        t.exports = Function.bind || function (t) {
            var n = e(this), r = u.call(arguments, 1), a = function () {
                var e = r.concat(u.call(arguments));
                return this instanceof a ? c(n, e.length, e) : i(n, e, t)
            };
            return o(n.prototype) && (a.prototype = n.prototype), a
        }
    }, function (t, n) {
        t.exports = function (t, n, r) {
            var e = void 0 === r;
            switch (n.length) {
                case 0:
                    return e ? t() : t.call(r);
                case 1:
                    return e ? t(n[0]) : t.call(r, n[0]);
                case 2:
                    return e ? t(n[0], n[1]) : t.call(r, n[0], n[1]);
                case 3:
                    return e ? t(n[0], n[1], n[2]) : t.call(r, n[0], n[1], n[2]);
                case 4:
                    return e ? t(n[0], n[1], n[2], n[3]) : t.call(r, n[0], n[1], n[2], n[3])
            }
            return t.apply(r, n)
        }
    }, function (t, n, r) {
        var e = r(1).parseInt, o = r(40).trim, i = r(67), u = /^[-+]?0[xX]/;
        t.exports = 8 !== e(i + "08") || 22 !== e(i + "0x16") ? function (t, n) {
            var r = o(String(t), 3);
            return e(r, n >>> 0 || (u.test(r) ? 16 : 10))
        } : e
    }, function (t, n, r) {
        var e = r(1).parseFloat, o = r(40).trim;
        t.exports = 1 / e(r(67) + "-0") != -1 / 0 ? function (t) {
            var n = o(String(t), 3), r = e(n);
            return 0 === r && "-" == n.charAt(0) ? -0 : r
        } : e
    }, function (t, n, r) {
        var e = r(24);
        t.exports = function (t, n) {
            if ("number" != typeof t && "Number" != e(t)) throw TypeError(n);
            return +t
        }
    }, function (t, n, r) {
        var e = r(4), o = Math.floor;
        t.exports = function (t) {
            return !e(t) && isFinite(t) && o(t) === t
        }
    }, function (t, n) {
        t.exports = Math.log1p || function (t) {
            return (t = +t) > -1e-8 && t < 1e-8 ? t - t * t / 2 : Math.log(1 + t)
        }
    }, function (t, n, r) {
        "use strict";
        var e = r(34), o = r(29), i = r(39), u = {};
        r(15)(u, r(5)("iterator"), (function () {
            return this
        })), t.exports = function (t, n, r) {
            t.prototype = e(u, {next: o(1, r)}), i(t, n + " Iterator")
        }
    }, function (t, n, r) {
        var e = r(3);
        t.exports = function (t, n, r, o) {
            try {
                return o ? n(e(r)[0], r[1]) : n(r)
            } catch (n) {
                var i = t.return;
                throw void 0 !== i && e(i.call(t)), n
            }
        }
    }, function (t, n, r) {
        var e = r(228);
        t.exports = function (t, n) {
            return new (e(t))(n)
        }
    }, function (t, n, r) {
        var e = r(19), o = r(10), i = r(45), u = r(6);
        t.exports = function (t, n, r, a, c) {
            e(n);
            var f = o(t), s = i(f), l = u(f.length), h = c ? l - 1 : 0, p = c ? -1 : 1;
            if (r < 2) for (; ;) {
                if (h in s) {
                    a = s[h], h += p;
                    break
                }
                if (h += p, c ? h < 0 : l <= h) throw TypeError("Reduce of empty array with no initial value")
            }
            for (; c ? h >= 0 : l > h; h += p) h in s && (a = n(a, s[h], h, f));
            return a
        }
    }, function (t, n, r) {
        "use strict";
        var e = r(10), o = r(33), i = r(6);
        t.exports = [].copyWithin || function (t, n) {
            var r = e(this), u = i(r.length), a = o(t, u), c = o(n, u),
                f = arguments.length > 2 ? arguments[2] : void 0, s = Math.min((void 0 === f ? u : o(f, u)) - c, u - a),
                l = 1;
            for (c < a && a < c + s && (l = -1, c += s - 1, a += s - 1); s-- > 0;) c in r ? r[a] = r[c] : delete r[a], a += l, c += l;
            return r
        }
    }, function (t, n) {
        t.exports = function (t, n) {
            return {value: n, done: !!t}
        }
    }, function (t, n, r) {
        "use strict";
        var e = r(82);
        r(0)({target: "RegExp", proto: !0, forced: e !== /./.exec}, {exec: e})
    }, function (t, n, r) {
        r(8) && "g" != /./g.flags && r(9).f(RegExp.prototype, "flags", {configurable: !0, get: r(54)})
    }, function (t, n, r) {
        "use strict";
        var e, o, i, u, a = r(31), c = r(1), f = r(18), s = r(47), l = r(0), h = r(4), p = r(19), v = r(43), d = r(57),
            y = r(48), g = r(84).set, m = r(248)(), b = r(113), w = r(249), x = r(58), S = r(114), _ = c.TypeError,
            E = c.process, A = E && E.versions, P = A && A.v8 || "", O = c.Promise, R = "process" == s(E),
            T = function () {
            }, j = o = b.f, M = !!function () {
                try {
                    var t = O.resolve(1), n = (t.constructor = {})[r(5)("species")] = function (t) {
                        t(T, T)
                    };
                    return (R || "function" == typeof PromiseRejectionEvent) && t.then(T) instanceof n && 0 !== P.indexOf("6.6") && -1 === x.indexOf("Chrome/66")
                } catch (t) {
                }
            }(), I = function (t) {
                var n;
                return !(!h(t) || "function" != typeof (n = t.then)) && n
            }, F = function (t, n) {
                if (!t._n) {
                    t._n = !0;
                    var r = t._c;
                    m((function () {
                        for (var e = t._v, o = 1 == t._s, i = 0, u = function (n) {
                            var r, i, u, a = o ? n.ok : n.fail, c = n.resolve, f = n.reject, s = n.domain;
                            try {
                                a ? (o || (2 == t._h && L(t), t._h = 1), !0 === a ? r = e : (s && s.enter(), r = a(e), s && (s.exit(), u = !0)), r === n.promise ? f(_("Promise-chain cycle")) : (i = I(r)) ? i.call(r, c, f) : c(r)) : f(e)
                            } catch (t) {
                                s && !u && s.exit(), f(t)
                            }
                        }; r.length > i;) u(r[i++]);
                        t._c = [], t._n = !1, n && !t._h && N(t)
                    }))
                }
            }, N = function (t) {
                g.call(c, (function () {
                    var n, r, e, o = t._v, i = k(t);
                    if (i && (n = w((function () {
                        R ? E.emit("unhandledRejection", o, t) : (r = c.onunhandledrejection) ? r({
                            promise: t,
                            reason: o
                        }) : (e = c.console) && e.error && e.error("Unhandled promise rejection", o)
                    })), t._h = R || k(t) ? 2 : 1), t._a = void 0, i && n.e) throw n.v
                }))
            }, k = function (t) {
                return 1 !== t._h && 0 === (t._a || t._c).length
            }, L = function (t) {
                g.call(c, (function () {
                    var n;
                    R ? E.emit("rejectionHandled", t) : (n = c.onrejectionhandled) && n({promise: t, reason: t._v})
                }))
            }, C = function (t) {
                var n = this;
                n._d || (n._d = !0, (n = n._w || n)._v = t, n._s = 2, n._a || (n._a = n._c.slice()), F(n, !0))
            }, B = function (t) {
                var n, r = this;
                if (!r._d) {
                    r._d = !0, r = r._w || r;
                    try {
                        if (r === t) throw _("Promise can't be resolved itself");
                        (n = I(t)) ? m((function () {
                            var e = {_w: r, _d: !1};
                            try {
                                n.call(t, f(B, e, 1), f(C, e, 1))
                            } catch (t) {
                                C.call(e, t)
                            }
                        })) : (r._v = t, r._s = 1, F(r, !1))
                    } catch (t) {
                        C.call({_w: r, _d: !1}, t)
                    }
                }
            };
        M || (O = function (t) {
            v(this, O, "Promise", "_h"), p(t), e.call(this);
            try {
                t(f(B, this, 1), f(C, this, 1))
            } catch (t) {
                C.call(this, t)
            }
        }, (e = function (t) {
            this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, this._n = !1
        }).prototype = r(44)(O.prototype, {
            then: function (t, n) {
                var r = j(y(this, O));
                return r.ok = "function" != typeof t || t, r.fail = "function" == typeof n && n, r.domain = R ? E.domain : void 0, this._c.push(r), this._a && this._a.push(r), this._s && F(this, !1), r.promise
            }, catch: function (t) {
                return this.then(void 0, t)
            }
        }), i = function () {
            var t = new e;
            this.promise = t, this.resolve = f(B, t, 1), this.reject = f(C, t, 1)
        }, b.f = j = function (t) {
            return t === O || t === u ? new i(t) : o(t)
        }), l(l.G + l.W + l.F * !M, {Promise: O}), r(39)(O, "Promise"), r(42)("Promise"), u = r(7).Promise, l(l.S + l.F * !M, "Promise", {
            reject: function (t) {
                var n = j(this);
                return (0, n.reject)(t), n.promise
            }
        }), l(l.S + l.F * (a || !M), "Promise", {
            resolve: function (t) {
                return S(a && this === u ? O : this, t)
            }
        }), l(l.S + l.F * !(M && r(53)((function (t) {
            O.all(t).catch(T)
        }))), "Promise", {
            all: function (t) {
                var n = this, r = j(n), e = r.resolve, o = r.reject, i = w((function () {
                    var r = [], i = 0, u = 1;
                    d(t, !1, (function (t) {
                        var a = i++, c = !1;
                        r.push(void 0), u++, n.resolve(t).then((function (t) {
                            c || (c = !0, r[a] = t, --u || e(r))
                        }), o)
                    })), --u || e(r)
                }));
                return i.e && o(i.v), r.promise
            }, race: function (t) {
                var n = this, r = j(n), e = r.reject, o = w((function () {
                    d(t, !1, (function (t) {
                        n.resolve(t).then(r.resolve, e)
                    }))
                }));
                return o.e && e(o.v), r.promise
            }
        })
    }, function (t, n, r) {
        "use strict";
        var e = r(19);

        function o(t) {
            var n, r;
            this.promise = new t((function (t, e) {
                if (void 0 !== n || void 0 !== r) throw TypeError("Bad Promise constructor");
                n = t, r = e
            })), this.resolve = e(n), this.reject = e(r)
        }

        t.exports.f = function (t) {
            return new o(t)
        }
    }, function (t, n, r) {
        var e = r(3), o = r(4), i = r(113);
        t.exports = function (t, n) {
            if (e(t), o(n) && n.constructor === t) return n;
            var r = i.f(t);
            return (0, r.resolve)(n), r.promise
        }
    }, function (t, n, r) {
        "use strict";
        var e = r(9).f, o = r(34), i = r(44), u = r(18), a = r(43), c = r(57), f = r(73), s = r(109), l = r(42),
            h = r(8), p = r(28).fastKey, v = r(38), d = h ? "_s" : "size", y = function (t, n) {
                var r, e = p(n);
                if ("F" !== e) return t._i[e];
                for (r = t._f; r; r = r.n) if (r.k == n) return r
            };
        t.exports = {
            getConstructor: function (t, n, r, f) {
                var s = t((function (t, e) {
                    a(t, s, n, "_i"), t._t = n, t._i = o(null), t._f = void 0, t._l = void 0, t[d] = 0, null != e && c(e, r, t[f], t)
                }));
                return i(s.prototype, {
                    clear: function () {
                        for (var t = v(this, n), r = t._i, e = t._f; e; e = e.n) e.r = !0, e.p && (e.p = e.p.n = void 0), delete r[e.i];
                        t._f = t._l = void 0, t[d] = 0
                    }, delete: function (t) {
                        var r = v(this, n), e = y(r, t);
                        if (e) {
                            var o = e.n, i = e.p;
                            delete r._i[e.i], e.r = !0, i && (i.n = o), o && (o.p = i), r._f == e && (r._f = o), r._l == e && (r._l = i), r[d]--
                        }
                        return !!e
                    }, forEach: function (t) {
                        v(this, n);
                        for (var r, e = u(t, arguments.length > 1 ? arguments[1] : void 0, 3); r = r ? r.n : this._f;) for (e(r.v, r.k, this); r && r.r;) r = r.p
                    }, has: function (t) {
                        return !!y(v(this, n), t)
                    }
                }), h && e(s.prototype, "size", {
                    get: function () {
                        return v(this, n)[d]
                    }
                }), s
            }, def: function (t, n, r) {
                var e, o, i = y(t, n);
                return i ? i.v = r : (t._l = i = {
                    i: o = p(n, !0),
                    k: n,
                    v: r,
                    p: e = t._l,
                    n: void 0,
                    r: !1
                }, t._f || (t._f = i), e && (e.n = i), t[d]++, "F" !== o && (t._i[o] = i)), t
            }, getEntry: y, setStrong: function (t, n, r) {
                f(t, n, (function (t, r) {
                    this._t = v(t, n), this._k = r, this._l = void 0
                }), (function () {
                    for (var t = this._k, n = this._l; n && n.r;) n = n.p;
                    return this._t && (this._l = n = n ? n.n : this._t._f) ? s(0, "keys" == t ? n.k : "values" == t ? n.v : [n.k, n.v]) : (this._t = void 0, s(1))
                }), r ? "entries" : "values", !r, !0), l(n)
            }
        }
    }, function (t, n, r) {
        "use strict";
        var e = r(44), o = r(28).getWeak, i = r(3), u = r(4), a = r(43), c = r(57), f = r(23), s = r(14), l = r(38),
            h = f(5), p = f(6), v = 0, d = function (t) {
                return t._l || (t._l = new y)
            }, y = function () {
                this.a = []
            }, g = function (t, n) {
                return h(t.a, (function (t) {
                    return t[0] === n
                }))
            };
        y.prototype = {
            get: function (t) {
                var n = g(this, t);
                if (n) return n[1]
            }, has: function (t) {
                return !!g(this, t)
            }, set: function (t, n) {
                var r = g(this, t);
                r ? r[1] = n : this.a.push([t, n])
            }, delete: function (t) {
                var n = p(this.a, (function (n) {
                    return n[0] === t
                }));
                return ~n && this.a.splice(n, 1), !!~n
            }
        }, t.exports = {
            getConstructor: function (t, n, r, i) {
                var f = t((function (t, e) {
                    a(t, f, n, "_i"), t._t = n, t._i = v++, t._l = void 0, null != e && c(e, r, t[i], t)
                }));
                return e(f.prototype, {
                    delete: function (t) {
                        if (!u(t)) return !1;
                        var r = o(t);
                        return !0 === r ? d(l(this, n)).delete(t) : r && s(r, this._i) && delete r[this._i]
                    }, has: function (t) {
                        if (!u(t)) return !1;
                        var r = o(t);
                        return !0 === r ? d(l(this, n)).has(t) : r && s(r, this._i)
                    }
                }), f
            }, def: function (t, n, r) {
                var e = o(i(n), !0);
                return !0 === e ? d(t).set(n, r) : e[t._i] = r, t
            }, ufstore: d
        }
    }, function (t, n, r) {
        var e = r(20), o = r(6);
        t.exports = function (t) {
            if (void 0 === t) return 0;
            var n = e(t), r = o(n);
            if (n !== r) throw RangeError("Wrong length!");
            return r
        }
    }, function (t, n, r) {
        var e = r(35), o = r(51), i = r(3), u = r(1).Reflect;
        t.exports = u && u.ownKeys || function (t) {
            var n = e.f(i(t)), r = o.f;
            return r ? n.concat(r(t)) : n
        }
    }, function (t, n, r) {
        var e = r(6), o = r(69), i = r(25);
        t.exports = function (t, n, r, u) {
            var a = String(i(t)), c = a.length, f = void 0 === r ? " " : String(r), s = e(n);
            if (s <= c || "" == f) return a;
            var l = s - c, h = o.call(f, Math.ceil(l / f.length));
            return h.length > l && (h = h.slice(0, l)), u ? h + a : a + h
        }
    }, function (t, n, r) {
        var e = r(8), o = r(32), i = r(16), u = r(46).f;
        t.exports = function (t) {
            return function (n) {
                for (var r, a = i(n), c = o(a), f = c.length, s = 0, l = []; f > s;) r = c[s++], e && !u.call(a, r) || l.push(t ? [r, a[r]] : a[r]);
                return l
            }
        }
    }, function (t, n) {
        var r = t.exports = {version: "2.6.9"};
        "number" == typeof __e && (__e = r)
    }, function (t, n) {
        t.exports = function (t) {
            try {
                return !!t()
            } catch (t) {
                return !0
            }
        }
    }, function (t, n, r) {
        "use strict";
        t.exports = function (t, n) {
            return function () {
                for (var r = new Array(arguments.length), e = 0; e < r.length; e++) r[e] = arguments[e];
                return t.apply(n, r)
            }
        }
    }, function (t, n, r) {
        "use strict";
        t.exports = function (t, n) {
            return function () {
                for (var r = new Array(arguments.length), e = 0; e < r.length; e++) r[e] = arguments[e];
                return t.apply(n, r)
            }
        }
    }, function (t, n, r) {
        "use strict";
        var e = r(13);

        function o(t) {
            return encodeURIComponent(t).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
        }

        t.exports = function (t, n, r) {
            if (!n) return t;
            var i;
            if (r) i = r(n); else if (e.isURLSearchParams(n)) i = n.toString(); else {
                var u = [];
                e.forEach(n, (function (t, n) {
                    null != t && (e.isArray(t) ? n += "[]" : t = [t], e.forEach(t, (function (t) {
                        e.isDate(t) ? t = t.toISOString() : e.isObject(t) && (t = JSON.stringify(t)), u.push(o(n) + "=" + o(t))
                    })))
                })), i = u.join("&")
            }
            if (i) {
                var a = t.indexOf("#");
                -1 !== a && (t = t.slice(0, a)), t += (-1 === t.indexOf("?") ? "?" : "&") + i
            }
            return t
        }
    }, function (t, n, r) {
        "use strict";
        t.exports = function (t) {
            return !(!t || !t.__CANCEL__)
        }
    }, function (t, n, r) {
        "use strict";
        var e = r(13), o = r(335), i = {"Content-Type": "application/x-www-form-urlencoded"};

        function u(t, n) {
            !e.isUndefined(t) && e.isUndefined(t["Content-Type"]) && (t["Content-Type"] = n)
        }

        var a, c = {
            adapter: ("undefined" != typeof process && "[object process]" === Object.prototype.toString.call(process) ? a = r(128) : "undefined" != typeof XMLHttpRequest && (a = r(128)), a),
            transformRequest: [function (t, n) {
                return o(n, "Accept"), o(n, "Content-Type"), e.isFormData(t) || e.isArrayBuffer(t) || e.isBuffer(t) || e.isStream(t) || e.isFile(t) || e.isBlob(t) ? t : e.isArrayBufferView(t) ? t.buffer : e.isURLSearchParams(t) ? (u(n, "application/x-www-form-urlencoded;charset=utf-8"), t.toString()) : e.isObject(t) ? (u(n, "application/json;charset=utf-8"), JSON.stringify(t)) : t
            }],
            transformResponse: [function (t) {
                if ("string" == typeof t) try {
                    t = JSON.parse(t)
                } catch (t) {
                }
                return t
            }],
            timeout: 0,
            xsrfCookieName: "XSRF-TOKEN",
            xsrfHeaderName: "X-XSRF-TOKEN",
            maxContentLength: -1,
            validateStatus: function (t) {
                return t >= 200 && t < 300
            }
        };
        c.headers = {common: {Accept: "application/json, text/plain, */*"}}, e.forEach(["delete", "get", "head"], (function (t) {
            c.headers[t] = {}
        })), e.forEach(["post", "put", "patch"], (function (t) {
            c.headers[t] = e.merge(i)
        })), t.exports = c
    }, function (t, n, r) {
        "use strict";
        var e = r(13), o = r(336), i = r(125), u = r(338), a = r(339), c = r(129);
        t.exports = function (t) {
            return new Promise((function (n, f) {
                var s = t.data, l = t.headers;
                e.isFormData(s) && delete l["Content-Type"];
                var h = new XMLHttpRequest;
                if (t.auth) {
                    var p = t.auth.username || "", v = t.auth.password || "";
                    l.Authorization = "Basic " + btoa(p + ":" + v)
                }
                if (h.open(t.method.toUpperCase(), i(t.url, t.params, t.paramsSerializer), !0), h.timeout = t.timeout, h.onreadystatechange = function () {
                    if (h && 4 === h.readyState && (0 !== h.status || h.responseURL && 0 === h.responseURL.indexOf("file:"))) {
                        var r = "getAllResponseHeaders" in h ? u(h.getAllResponseHeaders()) : null, e = {
                            data: t.responseType && "text" !== t.responseType ? h.response : h.responseText,
                            status: h.status,
                            statusText: h.statusText,
                            headers: r,
                            config: t,
                            request: h
                        };
                        o(n, f, e), h = null
                    }
                }, h.onabort = function () {
                    h && (f(c("Request aborted", t, "ECONNABORTED", h)), h = null)
                }, h.onerror = function () {
                    f(c("Network Error", t, null, h)), h = null
                }, h.ontimeout = function () {
                    f(c("timeout of " + t.timeout + "ms exceeded", t, "ECONNABORTED", h)), h = null
                }, e.isStandardBrowserEnv()) {
                    var d = r(340),
                        y = (t.withCredentials || a(t.url)) && t.xsrfCookieName ? d.read(t.xsrfCookieName) : void 0;
                    y && (l[t.xsrfHeaderName] = y)
                }
                if ("setRequestHeader" in h && e.forEach(l, (function (t, n) {
                    void 0 === s && "content-type" === n.toLowerCase() ? delete l[n] : h.setRequestHeader(n, t)
                })), t.withCredentials && (h.withCredentials = !0), t.responseType) try {
                    h.responseType = t.responseType
                } catch (n) {
                    if ("json" !== t.responseType) throw n
                }
                "function" == typeof t.onDownloadProgress && h.addEventListener("progress", t.onDownloadProgress), "function" == typeof t.onUploadProgress && h.upload && h.upload.addEventListener("progress", t.onUploadProgress), t.cancelToken && t.cancelToken.promise.then((function (t) {
                    h && (h.abort(), f(t), h = null)
                })), void 0 === s && (s = null), h.send(s)
            }))
        }
    }, function (t, n, r) {
        "use strict";
        var e = r(337);
        t.exports = function (t, n, r, o, i) {
            var u = new Error(t);
            return e(u, n, r, o, i)
        }
    }, function (t, n, r) {
        "use strict";
        var e = r(13);
        t.exports = function (t, n) {
            n = n || {};
            var r = {};
            return e.forEach(["url", "method", "params", "data"], (function (t) {
                void 0 !== n[t] && (r[t] = n[t])
            })), e.forEach(["headers", "auth", "proxy"], (function (o) {
                e.isObject(n[o]) ? r[o] = e.deepMerge(t[o], n[o]) : void 0 !== n[o] ? r[o] = n[o] : e.isObject(t[o]) ? r[o] = e.deepMerge(t[o]) : void 0 !== t[o] && (r[o] = t[o])
            })), e.forEach(["baseURL", "transformRequest", "transformResponse", "paramsSerializer", "timeout", "withCredentials", "adapter", "responseType", "xsrfCookieName", "xsrfHeaderName", "onUploadProgress", "onDownloadProgress", "maxContentLength", "validateStatus", "maxRedirects", "httpAgent", "httpsAgent", "cancelToken", "socketPath"], (function (e) {
                void 0 !== n[e] ? r[e] = n[e] : void 0 !== t[e] && (r[e] = t[e])
            })), r
        }
    }, function (t, n, r) {
        "use strict";

        function e(t) {
            this.message = t
        }

        e.prototype.toString = function () {
            return "Cancel" + (this.message ? ": " + this.message : "")
        }, e.prototype.__CANCEL__ = !0, t.exports = e
    }, function (t, n, r) {
        "use strict";
        t.exports = {baseUrl: "https://api.deepai.org"}
    }, function (t, n, r) {
        r(134), t.exports = r(320)
    }, function (t, n, r) {
        "use strict";
        r(135);
        var e, o = (e = r(307)) && e.__esModule ? e : {default: e};
        o.default._babelPolyfill && "undefined" != typeof console && console.warn && console.warn("@babel/polyfill is loaded more than once on this page. This is probably not desirable/intended and may have consequences if different versions of the polyfills are applied sequentially. If you do need to load the polyfill more than once, use @babel/polyfill/noConflict instead to bypass the warning."), o.default._babelPolyfill = !0
    }, function (t, n, r) {
        "use strict";
        r(136), r(279), r(281), r(284), r(286), r(288), r(290), r(292), r(294), r(296), r(298), r(300), r(302), r(306)
    }, function (t, n, r) {
        r(137), r(140), r(141), r(142), r(143), r(144), r(145), r(146), r(147), r(148), r(149), r(150), r(151), r(152), r(153), r(154), r(155), r(156), r(157), r(158), r(159), r(160), r(161), r(162), r(163), r(164), r(165), r(166), r(167), r(168), r(169), r(170), r(171), r(172), r(173), r(174), r(175), r(176), r(177), r(178), r(179), r(180), r(181), r(183), r(184), r(185), r(186), r(187), r(188), r(189), r(190), r(191), r(192), r(193), r(194), r(195), r(196), r(197), r(198), r(199), r(200), r(201), r(202), r(203), r(204), r(205), r(206), r(207), r(208), r(209), r(210), r(211), r(212), r(213), r(214), r(215), r(216), r(218), r(219), r(221), r(222), r(223), r(224), r(225), r(226), r(227), r(229), r(230), r(231), r(232), r(233), r(234), r(235), r(236), r(237), r(238), r(239), r(240), r(241), r(81), r(242),r(110),r(243),r(111),r(244),r(245),r(246),r(247),r(112),r(250),r(251),r(252),r(253),r(254),r(255),r(256),r(257),r(258),r(259),r(260),r(261),r(262),r(263),r(264),r(265),r(266),r(267),r(268),r(269),r(270),r(271),r(272),r(273),r(274),r(275),r(276),r(277),r(278),t.exports = r(7)
    }, function (t, n, r) {
        "use strict";
        var e = r(1), o = r(14), i = r(8), u = r(0), a = r(11), c = r(28).KEY, f = r(2), s = r(49), l = r(39),
            h = r(30), p = r(5), v = r(62), d = r(91), y = r(139), g = r(52), m = r(3), b = r(4), w = r(10), x = r(16),
            S = r(27), _ = r(29), E = r(34), A = r(94), P = r(21), O = r(51), R = r(9), T = r(32), j = P.f, M = R.f,
            I = A.f, F = e.Symbol, N = e.JSON, k = N && N.stringify, L = p("_hidden"), C = p("toPrimitive"),
            B = {}.propertyIsEnumerable, U = s("symbol-registry"), D = s("symbols"), Y = s("op-symbols"),
            W = Object.prototype, V = "function" == typeof F && !!O.f, z = e.QObject,
            G = !z || !z.prototype || !z.prototype.findChild, q = i && f((function () {
                return 7 != E(M({}, "a", {
                    get: function () {
                        return M(this, "a", {value: 7}).a
                    }
                })).a
            })) ? function (t, n, r) {
                var e = j(W, n);
                e && delete W[n], M(t, n, r), e && t !== W && M(W, n, e)
            } : M, H = function (t) {
                var n = D[t] = E(F.prototype);
                return n._k = t, n
            }, J = V && "symbol" == typeof F.iterator ? function (t) {
                return "symbol" == typeof t
            } : function (t) {
                return t instanceof F
            }, X = function (t, n, r) {
                return t === W && X(Y, n, r), m(t), n = S(n, !0), m(r), o(D, n) ? (r.enumerable ? (o(t, L) && t[L][n] && (t[L][n] = !1), r = E(r, {enumerable: _(0, !1)})) : (o(t, L) || M(t, L, _(1, {})), t[L][n] = !0), q(t, n, r)) : M(t, n, r)
            }, $ = function (t, n) {
                m(t);
                for (var r, e = y(n = x(n)), o = 0, i = e.length; i > o;) X(t, r = e[o++], n[r]);
                return t
            }, K = function (t) {
                var n = B.call(this, t = S(t, !0));
                return !(this === W && o(D, t) && !o(Y, t)) && (!(n || !o(this, t) || !o(D, t) || o(this, L) && this[L][t]) || n)
            }, Z = function (t, n) {
                if (t = x(t), n = S(n, !0), t !== W || !o(D, n) || o(Y, n)) {
                    var r = j(t, n);
                    return !r || !o(D, n) || o(t, L) && t[L][n] || (r.enumerable = !0), r
                }
            }, Q = function (t) {
                for (var n, r = I(x(t)), e = [], i = 0; r.length > i;) o(D, n = r[i++]) || n == L || n == c || e.push(n);
                return e
            }, tt = function (t) {
                for (var n, r = t === W, e = I(r ? Y : x(t)), i = [], u = 0; e.length > u;) !o(D, n = e[u++]) || r && !o(W, n) || i.push(D[n]);
                return i
            };
        V || (a((F = function () {
            if (this instanceof F) throw TypeError("Symbol is not a constructor!");
            var t = h(arguments.length > 0 ? arguments[0] : void 0), n = function (r) {
                this === W && n.call(Y, r), o(this, L) && o(this[L], t) && (this[L][t] = !1), q(this, t, _(1, r))
            };
            return i && G && q(W, t, {configurable: !0, set: n}), H(t)
        }).prototype, "toString", (function () {
            return this._k
        })), P.f = Z, R.f = X, r(35).f = A.f = Q, r(46).f = K, O.f = tt, i && !r(31) && a(W, "propertyIsEnumerable", K, !0), v.f = function (t) {
            return H(p(t))
        }), u(u.G + u.W + u.F * !V, {Symbol: F});
        for (var nt = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), rt = 0; nt.length > rt;) p(nt[rt++]);
        for (var et = T(p.store), ot = 0; et.length > ot;) d(et[ot++]);
        u(u.S + u.F * !V, "Symbol", {
            for: function (t) {
                return o(U, t += "") ? U[t] : U[t] = F(t)
            }, keyFor: function (t) {
                if (!J(t)) throw TypeError(t + " is not a symbol!");
                for (var n in U) if (U[n] === t) return n
            }, useSetter: function () {
                G = !0
            }, useSimple: function () {
                G = !1
            }
        }), u(u.S + u.F * !V, "Object", {
            create: function (t, n) {
                return void 0 === n ? E(t) : $(E(t), n)
            },
            defineProperty: X,
            defineProperties: $,
            getOwnPropertyDescriptor: Z,
            getOwnPropertyNames: Q,
            getOwnPropertySymbols: tt
        });
        var it = f((function () {
            O.f(1)
        }));
        u(u.S + u.F * it, "Object", {
            getOwnPropertySymbols: function (t) {
                return O.f(w(t))
            }
        }), N && u(u.S + u.F * (!V || f((function () {
            var t = F();
            return "[null]" != k([t]) || "{}" != k({a: t}) || "{}" != k(Object(t))
        }))), "JSON", {
            stringify: function (t) {
                for (var n, r, e = [t], o = 1; arguments.length > o;) e.push(arguments[o++]);
                if (r = n = e[1], (b(n) || void 0 !== t) && !J(t)) return g(n) || (n = function (t, n) {
                    if ("function" == typeof r && (n = r.call(this, t, n)), !J(n)) return n
                }), e[1] = n, k.apply(N, e)
            }
        }), F.prototype[C] || r(15)(F.prototype, C, F.prototype.valueOf), l(F, "Symbol"), l(Math, "Math", !0), l(e.JSON, "JSON", !0)
    }, function (t, n, r) {
        t.exports = r(49)("native-function-to-string", Function.toString)
    }, function (t, n, r) {
        var e = r(32), o = r(51), i = r(46);
        t.exports = function (t) {
            var n = e(t), r = o.f;
            if (r) for (var u, a = r(t), c = i.f, f = 0; a.length > f;) c.call(t, u = a[f++]) && n.push(u);
            return n
        }
    }, function (t, n, r) {
        var e = r(0);
        e(e.S, "Object", {create: r(34)})
    }, function (t, n, r) {
        var e = r(0);
        e(e.S + e.F * !r(8), "Object", {defineProperty: r(9).f})
    }, function (t, n, r) {
        var e = r(0);
        e(e.S + e.F * !r(8), "Object", {defineProperties: r(93)})
    }, function (t, n, r) {
        var e = r(16), o = r(21).f;
        r(22)("getOwnPropertyDescriptor", (function () {
            return function (t, n) {
                return o(e(t), n)
            }
        }))
    }, function (t, n, r) {
        var e = r(10), o = r(36);
        r(22)("getPrototypeOf", (function () {
            return function (t) {
                return o(e(t))
            }
        }))
    }, function (t, n, r) {
        var e = r(10), o = r(32);
        r(22)("keys", (function () {
            return function (t) {
                return o(e(t))
            }
        }))
    }, function (t, n, r) {
        r(22)("getOwnPropertyNames", (function () {
            return r(94).f
        }))
    }, function (t, n, r) {
        var e = r(4), o = r(28).onFreeze;
        r(22)("freeze", (function (t) {
            return function (n) {
                return t && e(n) ? t(o(n)) : n
            }
        }))
    }, function (t, n, r) {
        var e = r(4), o = r(28).onFreeze;
        r(22)("seal", (function (t) {
            return function (n) {
                return t && e(n) ? t(o(n)) : n
            }
        }))
    }, function (t, n, r) {
        var e = r(4), o = r(28).onFreeze;
        r(22)("preventExtensions", (function (t) {
            return function (n) {
                return t && e(n) ? t(o(n)) : n
            }
        }))
    }, function (t, n, r) {
        var e = r(4);
        r(22)("isFrozen", (function (t) {
            return function (n) {
                return !e(n) || !!t && t(n)
            }
        }))
    }, function (t, n, r) {
        var e = r(4);
        r(22)("isSealed", (function (t) {
            return function (n) {
                return !e(n) || !!t && t(n)
            }
        }))
    }, function (t, n, r) {
        var e = r(4);
        r(22)("isExtensible", (function (t) {
            return function (n) {
                return !!e(n) && (!t || t(n))
            }
        }))
    }, function (t, n, r) {
        var e = r(0);
        e(e.S + e.F, "Object", {assign: r(95)})
    }, function (t, n, r) {
        var e = r(0);
        e(e.S, "Object", {is: r(96)})
    }, function (t, n, r) {
        var e = r(0);
        e(e.S, "Object", {setPrototypeOf: r(66).set})
    }, function (t, n, r) {
        "use strict";
        var e = r(47), o = {};
        o[r(5)("toStringTag")] = "z", o + "" != "[object z]" && r(11)(Object.prototype, "toString", (function () {
            return "[object " + e(this) + "]"
        }), !0)
    }, function (t, n, r) {
        var e = r(0);
        e(e.P, "Function", {bind: r(97)})
    }, function (t, n, r) {
        var e = r(9).f, o = Function.prototype, i = /^\s*function ([^ (]*)/;
        "name" in o || r(8) && e(o, "name", {
            configurable: !0, get: function () {
                try {
                    return ("" + this).match(i)[1]
                } catch (t) {
                    return ""
                }
            }
        })
    }, function (t, n, r) {
        "use strict";
        var e = r(4), o = r(36), i = r(5)("hasInstance"), u = Function.prototype;
        i in u || r(9).f(u, i, {
            value: function (t) {
                if ("function" != typeof this || !e(t)) return !1;
                if (!e(this.prototype)) return t instanceof this;
                for (; t = o(t);) if (this.prototype === t) return !0;
                return !1
            }
        })
    }, function (t, n, r) {
        var e = r(0), o = r(99);
        e(e.G + e.F * (parseInt != o), {parseInt: o})
    }, function (t, n, r) {
        var e = r(0), o = r(100);
        e(e.G + e.F * (parseFloat != o), {parseFloat: o})
    }, function (t, n, r) {
        "use strict";
        var e = r(1), o = r(14), i = r(24), u = r(68), a = r(27), c = r(2), f = r(35).f, s = r(21).f, l = r(9).f,
            h = r(40).trim, p = e.Number, v = p, d = p.prototype, y = "Number" == i(r(34)(d)),
            g = "trim" in String.prototype, m = function (t) {
                var n = a(t, !1);
                if ("string" == typeof n && n.length > 2) {
                    var r, e, o, i = (n = g ? n.trim() : h(n, 3)).charCodeAt(0);
                    if (43 === i || 45 === i) {
                        if (88 === (r = n.charCodeAt(2)) || 120 === r) return NaN
                    } else if (48 === i) {
                        switch (n.charCodeAt(1)) {
                            case 66:
                            case 98:
                                e = 2, o = 49;
                                break;
                            case 79:
                            case 111:
                                e = 8, o = 55;
                                break;
                            default:
                                return +n
                        }
                        for (var u, c = n.slice(2), f = 0, s = c.length; f < s; f++) if ((u = c.charCodeAt(f)) < 48 || u > o) return NaN;
                        return parseInt(c, e)
                    }
                }
                return +n
            };
        if (!p(" 0o1") || !p("0b1") || p("+0x1")) {
            p = function (t) {
                var n = arguments.length < 1 ? 0 : t, r = this;
                return r instanceof p && (y ? c((function () {
                    d.valueOf.call(r)
                })) : "Number" != i(r)) ? u(new v(m(n)), r, p) : m(n)
            };
            for (var b, w = r(8) ? f(v) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","), x = 0; w.length > x; x++) o(v, b = w[x]) && !o(p, b) && l(p, b, s(v, b));
            p.prototype = d, d.constructor = p, r(11)(e, "Number", p)
        }
    }, function (t, n, r) {
        "use strict";
        var e = r(0), o = r(20), i = r(101), u = r(69), a = 1..toFixed, c = Math.floor, f = [0, 0, 0, 0, 0, 0],
            s = "Number.toFixed: incorrect invocation!", l = function (t, n) {
                for (var r = -1, e = n; ++r < 6;) e += t * f[r], f[r] = e % 1e7, e = c(e / 1e7)
            }, h = function (t) {
                for (var n = 6, r = 0; --n >= 0;) r += f[n], f[n] = c(r / t), r = r % t * 1e7
            }, p = function () {
                for (var t = 6, n = ""; --t >= 0;) if ("" !== n || 0 === t || 0 !== f[t]) {
                    var r = String(f[t]);
                    n = "" === n ? r : n + u.call("0", 7 - r.length) + r
                }
                return n
            }, v = function (t, n, r) {
                return 0 === n ? r : n % 2 == 1 ? v(t, n - 1, r * t) : v(t * t, n / 2, r)
            };
        e(e.P + e.F * (!!a && ("0.000" !== 8e-5.toFixed(3) || "1" !== .9.toFixed(0) || "1.25" !== 1.255.toFixed(2) || "1000000000000000128" !== (0xde0b6b3a7640080).toFixed(0)) || !r(2)((function () {
            a.call({})
        }))), "Number", {
            toFixed: function (t) {
                var n, r, e, a, c = i(this, s), f = o(t), d = "", y = "0";
                if (f < 0 || f > 20) throw RangeError(s);
                if (c != c) return "NaN";
                if (c <= -1e21 || c >= 1e21) return String(c);
                if (c < 0 && (d = "-", c = -c), c > 1e-21) if (r = (n = function (t) {
                    for (var n = 0, r = t; r >= 4096;) n += 12, r /= 4096;
                    for (; r >= 2;) n += 1, r /= 2;
                    return n
                }(c * v(2, 69, 1)) - 69) < 0 ? c * v(2, -n, 1) : c / v(2, n, 1), r *= 4503599627370496, (n = 52 - n) > 0) {
                    for (l(0, r), e = f; e >= 7;) l(1e7, 0), e -= 7;
                    for (l(v(10, e, 1), 0), e = n - 1; e >= 23;) h(1 << 23), e -= 23;
                    h(1 << e), l(1, 1), h(2), y = p()
                } else l(0, r), l(1 << -n, 0), y = p() + u.call("0", f);
                return y = f > 0 ? d + ((a = y.length) <= f ? "0." + u.call("0", f - a) + y : y.slice(0, a - f) + "." + y.slice(a - f)) : d + y
            }
        })
    }, function (t, n, r) {
        "use strict";
        var e = r(0), o = r(2), i = r(101), u = 1..toPrecision;
        e(e.P + e.F * (o((function () {
            return "1" !== u.call(1, void 0)
        })) || !o((function () {
            u.call({})
        }))), "Number", {
            toPrecision: function (t) {
                var n = i(this, "Number#toPrecision: incorrect invocation!");
                return void 0 === t ? u.call(n) : u.call(n, t)
            }
        })
    }, function (t, n, r) {
        var e = r(0);
        e(e.S, "Number", {EPSILON: Math.pow(2, -52)})
    }, function (t, n, r) {
        var e = r(0), o = r(1).isFinite;
        e(e.S, "Number", {
            isFinite: function (t) {
                return "number" == typeof t && o(t)
            }
        })
    }, function (t, n, r) {
        var e = r(0);
        e(e.S, "Number", {isInteger: r(102)})
    }, function (t, n, r) {
        var e = r(0);
        e(e.S, "Number", {
            isNaN: function (t) {
                return t != t
            }
        })
    }, function (t, n, r) {
        var e = r(0), o = r(102), i = Math.abs;
        e(e.S, "Number", {
            isSafeInteger: function (t) {
                return o(t) && i(t) <= 9007199254740991
            }
        })
    }, function (t, n, r) {
        var e = r(0);
        e(e.S, "Number", {MAX_SAFE_INTEGER: 9007199254740991})
    }, function (t, n, r) {
        var e = r(0);
        e(e.S, "Number", {MIN_SAFE_INTEGER: -9007199254740991})
    }, function (t, n, r) {
        var e = r(0), o = r(100);
        e(e.S + e.F * (Number.parseFloat != o), "Number", {parseFloat: o})
    }, function (t, n, r) {
        var e = r(0), o = r(99);
        e(e.S + e.F * (Number.parseInt != o), "Number", {parseInt: o})
    }, function (t, n, r) {
        var e = r(0), o = r(103), i = Math.sqrt, u = Math.acosh;
        e(e.S + e.F * !(u && 710 == Math.floor(u(Number.MAX_VALUE)) && u(1 / 0) == 1 / 0), "Math", {
            acosh: function (t) {
                return (t = +t) < 1 ? NaN : t > 94906265.62425156 ? Math.log(t) + Math.LN2 : o(t - 1 + i(t - 1) * i(t + 1))
            }
        })
    }, function (t, n, r) {
        var e = r(0), o = Math.asinh;
        e(e.S + e.F * !(o && 1 / o(0) > 0), "Math", {
            asinh: function t(n) {
                return isFinite(n = +n) && 0 != n ? n < 0 ? -t(-n) : Math.log(n + Math.sqrt(n * n + 1)) : n
            }
        })
    }, function (t, n, r) {
        var e = r(0), o = Math.atanh;
        e(e.S + e.F * !(o && 1 / o(-0) < 0), "Math", {
            atanh: function (t) {
                return 0 == (t = +t) ? t : Math.log((1 + t) / (1 - t)) / 2
            }
        })
    }, function (t, n, r) {
        var e = r(0), o = r(70);
        e(e.S, "Math", {
            cbrt: function (t) {
                return o(t = +t) * Math.pow(Math.abs(t), 1 / 3)
            }
        })
    }, function (t, n, r) {
        var e = r(0);
        e(e.S, "Math", {
            clz32: function (t) {
                return (t >>>= 0) ? 31 - Math.floor(Math.log(t + .5) * Math.LOG2E) : 32
            }
        })
    }, function (t, n, r) {
        var e = r(0), o = Math.exp;
        e(e.S, "Math", {
            cosh: function (t) {
                return (o(t = +t) + o(-t)) / 2
            }
        })
    }, function (t, n, r) {
        var e = r(0), o = r(71);
        e(e.S + e.F * (o != Math.expm1), "Math", {expm1: o})
    }, function (t, n, r) {
        var e = r(0);
        e(e.S, "Math", {fround: r(182)})
    }, function (t, n, r) {
        var e = r(70), o = Math.pow, i = o(2, -52), u = o(2, -23), a = o(2, 127) * (2 - u), c = o(2, -126);
        t.exports = Math.fround || function (t) {
            var n, r, o = Math.abs(t), f = e(t);
            return o < c ? f * (o / c / u + 1 / i - 1 / i) * c * u : (r = (n = (1 + u / i) * o) - (n - o)) > a || r != r ? f * (1 / 0) : f * r
        }
    }, function (t, n, r) {
        var e = r(0), o = Math.abs;
        e(e.S, "Math", {
            hypot: function (t, n) {
                for (var r, e, i = 0, u = 0, a = arguments.length, c = 0; u < a;) c < (r = o(arguments[u++])) ? (i = i * (e = c / r) * e + 1, c = r) : i += r > 0 ? (e = r / c) * e : r;
                return c === 1 / 0 ? 1 / 0 : c * Math.sqrt(i)
            }
        })
    }, function (t, n, r) {
        var e = r(0), o = Math.imul;
        e(e.S + e.F * r(2)((function () {
            return -5 != o(4294967295, 5) || 2 != o.length
        })), "Math", {
            imul: function (t, n) {
                var r = +t, e = +n, o = 65535 & r, i = 65535 & e;
                return 0 | o * i + ((65535 & r >>> 16) * i + o * (65535 & e >>> 16) << 16 >>> 0)
            }
        })
    }, function (t, n, r) {
        var e = r(0);
        e(e.S, "Math", {
            log10: function (t) {
                return Math.log(t) * Math.LOG10E
            }
        })
    }, function (t, n, r) {
        var e = r(0);
        e(e.S, "Math", {log1p: r(103)})
    }, function (t, n, r) {
        var e = r(0);
        e(e.S, "Math", {
            log2: function (t) {
                return Math.log(t) / Math.LN2
            }
        })
    }, function (t, n, r) {
        var e = r(0);
        e(e.S, "Math", {sign: r(70)})
    }, function (t, n, r) {
        var e = r(0), o = r(71), i = Math.exp;
        e(e.S + e.F * r(2)((function () {
            return -2e-17 != !Math.sinh(-2e-17)
        })), "Math", {
            sinh: function (t) {
                return Math.abs(t = +t) < 1 ? (o(t) - o(-t)) / 2 : (i(t - 1) - i(-t - 1)) * (Math.E / 2)
            }
        })
    }, function (t, n, r) {
        var e = r(0), o = r(71), i = Math.exp;
        e(e.S, "Math", {
            tanh: function (t) {
                var n = o(t = +t), r = o(-t);
                return n == 1 / 0 ? 1 : r == 1 / 0 ? -1 : (n - r) / (i(t) + i(-t))
            }
        })
    }, function (t, n, r) {
        var e = r(0);
        e(e.S, "Math", {
            trunc: function (t) {
                return (t > 0 ? Math.floor : Math.ceil)(t)
            }
        })
    }, function (t, n, r) {
        var e = r(0), o = r(33), i = String.fromCharCode, u = String.fromCodePoint;
        e(e.S + e.F * (!!u && 1 != u.length), "String", {
            fromCodePoint: function (t) {
                for (var n, r = [], e = arguments.length, u = 0; e > u;) {
                    if (n = +arguments[u++], o(n, 1114111) !== n) throw RangeError(n + " is not a valid code point");
                    r.push(n < 65536 ? i(n) : i(55296 + ((n -= 65536) >> 10), n % 1024 + 56320))
                }
                return r.join("")
            }
        })
    }, function (t, n, r) {
        var e = r(0), o = r(16), i = r(6);
        e(e.S, "String", {
            raw: function (t) {
                for (var n = o(t.raw), r = i(n.length), e = arguments.length, u = [], a = 0; r > a;) u.push(String(n[a++])), a < e && u.push(String(arguments[a]));
                return u.join("")
            }
        })
    }, function (t, n, r) {
        "use strict";
        r(40)("trim", (function (t) {
            return function () {
                return t(this, 3)
            }
        }))
    }, function (t, n, r) {
        "use strict";
        var e = r(72)(!0);
        r(73)(String, "String", (function (t) {
            this._t = String(t), this._i = 0
        }), (function () {
            var t, n = this._t, r = this._i;
            return r >= n.length ? {value: void 0, done: !0} : (t = e(n, r), this._i += t.length, {value: t, done: !1})
        }))
    }, function (t, n, r) {
        "use strict";
        var e = r(0), o = r(72)(!1);
        e(e.P, "String", {
            codePointAt: function (t) {
                return o(this, t)
            }
        })
    }, function (t, n, r) {
        "use strict";
        var e = r(0), o = r(6), i = r(74), u = "".endsWith;
        e(e.P + e.F * r(76)("endsWith"), "String", {
            endsWith: function (t) {
                var n = i(this, t, "endsWith"), r = arguments.length > 1 ? arguments[1] : void 0, e = o(n.length),
                    a = void 0 === r ? e : Math.min(o(r), e), c = String(t);
                return u ? u.call(n, c, a) : n.slice(a - c.length, a) === c
            }
        })
    }, function (t, n, r) {
        "use strict";
        var e = r(0), o = r(74);
        e(e.P + e.F * r(76)("includes"), "String", {
            includes: function (t) {
                return !!~o(this, t, "includes").indexOf(t, arguments.length > 1 ? arguments[1] : void 0)
            }
        })
    }, function (t, n, r) {
        var e = r(0);
        e(e.P, "String", {repeat: r(69)})
    }, function (t, n, r) {
        "use strict";
        var e = r(0), o = r(6), i = r(74), u = "".startsWith;
        e(e.P + e.F * r(76)("startsWith"), "String", {
            startsWith: function (t) {
                var n = i(this, t, "startsWith"),
                    r = o(Math.min(arguments.length > 1 ? arguments[1] : void 0, n.length)), e = String(t);
                return u ? u.call(n, e, r) : n.slice(r, r + e.length) === e
            }
        })
    }, function (t, n, r) {
        "use strict";
        r(12)("anchor", (function (t) {
            return function (n) {
                return t(this, "a", "name", n)
            }
        }))
    }, function (t, n, r) {
        "use strict";
        r(12)("big", (function (t) {
            return function () {
                return t(this, "big", "", "")
            }
        }))
    }, function (t, n, r) {
        "use strict";
        r(12)("blink", (function (t) {
            return function () {
                return t(this, "blink", "", "")
            }
        }))
    }, function (t, n, r) {
        "use strict";
        r(12)("bold", (function (t) {
            return function () {
                return t(this, "b", "", "")
            }
        }))
    }, function (t, n, r) {
        "use strict";
        r(12)("fixed", (function (t) {
            return function () {
                return t(this, "tt", "", "")
            }
        }))
    }, function (t, n, r) {
        "use strict";
        r(12)("fontcolor", (function (t) {
            return function (n) {
                return t(this, "font", "color", n)
            }
        }))
    }, function (t, n, r) {
        "use strict";
        r(12)("fontsize", (function (t) {
            return function (n) {
                return t(this, "font", "size", n)
            }
        }))
    }, function (t, n, r) {
        "use strict";
        r(12)("italics", (function (t) {
            return function () {
                return t(this, "i", "", "")
            }
        }))
    }, function (t, n, r) {
        "use strict";
        r(12)("link", (function (t) {
            return function (n) {
                return t(this, "a", "href", n)
            }
        }))
    }, function (t, n, r) {
        "use strict";
        r(12)("small", (function (t) {
            return function () {
                return t(this, "small", "", "")
            }
        }))
    }, function (t, n, r) {
        "use strict";
        r(12)("strike", (function (t) {
            return function () {
                return t(this, "strike", "", "")
            }
        }))
    }, function (t, n, r) {
        "use strict";
        r(12)("sub", (function (t) {
            return function () {
                return t(this, "sub", "", "")
            }
        }))
    }, function (t, n, r) {
        "use strict";
        r(12)("sup", (function (t) {
            return function () {
                return t(this, "sup", "", "")
            }
        }))
    }, function (t, n, r) {
        var e = r(0);
        e(e.S, "Date", {
            now: function () {
                return (new Date).getTime()
            }
        })
    }, function (t, n, r) {
        "use strict";
        var e = r(0), o = r(10), i = r(27);
        e(e.P + e.F * r(2)((function () {
            return null !== new Date(NaN).toJSON() || 1 !== Date.prototype.toJSON.call({
                toISOString: function () {
                    return 1
                }
            })
        })), "Date", {
            toJSON: function (t) {
                var n = o(this), r = i(n);
                return "number" != typeof r || isFinite(r) ? n.toISOString() : null
            }
        })
    }, function (t, n, r) {
        var e = r(0), o = r(217);
        e(e.P + e.F * (Date.prototype.toISOString !== o), "Date", {toISOString: o})
    }, function (t, n, r) {
        "use strict";
        var e = r(2), o = Date.prototype.getTime, i = Date.prototype.toISOString, u = function (t) {
            return t > 9 ? t : "0" + t
        };
        t.exports = e((function () {
            return "0385-07-25T07:06:39.999Z" != i.call(new Date(-5e13 - 1))
        })) || !e((function () {
            i.call(new Date(NaN))
        })) ? function () {
            if (!isFinite(o.call(this))) throw RangeError("Invalid time value");
            var t = this, n = t.getUTCFullYear(), r = t.getUTCMilliseconds(), e = n < 0 ? "-" : n > 9999 ? "+" : "";
            return e + ("00000" + Math.abs(n)).slice(e ? -6 : -4) + "-" + u(t.getUTCMonth() + 1) + "-" + u(t.getUTCDate()) + "T" + u(t.getUTCHours()) + ":" + u(t.getUTCMinutes()) + ":" + u(t.getUTCSeconds()) + "." + (r > 99 ? r : "0" + u(r)) + "Z"
        } : i
    }, function (t, n, r) {
        var e = Date.prototype, o = e.toString, i = e.getTime;
        new Date(NaN) + "" != "Invalid Date" && r(11)(e, "toString", (function () {
            var t = i.call(this);
            return t == t ? o.call(this) : "Invalid Date"
        }))
    }, function (t, n, r) {
        var e = r(5)("toPrimitive"), o = Date.prototype;
        e in o || r(15)(o, e, r(220))
    }, function (t, n, r) {
        "use strict";
        var e = r(3), o = r(27);
        t.exports = function (t) {
            if ("string" !== t && "number" !== t && "default" !== t) throw TypeError("Incorrect hint");
            return o(e(this), "number" != t)
        }
    }, function (t, n, r) {
        var e = r(0);
        e(e.S, "Array", {isArray: r(52)})
    }, function (t, n, r) {
        "use strict";
        var e = r(18), o = r(0), i = r(10), u = r(105), a = r(77), c = r(6), f = r(78), s = r(79);
        o(o.S + o.F * !r(53)((function (t) {
            Array.from(t)
        })), "Array", {
            from: function (t) {
                var n, r, o, l, h = i(t), p = "function" == typeof this ? this : Array, v = arguments.length,
                    d = v > 1 ? arguments[1] : void 0, y = void 0 !== d, g = 0, m = s(h);
                if (y && (d = e(d, v > 2 ? arguments[2] : void 0, 2)), null == m || p == Array && a(m)) for (r = new p(n = c(h.length)); n > g; g++) f(r, g, y ? d(h[g], g) : h[g]); else for (l = m.call(h), r = new p; !(o = l.next()).done; g++) f(r, g, y ? u(l, d, [o.value, g], !0) : o.value);
                return r.length = g, r
            }
        })
    }, function (t, n, r) {
        "use strict";
        var e = r(0), o = r(78);
        e(e.S + e.F * r(2)((function () {
            function t() {
            }

            return !(Array.of.call(t) instanceof t)
        })), "Array", {
            of: function () {
                for (var t = 0, n = arguments.length, r = new ("function" == typeof this ? this : Array)(n); n > t;) o(r, t, arguments[t++]);
                return r.length = n, r
            }
        })
    }, function (t, n, r) {
        "use strict";
        var e = r(0), o = r(16), i = [].join;
        e(e.P + e.F * (r(45) != Object || !r(17)(i)), "Array", {
            join: function (t) {
                return i.call(o(this), void 0 === t ? "," : t)
            }
        })
    }, function (t, n, r) {
        "use strict";
        var e = r(0), o = r(65), i = r(24), u = r(33), a = r(6), c = [].slice;
        e(e.P + e.F * r(2)((function () {
            o && c.call(o)
        })), "Array", {
            slice: function (t, n) {
                var r = a(this.length), e = i(this);
                if (n = void 0 === n ? r : n, "Array" == e) return c.call(this, t, n);
                for (var o = u(t, r), f = u(n, r), s = a(f - o), l = new Array(s), h = 0; h < s; h++) l[h] = "String" == e ? this.charAt(o + h) : this[o + h];
                return l
            }
        })
    }, function (t, n, r) {
        "use strict";
        var e = r(0), o = r(19), i = r(10), u = r(2), a = [].sort, c = [1, 2, 3];
        e(e.P + e.F * (u((function () {
            c.sort(void 0)
        })) || !u((function () {
            c.sort(null)
        })) || !r(17)(a)), "Array", {
            sort: function (t) {
                return void 0 === t ? a.call(i(this)) : a.call(i(this), o(t))
            }
        })
    }, function (t, n, r) {
        "use strict";
        var e = r(0), o = r(23)(0), i = r(17)([].forEach, !0);
        e(e.P + e.F * !i, "Array", {
            forEach: function (t) {
                return o(this, t, arguments[1])
            }
        })
    }, function (t, n, r) {
        var e = r(4), o = r(52), i = r(5)("species");
        t.exports = function (t) {
            var n;
            return o(t) && ("function" != typeof (n = t.constructor) || n !== Array && !o(n.prototype) || (n = void 0), e(n) && null === (n = n[i]) && (n = void 0)), void 0 === n ? Array : n
        }
    }, function (t, n, r) {
        "use strict";
        var e = r(0), o = r(23)(1);
        e(e.P + e.F * !r(17)([].map, !0), "Array", {
            map: function (t) {
                return o(this, t, arguments[1])
            }
        })
    }, function (t, n, r) {
        "use strict";
        var e = r(0), o = r(23)(2);
        e(e.P + e.F * !r(17)([].filter, !0), "Array", {
            filter: function (t) {
                return o(this, t, arguments[1])
            }
        })
    }, function (t, n, r) {
        "use strict";
        var e = r(0), o = r(23)(3);
        e(e.P + e.F * !r(17)([].some, !0), "Array", {
            some: function (t) {
                return o(this, t, arguments[1])
            }
        })
    }, function (t, n, r) {
        "use strict";
        var e = r(0), o = r(23)(4);
        e(e.P + e.F * !r(17)([].every, !0), "Array", {
            every: function (t) {
                return o(this, t, arguments[1])
            }
        })
    }, function (t, n, r) {
        "use strict";
        var e = r(0), o = r(107);
        e(e.P + e.F * !r(17)([].reduce, !0), "Array", {
            reduce: function (t) {
                return o(this, t, arguments.length, arguments[1], !1)
            }
        })
    }, function (t, n, r) {
        "use strict";
        var e = r(0), o = r(107);
        e(e.P + e.F * !r(17)([].reduceRight, !0), "Array", {
            reduceRight: function (t) {
                return o(this, t, arguments.length, arguments[1], !0)
            }
        })
    }, function (t, n, r) {
        "use strict";
        var e = r(0), o = r(50)(!1), i = [].indexOf, u = !!i && 1 / [1].indexOf(1, -0) < 0;
        e(e.P + e.F * (u || !r(17)(i)), "Array", {
            indexOf: function (t) {
                return u ? i.apply(this, arguments) || 0 : o(this, t, arguments[1])
            }
        })
    }, function (t, n, r) {
        "use strict";
        var e = r(0), o = r(16), i = r(20), u = r(6), a = [].lastIndexOf, c = !!a && 1 / [1].lastIndexOf(1, -0) < 0;
        e(e.P + e.F * (c || !r(17)(a)), "Array", {
            lastIndexOf: function (t) {
                if (c) return a.apply(this, arguments) || 0;
                var n = o(this), r = u(n.length), e = r - 1;
                for (arguments.length > 1 && (e = Math.min(e, i(arguments[1]))), e < 0 && (e = r + e); e >= 0; e--) if (e in n && n[e] === t) return e || 0;
                return -1
            }
        })
    }, function (t, n, r) {
        var e = r(0);
        e(e.P, "Array", {copyWithin: r(108)}), r(37)("copyWithin")
    }, function (t, n, r) {
        var e = r(0);
        e(e.P, "Array", {fill: r(80)}), r(37)("fill")
    }, function (t, n, r) {
        "use strict";
        var e = r(0), o = r(23)(5), i = !0;
        "find" in [] && Array(1).find((function () {
            i = !1
        })), e(e.P + e.F * i, "Array", {
            find: function (t) {
                return o(this, t, arguments.length > 1 ? arguments[1] : void 0)
            }
        }), r(37)("find")
    }, function (t, n, r) {
        "use strict";
        var e = r(0), o = r(23)(6), i = "findIndex", u = !0;
        i in [] && Array(1)[i]((function () {
            u = !1
        })), e(e.P + e.F * u, "Array", {
            findIndex: function (t) {
                return o(this, t, arguments.length > 1 ? arguments[1] : void 0)
            }
        }), r(37)(i)
    }, function (t, n, r) {
        r(42)("Array")
    }, function (t, n, r) {
        var e = r(1), o = r(68), i = r(9).f, u = r(35).f, a = r(75), c = r(54), f = e.RegExp, s = f, l = f.prototype,
            h = /a/g, p = /a/g, v = new f(h) !== h;
        if (r(8) && (!v || r(2)((function () {
            return p[r(5)("match")] = !1, f(h) != h || f(p) == p || "/a/i" != f(h, "i")
        })))) {
            f = function (t, n) {
                var r = this instanceof f, e = a(t), i = void 0 === n;
                return !r && e && t.constructor === f && i ? t : o(v ? new s(e && !i ? t.source : t, n) : s((e = t instanceof f) ? t.source : t, e && i ? c.call(t) : n), r ? this : l, f)
            };
            for (var d = function (t) {
                t in f || i(f, t, {
                    configurable: !0, get: function () {
                        return s[t]
                    }, set: function (n) {
                        s[t] = n
                    }
                })
            }, y = u(s), g = 0; y.length > g;) d(y[g++]);
            l.constructor = f, f.prototype = l, r(11)(e, "RegExp", f)
        }
        r(42)("RegExp")
    }, function (t, n, r) {
        "use strict";
        r(111);
        var e = r(3), o = r(54), i = r(8), u = /./.toString, a = function (t) {
            r(11)(RegExp.prototype, "toString", t, !0)
        };
        r(2)((function () {
            return "/a/b" != u.call({source: "a", flags: "b"})
        })) ? a((function () {
            var t = e(this);
            return "/".concat(t.source, "/", "flags" in t ? t.flags : !i && t instanceof RegExp ? o.call(t) : void 0)
        })) : "toString" != u.name && a((function () {
            return u.call(this)
        }))
    }, function (t, n, r) {
        "use strict";
        var e = r(3), o = r(6), i = r(83), u = r(55);
        r(56)("match", 1, (function (t, n, r, a) {
            return [function (r) {
                var e = t(this), o = null == r ? void 0 : r[n];
                return void 0 !== o ? o.call(r, e) : new RegExp(r)[n](String(e))
            }, function (t) {
                var n = a(r, t, this);
                if (n.done) return n.value;
                var c = e(t), f = String(this);
                if (!c.global) return u(c, f);
                var s = c.unicode;
                c.lastIndex = 0;
                for (var l, h = [], p = 0; null !== (l = u(c, f));) {
                    var v = String(l[0]);
                    h[p] = v, "" === v && (c.lastIndex = i(f, o(c.lastIndex), s)), p++
                }
                return 0 === p ? null : h
            }]
        }))
    }, function (t, n, r) {
        "use strict";
        var e = r(3), o = r(10), i = r(6), u = r(20), a = r(83), c = r(55), f = Math.max, s = Math.min, l = Math.floor,
            h = /\$([$&`']|\d\d?|<[^>]*>)/g, p = /\$([$&`']|\d\d?)/g;
        r(56)("replace", 2, (function (t, n, r, v) {
            return [function (e, o) {
                var i = t(this), u = null == e ? void 0 : e[n];
                return void 0 !== u ? u.call(e, i, o) : r.call(String(i), e, o)
            }, function (t, n) {
                var o = v(r, t, this, n);
                if (o.done) return o.value;
                var l = e(t), h = String(this), p = "function" == typeof n;
                p || (n = String(n));
                var y = l.global;
                if (y) {
                    var g = l.unicode;
                    l.lastIndex = 0
                }
                for (var m = []; ;) {
                    var b = c(l, h);
                    if (null === b) break;
                    if (m.push(b), !y) break;
                    "" === String(b[0]) && (l.lastIndex = a(h, i(l.lastIndex), g))
                }
                for (var w, x = "", S = 0, _ = 0; _ < m.length; _++) {
                    b = m[_];
                    for (var E = String(b[0]), A = f(s(u(b.index), h.length), 0), P = [], O = 1; O < b.length; O++) P.push(void 0 === (w = b[O]) ? w : String(w));
                    var R = b.groups;
                    if (p) {
                        var T = [E].concat(P, A, h);
                        void 0 !== R && T.push(R);
                        var j = String(n.apply(void 0, T))
                    } else j = d(E, h, A, P, R, n);
                    A >= S && (x += h.slice(S, A) + j, S = A + E.length)
                }
                return x + h.slice(S)
            }];

            function d(t, n, e, i, u, a) {
                var c = e + t.length, f = i.length, s = p;
                return void 0 !== u && (u = o(u), s = h), r.call(a, s, (function (r, o) {
                    var a;
                    switch (o.charAt(0)) {
                        case"$":
                            return "$";
                        case"&":
                            return t;
                        case"`":
                            return n.slice(0, e);
                        case"'":
                            return n.slice(c);
                        case"<":
                            a = u[o.slice(1, -1)];
                            break;
                        default:
                            var s = +o;
                            if (0 === s) return r;
                            if (s > f) {
                                var h = l(s / 10);
                                return 0 === h ? r : h <= f ? void 0 === i[h - 1] ? o.charAt(1) : i[h - 1] + o.charAt(1) : r
                            }
                            a = i[s - 1]
                    }
                    return void 0 === a ? "" : a
                }))
            }
        }))
    }, function (t, n, r) {
        "use strict";
        var e = r(3), o = r(96), i = r(55);
        r(56)("search", 1, (function (t, n, r, u) {
            return [function (r) {
                var e = t(this), o = null == r ? void 0 : r[n];
                return void 0 !== o ? o.call(r, e) : new RegExp(r)[n](String(e))
            }, function (t) {
                var n = u(r, t, this);
                if (n.done) return n.value;
                var a = e(t), c = String(this), f = a.lastIndex;
                o(f, 0) || (a.lastIndex = 0);
                var s = i(a, c);
                return o(a.lastIndex, f) || (a.lastIndex = f), null === s ? -1 : s.index
            }]
        }))
    }, function (t, n, r) {
        "use strict";
        var e = r(75), o = r(3), i = r(48), u = r(83), a = r(6), c = r(55), f = r(82), s = r(2), l = Math.min,
            h = [].push, p = !s((function () {
                RegExp(4294967295, "y")
            }));
        r(56)("split", 2, (function (t, n, r, s) {
            var v;
            return v = "c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1).length || 2 != "ab".split(/(?:ab)*/).length || 4 != ".".split(/(.?)(.?)/).length || ".".split(/()()/).length > 1 || "".split(/.?/).length ? function (t, n) {
                var o = String(this);
                if (void 0 === t && 0 === n) return [];
                if (!e(t)) return r.call(o, t, n);
                for (var i, u, a, c = [], s = (t.ignoreCase ? "i" : "") + (t.multiline ? "m" : "") + (t.unicode ? "u" : "") + (t.sticky ? "y" : ""), l = 0, p = void 0 === n ? 4294967295 : n >>> 0, v = new RegExp(t.source, s + "g"); (i = f.call(v, o)) && !((u = v.lastIndex) > l && (c.push(o.slice(l, i.index)), i.length > 1 && i.index < o.length && h.apply(c, i.slice(1)), a = i[0].length, l = u, c.length >= p));) v.lastIndex === i.index && v.lastIndex++;
                return l === o.length ? !a && v.test("") || c.push("") : c.push(o.slice(l)), c.length > p ? c.slice(0, p) : c
            } : "0".split(void 0, 0).length ? function (t, n) {
                return void 0 === t && 0 === n ? [] : r.call(this, t, n)
            } : r, [function (r, e) {
                var o = t(this), i = null == r ? void 0 : r[n];
                return void 0 !== i ? i.call(r, o, e) : v.call(String(o), r, e)
            }, function (t, n) {
                var e = s(v, t, this, n, v !== r);
                if (e.done) return e.value;
                var f = o(t), h = String(this), d = i(f, RegExp), y = f.unicode,
                    g = (f.ignoreCase ? "i" : "") + (f.multiline ? "m" : "") + (f.unicode ? "u" : "") + (p ? "y" : "g"),
                    m = new d(p ? f : "^(?:" + f.source + ")", g), b = void 0 === n ? 4294967295 : n >>> 0;
                if (0 === b) return [];
                if (0 === h.length) return null === c(m, h) ? [h] : [];
                for (var w = 0, x = 0, S = []; x < h.length;) {
                    m.lastIndex = p ? x : 0;
                    var _, E = c(m, p ? h : h.slice(x));
                    if (null === E || (_ = l(a(m.lastIndex + (p ? 0 : x)), h.length)) === w) x = u(h, x, y); else {
                        if (S.push(h.slice(w, x)), S.length === b) return S;
                        for (var A = 1; A <= E.length - 1; A++) if (S.push(E[A]), S.length === b) return S;
                        x = w = _
                    }
                }
                return S.push(h.slice(w)), S
            }]
        }))
    }, function (t, n, r) {
        var e = r(1), o = r(84).set, i = e.MutationObserver || e.WebKitMutationObserver, u = e.process, a = e.Promise,
            c = "process" == r(24)(u);
        t.exports = function () {
            var t, n, r, f = function () {
                var e, o;
                for (c && (e = u.domain) && e.exit(); t;) {
                    o = t.fn, t = t.next;
                    try {
                        o()
                    } catch (e) {
                        throw t ? r() : n = void 0, e
                    }
                }
                n = void 0, e && e.enter()
            };
            if (c) r = function () {
                u.nextTick(f)
            }; else if (!i || e.navigator && e.navigator.standalone) if (a && a.resolve) {
                var s = a.resolve(void 0);
                r = function () {
                    s.then(f)
                }
            } else r = function () {
                o.call(e, f)
            }; else {
                var l = !0, h = document.createTextNode("");
                new i(f).observe(h, {characterData: !0}), r = function () {
                    h.data = l = !l
                }
            }
            return function (e) {
                var o = {fn: e, next: void 0};
                n && (n.next = o), t || (t = o, r()), n = o
            }
        }
    }, function (t, n) {
        t.exports = function (t) {
            try {
                return {e: !1, v: t()}
            } catch (t) {
                return {e: !0, v: t}
            }
        }
    }, function (t, n, r) {
        "use strict";
        var e = r(115), o = r(38);
        t.exports = r(59)("Map", (function (t) {
            return function () {
                return t(this, arguments.length > 0 ? arguments[0] : void 0)
            }
        }), {
            get: function (t) {
                var n = e.getEntry(o(this, "Map"), t);
                return n && n.v
            }, set: function (t, n) {
                return e.def(o(this, "Map"), 0 === t ? 0 : t, n)
            }
        }, e, !0)
    }, function (t, n, r) {
        "use strict";
        var e = r(115), o = r(38);
        t.exports = r(59)("Set", (function (t) {
            return function () {
                return t(this, arguments.length > 0 ? arguments[0] : void 0)
            }
        }), {
            add: function (t) {
                return e.def(o(this, "Set"), t = 0 === t ? 0 : t, t)
            }
        }, e)
    }, function (t, n, r) {
        "use strict";
        var e, o = r(1), i = r(23)(0), u = r(11), a = r(28), c = r(95), f = r(116), s = r(4), l = r(38), h = r(38),
            p = !o.ActiveXObject && "ActiveXObject" in o, v = a.getWeak, d = Object.isExtensible, y = f.ufstore,
            g = function (t) {
                return function () {
                    return t(this, arguments.length > 0 ? arguments[0] : void 0)
                }
            }, m = {
                get: function (t) {
                    if (s(t)) {
                        var n = v(t);
                        return !0 === n ? y(l(this, "WeakMap")).get(t) : n ? n[this._i] : void 0
                    }
                }, set: function (t, n) {
                    return f.def(l(this, "WeakMap"), t, n)
                }
            }, b = t.exports = r(59)("WeakMap", g, m, f, !0, !0);
        h && p && (c((e = f.getConstructor(g, "WeakMap")).prototype, m), a.NEED = !0, i(["delete", "has", "get", "set"], (function (t) {
            var n = b.prototype, r = n[t];
            u(n, t, (function (n, o) {
                if (s(n) && !d(n)) {
                    this._f || (this._f = new e);
                    var i = this._f[t](n, o);
                    return "set" == t ? this : i
                }
                return r.call(this, n, o)
            }))
        })))
    }, function (t, n, r) {
        "use strict";
        var e = r(116), o = r(38);
        r(59)("WeakSet", (function (t) {
            return function () {
                return t(this, arguments.length > 0 ? arguments[0] : void 0)
            }
        }), {
            add: function (t) {
                return e.def(o(this, "WeakSet"), t, !0)
            }
        }, e, !1, !0)
    }, function (t, n, r) {
        "use strict";
        var e = r(0), o = r(60), i = r(85), u = r(3), a = r(33), c = r(6), f = r(4), s = r(1).ArrayBuffer, l = r(48),
            h = i.ArrayBuffer, p = i.DataView, v = o.ABV && s.isView, d = h.prototype.slice, y = o.VIEW;
        e(e.G + e.W + e.F * (s !== h), {ArrayBuffer: h}), e(e.S + e.F * !o.CONSTR, "ArrayBuffer", {
            isView: function (t) {
                return v && v(t) || f(t) && y in t
            }
        }), e(e.P + e.U + e.F * r(2)((function () {
            return !new h(2).slice(1, void 0).byteLength
        })), "ArrayBuffer", {
            slice: function (t, n) {
                if (void 0 !== d && void 0 === n) return d.call(u(this), t);
                for (var r = u(this).byteLength, e = a(t, r), o = a(void 0 === n ? r : n, r), i = new (l(this, h))(c(o - e)), f = new p(this), s = new p(i), v = 0; e < o;) s.setUint8(v++, f.getUint8(e++));
                return i
            }
        }), r(42)("ArrayBuffer")
    }, function (t, n, r) {
        var e = r(0);
        e(e.G + e.W + e.F * !r(60).ABV, {DataView: r(85).DataView})
    }, function (t, n, r) {
        r(26)("Int8", 1, (function (t) {
            return function (n, r, e) {
                return t(this, n, r, e)
            }
        }))
    }, function (t, n, r) {
        r(26)("Uint8", 1, (function (t) {
            return function (n, r, e) {
                return t(this, n, r, e)
            }
        }))
    }, function (t, n, r) {
        r(26)("Uint8", 1, (function (t) {
            return function (n, r, e) {
                return t(this, n, r, e)
            }
        }), !0)
    }, function (t, n, r) {
        r(26)("Int16", 2, (function (t) {
            return function (n, r, e) {
                return t(this, n, r, e)
            }
        }))
    }, function (t, n, r) {
        r(26)("Uint16", 2, (function (t) {
            return function (n, r, e) {
                return t(this, n, r, e)
            }
        }))
    }, function (t, n, r) {
        r(26)("Int32", 4, (function (t) {
            return function (n, r, e) {
                return t(this, n, r, e)
            }
        }))
    }, function (t, n, r) {
        r(26)("Uint32", 4, (function (t) {
            return function (n, r, e) {
                return t(this, n, r, e)
            }
        }))
    }, function (t, n, r) {
        r(26)("Float32", 4, (function (t) {
            return function (n, r, e) {
                return t(this, n, r, e)
            }
        }))
    }, function (t, n, r) {
        r(26)("Float64", 8, (function (t) {
            return function (n, r, e) {
                return t(this, n, r, e)
            }
        }))
    }, function (t, n, r) {
        var e = r(0), o = r(19), i = r(3), u = (r(1).Reflect || {}).apply, a = Function.apply;
        e(e.S + e.F * !r(2)((function () {
            u((function () {
            }))
        })), "Reflect", {
            apply: function (t, n, r) {
                var e = o(t), c = i(r);
                return u ? u(e, n, c) : a.call(e, n, c)
            }
        })
    }, function (t, n, r) {
        var e = r(0), o = r(34), i = r(19), u = r(3), a = r(4), c = r(2), f = r(97), s = (r(1).Reflect || {}).construct,
            l = c((function () {
                function t() {
                }

                return !(s((function () {
                }), [], t) instanceof t)
            })), h = !c((function () {
                s((function () {
                }))
            }));
        e(e.S + e.F * (l || h), "Reflect", {
            construct: function (t, n) {
                i(t), u(n);
                var r = arguments.length < 3 ? t : i(arguments[2]);
                if (h && !l) return s(t, n, r);
                if (t == r) {
                    switch (n.length) {
                        case 0:
                            return new t;
                        case 1:
                            return new t(n[0]);
                        case 2:
                            return new t(n[0], n[1]);
                        case 3:
                            return new t(n[0], n[1], n[2]);
                        case 4:
                            return new t(n[0], n[1], n[2], n[3])
                    }
                    var e = [null];
                    return e.push.apply(e, n), new (f.apply(t, e))
                }
                var c = r.prototype, p = o(a(c) ? c : Object.prototype), v = Function.apply.call(t, p, n);
                return a(v) ? v : p
            }
        })
    }, function (t, n, r) {
        var e = r(9), o = r(0), i = r(3), u = r(27);
        o(o.S + o.F * r(2)((function () {
            Reflect.defineProperty(e.f({}, 1, {value: 1}), 1, {value: 2})
        })), "Reflect", {
            defineProperty: function (t, n, r) {
                i(t), n = u(n, !0), i(r);
                try {
                    return e.f(t, n, r), !0
                } catch (t) {
                    return !1
                }
            }
        })
    }, function (t, n, r) {
        var e = r(0), o = r(21).f, i = r(3);
        e(e.S, "Reflect", {
            deleteProperty: function (t, n) {
                var r = o(i(t), n);
                return !(r && !r.configurable) && delete t[n]
            }
        })
    }, function (t, n, r) {
        "use strict";
        var e = r(0), o = r(3), i = function (t) {
            this._t = o(t), this._i = 0;
            var n, r = this._k = [];
            for (n in t) r.push(n)
        };
        r(104)(i, "Object", (function () {
            var t, n = this._k;
            do {
                if (this._i >= n.length) return {value: void 0, done: !0}
            } while (!((t = n[this._i++]) in this._t));
            return {value: t, done: !1}
        })), e(e.S, "Reflect", {
            enumerate: function (t) {
                return new i(t)
            }
        })
    }, function (t, n, r) {
        var e = r(21), o = r(36), i = r(14), u = r(0), a = r(4), c = r(3);
        u(u.S, "Reflect", {
            get: function t(n, r) {
                var u, f, s = arguments.length < 3 ? n : arguments[2];
                return c(n) === s ? n[r] : (u = e.f(n, r)) ? i(u, "value") ? u.value : void 0 !== u.get ? u.get.call(s) : void 0 : a(f = o(n)) ? t(f, r, s) : void 0
            }
        })
    }, function (t, n, r) {
        var e = r(21), o = r(0), i = r(3);
        o(o.S, "Reflect", {
            getOwnPropertyDescriptor: function (t, n) {
                return e.f(i(t), n)
            }
        })
    }, function (t, n, r) {
        var e = r(0), o = r(36), i = r(3);
        e(e.S, "Reflect", {
            getPrototypeOf: function (t) {
                return o(i(t))
            }
        })
    }, function (t, n, r) {
        var e = r(0);
        e(e.S, "Reflect", {
            has: function (t, n) {
                return n in t
            }
        })
    }, function (t, n, r) {
        var e = r(0), o = r(3), i = Object.isExtensible;
        e(e.S, "Reflect", {
            isExtensible: function (t) {
                return o(t), !i || i(t)
            }
        })
    }, function (t, n, r) {
        var e = r(0);
        e(e.S, "Reflect", {ownKeys: r(118)})
    }, function (t, n, r) {
        var e = r(0), o = r(3), i = Object.preventExtensions;
        e(e.S, "Reflect", {
            preventExtensions: function (t) {
                o(t);
                try {
                    return i && i(t), !0
                } catch (t) {
                    return !1
                }
            }
        })
    }, function (t, n, r) {
        var e = r(9), o = r(21), i = r(36), u = r(14), a = r(0), c = r(29), f = r(3), s = r(4);
        a(a.S, "Reflect", {
            set: function t(n, r, a) {
                var l, h, p = arguments.length < 4 ? n : arguments[3], v = o.f(f(n), r);
                if (!v) {
                    if (s(h = i(n))) return t(h, r, a, p);
                    v = c(0)
                }
                if (u(v, "value")) {
                    if (!1 === v.writable || !s(p)) return !1;
                    if (l = o.f(p, r)) {
                        if (l.get || l.set || !1 === l.writable) return !1;
                        l.value = a, e.f(p, r, l)
                    } else e.f(p, r, c(0, a));
                    return !0
                }
                return void 0 !== v.set && (v.set.call(p, a), !0)
            }
        })
    }, function (t, n, r) {
        var e = r(0), o = r(66);
        o && e(e.S, "Reflect", {
            setPrototypeOf: function (t, n) {
                o.check(t, n);
                try {
                    return o.set(t, n), !0
                } catch (t) {
                    return !1
                }
            }
        })
    }, function (t, n, r) {
        r(280), t.exports = r(7).Array.includes
    }, function (t, n, r) {
        "use strict";
        var e = r(0), o = r(50)(!0);
        e(e.P, "Array", {
            includes: function (t) {
                return o(this, t, arguments.length > 1 ? arguments[1] : void 0)
            }
        }), r(37)("includes")
    }, function (t, n, r) {
        r(282), t.exports = r(7).Array.flatMap
    }, function (t, n, r) {
        "use strict";
        var e = r(0), o = r(283), i = r(10), u = r(6), a = r(19), c = r(106);
        e(e.P, "Array", {
            flatMap: function (t) {
                var n, r, e = i(this);
                return a(t), n = u(e.length), r = c(e, 0), o(r, e, e, n, 0, 1, t, arguments[1]), r
            }
        }), r(37)("flatMap")
    }, function (t, n, r) {
        "use strict";
        var e = r(52), o = r(4), i = r(6), u = r(18), a = r(5)("isConcatSpreadable");
        t.exports = function t(n, r, c, f, s, l, h, p) {
            for (var v, d, y = s, g = 0, m = !!h && u(h, p, 3); g < f;) {
                if (g in c) {
                    if (v = m ? m(c[g], g, r) : c[g], d = !1, o(v) && (d = void 0 !== (d = v[a]) ? !!d : e(v)), d && l > 0) y = t(n, r, v, i(v.length), y, l - 1) - 1; else {
                        if (y >= 9007199254740991) throw TypeError();
                        n[y] = v
                    }
                    y++
                }
                g++
            }
            return y
        }
    }, function (t, n, r) {
        r(285), t.exports = r(7).String.padStart
    }, function (t, n, r) {
        "use strict";
        var e = r(0), o = r(119), i = r(58), u = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(i);
        e(e.P + e.F * u, "String", {
            padStart: function (t) {
                return o(this, t, arguments.length > 1 ? arguments[1] : void 0, !0)
            }
        })
    }, function (t, n, r) {
        r(287), t.exports = r(7).String.padEnd
    }, function (t, n, r) {
        "use strict";
        var e = r(0), o = r(119), i = r(58), u = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(i);
        e(e.P + e.F * u, "String", {
            padEnd: function (t) {
                return o(this, t, arguments.length > 1 ? arguments[1] : void 0, !1)
            }
        })
    }, function (t, n, r) {
        r(289), t.exports = r(7).String.trimLeft
    }, function (t, n, r) {
        "use strict";
        r(40)("trimLeft", (function (t) {
            return function () {
                return t(this, 1)
            }
        }), "trimStart")
    }, function (t, n, r) {
        r(291), t.exports = r(7).String.trimRight
    }, function (t, n, r) {
        "use strict";
        r(40)("trimRight", (function (t) {
            return function () {
                return t(this, 2)
            }
        }), "trimEnd")
    }, function (t, n, r) {
        r(293), t.exports = r(62).f("asyncIterator")
    }, function (t, n, r) {
        r(91)("asyncIterator")
    }, function (t, n, r) {
        r(295), t.exports = r(7).Object.getOwnPropertyDescriptors
    }, function (t, n, r) {
        var e = r(0), o = r(118), i = r(16), u = r(21), a = r(78);
        e(e.S, "Object", {
            getOwnPropertyDescriptors: function (t) {
                for (var n, r, e = i(t), c = u.f, f = o(e), s = {}, l = 0; f.length > l;) void 0 !== (r = c(e, n = f[l++])) && a(s, n, r);
                return s
            }
        })
    }, function (t, n, r) {
        r(297), t.exports = r(7).Object.values
    }, function (t, n, r) {
        var e = r(0), o = r(120)(!1);
        e(e.S, "Object", {
            values: function (t) {
                return o(t)
            }
        })
    }, function (t, n, r) {
        r(299), t.exports = r(7).Object.entries
    }, function (t, n, r) {
        var e = r(0), o = r(120)(!0);
        e(e.S, "Object", {
            entries: function (t) {
                return o(t)
            }
        })
    }, function (t, n, r) {
        "use strict";
        r(112), r(301), t.exports = r(7).Promise.finally
    }, function (t, n, r) {
        "use strict";
        var e = r(0), o = r(7), i = r(1), u = r(48), a = r(114);
        e(e.P + e.R, "Promise", {
            finally: function (t) {
                var n = u(this, o.Promise || i.Promise), r = "function" == typeof t;
                return this.then(r ? function (r) {
                    return a(n, t()).then((function () {
                        return r
                    }))
                } : t, r ? function (r) {
                    return a(n, t()).then((function () {
                        throw r
                    }))
                } : t)
            }
        })
    }, function (t, n, r) {
        r(303), r(304), r(305), t.exports = r(7)
    }, function (t, n, r) {
        var e = r(1), o = r(0), i = r(58), u = [].slice, a = /MSIE .\./.test(i), c = function (t) {
            return function (n, r) {
                var e = arguments.length > 2, o = !!e && u.call(arguments, 2);
                return t(e ? function () {
                    ("function" == typeof n ? n : Function(n)).apply(this, o)
                } : n, r)
            }
        };
        o(o.G + o.B + o.F * a, {setTimeout: c(e.setTimeout), setInterval: c(e.setInterval)})
    }, function (t, n, r) {
        var e = r(0), o = r(84);
        e(e.G + e.B, {setImmediate: o.set, clearImmediate: o.clear})
    }, function (t, n, r) {
        for (var e = r(81), o = r(32), i = r(11), u = r(1), a = r(15), c = r(41), f = r(5), s = f("iterator"), l = f("toStringTag"), h = c.Array, p = {
            CSSRuleList: !0,
            CSSStyleDeclaration: !1,
            CSSValueList: !1,
            ClientRectList: !1,
            DOMRectList: !1,
            DOMStringList: !1,
            DOMTokenList: !0,
            DataTransferItemList: !1,
            FileList: !1,
            HTMLAllCollection: !1,
            HTMLCollection: !1,
            HTMLFormElement: !1,
            HTMLSelectElement: !1,
            MediaList: !0,
            MimeTypeArray: !1,
            NamedNodeMap: !1,
            NodeList: !0,
            PaintRequestList: !1,
            Plugin: !1,
            PluginArray: !1,
            SVGLengthList: !1,
            SVGNumberList: !1,
            SVGPathSegList: !1,
            SVGPointList: !1,
            SVGStringList: !1,
            SVGTransformList: !1,
            SourceBufferList: !1,
            StyleSheetList: !0,
            TextTrackCueList: !1,
            TextTrackList: !1,
            TouchList: !1
        }, v = o(p), d = 0; d < v.length; d++) {
            var y, g = v[d], m = p[g], b = u[g], w = b && b.prototype;
            if (w && (w[s] || a(w, s, h), w[l] || a(w, l, g), c[g] = h, m)) for (y in e) w[y] || i(w, y, e[y], !0)
        }
    }, function (t, n, r) {
        var e = function (t) {
            "use strict";
            var n, r = Object.prototype, e = r.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {},
                i = o.iterator || "@@iterator", u = o.asyncIterator || "@@asyncIterator",
                a = o.toStringTag || "@@toStringTag";

            function c(t, n, r, e) {
                var o = n && n.prototype instanceof d ? n : d, i = Object.create(o.prototype), u = new O(e || []);
                return i._invoke = function (t, n, r) {
                    var e = s;
                    return function (o, i) {
                        if (e === h) throw new Error("Generator is already running");
                        if (e === p) {
                            if ("throw" === o) throw i;
                            return T()
                        }
                        for (r.method = o, r.arg = i; ;) {
                            var u = r.delegate;
                            if (u) {
                                var a = E(u, r);
                                if (a) {
                                    if (a === v) continue;
                                    return a
                                }
                            }
                            if ("next" === r.method) r.sent = r._sent = r.arg; else if ("throw" === r.method) {
                                if (e === s) throw e = p, r.arg;
                                r.dispatchException(r.arg)
                            } else "return" === r.method && r.abrupt("return", r.arg);
                            e = h;
                            var c = f(t, n, r);
                            if ("normal" === c.type) {
                                if (e = r.done ? p : l, c.arg === v) continue;
                                return {value: c.arg, done: r.done}
                            }
                            "throw" === c.type && (e = p, r.method = "throw", r.arg = c.arg)
                        }
                    }
                }(t, r, u), i
            }

            function f(t, n, r) {
                try {
                    return {type: "normal", arg: t.call(n, r)}
                } catch (t) {
                    return {type: "throw", arg: t}
                }
            }

            t.wrap = c;
            var s = "suspendedStart", l = "suspendedYield", h = "executing", p = "completed", v = {};

            function d() {
            }

            function y() {
            }

            function g() {
            }

            var m = {};
            m[i] = function () {
                return this
            };
            var b = Object.getPrototypeOf, w = b && b(b(R([])));
            w && w !== r && e.call(w, i) && (m = w);
            var x = g.prototype = d.prototype = Object.create(m);

            function S(t) {
                ["next", "throw", "return"].forEach((function (n) {
                    t[n] = function (t) {
                        return this._invoke(n, t)
                    }
                }))
            }

            function _(t) {
                var n;
                this._invoke = function (r, o) {
                    function i() {
                        return new Promise((function (n, i) {
                            !function n(r, o, i, u) {
                                var a = f(t[r], t, o);
                                if ("throw" !== a.type) {
                                    var c = a.arg, s = c.value;
                                    return s && "object" == typeof s && e.call(s, "__await") ? Promise.resolve(s.__await).then((function (t) {
                                        n("next", t, i, u)
                                    }), (function (t) {
                                        n("throw", t, i, u)
                                    })) : Promise.resolve(s).then((function (t) {
                                        c.value = t, i(c)
                                    }), (function (t) {
                                        return n("throw", t, i, u)
                                    }))
                                }
                                u(a.arg)
                            }(r, o, n, i)
                        }))
                    }

                    return n = n ? n.then(i, i) : i()
                }
            }

            function E(t, r) {
                var e = t.iterator[r.method];
                if (e === n) {
                    if (r.delegate = null, "throw" === r.method) {
                        if (t.iterator.return && (r.method = "return", r.arg = n, E(t, r), "throw" === r.method)) return v;
                        r.method = "throw", r.arg = new TypeError("The iterator does not provide a 'throw' method")
                    }
                    return v
                }
                var o = f(e, t.iterator, r.arg);
                if ("throw" === o.type) return r.method = "throw", r.arg = o.arg, r.delegate = null, v;
                var i = o.arg;
                return i ? i.done ? (r[t.resultName] = i.value, r.next = t.nextLoc, "return" !== r.method && (r.method = "next", r.arg = n), r.delegate = null, v) : i : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, v)
            }

            function A(t) {
                var n = {tryLoc: t[0]};
                1 in t && (n.catchLoc = t[1]), 2 in t && (n.finallyLoc = t[2], n.afterLoc = t[3]), this.tryEntries.push(n)
            }

            function P(t) {
                var n = t.completion || {};
                n.type = "normal", delete n.arg, t.completion = n
            }

            function O(t) {
                this.tryEntries = [{tryLoc: "root"}], t.forEach(A, this), this.reset(!0)
            }

            function R(t) {
                if (t) {
                    var r = t[i];
                    if (r) return r.call(t);
                    if ("function" == typeof t.next) return t;
                    if (!isNaN(t.length)) {
                        var o = -1, u = function r() {
                            for (; ++o < t.length;) if (e.call(t, o)) return r.value = t[o], r.done = !1, r;
                            return r.value = n, r.done = !0, r
                        };
                        return u.next = u
                    }
                }
                return {next: T}
            }

            function T() {
                return {value: n, done: !0}
            }

            return y.prototype = x.constructor = g, g.constructor = y, g[a] = y.displayName = "GeneratorFunction", t.isGeneratorFunction = function (t) {
                var n = "function" == typeof t && t.constructor;
                return !!n && (n === y || "GeneratorFunction" === (n.displayName || n.name))
            }, t.mark = function (t) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(t, g) : (t.__proto__ = g, a in t || (t[a] = "GeneratorFunction")), t.prototype = Object.create(x), t
            }, t.awrap = function (t) {
                return {__await: t}
            }, S(_.prototype), _.prototype[u] = function () {
                return this
            }, t.AsyncIterator = _, t.async = function (n, r, e, o) {
                var i = new _(c(n, r, e, o));
                return t.isGeneratorFunction(r) ? i : i.next().then((function (t) {
                    return t.done ? t.value : i.next()
                }))
            }, S(x), x[a] = "Generator", x[i] = function () {
                return this
            }, x.toString = function () {
                return "[object Generator]"
            }, t.keys = function (t) {
                var n = [];
                for (var r in t) n.push(r);
                return n.reverse(), function r() {
                    for (; n.length;) {
                        var e = n.pop();
                        if (e in t) return r.value = e, r.done = !1, r
                    }
                    return r.done = !0, r
                }
            }, t.values = R, O.prototype = {
                constructor: O, reset: function (t) {
                    if (this.prev = 0, this.next = 0, this.sent = this._sent = n, this.done = !1, this.delegate = null, this.method = "next", this.arg = n, this.tryEntries.forEach(P), !t) for (var r in this) "t" === r.charAt(0) && e.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = n)
                }, stop: function () {
                    this.done = !0;
                    var t = this.tryEntries[0].completion;
                    if ("throw" === t.type) throw t.arg;
                    return this.rval
                }, dispatchException: function (t) {
                    if (this.done) throw t;
                    var r = this;

                    function o(e, o) {
                        return a.type = "throw", a.arg = t, r.next = e, o && (r.method = "next", r.arg = n), !!o
                    }

                    for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                        var u = this.tryEntries[i], a = u.completion;
                        if ("root" === u.tryLoc) return o("end");
                        if (u.tryLoc <= this.prev) {
                            var c = e.call(u, "catchLoc"), f = e.call(u, "finallyLoc");
                            if (c && f) {
                                if (this.prev < u.catchLoc) return o(u.catchLoc, !0);
                                if (this.prev < u.finallyLoc) return o(u.finallyLoc)
                            } else if (c) {
                                if (this.prev < u.catchLoc) return o(u.catchLoc, !0)
                            } else {
                                if (!f) throw new Error("try statement without catch or finally");
                                if (this.prev < u.finallyLoc) return o(u.finallyLoc)
                            }
                        }
                    }
                }, abrupt: function (t, n) {
                    for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                        var o = this.tryEntries[r];
                        if (o.tryLoc <= this.prev && e.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                            var i = o;
                            break
                        }
                    }
                    i && ("break" === t || "continue" === t) && i.tryLoc <= n && n <= i.finallyLoc && (i = null);
                    var u = i ? i.completion : {};
                    return u.type = t, u.arg = n, i ? (this.method = "next", this.next = i.finallyLoc, v) : this.complete(u)
                }, complete: function (t, n) {
                    if ("throw" === t.type) throw t.arg;
                    return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && n && (this.next = n), v
                }, finish: function (t) {
                    for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                        var r = this.tryEntries[n];
                        if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), P(r), v
                    }
                }, catch: function (t) {
                    for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                        var r = this.tryEntries[n];
                        if (r.tryLoc === t) {
                            var e = r.completion;
                            if ("throw" === e.type) {
                                var o = e.arg;
                                P(r)
                            }
                            return o
                        }
                    }
                    throw new Error("illegal catch attempt")
                }, delegateYield: function (t, r, e) {
                    return this.delegate = {
                        iterator: R(t),
                        resultName: r,
                        nextLoc: e
                    }, "next" === this.method && (this.arg = n), v
                }
            }, t
        }(t.exports);
        try {
            regeneratorRuntime = e
        } catch (t) {
            Function("r", "regeneratorRuntime = r")(e)
        }
    }, function (t, n, r) {
        r(308), t.exports = r(121).global
    }, function (t, n, r) {
        var e = r(309);
        e(e.G, {global: r(86)})
    }, function (t, n, r) {
        var e = r(86), o = r(121), i = r(310), u = r(312), a = r(319), c = function (t, n, r) {
            var f, s, l, h = t & c.F, p = t & c.G, v = t & c.S, d = t & c.P, y = t & c.B, g = t & c.W,
                m = p ? o : o[n] || (o[n] = {}), b = m.prototype, w = p ? e : v ? e[n] : (e[n] || {}).prototype;
            for (f in p && (r = n), r) (s = !h && w && void 0 !== w[f]) && a(m, f) || (l = s ? w[f] : r[f], m[f] = p && "function" != typeof w[f] ? r[f] : y && s ? i(l, e) : g && w[f] == l ? function (t) {
                var n = function (n, r, e) {
                    if (this instanceof t) {
                        switch (arguments.length) {
                            case 0:
                                return new t;
                            case 1:
                                return new t(n);
                            case 2:
                                return new t(n, r)
                        }
                        return new t(n, r, e)
                    }
                    return t.apply(this, arguments)
                };
                return n.prototype = t.prototype, n
            }(l) : d && "function" == typeof l ? i(Function.call, l) : l, d && ((m.virtual || (m.virtual = {}))[f] = l, t & c.R && b && !b[f] && u(b, f, l)))
        };
        c.F = 1, c.G = 2, c.S = 4, c.P = 8, c.B = 16, c.W = 32, c.U = 64, c.R = 128, t.exports = c
    }, function (t, n, r) {
        var e = r(311);
        t.exports = function (t, n, r) {
            if (e(t), void 0 === n) return t;
            switch (r) {
                case 1:
                    return function (r) {
                        return t.call(n, r)
                    };
                case 2:
                    return function (r, e) {
                        return t.call(n, r, e)
                    };
                case 3:
                    return function (r, e, o) {
                        return t.call(n, r, e, o)
                    }
            }
            return function () {
                return t.apply(n, arguments)
            }
        }
    }, function (t, n) {
        t.exports = function (t) {
            if ("function" != typeof t) throw TypeError(t + " is not a function!");
            return t
        }
    }, function (t, n, r) {
        var e = r(313), o = r(318);
        t.exports = r(88) ? function (t, n, r) {
            return e.f(t, n, o(1, r))
        } : function (t, n, r) {
            return t[n] = r, t
        }
    }, function (t, n, r) {
        var e = r(314), o = r(315), i = r(317), u = Object.defineProperty;
        n.f = r(88) ? Object.defineProperty : function (t, n, r) {
            if (e(t), n = i(n, !0), e(r), o) try {
                return u(t, n, r)
            } catch (t) {
            }
            if ("get" in r || "set" in r) throw TypeError("Accessors not supported!");
            return "value" in r && (t[n] = r.value), t
        }
    }, function (t, n, r) {
        var e = r(87);
        t.exports = function (t) {
            if (!e(t)) throw TypeError(t + " is not an object!");
            return t
        }
    }, function (t, n, r) {
        t.exports = !r(88) && !r(122)((function () {
            return 7 != Object.defineProperty(r(316)("div"), "a", {
                get: function () {
                    return 7
                }
            }).a
        }))
    }, function (t, n, r) {
        var e = r(87), o = r(86).document, i = e(o) && e(o.createElement);
        t.exports = function (t) {
            return i ? o.createElement(t) : {}
        }
    }, function (t, n, r) {
        var e = r(87);
        t.exports = function (t, n) {
            if (!e(t)) return t;
            var r, o;
            if (n && "function" == typeof (r = t.toString) && !e(o = r.call(t))) return o;
            if ("function" == typeof (r = t.valueOf) && !e(o = r.call(t))) return o;
            if (!n && "function" == typeof (r = t.toString) && !e(o = r.call(t))) return o;
            throw TypeError("Can't convert object to primitive value")
        }
    }, function (t, n) {
        t.exports = function (t, n) {
            return {enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: n}
        }
    }, function (t, n) {
        var r = {}.hasOwnProperty;
        t.exports = function (t, n) {
            return r.call(t, n)
        }
    }, function (t, n, r) {
        t.exports = r(321)
    }, function (t, n, r) {
        "use strict";
        var e = r(89), o = r(322), i = r(347), u = r(123);

        function a(t) {
            var n = new o(t), r = u(o.prototype.request, n);
            return e.extend(r, o.prototype, n), e.extend(r, n), r
        }

        var c = a(i);
        c.DeepAI = o, c.create = function (t) {
            return a(mergeConfig(c.defaults, t))
        }, t.exports = c, t.exports.default = c
    }, function (t, n, r) {
        "use strict";
        (function (n) {
            function e(t, n, r, e, o, i, u) {
                try {
                    var a = t[i](u), c = a.value
                } catch (t) {
                    return void r(t)
                }
                a.done ? n(c) : Promise.resolve(c).then(e, o)
            }

            r(89);
            var o = r(328), i = r(345), u = r(132).baseUrl, a = r(346), c = Function("return this")();

            function f(t) {
                this.defaults = t, o.defaults.headers.common["client-library"] = "deepai-js-client"
            }

            function s(t) {
                return u + "/api/" + t
            }

            f.prototype.setApiKey = function (t) {
                this.apiKey = t, o.defaults.headers.common["api-key"] = t
            }, f.prototype.callStandardApi = function () {
                var t, r = (t = regeneratorRuntime.mark((function t(r, e) {
                    var u, a, f, l, h, p, v;
                    return regeneratorRuntime.wrap((function (t) {
                        for (; ;) switch (t.prev = t.next) {
                            case 0:
                                u = new i, a = 0, f = Object.keys(e);
                            case 2:
                                if (!(a < f.length)) {
                                    t.next = 43;
                                    break
                                }
                                if (l = f[a], null !== e[l] && void 0 !== e[l]) {
                                    t.next = 6;
                                    break
                                }
                                return t.abrupt("continue", 40);
                            case 6:
                                if ("string" != typeof e[l]) {
                                    t.next = 10;
                                    break
                                }
                                u.append(l, e[l]), t.next = 40;
                                break;
                            case 10:
                                if (!(c.Element && e[l] instanceof c.Element)) {
                                    t.next = 31;
                                    break
                                }
                                if ("IMG" !== (h = e[l]).tagName) {
                                    t.next = 20;
                                    break
                                }
                                if (!h.src) {
                                    t.next = 17;
                                    break
                                }
                                u.append(l, h.src), t.next = 18;
                                break;
                            case 17:
                                throw new Error("DeepAI error: Image element has no SRC: " + l);
                            case 18:
                                t.next = 29;
                                break;
                            case 20:
                                if ("INPUT" !== h.tagName || void 0 === h.files) {
                                    t.next = 28;
                                    break
                                }
                                if (!(h.files.length > 0)) {
                                    t.next = 25;
                                    break
                                }
                                u.append(l, h.files[0], "file.jpeg"), t.next = 26;
                                break;
                            case 25:
                                throw new Error("DeepAI error: File picker has no file picked: " + l);
                            case 26:
                                t.next = 29;
                                break;
                            case 28:
                                throw new Error("DeepAI error: DOM Element type for key: " + l);
                            case 29:
                                t.next = 40;
                                break;
                            case 31:
                                if (!e[l].hasOwnProperty("fd")) {
                                    t.next = 35;
                                    break
                                }
                                u.append(l, e[l]), t.next = 40;
                                break;
                            case 35:
                                if (!c.Buffer || !n.isBuffer(e[l])) {
                                    t.next = 39;
                                    break
                                }
                                u.append(l, e[l], "file.jpeg"), t.next = 40;
                                break;
                            case 39:
                                throw new Error("DeepAI error: unknown input type for key: " + l);
                            case 40:
                                a++, t.next = 2;
                                break;
                            case 43:
                                return p = {withCredentials: !0}, void 0 !== u.getHeaders && (p.headers = u.getHeaders()), t.next = 47, o.post(s(r), u, p);
                            case 47:
                                return v = t.sent, t.abrupt("return", v.data);
                            case 49:
                            case"end":
                                return t.stop()
                        }
                    }), t)
                })), function () {
                    var n = this, r = arguments;
                    return new Promise((function (o, i) {
                        var u = t.apply(n, r);

                        function a(t) {
                            e(u, o, i, a, c, "next", t)
                        }

                        function c(t) {
                            e(u, o, i, a, c, "throw", t)
                        }

                        a(void 0)
                    }))
                });
                return function (t, n) {
                    return r.apply(this, arguments)
                }
            }(), f.prototype.renderResultIntoElement = a.renderResultIntoElement, f.prototype.renderAnnotatedResultIntoElement = a.renderAnnotatedResultIntoElement, t.exports = f
        }).call(this, r(323).Buffer)
    }, function (t, n, r) {
        "use strict";
        (function (t) {
            /*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
            var e = r(325), o = r(326), i = r(327);

            function u() {
                return c.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
            }

            function a(t, n) {
                if (u() < n) throw new RangeError("Invalid typed array length");
                return c.TYPED_ARRAY_SUPPORT ? (t = new Uint8Array(n)).__proto__ = c.prototype : (null === t && (t = new c(n)), t.length = n), t
            }

            function c(t, n, r) {
                if (!(c.TYPED_ARRAY_SUPPORT || this instanceof c)) return new c(t, n, r);
                if ("number" == typeof t) {
                    if ("string" == typeof n) throw new Error("If encoding is specified then the first argument must be a string");
                    return l(this, t)
                }
                return f(this, t, n, r)
            }

            function f(t, n, r, e) {
                if ("number" == typeof n) throw new TypeError('"value" argument must not be a number');
                return "undefined" != typeof ArrayBuffer && n instanceof ArrayBuffer ? function (t, n, r, e) {
                    if (n.byteLength, r < 0 || n.byteLength < r) throw new RangeError("'offset' is out of bounds");
                    if (n.byteLength < r + (e || 0)) throw new RangeError("'length' is out of bounds");
                    n = void 0 === r && void 0 === e ? new Uint8Array(n) : void 0 === e ? new Uint8Array(n, r) : new Uint8Array(n, r, e);
                    c.TYPED_ARRAY_SUPPORT ? (t = n).__proto__ = c.prototype : t = h(t, n);
                    return t
                }(t, n, r, e) : "string" == typeof n ? function (t, n, r) {
                    "string" == typeof r && "" !== r || (r = "utf8");
                    if (!c.isEncoding(r)) throw new TypeError('"encoding" must be a valid string encoding');
                    var e = 0 | v(n, r), o = (t = a(t, e)).write(n, r);
                    o !== e && (t = t.slice(0, o));
                    return t
                }(t, n, r) : function (t, n) {
                    if (c.isBuffer(n)) {
                        var r = 0 | p(n.length);
                        return 0 === (t = a(t, r)).length ? t : (n.copy(t, 0, 0, r), t)
                    }
                    if (n) {
                        if ("undefined" != typeof ArrayBuffer && n.buffer instanceof ArrayBuffer || "length" in n) return "number" != typeof n.length || (e = n.length) != e ? a(t, 0) : h(t, n);
                        if ("Buffer" === n.type && i(n.data)) return h(t, n.data)
                    }
                    var e;
                    throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
                }(t, n)
            }

            function s(t) {
                if ("number" != typeof t) throw new TypeError('"size" argument must be a number');
                if (t < 0) throw new RangeError('"size" argument must not be negative')
            }

            function l(t, n) {
                if (s(n), t = a(t, n < 0 ? 0 : 0 | p(n)), !c.TYPED_ARRAY_SUPPORT) for (var r = 0; r < n; ++r) t[r] = 0;
                return t
            }

            function h(t, n) {
                var r = n.length < 0 ? 0 : 0 | p(n.length);
                t = a(t, r);
                for (var e = 0; e < r; e += 1) t[e] = 255 & n[e];
                return t
            }

            function p(t) {
                if (t >= u()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + u().toString(16) + " bytes");
                return 0 | t
            }

            function v(t, n) {
                if (c.isBuffer(t)) return t.length;
                if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(t) || t instanceof ArrayBuffer)) return t.byteLength;
                "string" != typeof t && (t = "" + t);
                var r = t.length;
                if (0 === r) return 0;
                for (var e = !1; ;) switch (n) {
                    case"ascii":
                    case"latin1":
                    case"binary":
                        return r;
                    case"utf8":
                    case"utf-8":
                    case void 0:
                        return Y(t).length;
                    case"ucs2":
                    case"ucs-2":
                    case"utf16le":
                    case"utf-16le":
                        return 2 * r;
                    case"hex":
                        return r >>> 1;
                    case"base64":
                        return W(t).length;
                    default:
                        if (e) return Y(t).length;
                        n = ("" + n).toLowerCase(), e = !0
                }
            }

            function d(t, n, r) {
                var e = !1;
                if ((void 0 === n || n < 0) && (n = 0), n > this.length) return "";
                if ((void 0 === r || r > this.length) && (r = this.length), r <= 0) return "";
                if ((r >>>= 0) <= (n >>>= 0)) return "";
                for (t || (t = "utf8"); ;) switch (t) {
                    case"hex":
                        return j(this, n, r);
                    case"utf8":
                    case"utf-8":
                        return P(this, n, r);
                    case"ascii":
                        return R(this, n, r);
                    case"latin1":
                    case"binary":
                        return T(this, n, r);
                    case"base64":
                        return A(this, n, r);
                    case"ucs2":
                    case"ucs-2":
                    case"utf16le":
                    case"utf-16le":
                        return M(this, n, r);
                    default:
                        if (e) throw new TypeError("Unknown encoding: " + t);
                        t = (t + "").toLowerCase(), e = !0
                }
            }

            function y(t, n, r) {
                var e = t[n];
                t[n] = t[r], t[r] = e
            }

            function g(t, n, r, e, o) {
                if (0 === t.length) return -1;
                if ("string" == typeof r ? (e = r, r = 0) : r > 2147483647 ? r = 2147483647 : r < -2147483648 && (r = -2147483648), r = +r, isNaN(r) && (r = o ? 0 : t.length - 1), r < 0 && (r = t.length + r), r >= t.length) {
                    if (o) return -1;
                    r = t.length - 1
                } else if (r < 0) {
                    if (!o) return -1;
                    r = 0
                }
                if ("string" == typeof n && (n = c.from(n, e)), c.isBuffer(n)) return 0 === n.length ? -1 : m(t, n, r, e, o);
                if ("number" == typeof n) return n &= 255, c.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? o ? Uint8Array.prototype.indexOf.call(t, n, r) : Uint8Array.prototype.lastIndexOf.call(t, n, r) : m(t, [n], r, e, o);
                throw new TypeError("val must be string, number or Buffer")
            }

            function m(t, n, r, e, o) {
                var i, u = 1, a = t.length, c = n.length;
                if (void 0 !== e && ("ucs2" === (e = String(e).toLowerCase()) || "ucs-2" === e || "utf16le" === e || "utf-16le" === e)) {
                    if (t.length < 2 || n.length < 2) return -1;
                    u = 2, a /= 2, c /= 2, r /= 2
                }

                function f(t, n) {
                    return 1 === u ? t[n] : t.readUInt16BE(n * u)
                }

                if (o) {
                    var s = -1;
                    for (i = r; i < a; i++) if (f(t, i) === f(n, -1 === s ? 0 : i - s)) {
                        if (-1 === s && (s = i), i - s + 1 === c) return s * u
                    } else -1 !== s && (i -= i - s), s = -1
                } else for (r + c > a && (r = a - c), i = r; i >= 0; i--) {
                    for (var l = !0, h = 0; h < c; h++) if (f(t, i + h) !== f(n, h)) {
                        l = !1;
                        break
                    }
                    if (l) return i
                }
                return -1
            }

            function b(t, n, r, e) {
                r = Number(r) || 0;
                var o = t.length - r;
                e ? (e = Number(e)) > o && (e = o) : e = o;
                var i = n.length;
                if (i % 2 != 0) throw new TypeError("Invalid hex string");
                e > i / 2 && (e = i / 2);
                for (var u = 0; u < e; ++u) {
                    var a = parseInt(n.substr(2 * u, 2), 16);
                    if (isNaN(a)) return u;
                    t[r + u] = a
                }
                return u
            }

            function w(t, n, r, e) {
                return V(Y(n, t.length - r), t, r, e)
            }

            function x(t, n, r, e) {
                return V(function (t) {
                    for (var n = [], r = 0; r < t.length; ++r) n.push(255 & t.charCodeAt(r));
                    return n
                }(n), t, r, e)
            }

            function S(t, n, r, e) {
                return x(t, n, r, e)
            }

            function _(t, n, r, e) {
                return V(W(n), t, r, e)
            }

            function E(t, n, r, e) {
                return V(function (t, n) {
                    for (var r, e, o, i = [], u = 0; u < t.length && !((n -= 2) < 0); ++u) r = t.charCodeAt(u), e = r >> 8, o = r % 256, i.push(o), i.push(e);
                    return i
                }(n, t.length - r), t, r, e)
            }

            function A(t, n, r) {
                return 0 === n && r === t.length ? e.fromByteArray(t) : e.fromByteArray(t.slice(n, r))
            }

            function P(t, n, r) {
                r = Math.min(t.length, r);
                for (var e = [], o = n; o < r;) {
                    var i, u, a, c, f = t[o], s = null, l = f > 239 ? 4 : f > 223 ? 3 : f > 191 ? 2 : 1;
                    if (o + l <= r) switch (l) {
                        case 1:
                            f < 128 && (s = f);
                            break;
                        case 2:
                            128 == (192 & (i = t[o + 1])) && (c = (31 & f) << 6 | 63 & i) > 127 && (s = c);
                            break;
                        case 3:
                            i = t[o + 1], u = t[o + 2], 128 == (192 & i) && 128 == (192 & u) && (c = (15 & f) << 12 | (63 & i) << 6 | 63 & u) > 2047 && (c < 55296 || c > 57343) && (s = c);
                            break;
                        case 4:
                            i = t[o + 1], u = t[o + 2], a = t[o + 3], 128 == (192 & i) && 128 == (192 & u) && 128 == (192 & a) && (c = (15 & f) << 18 | (63 & i) << 12 | (63 & u) << 6 | 63 & a) > 65535 && c < 1114112 && (s = c)
                    }
                    null === s ? (s = 65533, l = 1) : s > 65535 && (s -= 65536, e.push(s >>> 10 & 1023 | 55296), s = 56320 | 1023 & s), e.push(s), o += l
                }
                return function (t) {
                    var n = t.length;
                    if (n <= O) return String.fromCharCode.apply(String, t);
                    var r = "", e = 0;
                    for (; e < n;) r += String.fromCharCode.apply(String, t.slice(e, e += O));
                    return r
                }(e)
            }

            n.Buffer = c, n.SlowBuffer = function (t) {
                +t != t && (t = 0);
                return c.alloc(+t)
            }, n.INSPECT_MAX_BYTES = 50, c.TYPED_ARRAY_SUPPORT = void 0 !== t.TYPED_ARRAY_SUPPORT ? t.TYPED_ARRAY_SUPPORT : function () {
                try {
                    var t = new Uint8Array(1);
                    return t.__proto__ = {
                        __proto__: Uint8Array.prototype, foo: function () {
                            return 42
                        }
                    }, 42 === t.foo() && "function" == typeof t.subarray && 0 === t.subarray(1, 1).byteLength
                } catch (t) {
                    return !1
                }
            }(), n.kMaxLength = u(), c.poolSize = 8192, c._augment = function (t) {
                return t.__proto__ = c.prototype, t
            }, c.from = function (t, n, r) {
                return f(null, t, n, r)
            }, c.TYPED_ARRAY_SUPPORT && (c.prototype.__proto__ = Uint8Array.prototype, c.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && c[Symbol.species] === c && Object.defineProperty(c, Symbol.species, {
                value: null,
                configurable: !0
            })), c.alloc = function (t, n, r) {
                return function (t, n, r, e) {
                    return s(n), n <= 0 ? a(t, n) : void 0 !== r ? "string" == typeof e ? a(t, n).fill(r, e) : a(t, n).fill(r) : a(t, n)
                }(null, t, n, r)
            }, c.allocUnsafe = function (t) {
                return l(null, t)
            }, c.allocUnsafeSlow = function (t) {
                return l(null, t)
            }, c.isBuffer = function (t) {
                return !(null == t || !t._isBuffer)
            }, c.compare = function (t, n) {
                if (!c.isBuffer(t) || !c.isBuffer(n)) throw new TypeError("Arguments must be Buffers");
                if (t === n) return 0;
                for (var r = t.length, e = n.length, o = 0, i = Math.min(r, e); o < i; ++o) if (t[o] !== n[o]) {
                    r = t[o], e = n[o];
                    break
                }
                return r < e ? -1 : e < r ? 1 : 0
            }, c.isEncoding = function (t) {
                switch (String(t).toLowerCase()) {
                    case"hex":
                    case"utf8":
                    case"utf-8":
                    case"ascii":
                    case"latin1":
                    case"binary":
                    case"base64":
                    case"ucs2":
                    case"ucs-2":
                    case"utf16le":
                    case"utf-16le":
                        return !0;
                    default:
                        return !1
                }
            }, c.concat = function (t, n) {
                if (!i(t)) throw new TypeError('"list" argument must be an Array of Buffers');
                if (0 === t.length) return c.alloc(0);
                var r;
                if (void 0 === n) for (n = 0, r = 0; r < t.length; ++r) n += t[r].length;
                var e = c.allocUnsafe(n), o = 0;
                for (r = 0; r < t.length; ++r) {
                    var u = t[r];
                    if (!c.isBuffer(u)) throw new TypeError('"list" argument must be an Array of Buffers');
                    u.copy(e, o), o += u.length
                }
                return e
            }, c.byteLength = v, c.prototype._isBuffer = !0, c.prototype.swap16 = function () {
                var t = this.length;
                if (t % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
                for (var n = 0; n < t; n += 2) y(this, n, n + 1);
                return this
            }, c.prototype.swap32 = function () {
                var t = this.length;
                if (t % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
                for (var n = 0; n < t; n += 4) y(this, n, n + 3), y(this, n + 1, n + 2);
                return this
            }, c.prototype.swap64 = function () {
                var t = this.length;
                if (t % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
                for (var n = 0; n < t; n += 8) y(this, n, n + 7), y(this, n + 1, n + 6), y(this, n + 2, n + 5), y(this, n + 3, n + 4);
                return this
            }, c.prototype.toString = function () {
                var t = 0 | this.length;
                return 0 === t ? "" : 0 === arguments.length ? P(this, 0, t) : d.apply(this, arguments)
            }, c.prototype.equals = function (t) {
                if (!c.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
                return this === t || 0 === c.compare(this, t)
            }, c.prototype.inspect = function () {
                var t = "", r = n.INSPECT_MAX_BYTES;
                return this.length > 0 && (t = this.toString("hex", 0, r).match(/.{2}/g).join(" "), this.length > r && (t += " ... ")), "<Buffer " + t + ">"
            }, c.prototype.compare = function (t, n, r, e, o) {
                if (!c.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
                if (void 0 === n && (n = 0), void 0 === r && (r = t ? t.length : 0), void 0 === e && (e = 0), void 0 === o && (o = this.length), n < 0 || r > t.length || e < 0 || o > this.length) throw new RangeError("out of range index");
                if (e >= o && n >= r) return 0;
                if (e >= o) return -1;
                if (n >= r) return 1;
                if (this === t) return 0;
                for (var i = (o >>>= 0) - (e >>>= 0), u = (r >>>= 0) - (n >>>= 0), a = Math.min(i, u), f = this.slice(e, o), s = t.slice(n, r), l = 0; l < a; ++l) if (f[l] !== s[l]) {
                    i = f[l], u = s[l];
                    break
                }
                return i < u ? -1 : u < i ? 1 : 0
            }, c.prototype.includes = function (t, n, r) {
                return -1 !== this.indexOf(t, n, r)
            }, c.prototype.indexOf = function (t, n, r) {
                return g(this, t, n, r, !0)
            }, c.prototype.lastIndexOf = function (t, n, r) {
                return g(this, t, n, r, !1)
            }, c.prototype.write = function (t, n, r, e) {
                if (void 0 === n) e = "utf8", r = this.length, n = 0; else if (void 0 === r && "string" == typeof n) e = n, r = this.length, n = 0; else {
                    if (!isFinite(n)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                    n |= 0, isFinite(r) ? (r |= 0, void 0 === e && (e = "utf8")) : (e = r, r = void 0)
                }
                var o = this.length - n;
                if ((void 0 === r || r > o) && (r = o), t.length > 0 && (r < 0 || n < 0) || n > this.length) throw new RangeError("Attempt to write outside buffer bounds");
                e || (e = "utf8");
                for (var i = !1; ;) switch (e) {
                    case"hex":
                        return b(this, t, n, r);
                    case"utf8":
                    case"utf-8":
                        return w(this, t, n, r);
                    case"ascii":
                        return x(this, t, n, r);
                    case"latin1":
                    case"binary":
                        return S(this, t, n, r);
                    case"base64":
                        return _(this, t, n, r);
                    case"ucs2":
                    case"ucs-2":
                    case"utf16le":
                    case"utf-16le":
                        return E(this, t, n, r);
                    default:
                        if (i) throw new TypeError("Unknown encoding: " + e);
                        e = ("" + e).toLowerCase(), i = !0
                }
            }, c.prototype.toJSON = function () {
                return {type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0)}
            };
            var O = 4096;

            function R(t, n, r) {
                var e = "";
                r = Math.min(t.length, r);
                for (var o = n; o < r; ++o) e += String.fromCharCode(127 & t[o]);
                return e
            }

            function T(t, n, r) {
                var e = "";
                r = Math.min(t.length, r);
                for (var o = n; o < r; ++o) e += String.fromCharCode(t[o]);
                return e
            }

            function j(t, n, r) {
                var e = t.length;
                (!n || n < 0) && (n = 0), (!r || r < 0 || r > e) && (r = e);
                for (var o = "", i = n; i < r; ++i) o += D(t[i]);
                return o
            }

            function M(t, n, r) {
                for (var e = t.slice(n, r), o = "", i = 0; i < e.length; i += 2) o += String.fromCharCode(e[i] + 256 * e[i + 1]);
                return o
            }

            function I(t, n, r) {
                if (t % 1 != 0 || t < 0) throw new RangeError("offset is not uint");
                if (t + n > r) throw new RangeError("Trying to access beyond buffer length")
            }

            function F(t, n, r, e, o, i) {
                if (!c.isBuffer(t)) throw new TypeError('"buffer" argument must be a Buffer instance');
                if (n > o || n < i) throw new RangeError('"value" argument is out of bounds');
                if (r + e > t.length) throw new RangeError("Index out of range")
            }

            function N(t, n, r, e) {
                n < 0 && (n = 65535 + n + 1);
                for (var o = 0, i = Math.min(t.length - r, 2); o < i; ++o) t[r + o] = (n & 255 << 8 * (e ? o : 1 - o)) >>> 8 * (e ? o : 1 - o)
            }

            function k(t, n, r, e) {
                n < 0 && (n = 4294967295 + n + 1);
                for (var o = 0, i = Math.min(t.length - r, 4); o < i; ++o) t[r + o] = n >>> 8 * (e ? o : 3 - o) & 255
            }

            function L(t, n, r, e, o, i) {
                if (r + e > t.length) throw new RangeError("Index out of range");
                if (r < 0) throw new RangeError("Index out of range")
            }

            function C(t, n, r, e, i) {
                return i || L(t, 0, r, 4), o.write(t, n, r, e, 23, 4), r + 4
            }

            function B(t, n, r, e, i) {
                return i || L(t, 0, r, 8), o.write(t, n, r, e, 52, 8), r + 8
            }

            c.prototype.slice = function (t, n) {
                var r, e = this.length;
                if ((t = ~~t) < 0 ? (t += e) < 0 && (t = 0) : t > e && (t = e), (n = void 0 === n ? e : ~~n) < 0 ? (n += e) < 0 && (n = 0) : n > e && (n = e), n < t && (n = t), c.TYPED_ARRAY_SUPPORT) (r = this.subarray(t, n)).__proto__ = c.prototype; else {
                    var o = n - t;
                    r = new c(o, void 0);
                    for (var i = 0; i < o; ++i) r[i] = this[i + t]
                }
                return r
            }, c.prototype.readUIntLE = function (t, n, r) {
                t |= 0, n |= 0, r || I(t, n, this.length);
                for (var e = this[t], o = 1, i = 0; ++i < n && (o *= 256);) e += this[t + i] * o;
                return e
            }, c.prototype.readUIntBE = function (t, n, r) {
                t |= 0, n |= 0, r || I(t, n, this.length);
                for (var e = this[t + --n], o = 1; n > 0 && (o *= 256);) e += this[t + --n] * o;
                return e
            }, c.prototype.readUInt8 = function (t, n) {
                return n || I(t, 1, this.length), this[t]
            }, c.prototype.readUInt16LE = function (t, n) {
                return n || I(t, 2, this.length), this[t] | this[t + 1] << 8
            }, c.prototype.readUInt16BE = function (t, n) {
                return n || I(t, 2, this.length), this[t] << 8 | this[t + 1]
            }, c.prototype.readUInt32LE = function (t, n) {
                return n || I(t, 4, this.length), (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + 16777216 * this[t + 3]
            }, c.prototype.readUInt32BE = function (t, n) {
                return n || I(t, 4, this.length), 16777216 * this[t] + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3])
            }, c.prototype.readIntLE = function (t, n, r) {
                t |= 0, n |= 0, r || I(t, n, this.length);
                for (var e = this[t], o = 1, i = 0; ++i < n && (o *= 256);) e += this[t + i] * o;
                return e >= (o *= 128) && (e -= Math.pow(2, 8 * n)), e
            }, c.prototype.readIntBE = function (t, n, r) {
                t |= 0, n |= 0, r || I(t, n, this.length);
                for (var e = n, o = 1, i = this[t + --e]; e > 0 && (o *= 256);) i += this[t + --e] * o;
                return i >= (o *= 128) && (i -= Math.pow(2, 8 * n)), i
            }, c.prototype.readInt8 = function (t, n) {
                return n || I(t, 1, this.length), 128 & this[t] ? -1 * (255 - this[t] + 1) : this[t]
            }, c.prototype.readInt16LE = function (t, n) {
                n || I(t, 2, this.length);
                var r = this[t] | this[t + 1] << 8;
                return 32768 & r ? 4294901760 | r : r
            }, c.prototype.readInt16BE = function (t, n) {
                n || I(t, 2, this.length);
                var r = this[t + 1] | this[t] << 8;
                return 32768 & r ? 4294901760 | r : r
            }, c.prototype.readInt32LE = function (t, n) {
                return n || I(t, 4, this.length), this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24
            }, c.prototype.readInt32BE = function (t, n) {
                return n || I(t, 4, this.length), this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]
            }, c.prototype.readFloatLE = function (t, n) {
                return n || I(t, 4, this.length), o.read(this, t, !0, 23, 4)
            }, c.prototype.readFloatBE = function (t, n) {
                return n || I(t, 4, this.length), o.read(this, t, !1, 23, 4)
            }, c.prototype.readDoubleLE = function (t, n) {
                return n || I(t, 8, this.length), o.read(this, t, !0, 52, 8)
            }, c.prototype.readDoubleBE = function (t, n) {
                return n || I(t, 8, this.length), o.read(this, t, !1, 52, 8)
            }, c.prototype.writeUIntLE = function (t, n, r, e) {
                (t = +t, n |= 0, r |= 0, e) || F(this, t, n, r, Math.pow(2, 8 * r) - 1, 0);
                var o = 1, i = 0;
                for (this[n] = 255 & t; ++i < r && (o *= 256);) this[n + i] = t / o & 255;
                return n + r
            }, c.prototype.writeUIntBE = function (t, n, r, e) {
                (t = +t, n |= 0, r |= 0, e) || F(this, t, n, r, Math.pow(2, 8 * r) - 1, 0);
                var o = r - 1, i = 1;
                for (this[n + o] = 255 & t; --o >= 0 && (i *= 256);) this[n + o] = t / i & 255;
                return n + r
            }, c.prototype.writeUInt8 = function (t, n, r) {
                return t = +t, n |= 0, r || F(this, t, n, 1, 255, 0), c.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), this[n] = 255 & t, n + 1
            }, c.prototype.writeUInt16LE = function (t, n, r) {
                return t = +t, n |= 0, r || F(this, t, n, 2, 65535, 0), c.TYPED_ARRAY_SUPPORT ? (this[n] = 255 & t, this[n + 1] = t >>> 8) : N(this, t, n, !0), n + 2
            }, c.prototype.writeUInt16BE = function (t, n, r) {
                return t = +t, n |= 0, r || F(this, t, n, 2, 65535, 0), c.TYPED_ARRAY_SUPPORT ? (this[n] = t >>> 8, this[n + 1] = 255 & t) : N(this, t, n, !1), n + 2
            }, c.prototype.writeUInt32LE = function (t, n, r) {
                return t = +t, n |= 0, r || F(this, t, n, 4, 4294967295, 0), c.TYPED_ARRAY_SUPPORT ? (this[n + 3] = t >>> 24, this[n + 2] = t >>> 16, this[n + 1] = t >>> 8, this[n] = 255 & t) : k(this, t, n, !0), n + 4
            }, c.prototype.writeUInt32BE = function (t, n, r) {
                return t = +t, n |= 0, r || F(this, t, n, 4, 4294967295, 0), c.TYPED_ARRAY_SUPPORT ? (this[n] = t >>> 24, this[n + 1] = t >>> 16, this[n + 2] = t >>> 8, this[n + 3] = 255 & t) : k(this, t, n, !1), n + 4
            }, c.prototype.writeIntLE = function (t, n, r, e) {
                if (t = +t, n |= 0, !e) {
                    var o = Math.pow(2, 8 * r - 1);
                    F(this, t, n, r, o - 1, -o)
                }
                var i = 0, u = 1, a = 0;
                for (this[n] = 255 & t; ++i < r && (u *= 256);) t < 0 && 0 === a && 0 !== this[n + i - 1] && (a = 1), this[n + i] = (t / u >> 0) - a & 255;
                return n + r
            }, c.prototype.writeIntBE = function (t, n, r, e) {
                if (t = +t, n |= 0, !e) {
                    var o = Math.pow(2, 8 * r - 1);
                    F(this, t, n, r, o - 1, -o)
                }
                var i = r - 1, u = 1, a = 0;
                for (this[n + i] = 255 & t; --i >= 0 && (u *= 256);) t < 0 && 0 === a && 0 !== this[n + i + 1] && (a = 1), this[n + i] = (t / u >> 0) - a & 255;
                return n + r
            }, c.prototype.writeInt8 = function (t, n, r) {
                return t = +t, n |= 0, r || F(this, t, n, 1, 127, -128), c.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), t < 0 && (t = 255 + t + 1), this[n] = 255 & t, n + 1
            }, c.prototype.writeInt16LE = function (t, n, r) {
                return t = +t, n |= 0, r || F(this, t, n, 2, 32767, -32768), c.TYPED_ARRAY_SUPPORT ? (this[n] = 255 & t, this[n + 1] = t >>> 8) : N(this, t, n, !0), n + 2
            }, c.prototype.writeInt16BE = function (t, n, r) {
                return t = +t, n |= 0, r || F(this, t, n, 2, 32767, -32768), c.TYPED_ARRAY_SUPPORT ? (this[n] = t >>> 8, this[n + 1] = 255 & t) : N(this, t, n, !1), n + 2
            }, c.prototype.writeInt32LE = function (t, n, r) {
                return t = +t, n |= 0, r || F(this, t, n, 4, 2147483647, -2147483648), c.TYPED_ARRAY_SUPPORT ? (this[n] = 255 & t, this[n + 1] = t >>> 8, this[n + 2] = t >>> 16, this[n + 3] = t >>> 24) : k(this, t, n, !0), n + 4
            }, c.prototype.writeInt32BE = function (t, n, r) {
                return t = +t, n |= 0, r || F(this, t, n, 4, 2147483647, -2147483648), t < 0 && (t = 4294967295 + t + 1), c.TYPED_ARRAY_SUPPORT ? (this[n] = t >>> 24, this[n + 1] = t >>> 16, this[n + 2] = t >>> 8, this[n + 3] = 255 & t) : k(this, t, n, !1), n + 4
            }, c.prototype.writeFloatLE = function (t, n, r) {
                return C(this, t, n, !0, r)
            }, c.prototype.writeFloatBE = function (t, n, r) {
                return C(this, t, n, !1, r)
            }, c.prototype.writeDoubleLE = function (t, n, r) {
                return B(this, t, n, !0, r)
            }, c.prototype.writeDoubleBE = function (t, n, r) {
                return B(this, t, n, !1, r)
            }, c.prototype.copy = function (t, n, r, e) {
                if (r || (r = 0), e || 0 === e || (e = this.length), n >= t.length && (n = t.length), n || (n = 0), e > 0 && e < r && (e = r), e === r) return 0;
                if (0 === t.length || 0 === this.length) return 0;
                if (n < 0) throw new RangeError("targetStart out of bounds");
                if (r < 0 || r >= this.length) throw new RangeError("sourceStart out of bounds");
                if (e < 0) throw new RangeError("sourceEnd out of bounds");
                e > this.length && (e = this.length), t.length - n < e - r && (e = t.length - n + r);
                var o, i = e - r;
                if (this === t && r < n && n < e) for (o = i - 1; o >= 0; --o) t[o + n] = this[o + r]; else if (i < 1e3 || !c.TYPED_ARRAY_SUPPORT) for (o = 0; o < i; ++o) t[o + n] = this[o + r]; else Uint8Array.prototype.set.call(t, this.subarray(r, r + i), n);
                return i
            }, c.prototype.fill = function (t, n, r, e) {
                if ("string" == typeof t) {
                    if ("string" == typeof n ? (e = n, n = 0, r = this.length) : "string" == typeof r && (e = r, r = this.length), 1 === t.length) {
                        var o = t.charCodeAt(0);
                        o < 256 && (t = o)
                    }
                    if (void 0 !== e && "string" != typeof e) throw new TypeError("encoding must be a string");
                    if ("string" == typeof e && !c.isEncoding(e)) throw new TypeError("Unknown encoding: " + e)
                } else "number" == typeof t && (t &= 255);
                if (n < 0 || this.length < n || this.length < r) throw new RangeError("Out of range index");
                if (r <= n) return this;
                var i;
                if (n >>>= 0, r = void 0 === r ? this.length : r >>> 0, t || (t = 0), "number" == typeof t) for (i = n; i < r; ++i) this[i] = t; else {
                    var u = c.isBuffer(t) ? t : Y(new c(t, e).toString()), a = u.length;
                    for (i = 0; i < r - n; ++i) this[i + n] = u[i % a]
                }
                return this
            };
            var U = /[^+\/0-9A-Za-z-_]/g;

            function D(t) {
                return t < 16 ? "0" + t.toString(16) : t.toString(16)
            }

            function Y(t, n) {
                var r;
                n = n || 1 / 0;
                for (var e = t.length, o = null, i = [], u = 0; u < e; ++u) {
                    if ((r = t.charCodeAt(u)) > 55295 && r < 57344) {
                        if (!o) {
                            if (r > 56319) {
                                (n -= 3) > -1 && i.push(239, 191, 189);
                                continue
                            }
                            if (u + 1 === e) {
                                (n -= 3) > -1 && i.push(239, 191, 189);
                                continue
                            }
                            o = r;
                            continue
                        }
                        if (r < 56320) {
                            (n -= 3) > -1 && i.push(239, 191, 189), o = r;
                            continue
                        }
                        r = 65536 + (o - 55296 << 10 | r - 56320)
                    } else o && (n -= 3) > -1 && i.push(239, 191, 189);
                    if (o = null, r < 128) {
                        if ((n -= 1) < 0) break;
                        i.push(r)
                    } else if (r < 2048) {
                        if ((n -= 2) < 0) break;
                        i.push(r >> 6 | 192, 63 & r | 128)
                    } else if (r < 65536) {
                        if ((n -= 3) < 0) break;
                        i.push(r >> 12 | 224, r >> 6 & 63 | 128, 63 & r | 128)
                    } else {
                        if (!(r < 1114112)) throw new Error("Invalid code point");
                        if ((n -= 4) < 0) break;
                        i.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, 63 & r | 128)
                    }
                }
                return i
            }

            function W(t) {
                return e.toByteArray(function (t) {
                    if ((t = function (t) {
                        return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "")
                    }(t).replace(U, "")).length < 2) return "";
                    for (; t.length % 4 != 0;) t += "=";
                    return t
                }(t))
            }

            function V(t, n, r, e) {
                for (var o = 0; o < e && !(o + r >= n.length || o >= t.length); ++o) n[o + r] = t[o];
                return o
            }
        }).call(this, r(324))
    }, function (t, n) {
        var r;
        r = function () {
            return this
        }();
        try {
            r = r || new Function("return this")()
        } catch (t) {
            "object" == typeof window && (r = window)
        }
        t.exports = r
    }, function (t, n, r) {
        "use strict";
        n.byteLength = function (t) {
            var n = f(t), r = n[0], e = n[1];
            return 3 * (r + e) / 4 - e
        }, n.toByteArray = function (t) {
            var n, r, e = f(t), u = e[0], a = e[1], c = new i(function (t, n, r) {
                return 3 * (n + r) / 4 - r
            }(0, u, a)), s = 0, l = a > 0 ? u - 4 : u;
            for (r = 0; r < l; r += 4) n = o[t.charCodeAt(r)] << 18 | o[t.charCodeAt(r + 1)] << 12 | o[t.charCodeAt(r + 2)] << 6 | o[t.charCodeAt(r + 3)], c[s++] = n >> 16 & 255, c[s++] = n >> 8 & 255, c[s++] = 255 & n;
            2 === a && (n = o[t.charCodeAt(r)] << 2 | o[t.charCodeAt(r + 1)] >> 4, c[s++] = 255 & n);
            1 === a && (n = o[t.charCodeAt(r)] << 10 | o[t.charCodeAt(r + 1)] << 4 | o[t.charCodeAt(r + 2)] >> 2, c[s++] = n >> 8 & 255, c[s++] = 255 & n);
            return c
        }, n.fromByteArray = function (t) {
            for (var n, r = t.length, o = r % 3, i = [], u = 0, a = r - o; u < a; u += 16383) i.push(s(t, u, u + 16383 > a ? a : u + 16383));
            1 === o ? (n = t[r - 1], i.push(e[n >> 2] + e[n << 4 & 63] + "==")) : 2 === o && (n = (t[r - 2] << 8) + t[r - 1], i.push(e[n >> 10] + e[n >> 4 & 63] + e[n << 2 & 63] + "="));
            return i.join("")
        };
        for (var e = [], o = [], i = "undefined" != typeof Uint8Array ? Uint8Array : Array, u = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", a = 0, c = u.length; a < c; ++a) e[a] = u[a], o[u.charCodeAt(a)] = a;

        function f(t) {
            var n = t.length;
            if (n % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
            var r = t.indexOf("=");
            return -1 === r && (r = n), [r, r === n ? 0 : 4 - r % 4]
        }

        function s(t, n, r) {
            for (var o, i, u = [], a = n; a < r; a += 3) o = (t[a] << 16 & 16711680) + (t[a + 1] << 8 & 65280) + (255 & t[a + 2]), u.push(e[(i = o) >> 18 & 63] + e[i >> 12 & 63] + e[i >> 6 & 63] + e[63 & i]);
            return u.join("")
        }

        o["-".charCodeAt(0)] = 62, o["_".charCodeAt(0)] = 63
    }, function (t, n) {
        n.read = function (t, n, r, e, o) {
            var i, u, a = 8 * o - e - 1, c = (1 << a) - 1, f = c >> 1, s = -7, l = r ? o - 1 : 0, h = r ? -1 : 1,
                p = t[n + l];
            for (l += h, i = p & (1 << -s) - 1, p >>= -s, s += a; s > 0; i = 256 * i + t[n + l], l += h, s -= 8) ;
            for (u = i & (1 << -s) - 1, i >>= -s, s += e; s > 0; u = 256 * u + t[n + l], l += h, s -= 8) ;
            if (0 === i) i = 1 - f; else {
                if (i === c) return u ? NaN : 1 / 0 * (p ? -1 : 1);
                u += Math.pow(2, e), i -= f
            }
            return (p ? -1 : 1) * u * Math.pow(2, i - e)
        }, n.write = function (t, n, r, e, o, i) {
            var u, a, c, f = 8 * i - o - 1, s = (1 << f) - 1, l = s >> 1,
                h = 23 === o ? Math.pow(2, -24) - Math.pow(2, -77) : 0, p = e ? 0 : i - 1, v = e ? 1 : -1,
                d = n < 0 || 0 === n && 1 / n < 0 ? 1 : 0;
            for (n = Math.abs(n), isNaN(n) || n === 1 / 0 ? (a = isNaN(n) ? 1 : 0, u = s) : (u = Math.floor(Math.log(n) / Math.LN2), n * (c = Math.pow(2, -u)) < 1 && (u--, c *= 2), (n += u + l >= 1 ? h / c : h * Math.pow(2, 1 - l)) * c >= 2 && (u++, c /= 2), u + l >= s ? (a = 0, u = s) : u + l >= 1 ? (a = (n * c - 1) * Math.pow(2, o), u += l) : (a = n * Math.pow(2, l - 1) * Math.pow(2, o), u = 0)); o >= 8; t[r + p] = 255 & a, p += v, a /= 256, o -= 8) ;
            for (u = u << o | a, f += o; f > 0; t[r + p] = 255 & u, p += v, u /= 256, f -= 8) ;
            t[r + p - v] |= 128 * d
        }
    }, function (t, n) {
        var r = {}.toString;
        t.exports = Array.isArray || function (t) {
            return "[object Array]" == r.call(t)
        }
    }, function (t, n, r) {
        t.exports = r(329)
    }, function (t, n, r) {
        "use strict";
        var e = r(13), o = r(124), i = r(331), u = r(130);

        function a(t) {
            var n = new i(t), r = o(i.prototype.request, n);
            return e.extend(r, i.prototype, n), e.extend(r, n), r
        }

        var c = a(r(127));
        c.Axios = i, c.create = function (t) {
            return a(u(c.defaults, t))
        }, c.Cancel = r(131), c.CancelToken = r(343), c.isCancel = r(126), c.all = function (t) {
            return Promise.all(t)
        }, c.spread = r(344), t.exports = c, t.exports.default = c
    }, function (t, n) {
        /*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
        t.exports = function (t) {
            return null != t && null != t.constructor && "function" == typeof t.constructor.isBuffer && t.constructor.isBuffer(t)
        }
    }, function (t, n, r) {
        "use strict";
        var e = r(13), o = r(125), i = r(332), u = r(333), a = r(130);

        function c(t) {
            this.defaults = t, this.interceptors = {request: new i, response: new i}
        }

        c.prototype.request = function (t) {
            "string" == typeof t ? (t = arguments[1] || {}).url = arguments[0] : t = t || {}, (t = a(this.defaults, t)).method = t.method ? t.method.toLowerCase() : "get";
            var n = [u, void 0], r = Promise.resolve(t);
            for (this.interceptors.request.forEach((function (t) {
                n.unshift(t.fulfilled, t.rejected)
            })), this.interceptors.response.forEach((function (t) {
                n.push(t.fulfilled, t.rejected)
            })); n.length;) r = r.then(n.shift(), n.shift());
            return r
        }, c.prototype.getUri = function (t) {
            return t = a(this.defaults, t), o(t.url, t.params, t.paramsSerializer).replace(/^\?/, "")
        }, e.forEach(["delete", "get", "head", "options"], (function (t) {
            c.prototype[t] = function (n, r) {
                return this.request(e.merge(r || {}, {method: t, url: n}))
            }
        })), e.forEach(["post", "put", "patch"], (function (t) {
            c.prototype[t] = function (n, r, o) {
                return this.request(e.merge(o || {}, {method: t, url: n, data: r}))
            }
        })), t.exports = c
    }, function (t, n, r) {
        "use strict";
        var e = r(13);

        function o() {
            this.handlers = []
        }

        o.prototype.use = function (t, n) {
            return this.handlers.push({fulfilled: t, rejected: n}), this.handlers.length - 1
        }, o.prototype.eject = function (t) {
            this.handlers[t] && (this.handlers[t] = null)
        }, o.prototype.forEach = function (t) {
            e.forEach(this.handlers, (function (n) {
                null !== n && t(n)
            }))
        }, t.exports = o
    }, function (t, n, r) {
        "use strict";
        var e = r(13), o = r(334), i = r(126), u = r(127), a = r(341), c = r(342);

        function f(t) {
            t.cancelToken && t.cancelToken.throwIfRequested()
        }

        t.exports = function (t) {
            return f(t), t.baseURL && !a(t.url) && (t.url = c(t.baseURL, t.url)), t.headers = t.headers || {}, t.data = o(t.data, t.headers, t.transformRequest), t.headers = e.merge(t.headers.common || {}, t.headers[t.method] || {}, t.headers || {}), e.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (function (n) {
                delete t.headers[n]
            })), (t.adapter || u.adapter)(t).then((function (n) {
                return f(t), n.data = o(n.data, n.headers, t.transformResponse), n
            }), (function (n) {
                return i(n) || (f(t), n && n.response && (n.response.data = o(n.response.data, n.response.headers, t.transformResponse))), Promise.reject(n)
            }))
        }
    }, function (t, n, r) {
        "use strict";
        var e = r(13);
        t.exports = function (t, n, r) {
            return e.forEach(r, (function (r) {
                t = r(t, n)
            })), t
        }
    }, function (t, n, r) {
        "use strict";
        var e = r(13);
        t.exports = function (t, n) {
            e.forEach(t, (function (r, e) {
                e !== n && e.toUpperCase() === n.toUpperCase() && (t[n] = r, delete t[e])
            }))
        }
    }, function (t, n, r) {
        "use strict";
        var e = r(129);
        t.exports = function (t, n, r) {
            var o = r.config.validateStatus;
            !o || o(r.status) ? t(r) : n(e("Request failed with status code " + r.status, r.config, null, r.request, r))
        }
    }, function (t, n, r) {
        "use strict";
        t.exports = function (t, n, r, e, o) {
            return t.config = n, r && (t.code = r), t.request = e, t.response = o, t.isAxiosError = !0, t.toJSON = function () {
                return {
                    message: this.message,
                    name: this.name,
                    description: this.description,
                    number: this.number,
                    fileName: this.fileName,
                    lineNumber: this.lineNumber,
                    columnNumber: this.columnNumber,
                    stack: this.stack,
                    config: this.config,
                    code: this.code
                }
            }, t
        }
    }, function (t, n, r) {
        "use strict";
        var e = r(13),
            o = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];
        t.exports = function (t) {
            var n, r, i, u = {};
            return t ? (e.forEach(t.split("\n"), (function (t) {
                if (i = t.indexOf(":"), n = e.trim(t.substr(0, i)).toLowerCase(), r = e.trim(t.substr(i + 1)), n) {
                    if (u[n] && o.indexOf(n) >= 0) return;
                    u[n] = "set-cookie" === n ? (u[n] ? u[n] : []).concat([r]) : u[n] ? u[n] + ", " + r : r
                }
            })), u) : u
        }
    }, function (t, n, r) {
        "use strict";
        var e = r(13);
        t.exports = e.isStandardBrowserEnv() ? function () {
            var t, n = /(msie|trident)/i.test(navigator.userAgent), r = document.createElement("a");

            function o(t) {
                var e = t;
                return n && (r.setAttribute("href", e), e = r.href), r.setAttribute("href", e), {
                    href: r.href,
                    protocol: r.protocol ? r.protocol.replace(/:$/, "") : "",
                    host: r.host,
                    search: r.search ? r.search.replace(/^\?/, "") : "",
                    hash: r.hash ? r.hash.replace(/^#/, "") : "",
                    hostname: r.hostname,
                    port: r.port,
                    pathname: "/" === r.pathname.charAt(0) ? r.pathname : "/" + r.pathname
                }
            }

            return t = o(window.location.href), function (n) {
                var r = e.isString(n) ? o(n) : n;
                return r.protocol === t.protocol && r.host === t.host
            }
        }() : function () {
            return !0
        }
    }, function (t, n, r) {
        "use strict";
        var e = r(13);
        t.exports = e.isStandardBrowserEnv() ? {
            write: function (t, n, r, o, i, u) {
                var a = [];
                a.push(t + "=" + encodeURIComponent(n)), e.isNumber(r) && a.push("expires=" + new Date(r).toGMTString()), e.isString(o) && a.push("path=" + o), e.isString(i) && a.push("domain=" + i), !0 === u && a.push("secure"), document.cookie = a.join("; ")
            }, read: function (t) {
                var n = document.cookie.match(new RegExp("(^|;\\s*)(" + t + ")=([^;]*)"));
                return n ? decodeURIComponent(n[3]) : null
            }, remove: function (t) {
                this.write(t, "", Date.now() - 864e5)
            }
        } : {
            write: function () {
            }, read: function () {
                return null
            }, remove: function () {
            }
        }
    }, function (t, n, r) {
        "use strict";
        t.exports = function (t) {
            return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t)
        }
    }, function (t, n, r) {
        "use strict";
        t.exports = function (t, n) {
            return n ? t.replace(/\/+$/, "") + "/" + n.replace(/^\/+/, "") : t
        }
    }, function (t, n, r) {
        "use strict";
        var e = r(131);

        function o(t) {
            if ("function" != typeof t) throw new TypeError("executor must be a function.");
            var n;
            this.promise = new Promise((function (t) {
                n = t
            }));
            var r = this;
            t((function (t) {
                r.reason || (r.reason = new e(t), n(r.reason))
            }))
        }

        o.prototype.throwIfRequested = function () {
            if (this.reason) throw this.reason
        }, o.source = function () {
            var t;
            return {
                token: new o((function (n) {
                    t = n
                })), cancel: t
            }
        }, t.exports = o
    }, function (t, n, r) {
        "use strict";
        t.exports = function (t) {
            return function (n) {
                return t.apply(null, n)
            }
        }
    }, function (t, n) {
        t.exports = "object" == typeof self ? self.FormData : window.FormData
    }, function (t, n, r) {
        "use strict";

        function e(t) {
            return (e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function o(t, n, r, e, o, i, u) {
            try {
                var a = t[i](u), c = a.value
            } catch (t) {
                return void r(t)
            }
            a.done ? n(c) : Promise.resolve(c).then(e, o)
        }

        function i(t) {
            return function () {
                var n = this, r = arguments;
                return new Promise((function (e, i) {
                    var u = t.apply(n, r);

                    function a(t) {
                        o(u, e, i, a, c, "next", t)
                    }

                    function c(t) {
                        o(u, e, i, a, c, "throw", t)
                    }

                    a(void 0)
                }))
            }
        }

        var u = r(132).baseUrl,
            a = ["rgb(173, 35, 35)", "rgb(42, 75, 215)", "rgb(87, 87, 87)", "rgb(29, 105, 20)", "rgb(129, 74, 25)", "rgb(129, 38, 192)", "rgb(160, 160, 160)", "rgb(129, 197, 122)", "rgb(157, 175, 255)", "rgb(41, 208, 208)", "rgb(255, 146, 51)", "rgb(199, 183, 0)", "rgb(233, 222, 187)", "rgb(255, 205, 243)"],
            c = new RegExp("^([a-z]+://|//)", "i"), f = new RegExp("^(data|blob):", "i");

        function s(t) {
            return c.test(t) || f.test(t) ? t : u + t
        }

        function l(t, n, r) {
            var e = [], o = !0, i = !1, u = void 0;
            try {
                for (var a, c = t[Symbol.iterator](); !(o = (a = c.next()).done); o = !0) {
                    var f = a.value;
                    if (!(f.length < 2)) {
                        e.push("M");
                        var s = !0, l = !0, h = !1, p = void 0;
                        try {
                            for (var v, d = f[Symbol.iterator](); !(l = (v = d.next()).done); l = !0) {
                                var y = v.value;
                                if (e.push(y[0] - n + "," + (y[1] - r)), isNaN(y[0]) || isNaN(y[1])) return console.log("not showing invalid polygon, found NaN"), "";
                                s && (e.push("L"), s = !1)
                            }
                        } catch (t) {
                            h = !0, p = t
                        } finally {
                            try {
                                l || null == d.return || d.return()
                            } finally {
                                if (h) throw p
                            }
                        }
                        e.push("z")
                    }
                }
            } catch (t) {
                i = !0, u = t
            } finally {
                try {
                    o || null == c.return || c.return()
                } finally {
                    if (i) throw u
                }
            }
            return e.join(" ")
        }

        function h(t) {
            return p.apply(this, arguments)
        }

        function p() {
            return (p = i(regeneratorRuntime.mark((function t(n) {
                var r, e;
                return regeneratorRuntime.wrap((function (t) {
                    for (; ;) switch (t.prev = t.next) {
                        case 0:
                            if (!n.err) {
                                t.next = 3;
                                break
                            }
                            return console.log("cannot get result page data for error result"), t.abrupt("return", n);
                        case 3:
                            return t.next = 5, fetch(u + "/get_standard_api_result_data/" + n.id, {credentials: "include"});
                        case 5:
                            return r = t.sent, t.next = 8, r.json();
                        case 8:
                            return r = t.sent, e = r.result_data, t.abrupt("return", {
                                err: n.err,
                                output: n.output,
                                output_url: n.output_url,
                                id: n.id,
                                inputs: e.inputs,
                                visualizer_data: e.visualizer_data,
                                scale_applied: e.scale_applied
                            });
                        case 11:
                        case"end":
                            return t.stop()
                    }
                }), t)
            })))).apply(this, arguments)
        }

        function v() {
            return (v = i(regeneratorRuntime.mark((function t(n, r) {
                var e;
                return regeneratorRuntime.wrap((function (t) {
                    for (; ;) switch (t.prev = t.next) {
                        case 0:
                            return console.log("getting result page data"), t.next = 3, h(n);
                        case 3:
                            return e = t.sent, console.log("got result page data"), t.abrupt("return", d(e, r));
                        case 6:
                        case"end":
                            return t.stop()
                    }
                }), t)
            })))).apply(this, arguments)
        }

        function d(t, n) {
            if (n.innerHTML = "", t.err) return n.innerHTML = err, !1;
            if (t.output) {
                if (console.log("got json or text output"), "string" == typeof t.output) {
                    (h = document.createElement("div")).style.width = "100%", h.style.height = "100%", h.style.overflow = "auto", h.style.display = "flex", h.style.alignItems = "center", h.style.flexDirection = "column", n.appendChild(h), (p = document.createElement("pre")).textContent = t.output, p.style.whiteSpace = "pre-wrap", p.style.margin = "0px", h.appendChild(p);
                    var r = !0, o = !1, i = void 0;
                    try {
                        for (var u, c = t.inputs[Symbol.iterator](); !(r = (u = c.next()).done); r = !0) {
                            if ((b = u.value).is_img) (w = document.createElement("img")).src = s(b.url), w.style.position = "relative", w.style.width = "100%", w.style.height = "100%%", w.style.objectFit = "contain", h.appendChild(w)
                        }
                    } catch (t) {
                        o = !0, i = t
                    } finally {
                        try {
                            r || null == c.return || c.return()
                        } finally {
                            if (o) throw i
                        }
                    }
                    return !0
                }
                if ("object" === e(t.output)) {
                    if (1 == t.inputs.length && t.inputs[0].is_img && t.visualizer_data) {
                        console.log("have visualizer for result JSON");
                        var f = document.createElement("iframe");
                        return f.onload = function () {
                            var n = f.contentDocument.body;
                            n.style.margin = "0px", n.style.overflow = "hidden";
                            var r = document.createElement("boundingboxcontainer");
                            r.style.position = "relative", r.style.opacity = "0.001", n.appendChild(r);
                            var e = document.createElement("img");
                            e.src = s(t.inputs[0].url), e.style.position = "absolute", r.appendChild(e);
                            var o = function () {
                                console.log("iframe resize"), f.contentDocument.body.style.transform = null;
                                var t = f.contentDocument.body.scrollWidth, n = f.contentDocument.body.scrollHeight,
                                    o = e.offsetWidth, i = e.offsetHeight, u = f.offsetWidth, a = f.offsetHeight, c = 0,
                                    s = 0;
                                if (o < t && i < n) {
                                    var l = u / o, h = a / i;
                                    c = u - o * (p = Math.min(l, h)), s = a - i * p
                                } else {
                                    var p;
                                    l = u / t, h = a / n;
                                    c = u - t * (p = Math.min(l, h)), s = a - n * p
                                }
                                c /= p, s /= p, f.contentDocument.body.style.transformOrigin = "top left", f.contentDocument.body.style.transform = "scale(" + p + ")", r.style.setProperty("--scaleapplied", p), r.style.setProperty("--fontscale", 100 / p + "%"), r.style.left = c / 2 + "px", r.style.top = s / 2 + "px", r.style.opacity = "1"
                            };
                            f.contentWindow.onresize = o, e.onload = o;
                            var i = function (t, n, r) {
                                var e = (t = JSON.parse(JSON.stringify(t)))[n.list_key];
                                e.sort((function (t, n) {
                                    return n.confidence - t.confidence
                                }));
                                for (var o = Math.min(15, e.length), i = [], u = 0; u < o; u++) {
                                    var a, c = e[u];
                                    if ("demographic" == n.label_key) a = c[n.label_key] ? c[n.label_key] : c.cultural_appearance + " " + c.gender + ", " + c.age_range[0] + "-" + c.age_range[1]; else if ("people" == n.label_key) {
                                        var f = [];
                                        c["facial-expression-recognition"] && null != c["facial-expression-recognition"].emotion && f.push((j = c["facial-expression-recognition"].emotion).charAt(0).toUpperCase() + j.slice(1)), c["demographic-recognition"] && null != c["demographic-recognition"].cultural_appearance && f.push(c["demographic-recognition"].cultural_appearance + " " + c["demographic-recognition"].gender + ", " + c["demographic-recognition"].age_range[0] + "-" + c["demographic-recognition"].age_range[1]), c["celebrity-recognition"] && null != c["celebrity-recognition"].name && "unknown" != c["celebrity-recognition"].name && f.push(c["celebrity-recognition"].name.replace(/\w\S*/g, (function (t) {
                                            return t.charAt(0).toUpperCase() + t.substr(1).toLowerCase()
                                        }))), a = f.length > 0 ? f.join(", ") : "Face"
                                    } else if ("pose" == n.label_key) {
                                        a = "";
                                        for (var s = [], l = 0, h = [["nose", "right_eye"], ["nose", "left_eye"], ["right_eye", "right_ear"], ["left_eye", "left_ear"], ["right_shoulder", "right_elbow"], ["left_shoulder", "left_elbow"], ["right_elbow", "right_hand"], ["left_elbow", "left_hand"], ["right_hip", "right_knee"], ["left_hip", "left_knee"], ["right_knee", "right_foot"], ["left_knee", "left_foot"]]; l < h.length; l++) {
                                            var p = h[l], v = c[n.label_key][p[0]], d = c[n.label_key][p[1]];
                                            if (v && d) {
                                                v = JSON.parse(JSON.stringify(v)), d = JSON.parse(JSON.stringify(d));
                                                var y = [v, d];
                                                s.push(y)
                                            }
                                        }
                                        c.mask_vertices = s
                                    } else if ((a = c[n.label_key]) && a.constructor === String) ; else {
                                        var g = Object.keys(a);
                                        a = 1 == g.length ? a[g[0]] : JSON.stringify(a)
                                    }
                                    if (c.bounding_box && (c.bounding_box[0] *= r, c.bounding_box[1] *= r, c.bounding_box[2] *= r, c.bounding_box[3] *= r), c.mask_vertices) {
                                        var m = !0, b = !1, w = void 0;
                                        try {
                                            for (var x, S = c.mask_vertices[Symbol.iterator](); !(m = (x = S.next()).done); m = !0) {
                                                var _ = x.value, E = !0, A = !1, P = void 0;
                                                try {
                                                    for (var O, R = _[Symbol.iterator](); !(E = (O = R.next()).done); E = !0) {
                                                        var T = O.value;
                                                        T[0] *= r, T[1] *= r
                                                    }
                                                } catch (t) {
                                                    A = !0, P = t
                                                } finally {
                                                    try {
                                                        E || null == R.return || R.return()
                                                    } finally {
                                                        if (A) throw P
                                                    }
                                                }
                                            }
                                        } catch (t) {
                                            b = !0, w = t
                                        } finally {
                                            try {
                                                m || null == S.return || S.return()
                                            } finally {
                                                if (b) throw w
                                            }
                                        }
                                    }
                                    i.push({bounding_box: c.bounding_box, mask_vertices: c.mask_vertices, caption: a})
                                }
                                var j;
                                return i
                            }(t.output, t.visualizer_data, t.scale_applied);
                            console.log("processed annotations", i);
                            var u = 0, c = !0, h = !1, p = void 0;
                            try {
                                for (var v, d = i[Symbol.iterator](); !(c = (v = d.next()).done); c = !0) {
                                    var y, g, m, b, w = v.value, x = document.createElement("boundingbox");
                                    x.style.position = "absolute";
                                    var S = a[u++ % a.length];
                                    if (w.mask_vertices) {
                                        var _ = null, E = null, A = null, P = null, O = !0, R = !1, T = void 0;
                                        try {
                                            for (var j, M = w.mask_vertices[Symbol.iterator](); !(O = (j = M.next()).done); O = !0) {
                                                var I = j.value, F = !0, N = !1, k = void 0;
                                                try {
                                                    for (var L, C = I[Symbol.iterator](); !(F = (L = C.next()).done); F = !0) {
                                                        var B = L.value, U = B[0], D = B[1];
                                                        (null === _ || U < _) && (_ = U), (null === E || D < E) && (E = D), (null === A || U > A) && (A = U), (null === P || D > P) && (P = D)
                                                    }
                                                } catch (t) {
                                                    N = !0, k = t
                                                } finally {
                                                    try {
                                                        F || null == C.return || C.return()
                                                    } finally {
                                                        if (N) throw k
                                                    }
                                                }
                                            }
                                        } catch (t) {
                                            R = !0, T = t
                                        } finally {
                                            try {
                                                O || null == M.return || M.return()
                                            } finally {
                                                if (R) throw T
                                            }
                                        }
                                        m = A - _, b = P - E, y = _, g = E;
                                        var Y = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                                        Y.style.position = "absolute", Y.style.overflow = "visible", Y.style.width = m + "px", Y.style.height = b + "px";
                                        var W = document.createElementNS("http://www.w3.org/2000/svg", "path");
                                        W.setAttributeNS(null, "d", l(w.mask_vertices, y, g)), W.style.fill = "none", W.style.stroke = S, W.style.strokeWidth = "calc(2px / var(--scaleapplied))", Y.appendChild(W), x.appendChild(Y), x.style.border = "none"
                                    } else {
                                        if (!w.bounding_box) throw new Exception("Neither mask_vertices or bounding_box is passed, unknown annotation format");
                                        y = w.bounding_box[0], g = w.bounding_box[1], m = w.bounding_box[2], b = w.bounding_box[3], x.style.border = "calc(2px / var(--scaleapplied)) solid " + S
                                    }
                                    x.style.left = y + "px", x.style.top = g + "px", x.style.width = m + "px", x.style.height = b + "px", r.appendChild(x);
                                    var V = document.createElement("boundingboxlabel");
                                    V.textContent = w.caption, V.style.color = "white", V.style.fontFamily = "arial", V.style.backgroundColor = S, V.style.fontSize = "var(--fontscale)", V.style.position = "absolute", x.appendChild(V)
                                }
                            } catch (t) {
                                h = !0, p = t
                            } finally {
                                try {
                                    c || null == d.return || d.return()
                                } finally {
                                    if (h) throw p
                                }
                            }
                        }, f.src = "about:blank", f.style.border = "none", f.style.width = "100%", f.style.height = "100%", n.appendChild(f), !0
                    }
                    var h, p;
                    console.log("no visualizer for result JSON"), (h = document.createElement("div")).style.width = "100%", h.style.height = "100%", h.style.overflow = "auto", h.style.display = "flex", h.style.alignItems = "center", h.style.flexDirection = "column", n.appendChild(h), (p = document.createElement("pre")).style.margin = "0px", p.textContent = JSON.stringify(t.output, null, 4), h.appendChild(p);
                    var v = !0, d = !1, y = void 0;
                    try {
                        for (var g, m = t.inputs[Symbol.iterator](); !(v = (g = m.next()).done); v = !0) {
                            var b;
                            if ((b = g.value).is_img) (w = document.createElement("img")).src = s(b.url), w.style.width = "100%", w.style.height = "79%", w.style.objectFit = "contain", h.appendChild(w)
                        }
                    } catch (t) {
                        d = !0, y = t
                    } finally {
                        try {
                            v || null == m.return || m.return()
                        } finally {
                            if (d) throw y
                        }
                    }
                    return !0
                }
                return n.innerHTML = "Model returned an unknown data type.", !1
            }
            var w;
            return t.output_url ? (console.log("got image output"), (w = document.createElement("img")).src = t.output_url, w.style.position = "relative", w.style.width = "100%", w.style.height = "100%", w.style.objectFit = "contain", n.appendChild(w), !0) : (n.innerHTML = "Model did not return an output or an error.", !1)
        }

        t.exports = {
            renderResultIntoElement: function (t, n) {
                return v.apply(this, arguments)
            }, renderAnnotatedResultIntoElement: d
        }
    }, function (t, n, r) {
        "use strict";
        r(89);
        t.exports = {apiKey: null}
    }])
}));
//# sourceMappingURL=deepai.min.map
console.log("Deepai loaded!");

//The above is just easier to deal with.


deepai.setApiKey('ae158c0c-821b-4319-934e-b8556ee36e39');

function summarize(text) {
    return deepai.callStandardApi("summarization", {
        text: text
    }).then(function (result) {
        return result.output;
    }).catch(function (error) {
        console.log(error);
        return error;
    });
}

function set_phase(int) {
    chrome.storage.local.set({'phase': int}, function () {
        console.log('phase is set to ' + int);
    });
}

//BELOW ARE TWO DIFFERENT WAYS TO CHANGE THE THINGS WITHIN A PARAGRAPH TEXT
function censor_paragraph() {
    let elts = document.getElementsByTagName('p');
    for (let i = 0; i < elts.length; i++) {
        elts[i].style.backgroundColor = 'black';
    }

    let subheaders = document.getElementsByTagName('strong');
    for (let i = 0; i < subheaders.length; i++) {
        subheaders[i].style.backgroundColor = 'white';
    }
}

(function () {//turns paragraphs into kittens
    console.log("calling summarize");
    let paragraphs = document.getElementsByTagName('p');
    for (let i = 0; i < paragraphs.length; ++i) {

        paragraphs[i].innerHTML = 'kittens!';
    }
})();

function uncensor_paragraph() {
    let elts = document.getElementsByTagName('p');
    for (let i = 0; i < elts.length; i++) {
        elts[i].style.backgroundColor = 'white';
    }
}

// Callback for when a message is received from background script
function gotMessage(request, sender, sendResponse) {
    if (request === "next-phase") {
        chrome.storage.local.get(['phase'], function (result) {
            censor_paragraph();
            set_phase(result.phase + 1);
        })
    }
    else if (request === "reset"){
        uncensor_paragraph();
        set_phase(0);
    }
    console.log('because of asynchronous method, this comes up first');
}

var coll = document.getElementsByTagName('h1');
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display !== "none") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}

chrome.runtime.onMessage.addListener(gotMessage);

set_phase(0);

