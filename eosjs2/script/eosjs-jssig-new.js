var eosjs_jssig = function(t) {
    var e = {};
    function r(i) {
        if (e[i])
            return e[i].exports;
        var n = e[i] = {
            i: i,
            l: !1,
            exports: {}
        };
        return t[i].call(n.exports, n, n.exports, r),
        n.l = !0,
        n.exports
    }
    return r.m = t,
    r.c = e,
    r.d = function(t, e, i) {
        r.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: i
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
        var i = Object.create(null);
        if (r.r(i),
        Object.defineProperty(i, "default", {
            enumerable: !0,
            value: t
        }),
        2 & e && "string" != typeof t)
            for (var n in t)
                r.d(i, n, function(e) {
                    return t[e]
                }
                .bind(null, n));
        return i
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
    r(r.s = 59)
}([function(t, e, r) {
    var i = r(2)
      , n = i.Buffer;
    function o(t, e) {
        for (var r in t)
            e[r] = t[r]
    }
    function s(t, e, r) {
        return n(t, e, r)
    }
    n.from && n.alloc && n.allocUnsafe && n.allocUnsafeSlow ? t.exports = i : (o(i, e),
    e.Buffer = s),
    o(n, s),
    s.from = function(t, e, r) {
        if ("number" == typeof t)
            throw new TypeError("Argument must not be a number");
        return n(t, e, r)
    }
    ,
    s.alloc = function(t, e, r) {
        if ("number" != typeof t)
            throw new TypeError("Argument must be a number");
        var i = n(t);
        return void 0 !== e ? "string" == typeof r ? i.fill(e, r) : i.fill(e) : i.fill(0),
        i
    }
    ,
    s.allocUnsafe = function(t) {
        if ("number" != typeof t)
            throw new TypeError("Argument must be a number");
        return n(t)
    }
    ,
    s.allocUnsafeSlow = function(t) {
        if ("number" != typeof t)
            throw new TypeError("Argument must be a number");
        return i.SlowBuffer(t)
    }
}
, function(t, e) {
    "function" == typeof Object.create ? t.exports = function(t, e) {
        t.super_ = e,
        t.prototype = Object.create(e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        })
    }
    : t.exports = function(t, e) {
        t.super_ = e;
        var r = function() {};
        r.prototype = e.prototype,
        t.prototype = new r,
        t.prototype.constructor = t
    }
}
, function(t, e, r) {
    "use strict";
    (function(t) {
        /*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
        var i = r(60)
          , n = r(61)
          , o = r(27);
        function s() {
            return a.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
        }
        function f(t, e) {
            if (s() < e)
                throw new RangeError("Invalid typed array length");
            return a.TYPED_ARRAY_SUPPORT ? (t = new Uint8Array(e)).__proto__ = a.prototype : (null === t && (t = new a(e)),
            t.length = e),
            t
        }
        function a(t, e, r) {
            if (!(a.TYPED_ARRAY_SUPPORT || this instanceof a))
                return new a(t,e,r);
            if ("number" == typeof t) {
                if ("string" == typeof e)
                    throw new Error("If encoding is specified then the first argument must be a string");
                return l(this, t)
            }
            return h(this, t, e, r)
        }
        function h(t, e, r, i) {
            if ("number" == typeof e)
                throw new TypeError('"value" argument must not be a number');
            return "undefined" != typeof ArrayBuffer && e instanceof ArrayBuffer ? function(t, e, r, i) {
                if (e.byteLength,
                r < 0 || e.byteLength < r)
                    throw new RangeError("'offset' is out of bounds");
                if (e.byteLength < r + (i || 0))
                    throw new RangeError("'length' is out of bounds");
                e = void 0 === r && void 0 === i ? new Uint8Array(e) : void 0 === i ? new Uint8Array(e,r) : new Uint8Array(e,r,i);
                a.TYPED_ARRAY_SUPPORT ? (t = e).__proto__ = a.prototype : t = c(t, e);
                return t
            }(t, e, r, i) : "string" == typeof e ? function(t, e, r) {
                "string" == typeof r && "" !== r || (r = "utf8");
                if (!a.isEncoding(r))
                    throw new TypeError('"encoding" must be a valid string encoding');
                var i = 0 | p(e, r)
                  , n = (t = f(t, i)).write(e, r);
                n !== i && (t = t.slice(0, n));
                return t
            }(t, e, r) : function(t, e) {
                if (a.isBuffer(e)) {
                    var r = 0 | d(e.length);
                    return 0 === (t = f(t, r)).length ? t : (e.copy(t, 0, 0, r),
                    t)
                }
                if (e) {
                    if ("undefined" != typeof ArrayBuffer && e.buffer instanceof ArrayBuffer || "length"in e)
                        return "number" != typeof e.length || function(t) {
                            return t != t
                        }(e.length) ? f(t, 0) : c(t, e);
                    if ("Buffer" === e.type && o(e.data))
                        return c(t, e.data)
                }
                throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
            }(t, e)
        }
        function u(t) {
            if ("number" != typeof t)
                throw new TypeError('"size" argument must be a number');
            if (t < 0)
                throw new RangeError('"size" argument must not be negative')
        }
        function l(t, e) {
            if (u(e),
            t = f(t, e < 0 ? 0 : 0 | d(e)),
            !a.TYPED_ARRAY_SUPPORT)
                for (var r = 0; r < e; ++r)
                    t[r] = 0;
            return t
        }
        function c(t, e) {
            var r = e.length < 0 ? 0 : 0 | d(e.length);
            t = f(t, r);
            for (var i = 0; i < r; i += 1)
                t[i] = 255 & e[i];
            return t
        }
        function d(t) {
            if (t >= s())
                throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + s().toString(16) + " bytes");
            return 0 | t
        }
        function p(t, e) {
            if (a.isBuffer(t))
                return t.length;
            if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(t) || t instanceof ArrayBuffer))
                return t.byteLength;
            "string" != typeof t && (t = "" + t);
            var r = t.length;
            if (0 === r)
                return 0;
            for (var i = !1; ; )
                switch (e) {
                case "ascii":
                case "latin1":
                case "binary":
                    return r;
                case "utf8":
                case "utf-8":
                case void 0:
                    return q(t).length;
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return 2 * r;
                case "hex":
                    return r >>> 1;
                case "base64":
                    return z(t).length;
                default:
                    if (i)
                        return q(t).length;
                    e = ("" + e).toLowerCase(),
                    i = !0
                }
        }
        function g(t, e, r) {
            var i = t[e];
            t[e] = t[r],
            t[r] = i
        }
        function y(t, e, r, i, n) {
            if (0 === t.length)
                return -1;
            if ("string" == typeof r ? (i = r,
            r = 0) : r > 2147483647 ? r = 2147483647 : r < -2147483648 && (r = -2147483648),
            r = +r,
            isNaN(r) && (r = n ? 0 : t.length - 1),
            r < 0 && (r = t.length + r),
            r >= t.length) {
                if (n)
                    return -1;
                r = t.length - 1
            } else if (r < 0) {
                if (!n)
                    return -1;
                r = 0
            }
            if ("string" == typeof e && (e = a.from(e, i)),
            a.isBuffer(e))
                return 0 === e.length ? -1 : v(t, e, r, i, n);
            if ("number" == typeof e)
                return e &= 255,
                a.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? n ? Uint8Array.prototype.indexOf.call(t, e, r) : Uint8Array.prototype.lastIndexOf.call(t, e, r) : v(t, [e], r, i, n);
            throw new TypeError("val must be string, number or Buffer")
        }
        function v(t, e, r, i, n) {
            var o, s = 1, f = t.length, a = e.length;
            if (void 0 !== i && ("ucs2" === (i = String(i).toLowerCase()) || "ucs-2" === i || "utf16le" === i || "utf-16le" === i)) {
                if (t.length < 2 || e.length < 2)
                    return -1;
                s = 2,
                f /= 2,
                a /= 2,
                r /= 2
            }
            function h(t, e) {
                return 1 === s ? t[e] : t.readUInt16BE(e * s)
            }
            if (n) {
                var u = -1;
                for (o = r; o < f; o++)
                    if (h(t, o) === h(e, -1 === u ? 0 : o - u)) {
                        if (-1 === u && (u = o),
                        o - u + 1 === a)
                            return u * s
                    } else
                        -1 !== u && (o -= o - u),
                        u = -1
            } else
                for (r + a > f && (r = f - a),
                o = r; o >= 0; o--) {
                    for (var l = !0, c = 0; c < a; c++)
                        if (h(t, o + c) !== h(e, c)) {
                            l = !1;
                            break
                        }
                    if (l)
                        return o
                }
            return -1
        }
        function b(t, e, r, i) {
            r = Number(r) || 0;
            var n = t.length - r;
            i ? (i = Number(i)) > n && (i = n) : i = n;
            var o = e.length;
            if (o % 2 != 0)
                throw new TypeError("Invalid hex string");
            i > o / 2 && (i = o / 2);
            for (var s = 0; s < i; ++s) {
                var f = parseInt(e.substr(2 * s, 2), 16);
                if (isNaN(f))
                    return s;
                t[r + s] = f
            }
            return s
        }
        function w(t, e, r, i) {
            return j(q(e, t.length - r), t, r, i)
        }
        function m(t, e, r, i) {
            return j(function(t) {
                for (var e = [], r = 0; r < t.length; ++r)
                    e.push(255 & t.charCodeAt(r));
                return e
            }(e), t, r, i)
        }
        function _(t, e, r, i) {
            return m(t, e, r, i)
        }
        function E(t, e, r, i) {
            return j(z(e), t, r, i)
        }
        function T(t, e, r, i) {
            return j(function(t, e) {
                for (var r, i, n, o = [], s = 0; s < t.length && !((e -= 2) < 0); ++s)
                    r = t.charCodeAt(s),
                    i = r >> 8,
                    n = r % 256,
                    o.push(n),
                    o.push(i);
                return o
            }(e, t.length - r), t, r, i)
        }
        function S(t, e, r) {
            return 0 === e && r === t.length ? i.fromByteArray(t) : i.fromByteArray(t.slice(e, r))
        }
        function B(t, e, r) {
            r = Math.min(t.length, r);
            for (var i = [], n = e; n < r; ) {
                var o, s, f, a, h = t[n], u = null, l = h > 239 ? 4 : h > 223 ? 3 : h > 191 ? 2 : 1;
                if (n + l <= r)
                    switch (l) {
                    case 1:
                        h < 128 && (u = h);
                        break;
                    case 2:
                        128 == (192 & (o = t[n + 1])) && (a = (31 & h) << 6 | 63 & o) > 127 && (u = a);
                        break;
                    case 3:
                        o = t[n + 1],
                        s = t[n + 2],
                        128 == (192 & o) && 128 == (192 & s) && (a = (15 & h) << 12 | (63 & o) << 6 | 63 & s) > 2047 && (a < 55296 || a > 57343) && (u = a);
                        break;
                    case 4:
                        o = t[n + 1],
                        s = t[n + 2],
                        f = t[n + 3],
                        128 == (192 & o) && 128 == (192 & s) && 128 == (192 & f) && (a = (15 & h) << 18 | (63 & o) << 12 | (63 & s) << 6 | 63 & f) > 65535 && a < 1114112 && (u = a)
                    }
                null === u ? (u = 65533,
                l = 1) : u > 65535 && (u -= 65536,
                i.push(u >>> 10 & 1023 | 55296),
                u = 56320 | 1023 & u),
                i.push(u),
                n += l
            }
            return function(t) {
                var e = t.length;
                if (e <= I)
                    return String.fromCharCode.apply(String, t);
                var r = ""
                  , i = 0;
                for (; i < e; )
                    r += String.fromCharCode.apply(String, t.slice(i, i += I));
                return r
            }(i)
        }
        e.Buffer = a,
        e.SlowBuffer = function(t) {
            +t != t && (t = 0);
            return a.alloc(+t)
        }
        ,
        e.INSPECT_MAX_BYTES = 50,
        a.TYPED_ARRAY_SUPPORT = void 0 !== t.TYPED_ARRAY_SUPPORT ? t.TYPED_ARRAY_SUPPORT : function() {
            try {
                var t = new Uint8Array(1);
                return t.__proto__ = {
                    __proto__: Uint8Array.prototype,
                    foo: function() {
                        return 42
                    }
                },
                42 === t.foo() && "function" == typeof t.subarray && 0 === t.subarray(1, 1).byteLength
            } catch (t) {
                return !1
            }
        }(),
        e.kMaxLength = s(),
        a.poolSize = 8192,
        a._augment = function(t) {
            return t.__proto__ = a.prototype,
            t
        }
        ,
        a.from = function(t, e, r) {
            return h(null, t, e, r)
        }
        ,
        a.TYPED_ARRAY_SUPPORT && (a.prototype.__proto__ = Uint8Array.prototype,
        a.__proto__ = Uint8Array,
        "undefined" != typeof Symbol && Symbol.species && a[Symbol.species] === a && Object.defineProperty(a, Symbol.species, {
            value: null,
            configurable: !0
        })),
        a.alloc = function(t, e, r) {
            return function(t, e, r, i) {
                return u(e),
                e <= 0 ? f(t, e) : void 0 !== r ? "string" == typeof i ? f(t, e).fill(r, i) : f(t, e).fill(r) : f(t, e)
            }(null, t, e, r)
        }
        ,
        a.allocUnsafe = function(t) {
            return l(null, t)
        }
        ,
        a.allocUnsafeSlow = function(t) {
            return l(null, t)
        }
        ,
        a.isBuffer = function(t) {
            return !(null == t || !t._isBuffer)
        }
        ,
        a.compare = function(t, e) {
            if (!a.isBuffer(t) || !a.isBuffer(e))
                throw new TypeError("Arguments must be Buffers");
            if (t === e)
                return 0;
            for (var r = t.length, i = e.length, n = 0, o = Math.min(r, i); n < o; ++n)
                if (t[n] !== e[n]) {
                    r = t[n],
                    i = e[n];
                    break
                }
            return r < i ? -1 : i < r ? 1 : 0
        }
        ,
        a.isEncoding = function(t) {
            switch (String(t).toLowerCase()) {
            case "hex":
            case "utf8":
            case "utf-8":
            case "ascii":
            case "latin1":
            case "binary":
            case "base64":
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return !0;
            default:
                return !1
            }
        }
        ,
        a.concat = function(t, e) {
            if (!o(t))
                throw new TypeError('"list" argument must be an Array of Buffers');
            if (0 === t.length)
                return a.alloc(0);
            var r;
            if (void 0 === e)
                for (e = 0,
                r = 0; r < t.length; ++r)
                    e += t[r].length;
            var i = a.allocUnsafe(e)
              , n = 0;
            for (r = 0; r < t.length; ++r) {
                var s = t[r];
                if (!a.isBuffer(s))
                    throw new TypeError('"list" argument must be an Array of Buffers');
                s.copy(i, n),
                n += s.length
            }
            return i
        }
        ,
        a.byteLength = p,
        a.prototype._isBuffer = !0,
        a.prototype.swap16 = function() {
            var t = this.length;
            if (t % 2 != 0)
                throw new RangeError("Buffer size must be a multiple of 16-bits");
            for (var e = 0; e < t; e += 2)
                g(this, e, e + 1);
            return this
        }
        ,
        a.prototype.swap32 = function() {
            var t = this.length;
            if (t % 4 != 0)
                throw new RangeError("Buffer size must be a multiple of 32-bits");
            for (var e = 0; e < t; e += 4)
                g(this, e, e + 3),
                g(this, e + 1, e + 2);
            return this
        }
        ,
        a.prototype.swap64 = function() {
            var t = this.length;
            if (t % 8 != 0)
                throw new RangeError("Buffer size must be a multiple of 64-bits");
            for (var e = 0; e < t; e += 8)
                g(this, e, e + 7),
                g(this, e + 1, e + 6),
                g(this, e + 2, e + 5),
                g(this, e + 3, e + 4);
            return this
        }
        ,
        a.prototype.toString = function() {
            var t = 0 | this.length;
            return 0 === t ? "" : 0 === arguments.length ? B(this, 0, t) : function(t, e, r) {
                var i = !1;
                if ((void 0 === e || e < 0) && (e = 0),
                e > this.length)
                    return "";
                if ((void 0 === r || r > this.length) && (r = this.length),
                r <= 0)
                    return "";
                if ((r >>>= 0) <= (e >>>= 0))
                    return "";
                for (t || (t = "utf8"); ; )
                    switch (t) {
                    case "hex":
                        return U(this, e, r);
                    case "utf8":
                    case "utf-8":
                        return B(this, e, r);
                    case "ascii":
                        return A(this, e, r);
                    case "latin1":
                    case "binary":
                        return k(this, e, r);
                    case "base64":
                        return S(this, e, r);
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return x(this, e, r);
                    default:
                        if (i)
                            throw new TypeError("Unknown encoding: " + t);
                        t = (t + "").toLowerCase(),
                        i = !0
                    }
            }
            .apply(this, arguments)
        }
        ,
        a.prototype.equals = function(t) {
            if (!a.isBuffer(t))
                throw new TypeError("Argument must be a Buffer");
            return this === t || 0 === a.compare(this, t)
        }
        ,
        a.prototype.inspect = function() {
            var t = ""
              , r = e.INSPECT_MAX_BYTES;
            return this.length > 0 && (t = this.toString("hex", 0, r).match(/.{2}/g).join(" "),
            this.length > r && (t += " ... ")),
            "<Buffer " + t + ">"
        }
        ,
        a.prototype.compare = function(t, e, r, i, n) {
            if (!a.isBuffer(t))
                throw new TypeError("Argument must be a Buffer");
            if (void 0 === e && (e = 0),
            void 0 === r && (r = t ? t.length : 0),
            void 0 === i && (i = 0),
            void 0 === n && (n = this.length),
            e < 0 || r > t.length || i < 0 || n > this.length)
                throw new RangeError("out of range index");
            if (i >= n && e >= r)
                return 0;
            if (i >= n)
                return -1;
            if (e >= r)
                return 1;
            if (e >>>= 0,
            r >>>= 0,
            i >>>= 0,
            n >>>= 0,
            this === t)
                return 0;
            for (var o = n - i, s = r - e, f = Math.min(o, s), h = this.slice(i, n), u = t.slice(e, r), l = 0; l < f; ++l)
                if (h[l] !== u[l]) {
                    o = h[l],
                    s = u[l];
                    break
                }
            return o < s ? -1 : s < o ? 1 : 0
        }
        ,
        a.prototype.includes = function(t, e, r) {
            return -1 !== this.indexOf(t, e, r)
        }
        ,
        a.prototype.indexOf = function(t, e, r) {
            return y(this, t, e, r, !0)
        }
        ,
        a.prototype.lastIndexOf = function(t, e, r) {
            return y(this, t, e, r, !1)
        }
        ,
        a.prototype.write = function(t, e, r, i) {
            if (void 0 === e)
                i = "utf8",
                r = this.length,
                e = 0;
            else if (void 0 === r && "string" == typeof e)
                i = e,
                r = this.length,
                e = 0;
            else {
                if (!isFinite(e))
                    throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                e |= 0,
                isFinite(r) ? (r |= 0,
                void 0 === i && (i = "utf8")) : (i = r,
                r = void 0)
            }
            var n = this.length - e;
            if ((void 0 === r || r > n) && (r = n),
            t.length > 0 && (r < 0 || e < 0) || e > this.length)
                throw new RangeError("Attempt to write outside buffer bounds");
            i || (i = "utf8");
            for (var o = !1; ; )
                switch (i) {
                case "hex":
                    return b(this, t, e, r);
                case "utf8":
                case "utf-8":
                    return w(this, t, e, r);
                case "ascii":
                    return m(this, t, e, r);
                case "latin1":
                case "binary":
                    return _(this, t, e, r);
                case "base64":
                    return E(this, t, e, r);
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return T(this, t, e, r);
                default:
                    if (o)
                        throw new TypeError("Unknown encoding: " + i);
                    i = ("" + i).toLowerCase(),
                    o = !0
                }
        }
        ,
        a.prototype.toJSON = function() {
            return {
                type: "Buffer",
                data: Array.prototype.slice.call(this._arr || this, 0)
            }
        }
        ;
        var I = 4096;
        function A(t, e, r) {
            var i = "";
            r = Math.min(t.length, r);
            for (var n = e; n < r; ++n)
                i += String.fromCharCode(127 & t[n]);
            return i
        }
        function k(t, e, r) {
            var i = "";
            r = Math.min(t.length, r);
            for (var n = e; n < r; ++n)
                i += String.fromCharCode(t[n]);
            return i
        }
        function U(t, e, r) {
            var i = t.length;
            (!e || e < 0) && (e = 0),
            (!r || r < 0 || r > i) && (r = i);
            for (var n = "", o = e; o < r; ++o)
                n += F(t[o]);
            return n
        }
        function x(t, e, r) {
            for (var i = t.slice(e, r), n = "", o = 0; o < i.length; o += 2)
                n += String.fromCharCode(i[o] + 256 * i[o + 1]);
            return n
        }
        function L(t, e, r) {
            if (t % 1 != 0 || t < 0)
                throw new RangeError("offset is not uint");
            if (t + e > r)
                throw new RangeError("Trying to access beyond buffer length")
        }
        function R(t, e, r, i, n, o) {
            if (!a.isBuffer(t))
                throw new TypeError('"buffer" argument must be a Buffer instance');
            if (e > n || e < o)
                throw new RangeError('"value" argument is out of bounds');
            if (r + i > t.length)
                throw new RangeError("Index out of range")
        }
        function D(t, e, r, i) {
            e < 0 && (e = 65535 + e + 1);
            for (var n = 0, o = Math.min(t.length - r, 2); n < o; ++n)
                t[r + n] = (e & 255 << 8 * (i ? n : 1 - n)) >>> 8 * (i ? n : 1 - n)
        }
        function O(t, e, r, i) {
            e < 0 && (e = 4294967295 + e + 1);
            for (var n = 0, o = Math.min(t.length - r, 4); n < o; ++n)
                t[r + n] = e >>> 8 * (i ? n : 3 - n) & 255
        }
        function C(t, e, r, i, n, o) {
            if (r + i > t.length)
                throw new RangeError("Index out of range");
            if (r < 0)
                throw new RangeError("Index out of range")
        }
        function M(t, e, r, i, o) {
            return o || C(t, 0, r, 4),
            n.write(t, e, r, i, 23, 4),
            r + 4
        }
        function N(t, e, r, i, o) {
            return o || C(t, 0, r, 8),
            n.write(t, e, r, i, 52, 8),
            r + 8
        }
        a.prototype.slice = function(t, e) {
            var r, i = this.length;
            if (t = ~~t,
            e = void 0 === e ? i : ~~e,
            t < 0 ? (t += i) < 0 && (t = 0) : t > i && (t = i),
            e < 0 ? (e += i) < 0 && (e = 0) : e > i && (e = i),
            e < t && (e = t),
            a.TYPED_ARRAY_SUPPORT)
                (r = this.subarray(t, e)).__proto__ = a.prototype;
            else {
                var n = e - t;
                r = new a(n,void 0);
                for (var o = 0; o < n; ++o)
                    r[o] = this[o + t]
            }
            return r
        }
        ,
        a.prototype.readUIntLE = function(t, e, r) {
            t |= 0,
            e |= 0,
            r || L(t, e, this.length);
            for (var i = this[t], n = 1, o = 0; ++o < e && (n *= 256); )
                i += this[t + o] * n;
            return i
        }
        ,
        a.prototype.readUIntBE = function(t, e, r) {
            t |= 0,
            e |= 0,
            r || L(t, e, this.length);
            for (var i = this[t + --e], n = 1; e > 0 && (n *= 256); )
                i += this[t + --e] * n;
            return i
        }
        ,
        a.prototype.readUInt8 = function(t, e) {
            return e || L(t, 1, this.length),
            this[t]
        }
        ,
        a.prototype.readUInt16LE = function(t, e) {
            return e || L(t, 2, this.length),
            this[t] | this[t + 1] << 8
        }
        ,
        a.prototype.readUInt16BE = function(t, e) {
            return e || L(t, 2, this.length),
            this[t] << 8 | this[t + 1]
        }
        ,
        a.prototype.readUInt32LE = function(t, e) {
            return e || L(t, 4, this.length),
            (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + 16777216 * this[t + 3]
        }
        ,
        a.prototype.readUInt32BE = function(t, e) {
            return e || L(t, 4, this.length),
            16777216 * this[t] + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3])
        }
        ,
        a.prototype.readIntLE = function(t, e, r) {
            t |= 0,
            e |= 0,
            r || L(t, e, this.length);
            for (var i = this[t], n = 1, o = 0; ++o < e && (n *= 256); )
                i += this[t + o] * n;
            return i >= (n *= 128) && (i -= Math.pow(2, 8 * e)),
            i
        }
        ,
        a.prototype.readIntBE = function(t, e, r) {
            t |= 0,
            e |= 0,
            r || L(t, e, this.length);
            for (var i = e, n = 1, o = this[t + --i]; i > 0 && (n *= 256); )
                o += this[t + --i] * n;
            return o >= (n *= 128) && (o -= Math.pow(2, 8 * e)),
            o
        }
        ,
        a.prototype.readInt8 = function(t, e) {
            return e || L(t, 1, this.length),
            128 & this[t] ? -1 * (255 - this[t] + 1) : this[t]
        }
        ,
        a.prototype.readInt16LE = function(t, e) {
            e || L(t, 2, this.length);
            var r = this[t] | this[t + 1] << 8;
            return 32768 & r ? 4294901760 | r : r
        }
        ,
        a.prototype.readInt16BE = function(t, e) {
            e || L(t, 2, this.length);
            var r = this[t + 1] | this[t] << 8;
            return 32768 & r ? 4294901760 | r : r
        }
        ,
        a.prototype.readInt32LE = function(t, e) {
            return e || L(t, 4, this.length),
            this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24
        }
        ,
        a.prototype.readInt32BE = function(t, e) {
            return e || L(t, 4, this.length),
            this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]
        }
        ,
        a.prototype.readFloatLE = function(t, e) {
            return e || L(t, 4, this.length),
            n.read(this, t, !0, 23, 4)
        }
        ,
        a.prototype.readFloatBE = function(t, e) {
            return e || L(t, 4, this.length),
            n.read(this, t, !1, 23, 4)
        }
        ,
        a.prototype.readDoubleLE = function(t, e) {
            return e || L(t, 8, this.length),
            n.read(this, t, !0, 52, 8)
        }
        ,
        a.prototype.readDoubleBE = function(t, e) {
            return e || L(t, 8, this.length),
            n.read(this, t, !1, 52, 8)
        }
        ,
        a.prototype.writeUIntLE = function(t, e, r, i) {
            (t = +t,
            e |= 0,
            r |= 0,
            i) || R(this, t, e, r, Math.pow(2, 8 * r) - 1, 0);
            var n = 1
              , o = 0;
            for (this[e] = 255 & t; ++o < r && (n *= 256); )
                this[e + o] = t / n & 255;
            return e + r
        }
        ,
        a.prototype.writeUIntBE = function(t, e, r, i) {
            (t = +t,
            e |= 0,
            r |= 0,
            i) || R(this, t, e, r, Math.pow(2, 8 * r) - 1, 0);
            var n = r - 1
              , o = 1;
            for (this[e + n] = 255 & t; --n >= 0 && (o *= 256); )
                this[e + n] = t / o & 255;
            return e + r
        }
        ,
        a.prototype.writeUInt8 = function(t, e, r) {
            return t = +t,
            e |= 0,
            r || R(this, t, e, 1, 255, 0),
            a.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)),
            this[e] = 255 & t,
            e + 1
        }
        ,
        a.prototype.writeUInt16LE = function(t, e, r) {
            return t = +t,
            e |= 0,
            r || R(this, t, e, 2, 65535, 0),
            a.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t,
            this[e + 1] = t >>> 8) : D(this, t, e, !0),
            e + 2
        }
        ,
        a.prototype.writeUInt16BE = function(t, e, r) {
            return t = +t,
            e |= 0,
            r || R(this, t, e, 2, 65535, 0),
            a.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 8,
            this[e + 1] = 255 & t) : D(this, t, e, !1),
            e + 2
        }
        ,
        a.prototype.writeUInt32LE = function(t, e, r) {
            return t = +t,
            e |= 0,
            r || R(this, t, e, 4, 4294967295, 0),
            a.TYPED_ARRAY_SUPPORT ? (this[e + 3] = t >>> 24,
            this[e + 2] = t >>> 16,
            this[e + 1] = t >>> 8,
            this[e] = 255 & t) : O(this, t, e, !0),
            e + 4
        }
        ,
        a.prototype.writeUInt32BE = function(t, e, r) {
            return t = +t,
            e |= 0,
            r || R(this, t, e, 4, 4294967295, 0),
            a.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 24,
            this[e + 1] = t >>> 16,
            this[e + 2] = t >>> 8,
            this[e + 3] = 255 & t) : O(this, t, e, !1),
            e + 4
        }
        ,
        a.prototype.writeIntLE = function(t, e, r, i) {
            if (t = +t,
            e |= 0,
            !i) {
                var n = Math.pow(2, 8 * r - 1);
                R(this, t, e, r, n - 1, -n)
            }
            var o = 0
              , s = 1
              , f = 0;
            for (this[e] = 255 & t; ++o < r && (s *= 256); )
                t < 0 && 0 === f && 0 !== this[e + o - 1] && (f = 1),
                this[e + o] = (t / s >> 0) - f & 255;
            return e + r
        }
        ,
        a.prototype.writeIntBE = function(t, e, r, i) {
            if (t = +t,
            e |= 0,
            !i) {
                var n = Math.pow(2, 8 * r - 1);
                R(this, t, e, r, n - 1, -n)
            }
            var o = r - 1
              , s = 1
              , f = 0;
            for (this[e + o] = 255 & t; --o >= 0 && (s *= 256); )
                t < 0 && 0 === f && 0 !== this[e + o + 1] && (f = 1),
                this[e + o] = (t / s >> 0) - f & 255;
            return e + r
        }
        ,
        a.prototype.writeInt8 = function(t, e, r) {
            return t = +t,
            e |= 0,
            r || R(this, t, e, 1, 127, -128),
            a.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)),
            t < 0 && (t = 255 + t + 1),
            this[e] = 255 & t,
            e + 1
        }
        ,
        a.prototype.writeInt16LE = function(t, e, r) {
            return t = +t,
            e |= 0,
            r || R(this, t, e, 2, 32767, -32768),
            a.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t,
            this[e + 1] = t >>> 8) : D(this, t, e, !0),
            e + 2
        }
        ,
        a.prototype.writeInt16BE = function(t, e, r) {
            return t = +t,
            e |= 0,
            r || R(this, t, e, 2, 32767, -32768),
            a.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 8,
            this[e + 1] = 255 & t) : D(this, t, e, !1),
            e + 2
        }
        ,
        a.prototype.writeInt32LE = function(t, e, r) {
            return t = +t,
            e |= 0,
            r || R(this, t, e, 4, 2147483647, -2147483648),
            a.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t,
            this[e + 1] = t >>> 8,
            this[e + 2] = t >>> 16,
            this[e + 3] = t >>> 24) : O(this, t, e, !0),
            e + 4
        }
        ,
        a.prototype.writeInt32BE = function(t, e, r) {
            return t = +t,
            e |= 0,
            r || R(this, t, e, 4, 2147483647, -2147483648),
            t < 0 && (t = 4294967295 + t + 1),
            a.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 24,
            this[e + 1] = t >>> 16,
            this[e + 2] = t >>> 8,
            this[e + 3] = 255 & t) : O(this, t, e, !1),
            e + 4
        }
        ,
        a.prototype.writeFloatLE = function(t, e, r) {
            return M(this, t, e, !0, r)
        }
        ,
        a.prototype.writeFloatBE = function(t, e, r) {
            return M(this, t, e, !1, r)
        }
        ,
        a.prototype.writeDoubleLE = function(t, e, r) {
            return N(this, t, e, !0, r)
        }
        ,
        a.prototype.writeDoubleBE = function(t, e, r) {
            return N(this, t, e, !1, r)
        }
        ,
        a.prototype.copy = function(t, e, r, i) {
            if (r || (r = 0),
            i || 0 === i || (i = this.length),
            e >= t.length && (e = t.length),
            e || (e = 0),
            i > 0 && i < r && (i = r),
            i === r)
                return 0;
            if (0 === t.length || 0 === this.length)
                return 0;
            if (e < 0)
                throw new RangeError("targetStart out of bounds");
            if (r < 0 || r >= this.length)
                throw new RangeError("sourceStart out of bounds");
            if (i < 0)
                throw new RangeError("sourceEnd out of bounds");
            i > this.length && (i = this.length),
            t.length - e < i - r && (i = t.length - e + r);
            var n, o = i - r;
            if (this === t && r < e && e < i)
                for (n = o - 1; n >= 0; --n)
                    t[n + e] = this[n + r];
            else if (o < 1e3 || !a.TYPED_ARRAY_SUPPORT)
                for (n = 0; n < o; ++n)
                    t[n + e] = this[n + r];
            else
                Uint8Array.prototype.set.call(t, this.subarray(r, r + o), e);
            return o
        }
        ,
        a.prototype.fill = function(t, e, r, i) {
            if ("string" == typeof t) {
                if ("string" == typeof e ? (i = e,
                e = 0,
                r = this.length) : "string" == typeof r && (i = r,
                r = this.length),
                1 === t.length) {
                    var n = t.charCodeAt(0);
                    n < 256 && (t = n)
                }
                if (void 0 !== i && "string" != typeof i)
                    throw new TypeError("encoding must be a string");
                if ("string" == typeof i && !a.isEncoding(i))
                    throw new TypeError("Unknown encoding: " + i)
            } else
                "number" == typeof t && (t &= 255);
            if (e < 0 || this.length < e || this.length < r)
                throw new RangeError("Out of range index");
            if (r <= e)
                return this;
            var o;
            if (e >>>= 0,
            r = void 0 === r ? this.length : r >>> 0,
            t || (t = 0),
            "number" == typeof t)
                for (o = e; o < r; ++o)
                    this[o] = t;
            else {
                var s = a.isBuffer(t) ? t : q(new a(t,i).toString())
                  , f = s.length;
                for (o = 0; o < r - e; ++o)
                    this[o + e] = s[o % f]
            }
            return this
        }
        ;
        var P = /[^+\/0-9A-Za-z-_]/g;
        function F(t) {
            return t < 16 ? "0" + t.toString(16) : t.toString(16)
        }
        function q(t, e) {
            var r;
            e = e || 1 / 0;
            for (var i = t.length, n = null, o = [], s = 0; s < i; ++s) {
                if ((r = t.charCodeAt(s)) > 55295 && r < 57344) {
                    if (!n) {
                        if (r > 56319) {
                            (e -= 3) > -1 && o.push(239, 191, 189);
                            continue
                        }
                        if (s + 1 === i) {
                            (e -= 3) > -1 && o.push(239, 191, 189);
                            continue
                        }
                        n = r;
                        continue
                    }
                    if (r < 56320) {
                        (e -= 3) > -1 && o.push(239, 191, 189),
                        n = r;
                        continue
                    }
                    r = 65536 + (n - 55296 << 10 | r - 56320)
                } else
                    n && (e -= 3) > -1 && o.push(239, 191, 189);
                if (n = null,
                r < 128) {
                    if ((e -= 1) < 0)
                        break;
                    o.push(r)
                } else if (r < 2048) {
                    if ((e -= 2) < 0)
                        break;
                    o.push(r >> 6 | 192, 63 & r | 128)
                } else if (r < 65536) {
                    if ((e -= 3) < 0)
                        break;
                    o.push(r >> 12 | 224, r >> 6 & 63 | 128, 63 & r | 128)
                } else {
                    if (!(r < 1114112))
                        throw new Error("Invalid code point");
                    if ((e -= 4) < 0)
                        break;
                    o.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, 63 & r | 128)
                }
            }
            return o
        }
        function z(t) {
            return i.toByteArray(function(t) {
                if ((t = function(t) {
                    return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "")
                }(t).replace(P, "")).length < 2)
                    return "";
                for (; t.length % 4 != 0; )
                    t += "=";
                return t
            }(t))
        }
        function j(t, e, r, i) {
            for (var n = 0; n < i && !(n + r >= e.length || n >= t.length); ++n)
                e[n + r] = t[n];
            return n
        }
    }
    ).call(this, r(3))
}
, function(t, e) {
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
}
, function(t, e, r) {
    "use strict";
    (function(e) {
        /*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
        function i(t, e) {
            if (t === e)
                return 0;
            for (var r = t.length, i = e.length, n = 0, o = Math.min(r, i); n < o; ++n)
                if (t[n] !== e[n]) {
                    r = t[n],
                    i = e[n];
                    break
                }
            return r < i ? -1 : i < r ? 1 : 0
        }
        function n(t) {
            return e.Buffer && "function" == typeof e.Buffer.isBuffer ? e.Buffer.isBuffer(t) : !(null == t || !t._isBuffer)
        }
        var o = r(87)
          , s = Object.prototype.hasOwnProperty
          , f = Array.prototype.slice
          , a = "foo" === function() {}
        .name;
        function h(t) {
            return Object.prototype.toString.call(t)
        }
        function u(t) {
            return !n(t) && ("function" == typeof e.ArrayBuffer && ("function" == typeof ArrayBuffer.isView ? ArrayBuffer.isView(t) : !!t && (t instanceof DataView || !!(t.buffer && t.buffer instanceof ArrayBuffer))))
        }
        var l = t.exports = v
          , c = /\s*function\s+([^\(\s]*)\s*/;
        function d(t) {
            if (o.isFunction(t)) {
                if (a)
                    return t.name;
                var e = t.toString().match(c);
                return e && e[1]
            }
        }
        function p(t, e) {
            return "string" == typeof t ? t.length < e ? t : t.slice(0, e) : t
        }
        function g(t) {
            if (a || !o.isFunction(t))
                return o.inspect(t);
            var e = d(t);
            return "[Function" + (e ? ": " + e : "") + "]"
        }
        function y(t, e, r, i, n) {
            throw new l.AssertionError({
                message: r,
                actual: t,
                expected: e,
                operator: i,
                stackStartFunction: n
            })
        }
        function v(t, e) {
            t || y(t, !0, e, "==", l.ok)
        }
        function b(t, e, r, s) {
            if (t === e)
                return !0;
            if (n(t) && n(e))
                return 0 === i(t, e);
            if (o.isDate(t) && o.isDate(e))
                return t.getTime() === e.getTime();
            if (o.isRegExp(t) && o.isRegExp(e))
                return t.source === e.source && t.global === e.global && t.multiline === e.multiline && t.lastIndex === e.lastIndex && t.ignoreCase === e.ignoreCase;
            if (null !== t && "object" == typeof t || null !== e && "object" == typeof e) {
                if (u(t) && u(e) && h(t) === h(e) && !(t instanceof Float32Array || t instanceof Float64Array))
                    return 0 === i(new Uint8Array(t.buffer), new Uint8Array(e.buffer));
                if (n(t) !== n(e))
                    return !1;
                var a = (s = s || {
                    actual: [],
                    expected: []
                }).actual.indexOf(t);
                return -1 !== a && a === s.expected.indexOf(e) || (s.actual.push(t),
                s.expected.push(e),
                function(t, e, r, i) {
                    if (null === t || void 0 === t || null === e || void 0 === e)
                        return !1;
                    if (o.isPrimitive(t) || o.isPrimitive(e))
                        return t === e;
                    if (r && Object.getPrototypeOf(t) !== Object.getPrototypeOf(e))
                        return !1;
                    var n = w(t)
                      , s = w(e);
                    if (n && !s || !n && s)
                        return !1;
                    if (n)
                        return t = f.call(t),
                        e = f.call(e),
                        b(t, e, r);
                    var a, h, u = E(t), l = E(e);
                    if (u.length !== l.length)
                        return !1;
                    for (u.sort(),
                    l.sort(),
                    h = u.length - 1; h >= 0; h--)
                        if (u[h] !== l[h])
                            return !1;
                    for (h = u.length - 1; h >= 0; h--)
                        if (a = u[h],
                        !b(t[a], e[a], r, i))
                            return !1;
                    return !0
                }(t, e, r, s))
            }
            return r ? t === e : t == e
        }
        function w(t) {
            return "[object Arguments]" == Object.prototype.toString.call(t)
        }
        function m(t, e) {
            if (!t || !e)
                return !1;
            if ("[object RegExp]" == Object.prototype.toString.call(e))
                return e.test(t);
            try {
                if (t instanceof e)
                    return !0
            } catch (t) {}
            return !Error.isPrototypeOf(e) && !0 === e.call({}, t)
        }
        function _(t, e, r, i) {
            var n;
            if ("function" != typeof e)
                throw new TypeError('"block" argument must be a function');
            "string" == typeof r && (i = r,
            r = null),
            n = function(t) {
                var e;
                try {
                    t()
                } catch (t) {
                    e = t
                }
                return e
            }(e),
            i = (r && r.name ? " (" + r.name + ")." : ".") + (i ? " " + i : "."),
            t && !n && y(n, r, "Missing expected exception" + i);
            var s = "string" == typeof i
              , f = !t && o.isError(n)
              , a = !t && n && !r;
            if ((f && s && m(n, r) || a) && y(n, r, "Got unwanted exception" + i),
            t && n && r && !m(n, r) || !t && n)
                throw n
        }
        l.AssertionError = function(t) {
            this.name = "AssertionError",
            this.actual = t.actual,
            this.expected = t.expected,
            this.operator = t.operator,
            t.message ? (this.message = t.message,
            this.generatedMessage = !1) : (this.message = function(t) {
                return p(g(t.actual), 128) + " " + t.operator + " " + p(g(t.expected), 128)
            }(this),
            this.generatedMessage = !0);
            var e = t.stackStartFunction || y;
            if (Error.captureStackTrace)
                Error.captureStackTrace(this, e);
            else {
                var r = new Error;
                if (r.stack) {
                    var i = r.stack
                      , n = d(e)
                      , o = i.indexOf("\n" + n);
                    if (o >= 0) {
                        var s = i.indexOf("\n", o + 1);
                        i = i.substring(s + 1)
                    }
                    this.stack = i
                }
            }
        }
        ,
        o.inherits(l.AssertionError, Error),
        l.fail = y,
        l.ok = v,
        l.equal = function(t, e, r) {
            t != e && y(t, e, r, "==", l.equal)
        }
        ,
        l.notEqual = function(t, e, r) {
            t == e && y(t, e, r, "!=", l.notEqual)
        }
        ,
        l.deepEqual = function(t, e, r) {
            b(t, e, !1) || y(t, e, r, "deepEqual", l.deepEqual)
        }
        ,
        l.deepStrictEqual = function(t, e, r) {
            b(t, e, !0) || y(t, e, r, "deepStrictEqual", l.deepStrictEqual)
        }
        ,
        l.notDeepEqual = function(t, e, r) {
            b(t, e, !1) && y(t, e, r, "notDeepEqual", l.notDeepEqual)
        }
        ,
        l.notDeepStrictEqual = function t(e, r, i) {
            b(e, r, !0) && y(e, r, i, "notDeepStrictEqual", t)
        }
        ,
        l.strictEqual = function(t, e, r) {
            t !== e && y(t, e, r, "===", l.strictEqual)
        }
        ,
        l.notStrictEqual = function(t, e, r) {
            t === e && y(t, e, r, "!==", l.notStrictEqual)
        }
        ,
        l.throws = function(t, e, r) {
            _(!0, t, e, r)
        }
        ,
        l.doesNotThrow = function(t, e, r) {
            _(!1, t, e, r)
        }
        ,
        l.ifError = function(t) {
            if (t)
                throw t
        }
        ;
        var E = Object.keys || function(t) {
            var e = [];
            for (var r in t)
                s.call(t, r) && e.push(r);
            return e
        }
    }
    ).call(this, r(3))
}
, function(t, e, r) {
    var i = r(44);
    r(90),
    t.exports = i
}
, function(t, e, r) {
    var i = r(0).Buffer
      , n = r(35).Transform
      , o = r(23).StringDecoder;
    function s(t) {
        n.call(this),
        this.hashMode = "string" == typeof t,
        this.hashMode ? this[t] = this._finalOrDigest : this.final = this._finalOrDigest,
        this._final && (this.__final = this._final,
        this._final = null),
        this._decoder = null,
        this._encoding = null
    }
    r(1)(s, n),
    s.prototype.update = function(t, e, r) {
        "string" == typeof t && (t = i.from(t, e));
        var n = this._update(t);
        return this.hashMode ? this : (r && (n = this._toString(n, r)),
        n)
    }
    ,
    s.prototype.setAutoPadding = function() {}
    ,
    s.prototype.getAuthTag = function() {
        throw new Error("trying to get auth tag in unsupported state")
    }
    ,
    s.prototype.setAuthTag = function() {
        throw new Error("trying to set auth tag in unsupported state")
    }
    ,
    s.prototype.setAAD = function() {
        throw new Error("trying to set aad in unsupported state")
    }
    ,
    s.prototype._transform = function(t, e, r) {
        var i;
        try {
            this.hashMode ? this._update(t) : this.push(this._update(t))
        } catch (t) {
            i = t
        } finally {
            r(i)
        }
    }
    ,
    s.prototype._flush = function(t) {
        var e;
        try {
            this.push(this.__final())
        } catch (t) {
            e = t
        }
        t(e)
    }
    ,
    s.prototype._finalOrDigest = function(t) {
        var e = this.__final() || i.alloc(0);
        return t && (e = this._toString(e, t, !0)),
        e
    }
    ,
    s.prototype._toString = function(t, e, r) {
        if (this._decoder || (this._decoder = new o(e),
        this._encoding = e),
        this._encoding !== e)
            throw new Error("can't switch encodings");
        var i = this._decoder.write(t);
        return r && (i += this._decoder.end()),
        i
    }
    ,
    t.exports = s
}
, function(t, e, r) {
    "use strict";
    var i = r(18)
      , n = Object.keys || function(t) {
        var e = [];
        for (var r in t)
            e.push(r);
        return e
    }
    ;
    t.exports = l;
    var o = r(14);
    o.inherits = r(1);
    var s = r(36)
      , f = r(22);
    o.inherits(l, s);
    for (var a = n(f.prototype), h = 0; h < a.length; h++) {
        var u = a[h];
        l.prototype[u] || (l.prototype[u] = f.prototype[u])
    }
    function l(t) {
        if (!(this instanceof l))
            return new l(t);
        s.call(this, t),
        f.call(this, t),
        t && !1 === t.readable && (this.readable = !1),
        t && !1 === t.writable && (this.writable = !1),
        this.allowHalfOpen = !0,
        t && !1 === t.allowHalfOpen && (this.allowHalfOpen = !1),
        this.once("end", c)
    }
    function c() {
        this.allowHalfOpen || this._writableState.ended || i.nextTick(d, this)
    }
    function d(t) {
        t.end()
    }
    Object.defineProperty(l.prototype, "writableHighWaterMark", {
        enumerable: !1,
        get: function() {
            return this._writableState.highWaterMark
        }
    }),
    Object.defineProperty(l.prototype, "destroyed", {
        get: function() {
            return void 0 !== this._readableState && void 0 !== this._writableState && (this._readableState.destroyed && this._writableState.destroyed)
        },
        set: function(t) {
            void 0 !== this._readableState && void 0 !== this._writableState && (this._readableState.destroyed = t,
            this._writableState.destroyed = t)
        }
    }),
    l.prototype._destroy = function(t, e) {
        this.push(null),
        this.end(),
        i.nextTick(e, t)
    }
}
, function(t, e, r) {
    "use strict";
    var i = r(46)
      , n = r(97);
    t.exports = {
        sha1: function(t, e) {
            return i("sha1").update(t).digest(e)
        },
        sha256: function(t, e) {
            return i("sha256").update(t).digest(e)
        },
        sha512: function(t, e) {
            return i("sha512").update(t).digest(e)
        },
        HmacSHA256: function(t, e) {
            return n("sha256", e).update(t).digest()
        },
        ripemd160: function(t) {
            return i("rmd160").update(t).digest()
        }
    }
}
, function(t, e) {
    var r, i, n = t.exports = {};
    function o() {
        throw new Error("setTimeout has not been defined")
    }
    function s() {
        throw new Error("clearTimeout has not been defined")
    }
    function f(t) {
        if (r === setTimeout)
            return setTimeout(t, 0);
        if ((r === o || !r) && setTimeout)
            return r = setTimeout,
            setTimeout(t, 0);
        try {
            return r(t, 0)
        } catch (e) {
            try {
                return r.call(null, t, 0)
            } catch (e) {
                return r.call(this, t, 0)
            }
        }
    }
    !function() {
        try {
            r = "function" == typeof setTimeout ? setTimeout : o
        } catch (t) {
            r = o
        }
        try {
            i = "function" == typeof clearTimeout ? clearTimeout : s
        } catch (t) {
            i = s
        }
    }();
    var a, h = [], u = !1, l = -1;
    function c() {
        u && a && (u = !1,
        a.length ? h = a.concat(h) : l = -1,
        h.length && d())
    }
    function d() {
        if (!u) {
            var t = f(c);
            u = !0;
            for (var e = h.length; e; ) {
                for (a = h,
                h = []; ++l < e; )
                    a && a[l].run();
                l = -1,
                e = h.length
            }
            a = null,
            u = !1,
            function(t) {
                if (i === clearTimeout)
                    return clearTimeout(t);
                if ((i === s || !i) && clearTimeout)
                    return i = clearTimeout,
                    clearTimeout(t);
                try {
                    i(t)
                } catch (e) {
                    try {
                        return i.call(null, t)
                    } catch (e) {
                        return i.call(this, t)
                    }
                }
            }(t)
        }
    }
    function p(t, e) {
        this.fun = t,
        this.array = e
    }
    function g() {}
    n.nextTick = function(t) {
        var e = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var r = 1; r < arguments.length; r++)
                e[r - 1] = arguments[r];
        h.push(new p(t,e)),
        1 !== h.length || u || f(d)
    }
    ,
    p.prototype.run = function() {
        this.fun.apply(null, this.array)
    }
    ,
    n.title = "browser",
    n.browser = !0,
    n.env = {},
    n.argv = [],
    n.version = "",
    n.versions = {},
    n.on = g,
    n.addListener = g,
    n.once = g,
    n.off = g,
    n.removeListener = g,
    n.removeAllListeners = g,
    n.emit = g,
    n.prependListener = g,
    n.prependOnceListener = g,
    n.listeners = function(t) {
        return []
    }
    ,
    n.binding = function(t) {
        throw new Error("process.binding is not supported")
    }
    ,
    n.cwd = function() {
        return "/"
    }
    ,
    n.chdir = function(t) {
        throw new Error("process.chdir is not supported")
    }
    ,
    n.umask = function() {
        return 0
    }
}
, function(t, e, r) {
    var i = r(0).Buffer;
    function n(t, e) {
        this._block = i.alloc(t),
        this._finalSize = e,
        this._blockSize = t,
        this._len = 0
    }
    n.prototype.update = function(t, e) {
        "string" == typeof t && (e = e || "utf8",
        t = i.from(t, e));
        for (var r = this._block, n = this._blockSize, o = t.length, s = this._len, f = 0; f < o; ) {
            for (var a = s % n, h = Math.min(o - f, n - a), u = 0; u < h; u++)
                r[a + u] = t[f + u];
            f += h,
            (s += h) % n == 0 && this._update(r)
        }
        return this._len += o,
        this
    }
    ,
    n.prototype.digest = function(t) {
        var e = this._len % this._blockSize;
        this._block[e] = 128,
        this._block.fill(0, e + 1),
        e >= this._finalSize && (this._update(this._block),
        this._block.fill(0));
        var r = 8 * this._len;
        if (r <= 4294967295)
            this._block.writeUInt32BE(r, this._blockSize - 4);
        else {
            var i = (4294967295 & r) >>> 0
              , n = (r - i) / 4294967296;
            this._block.writeUInt32BE(n, this._blockSize - 8),
            this._block.writeUInt32BE(i, this._blockSize - 4)
        }
        this._update(this._block);
        var o = this._hash();
        return t ? o.toString(t) : o
    }
    ,
    n.prototype._update = function() {
        throw new Error("_update must be implemented by subclass")
    }
    ,
    t.exports = n
}
, function(t, e, r) {
    "use strict";
    var i = this && this.__read || function(t, e) {
        var r = "function" == typeof Symbol && t[Symbol.iterator];
        if (!r)
            return t;
        var i, n, o = r.call(t), s = [];
        try {
            for (; (void 0 === e || e-- > 0) && !(i = o.next()).done; )
                s.push(i.value)
        } catch (t) {
            n = {
                error: t
            }
        } finally {
            try {
                i && !i.done && (r = o.return) && r.call(o)
            } finally {
                if (n)
                    throw n.error
            }
        }
        return s
    }
      , n = this && this.__spread || function() {
        for (var t = [], e = 0; e < arguments.length; e++)
            t = t.concat(i(arguments[e]));
        return t
    }
      , o = this && this.__values || function(t) {
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
    var s = r(12).RIPEMD160.hash
      , f = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
      , a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    var h = function() {
        for (var t = Array(256).fill(-1), e = 0; e < f.length; ++e)
            t[f.charCodeAt(e)] = e;
        return t
    }();
    var u = function() {
        for (var t = Array(256).fill(-1), e = 0; e < a.length; ++e)
            t[a.charCodeAt(e)] = e;
        return t["=".charCodeAt(0)] = 0,
        t
    }();
    function l(t) {
        return 0 != (128 & t[t.length - 1])
    }
    function c(t) {
        for (var e = 1, r = 0; r < t.length; ++r) {
            var i = (255 & ~t[r]) + e;
            t[r] = i,
            e = i >> 8
        }
    }
    function d(t, e) {
        for (var r = new Uint8Array(t), i = 0; i < e.length; ++i) {
            var n = e.charCodeAt(i);
            if (n < "0".charCodeAt(0) || n > "9".charCodeAt(0))
                throw new Error("invalid number");
            for (var o = n - "0".charCodeAt(0), s = 0; s < t; ++s) {
                var f = 10 * r[s] + o;
                r[s] = f,
                o = f >> 8
            }
            if (o)
                throw new Error("number is out of range")
        }
        return r
    }
    function p(t, e) {
        void 0 === e && (e = 1);
        for (var r = Array(e).fill("0".charCodeAt(0)), i = t.length - 1; i >= 0; --i) {
            for (var o = t[i], s = 0; s < r.length; ++s) {
                var f = (r[s] - "0".charCodeAt(0) << 8) + o;
                r[s] = "0".charCodeAt(0) + f % 10,
                o = f / 10 | 0
            }
            for (; o; )
                r.push("0".charCodeAt(0) + o % 10),
                o = o / 10 | 0
        }
        return r.reverse(),
        String.fromCharCode.apply(String, n(r))
    }
    function g(t, e) {
        for (var r = new Uint8Array(t), i = 0; i < e.length; ++i) {
            var n = h[e.charCodeAt(i)];
            if (n < 0)
                throw new Error("invalid base-58 value");
            for (var o = 0; o < t; ++o) {
                var s = 58 * r[o] + n;
                r[o] = s,
                n = s >> 8
            }
            if (n)
                throw new Error("base-58 value is out of range")
        }
        return r.reverse(),
        r
    }
    function y(t, e) {
        var r, i, s, a;
        void 0 === e && (e = 1);
        var u = [];
        try {
            for (var l = o(t), c = l.next(); !c.done; c = l.next()) {
                for (var d = c.value, p = 0; p < u.length; ++p) {
                    var g = (h[u[p]] << 8) + d;
                    u[p] = f.charCodeAt(g % 58),
                    d = g / 58 | 0
                }
                for (; d; )
                    u.push(f.charCodeAt(d % 58)),
                    d = d / 58 | 0
            }
        } catch (t) {
            r = {
                error: t
            }
        } finally {
            try {
                c && !c.done && (i = l.return) && i.call(l)
            } finally {
                if (r)
                    throw r.error
            }
        }
        try {
            for (var y = o(t), v = y.next(); !v.done; v = y.next()) {
                if (v.value)
                    break;
                u.push("1".charCodeAt(0))
            }
        } catch (t) {
            s = {
                error: t
            }
        } finally {
            try {
                v && !v.done && (a = y.return) && a.call(y)
            } finally {
                if (s)
                    throw s.error
            }
        }
        return u.reverse(),
        String.fromCharCode.apply(String, n(u))
    }
    function v(t, e) {
        for (var r = new Uint8Array(t.length + e.length), i = 0; i < t.length; ++i)
            r[i] = t[i];
        for (i = 0; i < e.length; ++i)
            r[t.length + i] = e.charCodeAt(i);
        return s(r)
    }
    function b(t, e, r, i) {
        var n = g(r + 4, t)
          , o = {
            type: e,
            data: new Uint8Array(n.buffer,0,r)
        }
          , s = new Uint8Array(v(o.data, i));
        if (s[0] !== n[r + 0] || s[1] !== n[r + 1] || s[2] !== n[r + 2] || s[3] !== n[r + 3])
            throw new Error("checksum doesn't match");
        return o
    }
    function w(t, e, r) {
        for (var i = new Uint8Array(v(t.data, e)), n = new Uint8Array(t.data.length + 4), o = 0; o < t.data.length; ++o)
            n[o] = t.data[o];
        for (o = 0; o < 4; ++o)
            n[o + t.data.length] = i[o];
        return r + y(n)
    }
    function m(t) {
        if ("string" != typeof t)
            throw new Error("expected string containing public key");
        if ("EOS" === t.substr(0, 3)) {
            for (var r = g(e.publicKeyDataSize + 4, t.substr(3)), i = {
                type: 0,
                data: new Uint8Array(e.publicKeyDataSize)
            }, n = 0; n < e.publicKeyDataSize; ++n)
                i.data[n] = r[n];
            var o = new Uint8Array(s(i.data));
            if (o[0] !== r[e.publicKeyDataSize] || o[1] !== r[34] || o[2] !== r[35] || o[3] !== r[36])
                throw new Error("checksum doesn't match");
            return i
        }
        if ("PUB_K1_" === t.substr(0, 7))
            return b(t.substr(7), 0, e.publicKeyDataSize, "K1");
        if ("PUB_R1_" === t.substr(0, 7))
            return b(t.substr(7), 1, e.publicKeyDataSize, "R1");
        throw new Error("unrecognized public key format")
    }
    function _(t) {
        if (0 === t.type && t.data.length === e.publicKeyDataSize)
            return w(t, "K1", "PUB_K1_");
        if (1 === t.type && t.data.length === e.publicKeyDataSize)
            return w(t, "R1", "PUB_R1_");
        throw new Error("unrecognized public key format")
    }
    function E(t) {
        return "EOS" === t.substr(0, 3) ? _(m(t)) : t
    }
    e.isNegative = l,
    e.negate = c,
    e.decimalToBinary = d,
    e.signedDecimalToBinary = function(t, e) {
        var r = "-" === e[0];
        r && (e = e.substr(1));
        var i = d(t, e);
        if (r) {
            if (c(i),
            !l(i))
                throw new Error("number is out of range")
        } else if (l(i))
            throw new Error("number is out of range");
        return i
    }
    ,
    e.binaryToDecimal = p,
    e.signedBinaryToDecimal = function(t, e) {
        if (void 0 === e && (e = 1),
        l(t)) {
            var r = t.slice();
            return c(r),
            "-" + p(r, e)
        }
        return p(t, e)
    }
    ,
    e.base58ToBinary = g,
    e.binaryToBase58 = y,
    e.base64ToBinary = function(t) {
        var e = t.length;
        if (1 == (3 & e) && "=" === t[e - 1] && (e -= 1),
        0 != (3 & e))
            throw new Error("base-64 value is not padded correctly");
        var r = e >> 2
          , i = 3 * r;
        e > 0 && "=" === t[e - 1] && ("=" === t[e - 2] ? i -= 2 : i -= 1);
        for (var n = new Uint8Array(i), o = 0; o < r; ++o) {
            var s = u[t.charCodeAt(4 * o + 0)]
              , f = u[t.charCodeAt(4 * o + 1)]
              , a = u[t.charCodeAt(4 * o + 2)]
              , h = u[t.charCodeAt(4 * o + 3)];
            n[3 * o + 0] = s << 2 | f >> 4,
            3 * o + 1 < i && (n[3 * o + 1] = (15 & f) << 4 | a >> 2),
            3 * o + 2 < i && (n[3 * o + 2] = (3 & a) << 6 | h)
        }
        return n
    }
    ,
    e.publicKeyDataSize = 33,
    e.privateKeyDataSize = 32,
    e.signatureDataSize = 65,
    e.stringToPublicKey = m,
    e.publicKeyToString = _,
    e.convertLegacyPublicKey = E,
    e.convertLegacyPublicKeys = function(t) {
        return t.map(E)
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
            return w(t, "R1", "PVT_R1_");
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
            return w(t, "K1", "SIG_K1_");
        if (1 === t.type)
            return w(t, "R1", "SIG_R1_");
        throw new Error("unrecognized signature format")
    }
}
, function(t, e, r) {
    "use strict";
    class i {
        constructor() {}
        static get_n_pad_bytes(t) {
            return 64 - (t + 8 & 63)
        }
        static pad(t) {
            const e = t.byteLength
              , r = i.get_n_pad_bytes(e)
              , [n,o] = ((t,e)=>[Math.floor(t / e), t % e])(e, 536870912).map((t,e)=>e ? 8 * t : t)
              , s = new Uint8Array(e + r + 8);
            s.set(new Uint8Array(t), 0);
            const f = new DataView(s.buffer);
            return f.setUint8(e, 128),
            f.setUint32(e + r, o, !0),
            f.setUint32(e + r + 4, n, !0),
            s.buffer
        }
        static f(t, e, r, i) {
            return 0 <= t && t <= 15 ? e ^ r ^ i : 16 <= t && t <= 31 ? e & r | ~e & i : 32 <= t && t <= 47 ? (e | ~r) ^ i : 48 <= t && t <= 63 ? e & i | r & ~i : 64 <= t && t <= 79 ? e ^ (r | ~i) : void 0
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
            const e = i.pad(t)
              , r = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13]
              , n = [5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11]
              , o = [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6]
              , s = [8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11]
              , f = e.byteLength / 64
              , a = new Array(f).fill(void 0).map((t,r)=>t=>new DataView(e,64 * r,64).getUint32(4 * t, !0));
            let h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
            for (let t = 0; t < f; ++t) {
                let e = h[0]
                  , f = h[1]
                  , u = h[2]
                  , l = h[3]
                  , c = h[4]
                  , d = e
                  , p = f
                  , g = u
                  , y = l
                  , v = c;
                for (let h = 0; h < 80; ++h) {
                    let b = i.add_modulo32(i.rol32(i.add_modulo32(e, i.f(h, f, u, l), a[t](r[h]), i.K(h)), o[h]), c);
                    e = c,
                    c = l,
                    l = i.rol32(u, 10),
                    u = f,
                    f = b,
                    b = i.add_modulo32(i.rol32(i.add_modulo32(d, i.f(79 - h, p, g, y), a[t](n[h]), i.KP(h)), s[h]), v),
                    d = v,
                    v = y,
                    y = i.rol32(g, 10),
                    g = p,
                    p = b
                }
                let b = i.add_modulo32(h[1], u, y);
                h[1] = i.add_modulo32(h[2], l, v),
                h[2] = i.add_modulo32(h[3], c, d),
                h[3] = i.add_modulo32(h[4], e, p),
                h[4] = i.add_modulo32(h[0], f, g),
                h[0] = b
            }
            const u = new ArrayBuffer(20)
              , l = new DataView(u);
            return h.forEach((t,e)=>l.setUint32(4 * e, t, !0)),
            u
        }
    }
    t.exports = {
        RIPEMD160: i
    }
}
, function(t, e, r) {
    (function(e) {
        t.exports = function(t, r) {
            for (var i = Math.min(t.length, r.length), n = new e(i), o = 0; o < i; ++o)
                n[o] = t[o] ^ r[o];
            return n
        }
    }
    ).call(this, r(2).Buffer)
}
, function(t, e, r) {
    (function(t) {
        function r(t) {
            return Object.prototype.toString.call(t)
        }
        e.isArray = function(t) {
            return Array.isArray ? Array.isArray(t) : "[object Array]" === r(t)
        }
        ,
        e.isBoolean = function(t) {
            return "boolean" == typeof t
        }
        ,
        e.isNull = function(t) {
            return null === t
        }
        ,
        e.isNullOrUndefined = function(t) {
            return null == t
        }
        ,
        e.isNumber = function(t) {
            return "number" == typeof t
        }
        ,
        e.isString = function(t) {
            return "string" == typeof t
        }
        ,
        e.isSymbol = function(t) {
            return "symbol" == typeof t
        }
        ,
        e.isUndefined = function(t) {
            return void 0 === t
        }
        ,
        e.isRegExp = function(t) {
            return "[object RegExp]" === r(t)
        }
        ,
        e.isObject = function(t) {
            return "object" == typeof t && null !== t
        }
        ,
        e.isDate = function(t) {
            return "[object Date]" === r(t)
        }
        ,
        e.isError = function(t) {
            return "[object Error]" === r(t) || t instanceof Error
        }
        ,
        e.isFunction = function(t) {
            return "function" == typeof t
        }
        ,
        e.isPrimitive = function(t) {
            return null === t || "boolean" == typeof t || "number" == typeof t || "string" == typeof t || "symbol" == typeof t || void 0 === t
        }
        ,
        e.isBuffer = t.isBuffer
    }
    ).call(this, r(2).Buffer)
}
, function(t, e, r) {
    "use strict";
    (function(e) {
        var i = function() {
            return function(t, e) {
                if (Array.isArray(t))
                    return t;
                if (Symbol.iterator in Object(t))
                    return function(t, e) {
                        var r = []
                          , i = !0
                          , n = !1
                          , o = void 0;
                        try {
                            for (var s, f = t[Symbol.iterator](); !(i = (s = f.next()).done) && (r.push(s.value),
                            !e || r.length !== e); i = !0)
                                ;
                        } catch (t) {
                            n = !0,
                            o = t
                        } finally {
                            try {
                                !i && f.return && f.return()
                            } finally {
                                if (n)
                                    throw o
                            }
                        }
                        return r
                    }(t, e);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
        }()
          , n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        }
        : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }
          , o = r(4)
          , s = r(25)
          , f = r(5)
          , a = s.getCurveByName("secp256k1")
          , h = r(8)
          , u = r(16)
          , l = a.G
          , c = a.n;
        function d(t) {
            var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "EOS";
            if ("string" == typeof t) {
                var i = d.fromString(t, r);
                return o(null != i, "Invalid public key"),
                i
            }
            if (e.isBuffer(t))
                return d.fromBuffer(t);
            if ("object" === (void 0 === t ? "undefined" : n(t)) && t.Q)
                return d(t.Q);
            function p() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t.compressed;
                return t.getEncoded(e)
            }
            o.equal(void 0 === t ? "undefined" : n(t), "object", "Invalid public key"),
            o.equal(n(t.compressed), "boolean", "Invalid public key");
            return {
                Q: t,
                toString: function() {
                    return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "EOS") + u.checkEncode(p())
                },
                toUncompressed: function() {
                    var e = t.getEncoded(!1)
                      , r = s.Point.decodeFrom(a, e);
                    return d.fromPoint(r)
                },
                toBuffer: p,
                child: function(r) {
                    console.error("Deprecated warning: PublicKey.child"),
                    o(e.isBuffer(r), "Buffer required: offset"),
                    o.equal(r.length, 32, "offset length"),
                    r = e.concat([p(), r]),
                    r = h.sha256(r);
                    var i = f.fromBuffer(r);
                    if (i.compareTo(c) >= 0)
                        throw new Error("Child offset went out of bounds, try again");
                    var n = l.multiply(i)
                      , s = t.add(n);
                    if (a.isInfinity(s))
                        throw new Error("Child offset derived to an invalid key, try again");
                    return d.fromPoint(s)
                },
                toHex: function() {
                    return p().toString("hex")
                }
            }
        }
        t.exports = d,
        d.isValid = function(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "EOS";
            try {
                return d(t, e),
                !0
            } catch (t) {
                return !1
            }
        }
        ,
        d.fromBinary = function(t) {
            return d.fromBuffer(new e(t,"binary"))
        }
        ,
        d.fromBuffer = function(t) {
            return d(s.Point.decodeFrom(a, t))
        }
        ,
        d.fromPoint = function(t) {
            return d(t)
        }
        ,
        d.fromString = function(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "EOS";
            try {
                return d.fromStringOrThrow(t, e)
            } catch (t) {
                return null
            }
        }
        ,
        d.fromStringOrThrow = function(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "EOS";
            o.equal(void 0 === t ? "undefined" : n(t), "string", "public_key");
            var r = t.match(/^PUB_([A-Za-z0-9]+)_([A-Za-z0-9]+)$/);
            if (null === r)
                return new RegExp("^" + e).test(t) && (t = t.substring(e.length)),
                d.fromBuffer(u.checkDecode(t));
            o(3 === r.length, "Expecting public key like: PUB_K1_base58pubkey..");
            var s = i(r, 3)
              , f = s[1]
              , a = s[2];
            return o.equal(f, "K1", "K1 private key expected"),
            d.fromBuffer(u.checkDecode(a, f))
        }
        ,
        d.fromHex = function(t) {
            return d.fromBuffer(new e(t,"hex"))
        }
        ,
        d.fromStringHex = function(t) {
            return d.fromString(new e(t,"hex"))
        }
    }
    ).call(this, r(2).Buffer)
}
, function(t, e, r) {
    "use strict";
    (function(e) {
        var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        }
        : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }
          , n = r(100)
          , o = r(4)
          , s = r(29)
          , f = r(8);
        t.exports = {
            random32ByteBuffer: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                  , r = t.cpuEntropyBits
                  , n = void 0 === r ? 0 : r
                  , a = t.safe
                  , c = void 0 === a || a;
                o.equal(void 0 === n ? "undefined" : i(n), "number", "cpuEntropyBits"),
                o.equal(void 0 === c ? "undefined" : i(c), "boolean", "boolean"),
                c && o(h >= 128, "Call initialize() to add entropy");
                var d = [];
                return d.push(s(32)),
                d.push(e.from(l(n))),
                d.push(u),
                d.push(function() {
                    var t = Array(s(101)).join();
                    try {
                        t += (new Date).toString() + " " + window.screen.height + " " + window.screen.width + " " + window.screen.colorDepth + "  " + window.screen.availHeight + " " + window.screen.availWidth + " " + window.screen.pixelDepth + navigator.language + " " + window.location + " " + window.history.length;
                        for (var r, i = 0; i < navigator.mimeTypes.length; i++)
                            r = navigator.mimeTypes[i],
                            t += r.description + " " + r.type + " " + r.suffixes + " "
                    } catch (e) {
                        t += f.sha256((new Date).toString())
                    }
                    for (var n = new e(t), o = t += n.toString("binary") + " " + (new Date).toString(), a = Date.now(); Date.now() - a < 25; )
                        o = f.sha256(o);
                    return o
                }()),
                f.sha256(e.concat(d))
            },
            addEntropy: function() {
                o.equal(u.length, 101, "externalEntropyArray");
                for (var t = arguments.length, e = Array(t), r = 0; r < t; r++)
                    e[r] = arguments[r];
                h += e.length;
                var i = !0
                  , n = !1
                  , s = void 0;
                try {
                    for (var f, l = e[Symbol.iterator](); !(i = (f = l.next()).done); i = !0) {
                        var c = f.value
                          , d = a++ % 101
                          , p = u[d] += c;
                        p > 9007199254740991 && (u[d] = 0)
                    }
                } catch (t) {
                    n = !0,
                    s = t
                } finally {
                    try {
                        !i && l.return && l.return()
                    } finally {
                        if (n)
                            throw s
                    }
                }
            },
            cpuEntropy: l,
            entropyCount: function() {
                return h
            },
            checkDecode: function(t) {
                var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                o(null != t, "private key expected");
                var i = new e(n.decode(t))
                  , s = i.slice(-4)
                  , a = i.slice(0, -4)
                  , h = void 0;
                if ("sha256x2" === r)
                    h = f.sha256(f.sha256(a)).slice(0, 4);
                else {
                    var u = [a];
                    r && u.push(e.from(r)),
                    h = f.ripemd160(e.concat(u)).slice(0, 4)
                }
                if (s.toString() !== h.toString())
                    throw new Error("Invalid checksum, " + s.toString("hex") + " != " + h.toString("hex"));
                return a
            },
            checkEncode: function(t) {
                var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                if (o(e.isBuffer(t), "expecting keyBuffer<Buffer>"),
                "sha256x2" === r) {
                    var i = f.sha256(f.sha256(t)).slice(0, 4);
                    return n.encode(e.concat([t, i]))
                }
                var s = [t];
                r && s.push(e.from(r));
                var a = f.ripemd160(e.concat(s)).slice(0, 4);
                return n.encode(e.concat([t, a]))
            }
        };
        var a = 0
          , h = 0
          , u = s(101);
        function l() {
            for (var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 128, e = [], r = null, i = 0; e.length < t; ) {
                var n = c();
                if (null != r) {
                    var o = n - r;
                    if (Math.abs(o) < 1) {
                        i++;
                        continue
                    }
                    var s = Math.floor(d(Math.abs(o)) + 1);
                    if (s < 4) {
                        s < 2 && i++;
                        continue
                    }
                    e.push(o)
                }
                r = n
            }
            if (i > 10) {
                var f = Number(i / t * 100).toFixed(2);
                console.warn("WARN: " + f + "% low CPU entropy re-sampled")
            }
            return e
        }
        function c() {
            for (var t = Date.now(), e = 0, r = 0; Date.now() < t + 7 + 1; )
                r = Math.sin(Math.sqrt(Math.log(++e + r)));
            return e
        }
        var d = function(t) {
            return Math.log(t) / Math.LN2
        }
    }
    ).call(this, r(2).Buffer)
}
, function(t, e, r) {
    var i = r(0).Buffer;
    function n(t) {
        i.isBuffer(t) || (t = i.from(t));
        for (var e = t.length / 4 | 0, r = new Array(e), n = 0; n < e; n++)
            r[n] = t.readUInt32BE(4 * n);
        return r
    }
    function o(t) {
        for (; 0 < t.length; t++)
            t[0] = 0
    }
    function s(t, e, r, i, n) {
        for (var o, s, f, a, h = r[0], u = r[1], l = r[2], c = r[3], d = t[0] ^ e[0], p = t[1] ^ e[1], g = t[2] ^ e[2], y = t[3] ^ e[3], v = 4, b = 1; b < n; b++)
            o = h[d >>> 24] ^ u[p >>> 16 & 255] ^ l[g >>> 8 & 255] ^ c[255 & y] ^ e[v++],
            s = h[p >>> 24] ^ u[g >>> 16 & 255] ^ l[y >>> 8 & 255] ^ c[255 & d] ^ e[v++],
            f = h[g >>> 24] ^ u[y >>> 16 & 255] ^ l[d >>> 8 & 255] ^ c[255 & p] ^ e[v++],
            a = h[y >>> 24] ^ u[d >>> 16 & 255] ^ l[p >>> 8 & 255] ^ c[255 & g] ^ e[v++],
            d = o,
            p = s,
            g = f,
            y = a;
        return o = (i[d >>> 24] << 24 | i[p >>> 16 & 255] << 16 | i[g >>> 8 & 255] << 8 | i[255 & y]) ^ e[v++],
        s = (i[p >>> 24] << 24 | i[g >>> 16 & 255] << 16 | i[y >>> 8 & 255] << 8 | i[255 & d]) ^ e[v++],
        f = (i[g >>> 24] << 24 | i[y >>> 16 & 255] << 16 | i[d >>> 8 & 255] << 8 | i[255 & p]) ^ e[v++],
        a = (i[y >>> 24] << 24 | i[d >>> 16 & 255] << 16 | i[p >>> 8 & 255] << 8 | i[255 & g]) ^ e[v++],
        [o >>>= 0, s >>>= 0, f >>>= 0, a >>>= 0]
    }
    var f = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54]
      , a = function() {
        for (var t = new Array(256), e = 0; e < 256; e++)
            t[e] = e < 128 ? e << 1 : e << 1 ^ 283;
        for (var r = [], i = [], n = [[], [], [], []], o = [[], [], [], []], s = 0, f = 0, a = 0; a < 256; ++a) {
            var h = f ^ f << 1 ^ f << 2 ^ f << 3 ^ f << 4;
            h = h >>> 8 ^ 255 & h ^ 99,
            r[s] = h,
            i[h] = s;
            var u = t[s]
              , l = t[u]
              , c = t[l]
              , d = 257 * t[h] ^ 16843008 * h;
            n[0][s] = d << 24 | d >>> 8,
            n[1][s] = d << 16 | d >>> 16,
            n[2][s] = d << 8 | d >>> 24,
            n[3][s] = d,
            d = 16843009 * c ^ 65537 * l ^ 257 * u ^ 16843008 * s,
            o[0][h] = d << 24 | d >>> 8,
            o[1][h] = d << 16 | d >>> 16,
            o[2][h] = d << 8 | d >>> 24,
            o[3][h] = d,
            0 === s ? s = f = 1 : (s = u ^ t[t[t[c ^ u]]],
            f ^= t[t[f]])
        }
        return {
            SBOX: r,
            INV_SBOX: i,
            SUB_MIX: n,
            INV_SUB_MIX: o
        }
    }();
    function h(t) {
        this._key = n(t),
        this._reset()
    }
    h.blockSize = 16,
    h.keySize = 32,
    h.prototype.blockSize = h.blockSize,
    h.prototype.keySize = h.keySize,
    h.prototype._reset = function() {
        for (var t = this._key, e = t.length, r = e + 6, i = 4 * (r + 1), n = [], o = 0; o < e; o++)
            n[o] = t[o];
        for (o = e; o < i; o++) {
            var s = n[o - 1];
            o % e == 0 ? (s = s << 8 | s >>> 24,
            s = a.SBOX[s >>> 24] << 24 | a.SBOX[s >>> 16 & 255] << 16 | a.SBOX[s >>> 8 & 255] << 8 | a.SBOX[255 & s],
            s ^= f[o / e | 0] << 24) : e > 6 && o % e == 4 && (s = a.SBOX[s >>> 24] << 24 | a.SBOX[s >>> 16 & 255] << 16 | a.SBOX[s >>> 8 & 255] << 8 | a.SBOX[255 & s]),
            n[o] = n[o - e] ^ s
        }
        for (var h = [], u = 0; u < i; u++) {
            var l = i - u
              , c = n[l - (u % 4 ? 0 : 4)];
            h[u] = u < 4 || l <= 4 ? c : a.INV_SUB_MIX[0][a.SBOX[c >>> 24]] ^ a.INV_SUB_MIX[1][a.SBOX[c >>> 16 & 255]] ^ a.INV_SUB_MIX[2][a.SBOX[c >>> 8 & 255]] ^ a.INV_SUB_MIX[3][a.SBOX[255 & c]]
        }
        this._nRounds = r,
        this._keySchedule = n,
        this._invKeySchedule = h
    }
    ,
    h.prototype.encryptBlockRaw = function(t) {
        return s(t = n(t), this._keySchedule, a.SUB_MIX, a.SBOX, this._nRounds)
    }
    ,
    h.prototype.encryptBlock = function(t) {
        var e = this.encryptBlockRaw(t)
          , r = i.allocUnsafe(16);
        return r.writeUInt32BE(e[0], 0),
        r.writeUInt32BE(e[1], 4),
        r.writeUInt32BE(e[2], 8),
        r.writeUInt32BE(e[3], 12),
        r
    }
    ,
    h.prototype.decryptBlock = function(t) {
        var e = (t = n(t))[1];
        t[1] = t[3],
        t[3] = e;
        var r = s(t, this._invKeySchedule, a.INV_SUB_MIX, a.INV_SBOX, this._nRounds)
          , o = i.allocUnsafe(16);
        return o.writeUInt32BE(r[0], 0),
        o.writeUInt32BE(r[3], 4),
        o.writeUInt32BE(r[2], 8),
        o.writeUInt32BE(r[1], 12),
        o
    }
    ,
    h.prototype.scrub = function() {
        o(this._keySchedule),
        o(this._invKeySchedule),
        o(this._key)
    }
    ,
    t.exports.AES = h
}
, function(t, e, r) {
    "use strict";
    (function(e) {
        !e.version || 0 === e.version.indexOf("v0.") || 0 === e.version.indexOf("v1.") && 0 !== e.version.indexOf("v1.8.") ? t.exports = {
            nextTick: function(t, r, i, n) {
                if ("function" != typeof t)
                    throw new TypeError('"callback" argument must be a function');
                var o, s, f = arguments.length;
                switch (f) {
                case 0:
                case 1:
                    return e.nextTick(t);
                case 2:
                    return e.nextTick(function() {
                        t.call(null, r)
                    });
                case 3:
                    return e.nextTick(function() {
                        t.call(null, r, i)
                    });
                case 4:
                    return e.nextTick(function() {
                        t.call(null, r, i, n)
                    });
                default:
                    for (o = new Array(f - 1),
                    s = 0; s < o.length; )
                        o[s++] = arguments[s];
                    return e.nextTick(function() {
                        t.apply(null, o)
                    })
                }
            }
        } : t.exports = e
    }
    ).call(this, r(9))
}
, function(t, e, r) {
    "use strict";
    (function(e) {
        var i = function() {
            return function(t, e) {
                if (Array.isArray(t))
                    return t;
                if (Symbol.iterator in Object(t))
                    return function(t, e) {
                        var r = []
                          , i = !0
                          , n = !1
                          , o = void 0;
                        try {
                            for (var s, f = t[Symbol.iterator](); !(i = (s = f.next()).done) && (r.push(s.value),
                            !e || r.length !== e); i = !0)
                                ;
                        } catch (t) {
                            n = !0,
                            o = t
                        } finally {
                            try {
                                !i && f.return && f.return()
                            } finally {
                                if (n)
                                    throw o
                            }
                        }
                        return r
                    }(t, e);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
        }()
          , n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        }
        : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }
        ;
        var o = r(25)
          , s = o.Point
          , f = o.getCurveByName("secp256k1")
          , a = r(5)
          , h = r(4)
          , u = r(8)
          , l = r(15)
          , c = r(16)
          , d = r(46)
          , p = r(102);
        f.G,
        f.n;
        function g(t) {
            if ("string" == typeof t)
                return g.fromString(t);
            if (e.isBuffer(t))
                return g.fromBuffer(t);
            if ("object" === (void 0 === t ? "undefined" : n(t)) && a.isBigInteger(t.d))
                return g(t.d);
            if (!a.isBigInteger(t))
                throw new TypeError("Invalid private key");
            function r() {
                var t = o();
                return t = e.concat([new e([128]), t]),
                c.checkEncode(t, "sha256x2")
            }
            var i = void 0;
            function o() {
                return t.toBuffer(32)
            }
            return {
                d: t,
                toWif: r,
                toString: function() {
                    return r()
                },
                toPublic: function() {
                    if (i)
                        return i;
                    var e = f.G.multiply(t);
                    return i = l.fromPoint(e)
                },
                toBuffer: o,
                getSharedSecret: function(t) {
                    var e = (t = l(t)).toUncompressed().toBuffer()
                      , r = s.fromAffine(f, a.fromBuffer(e.slice(1, 33)), a.fromBuffer(e.slice(33, 65)))
                      , i = o()
                      , n = r.multiply(a.fromBuffer(i)).affineX.toBuffer({
                        size: 32
                    });
                    return u.sha512(n)
                },
                getChildKey: function(t) {
                    return g(d("sha256").update(o()).update(t).digest())
                }
            }
        }
        function y(t) {
            h.equal(void 0 === t ? "undefined" : n(t), "string", "privateStr");
            var e = t.match(/^PVT_([A-Za-z0-9]+)_([A-Za-z0-9]+)$/);
            if (null === e) {
                var r = c.checkDecode(t, "sha256x2")
                  , o = r.readUInt8(0);
                h.equal(128, o, "Expected version 128, instead got " + o);
                return {
                    privateKey: g.fromBuffer(r.slice(1)),
                    format: "WIF",
                    keyType: "K1"
                }
            }
            h(3 === e.length, "Expecting private key like: PVT_K1_base58privateKey..");
            var s = i(e, 3)
              , f = s[1]
              , a = s[2];
            return h.equal(f, "K1", "K1 private key expected"),
            {
                privateKey: g.fromBuffer(c.checkDecode(a, f)),
                format: "PVT",
                keyType: f
            }
        }
        t.exports = g,
        g.fromHex = function(t) {
            return g.fromBuffer(new e(t,"hex"))
        }
        ,
        g.fromBuffer = function(t) {
            if (!e.isBuffer(t))
                throw new Error("Expecting parameter to be a Buffer type");
            if (33 === t.length && 1 === t[32] && (t = t.slice(0, -1)),
            32 !== t.length)
                throw new Error("Expecting 32 bytes, instead got " + t.length);
            return g(a.fromBuffer(t))
        }
        ,
        g.fromSeed = function(t) {
            if ("string" != typeof t)
                throw new Error("seed must be of type string");
            return g.fromBuffer(u.sha256(t))
        }
        ,
        g.isWif = function(t) {
            try {
                return h("WIF" === y(t).format),
                !0
            } catch (t) {
                return !1
            }
        }
        ,
        g.isValid = function(t) {
            try {
                return g(t),
                !0
            } catch (t) {
                return !1
            }
        }
        ,
        g.fromWif = function(t) {
            return console.log("PrivateKey.fromWif is deprecated, please use PrivateKey.fromString"),
            g.fromString(t)
        }
        ,
        g.fromString = function(t) {
            return y(t).privateKey
        }
        ,
        g.randomKey = function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
            return g.initialize().then(function() {
                return g.fromBuffer(c.random32ByteBuffer({
                    cpuEntropyBits: t
                }))
            })
        }
        ,
        g.unsafeRandomKey = function() {
            return Promise.resolve(g.fromBuffer(c.random32ByteBuffer({
                safe: !1
            })))
        }
        ;
        var v = !1;
        g.initialize = p(function() {
            v || (function() {
                var t = g(u.sha256(""))
                  , e = "key comparison test failed on a known private key";
                h.equal(t.toWif(), "5KYZdUEo39z3FPrtuX2QbbwGnNP5zTd7yyr2SC1j299sBCnWjss", e),
                h.equal(t.toString(), "5KYZdUEo39z3FPrtuX2QbbwGnNP5zTd7yyr2SC1j299sBCnWjss", e);
                var r = t.toPublic();
                h.equal(r.toString(), "EOS859gxfnXyUriMgUeThh1fWv3oqcpLFyHa3TfFYC4PK2HqhToVM", "pubkey string comparison test failed on a known public key"),
                b(function() {
                    return g.fromString(t.toWif())
                }, "converting known wif from string"),
                b(function() {
                    return g.fromString(t.toString())
                }, "converting known pvt from string"),
                b(function() {
                    return l.fromString(r.toString())
                }, "converting known public key from string"),
                !0
            }(),
            c.addEntropy.apply(c, function(t) {
                if (Array.isArray(t)) {
                    for (var e = 0, r = Array(t.length); e < t.length; e++)
                        r[e] = t[e];
                    return r
                }
                return Array.from(t)
            }(c.cpuEntropy())),
            h(c.entropyCount() >= 128, "insufficient entropy"),
            v = !0)
        });
        var b = function(t, e) {
            try {
                t()
            } catch (t) {
                throw t.message = e + " ==> " + t.message,
                t
            }
        }
    }
    ).call(this, r(2).Buffer)
}
, function(t, e) {
    function r() {
        this._events = this._events || {},
        this._maxListeners = this._maxListeners || void 0
    }
    function i(t) {
        return "function" == typeof t
    }
    function n(t) {
        return "object" == typeof t && null !== t
    }
    function o(t) {
        return void 0 === t
    }
    t.exports = r,
    r.EventEmitter = r,
    r.prototype._events = void 0,
    r.prototype._maxListeners = void 0,
    r.defaultMaxListeners = 10,
    r.prototype.setMaxListeners = function(t) {
        if (!function(t) {
            return "number" == typeof t
        }(t) || t < 0 || isNaN(t))
            throw TypeError("n must be a positive number");
        return this._maxListeners = t,
        this
    }
    ,
    r.prototype.emit = function(t) {
        var e, r, s, f, a, h;
        if (this._events || (this._events = {}),
        "error" === t && (!this._events.error || n(this._events.error) && !this._events.error.length)) {
            if ((e = arguments[1])instanceof Error)
                throw e;
            var u = new Error('Uncaught, unspecified "error" event. (' + e + ")");
            throw u.context = e,
            u
        }
        if (o(r = this._events[t]))
            return !1;
        if (i(r))
            switch (arguments.length) {
            case 1:
                r.call(this);
                break;
            case 2:
                r.call(this, arguments[1]);
                break;
            case 3:
                r.call(this, arguments[1], arguments[2]);
                break;
            default:
                f = Array.prototype.slice.call(arguments, 1),
                r.apply(this, f)
            }
        else if (n(r))
            for (f = Array.prototype.slice.call(arguments, 1),
            s = (h = r.slice()).length,
            a = 0; a < s; a++)
                h[a].apply(this, f);
        return !0
    }
    ,
    r.prototype.addListener = function(t, e) {
        var s;
        if (!i(e))
            throw TypeError("listener must be a function");
        return this._events || (this._events = {}),
        this._events.newListener && this.emit("newListener", t, i(e.listener) ? e.listener : e),
        this._events[t] ? n(this._events[t]) ? this._events[t].push(e) : this._events[t] = [this._events[t], e] : this._events[t] = e,
        n(this._events[t]) && !this._events[t].warned && (s = o(this._maxListeners) ? r.defaultMaxListeners : this._maxListeners) && s > 0 && this._events[t].length > s && (this._events[t].warned = !0,
        console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.", this._events[t].length),
        "function" == typeof console.trace && console.trace()),
        this
    }
    ,
    r.prototype.on = r.prototype.addListener,
    r.prototype.once = function(t, e) {
        if (!i(e))
            throw TypeError("listener must be a function");
        var r = !1;
        function n() {
            this.removeListener(t, n),
            r || (r = !0,
            e.apply(this, arguments))
        }
        return n.listener = e,
        this.on(t, n),
        this
    }
    ,
    r.prototype.removeListener = function(t, e) {
        var r, o, s, f;
        if (!i(e))
            throw TypeError("listener must be a function");
        if (!this._events || !this._events[t])
            return this;
        if (s = (r = this._events[t]).length,
        o = -1,
        r === e || i(r.listener) && r.listener === e)
            delete this._events[t],
            this._events.removeListener && this.emit("removeListener", t, e);
        else if (n(r)) {
            for (f = s; f-- > 0; )
                if (r[f] === e || r[f].listener && r[f].listener === e) {
                    o = f;
                    break
                }
            if (o < 0)
                return this;
            1 === r.length ? (r.length = 0,
            delete this._events[t]) : r.splice(o, 1),
            this._events.removeListener && this.emit("removeListener", t, e)
        }
        return this
    }
    ,
    r.prototype.removeAllListeners = function(t) {
        var e, r;
        if (!this._events)
            return this;
        if (!this._events.removeListener)
            return 0 === arguments.length ? this._events = {} : this._events[t] && delete this._events[t],
            this;
        if (0 === arguments.length) {
            for (e in this._events)
                "removeListener" !== e && this.removeAllListeners(e);
            return this.removeAllListeners("removeListener"),
            this._events = {},
            this
        }
        if (i(r = this._events[t]))
            this.removeListener(t, r);
        else if (r)
            for (; r.length; )
                this.removeListener(t, r[r.length - 1]);
        return delete this._events[t],
        this
    }
    ,
    r.prototype.listeners = function(t) {
        return this._events && this._events[t] ? i(this._events[t]) ? [this._events[t]] : this._events[t].slice() : []
    }
    ,
    r.prototype.listenerCount = function(t) {
        if (this._events) {
            var e = this._events[t];
            if (i(e))
                return 1;
            if (e)
                return e.length
        }
        return 0
    }
    ,
    r.listenerCount = function(t, e) {
        return t.listenerCount(e)
    }
}
, function(t, e, r) {
    (e = t.exports = r(36)).Stream = e,
    e.Readable = e,
    e.Writable = r(22),
    e.Duplex = r(7),
    e.Transform = r(39),
    e.PassThrough = r(80)
}
, function(t, e, r) {
    "use strict";
    (function(e, i, n) {
        var o = r(18);
        function s(t) {
            var e = this;
            this.next = null,
            this.entry = null,
            this.finish = function() {
                !function(t, e, r) {
                    var i = t.entry;
                    t.entry = null;
                    for (; i; ) {
                        var n = i.callback;
                        e.pendingcb--,
                        n(r),
                        i = i.next
                    }
                    e.corkedRequestsFree ? e.corkedRequestsFree.next = t : e.corkedRequestsFree = t
                }(e, t)
            }
        }
        t.exports = b;
        var f, a = !e.browser && ["v0.10", "v0.9."].indexOf(e.version.slice(0, 5)) > -1 ? i : o.nextTick;
        b.WritableState = v;
        var h = r(14);
        h.inherits = r(1);
        var u = {
            deprecate: r(79)
        }
          , l = r(37)
          , c = r(0).Buffer
          , d = n.Uint8Array || function() {}
        ;
        var p, g = r(38);
        function y() {}
        function v(t, e) {
            f = f || r(7),
            t = t || {};
            var i = e instanceof f;
            this.objectMode = !!t.objectMode,
            i && (this.objectMode = this.objectMode || !!t.writableObjectMode);
            var n = t.highWaterMark
              , h = t.writableHighWaterMark
              , u = this.objectMode ? 16 : 16384;
            this.highWaterMark = n || 0 === n ? n : i && (h || 0 === h) ? h : u,
            this.highWaterMark = Math.floor(this.highWaterMark),
            this.finalCalled = !1,
            this.needDrain = !1,
            this.ending = !1,
            this.ended = !1,
            this.finished = !1,
            this.destroyed = !1;
            var l = !1 === t.decodeStrings;
            this.decodeStrings = !l,
            this.defaultEncoding = t.defaultEncoding || "utf8",
            this.length = 0,
            this.writing = !1,
            this.corked = 0,
            this.sync = !0,
            this.bufferProcessing = !1,
            this.onwrite = function(t) {
                !function(t, e) {
                    var r = t._writableState
                      , i = r.sync
                      , n = r.writecb;
                    if (function(t) {
                        t.writing = !1,
                        t.writecb = null,
                        t.length -= t.writelen,
                        t.writelen = 0
                    }(r),
                    e)
                        !function(t, e, r, i, n) {
                            --e.pendingcb,
                            r ? (o.nextTick(n, i),
                            o.nextTick(S, t, e),
                            t._writableState.errorEmitted = !0,
                            t.emit("error", i)) : (n(i),
                            t._writableState.errorEmitted = !0,
                            t.emit("error", i),
                            S(t, e))
                        }(t, r, i, e, n);
                    else {
                        var s = E(r);
                        s || r.corked || r.bufferProcessing || !r.bufferedRequest || _(t, r),
                        i ? a(m, t, r, s, n) : m(t, r, s, n)
                    }
                }(e, t)
            }
            ,
            this.writecb = null,
            this.writelen = 0,
            this.bufferedRequest = null,
            this.lastBufferedRequest = null,
            this.pendingcb = 0,
            this.prefinished = !1,
            this.errorEmitted = !1,
            this.bufferedRequestCount = 0,
            this.corkedRequestsFree = new s(this)
        }
        function b(t) {
            if (f = f || r(7),
            !(p.call(b, this) || this instanceof f))
                return new b(t);
            this._writableState = new v(t,this),
            this.writable = !0,
            t && ("function" == typeof t.write && (this._write = t.write),
            "function" == typeof t.writev && (this._writev = t.writev),
            "function" == typeof t.destroy && (this._destroy = t.destroy),
            "function" == typeof t.final && (this._final = t.final)),
            l.call(this)
        }
        function w(t, e, r, i, n, o, s) {
            e.writelen = i,
            e.writecb = s,
            e.writing = !0,
            e.sync = !0,
            r ? t._writev(n, e.onwrite) : t._write(n, o, e.onwrite),
            e.sync = !1
        }
        function m(t, e, r, i) {
            r || function(t, e) {
                0 === e.length && e.needDrain && (e.needDrain = !1,
                t.emit("drain"))
            }(t, e),
            e.pendingcb--,
            i(),
            S(t, e)
        }
        function _(t, e) {
            e.bufferProcessing = !0;
            var r = e.bufferedRequest;
            if (t._writev && r && r.next) {
                var i = e.bufferedRequestCount
                  , n = new Array(i)
                  , o = e.corkedRequestsFree;
                o.entry = r;
                for (var f = 0, a = !0; r; )
                    n[f] = r,
                    r.isBuf || (a = !1),
                    r = r.next,
                    f += 1;
                n.allBuffers = a,
                w(t, e, !0, e.length, n, "", o.finish),
                e.pendingcb++,
                e.lastBufferedRequest = null,
                o.next ? (e.corkedRequestsFree = o.next,
                o.next = null) : e.corkedRequestsFree = new s(e),
                e.bufferedRequestCount = 0
            } else {
                for (; r; ) {
                    var h = r.chunk
                      , u = r.encoding
                      , l = r.callback;
                    if (w(t, e, !1, e.objectMode ? 1 : h.length, h, u, l),
                    r = r.next,
                    e.bufferedRequestCount--,
                    e.writing)
                        break
                }
                null === r && (e.lastBufferedRequest = null)
            }
            e.bufferedRequest = r,
            e.bufferProcessing = !1
        }
        function E(t) {
            return t.ending && 0 === t.length && null === t.bufferedRequest && !t.finished && !t.writing
        }
        function T(t, e) {
            t._final(function(r) {
                e.pendingcb--,
                r && t.emit("error", r),
                e.prefinished = !0,
                t.emit("prefinish"),
                S(t, e)
            })
        }
        function S(t, e) {
            var r = E(e);
            return r && (!function(t, e) {
                e.prefinished || e.finalCalled || ("function" == typeof t._final ? (e.pendingcb++,
                e.finalCalled = !0,
                o.nextTick(T, t, e)) : (e.prefinished = !0,
                t.emit("prefinish")))
            }(t, e),
            0 === e.pendingcb && (e.finished = !0,
            t.emit("finish"))),
            r
        }
        h.inherits(b, l),
        v.prototype.getBuffer = function() {
            for (var t = this.bufferedRequest, e = []; t; )
                e.push(t),
                t = t.next;
            return e
        }
        ,
        function() {
            try {
                Object.defineProperty(v.prototype, "buffer", {
                    get: u.deprecate(function() {
                        return this.getBuffer()
                    }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003")
                })
            } catch (t) {}
        }(),
        "function" == typeof Symbol && Symbol.hasInstance && "function" == typeof Function.prototype[Symbol.hasInstance] ? (p = Function.prototype[Symbol.hasInstance],
        Object.defineProperty(b, Symbol.hasInstance, {
            value: function(t) {
                return !!p.call(this, t) || this === b && (t && t._writableState instanceof v)
            }
        })) : p = function(t) {
            return t instanceof this
        }
        ,
        b.prototype.pipe = function() {
            this.emit("error", new Error("Cannot pipe, not readable"))
        }
        ,
        b.prototype.write = function(t, e, r) {
            var i = this._writableState
              , n = !1
              , s = !i.objectMode && function(t) {
                return c.isBuffer(t) || t instanceof d
            }(t);
            return s && !c.isBuffer(t) && (t = function(t) {
                return c.from(t)
            }(t)),
            "function" == typeof e && (r = e,
            e = null),
            s ? e = "buffer" : e || (e = i.defaultEncoding),
            "function" != typeof r && (r = y),
            i.ended ? function(t, e) {
                var r = new Error("write after end");
                t.emit("error", r),
                o.nextTick(e, r)
            }(this, r) : (s || function(t, e, r, i) {
                var n = !0
                  , s = !1;
                return null === r ? s = new TypeError("May not write null values to stream") : "string" == typeof r || void 0 === r || e.objectMode || (s = new TypeError("Invalid non-string/buffer chunk")),
                s && (t.emit("error", s),
                o.nextTick(i, s),
                n = !1),
                n
            }(this, i, t, r)) && (i.pendingcb++,
            n = function(t, e, r, i, n, o) {
                if (!r) {
                    var s = function(t, e, r) {
                        t.objectMode || !1 === t.decodeStrings || "string" != typeof e || (e = c.from(e, r));
                        return e
                    }(e, i, n);
                    i !== s && (r = !0,
                    n = "buffer",
                    i = s)
                }
                var f = e.objectMode ? 1 : i.length;
                e.length += f;
                var a = e.length < e.highWaterMark;
                a || (e.needDrain = !0);
                if (e.writing || e.corked) {
                    var h = e.lastBufferedRequest;
                    e.lastBufferedRequest = {
                        chunk: i,
                        encoding: n,
                        isBuf: r,
                        callback: o,
                        next: null
                    },
                    h ? h.next = e.lastBufferedRequest : e.bufferedRequest = e.lastBufferedRequest,
                    e.bufferedRequestCount += 1
                } else
                    w(t, e, !1, f, i, n, o);
                return a
            }(this, i, s, t, e, r)),
            n
        }
        ,
        b.prototype.cork = function() {
            this._writableState.corked++
        }
        ,
        b.prototype.uncork = function() {
            var t = this._writableState;
            t.corked && (t.corked--,
            t.writing || t.corked || t.finished || t.bufferProcessing || !t.bufferedRequest || _(this, t))
        }
        ,
        b.prototype.setDefaultEncoding = function(t) {
            if ("string" == typeof t && (t = t.toLowerCase()),
            !(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((t + "").toLowerCase()) > -1))
                throw new TypeError("Unknown encoding: " + t);
            return this._writableState.defaultEncoding = t,
            this
        }
        ,
        Object.defineProperty(b.prototype, "writableHighWaterMark", {
            enumerable: !1,
            get: function() {
                return this._writableState.highWaterMark
            }
        }),
        b.prototype._write = function(t, e, r) {
            r(new Error("_write() is not implemented"))
        }
        ,
        b.prototype._writev = null,
        b.prototype.end = function(t, e, r) {
            var i = this._writableState;
            "function" == typeof t ? (r = t,
            t = null,
            e = null) : "function" == typeof e && (r = e,
            e = null),
            null !== t && void 0 !== t && this.write(t, e),
            i.corked && (i.corked = 1,
            this.uncork()),
            i.ending || i.finished || function(t, e, r) {
                e.ending = !0,
                S(t, e),
                r && (e.finished ? o.nextTick(r) : t.once("finish", r));
                e.ended = !0,
                t.writable = !1
            }(this, i, r)
        }
        ,
        Object.defineProperty(b.prototype, "destroyed", {
            get: function() {
                return void 0 !== this._writableState && this._writableState.destroyed
            },
            set: function(t) {
                this._writableState && (this._writableState.destroyed = t)
            }
        }),
        b.prototype.destroy = g.destroy,
        b.prototype._undestroy = g.undestroy,
        b.prototype._destroy = function(t, e) {
            this.end(),
            e(t)
        }
    }
    ).call(this, r(9), r(77).setImmediate, r(3))
}
, function(t, e, r) {
    "use strict";
    var i = r(0).Buffer
      , n = i.isEncoding || function(t) {
        switch ((t = "" + t) && t.toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
        case "raw":
            return !0;
        default:
            return !1
        }
    }
    ;
    function o(t) {
        var e;
        switch (this.encoding = function(t) {
            var e = function(t) {
                if (!t)
                    return "utf8";
                for (var e; ; )
                    switch (t) {
                    case "utf8":
                    case "utf-8":
                        return "utf8";
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return "utf16le";
                    case "latin1":
                    case "binary":
                        return "latin1";
                    case "base64":
                    case "ascii":
                    case "hex":
                        return t;
                    default:
                        if (e)
                            return;
                        t = ("" + t).toLowerCase(),
                        e = !0
                    }
            }(t);
            if ("string" != typeof e && (i.isEncoding === n || !n(t)))
                throw new Error("Unknown encoding: " + t);
            return e || t
        }(t),
        this.encoding) {
        case "utf16le":
            this.text = a,
            this.end = h,
            e = 4;
            break;
        case "utf8":
            this.fillLast = f,
            e = 4;
            break;
        case "base64":
            this.text = u,
            this.end = l,
            e = 3;
            break;
        default:
            return this.write = c,
            void (this.end = d)
        }
        this.lastNeed = 0,
        this.lastTotal = 0,
        this.lastChar = i.allocUnsafe(e)
    }
    function s(t) {
        return t <= 127 ? 0 : t >> 5 == 6 ? 2 : t >> 4 == 14 ? 3 : t >> 3 == 30 ? 4 : t >> 6 == 2 ? -1 : -2
    }
    function f(t) {
        var e = this.lastTotal - this.lastNeed
          , r = function(t, e, r) {
            if (128 != (192 & e[0]))
                return t.lastNeed = 0,
                "�";
            if (t.lastNeed > 1 && e.length > 1) {
                if (128 != (192 & e[1]))
                    return t.lastNeed = 1,
                    "�";
                if (t.lastNeed > 2 && e.length > 2 && 128 != (192 & e[2]))
                    return t.lastNeed = 2,
                    "�"
            }
        }(this, t);
        return void 0 !== r ? r : this.lastNeed <= t.length ? (t.copy(this.lastChar, e, 0, this.lastNeed),
        this.lastChar.toString(this.encoding, 0, this.lastTotal)) : (t.copy(this.lastChar, e, 0, t.length),
        void (this.lastNeed -= t.length))
    }
    function a(t, e) {
        if ((t.length - e) % 2 == 0) {
            var r = t.toString("utf16le", e);
            if (r) {
                var i = r.charCodeAt(r.length - 1);
                if (i >= 55296 && i <= 56319)
                    return this.lastNeed = 2,
                    this.lastTotal = 4,
                    this.lastChar[0] = t[t.length - 2],
                    this.lastChar[1] = t[t.length - 1],
                    r.slice(0, -1)
            }
            return r
        }
        return this.lastNeed = 1,
        this.lastTotal = 2,
        this.lastChar[0] = t[t.length - 1],
        t.toString("utf16le", e, t.length - 1)
    }
    function h(t) {
        var e = t && t.length ? this.write(t) : "";
        if (this.lastNeed) {
            var r = this.lastTotal - this.lastNeed;
            return e + this.lastChar.toString("utf16le", 0, r)
        }
        return e
    }
    function u(t, e) {
        var r = (t.length - e) % 3;
        return 0 === r ? t.toString("base64", e) : (this.lastNeed = 3 - r,
        this.lastTotal = 3,
        1 === r ? this.lastChar[0] = t[t.length - 1] : (this.lastChar[0] = t[t.length - 2],
        this.lastChar[1] = t[t.length - 1]),
        t.toString("base64", e, t.length - r))
    }
    function l(t) {
        var e = t && t.length ? this.write(t) : "";
        return this.lastNeed ? e + this.lastChar.toString("base64", 0, 3 - this.lastNeed) : e
    }
    function c(t) {
        return t.toString(this.encoding)
    }
    function d(t) {
        return t && t.length ? this.write(t) : ""
    }
    e.StringDecoder = o,
    o.prototype.write = function(t) {
        if (0 === t.length)
            return "";
        var e, r;
        if (this.lastNeed) {
            if (void 0 === (e = this.fillLast(t)))
                return "";
            r = this.lastNeed,
            this.lastNeed = 0
        } else
            r = 0;
        return r < t.length ? e ? e + this.text(t, r) : this.text(t, r) : e || ""
    }
    ,
    o.prototype.end = function(t) {
        var e = t && t.length ? this.write(t) : "";
        return this.lastNeed ? e + "�" : e
    }
    ,
    o.prototype.text = function(t, e) {
        var r = function(t, e, r) {
            var i = e.length - 1;
            if (i < r)
                return 0;
            var n = s(e[i]);
            if (n >= 0)
                return n > 0 && (t.lastNeed = n - 1),
                n;
            if (--i < r || -2 === n)
                return 0;
            if ((n = s(e[i])) >= 0)
                return n > 0 && (t.lastNeed = n - 2),
                n;
            if (--i < r || -2 === n)
                return 0;
            if ((n = s(e[i])) >= 0)
                return n > 0 && (2 === n ? n = 0 : t.lastNeed = n - 3),
                n;
            return 0
        }(this, t, e);
        if (!this.lastNeed)
            return t.toString("utf8", e);
        this.lastTotal = r;
        var i = t.length - (r - this.lastNeed);
        return t.copy(this.lastChar, 0, i),
        t.toString("utf8", e, i)
    }
    ,
    o.prototype.fillLast = function(t) {
        if (this.lastNeed <= t.length)
            return t.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed),
            this.lastChar.toString(this.encoding, 0, this.lastTotal);
        t.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, t.length),
        this.lastNeed -= t.length
    }
}
, function(t, e, r) {
    "use strict";
    (function(e) {
        var i = r(1)
          , n = r(42)
          , o = new Array(16);
        function s() {
            n.call(this, 64),
            this._a = 1732584193,
            this._b = 4023233417,
            this._c = 2562383102,
            this._d = 271733878
        }
        function f(t, e) {
            return t << e | t >>> 32 - e
        }
        function a(t, e, r, i, n, o, s) {
            return f(t + (e & r | ~e & i) + n + o | 0, s) + e | 0
        }
        function h(t, e, r, i, n, o, s) {
            return f(t + (e & i | r & ~i) + n + o | 0, s) + e | 0
        }
        function u(t, e, r, i, n, o, s) {
            return f(t + (e ^ r ^ i) + n + o | 0, s) + e | 0
        }
        function l(t, e, r, i, n, o, s) {
            return f(t + (r ^ (e | ~i)) + n + o | 0, s) + e | 0
        }
        i(s, n),
        s.prototype._update = function() {
            for (var t = o, e = 0; e < 16; ++e)
                t[e] = this._block.readInt32LE(4 * e);
            var r = this._a
              , i = this._b
              , n = this._c
              , s = this._d;
            i = l(i = l(i = l(i = l(i = u(i = u(i = u(i = u(i = h(i = h(i = h(i = h(i = a(i = a(i = a(i = a(i, n = a(n, s = a(s, r = a(r, i, n, s, t[0], 3614090360, 7), i, n, t[1], 3905402710, 12), r, i, t[2], 606105819, 17), s, r, t[3], 3250441966, 22), n = a(n, s = a(s, r = a(r, i, n, s, t[4], 4118548399, 7), i, n, t[5], 1200080426, 12), r, i, t[6], 2821735955, 17), s, r, t[7], 4249261313, 22), n = a(n, s = a(s, r = a(r, i, n, s, t[8], 1770035416, 7), i, n, t[9], 2336552879, 12), r, i, t[10], 4294925233, 17), s, r, t[11], 2304563134, 22), n = a(n, s = a(s, r = a(r, i, n, s, t[12], 1804603682, 7), i, n, t[13], 4254626195, 12), r, i, t[14], 2792965006, 17), s, r, t[15], 1236535329, 22), n = h(n, s = h(s, r = h(r, i, n, s, t[1], 4129170786, 5), i, n, t[6], 3225465664, 9), r, i, t[11], 643717713, 14), s, r, t[0], 3921069994, 20), n = h(n, s = h(s, r = h(r, i, n, s, t[5], 3593408605, 5), i, n, t[10], 38016083, 9), r, i, t[15], 3634488961, 14), s, r, t[4], 3889429448, 20), n = h(n, s = h(s, r = h(r, i, n, s, t[9], 568446438, 5), i, n, t[14], 3275163606, 9), r, i, t[3], 4107603335, 14), s, r, t[8], 1163531501, 20), n = h(n, s = h(s, r = h(r, i, n, s, t[13], 2850285829, 5), i, n, t[2], 4243563512, 9), r, i, t[7], 1735328473, 14), s, r, t[12], 2368359562, 20), n = u(n, s = u(s, r = u(r, i, n, s, t[5], 4294588738, 4), i, n, t[8], 2272392833, 11), r, i, t[11], 1839030562, 16), s, r, t[14], 4259657740, 23), n = u(n, s = u(s, r = u(r, i, n, s, t[1], 2763975236, 4), i, n, t[4], 1272893353, 11), r, i, t[7], 4139469664, 16), s, r, t[10], 3200236656, 23), n = u(n, s = u(s, r = u(r, i, n, s, t[13], 681279174, 4), i, n, t[0], 3936430074, 11), r, i, t[3], 3572445317, 16), s, r, t[6], 76029189, 23), n = u(n, s = u(s, r = u(r, i, n, s, t[9], 3654602809, 4), i, n, t[12], 3873151461, 11), r, i, t[15], 530742520, 16), s, r, t[2], 3299628645, 23), n = l(n, s = l(s, r = l(r, i, n, s, t[0], 4096336452, 6), i, n, t[7], 1126891415, 10), r, i, t[14], 2878612391, 15), s, r, t[5], 4237533241, 21), n = l(n, s = l(s, r = l(r, i, n, s, t[12], 1700485571, 6), i, n, t[3], 2399980690, 10), r, i, t[10], 4293915773, 15), s, r, t[1], 2240044497, 21), n = l(n, s = l(s, r = l(r, i, n, s, t[8], 1873313359, 6), i, n, t[15], 4264355552, 10), r, i, t[6], 2734768916, 15), s, r, t[13], 1309151649, 21), n = l(n, s = l(s, r = l(r, i, n, s, t[4], 4149444226, 6), i, n, t[11], 3174756917, 10), r, i, t[2], 718787259, 15), s, r, t[9], 3951481745, 21),
            this._a = this._a + r | 0,
            this._b = this._b + i | 0,
            this._c = this._c + n | 0,
            this._d = this._d + s | 0
        }
        ,
        s.prototype._digest = function() {
            this._block[this._blockOffset++] = 128,
            this._blockOffset > 56 && (this._block.fill(0, this._blockOffset, 64),
            this._update(),
            this._blockOffset = 0),
            this._block.fill(0, this._blockOffset, 56),
            this._block.writeUInt32LE(this._length[0], 56),
            this._block.writeUInt32LE(this._length[1], 60),
            this._update();
            var t = new e(16);
            return t.writeInt32LE(this._a, 0),
            t.writeInt32LE(this._b, 4),
            t.writeInt32LE(this._c, 8),
            t.writeInt32LE(this._d, 12),
            t
        }
        ,
        t.exports = s
    }
    ).call(this, r(2).Buffer)
}
, function(t, e, r) {
    var i = r(43)
      , n = r(45)
      , o = r(91);
    t.exports = {
        Curve: n,
        Point: i,
        getCurveByName: o
    }
}
, , function(t, e) {
    var r = {}.toString;
    t.exports = Array.isArray || function(t) {
        return "[object Array]" == r.call(t)
    }
}
, function(t, e, r) {
    "use strict";
    (function(e) {
        var i = r(29)
          , n = r(64)
          , o = r(66)
          , s = r(4)
          , f = r(15)
          , a = r(19)
          , h = r(8)
          , u = n.Long;
        function l(t, r, i, u, l) {
            if (!(t = a(t)))
                throw new TypeError("private_key is required");
            if (!(r = f(r)))
                throw new TypeError("public_key is required");
            if (!(i = d(i)))
                throw new TypeError("nonce is required");
            if (!e.isBuffer(u)) {
                if ("string" != typeof u)
                    throw new TypeError("message should be buffer or string");
                u = new e(u,"binary")
            }
            if (l && "number" != typeof l)
                throw new TypeError("checksum should be a number");
            var c = t.getSharedSecret(r)
              , g = new n(n.DEFAULT_CAPACITY,n.LITTLE_ENDIAN);
            g.writeUint64(i),
            g.append(c.toString("binary"), "binary"),
            g = new e(g.copy(0, g.offset).toBinary(),"binary");
            var y = h.sha512(g)
              , v = y.slice(32, 48)
              , b = y.slice(0, 32)
              , w = h.sha256(y);
            if (w = w.slice(0, 4),
            w = n.fromBinary(w.toString("binary"), n.DEFAULT_CAPACITY, n.LITTLE_ENDIAN).readUint32(),
            l) {
                if (w !== l)
                    throw new Error("Invalid key");
                u = function(t, r, i) {
                    s(t, "Missing cipher text"),
                    t = p(t);
                    var n = o.createDecipheriv("aes-256-cbc", r, i);
                    return t = e.concat([n.update(t), n.final()])
                }(u, b, v)
            } else
                u = function(t, r, i) {
                    s(t, "Missing plain text"),
                    t = p(t);
                    var n = o.createCipheriv("aes-256-cbc", r, i);
                    return t = e.concat([n.update(t), n.final()])
                }(u, b, v);
            return {
                nonce: i,
                message: u,
                checksum: w
            }
        }
        t.exports = {
            encrypt: function(t, e, r) {
                var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : function() {
                    if (null === c) {
                        var t = new Uint8Array(i(2));
                        c = parseInt(t[0] << 8 | t[1], 10)
                    }
                    var e = u.fromNumber(Date.now())
                      , r = ++c % 65535;
                    return (e = e.shiftLeft(16).or(u.fromNumber(r))).toString()
                }();
                return l(t, e, n, r)
            },
            decrypt: function(t, e, r, i, n) {
                return l(t, e, r, i, n).message
            }
        };
        var c = null
          , d = function(t) {
            return t ? u.isLong(t) ? t : u.fromString(t) : t
        }
          , p = function(t) {
            return t ? e.isBuffer(t) ? t : new e(t,"binary") : t
        }
    }
    ).call(this, r(2).Buffer)
}
, function(t, e, r) {
    "use strict";
    (function(e, i) {
        var n = r(0).Buffer
          , o = e.crypto || e.msCrypto;
        o && o.getRandomValues ? t.exports = function(t, r) {
            if (t > 65536)
                throw new Error("requested too many random bytes");
            var s = new e.Uint8Array(t);
            t > 0 && o.getRandomValues(s);
            var f = n.from(s.buffer);
            if ("function" == typeof r)
                return i.nextTick(function() {
                    r(null, f)
                });
            return f
        }
        : t.exports = function() {
            throw new Error("Secure random number generation is not supported by this browser.\nUse Chrome, Firefox or Internet Explorer 11")
        }
    }
    ).call(this, r(3), r(9))
}
, function(t, e, r) {
    var i = {
        ECB: r(68),
        CBC: r(69),
        CFB: r(70),
        CFB8: r(71),
        CFB1: r(72),
        OFB: r(73),
        CTR: r(31),
        GCM: r(31)
    }
      , n = r(33);
    for (var o in n)
        n[o].module = i[n[o].mode];
    t.exports = n
}
, function(t, e, r) {
    var i = r(13)
      , n = r(0).Buffer
      , o = r(32);
    function s(t) {
        var e = t._cipher.encryptBlockRaw(t._prev);
        return o(t._prev),
        e
    }
    e.encrypt = function(t, e) {
        var r = Math.ceil(e.length / 16)
          , o = t._cache.length;
        t._cache = n.concat([t._cache, n.allocUnsafe(16 * r)]);
        for (var f = 0; f < r; f++) {
            var a = s(t)
              , h = o + 16 * f;
            t._cache.writeUInt32BE(a[0], h + 0),
            t._cache.writeUInt32BE(a[1], h + 4),
            t._cache.writeUInt32BE(a[2], h + 8),
            t._cache.writeUInt32BE(a[3], h + 12)
        }
        var u = t._cache.slice(0, e.length);
        return t._cache = t._cache.slice(e.length),
        i(e, u)
    }
}
, function(t, e) {
    t.exports = function(t) {
        for (var e, r = t.length; r--; ) {
            if (255 !== (e = t.readUInt8(r))) {
                e++,
                t.writeUInt8(e, r);
                break
            }
            t.writeUInt8(0, r)
        }
    }
}
, function(t) {
    t.exports = {
        "aes-128-ecb": {
            cipher: "AES",
            key: 128,
            iv: 0,
            mode: "ECB",
            type: "block"
        },
        "aes-192-ecb": {
            cipher: "AES",
            key: 192,
            iv: 0,
            mode: "ECB",
            type: "block"
        },
        "aes-256-ecb": {
            cipher: "AES",
            key: 256,
            iv: 0,
            mode: "ECB",
            type: "block"
        },
        "aes-128-cbc": {
            cipher: "AES",
            key: 128,
            iv: 16,
            mode: "CBC",
            type: "block"
        },
        "aes-192-cbc": {
            cipher: "AES",
            key: 192,
            iv: 16,
            mode: "CBC",
            type: "block"
        },
        "aes-256-cbc": {
            cipher: "AES",
            key: 256,
            iv: 16,
            mode: "CBC",
            type: "block"
        },
        aes128: {
            cipher: "AES",
            key: 128,
            iv: 16,
            mode: "CBC",
            type: "block"
        },
        aes192: {
            cipher: "AES",
            key: 192,
            iv: 16,
            mode: "CBC",
            type: "block"
        },
        aes256: {
            cipher: "AES",
            key: 256,
            iv: 16,
            mode: "CBC",
            type: "block"
        },
        "aes-128-cfb": {
            cipher: "AES",
            key: 128,
            iv: 16,
            mode: "CFB",
            type: "stream"
        },
        "aes-192-cfb": {
            cipher: "AES",
            key: 192,
            iv: 16,
            mode: "CFB",
            type: "stream"
        },
        "aes-256-cfb": {
            cipher: "AES",
            key: 256,
            iv: 16,
            mode: "CFB",
            type: "stream"
        },
        "aes-128-cfb8": {
            cipher: "AES",
            key: 128,
            iv: 16,
            mode: "CFB8",
            type: "stream"
        },
        "aes-192-cfb8": {
            cipher: "AES",
            key: 192,
            iv: 16,
            mode: "CFB8",
            type: "stream"
        },
        "aes-256-cfb8": {
            cipher: "AES",
            key: 256,
            iv: 16,
            mode: "CFB8",
            type: "stream"
        },
        "aes-128-cfb1": {
            cipher: "AES",
            key: 128,
            iv: 16,
            mode: "CFB1",
            type: "stream"
        },
        "aes-192-cfb1": {
            cipher: "AES",
            key: 192,
            iv: 16,
            mode: "CFB1",
            type: "stream"
        },
        "aes-256-cfb1": {
            cipher: "AES",
            key: 256,
            iv: 16,
            mode: "CFB1",
            type: "stream"
        },
        "aes-128-ofb": {
            cipher: "AES",
            key: 128,
            iv: 16,
            mode: "OFB",
            type: "stream"
        },
        "aes-192-ofb": {
            cipher: "AES",
            key: 192,
            iv: 16,
            mode: "OFB",
            type: "stream"
        },
        "aes-256-ofb": {
            cipher: "AES",
            key: 256,
            iv: 16,
            mode: "OFB",
            type: "stream"
        },
        "aes-128-ctr": {
            cipher: "AES",
            key: 128,
            iv: 16,
            mode: "CTR",
            type: "stream"
        },
        "aes-192-ctr": {
            cipher: "AES",
            key: 192,
            iv: 16,
            mode: "CTR",
            type: "stream"
        },
        "aes-256-ctr": {
            cipher: "AES",
            key: 256,
            iv: 16,
            mode: "CTR",
            type: "stream"
        },
        "aes-128-gcm": {
            cipher: "AES",
            key: 128,
            iv: 12,
            mode: "GCM",
            type: "auth"
        },
        "aes-192-gcm": {
            cipher: "AES",
            key: 192,
            iv: 12,
            mode: "GCM",
            type: "auth"
        },
        "aes-256-gcm": {
            cipher: "AES",
            key: 256,
            iv: 12,
            mode: "GCM",
            type: "auth"
        }
    }
}
, function(t, e, r) {
    var i = r(17)
      , n = r(0).Buffer
      , o = r(6)
      , s = r(1)
      , f = r(85)
      , a = r(13)
      , h = r(32);
    function u(t, e, r, s) {
        o.call(this);
        var a = n.alloc(4, 0);
        this._cipher = new i.AES(e);
        var u = this._cipher.encryptBlock(a);
        this._ghash = new f(u),
        r = function(t, e, r) {
            if (12 === e.length)
                return t._finID = n.concat([e, n.from([0, 0, 0, 1])]),
                n.concat([e, n.from([0, 0, 0, 2])]);
            var i = new f(r)
              , o = e.length
              , s = o % 16;
            i.update(e),
            s && (s = 16 - s,
            i.update(n.alloc(s, 0))),
            i.update(n.alloc(8, 0));
            var a = 8 * o
              , u = n.alloc(8);
            u.writeUIntBE(a, 0, 8),
            i.update(u),
            t._finID = i.state;
            var l = n.from(t._finID);
            return h(l),
            l
        }(this, r, u),
        this._prev = n.from(r),
        this._cache = n.allocUnsafe(0),
        this._secCache = n.allocUnsafe(0),
        this._decrypt = s,
        this._alen = 0,
        this._len = 0,
        this._mode = t,
        this._authTag = null,
        this._called = !1
    }
    s(u, o),
    u.prototype._update = function(t) {
        if (!this._called && this._alen) {
            var e = 16 - this._alen % 16;
            e < 16 && (e = n.alloc(e, 0),
            this._ghash.update(e))
        }
        this._called = !0;
        var r = this._mode.encrypt(this, t);
        return this._decrypt ? this._ghash.update(t) : this._ghash.update(r),
        this._len += t.length,
        r
    }
    ,
    u.prototype._final = function() {
        if (this._decrypt && !this._authTag)
            throw new Error("Unsupported state or unable to authenticate data");
        var t = a(this._ghash.final(8 * this._alen, 8 * this._len), this._cipher.encryptBlock(this._finID));
        if (this._decrypt && function(t, e) {
            var r = 0;
            t.length !== e.length && r++;
            for (var i = Math.min(t.length, e.length), n = 0; n < i; ++n)
                r += t[n] ^ e[n];
            return r
        }(t, this._authTag))
            throw new Error("Unsupported state or unable to authenticate data");
        this._authTag = t,
        this._cipher.scrub()
    }
    ,
    u.prototype.getAuthTag = function() {
        if (this._decrypt || !n.isBuffer(this._authTag))
            throw new Error("Attempting to get auth tag in unsupported state");
        return this._authTag
    }
    ,
    u.prototype.setAuthTag = function(t) {
        if (!this._decrypt)
            throw new Error("Attempting to set auth tag in unsupported state");
        this._authTag = t
    }
    ,
    u.prototype.setAAD = function(t) {
        if (this._called)
            throw new Error("Attempting to set AAD in unsupported state");
        this._ghash.update(t),
        this._alen += t.length
    }
    ,
    t.exports = u
}
, function(t, e, r) {
    t.exports = n;
    var i = r(20).EventEmitter;
    function n() {
        i.call(this)
    }
    r(1)(n, i),
    n.Readable = r(21),
    n.Writable = r(81),
    n.Duplex = r(82),
    n.Transform = r(83),
    n.PassThrough = r(84),
    n.Stream = n,
    n.prototype.pipe = function(t, e) {
        var r = this;
        function n(e) {
            t.writable && !1 === t.write(e) && r.pause && r.pause()
        }
        function o() {
            r.readable && r.resume && r.resume()
        }
        r.on("data", n),
        t.on("drain", o),
        t._isStdio || e && !1 === e.end || (r.on("end", f),
        r.on("close", a));
        var s = !1;
        function f() {
            s || (s = !0,
            t.end())
        }
        function a() {
            s || (s = !0,
            "function" == typeof t.destroy && t.destroy())
        }
        function h(t) {
            if (u(),
            0 === i.listenerCount(this, "error"))
                throw t
        }
        function u() {
            r.removeListener("data", n),
            t.removeListener("drain", o),
            r.removeListener("end", f),
            r.removeListener("close", a),
            r.removeListener("error", h),
            t.removeListener("error", h),
            r.removeListener("end", u),
            r.removeListener("close", u),
            t.removeListener("close", u)
        }
        return r.on("error", h),
        t.on("error", h),
        r.on("end", u),
        r.on("close", u),
        t.on("close", u),
        t.emit("pipe", r),
        t
    }
}
, function(t, e, r) {
    "use strict";
    (function(e, i) {
        var n = r(18);
        t.exports = w;
        var o, s = r(27);
        w.ReadableState = b;
        r(20).EventEmitter;
        var f = function(t, e) {
            return t.listeners(e).length
        }
          , a = r(37)
          , h = r(0).Buffer
          , u = e.Uint8Array || function() {}
        ;
        var l = r(14);
        l.inherits = r(1);
        var c = r(74)
          , d = void 0;
        d = c && c.debuglog ? c.debuglog("stream") : function() {}
        ;
        var p, g = r(75), y = r(38);
        l.inherits(w, a);
        var v = ["error", "close", "destroy", "pause", "resume"];
        function b(t, e) {
            o = o || r(7),
            t = t || {};
            var i = e instanceof o;
            this.objectMode = !!t.objectMode,
            i && (this.objectMode = this.objectMode || !!t.readableObjectMode);
            var n = t.highWaterMark
              , s = t.readableHighWaterMark
              , f = this.objectMode ? 16 : 16384;
            this.highWaterMark = n || 0 === n ? n : i && (s || 0 === s) ? s : f,
            this.highWaterMark = Math.floor(this.highWaterMark),
            this.buffer = new g,
            this.length = 0,
            this.pipes = null,
            this.pipesCount = 0,
            this.flowing = null,
            this.ended = !1,
            this.endEmitted = !1,
            this.reading = !1,
            this.sync = !0,
            this.needReadable = !1,
            this.emittedReadable = !1,
            this.readableListening = !1,
            this.resumeScheduled = !1,
            this.destroyed = !1,
            this.defaultEncoding = t.defaultEncoding || "utf8",
            this.awaitDrain = 0,
            this.readingMore = !1,
            this.decoder = null,
            this.encoding = null,
            t.encoding && (p || (p = r(23).StringDecoder),
            this.decoder = new p(t.encoding),
            this.encoding = t.encoding)
        }
        function w(t) {
            if (o = o || r(7),
            !(this instanceof w))
                return new w(t);
            this._readableState = new b(t,this),
            this.readable = !0,
            t && ("function" == typeof t.read && (this._read = t.read),
            "function" == typeof t.destroy && (this._destroy = t.destroy)),
            a.call(this)
        }
        function m(t, e, r, i, n) {
            var o, s = t._readableState;
            null === e ? (s.reading = !1,
            function(t, e) {
                if (e.ended)
                    return;
                if (e.decoder) {
                    var r = e.decoder.end();
                    r && r.length && (e.buffer.push(r),
                    e.length += e.objectMode ? 1 : r.length)
                }
                e.ended = !0,
                S(t)
            }(t, s)) : (n || (o = function(t, e) {
                var r;
                (function(t) {
                    return h.isBuffer(t) || t instanceof u
                }
                )(e) || "string" == typeof e || void 0 === e || t.objectMode || (r = new TypeError("Invalid non-string/buffer chunk"));
                return r
            }(s, e)),
            o ? t.emit("error", o) : s.objectMode || e && e.length > 0 ? ("string" == typeof e || s.objectMode || Object.getPrototypeOf(e) === h.prototype || (e = function(t) {
                return h.from(t)
            }(e)),
            i ? s.endEmitted ? t.emit("error", new Error("stream.unshift() after end event")) : _(t, s, e, !0) : s.ended ? t.emit("error", new Error("stream.push() after EOF")) : (s.reading = !1,
            s.decoder && !r ? (e = s.decoder.write(e),
            s.objectMode || 0 !== e.length ? _(t, s, e, !1) : I(t, s)) : _(t, s, e, !1))) : i || (s.reading = !1));
            return function(t) {
                return !t.ended && (t.needReadable || t.length < t.highWaterMark || 0 === t.length)
            }(s)
        }
        function _(t, e, r, i) {
            e.flowing && 0 === e.length && !e.sync ? (t.emit("data", r),
            t.read(0)) : (e.length += e.objectMode ? 1 : r.length,
            i ? e.buffer.unshift(r) : e.buffer.push(r),
            e.needReadable && S(t)),
            I(t, e)
        }
        Object.defineProperty(w.prototype, "destroyed", {
            get: function() {
                return void 0 !== this._readableState && this._readableState.destroyed
            },
            set: function(t) {
                this._readableState && (this._readableState.destroyed = t)
            }
        }),
        w.prototype.destroy = y.destroy,
        w.prototype._undestroy = y.undestroy,
        w.prototype._destroy = function(t, e) {
            this.push(null),
            e(t)
        }
        ,
        w.prototype.push = function(t, e) {
            var r, i = this._readableState;
            return i.objectMode ? r = !0 : "string" == typeof t && ((e = e || i.defaultEncoding) !== i.encoding && (t = h.from(t, e),
            e = ""),
            r = !0),
            m(this, t, e, !1, r)
        }
        ,
        w.prototype.unshift = function(t) {
            return m(this, t, null, !0, !1)
        }
        ,
        w.prototype.isPaused = function() {
            return !1 === this._readableState.flowing
        }
        ,
        w.prototype.setEncoding = function(t) {
            return p || (p = r(23).StringDecoder),
            this._readableState.decoder = new p(t),
            this._readableState.encoding = t,
            this
        }
        ;
        var E = 8388608;
        function T(t, e) {
            return t <= 0 || 0 === e.length && e.ended ? 0 : e.objectMode ? 1 : t != t ? e.flowing && e.length ? e.buffer.head.data.length : e.length : (t > e.highWaterMark && (e.highWaterMark = function(t) {
                return t >= E ? t = E : (t--,
                t |= t >>> 1,
                t |= t >>> 2,
                t |= t >>> 4,
                t |= t >>> 8,
                t |= t >>> 16,
                t++),
                t
            }(t)),
            t <= e.length ? t : e.ended ? e.length : (e.needReadable = !0,
            0))
        }
        function S(t) {
            var e = t._readableState;
            e.needReadable = !1,
            e.emittedReadable || (d("emitReadable", e.flowing),
            e.emittedReadable = !0,
            e.sync ? n.nextTick(B, t) : B(t))
        }
        function B(t) {
            d("emit readable"),
            t.emit("readable"),
            x(t)
        }
        function I(t, e) {
            e.readingMore || (e.readingMore = !0,
            n.nextTick(A, t, e))
        }
        function A(t, e) {
            for (var r = e.length; !e.reading && !e.flowing && !e.ended && e.length < e.highWaterMark && (d("maybeReadMore read 0"),
            t.read(0),
            r !== e.length); )
                r = e.length;
            e.readingMore = !1
        }
        function k(t) {
            d("readable nexttick read 0"),
            t.read(0)
        }
        function U(t, e) {
            e.reading || (d("resume read 0"),
            t.read(0)),
            e.resumeScheduled = !1,
            e.awaitDrain = 0,
            t.emit("resume"),
            x(t),
            e.flowing && !e.reading && t.read(0)
        }
        function x(t) {
            var e = t._readableState;
            for (d("flow", e.flowing); e.flowing && null !== t.read(); )
                ;
        }
        function L(t, e) {
            return 0 === e.length ? null : (e.objectMode ? r = e.buffer.shift() : !t || t >= e.length ? (r = e.decoder ? e.buffer.join("") : 1 === e.buffer.length ? e.buffer.head.data : e.buffer.concat(e.length),
            e.buffer.clear()) : r = function(t, e, r) {
                var i;
                t < e.head.data.length ? (i = e.head.data.slice(0, t),
                e.head.data = e.head.data.slice(t)) : i = t === e.head.data.length ? e.shift() : r ? function(t, e) {
                    var r = e.head
                      , i = 1
                      , n = r.data;
                    t -= n.length;
                    for (; r = r.next; ) {
                        var o = r.data
                          , s = t > o.length ? o.length : t;
                        if (s === o.length ? n += o : n += o.slice(0, t),
                        0 === (t -= s)) {
                            s === o.length ? (++i,
                            r.next ? e.head = r.next : e.head = e.tail = null) : (e.head = r,
                            r.data = o.slice(s));
                            break
                        }
                        ++i
                    }
                    return e.length -= i,
                    n
                }(t, e) : function(t, e) {
                    var r = h.allocUnsafe(t)
                      , i = e.head
                      , n = 1;
                    i.data.copy(r),
                    t -= i.data.length;
                    for (; i = i.next; ) {
                        var o = i.data
                          , s = t > o.length ? o.length : t;
                        if (o.copy(r, r.length - t, 0, s),
                        0 === (t -= s)) {
                            s === o.length ? (++n,
                            i.next ? e.head = i.next : e.head = e.tail = null) : (e.head = i,
                            i.data = o.slice(s));
                            break
                        }
                        ++n
                    }
                    return e.length -= n,
                    r
                }(t, e);
                return i
            }(t, e.buffer, e.decoder),
            r);
            var r
        }
        function R(t) {
            var e = t._readableState;
            if (e.length > 0)
                throw new Error('"endReadable()" called on non-empty stream');
            e.endEmitted || (e.ended = !0,
            n.nextTick(D, e, t))
        }
        function D(t, e) {
            t.endEmitted || 0 !== t.length || (t.endEmitted = !0,
            e.readable = !1,
            e.emit("end"))
        }
        function O(t, e) {
            for (var r = 0, i = t.length; r < i; r++)
                if (t[r] === e)
                    return r;
            return -1
        }
        w.prototype.read = function(t) {
            d("read", t),
            t = parseInt(t, 10);
            var e = this._readableState
              , r = t;
            if (0 !== t && (e.emittedReadable = !1),
            0 === t && e.needReadable && (e.length >= e.highWaterMark || e.ended))
                return d("read: emitReadable", e.length, e.ended),
                0 === e.length && e.ended ? R(this) : S(this),
                null;
            if (0 === (t = T(t, e)) && e.ended)
                return 0 === e.length && R(this),
                null;
            var i, n = e.needReadable;
            return d("need readable", n),
            (0 === e.length || e.length - t < e.highWaterMark) && d("length less than watermark", n = !0),
            e.ended || e.reading ? d("reading or ended", n = !1) : n && (d("do read"),
            e.reading = !0,
            e.sync = !0,
            0 === e.length && (e.needReadable = !0),
            this._read(e.highWaterMark),
            e.sync = !1,
            e.reading || (t = T(r, e))),
            null === (i = t > 0 ? L(t, e) : null) ? (e.needReadable = !0,
            t = 0) : e.length -= t,
            0 === e.length && (e.ended || (e.needReadable = !0),
            r !== t && e.ended && R(this)),
            null !== i && this.emit("data", i),
            i
        }
        ,
        w.prototype._read = function(t) {
            this.emit("error", new Error("_read() is not implemented"))
        }
        ,
        w.prototype.pipe = function(t, e) {
            var r = this
              , o = this._readableState;
            switch (o.pipesCount) {
            case 0:
                o.pipes = t;
                break;
            case 1:
                o.pipes = [o.pipes, t];
                break;
            default:
                o.pipes.push(t)
            }
            o.pipesCount += 1,
            d("pipe count=%d opts=%j", o.pipesCount, e);
            var a = (!e || !1 !== e.end) && t !== i.stdout && t !== i.stderr ? u : w;
            function h(e, i) {
                d("onunpipe"),
                e === r && i && !1 === i.hasUnpiped && (i.hasUnpiped = !0,
                d("cleanup"),
                t.removeListener("close", v),
                t.removeListener("finish", b),
                t.removeListener("drain", l),
                t.removeListener("error", y),
                t.removeListener("unpipe", h),
                r.removeListener("end", u),
                r.removeListener("end", w),
                r.removeListener("data", g),
                c = !0,
                !o.awaitDrain || t._writableState && !t._writableState.needDrain || l())
            }
            function u() {
                d("onend"),
                t.end()
            }
            o.endEmitted ? n.nextTick(a) : r.once("end", a),
            t.on("unpipe", h);
            var l = function(t) {
                return function() {
                    var e = t._readableState;
                    d("pipeOnDrain", e.awaitDrain),
                    e.awaitDrain && e.awaitDrain--,
                    0 === e.awaitDrain && f(t, "data") && (e.flowing = !0,
                    x(t))
                }
            }(r);
            t.on("drain", l);
            var c = !1;
            var p = !1;
            function g(e) {
                d("ondata"),
                p = !1,
                !1 !== t.write(e) || p || ((1 === o.pipesCount && o.pipes === t || o.pipesCount > 1 && -1 !== O(o.pipes, t)) && !c && (d("false write response, pause", r._readableState.awaitDrain),
                r._readableState.awaitDrain++,
                p = !0),
                r.pause())
            }
            function y(e) {
                d("onerror", e),
                w(),
                t.removeListener("error", y),
                0 === f(t, "error") && t.emit("error", e)
            }
            function v() {
                t.removeListener("finish", b),
                w()
            }
            function b() {
                d("onfinish"),
                t.removeListener("close", v),
                w()
            }
            function w() {
                d("unpipe"),
                r.unpipe(t)
            }
            return r.on("data", g),
            function(t, e, r) {
                if ("function" == typeof t.prependListener)
                    return t.prependListener(e, r);
                t._events && t._events[e] ? s(t._events[e]) ? t._events[e].unshift(r) : t._events[e] = [r, t._events[e]] : t.on(e, r)
            }(t, "error", y),
            t.once("close", v),
            t.once("finish", b),
            t.emit("pipe", r),
            o.flowing || (d("pipe resume"),
            r.resume()),
            t
        }
        ,
        w.prototype.unpipe = function(t) {
            var e = this._readableState
              , r = {
                hasUnpiped: !1
            };
            if (0 === e.pipesCount)
                return this;
            if (1 === e.pipesCount)
                return t && t !== e.pipes ? this : (t || (t = e.pipes),
                e.pipes = null,
                e.pipesCount = 0,
                e.flowing = !1,
                t && t.emit("unpipe", this, r),
                this);
            if (!t) {
                var i = e.pipes
                  , n = e.pipesCount;
                e.pipes = null,
                e.pipesCount = 0,
                e.flowing = !1;
                for (var o = 0; o < n; o++)
                    i[o].emit("unpipe", this, r);
                return this
            }
            var s = O(e.pipes, t);
            return -1 === s ? this : (e.pipes.splice(s, 1),
            e.pipesCount -= 1,
            1 === e.pipesCount && (e.pipes = e.pipes[0]),
            t.emit("unpipe", this, r),
            this)
        }
        ,
        w.prototype.on = function(t, e) {
            var r = a.prototype.on.call(this, t, e);
            if ("data" === t)
                !1 !== this._readableState.flowing && this.resume();
            else if ("readable" === t) {
                var i = this._readableState;
                i.endEmitted || i.readableListening || (i.readableListening = i.needReadable = !0,
                i.emittedReadable = !1,
                i.reading ? i.length && S(this) : n.nextTick(k, this))
            }
            return r
        }
        ,
        w.prototype.addListener = w.prototype.on,
        w.prototype.resume = function() {
            var t = this._readableState;
            return t.flowing || (d("resume"),
            t.flowing = !0,
            function(t, e) {
                e.resumeScheduled || (e.resumeScheduled = !0,
                n.nextTick(U, t, e))
            }(this, t)),
            this
        }
        ,
        w.prototype.pause = function() {
            return d("call pause flowing=%j", this._readableState.flowing),
            !1 !== this._readableState.flowing && (d("pause"),
            this._readableState.flowing = !1,
            this.emit("pause")),
            this
        }
        ,
        w.prototype.wrap = function(t) {
            var e = this
              , r = this._readableState
              , i = !1;
            for (var n in t.on("end", function() {
                if (d("wrapped end"),
                r.decoder && !r.ended) {
                    var t = r.decoder.end();
                    t && t.length && e.push(t)
                }
                e.push(null)
            }),
            t.on("data", function(n) {
                (d("wrapped data"),
                r.decoder && (n = r.decoder.write(n)),
                !r.objectMode || null !== n && void 0 !== n) && ((r.objectMode || n && n.length) && (e.push(n) || (i = !0,
                t.pause())))
            }),
            t)
                void 0 === this[n] && "function" == typeof t[n] && (this[n] = function(e) {
                    return function() {
                        return t[e].apply(t, arguments)
                    }
                }(n));
            for (var o = 0; o < v.length; o++)
                t.on(v[o], this.emit.bind(this, v[o]));
            return this._read = function(e) {
                d("wrapped _read", e),
                i && (i = !1,
                t.resume())
            }
            ,
            this
        }
        ,
        Object.defineProperty(w.prototype, "readableHighWaterMark", {
            enumerable: !1,
            get: function() {
                return this._readableState.highWaterMark
            }
        }),
        w._fromList = L
    }
    ).call(this, r(3), r(9))
}
, function(t, e, r) {
    t.exports = r(20).EventEmitter
}
, function(t, e, r) {
    "use strict";
    var i = r(18);
    function n(t, e) {
        t.emit("error", e)
    }
    t.exports = {
        destroy: function(t, e) {
            var r = this
              , o = this._readableState && this._readableState.destroyed
              , s = this._writableState && this._writableState.destroyed;
            return o || s ? (e ? e(t) : !t || this._writableState && this._writableState.errorEmitted || i.nextTick(n, this, t),
            this) : (this._readableState && (this._readableState.destroyed = !0),
            this._writableState && (this._writableState.destroyed = !0),
            this._destroy(t || null, function(t) {
                !e && t ? (i.nextTick(n, r, t),
                r._writableState && (r._writableState.errorEmitted = !0)) : e && e(t)
            }),
            this)
        },
        undestroy: function() {
            this._readableState && (this._readableState.destroyed = !1,
            this._readableState.reading = !1,
            this._readableState.ended = !1,
            this._readableState.endEmitted = !1),
            this._writableState && (this._writableState.destroyed = !1,
            this._writableState.ended = !1,
            this._writableState.ending = !1,
            this._writableState.finished = !1,
            this._writableState.errorEmitted = !1)
        }
    }
}
, function(t, e, r) {
    "use strict";
    t.exports = o;
    var i = r(7)
      , n = r(14);
    function o(t) {
        if (!(this instanceof o))
            return new o(t);
        i.call(this, t),
        this._transformState = {
            afterTransform: function(t, e) {
                var r = this._transformState;
                r.transforming = !1;
                var i = r.writecb;
                if (!i)
                    return this.emit("error", new Error("write callback called multiple times"));
                r.writechunk = null,
                r.writecb = null,
                null != e && this.push(e),
                i(t);
                var n = this._readableState;
                n.reading = !1,
                (n.needReadable || n.length < n.highWaterMark) && this._read(n.highWaterMark)
            }
            .bind(this),
            needTransform: !1,
            transforming: !1,
            writecb: null,
            writechunk: null,
            writeencoding: null
        },
        this._readableState.needReadable = !0,
        this._readableState.sync = !1,
        t && ("function" == typeof t.transform && (this._transform = t.transform),
        "function" == typeof t.flush && (this._flush = t.flush)),
        this.on("prefinish", s)
    }
    function s() {
        var t = this;
        "function" == typeof this._flush ? this._flush(function(e, r) {
            f(t, e, r)
        }) : f(this, null, null)
    }
    function f(t, e, r) {
        if (e)
            return t.emit("error", e);
        if (null != r && t.push(r),
        t._writableState.length)
            throw new Error("Calling transform done when ws.length != 0");
        if (t._transformState.transforming)
            throw new Error("Calling transform done when still transforming");
        return t.push(null)
    }
    n.inherits = r(1),
    n.inherits(o, i),
    o.prototype.push = function(t, e) {
        return this._transformState.needTransform = !1,
        i.prototype.push.call(this, t, e)
    }
    ,
    o.prototype._transform = function(t, e, r) {
        throw new Error("_transform() is not implemented")
    }
    ,
    o.prototype._write = function(t, e, r) {
        var i = this._transformState;
        if (i.writecb = r,
        i.writechunk = t,
        i.writeencoding = e,
        !i.transforming) {
            var n = this._readableState;
            (i.needTransform || n.needReadable || n.length < n.highWaterMark) && this._read(n.highWaterMark)
        }
    }
    ,
    o.prototype._read = function(t) {
        var e = this._transformState;
        null !== e.writechunk && e.writecb && !e.transforming ? (e.transforming = !0,
        this._transform(e.writechunk, e.writeencoding, e.afterTransform)) : e.needTransform = !0
    }
    ,
    o.prototype._destroy = function(t, e) {
        var r = this;
        i.prototype._destroy.call(this, t, function(t) {
            e(t),
            r.emit("close")
        })
    }
}
, function(t, e, r) {
    var i = r(17)
      , n = r(0).Buffer
      , o = r(6);
    function s(t, e, r, s) {
        o.call(this),
        this._cipher = new i.AES(e),
        this._prev = n.from(r),
        this._cache = n.allocUnsafe(0),
        this._secCache = n.allocUnsafe(0),
        this._decrypt = s,
        this._mode = t
    }
    r(1)(s, o),
    s.prototype._update = function(t) {
        return this._mode.encrypt(this, t, this._decrypt)
    }
    ,
    s.prototype._final = function() {
        this._cipher.scrub()
    }
    ,
    t.exports = s
}
, function(t, e, r) {
    var i = r(0).Buffer
      , n = r(24);
    t.exports = function(t, e, r, o) {
        if (i.isBuffer(t) || (t = i.from(t, "binary")),
        e && (i.isBuffer(e) || (e = i.from(e, "binary")),
        8 !== e.length))
            throw new RangeError("salt should be Buffer with 8 byte length");
        for (var s = r / 8, f = i.alloc(s), a = i.alloc(o || 0), h = i.alloc(0); s > 0 || o > 0; ) {
            var u = new n;
            u.update(h),
            u.update(t),
            e && u.update(e),
            h = u.digest();
            var l = 0;
            if (s > 0) {
                var c = f.length - s;
                l = Math.min(s, h.length),
                h.copy(f, c, 0, l),
                s -= l
            }
            if (l < h.length && o > 0) {
                var d = a.length - o
                  , p = Math.min(o, h.length - l);
                h.copy(a, d, l, l + p),
                o -= p
            }
        }
        return h.fill(0),
        {
            key: f,
            iv: a
        }
    }
}
, function(t, e, r) {
    "use strict";
    var i = r(0).Buffer
      , n = r(35).Transform;
    function o(t) {
        n.call(this),
        this._block = i.allocUnsafe(t),
        this._blockSize = t,
        this._blockOffset = 0,
        this._length = [0, 0, 0, 0],
        this._finalized = !1
    }
    r(1)(o, n),
    o.prototype._transform = function(t, e, r) {
        var i = null;
        try {
            this.update(t, e)
        } catch (t) {
            i = t
        }
        r(i)
    }
    ,
    o.prototype._flush = function(t) {
        var e = null;
        try {
            this.push(this.digest())
        } catch (t) {
            e = t
        }
        t(e)
    }
    ,
    o.prototype.update = function(t, e) {
        if (function(t, e) {
            if (!i.isBuffer(t) && "string" != typeof t)
                throw new TypeError(e + " must be a string or a buffer")
        }(t, "Data"),
        this._finalized)
            throw new Error("Digest already called");
        i.isBuffer(t) || (t = i.from(t, e));
        for (var r = this._block, n = 0; this._blockOffset + t.length - n >= this._blockSize; ) {
            for (var o = this._blockOffset; o < this._blockSize; )
                r[o++] = t[n++];
            this._update(),
            this._blockOffset = 0
        }
        for (; n < t.length; )
            r[this._blockOffset++] = t[n++];
        for (var s = 0, f = 8 * t.length; f > 0; ++s)
            this._length[s] += f,
            (f = this._length[s] / 4294967296 | 0) > 0 && (this._length[s] -= 4294967296 * f);
        return this
    }
    ,
    o.prototype._update = function() {
        throw new Error("_update is not implemented")
    }
    ,
    o.prototype.digest = function(t) {
        if (this._finalized)
            throw new Error("Digest already called");
        this._finalized = !0;
        var e = this._digest();
        void 0 !== t && (e = e.toString(t)),
        this._block.fill(0),
        this._blockOffset = 0;
        for (var r = 0; r < 4; ++r)
            this._length[r] = 0;
        return e
    }
    ,
    o.prototype._digest = function() {
        throw new Error("_digest is not implemented")
    }
    ,
    t.exports = o
}
, function(t, e, r) {
    var i = r(4)
      , n = r(0).Buffer
      , o = r(5)
      , s = o.valueOf(3);
    function f(t, e, r, n) {
        i.notStrictEqual(n, void 0, "Missing Z coordinate"),
        this.curve = t,
        this.x = e,
        this.y = r,
        this.z = n,
        this._zInv = null,
        this.compressed = !0
    }
    Object.defineProperty(f.prototype, "zInv", {
        get: function() {
            return null === this._zInv && (this._zInv = this.z.modInverse(this.curve.p)),
            this._zInv
        }
    }),
    Object.defineProperty(f.prototype, "affineX", {
        get: function() {
            return this.x.multiply(this.zInv).mod(this.curve.p)
        }
    }),
    Object.defineProperty(f.prototype, "affineY", {
        get: function() {
            return this.y.multiply(this.zInv).mod(this.curve.p)
        }
    }),
    f.fromAffine = function(t, e, r) {
        return new f(t,e,r,o.ONE)
    }
    ,
    f.prototype.equals = function(t) {
        return t === this || (this.curve.isInfinity(this) ? this.curve.isInfinity(t) : this.curve.isInfinity(t) ? this.curve.isInfinity(this) : 0 === t.y.multiply(this.z).subtract(this.y.multiply(t.z)).mod(this.curve.p).signum() && 0 === t.x.multiply(this.z).subtract(this.x.multiply(t.z)).mod(this.curve.p).signum())
    }
    ,
    f.prototype.negate = function() {
        var t = this.curve.p.subtract(this.y);
        return new f(this.curve,this.x,t,this.z)
    }
    ,
    f.prototype.add = function(t) {
        if (this.curve.isInfinity(this))
            return t;
        if (this.curve.isInfinity(t))
            return this;
        var e = this.x
          , r = this.y
          , i = t.x
          , n = t.y.multiply(this.z).subtract(r.multiply(t.z)).mod(this.curve.p)
          , o = i.multiply(this.z).subtract(e.multiply(t.z)).mod(this.curve.p);
        if (0 === o.signum())
            return 0 === n.signum() ? this.twice() : this.curve.infinity;
        var a = o.square()
          , h = a.multiply(o)
          , u = e.multiply(a)
          , l = n.square().multiply(this.z)
          , c = l.subtract(u.shiftLeft(1)).multiply(t.z).subtract(h).multiply(o).mod(this.curve.p)
          , d = u.multiply(s).multiply(n).subtract(r.multiply(h)).subtract(l.multiply(n)).multiply(t.z).add(n.multiply(h)).mod(this.curve.p)
          , p = h.multiply(this.z).multiply(t.z).mod(this.curve.p);
        return new f(this.curve,c,d,p)
    }
    ,
    f.prototype.twice = function() {
        if (this.curve.isInfinity(this))
            return this;
        if (0 === this.y.signum())
            return this.curve.infinity;
        var t = this.x
          , e = this.y
          , r = e.multiply(this.z).mod(this.curve.p)
          , i = r.multiply(e).mod(this.curve.p)
          , n = this.curve.a
          , o = t.square().multiply(s);
        0 !== n.signum() && (o = o.add(this.z.square().multiply(n)));
        var a = (o = o.mod(this.curve.p)).square().subtract(t.shiftLeft(3).multiply(i)).shiftLeft(1).multiply(r).mod(this.curve.p)
          , h = o.multiply(s).multiply(t).subtract(i.shiftLeft(1)).shiftLeft(2).multiply(i).subtract(o.pow(3)).mod(this.curve.p)
          , u = r.pow(3).shiftLeft(3).mod(this.curve.p);
        return new f(this.curve,a,h,u)
    }
    ,
    f.prototype.multiply = function(t) {
        if (this.curve.isInfinity(this))
            return this;
        if (0 === t.signum())
            return this.curve.infinity;
        for (var e = t, r = e.multiply(s), i = this.negate(), n = this, o = r.bitLength() - 2; o > 0; --o) {
            var f = r.testBit(o)
              , a = e.testBit(o);
            n = n.twice(),
            f !== a && (n = n.add(f ? this : i))
        }
        return n
    }
    ,
    f.prototype.multiplyTwo = function(t, e, r) {
        for (var i = Math.max(t.bitLength(), r.bitLength()) - 1, n = this.curve.infinity, o = this.add(e); i >= 0; ) {
            var s = t.testBit(i)
              , f = r.testBit(i);
            n = n.twice(),
            s ? n = f ? n.add(o) : n.add(this) : f && (n = n.add(e)),
            --i
        }
        return n
    }
    ,
    f.prototype.getEncoded = function(t) {
        if (null == t && (t = this.compressed),
        this.curve.isInfinity(this))
            return n.alloc(1, 0);
        var e, r = this.affineX, i = this.affineY, o = this.curve.pLength;
        return t ? (e = n.allocUnsafe(1 + o)).writeUInt8(i.isEven() ? 2 : 3, 0) : ((e = n.allocUnsafe(1 + o + o)).writeUInt8(4, 0),
        i.toBuffer(o).copy(e, 1 + o)),
        r.toBuffer(o).copy(e, 1),
        e
    }
    ,
    f.decodeFrom = function(t, e) {
        var r, n = e.readUInt8(0), s = 4 !== n, a = Math.floor((t.p.bitLength() + 7) / 8), h = o.fromBuffer(e.slice(1, 1 + a));
        if (s) {
            i.equal(e.length, a + 1, "Invalid sequence length"),
            i(2 === n || 3 === n, "Invalid sequence tag");
            var u = 3 === n;
            r = t.pointFromX(u, h)
        } else {
            i.equal(e.length, 1 + a + a, "Invalid sequence length");
            var l = o.fromBuffer(e.slice(1 + a));
            r = f.fromAffine(t, h, l)
        }
        return r.compressed = s,
        r
    }
    ,
    f.prototype.toString = function() {
        return this.curve.isInfinity(this) ? "(INFINITY)" : "(" + this.affineX.toString() + "," + this.affineY.toString() + ")"
    }
    ,
    t.exports = f
}
, function(t, e, r) {
    function i(t, e, r) {
        if (!(this instanceof i))
            return new i(t,e,r);
        null != t && ("number" == typeof t ? this.fromNumber(t, e, r) : null == e && "string" != typeof t ? this.fromString(t, 256) : this.fromString(t, e))
    }
    var n = i.prototype;
    n.__bigi = r(89).version,
    i.isBigInteger = function(t, e) {
        return t && t.__bigi && (!e || t.__bigi === n.__bigi)
    }
    ,
    i.prototype.am = function(t, e, r, i, n, o) {
        for (; --o >= 0; ) {
            var s = e * this[t++] + r[i] + n;
            n = Math.floor(s / 67108864),
            r[i++] = 67108863 & s
        }
        return n
    }
    ,
    i.prototype.DB = 26,
    i.prototype.DM = 67108863;
    var o = i.prototype.DV = 1 << 26;
    i.prototype.FV = Math.pow(2, 52),
    i.prototype.F1 = 26,
    i.prototype.F2 = 0;
    var s, f, a = "0123456789abcdefghijklmnopqrstuvwxyz", h = new Array;
    for (s = "0".charCodeAt(0),
    f = 0; f <= 9; ++f)
        h[s++] = f;
    for (s = "a".charCodeAt(0),
    f = 10; f < 36; ++f)
        h[s++] = f;
    for (s = "A".charCodeAt(0),
    f = 10; f < 36; ++f)
        h[s++] = f;
    function u(t) {
        return a.charAt(t)
    }
    function l(t, e) {
        var r = h[t.charCodeAt(e)];
        return null == r ? -1 : r
    }
    function c(t) {
        var e = new i;
        return e.fromInt(t),
        e
    }
    function d(t) {
        var e, r = 1;
        return 0 != (e = t >>> 16) && (t = e,
        r += 16),
        0 != (e = t >> 8) && (t = e,
        r += 8),
        0 != (e = t >> 4) && (t = e,
        r += 4),
        0 != (e = t >> 2) && (t = e,
        r += 2),
        0 != (e = t >> 1) && (t = e,
        r += 1),
        r
    }
    function p(t) {
        this.m = t
    }
    function g(t) {
        this.m = t,
        this.mp = t.invDigit(),
        this.mpl = 32767 & this.mp,
        this.mph = this.mp >> 15,
        this.um = (1 << t.DB - 15) - 1,
        this.mt2 = 2 * t.t
    }
    function y(t, e) {
        return t & e
    }
    function v(t, e) {
        return t | e
    }
    function b(t, e) {
        return t ^ e
    }
    function w(t, e) {
        return t & ~e
    }
    function m(t) {
        if (0 == t)
            return -1;
        var e = 0;
        return 0 == (65535 & t) && (t >>= 16,
        e += 16),
        0 == (255 & t) && (t >>= 8,
        e += 8),
        0 == (15 & t) && (t >>= 4,
        e += 4),
        0 == (3 & t) && (t >>= 2,
        e += 2),
        0 == (1 & t) && ++e,
        e
    }
    function _(t) {
        for (var e = 0; 0 != t; )
            t &= t - 1,
            ++e;
        return e
    }
    function E() {}
    function T(t) {
        return t
    }
    function S(t) {
        this.r2 = new i,
        this.q3 = new i,
        i.ONE.dlShiftTo(2 * t.t, this.r2),
        this.mu = this.r2.divide(t),
        this.m = t
    }
    p.prototype.convert = function(t) {
        return t.s < 0 || t.compareTo(this.m) >= 0 ? t.mod(this.m) : t
    }
    ,
    p.prototype.revert = function(t) {
        return t
    }
    ,
    p.prototype.reduce = function(t) {
        t.divRemTo(this.m, null, t)
    }
    ,
    p.prototype.mulTo = function(t, e, r) {
        t.multiplyTo(e, r),
        this.reduce(r)
    }
    ,
    p.prototype.sqrTo = function(t, e) {
        t.squareTo(e),
        this.reduce(e)
    }
    ,
    g.prototype.convert = function(t) {
        var e = new i;
        return t.abs().dlShiftTo(this.m.t, e),
        e.divRemTo(this.m, null, e),
        t.s < 0 && e.compareTo(i.ZERO) > 0 && this.m.subTo(e, e),
        e
    }
    ,
    g.prototype.revert = function(t) {
        var e = new i;
        return t.copyTo(e),
        this.reduce(e),
        e
    }
    ,
    g.prototype.reduce = function(t) {
        for (; t.t <= this.mt2; )
            t[t.t++] = 0;
        for (var e = 0; e < this.m.t; ++e) {
            var r = 32767 & t[e]
              , i = r * this.mpl + ((r * this.mph + (t[e] >> 15) * this.mpl & this.um) << 15) & t.DM;
            for (t[r = e + this.m.t] += this.m.am(0, i, t, e, 0, this.m.t); t[r] >= t.DV; )
                t[r] -= t.DV,
                t[++r]++
        }
        t.clamp(),
        t.drShiftTo(this.m.t, t),
        t.compareTo(this.m) >= 0 && t.subTo(this.m, t)
    }
    ,
    g.prototype.mulTo = function(t, e, r) {
        t.multiplyTo(e, r),
        this.reduce(r)
    }
    ,
    g.prototype.sqrTo = function(t, e) {
        t.squareTo(e),
        this.reduce(e)
    }
    ,
    n.copyTo = function(t) {
        for (var e = this.t - 1; e >= 0; --e)
            t[e] = this[e];
        t.t = this.t,
        t.s = this.s
    }
    ,
    n.fromInt = function(t) {
        this.t = 1,
        this.s = t < 0 ? -1 : 0,
        t > 0 ? this[0] = t : t < -1 ? this[0] = t + o : this.t = 0
    }
    ,
    n.fromString = function(t, e) {
        var r;
        if (16 == e)
            r = 4;
        else if (8 == e)
            r = 3;
        else if (256 == e)
            r = 8;
        else if (2 == e)
            r = 1;
        else if (32 == e)
            r = 5;
        else {
            if (4 != e)
                return void this.fromRadix(t, e);
            r = 2
        }
        this.t = 0,
        this.s = 0;
        for (var n = t.length, o = !1, s = 0; --n >= 0; ) {
            var f = 8 == r ? 255 & t[n] : l(t, n);
            f < 0 ? "-" == t.charAt(n) && (o = !0) : (o = !1,
            0 == s ? this[this.t++] = f : s + r > this.DB ? (this[this.t - 1] |= (f & (1 << this.DB - s) - 1) << s,
            this[this.t++] = f >> this.DB - s) : this[this.t - 1] |= f << s,
            (s += r) >= this.DB && (s -= this.DB))
        }
        8 == r && 0 != (128 & t[0]) && (this.s = -1,
        s > 0 && (this[this.t - 1] |= (1 << this.DB - s) - 1 << s)),
        this.clamp(),
        o && i.ZERO.subTo(this, this)
    }
    ,
    n.clamp = function() {
        for (var t = this.s & this.DM; this.t > 0 && this[this.t - 1] == t; )
            --this.t
    }
    ,
    n.dlShiftTo = function(t, e) {
        var r;
        for (r = this.t - 1; r >= 0; --r)
            e[r + t] = this[r];
        for (r = t - 1; r >= 0; --r)
            e[r] = 0;
        e.t = this.t + t,
        e.s = this.s
    }
    ,
    n.drShiftTo = function(t, e) {
        for (var r = t; r < this.t; ++r)
            e[r - t] = this[r];
        e.t = Math.max(this.t - t, 0),
        e.s = this.s
    }
    ,
    n.lShiftTo = function(t, e) {
        var r, i = t % this.DB, n = this.DB - i, o = (1 << n) - 1, s = Math.floor(t / this.DB), f = this.s << i & this.DM;
        for (r = this.t - 1; r >= 0; --r)
            e[r + s + 1] = this[r] >> n | f,
            f = (this[r] & o) << i;
        for (r = s - 1; r >= 0; --r)
            e[r] = 0;
        e[s] = f,
        e.t = this.t + s + 1,
        e.s = this.s,
        e.clamp()
    }
    ,
    n.rShiftTo = function(t, e) {
        e.s = this.s;
        var r = Math.floor(t / this.DB);
        if (r >= this.t)
            e.t = 0;
        else {
            var i = t % this.DB
              , n = this.DB - i
              , o = (1 << i) - 1;
            e[0] = this[r] >> i;
            for (var s = r + 1; s < this.t; ++s)
                e[s - r - 1] |= (this[s] & o) << n,
                e[s - r] = this[s] >> i;
            i > 0 && (e[this.t - r - 1] |= (this.s & o) << n),
            e.t = this.t - r,
            e.clamp()
        }
    }
    ,
    n.subTo = function(t, e) {
        for (var r = 0, i = 0, n = Math.min(t.t, this.t); r < n; )
            i += this[r] - t[r],
            e[r++] = i & this.DM,
            i >>= this.DB;
        if (t.t < this.t) {
            for (i -= t.s; r < this.t; )
                i += this[r],
                e[r++] = i & this.DM,
                i >>= this.DB;
            i += this.s
        } else {
            for (i += this.s; r < t.t; )
                i -= t[r],
                e[r++] = i & this.DM,
                i >>= this.DB;
            i -= t.s
        }
        e.s = i < 0 ? -1 : 0,
        i < -1 ? e[r++] = this.DV + i : i > 0 && (e[r++] = i),
        e.t = r,
        e.clamp()
    }
    ,
    n.multiplyTo = function(t, e) {
        var r = this.abs()
          , n = t.abs()
          , o = r.t;
        for (e.t = o + n.t; --o >= 0; )
            e[o] = 0;
        for (o = 0; o < n.t; ++o)
            e[o + r.t] = r.am(0, n[o], e, o, 0, r.t);
        e.s = 0,
        e.clamp(),
        this.s != t.s && i.ZERO.subTo(e, e)
    }
    ,
    n.squareTo = function(t) {
        for (var e = this.abs(), r = t.t = 2 * e.t; --r >= 0; )
            t[r] = 0;
        for (r = 0; r < e.t - 1; ++r) {
            var i = e.am(r, e[r], t, 2 * r, 0, 1);
            (t[r + e.t] += e.am(r + 1, 2 * e[r], t, 2 * r + 1, i, e.t - r - 1)) >= e.DV && (t[r + e.t] -= e.DV,
            t[r + e.t + 1] = 1)
        }
        t.t > 0 && (t[t.t - 1] += e.am(r, e[r], t, 2 * r, 0, 1)),
        t.s = 0,
        t.clamp()
    }
    ,
    n.divRemTo = function(t, e, r) {
        var n = t.abs();
        if (!(n.t <= 0)) {
            var o = this.abs();
            if (o.t < n.t)
                return null != e && e.fromInt(0),
                void (null != r && this.copyTo(r));
            null == r && (r = new i);
            var s = new i
              , f = this.s
              , a = t.s
              , h = this.DB - d(n[n.t - 1]);
            h > 0 ? (n.lShiftTo(h, s),
            o.lShiftTo(h, r)) : (n.copyTo(s),
            o.copyTo(r));
            var u = s.t
              , l = s[u - 1];
            if (0 != l) {
                var c = l * (1 << this.F1) + (u > 1 ? s[u - 2] >> this.F2 : 0)
                  , p = this.FV / c
                  , g = (1 << this.F1) / c
                  , y = 1 << this.F2
                  , v = r.t
                  , b = v - u
                  , w = null == e ? new i : e;
                for (s.dlShiftTo(b, w),
                r.compareTo(w) >= 0 && (r[r.t++] = 1,
                r.subTo(w, r)),
                i.ONE.dlShiftTo(u, w),
                w.subTo(s, s); s.t < u; )
                    s[s.t++] = 0;
                for (; --b >= 0; ) {
                    var m = r[--v] == l ? this.DM : Math.floor(r[v] * p + (r[v - 1] + y) * g);
                    if ((r[v] += s.am(0, m, r, b, 0, u)) < m)
                        for (s.dlShiftTo(b, w),
                        r.subTo(w, r); r[v] < --m; )
                            r.subTo(w, r)
                }
                null != e && (r.drShiftTo(u, e),
                f != a && i.ZERO.subTo(e, e)),
                r.t = u,
                r.clamp(),
                h > 0 && r.rShiftTo(h, r),
                f < 0 && i.ZERO.subTo(r, r)
            }
        }
    }
    ,
    n.invDigit = function() {
        if (this.t < 1)
            return 0;
        var t = this[0];
        if (0 == (1 & t))
            return 0;
        var e = 3 & t;
        return (e = (e = (e = (e = e * (2 - (15 & t) * e) & 15) * (2 - (255 & t) * e) & 255) * (2 - ((65535 & t) * e & 65535)) & 65535) * (2 - t * e % this.DV) % this.DV) > 0 ? this.DV - e : -e
    }
    ,
    n.isEven = function() {
        return 0 == (this.t > 0 ? 1 & this[0] : this.s)
    }
    ,
    n.exp = function(t, e) {
        if (t > 4294967295 || t < 1)
            return i.ONE;
        var r = new i
          , n = new i
          , o = e.convert(this)
          , s = d(t) - 1;
        for (o.copyTo(r); --s >= 0; )
            if (e.sqrTo(r, n),
            (t & 1 << s) > 0)
                e.mulTo(n, o, r);
            else {
                var f = r;
                r = n,
                n = f
            }
        return e.revert(r)
    }
    ,
    n.toString = function(t) {
        var e;
        if (this.s < 0)
            return "-" + this.negate().toString(t);
        if (16 == t)
            e = 4;
        else if (8 == t)
            e = 3;
        else if (2 == t)
            e = 1;
        else if (32 == t)
            e = 5;
        else {
            if (4 != t)
                return this.toRadix(t);
            e = 2
        }
        var r, i = (1 << e) - 1, n = !1, o = "", s = this.t, f = this.DB - s * this.DB % e;
        if (s-- > 0)
            for (f < this.DB && (r = this[s] >> f) > 0 && (n = !0,
            o = u(r)); s >= 0; )
                f < e ? (r = (this[s] & (1 << f) - 1) << e - f,
                r |= this[--s] >> (f += this.DB - e)) : (r = this[s] >> (f -= e) & i,
                f <= 0 && (f += this.DB,
                --s)),
                r > 0 && (n = !0),
                n && (o += u(r));
        return n ? o : "0"
    }
    ,
    n.negate = function() {
        var t = new i;
        return i.ZERO.subTo(this, t),
        t
    }
    ,
    n.abs = function() {
        return this.s < 0 ? this.negate() : this
    }
    ,
    n.compareTo = function(t) {
        var e = this.s - t.s;
        if (0 != e)
            return e;
        var r = this.t;
        if (0 != (e = r - t.t))
            return this.s < 0 ? -e : e;
        for (; --r >= 0; )
            if (0 != (e = this[r] - t[r]))
                return e;
        return 0
    }
    ,
    n.bitLength = function() {
        return this.t <= 0 ? 0 : this.DB * (this.t - 1) + d(this[this.t - 1] ^ this.s & this.DM)
    }
    ,
    n.byteLength = function() {
        return this.bitLength() >> 3
    }
    ,
    n.mod = function(t) {
        var e = new i;
        return this.abs().divRemTo(t, null, e),
        this.s < 0 && e.compareTo(i.ZERO) > 0 && t.subTo(e, e),
        e
    }
    ,
    n.modPowInt = function(t, e) {
        var r;
        return r = t < 256 || e.isEven() ? new p(e) : new g(e),
        this.exp(t, r)
    }
    ,
    E.prototype.convert = T,
    E.prototype.revert = T,
    E.prototype.mulTo = function(t, e, r) {
        t.multiplyTo(e, r)
    }
    ,
    E.prototype.sqrTo = function(t, e) {
        t.squareTo(e)
    }
    ,
    S.prototype.convert = function(t) {
        if (t.s < 0 || t.t > 2 * this.m.t)
            return t.mod(this.m);
        if (t.compareTo(this.m) < 0)
            return t;
        var e = new i;
        return t.copyTo(e),
        this.reduce(e),
        e
    }
    ,
    S.prototype.revert = function(t) {
        return t
    }
    ,
    S.prototype.reduce = function(t) {
        for (t.drShiftTo(this.m.t - 1, this.r2),
        t.t > this.m.t + 1 && (t.t = this.m.t + 1,
        t.clamp()),
        this.mu.multiplyUpperTo(this.r2, this.m.t + 1, this.q3),
        this.m.multiplyLowerTo(this.q3, this.m.t + 1, this.r2); t.compareTo(this.r2) < 0; )
            t.dAddOffset(1, this.m.t + 1);
        for (t.subTo(this.r2, t); t.compareTo(this.m) >= 0; )
            t.subTo(this.m, t)
    }
    ,
    S.prototype.mulTo = function(t, e, r) {
        t.multiplyTo(e, r),
        this.reduce(r)
    }
    ,
    S.prototype.sqrTo = function(t, e) {
        t.squareTo(e),
        this.reduce(e)
    }
    ;
    var B = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997]
      , I = (1 << 26) / B[B.length - 1];
    n.chunkSize = function(t) {
        return Math.floor(Math.LN2 * this.DB / Math.log(t))
    }
    ,
    n.toRadix = function(t) {
        if (null == t && (t = 10),
        0 == this.signum() || t < 2 || t > 36)
            return "0";
        var e = this.chunkSize(t)
          , r = Math.pow(t, e)
          , n = c(r)
          , o = new i
          , s = new i
          , f = "";
        for (this.divRemTo(n, o, s); o.signum() > 0; )
            f = (r + s.intValue()).toString(t).substr(1) + f,
            o.divRemTo(n, o, s);
        return s.intValue().toString(t) + f
    }
    ,
    n.fromRadix = function(t, e) {
        this.fromInt(0),
        null == e && (e = 10);
        for (var r = this.chunkSize(e), n = Math.pow(e, r), o = !1, s = 0, f = 0, a = 0; a < t.length; ++a) {
            var h = l(t, a);
            h < 0 ? "-" == t.charAt(a) && 0 == this.signum() && (o = !0) : (f = e * f + h,
            ++s >= r && (this.dMultiply(n),
            this.dAddOffset(f, 0),
            s = 0,
            f = 0))
        }
        s > 0 && (this.dMultiply(Math.pow(e, s)),
        this.dAddOffset(f, 0)),
        o && i.ZERO.subTo(this, this)
    }
    ,
    n.fromNumber = function(t, e, r) {
        if ("number" == typeof e)
            if (t < 2)
                this.fromInt(1);
            else
                for (this.fromNumber(t, r),
                this.testBit(t - 1) || this.bitwiseTo(i.ONE.shiftLeft(t - 1), v, this),
                this.isEven() && this.dAddOffset(1, 0); !this.isProbablePrime(e); )
                    this.dAddOffset(2, 0),
                    this.bitLength() > t && this.subTo(i.ONE.shiftLeft(t - 1), this);
        else {
            var n = new Array
              , o = 7 & t;
            n.length = 1 + (t >> 3),
            e.nextBytes(n),
            o > 0 ? n[0] &= (1 << o) - 1 : n[0] = 0,
            this.fromString(n, 256)
        }
    }
    ,
    n.bitwiseTo = function(t, e, r) {
        var i, n, o = Math.min(t.t, this.t);
        for (i = 0; i < o; ++i)
            r[i] = e(this[i], t[i]);
        if (t.t < this.t) {
            for (n = t.s & this.DM,
            i = o; i < this.t; ++i)
                r[i] = e(this[i], n);
            r.t = this.t
        } else {
            for (n = this.s & this.DM,
            i = o; i < t.t; ++i)
                r[i] = e(n, t[i]);
            r.t = t.t
        }
        r.s = e(this.s, t.s),
        r.clamp()
    }
    ,
    n.changeBit = function(t, e) {
        var r = i.ONE.shiftLeft(t);
        return this.bitwiseTo(r, e, r),
        r
    }
    ,
    n.addTo = function(t, e) {
        for (var r = 0, i = 0, n = Math.min(t.t, this.t); r < n; )
            i += this[r] + t[r],
            e[r++] = i & this.DM,
            i >>= this.DB;
        if (t.t < this.t) {
            for (i += t.s; r < this.t; )
                i += this[r],
                e[r++] = i & this.DM,
                i >>= this.DB;
            i += this.s
        } else {
            for (i += this.s; r < t.t; )
                i += t[r],
                e[r++] = i & this.DM,
                i >>= this.DB;
            i += t.s
        }
        e.s = i < 0 ? -1 : 0,
        i > 0 ? e[r++] = i : i < -1 && (e[r++] = this.DV + i),
        e.t = r,
        e.clamp()
    }
    ,
    n.dMultiply = function(t) {
        this[this.t] = this.am(0, t - 1, this, 0, 0, this.t),
        ++this.t,
        this.clamp()
    }
    ,
    n.dAddOffset = function(t, e) {
        if (0 != t) {
            for (; this.t <= e; )
                this[this.t++] = 0;
            for (this[e] += t; this[e] >= this.DV; )
                this[e] -= this.DV,
                ++e >= this.t && (this[this.t++] = 0),
                ++this[e]
        }
    }
    ,
    n.multiplyLowerTo = function(t, e, r) {
        var i, n = Math.min(this.t + t.t, e);
        for (r.s = 0,
        r.t = n; n > 0; )
            r[--n] = 0;
        for (i = r.t - this.t; n < i; ++n)
            r[n + this.t] = this.am(0, t[n], r, n, 0, this.t);
        for (i = Math.min(t.t, e); n < i; ++n)
            this.am(0, t[n], r, n, 0, e - n);
        r.clamp()
    }
    ,
    n.multiplyUpperTo = function(t, e, r) {
        --e;
        var i = r.t = this.t + t.t - e;
        for (r.s = 0; --i >= 0; )
            r[i] = 0;
        for (i = Math.max(e - this.t, 0); i < t.t; ++i)
            r[this.t + i - e] = this.am(e - i, t[i], r, 0, 0, this.t + i - e);
        r.clamp(),
        r.drShiftTo(1, r)
    }
    ,
    n.modInt = function(t) {
        if (t <= 0)
            return 0;
        var e = this.DV % t
          , r = this.s < 0 ? t - 1 : 0;
        if (this.t > 0)
            if (0 == e)
                r = this[0] % t;
            else
                for (var i = this.t - 1; i >= 0; --i)
                    r = (e * r + this[i]) % t;
        return r
    }
    ,
    n.millerRabin = function(t) {
        var e = this.subtract(i.ONE)
          , r = e.getLowestSetBit();
        if (r <= 0)
            return !1;
        var n = e.shiftRight(r);
        (t = t + 1 >> 1) > B.length && (t = B.length);
        for (var o = new i(null), s = [], f = 0; f < t; ++f) {
            for (; h = B[Math.floor(Math.random() * B.length)],
            -1 != s.indexOf(h); )
                ;
            s.push(h),
            o.fromInt(h);
            var a = o.modPow(n, this);
            if (0 != a.compareTo(i.ONE) && 0 != a.compareTo(e)) {
                for (var h = 1; h++ < r && 0 != a.compareTo(e); )
                    if (0 == (a = a.modPowInt(2, this)).compareTo(i.ONE))
                        return !1;
                if (0 != a.compareTo(e))
                    return !1
            }
        }
        return !0
    }
    ,
    n.clone = function() {
        var t = new i;
        return this.copyTo(t),
        t
    }
    ,
    n.intValue = function() {
        if (this.s < 0) {
            if (1 == this.t)
                return this[0] - this.DV;
            if (0 == this.t)
                return -1
        } else {
            if (1 == this.t)
                return this[0];
            if (0 == this.t)
                return 0
        }
        return (this[1] & (1 << 32 - this.DB) - 1) << this.DB | this[0]
    }
    ,
    n.byteValue = function() {
        return 0 == this.t ? this.s : this[0] << 24 >> 24
    }
    ,
    n.shortValue = function() {
        return 0 == this.t ? this.s : this[0] << 16 >> 16
    }
    ,
    n.signum = function() {
        return this.s < 0 ? -1 : this.t <= 0 || 1 == this.t && this[0] <= 0 ? 0 : 1
    }
    ,
    n.toByteArray = function() {
        var t = this.t
          , e = new Array;
        e[0] = this.s;
        var r, i = this.DB - t * this.DB % 8, n = 0;
        if (t-- > 0)
            for (i < this.DB && (r = this[t] >> i) != (this.s & this.DM) >> i && (e[n++] = r | this.s << this.DB - i); t >= 0; )
                i < 8 ? (r = (this[t] & (1 << i) - 1) << 8 - i,
                r |= this[--t] >> (i += this.DB - 8)) : (r = this[t] >> (i -= 8) & 255,
                i <= 0 && (i += this.DB,
                --t)),
                0 != (128 & r) && (r |= -256),
                0 === n && (128 & this.s) != (128 & r) && ++n,
                (n > 0 || r != this.s) && (e[n++] = r);
        return e
    }
    ,
    n.equals = function(t) {
        return 0 == this.compareTo(t)
    }
    ,
    n.min = function(t) {
        return this.compareTo(t) < 0 ? this : t
    }
    ,
    n.max = function(t) {
        return this.compareTo(t) > 0 ? this : t
    }
    ,
    n.and = function(t) {
        var e = new i;
        return this.bitwiseTo(t, y, e),
        e
    }
    ,
    n.or = function(t) {
        var e = new i;
        return this.bitwiseTo(t, v, e),
        e
    }
    ,
    n.xor = function(t) {
        var e = new i;
        return this.bitwiseTo(t, b, e),
        e
    }
    ,
    n.andNot = function(t) {
        var e = new i;
        return this.bitwiseTo(t, w, e),
        e
    }
    ,
    n.not = function() {
        for (var t = new i, e = 0; e < this.t; ++e)
            t[e] = this.DM & ~this[e];
        return t.t = this.t,
        t.s = ~this.s,
        t
    }
    ,
    n.shiftLeft = function(t) {
        var e = new i;
        return t < 0 ? this.rShiftTo(-t, e) : this.lShiftTo(t, e),
        e
    }
    ,
    n.shiftRight = function(t) {
        var e = new i;
        return t < 0 ? this.lShiftTo(-t, e) : this.rShiftTo(t, e),
        e
    }
    ,
    n.getLowestSetBit = function() {
        for (var t = 0; t < this.t; ++t)
            if (0 != this[t])
                return t * this.DB + m(this[t]);
        return this.s < 0 ? this.t * this.DB : -1
    }
    ,
    n.bitCount = function() {
        for (var t = 0, e = this.s & this.DM, r = 0; r < this.t; ++r)
            t += _(this[r] ^ e);
        return t
    }
    ,
    n.testBit = function(t) {
        var e = Math.floor(t / this.DB);
        return e >= this.t ? 0 != this.s : 0 != (this[e] & 1 << t % this.DB)
    }
    ,
    n.setBit = function(t) {
        return this.changeBit(t, v)
    }
    ,
    n.clearBit = function(t) {
        return this.changeBit(t, w)
    }
    ,
    n.flipBit = function(t) {
        return this.changeBit(t, b)
    }
    ,
    n.add = function(t) {
        var e = new i;
        return this.addTo(t, e),
        e
    }
    ,
    n.subtract = function(t) {
        var e = new i;
        return this.subTo(t, e),
        e
    }
    ,
    n.multiply = function(t) {
        var e = new i;
        return this.multiplyTo(t, e),
        e
    }
    ,
    n.divide = function(t) {
        var e = new i;
        return this.divRemTo(t, e, null),
        e
    }
    ,
    n.remainder = function(t) {
        var e = new i;
        return this.divRemTo(t, null, e),
        e
    }
    ,
    n.divideAndRemainder = function(t) {
        var e = new i
          , r = new i;
        return this.divRemTo(t, e, r),
        new Array(e,r)
    }
    ,
    n.modPow = function(t, e) {
        var r, n, o = t.bitLength(), s = c(1);
        if (o <= 0)
            return s;
        r = o < 18 ? 1 : o < 48 ? 3 : o < 144 ? 4 : o < 768 ? 5 : 6,
        n = o < 8 ? new p(e) : e.isEven() ? new S(e) : new g(e);
        var f = new Array
          , a = 3
          , h = r - 1
          , u = (1 << r) - 1;
        if (f[1] = n.convert(this),
        r > 1) {
            var l = new i;
            for (n.sqrTo(f[1], l); a <= u; )
                f[a] = new i,
                n.mulTo(l, f[a - 2], f[a]),
                a += 2
        }
        var y, v, b = t.t - 1, w = !0, m = new i;
        for (o = d(t[b]) - 1; b >= 0; ) {
            for (o >= h ? y = t[b] >> o - h & u : (y = (t[b] & (1 << o + 1) - 1) << h - o,
            b > 0 && (y |= t[b - 1] >> this.DB + o - h)),
            a = r; 0 == (1 & y); )
                y >>= 1,
                --a;
            if ((o -= a) < 0 && (o += this.DB,
            --b),
            w)
                f[y].copyTo(s),
                w = !1;
            else {
                for (; a > 1; )
                    n.sqrTo(s, m),
                    n.sqrTo(m, s),
                    a -= 2;
                a > 0 ? n.sqrTo(s, m) : (v = s,
                s = m,
                m = v),
                n.mulTo(m, f[y], s)
            }
            for (; b >= 0 && 0 == (t[b] & 1 << o); )
                n.sqrTo(s, m),
                v = s,
                s = m,
                m = v,
                --o < 0 && (o = this.DB - 1,
                --b)
        }
        return n.revert(s)
    }
    ,
    n.modInverse = function(t) {
        var e = t.isEven();
        if (0 === this.signum())
            throw new Error("division by zero");
        if (this.isEven() && e || 0 == t.signum())
            return i.ZERO;
        for (var r = t.clone(), n = this.clone(), o = c(1), s = c(0), f = c(0), a = c(1); 0 != r.signum(); ) {
            for (; r.isEven(); )
                r.rShiftTo(1, r),
                e ? (o.isEven() && s.isEven() || (o.addTo(this, o),
                s.subTo(t, s)),
                o.rShiftTo(1, o)) : s.isEven() || s.subTo(t, s),
                s.rShiftTo(1, s);
            for (; n.isEven(); )
                n.rShiftTo(1, n),
                e ? (f.isEven() && a.isEven() || (f.addTo(this, f),
                a.subTo(t, a)),
                f.rShiftTo(1, f)) : a.isEven() || a.subTo(t, a),
                a.rShiftTo(1, a);
            r.compareTo(n) >= 0 ? (r.subTo(n, r),
            e && o.subTo(f, o),
            s.subTo(a, s)) : (n.subTo(r, n),
            e && f.subTo(o, f),
            a.subTo(s, a))
        }
        if (0 != n.compareTo(i.ONE))
            return i.ZERO;
        for (; a.compareTo(t) >= 0; )
            a.subTo(t, a);
        for (; a.signum() < 0; )
            a.addTo(t, a);
        return a
    }
    ,
    n.pow = function(t) {
        return this.exp(t, new E)
    }
    ,
    n.gcd = function(t) {
        var e = this.s < 0 ? this.negate() : this.clone()
          , r = t.s < 0 ? t.negate() : t.clone();
        if (e.compareTo(r) < 0) {
            var i = e;
            e = r,
            r = i
        }
        var n = e.getLowestSetBit()
          , o = r.getLowestSetBit();
        if (o < 0)
            return e;
        for (n < o && (o = n),
        o > 0 && (e.rShiftTo(o, e),
        r.rShiftTo(o, r)); e.signum() > 0; )
            (n = e.getLowestSetBit()) > 0 && e.rShiftTo(n, e),
            (n = r.getLowestSetBit()) > 0 && r.rShiftTo(n, r),
            e.compareTo(r) >= 0 ? (e.subTo(r, e),
            e.rShiftTo(1, e)) : (r.subTo(e, r),
            r.rShiftTo(1, r));
        return o > 0 && r.lShiftTo(o, r),
        r
    }
    ,
    n.isProbablePrime = function(t) {
        var e, r = this.abs();
        if (1 == r.t && r[0] <= B[B.length - 1]) {
            for (e = 0; e < B.length; ++e)
                if (r[0] == B[e])
                    return !0;
            return !1
        }
        if (r.isEven())
            return !1;
        for (e = 1; e < B.length; ) {
            for (var i = B[e], n = e + 1; n < B.length && i < I; )
                i *= B[n++];
            for (i = r.modInt(i); e < n; )
                if (i % B[e++] == 0)
                    return !1
        }
        return r.millerRabin(t)
    }
    ,
    n.square = function() {
        var t = new i;
        return this.squareTo(t),
        t
    }
    ,
    i.ZERO = c(0),
    i.ONE = c(1),
    i.valueOf = c,
    t.exports = i
}
, function(t, e, r) {
    var i = r(4)
      , n = r(5)
      , o = r(43);
    function s(t, e, r, i, s, f, a) {
        this.p = t,
        this.a = e,
        this.b = r,
        this.G = o.fromAffine(this, i, s),
        this.n = f,
        this.h = a,
        this.infinity = new o(this,null,null,n.ZERO),
        this.pOverFour = t.add(n.ONE).shiftRight(2),
        this.pLength = Math.floor((this.p.bitLength() + 7) / 8)
    }
    s.prototype.pointFromX = function(t, e) {
        var r = e.pow(3).add(this.a.multiply(e)).add(this.b).mod(this.p).modPow(this.pOverFour, this.p)
          , i = r;
        return r.isEven() ^ !t && (i = this.p.subtract(i)),
        o.fromAffine(this, e, i)
    }
    ,
    s.prototype.isInfinity = function(t) {
        return t === this.infinity || 0 === t.z.signum() && 0 !== t.y.signum()
    }
    ,
    s.prototype.isOnCurve = function(t) {
        if (this.isInfinity(t))
            return !0;
        var e = t.affineX
          , r = t.affineY
          , i = this.a
          , n = this.b
          , o = this.p;
        if (e.signum() < 0 || e.compareTo(o) >= 0)
            return !1;
        if (r.signum() < 0 || r.compareTo(o) >= 0)
            return !1;
        var s = r.square().mod(o)
          , f = e.pow(3).add(i.multiply(e)).add(n).mod(o);
        return s.equals(f)
    }
    ,
    s.prototype.validate = function(t) {
        i(!this.isInfinity(t), "Point is at infinity"),
        i(this.isOnCurve(t), "Point is not on the curve");
        var e = t.multiply(this.n);
        return i(this.isInfinity(e), "Point is not a scalar multiple of G"),
        !0
    }
    ,
    t.exports = s
}
, function(t, e, r) {
    "use strict";
    var i = r(1)
      , n = r(24)
      , o = r(47)
      , s = r(48)
      , f = r(6);
    function a(t) {
        f.call(this, "digest"),
        this._hash = t
    }
    i(a, f),
    a.prototype._update = function(t) {
        this._hash.update(t)
    }
    ,
    a.prototype._final = function() {
        return this._hash.digest()
    }
    ,
    t.exports = function(t) {
        return "md5" === (t = t.toLowerCase()) ? new n : "rmd160" === t || "ripemd160" === t ? new o : new a(s(t))
    }
}
, function(t, e, r) {
    "use strict";
    var i = r(2).Buffer
      , n = r(1)
      , o = r(42)
      , s = new Array(16)
      , f = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13]
      , a = [5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11]
      , h = [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6]
      , u = [8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11]
      , l = [0, 1518500249, 1859775393, 2400959708, 2840853838]
      , c = [1352829926, 1548603684, 1836072691, 2053994217, 0];
    function d() {
        o.call(this, 64),
        this._a = 1732584193,
        this._b = 4023233417,
        this._c = 2562383102,
        this._d = 271733878,
        this._e = 3285377520
    }
    function p(t, e) {
        return t << e | t >>> 32 - e
    }
    function g(t, e, r, i, n, o, s, f) {
        return p(t + (e ^ r ^ i) + o + s | 0, f) + n | 0
    }
    function y(t, e, r, i, n, o, s, f) {
        return p(t + (e & r | ~e & i) + o + s | 0, f) + n | 0
    }
    function v(t, e, r, i, n, o, s, f) {
        return p(t + ((e | ~r) ^ i) + o + s | 0, f) + n | 0
    }
    function b(t, e, r, i, n, o, s, f) {
        return p(t + (e & i | r & ~i) + o + s | 0, f) + n | 0
    }
    function w(t, e, r, i, n, o, s, f) {
        return p(t + (e ^ (r | ~i)) + o + s | 0, f) + n | 0
    }
    n(d, o),
    d.prototype._update = function() {
        for (var t = s, e = 0; e < 16; ++e)
            t[e] = this._block.readInt32LE(4 * e);
        for (var r = 0 | this._a, i = 0 | this._b, n = 0 | this._c, o = 0 | this._d, d = 0 | this._e, m = 0 | this._a, _ = 0 | this._b, E = 0 | this._c, T = 0 | this._d, S = 0 | this._e, B = 0; B < 80; B += 1) {
            var I, A;
            B < 16 ? (I = g(r, i, n, o, d, t[f[B]], l[0], h[B]),
            A = w(m, _, E, T, S, t[a[B]], c[0], u[B])) : B < 32 ? (I = y(r, i, n, o, d, t[f[B]], l[1], h[B]),
            A = b(m, _, E, T, S, t[a[B]], c[1], u[B])) : B < 48 ? (I = v(r, i, n, o, d, t[f[B]], l[2], h[B]),
            A = v(m, _, E, T, S, t[a[B]], c[2], u[B])) : B < 64 ? (I = b(r, i, n, o, d, t[f[B]], l[3], h[B]),
            A = y(m, _, E, T, S, t[a[B]], c[3], u[B])) : (I = w(r, i, n, o, d, t[f[B]], l[4], h[B]),
            A = g(m, _, E, T, S, t[a[B]], c[4], u[B])),
            r = d,
            d = o,
            o = p(n, 10),
            n = i,
            i = I,
            m = S,
            S = T,
            T = p(E, 10),
            E = _,
            _ = A
        }
        var k = this._b + n + T | 0;
        this._b = this._c + o + S | 0,
        this._c = this._d + d + m | 0,
        this._d = this._e + r + _ | 0,
        this._e = this._a + i + E | 0,
        this._a = k
    }
    ,
    d.prototype._digest = function() {
        this._block[this._blockOffset++] = 128,
        this._blockOffset > 56 && (this._block.fill(0, this._blockOffset, 64),
        this._update(),
        this._blockOffset = 0),
        this._block.fill(0, this._blockOffset, 56),
        this._block.writeUInt32LE(this._length[0], 56),
        this._block.writeUInt32LE(this._length[1], 60),
        this._update();
        var t = i.alloc ? i.alloc(20) : new i(20);
        return t.writeInt32LE(this._a, 0),
        t.writeInt32LE(this._b, 4),
        t.writeInt32LE(this._c, 8),
        t.writeInt32LE(this._d, 12),
        t.writeInt32LE(this._e, 16),
        t
    }
    ,
    t.exports = d
}
, function(t, e, r) {
    (e = t.exports = function(t) {
        t = t.toLowerCase();
        var r = e[t];
        if (!r)
            throw new Error(t + " is not supported (we accept pull requests)");
        return new r
    }
    ).sha = r(93),
    e.sha1 = r(94),
    e.sha224 = r(95),
    e.sha256 = r(49),
    e.sha384 = r(96),
    e.sha512 = r(50)
}
, function(t, e, r) {
    var i = r(1)
      , n = r(10)
      , o = r(0).Buffer
      , s = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298]
      , f = new Array(64);
    function a() {
        this.init(),
        this._w = f,
        n.call(this, 64, 56)
    }
    function h(t, e, r) {
        return r ^ t & (e ^ r)
    }
    function u(t, e, r) {
        return t & e | r & (t | e)
    }
    function l(t) {
        return (t >>> 2 | t << 30) ^ (t >>> 13 | t << 19) ^ (t >>> 22 | t << 10)
    }
    function c(t) {
        return (t >>> 6 | t << 26) ^ (t >>> 11 | t << 21) ^ (t >>> 25 | t << 7)
    }
    function d(t) {
        return (t >>> 7 | t << 25) ^ (t >>> 18 | t << 14) ^ t >>> 3
    }
    function p(t) {
        return (t >>> 17 | t << 15) ^ (t >>> 19 | t << 13) ^ t >>> 10
    }
    i(a, n),
    a.prototype.init = function() {
        return this._a = 1779033703,
        this._b = 3144134277,
        this._c = 1013904242,
        this._d = 2773480762,
        this._e = 1359893119,
        this._f = 2600822924,
        this._g = 528734635,
        this._h = 1541459225,
        this
    }
    ,
    a.prototype._update = function(t) {
        for (var e = this._w, r = 0 | this._a, i = 0 | this._b, n = 0 | this._c, o = 0 | this._d, f = 0 | this._e, a = 0 | this._f, g = 0 | this._g, y = 0 | this._h, v = 0; v < 16; ++v)
            e[v] = t.readInt32BE(4 * v);
        for (; v < 64; ++v)
            e[v] = p(e[v - 2]) + e[v - 7] + d(e[v - 15]) + e[v - 16] | 0;
        for (var b = 0; b < 64; ++b) {
            var w = y + c(f) + h(f, a, g) + s[b] + e[b] | 0
              , m = l(r) + u(r, i, n) | 0;
            y = g,
            g = a,
            a = f,
            f = o + w | 0,
            o = n,
            n = i,
            i = r,
            r = w + m | 0
        }
        this._a = r + this._a | 0,
        this._b = i + this._b | 0,
        this._c = n + this._c | 0,
        this._d = o + this._d | 0,
        this._e = f + this._e | 0,
        this._f = a + this._f | 0,
        this._g = g + this._g | 0,
        this._h = y + this._h | 0
    }
    ,
    a.prototype._hash = function() {
        var t = o.allocUnsafe(32);
        return t.writeInt32BE(this._a, 0),
        t.writeInt32BE(this._b, 4),
        t.writeInt32BE(this._c, 8),
        t.writeInt32BE(this._d, 12),
        t.writeInt32BE(this._e, 16),
        t.writeInt32BE(this._f, 20),
        t.writeInt32BE(this._g, 24),
        t.writeInt32BE(this._h, 28),
        t
    }
    ,
    t.exports = a
}
, function(t, e, r) {
    var i = r(1)
      , n = r(10)
      , o = r(0).Buffer
      , s = [1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591]
      , f = new Array(160);
    function a() {
        this.init(),
        this._w = f,
        n.call(this, 128, 112)
    }
    function h(t, e, r) {
        return r ^ t & (e ^ r)
    }
    function u(t, e, r) {
        return t & e | r & (t | e)
    }
    function l(t, e) {
        return (t >>> 28 | e << 4) ^ (e >>> 2 | t << 30) ^ (e >>> 7 | t << 25)
    }
    function c(t, e) {
        return (t >>> 14 | e << 18) ^ (t >>> 18 | e << 14) ^ (e >>> 9 | t << 23)
    }
    function d(t, e) {
        return (t >>> 1 | e << 31) ^ (t >>> 8 | e << 24) ^ t >>> 7
    }
    function p(t, e) {
        return (t >>> 1 | e << 31) ^ (t >>> 8 | e << 24) ^ (t >>> 7 | e << 25)
    }
    function g(t, e) {
        return (t >>> 19 | e << 13) ^ (e >>> 29 | t << 3) ^ t >>> 6
    }
    function y(t, e) {
        return (t >>> 19 | e << 13) ^ (e >>> 29 | t << 3) ^ (t >>> 6 | e << 26)
    }
    function v(t, e) {
        return t >>> 0 < e >>> 0 ? 1 : 0
    }
    i(a, n),
    a.prototype.init = function() {
        return this._ah = 1779033703,
        this._bh = 3144134277,
        this._ch = 1013904242,
        this._dh = 2773480762,
        this._eh = 1359893119,
        this._fh = 2600822924,
        this._gh = 528734635,
        this._hh = 1541459225,
        this._al = 4089235720,
        this._bl = 2227873595,
        this._cl = 4271175723,
        this._dl = 1595750129,
        this._el = 2917565137,
        this._fl = 725511199,
        this._gl = 4215389547,
        this._hl = 327033209,
        this
    }
    ,
    a.prototype._update = function(t) {
        for (var e = this._w, r = 0 | this._ah, i = 0 | this._bh, n = 0 | this._ch, o = 0 | this._dh, f = 0 | this._eh, a = 0 | this._fh, b = 0 | this._gh, w = 0 | this._hh, m = 0 | this._al, _ = 0 | this._bl, E = 0 | this._cl, T = 0 | this._dl, S = 0 | this._el, B = 0 | this._fl, I = 0 | this._gl, A = 0 | this._hl, k = 0; k < 32; k += 2)
            e[k] = t.readInt32BE(4 * k),
            e[k + 1] = t.readInt32BE(4 * k + 4);
        for (; k < 160; k += 2) {
            var U = e[k - 30]
              , x = e[k - 30 + 1]
              , L = d(U, x)
              , R = p(x, U)
              , D = g(U = e[k - 4], x = e[k - 4 + 1])
              , O = y(x, U)
              , C = e[k - 14]
              , M = e[k - 14 + 1]
              , N = e[k - 32]
              , P = e[k - 32 + 1]
              , F = R + M | 0
              , q = L + C + v(F, R) | 0;
            q = (q = q + D + v(F = F + O | 0, O) | 0) + N + v(F = F + P | 0, P) | 0,
            e[k] = q,
            e[k + 1] = F
        }
        for (var z = 0; z < 160; z += 2) {
            q = e[z],
            F = e[z + 1];
            var j = u(r, i, n)
              , V = u(m, _, E)
              , K = l(r, m)
              , H = l(m, r)
              , Y = c(f, S)
              , Z = c(S, f)
              , G = s[z]
              , W = s[z + 1]
              , X = h(f, a, b)
              , $ = h(S, B, I)
              , J = A + Z | 0
              , Q = w + Y + v(J, A) | 0;
            Q = (Q = (Q = Q + X + v(J = J + $ | 0, $) | 0) + G + v(J = J + W | 0, W) | 0) + q + v(J = J + F | 0, F) | 0;
            var tt = H + V | 0
              , et = K + j + v(tt, H) | 0;
            w = b,
            A = I,
            b = a,
            I = B,
            a = f,
            B = S,
            f = o + Q + v(S = T + J | 0, T) | 0,
            o = n,
            T = E,
            n = i,
            E = _,
            i = r,
            _ = m,
            r = Q + et + v(m = J + tt | 0, J) | 0
        }
        this._al = this._al + m | 0,
        this._bl = this._bl + _ | 0,
        this._cl = this._cl + E | 0,
        this._dl = this._dl + T | 0,
        this._el = this._el + S | 0,
        this._fl = this._fl + B | 0,
        this._gl = this._gl + I | 0,
        this._hl = this._hl + A | 0,
        this._ah = this._ah + r + v(this._al, m) | 0,
        this._bh = this._bh + i + v(this._bl, _) | 0,
        this._ch = this._ch + n + v(this._cl, E) | 0,
        this._dh = this._dh + o + v(this._dl, T) | 0,
        this._eh = this._eh + f + v(this._el, S) | 0,
        this._fh = this._fh + a + v(this._fl, B) | 0,
        this._gh = this._gh + b + v(this._gl, I) | 0,
        this._hh = this._hh + w + v(this._hl, A) | 0
    }
    ,
    a.prototype._hash = function() {
        var t = o.allocUnsafe(64);
        function e(e, r, i) {
            t.writeInt32BE(e, i),
            t.writeInt32BE(r, i + 4)
        }
        return e(this._ah, this._al, 0),
        e(this._bh, this._bl, 8),
        e(this._ch, this._cl, 16),
        e(this._dh, this._dl, 24),
        e(this._eh, this._el, 32),
        e(this._fh, this._fl, 40),
        e(this._gh, this._gl, 48),
        e(this._hh, this._hl, 56),
        t
    }
    ,
    t.exports = a
}
, function(t, e, r) {
    "use strict";
    (function(e) {
        var i = function() {
            return function(t, e) {
                if (Array.isArray(t))
                    return t;
                if (Symbol.iterator in Object(t))
                    return function(t, e) {
                        var r = []
                          , i = !0
                          , n = !1
                          , o = void 0;
                        try {
                            for (var s, f = t[Symbol.iterator](); !(i = (s = f.next()).done) && (r.push(s.value),
                            !e || r.length !== e); i = !0)
                                ;
                        } catch (t) {
                            n = !0,
                            o = t
                        } finally {
                            try {
                                !i && f.return && f.return()
                            } finally {
                                if (n)
                                    throw o
                            }
                        }
                        return r
                    }(t, e);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
        }()
          , n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        }
        : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }
          , o = r(103)
          , s = r(8)
          , f = r(25).getCurveByName("secp256k1")
          , a = r(4)
          , h = r(5)
          , u = r(16)
          , l = r(15)
          , c = r(19);
        function d(t, r, i) {
            function n(t, r) {
                var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "utf8";
                return "string" == typeof t && (t = e.from(t, i)),
                a(e.isBuffer(t), "data is a required String or Buffer"),
                c(t = s.sha256(t), r)
            }
            function c(i, n) {
                var s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "hex";
                if ("string" == typeof i && (i = e.from(i, s)),
                32 !== i.length || !e.isBuffer(i))
                    throw new Error("dataSha256: 32 bytes required");
                var h = l(n);
                return a(h, "pubkey required"),
                o.verify(f, i, {
                    r: t,
                    s: r
                }, h.Q)
            }
            function d(t) {
                var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "utf8";
                return "string" == typeof t && (t = e.from(t, r)),
                a(e.isBuffer(t), "data is a required String or Buffer"),
                p(t = s.sha256(t))
            }
            function p(n) {
                var s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "hex";
                if ("string" == typeof n && (n = e.from(n, s)),
                32 !== n.length || !e.isBuffer(n))
                    throw new Error("dataSha256: 32 byte String or buffer requred");
                var a = h.fromBuffer(n)
                  , u = i;
                u -= 27,
                u &= 3;
                var c = o.recoverPubKey(f, a, {
                    r: t,
                    s: r,
                    i: i
                }, u);
                return l.fromPoint(c)
            }
            function g() {
                var n;
                return (n = new e(65)).writeUInt8(i, 0),
                t.toBuffer(32).copy(n, 1),
                r.toBuffer(32).copy(n, 33),
                n
            }
            a.equal(null != t, !0, "Missing parameter"),
            a.equal(null != r, !0, "Missing parameter"),
            a.equal(null != i, !0, "Missing parameter");
            var y = void 0;
            return {
                r: t,
                s: r,
                i: i,
                toBuffer: g,
                verify: n,
                verifyHash: c,
                verifyHex: function(t, r) {
                    return console.log('Deprecated: use verify(data, pubkey, "hex")'),
                    n(e.from(t, "hex"), r)
                },
                recover: d,
                recoverHash: p,
                toHex: function() {
                    return g().toString("hex")
                },
                toString: function() {
                    return y || (y = "SIG_K1_" + u.checkEncode(g(), "K1"))
                },
                verifyBuffer: function() {
                    return console.log("Deprecated: use signature.verify instead (same arguments)"),
                    n.apply(void 0, arguments)
                },
                recoverPublicKey: function() {
                    return console.log("Deprecated: use signature.recover instead (same arguments)"),
                    d.apply(void 0, arguments)
                },
                recoverPublicKeyFromBuffer: function() {
                    return console.log("Deprecated: use signature.recoverHash instead (same arguments)"),
                    p.apply(void 0, arguments)
                }
            }
        }
        t.exports = d,
        d.sign = function(t, r) {
            var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "utf8";
            return "string" == typeof t && (t = e.from(t, i)),
            a(e.isBuffer(t), "data is a required String or Buffer"),
            t = s.sha256(t),
            d.signHash(t, r)
        }
        ,
        d.signHash = function(t, r) {
            var i, n, s, u, l, p, g, y = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "hex";
            if ("string" == typeof t && (t = e.from(t, y)),
            32 !== t.length || !e.isBuffer(t))
                throw new Error("dataSha256: 32 byte buffer requred");
            for (r = c(r),
            a(r, "privateKey required"),
            u = null,
            g = 0,
            n = h.fromBuffer(t); ; ) {
                if (p = (i = (s = o.sign(f, t, r.d, g++)).toDER())[5 + (l = i[3])],
                32 === l && 32 === p) {
                    u = o.calcPubKeyRecoveryParam(f, n, s, r.toPublic().Q),
                    u += 4,
                    u += 27;
                    break
                }
                g % 10 == 0 && console.log("WARN: " + g + " attempts to find canonical signature")
            }
            return d(s.r, s.s, u)
        }
        ,
        d.fromBuffer = function(t) {
            var r;
            return a(e.isBuffer(t), "Buffer is required"),
            a.equal(t.length, 65, "Invalid signature length"),
            r = t.readUInt8(0),
            a.equal(r - 27, r - 27 & 7, "Invalid signature parameter"),
            d(h.fromBuffer(t.slice(1, 33)), h.fromBuffer(t.slice(33)), r)
        }
        ,
        d.fromHex = function(t) {
            return d.fromBuffer(e.from(t, "hex"))
        }
        ,
        d.fromString = function(t) {
            try {
                return d.fromStringOrThrow(t)
            } catch (t) {
                return null
            }
        }
        ,
        d.fromStringOrThrow = function(t) {
            a.equal(void 0 === t ? "undefined" : n(t), "string", "signature");
            var e = t.match(/^SIG_([A-Za-z0-9]+)_([A-Za-z0-9]+)$/);
            a(null != e && 3 === e.length, "Expecting signature like: SIG_K1_base58signature..");
            var r = i(e, 3)
              , o = r[1]
              , s = r[2];
            return a.equal(o, "K1", "K1 signature expected"),
            d.fromBuffer(u.checkDecode(s, o))
        }
        ,
        d.from = function(t) {
            var r = t ? t.r && t.s && t.i ? t : "string" == typeof t && 130 === t.length ? d.fromHex(t) : "string" == typeof t && 130 !== t.length ? d.fromStringOrThrow(t) : e.isBuffer(t) ? d.fromBuffer(t) : null : t;
            if (!r)
                throw new TypeError("signature should be a hex string or buffer");
            return r
        }
    }
    ).call(this, r(2).Buffer)
}
, function(t, e, r) {
    "use strict";
    (function(e) {
        function r(t) {
            var e = t.toString().match(/function (.*?)\(/);
            return e ? e[1] : null
        }
        t.exports = function(t, i) {
            switch (t) {
            case "Array":
                if (Array.isArray(i))
                    return;
                break;
            case "Boolean":
                if ("boolean" == typeof i)
                    return;
                break;
            case "Buffer":
                if (e.isBuffer(i))
                    return;
                break;
            case "Number":
                if ("number" == typeof i)
                    return;
                break;
            case "String":
                if ("string" == typeof i)
                    return;
                break;
            default:
                if (r(i.constructor) === r(t))
                    return
            }
            throw new TypeError("Expected " + (r(t) || t) + ", got " + i)
        }
    }
    ).call(this, r(2).Buffer)
}
, , , , , , , function(t, e, r) {
    "use strict";
    (function(t) {
        var i = this && this.__awaiter || function(t, e, r, i) {
            return new (r || (r = Promise))(function(n, o) {
                function s(t) {
                    try {
                        a(i.next(t))
                    } catch (t) {
                        o(t)
                    }
                }
                function f(t) {
                    try {
                        a(i.throw(t))
                    } catch (t) {
                        o(t)
                    }
                }
                function a(t) {
                    t.done ? n(t.value) : new r(function(e) {
                        e(t.value)
                    }
                    ).then(s, f)
                }
                a((i = i.apply(t, e || [])).next())
            }
            )
        }
          , n = this && this.__generator || function(t, e) {
            var r, i, n, o, s = {
                label: 0,
                sent: function() {
                    if (1 & n[0])
                        throw n[1];
                    return n[1]
                },
                trys: [],
                ops: []
            };
            return o = {
                next: f(0),
                throw: f(1),
                return: f(2)
            },
            "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                return this
            }
            ),
            o;
            function f(o) {
                return function(f) {
                    return function(o) {
                        if (r)
                            throw new TypeError("Generator is already executing.");
                        for (; s; )
                            try {
                                if (r = 1,
                                i && (n = 2 & o[0] ? i.return : o[0] ? i.throw || ((n = i.return) && n.call(i),
                                0) : i.next) && !(n = n.call(i, o[1])).done)
                                    return n;
                                switch (i = 0,
                                n && (o = [2 & o[0], n.value]),
                                o[0]) {
                                case 0:
                                case 1:
                                    n = o;
                                    break;
                                case 4:
                                    return s.label++,
                                    {
                                        value: o[1],
                                        done: !1
                                    };
                                case 5:
                                    s.label++,
                                    i = o[1],
                                    o = [0];
                                    continue;
                                case 7:
                                    o = s.ops.pop(),
                                    s.trys.pop();
                                    continue;
                                default:
                                    if (!(n = (n = s.trys).length > 0 && n[n.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                        s = 0;
                                        continue
                                    }
                                    if (3 === o[0] && (!n || o[1] > n[0] && o[1] < n[3])) {
                                        s.label = o[1];
                                        break
                                    }
                                    if (6 === o[0] && s.label < n[1]) {
                                        s.label = n[1],
                                        n = o;
                                        break
                                    }
                                    if (n && s.label < n[2]) {
                                        s.label = n[2],
                                        s.ops.push(o);
                                        break
                                    }
                                    n[2] && s.ops.pop(),
                                    s.trys.pop();
                                    continue
                                }
                                o = e.call(t, s)
                            } catch (t) {
                                o = [6, t],
                                i = 0
                            } finally {
                                r = n = 0
                            }
                        if (5 & o[0])
                            throw o[1];
                        return {
                            value: o[0] ? o[1] : void 0,
                            done: !0
                        }
                    }([o, f])
                }
            }
        }
          , o = this && this.__values || function(t) {
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
        var s = r(62)
          , f = r(11)
          , a = function() {
            function e(t) {
                var e, r;
                this.keys = new Map,
                this.availableKeys = [];
                try {
                    for (var i = o(t), n = i.next(); !n.done; n = i.next()) {
                        var a = n.value
                          , h = f.convertLegacyPublicKey(s.PrivateKey.fromString(a).toPublic().toString());
                        this.keys.set(h, a),
                        this.availableKeys.push(h)
                    }
                } catch (t) {
                    e = {
                        error: t
                    }
                } finally {
                    try {
                        n && !n.done && (r = i.return) && r.call(i)
                    } finally {
                        if (e)
                            throw e.error
                    }
                }
            }
            return e.prototype.getAvailableKeys = function() {
                return i(this, void 0, void 0, function() {
                    return n(this, function(t) {
                        return [2, this.availableKeys]
                    })
                })
            }
            ,
            e.prototype.sign = function(e) {
                var r = e.chainId
                  , o = e.requiredKeys
                  , a = e.serializedTransaction;
                return i(this, void 0, void 0, function() {
                    var e, i = this;
                    return n(this, function(n) {
                        return e = t.concat([new t(r,"hex"), new t(a), new t(new Uint8Array(32))]),
                        [2, {
                            signatures: o.map(function(t) {
                                return s.Signature.sign(e, i.keys.get(f.convertLegacyPublicKey(t))).toString()
                            }),
                            serializedTransaction: a
                        }]
                    })
                })
            }
            ,
            e
        }();
        e.default = a
    }
    ).call(this, r(2).Buffer)
}
, function(t, e, r) {
    "use strict";
    e.byteLength = function(t) {
        var e = h(t)
          , r = e[0]
          , i = e[1];
        return 3 * (r + i) / 4 - i
    }
    ,
    e.toByteArray = function(t) {
        for (var e, r = h(t), i = r[0], s = r[1], f = new o(function(t, e, r) {
            return 3 * (e + r) / 4 - r
        }(0, i, s)), a = 0, u = s > 0 ? i - 4 : i, l = 0; l < u; l += 4)
            e = n[t.charCodeAt(l)] << 18 | n[t.charCodeAt(l + 1)] << 12 | n[t.charCodeAt(l + 2)] << 6 | n[t.charCodeAt(l + 3)],
            f[a++] = e >> 16 & 255,
            f[a++] = e >> 8 & 255,
            f[a++] = 255 & e;
        2 === s && (e = n[t.charCodeAt(l)] << 2 | n[t.charCodeAt(l + 1)] >> 4,
        f[a++] = 255 & e);
        1 === s && (e = n[t.charCodeAt(l)] << 10 | n[t.charCodeAt(l + 1)] << 4 | n[t.charCodeAt(l + 2)] >> 2,
        f[a++] = e >> 8 & 255,
        f[a++] = 255 & e);
        return f
    }
    ,
    e.fromByteArray = function(t) {
        for (var e, r = t.length, n = r % 3, o = [], s = 0, f = r - n; s < f; s += 16383)
            o.push(l(t, s, s + 16383 > f ? f : s + 16383));
        1 === n ? (e = t[r - 1],
        o.push(i[e >> 2] + i[e << 4 & 63] + "==")) : 2 === n && (e = (t[r - 2] << 8) + t[r - 1],
        o.push(i[e >> 10] + i[e >> 4 & 63] + i[e << 2 & 63] + "="));
        return o.join("")
    }
    ;
    for (var i = [], n = [], o = "undefined" != typeof Uint8Array ? Uint8Array : Array, s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", f = 0, a = s.length; f < a; ++f)
        i[f] = s[f],
        n[s.charCodeAt(f)] = f;
    function h(t) {
        var e = t.length;
        if (e % 4 > 0)
            throw new Error("Invalid string. Length must be a multiple of 4");
        var r = t.indexOf("=");
        return -1 === r && (r = e),
        [r, r === e ? 0 : 4 - r % 4]
    }
    function u(t) {
        return i[t >> 18 & 63] + i[t >> 12 & 63] + i[t >> 6 & 63] + i[63 & t]
    }
    function l(t, e, r) {
        for (var i, n = [], o = e; o < r; o += 3)
            i = (t[o] << 16 & 16711680) + (t[o + 1] << 8 & 65280) + (255 & t[o + 2]),
            n.push(u(i));
        return n.join("")
    }
    n["-".charCodeAt(0)] = 62,
    n["_".charCodeAt(0)] = 63
}
, function(t, e) {
    e.read = function(t, e, r, i, n) {
        var o, s, f = 8 * n - i - 1, a = (1 << f) - 1, h = a >> 1, u = -7, l = r ? n - 1 : 0, c = r ? -1 : 1, d = t[e + l];
        for (l += c,
        o = d & (1 << -u) - 1,
        d >>= -u,
        u += f; u > 0; o = 256 * o + t[e + l],
        l += c,
        u -= 8)
            ;
        for (s = o & (1 << -u) - 1,
        o >>= -u,
        u += i; u > 0; s = 256 * s + t[e + l],
        l += c,
        u -= 8)
            ;
        if (0 === o)
            o = 1 - h;
        else {
            if (o === a)
                return s ? NaN : 1 / 0 * (d ? -1 : 1);
            s += Math.pow(2, i),
            o -= h
        }
        return (d ? -1 : 1) * s * Math.pow(2, o - i)
    }
    ,
    e.write = function(t, e, r, i, n, o) {
        var s, f, a, h = 8 * o - n - 1, u = (1 << h) - 1, l = u >> 1, c = 23 === n ? Math.pow(2, -24) - Math.pow(2, -77) : 0, d = i ? 0 : o - 1, p = i ? 1 : -1, g = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0;
        for (e = Math.abs(e),
        isNaN(e) || e === 1 / 0 ? (f = isNaN(e) ? 1 : 0,
        s = u) : (s = Math.floor(Math.log(e) / Math.LN2),
        e * (a = Math.pow(2, -s)) < 1 && (s--,
        a *= 2),
        (e += s + l >= 1 ? c / a : c * Math.pow(2, 1 - l)) * a >= 2 && (s++,
        a /= 2),
        s + l >= u ? (f = 0,
        s = u) : s + l >= 1 ? (f = (e * a - 1) * Math.pow(2, n),
        s += l) : (f = e * Math.pow(2, l - 1) * Math.pow(2, n),
        s = 0)); n >= 8; t[r + d] = 255 & f,
        d += p,
        f /= 256,
        n -= 8)
            ;
        for (s = s << n | f,
        h += n; h > 0; t[r + d] = 255 & s,
        d += p,
        s /= 256,
        h -= 8)
            ;
        t[r + d - p] |= 128 * g
    }
}
, function(t, e, r) {
    "use strict";
    var i = r(63)
      , n = r(105)
      , o = Object.assign({}, i, n);
    t.exports = o
}
, function(t, e, r) {
    "use strict";
    r(28);
    var i = r(19)
      , n = r(15)
      , o = r(51)
      , s = (r(16),
    r(8))
      , f = {
        initialize: i.initialize,
        unsafeRandomKey: function() {
            return i.unsafeRandomKey().then(function(t) {
                return t.toString()
            })
        },
        randomKey: function(t) {
            return i.randomKey(t).then(function(t) {
                return t.toString()
            })
        },
        seedPrivate: function(t) {
            return i.fromSeed(t).toString()
        },
        privateToPublic: function(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "EOS";
            return i(t).toPublic().toString(e)
        },
        isValidPublic: function(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "EOS";
            return n.isValid(t, e)
        },
        isValidPrivate: function(t) {
            return i.isValid(t)
        },
        sign: function(t, e) {
            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "utf8";
            if (!0 === r)
                throw new TypeError("API changed, use signHash(..) instead");
            return !1 === r && console.log("Warning: ecc.sign hashData parameter was removed"),
            o.sign(t, e, r).toString()
        },
        signHash: function(t, e) {
            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "hex";
            return o.signHash(t, e, r).toString()
        },
        verify: function(t, e, r) {
            var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "utf8";
            if (!0 === i)
                throw new TypeError("API changed, use verifyHash(..) instead");
            return !1 === i && console.log("Warning: ecc.verify hashData parameter was removed"),
            (t = o.from(t)).verify(e, r, i)
        },
        verifyHash: function(t, e, r) {
            var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "hex";
            return (t = o.from(t)).verifyHash(e, r, i)
        },
        recover: function(t, e) {
            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "utf8";
            if (!0 === r)
                throw new TypeError("API changed, use recoverHash(signature, data) instead");
            return !1 === r && console.log("Warning: ecc.recover hashData parameter was removed"),
            (t = o.from(t)).recover(e, r).toString()
        },
        recoverHash: function(t, e) {
            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "hex";
            return (t = o.from(t)).recoverHash(e, r).toString()
        },
        sha256: function(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "hex";
            return s.sha256(t, e)
        }
    };
    t.exports = f
}
, function(t, e, r) {
    var i, n, o;
    /**
 * @license bytebuffer.js (c) 2015 Daniel Wirtz <dcode@dcode.io>
 * Backing buffer: ArrayBuffer, Accessor: Uint8Array
 * Released under the Apache License, Version 2.0
 * see: https://github.com/dcodeIO/bytebuffer.js for details
 */
    n = [r(65)],
    void 0 === (o = "function" == typeof (i = function(t) {
        "use strict";
        var e = function(t, r, n) {
            if (void 0 === t && (t = e.DEFAULT_CAPACITY),
            void 0 === r && (r = e.DEFAULT_ENDIAN),
            void 0 === n && (n = e.DEFAULT_NOASSERT),
            !n) {
                if ((t |= 0) < 0)
                    throw RangeError("Illegal capacity");
                r = !!r,
                n = !!n
            }
            this.buffer = 0 === t ? i : new ArrayBuffer(t),
            this.view = 0 === t ? null : new Uint8Array(this.buffer),
            this.offset = 0,
            this.markedOffset = -1,
            this.limit = t,
            this.littleEndian = r,
            this.noAssert = n
        };
        e.VERSION = "5.0.1",
        e.LITTLE_ENDIAN = !0,
        e.BIG_ENDIAN = !1,
        e.DEFAULT_CAPACITY = 16,
        e.DEFAULT_ENDIAN = e.BIG_ENDIAN,
        e.DEFAULT_NOASSERT = !1,
        e.Long = t || null;
        var r = e.prototype;
        r.__isByteBuffer__,
        Object.defineProperty(r, "__isByteBuffer__", {
            value: !0,
            enumerable: !1,
            configurable: !1
        });
        var i = new ArrayBuffer(0)
          , n = String.fromCharCode;
        function o(t) {
            var e = 0;
            return function() {
                return e < t.length ? t.charCodeAt(e++) : null
            }
        }
        function s() {
            var t = []
              , e = [];
            return function() {
                if (0 === arguments.length)
                    return e.join("") + n.apply(String, t);
                t.length + arguments.length > 1024 && (e.push(n.apply(String, t)),
                t.length = 0),
                Array.prototype.push.apply(t, arguments)
            }
        }
        function f(t, e, r, i, n) {
            var o, s, f = 8 * n - i - 1, a = (1 << f) - 1, h = a >> 1, u = -7, l = r ? n - 1 : 0, c = r ? -1 : 1, d = t[e + l];
            for (l += c,
            o = d & (1 << -u) - 1,
            d >>= -u,
            u += f; u > 0; o = 256 * o + t[e + l],
            l += c,
            u -= 8)
                ;
            for (s = o & (1 << -u) - 1,
            o >>= -u,
            u += i; u > 0; s = 256 * s + t[e + l],
            l += c,
            u -= 8)
                ;
            if (0 === o)
                o = 1 - h;
            else {
                if (o === a)
                    return s ? NaN : 1 / 0 * (d ? -1 : 1);
                s += Math.pow(2, i),
                o -= h
            }
            return (d ? -1 : 1) * s * Math.pow(2, o - i)
        }
        function a(t, e, r, i, n, o) {
            var s, f, a, h = 8 * o - n - 1, u = (1 << h) - 1, l = u >> 1, c = 23 === n ? Math.pow(2, -24) - Math.pow(2, -77) : 0, d = i ? 0 : o - 1, p = i ? 1 : -1, g = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0;
            for (e = Math.abs(e),
            isNaN(e) || e === 1 / 0 ? (f = isNaN(e) ? 1 : 0,
            s = u) : (s = Math.floor(Math.log(e) / Math.LN2),
            e * (a = Math.pow(2, -s)) < 1 && (s--,
            a *= 2),
            (e += s + l >= 1 ? c / a : c * Math.pow(2, 1 - l)) * a >= 2 && (s++,
            a /= 2),
            s + l >= u ? (f = 0,
            s = u) : s + l >= 1 ? (f = (e * a - 1) * Math.pow(2, n),
            s += l) : (f = e * Math.pow(2, l - 1) * Math.pow(2, n),
            s = 0)); n >= 8; t[r + d] = 255 & f,
            d += p,
            f /= 256,
            n -= 8)
                ;
            for (s = s << n | f,
            h += n; h > 0; t[r + d] = 255 & s,
            d += p,
            s /= 256,
            h -= 8)
                ;
            t[r + d - p] |= 128 * g
        }
        e.accessor = function() {
            return Uint8Array
        }
        ,
        e.allocate = function(t, r, i) {
            return new e(t,r,i)
        }
        ,
        e.concat = function(t, r, i, n) {
            "boolean" != typeof r && "string" == typeof r || (n = i,
            i = r,
            r = void 0);
            for (var o, s = 0, f = 0, a = t.length; f < a; ++f)
                e.isByteBuffer(t[f]) || (t[f] = e.wrap(t[f], r)),
                (o = t[f].limit - t[f].offset) > 0 && (s += o);
            if (0 === s)
                return new e(0,i,n);
            var h, u = new e(s,i,n);
            for (f = 0; f < a; )
                (o = (h = t[f++]).limit - h.offset) <= 0 || (u.view.set(h.view.subarray(h.offset, h.limit), u.offset),
                u.offset += o);
            return u.limit = u.offset,
            u.offset = 0,
            u
        }
        ,
        e.isByteBuffer = function(t) {
            return !0 === (t && t.__isByteBuffer__)
        }
        ,
        e.type = function() {
            return ArrayBuffer
        }
        ,
        e.wrap = function(t, i, n, o) {
            if ("string" != typeof i && (o = n,
            n = i,
            i = void 0),
            "string" == typeof t)
                switch (void 0 === i && (i = "utf8"),
                i) {
                case "base64":
                    return e.fromBase64(t, n);
                case "hex":
                    return e.fromHex(t, n);
                case "binary":
                    return e.fromBinary(t, n);
                case "utf8":
                    return e.fromUTF8(t, n);
                case "debug":
                    return e.fromDebug(t, n);
                default:
                    throw Error("Unsupported encoding: " + i)
                }
            if (null === t || "object" != typeof t)
                throw TypeError("Illegal buffer");
            var s;
            if (e.isByteBuffer(t))
                return (s = r.clone.call(t)).markedOffset = -1,
                s;
            if (t instanceof Uint8Array)
                s = new e(0,n,o),
                t.length > 0 && (s.buffer = t.buffer,
                s.offset = t.byteOffset,
                s.limit = t.byteOffset + t.byteLength,
                s.view = new Uint8Array(t.buffer));
            else if (t instanceof ArrayBuffer)
                s = new e(0,n,o),
                t.byteLength > 0 && (s.buffer = t,
                s.offset = 0,
                s.limit = t.byteLength,
                s.view = t.byteLength > 0 ? new Uint8Array(t) : null);
            else {
                if ("[object Array]" !== Object.prototype.toString.call(t))
                    throw TypeError("Illegal buffer");
                (s = new e(t.length,n,o)).limit = t.length;
                for (var f = 0; f < t.length; ++f)
                    s.view[f] = t[f]
            }
            return s
        }
        ,
        r.writeBitSet = function(t, e) {
            var r = void 0 === e;
            if (r && (e = this.offset),
            !this.noAssert) {
                if (!(t instanceof Array))
                    throw TypeError("Illegal BitSet: Not an array");
                if ("number" != typeof e || e % 1 != 0)
                    throw TypeError("Illegal offset: " + e + " (not an integer)");
                if ((e >>>= 0) < 0 || e + 0 > this.buffer.byteLength)
                    throw RangeError("Illegal offset: 0 <= " + e + " (+0) <= " + this.buffer.byteLength)
            }
            var i, n = e, o = t.length, s = o >> 3, f = 0;
            for (e += this.writeVarint32(o, e); s--; )
                i = 1 & !!t[f++] | (1 & !!t[f++]) << 1 | (1 & !!t[f++]) << 2 | (1 & !!t[f++]) << 3 | (1 & !!t[f++]) << 4 | (1 & !!t[f++]) << 5 | (1 & !!t[f++]) << 6 | (1 & !!t[f++]) << 7,
                this.writeByte(i, e++);
            if (f < o) {
                var a = 0;
                for (i = 0; f < o; )
                    i |= (1 & !!t[f++]) << a++;
                this.writeByte(i, e++)
            }
            return r ? (this.offset = e,
            this) : e - n
        }
        ,
        r.readBitSet = function(t) {
            var e = void 0 === t;
            e && (t = this.offset);
            var r, i = this.readVarint32(t), n = i.value, o = n >> 3, s = 0, f = [];
            for (t += i.length; o--; )
                r = this.readByte(t++),
                f[s++] = !!(1 & r),
                f[s++] = !!(2 & r),
                f[s++] = !!(4 & r),
                f[s++] = !!(8 & r),
                f[s++] = !!(16 & r),
                f[s++] = !!(32 & r),
                f[s++] = !!(64 & r),
                f[s++] = !!(128 & r);
            if (s < n) {
                var a = 0;
                for (r = this.readByte(t++); s < n; )
                    f[s++] = !!(r >> a++ & 1)
            }
            return e && (this.offset = t),
            f
        }
        ,
        r.readBytes = function(t, e) {
            var r = void 0 === e;
            if (r && (e = this.offset),
            !this.noAssert) {
                if ("number" != typeof e || e % 1 != 0)
                    throw TypeError("Illegal offset: " + e + " (not an integer)");
                if ((e >>>= 0) < 0 || e + t > this.buffer.byteLength)
                    throw RangeError("Illegal offset: 0 <= " + e + " (+" + t + ") <= " + this.buffer.byteLength)
            }
            var i = this.slice(e, e + t);
            return r && (this.offset += t),
            i
        }
        ,
        r.writeBytes = r.append,
        r.writeInt8 = function(t, e) {
            var r = void 0 === e;
            if (r && (e = this.offset),
            !this.noAssert) {
                if ("number" != typeof t || t % 1 != 0)
                    throw TypeError("Illegal value: " + t + " (not an integer)");
                if (t |= 0,
                "number" != typeof e || e % 1 != 0)
                    throw TypeError("Illegal offset: " + e + " (not an integer)");
                if ((e >>>= 0) < 0 || e + 0 > this.buffer.byteLength)
                    throw RangeError("Illegal offset: 0 <= " + e + " (+0) <= " + this.buffer.byteLength)
            }
            e += 1;
            var i = this.buffer.byteLength;
            return e > i && this.resize((i *= 2) > e ? i : e),
            e -= 1,
            this.view[e] = t,
            r && (this.offset += 1),
            this
        }
        ,
        r.writeByte = r.writeInt8,
        r.readInt8 = function(t) {
            var e = void 0 === t;
            if (e && (t = this.offset),
            !this.noAssert) {
                if ("number" != typeof t || t % 1 != 0)
                    throw TypeError("Illegal offset: " + t + " (not an integer)");
                if ((t >>>= 0) < 0 || t + 1 > this.buffer.byteLength)
                    throw RangeError("Illegal offset: 0 <= " + t + " (+1) <= " + this.buffer.byteLength)
            }
            var r = this.view[t];
            return 128 == (128 & r) && (r = -(255 - r + 1)),
            e && (this.offset += 1),
            r
        }
        ,
        r.readByte = r.readInt8,
        r.writeUint8 = function(t, e) {
            var r = void 0 === e;
            if (r && (e = this.offset),
            !this.noAssert) {
                if ("number" != typeof t || t % 1 != 0)
                    throw TypeError("Illegal value: " + t + " (not an integer)");
                if (t >>>= 0,
                "number" != typeof e || e % 1 != 0)
                    throw TypeError("Illegal offset: " + e + " (not an integer)");
                if ((e >>>= 0) < 0 || e + 0 > this.buffer.byteLength)
                    throw RangeError("Illegal offset: 0 <= " + e + " (+0) <= " + this.buffer.byteLength)
            }
            e += 1;
            var i = this.buffer.byteLength;
            return e > i && this.resize((i *= 2) > e ? i : e),
            e -= 1,
            this.view[e] = t,
            r && (this.offset += 1),
            this
        }
        ,
        r.writeUInt8 = r.writeUint8,
        r.readUint8 = function(t) {
            var e = void 0 === t;
            if (e && (t = this.offset),
            !this.noAssert) {
                if ("number" != typeof t || t % 1 != 0)
                    throw TypeError("Illegal offset: " + t + " (not an integer)");
                if ((t >>>= 0) < 0 || t + 1 > this.buffer.byteLength)
                    throw RangeError("Illegal offset: 0 <= " + t + " (+1) <= " + this.buffer.byteLength)
            }
            var r = this.view[t];
            return e && (this.offset += 1),
            r
        }
        ,
        r.readUInt8 = r.readUint8,
        r.writeInt16 = function(t, e) {
            var r = void 0 === e;
            if (r && (e = this.offset),
            !this.noAssert) {
                if ("number" != typeof t || t % 1 != 0)
                    throw TypeError("Illegal value: " + t + " (not an integer)");
                if (t |= 0,
                "number" != typeof e || e % 1 != 0)
                    throw TypeError("Illegal offset: " + e + " (not an integer)");
                if ((e >>>= 0) < 0 || e + 0 > this.buffer.byteLength)
                    throw RangeError("Illegal offset: 0 <= " + e + " (+0) <= " + this.buffer.byteLength)
            }
            e += 2;
            var i = this.buffer.byteLength;
            return e > i && this.resize((i *= 2) > e ? i : e),
            e -= 2,
            this.littleEndian ? (this.view[e + 1] = (65280 & t) >>> 8,
            this.view[e] = 255 & t) : (this.view[e] = (65280 & t) >>> 8,
            this.view[e + 1] = 255 & t),
            r && (this.offset += 2),
            this
        }
        ,
        r.writeShort = r.writeInt16,
        r.readInt16 = function(t) {
            var e = void 0 === t;
            if (e && (t = this.offset),
            !this.noAssert) {
                if ("number" != typeof t || t % 1 != 0)
                    throw TypeError("Illegal offset: " + t + " (not an integer)");
                if ((t >>>= 0) < 0 || t + 2 > this.buffer.byteLength)
                    throw RangeError("Illegal offset: 0 <= " + t + " (+2) <= " + this.buffer.byteLength)
            }
            var r = 0;
            return this.littleEndian ? (r = this.view[t],
            r |= this.view[t + 1] << 8) : (r = this.view[t] << 8,
            r |= this.view[t + 1]),
            32768 == (32768 & r) && (r = -(65535 - r + 1)),
            e && (this.offset += 2),
            r
        }
        ,
        r.readShort = r.readInt16,
        r.writeUint16 = function(t, e) {
            var r = void 0 === e;
            if (r && (e = this.offset),
            !this.noAssert) {
                if ("number" != typeof t || t % 1 != 0)
                    throw TypeError("Illegal value: " + t + " (not an integer)");
                if (t >>>= 0,
                "number" != typeof e || e % 1 != 0)
                    throw TypeError("Illegal offset: " + e + " (not an integer)");
                if ((e >>>= 0) < 0 || e + 0 > this.buffer.byteLength)
                    throw RangeError("Illegal offset: 0 <= " + e + " (+0) <= " + this.buffer.byteLength)
            }
            e += 2;
            var i = this.buffer.byteLength;
            return e > i && this.resize((i *= 2) > e ? i : e),
            e -= 2,
            this.littleEndian ? (this.view[e + 1] = (65280 & t) >>> 8,
            this.view[e] = 255 & t) : (this.view[e] = (65280 & t) >>> 8,
            this.view[e + 1] = 255 & t),
            r && (this.offset += 2),
            this
        }
        ,
        r.writeUInt16 = r.writeUint16,
        r.readUint16 = function(t) {
            var e = void 0 === t;
            if (e && (t = this.offset),
            !this.noAssert) {
                if ("number" != typeof t || t % 1 != 0)
                    throw TypeError("Illegal offset: " + t + " (not an integer)");
                if ((t >>>= 0) < 0 || t + 2 > this.buffer.byteLength)
                    throw RangeError("Illegal offset: 0 <= " + t + " (+2) <= " + this.buffer.byteLength)
            }
            var r = 0;
            return this.littleEndian ? (r = this.view[t],
            r |= this.view[t + 1] << 8) : (r = this.view[t] << 8,
            r |= this.view[t + 1]),
            e && (this.offset += 2),
            r
        }
        ,
        r.readUInt16 = r.readUint16,
        r.writeInt32 = function(t, e) {
            var r = void 0 === e;
            if (r && (e = this.offset),
            !this.noAssert) {
                if ("number" != typeof t || t % 1 != 0)
                    throw TypeError("Illegal value: " + t + " (not an integer)");
                if (t |= 0,
                "number" != typeof e || e % 1 != 0)
                    throw TypeError("Illegal offset: " + e + " (not an integer)");
                if ((e >>>= 0) < 0 || e + 0 > this.buffer.byteLength)
                    throw RangeError("Illegal offset: 0 <= " + e + " (+0) <= " + this.buffer.byteLength)
            }
            e += 4;
            var i = this.buffer.byteLength;
            return e > i && this.resize((i *= 2) > e ? i : e),
            e -= 4,
            this.littleEndian ? (this.view[e + 3] = t >>> 24 & 255,
            this.view[e + 2] = t >>> 16 & 255,
            this.view[e + 1] = t >>> 8 & 255,
            this.view[e] = 255 & t) : (this.view[e] = t >>> 24 & 255,
            this.view[e + 1] = t >>> 16 & 255,
            this.view[e + 2] = t >>> 8 & 255,
            this.view[e + 3] = 255 & t),
            r && (this.offset += 4),
            this
        }
        ,
        r.writeInt = r.writeInt32,
        r.readInt32 = function(t) {
            var e = void 0 === t;
            if (e && (t = this.offset),
            !this.noAssert) {
                if ("number" != typeof t || t % 1 != 0)
                    throw TypeError("Illegal offset: " + t + " (not an integer)");
                if ((t >>>= 0) < 0 || t + 4 > this.buffer.byteLength)
                    throw RangeError("Illegal offset: 0 <= " + t + " (+4) <= " + this.buffer.byteLength)
            }
            var r = 0;
            return this.littleEndian ? (r = this.view[t + 2] << 16,
            r |= this.view[t + 1] << 8,
            r |= this.view[t],
            r += this.view[t + 3] << 24 >>> 0) : (r = this.view[t + 1] << 16,
            r |= this.view[t + 2] << 8,
            r |= this.view[t + 3],
            r += this.view[t] << 24 >>> 0),
            r |= 0,
            e && (this.offset += 4),
            r
        }
        ,
        r.readInt = r.readInt32,
        r.writeUint32 = function(t, e) {
            var r = void 0 === e;
            if (r && (e = this.offset),
            !this.noAssert) {
                if ("number" != typeof t || t % 1 != 0)
                    throw TypeError("Illegal value: " + t + " (not an integer)");
                if (t >>>= 0,
                "number" != typeof e || e % 1 != 0)
                    throw TypeError("Illegal offset: " + e + " (not an integer)");
                if ((e >>>= 0) < 0 || e + 0 > this.buffer.byteLength)
                    throw RangeError("Illegal offset: 0 <= " + e + " (+0) <= " + this.buffer.byteLength)
            }
            e += 4;
            var i = this.buffer.byteLength;
            return e > i && this.resize((i *= 2) > e ? i : e),
            e -= 4,
            this.littleEndian ? (this.view[e + 3] = t >>> 24 & 255,
            this.view[e + 2] = t >>> 16 & 255,
            this.view[e + 1] = t >>> 8 & 255,
            this.view[e] = 255 & t) : (this.view[e] = t >>> 24 & 255,
            this.view[e + 1] = t >>> 16 & 255,
            this.view[e + 2] = t >>> 8 & 255,
            this.view[e + 3] = 255 & t),
            r && (this.offset += 4),
            this
        }
        ,
        r.writeUInt32 = r.writeUint32,
        r.readUint32 = function(t) {
            var e = void 0 === t;
            if (e && (t = this.offset),
            !this.noAssert) {
                if ("number" != typeof t || t % 1 != 0)
                    throw TypeError("Illegal offset: " + t + " (not an integer)");
                if ((t >>>= 0) < 0 || t + 4 > this.buffer.byteLength)
                    throw RangeError("Illegal offset: 0 <= " + t + " (+4) <= " + this.buffer.byteLength)
            }
            var r = 0;
            return this.littleEndian ? (r = this.view[t + 2] << 16,
            r |= this.view[t + 1] << 8,
            r |= this.view[t],
            r += this.view[t + 3] << 24 >>> 0) : (r = this.view[t + 1] << 16,
            r |= this.view[t + 2] << 8,
            r |= this.view[t + 3],
            r += this.view[t] << 24 >>> 0),
            e && (this.offset += 4),
            r
        }
        ,
        r.readUInt32 = r.readUint32,
        t && (r.writeInt64 = function(e, r) {
            var i = void 0 === r;
            if (i && (r = this.offset),
            !this.noAssert) {
                if ("number" == typeof e)
                    e = t.fromNumber(e);
                else if ("string" == typeof e)
                    e = t.fromString(e);
                else if (!(e && e instanceof t))
                    throw TypeError("Illegal value: " + e + " (not an integer or Long)");
                if ("number" != typeof r || r % 1 != 0)
                    throw TypeError("Illegal offset: " + r + " (not an integer)");
                if ((r >>>= 0) < 0 || r + 0 > this.buffer.byteLength)
                    throw RangeError("Illegal offset: 0 <= " + r + " (+0) <= " + this.buffer.byteLength)
            }
            "number" == typeof e ? e = t.fromNumber(e) : "string" == typeof e && (e = t.fromString(e)),
            r += 8;
            var n = this.buffer.byteLength;
            r > n && this.resize((n *= 2) > r ? n : r),
            r -= 8;
            var o = e.low
              , s = e.high;
            return this.littleEndian ? (this.view[r + 3] = o >>> 24 & 255,
            this.view[r + 2] = o >>> 16 & 255,
            this.view[r + 1] = o >>> 8 & 255,
            this.view[r] = 255 & o,
            r += 4,
            this.view[r + 3] = s >>> 24 & 255,
            this.view[r + 2] = s >>> 16 & 255,
            this.view[r + 1] = s >>> 8 & 255,
            this.view[r] = 255 & s) : (this.view[r] = s >>> 24 & 255,
            this.view[r + 1] = s >>> 16 & 255,
            this.view[r + 2] = s >>> 8 & 255,
            this.view[r + 3] = 255 & s,
            r += 4,
            this.view[r] = o >>> 24 & 255,
            this.view[r + 1] = o >>> 16 & 255,
            this.view[r + 2] = o >>> 8 & 255,
            this.view[r + 3] = 255 & o),
            i && (this.offset += 8),
            this
        }
        ,
        r.writeLong = r.writeInt64,
        r.readInt64 = function(e) {
            var r = void 0 === e;
            if (r && (e = this.offset),
            !this.noAssert) {
                if ("number" != typeof e || e % 1 != 0)
                    throw TypeError("Illegal offset: " + e + " (not an integer)");
                if ((e >>>= 0) < 0 || e + 8 > this.buffer.byteLength)
                    throw RangeError("Illegal offset: 0 <= " + e + " (+8) <= " + this.buffer.byteLength)
            }
            var i = 0
              , n = 0;
            this.littleEndian ? (i = this.view[e + 2] << 16,
            i |= this.view[e + 1] << 8,
            i |= this.view[e],
            i += this.view[e + 3] << 24 >>> 0,
            e += 4,
            n = this.view[e + 2] << 16,
            n |= this.view[e + 1] << 8,
            n |= this.view[e],
            n += this.view[e + 3] << 24 >>> 0) : (n = this.view[e + 1] << 16,
            n |= this.view[e + 2] << 8,
            n |= this.view[e + 3],
            n += this.view[e] << 24 >>> 0,
            e += 4,
            i = this.view[e + 1] << 16,
            i |= this.view[e + 2] << 8,
            i |= this.view[e + 3],
            i += this.view[e] << 24 >>> 0);
            var o = new t(i,n,!1);
            return r && (this.offset += 8),
            o
        }
        ,
        r.readLong = r.readInt64,
        r.writeUint64 = function(e, r) {
            var i = void 0 === r;
            if (i && (r = this.offset),
            !this.noAssert) {
                if ("number" == typeof e)
                    e = t.fromNumber(e);
                else if ("string" == typeof e)
                    e = t.fromString(e);
                else if (!(e && e instanceof t))
                    throw TypeError("Illegal value: " + e + " (not an integer or Long)");
                if ("number" != typeof r || r % 1 != 0)
                    throw TypeError("Illegal offset: " + r + " (not an integer)");
                if ((r >>>= 0) < 0 || r + 0 > this.buffer.byteLength)
                    throw RangeError("Illegal offset: 0 <= " + r + " (+0) <= " + this.buffer.byteLength)
            }
            "number" == typeof e ? e = t.fromNumber(e) : "string" == typeof e && (e = t.fromString(e)),
            r += 8;
            var n = this.buffer.byteLength;
            r > n && this.resize((n *= 2) > r ? n : r),
            r -= 8;
            var o = e.low
              , s = e.high;
            return this.littleEndian ? (this.view[r + 3] = o >>> 24 & 255,
            this.view[r + 2] = o >>> 16 & 255,
            this.view[r + 1] = o >>> 8 & 255,
            this.view[r] = 255 & o,
            r += 4,
            this.view[r + 3] = s >>> 24 & 255,
            this.view[r + 2] = s >>> 16 & 255,
            this.view[r + 1] = s >>> 8 & 255,
            this.view[r] = 255 & s) : (this.view[r] = s >>> 24 & 255,
            this.view[r + 1] = s >>> 16 & 255,
            this.view[r + 2] = s >>> 8 & 255,
            this.view[r + 3] = 255 & s,
            r += 4,
            this.view[r] = o >>> 24 & 255,
            this.view[r + 1] = o >>> 16 & 255,
            this.view[r + 2] = o >>> 8 & 255,
            this.view[r + 3] = 255 & o),
            i && (this.offset += 8),
            this
        }
        ,
        r.writeUInt64 = r.writeUint64,
        r.readUint64 = function(e) {
            var r = void 0 === e;
            if (r && (e = this.offset),
            !this.noAssert) {
                if ("number" != typeof e || e % 1 != 0)
                    throw TypeError("Illegal offset: " + e + " (not an integer)");
                if ((e >>>= 0) < 0 || e + 8 > this.buffer.byteLength)
                    throw RangeError("Illegal offset: 0 <= " + e + " (+8) <= " + this.buffer.byteLength)
            }
            var i = 0
              , n = 0;
            this.littleEndian ? (i = this.view[e + 2] << 16,
            i |= this.view[e + 1] << 8,
            i |= this.view[e],
            i += this.view[e + 3] << 24 >>> 0,
            e += 4,
            n = this.view[e + 2] << 16,
            n |= this.view[e + 1] << 8,
            n |= this.view[e],
            n += this.view[e + 3] << 24 >>> 0) : (n = this.view[e + 1] << 16,
            n |= this.view[e + 2] << 8,
            n |= this.view[e + 3],
            n += this.view[e] << 24 >>> 0,
            e += 4,
            i = this.view[e + 1] << 16,
            i |= this.view[e + 2] << 8,
            i |= this.view[e + 3],
            i += this.view[e] << 24 >>> 0);
            var o = new t(i,n,!0);
            return r && (this.offset += 8),
            o
        }
        ,
        r.readUInt64 = r.readUint64),
        r.writeFloat32 = function(t, e) {
            var r = void 0 === e;
            if (r && (e = this.offset),
            !this.noAssert) {
                if ("number" != typeof t)
                    throw TypeError("Illegal value: " + t + " (not a number)");
                if ("number" != typeof e || e % 1 != 0)
                    throw TypeError("Illegal offset: " + e + " (not an integer)");
                if ((e >>>= 0) < 0 || e + 0 > this.buffer.byteLength)
                    throw RangeError("Illegal offset: 0 <= " + e + " (+0) <= " + this.buffer.byteLength)
            }
            e += 4;
            var i = this.buffer.byteLength;
            return e > i && this.resize((i *= 2) > e ? i : e),
            e -= 4,
            a(this.view, t, e, this.littleEndian, 23, 4),
            r && (this.offset += 4),
            this
        }
        ,
        r.writeFloat = r.writeFloat32,
        r.readFloat32 = function(t) {
            var e = void 0 === t;
            if (e && (t = this.offset),
            !this.noAssert) {
                if ("number" != typeof t || t % 1 != 0)
                    throw TypeError("Illegal offset: " + t + " (not an integer)");
                if ((t >>>= 0) < 0 || t + 4 > this.buffer.byteLength)
                    throw RangeError("Illegal offset: 0 <= " + t + " (+4) <= " + this.buffer.byteLength)
            }
            var r = f(this.view, t, this.littleEndian, 23, 4);
            return e && (this.offset += 4),
            r
        }
        ,
        r.readFloat = r.readFloat32,
        r.writeFloat64 = function(t, e) {
            var r = void 0 === e;
            if (r && (e = this.offset),
            !this.noAssert) {
                if ("number" != typeof t)
                    throw TypeError("Illegal value: " + t + " (not a number)");
                if ("number" != typeof e || e % 1 != 0)
                    throw TypeError("Illegal offset: " + e + " (not an integer)");
                if ((e >>>= 0) < 0 || e + 0 > this.buffer.byteLength)
                    throw RangeError("Illegal offset: 0 <= " + e + " (+0) <= " + this.buffer.byteLength)
            }
            e += 8;
            var i = this.buffer.byteLength;
            return e > i && this.resize((i *= 2) > e ? i : e),
            e -= 8,
            a(this.view, t, e, this.littleEndian, 52, 8),
            r && (this.offset += 8),
            this
        }
        ,
        r.writeDouble = r.writeFloat64,
        r.readFloat64 = function(t) {
            var e = void 0 === t;
            if (e && (t = this.offset),
            !this.noAssert) {
                if ("number" != typeof t || t % 1 != 0)
                    throw TypeError("Illegal offset: " + t + " (not an integer)");
                if ((t >>>= 0) < 0 || t + 8 > this.buffer.byteLength)
                    throw RangeError("Illegal offset: 0 <= " + t + " (+8) <= " + this.buffer.byteLength)
            }
            var r = f(this.view, t, this.littleEndian, 52, 8);
            return e && (this.offset += 8),
            r
        }
        ,
        r.readDouble = r.readFloat64,
        e.MAX_VARINT32_BYTES = 5,
        e.calculateVarint32 = function(t) {
            return (t >>>= 0) < 128 ? 1 : t < 16384 ? 2 : t < 1 << 21 ? 3 : t < 1 << 28 ? 4 : 5
        }
        ,
        e.zigZagEncode32 = function(t) {
            return ((t |= 0) << 1 ^ t >> 31) >>> 0
        }
        ,
        e.zigZagDecode32 = function(t) {
            return t >>> 1 ^ -(1 & t) | 0
        }
        ,
        r.writeVarint32 = function(t, r) {
            var i = void 0 === r;
            if (i && (r = this.offset),
            !this.noAssert) {
                if ("number" != typeof t || t % 1 != 0)
                    throw TypeError("Illegal value: " + t + " (not an integer)");
                if (t |= 0,
                "number" != typeof r || r % 1 != 0)
                    throw TypeError("Illegal offset: " + r + " (not an integer)");
                if ((r >>>= 0) < 0 || r + 0 > this.buffer.byteLength)
                    throw RangeError("Illegal offset: 0 <= " + r + " (+0) <= " + this.buffer.byteLength)
            }
            var n, o = e.calculateVarint32(t);
            r += o;
            var s = this.buffer.byteLength;
            for (r > s && this.resize((s *= 2) > r ? s : r),
            r -= o,
            t >>>= 0; t >= 128; )
                n = 127 & t | 128,
                this.view[r++] = n,
                t >>>= 7;
            return this.view[r++] = t,
            i ? (this.offset = r,
            this) : o
        }
        ,
        r.writeVarint32ZigZag = function(t, r) {
            return this.writeVarint32(e.zigZagEncode32(t), r)
        }
        ,
        r.readVarint32 = function(t) {
            var e = void 0 === t;
            if (e && (t = this.offset),
            !this.noAssert) {
                if ("number" != typeof t || t % 1 != 0)
                    throw TypeError("Illegal offset: " + t + " (not an integer)");
                if ((t >>>= 0) < 0 || t + 1 > this.buffer.byteLength)
                    throw RangeError("Illegal offset: 0 <= " + t + " (+1) <= " + this.buffer.byteLength)
            }
            var r, i = 0, n = 0;
            do {
                if (!this.noAssert && t > this.limit) {
                    var o = Error("Truncated");
                    throw o.truncated = !0,
                    o
                }
                r = this.view[t++],
                i < 5 && (n |= (127 & r) << 7 * i),
                ++i
            } while (0 != (128 & r));return n |= 0,
            e ? (this.offset = t,
            n) : {
                value: n,
                length: i
            }
        }
        ,
        r.readVarint32ZigZag = function(t) {
            var r = this.readVarint32(t);
            return "object" == typeof r ? r.value = e.zigZagDecode32(r.value) : r = e.zigZagDecode32(r),
            r
        }
        ,
        t && (e.MAX_VARINT64_BYTES = 10,
        e.calculateVarint64 = function(e) {
            "number" == typeof e ? e = t.fromNumber(e) : "string" == typeof e && (e = t.fromString(e));
            var r = e.toInt() >>> 0
              , i = e.shiftRightUnsigned(28).toInt() >>> 0
              , n = e.shiftRightUnsigned(56).toInt() >>> 0;
            return 0 == n ? 0 == i ? r < 16384 ? r < 128 ? 1 : 2 : r < 1 << 21 ? 3 : 4 : i < 16384 ? i < 128 ? 5 : 6 : i < 1 << 21 ? 7 : 8 : n < 128 ? 9 : 10
        }
        ,
        e.zigZagEncode64 = function(e) {
            return "number" == typeof e ? e = t.fromNumber(e, !1) : "string" == typeof e ? e = t.fromString(e, !1) : !1 !== e.unsigned && (e = e.toSigned()),
            e.shiftLeft(1).xor(e.shiftRight(63)).toUnsigned()
        }
        ,
        e.zigZagDecode64 = function(e) {
            return "number" == typeof e ? e = t.fromNumber(e, !1) : "string" == typeof e ? e = t.fromString(e, !1) : !1 !== e.unsigned && (e = e.toSigned()),
            e.shiftRightUnsigned(1).xor(e.and(t.ONE).toSigned().negate()).toSigned()
        }
        ,
        r.writeVarint64 = function(r, i) {
            var n = void 0 === i;
            if (n && (i = this.offset),
            !this.noAssert) {
                if ("number" == typeof r)
                    r = t.fromNumber(r);
                else if ("string" == typeof r)
                    r = t.fromString(r);
                else if (!(r && r instanceof t))
                    throw TypeError("Illegal value: " + r + " (not an integer or Long)");
                if ("number" != typeof i || i % 1 != 0)
                    throw TypeError("Illegal offset: " + i + " (not an integer)");
                if ((i >>>= 0) < 0 || i + 0 > this.buffer.byteLength)
                    throw RangeError("Illegal offset: 0 <= " + i + " (+0) <= " + this.buffer.byteLength)
            }
            "number" == typeof r ? r = t.fromNumber(r, !1) : "string" == typeof r ? r = t.fromString(r, !1) : !1 !== r.unsigned && (r = r.toSigned());
            var o = e.calculateVarint64(r)
              , s = r.toInt() >>> 0
              , f = r.shiftRightUnsigned(28).toInt() >>> 0
              , a = r.shiftRightUnsigned(56).toInt() >>> 0;
            i += o;
            var h = this.buffer.byteLength;
            switch (i > h && this.resize((h *= 2) > i ? h : i),
            i -= o,
            o) {
            case 10:
                this.view[i + 9] = a >>> 7 & 1;
            case 9:
                this.view[i + 8] = 9 !== o ? 128 | a : 127 & a;
            case 8:
                this.view[i + 7] = 8 !== o ? f >>> 21 | 128 : f >>> 21 & 127;
            case 7:
                this.view[i + 6] = 7 !== o ? f >>> 14 | 128 : f >>> 14 & 127;
            case 6:
                this.view[i + 5] = 6 !== o ? f >>> 7 | 128 : f >>> 7 & 127;
            case 5:
                this.view[i + 4] = 5 !== o ? 128 | f : 127 & f;
            case 4:
                this.view[i + 3] = 4 !== o ? s >>> 21 | 128 : s >>> 21 & 127;
            case 3:
                this.view[i + 2] = 3 !== o ? s >>> 14 | 128 : s >>> 14 & 127;
            case 2:
                this.view[i + 1] = 2 !== o ? s >>> 7 | 128 : s >>> 7 & 127;
            case 1:
                this.view[i] = 1 !== o ? 128 | s : 127 & s
            }
            return n ? (this.offset += o,
            this) : o
        }
        ,
        r.writeVarint64ZigZag = function(t, r) {
            return this.writeVarint64(e.zigZagEncode64(t), r)
        }
        ,
        r.readVarint64 = function(e) {
            var r = void 0 === e;
            if (r && (e = this.offset),
            !this.noAssert) {
                if ("number" != typeof e || e % 1 != 0)
                    throw TypeError("Illegal offset: " + e + " (not an integer)");
                if ((e >>>= 0) < 0 || e + 1 > this.buffer.byteLength)
                    throw RangeError("Illegal offset: 0 <= " + e + " (+1) <= " + this.buffer.byteLength)
            }
            var i = e
              , n = 0
              , o = 0
              , s = 0
              , f = 0;
            if (f = this.view[e++],
            n = 127 & f,
            128 & f && (f = this.view[e++],
            n |= (127 & f) << 7,
            (128 & f || this.noAssert && void 0 === f) && (f = this.view[e++],
            n |= (127 & f) << 14,
            (128 & f || this.noAssert && void 0 === f) && (f = this.view[e++],
            n |= (127 & f) << 21,
            (128 & f || this.noAssert && void 0 === f) && (f = this.view[e++],
            o = 127 & f,
            (128 & f || this.noAssert && void 0 === f) && (f = this.view[e++],
            o |= (127 & f) << 7,
            (128 & f || this.noAssert && void 0 === f) && (f = this.view[e++],
            o |= (127 & f) << 14,
            (128 & f || this.noAssert && void 0 === f) && (f = this.view[e++],
            o |= (127 & f) << 21,
            (128 & f || this.noAssert && void 0 === f) && (f = this.view[e++],
            s = 127 & f,
            (128 & f || this.noAssert && void 0 === f) && (f = this.view[e++],
            s |= (127 & f) << 7,
            128 & f || this.noAssert && void 0 === f))))))))))
                throw Error("Buffer overrun");
            var a = t.fromBits(n | o << 28, o >>> 4 | s << 24, !1);
            return r ? (this.offset = e,
            a) : {
                value: a,
                length: e - i
            }
        }
        ,
        r.readVarint64ZigZag = function(r) {
            var i = this.readVarint64(r);
            return i && i.value instanceof t ? i.value = e.zigZagDecode64(i.value) : i = e.zigZagDecode64(i),
            i
        }
        ),
        r.writeCString = function(t, e) {
            var r = void 0 === e;
            r && (e = this.offset);
            var i, n = t.length;
            if (!this.noAssert) {
                if ("string" != typeof t)
                    throw TypeError("Illegal str: Not a string");
                for (i = 0; i < n; ++i)
                    if (0 === t.charCodeAt(i))
                        throw RangeError("Illegal str: Contains NULL-characters");
                if ("number" != typeof e || e % 1 != 0)
                    throw TypeError("Illegal offset: " + e + " (not an integer)");
                if ((e >>>= 0) < 0 || e + 0 > this.buffer.byteLength)
                    throw RangeError("Illegal offset: 0 <= " + e + " (+0) <= " + this.buffer.byteLength)
            }
            n = u.calculateUTF16asUTF8(o(t))[1],
            e += n + 1;
            var s = this.buffer.byteLength;
            return e > s && this.resize((s *= 2) > e ? s : e),
            e -= n + 1,
            u.encodeUTF16toUTF8(o(t), function(t) {
                this.view[e++] = t
            }
            .bind(this)),
            this.view[e++] = 0,
            r ? (this.offset = e,
            this) : n
        }
        ,
        r.readCString = function(t) {
            var e = void 0 === t;
            if (e && (t = this.offset),
            !this.noAssert) {
                if ("number" != typeof t || t % 1 != 0)
                    throw TypeError("Illegal offset: " + t + " (not an integer)");
                if ((t >>>= 0) < 0 || t + 1 > this.buffer.byteLength)
                    throw RangeError("Illegal offset: 0 <= " + t + " (+1) <= " + this.buffer.byteLength)
            }
            var r, i = t, n = -1;
            return u.decodeUTF8toUTF16(function() {
                if (0 === n)
                    return null;
                if (t >= this.limit)
                    throw RangeError("Illegal range: Truncated data, " + t + " < " + this.limit);
                return 0 === (n = this.view[t++]) ? null : n
            }
            .bind(this), r = s(), !0),
            e ? (this.offset = t,
            r()) : {
                string: r(),
                length: t - i
            }
        }
        ,
        r.writeIString = function(t, e) {
            var r = void 0 === e;
            if (r && (e = this.offset),
            !this.noAssert) {
                if ("string" != typeof t)
                    throw TypeError("Illegal str: Not a string");
                if ("number" != typeof e || e % 1 != 0)
                    throw TypeError("Illegal offset: " + e + " (not an integer)");
                if ((e >>>= 0) < 0 || e + 0 > this.buffer.byteLength)
                    throw RangeError("Illegal offset: 0 <= " + e + " (+0) <= " + this.buffer.byteLength)
            }
            var i, n = e;
            i = u.calculateUTF16asUTF8(o(t), this.noAssert)[1],
            e += 4 + i;
            var s = this.buffer.byteLength;
            if (e > s && this.resize((s *= 2) > e ? s : e),
            e -= 4 + i,
            this.littleEndian ? (this.view[e + 3] = i >>> 24 & 255,
            this.view[e + 2] = i >>> 16 & 255,
            this.view[e + 1] = i >>> 8 & 255,
            this.view[e] = 255 & i) : (this.view[e] = i >>> 24 & 255,
            this.view[e + 1] = i >>> 16 & 255,
            this.view[e + 2] = i >>> 8 & 255,
            this.view[e + 3] = 255 & i),
            e += 4,
            u.encodeUTF16toUTF8(o(t), function(t) {
                this.view[e++] = t
            }
            .bind(this)),
            e !== n + 4 + i)
                throw RangeError("Illegal range: Truncated data, " + e + " == " + (e + 4 + i));
            return r ? (this.offset = e,
            this) : e - n
        }
        ,
        r.readIString = function(t) {
            var r = void 0 === t;
            if (r && (t = this.offset),
            !this.noAssert) {
                if ("number" != typeof t || t % 1 != 0)
                    throw TypeError("Illegal offset: " + t + " (not an integer)");
                if ((t >>>= 0) < 0 || t + 4 > this.buffer.byteLength)
                    throw RangeError("Illegal offset: 0 <= " + t + " (+4) <= " + this.buffer.byteLength)
            }
            var i = t
              , n = this.readUint32(t)
              , o = this.readUTF8String(n, e.METRICS_BYTES, t += 4);
            return t += o.length,
            r ? (this.offset = t,
            o.string) : {
                string: o.string,
                length: t - i
            }
        }
        ,
        e.METRICS_CHARS = "c",
        e.METRICS_BYTES = "b",
        r.writeUTF8String = function(t, e) {
            var r, i = void 0 === e;
            if (i && (e = this.offset),
            !this.noAssert) {
                if ("number" != typeof e || e % 1 != 0)
                    throw TypeError("Illegal offset: " + e + " (not an integer)");
                if ((e >>>= 0) < 0 || e + 0 > this.buffer.byteLength)
                    throw RangeError("Illegal offset: 0 <= " + e + " (+0) <= " + this.buffer.byteLength)
            }
            var n = e;
            r = u.calculateUTF16asUTF8(o(t))[1],
            e += r;
            var s = this.buffer.byteLength;
            return e > s && this.resize((s *= 2) > e ? s : e),
            e -= r,
            u.encodeUTF16toUTF8(o(t), function(t) {
                this.view[e++] = t
            }
            .bind(this)),
            i ? (this.offset = e,
            this) : e - n
        }
        ,
        r.writeString = r.writeUTF8String,
        e.calculateUTF8Chars = function(t) {
            return u.calculateUTF16asUTF8(o(t))[0]
        }
        ,
        e.calculateUTF8Bytes = function(t) {
            return u.calculateUTF16asUTF8(o(t))[1]
        }
        ,
        e.calculateString = e.calculateUTF8Bytes,
        r.readUTF8String = function(t, r, i) {
            "number" == typeof r && (i = r,
            r = void 0);
            var n = void 0 === i;
            if (n && (i = this.offset),
            void 0 === r && (r = e.METRICS_CHARS),
            !this.noAssert) {
                if ("number" != typeof t || t % 1 != 0)
                    throw TypeError("Illegal length: " + t + " (not an integer)");
                if (t |= 0,
                "number" != typeof i || i % 1 != 0)
                    throw TypeError("Illegal offset: " + i + " (not an integer)");
                if ((i >>>= 0) < 0 || i + 0 > this.buffer.byteLength)
                    throw RangeError("Illegal offset: 0 <= " + i + " (+0) <= " + this.buffer.byteLength)
            }
            var o, f = 0, a = i;
            if (r === e.METRICS_CHARS) {
                if (o = s(),
                u.decodeUTF8(function() {
                    return f < t && i < this.limit ? this.view[i++] : null
                }
                .bind(this), function(t) {
                    ++f,
                    u.UTF8toUTF16(t, o)
                }),
                f !== t)
                    throw RangeError("Illegal range: Truncated data, " + f + " == " + t);
                return n ? (this.offset = i,
                o()) : {
                    string: o(),
                    length: i - a
                }
            }
            if (r === e.METRICS_BYTES) {
                if (!this.noAssert) {
                    if ("number" != typeof i || i % 1 != 0)
                        throw TypeError("Illegal offset: " + i + " (not an integer)");
                    if ((i >>>= 0) < 0 || i + t > this.buffer.byteLength)
                        throw RangeError("Illegal offset: 0 <= " + i + " (+" + t + ") <= " + this.buffer.byteLength)
                }
                var h = i + t;
                if (u.decodeUTF8toUTF16(function() {
                    return i < h ? this.view[i++] : null
                }
                .bind(this), o = s(), this.noAssert),
                i !== h)
                    throw RangeError("Illegal range: Truncated data, " + i + " == " + h);
                return n ? (this.offset = i,
                o()) : {
                    string: o(),
                    length: i - a
                }
            }
            throw TypeError("Unsupported metrics: " + r)
        }
        ,
        r.readString = r.readUTF8String,
        r.writeVString = function(t, r) {
            var i = void 0 === r;
            if (i && (r = this.offset),
            !this.noAssert) {
                if ("string" != typeof t)
                    throw TypeError("Illegal str: Not a string");
                if ("number" != typeof r || r % 1 != 0)
                    throw TypeError("Illegal offset: " + r + " (not an integer)");
                if ((r >>>= 0) < 0 || r + 0 > this.buffer.byteLength)
                    throw RangeError("Illegal offset: 0 <= " + r + " (+0) <= " + this.buffer.byteLength)
            }
            var n, s, f = r;
            n = u.calculateUTF16asUTF8(o(t), this.noAssert)[1],
            s = e.calculateVarint32(n),
            r += s + n;
            var a = this.buffer.byteLength;
            if (r > a && this.resize((a *= 2) > r ? a : r),
            r -= s + n,
            r += this.writeVarint32(n, r),
            u.encodeUTF16toUTF8(o(t), function(t) {
                this.view[r++] = t
            }
            .bind(this)),
            r !== f + n + s)
                throw RangeError("Illegal range: Truncated data, " + r + " == " + (r + n + s));
            return i ? (this.offset = r,
            this) : r - f
        }
        ,
        r.readVString = function(t) {
            var r = void 0 === t;
            if (r && (t = this.offset),
            !this.noAssert) {
                if ("number" != typeof t || t % 1 != 0)
                    throw TypeError("Illegal offset: " + t + " (not an integer)");
                if ((t >>>= 0) < 0 || t + 1 > this.buffer.byteLength)
                    throw RangeError("Illegal offset: 0 <= " + t + " (+1) <= " + this.buffer.byteLength)
            }
            var i = t
              , n = this.readVarint32(t)
              , o = this.readUTF8String(n.value, e.METRICS_BYTES, t += n.length);
            return t += o.length,
            r ? (this.offset = t,
            o.string) : {
                string: o.string,
                length: t - i
            }
        }
        ,
        r.append = function(t, r, i) {
            "number" != typeof r && "string" == typeof r || (i = r,
            r = void 0);
            var n = void 0 === i;
            if (n && (i = this.offset),
            !this.noAssert) {
                if ("number" != typeof i || i % 1 != 0)
                    throw TypeError("Illegal offset: " + i + " (not an integer)");
                if ((i >>>= 0) < 0 || i + 0 > this.buffer.byteLength)
                    throw RangeError("Illegal offset: 0 <= " + i + " (+0) <= " + this.buffer.byteLength)
            }
            t instanceof e || (t = e.wrap(t, r));
            var o = t.limit - t.offset;
            if (o <= 0)
                return this;
            i += o;
            var s = this.buffer.byteLength;
            return i > s && this.resize((s *= 2) > i ? s : i),
            i -= o,
            this.view.set(t.view.subarray(t.offset, t.limit), i),
            t.offset += o,
            n && (this.offset += o),
            this
        }
        ,
        r.appendTo = function(t, e) {
            return t.append(this, e),
            this
        }
        ,
        r.assert = function(t) {
            return this.noAssert = !t,
            this
        }
        ,
        r.capacity = function() {
            return this.buffer.byteLength
        }
        ,
        r.clear = function() {
            return this.offset = 0,
            this.limit = this.buffer.byteLength,
            this.markedOffset = -1,
            this
        }
        ,
        r.clone = function(t) {
            var r = new e(0,this.littleEndian,this.noAssert);
            return t ? (r.buffer = new ArrayBuffer(this.buffer.byteLength),
            r.view = new Uint8Array(r.buffer)) : (r.buffer = this.buffer,
            r.view = this.view),
            r.offset = this.offset,
            r.markedOffset = this.markedOffset,
            r.limit = this.limit,
            r
        }
        ,
        r.compact = function(t, e) {
            if (void 0 === t && (t = this.offset),
            void 0 === e && (e = this.limit),
            !this.noAssert) {
                if ("number" != typeof t || t % 1 != 0)
                    throw TypeError("Illegal begin: Not an integer");
                if (t >>>= 0,
                "number" != typeof e || e % 1 != 0)
                    throw TypeError("Illegal end: Not an integer");
                if (e >>>= 0,
                t < 0 || t > e || e > this.buffer.byteLength)
                    throw RangeError("Illegal range: 0 <= " + t + " <= " + e + " <= " + this.buffer.byteLength)
            }
            if (0 === t && e === this.buffer.byteLength)
                return this;
            var r = e - t;
            if (0 === r)
                return this.buffer = i,
                this.view = null,
                this.markedOffset >= 0 && (this.markedOffset -= t),
                this.offset = 0,
                this.limit = 0,
                this;
            var n = new ArrayBuffer(r)
              , o = new Uint8Array(n);
            return o.set(this.view.subarray(t, e)),
            this.buffer = n,
            this.view = o,
            this.markedOffset >= 0 && (this.markedOffset -= t),
            this.offset = 0,
            this.limit = r,
            this
        }
        ,
        r.copy = function(t, r) {
            if (void 0 === t && (t = this.offset),
            void 0 === r && (r = this.limit),
            !this.noAssert) {
                if ("number" != typeof t || t % 1 != 0)
                    throw TypeError("Illegal begin: Not an integer");
                if (t >>>= 0,
                "number" != typeof r || r % 1 != 0)
                    throw TypeError("Illegal end: Not an integer");
                if (r >>>= 0,
                t < 0 || t > r || r > this.buffer.byteLength)
                    throw RangeError("Illegal range: 0 <= " + t + " <= " + r + " <= " + this.buffer.byteLength)
            }
            if (t === r)
                return new e(0,this.littleEndian,this.noAssert);
            var i = r - t
              , n = new e(i,this.littleEndian,this.noAssert);
            return n.offset = 0,
            n.limit = i,
            n.markedOffset >= 0 && (n.markedOffset -= t),
            this.copyTo(n, 0, t, r),
            n
        }
        ,
        r.copyTo = function(t, r, i, n) {
            var o, s;
            if (!this.noAssert && !e.isByteBuffer(t))
                throw TypeError("Illegal target: Not a ByteBuffer");
            if (r = (s = void 0 === r) ? t.offset : 0 | r,
            i = (o = void 0 === i) ? this.offset : 0 | i,
            n = void 0 === n ? this.limit : 0 | n,
            r < 0 || r > t.buffer.byteLength)
                throw RangeError("Illegal target range: 0 <= " + r + " <= " + t.buffer.byteLength);
            if (i < 0 || n > this.buffer.byteLength)
                throw RangeError("Illegal source range: 0 <= " + i + " <= " + this.buffer.byteLength);
            var f = n - i;
            return 0 === f ? t : (t.ensureCapacity(r + f),
            t.view.set(this.view.subarray(i, n), r),
            o && (this.offset += f),
            s && (t.offset += f),
            this)
        }
        ,
        r.ensureCapacity = function(t) {
            var e = this.buffer.byteLength;
            return e < t ? this.resize((e *= 2) > t ? e : t) : this
        }
        ,
        r.fill = function(t, e, r) {
            var i = void 0 === e;
            if (i && (e = this.offset),
            "string" == typeof t && t.length > 0 && (t = t.charCodeAt(0)),
            void 0 === e && (e = this.offset),
            void 0 === r && (r = this.limit),
            !this.noAssert) {
                if ("number" != typeof t || t % 1 != 0)
                    throw TypeError("Illegal value: " + t + " (not an integer)");
                if (t |= 0,
                "number" != typeof e || e % 1 != 0)
                    throw TypeError("Illegal begin: Not an integer");
                if (e >>>= 0,
                "number" != typeof r || r % 1 != 0)
                    throw TypeError("Illegal end: Not an integer");
                if (r >>>= 0,
                e < 0 || e > r || r > this.buffer.byteLength)
                    throw RangeError("Illegal range: 0 <= " + e + " <= " + r + " <= " + this.buffer.byteLength)
            }
            if (e >= r)
                return this;
            for (; e < r; )
                this.view[e++] = t;
            return i && (this.offset = e),
            this
        }
        ,
        r.flip = function() {
            return this.limit = this.offset,
            this.offset = 0,
            this
        }
        ,
        r.mark = function(t) {
            if (t = void 0 === t ? this.offset : t,
            !this.noAssert) {
                if ("number" != typeof t || t % 1 != 0)
                    throw TypeError("Illegal offset: " + t + " (not an integer)");
                if ((t >>>= 0) < 0 || t + 0 > this.buffer.byteLength)
                    throw RangeError("Illegal offset: 0 <= " + t + " (+0) <= " + this.buffer.byteLength)
            }
            return this.markedOffset = t,
            this
        }
        ,
        r.order = function(t) {
            if (!this.noAssert && "boolean" != typeof t)
                throw TypeError("Illegal littleEndian: Not a boolean");
            return this.littleEndian = !!t,
            this
        }
        ,
        r.LE = function(t) {
            return this.littleEndian = void 0 === t || !!t,
            this
        }
        ,
        r.BE = function(t) {
            return this.littleEndian = void 0 !== t && !t,
            this
        }
        ,
        r.prepend = function(t, r, i) {
            "number" != typeof r && "string" == typeof r || (i = r,
            r = void 0);
            var n = void 0 === i;
            if (n && (i = this.offset),
            !this.noAssert) {
                if ("number" != typeof i || i % 1 != 0)
                    throw TypeError("Illegal offset: " + i + " (not an integer)");
                if ((i >>>= 0) < 0 || i + 0 > this.buffer.byteLength)
                    throw RangeError("Illegal offset: 0 <= " + i + " (+0) <= " + this.buffer.byteLength)
            }
            t instanceof e || (t = e.wrap(t, r));
            var o = t.limit - t.offset;
            if (o <= 0)
                return this;
            var s = o - i;
            if (s > 0) {
                var f = new ArrayBuffer(this.buffer.byteLength + s)
                  , a = new Uint8Array(f);
                a.set(this.view.subarray(i, this.buffer.byteLength), o),
                this.buffer = f,
                this.view = a,
                this.offset += s,
                this.markedOffset >= 0 && (this.markedOffset += s),
                this.limit += s,
                i += s
            } else
                new Uint8Array(this.buffer);
            return this.view.set(t.view.subarray(t.offset, t.limit), i - o),
            t.offset = t.limit,
            n && (this.offset -= o),
            this
        }
        ,
        r.prependTo = function(t, e) {
            return t.prepend(this, e),
            this
        }
        ,
        r.printDebug = function(t) {
            "function" != typeof t && (t = console.log.bind(console)),
            t(this.toString() + "\n-------------------------------------------------------------------\n" + this.toDebug(!0))
        }
        ,
        r.remaining = function() {
            return this.limit - this.offset
        }
        ,
        r.reset = function() {
            return this.markedOffset >= 0 ? (this.offset = this.markedOffset,
            this.markedOffset = -1) : this.offset = 0,
            this
        }
        ,
        r.resize = function(t) {
            if (!this.noAssert) {
                if ("number" != typeof t || t % 1 != 0)
                    throw TypeError("Illegal capacity: " + t + " (not an integer)");
                if ((t |= 0) < 0)
                    throw RangeError("Illegal capacity: 0 <= " + t)
            }
            if (this.buffer.byteLength < t) {
                var e = new ArrayBuffer(t)
                  , r = new Uint8Array(e);
                r.set(this.view),
                this.buffer = e,
                this.view = r
            }
            return this
        }
        ,
        r.reverse = function(t, e) {
            if (void 0 === t && (t = this.offset),
            void 0 === e && (e = this.limit),
            !this.noAssert) {
                if ("number" != typeof t || t % 1 != 0)
                    throw TypeError("Illegal begin: Not an integer");
                if (t >>>= 0,
                "number" != typeof e || e % 1 != 0)
                    throw TypeError("Illegal end: Not an integer");
                if (e >>>= 0,
                t < 0 || t > e || e > this.buffer.byteLength)
                    throw RangeError("Illegal range: 0 <= " + t + " <= " + e + " <= " + this.buffer.byteLength)
            }
            return t === e ? this : (Array.prototype.reverse.call(this.view.subarray(t, e)),
            this)
        }
        ,
        r.skip = function(t) {
            if (!this.noAssert) {
                if ("number" != typeof t || t % 1 != 0)
                    throw TypeError("Illegal length: " + t + " (not an integer)");
                t |= 0
            }
            var e = this.offset + t;
            if (!this.noAssert && (e < 0 || e > this.buffer.byteLength))
                throw RangeError("Illegal length: 0 <= " + this.offset + " + " + t + " <= " + this.buffer.byteLength);
            return this.offset = e,
            this
        }
        ,
        r.slice = function(t, e) {
            if (void 0 === t && (t = this.offset),
            void 0 === e && (e = this.limit),
            !this.noAssert) {
                if ("number" != typeof t || t % 1 != 0)
                    throw TypeError("Illegal begin: Not an integer");
                if (t >>>= 0,
                "number" != typeof e || e % 1 != 0)
                    throw TypeError("Illegal end: Not an integer");
                if (e >>>= 0,
                t < 0 || t > e || e > this.buffer.byteLength)
                    throw RangeError("Illegal range: 0 <= " + t + " <= " + e + " <= " + this.buffer.byteLength)
            }
            var r = this.clone();
            return r.offset = t,
            r.limit = e,
            r
        }
        ,
        r.toBuffer = function(t) {
            var e = this.offset
              , r = this.limit;
            if (!this.noAssert) {
                if ("number" != typeof e || e % 1 != 0)
                    throw TypeError("Illegal offset: Not an integer");
                if (e >>>= 0,
                "number" != typeof r || r % 1 != 0)
                    throw TypeError("Illegal limit: Not an integer");
                if (r >>>= 0,
                e < 0 || e > r || r > this.buffer.byteLength)
                    throw RangeError("Illegal range: 0 <= " + e + " <= " + r + " <= " + this.buffer.byteLength)
            }
            if (!t && 0 === e && r === this.buffer.byteLength)
                return this.buffer;
            if (e === r)
                return i;
            var n = new ArrayBuffer(r - e);
            return new Uint8Array(n).set(new Uint8Array(this.buffer).subarray(e, r), 0),
            n
        }
        ,
        r.toArrayBuffer = r.toBuffer,
        r.toString = function(t, e, r) {
            if (void 0 === t)
                return "ByteBufferAB(offset=" + this.offset + ",markedOffset=" + this.markedOffset + ",limit=" + this.limit + ",capacity=" + this.capacity() + ")";
            switch ("number" == typeof t && (r = e = t = "utf8"),
            t) {
            case "utf8":
                return this.toUTF8(e, r);
            case "base64":
                return this.toBase64(e, r);
            case "hex":
                return this.toHex(e, r);
            case "binary":
                return this.toBinary(e, r);
            case "debug":
                return this.toDebug();
            case "columns":
                return this.toColumns();
            default:
                throw Error("Unsupported encoding: " + t)
            }
        }
        ;
        var h = function() {
            for (var t = {}, e = [65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 43, 47], r = [], i = 0, n = e.length; i < n; ++i)
                r[e[i]] = i;
            return t.encode = function(t, r) {
                for (var i, n; null !== (i = t()); )
                    r(e[i >> 2 & 63]),
                    n = (3 & i) << 4,
                    null !== (i = t()) ? (r(e[63 & ((n |= i >> 4 & 15) | i >> 4 & 15)]),
                    n = (15 & i) << 2,
                    null !== (i = t()) ? (r(e[63 & (n | i >> 6 & 3)]),
                    r(e[63 & i])) : (r(e[63 & n]),
                    r(61))) : (r(e[63 & n]),
                    r(61),
                    r(61))
            }
            ,
            t.decode = function(t, e) {
                var i, n, o;
                function s(t) {
                    throw Error("Illegal character code: " + t)
                }
                for (; null !== (i = t()); )
                    if (void 0 === (n = r[i]) && s(i),
                    null !== (i = t()) && (void 0 === (o = r[i]) && s(i),
                    e(n << 2 >>> 0 | (48 & o) >> 4),
                    null !== (i = t()))) {
                        if (void 0 === (n = r[i])) {
                            if (61 === i)
                                break;
                            s(i)
                        }
                        if (e((15 & o) << 4 >>> 0 | (60 & n) >> 2),
                        null !== (i = t())) {
                            if (void 0 === (o = r[i])) {
                                if (61 === i)
                                    break;
                                s(i)
                            }
                            e((3 & n) << 6 >>> 0 | o)
                        }
                    }
            }
            ,
            t.test = function(t) {
                return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(t)
            }
            ,
            t
        }();
        r.toBase64 = function(t, e) {
            if (void 0 === t && (t = this.offset),
            void 0 === e && (e = this.limit),
            e |= 0,
            (t |= 0) < 0 || e > this.capacity || t > e)
                throw RangeError("begin, end");
            var r;
            return h.encode(function() {
                return t < e ? this.view[t++] : null
            }
            .bind(this), r = s()),
            r()
        }
        ,
        e.fromBase64 = function(t, r) {
            if ("string" != typeof t)
                throw TypeError("str");
            var i = new e(t.length / 4 * 3,r)
              , n = 0;
            return h.decode(o(t), function(t) {
                i.view[n++] = t
            }),
            i.limit = n,
            i
        }
        ,
        e.btoa = function(t) {
            return e.fromBinary(t).toBase64()
        }
        ,
        e.atob = function(t) {
            return e.fromBase64(t).toBinary()
        }
        ,
        r.toBinary = function(t, e) {
            if (void 0 === t && (t = this.offset),
            void 0 === e && (e = this.limit),
            e |= 0,
            (t |= 0) < 0 || e > this.capacity() || t > e)
                throw RangeError("begin, end");
            if (t === e)
                return "";
            for (var r = [], i = []; t < e; )
                r.push(this.view[t++]),
                r.length >= 1024 && (i.push(String.fromCharCode.apply(String, r)),
                r = []);
            return i.join("") + String.fromCharCode.apply(String, r)
        }
        ,
        e.fromBinary = function(t, r) {
            if ("string" != typeof t)
                throw TypeError("str");
            for (var i, n = 0, o = t.length, s = new e(o,r); n < o; ) {
                if ((i = t.charCodeAt(n)) > 255)
                    throw RangeError("illegal char code: " + i);
                s.view[n++] = i
            }
            return s.limit = o,
            s
        }
        ,
        r.toDebug = function(t) {
            for (var e, r = -1, i = this.buffer.byteLength, n = "", o = "", s = ""; r < i; ) {
                if (-1 !== r && (e = this.view[r],
                n += e < 16 ? "0" + e.toString(16).toUpperCase() : e.toString(16).toUpperCase(),
                t && (o += e > 32 && e < 127 ? String.fromCharCode(e) : ".")),
                ++r,
                t && r > 0 && r % 16 == 0 && r !== i) {
                    for (; n.length < 51; )
                        n += " ";
                    s += n + o + "\n",
                    n = o = ""
                }
                r === this.offset && r === this.limit ? n += r === this.markedOffset ? "!" : "|" : r === this.offset ? n += r === this.markedOffset ? "[" : "<" : r === this.limit ? n += r === this.markedOffset ? "]" : ">" : n += r === this.markedOffset ? "'" : t || 0 !== r && r !== i ? " " : ""
            }
            if (t && " " !== n) {
                for (; n.length < 51; )
                    n += " ";
                s += n + o + "\n"
            }
            return t ? s : n
        }
        ,
        e.fromDebug = function(t, r, i) {
            for (var n, o, s = t.length, f = new e((s + 1) / 3 | 0,r,i), a = 0, h = 0, u = !1, l = !1, c = !1, d = !1, p = !1; a < s; ) {
                switch (n = t.charAt(a++)) {
                case "!":
                    if (!i) {
                        if (l || c || d) {
                            p = !0;
                            break
                        }
                        l = c = d = !0
                    }
                    f.offset = f.markedOffset = f.limit = h,
                    u = !1;
                    break;
                case "|":
                    if (!i) {
                        if (l || d) {
                            p = !0;
                            break
                        }
                        l = d = !0
                    }
                    f.offset = f.limit = h,
                    u = !1;
                    break;
                case "[":
                    if (!i) {
                        if (l || c) {
                            p = !0;
                            break
                        }
                        l = c = !0
                    }
                    f.offset = f.markedOffset = h,
                    u = !1;
                    break;
                case "<":
                    if (!i) {
                        if (l) {
                            p = !0;
                            break
                        }
                        l = !0
                    }
                    f.offset = h,
                    u = !1;
                    break;
                case "]":
                    if (!i) {
                        if (d || c) {
                            p = !0;
                            break
                        }
                        d = c = !0
                    }
                    f.limit = f.markedOffset = h,
                    u = !1;
                    break;
                case ">":
                    if (!i) {
                        if (d) {
                            p = !0;
                            break
                        }
                        d = !0
                    }
                    f.limit = h,
                    u = !1;
                    break;
                case "'":
                    if (!i) {
                        if (c) {
                            p = !0;
                            break
                        }
                        c = !0
                    }
                    f.markedOffset = h,
                    u = !1;
                    break;
                case " ":
                    u = !1;
                    break;
                default:
                    if (!i && u) {
                        p = !0;
                        break
                    }
                    if (o = parseInt(n + t.charAt(a++), 16),
                    !i && (isNaN(o) || o < 0 || o > 255))
                        throw TypeError("Illegal str: Not a debug encoded string");
                    f.view[h++] = o,
                    u = !0
                }
                if (p)
                    throw TypeError("Illegal str: Invalid symbol at " + a)
            }
            if (!i) {
                if (!l || !d)
                    throw TypeError("Illegal str: Missing offset or limit");
                if (h < f.buffer.byteLength)
                    throw TypeError("Illegal str: Not a debug encoded string (is it hex?) " + h + " < " + s)
            }
            return f
        }
        ,
        r.toHex = function(t, e) {
            if (t = void 0 === t ? this.offset : t,
            e = void 0 === e ? this.limit : e,
            !this.noAssert) {
                if ("number" != typeof t || t % 1 != 0)
                    throw TypeError("Illegal begin: Not an integer");
                if (t >>>= 0,
                "number" != typeof e || e % 1 != 0)
                    throw TypeError("Illegal end: Not an integer");
                if (e >>>= 0,
                t < 0 || t > e || e > this.buffer.byteLength)
                    throw RangeError("Illegal range: 0 <= " + t + " <= " + e + " <= " + this.buffer.byteLength)
            }
            for (var r, i = new Array(e - t); t < e; )
                (r = this.view[t++]) < 16 ? i.push("0", r.toString(16)) : i.push(r.toString(16));
            return i.join("")
        }
        ,
        e.fromHex = function(t, r, i) {
            if (!i) {
                if ("string" != typeof t)
                    throw TypeError("Illegal str: Not a string");
                if (t.length % 2 != 0)
                    throw TypeError("Illegal str: Length not a multiple of 2")
            }
            for (var n, o = t.length, s = new e(o / 2 | 0,r), f = 0, a = 0; f < o; f += 2) {
                if (n = parseInt(t.substring(f, f + 2), 16),
                !i && (!isFinite(n) || n < 0 || n > 255))
                    throw TypeError("Illegal str: Contains non-hex characters");
                s.view[a++] = n
            }
            return s.limit = a,
            s
        }
        ;
        var u = function() {
            var t = {
                MAX_CODEPOINT: 1114111,
                encodeUTF8: function(t, e) {
                    var r = null;
                    for ("number" == typeof t && (r = t,
                    t = function() {
                        return null
                    }
                    ); null !== r || null !== (r = t()); )
                        r < 128 ? e(127 & r) : r < 2048 ? (e(r >> 6 & 31 | 192),
                        e(63 & r | 128)) : r < 65536 ? (e(r >> 12 & 15 | 224),
                        e(r >> 6 & 63 | 128),
                        e(63 & r | 128)) : (e(r >> 18 & 7 | 240),
                        e(r >> 12 & 63 | 128),
                        e(r >> 6 & 63 | 128),
                        e(63 & r | 128)),
                        r = null
                },
                decodeUTF8: function(t, e) {
                    for (var r, i, n, o, s = function(t) {
                        t = t.slice(0, t.indexOf(null));
                        var e = Error(t.toString());
                        throw e.name = "TruncatedError",
                        e.bytes = t,
                        e
                    }; null !== (r = t()); )
                        if (0 == (128 & r))
                            e(r);
                        else if (192 == (224 & r))
                            null === (i = t()) && s([r, i]),
                            e((31 & r) << 6 | 63 & i);
                        else if (224 == (240 & r))
                            (null === (i = t()) || null === (n = t())) && s([r, i, n]),
                            e((15 & r) << 12 | (63 & i) << 6 | 63 & n);
                        else {
                            if (240 != (248 & r))
                                throw RangeError("Illegal starting byte: " + r);
                            (null === (i = t()) || null === (n = t()) || null === (o = t())) && s([r, i, n, o]),
                            e((7 & r) << 18 | (63 & i) << 12 | (63 & n) << 6 | 63 & o)
                        }
                },
                UTF16toUTF8: function(t, e) {
                    for (var r, i = null; null !== (r = null !== i ? i : t()); )
                        r >= 55296 && r <= 57343 && null !== (i = t()) && i >= 56320 && i <= 57343 ? (e(1024 * (r - 55296) + i - 56320 + 65536),
                        i = null) : e(r);
                    null !== i && e(i)
                },
                UTF8toUTF16: function(t, e) {
                    var r = null;
                    for ("number" == typeof t && (r = t,
                    t = function() {
                        return null
                    }
                    ); null !== r || null !== (r = t()); )
                        r <= 65535 ? e(r) : (e(55296 + ((r -= 65536) >> 10)),
                        e(r % 1024 + 56320)),
                        r = null
                },
                encodeUTF16toUTF8: function(e, r) {
                    t.UTF16toUTF8(e, function(e) {
                        t.encodeUTF8(e, r)
                    })
                },
                decodeUTF8toUTF16: function(e, r) {
                    t.decodeUTF8(e, function(e) {
                        t.UTF8toUTF16(e, r)
                    })
                },
                calculateCodePoint: function(t) {
                    return t < 128 ? 1 : t < 2048 ? 2 : t < 65536 ? 3 : 4
                },
                calculateUTF8: function(t) {
                    for (var e, r = 0; null !== (e = t()); )
                        r += e < 128 ? 1 : e < 2048 ? 2 : e < 65536 ? 3 : 4;
                    return r
                },
                calculateUTF16asUTF8: function(e) {
                    var r = 0
                      , i = 0;
                    return t.UTF16toUTF8(e, function(t) {
                        ++r,
                        i += t < 128 ? 1 : t < 2048 ? 2 : t < 65536 ? 3 : 4
                    }),
                    [r, i]
                }
            };
            return t
        }();
        return r.toUTF8 = function(t, e) {
            if (void 0 === t && (t = this.offset),
            void 0 === e && (e = this.limit),
            !this.noAssert) {
                if ("number" != typeof t || t % 1 != 0)
                    throw TypeError("Illegal begin: Not an integer");
                if (t >>>= 0,
                "number" != typeof e || e % 1 != 0)
                    throw TypeError("Illegal end: Not an integer");
                if (e >>>= 0,
                t < 0 || t > e || e > this.buffer.byteLength)
                    throw RangeError("Illegal range: 0 <= " + t + " <= " + e + " <= " + this.buffer.byteLength)
            }
            var r;
            try {
                u.decodeUTF8toUTF16(function() {
                    return t < e ? this.view[t++] : null
                }
                .bind(this), r = s())
            } catch (r) {
                if (t !== e)
                    throw RangeError("Illegal range: Truncated data, " + t + " != " + e)
            }
            return r()
        }
        ,
        e.fromUTF8 = function(t, r, i) {
            if (!i && "string" != typeof t)
                throw TypeError("Illegal str: Not a string");
            var n = new e(u.calculateUTF16asUTF8(o(t), !0)[1],r,i)
              , s = 0;
            return u.encodeUTF16toUTF8(o(t), function(t) {
                n.view[s++] = t
            }),
            n.limit = s,
            n
        }
        ,
        e
    }
    ) ? i.apply(e, n) : i) || (t.exports = o)
}
, function(t, e, r) {
    var i, n, o;
    /**
 * @license long.js (c) 2013 Daniel Wirtz <dcode@dcode.io>
 * Released under the Apache License, Version 2.0
 * see: https://github.com/dcodeIO/long.js for details
 */
    n = [],
    void 0 === (o = "function" == typeof (i = function() {
        "use strict";
        function t(t, e, r) {
            this.low = 0 | t,
            this.high = 0 | e,
            this.unsigned = !!r
        }
        function e(t) {
            return !0 === (t && t.__isLong__)
        }
        t.prototype.__isLong__,
        Object.defineProperty(t.prototype, "__isLong__", {
            value: !0,
            enumerable: !1,
            configurable: !1
        }),
        t.isLong = e;
        var r = {}
          , i = {};
        function n(t, e) {
            var n, o, f;
            return e ? (f = 0 <= (t >>>= 0) && t < 256) && (o = i[t]) ? o : (n = s(t, (0 | t) < 0 ? -1 : 0, !0),
            f && (i[t] = n),
            n) : (f = -128 <= (t |= 0) && t < 128) && (o = r[t]) ? o : (n = s(t, t < 0 ? -1 : 0, !1),
            f && (r[t] = n),
            n)
        }
        function o(t, e) {
            if (isNaN(t) || !isFinite(t))
                return e ? g : p;
            if (e) {
                if (t < 0)
                    return g;
                if (t >= l)
                    return m
            } else {
                if (t <= -c)
                    return _;
                if (t + 1 >= c)
                    return w
            }
            return t < 0 ? o(-t, e).neg() : s(t % u | 0, t / u | 0, e)
        }
        function s(e, r, i) {
            return new t(e,r,i)
        }
        t.fromInt = n,
        t.fromNumber = o,
        t.fromBits = s;
        var f = Math.pow;
        function a(t, e, r) {
            if (0 === t.length)
                throw Error("empty string");
            if ("NaN" === t || "Infinity" === t || "+Infinity" === t || "-Infinity" === t)
                return p;
            if ("number" == typeof e ? (r = e,
            e = !1) : e = !!e,
            (r = r || 10) < 2 || 36 < r)
                throw RangeError("radix");
            var i;
            if ((i = t.indexOf("-")) > 0)
                throw Error("interior hyphen");
            if (0 === i)
                return a(t.substring(1), e, r).neg();
            for (var n = o(f(r, 8)), s = p, h = 0; h < t.length; h += 8) {
                var u = Math.min(8, t.length - h)
                  , l = parseInt(t.substring(h, h + u), r);
                if (u < 8) {
                    var c = o(f(r, u));
                    s = s.mul(c).add(o(l))
                } else
                    s = (s = s.mul(n)).add(o(l))
            }
            return s.unsigned = e,
            s
        }
        function h(e) {
            return e instanceof t ? e : "number" == typeof e ? o(e) : "string" == typeof e ? a(e) : s(e.low, e.high, e.unsigned)
        }
        t.fromString = a,
        t.fromValue = h;
        var u = 4294967296
          , l = u * u
          , c = l / 2
          , d = n(1 << 24)
          , p = n(0);
        t.ZERO = p;
        var g = n(0, !0);
        t.UZERO = g;
        var y = n(1);
        t.ONE = y;
        var v = n(1, !0);
        t.UONE = v;
        var b = n(-1);
        t.NEG_ONE = b;
        var w = s(-1, 2147483647, !1);
        t.MAX_VALUE = w;
        var m = s(-1, -1, !0);
        t.MAX_UNSIGNED_VALUE = m;
        var _ = s(0, -2147483648, !1);
        t.MIN_VALUE = _;
        var E = t.prototype;
        return E.toInt = function() {
            return this.unsigned ? this.low >>> 0 : this.low
        }
        ,
        E.toNumber = function() {
            return this.unsigned ? (this.high >>> 0) * u + (this.low >>> 0) : this.high * u + (this.low >>> 0)
        }
        ,
        E.toString = function(t) {
            if ((t = t || 10) < 2 || 36 < t)
                throw RangeError("radix");
            if (this.isZero())
                return "0";
            if (this.isNegative()) {
                if (this.eq(_)) {
                    var e = o(t)
                      , r = this.div(e)
                      , i = r.mul(e).sub(this);
                    return r.toString(t) + i.toInt().toString(t)
                }
                return "-" + this.neg().toString(t)
            }
            for (var n = o(f(t, 6), this.unsigned), s = this, a = ""; ; ) {
                var h = s.div(n)
                  , u = (s.sub(h.mul(n)).toInt() >>> 0).toString(t);
                if ((s = h).isZero())
                    return u + a;
                for (; u.length < 6; )
                    u = "0" + u;
                a = "" + u + a
            }
        }
        ,
        E.getHighBits = function() {
            return this.high
        }
        ,
        E.getHighBitsUnsigned = function() {
            return this.high >>> 0
        }
        ,
        E.getLowBits = function() {
            return this.low
        }
        ,
        E.getLowBitsUnsigned = function() {
            return this.low >>> 0
        }
        ,
        E.getNumBitsAbs = function() {
            if (this.isNegative())
                return this.eq(_) ? 64 : this.neg().getNumBitsAbs();
            for (var t = 0 != this.high ? this.high : this.low, e = 31; e > 0 && 0 == (t & 1 << e); e--)
                ;
            return 0 != this.high ? e + 33 : e + 1
        }
        ,
        E.isZero = function() {
            return 0 === this.high && 0 === this.low
        }
        ,
        E.isNegative = function() {
            return !this.unsigned && this.high < 0
        }
        ,
        E.isPositive = function() {
            return this.unsigned || this.high >= 0
        }
        ,
        E.isOdd = function() {
            return 1 == (1 & this.low)
        }
        ,
        E.isEven = function() {
            return 0 == (1 & this.low)
        }
        ,
        E.equals = function(t) {
            return e(t) || (t = h(t)),
            (this.unsigned === t.unsigned || this.high >>> 31 != 1 || t.high >>> 31 != 1) && this.high === t.high && this.low === t.low
        }
        ,
        E.eq = E.equals,
        E.notEquals = function(t) {
            return !this.eq(t)
        }
        ,
        E.neq = E.notEquals,
        E.lessThan = function(t) {
            return this.comp(t) < 0
        }
        ,
        E.lt = E.lessThan,
        E.lessThanOrEqual = function(t) {
            return this.comp(t) <= 0
        }
        ,
        E.lte = E.lessThanOrEqual,
        E.greaterThan = function(t) {
            return this.comp(t) > 0
        }
        ,
        E.gt = E.greaterThan,
        E.greaterThanOrEqual = function(t) {
            return this.comp(t) >= 0
        }
        ,
        E.gte = E.greaterThanOrEqual,
        E.compare = function(t) {
            if (e(t) || (t = h(t)),
            this.eq(t))
                return 0;
            var r = this.isNegative()
              , i = t.isNegative();
            return r && !i ? -1 : !r && i ? 1 : this.unsigned ? t.high >>> 0 > this.high >>> 0 || t.high === this.high && t.low >>> 0 > this.low >>> 0 ? -1 : 1 : this.sub(t).isNegative() ? -1 : 1
        }
        ,
        E.comp = E.compare,
        E.negate = function() {
            return !this.unsigned && this.eq(_) ? _ : this.not().add(y)
        }
        ,
        E.neg = E.negate,
        E.add = function(t) {
            e(t) || (t = h(t));
            var r = this.high >>> 16
              , i = 65535 & this.high
              , n = this.low >>> 16
              , o = 65535 & this.low
              , f = t.high >>> 16
              , a = 65535 & t.high
              , u = t.low >>> 16
              , l = 0
              , c = 0
              , d = 0
              , p = 0;
            return d += (p += o + (65535 & t.low)) >>> 16,
            c += (d += n + u) >>> 16,
            l += (c += i + a) >>> 16,
            l += r + f,
            s((d &= 65535) << 16 | (p &= 65535), (l &= 65535) << 16 | (c &= 65535), this.unsigned)
        }
        ,
        E.subtract = function(t) {
            return e(t) || (t = h(t)),
            this.add(t.neg())
        }
        ,
        E.sub = E.subtract,
        E.multiply = function(t) {
            if (this.isZero())
                return p;
            if (e(t) || (t = h(t)),
            t.isZero())
                return p;
            if (this.eq(_))
                return t.isOdd() ? _ : p;
            if (t.eq(_))
                return this.isOdd() ? _ : p;
            if (this.isNegative())
                return t.isNegative() ? this.neg().mul(t.neg()) : this.neg().mul(t).neg();
            if (t.isNegative())
                return this.mul(t.neg()).neg();
            if (this.lt(d) && t.lt(d))
                return o(this.toNumber() * t.toNumber(), this.unsigned);
            var r = this.high >>> 16
              , i = 65535 & this.high
              , n = this.low >>> 16
              , f = 65535 & this.low
              , a = t.high >>> 16
              , u = 65535 & t.high
              , l = t.low >>> 16
              , c = 65535 & t.low
              , g = 0
              , y = 0
              , v = 0
              , b = 0;
            return v += (b += f * c) >>> 16,
            y += (v += n * c) >>> 16,
            v &= 65535,
            y += (v += f * l) >>> 16,
            g += (y += i * c) >>> 16,
            y &= 65535,
            g += (y += n * l) >>> 16,
            y &= 65535,
            g += (y += f * u) >>> 16,
            g += r * c + i * l + n * u + f * a,
            s((v &= 65535) << 16 | (b &= 65535), (g &= 65535) << 16 | (y &= 65535), this.unsigned)
        }
        ,
        E.mul = E.multiply,
        E.divide = function(t) {
            if (e(t) || (t = h(t)),
            t.isZero())
                throw Error("division by zero");
            if (this.isZero())
                return this.unsigned ? g : p;
            var r, i, n;
            if (this.unsigned) {
                if (t.unsigned || (t = t.toUnsigned()),
                t.gt(this))
                    return g;
                if (t.gt(this.shru(1)))
                    return v;
                n = g
            } else {
                if (this.eq(_))
                    return t.eq(y) || t.eq(b) ? _ : t.eq(_) ? y : (r = this.shr(1).div(t).shl(1)).eq(p) ? t.isNegative() ? y : b : (i = this.sub(t.mul(r)),
                    n = r.add(i.div(t)));
                if (t.eq(_))
                    return this.unsigned ? g : p;
                if (this.isNegative())
                    return t.isNegative() ? this.neg().div(t.neg()) : this.neg().div(t).neg();
                if (t.isNegative())
                    return this.div(t.neg()).neg();
                n = p
            }
            for (i = this; i.gte(t); ) {
                r = Math.max(1, Math.floor(i.toNumber() / t.toNumber()));
                for (var s = Math.ceil(Math.log(r) / Math.LN2), a = s <= 48 ? 1 : f(2, s - 48), u = o(r), l = u.mul(t); l.isNegative() || l.gt(i); )
                    l = (u = o(r -= a, this.unsigned)).mul(t);
                u.isZero() && (u = y),
                n = n.add(u),
                i = i.sub(l)
            }
            return n
        }
        ,
        E.div = E.divide,
        E.modulo = function(t) {
            return e(t) || (t = h(t)),
            this.sub(this.div(t).mul(t))
        }
        ,
        E.mod = E.modulo,
        E.not = function() {
            return s(~this.low, ~this.high, this.unsigned)
        }
        ,
        E.and = function(t) {
            return e(t) || (t = h(t)),
            s(this.low & t.low, this.high & t.high, this.unsigned)
        }
        ,
        E.or = function(t) {
            return e(t) || (t = h(t)),
            s(this.low | t.low, this.high | t.high, this.unsigned)
        }
        ,
        E.xor = function(t) {
            return e(t) || (t = h(t)),
            s(this.low ^ t.low, this.high ^ t.high, this.unsigned)
        }
        ,
        E.shiftLeft = function(t) {
            return e(t) && (t = t.toInt()),
            0 == (t &= 63) ? this : t < 32 ? s(this.low << t, this.high << t | this.low >>> 32 - t, this.unsigned) : s(0, this.low << t - 32, this.unsigned)
        }
        ,
        E.shl = E.shiftLeft,
        E.shiftRight = function(t) {
            return e(t) && (t = t.toInt()),
            0 == (t &= 63) ? this : t < 32 ? s(this.low >>> t | this.high << 32 - t, this.high >> t, this.unsigned) : s(this.high >> t - 32, this.high >= 0 ? 0 : -1, this.unsigned)
        }
        ,
        E.shr = E.shiftRight,
        E.shiftRightUnsigned = function(t) {
            if (e(t) && (t = t.toInt()),
            0 == (t &= 63))
                return this;
            var r = this.high;
            return t < 32 ? s(this.low >>> t | r << 32 - t, r >>> t, this.unsigned) : s(32 === t ? r : r >>> t - 32, 0, this.unsigned)
        }
        ,
        E.shru = E.shiftRightUnsigned,
        E.toSigned = function() {
            return this.unsigned ? s(this.low, this.high, !1) : this
        }
        ,
        E.toUnsigned = function() {
            return this.unsigned ? this : s(this.low, this.high, !0)
        }
        ,
        E.toBytes = function(t) {
            return t ? this.toBytesLE() : this.toBytesBE()
        }
        ,
        E.toBytesLE = function() {
            var t = this.high
              , e = this.low;
            return [255 & e, e >>> 8 & 255, e >>> 16 & 255, e >>> 24 & 255, 255 & t, t >>> 8 & 255, t >>> 16 & 255, t >>> 24 & 255]
        }
        ,
        E.toBytesBE = function() {
            var t = this.high
              , e = this.low;
            return [t >>> 24 & 255, t >>> 16 & 255, t >>> 8 & 255, 255 & t, e >>> 24 & 255, e >>> 16 & 255, e >>> 8 & 255, 255 & e]
        }
        ,
        t
    }
    ) ? i.apply(e, n) : i) || (t.exports = o)
}
, function(t, e, r) {
    var i = r(67)
      , n = r(86)
      , o = r(33);
    e.createCipher = e.Cipher = i.createCipher,
    e.createCipheriv = e.Cipheriv = i.createCipheriv,
    e.createDecipher = e.Decipher = n.createDecipher,
    e.createDecipheriv = e.Decipheriv = n.createDecipheriv,
    e.listCiphers = e.getCiphers = function() {
        return Object.keys(o)
    }
}
, function(t, e, r) {
    var i = r(30)
      , n = r(34)
      , o = r(0).Buffer
      , s = r(40)
      , f = r(6)
      , a = r(17)
      , h = r(41);
    function u(t, e, r) {
        f.call(this),
        this._cache = new c,
        this._cipher = new a.AES(e),
        this._prev = o.from(r),
        this._mode = t,
        this._autopadding = !0
    }
    r(1)(u, f),
    u.prototype._update = function(t) {
        var e, r;
        this._cache.add(t);
        for (var i = []; e = this._cache.get(); )
            r = this._mode.encrypt(this, e),
            i.push(r);
        return o.concat(i)
    }
    ;
    var l = o.alloc(16, 16);
    function c() {
        this.cache = o.allocUnsafe(0)
    }
    function d(t, e, r) {
        var f = i[t.toLowerCase()];
        if (!f)
            throw new TypeError("invalid suite type");
        if ("string" == typeof e && (e = o.from(e)),
        e.length !== f.key / 8)
            throw new TypeError("invalid key length " + e.length);
        if ("string" == typeof r && (r = o.from(r)),
        "GCM" !== f.mode && r.length !== f.iv)
            throw new TypeError("invalid iv length " + r.length);
        return "stream" === f.type ? new s(f.module,e,r) : "auth" === f.type ? new n(f.module,e,r) : new u(f.module,e,r)
    }
    u.prototype._final = function() {
        var t = this._cache.flush();
        if (this._autopadding)
            return t = this._mode.encrypt(this, t),
            this._cipher.scrub(),
            t;
        if (!t.equals(l))
            throw this._cipher.scrub(),
            new Error("data not multiple of block length")
    }
    ,
    u.prototype.setAutoPadding = function(t) {
        return this._autopadding = !!t,
        this
    }
    ,
    c.prototype.add = function(t) {
        this.cache = o.concat([this.cache, t])
    }
    ,
    c.prototype.get = function() {
        if (this.cache.length > 15) {
            var t = this.cache.slice(0, 16);
            return this.cache = this.cache.slice(16),
            t
        }
        return null
    }
    ,
    c.prototype.flush = function() {
        for (var t = 16 - this.cache.length, e = o.allocUnsafe(t), r = -1; ++r < t; )
            e.writeUInt8(t, r);
        return o.concat([this.cache, e])
    }
    ,
    e.createCipheriv = d,
    e.createCipher = function(t, e) {
        var r = i[t.toLowerCase()];
        if (!r)
            throw new TypeError("invalid suite type");
        var n = h(e, !1, r.key, r.iv);
        return d(t, n.key, n.iv)
    }
}
, function(t, e) {
    e.encrypt = function(t, e) {
        return t._cipher.encryptBlock(e)
    }
    ,
    e.decrypt = function(t, e) {
        return t._cipher.decryptBlock(e)
    }
}
, function(t, e, r) {
    var i = r(13);
    e.encrypt = function(t, e) {
        var r = i(e, t._prev);
        return t._prev = t._cipher.encryptBlock(r),
        t._prev
    }
    ,
    e.decrypt = function(t, e) {
        var r = t._prev;
        t._prev = e;
        var n = t._cipher.decryptBlock(e);
        return i(n, r)
    }
}
, function(t, e, r) {
    var i = r(0).Buffer
      , n = r(13);
    function o(t, e, r) {
        var o = e.length
          , s = n(e, t._cache);
        return t._cache = t._cache.slice(o),
        t._prev = i.concat([t._prev, r ? e : s]),
        s
    }
    e.encrypt = function(t, e, r) {
        for (var n, s = i.allocUnsafe(0); e.length; ) {
            if (0 === t._cache.length && (t._cache = t._cipher.encryptBlock(t._prev),
            t._prev = i.allocUnsafe(0)),
            !(t._cache.length <= e.length)) {
                s = i.concat([s, o(t, e, r)]);
                break
            }
            n = t._cache.length,
            s = i.concat([s, o(t, e.slice(0, n), r)]),
            e = e.slice(n)
        }
        return s
    }
}
, function(t, e, r) {
    var i = r(0).Buffer;
    function n(t, e, r) {
        var n = t._cipher.encryptBlock(t._prev)[0] ^ e;
        return t._prev = i.concat([t._prev.slice(1), i.from([r ? e : n])]),
        n
    }
    e.encrypt = function(t, e, r) {
        for (var o = e.length, s = i.allocUnsafe(o), f = -1; ++f < o; )
            s[f] = n(t, e[f], r);
        return s
    }
}
, function(t, e, r) {
    var i = r(0).Buffer;
    function n(t, e, r) {
        for (var i, n, s, f = -1, a = 0; ++f < 8; )
            i = t._cipher.encryptBlock(t._prev),
            n = e & 1 << 7 - f ? 128 : 0,
            a += (128 & (s = i[0] ^ n)) >> f % 8,
            t._prev = o(t._prev, r ? n : s);
        return a
    }
    function o(t, e) {
        var r = t.length
          , n = -1
          , o = i.allocUnsafe(t.length);
        for (t = i.concat([t, i.from([e])]); ++n < r; )
            o[n] = t[n] << 1 | t[n + 1] >> 7;
        return o
    }
    e.encrypt = function(t, e, r) {
        for (var o = e.length, s = i.allocUnsafe(o), f = -1; ++f < o; )
            s[f] = n(t, e[f], r);
        return s
    }
}
, function(t, e, r) {
    (function(t) {
        var i = r(13);
        function n(t) {
            return t._prev = t._cipher.encryptBlock(t._prev),
            t._prev
        }
        e.encrypt = function(e, r) {
            for (; e._cache.length < r.length; )
                e._cache = t.concat([e._cache, n(e)]);
            var o = e._cache.slice(0, r.length);
            return e._cache = e._cache.slice(r.length),
            i(r, o)
        }
    }
    ).call(this, r(2).Buffer)
}
, function(t, e) {}
, function(t, e, r) {
    "use strict";
    var i = r(0).Buffer
      , n = r(76);
    function o(t, e, r) {
        t.copy(e, r)
    }
    t.exports = function() {
        function t() {
            !function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }(this, t),
            this.head = null,
            this.tail = null,
            this.length = 0
        }
        return t.prototype.push = function(t) {
            var e = {
                data: t,
                next: null
            };
            this.length > 0 ? this.tail.next = e : this.head = e,
            this.tail = e,
            ++this.length
        }
        ,
        t.prototype.unshift = function(t) {
            var e = {
                data: t,
                next: this.head
            };
            0 === this.length && (this.tail = e),
            this.head = e,
            ++this.length
        }
        ,
        t.prototype.shift = function() {
            if (0 !== this.length) {
                var t = this.head.data;
                return 1 === this.length ? this.head = this.tail = null : this.head = this.head.next,
                --this.length,
                t
            }
        }
        ,
        t.prototype.clear = function() {
            this.head = this.tail = null,
            this.length = 0
        }
        ,
        t.prototype.join = function(t) {
            if (0 === this.length)
                return "";
            for (var e = this.head, r = "" + e.data; e = e.next; )
                r += t + e.data;
            return r
        }
        ,
        t.prototype.concat = function(t) {
            if (0 === this.length)
                return i.alloc(0);
            if (1 === this.length)
                return this.head.data;
            for (var e = i.allocUnsafe(t >>> 0), r = this.head, n = 0; r; )
                o(r.data, e, n),
                n += r.data.length,
                r = r.next;
            return e
        }
        ,
        t
    }(),
    n && n.inspect && n.inspect.custom && (t.exports.prototype[n.inspect.custom] = function() {
        var t = n.inspect({
            length: this.length
        });
        return this.constructor.name + " " + t
    }
    )
}
, function(t, e) {}
, function(t, e, r) {
    (function(t) {
        var i = void 0 !== t && t || "undefined" != typeof self && self || window
          , n = Function.prototype.apply;
        function o(t, e) {
            this._id = t,
            this._clearFn = e
        }
        e.setTimeout = function() {
            return new o(n.call(setTimeout, i, arguments),clearTimeout)
        }
        ,
        e.setInterval = function() {
            return new o(n.call(setInterval, i, arguments),clearInterval)
        }
        ,
        e.clearTimeout = e.clearInterval = function(t) {
            t && t.close()
        }
        ,
        o.prototype.unref = o.prototype.ref = function() {}
        ,
        o.prototype.close = function() {
            this._clearFn.call(i, this._id)
        }
        ,
        e.enroll = function(t, e) {
            clearTimeout(t._idleTimeoutId),
            t._idleTimeout = e
        }
        ,
        e.unenroll = function(t) {
            clearTimeout(t._idleTimeoutId),
            t._idleTimeout = -1
        }
        ,
        e._unrefActive = e.active = function(t) {
            clearTimeout(t._idleTimeoutId);
            var e = t._idleTimeout;
            e >= 0 && (t._idleTimeoutId = setTimeout(function() {
                t._onTimeout && t._onTimeout()
            }, e))
        }
        ,
        r(78),
        e.setImmediate = "undefined" != typeof self && self.setImmediate || void 0 !== t && t.setImmediate || this && this.setImmediate,
        e.clearImmediate = "undefined" != typeof self && self.clearImmediate || void 0 !== t && t.clearImmediate || this && this.clearImmediate
    }
    ).call(this, r(3))
}
, function(t, e, r) {
    (function(t, e) {
        !function(t, r) {
            "use strict";
            if (!t.setImmediate) {
                var i, n = 1, o = {}, s = !1, f = t.document, a = Object.getPrototypeOf && Object.getPrototypeOf(t);
                a = a && a.setTimeout ? a : t,
                "[object process]" === {}.toString.call(t.process) ? i = function(t) {
                    e.nextTick(function() {
                        u(t)
                    })
                }
                : function() {
                    if (t.postMessage && !t.importScripts) {
                        var e = !0
                          , r = t.onmessage;
                        return t.onmessage = function() {
                            e = !1
                        }
                        ,
                        t.postMessage("", "*"),
                        t.onmessage = r,
                        e
                    }
                }() ? function() {
                    var e = "setImmediate$" + Math.random() + "$"
                      , r = function(r) {
                        r.source === t && "string" == typeof r.data && 0 === r.data.indexOf(e) && u(+r.data.slice(e.length))
                    };
                    t.addEventListener ? t.addEventListener("message", r, !1) : t.attachEvent("onmessage", r),
                    i = function(r) {
                        t.postMessage(e + r, "*")
                    }
                }() : t.MessageChannel ? function() {
                    var t = new MessageChannel;
                    t.port1.onmessage = function(t) {
                        u(t.data)
                    }
                    ,
                    i = function(e) {
                        t.port2.postMessage(e)
                    }
                }() : f && "onreadystatechange"in f.createElement("script") ? function() {
                    var t = f.documentElement;
                    i = function(e) {
                        var r = f.createElement("script");
                        r.onreadystatechange = function() {
                            u(e),
                            r.onreadystatechange = null,
                            t.removeChild(r),
                            r = null
                        }
                        ,
                        t.appendChild(r)
                    }
                }() : i = function(t) {
                    setTimeout(u, 0, t)
                }
                ,
                a.setImmediate = function(t) {
                    "function" != typeof t && (t = new Function("" + t));
                    for (var e = new Array(arguments.length - 1), r = 0; r < e.length; r++)
                        e[r] = arguments[r + 1];
                    var s = {
                        callback: t,
                        args: e
                    };
                    return o[n] = s,
                    i(n),
                    n++
                }
                ,
                a.clearImmediate = h
            }
            function h(t) {
                delete o[t]
            }
            function u(t) {
                if (s)
                    setTimeout(u, 0, t);
                else {
                    var e = o[t];
                    if (e) {
                        s = !0;
                        try {
                            !function(t) {
                                var e = t.callback
                                  , i = t.args;
                                switch (i.length) {
                                case 0:
                                    e();
                                    break;
                                case 1:
                                    e(i[0]);
                                    break;
                                case 2:
                                    e(i[0], i[1]);
                                    break;
                                case 3:
                                    e(i[0], i[1], i[2]);
                                    break;
                                default:
                                    e.apply(r, i)
                                }
                            }(e)
                        } finally {
                            h(t),
                            s = !1
                        }
                    }
                }
            }
        }("undefined" == typeof self ? void 0 === t ? this : t : self)
    }
    ).call(this, r(3), r(9))
}
, function(t, e, r) {
    (function(e) {
        function r(t) {
            try {
                if (!e.localStorage)
                    return !1
            } catch (t) {
                return !1
            }
            var r = e.localStorage[t];
            return null != r && "true" === String(r).toLowerCase()
        }
        t.exports = function(t, e) {
            if (r("noDeprecation"))
                return t;
            var i = !1;
            return function() {
                if (!i) {
                    if (r("throwDeprecation"))
                        throw new Error(e);
                    r("traceDeprecation") ? console.trace(e) : console.warn(e),
                    i = !0
                }
                return t.apply(this, arguments)
            }
        }
    }
    ).call(this, r(3))
}
, function(t, e, r) {
    "use strict";
    t.exports = o;
    var i = r(39)
      , n = r(14);
    function o(t) {
        if (!(this instanceof o))
            return new o(t);
        i.call(this, t)
    }
    n.inherits = r(1),
    n.inherits(o, i),
    o.prototype._transform = function(t, e, r) {
        r(null, t)
    }
}
, function(t, e, r) {
    t.exports = r(22)
}
, function(t, e, r) {
    t.exports = r(7)
}
, function(t, e, r) {
    t.exports = r(21).Transform
}
, function(t, e, r) {
    t.exports = r(21).PassThrough
}
, function(t, e, r) {
    var i = r(0).Buffer
      , n = i.alloc(16, 0);
    function o(t) {
        var e = i.allocUnsafe(16);
        return e.writeUInt32BE(t[0] >>> 0, 0),
        e.writeUInt32BE(t[1] >>> 0, 4),
        e.writeUInt32BE(t[2] >>> 0, 8),
        e.writeUInt32BE(t[3] >>> 0, 12),
        e
    }
    function s(t) {
        this.h = t,
        this.state = i.alloc(16, 0),
        this.cache = i.allocUnsafe(0)
    }
    s.prototype.ghash = function(t) {
        for (var e = -1; ++e < t.length; )
            this.state[e] ^= t[e];
        this._multiply()
    }
    ,
    s.prototype._multiply = function() {
        for (var t, e, r = function(t) {
            return [t.readUInt32BE(0), t.readUInt32BE(4), t.readUInt32BE(8), t.readUInt32BE(12)]
        }(this.h), i = [0, 0, 0, 0], n = -1; ++n < 128; ) {
            for (0 != (this.state[~~(n / 8)] & 1 << 7 - n % 8) && (i[0] ^= r[0],
            i[1] ^= r[1],
            i[2] ^= r[2],
            i[3] ^= r[3]),
            e = 0 != (1 & r[3]),
            t = 3; t > 0; t--)
                r[t] = r[t] >>> 1 | (1 & r[t - 1]) << 31;
            r[0] = r[0] >>> 1,
            e && (r[0] = r[0] ^ 225 << 24)
        }
        this.state = o(i)
    }
    ,
    s.prototype.update = function(t) {
        var e;
        for (this.cache = i.concat([this.cache, t]); this.cache.length >= 16; )
            e = this.cache.slice(0, 16),
            this.cache = this.cache.slice(16),
            this.ghash(e)
    }
    ,
    s.prototype.final = function(t, e) {
        return this.cache.length && this.ghash(i.concat([this.cache, n], 16)),
        this.ghash(o([0, t, 0, e])),
        this.state
    }
    ,
    t.exports = s
}
, function(t, e, r) {
    var i = r(34)
      , n = r(0).Buffer
      , o = r(30)
      , s = r(40)
      , f = r(6)
      , a = r(17)
      , h = r(41);
    function u(t, e, r) {
        f.call(this),
        this._cache = new l,
        this._last = void 0,
        this._cipher = new a.AES(e),
        this._prev = n.from(r),
        this._mode = t,
        this._autopadding = !0
    }
    function l() {
        this.cache = n.allocUnsafe(0)
    }
    function c(t, e, r) {
        var f = o[t.toLowerCase()];
        if (!f)
            throw new TypeError("invalid suite type");
        if ("string" == typeof r && (r = n.from(r)),
        "GCM" !== f.mode && r.length !== f.iv)
            throw new TypeError("invalid iv length " + r.length);
        if ("string" == typeof e && (e = n.from(e)),
        e.length !== f.key / 8)
            throw new TypeError("invalid key length " + e.length);
        return "stream" === f.type ? new s(f.module,e,r,!0) : "auth" === f.type ? new i(f.module,e,r,!0) : new u(f.module,e,r)
    }
    r(1)(u, f),
    u.prototype._update = function(t) {
        var e, r;
        this._cache.add(t);
        for (var i = []; e = this._cache.get(this._autopadding); )
            r = this._mode.decrypt(this, e),
            i.push(r);
        return n.concat(i)
    }
    ,
    u.prototype._final = function() {
        var t = this._cache.flush();
        if (this._autopadding)
            return function(t) {
                var e = t[15];
                if (e < 1 || e > 16)
                    throw new Error("unable to decrypt data");
                var r = -1;
                for (; ++r < e; )
                    if (t[r + (16 - e)] !== e)
                        throw new Error("unable to decrypt data");
                if (16 === e)
                    return;
                return t.slice(0, 16 - e)
            }(this._mode.decrypt(this, t));
        if (t)
            throw new Error("data not multiple of block length")
    }
    ,
    u.prototype.setAutoPadding = function(t) {
        return this._autopadding = !!t,
        this
    }
    ,
    l.prototype.add = function(t) {
        this.cache = n.concat([this.cache, t])
    }
    ,
    l.prototype.get = function(t) {
        var e;
        if (t) {
            if (this.cache.length > 16)
                return e = this.cache.slice(0, 16),
                this.cache = this.cache.slice(16),
                e
        } else if (this.cache.length >= 16)
            return e = this.cache.slice(0, 16),
            this.cache = this.cache.slice(16),
            e;
        return null
    }
    ,
    l.prototype.flush = function() {
        if (this.cache.length)
            return this.cache
    }
    ,
    e.createDecipher = function(t, e) {
        var r = o[t.toLowerCase()];
        if (!r)
            throw new TypeError("invalid suite type");
        var i = h(e, !1, r.key, r.iv);
        return c(t, i.key, i.iv)
    }
    ,
    e.createDecipheriv = c
}
, function(t, e, r) {
    (function(t, i) {
        var n = /%[sdj%]/g;
        e.format = function(t) {
            if (!v(t)) {
                for (var e = [], r = 0; r < arguments.length; r++)
                    e.push(f(arguments[r]));
                return e.join(" ")
            }
            r = 1;
            for (var i = arguments, o = i.length, s = String(t).replace(n, function(t) {
                if ("%%" === t)
                    return "%";
                if (r >= o)
                    return t;
                switch (t) {
                case "%s":
                    return String(i[r++]);
                case "%d":
                    return Number(i[r++]);
                case "%j":
                    try {
                        return JSON.stringify(i[r++])
                    } catch (t) {
                        return "[Circular]"
                    }
                default:
                    return t
                }
            }), a = i[r]; r < o; a = i[++r])
                g(a) || !m(a) ? s += " " + a : s += " " + f(a);
            return s
        }
        ,
        e.deprecate = function(r, n) {
            if (b(t.process))
                return function() {
                    return e.deprecate(r, n).apply(this, arguments)
                }
                ;
            if (!0 === i.noDeprecation)
                return r;
            var o = !1;
            return function() {
                if (!o) {
                    if (i.throwDeprecation)
                        throw new Error(n);
                    i.traceDeprecation ? console.trace(n) : console.error(n),
                    o = !0
                }
                return r.apply(this, arguments)
            }
        }
        ;
        var o, s = {};
        function f(t, r) {
            var i = {
                seen: [],
                stylize: h
            };
            return arguments.length >= 3 && (i.depth = arguments[2]),
            arguments.length >= 4 && (i.colors = arguments[3]),
            p(r) ? i.showHidden = r : r && e._extend(i, r),
            b(i.showHidden) && (i.showHidden = !1),
            b(i.depth) && (i.depth = 2),
            b(i.colors) && (i.colors = !1),
            b(i.customInspect) && (i.customInspect = !0),
            i.colors && (i.stylize = a),
            u(i, t, i.depth)
        }
        function a(t, e) {
            var r = f.styles[e];
            return r ? "[" + f.colors[r][0] + "m" + t + "[" + f.colors[r][1] + "m" : t
        }
        function h(t, e) {
            return t
        }
        function u(t, r, i) {
            if (t.customInspect && r && T(r.inspect) && r.inspect !== e.inspect && (!r.constructor || r.constructor.prototype !== r)) {
                var n = r.inspect(i, t);
                return v(n) || (n = u(t, n, i)),
                n
            }
            var o = function(t, e) {
                if (b(e))
                    return t.stylize("undefined", "undefined");
                if (v(e)) {
                    var r = "'" + JSON.stringify(e).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
                    return t.stylize(r, "string")
                }
                if (y(e))
                    return t.stylize("" + e, "number");
                if (p(e))
                    return t.stylize("" + e, "boolean");
                if (g(e))
                    return t.stylize("null", "null")
            }(t, r);
            if (o)
                return o;
            var s = Object.keys(r)
              , f = function(t) {
                var e = {};
                return t.forEach(function(t, r) {
                    e[t] = !0
                }),
                e
            }(s);
            if (t.showHidden && (s = Object.getOwnPropertyNames(r)),
            E(r) && (s.indexOf("message") >= 0 || s.indexOf("description") >= 0))
                return l(r);
            if (0 === s.length) {
                if (T(r)) {
                    var a = r.name ? ": " + r.name : "";
                    return t.stylize("[Function" + a + "]", "special")
                }
                if (w(r))
                    return t.stylize(RegExp.prototype.toString.call(r), "regexp");
                if (_(r))
                    return t.stylize(Date.prototype.toString.call(r), "date");
                if (E(r))
                    return l(r)
            }
            var h, m = "", S = !1, B = ["{", "}"];
            (d(r) && (S = !0,
            B = ["[", "]"]),
            T(r)) && (m = " [Function" + (r.name ? ": " + r.name : "") + "]");
            return w(r) && (m = " " + RegExp.prototype.toString.call(r)),
            _(r) && (m = " " + Date.prototype.toUTCString.call(r)),
            E(r) && (m = " " + l(r)),
            0 !== s.length || S && 0 != r.length ? i < 0 ? w(r) ? t.stylize(RegExp.prototype.toString.call(r), "regexp") : t.stylize("[Object]", "special") : (t.seen.push(r),
            h = S ? function(t, e, r, i, n) {
                for (var o = [], s = 0, f = e.length; s < f; ++s)
                    A(e, String(s)) ? o.push(c(t, e, r, i, String(s), !0)) : o.push("");
                return n.forEach(function(n) {
                    n.match(/^\d+$/) || o.push(c(t, e, r, i, n, !0))
                }),
                o
            }(t, r, i, f, s) : s.map(function(e) {
                return c(t, r, i, f, e, S)
            }),
            t.seen.pop(),
            function(t, e, r) {
                if (t.reduce(function(t, e) {
                    return 0,
                    e.indexOf("\n") >= 0 && 0,
                    t + e.replace(/\u001b\[\d\d?m/g, "").length + 1
                }, 0) > 60)
                    return r[0] + ("" === e ? "" : e + "\n ") + " " + t.join(",\n  ") + " " + r[1];
                return r[0] + e + " " + t.join(", ") + " " + r[1]
            }(h, m, B)) : B[0] + m + B[1]
        }
        function l(t) {
            return "[" + Error.prototype.toString.call(t) + "]"
        }
        function c(t, e, r, i, n, o) {
            var s, f, a;
            if ((a = Object.getOwnPropertyDescriptor(e, n) || {
                value: e[n]
            }).get ? f = a.set ? t.stylize("[Getter/Setter]", "special") : t.stylize("[Getter]", "special") : a.set && (f = t.stylize("[Setter]", "special")),
            A(i, n) || (s = "[" + n + "]"),
            f || (t.seen.indexOf(a.value) < 0 ? (f = g(r) ? u(t, a.value, null) : u(t, a.value, r - 1)).indexOf("\n") > -1 && (f = o ? f.split("\n").map(function(t) {
                return "  " + t
            }).join("\n").substr(2) : "\n" + f.split("\n").map(function(t) {
                return "   " + t
            }).join("\n")) : f = t.stylize("[Circular]", "special")),
            b(s)) {
                if (o && n.match(/^\d+$/))
                    return f;
                (s = JSON.stringify("" + n)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (s = s.substr(1, s.length - 2),
                s = t.stylize(s, "name")) : (s = s.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"),
                s = t.stylize(s, "string"))
            }
            return s + ": " + f
        }
        function d(t) {
            return Array.isArray(t)
        }
        function p(t) {
            return "boolean" == typeof t
        }
        function g(t) {
            return null === t
        }
        function y(t) {
            return "number" == typeof t
        }
        function v(t) {
            return "string" == typeof t
        }
        function b(t) {
            return void 0 === t
        }
        function w(t) {
            return m(t) && "[object RegExp]" === S(t)
        }
        function m(t) {
            return "object" == typeof t && null !== t
        }
        function _(t) {
            return m(t) && "[object Date]" === S(t)
        }
        function E(t) {
            return m(t) && ("[object Error]" === S(t) || t instanceof Error)
        }
        function T(t) {
            return "function" == typeof t
        }
        function S(t) {
            return Object.prototype.toString.call(t)
        }
        function B(t) {
            return t < 10 ? "0" + t.toString(10) : t.toString(10)
        }
        e.debuglog = function(t) {
            if (b(o) && (o = i.env.NODE_DEBUG || ""),
            t = t.toUpperCase(),
            !s[t])
                if (new RegExp("\\b" + t + "\\b","i").test(o)) {
                    var r = i.pid;
                    s[t] = function() {
                        var i = e.format.apply(e, arguments);
                        console.error("%s %d: %s", t, r, i)
                    }
                } else
                    s[t] = function() {}
                    ;
            return s[t]
        }
        ,
        e.inspect = f,
        f.colors = {
            bold: [1, 22],
            italic: [3, 23],
            underline: [4, 24],
            inverse: [7, 27],
            white: [37, 39],
            grey: [90, 39],
            black: [30, 39],
            blue: [34, 39],
            cyan: [36, 39],
            green: [32, 39],
            magenta: [35, 39],
            red: [31, 39],
            yellow: [33, 39]
        },
        f.styles = {
            special: "cyan",
            number: "yellow",
            boolean: "yellow",
            undefined: "grey",
            null: "bold",
            string: "green",
            date: "magenta",
            regexp: "red"
        },
        e.isArray = d,
        e.isBoolean = p,
        e.isNull = g,
        e.isNullOrUndefined = function(t) {
            return null == t
        }
        ,
        e.isNumber = y,
        e.isString = v,
        e.isSymbol = function(t) {
            return "symbol" == typeof t
        }
        ,
        e.isUndefined = b,
        e.isRegExp = w,
        e.isObject = m,
        e.isDate = _,
        e.isError = E,
        e.isFunction = T,
        e.isPrimitive = function(t) {
            return null === t || "boolean" == typeof t || "number" == typeof t || "string" == typeof t || "symbol" == typeof t || void 0 === t
        }
        ,
        e.isBuffer = r(88);
        var I = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        function A(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }
        e.log = function() {
            console.log("%s - %s", function() {
                var t = new Date
                  , e = [B(t.getHours()), B(t.getMinutes()), B(t.getSeconds())].join(":");
                return [t.getDate(), I[t.getMonth()], e].join(" ")
            }(), e.format.apply(e, arguments))
        }
        ,
        e.inherits = r(1),
        e._extend = function(t, e) {
            if (!e || !m(e))
                return t;
            for (var r = Object.keys(e), i = r.length; i--; )
                t[r[i]] = e[r[i]];
            return t
        }
    }
    ).call(this, r(3), r(9))
}
, function(t, e) {
    t.exports = function(t) {
        return t && "object" == typeof t && "function" == typeof t.copy && "function" == typeof t.fill && "function" == typeof t.readUInt8
    }
}
, function(t) {
    t.exports = {
        name: "bigi",
        version: "1.4.2",
        description: "Big integers.",
        keywords: ["cryptography", "math", "bitcoin", "arbitrary", "precision", "arithmetic", "big", "integer", "int", "number", "biginteger", "bigint", "bignumber", "decimal", "float"],
        devDependencies: {
            coveralls: "^2.11.2",
            istanbul: "^0.3.5",
            jshint: "^2.5.1",
            mocha: "^2.1.0",
            mochify: "^2.1.0"
        },
        repository: {
            url: "https://github.com/cryptocoinjs/bigi",
            type: "git"
        },
        main: "./lib/index.js",
        scripts: {
            "browser-test": "./node_modules/.bin/mochify --wd -R spec",
            test: "./node_modules/.bin/_mocha -- test/*.js",
            jshint: "./node_modules/.bin/jshint --config jshint.json lib/*.js ; true",
            unit: "./node_modules/.bin/mocha",
            coverage: "./node_modules/.bin/istanbul cover ./node_modules/.bin/_mocha -- --reporter list test/*.js",
            coveralls: "npm run-script coverage && node ./node_modules/.bin/coveralls < coverage/lcov.info"
        },
        dependencies: {},
        testling: {
            files: "test/*.js",
            harness: "mocha",
            browsers: ["ie/9..latest", "firefox/latest", "chrome/latest", "safari/6.0..latest", "iphone/6.0..latest", "android-browser/4.2..latest"]
        }
    }
}
, function(t, e, r) {
    (function(t) {
        var e = r(4)
          , i = r(44);
        i.fromByteArrayUnsigned = function(t) {
            return 128 & t[0] ? new i([0].concat(t)) : new i(t)
        }
        ,
        i.prototype.toByteArrayUnsigned = function() {
            var t = this.toByteArray();
            return 0 === t[0] ? t.slice(1) : t
        }
        ,
        i.fromDERInteger = function(t) {
            return new i(t)
        }
        ,
        i.prototype.toDERInteger = i.prototype.toByteArray,
        i.fromBuffer = function(t) {
            if (128 & t[0]) {
                var e = Array.prototype.slice.call(t);
                return new i([0].concat(e))
            }
            return new i(t)
        }
        ,
        i.fromHex = function(t) {
            return "" === t ? i.ZERO : (e.equal(t, t.match(/^[A-Fa-f0-9]+/), "Invalid hex string"),
            e.equal(t.length % 2, 0, "Incomplete hex"),
            new i(t,16))
        }
        ,
        i.prototype.toBuffer = function(e) {
            for (var r = this.toByteArrayUnsigned(), i = [], n = e - r.length; i.length < n; )
                i.push(0);
            return new t(i.concat(r))
        }
        ,
        i.prototype.toHex = function(t) {
            return this.toBuffer(t).toString("hex")
        }
    }
    ).call(this, r(2).Buffer)
}
, function(t, e, r) {
    var i = r(5)
      , n = r(92)
      , o = r(45);
    t.exports = function(t) {
        var e = n[t];
        if (!e)
            return null;
        var r = new i(e.p,16)
          , s = new i(e.a,16)
          , f = new i(e.b,16)
          , a = new i(e.n,16)
          , h = new i(e.h,16)
          , u = new i(e.Gx,16)
          , l = new i(e.Gy,16);
        return new o(r,s,f,u,l,a,h)
    }
}
, function(t) {
    t.exports = {
        secp128r1: {
            p: "fffffffdffffffffffffffffffffffff",
            a: "fffffffdfffffffffffffffffffffffc",
            b: "e87579c11079f43dd824993c2cee5ed3",
            n: "fffffffe0000000075a30d1b9038a115",
            h: "01",
            Gx: "161ff7528b899b2d0c28607ca52c5b86",
            Gy: "cf5ac8395bafeb13c02da292dded7a83"
        },
        secp160k1: {
            p: "fffffffffffffffffffffffffffffffeffffac73",
            a: "00",
            b: "07",
            n: "0100000000000000000001b8fa16dfab9aca16b6b3",
            h: "01",
            Gx: "3b4c382ce37aa192a4019e763036f4f5dd4d7ebb",
            Gy: "938cf935318fdced6bc28286531733c3f03c4fee"
        },
        secp160r1: {
            p: "ffffffffffffffffffffffffffffffff7fffffff",
            a: "ffffffffffffffffffffffffffffffff7ffffffc",
            b: "1c97befc54bd7a8b65acf89f81d4d4adc565fa45",
            n: "0100000000000000000001f4c8f927aed3ca752257",
            h: "01",
            Gx: "4a96b5688ef573284664698968c38bb913cbfc82",
            Gy: "23a628553168947d59dcc912042351377ac5fb32"
        },
        secp192k1: {
            p: "fffffffffffffffffffffffffffffffffffffffeffffee37",
            a: "00",
            b: "03",
            n: "fffffffffffffffffffffffe26f2fc170f69466a74defd8d",
            h: "01",
            Gx: "db4ff10ec057e9ae26b07d0280b7f4341da5d1b1eae06c7d",
            Gy: "9b2f2f6d9c5628a7844163d015be86344082aa88d95e2f9d"
        },
        secp192r1: {
            p: "fffffffffffffffffffffffffffffffeffffffffffffffff",
            a: "fffffffffffffffffffffffffffffffefffffffffffffffc",
            b: "64210519e59c80e70fa7e9ab72243049feb8deecc146b9b1",
            n: "ffffffffffffffffffffffff99def836146bc9b1b4d22831",
            h: "01",
            Gx: "188da80eb03090f67cbf20eb43a18800f4ff0afd82ff1012",
            Gy: "07192b95ffc8da78631011ed6b24cdd573f977a11e794811"
        },
        secp256k1: {
            p: "fffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f",
            a: "00",
            b: "07",
            n: "fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141",
            h: "01",
            Gx: "79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798",
            Gy: "483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8"
        },
        secp256r1: {
            p: "ffffffff00000001000000000000000000000000ffffffffffffffffffffffff",
            a: "ffffffff00000001000000000000000000000000fffffffffffffffffffffffc",
            b: "5ac635d8aa3a93e7b3ebbd55769886bc651d06b0cc53b0f63bce3c3e27d2604b",
            n: "ffffffff00000000ffffffffffffffffbce6faada7179e84f3b9cac2fc632551",
            h: "01",
            Gx: "6b17d1f2e12c4247f8bce6e563a440f277037d812deb33a0f4a13945d898c296",
            Gy: "4fe342e2fe1a7f9b8ee7eb4a7c0f9e162bce33576b315ececbb6406837bf51f5"
        }
    }
}
, function(t, e, r) {
    var i = r(1)
      , n = r(10)
      , o = r(0).Buffer
      , s = [1518500249, 1859775393, -1894007588, -899497514]
      , f = new Array(80);
    function a() {
        this.init(),
        this._w = f,
        n.call(this, 64, 56)
    }
    function h(t) {
        return t << 5 | t >>> 27
    }
    function u(t) {
        return t << 30 | t >>> 2
    }
    function l(t, e, r, i) {
        return 0 === t ? e & r | ~e & i : 2 === t ? e & r | e & i | r & i : e ^ r ^ i
    }
    i(a, n),
    a.prototype.init = function() {
        return this._a = 1732584193,
        this._b = 4023233417,
        this._c = 2562383102,
        this._d = 271733878,
        this._e = 3285377520,
        this
    }
    ,
    a.prototype._update = function(t) {
        for (var e = this._w, r = 0 | this._a, i = 0 | this._b, n = 0 | this._c, o = 0 | this._d, f = 0 | this._e, a = 0; a < 16; ++a)
            e[a] = t.readInt32BE(4 * a);
        for (; a < 80; ++a)
            e[a] = e[a - 3] ^ e[a - 8] ^ e[a - 14] ^ e[a - 16];
        for (var c = 0; c < 80; ++c) {
            var d = ~~(c / 20)
              , p = h(r) + l(d, i, n, o) + f + e[c] + s[d] | 0;
            f = o,
            o = n,
            n = u(i),
            i = r,
            r = p
        }
        this._a = r + this._a | 0,
        this._b = i + this._b | 0,
        this._c = n + this._c | 0,
        this._d = o + this._d | 0,
        this._e = f + this._e | 0
    }
    ,
    a.prototype._hash = function() {
        var t = o.allocUnsafe(20);
        return t.writeInt32BE(0 | this._a, 0),
        t.writeInt32BE(0 | this._b, 4),
        t.writeInt32BE(0 | this._c, 8),
        t.writeInt32BE(0 | this._d, 12),
        t.writeInt32BE(0 | this._e, 16),
        t
    }
    ,
    t.exports = a
}
, function(t, e, r) {
    var i = r(1)
      , n = r(10)
      , o = r(0).Buffer
      , s = [1518500249, 1859775393, -1894007588, -899497514]
      , f = new Array(80);
    function a() {
        this.init(),
        this._w = f,
        n.call(this, 64, 56)
    }
    function h(t) {
        return t << 1 | t >>> 31
    }
    function u(t) {
        return t << 5 | t >>> 27
    }
    function l(t) {
        return t << 30 | t >>> 2
    }
    function c(t, e, r, i) {
        return 0 === t ? e & r | ~e & i : 2 === t ? e & r | e & i | r & i : e ^ r ^ i
    }
    i(a, n),
    a.prototype.init = function() {
        return this._a = 1732584193,
        this._b = 4023233417,
        this._c = 2562383102,
        this._d = 271733878,
        this._e = 3285377520,
        this
    }
    ,
    a.prototype._update = function(t) {
        for (var e = this._w, r = 0 | this._a, i = 0 | this._b, n = 0 | this._c, o = 0 | this._d, f = 0 | this._e, a = 0; a < 16; ++a)
            e[a] = t.readInt32BE(4 * a);
        for (; a < 80; ++a)
            e[a] = h(e[a - 3] ^ e[a - 8] ^ e[a - 14] ^ e[a - 16]);
        for (var d = 0; d < 80; ++d) {
            var p = ~~(d / 20)
              , g = u(r) + c(p, i, n, o) + f + e[d] + s[p] | 0;
            f = o,
            o = n,
            n = l(i),
            i = r,
            r = g
        }
        this._a = r + this._a | 0,
        this._b = i + this._b | 0,
        this._c = n + this._c | 0,
        this._d = o + this._d | 0,
        this._e = f + this._e | 0
    }
    ,
    a.prototype._hash = function() {
        var t = o.allocUnsafe(20);
        return t.writeInt32BE(0 | this._a, 0),
        t.writeInt32BE(0 | this._b, 4),
        t.writeInt32BE(0 | this._c, 8),
        t.writeInt32BE(0 | this._d, 12),
        t.writeInt32BE(0 | this._e, 16),
        t
    }
    ,
    t.exports = a
}
, function(t, e, r) {
    var i = r(1)
      , n = r(49)
      , o = r(10)
      , s = r(0).Buffer
      , f = new Array(64);
    function a() {
        this.init(),
        this._w = f,
        o.call(this, 64, 56)
    }
    i(a, n),
    a.prototype.init = function() {
        return this._a = 3238371032,
        this._b = 914150663,
        this._c = 812702999,
        this._d = 4144912697,
        this._e = 4290775857,
        this._f = 1750603025,
        this._g = 1694076839,
        this._h = 3204075428,
        this
    }
    ,
    a.prototype._hash = function() {
        var t = s.allocUnsafe(28);
        return t.writeInt32BE(this._a, 0),
        t.writeInt32BE(this._b, 4),
        t.writeInt32BE(this._c, 8),
        t.writeInt32BE(this._d, 12),
        t.writeInt32BE(this._e, 16),
        t.writeInt32BE(this._f, 20),
        t.writeInt32BE(this._g, 24),
        t
    }
    ,
    t.exports = a
}
, function(t, e, r) {
    var i = r(1)
      , n = r(50)
      , o = r(10)
      , s = r(0).Buffer
      , f = new Array(160);
    function a() {
        this.init(),
        this._w = f,
        o.call(this, 128, 112)
    }
    i(a, n),
    a.prototype.init = function() {
        return this._ah = 3418070365,
        this._bh = 1654270250,
        this._ch = 2438529370,
        this._dh = 355462360,
        this._eh = 1731405415,
        this._fh = 2394180231,
        this._gh = 3675008525,
        this._hh = 1203062813,
        this._al = 3238371032,
        this._bl = 914150663,
        this._cl = 812702999,
        this._dl = 4144912697,
        this._el = 4290775857,
        this._fl = 1750603025,
        this._gl = 1694076839,
        this._hl = 3204075428,
        this
    }
    ,
    a.prototype._hash = function() {
        var t = s.allocUnsafe(48);
        function e(e, r, i) {
            t.writeInt32BE(e, i),
            t.writeInt32BE(r, i + 4)
        }
        return e(this._ah, this._al, 0),
        e(this._bh, this._bl, 8),
        e(this._ch, this._cl, 16),
        e(this._dh, this._dl, 24),
        e(this._eh, this._el, 32),
        e(this._fh, this._fl, 40),
        t
    }
    ,
    t.exports = a
}
, function(t, e, r) {
    "use strict";
    var i = r(1)
      , n = r(98)
      , o = r(6)
      , s = r(0).Buffer
      , f = r(99)
      , a = r(47)
      , h = r(48)
      , u = s.alloc(128);
    function l(t, e) {
        o.call(this, "digest"),
        "string" == typeof e && (e = s.from(e));
        var r = "sha512" === t || "sha384" === t ? 128 : 64;
        (this._alg = t,
        this._key = e,
        e.length > r) ? e = ("rmd160" === t ? new a : h(t)).update(e).digest() : e.length < r && (e = s.concat([e, u], r));
        for (var i = this._ipad = s.allocUnsafe(r), n = this._opad = s.allocUnsafe(r), f = 0; f < r; f++)
            i[f] = 54 ^ e[f],
            n[f] = 92 ^ e[f];
        this._hash = "rmd160" === t ? new a : h(t),
        this._hash.update(i)
    }
    i(l, o),
    l.prototype._update = function(t) {
        this._hash.update(t)
    }
    ,
    l.prototype._final = function() {
        var t = this._hash.digest();
        return ("rmd160" === this._alg ? new a : h(this._alg)).update(this._opad).update(t).digest()
    }
    ,
    t.exports = function(t, e) {
        return "rmd160" === (t = t.toLowerCase()) || "ripemd160" === t ? new l("rmd160",e) : "md5" === t ? new n(f,e) : new l(t,e)
    }
}
, function(t, e, r) {
    "use strict";
    var i = r(1)
      , n = r(0).Buffer
      , o = r(6)
      , s = n.alloc(128)
      , f = 64;
    function a(t, e) {
        o.call(this, "digest"),
        "string" == typeof e && (e = n.from(e)),
        this._alg = t,
        this._key = e,
        e.length > f ? e = t(e) : e.length < f && (e = n.concat([e, s], f));
        for (var r = this._ipad = n.allocUnsafe(f), i = this._opad = n.allocUnsafe(f), a = 0; a < f; a++)
            r[a] = 54 ^ e[a],
            i[a] = 92 ^ e[a];
        this._hash = [r]
    }
    i(a, o),
    a.prototype._update = function(t) {
        this._hash.push(t)
    }
    ,
    a.prototype._final = function() {
        var t = this._alg(n.concat(this._hash));
        return this._alg(n.concat([this._opad, t]))
    }
    ,
    t.exports = a
}
, function(t, e, r) {
    var i = r(24);
    t.exports = function(t) {
        return (new i).update(t).digest()
    }
}
, function(t, e, r) {
    var i = r(101);
    t.exports = i("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz")
}
, function(t, e, r) {
    var i = r(0).Buffer;
    t.exports = function(t) {
        for (var e = {}, r = t.length, n = t.charAt(0), o = 0; o < t.length; o++) {
            var s = t.charAt(o);
            if (void 0 !== e[s])
                throw new TypeError(s + " is ambiguous");
            e[s] = o
        }
        function f(t) {
            if ("string" != typeof t)
                throw new TypeError("Expected String");
            if (0 === t.length)
                return i.allocUnsafe(0);
            for (var o = [0], s = 0; s < t.length; s++) {
                var f = e[t[s]];
                if (void 0 === f)
                    return;
                for (var a = 0, h = f; a < o.length; ++a)
                    h += o[a] * r,
                    o[a] = 255 & h,
                    h >>= 8;
                for (; h > 0; )
                    o.push(255 & h),
                    h >>= 8
            }
            for (var u = 0; t[u] === n && u < t.length - 1; ++u)
                o.push(0);
            return i.from(o.reverse())
        }
        return {
            encode: function(e) {
                if (0 === e.length)
                    return "";
                for (var i = [0], o = 0; o < e.length; ++o) {
                    for (var s = 0, f = e[o]; s < i.length; ++s)
                        f += i[s] << 8,
                        i[s] = f % r,
                        f = f / r | 0;
                    for (; f > 0; )
                        i.push(f % r),
                        f = f / r | 0
                }
                for (var a = "", h = 0; 0 === e[h] && h < e.length - 1; ++h)
                    a += n;
                for (var u = i.length - 1; u >= 0; --u)
                    a += t[i[u]];
                return a
            },
            decodeUnsafe: f,
            decode: function(t) {
                var e = f(t);
                if (e)
                    return e;
                throw new Error("Non-base" + r + " character")
            }
        }
    }
}
, function(t, e, r) {
    "use strict";
    t.exports = function(t) {
        return function() {
            for (var e = arguments.length, r = Array(e), i = 0; i < e; i++)
                r[i] = arguments[i];
            return new Promise(function(e, i) {
                setTimeout(function() {
                    try {
                        e(t.apply(void 0, r))
                    } catch (t) {
                        i(t)
                    }
                })
            }
            )
        }
    }
}
, function(t, e, r) {
    "use strict";
    (function(e) {
        var i = r(4)
          , n = r(8)
          , o = r(52)
          , s = r(5)
          , f = r(104);
        function a(t, r, f, a, h) {
            o("Buffer", r),
            o(s, f),
            h && (r = n.sha256(e.concat([r, new e(h)]))),
            i.equal(r.length, 32, "Hash must be 256 bit");
            var u = f.toBuffer(32)
              , l = new e(32)
              , c = new e(32);
            c.fill(1),
            l.fill(0),
            l = n.HmacSHA256(e.concat([c, new e([0]), u, r]), l),
            c = n.HmacSHA256(c, l),
            l = n.HmacSHA256(e.concat([c, new e([1]), u, r]), l),
            c = n.HmacSHA256(c, l),
            c = n.HmacSHA256(c, l);
            for (var d = s.fromBuffer(c); d.signum() <= 0 || d.compareTo(t.n) >= 0 || !a(d); )
                l = n.HmacSHA256(e.concat([c, new e([0])]), l),
                c = n.HmacSHA256(c, l),
                c = n.HmacSHA256(c, l),
                d = s.fromBuffer(c);
            return d
        }
        function h(t, e, r, i) {
            var n = t.n
              , o = t.G
              , s = r.r
              , f = r.s;
            if (s.signum() <= 0 || s.compareTo(n) >= 0)
                return !1;
            if (f.signum() <= 0 || f.compareTo(n) >= 0)
                return !1;
            var a = f.modInverse(n)
              , h = e.multiply(a).mod(n)
              , u = s.multiply(a).mod(n)
              , l = o.multiplyTwo(h, i, u);
            return !t.isInfinity(l) && l.affineX.mod(n).equals(s)
        }
        function u(t, e, r, n) {
            i.strictEqual(3 & n, n, "Recovery param is more than two bits");
            var o = t.n
              , s = t.G
              , f = r.r
              , a = r.s;
            i(f.signum() > 0 && f.compareTo(o) < 0, "Invalid r value"),
            i(a.signum() > 0 && a.compareTo(o) < 0, "Invalid s value");
            var h = 1 & n
              , u = n >> 1 ? f.add(o) : f
              , l = t.pointFromX(h, u)
              , c = l.multiply(o);
            i(t.isInfinity(c), "nR is not a valid curve point");
            var d = e.negate().mod(o)
              , p = f.modInverse(o)
              , g = l.multiplyTwo(a, s, d).multiply(p);
            return t.validate(g),
            g
        }
        t.exports = {
            calcPubKeyRecoveryParam: function(t, e, r, i) {
                for (var n = 0; n < 4; n++)
                    if (u(t, e, r, n).equals(i))
                        return n;
                throw new Error("Unable to find valid recovery factor")
            },
            deterministicGenerateK: a,
            recoverPubKey: u,
            sign: function(t, e, r, i) {
                var n, o, h = s.fromBuffer(e), u = t.n, l = t.G, c = (a(t, e, r, function(e) {
                    var i = l.multiply(e);
                    return !t.isInfinity(i) && 0 !== (n = i.affineX.mod(u)).signum() && 0 !== (o = e.modInverse(u).multiply(h.add(r.multiply(n))).mod(u)).signum()
                }, i),
                u.shiftRight(1));
                return o.compareTo(c) > 0 && (o = u.subtract(o)),
                f(n, o)
            },
            verify: function(t, e, r, i) {
                return h(t, s.fromBuffer(e), r, i)
            },
            verifyRaw: h
        }
    }
    ).call(this, r(2).Buffer)
}
, function(t, e, r) {
    "use strict";
    (function(e) {
        var i = r(4)
          , n = r(52)
          , o = r(5);
        function s(t, r) {
            function i() {
                var i = t.toDERInteger()
                  , n = r.toDERInteger()
                  , o = [];
                return o.push(2, i.length),
                (o = o.concat(i)).push(2, n.length),
                (o = o.concat(n)).unshift(48, o.length),
                new e(o)
            }
            return n(o, t),
            n(o, r),
            {
                r: t,
                s: r,
                toCompact: function(i, n) {
                    n && (i += 4),
                    i += 27;
                    var o = new e(65);
                    return o.writeUInt8(i, 0),
                    t.toBuffer(32).copy(o, 1),
                    r.toBuffer(32).copy(o, 33),
                    o
                },
                toDER: i,
                toScriptSignature: function(t) {
                    var r = new e(1);
                    return r.writeUInt8(t, 0),
                    e.concat([i(), r])
                }
            }
        }
        s.parseCompact = function(t) {
            i.equal(t.length, 65, "Invalid signature length");
            var e = t.readUInt8(0) - 27;
            return i.equal(e, 7 & e, "Invalid signature parameter"),
            {
                compressed: !!(4 & e),
                i: e &= 3,
                signature: s(o.fromBuffer(t.slice(1, 33)), o.fromBuffer(t.slice(33)))
            }
        }
        ,
        s.fromDER = function(t) {
            i.equal(t.readUInt8(0), 48, "Not a DER sequence"),
            i.equal(t.readUInt8(1), t.length - 2, "Invalid sequence length"),
            i.equal(t.readUInt8(2), 2, "Expected a DER integer");
            var e = t.readUInt8(3);
            i(e > 0, "R length is zero");
            var r = 4 + e;
            i.equal(t.readUInt8(r), 2, "Expected a DER integer (2)");
            var n = t.readUInt8(r + 1);
            i(n > 0, "S length is zero");
            var f = t.slice(4, r)
              , a = t.slice(r + 2);
            r += 2 + n,
            e > 1 && 0 === f.readUInt8(0) && i(128 & f.readUInt8(1), "R value excessively padded"),
            n > 1 && 0 === a.readUInt8(0) && i(128 & a.readUInt8(1), "S value excessively padded"),
            i.equal(r, t.length, "Invalid DER encoding");
            var h = o.fromDERInteger(f)
              , u = o.fromDERInteger(a);
            return i(h.signum() >= 0, "R value is negative"),
            i(u.signum() >= 0, "S value is negative"),
            s(h, u)
        }
        ,
        s.parseScriptSignature = function(t) {
            var e = t.readUInt8(t.length - 1)
              , r = -129 & e;
            return i(r > 0 && r < 4, "Invalid hashType"),
            {
                signature: s.fromDER(t.slice(0, -1)),
                hashType: e
            }
        }
        ,
        t.exports = s
    }
    ).call(this, r(2).Buffer)
}
, function(t, e, r) {
    "use strict";
    var i = r(28)
      , n = r(19)
      , o = r(15)
      , s = r(51)
      , f = r(16);
    t.exports = {
        Aes: i,
        PrivateKey: n,
        PublicKey: o,
        Signature: s,
        key_utils: f
    }
}
]);
