var eosjs_jsonrpc2 = function(t) {
    var e = {};
    function r(n) {
        if (e[n])
            return e[n].exports;
        var o = e[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return t[n].call(o.exports, o, o.exports, r),
        o.l = !0,
        o.exports
    }
    return r.m = t,
    r.c = e,
    r.d = function(t, e, n) {
        r.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: n
        })
    }
    ,
    r.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }
    ,
    r.t = function(t, e) {
        if (1 & e && (t = r(t)),
        8 & e)
            return t;
        if (4 & e && "object" == typeof t && t && t.__esModule)
            return t;
        var n = Object.create(null);
        if (r.r(n),
        Object.defineProperty(n, "default", {
            enumerable: !0,
            value: t
        }),
        2 & e && "string" != typeof t)
            for (var o in t)
                r.d(n, o, function(e) {
                    return t[e]
                }
                .bind(null, o));
        return n
    }
    ,
    r.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        }
        : function() {
            return t
        }
        ;
        return r.d(e, "a", e),
        e
    }
    ,
    r.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }
    ,
    r.p = "",
    r(r.s = 57)
}({
    11: function(t, e, r) {
        "use strict";
        var n = this && this.__read || function(t, e) {
            var r = "function" == typeof Symbol && t[Symbol.iterator];
            if (!r)
                return t;
            var n, o, i = r.call(t), a = [];
            try {
                for (; (void 0 === e || e-- > 0) && !(n = i.next()).done; )
                    a.push(n.value)
            } catch (t) {
                o = {
                    error: t
                }
            } finally {
                try {
                    n && !n.done && (r = i.return) && r.call(i)
                } finally {
                    if (o)
                        throw o.error
                }
            }
            return a
        }
          , o = this && this.__spread || function() {
            for (var t = [], e = 0; e < arguments.length; e++)
                t = t.concat(n(arguments[e]));
            return t
        }
          , i = this && this.__values || function(t) {
            var e = "function" == typeof Symbol && t[Symbol.iterator]
              , r = 0;
            return e ? e.call(t) : {
                next: function() {
                    return t && r >= t.length && (t = void 0),
                    {
                        value: t && t[r++],
                        done: !t
                    }
                }
            }
        }
        ;
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = r(12).RIPEMD160.hash
          , c = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
          , u = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
        var s = function() {
            for (var t = Array(256).fill(-1), e = 0; e < c.length; ++e)
                t[c.charCodeAt(e)] = e;
            return t
        }();
        var f = function() {
            for (var t = Array(256).fill(-1), e = 0; e < u.length; ++e)
                t[u.charCodeAt(e)] = e;
            return t["=".charCodeAt(0)] = 0,
            t
        }();
        function l(t) {
            return 0 != (128 & t[t.length - 1])
        }
        function h(t) {
            for (var e = 1, r = 0; r < t.length; ++r) {
                var n = (255 & ~t[r]) + e;
                t[r] = n,
                e = n >> 8
            }
        }
        function d(t, e) {
            for (var r = new Uint8Array(t), n = 0; n < e.length; ++n) {
                var o = e.charCodeAt(n);
                if (o < "0".charCodeAt(0) || o > "9".charCodeAt(0))
                    throw new Error("invalid number");
                for (var i = o - "0".charCodeAt(0), a = 0; a < t; ++a) {
                    var c = 10 * r[a] + i;
                    r[a] = c,
                    i = c >> 8
                }
                if (i)
                    throw new Error("number is out of range")
            }
            return r
        }
        function v(t, e) {
            void 0 === e && (e = 1);
            for (var r = Array(e).fill("0".charCodeAt(0)), n = t.length - 1; n >= 0; --n) {
                for (var i = t[n], a = 0; a < r.length; ++a) {
                    var c = (r[a] - "0".charCodeAt(0) << 8) + i;
                    r[a] = "0".charCodeAt(0) + c % 10,
                    i = c / 10 | 0
                }
                for (; i; )
                    r.push("0".charCodeAt(0) + i % 10),
                    i = i / 10 | 0
            }
            return r.reverse(),
            String.fromCharCode.apply(String, o(r))
        }
        function y(t, e) {
            for (var r = new Uint8Array(t), n = 0; n < e.length; ++n) {
                var o = s[e.charCodeAt(n)];
                if (o < 0)
                    throw new Error("invalid base-58 value");
                for (var i = 0; i < t; ++i) {
                    var a = 58 * r[i] + o;
                    r[i] = a,
                    o = a >> 8
                }
                if (o)
                    throw new Error("base-58 value is out of range")
            }
            return r.reverse(),
            r
        }
        function p(t, e) {
            var r, n, a, u;
            void 0 === e && (e = 1);
            var f = [];
            try {
                for (var l = i(t), h = l.next(); !h.done; h = l.next()) {
                    for (var d = h.value, v = 0; v < f.length; ++v) {
                        var y = (s[f[v]] << 8) + d;
                        f[v] = c.charCodeAt(y % 58),
                        d = y / 58 | 0
                    }
                    for (; d; )
                        f.push(c.charCodeAt(d % 58)),
                        d = d / 58 | 0
                }
            } catch (t) {
                r = {
                    error: t
                }
            } finally {
                try {
                    h && !h.done && (n = l.return) && n.call(l)
                } finally {
                    if (r)
                        throw r.error
                }
            }
            try {
                for (var p = i(t), _ = p.next(); !_.done; _ = p.next()) {
                    if (_.value)
                        break;
                    f.push("1".charCodeAt(0))
                }
            } catch (t) {
                a = {
                    error: t
                }
            } finally {
                try {
                    _ && !_.done && (u = p.return) && u.call(p)
                } finally {
                    if (a)
                        throw a.error
                }
            }
            return f.reverse(),
            String.fromCharCode.apply(String, o(f))
        }
        function _(t, e) {
            for (var r = new Uint8Array(t.length + e.length), n = 0; n < t.length; ++n)
                r[n] = t[n];
            for (n = 0; n < e.length; ++n)
                r[t.length + n] = e.charCodeAt(n);
            return a(r)
        }
        function b(t, e, r, n) {
            var o = y(r + 4, t)
              , i = {
                type: e,
                data: new Uint8Array(o.buffer,0,r)
            }
              , a = new Uint8Array(_(i.data, n));
            if (a[0] !== o[r + 0] || a[1] !== o[r + 1] || a[2] !== o[r + 2] || a[3] !== o[r + 3])
                throw new Error("checksum doesn't match");
            return i
        }
        function g(t, e, r) {
            for (var n = new Uint8Array(_(t.data, e)), o = new Uint8Array(t.data.length + 4), i = 0; i < t.data.length; ++i)
                o[i] = t.data[i];
            for (i = 0; i < 4; ++i)
                o[i + t.data.length] = n[i];
            return r + p(o)
        }
        function w(t) {
            if ("string" != typeof t)
                throw new Error("expected string containing public key");
            if ("EOS" === t.substr(0, 3)) {
                for (var r = y(e.publicKeyDataSize + 4, t.substr(3)), n = {
                    type: 0,
                    data: new Uint8Array(e.publicKeyDataSize)
                }, o = 0; o < e.publicKeyDataSize; ++o)
                    n.data[o] = r[o];
                var i = new Uint8Array(a(n.data));
                if (i[0] !== r[e.publicKeyDataSize] || i[1] !== r[34] || i[2] !== r[35] || i[3] !== r[36])
                    throw new Error("checksum doesn't match");
                return n
            }
            if ("PUB_K1_" === t.substr(0, 7))
                return b(t.substr(7), 0, e.publicKeyDataSize, "K1");
            if ("PUB_R1_" === t.substr(0, 7))
                return b(t.substr(7), 1, e.publicKeyDataSize, "R1");
            throw new Error("unrecognized public key format")
        }
        function m(t) {
            if (0 === t.type && t.data.length === e.publicKeyDataSize)
                return g(t, "K1", "PUB_K1_");
            if (1 === t.type && t.data.length === e.publicKeyDataSize)
                return g(t, "R1", "PUB_R1_");
            throw new Error("unrecognized public key format")
        }
        function S(t) {
            return "EOS" === t.substr(0, 3) ? m(w(t)) : t
        }
        e.isNegative = l,
        e.negate = h,
        e.decimalToBinary = d,
        e.signedDecimalToBinary = function(t, e) {
            var r = "-" === e[0];
            r && (e = e.substr(1));
            var n = d(t, e);
            if (r) {
                if (h(n),
                !l(n))
                    throw new Error("number is out of range")
            } else if (l(n))
                throw new Error("number is out of range");
            return n
        }
        ,
        e.binaryToDecimal = v,
        e.signedBinaryToDecimal = function(t, e) {
            if (void 0 === e && (e = 1),
            l(t)) {
                var r = t.slice();
                return h(r),
                "-" + v(r, e)
            }
            return v(t, e)
        }
        ,
        e.base58ToBinary = y,
        e.binaryToBase58 = p,
        e.base64ToBinary = function(t) {
            var e = t.length;
            if (1 == (3 & e) && "=" === t[e - 1] && (e -= 1),
            0 != (3 & e))
                throw new Error("base-64 value is not padded correctly");
            var r = e >> 2
              , n = 3 * r;
            e > 0 && "=" === t[e - 1] && ("=" === t[e - 2] ? n -= 2 : n -= 1);
            for (var o = new Uint8Array(n), i = 0; i < r; ++i) {
                var a = f[t.charCodeAt(4 * i + 0)]
                  , c = f[t.charCodeAt(4 * i + 1)]
                  , u = f[t.charCodeAt(4 * i + 2)]
                  , s = f[t.charCodeAt(4 * i + 3)];
                o[3 * i + 0] = a << 2 | c >> 4,
                3 * i + 1 < n && (o[3 * i + 1] = (15 & c) << 4 | u >> 2),
                3 * i + 2 < n && (o[3 * i + 2] = (3 & u) << 6 | s)
            }
            return o
        }
        ,
        e.publicKeyDataSize = 33,
        e.privateKeyDataSize = 32,
        e.signatureDataSize = 65,
        e.stringToPublicKey = w,
        e.publicKeyToString = m,
        e.convertLegacyPublicKey = S,
        e.convertLegacyPublicKeys = function(t) {
            return t.map(S)
        }
        ,
        e.stringToPrivateKey = function(t) {
            if ("string" != typeof t)
                throw new Error("expected string containing private key");
            if ("PVT_R1_" === t.substr(0, 7))
                return b(t.substr(7), 1, e.privateKeyDataSize, "R1");
            throw new Error("unrecognized private key format")
        }
        ,
        e.privateKeyToString = function(t) {
            if (1 === t.type)
                return g(t, "R1", "PVT_R1_");
            throw new Error("unrecognized private key format")
        }
        ,
        e.stringToSignature = function(t) {
            if ("string" != typeof t)
                throw new Error("expected string containing signature");
            if ("SIG_K1_" === t.substr(0, 7))
                return b(t.substr(7), 0, e.signatureDataSize, "K1");
            if ("SIG_R1_" === t.substr(0, 7))
                return b(t.substr(7), 1, e.signatureDataSize, "R1");
            throw new Error("unrecognized signature format")
        }
        ,
        e.signatureToString = function(t) {
            if (0 === t.type)
                return g(t, "K1", "SIG_K1_");
            if (1 === t.type)
                return g(t, "R1", "SIG_R1_");
            throw new Error("unrecognized signature format")
        }
    },
    12: function(t, e, r) {
        "use strict";
        class n {
            constructor() {}
            static get_n_pad_bytes(t) {
                return 64 - (t + 8 & 63)
            }
            static pad(t) {
                const e = t.byteLength
                  , r = n.get_n_pad_bytes(e)
                  , [o,i] = ((t,e)=>[Math.floor(t / e), t % e])(e, 536870912).map((t,e)=>e ? 8 * t : t)
                  , a = new Uint8Array(e + r + 8);
                a.set(new Uint8Array(t), 0);
                const c = new DataView(a.buffer);
                return c.setUint8(e, 128),
                c.setUint32(e + r, i, !0),
                c.setUint32(e + r + 4, o, !0),
                a.buffer
            }
            static f(t, e, r, n) {
                return 0 <= t && t <= 15 ? e ^ r ^ n : 16 <= t && t <= 31 ? e & r | ~e & n : 32 <= t && t <= 47 ? (e | ~r) ^ n : 48 <= t && t <= 63 ? e & n | r & ~n : 64 <= t && t <= 79 ? e ^ (r | ~n) : void 0
            }
            static K(t) {
                return 0 <= t && t <= 15 ? 0 : 16 <= t && t <= 31 ? 1518500249 : 32 <= t && t <= 47 ? 1859775393 : 48 <= t && t <= 63 ? 2400959708 : 64 <= t && t <= 79 ? 2840853838 : void 0
            }
            static KP(t) {
                return 0 <= t && t <= 15 ? 1352829926 : 16 <= t && t <= 31 ? 1548603684 : 32 <= t && t <= 47 ? 1836072691 : 48 <= t && t <= 63 ? 2053994217 : 64 <= t && t <= 79 ? 0 : void 0
            }
            static add_modulo32() {
                return 0 | Array.from(arguments).reduce((t,e)=>t + e, 0)
            }
            static rol32(t, e) {
                return t << e | t >>> 32 - e
            }
            static hash(t) {
                const e = n.pad(t)
                  , r = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13]
                  , o = [5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11]
                  , i = [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6]
                  , a = [8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11]
                  , c = e.byteLength / 64
                  , u = new Array(c).fill(void 0).map((t,r)=>t=>new DataView(e,64 * r,64).getUint32(4 * t, !0));
                let s = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
                for (let t = 0; t < c; ++t) {
                    let e = s[0]
                      , c = s[1]
                      , f = s[2]
                      , l = s[3]
                      , h = s[4]
                      , d = e
                      , v = c
                      , y = f
                      , p = l
                      , _ = h;
                    for (let s = 0; s < 80; ++s) {
                        let b = n.add_modulo32(n.rol32(n.add_modulo32(e, n.f(s, c, f, l), u[t](r[s]), n.K(s)), i[s]), h);
                        e = h,
                        h = l,
                        l = n.rol32(f, 10),
                        f = c,
                        c = b,
                        b = n.add_modulo32(n.rol32(n.add_modulo32(d, n.f(79 - s, v, y, p), u[t](o[s]), n.KP(s)), a[s]), _),
                        d = _,
                        _ = p,
                        p = n.rol32(y, 10),
                        y = v,
                        v = b
                    }
                    let b = n.add_modulo32(s[1], f, p);
                    s[1] = n.add_modulo32(s[2], l, _),
                    s[2] = n.add_modulo32(s[3], h, d),
                    s[3] = n.add_modulo32(s[4], e, v),
                    s[4] = n.add_modulo32(s[0], c, y),
                    s[0] = b
                }
                const f = new ArrayBuffer(20)
                  , l = new DataView(f);
                return s.forEach((t,e)=>l.setUint32(4 * e, t, !0)),
                f
            }
        }
        t.exports = {
            RIPEMD160: n
        }
    },
    26: function(t, e, r) {
        "use strict";
        var n = this && this.__extends || function() {
            var t = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var r in e)
                    e.hasOwnProperty(r) && (t[r] = e[r])
            }
            ;
            return function(e, r) {
                function n() {
                    this.constructor = e
                }
                t(e, r),
                e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype,
                new n)
            }
        }();
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = function(t) {
            function e(r) {
                var n = this;
                return n = r.error && r.error.details && r.error.details.length && r.error.details[0].message ? t.call(this, r.error.details[0].message) || this : r.processed && r.processed.except && r.processed.except.message ? t.call(this, r.processed.except.message) || this : t.call(this, r.message) || this,
                Object.setPrototypeOf(n, e.prototype),
                n.json = r,
                n
            }
            return n(e, t),
            e
        }(Error);
        e.default = o
    },
    3: function(t, e) {
        var r;
        r = function() {
            return this
        }();
        try {
            r = r || Function("return this")() || (0,
            eval)("this")
        } catch (t) {
            "object" == typeof window && (r = window)
        }
        t.exports = r
    },
    57: function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = r(58);
        e.default = n.default;
        var o = r(26);
        e.RpcError = o.default
    },
    58: function(t, e, r) {
        "use strict";
        (function(t) {
            var n = this && this.__awaiter || function(t, e, r, n) {
                return new (r || (r = Promise))(function(o, i) {
                    function a(t) {
                        try {
                            u(n.next(t))
                        } catch (t) {
                            i(t)
                        }
                    }
                    function c(t) {
                        try {
                            u(n.throw(t))
                        } catch (t) {
                            i(t)
                        }
                    }
                    function u(t) {
                        t.done ? o(t.value) : new r(function(e) {
                            e(t.value)
                        }
                        ).then(a, c)
                    }
                    u((n = n.apply(t, e || [])).next())
                }
                )
            }
              , o = this && this.__generator || function(t, e) {
                var r, n, o, i, a = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0])
                            throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: c(0),
                    throw: c(1),
                    return: c(2)
                },
                "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }
                ),
                i;
                function c(i) {
                    return function(c) {
                        return function(i) {
                            if (r)
                                throw new TypeError("Generator is already executing.");
                            for (; a; )
                                try {
                                    if (r = 1,
                                    n && (o = 2 & i[0] ? n.return : i[0] ? n.throw || ((o = n.return) && o.call(n),
                                    0) : n.next) && !(o = o.call(n, i[1])).done)
                                        return o;
                                    switch (n = 0,
                                    o && (i = [2 & i[0], o.value]),
                                    i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        return a.label++,
                                        {
                                            value: i[1],
                                            done: !1
                                        };
                                    case 5:
                                        a.label++,
                                        n = i[1],
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = a.ops.pop(),
                                        a.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            a.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && a.label < o[1]) {
                                            a.label = o[1],
                                            o = i;
                                            break
                                        }
                                        if (o && a.label < o[2]) {
                                            a.label = o[2],
                                            a.ops.push(i);
                                            break
                                        }
                                        o[2] && a.ops.pop(),
                                        a.trys.pop();
                                        continue
                                    }
                                    i = e.call(t, a)
                                } catch (t) {
                                    i = [6, t],
                                    n = 0
                                } finally {
                                    r = o = 0
                                }
                            if (5 & i[0])
                                throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, c])
                    }
                }
            }
              , i = this && this.__values || function(t) {
                var e = "function" == typeof Symbol && t[Symbol.iterator]
                  , r = 0;
                return e ? e.call(t) : {
                    next: function() {
                        return t && r >= t.length && (t = void 0),
                        {
                            value: t && t[r++],
                            done: !t
                        }
                    }
                }
            }
            ;
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var a = r(11)
              , c = r(26);
            var u = function() {
                function e(e, r) {
                    void 0 === r && (r = {}),
                    this.endpoint = e,
                    r.fetch ? this.fetchBuiltin = r.fetch : this.fetchBuiltin = t.fetch
                }
                return e.prototype.fetch = function(t, e) {
                    return n(this, void 0, void 0, function() {
                        var r, n, i;
                        return o(this, function(o) {
                            switch (o.label) {
                            case 0:
                                return o.trys.push([0, 3, , 4]),
                                [4, (0,
                                this.fetchBuiltin)(this.endpoint + t, {
                                    body: JSON.stringify(e),
                                    method: "POST"
                                })];
                            case 1:
                                return [4, (r = o.sent()).json()];
                            case 2:
                                if ((n = o.sent()).processed && n.processed.except)
                                    throw new c.default(n);
                                return [3, 4];
                            case 3:
                                throw (i = o.sent()).isFetchError = !0,
                                i;
                            case 4:
                                if (!r.ok)
                                    throw new c.default(n);
                                return [2, n]
                            }
                        })
                    })
                }
                ,
                e.prototype.get_abi = function(t) {
                    return n(this, void 0, void 0, function() {
                        return o(this, function(e) {
                            switch (e.label) {
                            case 0:
                                return [4, this.fetch("/v1/chain/get_abi", {
                                    account_name: t
                                })];
                            case 1:
                                return [2, e.sent()]
                            }
                        })
                    })
                }
                ,
                e.prototype.get_account = function(t) {
                    return n(this, void 0, void 0, function() {
                        return o(this, function(e) {
                            switch (e.label) {
                            case 0:
                                return [4, this.fetch("/v1/chain/get_account", {
                                    account_name: t
                                })];
                            case 1:
                                return [2, e.sent()]
                            }
                        })
                    })
                }
                ,
                e.prototype.get_block_header_state = function(t) {
                    return n(this, void 0, void 0, function() {
                        return o(this, function(e) {
                            switch (e.label) {
                            case 0:
                                return [4, this.fetch("/v1/chain/get_block_header_state", {
                                    block_num_or_id: t
                                })];
                            case 1:
                                return [2, e.sent()]
                            }
                        })
                    })
                }
                ,
                e.prototype.get_block = function(t) {
                    return n(this, void 0, void 0, function() {
                        return o(this, function(e) {
                            switch (e.label) {
                            case 0:
                                return [4, this.fetch("/v1/chain/get_block", {
                                    block_num_or_id: t
                                })];
                            case 1:
                                return [2, e.sent()]
                            }
                        })
                    })
                }
                ,
                e.prototype.get_code = function(t) {
                    return n(this, void 0, void 0, function() {
                        return o(this, function(e) {
                            switch (e.label) {
                            case 0:
                                return [4, this.fetch("/v1/chain/get_code", {
                                    account_name: t
                                })];
                            case 1:
                                return [2, e.sent()]
                            }
                        })
                    })
                }
                ,
                e.prototype.get_currency_balance = function(t, e, r) {
                    return void 0 === r && (r = null),
                    n(this, void 0, void 0, function() {
                        return o(this, function(n) {
                            switch (n.label) {
                            case 0:
                                return [4, this.fetch("/v1/chain/get_currency_balance", {
                                    code: t,
                                    account: e,
                                    symbol: r
                                })];
                            case 1:
                                return [2, n.sent()]
                            }
                        })
                    })
                }
                ,
                e.prototype.get_currency_stats = function(t, e) {
                    return n(this, void 0, void 0, function() {
                        return o(this, function(r) {
                            switch (r.label) {
                            case 0:
                                return [4, this.fetch("/v1/chain/get_currency_stats", {
                                    code: t,
                                    symbol: e
                                })];
                            case 1:
                                return [2, r.sent()]
                            }
                        })
                    })
                }
                ,
                e.prototype.get_info = function() {
                    return n(this, void 0, void 0, function() {
                        return o(this, function(t) {
                            switch (t.label) {
                            case 0:
                                return [4, this.fetch("/v1/chain/get_info", {})];
                            case 1:
                                return [2, t.sent()]
                            }
                        })
                    })
                }
                ,
                e.prototype.get_producer_schedule = function() {
                    return n(this, void 0, void 0, function() {
                        return o(this, function(t) {
                            switch (t.label) {
                            case 0:
                                return [4, this.fetch("/v1/chain/get_producer_schedule", {})];
                            case 1:
                                return [2, t.sent()]
                            }
                        })
                    })
                }
                ,
                e.prototype.get_producers = function(t, e, r) {
                    return void 0 === t && (t = !0),
                    void 0 === e && (e = ""),
                    void 0 === r && (r = 50),
                    n(this, void 0, void 0, function() {
                        return o(this, function(n) {
                            switch (n.label) {
                            case 0:
                                return [4, this.fetch("/v1/chain/get_producers", {
                                    json: t,
                                    lower_bound: e,
                                    limit: r
                                })];
                            case 1:
                                return [2, n.sent()]
                            }
                        })
                    })
                }
                ,
                e.prototype.get_raw_code_and_abi = function(t) {
                    return n(this, void 0, void 0, function() {
                        return o(this, function(e) {
                            switch (e.label) {
                            case 0:
                                return [4, this.fetch("/v1/chain/get_raw_code_and_abi", {
                                    account_name: t
                                })];
                            case 1:
                                return [2, e.sent()]
                            }
                        })
                    })
                }
                ,
                e.prototype.getRawAbi = function(t) {
                    return n(this, void 0, void 0, function() {
                        var e, r;
                        return o(this, function(n) {
                            switch (n.label) {
                            case 0:
                                return [4, this.get_raw_code_and_abi(t)];
                            case 1:
                                return e = n.sent(),
                                r = a.base64ToBinary(e.abi),
                                [2, {
                                    accountName: e.account_name,
                                    abi: r
                                }]
                            }
                        })
                    })
                }
                ,
                e.prototype.get_table_rows = function(t) {
                    var e = t.json
                      , r = void 0 === e || e
                      , i = t.code
                      , a = t.scope
                      , c = t.table
                      , u = t.table_key
                      , s = void 0 === u ? "" : u
                      , f = t.lower_bound
                      , l = void 0 === f ? "" : f
                      , h = t.upper_bound
                      , d = void 0 === h ? "" : h
                      , v = t.index_position
                      , y = void 0 === v ? 1 : v
                      , p = t.key_type
                      , _ = void 0 === p ? "" : p
                      , b = t.limit
                      , g = void 0 === b ? 10 : b
                      , w = t.reverse
                      , m = void 0 !== w && w
                      , S = t.show_payer
                      , A = void 0 !== S && S;
                    return n(this, void 0, void 0, function() {
                        return o(this, function(t) {
                            switch (t.label) {
                            case 0:
                                return [4, this.fetch("/v1/chain/get_table_rows", {
                                    json: r,
                                    code: i,
                                    scope: a,
                                    table: c,
                                    table_key: s,
                                    lower_bound: l,
                                    upper_bound: d,
                                    index_position: y,
                                    key_type: _,
                                    limit: g,
                                    reverse: m,
                                    show_payer: A
                                })];
                            case 1:
                                return [2, t.sent()]
                            }
                        })
                    })
                }
                ,
                            e.prototype.get_table_by_scope = function(t) {
                                var e = t.code,
                                n = t.table,
                                o = t.lower_bound,
                                a = void 0 === o ? "": o,
                                s = t.upper_bound,
                                u = void 0 === s ? "": s,
                                c = t.limit,
                                l = void 0 === c ? 10 : c;
                                return r(this, void 0, void 0, (function() {
                                    return i(this, (function(t) {
                                        switch (t.label) {
                                        case 0:
                                            return [4, this.fetch("/v1/chain/get_table_by_scope", {
                                                code: e,
                                                table: n,
                                                lower_bound: a,
                                                upper_bound: u,
                                                limit: l
                                            })];
                                        case 1:
                                            return [2, t.sent()]
                                        }
                                    }))
                                }))
                            },
                
                e.prototype.getRequiredKeys = function(t) {
                    return n(this, void 0, void 0, function() {
                        var e;
                        return o(this, function(r) {
                            switch (r.label) {
                            case 0:
                                return e = a.convertLegacyPublicKeys,
                                [4, this.fetch("/v1/chain/get_required_keys", {
                                    transaction: t.transaction,
                                    available_keys: t.availableKeys
                                })];
                            case 1:
                                return [2, e.apply(void 0, [r.sent().required_keys])]
                            }
                        })
                    })
                }
                ,
                e.prototype.push_transaction = function(t) {
                    var e = t.signatures,
                        r = t.serializedTransaction,
                        o = t.serializedContextFreeData;
                    return n(this, void 0, void 0, function() {
                        return o(this, function(t) {
                            switch (t.label) {
                            case 0:
                                return [4, this.fetch("/v1/chain/push_transaction", {
                                    signatures: e,
                                    compression: 0,
                                    packed_context_free_data: u(o || new Uint8Array(0)),
                                    packed_trx: function(t) {
                                        var e, r, n = "";
                                        try {
                                            for (var o = i(t), a = o.next(); !a.done; a = o.next())
                                                n += ("00" + a.value.toString(16)).slice(-2)
                                        } catch (t) {
                                            e = { error: t }
                                        } finally {
                                            try {
                                                a && !a.done && (r = o.return) && r.call(o)
                                            } finally {
                                                if (e)
                                                    throw e.error
                                            }
                                        }
                                        return n
                                    }(r)
                                })];
                            case 1:
                                return [2, t.sent()]
                            }
                        })
                    })
                },
                
                            e.prototype.send_transaction = function(t) {
                                var e = t.signatures,
                                n = t.serializedTransaction,
                                o = t.serializedContextFreeData;
                                return r(this, void 0, void 0, (function() {
                                    return i(this, (function(t) {
                                        switch (t.label) {
                                        case 0:
                                            return [4, this.fetch("/v1/chain/send_transaction", {
                                                signatures: e,
                                                compression: 0,
                                                packed_context_free_data: u(o || new Uint8Array(0)),
                                                packed_trx: u(n)
                                            })];
                                        case 1:
                                            return [2, t.sent()]
                                        }
                                    }))
                                }))
                            },
                
                e.prototype.db_size_get = function() {
                    return n(this, void 0, void 0, function() {
                        return o(this, function(t) {
                            switch (t.label) {
                            case 0:
                                return [4, this.fetch("/v1/db_size/get", {})];
                            case 1:
                                return [2, t.sent()]
                            }
                        })
                    })
                }
                ,
                e.prototype.history_get_actions = function(t, e, r) {
                    return void 0 === e && (e = null),
                    void 0 === r && (r = null),
                    n(this, void 0, void 0, function() {
                        return o(this, function(n) {
                            switch (n.label) {
                            case 0:
                                return [4, this.fetch("/v1/history/get_actions", {
                                    account_name: t,
                                    pos: e,
                                    offset: r
                                })];
                            case 1:
                                return [2, n.sent()]
                            }
                        })
                    })
                }
                ,
                e.prototype.history_get_transaction = function(t, e) {
                    return void 0 === e && (e = null),
                    n(this, void 0, void 0, function() {
                        return o(this, function(r) {
                            switch (r.label) {
                            case 0:
                                return [4, this.fetch("/v1/history/get_transaction", {
                                    id: t,
                                    block_num_hint: e
                                })];
                            case 1:
                                return [2, r.sent()]
                            }
                        })
                    })
                }
                ,
                e.prototype.history_get_key_accounts = function(t) {
                    return n(this, void 0, void 0, function() {
                        return o(this, function(e) {
                            switch (e.label) {
                            case 0:
                                return [4, this.fetch("/v1/history/get_key_accounts", {
                                    public_key: t
                                })];
                            case 1:
                                return [2, e.sent()]
                            }
                        })
                    })
                }
                ,
                e.prototype.history_get_controlled_accounts = function(t) {
                    return n(this, void 0, void 0, function() {
                        return o(this, function(e) {
                            switch (e.label) {
                            case 0:
                                return [4, this.fetch("/v1/history/get_controlled_accounts", {
                                    controlling_account: t
                                })];
                            case 1:
                                return [2, e.sent()]
                            }
                        })
                    })
                }
                ,
                e
            }();
            e.default = u
        }
        ).call(this, r(3))
    }
});
