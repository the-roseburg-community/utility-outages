"use strict";
(self.webpackChunkcustomer_outagemap = self.webpackChunkcustomer_outagemap || []).push([[2076], {
    40227: (_e, k, t) => {
        t.d(k, {
            A: () => I
        });
        var _ = t(44701)
          , g = t(90619)
          , K = t(7524)
          , S = t(11718)
          , V = t(87877)
          , w = t(85736)
          , W = t(99131)
          , H = (t(17179),
        t(69408),
        t(90496));
        let C = 0
          , F = class extends ((0,
        V.Te)((0,
        K.O)((0,
        S.sA)(g.A)))) {
            constructor(P) {
                super(P),
                this.id = `${Date.now().toString(16)}-analysis-${C++}`,
                this.title = null
            }
            get parent() {
                return this._get("parent")
            }
            set parent(P) {
                const v = this.parent;
                if ((0,
                w.Ru)(v))
                    switch (v.type) {
                    case "line-of-sight":
                    case "dimension":
                        v.releaseAnalysis(this);
                        break;
                    case "2d":
                    case "3d":
                        v.analyses.includes(this) && v.analyses.remove(this)
                    }
                this._set("parent", P)
            }
            get isEditable() {
                return this.requiredPropertiesForEditing.every(w.Ru)
            }
        }
        ;
        (0,
        _._)([(0,
        W.MZ)({
            type: String,
            constructOnly: !0,
            clonable: !1
        })], F.prototype, "id", void 0),
        (0,
        _._)([(0,
        W.MZ)({
            type: String
        })], F.prototype, "title", void 0),
        (0,
        _._)([(0,
        W.MZ)({
            constructOnly: !0
        })], F.prototype, "type", void 0),
        (0,
        _._)([(0,
        W.MZ)({
            clonable: !1,
            value: null
        })], F.prototype, "parent", null),
        (0,
        _._)([(0,
        W.MZ)({
            readOnly: !0
        })], F.prototype, "isEditable", null),
        (0,
        _._)([(0,
        W.MZ)({
            readOnly: !0
        })], F.prototype, "requiredPropertiesForEditing", void 0),
        F = (0,
        _._)([(0,
        H.$)("esri.analysis.Analysis")], F);
        const I = F
    }
    ,
    6869: (_e, k, t) => {
        t.d(k, {
            A: () => P
        });
        var _ = t(44701)
          , K = (t(87488),
        t(87704))
          , S = t(7524)
          , V = t(6812)
          , w = t(87877)
          , W = t(99131)
          , Y = t(10781)
          , H = (t(69408),
        t(90496))
          , C = t(17179)
          , F = t(12993);
        let I = class extends ((0,
        w.Te)(S.P)) {
            constructor(v) {
                super(v),
                this.type = "length",
                this.startPoint = null,
                this.endPoint = null,
                this.measureType = K.L.Direct,
                this.offset = 0,
                this.orientation = 0
            }
        }
        ;
        (0,
        _._)([(0,
        W.MZ)({
            type: ["length"],
            json: {
                write: {
                    isRequired: !0
                }
            }
        })], I.prototype, "type", void 0),
        (0,
        _._)([(0,
        W.MZ)({
            type: F.A,
            json: {
                write: !0
            }
        })], I.prototype, "startPoint", void 0),
        (0,
        _._)([(0,
        W.MZ)({
            type: F.A,
            json: {
                write: !0
            }
        })], I.prototype, "endPoint", void 0),
        (0,
        _._)([(0,
        W.MZ)({
            type: K.h,
            nonNullable: !0,
            json: {
                write: {
                    isRequired: !0
                }
            }
        })], I.prototype, "measureType", void 0),
        (0,
        _._)([(0,
        W.MZ)({
            type: Number,
            nonNullable: !0,
            json: {
                write: {
                    isRequired: !0
                }
            }
        })], I.prototype, "offset", void 0),
        (0,
        _._)([(0,
        W.MZ)({
            type: Number,
            nonNullable: !0,
            json: {
                write: {
                    isRequired: !0
                }
            }
        }), (0,
        Y.w)(v => V.ie.normalize((0,
        C.GB)(v), 0, !0))], I.prototype, "orientation", void 0),
        I = (0,
        _._)([(0,
        H.$)("esri.analysis.LengthDimension")], I);
        const P = I
    }
    ,
    68353: (_e, k, t) => {
        t.d(k, {
            A: () => v
        });
        var _ = t(44701)
          , g = t(1177)
          , K = t(90619)
          , S = t(7524)
          , V = t(87877)
          , w = t(85736)
          , W = t(99131)
          , H = (t(17179),
        t(69408),
        t(90496))
          , C = t(88048)
          , F = t(12993)
          , I = t(13154);
        let P = class extends ((0,
        V.Te)((0,
        S.O)(K.A))) {
            constructor(L) {
                super(L),
                this.position = null,
                this.elevationInfo = null,
                this.feature = null
            }
            equals(L) {
                return (0,
                w.CM)(this.position, L.position) && (0,
                w.CM)(this.elevationInfo, L.elevationInfo) && (0,
                g.xH)(this.feature, L.feature)
            }
        }
        ;
        (0,
        _._)([(0,
        W.MZ)({
            type: F.A
        }), (0,
        C.P)()], P.prototype, "position", void 0),
        (0,
        _._)([(0,
        W.MZ)({
            type: I.A
        }), (0,
        C.P)()], P.prototype, "elevationInfo", void 0),
        (0,
        _._)([(0,
        W.MZ)(g.N1)], P.prototype, "feature", void 0),
        P = (0,
        _._)([(0,
        H.$)("esri.analysis.LineOfSightAnalysisObserver")], P);
        const v = P
    }
    ,
    6838: (_e, k, t) => {
        t.d(k, {
            A: () => P
        });
        var _ = t(44701)
          , g = t(1177)
          , K = t(7524)
          , S = t(87877)
          , V = t(85736)
          , w = t(99131)
          , z = (t(17179),
        t(69408),
        t(90496))
          , H = t(88048)
          , C = t(12993)
          , F = t(13154);
        let I = class extends ((0,
        S.Te)(K.P)) {
            constructor(v) {
                super(v),
                this.position = null,
                this.elevationInfo = null,
                this.feature = null
            }
            equals(v) {
                return (0,
                V.CM)(this.position, v.position) && (0,
                V.CM)(this.elevationInfo, v.elevationInfo) && (0,
                g.xH)(this.feature, v.feature)
            }
        }
        ;
        (0,
        _._)([(0,
        w.MZ)({
            type: C.A
        }), (0,
        H.P)()], I.prototype, "position", void 0),
        (0,
        _._)([(0,
        w.MZ)({
            type: F.A
        }), (0,
        H.P)()], I.prototype, "elevationInfo", void 0),
        (0,
        _._)([(0,
        w.MZ)(g.N1)], I.prototype, "feature", void 0),
        I = (0,
        _._)([(0,
        z.$)("esri.analysis.LineOfSightAnalysisTarget")], I);
        const P = I
    }
    ,
    87704: (_e, k, t) => {
        var _, K;
        t.d(k, {
            L: () => _,
            h: () => g
        }),
        (K = _ || (_ = {})).Horizontal = "horizontal",
        K.Vertical = "vertical",
        K.Direct = "direct";
        const g = [_.Horizontal, _.Vertical, _.Direct]
    }
    ,
    1177: (_e, k, t) => {
        t.d(k, {
            N1: () => S,
            wY: () => K,
            xH: () => g
        });
        var _ = t(85736);
        function g(W, Y) {
            return K(W) === K(Y)
        }
        function K(W) {
            if ((0,
            _.$I)(W))
                return null;
            let z = null;
            return z = null != W.objectId ? W.objectId : null != W.layer && "objectIdField"in W.layer && null != W.layer.objectIdField && null != W.attributes ? W.attributes[W.layer.objectIdField] : W.uid,
            null == z ? null : `o-${null != W.layer ? W.layer.id : ""}-${z}`
        }
        const S = {
            json: {
                write: {
                    writer: function V(W, Y) {
                        var z;
                        (0,
                        _.$I)(W) || null == (null == (z = W.layer) ? void 0 : z.objectIdField) || null == W.attributes || (Y.feature = {
                            layerId: W.layer.id,
                            objectId: W.attributes[W.layer.objectIdField]
                        })
                    },
                    target: {
                        "feature.layerId": {
                            type: [Number, String]
                        },
                        "feature.objectId": {
                            type: [Number, String]
                        }
                    }
                },
                origins: {
                    "web-scene": {
                        read: function w(W) {
                            if (null != W.layerId && null != W.objectId)
                                return {
                                    uid: null,
                                    layer: {
                                        id: W.layerId,
                                        objectIdField: "ObjectId"
                                    },
                                    attributes: {
                                        ObjectId: W.objectId
                                    }
                                }
                        }
                    }
                }
            }
        }
    }
    ,
    8590: (_e, k, t) => {
        function _(g) {
            throw new Error('Could not dynamically require "' + g + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')
        }
        t.d(k, {
            c: () => _
        })
    }
    ,
    32969: (_e, k, t) => {
        t.d(k, {
            A: () => Z,
            B: () => Q,
            C: () => se,
            D: () => J,
            E: () => q,
            F: () => X,
            G: () => N,
            H: () => $,
            I: () => te,
            J: () => ee,
            K: () => ae,
            L: () => oe,
            M: () => ue,
            N: () => le,
            a: () => V,
            b: () => w,
            c: () => S,
            d: () => W,
            e: () => K,
            f: () => Y,
            g: () => de,
            h: () => z,
            i: () => H,
            j: () => I,
            k: () => L,
            l: () => o,
            m: () => n,
            n: () => h,
            o: () => P,
            p: () => A,
            q: () => G,
            r: () => v,
            s: () => T,
            t: () => C,
            u: () => D,
            v: () => U,
            w: () => F,
            x: () => B,
            y: () => R,
            z: () => M
        });
        var _ = t(94186)
          , g = t(46731);
        function K(ne) {
            return _.G.extendedSpatialReferenceInfo(ne)
        }
        function S(ne, re, ie) {
            return _.G.clip(g.g, ne, re, ie)
        }
        function V(ne, re, ie) {
            return _.G.cut(g.g, ne, re, ie)
        }
        function w(ne, re, ie) {
            return _.G.contains(g.g, ne, re, ie)
        }
        function W(ne, re, ie) {
            return _.G.crosses(g.g, ne, re, ie)
        }
        function Y(ne, re, ie, ce) {
            return _.G.distance(g.g, ne, re, ie, ce)
        }
        function z(ne, re, ie) {
            return _.G.equals(g.g, ne, re, ie)
        }
        function H(ne, re, ie) {
            return _.G.intersects(g.g, ne, re, ie)
        }
        function C(ne, re, ie) {
            return _.G.touches(g.g, ne, re, ie)
        }
        function F(ne, re, ie) {
            return _.G.within(g.g, ne, re, ie)
        }
        function I(ne, re, ie) {
            return _.G.disjoint(g.g, ne, re, ie)
        }
        function P(ne, re, ie) {
            return _.G.overlaps(g.g, ne, re, ie)
        }
        function v(ne, re, ie, ce) {
            return _.G.relate(g.g, ne, re, ie, ce)
        }
        function L(ne, re) {
            return _.G.isSimple(g.g, ne, re)
        }
        function T(ne, re) {
            return _.G.simplify(g.g, ne, re)
        }
        function o(ne, re, ie=!1) {
            return _.G.convexHull(g.g, ne, re, ie)
        }
        function n(ne, re, ie) {
            return _.G.difference(g.g, ne, re, ie)
        }
        function h(ne, re, ie) {
            return _.G.symmetricDifference(g.g, ne, re, ie)
        }
        function A(ne, re, ie) {
            return _.G.intersect(g.g, ne, re, ie)
        }
        function D(ne, re, ie=null) {
            return _.G.union(g.g, ne, re, ie)
        }
        function G(ne, re, ie, ce, pe, he, fe) {
            return _.G.offset(g.g, ne, re, ie, ce, pe, he, fe)
        }
        function U(ne, re, ie, ce, pe=!1) {
            return _.G.buffer(g.g, ne, re, ie, ce, pe)
        }
        function B(ne, re, ie, ce, pe, he, fe) {
            return _.G.geodesicBuffer(g.g, ne, re, ie, ce, pe, he, fe)
        }
        function R(ne, re, ie, ce=!0) {
            return _.G.nearestCoordinate(g.g, ne, re, ie, ce)
        }
        function M(ne, re, ie) {
            return _.G.nearestVertex(g.g, ne, re, ie)
        }
        function Z(ne, re, ie, ce, pe) {
            return _.G.nearestVertices(g.g, ne, re, ie, ce, pe)
        }
        function Q(ne, re, ie, ce) {
            if (null == re || null == ce)
                throw new Error("Illegal Argument Exception");
            const pe = _.G.rotate(re, ie, ce);
            return pe.spatialReference = ne,
            pe
        }
        function se(ne, re, ie) {
            if (null == re || null == ie)
                throw new Error("Illegal Argument Exception");
            const ce = _.G.flipHorizontal(re, ie);
            return ce.spatialReference = ne,
            ce
        }
        function J(ne, re, ie) {
            if (null == re || null == ie)
                throw new Error("Illegal Argument Exception");
            const ce = _.G.flipVertical(re, ie);
            return ce.spatialReference = ne,
            ce
        }
        function q(ne, re, ie, ce, pe) {
            return _.G.generalize(g.g, ne, re, ie, ce, pe)
        }
        function X(ne, re, ie, ce) {
            return _.G.densify(g.g, ne, re, ie, ce)
        }
        function N(ne, re, ie, ce, pe=0) {
            return _.G.geodesicDensify(g.g, ne, re, ie, ce, pe)
        }
        function $(ne, re, ie) {
            return _.G.planarArea(g.g, ne, re, ie)
        }
        function te(ne, re, ie) {
            return _.G.planarLength(g.g, ne, re, ie)
        }
        function ee(ne, re, ie, ce) {
            return _.G.geodesicArea(g.g, ne, re, ie, ce)
        }
        function ae(ne, re, ie, ce) {
            return _.G.geodesicLength(g.g, ne, re, ie, ce)
        }
        function oe(ne, re, ie) {
            return null == re || null == ie ? [] : _.G.intersectLinesToPoints(g.g, ne, re, ie)
        }
        function ue(ne, re) {
            _.G.changeDefaultSpatialReferenceTolerance(ne, re)
        }
        function le(ne) {
            _.G.clearDefaultSpatialReferenceTolerance(ne)
        }
        const de = Object.freeze(Object.defineProperty({
            __proto__: null,
            buffer: U,
            changeDefaultSpatialReferenceTolerance: ue,
            clearDefaultSpatialReferenceTolerance: le,
            clip: S,
            contains: w,
            convexHull: o,
            crosses: W,
            cut: V,
            densify: X,
            difference: n,
            disjoint: I,
            distance: Y,
            equals: z,
            extendedSpatialReferenceInfo: K,
            flipHorizontal: se,
            flipVertical: J,
            generalize: q,
            geodesicArea: ee,
            geodesicBuffer: B,
            geodesicDensify: N,
            geodesicLength: ae,
            intersect: A,
            intersectLinesToPoints: oe,
            intersects: H,
            isSimple: L,
            nearestCoordinate: R,
            nearestVertex: M,
            nearestVertices: Z,
            offset: G,
            overlaps: P,
            planarArea: $,
            planarLength: te,
            relate: v,
            rotate: Q,
            simplify: T,
            symmetricDifference: h,
            touches: C,
            union: D,
            within: F
        }, Symbol.toStringTag, {
            value: "Module"
        }))
    }
    ,
    49673: (_e, k, t) => {
        t.d(k, {
            O: () => C,
            W: () => H
        });
        var _ = t(2834)
          , g = t(7724)
          , K = t(28089)
          , S = t(15306);
        const w = (0,
        t(22644).c)()
          , W = (0,
        g.c)()
          , Y = (0,
        g.c)()
          , z = (0,
        g.c)();
        function H(I, P, v) {
            return (0,
            S.s)(w, P[0], P[1], 1),
            (0,
            S.t)(w, w, (0,
            _.t)(W, v)),
            0 === w[2] ? (0,
            K.s)(I, w[0], w[1]) : (0,
            K.s)(I, w[0] / w[2], w[1] / w[2])
        }
        function C(I, P, v) {
            return F(Y, P[0], P[1], P[2], P[3], P[4], P[5], P[6], P[7]),
            F(z, v[0], v[1], v[2], v[3], v[4], v[5], v[6], v[7]),
            (0,
            _.m)(I, (0,
            _.a)(Y, Y), z),
            0 !== I[8] && (I[0] /= I[8],
            I[1] /= I[8],
            I[2] /= I[8],
            I[3] /= I[8],
            I[4] /= I[8],
            I[5] /= I[8],
            I[6] /= I[8],
            I[7] /= I[8],
            I[8] /= I[8]),
            I
        }
        function F(I, P, v, L, T, o, n, h, A) {
            (0,
            _.s)(I, P, L, o, v, T, n, 1, 1, 1),
            (0,
            S.s)(w, h, A, 1),
            (0,
            _.a)(W, I);
            const [D,G,U] = (0,
            S.t)(w, w, (0,
            _.t)(W, W));
            return (0,
            _.s)(W, D, 0, 0, 0, G, 0, 0, 0, U),
            (0,
            _.m)(I, W, I)
        }
    }
    ,
    36935: (_e, k, t) => {
        t.r(k),
        t.d(k, {
            buffer: () => K.v,
            changeDefaultSpatialReferenceTolerance: () => K.M,
            clearDefaultSpatialReferenceTolerance: () => K.N,
            clip: () => K.c,
            contains: () => K.b,
            convexHull: () => K.l,
            crosses: () => K.d,
            cut: () => K.a,
            densify: () => K.F,
            difference: () => K.m,
            disjoint: () => K.j,
            distance: () => K.f,
            equals: () => K.h,
            extendedSpatialReferenceInfo: () => K.e,
            flipHorizontal: () => K.C,
            flipVertical: () => K.D,
            generalize: () => K.E,
            geodesicArea: () => K.J,
            geodesicBuffer: () => K.x,
            geodesicDensify: () => K.G,
            geodesicLength: () => K.K,
            intersect: () => K.p,
            intersectLinesToPoints: () => K.L,
            intersects: () => K.i,
            isSimple: () => K.k,
            nearestCoordinate: () => K.y,
            nearestVertex: () => K.z,
            nearestVertices: () => K.A,
            offset: () => K.q,
            overlaps: () => K.o,
            planarArea: () => K.H,
            planarLength: () => K.I,
            relate: () => K.r,
            rotate: () => K.B,
            simplify: () => K.s,
            symmetricDifference: () => K.n,
            touches: () => K.t,
            union: () => K.u,
            within: () => K.w
        }),
        t(94186),
        t(46731);
        var K = t(32969)
    }
    ,
    94710: (_e, k, t) => {
        t.r(k),
        t.d(k, {
            default: () => X
        });
        var G, _ = t(74523), g = t(44701), S = (t(87488),
        t(43803)), V = t(80226), w = t(66136), W = t(85736), Y = t(34332), z = t(99131), F = (t(17179),
        t(69408),
        t(90496)), I = t(55938), P = t(7523), v = t(13435), L = t(49376), T = t(58914), o = t(92469), n = t(10860), h = t(40806), A = t(11653);
        const U = new (t(70338).U)("0/0/0",0,0,0,void 0);
        let B = G = class extends ((0,
        T.d)((0,
        n.j)((0,
        o.J)(L.A)))) {
            constructor() {
                super(...arguments),
                this.tileInfo = A.A.create({
                    spatialReference: I.A.WebMercator,
                    size: 256
                }),
                this.type = "base-tile",
                this.fullExtent = new P.default(-20037508.342787,-20037508.34278,20037508.34278,20037508.342787,I.A.WebMercator),
                this.spatialReference = I.A.WebMercator
            }
            getTileBounds(N, $, te, ee) {
                const ae = ee || (0,
                v.vt)();
                return U.level = N,
                U.row = $,
                U.col = te,
                U.extent = ae,
                this.tileInfo.updateTileInfo(U),
                U.extent = void 0,
                ae
            }
            fetchTile(N, $, te, ee={}) {
                const {signal: ae} = ee
                  , oe = this.getTileUrl(N, $, te)
                  , ue = {
                    responseType: "image",
                    signal: ae,
                    query: {
                        ...this.refreshParameters
                    }
                };
                return (0,
                S.default)(oe ?? "", ue).then(le => le.data)
            }
            fetchImageBitmapTile(N, $, te, ee={}) {
                var ae = this;
                return (0,
                _.A)(function*() {
                    var oe;
                    const {signal: ue} = ee;
                    if (ae.fetchTile !== G.prototype.fetchTile) {
                        const re = yield ae.fetchTile(N, $, te, ee);
                        try {
                            return createImageBitmap(re)
                        } catch (ie) {
                            throw new V.A("request:server",`Unable to load tile ${N}/${$}/${te}`,{
                                error: ie,
                                level: N,
                                row: $,
                                col: te
                            })
                        }
                    }
                    const le = null != (oe = ae.getTileUrl(N, $, te)) ? oe : ""
                      , de = {
                        responseType: "blob",
                        signal: ue,
                        query: {
                            ...ae.refreshParameters
                        }
                    }
                      , {data: ne} = yield(0,
                    S.default)(le, de);
                    return (0,
                    h.m)(ne, le)
                })()
            }
            getTileUrl() {
                throw new V.A("basetilelayer:gettileurl-not-implemented","getTileUrl() is not implemented")
            }
        }
        ;
        (0,
        g._)([(0,
        z.MZ)({
            type: A.A
        })], B.prototype, "tileInfo", void 0),
        (0,
        g._)([(0,
        z.MZ)({
            type: ["show", "hide"]
        })], B.prototype, "listMode", void 0),
        (0,
        g._)([(0,
        z.MZ)({
            readOnly: !0,
            value: "base-tile"
        })], B.prototype, "type", void 0),
        (0,
        g._)([(0,
        z.MZ)({
            nonNullable: !0
        })], B.prototype, "fullExtent", void 0),
        (0,
        g._)([(0,
        z.MZ)()], B.prototype, "spatialReference", void 0),
        B = G = (0,
        g._)([(0,
        F.$)("esri.layers.BaseTileLayer")], B);
        const R = B;
        var M = t(14782)
          , Z = t(38238)
          , Q = t(12993);
        const se = new w.J({
            BingMapsAerial: "aerial",
            BingMapsRoad: "road",
            BingMapsHybrid: "hybrid"
        });
        let q = class extends ((0,
        T.d)((0,
        M.q)((0,
        Y.P)(R)))) {
            constructor(N) {
                super(N),
                this.type = "bing-maps",
                this.tileInfo = new A.A({
                    size: [256, 256],
                    dpi: 96,
                    origin: new Q.A({
                        x: -20037508.342787,
                        y: 20037508.342787,
                        spatialReference: I.A.WebMercator
                    }),
                    spatialReference: I.A.WebMercator,
                    lods: [new Z.A({
                        level: 1,
                        resolution: 78271.5169639999,
                        scale: 295828763.795777
                    }), new Z.A({
                        level: 2,
                        resolution: 39135.7584820001,
                        scale: 147914381.897889
                    }), new Z.A({
                        level: 3,
                        resolution: 19567.8792409999,
                        scale: 73957190.948944
                    }), new Z.A({
                        level: 4,
                        resolution: 9783.93962049996,
                        scale: 36978595.474472
                    }), new Z.A({
                        level: 5,
                        resolution: 4891.96981024998,
                        scale: 18489297.737236
                    }), new Z.A({
                        level: 6,
                        resolution: 2445.98490512499,
                        scale: 9244648.868618
                    }), new Z.A({
                        level: 7,
                        resolution: 1222.99245256249,
                        scale: 4622324.434309
                    }), new Z.A({
                        level: 8,
                        resolution: 611.49622628138,
                        scale: 2311162.217155
                    }), new Z.A({
                        level: 9,
                        resolution: 305.748113140558,
                        scale: 1155581.108577
                    }), new Z.A({
                        level: 10,
                        resolution: 152.874056570411,
                        scale: 577790.554289
                    }), new Z.A({
                        level: 11,
                        resolution: 76.4370282850732,
                        scale: 288895.277144
                    }), new Z.A({
                        level: 12,
                        resolution: 38.2185141425366,
                        scale: 144447.638572
                    }), new Z.A({
                        level: 13,
                        resolution: 19.1092570712683,
                        scale: 72223.819286
                    }), new Z.A({
                        level: 14,
                        resolution: 9.55462853563415,
                        scale: 36111.909643
                    }), new Z.A({
                        level: 15,
                        resolution: 4.77731426794937,
                        scale: 18055.954822
                    }), new Z.A({
                        level: 16,
                        resolution: 2.38865713397468,
                        scale: 9027.977411
                    }), new Z.A({
                        level: 17,
                        resolution: 1.19432856685505,
                        scale: 4513.988705
                    }), new Z.A({
                        level: 18,
                        resolution: .597164283559817,
                        scale: 2256.994353
                    }), new Z.A({
                        level: 19,
                        resolution: .298582141647617,
                        scale: 1128.497176
                    }), new Z.A({
                        level: 20,
                        resolution: .1492910708238085,
                        scale: 564.248588
                    })]
                }),
                this.key = null,
                this.style = "road",
                this.culture = "en-US",
                this.region = null,
                this.portalUrl = null,
                this.hasAttributionData = !0
            }
            get bingMetadata() {
                return this._get("bingMetadata")
            }
            set bingMetadata(N) {
                this._set("bingMetadata", N)
            }
            get copyright() {
                return (0,
                W.Ru)(this.bingMetadata) ? this.bingMetadata.copyright : null
            }
            get operationalLayerType() {
                return se.toJSON(this.style)
            }
            get bingLogo() {
                return (0,
                W.Ru)(this.bingMetadata) ? this.bingMetadata.brandLogoUri : null
            }
            load(N) {
                return this.addResolvingPromise(this.key ? this._getMetadata() : this.portalUrl ? this._getPortalBingKey().then( () => this._getMetadata()) : Promise.reject(new V.A("bingmapslayer:load","Bing layer must have bing key."))),
                Promise.resolve(this)
            }
            getTileUrl(N, $, te) {
                if (!this.loaded || (0,
                W.$I)(this.bingMetadata))
                    return null;
                const ee = this.bingMetadata.resourceSets[0].resources[0]
                  , ae = ee.imageUrlSubdomains[$ % ee.imageUrlSubdomains.length]
                  , oe = this._getQuadKey(N, $, te);
                return ee.imageUrl.replace("{subdomain}", ae).replace("{quadkey}", oe)
            }
            fetchAttributionData() {
                var N = this;
                return (0,
                _.A)(function*() {
                    return N.load().then( () => (0,
                    W.$I)(N.bingMetadata) ? null : {
                        contributors: N.bingMetadata.resourceSets[0].resources[0].imageryProviders.map($ => ({
                            attribution: $.attribution,
                            coverageAreas: $.coverageAreas.map(te => ({
                                zoomMin: te.zoomMin,
                                zoomMax: te.zoomMax,
                                score: 1,
                                bbox: [te.bbox[0], te.bbox[1], te.bbox[2], te.bbox[3]]
                            }))
                        }))
                    })
                })()
            }
            _getMetadata() {
                return (0,
                S.default)(`https://dev.virtualearth.net/REST/v1/Imagery/Metadata/${{
                    road: "roadOnDemand",
                    aerial: "aerial",
                    hybrid: "aerialWithLabelsOnDemand"
                }[this.style]}`, {
                    responseType: "json",
                    query: {
                        include: "ImageryProviders",
                        uriScheme: "https",
                        key: this.key,
                        suppressStatus: !0,
                        output: "json",
                        culture: this.culture,
                        userRegion: this.region
                    }
                }).then($ => {
                    const te = $.data;
                    if (200 !== te.statusCode)
                        throw new V.A("bingmapslayer:getmetadata",te.statusDescription);
                    if (this.bingMetadata = te,
                    0 === this.bingMetadata.resourceSets.length)
                        throw new V.A("bingmapslayer:getmetadata","no bing resourcesets");
                    if (0 === this.bingMetadata.resourceSets[0].resources.length)
                        throw new V.A("bingmapslayer:getmetadata","no bing resources")
                }
                ).catch($ => {
                    throw new V.A("bingmapslayer:getmetadata",$.message)
                }
                )
            }
            _getPortalBingKey() {
                var N;
                return (0,
                S.default)(null != (N = this.portalUrl) ? N : "", {
                    responseType: "json",
                    authMode: "no-prompt",
                    query: {
                        f: "json"
                    }
                }).then($ => {
                    if (!$.data.bingKey)
                        throw new V.A("bingmapslayer:getportalbingkey","The referenced Portal does not contain a valid bing key");
                    this.key = $.data.bingKey
                }
                ).catch($ => {
                    throw new V.A("bingmapslayer:getportalbingkey",$.message)
                }
                )
            }
            _getQuadKey(N, $, te) {
                let ee = "";
                for (let ae = N; ae > 0; ae--) {
                    let oe = 0;
                    const ue = 1 << ae - 1;
                    te & ue && (oe += 1),
                    $ & ue && (oe += 2),
                    ee += oe.toString()
                }
                return ee
            }
        }
        ;
        (0,
        g._)([(0,
        z.MZ)({
            json: {
                read: !1,
                write: !1
            },
            value: null
        })], q.prototype, "bingMetadata", null),
        (0,
        g._)([(0,
        z.MZ)({
            json: {
                read: !1,
                write: !1
            },
            value: "bing-maps",
            readOnly: !0
        })], q.prototype, "type", void 0),
        (0,
        g._)([(0,
        z.MZ)({
            type: A.A
        })], q.prototype, "tileInfo", void 0),
        (0,
        g._)([(0,
        z.MZ)({
            type: String,
            readOnly: !0,
            json: {
                read: !1,
                write: !1
            }
        })], q.prototype, "copyright", null),
        (0,
        g._)([(0,
        z.MZ)({
            type: String,
            json: {
                write: !1,
                read: !1
            }
        })], q.prototype, "key", void 0),
        (0,
        g._)([(0,
        z.MZ)({
            type: se.apiValues,
            nonNullable: !0,
            json: {
                read: {
                    source: "layerType",
                    reader: se.read
                }
            }
        })], q.prototype, "style", void 0),
        (0,
        g._)([(0,
        z.MZ)({
            type: ["BingMapsAerial", "BingMapsHybrid", "BingMapsRoad"]
        })], q.prototype, "operationalLayerType", null),
        (0,
        g._)([(0,
        z.MZ)({
            type: String,
            json: {
                write: !1,
                read: !1
            }
        })], q.prototype, "culture", void 0),
        (0,
        g._)([(0,
        z.MZ)({
            type: String,
            json: {
                write: !1,
                read: !1
            }
        })], q.prototype, "region", void 0),
        (0,
        g._)([(0,
        z.MZ)({
            type: String,
            json: {
                write: !0,
                read: !0
            }
        })], q.prototype, "portalUrl", void 0),
        (0,
        g._)([(0,
        z.MZ)({
            type: Boolean,
            json: {
                write: !1,
                read: !1
            }
        })], q.prototype, "hasAttributionData", void 0),
        (0,
        g._)([(0,
        z.MZ)({
            type: String,
            readOnly: !0
        })], q.prototype, "bingLogo", null),
        q = (0,
        g._)([(0,
        F.$)("esri.layers.BingMapsLayer")], q);
        const X = q
    }
    ,
    73011: (_e, k, t) => {
        t.r(k),
        t.d(k, {
            default: () => I
        });
        var _ = t(44701)
          , g = t(99131)
          , V = (t(17179),
        t(69408),
        t(90496))
          , w = t(82670)
          , W = t(49376)
          , Y = t(58914)
          , z = t(10860)
          , H = t(82265)
          , C = t(13154);
        let F = class extends ((0,
        Y.d)((0,
        z.j)(W.A))) {
            constructor(P) {
                super(P),
                this.elevationInfo = null,
                this.graphics = new H.Y,
                this.screenSizePerspectiveEnabled = !0,
                this.type = "graphics",
                this.internal = !1
            }
            destroy() {
                this.removeAll(),
                this.graphics.destroy()
            }
            add(P) {
                return this.graphics.add(P),
                this
            }
            addMany(P) {
                return this.graphics.addMany(P),
                this
            }
            removeAll() {
                return this.graphics.removeAll(),
                this
            }
            remove(P) {
                this.graphics.remove(P)
            }
            removeMany(P) {
                this.graphics.removeMany(P)
            }
            on(P, v) {
                return super.on(P, v)
            }
            graphicChanged(P) {
                this.emit("graphic-update", P)
            }
        }
        ;
        (0,
        _._)([(0,
        g.MZ)({
            type: C.A
        })], F.prototype, "elevationInfo", void 0),
        (0,
        _._)([(0,
        g.MZ)((0,
        w.C)(H.Y, "graphics"))], F.prototype, "graphics", void 0),
        (0,
        _._)([(0,
        g.MZ)({
            type: ["show", "hide"]
        })], F.prototype, "listMode", void 0),
        (0,
        _._)([(0,
        g.MZ)()], F.prototype, "screenSizePerspectiveEnabled", void 0),
        (0,
        _._)([(0,
        g.MZ)({
            readOnly: !0
        })], F.prototype, "type", void 0),
        (0,
        _._)([(0,
        g.MZ)({
            constructOnly: !0
        })], F.prototype, "internal", void 0),
        F = (0,
        _._)([(0,
        V.$)("esri.layers.GraphicsLayer")], F);
        const I = F
    }
    ,
    91101: (_e, k, t) => {
        t.r(k),
        t.d(k, {
            default: () => B
        });
        var _ = t(74523)
          , g = t(44701)
          , K = t(68497)
          , S = t(21039)
          , V = t(85736)
          , w = t(34332)
          , W = t(57540)
          , Y = t(99131)
          , C = (t(17179),
        t(69408),
        t(28844))
          , F = t(90496)
          , I = t(4865)
          , P = t(49376)
          , v = t(58914)
          , L = t(14782)
          , T = t(25807)
          , o = t(10860)
          , n = t(31649)
          , h = t(60195)
          , A = t(13141)
          , D = t(32008)
          , G = t(25519);
        let U = class extends ((0,
        v.d)((0,
        o.j)((0,
        L.q)((0,
        T.A)((0,
        D.l)((0,
        A.Q)((0,
        w.P)(P.A)))))))) {
            constructor(R) {
                super(R),
                this._visibilityHandles = {},
                this.allLayers = new K.A({
                    getCollections: () => [this.layers],
                    getChildrenFunction: M => "layers"in M ? M.layers : null
                }),
                this.allTables = (0,
                h.Z)(this),
                this.fullExtent = void 0,
                this.operationalLayerType = "GroupLayer",
                this.spatialReference = void 0,
                this.type = "group"
            }
            initialize() {
                this._enforceVisibility(this.visibilityMode, this.visible),
                this.addHandles((0,
                W.wB)( () => this.visible, this._onVisibilityChange.bind(this), W.OH))
            }
            _writeLayers(R, M, Z, Q) {
                const se = [];
                if (!R)
                    return se;
                R.forEach(J => {
                    const q = (0,
                    G.CJ)(J, Q.webmap ? Q.webmap.getLayerJSONFromResourceInfo(J) : null, Q);
                    (0,
                    V.Ru)(q) && q.layerType && se.push(q)
                }
                ),
                M.layers = se
            }
            set portalItem(R) {
                this._set("portalItem", R)
            }
            set visibilityMode(R) {
                const M = this._get("visibilityMode") !== R;
                this._set("visibilityMode", R),
                M && this._enforceVisibility(R, this.visible)
            }
            load(R) {
                return this.addResolvingPromise(this.loadFromPortal({
                    supportedTypes: ["Feature Service", "Feature Collection", "Scene Service"],
                    layerModuleTypeMap: n.S
                }, R)),
                Promise.resolve(this)
            }
            loadAll() {
                var R = this;
                return (0,
                _.A)(function*() {
                    return (0,
                    S.g)(R, M => {
                        M(R.layers, R.tables)
                    }
                    )
                })()
            }
            layerAdded(R) {
                R.visible && "exclusive" === this.visibilityMode ? this._turnOffOtherLayers(R) : "inherited" === this.visibilityMode && (R.visible = this.visible),
                this._visibilityHandles[R.uid] = (0,
                W.wB)( () => R.visible, M => this._onChildVisibilityChange(R, M), W.OH)
            }
            layerRemoved(R) {
                const M = this._visibilityHandles[R.uid];
                M && (M.remove(),
                delete this._visibilityHandles[R.uid]),
                this._enforceVisibility(this.visibilityMode, this.visible)
            }
            _turnOffOtherLayers(R) {
                this.layers.forEach(M => {
                    M !== R && (M.visible = !1)
                }
                )
            }
            _enforceVisibility(R, M) {
                if (!(0,
                C.oY)(this).initialized)
                    return;
                const Z = this.layers;
                let Q = Z.find(se => se.visible);
                switch (R) {
                case "exclusive":
                    Z.length && !Q && (Q = Z.getItemAt(0),
                    Q.visible = !0),
                    this._turnOffOtherLayers(Q);
                    break;
                case "inherited":
                    Z.forEach(se => {
                        se.visible = M
                    }
                    )
                }
            }
            _onVisibilityChange(R) {
                "inherited" === this.visibilityMode && this.layers.forEach(M => {
                    M.visible = R
                }
                )
            }
            _onChildVisibilityChange(R, M) {
                switch (this.visibilityMode) {
                case "exclusive":
                    M ? this._turnOffOtherLayers(R) : this._isAnyLayerVisible() || (R.visible = !0);
                    break;
                case "inherited":
                    R.visible = this.visible
                }
            }
            _isAnyLayerVisible() {
                return this.layers.some(R => R.visible)
            }
        }
        ;
        (0,
        g._)([(0,
        Y.MZ)({
            readOnly: !0,
            dependsOn: []
        })], U.prototype, "allLayers", void 0),
        (0,
        g._)([(0,
        Y.MZ)({
            readOnly: !0
        })], U.prototype, "allTables", void 0),
        (0,
        g._)([(0,
        Y.MZ)()], U.prototype, "fullExtent", void 0),
        (0,
        g._)([(0,
        Y.MZ)({
            json: {
                read: !0,
                write: !0
            }
        })], U.prototype, "blendMode", void 0),
        (0,
        g._)([(0,
        Y.MZ)({
            json: {
                read: !1,
                write: {
                    ignoreOrigin: !0
                }
            }
        })], U.prototype, "layers", void 0),
        (0,
        g._)([(0,
        I.K)("layers")], U.prototype, "_writeLayers", null),
        (0,
        g._)([(0,
        Y.MZ)({
            type: ["GroupLayer"]
        })], U.prototype, "operationalLayerType", void 0),
        (0,
        g._)([(0,
        Y.MZ)({
            json: {
                origins: {
                    "web-document": {
                        read: !1,
                        write: !1
                    }
                }
            }
        })], U.prototype, "portalItem", null),
        (0,
        g._)([(0,
        Y.MZ)()], U.prototype, "spatialReference", void 0),
        (0,
        g._)([(0,
        Y.MZ)({
            json: {
                read: !1
            },
            readOnly: !0,
            value: "group"
        })], U.prototype, "type", void 0),
        (0,
        g._)([(0,
        Y.MZ)({
            type: ["independent", "inherited", "exclusive"],
            value: "independent",
            json: {
                write: !0,
                origins: {
                    "web-map": {
                        read: !1,
                        write: !1
                    }
                }
            }
        })], U.prototype, "visibilityMode", null),
        U = (0,
        g._)([(0,
        F.$)("esri.layers.GroupLayer")], U);
        const B = U
    }
    ,
    75617: (_e, k, t) => {
        t.r(k),
        t.d(k, {
            default: () => ue
        });
        var _ = t(74523)
          , g = t(44701)
          , K = t(43803)
          , S = t(87153)
          , V = t(80226)
          , w = t(27129)
          , W = t(21039)
          , Y = t(85736)
          , z = t(34332)
          , H = t(65164)
          , C = t(99131)
          , F = t(17179)
          , P = (t(69408),
        t(71781))
          , v = t(90496)
          , L = t(4865)
          , T = t(35442)
          , o = t(7523)
          , n = t(66328)
          , h = t(49376)
          , A = t(34632)
          , D = t(17446)
          , G = t(51408)
          , U = t(58914)
          , B = t(31928)
          , R = t(14782)
          , M = t(25807)
          , Z = t(92469)
          , Q = t(10860)
          , se = t(54417)
          , J = t(9783)
          , q = t(10195)
          , X = t(39086)
          , N = t(40806)
          , $ = t(33466)
          , te = t(99069)
          , ee = t(31012)
          , ae = t(55432);
        let oe = class extends ((0,
        U.d)((0,
        J.e)((0,
        Q.j)((0,
        se.I)((0,
        D.V)((0,
        G.b)((0,
        R.q)((0,
        M.A)((0,
        z.P)((0,
        Z.J)((0,
        A.p)((0,
        B.d)((0,
        w.$)(h.A)))))))))))))) {
            constructor(...le) {
                super(...le),
                this.dateFieldsTimeReference = null,
                this.datesInUnknownTimezone = !1,
                this.dpi = 96,
                this.gdbVersion = null,
                this.imageFormat = "png24",
                this.imageMaxHeight = 2048,
                this.imageMaxWidth = 2048,
                this.imageTransparency = !0,
                this.isReference = null,
                this.labelsVisible = !1,
                this.operationalLayerType = "ArcGISMapServiceLayer",
                this.preferredTimeReference = null,
                this.sourceJSON = null,
                this.sublayers = null,
                this.type = "map-image",
                this.url = null
            }
            normalizeCtorArgs(le, de) {
                return "string" == typeof le ? {
                    url: le,
                    ...de
                } : le
            }
            load(le) {
                const de = (0,
                Y.Ru)(le) ? le.signal : null;
                return this.addResolvingPromise(this.loadFromPortal({
                    supportedTypes: ["Map Service"]
                }, le).catch(H.QP).then( () => this._fetchService(de))),
                Promise.resolve(this)
            }
            readImageFormat(le, de) {
                const ne = de.supportedImageFormatTypes;
                return ne && ne.includes("PNG32") ? "png32" : "png24"
            }
            writeSublayers(le, de, ne, re) {
                var ie;
                if (!this.loaded || !le)
                    return;
                const ce = le.slice().reverse().flatten( ({sublayers: ye}) => ye && ye.toArray().reverse()).toArray();
                let pe = !1;
                if (this.capabilities && this.capabilities.operations.supportsExportMap && null != (ie = this.capabilities.exportMap) && ie.supportsDynamicLayers) {
                    const ye = (0,
                    T.aB)(re.origin);
                    if (ye === T.Gr.PORTAL_ITEM) {
                        const me = this.createSublayersForOrigin("service").sublayers;
                        pe = (0,
                        te.Zx)(ce, me, T.Gr.SERVICE)
                    } else if (ye > T.Gr.PORTAL_ITEM) {
                        const me = this.createSublayersForOrigin("portal-item");
                        pe = (0,
                        te.Zx)(ce, me.sublayers, (0,
                        T.aB)(me.origin))
                    }
                }
                const he = []
                  , fe = {
                    writeSublayerStructure: pe,
                    ...re
                };
                let ge = pe;
                ce.forEach(ye => {
                    const me = ye.write({}, fe);
                    he.push(me),
                    ge = ge || "user" === ye.originOf("visible")
                }
                ),
                he.some(ye => Object.keys(ye).length > 1) && (de.layers = he),
                ge && (de.visibleLayers = ce.filter(ye => ye.visible).map(ye => ye.id))
            }
            createExportImageParameters(le, de, ne, re) {
                const ie = re && re.pixelRatio || 1;
                le && this.version >= 10 && (le = le.clone().shiftCentralMeridian());
                const ce = new X.g({
                    layer: this,
                    floors: re?.floors,
                    scale: (0,
                    n.X_)({
                        extent: le,
                        width: de
                    }) * ie
                })
                  , pe = ce.toJSON();
                ce.destroy();
                const he = !re || !re.rotation || this.version < 10.3 ? {} : {
                    rotation: -re.rotation
                }
                  , fe = le && le.spatialReference
                  , ge = fe.wkid || JSON.stringify(fe.toJSON());
                pe.dpi *= ie;
                const ye = {};
                if (null != re && re.timeExtent) {
                    const {start: me, end: Ee} = re.timeExtent.toJSON();
                    ye.time = me && Ee && me === Ee ? "" + me : `${me ?? "null"},${Ee ?? "null"}`
                } else
                    this.timeInfo && !this.timeInfo.hasLiveData && (ye.time = "null,null");
                return {
                    bbox: le && le.xmin + "," + le.ymin + "," + le.xmax + "," + le.ymax,
                    bboxSR: ge,
                    imageSR: ge,
                    size: de + "," + ne,
                    ...pe,
                    ...he,
                    ...ye
                }
            }
            fetchImage(le, de, ne, re) {
                var ie = this;
                return (0,
                _.A)(function*() {
                    const {data: ce} = yield ie._fetchImage("image", le, de, ne, re);
                    return ce
                })()
            }
            fetchImageBitmap(le, de, ne, re) {
                var ie = this;
                return (0,
                _.A)(function*() {
                    const {data: ce, url: pe} = yield ie._fetchImage("blob", le, de, ne, re);
                    return (0,
                    N.m)(ce, pe)
                })()
            }
            fetchRecomputedExtents(le={}) {
                var de = this;
                return (0,
                _.A)(function*() {
                    const ne = {
                        ...le,
                        query: {
                            returnUpdates: !0,
                            f: "json",
                            ...de.customParameters,
                            token: de.apiKey
                        }
                    }
                      , {data: re} = yield(0,
                    K.default)(de.url, ne)
                      , {extent: ie, fullExtent: ce, timeExtent: pe} = re
                      , he = ie || ce;
                    return {
                        fullExtent: he && o.default.fromJSON(he),
                        timeExtent: pe && S.A.fromJSON({
                            start: pe[0],
                            end: pe[1]
                        })
                    }
                })()
            }
            loadAll() {
                return (0,
                W.g)(this, le => {
                    le(this.allSublayers)
                }
                )
            }
            serviceSupportsSpatialReference(le) {
                return (0,
                ee.D)(this, le)
            }
            _fetchImage(le, de, ne, re, ie) {
                var ce = this;
                return (0,
                _.A)(function*() {
                    var pe, he, fe, ge;
                    const ye = {
                        responseType: le,
                        signal: null != (pe = ie?.signal) ? pe : null,
                        query: {
                            ...ce.parsedUrl.query,
                            ...ce.createExportImageParameters(de, ne, re, ie),
                            f: "image",
                            ...ce.refreshParameters,
                            ...ce.customParameters,
                            token: ce.apiKey
                        }
                    }
                      , me = ce.parsedUrl.path + "/export";
                    if (null != (null == (he = ye.query) ? void 0 : he.dynamicLayers) && (null == (fe = ce.capabilities) || null == (ge = fe.exportMap) || !ge.supportsDynamicLayers))
                        throw new V.A("mapimagelayer:dynamiclayer-not-supported",`service ${ce.url} doesn't support dynamic layers, which is required to be able to change the sublayer's order, rendering, labeling or source.`,{
                            query: ye.query
                        });
                    try {
                        const {data: Ee} = yield(0,
                        K.default)(me, ye);
                        return {
                            data: Ee,
                            url: me
                        }
                    } catch (Ee) {
                        throw (0,
                        H.zf)(Ee) ? Ee : new V.A("mapimagelayer:image-fetch-error",`Unable to load image: ${me}`,{
                            error: Ee
                        })
                    }
                })()
            }
            _fetchService(le) {
                var de = this;
                return (0,
                _.A)(function*() {
                    if (de.sourceJSON)
                        return void de.read(de.sourceJSON, {
                            origin: "service",
                            url: de.parsedUrl
                        });
                    const {data: ne, ssl: re} = yield(0,
                    K.default)(de.parsedUrl.path, {
                        query: {
                            f: "json",
                            ...de.parsedUrl.query,
                            ...de.customParameters,
                            token: de.apiKey
                        },
                        signal: le
                    });
                    re && (de.url = de.url.replace(/^http:/i, "https:")),
                    de.sourceJSON = ne,
                    de.read(ne, {
                        origin: "service",
                        url: de.parsedUrl
                    })
                })()
            }
        }
        ;
        (0,
        g._)([(0,
        C.MZ)({
            type: ae.A
        })], oe.prototype, "dateFieldsTimeReference", void 0),
        (0,
        g._)([(0,
        C.MZ)({
            type: Boolean
        })], oe.prototype, "datesInUnknownTimezone", void 0),
        (0,
        g._)([(0,
        C.MZ)()], oe.prototype, "dpi", void 0),
        (0,
        g._)([(0,
        C.MZ)()], oe.prototype, "gdbVersion", void 0),
        (0,
        g._)([(0,
        C.MZ)()], oe.prototype, "imageFormat", void 0),
        (0,
        g._)([(0,
        P.w)("imageFormat", ["supportedImageFormatTypes"])], oe.prototype, "readImageFormat", null),
        (0,
        g._)([(0,
        C.MZ)({
            json: {
                origins: {
                    service: {
                        read: {
                            source: "maxImageHeight"
                        }
                    }
                }
            }
        })], oe.prototype, "imageMaxHeight", void 0),
        (0,
        g._)([(0,
        C.MZ)({
            json: {
                origins: {
                    service: {
                        read: {
                            source: "maxImageWidth"
                        }
                    }
                }
            }
        })], oe.prototype, "imageMaxWidth", void 0),
        (0,
        g._)([(0,
        C.MZ)()], oe.prototype, "imageTransparency", void 0),
        (0,
        g._)([(0,
        C.MZ)({
            type: Boolean,
            json: {
                read: !1,
                write: {
                    enabled: !0,
                    overridePolicy: () => ({
                        enabled: !1
                    })
                }
            }
        })], oe.prototype, "isReference", void 0),
        (0,
        g._)([(0,
        C.MZ)({
            json: {
                read: !1,
                write: !1
            }
        })], oe.prototype, "labelsVisible", void 0),
        (0,
        g._)([(0,
        C.MZ)({
            type: ["ArcGISMapServiceLayer"]
        })], oe.prototype, "operationalLayerType", void 0),
        (0,
        g._)([(0,
        C.MZ)({
            json: {
                read: !1,
                write: !1
            }
        })], oe.prototype, "popupEnabled", void 0),
        (0,
        g._)([(0,
        C.MZ)({
            type: ae.A
        })], oe.prototype, "preferredTimeReference", void 0),
        (0,
        g._)([(0,
        C.MZ)()], oe.prototype, "sourceJSON", void 0),
        (0,
        g._)([(0,
        C.MZ)({
            json: {
                write: {
                    ignoreOrigin: !0
                }
            }
        })], oe.prototype, "sublayers", void 0),
        (0,
        g._)([(0,
        L.K)("sublayers", {
            layers: {
                type: [$.A]
            },
            visibleLayers: {
                type: [F.jz]
            }
        })], oe.prototype, "writeSublayers", null),
        (0,
        g._)([(0,
        C.MZ)({
            type: ["show", "hide", "hide-children"]
        })], oe.prototype, "listMode", void 0),
        (0,
        g._)([(0,
        C.MZ)({
            json: {
                read: !1
            },
            readOnly: !0,
            value: "map-image"
        })], oe.prototype, "type", void 0),
        (0,
        g._)([(0,
        C.MZ)(q.OZ)], oe.prototype, "url", void 0),
        oe = (0,
        g._)([(0,
        v.$)("esri.layers.MapImageLayer")], oe);
        const ue = oe
    }
    ,
    34973: (_e, k, t) => {
        t.r(k),
        t.d(k, {
            default: () => v
        });
        var _ = t(44701)
          , K = (t(87488),
        t(99131))
          , w = (t(17179),
        t(69408),
        t(90496))
          , W = t(12993)
          , Y = t(13618)
          , z = t(38238)
          , H = t(11653)
          , C = t(63082)
          , F = t(55938)
          , I = t(7523);
        let P = class extends Y.default {
            constructor(...L) {
                super(...L),
                this.portalItem = null,
                this.isReference = null,
                this.tileInfo = new H.A({
                    size: [256, 256],
                    dpi: 96,
                    format: "png8",
                    compressionQuality: 0,
                    origin: new W.A({
                        x: -20037508.342787,
                        y: 20037508.342787,
                        spatialReference: F.A.WebMercator
                    }),
                    spatialReference: F.A.WebMercator,
                    lods: [new z.A({
                        level: 0,
                        scale: 591657527.591555,
                        resolution: 156543.033928
                    }), new z.A({
                        level: 1,
                        scale: 295828763.795777,
                        resolution: 78271.5169639999
                    }), new z.A({
                        level: 2,
                        scale: 147914381.897889,
                        resolution: 39135.7584820001
                    }), new z.A({
                        level: 3,
                        scale: 73957190.948944,
                        resolution: 19567.8792409999
                    }), new z.A({
                        level: 4,
                        scale: 36978595.474472,
                        resolution: 9783.93962049996
                    }), new z.A({
                        level: 5,
                        scale: 18489297.737236,
                        resolution: 4891.96981024998
                    }), new z.A({
                        level: 6,
                        scale: 9244648.868618,
                        resolution: 2445.98490512499
                    }), new z.A({
                        level: 7,
                        scale: 4622324.434309,
                        resolution: 1222.99245256249
                    }), new z.A({
                        level: 8,
                        scale: 2311162.217155,
                        resolution: 611.49622628138
                    }), new z.A({
                        level: 9,
                        scale: 1155581.108577,
                        resolution: 305.748113140558
                    }), new z.A({
                        level: 10,
                        scale: 577790.554289,
                        resolution: 152.874056570411
                    }), new z.A({
                        level: 11,
                        scale: 288895.277144,
                        resolution: 76.4370282850732
                    }), new z.A({
                        level: 12,
                        scale: 144447.638572,
                        resolution: 38.2185141425366
                    }), new z.A({
                        level: 13,
                        scale: 72223.819286,
                        resolution: 19.1092570712683
                    }), new z.A({
                        level: 14,
                        scale: 36111.909643,
                        resolution: 9.55462853563415
                    }), new z.A({
                        level: 15,
                        scale: 18055.954822,
                        resolution: 4.77731426794937
                    }), new z.A({
                        level: 16,
                        scale: 9027.977411,
                        resolution: 2.38865713397468
                    }), new z.A({
                        level: 17,
                        scale: 4513.988705,
                        resolution: 1.19432856685505
                    }), new z.A({
                        level: 18,
                        scale: 2256.994353,
                        resolution: .597164283559817
                    }), new z.A({
                        level: 19,
                        scale: 1128.497176,
                        resolution: .298582141647617
                    })]
                }),
                this.subDomains = ["a", "b", "c"],
                this.fullExtent = new I.default(-20037508.342787,-20037508.34278,20037508.34278,20037508.342787,F.A.WebMercator),
                this.urlTemplate = "https://{subDomain}.tile.openstreetmap.org/{level}/{col}/{row}.png",
                this.operationalLayerType = "OpenStreetMap",
                this.type = "open-street-map",
                this.copyright = "Map data &copy; OpenStreetMap contributors, CC-BY-SA"
            }
            get refreshInterval() {
                return 0
            }
        }
        ;
        (0,
        _._)([(0,
        K.MZ)({
            type: C.default,
            json: {
                read: !1,
                write: !1,
                origins: {
                    "web-document": {
                        read: !1,
                        write: !1
                    }
                }
            }
        })], P.prototype, "portalItem", void 0),
        (0,
        _._)([(0,
        K.MZ)({
            type: Boolean,
            json: {
                read: !1,
                write: !1
            }
        })], P.prototype, "isReference", void 0),
        (0,
        _._)([(0,
        K.MZ)({
            type: Number,
            readOnly: !0,
            json: {
                read: !1,
                write: !1,
                origins: {
                    "web-document": {
                        read: !1,
                        write: !1
                    }
                }
            }
        })], P.prototype, "refreshInterval", null),
        (0,
        _._)([(0,
        K.MZ)({
            type: H.A,
            json: {
                write: !1
            }
        })], P.prototype, "tileInfo", void 0),
        (0,
        _._)([(0,
        K.MZ)({
            type: ["show", "hide"]
        })], P.prototype, "listMode", void 0),
        (0,
        _._)([(0,
        K.MZ)({
            readOnly: !0,
            json: {
                read: !1,
                write: !1
            }
        })], P.prototype, "subDomains", void 0),
        (0,
        _._)([(0,
        K.MZ)({
            readOnly: !0,
            json: {
                read: !1,
                write: !1
            },
            nonNullable: !0
        })], P.prototype, "fullExtent", void 0),
        (0,
        _._)([(0,
        K.MZ)({
            readOnly: !0,
            json: {
                read: !1,
                write: !1
            }
        })], P.prototype, "urlTemplate", void 0),
        (0,
        _._)([(0,
        K.MZ)({
            type: ["OpenStreetMap"]
        })], P.prototype, "operationalLayerType", void 0),
        (0,
        _._)([(0,
        K.MZ)({
            json: {
                read: !1
            }
        })], P.prototype, "type", void 0),
        (0,
        _._)([(0,
        K.MZ)({
            json: {
                read: !1,
                write: !1
            }
        })], P.prototype, "copyright", void 0),
        (0,
        _._)([(0,
        K.MZ)({
            json: {
                read: !1,
                write: !1
            }
        })], P.prototype, "wmtsInfo", void 0),
        P = (0,
        _._)([(0,
        w.$)("esri.layers.OpenStreetMapLayer")], P);
        const v = P
    }
    ,
    76972: (_e, k, t) => {
        t.r(k),
        t.d(k, {
            default: () => te
        });
        var _ = t(74523)
          , g = t(44701)
          , K = t(43803)
          , S = t(80226)
          , V = t(27129)
          , w = t(21039)
          , W = t(85736)
          , Y = t(34332)
          , z = t(65164)
          , H = t(78488)
          , C = t(99131)
          , F = t(10781)
          , P = (t(69408),
        t(71781))
          , v = t(90496)
          , L = t(4865)
          , T = t(55938)
          , o = t(49376)
          , n = t(34632)
          , h = t(41378)
          , A = t(17446)
          , D = t(51408)
          , G = t(58914)
          , U = t(31928)
          , B = t(14782)
          , R = t(25807)
          , M = t(92469)
          , Z = t(10860)
          , Q = t(54417)
          , se = t(62614)
          , J = t(10195)
          , q = t(40806)
          , X = t(33466);
        const N = ["Canvas/World_Dark_Gray_Base", "Canvas/World_Dark_Gray_Reference", "Canvas/World_Light_Gray_Base", "Canvas/World_Light_Gray_Reference", "Elevation/World_Hillshade", "Elevation/World_Hillshade_Dark", "Ocean/World_Ocean_Base", "Ocean/World_Ocean_Reference", "Ocean_Basemap", "Reference/World_Boundaries_and_Places", "Reference/World_Boundaries_and_Places_Alternate", "Reference/World_Transportation", "World_Imagery", "World_Street_Map", "World_Topo_Map"];
        let $ = class extends ((0,
        G.d)((0,
        Q.I)((0,
        Z.j)((0,
        B.q)((0,
        R.A)((0,
        h.f)((0,
        A.V)((0,
        D.b)((0,
        Y.P)((0,
        V.$)((0,
        M.J)((0,
        n.p)((0,
        U.d)(o.A)))))))))))))) {
            constructor(...ee) {
                super(...ee),
                this.listMode = "show",
                this.isReference = null,
                this.operationalLayerType = "ArcGISTiledMapServiceLayer",
                this.resampling = !0,
                this.sourceJSON = null,
                this.spatialReference = null,
                this.path = null,
                this.sublayers = null,
                this.type = "tile",
                this.url = null
            }
            normalizeCtorArgs(ee, ae) {
                return "string" == typeof ee ? {
                    url: ee,
                    ...ae
                } : ee
            }
            load(ee) {
                const ae = (0,
                W.Ru)(ee) ? ee.signal : null;
                return this.addResolvingPromise(this.loadFromPortal({
                    supportedTypes: ["Map Service"]
                }, ee).catch(z.QP).then( () => this._fetchService(ae))),
                Promise.resolve(this)
            }
            get attributionDataUrl() {
                var ee;
                const ae = null == (ee = this.parsedUrl) ? void 0 : ee.path.toLowerCase();
                return ae ? this._getDefaultAttribution(this._getMapName(ae)) : null
            }
            readSpatialReference(ee, ae) {
                return (ee = ee || ae.tileInfo && ae.tileInfo.spatialReference) && T.A.fromJSON(ee)
            }
            writeSublayers(ee, ae, oe, ue) {
                if (!this.loaded || !ee)
                    return;
                const le = ee.slice().reverse().flatten( ({sublayers: re}) => re && re.toArray().reverse()).toArray()
                  , de = []
                  , ne = {
                    writeSublayerStructure: !1,
                    ...ue
                };
                le.forEach(re => {
                    const ie = re.write({}, ne);
                    de.push(ie)
                }
                ),
                de.some(re => Object.keys(re).length > 1) && (ae.layers = de)
            }
            get tileServers() {
                var ee;
                return this._getDefaultTileServers(null == (ee = this.parsedUrl) ? void 0 : ee.path)
            }
            castTileServers(ee) {
                return Array.isArray(ee) ? ee.map(ae => (0,
                H.An)(ae).path) : null
            }
            fetchTile(ee, ae, oe, ue={}) {
                const {signal: le} = ue
                  , de = this.getTileUrl(ee, ae, oe)
                  , ne = {
                    responseType: "image",
                    signal: le,
                    query: {
                        ...this.refreshParameters
                    }
                };
                return (0,
                K.default)(de, ne).then(re => re.data)
            }
            fetchImageBitmapTile(ee, ae, oe, ue={}) {
                var le = this;
                return (0,
                _.A)(function*() {
                    const {signal: de} = ue
                      , ne = le.getTileUrl(ee, ae, oe)
                      , re = {
                        responseType: "blob",
                        signal: de,
                        query: {
                            ...le.refreshParameters
                        }
                    }
                      , {data: ie} = yield(0,
                    K.default)(ne, re);
                    return (0,
                    q.m)(ie, ne)
                })()
            }
            getTileUrl(ee, ae, oe) {
                var ue, le;
                const ne = (0,
                H.x0)({
                    ...null == (ue = this.parsedUrl) ? void 0 : ue.query,
                    blankTile: !(!this.tilemapCache && this.supportsBlankTile) && null,
                    ...this.customParameters,
                    token: this.apiKey
                })
                  , re = this.tileServers;
                return `${re && re.length ? re[ae % re.length] : null == (le = this.parsedUrl) ? void 0 : le.path}/tile/${ee}/${ae}/${oe}${ne ? "?" + ne : ""}`
            }
            loadAll() {
                return (0,
                w.g)(this, ee => {
                    ee(this.allSublayers)
                }
                )
            }
            _fetchService(ee) {
                return new Promise( (ae, oe) => {
                    if (this.sourceJSON) {
                        if (null != this.sourceJSON.bandCount && null != this.sourceJSON.pixelSizeX)
                            throw new S.A("tile-layer:unsupported-url","use ImageryTileLayer to open a tiled image service");
                        return void ae({
                            data: this.sourceJSON
                        })
                    }
                    if (!this.parsedUrl)
                        throw new S.A("tile-layer:undefined-url","layer's url is not defined");
                    const ue = (0,
                    se.qg)(this.parsedUrl.path);
                    if ((0,
                    W.Ru)(ue) && "ImageServer" === ue.serverType)
                        throw new S.A("tile-layer:unsupported-url","use ImageryTileLayer to open a tiled image service");
                    (0,
                    K.default)(this.parsedUrl.path, {
                        query: {
                            f: "json",
                            ...this.parsedUrl.query,
                            ...this.customParameters,
                            token: this.apiKey
                        },
                        responseType: "json",
                        signal: ee
                    }).then(ae, oe)
                }
                ).then(ae => {
                    let oe = this.url;
                    if (ae.ssl && (oe = this.url = oe.replace(/^http:/i, "https:")),
                    this.sourceJSON = ae.data,
                    this.read(ae.data, {
                        origin: "service",
                        url: this.parsedUrl
                    }),
                    10.1 === this.version && !(0,
                    se.Wo)(oe))
                        return this._fetchServerVersion(oe, ee).then(ue => {
                            this.read({
                                currentVersion: ue
                            })
                        }
                        ).catch( () => {}
                        )
                }
                )
            }
            _fetchServerVersion(ee, ae) {
                if (!(0,
                se.Fi)(ee))
                    return Promise.reject();
                const oe = ee.replace(/(.*\/rest)\/.*/i, "$1") + "/info";
                return (0,
                K.default)(oe, {
                    query: {
                        f: "json",
                        ...this.customParameters,
                        token: this.apiKey
                    },
                    responseType: "json",
                    signal: ae
                }).then(ue => {
                    if (ue.data && ue.data.currentVersion)
                        return ue.data.currentVersion;
                    throw new S.A("tile-layer:version-not-available")
                }
                )
            }
            _getMapName(ee) {
                const ae = ee.match(/^(?:https?:)?\/\/(server\.arcgisonline\.com|services\.arcgisonline\.com|ibasemaps-api\.arcgis\.com)\/arcgis\/rest\/services\/([^\/]+(\/[^\/]+)*)\/mapserver/i);
                return ae ? ae[2] : void 0
            }
            _getDefaultAttribution(ee) {
                if (null == ee)
                    return null;
                let ae;
                ee = ee.toLowerCase();
                for (let oe = 0, ue = N.length; oe < ue; oe++)
                    if (ae = N[oe],
                    ae.toLowerCase().includes(ee))
                        return (0,
                        H.s2)("//static.arcgis.com/attribution/" + ae);
                return null
            }
            _getDefaultTileServers(ee) {
                if (null == ee)
                    return [];
                const ae = -1 !== ee.search(/^(?:https?:)?\/\/server\.arcgisonline\.com/i)
                  , oe = -1 !== ee.search(/^(?:https?:)?\/\/services\.arcgisonline\.com/i);
                return ae || oe ? [ee, ee.replace(ae ? /server\.arcgisonline/i : /services\.arcgisonline/i, ae ? "services.arcgisonline" : "server.arcgisonline")] : []
            }
            get hasOverriddenFetchTile() {
                return !this.fetchTile.__isDefault__
            }
        }
        ;
        (0,
        g._)([(0,
        C.MZ)({
            readOnly: !0
        })], $.prototype, "attributionDataUrl", null),
        (0,
        g._)([(0,
        C.MZ)({
            type: ["show", "hide", "hide-children"]
        })], $.prototype, "listMode", void 0),
        (0,
        g._)([(0,
        C.MZ)({
            json: {
                read: !0,
                write: !0
            }
        })], $.prototype, "blendMode", void 0),
        (0,
        g._)([(0,
        C.MZ)({
            type: Boolean,
            json: {
                read: !1,
                write: {
                    enabled: !0,
                    overridePolicy: () => ({
                        enabled: !1
                    })
                }
            }
        })], $.prototype, "isReference", void 0),
        (0,
        g._)([(0,
        C.MZ)({
            readOnly: !0,
            type: ["ArcGISTiledMapServiceLayer"]
        })], $.prototype, "operationalLayerType", void 0),
        (0,
        g._)([(0,
        C.MZ)({
            type: Boolean
        })], $.prototype, "resampling", void 0),
        (0,
        g._)([(0,
        C.MZ)()], $.prototype, "sourceJSON", void 0),
        (0,
        g._)([(0,
        C.MZ)({
            type: T.A
        })], $.prototype, "spatialReference", void 0),
        (0,
        g._)([(0,
        P.w)("spatialReference", ["spatialReference", "tileInfo"])], $.prototype, "readSpatialReference", null),
        (0,
        g._)([(0,
        C.MZ)({
            type: String,
            json: {
                origins: {
                    "web-scene": {
                        read: !0,
                        write: !0
                    }
                },
                read: !1
            }
        })], $.prototype, "path", void 0),
        (0,
        g._)([(0,
        C.MZ)({
            readOnly: !0
        })], $.prototype, "sublayers", void 0),
        (0,
        g._)([(0,
        L.K)("sublayers", {
            layers: {
                type: [X.A]
            }
        })], $.prototype, "writeSublayers", null),
        (0,
        g._)([(0,
        C.MZ)({
            json: {
                read: !1,
                write: !1
            }
        })], $.prototype, "popupEnabled", void 0),
        (0,
        g._)([(0,
        C.MZ)()], $.prototype, "tileServers", null),
        (0,
        g._)([(0,
        F.w)("tileServers")], $.prototype, "castTileServers", null),
        (0,
        g._)([(0,
        C.MZ)({
            readOnly: !0,
            json: {
                read: !1
            }
        })], $.prototype, "type", void 0),
        (0,
        g._)([(0,
        C.MZ)(J.OZ)], $.prototype, "url", void 0),
        $ = (0,
        g._)([(0,
        v.$)("esri.layers.TileLayer")], $),
        $.prototype.fetchTile.__isDefault__ = !0;
        const te = $
    }
    ,
    13618: (_e, k, t) => {
        t.r(k),
        t.d(k, {
            default: () => se
        });
        var Z, _ = t(74523), g = t(44701), S = (t(87488),
        t(43803)), V = t(80226), w = t(34332), W = t(5983), Y = t(78488), z = t(99131), F = (t(17179),
        t(69408),
        t(71781)), I = t(90496), P = t(4865), v = t(49376), L = t(58914), T = t(14782), o = t(25807), n = t(92469), h = t(10860), A = t(40806), D = t(38238), G = t(11653), U = t(16855), B = t(7523), R = t(55938), M = t(12993);
        let Q = Z = class extends ((0,
        L.d)((0,
        n.J)((0,
        h.j)((0,
        T.q)((0,
        o.A)((0,
        w.P)(v.A))))))) {
            constructor(...J) {
                super(...J),
                this.copyright = "",
                this.fullExtent = new B.default(-20037508.342787,-20037508.34278,20037508.34278,20037508.342787,R.A.WebMercator),
                this.legendEnabled = !1,
                this.isReference = null,
                this.popupEnabled = !1,
                this.spatialReference = R.A.WebMercator,
                this.subDomains = null,
                this.tileInfo = new G.A({
                    size: [256, 256],
                    dpi: 96,
                    format: "png8",
                    compressionQuality: 0,
                    origin: new M.A({
                        x: -20037508.342787,
                        y: 20037508.342787,
                        spatialReference: R.A.WebMercator
                    }),
                    spatialReference: R.A.WebMercator,
                    lods: [new D.A({
                        level: 0,
                        scale: 591657527.591555,
                        resolution: 156543.033928
                    }), new D.A({
                        level: 1,
                        scale: 295828763.795777,
                        resolution: 78271.5169639999
                    }), new D.A({
                        level: 2,
                        scale: 147914381.897889,
                        resolution: 39135.7584820001
                    }), new D.A({
                        level: 3,
                        scale: 73957190.948944,
                        resolution: 19567.8792409999
                    }), new D.A({
                        level: 4,
                        scale: 36978595.474472,
                        resolution: 9783.93962049996
                    }), new D.A({
                        level: 5,
                        scale: 18489297.737236,
                        resolution: 4891.96981024998
                    }), new D.A({
                        level: 6,
                        scale: 9244648.868618,
                        resolution: 2445.98490512499
                    }), new D.A({
                        level: 7,
                        scale: 4622324.434309,
                        resolution: 1222.99245256249
                    }), new D.A({
                        level: 8,
                        scale: 2311162.217155,
                        resolution: 611.49622628138
                    }), new D.A({
                        level: 9,
                        scale: 1155581.108577,
                        resolution: 305.748113140558
                    }), new D.A({
                        level: 10,
                        scale: 577790.554289,
                        resolution: 152.874056570411
                    }), new D.A({
                        level: 11,
                        scale: 288895.277144,
                        resolution: 76.4370282850732
                    }), new D.A({
                        level: 12,
                        scale: 144447.638572,
                        resolution: 38.2185141425366
                    }), new D.A({
                        level: 13,
                        scale: 72223.819286,
                        resolution: 19.1092570712683
                    }), new D.A({
                        level: 14,
                        scale: 36111.909643,
                        resolution: 9.55462853563415
                    }), new D.A({
                        level: 15,
                        scale: 18055.954822,
                        resolution: 4.77731426794937
                    }), new D.A({
                        level: 16,
                        scale: 9027.977411,
                        resolution: 2.38865713397468
                    }), new D.A({
                        level: 17,
                        scale: 4513.988705,
                        resolution: 1.19432856685505
                    }), new D.A({
                        level: 18,
                        scale: 2256.994353,
                        resolution: .597164283559817
                    }), new D.A({
                        level: 19,
                        scale: 1128.497176,
                        resolution: .298582141647617
                    }), new D.A({
                        level: 20,
                        scale: 564.248588,
                        resolution: .14929107082380833
                    }), new D.A({
                        level: 21,
                        scale: 282.124294,
                        resolution: .07464553541190416
                    }), new D.A({
                        level: 22,
                        scale: 141.062147,
                        resolution: .03732276770595208
                    }), new D.A({
                        level: 23,
                        scale: 70.5310735,
                        resolution: .01866138385297604
                    })]
                }),
                this.type = "web-tile",
                this.urlTemplate = null,
                this.wmtsInfo = null
            }
            normalizeCtorArgs(J, q) {
                return "string" == typeof J ? {
                    urlTemplate: J,
                    ...q
                } : J
            }
            load(J) {
                const q = this.loadFromPortal({
                    supportedTypes: ["WMTS"]
                }, J).then( () => {
                    let X = "";
                    if (this.urlTemplate)
                        if (this.spatialReference.equals(this.tileInfo.spatialReference)) {
                            var N;
                            const $ = new Y.s0(this.urlTemplate);
                            !(this.subDomains && this.subDomains.length > 0) && null != (N = $.authority) && N.includes("{subDomain}") && (X = "is missing 'subDomains' property")
                        } else
                            X = "spatialReference must match tileInfo.spatialReference";
                    else
                        X = "is missing the required 'urlTemplate' property value";
                    if (X)
                        throw new V.A("web-tile-layer:load",`WebTileLayer (title: '${this.title}', id: '${this.id}') ${X}`)
                }
                );
                return this.addResolvingPromise(q),
                Promise.resolve(this)
            }
            get levelValues() {
                const J = [];
                if (!this.tileInfo)
                    return null;
                for (const q of this.tileInfo.lods)
                    J[q.level] = q.levelValue || q.level;
                return J
            }
            readSpatialReference(J, q) {
                return J || q.fullExtent && q.fullExtent.spatialReference && R.A.fromJSON(q.fullExtent.spatialReference)
            }
            get tileServers() {
                if (!this.urlTemplate)
                    return null;
                const J = []
                  , {urlTemplate: q, subDomains: X} = this
                  , N = new Y.s0(q)
                  , $ = N.scheme ? N.scheme + "://" : "//"
                  , te = $ + N.authority + "/"
                  , ee = N.authority;
                if (null != ee && ee.includes("{subDomain}")) {
                    if (X && X.length > 0 && ee.split(".").length > 1)
                        for (const ae of X)
                            J.push($ + ee.replace(/\{subDomain\}/gi, ae) + "/")
                } else
                    J.push(te);
                return J.map(ae => ("/" !== ae.charAt(ae.length - 1) && (ae += "/"),
                ae))
            }
            get urlPath() {
                if (!this.urlTemplate)
                    return null;
                const J = this.urlTemplate
                  , q = new Y.s0(J);
                return J.substring(((q.scheme ? q.scheme + "://" : "//") + q.authority + "/").length)
            }
            readUrlTemplate(J, q) {
                return J || q.templateUrl
            }
            writeUrlTemplate(J, q) {
                J && (0,
                Y.BQ)(J) && (J = "https:" + J),
                J && (J = J.replace(/\{z\}/gi, "{level}").replace(/\{x\}/gi, "{col}").replace(/\{y\}/gi, "{row}"),
                J = (0,
                Y.S8)(J)),
                q.templateUrl = J
            }
            fetchTile(J, q, X, N={}) {
                const {signal: $} = N
                  , te = this.getTileUrl(J, q, X)
                  , ee = {
                    responseType: "image",
                    signal: $,
                    query: {
                        ...this.refreshParameters
                    }
                };
                return (0,
                S.default)(te, ee).then(ae => ae.data)
            }
            fetchImageBitmapTile(J, q, X, N={}) {
                var $ = this;
                return (0,
                _.A)(function*() {
                    const {signal: te} = N;
                    if ($.fetchTile !== Z.prototype.fetchTile) {
                        const ue = yield $.fetchTile(J, q, X, N);
                        try {
                            return createImageBitmap(ue)
                        } catch (le) {
                            throw new V.A("request:server",`Unable to load tile ${J}/${q}/${X}`,{
                                error: le,
                                level: J,
                                row: q,
                                col: X
                            })
                        }
                    }
                    const ee = $.getTileUrl(J, q, X)
                      , ae = {
                        responseType: "blob",
                        signal: te,
                        query: {
                            ...$.refreshParameters
                        }
                    }
                      , {data: oe} = yield(0,
                    S.default)(ee, ae);
                    return (0,
                    A.m)(oe, ee)
                })()
            }
            getTileUrl(J, q, X) {
                const {levelValues: N, tileServers: $, urlPath: te} = this;
                if (!N || !$ || !te)
                    return "";
                const ee = N[J];
                return $[q % $.length] + (0,
                W.HC)(te, {
                    level: ee,
                    z: ee,
                    col: X,
                    x: X,
                    row: q,
                    y: q
                })
            }
        }
        ;
        (0,
        g._)([(0,
        z.MZ)({
            type: String,
            value: "",
            json: {
                write: !0
            }
        })], Q.prototype, "copyright", void 0),
        (0,
        g._)([(0,
        z.MZ)({
            type: B.default,
            json: {
                write: !0
            },
            nonNullable: !0
        })], Q.prototype, "fullExtent", void 0),
        (0,
        g._)([(0,
        z.MZ)({
            readOnly: !0,
            json: {
                read: !1,
                write: !1
            }
        })], Q.prototype, "legendEnabled", void 0),
        (0,
        g._)([(0,
        z.MZ)({
            type: ["show", "hide"]
        })], Q.prototype, "listMode", void 0),
        (0,
        g._)([(0,
        z.MZ)({
            json: {
                read: !0,
                write: !0
            }
        })], Q.prototype, "blendMode", void 0),
        (0,
        g._)([(0,
        z.MZ)()], Q.prototype, "levelValues", null),
        (0,
        g._)([(0,
        z.MZ)({
            type: Boolean,
            json: {
                read: !1,
                write: {
                    enabled: !0,
                    overridePolicy: () => ({
                        enabled: !1
                    })
                }
            }
        })], Q.prototype, "isReference", void 0),
        (0,
        g._)([(0,
        z.MZ)({
            type: ["WebTiledLayer"],
            value: "WebTiledLayer"
        })], Q.prototype, "operationalLayerType", void 0),
        (0,
        g._)([(0,
        z.MZ)({
            readOnly: !0,
            json: {
                read: !1,
                write: !1
            }
        })], Q.prototype, "popupEnabled", void 0),
        (0,
        g._)([(0,
        z.MZ)({
            type: R.A
        })], Q.prototype, "spatialReference", void 0),
        (0,
        g._)([(0,
        F.w)("spatialReference", ["spatialReference", "fullExtent.spatialReference"])], Q.prototype, "readSpatialReference", null),
        (0,
        g._)([(0,
        z.MZ)({
            type: [String],
            json: {
                write: !0
            }
        })], Q.prototype, "subDomains", void 0),
        (0,
        g._)([(0,
        z.MZ)({
            type: G.A,
            json: {
                write: !0
            }
        })], Q.prototype, "tileInfo", void 0),
        (0,
        g._)([(0,
        z.MZ)({
            readOnly: !0
        })], Q.prototype, "tileServers", null),
        (0,
        g._)([(0,
        z.MZ)({
            json: {
                read: !1
            }
        })], Q.prototype, "type", void 0),
        (0,
        g._)([(0,
        z.MZ)()], Q.prototype, "urlPath", null),
        (0,
        g._)([(0,
        z.MZ)({
            type: String,
            json: {
                origins: {
                    "portal-item": {
                        read: {
                            source: "url"
                        }
                    }
                }
            }
        })], Q.prototype, "urlTemplate", void 0),
        (0,
        g._)([(0,
        F.w)("urlTemplate", ["urlTemplate", "templateUrl"])], Q.prototype, "readUrlTemplate", null),
        (0,
        g._)([(0,
        P.K)("urlTemplate", {
            templateUrl: {
                type: String
            }
        })], Q.prototype, "writeUrlTemplate", null),
        (0,
        g._)([(0,
        z.MZ)({
            type: U.x,
            json: {
                write: !0
            }
        })], Q.prototype, "wmtsInfo", void 0),
        Q = Z = (0,
        g._)([(0,
        I.$)("esri.layers.WebTileLayer")], Q);
        const se = Q
    }
    ,
    88374: (_e, k, t) => {
        t.d(k, {
            A: () => L
        });
        var C, _ = t(44701), g = t(11602), K = t(21039), S = t(13156), V = t(99131), Y = (t(17179),
        t(69408),
        t(90496)), z = t(52682), H = t(46031);
        const F = {
            type: g.A,
            readOnly: !0,
            json: {
                origins: {
                    service: {
                        read: {
                            source: "sublayers",
                            reader: I
                        }
                    }
                },
                read: !1
            }
        };
        function I(T, o, n) {
            if (T && Array.isArray(T))
                return new g.A(T.map(h => {
                    const A = function v(T) {
                        return "group" === T.layerType ? P : z.A
                    }(h);
                    if (A) {
                        const D = new A;
                        return D.read(h, n),
                        D
                    }
                    return n && n.messages && h && n.messages.push(new S.A("building-scene-layer:unsupported-sublayer-type","Building scene sublayer of type '" + (h.type || "unknown") + "' are not supported",{
                        definition: h,
                        context: n
                    })),
                    null
                }
                ))
        }
        let P = C = class extends H.A {
            constructor(T) {
                super(T),
                this.type = "building-group",
                this.listMode = "show",
                this.sublayers = null
            }
            loadAll() {
                return (0,
                K.L)(this, T => C.forEachSublayer(this.sublayers, o => {
                    "building-group" !== o.type && T(o)
                }
                ))
            }
        }
        ;
        var T;
        (0,
        _._)([(0,
        V.MZ)({
            type: ["hide", "show", "hide-children"],
            json: {
                write: !0
            }
        })], P.prototype, "listMode", void 0),
        (0,
        _._)([(0,
        V.MZ)(F)], P.prototype, "sublayers", void 0),
        P = C = (0,
        _._)([(0,
        Y.$)("esri.layers.buildingSublayers.BuildingGroupSublayer")], P),
        (T = P || (P = {})).sublayersProperty = F,
        T.readSublayers = I,
        T.forEachSublayer = function o(n, h) {
            n.forEach(A => {
                h(A),
                "building-group" === A.type && o(A.sublayers, h)
            }
            )
        }
        ;
        const L = P
    }
    ,
    40510: (_e, k, t) => {
        t.d(k, {
            C: () => w,
            a: () => I
        }),
        t(69584);
        var g = t(85736)
          , K = t(13261);
        function S(P, v) {
            if (P === v)
                return !0;
            if (null == P || null == v || P.length !== v.length)
                return !1;
            for (let L = 0; L < P.length; L++) {
                const T = P[L]
                  , o = v[L];
                if (T.length !== o.length)
                    return !1;
                for (let n = 0; n < T.length; n++)
                    if (T[n] !== o[n])
                        return !1
            }
            return !0
        }
        function V(P, v) {
            if (P === v)
                return !0;
            if (null == P || null == v || P.length !== v.length)
                return !1;
            for (let L = 0; L < P.length; L++)
                if (!S(P[L], v[L]))
                    return !1;
            return !0
        }
        function w(P, v) {
            return P === v || (0,
            g.Ru)(P) && (0,
            g.Ru)(v) && (0,
            K.aI)(P.spatialReference, v.spatialReference) && P.x === v.x && P.y === v.y && P.z === v.z && P.m === v.m
        }
        function I(P, v) {
            return P === v || null != P && null != v && P.objectId === v.objectId && !!function C(P, v) {
                if (P === v)
                    return !0;
                if ((0,
                g.$I)(P) || (0,
                g.$I)(v) || P.type !== v.type)
                    return !1;
                switch (P.type) {
                case "point":
                    return w(P, v);
                case "extent":
                    return function H(P, v) {
                        return P.hasZ === v.hasZ && P.hasM === v.hasM && !!(0,
                        K.aI)(P.spatialReference, v.spatialReference) && P.xmin === v.xmin && P.ymin === v.ymin && P.zmin === v.zmin && P.xmax === v.xmax && P.ymax === v.ymax && P.zmax === v.zmax
                    }(P, v);
                case "polyline":
                    return function W(P, v) {
                        return P.hasZ === v.hasZ && P.hasM === v.hasM && !!(0,
                        K.aI)(P.spatialReference, v.spatialReference) && V(P.paths, v.paths)
                    }(P, v);
                case "polygon":
                    return function Y(P, v) {
                        return P.hasZ === v.hasZ && P.hasM === v.hasM && !!(0,
                        K.aI)(P.spatialReference, v.spatialReference) && V(P.rings, v.rings)
                    }(P, v);
                case "multipoint":
                    return function z(P, v) {
                        return P.hasZ === v.hasZ && P.hasM === v.hasM && !!(0,
                        K.aI)(P.spatialReference, v.spatialReference) && S(P.points, v.points)
                    }(P, v);
                case "mesh":
                    return !1;
                default:
                    return
                }
            }(P.geometry, v.geometry) && !!function F(P, v) {
                if (P === v)
                    return !0;
                if (!P || !v)
                    return !1;
                const L = Object.keys(P)
                  , T = Object.keys(v);
                if (L.length !== T.length)
                    return !1;
                for (const o of L)
                    if (P[o] !== v[o])
                        return !1;
                return !0
            }(P.attributes, v.attributes)
        }
    }
    ,
    42726: (_e, k, t) => {
        t.d(k, {
            Ek: () => A,
            HP: () => I,
            JS: () => L,
            Kq: () => D,
            N3: () => P,
            RW: () => R,
            TH: () => n,
            ao: () => G,
            iQ: () => B,
            jy: () => v,
            w9: () => U
        });
        var _ = t(69781)
          , K = (t(69584),
        t(85736))
          , S = t(34019)
          , V = t(230)
          , w = t(55938)
          , W = t(69112)
          , Y = t(13435)
          , z = t(23313)
          , H = t(61058)
          , C = t(81685);
        t(40510);
        class I {
            constructor(Z, Q, se) {
                this.uid = Z,
                this.geometry = Q,
                this.attributes = se,
                this.visible = !0,
                this.objectId = null,
                this.centroid = null
            }
        }
        function P(M) {
            return (0,
            K.Ru)(M.geometry)
        }
        class v {
            constructor() {
                this.exceededTransferLimit = !1,
                this.features = [],
                this.fields = [],
                this.hasM = !1,
                this.hasZ = !1,
                this.geometryType = null,
                this.objectIdFieldName = null,
                this.globalIdFieldName = null,
                this.geometryProperties = null,
                this.geohashFieldName = null,
                this.spatialReference = null,
                this.transform = null
            }
        }
        function L(M) {
            var Z, Q;
            const se = H.g.fromJSON(M.geometryType)
              , J = w.A.fromJSON(M.spatialReference)
              , q = M.transform
              , X = M.features.map(N => {
                const $ = function T(M, Z, Q, se) {
                    return {
                        uid: (0,
                        V.L)(),
                        objectId: se && M.attributes ? M.attributes[se] : null,
                        attributes: M.attributes,
                        geometry: o(M.geometry, Z, Q),
                        visible: !0
                    }
                }(N, se, J, M.objectIdFieldName)
                  , te = $.geometry;
                if ((0,
                K.Ru)(te) && q)
                    switch (te.type) {
                    case "point":
                        $.geometry = (0,
                        z.Tr)(q, te, te, te.hasZ, te.hasM);
                        break;
                    case "multipoint":
                        $.geometry = (0,
                        z.SW)(q, te, te, !!te.hasZ, !!te.hasM);
                        break;
                    case "polygon":
                        $.geometry = (0,
                        z.$X)(q, te, te, !!te.hasZ, !!te.hasM);
                        break;
                    case "polyline":
                        $.geometry = (0,
                        z.P5)(q, te, te, !!te.hasZ, !!te.hasM);
                        break;
                    case "extent":
                    case "mesh":
                        $.geometry = te
                    }
                return $
            }
            );
            return {
                geometryType: se,
                features: X,
                spatialReference: J,
                fields: null != (Z = null == (Q = M.fields) ? void 0 : Q.map(N => C.A.fromJSON(N))) ? Z : [],
                objectIdFieldName: M.objectIdFieldName,
                globalIdFieldName: M.globalIdFieldName,
                geohashFieldName: M.geohashFieldName,
                geometryProperties: M.geometryProperties,
                hasZ: M.hasZ,
                hasM: M.hasM,
                exceededTransferLimit: M.exceededTransferLimit,
                transform: null
            }
        }
        function o(M, Z, Q) {
            if ((0,
            K.$I)(M))
                return null;
            switch (Z) {
            case "point":
                return {
                    x: M.x,
                    y: M.y,
                    z: M.z,
                    m: M.m,
                    hasZ: null != M.z,
                    hasM: null != M.m,
                    type: "point",
                    spatialReference: Q
                };
            case "polyline":
                return {
                    paths: M.paths,
                    hasZ: !!M.hasZ,
                    hasM: !!M.hasM,
                    type: "polyline",
                    spatialReference: Q
                };
            case "polygon":
                return {
                    rings: M.rings,
                    hasZ: !!M.hasZ,
                    hasM: !!M.hasM,
                    type: "polygon",
                    spatialReference: Q
                };
            case "multipoint":
                return {
                    points: M.points,
                    hasZ: !!M.hasZ,
                    hasM: !!M.hasM,
                    type: "multipoint",
                    spatialReference: Q
                }
            }
        }
        function n(M, Z, Q, se) {
            return {
                x: M,
                y: Z,
                z: Q,
                hasZ: null != Q,
                hasM: !1,
                spatialReference: se,
                type: "point"
            }
        }
        function A(M) {
            let Z = 32;
            return Z += (0,
            _.eY)(M.attributes),
            Z += 3,
            Z += 8 + function h(M) {
                if ((0,
                K.$I)(M))
                    return 0;
                let Z = 32;
                switch (M.type) {
                case "point":
                    Z += 42;
                    break;
                case "polyline":
                case "polygon":
                    {
                        let Q = 0;
                        const se = 2 + (M.hasZ ? 1 : 0) + (M.hasM ? 1 : 0)
                          , J = "polyline" === M.type ? M.paths : M.rings;
                        for (const q of J)
                            Q += q.length;
                        Z += 8 * Q * se + 64,
                        Z += 128 * Q,
                        Z += 34,
                        Z += 32 * (J.length + 1);
                        break
                    }
                case "multipoint":
                    {
                        const se = M.points.length;
                        Z += 8 * se * (2 + (M.hasZ ? 1 : 0) + (M.hasM ? 1 : 0)) + 64,
                        Z += 128 * se,
                        Z += 34,
                        Z += 32;
                        break
                    }
                case "extent":
                    Z += 98,
                    M.hasM && (Z += 32),
                    M.hasZ && (Z += 32);
                    break;
                case "mesh":
                    Z += (0,
                    S.Ek)(M.vertexAttributes.position),
                    Z += (0,
                    S.Ek)(M.vertexAttributes.normal),
                    Z += (0,
                    S.Ek)(M.vertexAttributes.uv),
                    Z += (0,
                    S.Ek)(M.vertexAttributes.tangent)
                }
                return Z
            }(M.geometry),
            Z
        }
        function D(M) {
            if ((0,
            K.$I)(M))
                return 0;
            switch (M.type) {
            case "point":
                return 1;
            case "polyline":
                {
                    let Z = 0;
                    for (const Q of M.paths)
                        Z += Q.length;
                    return Z
                }
            case "polygon":
                {
                    let Z = 0;
                    for (const Q of M.rings)
                        Z += Q.length;
                    return Z
                }
            case "multipoint":
                return M.points.length;
            case "extent":
                return 2;
            case "mesh":
                {
                    const Z = M.vertexAttributes && M.vertexAttributes.position;
                    return Z ? Z.length / 3 : 0
                }
            default:
                return
            }
        }
        function G(M) {
            if ((0,
            K.$I)(M))
                return !1;
            switch (M.type) {
            case "extent":
            case "point":
                return !0;
            case "polyline":
                for (const Z of M.paths)
                    if (Z.length > 0)
                        return !0;
                return !1;
            case "polygon":
                for (const Z of M.rings)
                    if (Z.length > 0)
                        return !0;
                return !1;
            case "multipoint":
                return M.points.length > 0;
            case "mesh":
                return !M.loaded || M.vertexAttributes.position.length > 0
            }
        }
        function U(M, Z) {
            switch ((0,
            W.Ie)(Z),
            "mesh" === M.type && (M = M.extent),
            M.type) {
            case "point":
                Z[0] = Z[3] = M.x,
                Z[1] = Z[4] = M.y,
                M.hasZ && (Z[2] = Z[5] = M.z);
                break;
            case "polyline":
                for (let Q = 0; Q < M.paths.length; Q++)
                    (0,
                    W.Jf)(Z, M.paths[Q], !!M.hasZ);
                break;
            case "polygon":
                for (let Q = 0; Q < M.rings.length; Q++)
                    (0,
                    W.Jf)(Z, M.rings[Q], !!M.hasZ);
                break;
            case "multipoint":
                (0,
                W.Jf)(Z, M.points, !!M.hasZ);
                break;
            case "extent":
                Z[0] = M.xmin,
                Z[1] = M.ymin,
                Z[3] = M.xmax,
                Z[4] = M.ymax,
                null != M.zmin && (Z[2] = M.zmin),
                null != M.zmax && (Z[5] = M.zmax)
            }
        }
        function B(M, Z) {
            switch ((0,
            Y.Ie)(Z),
            "mesh" === M.type && (M = M.extent),
            M.type) {
            case "point":
                Z[0] = Z[2] = M.x,
                Z[1] = Z[3] = M.y;
                break;
            case "polyline":
                for (let Q = 0; Q < M.paths.length; Q++)
                    (0,
                    Y.Jf)(Z, M.paths[Q]);
                break;
            case "polygon":
                for (let Q = 0; Q < M.rings.length; Q++)
                    (0,
                    Y.Jf)(Z, M.rings[Q]);
                break;
            case "multipoint":
                (0,
                Y.Jf)(Z, M.points);
                break;
            case "extent":
                Z[0] = M.xmin,
                Z[1] = M.ymin,
                Z[2] = M.xmax,
                Z[3] = M.ymax
            }
        }
        function R(M, Z) {
            return null != M.objectId ? M.objectId : M.attributes && Z ? M.attributes[Z] : null
        }
    }
    ,
    95880: (_e, k, t) => {
        t.d(k, {
            H: () => g,
            L: () => _
        });
        const _ = 1;
        function g(K, S) {
            let V = 0;
            for (const W of S) {
                var w;
                const Y = null == (w = W.attributes) ? void 0 : w[K];
                "number" == typeof Y && isFinite(Y) && (V = Math.max(V, Y))
            }
            return V
        }
    }
    ,
    98052: (_e, k, t) => {
        t.d(k, {
            VR: () => I,
            hX: () => F
        }),
        t(87488),
        t(69584);
        var K = t(40014)
          , S = t(85736)
          , V = t(22183)
          , w = t(13435)
          , W = t(6591)
          , Y = t(12993);
        const z = K.A.getLogger("esri.layers.support.ElevationSampler");
        class H {
            queryElevation(A) {
                return I(A.clone(), this)
            }
            on() {
                return n
            }
            projectIfRequired(A, D) {
                return P(A, D)
            }
        }
        class C extends H {
            get spatialReference() {
                return this.extent.spatialReference
            }
            constructor(A, D, G) {
                super(),
                this.tile = A,
                this.noDataValue = G;
                const U = A.tile.extent;
                this.extent = (0,
                w.w1)(U, D.spatialReference),
                this.extent.zmin = A.zmin,
                this.extent.zmax = A.zmax,
                this._aaExtent = U;
                const B = (0,
                V.GA)(D.spatialReference)
                  , R = D.lodAt(A.tile.level).resolution * B;
                this.demResolution = {
                    min: R,
                    max: R
                }
            }
            contains(A) {
                const D = this.projectIfRequired(A, this.spatialReference);
                return !(0,
                S.$I)(D) && this.containsAt(D.x, D.y)
            }
            containsAt(A, D) {
                return (0,
                w.Rj)(this._aaExtent, A, D)
            }
            elevationAt(A, D) {
                if (!this.containsAt(A, D)) {
                    const G = this.extent;
                    return z.warn("#elevationAt()", `Point used to sample elevation (${A}, ${D}) is outside of the sampler extent (${G.xmin}, ${G.ymin}, ${G.xmax}, ${G.ymax})`),
                    this.noDataValue
                }
                return (0,
                S.zO)(this.tile.sample(A, D), this.noDataValue)
            }
        }
        class F extends H {
            get spatialReference() {
                return this.extent.spatialReference
            }
            constructor(A, D, G) {
                let U;
                super(),
                "number" == typeof D ? (this.noDataValue = D,
                U = null) : (U = D,
                this.noDataValue = G),
                this.samplers = U ? A.map(R => new C(R,U,this.noDataValue)) : A;
                const B = this.samplers[0];
                if (B) {
                    this.extent = B.extent.clone();
                    const {min: R, max: M} = B.demResolution;
                    this.demResolution = {
                        min: R,
                        max: M
                    };
                    for (let Z = 1; Z < this.samplers.length; Z++) {
                        const Q = this.samplers[Z];
                        this.extent.union(Q.extent),
                        this.demResolution.min = Math.min(this.demResolution.min, Q.demResolution.min),
                        this.demResolution.max = Math.max(this.demResolution.max, Q.demResolution.max)
                    }
                } else
                    this.extent = (0,
                    w.w1)((0,
                    w.vt)(), U.spatialReference),
                    this.demResolution = {
                        min: 0,
                        max: 0
                    }
            }
            elevationAt(A, D) {
                for (const G of this.samplers)
                    if (G.containsAt(A, D))
                        return G.elevationAt(A, D);
                return z.warn("#elevationAt()", `Point used to sample elevation (${A}, ${D}) is outside of the sampler`),
                this.noDataValue
            }
        }
        function I(h, A) {
            const D = P(h, A.spatialReference);
            if (!D)
                return null;
            switch (h.type) {
            case "point":
                !function v(h, A, D) {
                    h.z = D.elevationAt(A.x, A.y)
                }(h, D, A);
                break;
            case "polyline":
                !function L(h, A, D) {
                    o.spatialReference = A.spatialReference;
                    const G = h.hasM && !h.hasZ;
                    for (let U = 0; U < h.paths.length; U++) {
                        const B = h.paths[U]
                          , R = A.paths[U];
                        for (let M = 0; M < B.length; M++) {
                            const Z = B[M]
                              , Q = R[M];
                            o.x = Q[0],
                            o.y = Q[1],
                            G && (Z[3] = Z[2]),
                            Z[2] = D.elevationAt(o.x, o.y)
                        }
                    }
                    h.hasZ = !0
                }(h, D, A);
                break;
            case "multipoint":
                !function T(h, A, D) {
                    o.spatialReference = A.spatialReference;
                    const G = h.hasM && !h.hasZ;
                    for (let U = 0; U < h.points.length; U++) {
                        const B = h.points[U]
                          , R = A.points[U];
                        o.x = R[0],
                        o.y = R[1],
                        G && (B[3] = B[2]),
                        B[2] = D.elevationAt(o.x, o.y)
                    }
                    h.hasZ = !0
                }(h, D, A)
            }
            return h
        }
        function P(h, A) {
            if ((0,
            S.$I)(h))
                return null;
            const D = h.spatialReference;
            if (D.equals(A))
                return h;
            const G = (0,
            W.Cv)(h, A);
            return G || z.error(`Cannot project geometry spatial reference (wkid:${D.wkid}) to elevation sampler spatial reference (wkid:${A.wkid})`),
            G
        }
        const o = new Y.A
          , n = {
            remove() {}
        }
    }
    ,
    87692: (_e, k, t) => {
        t.d(k, {
            Q: () => _
        });
        class _ {
            constructor(K, S) {
                this.data = K,
                this.safeWidth = .99999999 * (K.width - 1),
                this.dx = (K.width - 1) / (S[2] - S[0]),
                this.dy = (K.width - 1) / (S[3] - S[1]),
                this.x0 = S[0],
                this.y1 = S[3]
            }
        }
    }
    ,
    39086: (_e, k, t) => {
        t.d(k, {
            g: () => P
        });
        var _ = t(44701)
          , g = t(90619)
          , K = t(27129)
          , S = t(85736)
          , V = t(29820)
          , w = t(99131)
          , z = (t(17179),
        t(69408),
        t(90496))
          , H = t(10195)
          , C = t(76356)
          , F = t(99069);
        const I = {
            visible: "visibleSublayers",
            definitionExpression: "layerDefs",
            labelingInfo: "hasDynamicLayers",
            labelsVisible: "hasDynamicLayers",
            opacity: "hasDynamicLayers",
            minScale: "visibleSublayers",
            maxScale: "visibleSublayers",
            renderer: "hasDynamicLayers",
            source: "hasDynamicLayers"
        };
        let P = class extends ((0,
        K.$)(g.A)) {
            constructor(v) {
                super(v),
                this.floors = null,
                this.scale = 0
            }
            destroy() {
                this.layer = null
            }
            get dynamicLayers() {
                if (!this.hasDynamicLayers)
                    return null;
                const v = this.visibleSublayers.map(L => {
                    const T = (0,
                    C.f)(this.floors, L);
                    return L.toExportImageJSON(T)
                }
                );
                return v.length ? JSON.stringify(v) : null
            }
            get hasDynamicLayers() {
                return this.layer && (0,
                F.Sk)(this.visibleSublayers, this.layer.serviceSublayers, this.layer.gdbVersion)
            }
            set layer(v) {
                this._get("layer") !== v && (this._set("layer", v),
                this.handles.remove("layer"),
                v && this.handles.add([v.allSublayers.on("change", () => this.notifyChange("visibleSublayers")), v.on("sublayer-update", L => this.notifyChange(I[L.propertyName]))], "layer"))
            }
            get layers() {
                const v = this.visibleSublayers;
                return v ? v.length ? "show:" + v.map(L => L.id).join(",") : "show:-1" : null
            }
            get layerDefs() {
                var v;
                const L = !(null == (v = this.floors) || !v.length)
                  , T = this.visibleSublayers.filter(o => null != o.definitionExpression || L && null != o.floorInfo);
                return T.length ? JSON.stringify(T.reduce( (o, n) => {
                    const h = (0,
                    C.f)(this.floors, n)
                      , A = (0,
                    V.m)(h, n.definitionExpression);
                    return (0,
                    S.Ru)(A) && (o[n.id] = A),
                    o
                }
                , {})) : null
            }
            get version() {
                this.commitProperty("layers"),
                this.commitProperty("layerDefs"),
                this.commitProperty("dynamicLayers"),
                this.commitProperty("timeExtent");
                const v = this.layer;
                return v && (v.commitProperty("dpi"),
                v.commitProperty("imageFormat"),
                v.commitProperty("imageTransparency"),
                v.commitProperty("gdbVersion")),
                (this._get("version") || 0) + 1
            }
            get visibleSublayers() {
                const v = [];
                if (!this.layer)
                    return v;
                const L = this.layer.sublayers
                  , T = n => {
                    const h = this.scale;
                    n.visible && (0 === h || (0 === n.minScale || h <= n.minScale) && (0 === n.maxScale || h >= n.maxScale)) && (n.sublayers ? n.sublayers.forEach(T) : v.unshift(n))
                }
                ;
                L && L.forEach(T);
                const o = this._get("visibleSublayers");
                return !o || o.length !== v.length || o.some( (n, h) => v[h] !== n) ? v : o
            }
            toJSON() {
                const v = this.layer;
                let L = {
                    dpi: v.dpi,
                    format: v.imageFormat,
                    transparent: v.imageTransparency,
                    gdbVersion: v.gdbVersion || null
                };
                return this.hasDynamicLayers && this.dynamicLayers ? L.dynamicLayers = this.dynamicLayers : L = {
                    ...L,
                    layers: this.layers,
                    layerDefs: this.layerDefs
                },
                L
            }
        }
        ;
        (0,
        _._)([(0,
        w.MZ)({
            readOnly: !0
        })], P.prototype, "dynamicLayers", null),
        (0,
        _._)([(0,
        w.MZ)()], P.prototype, "floors", void 0),
        (0,
        _._)([(0,
        w.MZ)({
            readOnly: !0
        })], P.prototype, "hasDynamicLayers", null),
        (0,
        _._)([(0,
        w.MZ)()], P.prototype, "layer", null),
        (0,
        _._)([(0,
        w.MZ)({
            readOnly: !0
        })], P.prototype, "layers", null),
        (0,
        _._)([(0,
        w.MZ)({
            readOnly: !0
        })], P.prototype, "layerDefs", null),
        (0,
        _._)([(0,
        w.MZ)({
            type: Number
        })], P.prototype, "scale", void 0),
        (0,
        _._)([(0,
        w.MZ)(H.ui)], P.prototype, "timeExtent", void 0),
        (0,
        _._)([(0,
        w.MZ)({
            readOnly: !0
        })], P.prototype, "version", null),
        (0,
        _._)([(0,
        w.MZ)({
            readOnly: !0
        })], P.prototype, "visibleSublayers", null),
        P = (0,
        _._)([(0,
        z.$)("esri.layers.mixins.ExportImageParameters")], P)
    }
    ,
    45716: (_e, k, t) => {
        t.d(k, {
            c: () => z
        });
        var _ = t(74523)
          , g = t(58653)
          , K = t(43803)
          , S = t(85736)
          , V = t(65164)
          , w = t(44929)
          , W = t(12212)
          , Y = t(63082);
        class z {
            constructor(C, F, I, P) {
                var v;
                this._parsedUrl = C,
                this._portalItem = F,
                this._apiKey = I,
                this.signal = P,
                this._rootDocument = null;
                const L = null == (v = this._parsedUrl) ? void 0 : v.path.match(/^(.*)\/SceneServer\/layers\/([\d]*)\/?$/i);
                L && (this._urlParts = {
                    root: L[1],
                    layerId: parseInt(L[2], 10)
                })
            }
            fetch() {
                var C = this;
                return (0,
                _.A)(function*() {
                    var F;
                    if (!C._urlParts)
                        return null;
                    const I = null != (F = C._portalItem) ? F : yield C._portalItemFromServiceItemId();
                    if ((0,
                    S.$I)(I))
                        return C._loadFromUrl();
                    const P = yield C._findAndLoadRelatedPortalItem(I);
                    return (0,
                    S.$I)(P) ? null : C._loadFeatureLayerFromPortalItem(P)
                })()
            }
            fetchPortalItem() {
                var C = this;
                return (0,
                _.A)(function*() {
                    var F;
                    if (!C._urlParts)
                        return null;
                    const I = null != (F = C._portalItem) ? F : yield C._portalItemFromServiceItemId();
                    return (0,
                    S.$I)(I) ? null : C._findAndLoadRelatedPortalItem(I)
                })()
            }
            _fetchRootDocument() {
                var C = this;
                return (0,
                _.A)(function*() {
                    if ((0,
                    S.Ru)(C._rootDocument))
                        return C._rootDocument;
                    if ((0,
                    S.$I)(C._urlParts))
                        return C._rootDocument = {},
                        {};
                    const F = {
                        query: {
                            f: "json",
                            token: C._apiKey
                        },
                        responseType: "json",
                        signal: C.signal
                    }
                      , I = `${C._urlParts.root}/SceneServer`;
                    try {
                        const P = yield(0,
                        K.default)(I, F);
                        C._rootDocument = P.data
                    } catch {
                        C._rootDocument = {}
                    }
                    return C._rootDocument
                })()
            }
            _fetchServiceOwningPortalUrl() {
                var C = this;
                return (0,
                _.A)(function*() {
                    var F;
                    const I = null == (F = C._parsedUrl) ? void 0 : F.path
                      , P = I ? null == g.id ? void 0 : g.id.findServerInfo(I) : null;
                    if (null != P && P.owningSystemUrl)
                        return P.owningSystemUrl;
                    const v = I ? I.replace(/(.*\/rest)\/.*/i, "$1") + "/info" : null;
                    try {
                        const L = (yield(0,
                        K.default)(v, {
                            query: {
                                f: "json"
                            },
                            responseType: "json",
                            signal: C.signal
                        })).data.owningSystemUrl;
                        if (L)
                            return L
                    } catch (L) {
                        (0,
                        V.QP)(L)
                    }
                    return null
                })()
            }
            _findAndLoadRelatedPortalItem(C) {
                var F = this;
                return (0,
                _.A)(function*() {
                    try {
                        return (yield C.fetchRelatedItems({
                            relationshipType: "Service2Service",
                            direction: "reverse"
                        }, {
                            signal: F.signal
                        })).find(I => "Feature Service" === I.type) || null
                    } catch (I) {
                        return (0,
                        V.QP)(I),
                        null
                    }
                })()
            }
            _loadFeatureLayerFromPortalItem(C) {
                var F = this;
                return (0,
                _.A)(function*() {
                    var I;
                    yield C.load({
                        signal: F.signal
                    });
                    const P = yield F._findMatchingAssociatedSublayerUrl(null != (I = C.url) ? I : "");
                    return new w.default({
                        url: P,
                        portalItem: C
                    }).load({
                        signal: F.signal
                    })
                })()
            }
            _loadFromUrl() {
                var C = this;
                return (0,
                _.A)(function*() {
                    var F;
                    const I = yield C._findMatchingAssociatedSublayerUrl(`${null == (F = C._urlParts) ? void 0 : F.root}/FeatureServer`);
                    return new w.default({
                        url: I
                    }).load({
                        signal: C.signal
                    })
                })()
            }
            _findMatchingAssociatedSublayerUrl(C) {
                var F = this;
                return (0,
                _.A)(function*() {
                    var I;
                    const P = C.replace(/^(.*FeatureServer)(\/[\d]*\/?)?$/i, "$1")
                      , v = {
                        query: {
                            f: "json"
                        },
                        responseType: "json",
                        authMode: "no-prompt",
                        signal: F.signal
                    }
                      , L = null == (I = F._urlParts) ? void 0 : I.layerId
                      , T = F._fetchRootDocument()
                      , o = (0,
                    K.default)(P, v)
                      , [n,h] = yield Promise.all([o, T])
                      , A = h && h.layers
                      , D = n.data && n.data.layers;
                    if (!Array.isArray(D))
                        throw new Error("expected layers array");
                    if (Array.isArray(A)) {
                        for (let G = 0; G < Math.min(A.length, D.length); G++)
                            if (A[G].id === L)
                                return `${P}/${D[G].id}`
                    } else if (null != L && L < D.length)
                        return `${P}/${D[L].id}`;
                    throw new Error("could not find matching associated sublayer")
                })()
            }
            _portalItemFromServiceItemId() {
                var C = this;
                return (0,
                _.A)(function*() {
                    const F = (yield C._fetchRootDocument()).serviceItemId;
                    if (!F)
                        return null;
                    const I = new Y.default({
                        id: F,
                        apiKey: C._apiKey
                    })
                      , P = yield C._fetchServiceOwningPortalUrl();
                    (0,
                    S.Ru)(P) && (I.portal = new W.A({
                        url: P
                    }));
                    try {
                        return I.load({
                            signal: C.signal
                        })
                    } catch (v) {
                        return (0,
                        V.QP)(v),
                        null
                    }
                })()
            }
        }
    }
    ,
    77820: (_e, k, t) => {
        t.d(k, {
            _: () => F
        });
        var _ = t(44701)
          , g = t(90619)
          , K = t(85736)
          , S = t(99131)
          , W = (t(17179),
        t(69408),
        t(90496))
          , Y = t(92373)
          , z = t(52498)
          , H = t(13435)
          , C = t(24512);
        let F = class extends g.A {
            constructor(I) {
                super(I)
            }
            get bounds() {
                const I = this.coords;
                return (0,
                K.$I)(I) || (0,
                K.$I)(I.extent) ? null : (0,
                H.VY)(I.extent)
            }
            get coords() {
                var I;
                const P = null == (I = (0,
                K.oA)(this.element.georeference)) ? void 0 : I.coords;
                return (0,
                z.bS)(P, this.spatialReference).geometry
            }
            get normalizedCoords() {
                return Y.A.fromJSON((0,
                C.jZ)(this.coords))
            }
            get normalizedBounds() {
                const I = (0,
                K.Ru)(this.normalizedCoords) ? this.normalizedCoords.extent : null;
                return (0,
                K.Ru)(I) ? (0,
                H.VY)(I) : null
            }
        }
        ;
        (0,
        _._)([(0,
        S.MZ)()], F.prototype, "spatialReference", void 0),
        (0,
        _._)([(0,
        S.MZ)()], F.prototype, "element", void 0),
        (0,
        _._)([(0,
        S.MZ)()], F.prototype, "bounds", null),
        (0,
        _._)([(0,
        S.MZ)()], F.prototype, "coords", null),
        (0,
        _._)([(0,
        S.MZ)()], F.prototype, "normalizedCoords", null),
        (0,
        _._)([(0,
        S.MZ)()], F.prototype, "normalizedBounds", null),
        F = (0,
        _._)([(0,
        W.$)("esri.layers.support.MediaElementView")], F)
    }
    ,
    16855: (_e, k, t) => {
        t.d(k, {
            x: () => Y
        });
        var W, _ = t(44701), g = t(87877), K = t(30702), S = t(99131), w = (t(17179),
        t(90496));
        let Y = W = class extends g.oY {
            constructor(z) {
                super(z)
            }
            clone() {
                return new W({
                    customLayerParameters: (0,
                    K.o8)(this.customLayerParameters),
                    customParameters: (0,
                    K.o8)(this.customParameters),
                    layerIdentifier: this.layerIdentifier,
                    tileMatrixSet: this.tileMatrixSet,
                    url: this.url
                })
            }
        }
        ;
        (0,
        _._)([(0,
        S.MZ)({
            json: {
                type: Object,
                write: !0
            }
        })], Y.prototype, "customLayerParameters", void 0),
        (0,
        _._)([(0,
        S.MZ)({
            json: {
                type: Object,
                write: !0
            }
        })], Y.prototype, "customParameters", void 0),
        (0,
        _._)([(0,
        S.MZ)({
            type: String,
            json: {
                write: !0
            }
        })], Y.prototype, "layerIdentifier", void 0),
        (0,
        _._)([(0,
        S.MZ)({
            type: String,
            json: {
                write: !0
            }
        })], Y.prototype, "tileMatrixSet", void 0),
        (0,
        _._)([(0,
        S.MZ)({
            type: String,
            json: {
                write: !0
            }
        })], Y.prototype, "url", void 0),
        Y = W = (0,
        _._)([(0,
        w.$)("esri.layer.support.WMTSLayerInfo")], Y)
    }
    ,
    54232: (_e, k, t) => {
        t.d(k, {
            Jy: () => L,
            Ox: () => v,
            Qm: () => D,
            Sp: () => h,
            _4: () => P
        });
        var _ = t(74523)
          , g = t(4282)
          , K = t(58653)
          , S = t(65885)
          , V = t(43803)
          , w = t(30702)
          , W = t(78488)
          , Y = t(55938)
          , z = t(69112)
          , H = t(94841)
          , C = t(11190)
          , F = t(77295);
        const I = {
            esriGeometryPoint: "points",
            esriGeometryPolyline: "polylines",
            esriGeometryPolygon: "polygons"
        };
        function P(G) {
            const U = G.folders || []
              , B = U.slice()
              , R = new Map
              , M = new Map
              , Z = new Map
              , Q = new Map
              , se = new Map
              , J = {
                esriGeometryPoint: M,
                esriGeometryPolyline: Z,
                esriGeometryPolygon: Q
            };
            (G.featureCollection && G.featureCollection.layers || []).forEach(X => {
                const N = (0,
                w.o8)(X);
                N.featureSet.features = [];
                const $ = X.featureSet.geometryType;
                R.set($, N);
                const te = X.layerDefinition.objectIdField;
                "esriGeometryPoint" === $ ? T(M, te, X.featureSet.features) : "esriGeometryPolyline" === $ ? T(Z, te, X.featureSet.features) : "esriGeometryPolygon" === $ && T(Q, te, X.featureSet.features)
            }
            ),
            G.groundOverlays && G.groundOverlays.forEach(X => {
                se.set(X.id, X)
            }
            ),
            U.forEach(X => {
                X.networkLinkIds.forEach(N => {
                    const $ = function n(G, U, B) {
                        const R = function o(G, U) {
                            let B;
                            return U.some(R => R.id === G && (B = R,
                            !0)),
                            B
                        }(G, B);
                        return R && (R.parentFolderId = U,
                        R.networkLink = R),
                        R
                    }(N, X.id, G.networkLinks);
                    $ && B.push($)
                }
                )
            }
            ),
            B.forEach(X => {
                if (X.featureInfos) {
                    X.points = (0,
                    w.o8)(R.get("esriGeometryPoint")),
                    X.polylines = (0,
                    w.o8)(R.get("esriGeometryPolyline")),
                    X.polygons = (0,
                    w.o8)(R.get("esriGeometryPolygon")),
                    X.mapImages = [];
                    for (const N of X.featureInfos)
                        switch (N.type) {
                        case "esriGeometryPoint":
                        case "esriGeometryPolyline":
                        case "esriGeometryPolygon":
                            {
                                const $ = J[N.type].get(N.id);
                                $ && X[I[N.type]].featureSet.features.push($);
                                break
                            }
                        case "GroundOverlay":
                            {
                                const $ = se.get(N.id);
                                $ && X.mapImages.push($);
                                break
                            }
                        }
                    X.fullExtent = D([X])
                }
            }
            );
            const q = D(B);
            return {
                folders: U,
                sublayers: B,
                extent: q
            }
        }
        function v(G, U, B, R) {
            const M = K.id && K.id.findCredential(G);
            return G = (0,
            W.a6)(G, {
                token: M && M.token
            }),
            (0,
            V.default)(g.A.kmlServiceUrl, {
                query: {
                    url: G,
                    model: "simple",
                    folders: "",
                    refresh: 0 !== B || void 0,
                    outSR: JSON.stringify(U)
                },
                responseType: "json",
                signal: R
            })
        }
        function L(G, U, B=null, R=[]) {
            const M = []
              , Z = {}
              , Q = U.sublayers
              , se = U.folders.map(J => J.id);
            return Q.forEach(J => {
                const q = new G;
                if (B ? q.read(J, B) : q.read(J),
                R.length && se.includes(q.id) && (q.visible = R.includes(q.id)),
                Z[J.id] = q,
                null != J.parentFolderId && -1 !== J.parentFolderId) {
                    var X;
                    const N = Z[J.parentFolderId];
                    N.sublayers || (N.sublayers = []),
                    null == (X = N.sublayers) || X.unshift(q)
                } else
                    M.unshift(q)
            }
            ),
            M
        }
        function T(G, U, B) {
            B.forEach(R => {
                G.set(R.attributes[U], R)
            }
            )
        }
        function h(G) {
            return A.apply(this, arguments)
        }
        function A() {
            return (A = (0,
            _.A)(function*(G) {
                const U = F.A.fromJSON(G.featureSet).features
                  , R = (0,
                C.r)(G.layerDefinition.drawingInfo.renderer)
                  , M = S.A.fromJSON(G.popupInfo)
                  , Z = [];
                for (const Q of U) {
                    const se = yield R.getSymbolAsync(Q);
                    Q.symbol = se,
                    Q.popupTemplate = M,
                    Q.visible = !0,
                    Z.push(Q)
                }
                return Z
            })).apply(this, arguments)
        }
        function D(G) {
            const U = (0,
            z.vt)(z.dN)
              , B = (0,
            z.vt)(z.dN);
            for (const R of G) {
                if (R.polygons && R.polygons.featureSet && R.polygons.featureSet.features)
                    for (const M of R.polygons.featureSet.features)
                        (0,
                        H.LJ)(U, M.geometry),
                        (0,
                        z.RF)(B, U);
                if (R.polylines && R.polylines.featureSet && R.polylines.featureSet.features)
                    for (const M of R.polylines.featureSet.features)
                        (0,
                        H.LJ)(U, M.geometry),
                        (0,
                        z.RF)(B, U);
                if (R.points && R.points.featureSet && R.points.featureSet.features)
                    for (const M of R.points.featureSet.features)
                        (0,
                        H.LJ)(U, M.geometry),
                        (0,
                        z.RF)(B, U);
                if (R.mapImages)
                    for (const M of R.mapImages)
                        (0,
                        H.LJ)(U, M.extent),
                        (0,
                        z.RF)(B, U)
            }
            return (0,
            z.aI)(B, z.dN) ? void 0 : {
                xmin: B[0],
                ymin: B[1],
                zmin: B[2],
                xmax: B[3],
                ymax: B[4],
                zmax: B[5],
                spatialReference: Y.A.WGS84
            }
        }
    }
    ,
    97279: (_e, k, t) => {
        t.r(k),
        t.d(k, {
            createLabelFunction: () => I,
            formatField: () => v
        });
        var _ = t(74523)
          , g = t(80226)
          , K = t(40014)
          , S = t(85736)
          , V = t(1162)
          , w = t(73343)
          , W = t(21745)
          , Y = t(45114)
          , z = t(92698);
        const H = K.A.getLogger("esri.layers.support.labelFormatUtils")
          , C = {
            type: "simple",
            evaluate: () => null
        }
          , F = {
            getAttribute: (L, T) => L.field(T)
        };
        function I(L, T, o) {
            return P.apply(this, arguments)
        }
        function P() {
            return (P = (0,
            _.A)(function*(L, T, o) {
                if (!L || !L.symbol || !T)
                    return C;
                const n = L.where
                  , h = (0,
                Y.XJ)(L)
                  , A = n ? yield Promise.all([t.e(2536), t.e(7084)]).then(t.bind(t, 62536)) : null;
                let D;
                if ("arcade" === h.type) {
                    const G = yield(0,
                    z.$I)(h.expression, o, T);
                    if ((0,
                    S.$I)(G))
                        return C;
                    D = {
                        type: "arcade",
                        evaluate(U) {
                            try {
                                const B = G.evaluate({
                                    $feature: "attributes"in U ? G.repurposeFeature(U) : U
                                });
                                if (null != B)
                                    return B.toString()
                            } catch {
                                H.error(new g.A("arcade-expression-error","Encountered an error when evaluating label expression for feature",{
                                    feature: U,
                                    expression: h
                                }))
                            }
                            return null
                        },
                        needsHydrationToEvaluate: () => null == (0,
                        Y.tH)(h.expression)
                    }
                } else
                    D = {
                        type: "simple",
                        evaluate: G => h.expression.replace(/{[^}]*}/g, U => {
                            const B = U.slice(1, -1)
                              , R = T.get(B);
                            if (!R)
                                return U;
                            let M = null;
                            return "attributes"in G ? G && G.attributes && (M = G.attributes[R.name]) : M = G.field(R.name),
                            null == M ? "" : v(M, R)
                        }
                        )
                    };
                if (n) {
                    let G;
                    try {
                        G = A.WhereClause.create(n, T)
                    } catch (B) {
                        return H.error(new g.A("bad-where-clause","Encountered an error when evaluating where clause, ignoring",{
                            where: n,
                            error: B
                        })),
                        C
                    }
                    const U = D.evaluate;
                    D.evaluate = B => {
                        const R = "attributes"in B ? void 0 : F;
                        try {
                            if (G.testFeature(B, R))
                                return U(B)
                        } catch (M) {
                            H.error(new g.A("bad-where-clause","Encountered an error when evaluating where clause for feature",{
                                where: n,
                                feature: B,
                                error: M
                            }))
                        }
                        return null
                    }
                }
                return D
            })).apply(this, arguments)
        }
        function v(L, T) {
            if (null == L)
                return "";
            const o = T.domain;
            if (o)
                if ("codedValue" === o.type || "coded-value" === o.type) {
                    const h = L;
                    for (const A of o.codedValues)
                        if (A.code === h)
                            return A.name
                } else if ("range" === o.type) {
                    const h = +L;
                    if (("range"in o ? o.range[0] : o.minValue) <= h && h <= ("range"in o ? o.range[1] : o.maxValue))
                        return o.name
                }
            let n = L;
            return "date" === T.type || "esriFieldTypeDate" === T.type ? n = (0,
            V.Yq)(n, (0,
            V.J2)("short-date")) : (0,
            W.WA)(T) && (n = (0,
            w.ZV)(+n)),
            n || ""
        }
    }
    ,
    33709: (_e, k, t) => {
        t.r(k),
        t.d(k, {
            populateOperationalLayers: () => I
        });
        var _ = t(74523)
          , g = t(11602)
          , S = (t(69584),
        t(65164))
          , V = t(31649)
          , w = t(63082);
        function H(N, $) {
            return !(!N.layerType || "ArcGISFeatureLayer" !== N.layerType) && N.featureCollectionType === $
        }
        var C = t(24685)
          , F = t(20467);
        function I(N, $, te) {
            return P.apply(this, arguments)
        }
        function P() {
            return (P = (0,
            _.A)(function*(N, $, te) {
                if (!$)
                    return;
                const ee = [];
                for (const oe of $) {
                    const ue = A(oe, te);
                    ee.push("GroupLayer" === oe.layerType ? se(ue, oe, te) : ue)
                }
                const ae = yield(0,
                S.Lx)(ee);
                for (const oe of ae)
                    oe.value && N.add(oe.value)
            })).apply(this, arguments)
        }
        const v = {
            ArcGISDimensionLayer: "DimensionLayer",
            ArcGISFeatureLayer: "FeatureLayer",
            ArcGISImageServiceLayer: "ImageryLayer",
            ArcGISMapServiceLayer: "MapImageLayer",
            PointCloudLayer: "PointCloudLayer",
            ArcGISSceneServiceLayer: "SceneLayer",
            IntegratedMeshLayer: "IntegratedMeshLayer",
            OGCFeatureLayer: "OGCFeatureLayer",
            BuildingSceneLayer: "BuildingSceneLayer",
            ArcGISTiledElevationServiceLayer: "ElevationLayer",
            ArcGISTiledImageServiceLayer: "ImageryTileLayer",
            ArcGISTiledMapServiceLayer: "TileLayer",
            GroupLayer: "GroupLayer",
            GeoJSON: "GeoJSONLayer",
            WebTiledLayer: "WebTileLayer",
            CSV: "CSVLayer",
            VectorTileLayer: "VectorTileLayer",
            WFS: "WFSLayer",
            WMS: "WMSLayer",
            DefaultTileLayer: "TileLayer",
            KML: "KMLLayer",
            RasterDataLayer: "UnsupportedLayer",
            Voxel: "VoxelLayer",
            LineOfSightLayer: "LineOfSightLayer"
        }
          , L = {
            ArcGISTiledElevationServiceLayer: "ElevationLayer",
            DefaultTileLayer: "ElevationLayer",
            RasterDataElevationLayer: "UnsupportedLayer"
        }
          , T = {
            ArcGISTiledMapServiceLayer: "TileLayer",
            ArcGISTiledImageServiceLayer: "ImageryTileLayer",
            OpenStreetMap: "OpenStreetMapLayer",
            WebTiledLayer: "WebTileLayer",
            VectorTileLayer: "VectorTileLayer",
            ArcGISImageServiceLayer: "UnsupportedLayer",
            WMS: "UnsupportedLayer",
            ArcGISMapServiceLayer: "UnsupportedLayer",
            ArcGISSceneServiceLayer: "SceneLayer",
            DefaultTileLayer: "TileLayer"
        }
          , o = {
            ArcGISAnnotationLayer: "UnsupportedLayer",
            ArcGISDimensionLayer: "UnsupportedLayer",
            ArcGISFeatureLayer: "FeatureLayer",
            ArcGISImageServiceLayer: "ImageryLayer",
            ArcGISImageServiceVectorLayer: "ImageryLayer",
            ArcGISMapServiceLayer: "MapImageLayer",
            ArcGISStreamLayer: "StreamLayer",
            ArcGISTiledImageServiceLayer: "ImageryTileLayer",
            ArcGISTiledMapServiceLayer: "TileLayer",
            BingMapsAerial: "BingMapsLayer",
            BingMapsRoad: "BingMapsLayer",
            BingMapsHybrid: "BingMapsLayer",
            CSV: "CSVLayer",
            DefaultTileLayer: "TileLayer",
            GeoRSS: "GeoRSSLayer",
            GeoJSON: "GeoJSONLayer",
            GroupLayer: "GroupLayer",
            KML: "KMLLayer",
            MediaLayer: "MediaLayer",
            OGCFeatureLayer: "OGCFeatureLayer",
            OrientedImageryLayer: "OrientedImageryLayer",
            SubtypeGroupLayer: "SubtypeGroupLayer",
            VectorTileLayer: "VectorTileLayer",
            WFS: "WFSLayer",
            WMS: "WMSLayer",
            WebTiledLayer: "WebTileLayer"
        }
          , n = {
            ArcGISFeatureLayer: "FeatureLayer"
        }
          , h = {
            ArcGISImageServiceLayer: "ImageryLayer",
            ArcGISImageServiceVectorLayer: "ImageryLayer",
            ArcGISMapServiceLayer: "MapImageLayer",
            ArcGISTiledImageServiceLayer: "ImageryTileLayer",
            ArcGISTiledMapServiceLayer: "TileLayer",
            OpenStreetMap: "OpenStreetMapLayer",
            VectorTileLayer: "VectorTileLayer",
            WebTiledLayer: "WebTileLayer",
            BingMapsAerial: "BingMapsLayer",
            BingMapsRoad: "BingMapsLayer",
            BingMapsHybrid: "BingMapsLayer",
            WMS: "WMSLayer",
            DefaultTileLayer: "TileLayer"
        };
        function A(N, $) {
            return D.apply(this, arguments)
        }
        function D() {
            return D = (0,
            _.A)(function*(N, $) {
                return function G(N, $, te) {
                    return U.apply(this, arguments)
                }(yield function B(N, $) {
                    return R.apply(this, arguments)
                }(N, $), N, $)
            }),
            D.apply(this, arguments)
        }
        function U() {
            return U = (0,
            _.A)(function*(N, $, te) {
                const ee = new N;
                return ee.read($, te.context),
                "group" === ee.type && M($) && (yield function q(N, $, te) {
                    return X.apply(this, arguments)
                }(ee, $, te.context)),
                yield(0,
                F.L)(ee, te.context),
                ee
            }),
            U.apply(this, arguments)
        }
        function R() {
            return (R = (0,
            _.A)(function*(N, $) {
                var te;
                const ee = $.context
                  , ae = function Q(N) {
                    let $;
                    if ("web-scene" === N.origin)
                        switch (N.layerContainerType) {
                        case "basemap":
                            $ = T;
                            break;
                        case "ground":
                            $ = L;
                            break;
                        default:
                            $ = v
                        }
                    else
                        switch (N.layerContainerType) {
                        case "basemap":
                            $ = h;
                            break;
                        case "tables":
                            $ = n;
                            break;
                        default:
                            $ = o
                        }
                    return $
                }(ee);
                let oe = N.layerType || N.type;
                !oe && $ && $.defaultLayerType && (oe = $.defaultLayerType);
                const ue = ae[oe];
                let le = ue ? V.S[ue] : V.S.UnknownLayer;
                if (Z(N)) {
                    const de = ee?.portal;
                    if (N.itemId) {
                        const ne = new w.default({
                            id: N.itemId,
                            portal: de
                        });
                        yield ne.load();
                        const re = (yield(0,
                        C.selectLayerClassPath)(ne)).className || "UnknownLayer";
                        le = V.S[re]
                    }
                } else
                    "ArcGISFeatureLayer" === oe ? function W(N) {
                        return H(N, "notes")
                    }(N) || function Y(N) {
                        return H(N, "markup")
                    }(N) ? le = V.S.MapNotesLayer : function z(N) {
                        return H(N, "route")
                    }(N) ? le = V.S.RouteLayer : M(N) && (le = V.S.GroupLayer) : N.wmtsInfo && N.wmtsInfo.url && N.wmtsInfo.layerIdentifier ? le = V.S.WMTSLayer : "WFS" === oe && "2.0.0" !== (null == (te = N.wfsInfo) ? void 0 : te.version) && (le = V.S.UnsupportedLayer);
                return le()
            })).apply(this, arguments)
        }
        function M(N) {
            var $, te, ee;
            return "ArcGISFeatureLayer" === N.layerType && !Z(N) && (null != ($ = null == (te = N.featureCollection) || null == (ee = te.layers) ? void 0 : ee.length) ? $ : 0) > 1
        }
        function Z(N) {
            return "Feature Collection" === N.type
        }
        function se(N, $, te) {
            return J.apply(this, arguments)
        }
        function J() {
            return (J = (0,
            _.A)(function*(N, $, te) {
                const ee = new g.A
                  , ae = I(ee, Array.isArray($.layers) ? $.layers : [], te)
                  , oe = yield N;
                if (yield ae,
                "group" === oe.type)
                    return oe.layers.addMany(ee),
                    oe
            })).apply(this, arguments)
        }
        function X() {
            return (X = (0,
            _.A)(function*(N, $, te) {
                var ee;
                const ae = V.S.FeatureLayer
                  , oe = yield ae()
                  , ue = $.featureCollection
                  , le = ue?.showLegend
                  , de = null == ue || null == (ee = ue.layers) ? void 0 : ee.map( (ne, re) => {
                    var ie, ce;
                    const pe = new oe;
                    pe.read(ne, te);
                    const he = {
                        ...te,
                        ignoreDefaults: !0
                    };
                    return pe.read({
                        id: `${N.id}-sublayer-${re}`,
                        visibility: null == (ie = null == (ce = $.visibleLayers) ? void 0 : ce.includes(re)) || ie
                    }, he),
                    null != le && pe.read({
                        showLegend: le
                    }, he),
                    pe
                }
                );
                N.layers.addMany(de ?? [])
            })).apply(this, arguments)
        }
    }
    ,
    58380: (_e, k, t) => {
        t.d(k, {
            jX: () => F,
            zo: () => v,
            gd: () => I,
            ph: () => Y,
            no: () => P,
            kz: () => z,
            ht: () => H,
            yo: () => T
        }),
        t(87488);
        var g = t(85736)
          , S = t(23250)
          , V = t(12993);
        const w = new Map
          , W = new class K {
            constructor(n=15e3, h=5e3) {
                this._timer = null,
                this._cachedBlocks = new Map,
                this._size = -1,
                this._duration = n,
                this._interval = Math.min(n, h)
            }
            decreaseRefCount(n, h) {
                const A = n + "/" + h
                  , D = this._cachedBlocks;
                if (D.has(A)) {
                    const G = D.get(A);
                    return G.refCount--,
                    G.refCount <= 0 && (D.delete(A),
                    G.controller && G.controller.abort()),
                    G.refCount
                }
                return 0
            }
            getBlock(n, h) {
                const A = n + "/" + h
                  , D = this._cachedBlocks;
                if (D.has(A)) {
                    const G = D.get(A);
                    return G.ts = Date.now(),
                    G.refCount++,
                    D.delete(A),
                    D.set(A, G),
                    G.block
                }
                return null
            }
            putBlock(n, h, A, D) {
                const G = this._cachedBlocks
                  , U = n + "/" + h;
                if (G.has(U)) {
                    const B = G.get(U);
                    B.ts = Date.now(),
                    B.refCount++
                } else
                    G.set(U, {
                        block: A,
                        ts: Date.now(),
                        refCount: 1,
                        controller: D
                    });
                this._trim(),
                this._updateTimer()
            }
            deleteBlock(n, h) {
                const A = this._cachedBlocks
                  , D = n + "/" + h;
                A.has(D) && A.delete(D)
            }
            updateMaxSize(n) {
                this._size = n,
                this._trim()
            }
            empty() {
                this._cachedBlocks.clear(),
                this._clearTimer()
            }
            getCurrentSize() {
                return this._cachedBlocks.size
            }
            _updateTimer() {
                if (null != this._timer)
                    return;
                const n = this._cachedBlocks;
                this._timer = setInterval( () => {
                    const h = Array.from(n)
                      , A = Date.now();
                    for (let D = 0; D < h.length && h[D][1].ts <= A - this._duration; D++)
                        n.delete(h[D][0]);
                    0 === n.size && this._clearTimer()
                }
                , this._interval)
            }
            _trim() {
                const n = this._cachedBlocks;
                if (-1 === this._size || this._size >= n.size)
                    return;
                const h = Array.from(n);
                for (let A = 0; A < h.length - this._size; A++)
                    n.delete(h[A][0])
            }
            _clearTimer() {
                null != this._timer && (clearInterval(this._timer),
                this._timer = null)
            }
        }
        ;
        function Y(o, n) {
            return null == n ? o : `${o}?sliceId=${n}`
        }
        function z(o, n) {
            const h = {
                extent: null,
                rasterInfo: n,
                cache: new Map
            }
              , A = w.get(o);
            return A ? (A.push(h),
            A.length - 1) : (w.set(o, [h]),
            0)
        }
        function H(o, n) {
            const h = w.get(o);
            h && (h[n] = null,
            h.some(A => null != A) || w.delete(o))
        }
        function F(o, n, h) {
            var A;
            const D = w.get(o);
            if (!D)
                return null == n ? W.decreaseRefCount(o, h) : 0;
            if (null == n || null == D[n])
                return W.decreaseRefCount(o, h);
            const G = null == (A = D[n]) ? void 0 : A.cache
              , U = G?.get(h);
            if (G && U) {
                if (U.refCount--,
                0 === U.refCount) {
                    G.delete(h);
                    for (let R = 0; R < D.length; R++) {
                        var B;
                        null == (B = D[R]) || B.cache.delete(h)
                    }
                    U.controller && U.controller.abort()
                }
                return U.refCount
            }
            return 0
        }
        function I(o, n, h) {
            var A;
            const D = w.get(o);
            if (!D)
                return null == n ? W.getBlock(o, h) : null;
            if (null == n || null == D[n]) {
                for (let R = 0; R < D.length; R++) {
                    var G;
                    const M = null == (G = D[R]) ? void 0 : G.cache.get(h);
                    if (M)
                        return M.refCount++,
                        M.block
                }
                return W.getBlock(o, h)
            }
            const U = null == (A = D[n]) ? void 0 : A.cache.get(h);
            if (U)
                return U.refCount++,
                U.block;
            for (let R = 0; R < D.length; R++) {
                var B;
                if (R === n || !D[R])
                    continue;
                const M = null == (B = D[R]) ? void 0 : B.cache
                  , Z = M?.get(h);
                if (M && Z)
                    return Z.refCount++,
                    M.set(h, Z),
                    Z.block
            }
            return null
        }
        function P(o, n, h, A, D=null) {
            var G;
            const U = w.get(o);
            if (!U)
                return void (null == n && W.putBlock(o, h, A, D));
            if (null == n || null == U[n])
                return void W.putBlock(o, h, A, D);
            const B = {
                refCount: 1,
                block: A,
                isResolved: !1,
                isRejected: !1,
                controller: D
            };
            A.then( () => B.isResolved = !0).catch( () => B.isRejected = !0),
            null == (G = U[n]) || G.cache.set(h, B)
        }
        function v(o, n, h) {
            var A;
            const D = w.get(o);
            D ? null != n && null != D[n] ? null == (A = D[n]) || A.cache.delete(h) : W.deleteBlock(o, h) : null == n && W.deleteBlock(o, h)
        }
        function T(o, n, h, A, D, G, U=null) {
            var B;
            const R = function L(o, n) {
                var h;
                const A = w.get(o);
                return A && null != (h = A[n]) ? h : null
            }(o, n);
            if (!R)
                return;
            const M = R.extent
              , {cache: Z, rasterInfo: Q} = R;
            if (M && M.xmin === h.xmin && M.xmax === h.xmax && M.ymin === h.ymin && M.ymax === h.ymax)
                return;
            A = null != (B = A) ? B : 0;
            const se = h.clone().normalize()
              , {spatialReference: J, transform: q} = Q
              , X = new Set;
            for (let N = 0; N < se.length; N++) {
                const $ = se[N];
                if ($.xmax - $.xmin <= A || $.ymax - $.ymin <= A)
                    continue;
                let te = (0,
                S._l)($, J, U);
                (0,
                g.Ru)(q) && (te = q.inverseTransform(te));
                const ee = new V.A({
                    x: A,
                    y: A,
                    spatialReference: $.spatialReference
                });
                if (null == D && !(D = (0,
                S.Wo)(ee, J, $, U)))
                    return;
                const {pyramidLevel: ae, pyramidResolution: oe, excessiveReading: ue} = (0,
                S.t$)(D, Q, G || "closest");
                if (ue)
                    return;
                const {storageInfo: le} = Q
                  , {origin: de} = le
                  , ne = {
                    x: Math.max(0, Math.floor((te.xmin - de.x) / oe.x)),
                    y: Math.max(0, Math.floor((de.y - te.ymax) / oe.y))
                }
                  , re = Math.ceil((te.xmax - te.xmin) / oe.x - .1)
                  , ie = Math.ceil((te.ymax - te.ymin) / oe.y - .1)
                  , ce = ae > 0 ? le.pyramidBlockWidth : le.blockWidth
                  , pe = ae > 0 ? le.pyramidBlockHeight : le.blockHeight
                  , he = 1
                  , fe = Math.max(0, Math.floor(ne.x / ce) - he)
                  , ge = Math.max(0, Math.floor(ne.y / pe) - he)
                  , ye = Math.floor((ne.x + re - 1) / ce) + he
                  , me = Math.floor((ne.y + ie - 1) / pe) + he;
                for (let Ee = ge; Ee <= me; Ee++)
                    for (let ve = fe; ve <= ye; ve++)
                        X.add(`${ae}/${Ee}/${ve}`)
            }
            Z.forEach( (N, $) => {
                if (!X.has($)) {
                    const te = Z.get($);
                    (null == te || te.isResolved || te.isRejected) && Z.delete($)
                }
            }
            ),
            R.extent = {
                xmin: h.xmin,
                ymin: h.ymin,
                xmax: h.xmax,
                ymax: h.ymax
            }
        }
    }
    ,
    74313: (_e, k, t) => {
        t.r(k),
        t.d(k, {
            getGeometryServiceURL: () => W,
            projectGeometry: () => z
        });
        var _ = t(74523)
          , g = t(4282)
          , K = t(80226)
          , S = t(12212)
          , V = t(78232)
          , w = t(44252);
        function W() {
            return Y.apply(this, arguments)
        }
        function Y() {
            return (Y = (0,
            _.A)(function*(C=null, F) {
                var I, P;
                if (g.A.geometryServiceUrl)
                    return g.A.geometryServiceUrl;
                if (!C)
                    throw new K.A("internal:geometry-service-url-not-configured");
                let v;
                v = "portal"in C ? C.portal || S.A.getDefault() : C,
                yield v.load({
                    signal: F
                });
                const L = null == (I = v.helperServices) || null == (P = I.geometry) ? void 0 : P.url;
                if (!L)
                    throw new K.A("internal:geometry-service-url-not-configured");
                return L
            })).apply(this, arguments)
        }
        function z(C, F) {
            return H.apply(this, arguments)
        }
        function H() {
            return (H = (0,
            _.A)(function*(C, F, I=null, P) {
                const v = yield W(I, P)
                  , L = new w.A;
                L.geometries = [C],
                L.outSpatialReference = F;
                const T = yield(0,
                V.C)(v, L, {
                    signal: P
                });
                if (T && Array.isArray(T) && 1 === T.length)
                    return T[0];
                throw new K.A("internal:geometry-service-projection-failed")
            })).apply(this, arguments)
        }
    }
    ,
    78232: (_e, k, t) => {
        t.d(k, {
            C: () => z
        });
        var _ = t(74523)
          , g = t(43803)
          , K = t(17179)
          , S = t(99592)
          , V = t(43104)
          , w = t(66796)
          , W = t(44252);
        const Y = (0,
        K.dp)(W.A);
        function z(C, F, I) {
            return H.apply(this, arguments)
        }
        function H() {
            return (H = (0,
            _.A)(function*(C, F, I) {
                F = Y(F);
                const P = (0,
                V.Dl)(C)
                  , v = {
                    ...P.query,
                    f: "json",
                    ...F.toJSON()
                }
                  , L = F.outSpatialReference
                  , T = (0,
                S.$B)(F.geometries[0])
                  , o = (0,
                V.jV)(v, I);
                return (0,
                g.default)(P.path + "/project", o).then( ({data: {geometries: n}}) => (0,
                w.V)(n, T, L))
            })).apply(this, arguments)
        }
    }
    ,
    357: (_e, k, t) => {
        t.d(k, {
            $K: () => v,
            KW: () => I,
            Yb: () => C,
            xs: () => T
        });
        var _ = t(74523)
          , g = t(43803)
          , K = t(85736)
          , S = t(78488)
          , V = t(99592)
          , w = t(4597)
          , W = t(67336)
          , Y = t(66693);
        const z = "Layer does not support extent calculation.";
        function H(n, h) {
            var A, D;
            const G = n.geometry
              , U = n.toJSON()
              , B = U;
            if ((0,
            K.Ru)(G) && (B.geometry = JSON.stringify(G),
            B.geometryType = (0,
            V.$B)(G),
            B.inSR = G.spatialReference.wkid || JSON.stringify(G.spatialReference)),
            null != (A = U.topFilter) && A.groupByFields && (B.topFilter.groupByFields = U.topFilter.groupByFields.join(",")),
            null != (D = U.topFilter) && D.orderByFields && (B.topFilter.orderByFields = U.topFilter.orderByFields.join(",")),
            U.topFilter && (B.topFilter = JSON.stringify(B.topFilter)),
            U.objectIds && (B.objectIds = U.objectIds.join(",")),
            U.orderByFields && (B.orderByFields = U.orderByFields.join(",")),
            U.outFields && !(null != h && h.returnCountOnly || null != h && h.returnExtentOnly || null != h && h.returnIdsOnly) ? B.outFields = U.outFields.includes("*") ? "*" : U.outFields.join(",") : delete B.outFields,
            U.outSR ? B.outSR = U.outSR.wkid || JSON.stringify(U.outSR) : G && U.returnGeometry && (B.outSR = B.inSR),
            U.returnGeometry && delete U.returnGeometry,
            U.timeExtent) {
                const R = U.timeExtent
                  , {start: M, end: Z} = R;
                null == M && null == Z || (B.time = M === Z ? M : `${M ?? "null"},${Z ?? "null"}`),
                delete U.timeExtent
            }
            return B
        }
        function C(n, h, A, D) {
            return F.apply(this, arguments)
        }
        function F() {
            return (F = (0,
            _.A)(function*(n, h, A, D) {
                const G = yield o(n, h, "json", D);
                return (0,
                Y.q)(h, A, G.data),
                G
            })).apply(this, arguments)
        }
        function I(n, h, A) {
            return P.apply(this, arguments)
        }
        function P() {
            return (P = (0,
            _.A)(function*(n, h, A) {
                return (0,
                K.Ru)(h.timeExtent) && h.timeExtent.isEmpty ? {
                    data: {
                        objectIds: []
                    }
                } : o(n, h, "json", A, {
                    returnIdsOnly: !0
                })
            })).apply(this, arguments)
        }
        function v(n, h, A) {
            return L.apply(this, arguments)
        }
        function L() {
            return (L = (0,
            _.A)(function*(n, h, A) {
                return (0,
                K.Ru)(h.timeExtent) && h.timeExtent.isEmpty ? {
                    data: {
                        count: 0,
                        extent: null
                    }
                } : o(n, h, "json", A, {
                    returnExtentOnly: !0,
                    returnCountOnly: !0
                }).then(D => {
                    const G = D.data;
                    if (G.hasOwnProperty("extent"))
                        return D;
                    if (G.features)
                        throw new Error(z);
                    if (G.hasOwnProperty("count"))
                        throw new Error(z);
                    return D
                }
                )
            })).apply(this, arguments)
        }
        function T(n, h, A) {
            return (0,
            K.Ru)(h.timeExtent) && h.timeExtent.isEmpty ? Promise.resolve({
                data: {
                    count: 0
                }
            }) : o(n, h, "json", A, {
                returnIdsOnly: !0,
                returnCountOnly: !0
            })
        }
        function o(n, h, A, D={}, G={}) {
            const U = "string" == typeof n ? (0,
            S.An)(n) : n
              , B = h.geometry ? [h.geometry] : [];
            return D.responseType = "pbf" === A ? "array-buffer" : "json",
            (0,
            w.el)(B, null, D).then(R => {
                const M = R && R[0];
                (0,
                K.Ru)(M) && ((h = h.clone()).geometry = M);
                const Z = (0,
                W.z)({
                    ...U.query,
                    f: A,
                    ...G,
                    ...H(h, G)
                });
                return (0,
                g.default)((0,
                S.fj)(U.path, "queryTopFeatures"), {
                    ...D,
                    query: {
                        ...Z,
                        ...D.query
                    }
                })
            }
            )
        }
    }
    ,
    44252: (_e, k, t) => {
        t.d(k, {
            A: () => z
        });
        var _ = t(44701)
          , g = t(87877)
          , K = t(99131)
          , w = (t(17179),
        t(69408),
        t(90496))
          , W = t(99592);
        let Y = class extends g.oY {
            constructor(H) {
                super(H),
                this.geometries = [],
                this.outSpatialReference = null,
                this.transformation = null,
                this.transformForward = null
            }
            toJSON() {
                const H = this.geometries.map(I => I.toJSON())
                  , C = this.geometries[0]
                  , F = {};
                return F.outSR = this.outSpatialReference.wkid || JSON.stringify(this.outSpatialReference.toJSON()),
                F.inSR = C.spatialReference.wkid || JSON.stringify(C.spatialReference.toJSON()),
                F.geometries = JSON.stringify({
                    geometryType: (0,
                    W.$B)(C),
                    geometries: H
                }),
                this.transformation && (F.transformation = this.transformation.wkid || JSON.stringify(this.transformation)),
                null != this.transformForward && (F.transformForward = this.transformForward),
                F
            }
        }
        ;
        (0,
        _._)([(0,
        K.MZ)()], Y.prototype, "geometries", void 0),
        (0,
        _._)([(0,
        K.MZ)({
            json: {
                read: {
                    source: "outSR"
                }
            }
        })], Y.prototype, "outSpatialReference", void 0),
        (0,
        _._)([(0,
        K.MZ)()], Y.prototype, "transformation", void 0),
        (0,
        _._)([(0,
        K.MZ)()], Y.prototype, "transformForward", void 0),
        Y = (0,
        _._)([(0,
        w.$)("esri.rest.support.ProjectParameters")], Y);
        const z = Y
    }
    ,
    9741: (_e, k, t) => {
        t.d(k, {
            i: () => L
        });
        var _ = t(74523)
          , g = t(65164)
          , K = t(73423)
          , S = t(74391)
          , V = t(46116)
          , w = t(85736)
          , W = t(4197)
          , Y = t(22183)
          , z = t(26540)
          , H = t(33490)
          , C = t(92581)
          , F = t(16466)
          , I = t(3703);
        function P(T, o) {
            const n = o.length;
            if (T < o[0].value || 1 === n)
                return o[0].size;
            for (let h = 1; h < n; h++)
                if (T < o[h].value)
                    return o[h - 1].size + (T - o[h - 1].value) / (o[h].value - o[h - 1].value) * (o[h].size - o[h - 1].size);
            return o[n - 1].size
        }
        class v {
            constructor() {
                this.symbolLevels = [],
                this.vvColorValues = new Float32Array(8),
                this.vvColors = new Float32Array(32),
                this.vvOpacityValues = new Float32Array(8),
                this.vvOpacities = new Float32Array(8),
                this.vvSizeMinMaxValue = new Float32Array(4),
                this.outsideLabelsVisible = !1,
                this._vvMaterialParameters = {
                    vvSizeEnabled: !1,
                    vvColorEnabled: !1,
                    vvRotationEnabled: !1,
                    vvRotationType: "geographic",
                    vvOpacityEnabled: !1
                },
                this._technique = C.j
            }
            getSizeVVFieldStops(o) {
                const n = this._vvSizeFieldStops;
                if (n)
                    switch (n.type) {
                    case "static":
                        return n;
                    case "level-dependent":
                        return (0,
                        w.zO)(n.levels[o], () => {
                            let h = 1 / 0
                              , A = 0;
                            for (const B in n.levels) {
                                const R = parseFloat(B)
                                  , M = Math.abs(o - R);
                                M < h && (h = M,
                                A = R)
                            }
                            if (h === 1 / 0)
                                return {
                                    sizes: new Float32Array([0, 0, 0, 0, 0, 0]),
                                    values: new Float32Array([0, 0, 0, 0, 0, 0])
                                };
                            const D = 2 ** ((o - A) / 2)
                              , G = (0,
                            w.oA)(n.levels[A])
                              , U = new Float32Array(G.values);
                            return U[2] *= D,
                            U[3] *= D,
                            {
                                sizes: (0,
                                w.oA)(G.sizes),
                                values: U
                            }
                        }
                        );
                    default:
                        return
                    }
            }
            get vvMaterialParameters() {
                return this._vvMaterialParameters
            }
            update(o) {
                (0,
                w.Ru)(this._vvInfo) && this._updateVisualVariables(this._vvInfo.vvRanges, o)
            }
            setInfo(o, n, h) {
                this._updateEffects(h),
                this._vvInfo = n,
                this._technique = (0,
                F.SS)(o),
                this.rendererSchema = this._technique.createOrUpdateRendererSchema(this.rendererSchema, o)
            }
            getVariation() {
                return {
                    ...this._technique.getVariation(this.rendererSchema),
                    outsideLabelsVisible: this.outsideLabelsVisible,
                    supportsTextureFloat: (0,
                    I.Cx)("2d").supportsTextureFloat
                }
            }
            getVariationHash() {
                return this._technique.getVariationHash(this.rendererSchema) << 1 | (this.outsideLabelsVisible ? 1 : 0)
            }
            _updateEffects(o) {
                this.outsideLabelsVisible = !!(0,
                w.Ru)(o) && o.excludedLabelsVisible
            }
            _updateVisualVariables(o, n) {
                const h = this._vvMaterialParameters;
                if (h.vvOpacityEnabled = !1,
                h.vvSizeEnabled = !1,
                h.vvColorEnabled = !1,
                h.vvRotationEnabled = !1,
                !o)
                    return;
                const A = o.size;
                if (A) {
                    if (h.vvSizeEnabled = !0,
                    A.minMaxValue) {
                        const B = A.minMaxValue;
                        let R, M;
                        if ((0,
                        H.O9)(B.minSize) && (0,
                        H.O9)(B.maxSize))
                            if ((0,
                            H.Et)(B.minSize) && (0,
                            H.Et)(B.maxSize))
                                R = (0,
                                W.Lz)(B.minSize),
                                M = (0,
                                W.Lz)(B.maxSize);
                            else {
                                const Z = n.scale;
                                R = (0,
                                W.Lz)(P(Z, B.minSize.stops)),
                                M = (0,
                                W.Lz)(P(Z, B.maxSize.stops))
                            }
                        this.vvSizeMinMaxValue.set([B.minDataValue, B.maxDataValue, R, M])
                    }
                    if (A.scaleStops && (this.vvSizeScaleStopsValue = (0,
                    W.Lz)(P(n.scale, A.scaleStops.stops))),
                    A.unitValue) {
                        const B = (0,
                        Y.GA)(n.spatialReference) / z.j[A.unitValue.unit];
                        this.vvSizeUnitValueToPixelsRatio = B / n.resolution
                    }
                    A.fieldStops && (this._vvSizeFieldStops = A.fieldStops)
                }
                const D = o.color;
                D && (h.vvColorEnabled = !0,
                this.vvColorValues.set(D.values),
                this.vvColors.set(D.colors));
                const G = o.opacity;
                G && (h.vvOpacityEnabled = !0,
                this.vvOpacityValues.set(G.values),
                this.vvOpacities.set(G.opacities));
                const U = o.rotation;
                U && (h.vvRotationEnabled = !0,
                h.vvRotationType = U.type)
            }
        }
        class L extends V.A {
            constructor(o) {
                super(o),
                this._rendererInfo = new v,
                this._materialItemsRequestQueue = new K.A,
                this.attributeView = new S.L( () => this.onAttributeStoreUpdate())
            }
            destroy() {
                this.children.forEach(o => o.destroy()),
                this.removeAllChildren(),
                this.attributeView.destroy(),
                this._materialItemsRequestQueue.clear()
            }
            setRendererInfo(o, n, h) {
                this._rendererInfo.setInfo(o, n, h),
                this.requestRender()
            }
            getMaterialItems(o, n) {
                var h = this;
                return (0,
                _.A)(function*() {
                    if (!o || 0 === o.length)
                        return [];
                    const A = (0,
                    g.Tw)();
                    return h._materialItemsRequestQueue.push({
                        items: o,
                        abortOptions: n,
                        resolver: A
                    }),
                    h.requestRender(),
                    A.promise
                })()
            }
            doRender(o) {
                if (o.context.capabilities.enable("textureFloat"),
                o.context.capabilities.enable("vao"),
                this._materialItemsRequestQueue.length > 0) {
                    let n = this._materialItemsRequestQueue.pop();
                    for (; n; )
                        this._processMaterialItemRequest(o, n),
                        n = this._materialItemsRequestQueue.pop()
                }
                super.doRender(o)
            }
            renderChildren(o) {
                for (const n of this.children)
                    n.commit(o);
                this._rendererInfo.update(o.state),
                super.renderChildren(o)
            }
            updateTransforms(o) {
                if (this.children.some(n => n.hasData))
                    for (const n of this.children)
                        n.setTransform(o)
            }
            createRenderParams(o) {
                const n = super.createRenderParams(o);
                return n.rendererInfo = this._rendererInfo,
                n.attributeView = this.attributeView,
                n
            }
            onAttributeStoreUpdate() {}
            _processMaterialItemRequest(o, {items: n, abortOptions: h, resolver: A}) {
                const {painter: D, pixelRatio: G} = o
                  , U = n.map(B => D.textureManager.rasterizeItem(B.symbol, G, B.glyphIds, h));
                Promise.all(U).then(B => {
                    if (!this.stage)
                        return void A.reject();
                    const R = B.map( (M, Z) => ({
                        id: n[Z].id,
                        mosaicItem: M
                    }));
                    A.resolve(R)
                }
                , A.reject)
            }
        }
    }
    ,
    60902: (_e, k, t) => {
        t.d(k, {
            A: () => o
        });
        var _ = t(88808)
          , g = t(17486)
          , K = t(2992);
        const S = n => (0,
        K.I)({
            ID: n.id,
            PATTERN: n.pattern
        })
          , V = {
            shaders: n => ({
                vertexShader: S(n) + (0,
                g.Q)("background/background.vert"),
                fragmentShader: S(n) + (0,
                g.Q)("background/background.frag")
            })
        }
          , w = n => (0,
        K.I)({
            ID: n.id
        })
          , W = {
            shaders: n => ({
                vertexShader: w(n) + (0,
                g.Q)("circle/circle.vert"),
                fragmentShader: w(n) + (0,
                g.Q)("circle/circle.frag")
            })
        }
          , Y = n => (0,
        K.I)({
            ID: n.id,
            PATTERN: n.pattern
        })
          , z = {
            shaders: n => ({
                vertexShader: Y(n) + (0,
                g.Q)("fill/fill.vert"),
                fragmentShader: Y(n) + (0,
                g.Q)("fill/fill.frag")
            })
        }
          , H = n => (0,
        K.I)({
            ID: n.id
        })
          , C = {
            shaders: n => ({
                vertexShader: H(n) + (0,
                g.Q)("outline/outline.vert"),
                fragmentShader: H(n) + (0,
                g.Q)("outline/outline.frag")
            })
        }
          , F = n => (0,
        K.I)({
            ID: n.id,
            SDF: n.sdf
        })
          , I = {
            shaders: n => ({
                vertexShader: F(n) + (0,
                g.Q)("icon/icon.vert"),
                fragmentShader: F(n) + (0,
                g.Q)("icon/icon.frag")
            })
        }
          , P = n => (0,
        K.I)({
            ID: n.id,
            PATTERN: n.pattern,
            SDF: n.sdf
        })
          , v = {
            shaders: n => ({
                vertexShader: P(n) + (0,
                g.Q)("line/line.vert"),
                fragmentShader: P(n) + (0,
                g.Q)("line/line.frag")
            })
        }
          , L = n => (0,
        K.I)({
            ID: n.id
        })
          , T = {
            shaders: n => ({
                vertexShader: L(n) + (0,
                g.Q)("text/text.vert"),
                fragmentShader: L(n) + (0,
                g.Q)("text/text.frag")
            })
        };
        class o {
            constructor() {
                this._programByKey = new Map
            }
            dispose() {
                this._programByKey.forEach(h => h.dispose()),
                this._programByKey.clear()
            }
            getMaterialProgram(h, A, D) {
                const G = A.key << 3 | this._getMaterialOptionsValue(A.type, D);
                if (this._programByKey.has(G))
                    return this._programByKey.get(G);
                const U = this._getProgramTemplate(A.type)
                  , {shaders: B} = U
                  , {vertexShader: R, fragmentShader: M} = B(D)
                  , Z = A.getShaderHeader()
                  , Q = A.getShaderMain()
                  , se = R.replace("#pragma header", Z).replace("#pragma main", Q)
                  , J = h.programCache.acquire(se, M, A.getAttributeLocations());
                return this._programByKey.set(G, J),
                J
            }
            _getMaterialOptionsValue(h, A) {
                switch (h) {
                case _.kh.BACKGROUND:
                case _.kh.FILL:
                    return (A.pattern ? 1 : 0) << 1 | (A.id ? 1 : 0);
                case _.kh.OUTLINE:
                    return A.id ? 1 : 0;
                case _.kh.LINE:
                    return (A.sdf ? 1 : 0) << 2 | (A.pattern ? 1 : 0) << 1 | (A.id ? 1 : 0);
                case _.kh.ICON:
                    return (A.sdf ? 1 : 0) << 1 | (A.id ? 1 : 0);
                case _.kh.CIRCLE:
                case _.kh.TEXT:
                    return A.id ? 1 : 0;
                default:
                    return 0
                }
            }
            _getProgramTemplate(h) {
                switch (h) {
                case _.kh.BACKGROUND:
                    return V;
                case _.kh.CIRCLE:
                    return W;
                case _.kh.FILL:
                    return z;
                case _.kh.ICON:
                    return I;
                case _.kh.LINE:
                    return v;
                case _.kh.OUTLINE:
                    return C;
                case _.kh.TEXT:
                    return T;
                default:
                    return null
                }
            }
        }
    }
    ,
    89325: (_e, k, t) => {
        t.d(k, {
            Z: () => K
        });
        var _ = t(10602)
          , g = t(59587);
        class K extends _.A {
            constructor() {
                super(...arguments),
                this._prevFBO = void 0,
                this.requiresDedicatedFBO = !1
            }
            dispose() {}
            doRender(V) {
                const w = this.createRenderParams(V)
                  , {context: W, painter: Y, profiler: z} = w;
                this._prevFBO = W.getBoundFramebufferObject(),
                z.recordContainerStart(this.name);
                const H = this._getFbo(w)
                  , C = Y.getRenderTarget();
                W.bindFramebuffer(H),
                Y.setRenderTarget(H),
                W.setDepthWriteEnabled(!0),
                W.setColorMask(!0, !0, !0, !0),
                W.setClearColor(0, 0, 0, 0),
                W.setClearDepth(1),
                W.clear(W.gl.COLOR_BUFFER_BIT | W.gl.DEPTH_BUFFER_BIT),
                W.setDepthWriteEnabled(!1);
                for (const F of this.children)
                    F.beforeRender(V);
                for (const F of this.children)
                    F.processRender(w);
                for (const F of this.children)
                    F.afterRender(V);
                Y.setRenderTarget(C),
                Y.releaseFbo(H),
                W.bindFramebuffer(this._prevFBO),
                Y.beforeRenderLayer(w, this._clippingInfos ? 255 : 0, this.computedOpacity),
                H.colorTexture && (W.setStencilTestEnabled(!1),
                W.setStencilWriteMask(0),
                Y.blitTexture(W, H.colorTexture, g.Cj.NEAREST)),
                Y.compositeLayer(w, this.computedOpacity),
                z.recordContainerEnd()
            }
            createRenderParams(V) {
                return {
                    ...super.createRenderParams(V),
                    blendMode: this.blendMode,
                    effects: this.computedEffects,
                    globalOpacity: 1
                }
            }
            _getFbo(V) {
                const {context: w, painter: W} = V
                  , {width: Y, height: z} = w.getViewport();
                return W.acquireFbo(Y, z)
            }
        }
    }
    ,
    19948: (_e, k, t) => {
        t.d(k, {
            p: () => V
        });
        var _ = t(23843)
          , g = t(2992);
        const K = w => {
            let W = "";
            W += w[0].toUpperCase();
            for (let Y = 1; Y < w.length; Y++) {
                const z = w[Y];
                z === z.toUpperCase() ? (W += "_",
                W += z) : W += z.toUpperCase()
            }
            return W
        }
          , V = (w, W, Y, z) => {
            const H = w + w.substring(w.lastIndexOf("/"))
              , C = W + W.substring(W.lastIndexOf("/"))
              , F = (w => {
                const W = {};
                for (const Y in w)
                    W[K(Y)] = w[Y];
                return (0,
                g.I)(W)
            }
            )(z);
            return {
                attributes: Y,
                shaders: {
                    vertexShader: F + (0,
                    _.Q)(`${H}.vert`),
                    fragmentShader: F + (0,
                    _.Q)(`${C}.frag`)
                }
            }
        }
    }
    ,
    88480: (_e, k, t) => {
        t.d(k, {
            Y: () => I,
            q: () => P
        });
        var _ = t(24230)
          , g = t(58585)
          , S = (t(69584),
        t(85736))
          , V = t(93573)
          , w = t(69112)
          , W = t(23238)
          , Y = t(36440);
        const z = (0,
        w.vt)();
        function H(v, L) {
            return v << 16 | L
        }
        function C(v) {
            return (4294901760 & v) >>> 16
        }
        function F(v) {
            return 65535 & v
        }
        const I = {
            getObjectId: v => v.getObjectId(),
            getAttributes: v => v.readAttributes(),
            getAttribute: (v, L) => v.readAttribute(L),
            cloneWithGeometry: (v, L) => v,
            getGeometry: v => v.readHydratedGeometry(),
            getCentroid: (v, L) => v.readCentroid()
        };
        class P extends W.m {
            constructor(L, T, o) {
                super(L, T),
                this.featureAdapter = I,
                this.events = new g.A,
                this._featureSetsByInstance = new Map,
                this._objectIdToDisplayId = new Map,
                this._spatialIndexInvalid = !0,
                this._indexSearchCache = new _.A(50),
                this._index = (0,
                V.r)(9, n => ({
                    minX: this._storage.getXMin(n),
                    minY: this._storage.getYMin(n),
                    maxX: this._storage.getXMax(n),
                    maxY: this._storage.getYMax(n)
                })),
                this.mode = o
            }
            get storeStatistics() {
                let L = 0
                  , T = 0
                  , o = 0;
                return this.forEach(n => {
                    const h = n.readGeometry();
                    h && (T += h.isPoint ? 1 : h.lengths.reduce( (A, D) => A + D, 0),
                    o += h.isPoint ? 1 : h.lengths.length,
                    L += 1)
                }
                ),
                {
                    featureCount: L,
                    vertexCount: T,
                    ringCount: o
                }
            }
            hasInstance(L) {
                return this._featureSetsByInstance.has(L)
            }
            onTileData(L, T) {
                if ((0,
                S.$I)(T.addOrUpdate))
                    return T;
                if (T.addOrUpdate.attachStorage(this._storage),
                "snapshot" === this.mode) {
                    const n = T.addOrUpdate.getCursor();
                    for (; n.next(); ) {
                        const h = n.getDisplayId();
                        this.setComputedAttributes(this._storage, n, h, L.scale)
                    }
                    return T
                }
                this._featureSetsByInstance.set(T.addOrUpdate.instance, T.addOrUpdate);
                const o = T.addOrUpdate.getCursor();
                for (; o.next(); )
                    this._insertFeature(o, L.scale);
                return this._spatialIndexInvalid = !0,
                this.events.emit("changed"),
                T
            }
            search(L) {
                this._rebuildIndex();
                const T = L.id
                  , o = this._indexSearchCache.find(D => D.tileId === T);
                if ((0,
                S.Ru)(o))
                    return o.readers;
                const n = new Map
                  , h = this._searchIndex(L.bounds)
                  , A = [];
                for (const D of h) {
                    const G = this._storage.getInstanceId(D)
                      , U = C(G)
                      , B = F(G);
                    n.has(U) || n.set(U, []),
                    n.get(U).push(B)
                }
                return n.forEach( (D, G) => {
                    const U = this._featureSetsByInstance.get(G);
                    A.push(Y.e.from(U, D))
                }
                ),
                this._indexSearchCache.enqueue({
                    tileId: T,
                    readers: A
                }),
                A
            }
            insert(L) {
                const T = L.getCursor()
                  , o = this._storage;
                for (; T.next(); ) {
                    var n;
                    const h = H(T.instance, T.getIndex())
                      , A = T.getObjectId()
                      , D = null != (n = this._objectIdToDisplayId.get(A)) ? n : this._storage.createDisplayId();
                    T.setDisplayId(D),
                    o.setInstanceId(D, h),
                    this._objectIdToDisplayId.set(A, D)
                }
                this._featureSetsByInstance.set(L.instance, L),
                this._spatialIndexInvalid = !0
            }
            remove(L) {
                const T = this._objectIdToDisplayId.get(L);
                if (!T)
                    return;
                const o = this._storage.getInstanceId(T)
                  , n = F(o)
                  , h = C(o)
                  , A = this._featureSetsByInstance.get(h);
                this._objectIdToDisplayId.delete(L),
                this._storage.releaseDisplayId(T),
                A.removeAtIndex(n),
                A.isEmpty && this._featureSetsByInstance.delete(h),
                this._spatialIndexInvalid = !0
            }
            forEach(L) {
                this._objectIdToDisplayId.forEach(T => {
                    const o = this._storage.getInstanceId(T)
                      , n = this._lookupFeature(o);
                    L(n)
                }
                )
            }
            forEachUnsafe(L) {
                this._objectIdToDisplayId.forEach(T => {
                    const o = this._storage.getInstanceId(T)
                      , n = C(o)
                      , h = F(o)
                      , A = this._getFeatureSet(n);
                    A.setIndex(h),
                    L(A)
                }
                )
            }
            forEachInBounds(L, T) {
                const o = this._searchIndex(L);
                for (const n of o) {
                    const h = this.lookupFeatureByDisplayId(n, this._storage);
                    T((0,
                    S.oA)(h))
                }
            }
            forEachBounds(L, T) {
                this._rebuildIndex();
                for (const o of L) {
                    if (!o.readGeometry())
                        continue;
                    const n = o.getDisplayId();
                    (0,
                    w.BI)(z, this._storage.getXMin(n), this._storage.getYMin(n), this._storage.getXMax(n), this._storage.getYMax(n)),
                    T(z)
                }
            }
            sweepFeatures(L, T, o) {
                this._spatialIndexInvalid = !0,
                this._objectIdToDisplayId.forEach( (n, h) => {
                    L.has(n) || (T.releaseDisplayId(n),
                    o && o.unsetAttributeData(n),
                    this._objectIdToDisplayId.delete(h))
                }
                ),
                this.events.emit("changed")
            }
            sweepFeatureSets(L) {
                this._spatialIndexInvalid = !0,
                this._featureSetsByInstance.forEach( (T, o) => {
                    L.has(o) || this._featureSetsByInstance.delete(o)
                }
                )
            }
            lookupObjectId(L, T) {
                const o = this.lookupFeatureByDisplayId(L, T);
                return (0,
                S.$I)(o) ? null : o.getObjectId()
            }
            lookupDisplayId(L) {
                return this._objectIdToDisplayId.get(L)
            }
            lookupFeatureByDisplayId(L, T) {
                const o = T.getInstanceId(L);
                return this._lookupFeature(o)
            }
            lookupByDisplayIdUnsafe(L) {
                const T = this._storage.getInstanceId(L)
                  , o = C(T)
                  , n = F(T)
                  , h = this._getFeatureSet(o);
                return h ? (h.setIndex(n),
                h) : null
            }
            _insertFeature(L, T) {
                const o = this._storage
                  , n = L.getObjectId()
                  , h = H(L.instance, L.getIndex());
                o.getInstanceId(L.getDisplayId());
                let A = this._objectIdToDisplayId.get(n);
                A || (A = o.createDisplayId(),
                this._objectIdToDisplayId.set(n, A),
                this._spatialIndexInvalid = !0),
                L.setDisplayId(A),
                o.setInstanceId(A, h),
                this.setComputedAttributes(o, L, A, T)
            }
            _searchIndex(L) {
                return this._rebuildIndex(),
                this._index.search({
                    minX: L[0],
                    minY: L[1],
                    maxX: L[2],
                    maxY: L[3]
                })
            }
            _rebuildIndex() {
                if (!this._spatialIndexInvalid)
                    return;
                const L = [];
                "snapshot" === this.mode ? this._featureSetsByInstance.forEach(T => {
                    const o = T.getCursor();
                    for (; o.next(); ) {
                        const n = o.getDisplayId();
                        this._storage.setBounds(n, o) && L.push(n)
                    }
                }
                ) : this._objectIdToDisplayId.forEach(T => {
                    const o = this._storage.getInstanceId(T);
                    this._storage.setBounds(T, this._lookupFeature(o)) && L.push(T)
                }
                ),
                this._index.clear(),
                this._index.load(L),
                this._indexSearchCache.clear(),
                this._spatialIndexInvalid = !1
            }
            _lookupFeature(L) {
                const T = C(L)
                  , o = this._getFeatureSet(T);
                if (!o)
                    return;
                const n = o.getCursor()
                  , h = F(L);
                return n.setIndex(h),
                n
            }
            _getFeatureSet(L) {
                return this._featureSetsByInstance.get(L)
            }
        }
    }
    ,
    23238: (_e, k, t) => {
        t.d(k, {
            m: () => z
        });
        var _ = t(74523)
          , g = t(69584)
          , K = t(85736)
          , S = t(15053)
          , V = t(92698)
          , w = t(40014);
        const Y = Promise.all([t.e(2076), t.e(5114)]).then(t.bind(t, 97279));
        class z {
            constructor(C, F) {
                this._canCacheExpressionValue = !1,
                this._sourceInfo = C,
                this._storage = F,
                this._bitsets = {
                    computed: F.getBitset(F.createBitset())
                }
            }
            get storage() {
                return this._storage
            }
            invalidate() {
                this._bitsets.computed.clear()
            }
            updateSchema(C, F) {
                var I = this;
                return (0,
                _.A)(function*() {
                    const P = (0,
                    S.Ui)(I._schema, F);
                    if (I._schema = F,
                    !F || (0,
                    K.$I)(P) || !(0,
                    S.EB)(P, "attributes"))
                        return;
                    (0,
                    g.A)("esri-2d-update-debug") && console.debug("Applying Update - Store:", P),
                    I._bitsets.computed.clear(),
                    C.targets[F.name] = !0;
                    const v = F.attributes
                      , L = []
                      , T = [];
                    for (const o in v) {
                        const n = v[o];
                        switch (n.type) {
                        case "field":
                            break;
                        case "expression":
                            L.push(I._createArcadeComputedField(n));
                            break;
                        case "label-expression":
                            L.push(I._createLabelArcadeComputedField(n));
                            break;
                        case "statistic":
                            T.push(n)
                        }
                    }
                    I._computedFields = yield Promise.all(L),
                    I._canCacheExpressionValue = !I._computedFields.some(o => "expression" === o.type && (0,
                    K.Ru)(o.expression) && o.expression.referencesScale()),
                    I._statisticFields = T
                })()
            }
            setComputedAttributes(C, F, I, P) {
                const v = this._bitsets.computed;
                if (!this._canCacheExpressionValue || !v.has(I)) {
                    v.set(I);
                    for (const L of this._computedFields) {
                        const T = this._evaluateField(F, L, P);
                        switch (L.resultType) {
                        case "numeric":
                            C.setComputedNumericAtIndex(I, L.fieldIndex, T);
                            break;
                        case "string":
                            C.setComputedStringAtIndex(I, L.fieldIndex, T)
                        }
                    }
                }
            }
            _createArcadeComputedField(C) {
                var F = this;
                return (0,
                _.A)(function*() {
                    const I = F._sourceInfo.spatialReference
                      , P = F._sourceInfo.fieldsIndex;
                    return {
                        ...C,
                        expression: yield(0,
                        V.Ad)(C.valueExpression, I, P)
                    }
                })()
            }
            _createLabelArcadeComputedField(C) {
                var F = this;
                return (0,
                _.A)(function*() {
                    const I = F._sourceInfo.spatialReference
                      , P = F._sourceInfo.fieldsIndex
                      , {createLabelFunction: v} = yield Y
                      , L = yield v(C.label, P, I);
                    return {
                        ...C,
                        builder: L
                    }
                })()
            }
            _evaluateField(C, F, I) {
                switch (F.type) {
                case "label-expression":
                    {
                        const P = C.readArcadeFeature();
                        return F.builder.evaluate(P) || ""
                    }
                case "expression":
                    {
                        const {expression: P} = F;
                        return function W(H, C, F) {
                            if ((0,
                            K.$I)(H))
                                return null;
                            const I = C.readArcadeFeature();
                            try {
                                return H.evaluate({
                                    ...F,
                                    $feature: I
                                })
                            } catch (P) {
                                return w.A.getLogger("esri.views.2d.support.arcadeOnDemand").warn("Feature arcade evaluation failed:", P),
                                null
                            }
                        }(P, C, {
                            $view: {
                                scale: I
                            }
                        })
                    }
                }
            }
        }
    }
    ,
    32564: (_e, k, t) => {
        t.d(k, {
            A: () => Y
        });
        var _ = t(44701)
          , g = t(27129)
          , K = t(99131)
          , w = (t(17179),
        t(69408),
        t(90496));
        let W = class extends g.a {
            initialize() {}
            destroy() {}
            get supportsTileUpdates() {
                return !1
            }
            get spatialReference() {
                const z = this.get("tileStore.tileScheme.spatialReference");
                return z && z.toJSON() || null
            }
        }
        ;
        (0,
        _._)([(0,
        K.MZ)({
            readOnly: !0
        })], W.prototype, "supportsTileUpdates", null),
        (0,
        _._)([(0,
        K.MZ)({
            constructOnly: !0
        })], W.prototype, "remoteClient", void 0),
        (0,
        _._)([(0,
        K.MZ)({
            constructOnly: !0
        })], W.prototype, "service", void 0),
        (0,
        _._)([(0,
        K.MZ)()], W.prototype, "spatialReference", null),
        (0,
        _._)([(0,
        K.MZ)({
            constructOnly: !0
        })], W.prototype, "tileInfo", void 0),
        (0,
        _._)([(0,
        K.MZ)({
            constructOnly: !0
        })], W.prototype, "tileStore", void 0),
        W = (0,
        _._)([(0,
        w.$)("esri.views.2d.layers.features.processors.BaseProcessor")], W);
        const Y = W
    }
    ,
    36440: (_e, k, t) => {
        t.d(k, {
            e: () => g
        });
        var _ = t(9852);
        class g extends _.Y {
            static from(S, V) {
                return new g(S.copy(),V)
            }
            constructor(S, V) {
                super(_.Y.createInstance(), S.fullSchema()),
                this._currentIndex = -1,
                this._reader = S,
                this._indices = V
            }
            get hasNext() {
                return this._currentIndex + 1 < this._indices.length
            }
            getSize() {
                return this._indices.length
            }
            getCursor() {
                return this.copy()
            }
            copy() {
                const S = new g(this._reader.copy(),this._indices);
                return S._currentIndex = this._currentIndex,
                S
            }
            next() {
                for (; this._nextIndex() && !this._reader._getExists(); )
                    ;
                return this._currentIndex < this._indices.length
            }
            _nextIndex() {
                return ++this._currentIndex < this._indices.length && (this._reader.setIndex(this._indices[this._currentIndex]),
                !0)
            }
            setArcadeSpatialReference(S) {
                this._reader.setArcadeSpatialReference(S)
            }
            attachStorage(S) {
                this._reader.attachStorage(S)
            }
            get geometryType() {
                return this._reader.geometryType
            }
            get hasFeatures() {
                return this._reader.hasFeatures
            }
            get exceededTransferLimit() {
                return this._reader.exceededTransferLimit
            }
            get hasZ() {
                return this._reader.hasZ
            }
            get hasM() {
                return this._reader.hasM
            }
            getStorage() {
                return this._reader.getStorage()
            }
            getComputedNumeric(S) {
                return this._reader.getComputedNumericAtIndex(0)
            }
            setComputedNumeric(S, V) {
                return this._reader.setComputedNumericAtIndex(V, 0)
            }
            getComputedString(S) {
                return this._reader.getComputedStringAtIndex(0)
            }
            setComputedString(S, V) {
                return this._reader.setComputedStringAtIndex(0, V)
            }
            getComputedNumericAtIndex(S) {
                return this._reader.getComputedNumericAtIndex(S)
            }
            setComputedNumericAtIndex(S, V) {
                this._reader.setComputedNumericAtIndex(S, V)
            }
            getComputedStringAtIndex(S) {
                return this._reader.getComputedStringAtIndex(S)
            }
            setComputedStringAtIndex(S, V) {
                return this._reader.setComputedStringAtIndex(S, V)
            }
            transform(S, V, w, W) {
                const Y = this.copy();
                return Y._reader = this._reader.transform(S, V, w, W),
                Y
            }
            readAttribute(S, V=!1) {
                return this._reader.readAttribute(S, V)
            }
            readAttributes() {
                return this._reader.readAttributes()
            }
            joinAttributes(S) {
                return this._reader.joinAttributes(S)
            }
            readArcadeFeature() {
                return this._reader.readArcadeFeature()
            }
            geometry() {
                return this._reader.geometry()
            }
            field(S) {
                return this.readAttribute(S, !0)
            }
            hasField(S) {
                return this._reader.hasField(S)
            }
            setField(S, V) {
                return this._reader.setField(S, V)
            }
            keys() {
                return this._reader.keys()
            }
            castToText(S=!1) {
                return this._reader.castToText(S)
            }
            getQuantizationTransform() {
                return this._reader.getQuantizationTransform()
            }
            getFieldNames() {
                return this._reader.getFieldNames()
            }
            getAttributeHash() {
                return this._reader.getAttributeHash()
            }
            getObjectId() {
                return this._reader.getObjectId()
            }
            getDisplayId() {
                return this._reader.getDisplayId()
            }
            setDisplayId(S) {
                return this._reader.setDisplayId(S)
            }
            getGroupId() {
                return this._reader.getGroupId()
            }
            setGroupId(S) {
                return this._reader.setGroupId(S)
            }
            getXHydrated() {
                return this._reader.getXHydrated()
            }
            getYHydrated() {
                return this._reader.getYHydrated()
            }
            getX() {
                return this._reader.getX()
            }
            getY() {
                return this._reader.getY()
            }
            setIndex(S) {
                return this._reader.setIndex(S)
            }
            getIndex() {
                return this._reader.getIndex()
            }
            readLegacyFeature() {
                return this._reader.readLegacyFeature()
            }
            readOptimizedFeature() {
                return this._reader.readOptimizedFeature()
            }
            readLegacyPointGeometry() {
                return this._reader.readLegacyPointGeometry()
            }
            readLegacyGeometry() {
                return this._reader.readLegacyGeometry()
            }
            readLegacyCentroid() {
                return this._reader.readLegacyCentroid()
            }
            readGeometryArea() {
                return this._reader.readGeometryArea()
            }
            readUnquantizedGeometry() {
                return this._reader.readUnquantizedGeometry()
            }
            readHydratedGeometry() {
                return this._reader.readHydratedGeometry()
            }
            readGeometry() {
                return this._reader.readGeometry()
            }
            readCentroid() {
                return this._reader.readCentroid()
            }
            _readAttribute(S, V) {
                throw new Error("Error: Should not be called. Underlying _reader should be used instead")
            }
            _readAttributes() {
                throw new Error("Error: Should not be called. Underlying _reader should be used instead")
            }
        }
    }
    ,
    2862: (_e, k, t) => {
        t.d(k, {
            A: () => Y
        });
        var _ = t(44701)
          , g = t(27129)
          , K = t(99131)
          , w = (t(17179),
        t(69408),
        t(90496));
        let W = class extends g.a {
            constructor(z) {
                super(z),
                this.tiles = new Map
            }
            destroy() {
                this.tiles.clear(),
                this.layer = this.layerView = this.tileInfoView = this.tiles = null
            }
            get updating() {
                return this.isUpdating()
            }
            acquireTile(z) {
                const H = this.createTile(z);
                return H.once("isReady", () => this.notifyChange("updating")),
                this.tiles.set(z.id, H),
                H
            }
            forceAttributeTextureUpload() {}
            forEachTile(z) {
                this.tiles.forEach(z)
            }
            releaseTile(z) {
                this.tiles.delete(z.key.id),
                this.disposeTile(z)
            }
            isUpdating() {
                let z = !0;
                return this.tiles.forEach(H => {
                    z = z && H.isReady
                }
                ),
                !z
            }
            setHighlight() {}
            invalidateLabels() {}
            requestUpdate() {
                this.layerView.requestUpdate()
            }
        }
        ;
        (0,
        _._)([(0,
        K.MZ)()], W.prototype, "layer", void 0),
        (0,
        _._)([(0,
        K.MZ)()], W.prototype, "layerView", void 0),
        (0,
        _._)([(0,
        K.MZ)()], W.prototype, "tileInfoView", void 0),
        (0,
        _._)([(0,
        K.MZ)()], W.prototype, "updating", null),
        W = (0,
        _._)([(0,
        w.$)("esri.views.2d.layers.features.tileRenderers.BaseTileRenderer")], W);
        const Y = W
    }
    ,
    24270: (_e, k, t) => {
        t.d(k, {
            A: () => T
        });
        var _ = t(85736)
          , g = t(9741)
          , K = t(2834)
          , S = t(57623)
          , V = t(82930)
          , w = t(40831)
          , W = t(4597)
          , Y = t(41712)
          , z = t(33490)
          , H = t(98292)
          , C = t(59587)
          , F = t(39689);
        const I = Math.PI / 180;
        class v extends Y.q {
            constructor(n) {
                super(),
                this._program = null,
                this._vao = null,
                this._vertexBuffer = null,
                this._indexBuffer = null,
                this._dvsMat3 = (0,
                S.c)(),
                this._localOrigin = {
                    x: 0,
                    y: 0
                },
                this._getBounds = n
            }
            destroy() {
                this._vao && (this._vao.dispose(!0),
                this._vao = null,
                this._vertexBuffer = null,
                this._indexBuffer = null),
                this._program = (0,
                _.WD)(this._program)
            }
            doRender(n) {
                const {context: h} = n
                  , A = this._getBounds();
                if (A.length < 1)
                    return;
                this._createShaderProgram(h),
                this._updateMatricesAndLocalOrigin(n),
                this._updateBufferData(h, A),
                h.setBlendingEnabled(!0),
                h.setDepthTestEnabled(!1),
                h.setStencilWriteMask(0),
                h.setStencilTestEnabled(!1),
                h.setBlendFunction(C.dn.ONE, C.dn.ONE_MINUS_SRC_ALPHA),
                h.setColorMask(!0, !0, !0, !0);
                const D = this._program;
                h.bindVAO(this._vao),
                h.useProgram(D),
                D.setUniformMatrix3fv("u_dvsMat3", this._dvsMat3),
                h.gl.lineWidth(1),
                h.drawElements(C.WR.LINES, 8 * A.length, C.pe.UNSIGNED_INT, 0),
                h.bindVAO()
            }
            _createTransforms() {
                return {
                    dvs: (0,
                    S.c)()
                }
            }
            _createShaderProgram(n) {
                this._program || (this._program = n.programCache.acquire("precision highp float;\n        uniform mat3 u_dvsMat3;\n\n        attribute vec2 a_position;\n\n        void main() {\n          mediump vec3 pos = u_dvsMat3 * vec3(a_position, 1.0);\n          gl_Position = vec4(pos.xy, 0.0, 1.0);\n        }", "precision mediump float;\n      void main() {\n        gl_FragColor = vec4(0.75, 0.0, 0.0, 0.75);\n      }", L().attributes))
            }
            _updateMatricesAndLocalOrigin(n) {
                const {state: h} = n
                  , {displayMat3: A, size: D, resolution: G, pixelRatio: U, rotation: B, viewpoint: R} = h
                  , M = I * B
                  , {x: Z, y: Q} = R.targetGeometry
                  , se = (0,
                W.mT)(Z, h.spatialReference);
                this._localOrigin.x = se,
                this._localOrigin.y = Q;
                const J = U * D[0]
                  , q = U * D[1]
                  , X = G * J
                  , N = G * q
                  , $ = (0,
                K.g)(this._dvsMat3);
                (0,
                K.m)($, $, A),
                (0,
                K.h)($, $, (0,
                V.f)(J / 2, q / 2)),
                (0,
                K.d)($, $, (0,
                w.f)(D[0] / X, -q / N, 1)),
                (0,
                K.r)($, $, -M)
            }
            _updateBufferData(n, h) {
                const {x: A, y: D} = this._localOrigin
                  , U = new Float32Array(8 * h.length)
                  , B = new Uint32Array(8 * h.length);
                let R = 0
                  , M = 0;
                for (const Z of h)
                    Z && (U[2 * R + 0] = Z[0] - A,
                    U[2 * R + 1] = Z[1] - D,
                    U[2 * R + 2] = Z[0] - A,
                    U[2 * R + 3] = Z[3] - D,
                    U[2 * R + 4] = Z[2] - A,
                    U[2 * R + 5] = Z[3] - D,
                    U[2 * R + 6] = Z[2] - A,
                    U[2 * R + 7] = Z[1] - D,
                    B[M + 0] = R + 0,
                    B[M + 1] = R + 3,
                    B[M + 2] = R + 3,
                    B[M + 3] = R + 2,
                    B[M + 4] = R + 2,
                    B[M + 5] = R + 1,
                    B[M + 6] = R + 1,
                    B[M + 7] = R + 0,
                    R += 4,
                    M += 8);
                if (this._vertexBuffer ? this._vertexBuffer.setData(U.buffer) : this._vertexBuffer = H.g.createVertex(n, C._U.DYNAMIC_DRAW, U.buffer),
                this._indexBuffer ? this._indexBuffer.setData(B) : this._indexBuffer = H.g.createIndex(n, C._U.DYNAMIC_DRAW, B),
                !this._vao) {
                    const Z = L();
                    this._vao = new F.Z(n,Z.attributes,Z.bufferLayouts,{
                        geometry: this._vertexBuffer
                    },this._indexBuffer)
                }
            }
        }
        const L = () => (0,
        z.ES)("bounds", {
            geometry: [{
                location: 0,
                name: "a_position",
                count: 2,
                type: C.pe.FLOAT
            }]
        });
        let T = class extends g.i {
            constructor(o) {
                super(o),
                this.hasHighlight = () => !0
            }
            destroy() {
                super.destroy(),
                this._boundsRenderer = (0,
                _.pR)(this._boundsRenderer)
            }
            enableRenderingBounds(o) {
                this._boundsRenderer = new v(o),
                this.requestRender()
            }
            get hasLabels() {
                return !1
            }
            onTileData(o, n) {
                o.patch(n),
                this.contains(o) || this.addChild(o),
                this.requestRender()
            }
            onTileError(o) {
                o.clear(),
                this.contains(o) || this.addChild(o)
            }
            _renderChildren(o, n) {
                for (const h of this.children)
                    h.isReady && h.hasData && (h.commit(o),
                    o.context.setStencilFunction(C.MT.EQUAL, h.stencilRef, 255),
                    h.getDisplayList().replay(o, h, n))
            }
        }
    }
    ,
    17116: (_e, k, t) => {
        t.d(k, {
            A: () => K
        });
        var _ = t(94945)
          , g = t(24270);
        class K extends g.A {
            renderChildren(V) {
                this.attributeView.update(),
                this.children.some(w => w.hasData) && (this.attributeView.bindTextures(V.context, !1),
                super.renderChildren(V),
                V.drawPhase === _.S5.MAP && this._renderChildren(V),
                this.hasHighlight() && V.drawPhase === _.S5.HIGHLIGHT && this._renderHighlight(V),
                this._boundsRenderer && this._boundsRenderer.doRender(V))
            }
            _renderHighlight(V) {
                const {painter: w} = V
                  , W = w.effects.highlight;
                W.bind(V),
                this._renderChildren(V, W.defines),
                W.draw(V),
                W.unbind()
            }
        }
    }
    ,
    88732: (_e, k, t) => {
        t.d(k, {
            A: () => F
        });
        var _ = t(44701)
          , W = (t(40014),
        t(17179),
        t(69408),
        t(80226),
        t(69584),
        t(90496))
          , Y = t(94945)
          , z = t(24270)
          , H = t(59587);
        let C = class extends z.A {
            doRender(I) {
                I.drawPhase === Y.S5.HIGHLIGHT && super.doRender(I)
            }
            renderChildren(I) {
                if (this.attributeView.update(),
                !this.children.some(L => L.hasData))
                    return;
                this.attributeView.bindTextures(I.context),
                super.renderChildren(I);
                const {painter: P} = I
                  , v = P.effects.highlight;
                v.bind(I),
                I.context.setColorMask(!0, !0, !0, !0),
                I.context.clear(H.hn.COLOR_BUFFER_BIT),
                this._renderChildren(I, v.defines.concat(["highlightAll"])),
                v.draw(I),
                v.unbind()
            }
        }
        ;
        C = (0,
        _._)([(0,
        W.$)("esri.views.2d.layers.support.HighlightGraphicContainer")], C);
        const F = C
    }
    ,
    38018: (_e, k, t) => {
        t.d(k, {
            A: () => B
        });
        var _ = t(74523)
          , g = t(44701)
          , K = t(90619)
          , V = (t(69584),
        t(65164))
          , w = t(99131)
          , z = (t(17179),
        t(69408),
        t(90496))
          , H = t(13435)
          , C = t(13261)
          , F = t(11653);
        const I = Math.PI / 180;
        var T = t(21062)
          , o = t(44908)
          , n = t(58815);
        const h = (0,
        H.vt)()
          , A = [0, 0]
          , D = new n.A(0,0,0,0);
        let U = class extends K.A {
            constructor(R) {
                var M;
                super(R),
                M = this,
                this._imagePromise = null,
                this.bitmaps = [],
                this.hidpi = false,
                this.imageMaxWidth = 2048,
                this.imageMaxHeight = 2048,
                this.imageRotationSupported = false,
                this.imageNormalizationSupported = false,
                this.update = (0,
                V.sg)(function() {
                    var Z = (0,
                    _.A)(function*(Q, se) {
                        var J, q;
                        if ((0,
                        V.Te)(se),
                        !Q.stationary || M.destroyed)
                            return;
                        const X = Q.state
                          , N = (0,
                        C.Vp)(X.spatialReference)
                          , $ = M.hidpi ? Q.pixelRatio : 1
                          , te = M.imageNormalizationSupported && X.worldScreenWidth && X.worldScreenWidth < X.size[0]
                          , ee = null != (J = M.imageMaxWidth) ? J : 0
                          , ae = null != (q = M.imageMaxHeight) ? q : 0;
                        te ? (A[0] = X.worldScreenWidth,
                        A[1] = X.size[1]) : M.imageRotationSupported ? (A[0] = X.size[0],
                        A[1] = X.size[1]) : function v(R, M) {
                            const Z = function P(R) {
                                return R * I
                            }(M.rotation)
                              , Q = Math.abs(Math.cos(Z))
                              , se = Math.abs(Math.sin(Z))
                              , [J,q] = M.size;
                            return R[0] = Math.round(q * se + J * Q),
                            R[1] = Math.round(q * Q + J * se),
                            R
                        }(A, X);
                        const oe = Math.floor(A[0] * $) > ee || Math.floor(A[1] * $) > ae
                          , le = !M.imageNormalizationSupported && N && (X.extent.xmin < N.valid[0] || X.extent.xmax > N.valid[1])
                          , de = !oe && !le
                          , ne = M.imageRotationSupported ? X.rotation : 0
                          , re = M.container.children.slice();
                        if (de) {
                            const ce = te ? X.paddedViewState.center : X.center;
                            M._imagePromise && console.error("Image promise was not defined!"),
                            M._imagePromise = M._singleExport(X, A, ce, X.resolution, ne, $, se)
                        } else {
                            let ce = Math.min(ee, ae);
                            le && (ce = Math.min(X.worldScreenWidth, ce)),
                            M._imagePromise = M._tiledExport(X, ce, $, se)
                        }
                        try {
                            var ie;
                            const ce = null != (ie = yield M._imagePromise) ? ie : [];
                            (0,
                            V.Te)(se);
                            const pe = [];
                            if (M._imagePromise = null,
                            M.destroyed)
                                return;
                            M.bitmaps = ce;
                            for (const he of re)
                                ce.includes(he) || pe.push(he.fadeOut().then( () => {
                                    he.remove(),
                                    he.destroy()
                                }
                                ));
                            for (const he of ce)
                                pe.push(he.fadeIn());
                            yield Promise.all(pe)
                        } catch (ce) {
                            M._imagePromise = null,
                            (0,
                            V.QP)(ce)
                        }
                    });
                    return function(Q, se) {
                        return Z.apply(this, arguments)
                    }
                }(), 5e3),
                this.updateExports = (0,
                V.sg)(function() {
                    var Z = (0,
                    _.A)(function*(Q) {
                        const se = [];
                        for (const J of M.container.children) {
                            if (!J.visible || !J.stage)
                                return;
                            se.push(Q(J).then( () => {
                                J.invalidateTexture(),
                                J.requestRender()
                            }
                            ))
                        }
                        M._imagePromise = (0,
                        V.Lx)(se).then( () => M._imagePromise = null),
                        yield M._imagePromise
                    });
                    return function(Q) {
                        return Z.apply(this, arguments)
                    }
                }())
            }
            destroy() {
                this.bitmaps.forEach(R => R.destroy()),
                this.bitmaps = []
            }
            get updating() {
                return !this.destroyed && null !== this._imagePromise
            }
            _export(R, M, Z, Q, se, J) {
                var q = this;
                return (0,
                _.A)(function*() {
                    const X = yield q.fetchSource(R, Math.floor(M * se), Math.floor(Z * se), {
                        rotation: Q,
                        pixelRatio: se,
                        signal: J
                    });
                    (0,
                    V.Te)(J);
                    const N = new T.mb(null,{
                        immutable: !0,
                        requestRenderOnSourceChangedEnabled: !0
                    });
                    return N.x = R.xmin,
                    N.y = R.ymax,
                    N.resolution = R.width / M,
                    N.rotation = Q,
                    N.pixelRatio = se,
                    N.opacity = 0,
                    q.container.addChild(N),
                    yield N.setSourceAsync(X, J),
                    (0,
                    V.Te)(J),
                    N
                })()
            }
            _singleExport(R, M, Z, Q, se, J, q) {
                var X = this;
                return (0,
                _.A)(function*() {
                    !function L(R, M, Z, Q) {
                        const [se,J] = M
                          , [q,X] = Q
                          , N = .5 * Z;
                        R[0] = se - N * q,
                        R[1] = J - N * X,
                        R[2] = se + N * q,
                        R[3] = J + N * X
                    }(h, Z, Q, M);
                    const N = (0,
                    H.w1)(h, R.spatialReference);
                    return [yield X._export(N, M[0], M[1], se, J, q)]
                })()
            }
            _tiledExport(R, M, Z, Q) {
                const se = F.A.create({
                    size: M,
                    spatialReference: R.spatialReference,
                    scales: [R.scale]
                })
                  , J = new o.A(se)
                  , q = J.getTileCoverage(R);
                if (!q)
                    return null;
                const X = [];
                return q.forEach( (N, $, te, ee) => {
                    D.set(N, $, te, 0),
                    J.getTileBounds(h, D);
                    const ae = (0,
                    H.w1)(h, R.spatialReference);
                    X.push(this._export(ae, M, M, 0, Z, Q).then(oe => (0 !== ee && (D.set(N, $, te, ee),
                    J.getTileBounds(h, D),
                    oe.x = h[0],
                    oe.y = h[3]),
                    oe)))
                }
                ),
                Promise.all(X)
            }
        }
        ;
        (0,
        g._)([(0,
        w.MZ)()], U.prototype, "_imagePromise", void 0),
        (0,
        g._)([(0,
        w.MZ)()], U.prototype, "bitmaps", void 0),
        (0,
        g._)([(0,
        w.MZ)()], U.prototype, "container", void 0),
        (0,
        g._)([(0,
        w.MZ)()], U.prototype, "fetchSource", void 0),
        (0,
        g._)([(0,
        w.MZ)()], U.prototype, "hidpi", void 0),
        (0,
        g._)([(0,
        w.MZ)()], U.prototype, "imageMaxWidth", void 0),
        (0,
        g._)([(0,
        w.MZ)()], U.prototype, "imageMaxHeight", void 0),
        (0,
        g._)([(0,
        w.MZ)()], U.prototype, "imageRotationSupported", void 0),
        (0,
        g._)([(0,
        w.MZ)()], U.prototype, "imageNormalizationSupported", void 0),
        (0,
        g._)([(0,
        w.MZ)()], U.prototype, "requestUpdate", void 0),
        (0,
        g._)([(0,
        w.MZ)()], U.prototype, "updating", null),
        U = (0,
        g._)([(0,
        z.$)("esri.views.2d.layers.support.ExportStrategy")], U);
        const B = U
    }
    ,
    85989: (_e, k, t) => {
        function _(V, w, W, Y) {
            const z = 3 * V
              , H = 3 * (W - V) - z
              , C = 1 - z - H
              , F = 3 * w
              , I = 3 * (Y - w) - F
              , P = 1 - F - I;
            function v(n) {
                return ((C * n + H) * n + z) * n
            }
            function T(n) {
                return (3 * C * n + 2 * H) * n + z
            }
            return function(n, h=1e-6) {
                return function L(n) {
                    return ((P * n + I) * n + F) * n
                }(function o(n, h) {
                    let A, D, G, U, B, R;
                    for (G = n,
                    R = 0; R < 8; R++) {
                        if (U = v(G) - n,
                        Math.abs(U) < h)
                            return G;
                        if (B = T(G),
                        Math.abs(B) < 1e-6)
                            break;
                        G -= U / B
                    }
                    if (A = 0,
                    D = 1,
                    G = n,
                    G < A)
                        return A;
                    if (G > D)
                        return D;
                    for (; A < D; ) {
                        if (U = v(G),
                        Math.abs(U - n) < h)
                            return G;
                        n > U ? A = G : D = G,
                        G = .5 * (D - A) + A
                    }
                    return G
                }(n, h))
            }
        }
        t.d(k, {
            Z0: () => K,
            gb: () => _,
            qg: () => S
        });
        const g = /^cubic-bezier\((.*)\)/
          , K = {};
        function S(V) {
            let w = K[V] || null;
            if (!w) {
                const W = g.exec(V);
                if (W) {
                    const Y = W[1].split(",").map(z => parseFloat(z.trim()));
                    4 !== Y.length || Y.some(z => isNaN(z)) || (w = _.apply(_, Y))
                }
            }
            return w
        }
        K.ease = _(.25, .1, .25, 1),
        K.linear = _(0, 0, 1, 1),
        K.easeIn = K["ease-in"] = _(.42, 0, 1, 1),
        K.easeOut = K["ease-out"] = _(0, 0, .58, 1),
        K.easeInOut = K["ease-in-out"] = _(.42, 0, .58, 1)
    }
    ,
    46336: (_e, k, t) => {
        t.d(k, {
            t: () => V,
            k: () => w
        });
        const _ = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAnFBMVEUAAAD/gAD/gAD/cAD/gAD/eAD/gAD/eQD/gAD/egD/gAD/ewD/gAD/fAD/gAD/fAD/gAD/fAD/fQD/fQD/fQD/fQD/fQD/fgD/jR7/mjn/mjf/p1H/plH/smf/sWb/vHr/u3n/xYz/xIv/zZz/zJv/zJr/1Kv/1Kr/06r/06n/27n/27f/4cX/4cT/59D/7dr/8uX/9u7/+/f////u2EN0AAAAM3RSTlMACBAQICAoKDAwODhAQEhIUFBYYGhweICIkJCXmJ+gp6ivsLe4uL+/wMDHx8/P19/n7/cWvjXwAAACeUlEQVR42tWX3XqiMBCGY2pbtbrUnzhhdak/lHWliJD7v7fdJ+KG5AMhh30P8zCTmS+TycDaeBoHi5Wgf4jVYvbKmRfPgSAHMX9mPRnM1tSIGHM/c2QddLp4c8wxCvYIvqROBPfbHlm/sRYC6smMNTKn3sxZAyvyYNW1v38MM/IkcPQnZHPMLtciz9P9hhqwzoLD+cnfpTIUaYinyZlBkE2YKZcMXCyN/YhsPkuFlMfWJLiwo89VMxfpJDForMCwuG+Zx7ttGO2S/w4LJ42ZURDty5M0a4dqsZAQAihQfXqWdlhnpcmdEPAI0tv2EbnsbsKmdgi6/1GN7T1XJLx5sF0P9SWABMC+co5JBE4Ge/1NTM3EGIJgjFONXCdAbeQYwhN7pRrRV20LJNIhWOczdu+xPFzIBiQ62iIsyIOTvlZUY+HXySLQaMUEeSC1CPYxENIlwk+q8e0clFAIfiKG+qpaIvod4wfU8sqvkDLda+xCCqgDaAk7uyeNqD+feFlfGCcg3Hzsk+xS7Nz1Aq4CcauhhMc0uxaqIgcFsF0J+1WQyoCN7Y9ezeCVH5LhSxmyRvsihKbK1m7LafpSpkpj6yJgtsiVBh6AX5UyCVmMbrNpcwj5/h6DPN79JjAiQAhXVeN6SZI0q5bQnn4wBiHEqpUybp1ZJzWxStVCHhKhAhVLp/Emh6trHpGLaB6yZHk7wu3Z+ChOxhwUNEmYYjpUvqJDksSHraQmJm2DdqQK6sGUObybYtpSN+8Phm3pN2xjDH33R6b0CKxAZNLvl8foD3BBnSw5e8RI+G2P8GD9wHw6YN3wkfA0R4Zz8CGCIfOCv8zM738walXuLw6nXBvPr8wvAAAAAElFTkSuQmCC"
          , g = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAACtVBMVEUAAAD/AAD/gAD/VQD/gAD/gAD/bQD/gAD/cQD/gAD/dAD/gAD/gAD/eAD/gAD/eQD/gAD/egD/gAD/ewD/fAD/gAD/gAD/fAD/gAD/fQD/fQD/gAD/fQD/egD/fQD/gAD/egD/fQD/gAD/ewD/gAD/ewD/gAD/ewD/fQD/fQD/gAD/ewD/fQD/gAD/fAD/gAD/fAD/fgD/gAD/fAD/fgD/fAD/fgD/gAD/fAD/fgD/fAD/fgD/fQD/fQD/fgD/fgD/fQD/fgD/fQD/fgD/fQD/fgD/fQD/fgD/fQD/fgD/fQD/fgD/fQD/fgD/fQD/fQD/fgD/fQD/fgD/fQD/fgD/fQD/fgD/fQD/fgD/fQD/fQD/fgD/gAL/fgD/gAb/gAT/gwr/hAz/hxH/hQ//iBX/iBP/ixn/iRf/jBr/jR7/jyP/jyL/kif/kCX/kyr/lS7/lCz/ljH/li//mTX/nDr/mjn/nTz/oEL/okf/o0r/pU3/pU7/qFL/plH/qFX/q1j/q1r/rl7/sGL/rmH/s2v/tW//tW7/t3L/uHL/unb/unf/vHv/vX3/v4D/vX7/v4D/wYT/v4L/wYX/x4//x5H/yZX/y5n/zZv/y5n/zJv/zZ3/zp//0aL/z6H/1Kr/1av/06r/1q//17H/2bT/2LP/2rb/27n/3bz/3r7/37//4MH/38D/4ML/4sX/4sb/4sf/48n/5cv/48r/5cz/5s7/6dT/6tb/69j/69n/7Nn/7dv/7dz/7t7/7t3/7+H/7+D/7+H/8eL/8uX/8uX/8ub/8+j/8+f/9On/9er/9Or/9ez/9e3/9ez/9u7/9e3/9+//9+7/+PD/+PH/+fT/+fL/+vb/+vX/+vb/+/f/+vb//Pn/+/j//Pr//Pn//fv//Pr//fv//v3//fz//////v7//v3///8ZYzD6AAAA5nRSTlMAAQIDBAYHCAkKCwwQERITGBkaGyUmKCkqKy0uLzAxMjIzNDQ2Njg4OTs+Pj9AQEJCQ0RERUZHUlJTVFVWWFlfYGFiY2RlZmdoaWprbG1ucHFyc3R1dnd4eXp8f4CAgYGCg4SEhYWGhoeIiYmKiouMjI2Nj5CQkZOUlZaXmJiZmpudnp6io6OkpaanqKmqqqusrK2xs7W2t7e4ubq7u7/AwMLExcXGyMrLzM3NztDR0tPU1NXW29zd3t/g4eLi5OTl5ufo6erq6+zs7e7u7+/w8PHy9PT29vf4+Pn5+vr7+/z9/f7+/pNrFTEAAAO8SURBVHjaldf5W1RVGAfwl4kGxa2yIDPbF82EJhkVUEOiUiDMcJa482XCijStNLLVpoWCbLHFaZUoMSkq2wgtW8mobFcryiiWkffv6J557jh3zj33zvD56f3h3vM873nP+z7nkJ3cPE9JxdX+OgSWX15aMG0CjcnUoiuRSls2byplyH1eDZSqZrkz+d0ThC1/QQ45c521Eo58p5GTSZcirbIpZGtGEBkI5pNaVhEyo3mzSCF7ITJW7CKLYxbDTsPG5qe33QezxdkkySqGndYY615CilI5Cy9sRVjYgVRzKcXJGmzdwsKHkEwnkylB2AsNse5zSIITKWkJnPzCut8gW5IsxRlw9CnrRuohO5MM43xw9D4Lt0JWm2jOOXD2Ogv3w6LQaGA/nL3AwuOwCLpJmIU0nmDheVidQ0IV0niAhQ5YVcfnH2zcCMNtLLwHheOJaB5s7OxuQlx4hHV7oeAhokrYaOeBjkYIv7LuJyhUEU3QYONFZj4YrQfwGeuGQrDSxtM0KK2N7h5koa8V+ICFdVA4SX2Kbt5xmA2j7SHsZGETFOZQqarwhzjhUAuAl1nYDIUFdAVkoe0s/LiLmT9eD91TLDwHhXJaDtmbrPvyEWzg4dfCEB5kYTsUrqIgJK8w8/C2MHDDgWYgromFXVDwkQbDRsRFhpkHWyHcBMO1oyzSgcI1VGdEd8V6o6uA8D7m2BZIDrJuPxTqKGBEnczc33nHFmZ+A7IvWDegTmEF4lb1s3Dk+wH+oxGyj1hYC6saqkDcVk74u6cJsk4W7oXVZVSCuK84aXTP5pBcGeFRWM2nQmMPOw+zyQ9t62DyLAtRWM2mPBgao1+zyVD3wyEkPMTCq7DKo/Gmdo50DbDJd22JbbudhXdgoeUSVcNkTfRbNvnv3U0QGmKs2w2LpUR0MVI1d4+wSW/0egC/i7APFkXKobq+7Wc2+avrHvSK4B/1UKUaWNQ/1nOEk2Kf7GdhNSTLSDgfKhvaDrDsbkhmkuAOQKnhmb2cqkVuBDfFeWDnzo4/2WQrUl2QuB7XwtZ1T+7ho9qRYmUOGc6Gk8hb/xoLvI0Up1KCqxyOVkf3sdADs0soaVIQaUS6Bpm/gUlgMplMR1pron39SNLyKcVcpBduCQMJXpLMx5gsdJEkexHGYJGLLFzFyFhJNilkeTVkxkM28oPIQOAUsjW5DGmVTSQnM3xwVHt6FjnLudAPW4GLMnq7zqyEUvW5x1KGTvAulSqiVRYeR2OSmz+7uKLGpwX8K8oXFJw4zu67/wFaspwc84wT2QAAAABJRU5ErkJggg==";
        var K = t(5092);
        const S = {
            mipmap: !0,
            preMultiplyAlpha: !0,
            width: 64,
            height: 64
        };
        function V(W) {
            return W.fromData(_, () => new K.g(_,S))
        }
        function w(W) {
            return W.fromData(g, () => new K.g(g,S))
        }
    }
    ,
    75369: (_e, k, t) => {
        t.d(k, {
            AA: () => L,
            xk: () => Q,
            z7: () => Z
        });
        var M, X, _ = t(85736), g = t(4197), S = (t(15306),
        t(22644)), w = (t(52498),
        t(44126)), W = t(91895), z = (t(83576),
        t(4212)), C = (t(28436),
        t(96173)), F = t(41598), I = t(41618), P = t(88012);
        function L(X, N) {
            return function o(X, N) {
                const $ = (0,
                S.c)()
                  , te = (0,
                S.c)();
                let ee = !1;
                return ae => {
                    const oe = N(ae);
                    if ("start" === ae.action) {
                        const de = (0,
                        g.WA)(ae.screenStart, (0,
                        g.PR)(z.oG.get()))
                          , ne = (0,
                        C.Z4)(X.state.camera, de, q);
                        (0,
                        _.Ru)(ne) && (ee = (0,
                        w.Ui)(oe, ne, $))
                    }
                    if (!ee)
                        return null;
                    const ue = (0,
                    g.WA)(ae.screenEnd, (0,
                    g.PR)(z.oG.get()))
                      , le = (0,
                    C.Z4)(X.state.camera, ue, q);
                    return (0,
                    _.$I)(le) ? null : (0,
                    w.Ui)(oe, le, te) ? {
                        ...ae,
                        renderStart: $,
                        renderEnd: te,
                        plane: oe,
                        ray: le
                    } : null
                }
            }(X, () => N)
        }
        function Z(X) {
            let N = null;
            return $ => {
                switch ($.action) {
                case "start":
                    N = X.disableDisplay();
                    break;
                case "end":
                case "cancel":
                    (0,
                    _.Ru)(N) && (N.remove(),
                    N = null)
                }
                return $
            }
        }
        function Q(X, N=null) {
            const $ = (0,
            F.hz)(X.state.viewingMode);
            $.options.selectionMode = !0,
            $.options.store = I.oH.MIN,
            $.options.hud = !1;
            const te = (0,
            g.gs)()
              , ee = {
                requiresGroundFeedback: !0,
                enableDraped: !0,
                exclude: new Set
            }
              , ae = (0,
            S.c)()
              , oe = (0,
            _.zO)(N, X.spatialReference)
              , ue = de => {
                X.map.ground && X.map.ground.opacity < 1 ? ee.exclude.add(P.ki) : ee.exclude.delete(P.ki),
                X.sceneIntersectionHelper.intersectIntersectorScreen((0,
                g.WA)(de, te), $, ee);
                const ne = $.results.min;
                let re;
                if (ne.getIntersectionPoint(ae))
                    re = ne.intersector === I.dz.TERRAIN ? M.GROUND : M.OTHER;
                else {
                    if (!$.results.ground.getIntersectionPoint(ae))
                        return null;
                    re = M.GROUND
                }
                return {
                    location: X.renderCoordsHelper.fromRenderCoords(ae, oe),
                    surfaceType: re
                }
            }
            ;
            let le;
            return de => {
                if ("start" === de.action) {
                    const re = ue(de.screenStart);
                    le = (0,
                    _.Ru)(re) ? re.location : null
                }
                if ((0,
                _.$I)(le))
                    return null;
                const ne = ue(de.screenEnd);
                return (0,
                _.Ru)(ne) && (0,
                _.Ru)(ne.location) ? {
                    ...de,
                    mapStart: le,
                    mapEnd: ne.location,
                    surfaceType: ne.surfaceType
                } : null
            }
        }
        t(23513),
        (X = M || (M = {}))[X.GROUND = 0] = "GROUND",
        X[X.OTHER = 1] = "OTHER",
        (0,
        S.c)(),
        (0,
        S.c)();
        const q = (0,
        W.vt)()
    }
    ,
    87826: (_e, k, t) => {
        t.d(k, {
            X: () => L
        });
        var _ = t(44701)
          , g = t(90619)
          , K = t(11718)
          , S = t(85736)
          , V = t(99131)
          , Y = (t(17179),
        t(69408),
        t(90496))
          , z = t(42996)
          , H = t(95450)
          , C = t(57659);
        class F {
            constructor(o) {
                this._resourceFactory = o,
                this._resources = null,
                this._visible = !0,
                this._attached = !1,
                this._renderGroup = z.O7.Outline
            }
            destroy() {
                this._destroyResources()
            }
            get resources() {
                return (0,
                S.Ru)(this._resources) ? this._resources.external : null
            }
            get visible() {
                return this._visible
            }
            set visible(o) {
                o !== this._visible && (this._visible = o,
                this._syncGeometriesToRenderer())
            }
            get attached() {
                return this._attached
            }
            set attached(o) {
                o !== this._attached && (this._attached = o,
                this._createOrDestroyResources())
            }
            get renderGroup() {
                return this._renderGroup
            }
            set renderGroup(o) {
                var n;
                this._renderGroup = o;
                const h = null == (n = (0,
                S.NY)(this._resources)) ? void 0 : n.layerView;
                h && (h.renderGroup = o)
            }
            recreate() {
                this.attached && this._createResources()
            }
            recreateGeometry() {
                this._resourceFactory.recreateGeometry ? (0,
                S.$I)(this._resources) || (this._ensureRenderGeometriesRemoved(),
                this._resourceFactory.recreateGeometry(this._resources.external),
                this._syncGeometriesToRenderer()) : this.recreate()
            }
            _createOrDestroyResources() {
                this._attached ? (0,
                S.$I)(this._resources) && this._createResources() : this._destroyResources()
            }
            _createResources() {
                var o;
                this._destroyResources();
                const n = this._resourceFactory.createResources()
                  , h = new I({
                    view: this._resourceFactory.view,
                    renderGroup: this._renderGroup
                })
                  , A = null == (o = this._resourceFactory.view.basemapTerrain) ? void 0 : o.overlayManager;
                this._resources = {
                    layerView: new I({
                        view: this._resourceFactory.view,
                        renderGroup: this._renderGroup
                    }),
                    external: n,
                    geometriesAdded: !1
                },
                A && (this._resources.drapeSourceRenderer = A.registerGeometryDrapeSource(h)),
                this._syncGeometriesToRenderer()
            }
            _destroyResources() {
                var o;
                if ((0,
                S.$I)(this._resources))
                    return;
                this._ensureRenderGeometriesRemoved();
                const n = null == (o = this._resourceFactory.view.basemapTerrain) ? void 0 : o.overlayManager;
                n && n.unregisterDrapeSource(this._resources.layerView),
                this._resourceFactory.destroyResources(this._resources.external),
                this._resources = null
            }
            _syncGeometriesToRenderer() {
                this._visible ? this._ensureRenderGeometriesAdded() : this._ensureRenderGeometriesRemoved()
            }
            _ensureRenderGeometriesRemoved() {
                (0,
                S.$I)(this._resources) || (0,
                S.$I)(this._resources.drapeSourceRenderer) || this._resources.geometriesAdded && (this._resources.drapeSourceRenderer.removeGeometries(this._resources.external.geometries, H.q.UPDATE),
                this._resources.geometriesAdded = !1)
            }
            _ensureRenderGeometriesAdded() {
                (0,
                S.$I)(this._resources) || (0,
                S.$I)(this._resources.drapeSourceRenderer) || this._resources.geometriesAdded || (this._resources.drapeSourceRenderer.addGeometries(this._resources.external.geometries, H.q.UPDATE),
                this._resources.geometriesAdded = !0)
            }
        }
        let I = class extends ((0,
        K.sA)(g.A)) {
            constructor(T) {
                super(T),
                this.drapeSourceType = z.Om.Features,
                this.updatePolicy = C.q.SYNC,
                this.renderGroup = z.O7.Outline
            }
        }
        ;
        (0,
        _._)([(0,
        V.MZ)({
            constructOnly: !0
        })], I.prototype, "view", void 0),
        (0,
        _._)([(0,
        V.MZ)({
            readOnly: !0
        })], I.prototype, "drapeSourceType", void 0),
        (0,
        _._)([(0,
        V.MZ)()], I.prototype, "renderGroup", void 0),
        I = (0,
        _._)([(0,
        Y.$)("DrapedVisualElementLayerView")], I);
        var P = t(43476)
          , v = t(83831);
        class L extends P.B {
            constructor({view: o, isDraped: n}) {
                super(o),
                this._isDraped = !1,
                this.object3dResources = new v.k(this.createObject3DResourceFactory(o)),
                this.drapedResources = new F(this.createDrapedResourceFactory(o)),
                this.isDraped = n ?? !1
            }
            get isDraped() {
                return this._isDraped
            }
            set isDraped(o) {
                o !== this._isDraped && (this._isDraped = o,
                this.object3dResources.attached = this.attached && !o,
                this.drapedResources.attached = this.attached && o)
            }
            get renderGroup() {
                return this.drapedResources.renderGroup
            }
            set renderGroup(o) {
                this.drapedResources.renderGroup = o
            }
            createResources() {
                this.object3dResources.attached = !this._isDraped,
                this.drapedResources.attached = this._isDraped
            }
            destroyResources() {
                this.object3dResources.attached = !1,
                this.drapedResources.attached = !1
            }
            recreate() {
                this.object3dResources.recreate(),
                this.drapedResources.recreate()
            }
            recreateGeometry() {
                this.object3dResources.recreateGeometry(),
                this.drapedResources.recreateGeometry()
            }
            destroy() {
                this.object3dResources.destroy(),
                this.drapedResources.destroy(),
                super.destroy()
            }
            updateVisibility(o) {
                this.object3dResources.visible = o,
                this.drapedResources.visible = o
            }
        }
    }
    ,
    11066: (_e, k, t) => {
        t.d(k, {
            n: () => A
        });
        var _ = t(85736)
          , g = t(57540)
          , K = t(30459)
          , S = t(19811)
          , V = t(15306)
          , w = t(22644)
          , W = t(35347)
          , Y = t(42219)
          , z = t(4212)
          , H = t(42726)
          , C = t(87826)
          , F = t(37329)
          , I = t(92274)
          , P = t(42829)
          , v = t(68092)
          , L = t(73549)
          , T = t(39532)
          , o = t(84684)
          , n = t(62883)
          , h = t(24178);
        class A extends C.X {
            constructor(B) {
                super(B),
                this._maxSize = 0,
                this._position = (0,
                w.c)(),
                this._up = (0,
                w.c)(),
                this._right = (0,
                w.c)(),
                this._renderOccluded = L.m$.OccludeAndTransparent,
                this._color = (0,
                Y.f)(1, 0, 0, 1),
                this._outlineColor = (0,
                Y.f)(0, 0, 0, 1),
                this._outlineSize = 0,
                this._size = 32,
                this._outlineRenderOccluded = L.m$.Opaque,
                this.applyProps(B)
            }
            createObject3DResourceFactory(B) {
                return {
                    view: B,
                    createResources: R => this._createObject3DResources(R),
                    destroyResources: R => this._destroyObject3DResources(R),
                    cameraChanged: () => this._updateTransformObject3D()
                }
            }
            createDrapedResourceFactory(B) {
                return {
                    view: B,
                    createResources: () => this._createDrapedResources(),
                    destroyResources: R => this._destroyDrapedResources(R)
                }
            }
            get renderOccluded() {
                return this._renderOccluded
            }
            set renderOccluded(B) {
                B !== this._renderOccluded && (this._renderOccluded = B,
                this._updateQuadMaterial())
            }
            get color() {
                return this._color
            }
            set color(B) {
                (0,
                W.c)(this._color, B),
                this._updateQuadMaterial()
            }
            get outlineColor() {
                return this._outlineColor
            }
            set outlineColor(B) {
                (0,
                W.c)(this._outlineColor, B),
                this._updateOutlineMaterial()
            }
            get outlineSize() {
                return this._outlineSize
            }
            set outlineSize(B) {
                const R = 0 === this._outlineSize != (0 === B);
                this._outlineSize = B,
                R ? this.recreateGeometry() : this._updateOutlineMaterial()
            }
            get size() {
                return this._size
            }
            set size(B) {
                B !== this._size && (this._size = B,
                this._updateTransform())
            }
            get outlineRenderOccluded() {
                return this._outlineRenderOccluded
            }
            set outlineRenderOccluded(B) {
                this._outlineRenderOccluded = B,
                this._updateOutlineMaterial()
            }
            set geometry({previous: B, center: R, next: M}) {
                this._maxSize = Math.min((0,
                V.i)(R, B), (0,
                V.i)(R, M)) / 3,
                (0,
                V.n)(this._up, (0,
                V.b)(this._up, B, R)),
                (0,
                V.n)(this._right, (0,
                V.b)(this._right, M, R)),
                (0,
                V.c)(this._position, R),
                this.recreateGeometry()
            }
            _createObject3DResources(B) {
                const R = new n.v(this._quadMaterialParameters)
                  , M = 0 === this._outlineSize ? void 0 : new h.W(this._outlineMaterialParameters);
                return this._createObject3DGeometries(B, R, M),
                {
                    quadMaterial: R,
                    outlineMaterial: M,
                    forEach: Z => {
                        Z(R),
                        M && Z(M)
                    }
                }
            }
            _destroyObject3DResources(B) {
                var R;
                B.quadMaterial.dispose(),
                null == (R = B.outlineMaterial) || R.dispose()
            }
            _createObject3DGeometries(B, R, M) {
                if ((0,
                V.k)(this._up, w.Z) && (0,
                V.k)(this._right, w.Z))
                    return;
                const Z = this._createGeometries(R, M);
                for (const Q of Z)
                    B.addGeometry(Q);
                this._updateTransformObject3D(B)
            }
            _createDrapedResources() {
                const B = new n.v(this._quadMaterialParameters)
                  , R = 0 === this._outlineSize ? void 0 : new h.W(this._outlineMaterialParameters)
                  , M = this._createGeometries(B, R).map(Z => new T.$(Z,{
                    boundingInfo: Z.boundingInfo
                }));
                return this._setTransformDraped(M),
                {
                    quadMaterial: B,
                    outlineMaterial: R,
                    geometries: M,
                    pixelRatioHandle: (0,
                    g.wB)( () => this.view.state.contentPixelRatio, () => {
                        this.drapedResources.recreateGeometry()
                    }
                    )
                }
            }
            _destroyDrapedResources(B) {
                var R;
                B.pixelRatioHandle.remove(),
                B.geometries = [],
                null != (R = B.outlineMaterial) && R.dispose(),
                B.quadMaterial.dispose()
            }
            _createGeometries(B, R) {
                const {up: M, right: Z, corner: Q} = this._getVertices()
                  , se = this._quadGeometryData(M, Z, Q, B);
                return R ? [se, (0,
                v.Z8)(R, [M, Q, Z])] : [se]
            }
            _getVertices() {
                let B = this._up
                  , R = this._right;
                const M = (0,
                V.a)(z.rq.get(), B, R);
                return this.isDraped && (B = (0,
                V.c)(z.rq.get(), B),
                R = (0,
                V.c)(z.rq.get(), R),
                B[2] = 0,
                R[2] = 0,
                M[2] = 0),
                {
                    up: B,
                    right: R,
                    corner: M
                }
            }
            _updateTransform() {
                this.isDraped ? this.drapedResources.recreateGeometry() : this._updateTransformObject3D()
            }
            _updateTransformObject3D(B=(0,
            _.NY)(this.object3dResources.object)) {
                if (!B)
                    return;
                const M = this._size * this.view.state.camera.computeScreenPixelSizeAt(this._position)
                  , Z = Math.min(this._maxSize, M);
                (0,
                K.f)(D, this._position),
                (0,
                K.k)(D, D, [Z, Z, Z]),
                B.transformation = D
            }
            _setTransformDraped(B) {
                if (0 === B.length)
                    return;
                const {view: {basemapTerrain: {overlayManager: R}, state: {contentPixelRatio: M}}} = this
                  , {_position: Z, _size: Q} = this
                  , se = (0,
                V.c)(z.rq.get(), Z);
                se[2] = F.gS;
                const J = G;
                J.spatialReference = (0,
                _.oA)(R.renderer.spatialReference),
                J.x = se[0],
                J.y = se[1];
                const q = Q * (R.overlayPixelSizeInMapUnits(J) * M)
                  , X = Math.min(this._maxSize, q);
                (0,
                K.f)(D, se),
                (0,
                K.k)(D, D, [X, X, 1]);
                for (const N of B)
                    N.updateTransformation($ => {
                        (0,
                        K.c)($, D)
                    }
                    )
            }
            _quadGeometryData(B, R, M, Z) {
                return new P.V(Z,[[o.r.POSITION, new I.n([0, 0, 0, ...R, ...B, ...M],3,!0)]],[[o.r.POSITION, [0, 1, 2, 1, 2, 3]]])
            }
            get _quadMaterialParameters() {
                return {
                    color: this._color,
                    transparent: !0,
                    writeDepth: !1,
                    polygonOffset: !0,
                    renderOccluded: this._renderOccluded
                }
            }
            _updateQuadMaterial() {
                var B, R;
                null != (B = (0,
                _.NY)(this.object3dResources.resources)) && B.quadMaterial.setParameters(this._quadMaterialParameters),
                null == (R = (0,
                _.NY)(this.drapedResources.resources)) || R.quadMaterial.setParameters(this._quadMaterialParameters)
            }
            get _outlineMaterialParameters() {
                return {
                    color: this._outlineColor,
                    width: this._outlineSize,
                    renderOccluded: this._outlineRenderOccluded
                }
            }
            _updateOutlineMaterial() {
                var B, R, M, Z;
                null != (B = (0,
                _.NY)(this.object3dResources.resources)) && null != (R = B.outlineMaterial) && R.setParameters(this._outlineMaterialParameters),
                null == (M = (0,
                _.NY)(this.drapedResources.resources)) || null == (Z = M.outlineMaterial) || Z.setParameters(this._outlineMaterialParameters)
            }
        }
        const D = (0,
        S.c)()
          , G = (0,
        H.TH)(0, 0, void 0, null)
    }
    ,
    55591: (_e, k, t) => {
        t.d(k, {
            E: () => C
        });
        var _ = t(44701)
          , g = t(80226)
          , K = t(85736)
          , S = t(57540)
          , V = t(99131)
          , Y = (t(17179),
        t(69408),
        t(90496))
          , z = t(11884)
          , H = t(22825);
        const C = F => {
            let I = class extends F {
                get imageFormatIsOpaque() {
                    return !1
                }
                get fullExtent() {
                    return this.layer.fullExtent
                }
                get isOpaque() {
                    return this.fullOpacity >= 1 && this.imageFormatIsOpaque
                }
                get dataLevelRange() {
                    const P = this.tileInfo.lods;
                    return this.levelRangeFromScaleRange(P[0].scale, P[P.length - 1].scale)
                }
                get displayLevelRange() {
                    const P = this.tileInfo.lods
                      , T = this.levelRangeFromScaleRange(this.layer.minScale || P[0].scale, this.layer.maxScale || P[P.length - 1].scale);
                    return this.layer.maxScale && T.maxLevel++,
                    T
                }
                getTileUrl(P, v, L) {
                    return this.layer.getTileUrl(P, v, L)
                }
                _addTilingSchemeMatchPromise() {
                    if ((0,
                    K.$I)(this.fullExtent))
                        return this.addResolvingPromise(Promise.reject(new g.A("tilingscheme:extent-not-defined","This layer doesn't define a fullExtent.")));
                    const P = this._getTileInfoSupportError(this.tileInfo, this.fullExtent);
                    if ((0,
                    K.Ru)(P))
                        return this.addResolvingPromise(Promise.reject(P));
                    const v = (0,
                    S.C_)( () => {
                        var L, T;
                        return null == (L = this.view) || null == (T = L.basemapTerrain) ? void 0 : T.tilingSchemeLocked
                    }
                    ).then( () => {
                        const T = this._getTileInfoCompatibilityError(this.tileInfo, this.view.basemapTerrain.tilingScheme);
                        if (T)
                            throw T
                    }
                    );
                    this.addResolvingPromise(v)
                }
                _getTileInfoSupportError(P, v) {
                    const L = (0,
                    H._y)(P, v, this.view.spatialReference, this.view.state.viewingMode);
                    if (L) {
                        const T = {
                            layer: this.layer,
                            error: L
                        };
                        let o;
                        switch (L.name) {
                        case "tilingscheme:spatial-reference-mismatch":
                        case "tilingscheme:global-unsupported-spatial-reference":
                        case "tilingscheme:local-unsupported-spatial-reference":
                            o = new g.A("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",T);
                            break;
                        default:
                            o = new g.A("layerview:tiling-scheme-unsupported","The tiling scheme of this layer is not supported by SceneView",T)
                        }
                        return o
                    }
                    return null
                }
                _getTileInfoCompatibilityError(P, v) {
                    return (0,
                    K.$I)(P) || !v.compatibleWith(P) ? new g.A("layerview:tiling-scheme-incompatible","The tiling scheme of this layer is incompatible with the tiling scheme of the surface") : null
                }
                levelRangeFromScaleRange(P, v) {
                    const L = {
                        minLevel: 0,
                        maxLevel: 1 / 0
                    }
                      , T = this.view && this.view.basemapTerrain && this.view.basemapTerrain.tilingScheme;
                    if (!T)
                        return L;
                    const o = T.levels[0]
                      , n = h => {
                        const A = Math.log(o.scale / h) / Math.LN2;
                        return .5 - Math.abs(.5 - A % 1) < 1e-9 ? Math.round(A) : Math.ceil(A)
                    }
                    ;
                    return null != P && P > 0 && (L.minLevel = Math.max(0, n(P))),
                    null != v && v > 0 && (L.maxLevel = Math.max(0, n(v))),
                    L
                }
                isUpdating() {
                    return !!(this.view && this.view.basemapTerrain && this.view.basemapTerrain.updating)
                }
            }
            ;
            return (0,
            _._)([(0,
            V.MZ)({
                readOnly: !0
            })], I.prototype, "imageFormatIsOpaque", null),
            (0,
            _._)([(0,
            V.MZ)({
                readOnly: !0
            })], I.prototype, "updating", void 0),
            (0,
            _._)([(0,
            V.MZ)(z.S)], I.prototype, "updatingProgress", void 0),
            (0,
            _._)([(0,
            V.MZ)(z.b)], I.prototype, "updatingProgressValue", void 0),
            (0,
            _._)([(0,
            V.MZ)()], I.prototype, "fullExtent", null),
            (0,
            _._)([(0,
            V.MZ)({
                readOnly: !0
            })], I.prototype, "isOpaque", null),
            (0,
            _._)([(0,
            V.MZ)({
                readOnly: !0
            })], I.prototype, "dataLevelRange", null),
            (0,
            _._)([(0,
            V.MZ)({
                readOnly: !0
            })], I.prototype, "displayLevelRange", null),
            (0,
            _._)([(0,
            V.MZ)()], I.prototype, "layer", void 0),
            (0,
            _._)([(0,
            V.MZ)()], I.prototype, "tileInfo", void 0),
            I = (0,
            _._)([(0,
            Y.$)("esri.views.3d.layers.TiledLayerView3D")], I),
            I
        }
    }
    ,
    69969: (_e, k, t) => {
        t.d(k, {
            K: () => Q
        });
        var _ = t(74523)
          , g = t(44701)
          , K = t(18986)
          , S = t(11602)
          , V = t(27129)
          , w = t(54227)
          , W = t(85736)
          , Y = t(65164)
          , z = t(57540)
          , H = t(99131)
          , I = (t(17179),
        t(69408),
        t(90496))
          , P = t(15053)
          , v = t(49376)
          , L = t(56069)
          , T = t(95472)
          , o = t(67525)
          , n = t(42996)
          , h = t(25815)
          , A = t(61686)
          , D = t(25194)
          , G = t(76358)
          , U = t(67650)
          , B = t(97146)
          , R = t(16145)
          , M = t(27560)
          , Z = t(57659);
        let Q = class extends V.a {
            constructor(J) {
                super(J),
                this.type = "graphics-3d",
                this.graphicsCore = null,
                this.drapeSourceType = n.Om.Features,
                this.scaleVisibilityEnabled = !1,
                this.frustumVisibilityEnabled = !1,
                this._suspendResumeExtent = null
            }
            initialize() {
                const {layer: J} = this
                  , q = "effectiveScaleRange"in J ? J : null
                  , X = this.scaleVisibilityEnabled && (0,
                W.Ru)(q)
                  , N = new A.w({
                    owner: this,
                    layer: this.owner.layer,
                    preferredUpdatePolicy: Z.q.SYNC,
                    graphicSymbolSupported: !0,
                    componentFactories: {
                        elevationAlignment: ($, te) => new D.A({
                            graphicsCoreOwner: this,
                            graphicsCore: $,
                            queryGraphicUIDsInExtent: te,
                            elevationProvider: this.view.elevationProvider
                        }),
                        scaleVisibility: X ? ($, te) => new B.A({
                            graphicsCoreOwner: this,
                            layer: q,
                            queryGraphicUIDsInExtent: te,
                            graphicsCore: $,
                            basemapTerrain: this.owner.view.basemapTerrain
                        }) : null,
                        objectStates: $ => new U.w($)
                    }
                });
                if (this._set("graphicsCore", N),
                this.frustumVisibilityEnabled && this._set("frustumVisibility", new G.A({
                    graphicsCoreOwner: this
                })),
                "fullOpacity"in this.owner) {
                    const $ = this.owner;
                    this.updatingHandles.add( () => $.fullOpacity, () => this.graphicsCore.opacityChange())
                }
                if ("elevationInfo"in J) {
                    const $ = J;
                    this.updatingHandles.add( () => $.elevationInfo, (te, ee) => {
                        (0,
                        P.Ui)(te, ee) && this.updatingHandles.addPromise(this.graphicsCore.elevationInfoChange())
                    }
                    )
                }
                this._set("initializePromise", this._initializeAsync()),
                this.updatingHandles.addPromise(this.initializePromise)
            }
            _initializeAsync() {
                var J = this;
                return (0,
                _.A)(function*() {
                    try {
                        yield J.graphicsCore.initializePromise
                    } catch (q) {
                        if ((0,
                        Y.zf)(q))
                            return;
                        throw q
                    }
                    J.destroyed || (J.handles.add((0,
                    z.wB)( () => J.view.clippingArea, () => J._updateClippingExtent(), z.OH)),
                    J._updateClippingExtent(),
                    J._setupSuspendResumeExtent(),
                    J.graphicsCore.startCreateGraphics())
                })()
            }
            destroy() {
                this.handles.removeAll(),
                this.updatingHandles.removeAll(),
                this._set("frustumVisibility", (0,
                W.pR)(this.frustumVisibility)),
                this._set("graphicsCore", (0,
                W.pR)(this.graphicsCore))
            }
            get layer() {
                return this.owner.layer
            }
            get view() {
                return this.owner.view
            }
            get scaleVisibility() {
                var J;
                return null == (J = this.graphicsCore) ? void 0 : J.scaleVisibility
            }
            get elevationAlignment() {
                var J;
                return null == (J = this.graphicsCore) ? void 0 : J.elevationAlignment
            }
            get objectStates() {
                var J;
                return null == (J = this.graphicsCore) ? void 0 : J.objectStates
            }
            get scaleVisibilitySuspended() {
                return !(!(0,
                W.Ru)(this.scaleVisibility) || !this.scaleVisibility.suspended)
            }
            get frustumVisibilitySuspended() {
                return (0,
                W.Ru)(this.frustumVisibility) && this.frustumVisibility.suspended
            }
            get suspended() {
                var J;
                return null != (J = this.owner.suspended) && J
            }
            get updating() {
                var J;
                return !!(null != (J = this.graphicsCore) && J.updating || (0,
                W.Ru)(this.scaleVisibility) && this.scaleVisibility.updating || (0,
                W.Ru)(this.frustumVisibility) && this.frustumVisibility.updating || this.updatingHandles.updating)
            }
            get graphics3DGraphics() {
                var J;
                return null == (J = this.graphicsCore) ? void 0 : J.graphics3DGraphics
            }
            get graphics3DGraphicsByObjectID() {
                var J;
                return null == (J = this.graphicsCore) ? void 0 : J.graphics3DGraphicsByObjectID
            }
            get loadedGraphics() {
                return this.owner.loadedGraphics
            }
            get fullOpacity() {
                var J;
                return null != (J = this.owner.fullOpacity) ? J : 1
            }
            get slicePlaneEnabled() {
                return this.owner.slicePlaneEnabled
            }
            get updatePolicy() {
                return this.owner.updatePolicy
            }
            notifyGraphicGeometryChanged(J) {
                this.graphicsCore.notifyGraphicGeometryChanged(J)
            }
            notifyGraphicVisibilityChanged(J) {
                this.graphicsCore.notifyGraphicVisibilityChanged(J)
            }
            getRenderingInfo(J, q, X) {
                const N = (0,
                T.vl)(J, {
                    renderer: q,
                    arcade: X
                });
                if ((0,
                W.Ru)(N) && N.color) {
                    const $ = N.color;
                    $[0] = $[0] / 255,
                    $[1] = $[1] / 255,
                    $[2] = $[2] / 255
                }
                return N
            }
            getRenderingInfoAsync(J, q, X, N) {
                return (0,
                T.LO)(J, {
                    renderer: q,
                    arcade: X,
                    ...N
                })
            }
            getHit(J) {
                if (this.owner.loadedGraphics) {
                    const q = this.owner.loadedGraphics.find(X => X.uid === J);
                    if (q) {
                        const N = (0,
                        L.wP)(q, this.layer instanceof v.A ? this.layer : null);
                        return {
                            type: "graphic",
                            graphic: N,
                            layer: N.layer
                        }
                    }
                }
                return null
            }
            whenGraphicBounds(J, q) {
                return this.graphicsCore ? this.graphicsCore.whenGraphicBounds(J, q) : Promise.reject()
            }
            computeAttachmentOrigin(J, q) {
                return this.graphicsCore ? this.graphicsCore.computeAttachmentOrigin(J, q) : null
            }
            getSymbolLayerSize(J, q) {
                return this.graphicsCore ? this.graphicsCore.getSymbolLayerSize(J, q) : null
            }
            maskOccludee(J) {
                const {set: q, handle: X} = this.objectStates.acquireSet(M.Mg.MaskOccludee, null);
                return this.objectStates.setUid(q, J.uid),
                X
            }
            highlight(J) {
                if (J instanceof o.A)
                    return se;
                if ("number" == typeof J)
                    return this.highlight([J]);
                if (J instanceof K.A)
                    return this.highlight([J]);
                if (J instanceof S.A && (J = J.toArray()),
                Array.isArray(J) && J.length > 0) {
                    if (J[0]instanceof K.A) {
                        const q = J.map($ => $.uid)
                          , {set: X, handle: N} = this.objectStates.acquireSet(M.Mg.Highlight, null);
                        return this.objectStates.setUids(X, q),
                        N
                    }
                    if ("number" == typeof J[0]) {
                        const q = J
                          , {set: X, handle: N} = this.objectStates.acquireSet(M.Mg.Highlight, null);
                        return this.objectStates.setObjectIds(X, q),
                        N
                    }
                }
                return se
            }
            _setupSuspendResumeExtent() {
                const {scaleVisibility: J, frustumVisibility: q} = this;
                if ((0,
                W.$I)(J) && (0,
                W.$I)(q))
                    return;
                const X = ({computedExtent: N, extentPadding: $}) => {
                    this._suspendResumeExtent = (0,
                    R.t8)(N, this._suspendResumeExtent, h.d, $),
                    (0,
                    W.Ru)(J) && J.setExtent(this._suspendResumeExtent),
                    (0,
                    W.Ru)(q) && q.setExtent(this._suspendResumeExtent)
                }
                ;
                this.handles.add((0,
                z.wB)( () => {
                    var N, $;
                    return {
                        computedExtent: null == (N = this.graphicsCore) ? void 0 : N.computedExtent,
                        extentPadding: null == ($ = this.graphicsCore) ? void 0 : $.extentPadding
                    }
                }
                , N => X(N), z.pc))
            }
            _updateClippingExtent() {
                this.graphicsCore.setClippingExtent(this.view.clippingArea, this.view.spatialReference) && this.graphicsCore.recreateAllGraphics()
            }
        }
        ;
        (0,
        g._)([(0,
        H.MZ)()], Q.prototype, "type", void 0),
        (0,
        g._)([(0,
        H.MZ)({
            constructOnly: !0
        })], Q.prototype, "owner", void 0),
        (0,
        g._)([(0,
        H.MZ)()], Q.prototype, "layer", null),
        (0,
        g._)([(0,
        H.MZ)()], Q.prototype, "view", null),
        (0,
        g._)([(0,
        H.MZ)({
            constructOnly: !0
        })], Q.prototype, "graphicsCore", void 0),
        (0,
        g._)([(0,
        H.MZ)()], Q.prototype, "scaleVisibility", null),
        (0,
        g._)([(0,
        H.MZ)({
            constructOnly: !0
        })], Q.prototype, "frustumVisibility", void 0),
        (0,
        g._)([(0,
        H.MZ)()], Q.prototype, "elevationAlignment", null),
        (0,
        g._)([(0,
        H.MZ)()], Q.prototype, "objectStates", null),
        (0,
        g._)([(0,
        H.MZ)()], Q.prototype, "scaleVisibilitySuspended", null),
        (0,
        g._)([(0,
        H.MZ)({
            readOnly: !0
        })], Q.prototype, "frustumVisibilitySuspended", null),
        (0,
        g._)([(0,
        H.MZ)()], Q.prototype, "suspended", null),
        (0,
        g._)([(0,
        H.MZ)({
            readOnly: !0
        })], Q.prototype, "updating", null),
        (0,
        g._)([(0,
        H.MZ)()], Q.prototype, "loadedGraphics", null),
        (0,
        g._)([(0,
        H.MZ)()], Q.prototype, "fullOpacity", null),
        (0,
        g._)([(0,
        H.MZ)()], Q.prototype, "slicePlaneEnabled", null),
        (0,
        g._)([(0,
        H.MZ)()], Q.prototype, "drapeSourceType", void 0),
        (0,
        g._)([(0,
        H.MZ)()], Q.prototype, "updatePolicy", null),
        (0,
        g._)([(0,
        H.MZ)({
            constructOnly: !0
        })], Q.prototype, "scaleVisibilityEnabled", void 0),
        (0,
        g._)([(0,
        H.MZ)({
            constructOnly: !0
        })], Q.prototype, "frustumVisibilityEnabled", void 0),
        (0,
        g._)([(0,
        H.MZ)()], Q.prototype, "initializePromise", void 0),
        Q = (0,
        g._)([(0,
        I.$)("esri.views.3d.layers.graphics.GraphicsProcessor")], Q);
        const se = (0,
        w.hA)()
    }
    ,
    28206: (_e, k, t) => {
        t.d(k, {
            bh: () => w,
            r0: () => W,
            ry: () => Y
        });
        var _ = t(30702)
          , g = t(85736)
          , K = t(60257);
        const S = {
            setAttribute() {},
            rollback() {},
            commit() {}
        };
        var V, v;
        function w(v, L) {
            const T = L.attributes[v.objectIdField]
              , o = v.sessions.get(T);
            if (o)
                return o;
            const n = (0,
            _.o8)(L.attributes)
              , h = new Set;
            if (null == T)
                return S;
            const A = v.i3sOverrides.createInteractiveEditSession(T)
              , D = new Map;
            let U = V.EDITING;
            const B = {
                setAttribute(R, M) {
                    if (U !== V.EDITING)
                        return;
                    const Z = v.fieldsIndex.get(R);
                    if ((0,
                    g.$I)(Z))
                        return;
                    const Q = v.attributeStorageInfo.findIndex(q => q.name === Z.name);
                    if (Q < 0)
                        return;
                    A.set(Q, M);
                    const se = v.attributeStorageInfo[Q];
                    let J = !1;
                    h.add(R),
                    v.forEachNode( (q, X) => {
                        const N = ( (R, M) => {
                            const Z = D.get(R);
                            if (null == Z) {
                                const Q = M.indexOf(T);
                                return D.set(R, Q),
                                Q
                            }
                            return Z
                        }
                        )(q, X);
                        if (-1 === N)
                            return;
                        const $ = v.getAttributeData(q.index);
                        if ($) {
                            const te = $[se.name];
                            te && (te[N] = M,
                            v.setAttributeData(q.index, $, L),
                            J = !0)
                        }
                    }
                    ),
                    J && v.clearMemCache()
                },
                rollback() {
                    if (U === V.EDITING) {
                        for (const R of h)
                            this.setAttribute(R, n[R]);
                        A.rollback(),
                        U = V.ROLLED_BACK,
                        v.sessions.delete(T)
                    }
                },
                commit() {
                    U === V.EDITING && (A.commit(),
                    U = V.COMMITTED,
                    v.sessions.delete(T))
                }
            };
            return v.sessions.set(T, B),
            B
        }
        function W(v, L) {
            const T = [...L.addedFeatures, ...L.updatedFeatures, ...L.deletedFeatures];
            for (const o of T)
                o.objectId && v.i3sOverrides.updateGeometry(o.objectId)
        }
        function Y(v, L) {
            const T = function z(v, L) {
                const T = L.edits.updateFeatures;
                if (!T || 0 === T.length)
                    return new P;
                const o = function F(v) {
                    const L = new Set;
                    if (!v.updatedFeatures)
                        return L;
                    for (const T of v.updatedFeatures)
                        null != T.objectId && null == T.error && L.add(T.objectId);
                    return L
                }(L)
                  , n = new P
                  , h = new Map;
                for (let U = 0; U < v.attributeStorageInfo.length; U++)
                    h.set(v.attributeStorageInfo[U].name, U);
                const A = v.fieldsIndex
                  , D = v.objectIdField
                  , G = T.filter(U => {
                    const B = (0,
                    K.f)(A, U.attributes, D);
                    return o.has(B)
                }
                );
                return v.forEachNode( (U, B) => {
                    const R = new Set(B);
                    for (const M of G) {
                        const Z = (0,
                        K.f)(A, M.attributes, D);
                        if (!R.has(Z))
                            continue;
                        const Q = B.indexOf(Z);
                        for (const se in M.attributes) {
                            const J = v.fieldsIndex.normalizeFieldName(se);
                            H(n, U.index, J).push({
                                featureIndex: Q,
                                featureId: Z,
                                value: M.attributes[se]
                            })
                        }
                    }
                }
                ),
                n
            }(v, L);
            if (0 === T.size)
                return;
            const o = new Map;
            for (let h = 0; h < v.attributeStorageInfo.length; h++)
                o.set(v.attributeStorageInfo[h].name, h);
            let n = !1;
            T.forEach( (h, A) => {
                const D = v.getAttributeData(A);
                let G = !1;
                h.forEach( (U, B) => {
                    const R = (0,
                    g.Ru)(D) ? D[B] : null
                      , M = o.get(B);
                    for (const {featureIndex: Z, value: Q, featureId: se} of U)
                        R && (R[Z] = Q,
                        G = !0,
                        n = !0),
                        v.i3sOverrides.updateAttributeValue(se, M, Q)
                }
                ),
                G && v.setAttributeData(A, D, null)
            }
            ),
            n && v.clearMemCache()
        }
        function H(v, L, T) {
            const o = function C(v, L) {
                const T = v.get(L);
                if (T)
                    return T;
                const o = new I;
                return v.set(L, o),
                o
            }(v, L)
              , n = null != T && o.get(T);
            if (n)
                return n;
            const h = new Array;
            return o.set(T, h),
            h
        }
        (v = V || (V = {}))[v.EDITING = 0] = "EDITING",
        v[v.ROLLED_BACK = 1] = "ROLLED_BACK",
        v[v.COMMITTED = 2] = "COMMITTED";
        const I = Map
          , P = Map
    }
    ,
    99772: (_e, k, t) => {
        t.d(k, {
            R: () => F
        });
        var _ = t(74523)
          , g = t(44701)
          , K = t(80226)
          , S = t(85736)
          , z = (t(40014),
        t(17179),
        t(69408),
        t(69584),
        t(90496))
          , H = t(21745)
          , C = t(42727);
        const F = I => {
            let P = class extends I {
                _validateFetchPopupFeatures(v) {
                    const {layer: L} = this
                      , {popupEnabled: T} = L;
                    if (!T)
                        throw new K.A("scenelayerview3d:fetchPopupFeatures","Popups are disabled",{
                            layer: L
                        });
                    if (!(0,
                    C.D)(L, v))
                        throw new K.A("scenelayerview3d:fetchPopupFeatures","Layer does not define a popup template",{
                            layer: L
                        })
                }
                prepareFetchPopupFeatures(v) {
                    return (0,
                    _.A)(function*() {})()
                }
                fetchPopupFeatures(v, L) {
                    var T = this;
                    return (0,
                    _.A)(function*() {
                        T._validateFetchPopupFeatures(L);
                        const o = (0,
                        S.Ru)(L) ? L.clientGraphics : null;
                        if (!o || 0 === o.length)
                            return [];
                        const n = "scene" === T.layer.type && (0,
                        S.Ru)(T.layer.associatedLayer) ? T.layer.associatedLayer : T.layer;
                        let h = [];
                        "fieldsIndex"in T.layer && (h = (0,
                        H.hL)(T.layer.fieldsIndex, yield(0,
                        C.T)(n, (0,
                        C.D)(T.layer, L)))),
                        yield T.prepareFetchPopupFeatures(h);
                        const A = new Set
                          , D = []
                          , G = [];
                        for (const U of o)
                            (0,
                            H.Q1)(h, U, A) ? G.push(U) : D.push(U);
                        return 0 === G.length ? D : T.whenGraphicAttributes(G, [...A]).catch( () => G).then(U => D.concat(U))
                    })()
                }
            }
            ;
            return P = (0,
            g._)([(0,
            z.$)("esri.views.3d.layers.support.PopupSceneLayerView")], P),
            P
        }
    }
    ,
    33974: (_e, k, t) => {
        t.d(k, {
            z: () => n
        });
        var _ = t(74523)
          , g = t(44701)
          , K = t(90619)
          , S = t(40014)
          , V = t(87524)
          , w = t(99131)
          , W = t(90496)
          , Y = t(53861);
        const z = D => {
            let G = class extends D {
                constructor() {
                    super(...arguments),
                    this._numUpdating = 0,
                    this._asyncUpdateState = new Map
                }
                get updating() {
                    return this._numUpdating > 0
                }
                autoUpdateAsync(U, B) {
                    return function C(D, G) {
                        const B = () => {
                            if (!M || Z)
                                return G();
                            M.clear(),
                            Z = !0;
                            const Q = (0,
                            V.a)(M, G);
                            return Z = !1,
                            Q
                        }
                        ;
                        let M = new Y.r( () => {
                            M && !Z && D(B)
                        }
                        )
                          , Z = !1;
                        return D(B),
                        {
                            remove: () => {
                                M && (M.destroy(),
                                M = null)
                            }
                        }
                    }(R => this._updateAsync(U, R), B)
                }
                _updateAsync(U, B) {
                    var R = this;
                    return (0,
                    _.A)(function*() {
                        if (!R._startAsyncUpdate(U)) {
                            try {
                                const M = yield B();
                                R._set(U, M)
                            } catch {
                                S.A.getLogger(R.declaredClass).warn(`Async update of "${String(U)}" failed. Async update functions should not throw exceptions.`)
                            }
                            R._endAsyncUpdate(U) && R._updateAsync(U, B)
                        }
                    })()
                }
                _startAsyncUpdate(U) {
                    var B;
                    const R = null != (B = this._asyncUpdateState.get(U)) ? B : H.None;
                    return R & H.Updating ? (this._asyncUpdateState.set(U, R | H.Invalidated),
                    !0) : (++this._numUpdating,
                    this._asyncUpdateState.set(U, R | H.Updating),
                    !1)
                }
                _endAsyncUpdate(U) {
                    var B;
                    --this._numUpdating;
                    const R = (null != (B = this._asyncUpdateState.get(U)) ? B : H.None) & ~H.Updating;
                    return R & H.Invalidated ? (this._asyncUpdateState.set(U, R & ~H.Invalidated),
                    !0) : (this._asyncUpdateState.set(U, R),
                    !1)
                }
            }
            ;
            return (0,
            g._)([(0,
            w.MZ)({
                readOnly: !0
            })], G.prototype, "updating", null),
            (0,
            g._)([(0,
            w.MZ)()], G.prototype, "_numUpdating", void 0),
            G = (0,
            g._)([(0,
            W.$)("esri.core.AsyncUpdate")], G),
            G
        }
        ;
        var H, D;
        (D = H || (H = {}))[D.None = 0] = "None",
        D[D.Updating = 1] = "Updating",
        D[D.Invalidated = 2] = "Invalidated";
        let F = class extends (z(K.A)) {
        }
        ;
        F = (0,
        g._)([(0,
        W.$)("esri.core.AsyncUpdate")], F);
        var I = t(27129)
          , P = t(85736)
          , T = (t(17179),
        t(69408),
        t(21745));
        const o = "esri.views.3d.layers.support.SceneLayerViewRequiredFields";
        let n = class extends (z(I.a)) {
            get layer() {
                return this.layerView.layer
            }
            get requiredFields() {
                const {layerView: {layer: {fieldsIndex: D}, definitionExpressionFields: G}, rendererFields: U, labelingFields: B, viewFilterFields: R} = this;
                return (0,
                T.DB)(D, [...(0,
                P.zO)(G, []), ...(0,
                P.zO)(U, []), ...(0,
                P.zO)(B, []), ...(0,
                P.zO)(R, [])])
            }
            constructor(D) {
                super(D)
            }
            initialize() {
                var D = this;
                this.handles.add([this.autoUpdateAsync("rendererFields", (0,
                _.A)(function*() {
                    const {fieldsIndex: G, renderer: U} = D.layer;
                    return U ? h(B => U.collectRequiredFields(B, G)) : null
                })), this.autoUpdateAsync("labelingFields", (0,
                _.A)(function*() {
                    const {layer: G} = D;
                    return G.labelsVisible ? h(U => (0,
                    T.Im)(U, G)) : null
                })), this.autoUpdateAsync("viewFilterFields", () => {
                    const {layer: G, filter: U} = this.layerView;
                    return h(B => (0,
                    T.o)(B, G, U))
                }
                )])
            }
        }
        ;
        function h(D) {
            return A.apply(this, arguments)
        }
        function A() {
            return A = (0,
            _.A)(function*(D) {
                const G = new Set;
                try {
                    return yield D(G),
                    Array.from(G).sort()
                } catch (U) {
                    return S.A.getLogger(o).error(U),
                    null
                }
            }),
            A.apply(this, arguments)
        }
        (0,
        g._)([(0,
        w.MZ)()], n.prototype, "layerView", void 0),
        (0,
        g._)([(0,
        w.MZ)()], n.prototype, "layer", null),
        (0,
        g._)([(0,
        w.MZ)()], n.prototype, "requiredFields", null),
        (0,
        g._)([(0,
        w.MZ)()], n.prototype, "rendererFields", void 0),
        (0,
        g._)([(0,
        w.MZ)()], n.prototype, "labelingFields", void 0),
        (0,
        g._)([(0,
        w.MZ)()], n.prototype, "viewFilterFields", void 0),
        n = (0,
        g._)([(0,
        W.$)(o)], n)
    }
    ,
    51863: (_e, k, t) => {
        t.d(k, {
            p: () => g
        });
        var _ = t(21745);
        function g() {
            return {
                requiredFields: {
                    type: [String],
                    readOnly: !0
                },
                availableFields: {
                    type: [String],
                    readOnly: !0,
                    get: function() {
                        const {layer: K, layer: {fieldsIndex: S}, requiredFields: V} = this;
                        return (0,
                        _.DB)(S, K.outFields ? [...(0,
                        _.hL)(S, K.outFields), ...V] : V)
                    }
                }
            }
        }
    }
    ,
    69118: (_e, k, t) => {
        t.d(k, {
            Lx: () => K,
            sr: () => S
        });
        var _ = t(44624)
          , g = t(8563);
        function K(C, F) {
            return F.push(C.buffer),
            {
                buffer: C.buffer,
                layout: V(C.layout)
            }
        }
        function S(C) {
            return function w(C) {
                const F = (0,
                g.BP)();
                return F.stride = C.stride,
                F.fieldNames = C.fieldNames,
                C.fields.forEach(I => F.fields.set(I[0], {
                    ...I[1],
                    constructor: z(I[1].constructor)
                })),
                F
            }(C.layout).createView(C.buffer)
        }
        function V(C) {
            const F = new Array;
            return C.fields.forEach( (I, P) => {
                const v = {
                    ...I,
                    constructor: Y(I.constructor)
                };
                F.push([P, v])
            }
            ),
            {
                stride: C.stride,
                fields: F,
                fieldNames: C.fieldNames
            }
        }
        const W = [_.Y$, _.gH, _.xs, _.Eq, _.jZ, _.Sx, _.qB, _.si, _.Xm, _.Aj, _.j0, _.E$, _.SL, _.LC, _.eI, _.XP, _.h, _.Yi, _.nS, _.Uz, _.P, _.An, _.H$, _.ml, _.bf, _.D6, _.m8, _.TX, _.Qt, _.mJ, _.Vp, _.E7, _.My, _.UL, _.zD, _.Y4];
        function Y(C) {
            return `${C.ElementType}_${C.ElementCount}`
        }
        function z(C) {
            return H.get(C)
        }
        const H = new Map;
        W.forEach(C => H.set(Y(C), C))
    }
    ,
    44943: (_e, k, t) => {
        t.d(k, {
            C: () => S
        });
        var _ = t(85474)
          , g = t(94301)
          , K = t(72415);
        class S extends g.w {
            constructor(w) {
                super({
                    ...w,
                    constraint: new _.i7(w.targetPoint)
                })
            }
            get hints() {
                return [new K._(this.targetPoint,this.isDraped,this.domain)]
            }
        }
    }
    ,
    65563: (_e, k, t) => {
        t.d(k, {
            $: () => Y,
            p: () => z
        });
        var _ = t(85736)
          , g = t(22644)
          , K = t(39243)
          , S = t(22524)
          , V = t(869)
          , w = t(44943);
        function W({x: H, y: C, z: F}) {
            return (0,
            K.fN)((0,
            g.f)(H, C, F ?? 0))
        }
        function Y(H, C) {
            switch (H.type) {
            case "edge":
                return H.draped ? new S.X({
                    edgeStart: W(H.start),
                    edgeEnd: W(H.end),
                    targetPoint: W(H.target),
                    objectId: H.objectId,
                    getGroundElevation: C
                }) : new V.z({
                    edgeStart: W(H.start),
                    edgeEnd: W(H.end),
                    targetPoint: W(H.target),
                    objectId: H.objectId,
                    isDraped: !1
                });
            case "vertex":
                return new w.C({
                    targetPoint: W(H.target),
                    objectId: H.objectId,
                    isDraped: !1
                })
            }
        }
        function z(H) {
            return (0,
            _.Ru)(H) && "3d" === H.type ? (C, F, I) => H.elevationProvider.getElevation(C, F, I ?? 0, H.spatialReference, "ground") : () => null
        }
    }
    ,
    24635: (_e, k, t) => {
        t.d(k, {
            n: () => z
        });
        var _ = t(74523)
          , K = (t(69584),
        t(66303))
          , S = t(94013)
          , V = t(85736)
          , w = t(65164)
          , W = t(22183)
          , Y = t(91503);
        function z(L=!1, T) {
            if (L) {
                const {elevationInfo: o, alignPointsInFeatures: n, spatialReference: h} = T;
                return new F(o,n,h)
            }
            return new H
        }
        class H {
            alignCandidates(T, o) {
                return (0,
                _.A)(function*() {
                    return T
                })()
            }
            notifyElevationSourceChange() {}
        }
        class F {
            constructor(T, o, n) {
                this._elevationInfo = T,
                this._alignPointsInFeatures = o,
                this.spatialReference = n,
                this._alignmentsCache = new K.A(1024),
                this._cacheVersion = 0,
                this._metersPerVerticalUnit = (0,
                W.G9)(n)
            }
            alignCandidates(T, o) {
                var n = this;
                return (0,
                _.A)(function*() {
                    const h = n._elevationInfo;
                    return (0,
                    V.Ru)(h) && "absolute-height" === h.mode && !h.featureExpressionInfo ? (n._alignAbsoluteElevationCandidates(T, h),
                    T) : n._alignComputedElevationCandidates(T, o)
                })()
            }
            notifyElevationSourceChange() {
                this._alignmentsCache.clear(),
                this._cacheVersion++
            }
            _alignAbsoluteElevationCandidates(T, o) {
                const {offset: n, unit: h} = o;
                if ((0,
                V.$I)(n))
                    return;
                const A = n * ((0,
                Y.Ao)(h ?? "meters") / this._metersPerVerticalUnit);
                for (const D of T)
                    switch (D.type) {
                    case "edge":
                        D.start.z += A,
                        D.end.z += A;
                        continue;
                    case "vertex":
                        D.target.z += A;
                        continue
                    }
            }
            _alignComputedElevationCandidates(T, o) {
                var n = this;
                return (0,
                _.A)(function*() {
                    const h = new Map;
                    for (const Z of T)
                        (0,
                        S.tE)(h, Z.objectId, v).push(Z);
                    const [A,D,G] = n._prepareQuery(h)
                      , U = yield n._alignPointsInFeatures(A, o);
                    if ((0,
                    w.Te)(o),
                    G !== n._cacheVersion)
                        return n._alignComputedElevationCandidates(T, o);
                    n._applyCacheAndResponse(A, U, D);
                    const {drapedObjectIds: B, failedObjectIds: R} = U
                      , M = [];
                    for (const Z of T) {
                        const {objectId: Q} = Z;
                        B.has(Q) && "edge" === Z.type && (Z.draped = !0),
                        R.has(Q) || M.push(Z)
                    }
                    return M
                })()
            }
            _prepareQuery(T) {
                const o = []
                  , n = [];
                for (const [h,A] of T) {
                    const D = [];
                    for (const G of A)
                        this._addToQueriesOrCachedResult(h, G.target, D, n),
                        "edge" === G.type && (this._addToQueriesOrCachedResult(h, G.start, D, n),
                        this._addToQueriesOrCachedResult(h, G.end, D, n));
                    0 !== D.length && o.push({
                        objectId: h,
                        points: D
                    })
                }
                return [o, n, this._cacheVersion]
            }
            _addToQueriesOrCachedResult(T, o, n, h) {
                const A = P(T, o)
                  , D = this._alignmentsCache.get(A);
                (0,
                V.Ru)(D) ? h.push(new I(o,D)) : n.push(o)
            }
            _applyCacheAndResponse(T, {elevations: o, drapedObjectIds: n, failedObjectIds: h}, A) {
                for (const U of A)
                    U.apply();
                let D = 0;
                const G = this._alignmentsCache;
                for (const {objectId: U, points: B} of T) {
                    if (h.has(U)) {
                        D += B.length;
                        continue
                    }
                    const R = !n.has(U);
                    for (const M of B) {
                        const Z = P(U, M)
                          , Q = o[D++];
                        M.z = Q,
                        R && G.put(Z, Q, 1)
                    }
                }
            }
        }
        class I {
            constructor(T, o) {
                this.point = T,
                this.z = o
            }
            apply() {
                this.point.z = this.z
            }
        }
        function P(L, {x: T, y: o, z: n}) {
            return `${L}-${T}-${o}-${n ?? 0}}`
        }
        function v() {
            return []
        }
    }
    ,
    25206: (_e, k, t) => {
        t.d(k, {
            z: () => V
        }),
        t(69584);
        class g {
            filter(F, I) {
                return I
            }
            notifyElevationSourceChange() {}
        }
        class K {
            filter(F, I) {
                const {point: P, distance: v} = F
                  , {z: L} = P;
                if (null == L || 0 === I.length)
                    return I;
                const T = function z(C) {
                    return "number" == typeof C ? {
                        x: C,
                        y: C,
                        z: C
                    } : C
                }(v)
                  , o = this._updateCandidatesTo3D(I, P, T).filter(S);
                return o.sort(H),
                o
            }
            _updateCandidatesTo3D(F, I, P) {
                for (const v of F)
                    switch (v.type) {
                    case "edge":
                        w(v, I, P);
                        continue;
                    case "vertex":
                        Y(v, I, P);
                        continue
                    }
                return F
            }
        }
        function S(C) {
            return C.distance <= 1
        }
        function V(C=!1) {
            return C ? new K : new g
        }
        function w(C, F, {x: I, y: P, z: v}) {
            const {start: L, end: T, target: o} = C;
            C.draped || function W(C, F, I, P) {
                const v = P.x - I.x
                  , L = P.y - I.y
                  , T = P.z - I.z
                  , h = Math.min(1, Math.max(0, ((F.x - I.x) * v + (F.y - I.y) * L + T * (F.z - I.z)) / (v * v + L * L + T * T)))
                  , D = I.y + L * h
                  , G = I.z + T * h;
                C.x = I.x + v * h,
                C.y = D,
                C.z = G
            }(o, F, L, T);
            const n = (F.x - o.x) / I
              , h = (F.y - o.y) / P
              , A = (F.z - o.z) / v;
            C.distance = Math.sqrt(n * n + h * h + A * A)
        }
        function Y(C, F, {x: I, y: P, z: v}) {
            const {target: L} = C
              , T = (F.x - L.x) / I
              , o = (F.y - L.y) / P
              , n = (F.z - L.z) / v
              , h = Math.sqrt(T * T + o * o + n * n);
            C.distance = h
        }
        function H(C, F) {
            return C.distance - F.distance
        }
    }
    ,
    91149: (_e, k, t) => {
        t.d(k, {
            H: () => W
        });
        var _ = t(74523)
          , K = (t(69584),
        t(30702))
          , S = t(66303)
          , V = t(65164)
          , w = t(5983);
        function W(F=!1, I) {
            return F ? new H(I) : new Y
        }
        class Y {
            fetch() {
                return (0,
                _.A)(function*() {
                    return []
                })()
            }
            notifySymbologyChange() {}
        }
        class H {
            constructor(I) {
                this._getSymbologyCandidates = I,
                this._candidatesCache = new S.A(1024),
                this._cacheVersion = 0
            }
            fetch(I, P) {
                var v = this;
                return (0,
                _.A)(function*() {
                    if (0 === I.length)
                        return [];
                    const L = []
                      , T = []
                      , o = v._candidatesCache;
                    for (const U of I) {
                        const B = C(U)
                          , R = o.get(B);
                        if (R)
                            for (const M of R)
                                T.push((0,
                                K.o8)(M));
                        else
                            L.push(U),
                            o.put(B, [], 1)
                    }
                    if (0 === L.length)
                        return T;
                    const n = v._cacheVersion
                      , {candidates: h, sourceCandidateIndices: A} = yield v._getSymbologyCandidates(L, P);
                    if ((0,
                    V.Te)(P),
                    n !== v._cacheVersion)
                        return v.fetch(I, P);
                    const D = []
                      , {length: G} = h;
                    for (let U = 0; U < G; ++U) {
                        const B = h[U]
                          , R = C(L[A[U]])
                          , M = o.get(R);
                        M.push(B),
                        o.put(R, M, M.length),
                        D.push((0,
                        K.o8)(B))
                    }
                    return T.concat(D)
                })()
            }
            notifySymbologyChange() {
                this._candidatesCache.clear(),
                this._cacheVersion++
            }
        }
        function C(F) {
            switch (F.type) {
            case "vertex":
                {
                    var I;
                    const {objectId: L, target: T} = F
                      , o = `${L}-vertex-${T.x}-${T.y}-${null != (I = T.z) ? I : 0}`;
                    return (0,
                    w.Wm)(o).toString()
                }
            case "edge":
                {
                    var P, v;
                    const {objectId: L, start: T, end: o} = F
                      , n = `${L}-edge-${T.x}-${T.y}-${null != (P = T.z) ? P : 0}-to-${o.x}-${o.y}-${null != (v = o.z) ? v : 0}`;
                    return (0,
                    w.Wm)(n).toString()
                }
            default:
                return ""
            }
        }
    }
    ,
    11521: (_e, k, t) => {
        t.r(k),
        t.d(k, {
            default: () => F
        });
        var _ = t(44701)
          , g = t(11602)
          , K = t(58149)
          , S = t(85736)
          , V = t(57540)
          , w = t(99131)
          , z = (t(17179),
        t(69408),
        t(90496))
          , H = t(85954);
        let C = class extends H.A {
            constructor(I) {
                super(I),
                this.type = "group",
                this.layerViews = new g.A
            }
            _allLayerViewVisibility(I) {
                this.layerViews.forEach(P => {
                    P.visible = I
                }
                )
            }
            initialize() {
                this.handles.add([this.layerViews.on("change", I => this._layerViewsChangeHandler(I)), (0,
                V.wB)( () => this.layer.visibilityMode, () => this._applyVisibility( () => this._allLayerViewVisibility(this.visible), () => this._applyExclusiveVisibility(null)), V.OH), (0,
                V.wB)( () => this.visible, I => {
                    this._applyVisibility( () => this._allLayerViewVisibility(I), () => {}
                    )
                }
                , V.OH)], "grouplayerview"),
                this._layerViewsChangeHandler({
                    target: null,
                    added: this.layerViews.toArray(),
                    removed: [],
                    moved: []
                })
            }
            set layerViews(I) {
                this._set("layerViews", (0,
                K.V)(I, this._get("layerViews")))
            }
            get updatingProgress() {
                return 0 === this.layerViews.length ? 1 : this.layerViews.reduce( (I, P) => I + P.updatingProgress, 0) / this.layerViews.length
            }
            isUpdating() {
                return this.layerViews.some(I => I.updating)
            }
            _hasLayerViewVisibleOverrides() {
                return this.layerViews.some(I => I._isOverridden("visible"))
            }
            _findLayerViewForLayer(I) {
                return I && this.layerViews.find(P => P.layer === I)
            }
            _firstVisibleOnLayerOrder() {
                const I = this.layer.layers.find(P => {
                    var v;
                    return !(null == (v = this._findLayerViewForLayer(P)) || !v.visible)
                }
                );
                return I && this._findLayerViewForLayer(I)
            }
            _applyExclusiveVisibility(I) {
                (0,
                S.$I)(I) && (I = this._firstVisibleOnLayerOrder(),
                (0,
                S.$I)(I) && this.layerViews.length > 0 && (I = this._findLayerViewForLayer(this.layer.layers.getItemAt(0)))),
                this.layerViews.forEach(P => {
                    P.visible = P === I
                }
                )
            }
            _layerViewsChangeHandler(I) {
                this.handles.remove("grouplayerview:visible"),
                this.handles.add(this.layerViews.map(v => (0,
                V.wB)( () => v.visible, L => this._applyVisibility( () => {
                    L !== this.visible && (v.visible = this.visible)
                }
                , () => this._applyExclusiveVisibility(L ? v : null)), V.OH)).toArray(), "grouplayerview:visible");
                const P = I.added[I.added.length - 1];
                this._applyVisibility( () => this._allLayerViewVisibility(this.visible), () => this._applyExclusiveVisibility(null != P && P.visible ? P : null))
            }
            _applyVisibility(I, P) {
                var v, L;
                this._hasLayerViewVisibleOverrides() && ("inherited" === (null == (v = this.layer) ? void 0 : v.visibilityMode) ? I() : "exclusive" === (null == (L = this.layer) ? void 0 : L.visibilityMode) && P())
            }
        }
        ;
        (0,
        _._)([(0,
        w.MZ)({
            cast: K.H
        })], C.prototype, "layerViews", null),
        (0,
        _._)([(0,
        w.MZ)({
            readOnly: !0
        })], C.prototype, "updatingProgress", null),
        (0,
        _._)([(0,
        w.MZ)()], C.prototype, "view", void 0),
        C = (0,
        _._)([(0,
        z.$)("esri.views.layers.GroupLayerView")], C);
        const F = C
    }
    ,
    64688: (_e, k, t) => {
        t.d(k, {
            A: () => I
        });
        var _ = t(74523)
          , g = t(44701)
          , K = t(80226)
          , S = t(85736)
          , V = t(99131)
          , Y = (t(17179),
        t(69408),
        t(90496))
          , z = t(12993)
          , H = t(10195)
          , C = t(67525)
          , F = t(42727);
        const I = P => {
            let v = class extends P {
                constructor() {
                    super(...arguments),
                    this.view = null
                }
                fetchPopupFeatures(L, T) {
                    var o = this;
                    return (0,
                    _.A)(function*() {
                        const {layer: n} = o;
                        if (!L)
                            throw new K.A("imagerylayerview:fetchPopupFeatures","Nothing to fetch without area",{
                                layer: n
                            });
                        const {popupEnabled: h} = n
                          , A = (0,
                        F.D)(n, T);
                        if (!h || (0,
                        S.$I)(A))
                            throw new K.A("imagerylayerview:fetchPopupFeatures","Missing required popupTemplate or popupEnabled",{
                                popupEnabled: h,
                                popupTemplate: A
                            });
                        const D = yield A.getRequiredFields()
                          , G = new C.A;
                        G.timeExtent = o.timeExtent,
                        G.geometry = L,
                        G.outFields = D,
                        G.outSpatialReference = L.spatialReference;
                        const {resolution: U, spatialReference: B} = o.view
                          , R = "2d" === o.view.type ? new z.A(U,U,B) : new z.A(.5 * U,.5 * U,B)
                          , {returnTopmostRaster: M, showNoDataRecords: Z} = A.layerOptions || {
                            returnTopmostRaster: !0,
                            showNoDataRecords: !1
                        }
                          , Q = {
                            returnDomainValues: !0,
                            returnTopmostRaster: M,
                            pixelSize: R,
                            showNoDataRecords: Z,
                            signal: (0,
                            S.Ru)(T) ? T.signal : null
                        };
                        return n.queryVisibleRasters(G, Q).then(se => se)
                    })()
                }
                canResume() {
                    var L;
                    return !(!super.canResume() || null != (L = this.timeExtent) && L.isEmpty)
                }
            }
            ;
            return (0,
            g._)([(0,
            V.MZ)()], v.prototype, "layer", void 0),
            (0,
            g._)([(0,
            V.MZ)()], v.prototype, "suspended", void 0),
            (0,
            g._)([(0,
            V.MZ)(H.ui)], v.prototype, "timeExtent", void 0),
            (0,
            g._)([(0,
            V.MZ)()], v.prototype, "view", void 0),
            v = (0,
            g._)([(0,
            Y.$)("esri.views.layers.ImageryLayerView")], v),
            v
        }
    }
    ,
    97436: (_e, k, t) => {
        t.d(k, {
            A: () => I
        });
        var _ = t(74523)
          , g = t(44701)
          , K = t(18986)
          , S = t(80226)
          , V = t(85736)
          , w = t(99131)
          , z = (t(17179),
        t(69408),
        t(90496))
          , H = t(10195)
          , C = t(23250)
          , F = t(42727);
        const I = P => {
            let v = class extends P {
                constructor() {
                    super(...arguments),
                    this._rasterFieldPrefix = "Raster.",
                    this.layer = null,
                    this.view = null,
                    this.tileInfo = null
                }
                get fullExtent() {
                    return this._getfullExtent()
                }
                _getfullExtent() {
                    return this.projectFullExtent(this.view.spatialReference)
                }
                get hasTilingEffects() {
                    return this.layer.renderer && "dynamicRangeAdjustment"in this.layer.renderer && this.layer.renderer.dynamicRangeAdjustment
                }
                get datumTransformation() {
                    return (0,
                    C.vI)((0,
                    V.oA)(this.layer.fullExtent), this.view.spatialReference, !0)
                }
                supportsSpatialReference(L) {
                    return !!this.projectFullExtent(L)
                }
                projectFullExtent(L) {
                    const T = (0,
                    V.oA)(this.layer.fullExtent)
                      , o = (0,
                    C.vI)(T, L, !1);
                    return (0,
                    C._l)(T, L, o)
                }
                fetchPopupFeatures(L, T) {
                    var o = this;
                    return (0,
                    _.A)(function*() {
                        const {layer: n} = o;
                        if (!L)
                            throw new S.A("imageryTileLayerView:fetchPopupFeatures","Nothing to fetch without area",{
                                layer: n
                            });
                        const {popupEnabled: h} = n
                          , A = (0,
                        F.D)(n, T);
                        if (!h || (0,
                        V.$I)(A))
                            throw new S.A("imageryTileLayerView:fetchPopupFeatures","Missing required popupTemplate or popupEnabled",{
                                popupEnabled: h,
                                popupTemplate: A
                            });
                        const D = []
                          , {value: G, magdirValue: U} = yield n.identify(L, {
                            timeExtent: o.timeExtent
                        });
                        let B = "";
                        if (G && G.length) {
                            B = "imagery-tile" === n.type && n.hasStandardTime() && null != G[0] ? G.map(se => n.getStandardTimeValue(se)).join(", ") : G.join(", ");
                            const R = {
                                ObjectId: 0
                            };
                            R["Raster.ServicePixelValue"] = B;
                            const M = n.rasterInfo.attributeTable;
                            if ((0,
                            V.Ru)(M)) {
                                const {fields: se, features: J} = M
                                  , q = se.find( ({name: N}) => "value" === N.toLowerCase())
                                  , X = q ? J.find(N => String(N.attributes[q.name]) === B) : null;
                                if (X)
                                    for (const N in X.attributes)
                                        X.attributes.hasOwnProperty(N) && (R[o._rasterFieldPrefix + N] = X.attributes[N])
                            }
                            const Z = n.rasterInfo.dataType;
                            "vector-magdir" !== Z && "vector-uv" !== Z || (R["Raster.Magnitude"] = U?.[0],
                            R["Raster.Direction"] = U?.[1]);
                            const Q = new K.A(o.fullExtent.clone(),null,R);
                            Q.layer = n,
                            Q.sourceLayer = Q.layer,
                            D.push(Q)
                        }
                        return D
                    })()
                }
            }
            ;
            return (0,
            g._)([(0,
            w.MZ)()], v.prototype, "layer", void 0),
            (0,
            g._)([(0,
            w.MZ)(H.ui)], v.prototype, "timeExtent", void 0),
            (0,
            g._)([(0,
            w.MZ)()], v.prototype, "view", void 0),
            (0,
            g._)([(0,
            w.MZ)()], v.prototype, "fullExtent", null),
            (0,
            g._)([(0,
            w.MZ)()], v.prototype, "tileInfo", void 0),
            (0,
            g._)([(0,
            w.MZ)({
                readOnly: !0
            })], v.prototype, "hasTilingEffects", null),
            (0,
            g._)([(0,
            w.MZ)()], v.prototype, "datumTransformation", null),
            v = (0,
            g._)([(0,
            z.$)("esri.views.layers.ImageryTileLayerView")], v),
            v
        }
    }
    ,
    81531: (_e, k, t) => {
        t.d(k, {
            A: () => Y
        });
        var _ = t(44701)
          , g = t(99131)
          , V = (t(17179),
        t(69408),
        t(90496))
          , w = t(10195)
          , W = t(39086);
        const Y = z => {
            let H = class extends z {
                initialize() {
                    this.exportImageParameters = new W.g({
                        layer: this.layer
                    })
                }
                destroy() {
                    this.exportImageParameters.destroy(),
                    this.exportImageParameters = null
                }
                get floors() {
                    var C, F;
                    return null != (C = null == (F = this.view) ? void 0 : F.floors) ? C : null
                }
                get exportImageVersion() {
                    var C;
                    return null != (C = this.exportImageParameters) && C.commitProperty("version"),
                    this.commitProperty("timeExtent"),
                    this.commitProperty("floors"),
                    (this._get("exportImageVersion") || 0) + 1
                }
                canResume() {
                    var C;
                    return !(!super.canResume() || null != (C = this.timeExtent) && C.isEmpty)
                }
            }
            ;
            return (0,
            _._)([(0,
            g.MZ)()], H.prototype, "exportImageParameters", void 0),
            (0,
            _._)([(0,
            g.MZ)({
                readOnly: !0
            })], H.prototype, "floors", null),
            (0,
            _._)([(0,
            g.MZ)({
                readOnly: !0
            })], H.prototype, "exportImageVersion", null),
            (0,
            _._)([(0,
            g.MZ)()], H.prototype, "layer", void 0),
            (0,
            _._)([(0,
            g.MZ)()], H.prototype, "suspended", void 0),
            (0,
            _._)([(0,
            g.MZ)(w.ui)], H.prototype, "timeExtent", void 0),
            H = (0,
            _._)([(0,
            V.$)("esri.views.layers.MapImageLayerView")], H),
            H
        }
    }
    ,
    23011: (_e, k, t) => {
        t.d(k, {
            A: () => w
        });
        var _ = t(44701)
          , g = t(99131)
          , V = (t(17179),
        t(69408),
        t(90496));
        const w = W => {
            let Y = class extends W {
                get availableFields() {
                    return this.layer.fieldsIndex.fields.map(z => z.name)
                }
            }
            ;
            return (0,
            _._)([(0,
            g.MZ)()], Y.prototype, "layer", void 0),
            (0,
            _._)([(0,
            g.MZ)({
                readOnly: !0
            })], Y.prototype, "availableFields", null),
            Y = (0,
            _._)([(0,
            V.$)("esri.views.layers.OGCFeatureLayerView")], Y),
            Y
        }
    }
    ,
    13108: (_e, k, t) => {
        t.d(k, {
            A: () => L
        });
        var _ = t(74523)
          , g = t(44701)
          , K = t(40014)
          , S = t(85736)
          , V = t(41694)
          , w = t(57540)
          , W = t(99131)
          , H = (t(17179),
        t(69408),
        t(90496))
          , C = t(52498)
          , F = t(85954);
        const I = "esri.views.layers.SceneLayerView"
          , P = K.A.getLogger(I);
        let v = class extends F.A {
            constructor() {
                super(...arguments),
                this.layer = null,
                this.filter = null,
                this._geometryEngine = null,
                this._projectionEngineLoaded = !1
            }
            get availableFields() {
                return []
            }
            get maximumNumberOfFeatures() {
                return 0
            }
            set maximumNumberOfFeatures(T) {
                throw new Error("Not implemented")
            }
            get maximumNumberOfFeaturesExceeded() {
                return !1
            }
            get layerFilter() {
                return (0,
                V.w$)(this._layerFilter)
            }
            get _layerFilter() {
                const T = this.layer.filter;
                if ((0,
                S.$I)(T) || T.geometries.length < 1)
                    return null;
                const o = this._geometryEngine;
                if ((0,
                S.$I)(o) || !this._projectionEngineLoaded && this._filterNeedsProjectionEngine)
                    return V.J7;
                const n = T.geometries.getItemAt(0).spatialReference
                  , h = T.geometries.toArray().map(U => {
                    try {
                        U = o.simplify(U)
                    } catch {
                        return P.warnOncePerTick("Failed to simplify scene filter mask polygon. Polygon will be ignored."),
                        null
                    }
                    if (null == U)
                        return null;
                    if (U.spatialReference.equals(n))
                        return U;
                    try {
                        return (0,
                        C.Cv)(U, n)
                    } catch {
                        return P.warnOncePerTick("Failed to project scene filter mask polygon. Polygon will be ignored."),
                        null
                    }
                }
                ).filter(S.Ru).sort( (U, B) => U.extent.xmin - B.extent.xmin)
                  , A = new Set
                  , D = new Array
                  , G = new Array;
                for (let U of h) {
                    const B = U.extent.xmin;
                    if (D.length = 0,
                    A.forEach(R => {
                        if (B >= R.extent.xmax)
                            return G.push(R),
                            void A.delete(R);
                        U.extent.ymin <= R.extent.ymax && U.extent.ymax >= R.extent.ymin && o.intersects(U, R) && D.push(R)
                    }
                    ),
                    D.length > 0) {
                        D.push(U);
                        try {
                            U = o.union(D)
                        } catch {
                            P.warnOncePerTick("Failed to unify filter mask polygons. Polygon will be ignored.");
                            continue
                        }
                        D.pop(),
                        D.forEach(R => A.delete(R))
                    }
                    A.add(U)
                }
                return A.forEach(U => G.push(U)),
                G.length > 0 ? {
                    spatialRelationship: T.spatialRelationship,
                    geometries: G
                } : null
            }
            get _filterNeedsProjectionEngine() {
                const T = this.layer.filter;
                if ((0,
                S.$I)(T) || T.geometries.length <= 1)
                    return !1;
                const o = T.geometries.getItemAt(0).spatialReference;
                return T.geometries.some( ({spatialReference: n}) => !n.equals(o) && !(0,
                C._q)(n, o))
            }
            get layerFilterUpdating() {
                return (0,
                V.DS)(this._layerFilter)
            }
            initialize() {
                var T = this;
                (0,
                w.C_)( () => !this._geometryEngine && (0,
                S.Ru)(this.layer.filter) && this.layer.filter.geometries.length).then((0,
                _.A)(function*() {
                    return T._geometryEngine = yield Promise.all([t.e(4186), t.e(6361)]).then(t.bind(t, 46361))
                })),
                this._projectionEngineLoaded = (0,
                C.s1)(),
                (0,
                w.C_)( () => !this._projectionEngineLoaded && this._filterNeedsProjectionEngine).then((0,
                _.A)(function*() {
                    yield(0,
                    C.Hh)(),
                    T._projectionEngineLoaded = !0
                }))
            }
            highlight(T) {
                throw new Error("Not implemented")
            }
            queryFeatures(T, o) {
                throw new Error("Not implemented")
            }
            queryObjectIds(T, o) {
                throw new Error("Not implemented")
            }
            queryFeatureCount(T, o) {
                throw new Error("Not implemented")
            }
            createQuery() {
                throw new Error("Not implemented")
            }
            queryExtent(T, o) {
                throw new Error("Not implemented")
            }
        }
        ;
        (0,
        g._)([(0,
        W.MZ)()], v.prototype, "layer", void 0),
        (0,
        g._)([(0,
        W.MZ)()], v.prototype, "availableFields", null),
        (0,
        g._)([(0,
        W.MZ)()], v.prototype, "maximumNumberOfFeatures", null),
        (0,
        g._)([(0,
        W.MZ)({
            readOnly: !0
        })], v.prototype, "maximumNumberOfFeaturesExceeded", null),
        (0,
        g._)([(0,
        W.MZ)()], v.prototype, "filter", void 0),
        (0,
        g._)([(0,
        W.MZ)({
            readOnly: !0
        })], v.prototype, "layerFilter", null),
        (0,
        g._)([(0,
        W.MZ)({
            readOnly: !0
        })], v.prototype, "_layerFilter", null),
        (0,
        g._)([(0,
        W.MZ)()], v.prototype, "_geometryEngine", void 0),
        (0,
        g._)([(0,
        W.MZ)()], v.prototype, "_projectionEngineLoaded", void 0),
        (0,
        g._)([(0,
        W.MZ)()], v.prototype, "_filterNeedsProjectionEngine", null),
        (0,
        g._)([(0,
        W.MZ)()], v.prototype, "layerFilterUpdating", null),
        v = (0,
        g._)([(0,
        H.$)(I)], v);
        const L = v
    }
    ,
    72515: (_e, k, t) => {
        t.d(k, {
            A: () => H
        });
        var _ = t(44701)
          , g = t(80226)
          , K = t(85736)
          , S = t(99131)
          , W = (t(17179),
        t(69408),
        t(90496))
          , Y = t(10195)
          , z = t(72357);
        const H = C => {
            let F = class extends C {
                initialize() {
                    this.exportImageParameters = new z.r({
                        layer: this.layer
                    })
                }
                destroy() {
                    this.exportImageParameters = (0,
                    K.pR)(this.exportImageParameters)
                }
                get exportImageVersion() {
                    var I;
                    return null != (I = this.exportImageParameters) && I.commitProperty("version"),
                    this.commitProperty("timeExtent"),
                    (this._get("exportImageVersion") || 0) + 1
                }
                fetchPopupFeatures(I) {
                    const {layer: P} = this;
                    if (!I)
                        return Promise.reject(new g.A("wmslayerview:fetchPopupFeatures","Nothing to fetch without area",{
                            layer: P
                        }));
                    const {popupEnabled: v} = P;
                    if (!v)
                        return Promise.reject(new g.A("wmslayerview:fetchPopupFeatures","popupEnabled should be true",{
                            popupEnabled: v
                        }));
                    const L = this.createFetchPopupFeaturesQuery(I);
                    if (!L)
                        return Promise.resolve([]);
                    const {extent: T, width: o, height: n, x: h, y: A} = L;
                    if (!(T && o && n))
                        throw new g.A("wmslayerview:fetchPopupFeatures","WMSLayer does not support fetching features.",{
                            extent: T,
                            width: o,
                            height: n
                        });
                    return P.fetchFeatureInfo(T, o, n, h, A)
                }
            }
            ;
            return (0,
            _._)([(0,
            S.MZ)()], F.prototype, "exportImageParameters", void 0),
            (0,
            _._)([(0,
            S.MZ)({
                readOnly: !0
            })], F.prototype, "exportImageVersion", null),
            (0,
            _._)([(0,
            S.MZ)()], F.prototype, "layer", void 0),
            (0,
            _._)([(0,
            S.MZ)(Y.ui)], F.prototype, "timeExtent", void 0),
            F = (0,
            _._)([(0,
            W.$)("esri.layers.mixins.WMSLayerView")], F),
            F
        }
    }
    ,
    78149: (_e, k, t) => {
        t.d(k, {
            u: () => S
        });
        var _ = t(74523)
          , g = t(65164)
          , K = t(37053);
        function S(w) {
            return V.apply(this, arguments)
        }
        function V() {
            return (V = (0,
            _.A)(function*(w) {
                const W = t.e(7709).then(t.bind(t, 97709))
                  , Y = t.e(7127).then(t.bind(t, 97127))
                  , z = (0,
                K.D)((yield W).default, {
                    signal: w
                })
                  , H = (0,
                K.D)((yield Y).default, {
                    signal: w
                })
                  , C = {
                    mask: yield z,
                    overlay: yield H
                };
                return (0,
                g.Te)(w),
                C
            })).apply(this, arguments)
        }
    }
    ,
    67864: (_e, k, t) => {
        t.d(k, {
            E: () => L
        });
        var _ = t(44701)
          , g = t(48069)
          , K = t(18986)
          , S = t(90619)
          , V = t(92455)
          , w = t(85736)
          , W = t(99131)
          , H = (t(17179),
        t(69408),
        t(90496))
          , C = t(65037)
          , F = t(54025)
          , I = t(56345)
          , P = t(92448);
        const v = [[0, 179, 255], [117, 62, 128], [0, 104, 255], [215, 189, 166], [32, 0, 193], [98, 162, 206], [102, 112, 129], [52, 125, 0], [142, 118, 246], [138, 83, 0], [92, 122, 255], [122, 55, 83], [0, 142, 255], [81, 40, 179], [0, 200, 244], [13, 24, 127], [0, 170, 147], [19, 58, 241], [22, 44, 35]];
        let L = class extends S.A {
            constructor(T) {
                super(T),
                this.updating = !1,
                this.enablePolygons = !0,
                this.enableLabels = !0,
                this._polygons = new Map,
                this._labels = new Map,
                this._enabled = !0
            }
            initialize() {
                this._symbols = v.map(T => new F.A({
                    color: [T[0], T[1], T[2], .6],
                    outline: {
                        color: "black",
                        width: 1
                    }
                })),
                this.update()
            }
            destroy() {
                this._enabled = !1,
                this.clear()
            }
            get enabled() {
                return this._enabled
            }
            set enabled(T) {
                this._enabled !== T && (this._enabled = T,
                this.update())
            }
            update() {
                if (!this._enabled)
                    return void this.clear();
                const o = this.getTiles()
                  , n = new Array
                  , h = new Set(this._labels.keys());
                o.forEach( (D, G) => {
                    const U = D.lij.toString();
                    h.delete(U);
                    const B = D.lij[0]
                      , R = D.geometry;
                    if (this.enablePolygons && !this._polygons.has(U)) {
                        const M = new K.A({
                            geometry: R,
                            symbol: this._symbols[B % this._symbols.length]
                        });
                        this._polygons.set(U, M),
                        n.push(M)
                    }
                    if (this.enableLabels) {
                        const M = (D => {
                            if ((0,
                            w.Ru)(D.label))
                                return D.label;
                            let G = D.lij.toString();
                            return (0,
                            w.Ru)(D.loadPriority) && (G += ` (${D.loadPriority})`),
                            G
                        }
                        )(D)
                          , Z = G / (o.length - 1)
                          , Q = (0,
                        V.Cc)(0, 200, Z)
                          , se = (0,
                        V.Cc)(20, 6, Z) / .75
                          , J = (0,
                        w.Ru)(D.loadPriority) && D.loadPriority >= o.length
                          , q = new g.A([Q, J ? 0 : Q, J ? 0 : Q])
                          , X = "3d" === this.view.type ? () => new C.A({
                            verticalOffset: {
                                screenLength: 40 / .75
                            },
                            callout: {
                                type: "line",
                                color: "white",
                                border: {
                                    color: "black"
                                }
                            },
                            symbolLayers: [new P.A({
                                text: M,
                                halo: {
                                    color: "white",
                                    size: 1 / .75
                                },
                                material: {
                                    color: q
                                },
                                size: se
                            })]
                        }) : () => new I.A({
                            text: M,
                            haloColor: "white",
                            haloSize: 1 / .75,
                            color: q,
                            size: se
                        })
                          , N = this._labels.get(U);
                        if (N) {
                            const $ = X();
                            ((0,
                            w.$I)(N.symbol) || JSON.stringify($) !== JSON.stringify(N.symbol)) && (N.symbol = $)
                        } else {
                            const $ = new K.A({
                                geometry: R.extent.center,
                                symbol: X()
                            });
                            this._labels.set(U, $),
                            n.push($)
                        }
                    }
                }
                );
                const A = new Array;
                h.forEach(D => {
                    const G = this._polygons.get(D);
                    null != G && (A.push(G),
                    this._polygons.delete(D));
                    const U = this._labels.get(D);
                    null != U && (A.push(U),
                    this._labels.delete(D))
                }
                ),
                this.view.graphics.removeMany(A),
                this.view.graphics.addMany(n)
            }
            clear() {
                this.view.graphics.removeMany(Array.from(this._polygons.values())),
                this.view.graphics.removeMany(Array.from(this._labels.values())),
                this._polygons.clear(),
                this._labels.clear()
            }
        }
        ;
        (0,
        _._)([(0,
        W.MZ)({
            constructOnly: !0
        })], L.prototype, "view", void 0),
        (0,
        _._)([(0,
        W.MZ)({
            readOnly: !0
        })], L.prototype, "updating", void 0),
        (0,
        _._)([(0,
        W.MZ)()], L.prototype, "enabled", null),
        L = (0,
        _._)([(0,
        H.$)("esri.views.support.TileTreeDebugger")], L)
    }
    ,
    2992: (_e, k, t) => {
        function _(K) {
            const {options: S, value: V} = K;
            return "number" == typeof S[V]
        }
        function g(K) {
            let S = "";
            for (const V in K) {
                const w = K[V];
                if ("boolean" == typeof w)
                    w && (S += `#define ${V}\n`);
                else if ("number" == typeof w)
                    S += `#define ${V} ${w.toFixed()}\n`;
                else if ("object" == typeof w)
                    if (_(w)) {
                        const {value: W, options: Y, namespace: z} = w
                          , H = z ? `${z}_` : "";
                        for (const C in Y)
                            S += `#define ${H}${C} ${Y[C].toFixed()}\n`;
                        S += `#define ${V} ${H}${W}\n`
                    } else {
                        const W = w.options;
                        let Y = 0;
                        for (const z in W)
                            S += `#define ${W[z]} ${(Y++).toFixed()}\n`;
                        S += `#define ${V} ${W[w.value]}\n`
                    }
            }
            return S
        }
        t.d(k, {
            I: () => g
        })
    }
    ,
    15039: (_e, k, t) => {
        t.d(k, {
            EO: () => v,
            OI: () => I,
            Pp: () => H,
            Qg: () => C,
            VC: () => F,
            b4: () => w,
            hB: () => L,
            hE: () => Y,
            kc: () => W,
            xV: () => z,
            z: () => P
        });
        var _ = t(85736)
          , g = t(45565)
          , K = t(54215)
          , S = t(59587)
          , V = t(49274);
        function w(o, n, h="nearest", A=!1) {
            var D;
            const G = !(A && "u8" === n.pixelType)
              , U = G ? S.ld.FLOAT : S.ld.UNSIGNED_BYTE
              , B = null == n.pixels || 0 === n.pixels.length ? null : G ? n.getAsRGBAFloat() : n.getAsRGBA()
              , R = null == (D = o.capabilities.textureFloat) ? void 0 : D.textureFloatLinear;
            return new V.g(o,{
                width: n.width,
                height: n.height,
                target: S.Ap.TEXTURE_2D,
                pixelFormat: S.Ab.RGBA,
                internalFormat: o.type === K.EL.WEBGL2 && G ? S.H0.RGBA32F : S.Ab.RGBA,
                samplingMode: !R || "bilinear" !== h && "cubic" !== h ? S.Cj.NEAREST : S.Cj.LINEAR,
                dataType: U,
                wrapMode: S.pF.CLAMP_TO_EDGE,
                flipped: !1
            },B)
        }
        function W(o, n) {
            const {spacing: h, offsets: A, coefficients: D, size: [G,U]} = n
              , B = h[0] > 1
              , R = {
                width: B ? 4 * G : G,
                height: U,
                target: S.Ap.TEXTURE_2D,
                pixelFormat: S.Ab.RGBA,
                internalFormat: o.type === K.EL.WEBGL2 ? S.H0.RGBA32F : S.Ab.RGBA,
                dataType: S.ld.FLOAT,
                samplingMode: S.Cj.NEAREST,
                wrapMode: S.pF.CLAMP_TO_EDGE,
                flipped: !1
            }
              , M = new Float32Array(B ? G * U * 16 : 2 * A.length);
            if (B && null != D)
                for (let Z = 0, Q = 0; Z < D.length; Z++)
                    M[Q++] = D[Z],
                    Z % 3 == 2 && (M[Q++] = 1);
            else
                for (let Z = 0; Z < U; Z++)
                    for (let Q = 0; Q < G; Q++) {
                        const se = 4 * (Z * G + Q)
                          , J = 2 * (Q * U + Z);
                        M[se] = A[J],
                        M[se + 1] = A[J + 1],
                        M[se + 3] = -1 === A[J] ? 0 : 1
                    }
            return new V.g(o,R,M)
        }
        function Y(o, n) {
            return new V.g(o,{
                width: n.length / 4,
                height: 1,
                target: S.Ap.TEXTURE_2D,
                pixelFormat: S.Ab.RGBA,
                internalFormat: S.Ab.RGBA,
                dataType: S.ld.UNSIGNED_BYTE,
                samplingMode: S.Cj.NEAREST,
                wrapMode: S.pF.CLAMP_TO_EDGE,
                flipped: !1
            },n)
        }
        function z(o, n, h, A=1, D=!0) {
            return {
                u_flipY: D,
                u_applyTransform: !!o,
                u_opacity: A,
                u_transformSpacing: o ? o.spacing : g.Z,
                u_transformGridSize: o ? o.size : g.Z,
                u_targetImageSize: n,
                u_srcImageSize: h
            }
        }
        function H(o, n) {
            return {
                u_colormapOffset: n || 0,
                u_colormapMaxIndex: o ? o.length / 4 - 1 : 0
            }
        }
        function C(o, n) {
            return {
                u_scale: o,
                u_offset: n
            }
        }
        function F(o) {
            return {
                u_bandCount: o.bandCount,
                u_minOutput: o.outMin,
                u_maxOutput: o.outMax,
                u_minCutOff: o.minCutOff,
                u_maxCutOff: o.maxCutOff,
                u_factor: o.factor,
                u_useGamma: o.useGamma,
                u_gamma: o.gamma,
                u_gammaCorrection: o.gammaCorrection
            }
        }
        function I(o) {
            return {
                u_hillshadeType: o.hillshadeType,
                u_sinZcosAs: o.sinZcosAs,
                u_sinZsinAs: o.sinZsinAs,
                u_cosZs: o.cosZs,
                u_weights: o.weights,
                u_factor: o.factor,
                u_minValue: o.minValue,
                u_maxValue: o.maxValue
            }
        }
        function P(o, n) {
            const h = o.gl
              , A = n.glName
              , D = new Map;
            if ((0,
            _.$I)(A))
                return D;
            const G = h.getProgramParameter(A, h.ACTIVE_UNIFORMS);
            let U;
            for (let B = 0; B < G; B++)
                U = h.getActiveUniform(A, B),
                U && D.set(U.name, {
                    location: h.getUniformLocation(A, U.name),
                    info: U
                });
            return D
        }
        function v(o, n, h) {
            Object.keys(h).forEach(A => {
                const D = n.get(A) || n.get(A + "[0]");
                D && function T(o, n, h, A) {
                    if (null === A || null == h)
                        return !1;
                    const {info: D} = A;
                    switch (D.type) {
                    case S.xV.FLOAT:
                        D.size > 1 ? o.setUniform1fv(n, h) : o.setUniform1f(n, h);
                        break;
                    case S.xV.FLOAT_VEC2:
                        o.setUniform2fv(n, h);
                        break;
                    case S.xV.FLOAT_VEC3:
                        o.setUniform3fv(n, h);
                        break;
                    case S.xV.FLOAT_VEC4:
                        o.setUniform4fv(n, h);
                        break;
                    case S.xV.FLOAT_MAT3:
                        o.setUniformMatrix3fv(n, h);
                        break;
                    case S.xV.FLOAT_MAT4:
                        o.setUniformMatrix4fv(n, h);
                        break;
                    case S.xV.INT:
                        D.size > 1 ? o.setUniform1iv(n, h) : o.setUniform1i(n, h);
                        break;
                    case S.xV.BOOL:
                        o.setUniform1i(n, h ? 1 : 0);
                        break;
                    case S.xV.INT_VEC2:
                    case S.xV.BOOL_VEC2:
                        o.setUniform2iv(n, h);
                        break;
                    case S.xV.INT_VEC3:
                    case S.xV.BOOL_VEC3:
                        o.setUniform3iv(n, h);
                        break;
                    case S.xV.INT_VEC4:
                    case S.xV.BOOL_VEC4:
                        o.setUniform4iv(n, h);
                        break;
                    default:
                        return !1
                    }
                }(o, A, h[A], D)
            }
            )
        }
        function L(o, n, h, A) {
            h.length === A.length && (A.some(D => null == D) || h.some(D => null == D) || h.forEach( (D, G) => {
                n.setUniform1i(D, G),
                o.bindTexture(A[G], G)
            }
            ))
        }
    }
    ,
    69209: (_e, k, t) => {
        t.d(k, {
            d: () => z
        });
        var _ = t(74523)
          , g = t(10042)
          , K = t(34493)
          , S = t(63408)
          , V = t(83648);
        const Y = (0,
        g.w$)(class extends g.wt {
            constructor() {
                super(),
                this.__registerHost(),
                this.__attachShadow(),
                this.loading = !1,
                this.messages = void 0,
                this.messageOverrides = void 0,
                this.defaultMessages = void 0,
                this.effectiveLocale = ""
            }
            onMessagesChange() {}
            effectiveLocaleChange() {
                (0,
                S.u)(this, this.effectiveLocale)
            }
            connectedCallback() {
                (0,
                K.c)(this),
                (0,
                S.c)(this)
            }
            componentWillLoad() {
                var H = this;
                return (0,
                _.A)(function*() {
                    yield(0,
                    S.s)(H)
                })()
            }
            disconnectedCallback() {
                (0,
                K.d)(this),
                (0,
                S.d)(this)
            }
            render() {
                const {el: H, loading: C, messages: F} = this
                  , I = H.innerHTML.trim().length > 0
                  , P = C ? (0,
                g.h)("calcite-loader", {
                    label: F.loading
                }) : null
                  , v = I ? (0,
                g.h)("div", {
                    class: "content"
                }, (0,
                g.h)("slot", null)) : null;
                return (0,
                g.h)("div", {
                    class: "scrim"
                }, P, v)
            }
            static get assetsDirs() {
                return ["assets"]
            }
            get el() {
                return this
            }
            static get watchers() {
                return {
                    messageOverrides: ["onMessagesChange"],
                    effectiveLocale: ["effectiveLocaleChange"]
                }
            }
            static get style() {
                return "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host{position:absolute;inset:0px;z-index:700;display:flex;block-size:100%;inline-size:100%;flex-direction:column;align-items:stretch}@keyframes calcite-scrim-fade-in{0%{--tw-bg-opacity:0}100%{--tw-text-opacity:1}}.scrim{position:absolute;inset:0px;display:flex;flex-direction:column;align-content:center;align-items:center;justify-content:center;overflow:hidden;animation:calcite-scrim-fade-in var(--calcite-internal-animation-timing-medium) ease-in-out;background-color:var(--calcite-scrim-background, var(--calcite-scrim-background-internal))}.content{padding:1rem}"
            }
        }
        , [1, "calcite-scrim", {
            loading: [516],
            messages: [1040],
            messageOverrides: [1040],
            defaultMessages: [32],
            effectiveLocale: [32]
        }]);
        function z() {
            typeof customElements > "u" || ["calcite-scrim", "calcite-loader"].forEach(C => {
                switch (C) {
                case "calcite-scrim":
                    customElements.get(C) || customElements.define(C, Y);
                    break;
                case "calcite-loader":
                    customElements.get(C) || (0,
                    V.d)()
                }
            }
            )
        }
        z()
    }
    ,
    5765: (_e, k, t) => {
        t.d(k, {
            C: () => g,
            I: () => V,
            M: () => S,
            S: () => K,
            a: () => H,
            g: () => Y,
            u: () => z
        });
        var _ = t(10042);
        const g = {
            container: "container",
            containerBorderSelected: "container--border-selected",
            containerBorderUnselected: "container--border-unselected",
            contentContainer: "content-container",
            contentContainerSelectable: "content-container--selectable",
            contentContainerHasCenterContent: "content-container--has-center-content",
            nestedContainer: "nested-container",
            nestedContainerHidden: "nested-container--hidden",
            content: "content",
            customContent: "custom-content",
            actionsStart: "actions-start",
            contentStart: "content-start",
            label: "label",
            description: "description",
            contentEnd: "content-end",
            actionsEnd: "actions-end",
            selectionContainer: "selection-container",
            openContainer: "open-container"
        }
          , K = {
            actionsStart: "actions-start",
            contentStart: "content-start",
            content: "content",
            contentEnd: "content-end",
            actionsEnd: "actions-end"
        }
          , S = 5
          , V = {
            selectedMultiple: "check-circle-f",
            selectedSingle: "circle-f",
            unselected: "blank",
            closedLTR: "caret-right",
            closedRTL: "caret-left",
            open: "caret-down",
            blank: "blank"
        }
          , w = "calcite-list-item-group"
          , W = "calcite-list-item";
        function Y(C) {
            const F = C.target.assignedElements({
                flatten: !0
            });
            return [...F.filter(v => v?.matches(w)).map(v => Array.from(v.querySelectorAll(W))).reduce( (v, L) => [...v, ...L], []), ...F.filter(v => v?.matches(W))]
        }
        function z(C) {
            C.forEach(F => {
                F.setPosition = C.indexOf(F) + 1,
                F.setSize = C.length
            }
            )
        }
        function H(C, F=!1) {
            return _.L2.isBrowser ? document.evaluate(F ? "ancestor::calcite-list-item | ancestor::calcite-list-item-group" : "ancestor::calcite-list-item", C, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null).snapshotLength : 0
        }
    }
}]);

