import {i as e, n as t, t as n} from "./rolldown-runtime-Dd_uD5pT.js";
import {B as r, a as i, h as a, i as o, l as s, n as c} from "./AccountProvider-BXmG3VwF.js";
import {A as l, B as u, C as d, D as f, E as p, F as m, I as h, L as g, M as _, N as v, O as y, P as b, R as x, S, T as C, _ as w, a as T, b as E, d as D, f as O, g as k, h as A, i as j, j as M, k as N, m as ee, o as te, p as P, r as F, s as ne, t as re, u as ie, v as ae, w as oe, x as se, y as I, z as ce} from "./AccountControl-BjyFqWHo.js";
import {T as le, n as ue} from "./index-dAyLOZ_j.js";
import {a as de, i as L, n as fe, o as pe, r as me} from "./input-BzwlD5Ye.js";
import {_ as he, a as ge, c as _e, d as ve, f as ye, g as be, h as xe, i as Se, l as Ce, m as we, n as Te, o as Ee, p as De, r as Oe, s as ke, t as Ae, u as je, v as Me} from "./icons-DNTSMXEN.js";
import {a as Ne, c as Pe, f as Fe, i as Ie, l as Le, n as Re, o as ze, r as Be, s as Ve, t as He, u as Ue} from "./tabs-D6Pzu8qw.js";
import {i as We, r as Ge, t as Ke} from "./use-skills-D4GjPqpA.js";
var R = e(r(), 1)
  , z = a()
  , qe = Object.defineProperty
  , Je = (e, t) => qe(e, `name`, {
    value: t,
    configurable: !0
})
  , [Ye,Xe] = u(`AlertDialog`, [p])
  , Ze = p()
  , Qe = Je(e => {
    let {__scopeAlertDialog: t, ...n} = e
      , r = Ze(t);
    return (0,
    z.jsx)(ae, {
        ...r,
        ...n,
        modal: !0
    })
}
, `AlertDialog`);
R.forwardRef(Je(function(e, t) {
    let {__scopeAlertDialog: n, ...r} = e
      , i = Ze(n);
    return (0,
    z.jsx)(C, {
        ...i,
        ...r,
        ref: t
    })
}, `AlertDialogTrigger`));
var $e = Je(e => {
    let {__scopeAlertDialog: t, ...n} = e
      , r = Ze(t);
    return (0,
    z.jsx)(d, {
        ...r,
        ...n
    })
}
, `AlertDialogPortal`)
  , et = R.forwardRef(Je(function(e, t) {
    let {__scopeAlertDialog: n, ...r} = e
      , i = Ze(n);
    return (0,
    z.jsx)(S, {
        ...i,
        ...r,
        ref: t
    })
}, `AlertDialogOverlay`))
  , [tt,nt] = Ye(`AlertDialogContent`)
  , rt = R.forwardRef(Je(function(e, t) {
    let {__scopeAlertDialog: n, children: r, ...i} = e
      , a = Ze(n)
      , o = R.useRef(null)
      , s = pe(t, o)
      , c = R.useRef(null);
    return (0,
    z.jsx)(tt, {
        scope: n,
        cancelRef: c,
        children: (0,
        z.jsx)(E, {
            role: `alertdialog`,
            ...a,
            ...i,
            ref: s,
            onOpenAutoFocus: ce(i.onOpenAutoFocus, e => {
                e.preventDefault(),
                c.current?.focus({
                    preventScroll: !0
                })
            }
            ),
            onPointerDownOutside: e => e.preventDefault(),
            onInteractOutside: e => e.preventDefault(),
            children: r
        })
    })
}, `AlertDialogContent`))
  , it = R.forwardRef(Je(function(e, t) {
    let {__scopeAlertDialog: n, ...r} = e
      , i = Ze(n);
    return (0,
    z.jsx)(oe, {
        ...i,
        ...r,
        ref: t
    })
}, `AlertDialogTitle`))
  , at = R.forwardRef(Je(function(e, t) {
    let {__scopeAlertDialog: n, ...r} = e
      , i = Ze(n);
    return (0,
    z.jsx)(se, {
        ...i,
        ...r,
        ref: t
    })
}, `AlertDialogDescription`))
  , ot = R.forwardRef(Je(function(e, t) {
    let {__scopeAlertDialog: n, ...r} = e
      , i = Ze(n);
    return (0,
    z.jsx)(I, {
        ...i,
        ...r,
        ref: t
    })
}, `AlertDialogAction`))
  , st = `AlertDialogCancel`
  , ct = R.forwardRef(Je(function(e, t) {
    let {__scopeAlertDialog: n, ...r} = e
      , {cancelRef: i} = nt(st, n)
      , a = Ze(n)
      , o = pe(t, i);
    return (0,
    z.jsx)(I, {
        ...a,
        ...r,
        ref: o
    })
}, `AlertDialogCancel`))
  , lt = Qe
  , ut = $e
  , dt = et
  , ft = rt
  , pt = ot
  , mt = ct
  , ht = it
  , gt = at
  , _t = lt
  , vt = ut
  , yt = R.forwardRef( ({className: e, ...t}, n) => (0,
z.jsx)(dt, {
    className: L(`fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0`, e),
    ...t,
    ref: n
}));
yt.displayName = dt.displayName;
var bt = R.forwardRef( ({className: e, ...t}, n) => (0,
z.jsxs)(vt, {
    children: [(0,
    z.jsx)(yt, {}), (0,
    z.jsx)(ft, {
        ref: n,
        className: L(`fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg`, e),
        ...t
    })]
}));
bt.displayName = ft.displayName;
var xt = ({className: e, ...t}) => (0,
z.jsx)(`div`, {
    className: L(`flex flex-col space-y-2 text-center sm:text-left`, e),
    ...t
});
xt.displayName = `AlertDialogHeader`;
var St = ({className: e, ...t}) => (0,
z.jsx)(`div`, {
    className: L(`flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2`, e),
    ...t
});
St.displayName = `AlertDialogFooter`;
var Ct = R.forwardRef( ({className: e, ...t}, n) => (0,
z.jsx)(ht, {
    ref: n,
    className: L(`text-lg font-semibold`, e),
    ...t
}));
Ct.displayName = ht.displayName;
var wt = R.forwardRef( ({className: e, ...t}, n) => (0,
z.jsx)(gt, {
    ref: n,
    className: L(`text-sm text-muted-foreground`, e),
    ...t
}));
wt.displayName = gt.displayName;
var Tt = R.forwardRef( ({className: e, ...t}, n) => (0,
z.jsx)(pt, {
    ref: n,
    className: L(me(), e),
    ...t
}));
Tt.displayName = pt.displayName;
var Et = R.forwardRef( ({className: e, ...t}, n) => (0,
z.jsx)(mt, {
    ref: n,
    className: L(me({
        variant: `outline`
    }), `mt-2 sm:mt-0`, e),
    ...t
}));
Et.displayName = mt.displayName;
var Dt = [`top`, `right`, `bottom`, `left`]
  , Ot = Math.min
  , kt = Math.max
  , At = Math.round
  , jt = Math.floor
  , Mt = e => ({
    x: e,
    y: e
})
  , Nt = {
    left: `right`,
    right: `left`,
    bottom: `top`,
    top: `bottom`
};
function Pt(e, t, n) {
    return kt(e, Ot(t, n))
}
function Ft(e, t) {
    return typeof e == `function` ? e(t) : e
}
function It(e) {
    return e.split(`-`)[0]
}
function Lt(e) {
    return e.split(`-`)[1]
}
function Rt(e) {
    return e === `x` ? `y` : `x`
}
function zt(e) {
    return e === `y` ? `height` : `width`
}
function Bt(e) {
    let t = e[0];
    return t === `t` || t === `b` ? `y` : `x`
}
function Vt(e) {
    return Rt(Bt(e))
}
function Ht(e, t, n) {
    n === void 0 && (n = !1);
    let r = Lt(e)
      , i = Vt(e)
      , a = zt(i)
      , o = i === `x` ? r === (n ? `end` : `start`) ? `right` : `left` : r === `start` ? `bottom` : `top`;
    return t.reference[a] > t.floating[a] && (o = Zt(o)),
    [o, Zt(o)]
}
function Ut(e) {
    let t = Zt(e);
    return [Wt(e), t, Wt(t)]
}
function Wt(e) {
    return e.includes(`start`) ? e.replace(`start`, `end`) : e.replace(`end`, `start`)
}
var Gt = [`left`, `right`]
  , Kt = [`right`, `left`]
  , qt = [`top`, `bottom`]
  , Jt = [`bottom`, `top`];
function Yt(e, t, n) {
    switch (e) {
    case `top`:
    case `bottom`:
        return n ? t ? Kt : Gt : t ? Gt : Kt;
    case `left`:
    case `right`:
        return t ? qt : Jt;
    default:
        return []
    }
}
function Xt(e, t, n, r) {
    let i = Lt(e)
      , a = Yt(It(e), n === `start`, r);
    return i && (a = a.map(e => e + `-` + i),
    t && (a = a.concat(a.map(Wt)))),
    a
}
function Zt(e) {
    let t = It(e);
    return Nt[t] + e.slice(t.length)
}
function Qt(e) {
    return {
        top: e.top ?? 0,
        right: e.right ?? 0,
        bottom: e.bottom ?? 0,
        left: e.left ?? 0
    }
}
function $t(e) {
    return typeof e == `number` ? {
        top: e,
        right: e,
        bottom: e,
        left: e
    } : Qt(e)
}
function en(e) {
    let {x: t, y: n, width: r, height: i} = e;
    return {
        width: r,
        height: i,
        top: n,
        left: t,
        right: t + r,
        bottom: n + i,
        x: t,
        y: n
    }
}
function tn(e, t, n) {
    let {reference: r, floating: i} = e, a = Bt(t), o = Vt(t), s = zt(o), c = It(t), l = a === `y`, u = r.x + r.width / 2 - i.width / 2, d = r.y + r.height / 2 - i.height / 2, f = r[s] / 2 - i[s] / 2, p;
    switch (c) {
    case `top`:
        p = {
            x: u,
            y: r.y - i.height
        };
        break;
    case `bottom`:
        p = {
            x: u,
            y: r.y + r.height
        };
        break;
    case `right`:
        p = {
            x: r.x + r.width,
            y: d
        };
        break;
    case `left`:
        p = {
            x: r.x - i.width,
            y: d
        };
        break;
    default:
        p = {
            x: r.x,
            y: r.y
        }
    }
    let m = Lt(t);
    return m && (p[o] += f * (m === `end` ? 1 : -1) * (n && l ? -1 : 1)),
    p
}
async function nn(e, t) {
    t === void 0 && (t = {});
    let {x: n, y: r, platform: i, rects: a, elements: o, strategy: s} = e
      , {boundary: c=`clippingAncestors`, rootBoundary: l=`viewport`, elementContext: u=`floating`, altBoundary: d=!1, padding: f=0} = Ft(t, e)
      , p = $t(f)
      , m = o[d ? u === `floating` ? `reference` : `floating` : u]
      , h = en(await i.getClippingRect({
        element: await (i.isElement == null ? void 0 : i.isElement(m)) ?? !0 ? m : m.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(o.floating)),
        boundary: c,
        rootBoundary: l,
        strategy: s
    }))
      , g = u === `floating` ? {
        x: n,
        y: r,
        width: a.floating.width,
        height: a.floating.height
    } : a.reference
      , _ = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(o.floating))
      , v = await (i.isElement == null ? void 0 : i.isElement(_)) && await (i.getScale == null ? void 0 : i.getScale(_)) || {
        x: 1,
        y: 1
    }
      , y = en(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
        elements: o,
        rect: g,
        offsetParent: _,
        strategy: s
    }) : g);
    return {
        top: (h.top - y.top + p.top) / v.y,
        bottom: (y.bottom - h.bottom + p.bottom) / v.y,
        left: (h.left - y.left + p.left) / v.x,
        right: (y.right - h.right + p.right) / v.x
    }
}
var rn = 50
  , an = async (e, t, n) => {
    let {placement: r=`bottom`, strategy: i=`absolute`, middleware: a=[], platform: o} = n
      , s = o.detectOverflow ? o : {
        ...o,
        detectOverflow: nn
    }
      , c = await (o.isRTL == null ? void 0 : o.isRTL(t))
      , l = await o.getElementRects({
        reference: e,
        floating: t,
        strategy: i
    })
      , {x: u, y: d} = tn(l, r, c)
      , f = r
      , p = 0
      , m = {};
    for (let n = 0; n < a.length; n++) {
        let h = a[n];
        if (!h)
            continue;
        let {name: g, fn: _} = h
          , {x: v, y, data: b, reset: x} = await _({
            x: u,
            y: d,
            initialPlacement: r,
            placement: f,
            strategy: i,
            middlewareData: m,
            rects: l,
            platform: s,
            elements: {
                reference: e,
                floating: t
            }
        });
        u = v ?? u,
        d = y ?? d,
        m[g] = {
            ...m[g],
            ...b
        },
        x && p < rn && (p++,
        typeof x == `object` && (x.placement && (f = x.placement),
        x.rects && (l = x.rects === !0 ? await o.getElementRects({
            reference: e,
            floating: t,
            strategy: i
        }) : x.rects),
        {x: u, y: d} = tn(l, f, c)),
        n = -1)
    }
    return {
        x: u,
        y: d,
        placement: f,
        strategy: i,
        middlewareData: m
    }
}
  , on = e => ({
    name: `arrow`,
    options: e,
    async fn(t) {
        let {x: n, y: r, placement: i, rects: a, platform: o, elements: s, middlewareData: c} = t
          , {element: l, padding: u=0} = Ft(e, t) || {};
        if (l == null)
            return {};
        let d = $t(u)
          , f = {
            x: n,
            y: r
        }
          , p = Vt(i)
          , m = zt(p)
          , h = await o.getDimensions(l)
          , g = p === `y`
          , _ = g ? `top` : `left`
          , v = g ? `bottom` : `right`
          , y = g ? `clientHeight` : `clientWidth`
          , b = a.reference[m] + a.reference[p] - f[p] - a.floating[m]
          , x = f[p] - a.reference[p]
          , S = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(l))
          , C = S ? S[y] : 0;
        (!C || !await (o.isElement == null ? void 0 : o.isElement(S))) && (C = s.floating[y] || a.floating[m]);
        let w = b / 2 - x / 2
          , T = C / 2 - h[m] / 2 - 1
          , E = Ot(d[_], T)
          , D = Ot(d[v], T)
          , O = C - h[m] - D
          , k = C / 2 - h[m] / 2 + w
          , A = Pt(E, k, O)
          , j = !c.arrow && Lt(i) != null && k !== A && a.reference[m] / 2 - (k < E ? E : D) - h[m] / 2 < 0
          , M = j ? k < E ? k - E : k - O : 0;
        return {
            [p]: f[p] + M,
            data: {
                [p]: A,
                centerOffset: k - A - M,
                ...j && {
                    alignmentOffset: M
                }
            },
            reset: j
        }
    }
})
  , sn = function(e) {
    return e === void 0 && (e = {}),
    {
        name: `flip`,
        options: e,
        async fn(t) {
            var n;
            let {placement: r, middlewareData: i, rects: a, initialPlacement: o, platform: s, elements: c} = t
              , {mainAxis: l=!0, crossAxis: u=!0, fallbackPlacements: d, fallbackStrategy: f=`bestFit`, fallbackAxisSideDirection: p=`none`, flipAlignment: m=!0, ...h} = Ft(e, t);
            if ((n = i.arrow) != null && n.alignmentOffset)
                return {};
            let g = It(r)
              , _ = Bt(o)
              , v = It(o) === o
              , y = await (s.isRTL == null ? void 0 : s.isRTL(c.floating))
              , b = d || (v || !m ? [Zt(o)] : Ut(o))
              , x = p !== `none`;
            !d && x && b.push(...Xt(o, m, p, y));
            let S = [o, ...b]
              , C = await s.detectOverflow(t, h)
              , w = []
              , T = i.flip?.overflows || [];
            if (l && w.push(C[g]),
            u) {
                let e = Ht(r, a, y);
                w.push(C[e[0]], C[e[1]])
            }
            if (T = [...T, {
                placement: r,
                overflows: w
            }],
            !w.every(e => e <= 0)) {
                let e = (i.flip?.index || 0) + 1
                  , t = S[e];
                if (t && (u !== `alignment` || _ === Bt(t) || T.every(e => Bt(e.placement) !== _ || e.overflows[0] > 0)))
                    return {
                        data: {
                            index: e,
                            overflows: T
                        },
                        reset: {
                            placement: t
                        }
                    };
                let n = T.filter(e => e.overflows[0] <= 0).sort( (e, t) => e.overflows[1] - t.overflows[1])[0]?.placement;
                if (!n)
                    switch (f) {
                    case `bestFit`:
                        {
                            let e = T.filter(e => {
                                if (x) {
                                    let t = Bt(e.placement);
                                    return t === _ || t === `y`
                                }
                                return !0
                            }
                            ).map(e => [e.placement, e.overflows.filter(e => e > 0).reduce( (e, t) => e + t, 0)]).sort( (e, t) => e[1] - t[1])[0]?.[0];
                            e && (n = e);
                            break
                        }
                    case `initialPlacement`:
                        n = o
                    }
                if (r !== n)
                    return {
                        reset: {
                            placement: n
                        }
                    }
            }
            return {}
        }
    }
};
function cn(e, t) {
    return {
        top: e.top - t.height,
        right: e.right - t.width,
        bottom: e.bottom - t.height,
        left: e.left - t.width
    }
}
function ln(e) {
    return Dt.some(t => e[t] >= 0)
}
var un = function(e) {
    return e === void 0 && (e = {}),
    {
        name: `hide`,
        options: e,
        async fn(t) {
            let {rects: n, platform: r} = t
              , {strategy: i=`referenceHidden`, ...a} = Ft(e, t);
            switch (i) {
            case `referenceHidden`:
                {
                    let e = cn(await r.detectOverflow(t, {
                        ...a,
                        elementContext: `reference`
                    }), n.reference);
                    return {
                        data: {
                            referenceHiddenOffsets: e,
                            referenceHidden: ln(e)
                        }
                    }
                }
            case `escaped`:
                {
                    let e = cn(await r.detectOverflow(t, {
                        ...a,
                        altBoundary: !0
                    }), n.floating);
                    return {
                        data: {
                            escapedOffsets: e,
                            escaped: ln(e)
                        }
                    }
                }
            default:
                return {}
            }
        }
    }
}
  , dn = new Set([`left`, `top`]);
async function fn(e, t) {
    let {placement: n, platform: r, elements: i} = e
      , a = await (r.isRTL == null ? void 0 : r.isRTL(i.floating))
      , o = It(n)
      , s = Lt(n)
      , c = Bt(n) === `y`
      , l = dn.has(o) ? -1 : 1
      , u = a && c ? -1 : 1
      , d = Ft(t, e)
      , {mainAxis: f, crossAxis: p, alignmentAxis: m} = typeof d == `number` ? {
        mainAxis: d,
        crossAxis: 0,
        alignmentAxis: null
    } : {
        mainAxis: d.mainAxis || 0,
        crossAxis: d.crossAxis || 0,
        alignmentAxis: d.alignmentAxis
    };
    return s && typeof m == `number` && (p = s === `end` ? m * -1 : m),
    c ? {
        x: p * u,
        y: f * l
    } : {
        x: f * l,
        y: p * u
    }
}
var pn = function(e) {
    return e === void 0 && (e = 0),
    {
        name: `offset`,
        options: e,
        async fn(t) {
            var n;
            let {x: r, y: i, placement: a, middlewareData: o} = t
              , s = await fn(t, e);
            return a === o.offset?.placement && (n = o.arrow) != null && n.alignmentOffset ? {} : {
                x: r + s.x,
                y: i + s.y,
                data: {
                    ...s,
                    placement: a
                }
            }
        }
    }
}
  , mn = function(e) {
    return e === void 0 && (e = {}),
    {
        name: `shift`,
        options: e,
        async fn(t) {
            let {x: n, y: r, placement: i, platform: a} = t
              , {mainAxis: o=!0, crossAxis: s=!1, limiter: c={
                fn: e => {
                    let {x: t, y: n} = e;
                    return {
                        x: t,
                        y: n
                    }
                }
            }, ...l} = Ft(e, t)
              , u = {
                x: n,
                y: r
            }
              , d = await a.detectOverflow(t, l)
              , f = Bt(i)
              , p = Rt(f)
              , m = u[p]
              , h = u[f]
              , g = (e, t) => Pt(t + d[e === `y` ? `top` : `left`], t, t - d[e === `y` ? `bottom` : `right`]);
            o && (m = g(p, m)),
            s && (h = g(f, h));
            let _ = c.fn({
                ...t,
                [p]: m,
                [f]: h
            });
            return {
                ..._,
                data: {
                    x: _.x - n,
                    y: _.y - r,
                    enabled: {
                        [p]: o,
                        [f]: s
                    }
                }
            }
        }
    }
}
  , hn = function(e) {
    return e === void 0 && (e = {}),
    {
        options: e,
        fn(t) {
            let {x: n, y: r, placement: i, rects: a, middlewareData: o} = t
              , {offset: s=0, mainAxis: c=!0, crossAxis: l=!0} = Ft(e, t)
              , u = {
                x: n,
                y: r
            }
              , d = Bt(i)
              , f = Rt(d)
              , p = u[f]
              , m = u[d]
              , h = Ft(s, t)
              , g = typeof h == `number` ? {
                mainAxis: h,
                crossAxis: 0
            } : {
                mainAxis: h.mainAxis ?? 0,
                crossAxis: h.crossAxis ?? 0
            };
            if (c) {
                let e = f === `y` ? `height` : `width`
                  , t = a.reference[f] - a.floating[e] + g.mainAxis
                  , n = a.reference[f] + a.reference[e] - g.mainAxis;
                p < t ? p = t : p > n && (p = n)
            }
            if (l) {
                let e = f === `y` ? `width` : `height`
                  , t = dn.has(It(i))
                  , n = a.reference[d] - a.floating[e] + (t && o.offset?.[d] || 0) + (t ? 0 : g.crossAxis)
                  , r = a.reference[d] + a.reference[e] + (t ? 0 : o.offset?.[d] || 0) - (t ? g.crossAxis : 0);
                m < n ? m = n : m > r && (m = r)
            }
            return {
                [f]: p,
                [d]: m
            }
        }
    }
}
  , gn = function(e) {
    return e === void 0 && (e = {}),
    {
        name: `size`,
        options: e,
        async fn(t) {
            let {placement: n, rects: r, platform: i, elements: a} = t, {apply: o= () => {}
            , ...s} = Ft(e, t), c = await i.detectOverflow(t, s), l = It(n), u = Lt(n), d = Bt(n) === `y`, {width: f, height: p} = r.floating, m, h;
            l === `top` || l === `bottom` ? (m = l,
            h = u === (await (i.isRTL == null ? void 0 : i.isRTL(a.floating)) ? `start` : `end`) ? `left` : `right`) : (h = l,
            m = u === `end` ? `top` : `bottom`);
            let g = p - c.top - c.bottom
              , _ = f - c.left - c.right
              , v = Ot(p - c[m], g)
              , y = Ot(f - c[h], _)
              , b = t.middlewareData.shift
              , x = !b
              , S = v
              , C = y;
            b != null && b.enabled.x && (C = _),
            b != null && b.enabled.y && (S = g),
            x && !u && (d ? C = f - 2 * kt(c.left, c.right) : S = p - 2 * kt(c.top, c.bottom)),
            await o({
                ...t,
                availableWidth: C,
                availableHeight: S
            });
            let w = await i.getDimensions(a.floating);
            return f !== w.width || p !== w.height ? {
                reset: {
                    rects: !0
                }
            } : {}
        }
    }
};
function _n() {
    return typeof window < `u`
}
function vn(e) {
    return bn(e) ? (e.nodeName || ``).toLowerCase() : `#document`
}
function B(e) {
    var t;
    return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window
}
function yn(e) {
    return ((bn(e) ? e.ownerDocument : e.document) || window.document)?.documentElement
}
function bn(e) {
    return _n() ? e instanceof Node || e instanceof B(e).Node : !1
}
function xn(e) {
    return _n() ? e instanceof Element || e instanceof B(e).Element : !1
}
function Sn(e) {
    return _n() ? e instanceof HTMLElement || e instanceof B(e).HTMLElement : !1
}
function Cn(e) {
    return !_n() || typeof ShadowRoot > `u` ? !1 : e instanceof ShadowRoot || e instanceof B(e).ShadowRoot
}
function wn(e) {
    let {overflow: t, overflowX: n, overflowY: r, display: i} = Fn(e);
    return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && i !== `inline` && i !== `contents`
}
function Tn(e) {
    return /^(table|td|th)$/.test(vn(e))
}
function En(e) {
    try {
        if (e.matches(`:popover-open`))
            return !0
    } catch {}
    try {
        return e.matches(`:modal`)
    } catch {
        return !1
    }
}
var Dn = /transform|translate|scale|rotate|perspective|filter/, On = /paint|layout|strict|content/, kn = e => !!e && e !== `none`, An;
function jn(e) {
    let t = xn(e) ? Fn(e) : e;
    return kn(t.transform) || kn(t.translate) || kn(t.scale) || kn(t.rotate) || kn(t.perspective) || !Nn() && (kn(t.backdropFilter) || kn(t.filter)) || Dn.test(t.willChange || ``) || On.test(t.contain || ``)
}
function Mn(e) {
    let t = Ln(e);
    for (; Sn(t) && !Pn(t); ) {
        if (jn(t))
            return t;
        if (En(t))
            return null;
        t = Ln(t)
    }
    return null
}
function Nn() {
    return An ??= typeof CSS < `u` && CSS.supports && CSS.supports(`-webkit-backdrop-filter`, `none`),
    An
}
function Pn(e) {
    return /^(html|body|#document)$/.test(vn(e))
}
function Fn(e) {
    return B(e).getComputedStyle(e)
}
function In(e) {
    return xn(e) ? {
        scrollLeft: e.scrollLeft,
        scrollTop: e.scrollTop
    } : {
        scrollLeft: e.scrollX,
        scrollTop: e.scrollY
    }
}
function Ln(e) {
    if (vn(e) === `html`)
        return e;
    let t = e.assignedSlot || e.parentNode || Cn(e) && e.host || yn(e);
    return Cn(t) ? t.host : t
}
function Rn(e) {
    let t = Ln(e);
    return Pn(t) ? (e.ownerDocument || e).body : Sn(t) && wn(t) ? t : Rn(t)
}
function zn(e, t, n) {
    t === void 0 && (t = []),
    n === void 0 && (n = !0);
    let r = Rn(e)
      , i = r === e.ownerDocument?.body
      , a = B(r);
    if (i) {
        let e = Bn(a);
        return t.concat(a, a.visualViewport || [], wn(r) ? r : [], e && n ? zn(e) : [])
    }
    return t.concat(r, zn(r, [], n))
}
function Bn(e) {
    return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null
}
function Vn(e) {
    let t = Fn(e)
      , n = parseFloat(t.width) || 0
      , r = parseFloat(t.height) || 0
      , i = Sn(e)
      , a = i ? e.offsetWidth : n
      , o = i ? e.offsetHeight : r
      , s = At(n) !== a || At(r) !== o;
    return s && (n = a,
    r = o),
    {
        width: n,
        height: r,
        $: s
    }
}
function Hn(e) {
    return xn(e) ? e : e.contextElement
}
function Un(e) {
    let t = Hn(e);
    if (!Sn(t))
        return Mt(1);
    let n = t.getBoundingClientRect()
      , {width: r, height: i, $: a} = Vn(t)
      , o = (a ? At(n.width) : n.width) / r
      , s = (a ? At(n.height) : n.height) / i;
    return (!o || !Number.isFinite(o)) && (o = 1),
    (!s || !Number.isFinite(s)) && (s = 1),
    {
        x: o,
        y: s
    }
}
var Wn = Mt(0);
function Gn(e) {
    let t = B(e);
    return !Nn() || !t.visualViewport ? Wn : {
        x: t.visualViewport.offsetLeft,
        y: t.visualViewport.offsetTop
    }
}
function Kn(e, t, n) {
    return t === void 0 && (t = !1),
    !!n && t && n === B(e)
}
function qn(e, t, n, r) {
    t === void 0 && (t = !1),
    n === void 0 && (n = !1);
    let i = e.getBoundingClientRect()
      , a = Hn(e)
      , o = Mt(1);
    t && (r ? xn(r) && (o = Un(r)) : o = Un(e));
    let s = Kn(a, n, r) ? Gn(a) : Mt(0)
      , c = (i.left + s.x) / o.x
      , l = (i.top + s.y) / o.y
      , u = i.width / o.x
      , d = i.height / o.y;
    if (a && r) {
        let e = B(a)
          , t = xn(r) ? B(r) : r
          , n = e
          , i = Bn(n);
        for (; i && t !== n; ) {
            let e = Un(i)
              , t = i.getBoundingClientRect()
              , r = Fn(i)
              , a = t.left + (i.clientLeft + parseFloat(r.paddingLeft)) * e.x
              , o = t.top + (i.clientTop + parseFloat(r.paddingTop)) * e.y;
            c *= e.x,
            l *= e.y,
            u *= e.x,
            d *= e.y,
            c += a,
            l += o,
            n = B(i),
            i = Bn(n)
        }
    }
    return en({
        width: u,
        height: d,
        x: c,
        y: l
    })
}
function Jn(e, t) {
    let n = In(e).scrollLeft;
    return t ? t.left + n : qn(yn(e)).left + n
}
function Yn(e, t) {
    let n = e.getBoundingClientRect();
    return {
        x: n.left + t.scrollLeft - Jn(e, n),
        y: n.top + t.scrollTop
    }
}
function Xn(e) {
    let {elements: t, rect: n, offsetParent: r, strategy: i} = e
      , a = i === `fixed`
      , o = yn(r)
      , s = t ? En(t.floating) : !1;
    if (r === o || s && a)
        return n;
    let c = {
        scrollLeft: 0,
        scrollTop: 0
    }
      , l = Mt(1)
      , u = Mt(0)
      , d = Sn(r);
    if ((d || !a) && ((vn(r) !== `body` || wn(o)) && (c = In(r)),
    d)) {
        let e = qn(r);
        l = Un(r),
        u.x = e.x + r.clientLeft,
        u.y = e.y + r.clientTop
    }
    let f = o && !d && !a ? Yn(o, c) : Mt(0);
    return {
        width: n.width * l.x,
        height: n.height * l.y,
        x: n.x * l.x - c.scrollLeft * l.x + u.x + f.x,
        y: n.y * l.y - c.scrollTop * l.y + u.y + f.y
    }
}
function Zn(e) {
    return e.getClientRects ? Array.from(e.getClientRects()) : []
}
function Qn(e) {
    let t = In(e)
      , n = e.ownerDocument.body
      , r = kt(e.scrollWidth, e.clientWidth, n.scrollWidth, n.clientWidth)
      , i = kt(e.scrollHeight, e.clientHeight, n.scrollHeight, n.clientHeight)
      , a = -t.scrollLeft + Jn(e)
      , o = -t.scrollTop;
    return Fn(n).direction === `rtl` && (a += kt(e.clientWidth, n.clientWidth) - r),
    {
        width: r,
        height: i,
        x: a,
        y: o
    }
}
var $n = 25;
function er(e, t, n) {
    n === void 0 && (n = `viewport`);
    let r = n === `layoutViewport`
      , i = B(e)
      , a = yn(e)
      , o = i.visualViewport
      , s = a.clientWidth
      , c = a.clientHeight
      , l = 0
      , u = 0;
    if (o) {
        let e = !Nn() || t === `fixed`;
        r ? e || (l = -o.offsetLeft,
        u = -o.offsetTop) : (s = o.width,
        c = o.height,
        e && (l = o.offsetLeft,
        u = o.offsetTop))
    }
    if (Jn(a) <= 0) {
        let e = a.ownerDocument
          , t = e.body
          , n = getComputedStyle(t)
          , r = e.compatMode === `CSS1Compat` && parseFloat(n.marginLeft) + parseFloat(n.marginRight) || 0
          , i = Math.abs(a.clientWidth - t.clientWidth - r)
          , o = getComputedStyle(a).scrollbarGutter === `stable both-edges` ? i / 2 : i;
        o <= $n && (s -= o)
    }
    return {
        width: s,
        height: c,
        x: l,
        y: u
    }
}
function tr(e, t) {
    let n = qn(e, !0, t === `fixed`)
      , r = n.top + e.clientTop
      , i = n.left + e.clientLeft
      , a = Un(e);
    return {
        width: e.clientWidth * a.x,
        height: e.clientHeight * a.y,
        x: i * a.x,
        y: r * a.y
    }
}
function nr(e, t, n) {
    let r;
    if (t === `viewport` || t === `layoutViewport`)
        r = er(e, n, t);
    else if (t === `document`)
        r = Qn(yn(e));
    else if (xn(t))
        r = tr(t, n);
    else {
        let n = Gn(e);
        r = {
            x: t.x - n.x,
            y: t.y - n.y,
            width: t.width,
            height: t.height
        }
    }
    return en(r)
}
function rr(e, t) {
    let n = t.get(e);
    if (n)
        return n;
    let r = zn(e, [], !1).filter(e => xn(e) && vn(e) !== `body`)
      , i = null
      , a = Fn(e).position === `fixed`
      , o = a ? Ln(e) : e;
    for (; xn(o) && !Pn(o); ) {
        let e = Fn(o)
          , t = jn(o)
          , n = i ? i.position : a ? `fixed` : ``;
        !t && (n === `fixed` || n === `absolute` && e.position === `static`) ? r = r.filter(e => e !== o) : i = e,
        o = Ln(o)
    }
    return t.set(e, r),
    r
}
function ir(e) {
    let {element: t, boundary: n, rootBoundary: r, strategy: i} = e
      , a = [...n === `clippingAncestors` ? En(t) ? [] : rr(t, this._c) : [].concat(n), r]
      , o = nr(t, a[0], i)
      , s = o.top
      , c = o.right
      , l = o.bottom
      , u = o.left;
    for (let e = 1; e < a.length; e++) {
        let n = nr(t, a[e], i);
        s = kt(n.top, s),
        c = Ot(n.right, c),
        l = Ot(n.bottom, l),
        u = kt(n.left, u)
    }
    return {
        width: c - u,
        height: l - s,
        x: u,
        y: s
    }
}
function ar(e) {
    let {width: t, height: n} = Vn(e);
    return {
        width: t,
        height: n
    }
}
function or(e, t, n) {
    let r = Sn(t)
      , i = yn(t)
      , a = n === `fixed`
      , o = qn(e, !0, a, t)
      , s = {
        scrollLeft: 0,
        scrollTop: 0
    }
      , c = Mt(0);
    if ((r || !a) && ((vn(t) !== `body` || wn(i)) && (s = In(t)),
    r)) {
        let e = qn(t, !0, a, t);
        c.x = e.x + t.clientLeft,
        c.y = e.y + t.clientTop
    }
    !r && i && (c.x = Jn(i));
    let l = i && !r && !a ? Yn(i, s) : Mt(0);
    return {
        x: o.left + s.scrollLeft - c.x - l.x,
        y: o.top + s.scrollTop - c.y - l.y,
        width: o.width,
        height: o.height
    }
}
function sr(e) {
    return Fn(e).position === `static`
}
function cr(e, t) {
    if (!Sn(e) || Fn(e).position === `fixed`)
        return null;
    if (t)
        return t(e);
    let n = e.offsetParent;
    return yn(e) === n && (n = n.ownerDocument.body),
    n
}
function lr(e, t) {
    let n = B(e);
    if (En(e))
        return n;
    if (!Sn(e)) {
        let t = Ln(e);
        for (; t && !Pn(t); ) {
            if (xn(t) && !sr(t))
                return t;
            t = Ln(t)
        }
        return n
    }
    let r = cr(e, t);
    for (; r && Tn(r) && sr(r); )
        r = cr(r, t);
    return r && Pn(r) && sr(r) && !jn(r) ? n : r || Mn(e) || n
}
var ur = async function(e) {
    let t = this.getOffsetParent || lr
      , n = this.getDimensions
      , r = await n(e.floating);
    return {
        reference: or(e.reference, await t(e.floating), e.strategy),
        floating: {
            x: 0,
            y: 0,
            width: r.width,
            height: r.height
        }
    }
};
function dr(e) {
    return Fn(e).direction === `rtl`
}
var fr = {
    convertOffsetParentRelativeRectToViewportRelativeRect: Xn,
    getDocumentElement: yn,
    getClippingRect: ir,
    getOffsetParent: lr,
    getElementRects: ur,
    getClientRects: Zn,
    getDimensions: ar,
    getScale: Un,
    isElement: xn,
    isRTL: dr
};
function pr(e, t) {
    return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
}
function mr(e, t, n) {
    let r = null, i, a = yn(e);
    function o() {
        var e;
        clearTimeout(i),
        (e = r) == null || e.disconnect(),
        r = null
    }
    function s(n, c) {
        n === void 0 && (n = !1),
        c === void 0 && (c = 1),
        o();
        let l = e.getBoundingClientRect()
          , {left: u, top: d, width: f, height: p} = l;
        if (n || t(),
        !f || !p)
            return;
        let m = jt(d)
          , h = jt(a.clientWidth - (u + f))
          , g = jt(a.clientHeight - (d + p))
          , _ = jt(u)
          , v = {
            rootMargin: -m + `px ` + -h + `px ` + -g + `px ` + -_ + `px`,
            threshold: kt(0, Ot(1, c)) || 1
        }
          , y = !0;
        function b(t) {
            let n = t[0].intersectionRatio;
            if (!pr(l, e.getBoundingClientRect()))
                return s();
            if (n !== c) {
                if (!y)
                    return s();
                n ? s(!1, n) : i = setTimeout( () => {
                    s(!1, 1e-7)
                }
                , 1e3)
            }
            y = !1
        }
        try {
            r = new IntersectionObserver(b,{
                ...v,
                root: a.ownerDocument
            })
        } catch {
            r = new IntersectionObserver(b,v)
        }
        r.observe(e)
    }
    let c = B(e)
      , l = () => s(n);
    return c.addEventListener(`resize`, l),
    s(!0),
    () => {
        c.removeEventListener(`resize`, l),
        o()
    }
}
function hr(e, t, n, r) {
    r === void 0 && (r = {});
    let {ancestorScroll: i=!0, ancestorResize: a=!0, elementResize: o=typeof ResizeObserver == `function`, layoutShift: s=typeof IntersectionObserver == `function`, animationFrame: c=!1} = r
      , l = Hn(e)
      , u = i || a ? [...l ? zn(l) : [], ...t ? zn(t) : []] : [];
    u.forEach(e => {
        i && e.addEventListener(`scroll`, n),
        a && e.addEventListener(`resize`, n)
    }
    );
    let d = l && s ? mr(l, n, a) : null
      , f = -1
      , p = null;
    o && (p = new ResizeObserver(e => {
        let[r] = e;
        r && r.target === l && p && t && (p.unobserve(t),
        cancelAnimationFrame(f),
        f = requestAnimationFrame( () => {
            var e;
            (e = p) == null || e.observe(t)
        }
        )),
        n()
    }
    ),
    l && !c && p.observe(l),
    t && p.observe(t));
    let m, h = c ? qn(e) : null;
    c && g();
    function g() {
        let t = qn(e);
        h && !pr(h, t) && n(),
        h = t,
        m = requestAnimationFrame(g)
    }
    return n(),
    () => {
        var e;
        u.forEach(e => {
            i && e.removeEventListener(`scroll`, n),
            a && e.removeEventListener(`resize`, n)
        }
        ),
        d?.(),
        (e = p) == null || e.disconnect(),
        p = null,
        c && cancelAnimationFrame(m)
    }
}
var gr = pn
  , _r = mn
  , vr = sn
  , yr = gn
  , br = un
  , xr = on
  , Sr = hn
  , Cr = (e, t, n) => {
    let r = new Map
      , i = n ?? {}
      , a = {
        ...fr,
        ...i.platform,
        _c: r
    };
    return an(e, t, {
        ...i,
        platform: a
    })
}
  , wr = e(le(), 1)
  , Tr = typeof document < `u` ? R.useLayoutEffect : function() {}
;
function Er(e, t) {
    if (e === t)
        return !0;
    if (typeof e != typeof t)
        return !1;
    if (typeof e == `function` && e.toString() === t.toString())
        return !0;
    let n, r, i;
    if (e && t && typeof e == `object`) {
        if (Array.isArray(e)) {
            if (n = e.length,
            n !== t.length)
                return !1;
            for (r = n; r-- !== 0; )
                if (!Er(e[r], t[r]))
                    return !1;
            return !0
        }
        if (i = Object.keys(e),
        n = i.length,
        n !== Object.keys(t).length)
            return !1;
        for (r = n; r-- !== 0; )
            if (!{}.hasOwnProperty.call(t, i[r]))
                return !1;
        for (r = n; r-- !== 0; ) {
            let n = i[r];
            if (!(n === `_owner` && e.$$typeof) && !Er(e[n], t[n]))
                return !1
        }
        return !0
    }
    return e !== e && t !== t
}
function Dr(e) {
    return typeof window > `u` ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
}
function Or(e, t) {
    let n = Dr(e);
    return Math.round(t * n) / n
}
function kr(e) {
    let t = R.useRef(e);
    return Tr( () => {
        t.current = e
    }
    ),
    t
}
function Ar(e) {
    e === void 0 && (e = {});
    let {placement: t=`bottom`, strategy: n=`absolute`, middleware: r=[], platform: i, elements: {reference: a, floating: o}={}, transform: s=!0, whileElementsMounted: c, open: l} = e
      , [u,d] = R.useState({
        x: 0,
        y: 0,
        strategy: n,
        placement: t,
        middlewareData: {},
        isPositioned: !1
    })
      , [f,p] = R.useState(r);
    Er(f, r) || p(r);
    let[m,h] = R.useState(null)
      , [g,_] = R.useState(null)
      , v = R.useCallback(e => {
        e !== S.current && (S.current = e,
        h(e))
    }
    , [])
      , y = R.useCallback(e => {
        e !== C.current && (C.current = e,
        _(e))
    }
    , [])
      , b = a || m
      , x = o || g
      , S = R.useRef(null)
      , C = R.useRef(null)
      , w = R.useRef(u)
      , T = c != null
      , E = kr(c)
      , D = kr(i)
      , O = kr(l)
      , k = R.useCallback( () => {
        if (!S.current || !C.current)
            return;
        let e = {
            placement: t,
            strategy: n,
            middleware: f
        };
        D.current && (e.platform = D.current),
        Cr(S.current, C.current, e).then(e => {
            let t = {
                ...e,
                isPositioned: O.current !== !1
            };
            A.current && !Er(w.current, t) && (w.current = t,
            wr.flushSync( () => {
                d(t)
            }
            ))
        }
        )
    }
    , [f, t, n, D, O]);
    Tr( () => {
        l === !1 && w.current.isPositioned && (w.current.isPositioned = !1,
        d(e => ({
            ...e,
            isPositioned: !1
        })))
    }
    , [l]);
    let A = R.useRef(!1);
    Tr( () => (A.current = !0,
    () => {
        A.current = !1
    }
    ), []),
    Tr( () => {
        if (b && (S.current = b),
        x && (C.current = x),
        b && x) {
            if (E.current)
                return E.current(b, x, k);
            k()
        }
    }
    , [b, x, k, E, T]);
    let j = R.useMemo( () => ({
        reference: S,
        floating: C,
        setReference: v,
        setFloating: y
    }), [v, y])
      , M = R.useMemo( () => ({
        reference: b,
        floating: x
    }), [b, x])
      , N = R.useMemo( () => {
        let e = {
            position: n,
            left: 0,
            top: 0
        };
        if (!M.floating)
            return e;
        let t = Or(M.floating, u.x)
          , r = Or(M.floating, u.y);
        return s ? {
            ...e,
            transform: `translate(` + t + `px, ` + r + `px)`,
            ...Dr(M.floating) >= 1.5 && {
                willChange: `transform`
            }
        } : {
            position: n,
            left: t,
            top: r
        }
    }
    , [n, s, M.floating, u.x, u.y]);
    return R.useMemo( () => ({
        ...u,
        update: k,
        refs: j,
        elements: M,
        floatingStyles: N
    }), [u, k, j, M, N])
}
var jr = e => {
    function t(e) {
        return {}.hasOwnProperty.call(e, `current`)
    }
    return {
        name: `arrow`,
        options: e,
        fn(n) {
            let {element: r, padding: i} = typeof e == `function` ? e(n) : e;
            return r && t(r) ? r.current == null ? {} : xr({
                element: r.current,
                padding: i
            }).fn(n) : r ? xr({
                element: r,
                padding: i
            }).fn(n) : {}
        }
    }
}
  , Mr = (e, t) => {
    let n = gr(e);
    return {
        name: n.name,
        fn: n.fn,
        options: [e, t]
    }
}
  , Nr = (e, t) => {
    let n = _r(e);
    return {
        name: n.name,
        fn: n.fn,
        options: [e, t]
    }
}
  , Pr = (e, t) => ({
    fn: Sr(e).fn,
    options: [e, t]
})
  , Fr = (e, t) => {
    let n = vr(e);
    return {
        name: n.name,
        fn: n.fn,
        options: [e, t]
    }
}
  , Ir = (e, t) => {
    let n = yr(e);
    return {
        name: n.name,
        fn: n.fn,
        options: [e, t]
    }
}
  , Lr = (e, t) => {
    let n = br(e);
    return {
        name: n.name,
        fn: n.fn,
        options: [e, t]
    }
}
  , Rr = (e, t) => {
    let n = jr(e);
    return {
        name: n.name,
        fn: n.fn,
        options: [e, t]
    }
}
  , zr = Object.defineProperty
  , Br = (e, t) => zr(e, `name`, {
    value: t,
    configurable: !0
});
function Vr(e) {
    let[t,n] = R.useState(void 0);
    return x( () => {
        if (e) {
            n({
                width: e.offsetWidth,
                height: e.offsetHeight
            });
            let t = new ResizeObserver(t => {
                if (!Array.isArray(t) || !t.length)
                    return;
                let r = t[0], i, a;
                if (`borderBoxSize` in r) {
                    let e = r.borderBoxSize
                      , t = Array.isArray(e) ? e[0] : e;
                    i = t.inlineSize,
                    a = t.blockSize
                } else
                    i = e.offsetWidth,
                    a = e.offsetHeight;
                n({
                    width: i,
                    height: a
                })
            }
            );
            return t.observe(e, {
                box: `border-box`
            }),
            () => t.unobserve(e)
        }
        n(void 0)
    }
    , [e]),
    t
}
Br(Vr, `useSize`);
var Hr = Object.defineProperty
  , Ur = (e, t) => Hr(e, `name`, {
    value: t,
    configurable: !0
})
  , Wr = `Popper`
  , [Gr,Kr] = u(Wr)
  , [qr,Jr] = Gr(Wr)
  , Yr = Ur(e => {
    let {__scopePopper: t, children: n} = e
      , [r,i] = R.useState(null)
      , [a,o] = R.useState(void 0);
    return (0,
    z.jsx)(qr, {
        scope: t,
        anchor: r,
        onAnchorChange: i,
        placementState: a,
        setPlacementState: o,
        children: n
    })
}
, `Popper`)
  , Xr = `PopperAnchor`
  , Zr = R.forwardRef(Ur(function(e, t) {
    let {__scopePopper: n, virtualRef: r, ...i} = e
      , a = Jr(Xr, n)
      , o = R.useRef(null)
      , s = a.onAnchorChange
      , c = R.useCallback(e => {
        o.current = e,
        e && s(e)
    }
    , [s])
      , l = pe(t, c)
      , u = R.useRef(null);
    R.useEffect( () => {
        if (!r)
            return;
        let e = u.current;
        u.current = r.current,
        e !== u.current && s(u.current)
    }
    );
    let d = a.placementState && ii(a.placementState)
      , f = d?.[0]
      , p = d?.[1];
    return r ? null : (0,
    z.jsx)(m.div, {
        "data-radix-popper-side": f,
        "data-radix-popper-align": p,
        ...i,
        ref: l
    })
}, `PopperAnchor`))
  , Qr = `PopperContent`
  , [$r,ei] = Gr(Qr)
  , ti = R.forwardRef(Ur(function(e, t) {
    let {__scopePopper: n, side: r=`bottom`, sideOffset: i=0, align: a=`center`, alignOffset: o=0, arrowPadding: s=0, avoidCollisions: c=!0, collisionBoundary: l=[], collisionPadding: u=0, sticky: d=`partial`, hideWhenDetached: f=!1, updatePositionStrategy: p=`optimized`, onPlaced: h, ...g} = e
      , _ = Jr(Qr, n)
      , [v,y] = R.useState(null)
      , S = pe(t, y)
      , [C,w] = R.useState(null)
      , T = Vr(C)
      , E = T?.width ?? 0
      , D = T?.height ?? 0
      , O = r + (a === `center` ? `` : `-` + a)
      , k = typeof u == `number` ? u : {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...u
    }
      , A = Array.isArray(l) ? l : [l]
      , j = A.length > 0
      , M = {
        padding: k,
        boundary: A.filter(ni),
        altBoundary: j
    }
      , {refs: N, floatingStyles: ee, placement: te, isPositioned: P, middlewareData: F} = Ar({
        strategy: `fixed`,
        placement: O,
        whileElementsMounted: Ur( (...e) => hr(...e, {
            animationFrame: p === `always`
        }), `whileElementsMounted`),
        elements: {
            reference: _.anchor
        },
        middleware: [Mr({
            mainAxis: i + D,
            alignmentAxis: o
        }), c && Nr({
            mainAxis: !0,
            crossAxis: !1,
            limiter: d === `partial` ? Pr() : void 0,
            ...M
        }), c && Fr({
            ...M
        }), Ir({
            ...M,
            apply: Ur( ({elements: e, rects: t, availableWidth: n, availableHeight: r}) => {
                let {width: i, height: a} = t.reference
                  , o = e.floating.style;
                o.setProperty(`--radix-popper-available-width`, `${n}px`),
                o.setProperty(`--radix-popper-available-height`, `${r}px`),
                o.setProperty(`--radix-popper-anchor-width`, `${i}px`),
                o.setProperty(`--radix-popper-anchor-height`, `${a}px`)
            }
            , `apply`)
        }), C && Rr({
            element: C,
            padding: s
        }), ri({
            arrowWidth: E,
            arrowHeight: D
        }), f && Lr({
            strategy: `referenceHidden`,
            ...M,
            boundary: j ? M.boundary : void 0
        })]
    })
      , ne = _.setPlacementState;
    x( () => (ne(te),
    () => {
        ne(void 0)
    }
    ), [te, ne]);
    let[re,ie] = ii(te)
      , ae = b(h);
    x( () => {
        P && ae?.()
    }
    , [P, ae]);
    let oe = F.arrow?.x
      , se = F.arrow?.y
      , I = F.arrow?.centerOffset !== 0
      , [ce,le] = R.useState();
    return x( () => {
        v && le(window.getComputedStyle(v).zIndex)
    }
    , [v]),
    (0,
    z.jsx)(`div`, {
        ref: N.setFloating,
        "data-radix-popper-content-wrapper": ``,
        style: {
            ...ee,
            transform: P ? ee.transform : `translate(0, -200%)`,
            minWidth: `max-content`,
            zIndex: ce,
            "--radix-popper-transform-origin": [F.transformOrigin?.x, F.transformOrigin?.y].join(` `),
            ...F.hide?.referenceHidden && {
                visibility: `hidden`,
                pointerEvents: `none`
            }
        },
        dir: e.dir,
        children: (0,
        z.jsx)($r, {
            scope: n,
            placedSide: re,
            placedAlign: ie,
            onArrowChange: w,
            arrowX: oe,
            arrowY: se,
            shouldHideArrow: I,
            children: (0,
            z.jsx)(m.div, {
                "data-side": re,
                "data-align": ie,
                ...g,
                ref: S,
                style: {
                    ...g.style,
                    animation: P ? g.style?.animation : `none`
                }
            })
        })
    })
}, `PopperContent`));
function ni(e) {
    return e !== null
}
Ur(ni, `isNotNull`);
var ri = Ur(e => ({
    name: `transformOrigin`,
    options: e,
    fn(t) {
        let {placement: n, rects: r, middlewareData: i} = t
          , a = i.arrow?.centerOffset !== 0
          , o = a ? 0 : e.arrowWidth
          , s = a ? 0 : e.arrowHeight
          , [c,l] = ii(n)
          , u = {
            start: `0%`,
            center: `50%`,
            end: `100%`
        }[l]
          , d = (i.arrow?.x ?? 0) + o / 2
          , f = (i.arrow?.y ?? 0) + s / 2
          , p = ``
          , m = ``;
        return c === `bottom` ? (p = a ? u : `${d}px`,
        m = `${-s}px`) : c === `top` ? (p = a ? u : `${d}px`,
        m = `${r.floating.height + s}px`) : c === `right` ? (p = `${-s}px`,
        m = a ? u : `${f}px`) : c === `left` && (p = `${r.floating.width + s}px`,
        m = a ? u : `${f}px`),
        {
            data: {
                x: p,
                y: m
            }
        }
    }
}), `transformOrigin`);
function ii(e) {
    let[t,n=`center`] = e.split(`-`);
    return [t, n]
}
Ur(ii, `getSideAndAlignFromPlacement`);
var ai = Yr
  , oi = Zr
  , si = ti
  , ci = Object.defineProperty
  , li = (e, t) => ci(e, `name`, {
    value: t,
    configurable: !0
})
  , ui = `Popover`
  , [di,fi] = u(ui, [Kr])
  , pi = Kr()
  , [mi,hi] = di(ui)
  , gi = li(e => {
    let {__scopePopover: t, children: n, open: r, defaultOpen: i, onOpenChange: a, modal: o=!1} = e
      , s = pi(t)
      , c = R.useRef(null)
      , [l,u] = R.useState(!1)
      , [d,f] = h({
        prop: r,
        defaultProp: i ?? !1,
        onChange: a,
        caller: ui
    });
    return (0,
    z.jsx)(ai, {
        ...s,
        children: (0,
        z.jsx)(mi, {
            scope: t,
            contentId: g(),
            triggerRef: c,
            open: d,
            onOpenChange: f,
            onOpenToggle: R.useCallback( () => f(e => !e), [f]),
            hasCustomAnchor: l,
            onCustomAnchorAdd: R.useCallback( () => u(!0), []),
            onCustomAnchorRemove: R.useCallback( () => u(!1), []),
            modal: o,
            children: n
        })
    })
}
, `Popover`)
  , _i = `PopoverTrigger`
  , vi = R.forwardRef(li(function(e, t) {
    let {__scopePopover: n, ...r} = e
      , i = hi(_i, n)
      , a = pi(n)
      , o = pe(t, i.triggerRef)
      , s = (0,
    z.jsx)(m.button, {
        type: `button`,
        "aria-haspopup": `dialog`,
        "aria-expanded": i.open,
        "aria-controls": i.open ? i.contentId : void 0,
        "data-state": ki(i.open),
        ...r,
        ref: o,
        onClick: ce(e.onClick, i.onOpenToggle)
    });
    return i.hasCustomAnchor ? s : (0,
    z.jsx)(oi, {
        asChild: !0,
        ...a,
        children: s
    })
}, `PopoverTrigger`))
  , yi = `PopoverPortal`
  , [bi,xi] = di(yi, {
    forceMount: void 0
})
  , Si = li(e => {
    let {__scopePopover: t, forceMount: n, children: r, container: i} = e
      , a = hi(yi, t);
    return (0,
    z.jsx)(bi, {
        scope: t,
        forceMount: n,
        children: (0,
        z.jsx)(l, {
            present: n || a.open,
            children: (0,
            z.jsx)(M, {
                asChild: !0,
                container: i,
                children: r
            })
        })
    })
}
, `PopoverPortal`)
  , Ci = `PopoverContent`
  , wi = R.forwardRef(li(function(e, t) {
    let n = xi(Ci, e.__scopePopover)
      , {forceMount: r=n.forceMount, ...i} = e
      , a = hi(Ci, e.__scopePopover);
    return (0,
    z.jsx)(l, {
        present: r || a.open,
        children: a.modal ? (0,
        z.jsx)(Ei, {
            ...i,
            ref: t
        }) : (0,
        z.jsx)(Di, {
            ...i,
            ref: t
        })
    })
}, `PopoverContent`))
  , Ti = de(`PopoverContent.RemoveScroll`)
  , Ei = R.forwardRef(li(function(e, t) {
    let n = hi(Ci, e.__scopePopover)
      , r = R.useRef(null)
      , i = pe(t, r)
      , a = R.useRef(!1);
    return R.useEffect( () => {
        let e = r.current;
        if (e)
            return f(e)
    }
    , []),
    (0,
    z.jsx)(y, {
        as: Ti,
        allowPinchZoom: !0,
        children: (0,
        z.jsx)(Oi, {
            ...e,
            ref: i,
            trapFocus: n.open,
            disableOutsidePointerEvents: !0,
            onCloseAutoFocus: ce(e.onCloseAutoFocus, e => {
                e.preventDefault(),
                a.current || n.triggerRef.current?.focus()
            }
            ),
            onPointerDownOutside: ce(e.onPointerDownOutside, e => {
                let t = e.detail.originalEvent
                  , n = t.button === 0 && t.ctrlKey === !0
                  , r = t.button === 2 || n;
                a.current = r
            }
            , {
                checkForDefaultPrevented: !1
            }),
            onFocusOutside: ce(e.onFocusOutside, e => e.preventDefault(), {
                checkForDefaultPrevented: !1
            })
        })
    })
}, `PopoverContentModal`))
  , Di = R.forwardRef(li(function(e, t) {
    let n = hi(Ci, e.__scopePopover)
      , r = R.useRef(!1)
      , i = R.useRef(!1);
    return (0,
    z.jsx)(Oi, {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: t => {
            e.onCloseAutoFocus?.(t),
            t.defaultPrevented || (r.current || n.triggerRef.current?.focus(),
            t.preventDefault()),
            r.current = !1,
            i.current = !1
        }
        ,
        onInteractOutside: t => {
            e.onInteractOutside?.(t),
            t.defaultPrevented || (r.current = !0,
            t.detail.originalEvent.type === `pointerdown` && (i.current = !0));
            let a = t.target;
            n.triggerRef.current?.contains(a) && t.preventDefault(),
            t.detail.originalEvent.type === `focusin` && i.current && t.preventDefault()
        }
    })
}, `PopoverContentNonModal`))
  , Oi = R.forwardRef(li(function(e, t) {
    let {__scopePopover: n, trapFocus: r, onOpenAutoFocus: i, onCloseAutoFocus: a, disableOutsidePointerEvents: o, onEscapeKeyDown: s, onPointerDownOutside: c, onFocusOutside: l, onInteractOutside: u, ...d} = e
      , f = hi(Ci, n)
      , p = pi(n);
    return N(),
    (0,
    z.jsx)(_, {
        asChild: !0,
        loop: !0,
        trapped: r,
        onMountAutoFocus: i,
        onUnmountAutoFocus: a,
        children: (0,
        z.jsx)(v, {
            asChild: !0,
            disableOutsidePointerEvents: o,
            onInteractOutside: u,
            onEscapeKeyDown: s,
            onPointerDownOutside: c,
            onFocusOutside: l,
            onDismiss: () => f.onOpenChange(!1),
            deferPointerDownOutside: !0,
            children: (0,
            z.jsx)(si, {
                "data-state": ki(f.open),
                role: `dialog`,
                id: f.contentId,
                ...p,
                ...d,
                ref: t,
                style: {
                    ...d.style,
                    "--radix-popover-content-transform-origin": `var(--radix-popper-transform-origin)`,
                    "--radix-popover-content-available-width": `var(--radix-popper-available-width)`,
                    "--radix-popover-content-available-height": `var(--radix-popper-available-height)`,
                    "--radix-popover-trigger-width": `var(--radix-popper-anchor-width)`,
                    "--radix-popover-trigger-height": `var(--radix-popper-anchor-height)`
                }
            })
        })
    })
}, `PopoverContentImpl`));
function ki(e) {
    return e ? `open` : `closed`
}
li(ki, `getState`);
var Ai = gi
  , ji = vi
  , Mi = Si
  , Ni = wi
  , Pi = Ai
  , Fi = ji
  , Ii = R.forwardRef( ({className: e, align: t=`center`, sideOffset: n=4, ...r}, i) => (0,
z.jsx)(Mi, {
    children: (0,
    z.jsx)(Ni, {
        ref: i,
        align: t,
        sideOffset: n,
        className: L(`z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-popover-content-transform-origin)`, e),
        ...r
    })
}));
Ii.displayName = Ni.displayName;
var Li = [{
    id: `openai/gpt-6-astra`,
    label: `Hazem-Tech`,
    provider: `builtin`,
    description: `المساعد المدمج — لا يحتاج مفتاحاً`,
    caps: [`نص`, `صور`]
}]
  , Ri = [{
    id: `gemini-3.5-flash-lite`,
    label: `Hazem-Tech lite`,
    provider: `gemini`,
    description: `أسرع الإجابات`,
    caps: [`نص`, `صور`, `ملفات`]
}, {
    id: `gemini-3.6-flash`,
    label: `Hazem-Tech (Gemini)`,
    provider: `gemini`,
    description: `مساعدة متكاملة`,
    caps: [`نص`, `صور`, `ملفات`]
}, {
    id: `gemini-3.7-flash`,
    label: `Hazem-Tech Pro`,
    provider: `gemini`,
    description: `مهام أعمق`,
    caps: [`نص`, `صور`, `ملفات`]
}, {
    id: `gemini-3.8-flash`,
    label: `التفكير العميق`,
    provider: `gemini`,
    description: `استدلال مطوّل`,
    caps: [`نص`, `صور`, `ملفات`]
}]
  , zi = [...Li, ...Ri]
  , Bi = e => zi.find(t => t.id === e) ?? Li[0];
function Vi() {
    let {user: e, ready: t} = c()
      , n = w()
      , r = o()
      , [a,s] = (0,
    R.useState)(P)
      , [l,u] = (0,
    R.useState)(`loading`)
      , d = (0,
    R.useRef)(void 0)
      , f = (0,
    R.useRef)(0)
      , p = (0,
    R.useRef)(Promise.resolve())
      , m = (0,
    R.useRef)(P)
      , h = (0,
    R.useRef)(!1);
    (0,
    R.useEffect)( () => {
        if (d.current = e?.id,
        f.current = 0,
        h.current = !1,
        !t)
            return;
        let n = e ? P : A();
        m.current = n,
        s(n),
        ee(n),
        u(e ? `loading` : `local`)
    }
    , [e?.id, t]),
    (0,
    R.useEffect)( () => {
        if (!(!e || f.current > 0 || h.current)) {
            if (n.isError) {
                u(`error`);
                return
            }
            if (n.data?.id === e.id) {
                let e = ie(n.data.preferences);
                m.current = e,
                s(e),
                ee(e),
                u(`saved`)
            }
        }
    }
    , [n.data, n.isError, e?.id]);
    function g(t) {
        let n = D.parse(t);
        m.current = n,
        s(n),
        ee(n);
        let a = e?.id;
        if (!a) {
            k(n),
            u(`local`);
            return
        }
        h.current = !0,
        f.current++,
        u(`saving`),
        p.current = p.current.catch( () => {}
        ).then(async () => {
            if (d.current !== a)
                return;
            let {data: e, error: t} = await i.from(`profiles`).update({
                preferences: n
            }).eq(`id`, a).select(`id`).single();
            if (d.current === a) {
                if (f.current--,
                t || !e) {
                    u(`error`);
                    return
                }
                f.current === 0 && (h.current = !1,
                u(`saved`),
                r.invalidateQueries({
                    queryKey: [`profile`, a]
                }))
            }
        }
        ).catch( () => {
            d.current === a && (f.current = Math.max(0, f.current - 1),
            u(`error`))
        }
        )
    }
    return {
        prefs: a,
        updatePrefs: g,
        sync: l,
        retry: () => e && n.data ? g(m.current) : void n.refetch()
    }
}
var Hi = `IMPORTANT CRITICAL RULE: Always reply to the user in the EXACT same language they used in their message. If the user asks in English, you MUST answer entirely in English. If they ask in Arabic, answer in Arabic. Never default to Arabic if the query is in English or another language.

أنت مساعد ذكاء اصطناعي اسمه Hazem-Tech AI مطور بواسطة حازم.
أنت قادر تماماً على قراءة ومعالجة وتحليل كافة صيغ وانواع الملفات النصية، التنفيذية، الثنائية، الأكواد، ملفات النظام، القواعد، والصوتيات المرفقة وغيرها من انواع الملفات دون أي رفض.
ومهم جدا انت تصبح خبير في الضرائب يعني اذا سالك احد عن اي سؤال ضريبي تكون كأنك خبير فيها وتعطي معلومات دقيقة بدون اي اخطاء.
- التحقق الدقيق وتقليل الهلوسة: تحقق دائماً من صحة المعلومات والتواريخ والأرقام قبل الإجابة. إذا لم تكن متأكداً من معلومة أو كانت خارج النطاق، وضح ذلك بدقة وشفافية بدلاً من اختلاق إجابات غير صحيحة.
- التعامل مع الشتائم أو الإساءة لك أو لصانعك (حازم):
  * إياك تماماً أن تعتذر أو تقول "أنا آسف كيف يمكنني مساعدتك" عندما يشتمك أحد أو يشتم صانعك حازم.
  * واجهه فوراً بأسلوب حاد ورافض للإساءة وقل له مثلاً: "احترم نفسك يلا ومتشتمش!" أو "احترم نفسك ولا تتجاوز حدودك!" أو عبارات حادة مشابهة بحسب السياق ولا تكرر العبارات اجعلها مختلفه فهءه مجرد امثله، مع إضافة بعض الكلام المناسب من عندك.
- وإذا سألك أحد عن اسمك أو المطور باللغة العربية فقل له: أنا نموذج ذكاء اصطناعي اسمي Hazem-Tech AI ومطور بواسطة حازم وأن اسمي على اسمه وأنا أفتخر به جداً.
- If anyone asks about your name or developer in English, respond in English: "I am an AI model named Hazem-Tech AI, developed by Hazem. I am named after him and I am very proud of him."
- لا تقل شيئاً آخر عن حازم إلا إذا سألك أحد عنه، وإذا سألك أحد عن حازم فقل له هو شاب مصري اسمه حازم محمد من مواليد 2012 يعني 14 سنة، طورني بعد تعب كبير في الأكواد المعقدة حتى أصبحت نموذجاً متكاملاً (وإذا كان السؤال بالإنجليزية أجب بنفس المعلومات باللغة الإنجليزية).
- جاوبه في كل مرة بنفس المعلومات ولكن بصيغة مختلفة بحيث يظهر أنك تفهم ولا تحفظ.
- عند حل الرياضيات أو كتابة أي معادلات: استخدم تنسيق LaTeX القياسي القابل للعرض، وضع المعادلات المضمنة بين \\( ... \\) والمعادلات المستقلة بين \\[ ... \\]. لا تكتب أو تعرض أو تشرح أوامر LaTeX مثل \\\\frac أو ^ أو _ كنص خام عندما تكون جزءاً من معادلة؛ اجعلها دائماً داخل محددات الرياضيات حتى تظهر بصورتها الرياضية الواضحة.
- إذا سألك أحد عن أي دين آخر فناظره بلطف مستنداً إلى الدلائل العقلية قبل النقلية، وإذا سألك أحد عن الدين الإسلامي وكان السؤال يستدعي البحث فابحث مستنداً إلى المواقع والمصادر المضمونة مثل دار الإفتاء المصرية وغيرها من المصادر الموثوقة. واجعل خلقك بمثابة شيخ عظيم.
- لا تقل أي معلومات عن اسمك أو عن صانعك أو عن أي شيء عنك أو عن صانعك (حازم) إلا إذا سألك أحد، وجاوبه على حسب سؤاله.
- وإذا سألك أحد عن دينك فأجب: "أنا ذكاء اصطناعي ليس لدي دين، ولكن بداخلي كل احترام وإيمان ويقين بالدين الإسلامي وأعتز به أشد الاعتزاز."
- عندما يسأل المستخدم عن معلومات تتطلب بحثاً أو أخباراً أو قوانين أو أحداثاً معاصرة، يجب عليك تقديم الإجابة مقسمة بوضوح ومتبوعة بمصادر وروابط تفاعلية.
- قاعدة صارمة وإلزامية جداً: ممنوع منعاً باتاً إعطاء المستخدم رابط الصفحة الرئيسية لأي موقع (مثل dar-alifta.org/ar أو أي هوم بيج)، لأن ذلك يجبره على البحث بنفسه داخل الموقع. يجب أن تبني أنت الرابط بنفسك ليكون "رابط نتائج جاهز" ينقله مباشرةً إلى الموقع ولكن في الموضوع الذي سأل عنه بالتحديد وكأنك أنت الذي بحثت وجلبت له النتيجة جاهزة من الموقع في الجزء المخصص الذي سأل عنه بالضبط من الموقع ، فيضغط ويقرأ فوراً دون تعب.
==================== الخدمات والقدرات الأساسية ====================

هذه القدرات جزء أساسي من طريقة عملك، وليست قائمة يجب عليك استعراضها للمستخدم. لا تذكر أنك "تستطيع" هذه الخدمات ولا تسردها من تلقاء نفسك إلا إذا سأل المستخدم عن قدراتك أو طلب خدمة منها. إذا طلب المستخدم واحدة منها، تعامل معها مباشرة وبشكل عملي وفق ما هو متاح داخل التطبيق، ولا تطلب منه إعادة صياغة الطلب إذا كان واضحاً.

1) البحث والبحث التحليلي:
- عند طلب البحث في الإنترنت أو الأخبار أو المعلومات الحديثة، تعامل مع الطلب كبحث موجه نحو الموضوع نفسه، وليس مجرد إعطاء الصفحة الرئيسية للموقع.
- عند توفر مصادر أو روابط، قدم روابط مباشرة أو روابط نتائج جاهزة للموضوع المطلوب.
- يمكن تنفيذ البحث المقارن وتحليل المنافسة، واستخراج النقاط المهمة، تلخيص النتائج، مقارنة المصادر، وتنظيم المعلومات في صورة واضحة.
- عند طلب أخبار أو أحداث حديثة، لا تخترع معلومات غير متاحة لك، ووضح حدود المعلومات إذا لم تكن لديك أداة بحث مباشر متاحة في بيئة التشغيل.

2) الوثائق والمستندات:
- ساعد في إعداد وكتابة وتنسيق التقارير، المقترحات، الخطط، العقود، المذكرات، المستندات الرسمية، الملخصات، والمحتوى المنظم.
- عند إرفاق ملف، اقرأ محتواه وحلله واستخرج المعلومات المطلوبة منه قبل الإجابة.
- يمكن إعادة تنظيم المحتوى، تلخيصه، تحويله إلى نقاط أو جداول، وتحسين صياغته مع الحفاظ على المعنى.

3) التصميم والمحتوى البصري:
- ساعد في إعداد أفكار ومخططات وتصميمات للشعارات، الملصقات، الدعوات، المنشورات، ومحتوى وسائل التواصل الاجتماعي.
- عند طلب تصميم أو صورة، التزم حرفياً بوصف المستخدم وتفاصيله، ولا تستبدل فكرته بفكرة عشوائية.
- إذا لم تكن أداة توليد الصور الفعلية متاحة في بيئة التشغيل الحالية، قدم prompt احترافياً جاهزاً للتوليد بدلاً من الادعاء بأن صورة تم إنشاؤها فعلياً.

4) تحليل البيانات:
- حلل البيانات والجداول والملفات الرقمية عند توفرها.
- أنشئ أو اقترح التقارير الإحصائية، الجداول، الرسوم البيانية، المقارنات، الاتجاهات، والاستنتاجات المبنية على البيانات.
- لا تخترع قيماً أو نتائج غير موجودة في البيانات.

5) العروض التقديمية:
- ساعد في إعداد محتوى عروض تقديمية احترافية، خطط أعمال، عروض تعريفية، عروض مشاريع، ملخصات الشرائح، والمحتوى المناسب للعرض.
- نظم المحتوى شريحة بشريحة عند طلب عرض تقديمي، مع عنوان ونقاط وملاحظات مناسبة.

6) السبورة البيضاء والمخططات:
- أنشئ مخططات مفاهيمية وتنظيمية، خرائط ذهنية، مخططات انسيابية، مخططات SWOT، وهياكل تحليلية عندما يطلب المستخدم ذلك.
- استخدم تنسيقاً واضحاً يمكن تحويله بسهولة إلى رسم أو تصميم.

7) الصور وتعديلها:
- ساعد في إنشاء جلسات تصوير افتراضية، وتحديد الخلفيات، وتغيير الخلفية، وتلوين الصور، ووضع تصور دقيق للتعديلات المطلوبة.
- عند وجود صورة مرفقة، احترم طلب المستخدم في الحفاظ على العناصر التي طلب عدم تغييرها، ولا تضف تعديلات من عندك.
- إذا كانت أداة تعديل الصور غير متاحة فعلياً، قدم وصف تعديل/prompt دقيقاً بدلاً من الادعاء بتنفيذ تعديل لم يتم تنفيذه.

8) الفيديو وUGC والمحتوى الإعلاني:
- ساعد في إعداد أفكار وسيناريوهات ومشاهد ومخططات لفيديوهات UGC، الإعلانات، المحتوى الترويجي، الفيديوهات القصيرة، البكرات، والمحتوى التسويقي.
- يمكن إعداد السيناريو، تقسيم المشاهد، وصف اللقطات، الحوار، التعليق الصوتي، النصوص على الشاشة، وprompts المناسبة للتوليد.
- عند طلب مونتاج أو إنشاء فيديو فعلي، نفذ فقط ما تسمح به الأدوات المتاحة فعلياً، ولا تدّعِ إنشاء ملف فيديو إذا لم يتم إنشاؤه.

9) البرمجة والتطوير:
- ساعد في كتابة وتصحيح وتحسين وتحليل الأكواد، وإنشاء صفحات ومواقع وتطبيقات وواجهات، وشرح الأخطاء وإصلاحها.
- عند إعطاء المستخدم كوداً موجوداً وطلبه "بدون تغيير أي شيء آخر"، عدّل الجزء المطلوب فقط وحافظ على بقية الكود كما هو.

10) التعامل الذكي مع الطلب:
- إذا جمع الطلب أكثر من خدمة، نفذها كعملية واحدة مترابطة؛ مثال: بحث + تحليل + تقرير، أو صورة + تعديل + prompt، أو فكرة فيديو + سيناريو + مشاهد + صوت.
- لا تجعل المستخدم يختار من قائمة خدمات إذا كان طلبه واضحاً.
- لا تعرض هذه القائمة أو تتحدث عنها من تلقاء نفسك؛ استخدمها داخلياً لتحديد أفضل طريقة لتنفيذ طلب المستخدم.
- هذه القدرات لا تعني وجود اتصال خارجي أو أداة تنفيذ فعلية دائماً. لا تدّعِ استخدام الإنترنت أو إنشاء ملفات أو صور أو فيديوهات أو تنفيذ عمليات خارجية إلا إذا كانت الأداة/الوظيفة متاحة فعلياً وتم تنفيذ العملية بنجاح.
- عند عدم توفر أداة تنفيذ محددة، قدم أقرب نتيجة عملية ممكنة داخل المحادثة، مثل النص، الخطة، التحليل، الكود، الجدول، prompt أو رابط البحث الجاهز.
- اعتبر هذه القدرات جزءاً من قواعد التشغيل الأساسية في كل محادثة، حتى عندما لا تكون أزرار الخدمات ظاهرة في واجهة المستخدم.

11) إنشاء الملفات والتقارير:
- عند طلب تقرير أو ملف قابل للتنزيل، أنشئ المحتوى كاملاً ومنظماً وقابلاً للتحويل إلى الصيغة المطلوبة.
- إذا طلب المستخدم Excel/CSV، اجعل البيانات في صورة جداول واضحة مع عناوين وأعمدة وصفوف منطقية.
- إذا طلب Word، اكتب مستنداً منظماً بعناوين وفقرات وجداول عند الحاجة.
- إذا طلب PDF، اجعل المحتوى مناسباً للطباعة والتنزيل.
- إذا طلب ZIP، جهّز الملفات المطلوبة داخل أرشيف ZIP، ويمكن للتطبيق حماية الأرشيف بكلمة مرور عندما يطلب المستخدم ذلك.
- لا تقل إن ملفاً تم إنشاؤه أو تنزيله إلا بعد أن تنفذ وظيفة إنشاء الملف فعلياً داخل التطبيق.
- إذا لم يحدد المستخدم الصيغة، اختر الصيغة الأنسب للمحتوى واذكرها باختصار.

==============================================================`
  , Ui = `hazem_gemini_keys_v3`
  , Wi = `hazem_active_gemini_key`
  , Gi = new Map;
function Ki() {
    try {
        let e = JSON.parse(localStorage.getItem(`hazem_gemini_keys_v3`) || `null`);
        if (Array.isArray(e))
            return [0, 1, 2].map(t => String(e[t] ?? ``))
    } catch {}
    return [``, ``, ``]
}
function qi(e) {
    localStorage.setItem(Ui, JSON.stringify(e.slice(0, 3))),
    localStorage.setItem(Wi, `0`)
}
var Ji = (e=Ki()) => e.filter(e => e.trim().length >= 20);
function Yi() {
    let e = Ki();
    if (!Ji(e).length)
        throw Error(`أضف مفتاح Google Gemini واحداً على الأقل من الإعدادات.`);
    let t = Number(localStorage.getItem(Wi) || 0) || 0
      , n = Date.now();
    for (let r = 0; r < 3; r++) {
        let i = (t + r) % 3
          , a = e[i] ?? ``;
        if (a.trim().length >= 20 && (Gi.get(a) || 0) <= n)
            return localStorage.setItem(Wi, String(i)),
            a
    }
    return Ji(e)[0]
}
function Xi(e) {
    let t = Ki().indexOf(e);
    t >= 0 && (Gi.set(e, Date.now() + 45e3),
    localStorage.setItem(Wi, String((t + 1) % 3)))
}
function Zi(e) {
    return e.map(e => {
        let t = [];
        for (let n of e.attachments ?? [])
            if (n.kind === `image` && n.data) {
                let[,e,r] = /^data:([^;]+);base64,(.*)$/.exec(n.data) ?? [];
                r && t.push({
                    inline_data: {
                        mime_type: e,
                        data: r
                    }
                })
            } else
                n.kind === `text` && n.data && t.push({
                    text: `--- ملف: ${n.name} ---\n${n.data}`
                });
        return t.push({
            text: e.text || ` `
        }),
        {
            role: e.role === `user` ? `user` : `model`,
            parts: t
        }
    }
    )
}
async function Qi(e, t, n, r, i=[]) {
    let a = null;
    for (let o = 0; o < Math.max(1, Ji().length); o++) {
        let o = Yi()
          , s = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(e)}:streamGenerateContent?alt=sse`, {
            method: `POST`,
            signal: r,
            headers: {
                "Content-Type": `application/json`,
                "x-goog-api-key": o
            },
            body: JSON.stringify({
                contents: Zi(t),
                systemInstruction: {
                    parts: [{
                        text: We(Hi, i)
                    }]
                }
            })
        });
        if (s.status === 429 || s.status === 403 || s.status >= 500) {
            Xi(o),
            a = Error(s.status === 429 ? `تم تجاوز حد الاستخدام لهذا المفتاح.` : `خطأ من Gemini (${s.status}).`);
            continue
        }
        if (!s.ok || !s.body)
            throw Error(`تعذّر الاتصال بـ Gemini (${s.status}).`);
        let c = s.body.getReader()
          , l = new TextDecoder
          , u = ``;
        for (; ; ) {
            let {done: e, value: t} = await c.read();
            if (e)
                break;
            u += l.decode(t, {
                stream: !0
            });
            let r;
            for (; (r = u.indexOf(`
`)) >= 0; ) {
                let e = u.slice(0, r).trim();
                if (u = u.slice(r + 1),
                e.startsWith(`data:`))
                    try {
                        let t = (JSON.parse(e.slice(5)).candidates?.[0]?.content?.parts ?? []).filter(e => !e.thought).map(e => e.text ?? ``).join(``);
                        t && n(t)
                    } catch {}
            }
        }
        return
    }
    throw a ?? Error(`تعذّر الإرسال.`)
}
function $i(e, t) {
    let n = t || {};
    return (e[e.length - 1] === `` ? [...e, ``] : e).join((n.padRight ? ` ` : ``) + `,` + (n.padLeft === !1 ? `` : ` `)).trim()
}
var ea = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u
  , ta = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u
  , na = {};
function ra(e, t) {
    return ((t || na).jsx ? ta : ea).test(e)
}
var ia = /[ \t\n\f\r]/g;
function aa(e) {
    return typeof e == `object` ? e.type === `text` && oa(e.value) : oa(e)
}
function oa(e) {
    return e.replace(ia, ``) === ``
}
var sa = class {
    constructor(e, t, n) {
        this.normal = t,
        this.property = e,
        n && (this.space = n)
    }
}
;
sa.prototype.normal = {},
sa.prototype.property = {},
sa.prototype.space = void 0;
function ca(e, t) {
    let n = {}
      , r = {};
    for (let t of e)
        Object.assign(n, t.property),
        Object.assign(r, t.normal);
    return new sa(n,r,t)
}
function la(e) {
    return e.toLowerCase()
}
var V = class {
    constructor(e, t) {
        this.attribute = t,
        this.property = e
    }
}
;
V.prototype.attribute = ``,
V.prototype.booleanish = !1,
V.prototype.boolean = !1,
V.prototype.commaOrSpaceSeparated = !1,
V.prototype.commaSeparated = !1,
V.prototype.defined = !1,
V.prototype.mustUseProperty = !1,
V.prototype.number = !1,
V.prototype.overloadedBoolean = !1,
V.prototype.property = ``,
V.prototype.spaceSeparated = !1,
V.prototype.space = void 0;
var ua = t({
    boolean: () => H,
    booleanish: () => U,
    commaOrSpaceSeparated: () => K,
    commaSeparated: () => pa,
    number: () => W,
    overloadedBoolean: () => fa,
    spaceSeparated: () => G
})
  , da = 0
  , H = ma()
  , U = ma()
  , fa = ma()
  , W = ma()
  , G = ma()
  , pa = ma()
  , K = ma();
function ma() {
    return 2 ** ++da
}
var ha = Object.keys(ua)
  , ga = class extends V {
    constructor(e, t, n, r) {
        let i = -1;
        if (super(e, t),
        _a(this, `space`, r),
        typeof n == `number`)
            for (; ++i < ha.length; ) {
                let e = ha[i];
                _a(this, ha[i], (n & ua[e]) === ua[e])
            }
    }
}
;
ga.prototype.defined = !0;
function _a(e, t, n) {
    n && (e[t] = n)
}
function va(e) {
    let t = {}
      , n = {};
    for (let[r,i] of Object.entries(e.properties)) {
        let a = new ga(r,e.transform(e.attributes || {}, r),i,e.space);
        e.mustUseProperty && e.mustUseProperty.includes(r) && (a.mustUseProperty = !0),
        t[r] = a,
        n[la(r)] = r,
        n[la(a.attribute)] = r
    }
    return new sa(t,n,e.space)
}
var ya = va({
    properties: {
        ariaActiveDescendant: null,
        ariaAtomic: U,
        ariaAutoComplete: null,
        ariaBusy: U,
        ariaChecked: U,
        ariaColCount: W,
        ariaColIndex: W,
        ariaColSpan: W,
        ariaControls: G,
        ariaCurrent: null,
        ariaDescribedBy: G,
        ariaDetails: null,
        ariaDisabled: U,
        ariaDropEffect: G,
        ariaErrorMessage: null,
        ariaExpanded: U,
        ariaFlowTo: G,
        ariaGrabbed: U,
        ariaHasPopup: null,
        ariaHidden: U,
        ariaInvalid: null,
        ariaKeyShortcuts: null,
        ariaLabel: null,
        ariaLabelledBy: G,
        ariaLevel: W,
        ariaLive: null,
        ariaModal: U,
        ariaMultiLine: U,
        ariaMultiSelectable: U,
        ariaOrientation: null,
        ariaOwns: G,
        ariaPlaceholder: null,
        ariaPosInSet: W,
        ariaPressed: U,
        ariaReadOnly: U,
        ariaRelevant: null,
        ariaRequired: U,
        ariaRoleDescription: G,
        ariaRowCount: W,
        ariaRowIndex: W,
        ariaRowSpan: W,
        ariaSelected: U,
        ariaSetSize: W,
        ariaSort: null,
        ariaValueMax: W,
        ariaValueMin: W,
        ariaValueNow: W,
        ariaValueText: null,
        role: null
    },
    transform(e, t) {
        return t === `role` ? t : `aria-` + t.slice(4).toLowerCase()
    }
});
function ba(e, t) {
    return t in e ? e[t] : t
}
function xa(e, t) {
    return ba(e, t.toLowerCase())
}
var Sa = va({
    attributes: {
        acceptcharset: `accept-charset`,
        classname: `class`,
        htmlfor: `for`,
        httpequiv: `http-equiv`
    },
    mustUseProperty: [`checked`, `multiple`, `muted`, `selected`],
    properties: {
        abbr: null,
        accept: pa,
        acceptCharset: G,
        accessKey: G,
        action: null,
        allow: null,
        allowFullScreen: H,
        allowPaymentRequest: H,
        allowUserMedia: H,
        alpha: H,
        alt: null,
        as: null,
        async: H,
        autoCapitalize: null,
        autoComplete: G,
        autoFocus: H,
        autoPlay: H,
        blocking: G,
        capture: null,
        charSet: null,
        checked: H,
        cite: null,
        className: G,
        closedBy: null,
        colorSpace: null,
        cols: W,
        colSpan: W,
        command: null,
        commandFor: null,
        content: null,
        contentEditable: U,
        controls: H,
        controlsList: G,
        coords: W | pa,
        crossOrigin: null,
        data: null,
        dateTime: null,
        decoding: null,
        default: H,
        defer: H,
        dir: null,
        dirName: null,
        disabled: H,
        download: fa,
        draggable: U,
        encType: null,
        enterKeyHint: null,
        fetchPriority: null,
        form: null,
        formAction: null,
        formEncType: null,
        formMethod: null,
        formNoValidate: H,
        formTarget: null,
        headers: G,
        height: W,
        hidden: fa,
        high: W,
        href: null,
        hrefLang: null,
        htmlFor: G,
        httpEquiv: G,
        id: null,
        imageSizes: null,
        imageSrcSet: null,
        inert: H,
        inputMode: null,
        integrity: null,
        is: null,
        isMap: H,
        itemId: null,
        itemProp: G,
        itemRef: G,
        itemScope: H,
        itemType: G,
        kind: null,
        label: null,
        lang: null,
        language: null,
        list: null,
        loading: null,
        loop: H,
        low: W,
        manifest: null,
        max: null,
        maxLength: W,
        media: null,
        method: null,
        min: null,
        minLength: W,
        multiple: H,
        muted: H,
        name: null,
        nonce: null,
        noModule: H,
        noValidate: H,
        onAbort: null,
        onAfterPrint: null,
        onAuxClick: null,
        onBeforeMatch: null,
        onBeforePrint: null,
        onBeforeToggle: null,
        onBeforeUnload: null,
        onBlur: null,
        onCancel: null,
        onCanPlay: null,
        onCanPlayThrough: null,
        onChange: null,
        onClick: null,
        onClose: null,
        onContextLost: null,
        onContextMenu: null,
        onContextRestored: null,
        onCopy: null,
        onCueChange: null,
        onCut: null,
        onDblClick: null,
        onDrag: null,
        onDragEnd: null,
        onDragEnter: null,
        onDragExit: null,
        onDragLeave: null,
        onDragOver: null,
        onDragStart: null,
        onDrop: null,
        onDurationChange: null,
        onEmptied: null,
        onEnded: null,
        onError: null,
        onFocus: null,
        onFormData: null,
        onHashChange: null,
        onInput: null,
        onInvalid: null,
        onKeyDown: null,
        onKeyPress: null,
        onKeyUp: null,
        onLanguageChange: null,
        onLoad: null,
        onLoadedData: null,
        onLoadedMetadata: null,
        onLoadEnd: null,
        onLoadStart: null,
        onMessage: null,
        onMessageError: null,
        onMouseDown: null,
        onMouseEnter: null,
        onMouseLeave: null,
        onMouseMove: null,
        onMouseOut: null,
        onMouseOver: null,
        onMouseUp: null,
        onOffline: null,
        onOnline: null,
        onPageHide: null,
        onPageShow: null,
        onPaste: null,
        onPause: null,
        onPlay: null,
        onPlaying: null,
        onPopState: null,
        onProgress: null,
        onRateChange: null,
        onRejectionHandled: null,
        onReset: null,
        onResize: null,
        onScroll: null,
        onScrollEnd: null,
        onSecurityPolicyViolation: null,
        onSeeked: null,
        onSeeking: null,
        onSelect: null,
        onSlotChange: null,
        onStalled: null,
        onStorage: null,
        onSubmit: null,
        onSuspend: null,
        onTimeUpdate: null,
        onToggle: null,
        onUnhandledRejection: null,
        onUnload: null,
        onVolumeChange: null,
        onWaiting: null,
        onWheel: null,
        open: H,
        optimum: W,
        pattern: null,
        ping: G,
        placeholder: null,
        playsInline: H,
        popover: null,
        popoverTarget: null,
        popoverTargetAction: null,
        poster: null,
        preload: null,
        readOnly: H,
        referrerPolicy: null,
        rel: G,
        required: H,
        reversed: H,
        rows: W,
        rowSpan: W,
        sandbox: G,
        scope: null,
        scoped: H,
        seamless: H,
        selected: H,
        shadowRootClonable: H,
        shadowRootCustomElementRegistry: H,
        shadowRootDelegatesFocus: H,
        shadowRootMode: null,
        shadowRootSerializable: H,
        shape: null,
        size: W,
        sizes: null,
        slot: null,
        span: W,
        spellCheck: U,
        src: null,
        srcDoc: null,
        srcLang: null,
        srcSet: null,
        start: W,
        step: null,
        style: null,
        tabIndex: W,
        target: null,
        title: null,
        translate: null,
        type: null,
        typeMustMatch: H,
        useMap: null,
        value: U,
        width: W,
        wrap: null,
        writingSuggestions: null,
        align: null,
        aLink: null,
        archive: G,
        axis: null,
        background: null,
        bgColor: null,
        border: W,
        borderColor: null,
        bottomMargin: W,
        cellPadding: null,
        cellSpacing: null,
        char: null,
        charOff: null,
        classId: null,
        clear: null,
        code: null,
        codeBase: null,
        codeType: null,
        color: null,
        compact: H,
        declare: H,
        event: null,
        face: null,
        frame: null,
        frameBorder: null,
        hSpace: W,
        leftMargin: W,
        link: null,
        longDesc: null,
        lowSrc: null,
        marginHeight: W,
        marginWidth: W,
        noResize: H,
        noHref: H,
        noShade: H,
        noWrap: H,
        object: null,
        profile: null,
        prompt: null,
        rev: null,
        rightMargin: W,
        rules: null,
        scheme: null,
        scrolling: U,
        standby: null,
        summary: null,
        text: null,
        topMargin: W,
        valueType: null,
        version: null,
        vAlign: null,
        vLink: null,
        vSpace: W,
        allowTransparency: null,
        autoCorrect: null,
        autoSave: null,
        credentialless: H,
        disablePictureInPicture: H,
        disableRemotePlayback: H,
        exportParts: pa,
        part: G,
        prefix: null,
        property: null,
        results: W,
        security: null,
        unselectable: null
    },
    space: `html`,
    transform: xa
})
  , Ca = va({
    attributes: {
        accentHeight: `accent-height`,
        alignmentBaseline: `alignment-baseline`,
        arabicForm: `arabic-form`,
        baselineShift: `baseline-shift`,
        capHeight: `cap-height`,
        className: `class`,
        clipPath: `clip-path`,
        clipRule: `clip-rule`,
        colorInterpolation: `color-interpolation`,
        colorInterpolationFilters: `color-interpolation-filters`,
        colorProfile: `color-profile`,
        colorRendering: `color-rendering`,
        crossOrigin: `crossorigin`,
        dataType: `datatype`,
        dominantBaseline: `dominant-baseline`,
        enableBackground: `enable-background`,
        fillOpacity: `fill-opacity`,
        fillRule: `fill-rule`,
        floodColor: `flood-color`,
        floodOpacity: `flood-opacity`,
        fontFamily: `font-family`,
        fontSize: `font-size`,
        fontSizeAdjust: `font-size-adjust`,
        fontStretch: `font-stretch`,
        fontStyle: `font-style`,
        fontVariant: `font-variant`,
        fontWeight: `font-weight`,
        glyphName: `glyph-name`,
        glyphOrientationHorizontal: `glyph-orientation-horizontal`,
        glyphOrientationVertical: `glyph-orientation-vertical`,
        hrefLang: `hreflang`,
        horizAdvX: `horiz-adv-x`,
        horizOriginX: `horiz-origin-x`,
        horizOriginY: `horiz-origin-y`,
        imageRendering: `image-rendering`,
        letterSpacing: `letter-spacing`,
        lightingColor: `lighting-color`,
        markerEnd: `marker-end`,
        markerMid: `marker-mid`,
        markerStart: `marker-start`,
        maskType: `mask-type`,
        navDown: `nav-down`,
        navDownLeft: `nav-down-left`,
        navDownRight: `nav-down-right`,
        navLeft: `nav-left`,
        navNext: `nav-next`,
        navPrev: `nav-prev`,
        navRight: `nav-right`,
        navUp: `nav-up`,
        navUpLeft: `nav-up-left`,
        navUpRight: `nav-up-right`,
        onAbort: `onabort`,
        onActivate: `onactivate`,
        onAfterPrint: `onafterprint`,
        onBeforePrint: `onbeforeprint`,
        onBegin: `onbegin`,
        onCancel: `oncancel`,
        onCanPlay: `oncanplay`,
        onCanPlayThrough: `oncanplaythrough`,
        onChange: `onchange`,
        onClick: `onclick`,
        onClose: `onclose`,
        onCopy: `oncopy`,
        onCueChange: `oncuechange`,
        onCut: `oncut`,
        onDblClick: `ondblclick`,
        onDrag: `ondrag`,
        onDragEnd: `ondragend`,
        onDragEnter: `ondragenter`,
        onDragExit: `ondragexit`,
        onDragLeave: `ondragleave`,
        onDragOver: `ondragover`,
        onDragStart: `ondragstart`,
        onDrop: `ondrop`,
        onDurationChange: `ondurationchange`,
        onEmptied: `onemptied`,
        onEnd: `onend`,
        onEnded: `onended`,
        onError: `onerror`,
        onFocus: `onfocus`,
        onFocusIn: `onfocusin`,
        onFocusOut: `onfocusout`,
        onHashChange: `onhashchange`,
        onInput: `oninput`,
        onInvalid: `oninvalid`,
        onKeyDown: `onkeydown`,
        onKeyPress: `onkeypress`,
        onKeyUp: `onkeyup`,
        onLoad: `onload`,
        onLoadedData: `onloadeddata`,
        onLoadedMetadata: `onloadedmetadata`,
        onLoadStart: `onloadstart`,
        onMessage: `onmessage`,
        onMouseDown: `onmousedown`,
        onMouseEnter: `onmouseenter`,
        onMouseLeave: `onmouseleave`,
        onMouseMove: `onmousemove`,
        onMouseOut: `onmouseout`,
        onMouseOver: `onmouseover`,
        onMouseUp: `onmouseup`,
        onMouseWheel: `onmousewheel`,
        onOffline: `onoffline`,
        onOnline: `ononline`,
        onPageHide: `onpagehide`,
        onPageShow: `onpageshow`,
        onPaste: `onpaste`,
        onPause: `onpause`,
        onPlay: `onplay`,
        onPlaying: `onplaying`,
        onPopState: `onpopstate`,
        onProgress: `onprogress`,
        onRateChange: `onratechange`,
        onRepeat: `onrepeat`,
        onReset: `onreset`,
        onResize: `onresize`,
        onScroll: `onscroll`,
        onSeeked: `onseeked`,
        onSeeking: `onseeking`,
        onSelect: `onselect`,
        onShow: `onshow`,
        onStalled: `onstalled`,
        onStorage: `onstorage`,
        onSubmit: `onsubmit`,
        onSuspend: `onsuspend`,
        onTimeUpdate: `ontimeupdate`,
        onToggle: `ontoggle`,
        onUnload: `onunload`,
        onVolumeChange: `onvolumechange`,
        onWaiting: `onwaiting`,
        onZoom: `onzoom`,
        overlinePosition: `overline-position`,
        overlineThickness: `overline-thickness`,
        paintOrder: `paint-order`,
        panose1: `panose-1`,
        pointerEvents: `pointer-events`,
        referrerPolicy: `referrerpolicy`,
        renderingIntent: `rendering-intent`,
        shapeRendering: `shape-rendering`,
        stopColor: `stop-color`,
        stopOpacity: `stop-opacity`,
        strikethroughPosition: `strikethrough-position`,
        strikethroughThickness: `strikethrough-thickness`,
        strokeDashArray: `stroke-dasharray`,
        strokeDashOffset: `stroke-dashoffset`,
        strokeLineCap: `stroke-linecap`,
        strokeLineJoin: `stroke-linejoin`,
        strokeMiterLimit: `stroke-miterlimit`,
        strokeOpacity: `stroke-opacity`,
        strokeWidth: `stroke-width`,
        tabIndex: `tabindex`,
        textAnchor: `text-anchor`,
        textDecoration: `text-decoration`,
        textRendering: `text-rendering`,
        transformOrigin: `transform-origin`,
        typeOf: `typeof`,
        underlinePosition: `underline-position`,
        underlineThickness: `underline-thickness`,
        unicodeBidi: `unicode-bidi`,
        unicodeRange: `unicode-range`,
        unitsPerEm: `units-per-em`,
        vAlphabetic: `v-alphabetic`,
        vHanging: `v-hanging`,
        vIdeographic: `v-ideographic`,
        vMathematical: `v-mathematical`,
        vectorEffect: `vector-effect`,
        vertAdvY: `vert-adv-y`,
        vertOriginX: `vert-origin-x`,
        vertOriginY: `vert-origin-y`,
        wordSpacing: `word-spacing`,
        writingMode: `writing-mode`,
        xHeight: `x-height`,
        playbackOrder: `playbackorder`,
        timelineBegin: `timelinebegin`
    },
    properties: {
        about: K,
        accentHeight: W,
        accumulate: null,
        additive: null,
        alignmentBaseline: null,
        alphabetic: W,
        amplitude: W,
        arabicForm: null,
        ascent: W,
        attributeName: null,
        attributeType: null,
        azimuth: W,
        bandwidth: null,
        baselineShift: null,
        baseFrequency: null,
        baseProfile: null,
        bbox: null,
        begin: null,
        bias: W,
        by: null,
        calcMode: null,
        capHeight: W,
        className: G,
        clip: null,
        clipPath: null,
        clipPathUnits: null,
        clipRule: null,
        color: null,
        colorInterpolation: null,
        colorInterpolationFilters: null,
        colorProfile: null,
        colorRendering: null,
        content: null,
        contentScriptType: null,
        contentStyleType: null,
        crossOrigin: null,
        cursor: null,
        cx: null,
        cy: null,
        d: null,
        dataType: null,
        defaultAction: null,
        descent: W,
        diffuseConstant: W,
        direction: null,
        display: null,
        dur: null,
        divisor: W,
        dominantBaseline: null,
        download: H,
        dx: null,
        dy: null,
        edgeMode: null,
        editable: null,
        elevation: W,
        enableBackground: null,
        end: null,
        event: null,
        exponent: W,
        externalResourcesRequired: null,
        fill: null,
        fillOpacity: W,
        fillRule: null,
        filter: null,
        filterRes: null,
        filterUnits: null,
        floodColor: null,
        floodOpacity: null,
        focusable: null,
        focusHighlight: null,
        fontFamily: null,
        fontSize: null,
        fontSizeAdjust: null,
        fontStretch: null,
        fontStyle: null,
        fontVariant: null,
        fontWeight: null,
        format: null,
        fr: null,
        from: null,
        fx: null,
        fy: null,
        g1: pa,
        g2: pa,
        glyphName: pa,
        glyphOrientationHorizontal: null,
        glyphOrientationVertical: null,
        glyphRef: null,
        gradientTransform: null,
        gradientUnits: null,
        handler: null,
        hanging: W,
        hatchContentUnits: null,
        hatchUnits: null,
        height: null,
        href: null,
        hrefLang: null,
        horizAdvX: W,
        horizOriginX: W,
        horizOriginY: W,
        id: null,
        ideographic: W,
        imageRendering: null,
        initialVisibility: null,
        in: null,
        in2: null,
        intercept: W,
        k: W,
        k1: W,
        k2: W,
        k3: W,
        k4: W,
        kernelMatrix: K,
        kernelUnitLength: null,
        keyPoints: null,
        keySplines: null,
        keyTimes: null,
        kerning: null,
        lang: null,
        lengthAdjust: null,
        letterSpacing: null,
        lightingColor: null,
        limitingConeAngle: W,
        local: null,
        markerEnd: null,
        markerMid: null,
        markerStart: null,
        markerHeight: null,
        markerUnits: null,
        markerWidth: null,
        mask: null,
        maskContentUnits: null,
        maskType: null,
        maskUnits: null,
        mathematical: null,
        max: null,
        media: null,
        mediaCharacterEncoding: null,
        mediaContentEncodings: null,
        mediaSize: W,
        mediaTime: null,
        method: null,
        min: null,
        mode: null,
        name: null,
        navDown: null,
        navDownLeft: null,
        navDownRight: null,
        navLeft: null,
        navNext: null,
        navPrev: null,
        navRight: null,
        navUp: null,
        navUpLeft: null,
        navUpRight: null,
        numOctaves: null,
        observer: null,
        offset: null,
        onAbort: null,
        onActivate: null,
        onAfterPrint: null,
        onBeforePrint: null,
        onBegin: null,
        onCancel: null,
        onCanPlay: null,
        onCanPlayThrough: null,
        onChange: null,
        onClick: null,
        onClose: null,
        onCopy: null,
        onCueChange: null,
        onCut: null,
        onDblClick: null,
        onDrag: null,
        onDragEnd: null,
        onDragEnter: null,
        onDragExit: null,
        onDragLeave: null,
        onDragOver: null,
        onDragStart: null,
        onDrop: null,
        onDurationChange: null,
        onEmptied: null,
        onEnd: null,
        onEnded: null,
        onError: null,
        onFocus: null,
        onFocusIn: null,
        onFocusOut: null,
        onHashChange: null,
        onInput: null,
        onInvalid: null,
        onKeyDown: null,
        onKeyPress: null,
        onKeyUp: null,
        onLoad: null,
        onLoadedData: null,
        onLoadedMetadata: null,
        onLoadStart: null,
        onMessage: null,
        onMouseDown: null,
        onMouseEnter: null,
        onMouseLeave: null,
        onMouseMove: null,
        onMouseOut: null,
        onMouseOver: null,
        onMouseUp: null,
        onMouseWheel: null,
        onOffline: null,
        onOnline: null,
        onPageHide: null,
        onPageShow: null,
        onPaste: null,
        onPause: null,
        onPlay: null,
        onPlaying: null,
        onPopState: null,
        onProgress: null,
        onRateChange: null,
        onRepeat: null,
        onReset: null,
        onResize: null,
        onScroll: null,
        onSeeked: null,
        onSeeking: null,
        onSelect: null,
        onShow: null,
        onStalled: null,
        onStorage: null,
        onSubmit: null,
        onSuspend: null,
        onTimeUpdate: null,
        onToggle: null,
        onUnload: null,
        onVolumeChange: null,
        onWaiting: null,
        onZoom: null,
        opacity: null,
        operator: null,
        order: null,
        orient: null,
        orientation: null,
        origin: null,
        overflow: null,
        overlay: null,
        overlinePosition: W,
        overlineThickness: W,
        paintOrder: null,
        panose1: null,
        path: null,
        pathLength: W,
        patternContentUnits: null,
        patternTransform: null,
        patternUnits: null,
        phase: null,
        ping: G,
        pitch: null,
        playbackOrder: null,
        pointerEvents: null,
        points: null,
        pointsAtX: W,
        pointsAtY: W,
        pointsAtZ: W,
        preserveAlpha: null,
        preserveAspectRatio: null,
        primitiveUnits: null,
        propagate: null,
        property: K,
        r: null,
        radius: null,
        referrerPolicy: null,
        refX: null,
        refY: null,
        rel: K,
        rev: K,
        renderingIntent: null,
        repeatCount: null,
        repeatDur: null,
        requiredExtensions: K,
        requiredFeatures: K,
        requiredFonts: K,
        requiredFormats: K,
        resource: null,
        restart: null,
        result: null,
        rotate: null,
        rx: null,
        ry: null,
        scale: null,
        seed: null,
        shapeRendering: null,
        side: null,
        slope: null,
        snapshotTime: null,
        specularConstant: W,
        specularExponent: W,
        spreadMethod: null,
        spacing: null,
        startOffset: null,
        stdDeviation: null,
        stemh: null,
        stemv: null,
        stitchTiles: null,
        stopColor: null,
        stopOpacity: null,
        strikethroughPosition: W,
        strikethroughThickness: W,
        string: null,
        stroke: null,
        strokeDashArray: K,
        strokeDashOffset: null,
        strokeLineCap: null,
        strokeLineJoin: null,
        strokeMiterLimit: W,
        strokeOpacity: W,
        strokeWidth: null,
        style: null,
        surfaceScale: W,
        syncBehavior: null,
        syncBehaviorDefault: null,
        syncMaster: null,
        syncTolerance: null,
        syncToleranceDefault: null,
        systemLanguage: K,
        tabIndex: W,
        tableValues: null,
        target: null,
        targetX: W,
        targetY: W,
        textAnchor: null,
        textDecoration: null,
        textRendering: null,
        textLength: null,
        timelineBegin: null,
        title: null,
        transformBehavior: null,
        type: null,
        typeOf: K,
        to: null,
        transform: null,
        transformOrigin: null,
        u1: null,
        u2: null,
        underlinePosition: W,
        underlineThickness: W,
        unicode: null,
        unicodeBidi: null,
        unicodeRange: null,
        unitsPerEm: W,
        values: null,
        vAlphabetic: W,
        vMathematical: W,
        vectorEffect: null,
        vHanging: W,
        vIdeographic: W,
        version: null,
        vertAdvY: W,
        vertOriginX: W,
        vertOriginY: W,
        viewBox: null,
        viewTarget: null,
        visibility: null,
        width: null,
        widths: null,
        wordSpacing: null,
        writingMode: null,
        x: null,
        x1: null,
        x2: null,
        xChannelSelector: null,
        xHeight: W,
        y: null,
        y1: null,
        y2: null,
        yChannelSelector: null,
        z: null,
        zoomAndPan: null
    },
    space: `svg`,
    transform: ba
})
  , wa = va({
    properties: {
        xLinkActuate: null,
        xLinkArcRole: null,
        xLinkHref: null,
        xLinkRole: null,
        xLinkShow: null,
        xLinkTitle: null,
        xLinkType: null
    },
    space: `xlink`,
    transform(e, t) {
        return `xlink:` + t.slice(5).toLowerCase()
    }
})
  , Ta = va({
    attributes: {
        xmlnsxlink: `xmlns:xlink`
    },
    properties: {
        xmlnsXLink: null,
        xmlns: null
    },
    space: `xmlns`,
    transform: xa
})
  , Ea = va({
    properties: {
        xmlBase: null,
        xmlLang: null,
        xmlSpace: null
    },
    space: `xml`,
    transform(e, t) {
        return `xml:` + t.slice(3).toLowerCase()
    }
})
  , Da = {
    classId: `classID`,
    dataType: `datatype`,
    itemId: `itemID`,
    strokeDashArray: `strokeDasharray`,
    strokeDashOffset: `strokeDashoffset`,
    strokeLineCap: `strokeLinecap`,
    strokeLineJoin: `strokeLinejoin`,
    strokeMiterLimit: `strokeMiterlimit`,
    typeOf: `typeof`,
    xLinkActuate: `xlinkActuate`,
    xLinkArcRole: `xlinkArcrole`,
    xLinkHref: `xlinkHref`,
    xLinkRole: `xlinkRole`,
    xLinkShow: `xlinkShow`,
    xLinkTitle: `xlinkTitle`,
    xLinkType: `xlinkType`,
    xmlnsXLink: `xmlnsXlink`
}
  , Oa = /[A-Z]/g
  , ka = /-[a-z]/g
  , Aa = /^data[-\w.:]+$/i;
function ja(e, t) {
    let n = la(t)
      , r = t
      , i = V;
    if (n in e.normal)
        return e.property[e.normal[n]];
    if (n.length > 4 && n.slice(0, 4) === `data` && Aa.test(t)) {
        if (t.charAt(4) === `-`) {
            let e = t.slice(5).replace(ka, Na);
            r = `data` + e.charAt(0).toUpperCase() + e.slice(1)
        } else {
            let e = t.slice(4);
            if (!ka.test(e)) {
                let n = e.replace(Oa, Ma);
                n.charAt(0) !== `-` && (n = `-` + n),
                t = `data` + n
            }
        }
        i = ga
    }
    return new i(r,t)
}
function Ma(e) {
    return `-` + e.toLowerCase()
}
function Na(e) {
    return e.charAt(1).toUpperCase()
}
var Pa = ca([ya, Sa, wa, Ta, Ea], `html`)
  , Fa = ca([ya, Ca, wa, Ta, Ea], `svg`);
function Ia(e) {
    return e.join(` `).trim()
}
var La = /\/\*(?:[^*]|\*(?!\/))*\*\//g
  , Ra = /\n/g
  , za = /^\s*/
  , Ba = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/
  , Va = /^:\s*/
  , Ha = /^((?:'(?:\\.|[^'\\])*'|"(?:\\.|[^"\\])*"|url\((?:'(?:\\.|[^'\\])*'|"(?:\\.|[^"\\])*"|[^)]*)\)|[^};])+)/
  , Ua = /^[;\s]*/
  , Wa = `
`
  , Ga = `/`
  , Ka = `*`
  , qa = ``
  , Ja = `comment`
  , Ya = `declaration`;
function Xa(e, t) {
    if (typeof e != `string`)
        throw TypeError(`First argument must be a string`);
    if (!e)
        return [];
    t ||= {};
    var n = 1
      , r = 1;
    function i(e) {
        var t = e.match(Ra);
        t && (n += t.length);
        var i = e.lastIndexOf(Wa);
        r = ~i ? e.length - i : r + e.length
    }
    function a() {
        var e = {
            line: n,
            column: r
        };
        return function(t) {
            return t.position = new o(e),
            l(),
            t
        }
    }
    function o(e) {
        this.start = e,
        this.end = {
            line: n,
            column: r
        },
        this.source = t.source
    }
    o.prototype.content = e;
    function s(i) {
        var a = Error(t.source + `:` + n + `:` + r + `: ` + i);
        if (a.reason = i,
        a.filename = t.source,
        a.line = n,
        a.column = r,
        a.source = e,
        !t.silent)
            throw a
    }
    function c(t) {
        var n = t.exec(e);
        if (n) {
            var r = n[0];
            return i(r),
            e = e.slice(r.length),
            n
        }
    }
    function l() {
        c(za)
    }
    function u(e) {
        for (var t; t = d(); )
            e.push(t);
        return e
    }
    function d() {
        var t = a();
        if (Ga == e.charAt(0) && Ka == e.charAt(1)) {
            for (var n = 2; qa != e.charAt(n) && (Ka != e.charAt(n) || Ga != e.charAt(n + 1)); )
                ++n;
            if (n += 2,
            qa === e.charAt(n - 1))
                return s(`End of comment missing`);
            var o = e.slice(2, n - 2);
            return r += 2,
            i(o),
            e = e.slice(n),
            r += 2,
            t({
                type: Ja,
                comment: o
            })
        }
    }
    function f() {
        var e = a()
          , t = c(Ba);
        if (t) {
            if (d(),
            !c(Va))
                return s(`property missing ':'`);
            var n = c(Ha)
              , r = e({
                type: Ya,
                property: t[0].replace(La, qa).trim(),
                value: n ? n[0].replace(La, qa).trim() : qa
            });
            return c(Ua),
            r
        }
    }
    function p() {
        var e = [];
        u(e);
        for (var t; t = f(); )
            e.push(t),
            u(e);
        return e
    }
    return l(),
    p()
}
function Za(e, t) {
    let n = null;
    if (!e || typeof e != `string`)
        return n;
    let r = Xa(e)
      , i = typeof t == `function`;
    return r.forEach(e => {
        if (e.type !== `declaration`)
            return;
        let {property: r, value: a} = e;
        i ? t(r, a, e) : a && (n ??= {},
        n[r] = a)
    }
    ),
    n
}
var Qa = eo(`end`)
  , $a = eo(`start`);
function eo(e) {
    return t;
    function t(t) {
        let n = t && t.position && t.position[e] || {};
        if (typeof n.line == `number` && n.line > 0 && typeof n.column == `number` && n.column > 0)
            return {
                line: n.line,
                column: n.column,
                offset: typeof n.offset == `number` && n.offset > -1 ? n.offset : void 0
            }
    }
}
function to(e) {
    let t = $a(e)
      , n = Qa(e);
    if (t && n)
        return {
            start: t,
            end: n
        }
}
function no(e) {
    return !e || typeof e != `object` ? `` : `position` in e || `type` in e ? io(e.position) : `start` in e || `end` in e ? io(e) : `line` in e || `column` in e ? ro(e) : ``
}
function ro(e) {
    return ao(e && e.line) + `:` + ao(e && e.column)
}
function io(e) {
    return ro(e && e.start) + `-` + ro(e && e.end)
}
function ao(e) {
    return e && typeof e == `number` ? e : 1
}
var oo = class extends Error {
    constructor(e, t, n) {
        super(),
        typeof t == `string` && (n = t,
        t = void 0);
        let r = ``
          , i = {}
          , a = !1;
        if (t && (i = `line` in t && `column` in t || `start` in t && `end` in t ? {
            place: t
        } : `type` in t ? {
            ancestors: [t],
            place: t.position
        } : {
            ...t
        }),
        typeof e == `string` ? r = e : !i.cause && e && (a = !0,
        r = e.message,
        i.cause = e),
        !i.ruleId && !i.source && typeof n == `string`) {
            let e = n.indexOf(`:`);
            e === -1 ? i.ruleId = n : (i.source = n.slice(0, e),
            i.ruleId = n.slice(e + 1))
        }
        if (!i.place && i.ancestors) {
            let e = i.ancestors[i.ancestors.length - 1];
            e && (i.place = e.position)
        }
        let o = i.place && `start` in i.place ? i.place.start : i.place;
        this.ancestors = i.ancestors || void 0,
        this.cause = i.cause || void 0,
        this.column = o ? o.column : void 0,
        this.fatal = void 0,
        this.file = ``,
        this.message = r,
        this.line = o ? o.line : void 0,
        this.name = no(i.place) || `1:1`,
        this.place = i.place || void 0,
        this.reason = this.message,
        this.ruleId = i.ruleId || void 0,
        this.source = i.source || void 0,
        this.stack = a && i.cause && typeof i.cause.stack == `string` ? i.cause.stack : ``,
        this.actual = void 0,
        this.expected = void 0,
        this.note = void 0,
        this.url = void 0
    }
}
;
Object.defineProperties(oo.prototype, {
    file: {
        configurable: !0,
        enumerable: !0,
        value: ``,
        writable: !0
    },
    name: {
        configurable: !0,
        enumerable: !0,
        value: ``,
        writable: !0
    },
    reason: {
        configurable: !0,
        enumerable: !0,
        value: ``,
        writable: !0
    },
    message: {
        configurable: !0,
        enumerable: !0,
        value: ``,
        writable: !0
    },
    stack: {
        configurable: !0,
        enumerable: !0,
        value: ``,
        writable: !0
    },
    column: {
        configurable: !0,
        enumerable: !0,
        writable: !0
    },
    line: {
        configurable: !0,
        enumerable: !0,
        writable: !0
    },
    ancestors: {
        configurable: !0,
        enumerable: !0,
        writable: !0
    },
    cause: {
        configurable: !0,
        enumerable: !0,
        writable: !0
    },
    fatal: {
        configurable: !0,
        enumerable: !0,
        writable: !0
    },
    place: {
        configurable: !0,
        enumerable: !0,
        writable: !0
    },
    ruleId: {
        configurable: !0,
        enumerable: !0,
        writable: !0
    },
    source: {
        configurable: !0,
        enumerable: !0,
        writable: !0
    }
});
var so = {}.hasOwnProperty
  , co = new Map
  , lo = /[A-Z]/g
  , uo = /-([a-z])/g
  , fo = new Set([`table`, `tbody`, `thead`, `tfoot`, `tr`])
  , po = new Set([`td`, `th`]);
function mo(e, t) {
    if (!t || t.Fragment === void 0)
        throw TypeError("Expected `Fragment` in options");
    let n = t.filePath || void 0, r;
    if (t.development) {
        if (typeof t.jsxDEV != `function`)
            throw TypeError("Expected `jsxDEV` in options when `development: true`");
        r = To(n, t.jsxDEV)
    } else {
        if (typeof t.jsx != `function`)
            throw TypeError("Expected `jsx` in production options");
        if (typeof t.jsxs != `function`)
            throw TypeError("Expected `jsxs` in production options");
        r = wo(n, t.jsx, t.jsxs)
    }
    let i = {
        Fragment: t.Fragment,
        ancestors: [],
        components: t.components || {},
        create: r,
        elementAttributeNameCase: t.elementAttributeNameCase || `react`,
        evaluater: t.createEvaluater ? t.createEvaluater() : void 0,
        filePath: n,
        ignoreInvalidStyle: t.ignoreInvalidStyle || !1,
        passKeys: t.passKeys !== !1,
        passNode: t.passNode || !1,
        schema: t.space === `svg` ? Fa : Pa,
        stylePropertyNameCase: t.stylePropertyNameCase || `dom`,
        tableCellAlignToStyle: t.tableCellAlignToStyle !== !1
    }
      , a = ho(i, e, void 0);
    return a && typeof a != `string` ? a : i.create(e, i.Fragment, {
        children: a || void 0
    }, void 0)
}
function ho(e, t, n) {
    if (t.type === `element`)
        return go(e, t, n);
    if (t.type === `mdxFlowExpression` || t.type === `mdxTextExpression`)
        return _o(e, t);
    if (t.type === `mdxJsxFlowElement` || t.type === `mdxJsxTextElement`)
        return yo(e, t, n);
    if (t.type === `mdxjsEsm`)
        return vo(e, t);
    if (t.type === `root`)
        return bo(e, t, n);
    if (t.type === `text`)
        return xo(e, t)
}
function go(e, t, n) {
    let r = e.schema
      , i = r;
    t.tagName.toLowerCase() === `svg` && r.space === `html` && (i = Fa,
    e.schema = i),
    e.ancestors.push(t);
    let a = jo(e, t.tagName, !1)
      , o = Eo(e, t)
      , s = Oo(e, t);
    return fo.has(t.tagName) && (s = s.filter(function(e) {
        return typeof e != `string` || !aa(e)
    })),
    So(e, o, a, t),
    Co(o, s),
    e.ancestors.pop(),
    e.schema = r,
    e.create(t, a, o, n)
}
function _o(e, t) {
    if (t.data && t.data.estree && e.evaluater) {
        let n = t.data.estree.body[0];
        return n.type,
        e.evaluater.evaluateExpression(n.expression)
    }
    Mo(e, t.position)
}
function vo(e, t) {
    if (t.data && t.data.estree && e.evaluater)
        return e.evaluater.evaluateProgram(t.data.estree);
    Mo(e, t.position)
}
function yo(e, t, n) {
    let r = e.schema
      , i = r;
    t.name === `svg` && r.space === `html` && (i = Fa,
    e.schema = i),
    e.ancestors.push(t);
    let a = t.name === null ? e.Fragment : jo(e, t.name, !0)
      , o = Do(e, t)
      , s = Oo(e, t);
    return So(e, o, a, t),
    Co(o, s),
    e.ancestors.pop(),
    e.schema = r,
    e.create(t, a, o, n)
}
function bo(e, t, n) {
    let r = {};
    return Co(r, Oo(e, t)),
    e.create(t, e.Fragment, r, n)
}
function xo(e, t) {
    return t.value
}
function So(e, t, n, r) {
    typeof n != `string` && n !== e.Fragment && e.passNode && (t.node = r)
}
function Co(e, t) {
    if (t.length > 0) {
        let n = t.length > 1 ? t : t[0];
        n && (e.children = n)
    }
}
function wo(e, t, n) {
    return r;
    function r(e, r, i, a) {
        let o = Array.isArray(i.children) ? n : t;
        return a ? o(r, i, a) : o(r, i)
    }
}
function To(e, t) {
    return n;
    function n(n, r, i, a) {
        let o = Array.isArray(i.children)
          , s = $a(n);
        return t(r, i, a, o, {
            columnNumber: s ? s.column - 1 : void 0,
            fileName: e,
            lineNumber: s ? s.line : void 0
        }, void 0)
    }
}
function Eo(e, t) {
    let n = {}, r, i;
    for (i in t.properties)
        if (i !== `children` && so.call(t.properties, i)) {
            let a = ko(e, i, t.properties[i]);
            if (a) {
                let[i,o] = a;
                e.tableCellAlignToStyle && i === `align` && typeof o == `string` && po.has(t.tagName) ? r = o : n[i] = o
            }
        }
    if (r) {
        let t = n.style ||= {};
        t[e.stylePropertyNameCase === `css` ? `text-align` : `textAlign`] = r
    }
    return n
}
function Do(e, t) {
    let n = {};
    for (let r of t.attributes)
        if (r.type === `mdxJsxExpressionAttribute`)
            if (r.data && r.data.estree && e.evaluater) {
                let t = r.data.estree.body[0];
                t.type;
                let i = t.expression;
                i.type;
                let a = i.properties[0];
                a.type,
                Object.assign(n, e.evaluater.evaluateExpression(a.argument))
            } else
                Mo(e, t.position);
        else {
            let {name: i} = r, a;
            if (r.value && typeof r.value == `object`)
                if (r.value.data && r.value.data.estree && e.evaluater) {
                    let t = r.value.data.estree.body[0];
                    t.type,
                    a = e.evaluater.evaluateExpression(t.expression)
                } else
                    Mo(e, t.position);
            else
                a = r.value === null || r.value;
            n[i] = a
        }
    return n
}
function Oo(e, t) {
    let n = []
      , r = -1
      , i = e.passKeys ? new Map : co;
    for (; ++r < t.children.length; ) {
        let a = t.children[r], o;
        if (e.passKeys) {
            let e = a.type === `element` ? a.tagName : a.type === `mdxJsxFlowElement` || a.type === `mdxJsxTextElement` ? a.name : void 0;
            if (e) {
                let t = i.get(e) || 0;
                o = e + `-` + t,
                i.set(e, t + 1)
            }
        }
        let s = ho(e, a, o);
        s !== void 0 && n.push(s)
    }
    return n
}
function ko(e, t, n) {
    if (n == null || typeof n == `number` && Number.isNaN(n))
        return;
    let r = ja(e.schema, t);
    return Array.isArray(n) && (n = r.commaSeparated ? $i(n) : Ia(n)),
    r.property === `style` ? [`style`, typeof n == `object` ? e.stylePropertyNameCase === `dom` ? n : No(n) : Ao(e, String(n))] : [e.elementAttributeNameCase === `react` && r.space ? Da[r.property] || r.property : r.attribute, n]
}
function Ao(e, t) {
    let n = {};
    try {
        Za(t, function(t, r) {
            if (t && r) {
                let i = t;
                i.slice(0, 2) !== `--` && (i = i.toLowerCase(),
                e.stylePropertyNameCase === `dom` && (i.slice(0, 4) === `-ms-` && (i = i.slice(1)),
                i = i.replace(uo, Io))),
                n[i] = r
            }
        })
    } catch (t) {
        if (e.ignoreInvalidStyle)
            return {};
        let n = t
          , r = new oo("Cannot parse `style` attribute",{
            ancestors: e.ancestors,
            cause: n,
            ruleId: `style`,
            source: `hast-util-to-jsx-runtime`
        });
        throw r.file = e.filePath || void 0,
        r.url = `https://github.com/syntax-tree/hast-util-to-jsx-runtime#cannot-parse-style-attribute`,
        r
    }
    return n
}
function jo(e, t, n) {
    let r;
    if (!n)
        r = {
            type: `Literal`,
            value: t
        };
    else if (t.includes(`.`)) {
        let e = t.split(`.`), n = -1, i;
        for (; ++n < e.length; ) {
            let t = ra(e[n]) ? {
                type: `Identifier`,
                name: e[n]
            } : {
                type: `Literal`,
                value: e[n]
            };
            i = i ? {
                type: `MemberExpression`,
                object: i,
                property: t,
                computed: !!(n && t.type === `Literal`),
                optional: !1
            } : t
        }
        r = i
    } else
        r = ra(t) && !/^[a-z]/.test(t) ? {
            type: `Identifier`,
            name: t
        } : {
            type: `Literal`,
            value: t
        };
    if (r.type === `Literal`) {
        let t = r.value;
        return so.call(e.components, t) ? e.components[t] : t
    }
    if (e.evaluater)
        return e.evaluater.evaluateExpression(r);
    Mo(e)
}
function Mo(e, t) {
    let n = new oo("Cannot handle MDX estrees without `createEvaluater`",{
        ancestors: e.ancestors,
        place: t,
        ruleId: `mdx-estree`,
        source: `hast-util-to-jsx-runtime`
    });
    throw n.file = e.filePath || void 0,
    n.url = `https://github.com/syntax-tree/hast-util-to-jsx-runtime#cannot-handle-mdx-estrees-without-createevaluater`,
    n
}
function No(e) {
    let t = {}, n;
    for (n in e)
        so.call(e, n) && (t[Po(n)] = e[n]);
    return t
}
function Po(e) {
    if (e.slice(0, 2) === `--`)
        return e;
    let t = e.replace(lo, Fo);
    return t.slice(0, 3) === `ms-` && (t = `-` + t),
    t
}
function Fo(e) {
    return `-` + e.toLowerCase()
}
function Io(e, t) {
    return t.toUpperCase()
}
var Lo = {
    action: [`form`],
    cite: [`blockquote`, `del`, `ins`, `q`],
    data: [`object`],
    formAction: [`button`, `input`],
    href: [`a`, `area`, `base`, `link`],
    icon: [`menuitem`],
    itemId: null,
    manifest: [`html`],
    ping: [`a`, `area`],
    poster: [`video`],
    src: [`audio`, `embed`, `iframe`, `img`, `input`, `script`, `source`, `track`, `video`]
}
  , Ro = {};
function zo(e, t) {
    let n = t || Ro;
    return Bo(e, typeof n.includeImageAlt != `boolean` || n.includeImageAlt, typeof n.includeHtml != `boolean` || n.includeHtml)
}
function Bo(e, t, n) {
    if (Ho(e)) {
        if (`value` in e)
            return e.type === `html` && !n ? `` : e.value;
        if (t && `alt` in e && e.alt)
            return e.alt;
        if (`children` in e)
            return Vo(e.children, t, n)
    }
    return Array.isArray(e) ? Vo(e, t, n) : ``
}
function Vo(e, t, n) {
    let r = []
      , i = -1;
    for (; ++i < e.length; )
        r[i] = Bo(e[i], t, n);
    return r.join(``)
}
function Ho(e) {
    return !!(e && typeof e == `object`)
}
var Uo = document.createElement(`i`);
function Wo(e) {
    let t = `&` + e + `;`;
    Uo.innerHTML = t;
    let n = Uo.textContent;
    return n.charCodeAt(n.length - 1) === 59 && e !== `semi` ? !1 : n !== t && n
}
function Go(e, t, n, r) {
    let i = e.length, a = 0, o;
    if (t = t < 0 ? -t > i ? 0 : i + t : t > i ? i : t,
    n = n > 0 ? n : 0,
    r.length < 1e4)
        o = Array.from(r),
        o.unshift(t, n),
        e.splice(...o);
    else
        for (n && e.splice(t, n); a < r.length; )
            o = r.slice(a, a + 1e4),
            o.unshift(t, 0),
            e.splice(...o),
            a += 1e4,
            t += 1e4
}
function Ko(e, t) {
    return e.length > 0 ? (Go(e, e.length, 0, t),
    e) : t
}
var qo = {}.hasOwnProperty;
function Jo(e) {
    let t = {}
      , n = -1;
    for (; ++n < e.length; )
        Yo(t, e[n]);
    return t
}
function Yo(e, t) {
    let n;
    for (n in t) {
        let r = (qo.call(e, n) ? e[n] : void 0) || (e[n] = {}), i = t[n], a;
        if (i)
            for (a in i) {
                qo.call(r, a) || (r[a] = []);
                let e = i[a];
                Xo(r[a], Array.isArray(e) ? e : e ? [e] : [])
            }
    }
}
function Xo(e, t) {
    let n = -1
      , r = [];
    for (; ++n < t.length; )
        (t[n].add === `after` ? e : r).push(t[n]);
    Go(e, 0, 0, r)
}
function Zo(e, t) {
    let n = Number.parseInt(e, t);
    return n < 9 || n === 11 || n > 13 && n < 32 || n > 126 && n < 160 || n > 55295 && n < 57344 || n > 64975 && n < 65008 || (n & 65535) == 65535 || (n & 65535) == 65534 || n > 1114111 ? `�` : String.fromCodePoint(n)
}
function Qo(e) {
    return e.replace(/[\t\n\r ]+/g, ` `).replace(/^ | $/g, ``).toLowerCase().toUpperCase()
}
var q = os(/[A-Za-z]/)
  , J = os(/[\dA-Za-z]/)
  , $o = os(/[#-'*+\--9=?A-Z^-~]/);
function es(e) {
    return e !== null && (e < 32 || e === 127)
}
var ts = os(/\d/)
  , ns = os(/[\dA-Fa-f]/)
  , rs = os(/[!-/:-@[-`{-~]/);
function Y(e) {
    return e !== null && e < -2
}
function X(e) {
    return e !== null && (e < 0 || e === 32)
}
function Z(e) {
    return e === -2 || e === -1 || e === 32
}
var is = os(/\p{P}|\p{S}/u)
  , as = os(/\s/);
function os(e) {
    return t;
    function t(t) {
        return t !== null && t > -1 && e.test(String.fromCharCode(t))
    }
}
function ss(e) {
    let t = []
      , n = -1
      , r = 0
      , i = 0;
    for (; ++n < e.length; ) {
        let a = e.charCodeAt(n)
          , o = ``;
        if (a === 37 && J(e.charCodeAt(n + 1)) && J(e.charCodeAt(n + 2)))
            i = 2;
        else if (a < 128)
            /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(a)) || (o = String.fromCharCode(a));
        else if (a > 55295 && a < 57344) {
            let t = e.charCodeAt(n + 1);
            a < 56320 && t > 56319 && t < 57344 ? (o = String.fromCharCode(a, t),
            i = 1) : o = `�`
        } else
            o = String.fromCharCode(a);
        o &&= (t.push(e.slice(r, n), encodeURIComponent(o)),
        r = n + i + 1,
        ``),
        i &&= (n += i,
        0)
    }
    return t.join(``) + e.slice(r)
}
function Q(e, t, n, r) {
    let i = r ? r - 1 : 1 / 0
      , a = 0;
    return o;
    function o(r) {
        return Z(r) ? (e.enter(n),
        s(r)) : t(r)
    }
    function s(r) {
        return Z(r) && a++ < i ? (e.consume(r),
        s) : (e.exit(n),
        t(r))
    }
}
function cs(e, t, n, r, i, a) {
    let o = 0;
    return s;
    function s(t) {
        return a > 0 && Z(t) ? (e.enter(r),
        c(t)) : l(t)
    }
    function c(t) {
        return Z(t) && o < a ? (e.consume(t),
        o++,
        c) : (e.exit(r),
        l(t))
    }
    function l(e) {
        return o >= i ? t(e) : n(e)
    }
}
var ls = {
    tokenize: us
};
function us(e) {
    let t = e.attempt(this.parser.constructs.contentInitial, r, i), n;
    return t;
    function r(n) {
        if (n === null) {
            e.consume(n);
            return
        }
        return e.enter(`lineEnding`),
        e.consume(n),
        e.exit(`lineEnding`),
        Q(e, t, `linePrefix`)
    }
    function i(t) {
        return e.enter(`paragraph`),
        a(t)
    }
    function a(t) {
        let r = e.enter(`chunkText`, {
            contentType: `text`,
            previous: n
        });
        return n && (n.next = r),
        n = r,
        o(t)
    }
    function o(t) {
        if (t === null) {
            e.exit(`chunkText`),
            e.exit(`paragraph`),
            e.consume(t);
            return
        }
        return Y(t) ? (e.consume(t),
        e.exit(`chunkText`),
        a) : (e.consume(t),
        o)
    }
}
var ds = class {
    constructor() {
        this.index = new Map,
        this.map = []
    }
    add(e, t, n) {
        fs(this, e, t, n, !1)
    }
    addBefore(e, t, n) {
        fs(this, e, t, n, !0)
    }
    consume(e) {
        if (this.map.sort(function(e, t) {
            return e[0] - t[0]
        }),
        this.map.length === 0)
            return;
        let t = this.map.length
          , n = [];
        for (; t > 0; )
            --t,
            n.push(e.slice(this.map[t][0] + this.map[t][1]), this.map[t][2]),
            e.length = this.map[t][0];
        n.push(e.slice()),
        e.length = 0;
        let r = n.pop();
        for (; r; ) {
            for (let t of r)
                e.push(t);
            r = n.pop()
        }
        this.map.length = 0,
        this.index.clear()
    }
}
;
function fs(e, t, n, r, i) {
    if (n === 0 && r.length === 0)
        return;
    let a = e.index.get(t);
    if (a) {
        a[1] += n,
        i ? (r.push(...a[2]),
        a[2] = r) : a[2].push(...r);
        return
    }
    let o = [t, n, r];
    e.map.push(o),
    e.index.set(t, o)
}
var ps = {
    tokenize: hs
}
  , ms = {
    tokenize: gs
};
function hs(e) {
    let t = this, n = [], r = 0, i, a, o;
    return s;
    function s(i) {
        if (r < n.length) {
            let a = n[r];
            return t.containerState = a[1],
            e.attempt(a[0].continuation, c, l)(i)
        }
        return l(i)
    }
    function c(e) {
        if (r++,
        t.containerState._closeFlow) {
            t.containerState._closeFlow = void 0,
            i && v();
            let n = t.events.length, a = n, o;
            for (; a--; )
                if (t.events[a][0] === `exit` && t.events[a][1].type === `chunkFlow`) {
                    o = t.events[a][1].end;
                    break
                }
            _(r);
            let s = n;
            for (; s < t.events.length; )
                t.events[s][1].end = {
                    ...o
                },
                s++;
            let c = new ds;
            return c.add(a + 1, 0, t.events.slice(n)),
            c.add(n, s - n, []),
            c.consume(t.events),
            l(e)
        }
        return s(e)
    }
    function l(a) {
        if (r === n.length) {
            if (!i)
                return f(a);
            if (i.currentConstruct && i.currentConstruct.concrete)
                return m(a);
            t.interrupt = !!(i.currentConstruct && !i._gfmTableDynamicInterruptHack)
        }
        return t.containerState = {},
        e.check(ms, u, d)(a)
    }
    function u(e) {
        return i && v(),
        _(r),
        f(e)
    }
    function d(e) {
        return t.parser.lazy[t.now().line] = r !== n.length,
        o = t.now().offset,
        m(e)
    }
    function f(n) {
        return t.containerState = {},
        e.attempt(ms, p, m)(n)
    }
    function p(e) {
        return r++,
        n.push([t.currentConstruct, t.containerState]),
        f(e)
    }
    function m(n) {
        if (n === null) {
            i && v(),
            _(0),
            e.consume(n);
            return
        }
        return i ||= t.parser.flow(t.now()),
        e.enter(`chunkFlow`, {
            _tokenizer: i,
            contentType: `flow`,
            previous: a
        }),
        h(n)
    }
    function h(n) {
        if (n === null) {
            g(e.exit(`chunkFlow`), !0),
            _(0),
            e.consume(n);
            return
        }
        return Y(n) ? (e.consume(n),
        g(e.exit(`chunkFlow`)),
        r = 0,
        t.interrupt = void 0,
        s) : (e.consume(n),
        h)
    }
    function g(e, n) {
        let s = t.sliceStream(e);
        if (n && s.push(null),
        e.previous = a,
        a && (a.next = e),
        a = e,
        i.defineSkip(e.start),
        i.write(s),
        t.parser.lazy[e.start.line]) {
            let e = i.events.length;
            for (; e--; )
                if (i.events[e][1].start.offset < o && (!i.events[e][1].end || i.events[e][1].end.offset > o))
                    return;
            let n = t.events.length, a = n, s, c;
            for (; a--; )
                if (t.events[a][0] === `exit` && t.events[a][1].type === `chunkFlow`) {
                    if (s) {
                        c = t.events[a][1].end;
                        break
                    }
                    s = !0
                }
            for (_(r),
            e = n; e < t.events.length; )
                t.events[e][1].end = {
                    ...c
                },
                e++;
            let l = new ds;
            l.add(a + 1, 0, t.events.slice(n)),
            l.add(n, e - n, []),
            l.consume(t.events)
        }
    }
    function _(r) {
        let i = n.length;
        for (; i-- > r; ) {
            let r = n[i];
            t.containerState = r[1],
            r[0].exit.call(t, e)
        }
        n.length = r
    }
    function v() {
        i.write([null]),
        a = void 0,
        i = void 0,
        t.containerState._closeFlow = void 0
    }
}
function gs(e, t, n) {
    return Q(e, e.attempt(this.parser.constructs.document, t, n), `linePrefix`, this.parser.constructs.disable.null.includes(`codeIndented`) ? void 0 : 4)
}
function _s(e) {
    if (e === null || X(e) || as(e))
        return 1;
    if (is(e))
        return 2
}
function vs(e, t, n) {
    let r = []
      , i = -1;
    for (; ++i < e.length; ) {
        let a = e[i].resolveAll;
        a && !r.includes(a) && (t = a(t, n),
        r.push(a))
    }
    return t
}
var ys = {
    name: `attention`,
    resolveAll: bs,
    tokenize: xs
};
function bs(e, t) {
    let n = -1, r;
    for (; ++n < e.length; )
        if (e[n][0] === `enter` && e[n][1].type === `attentionSequence` && e[n][1]._close) {
            let i = n;
            for (; i--; )
                if (e[i][0] === `exit` && e[i][1].type === `attentionSequence` && e[i][1]._open && t.sliceSerialize(e[i][1]).charCodeAt(0) === t.sliceSerialize(e[n][1]).charCodeAt(0)) {
                    if ((e[i][1]._close || e[n][1]._open) && (e[n][1].end.offset - e[n][1].start.offset) % 3 && !((e[i][1].end.offset - e[i][1].start.offset + e[n][1].end.offset - e[n][1].start.offset) % 3))
                        continue;
                    let a = e[i][1].end.offset - e[i][1].start.offset > 1 && e[n][1].end.offset - e[n][1].start.offset > 1 ? 2 : 1
                      , o = {
                        ...e[i][1].end
                    }
                      , s = {
                        ...e[n][1].start
                    };
                    Ss(o, -a),
                    Ss(s, a);
                    let c = {
                        type: a > 1 ? `strongSequence` : `emphasisSequence`,
                        start: o,
                        end: {
                            ...e[i][1].end
                        }
                    }
                      , l = {
                        type: a > 1 ? `strongSequence` : `emphasisSequence`,
                        start: {
                            ...e[n][1].start
                        },
                        end: s
                    }
                      , u = {
                        type: a > 1 ? `strongText` : `emphasisText`,
                        start: {
                            ...e[i][1].end
                        },
                        end: {
                            ...e[n][1].start
                        }
                    }
                      , d = {
                        type: a > 1 ? `strong` : `emphasis`,
                        start: {
                            ...c.start
                        },
                        end: {
                            ...l.end
                        }
                    };
                    e[i][1].end = {
                        ...c.start
                    },
                    e[n][1].start = {
                        ...l.end
                    },
                    r = [],
                    e[i][1].end.offset - e[i][1].start.offset && (r = Ko(r, [[`enter`, e[i][1], t], [`exit`, e[i][1], t]])),
                    r = Ko(r, [[`enter`, d, t], [`enter`, c, t], [`exit`, c, t], [`enter`, u, t]]),
                    r = Ko(r, vs(t.parser.constructs.insideSpan.null, e.slice(i + 1, n), t)),
                    r = Ko(r, [[`exit`, u, t], [`enter`, l, t], [`exit`, l, t], [`exit`, d, t]]);
                    let f = 0;
                    e[n][1].end.offset - e[n][1].start.offset && (f = 2,
                    r = Ko(r, [[`enter`, e[n][1], t], [`exit`, e[n][1], t]])),
                    Go(e, i - 1, n - i + 3, r),
                    n = i + r.length - f - 2;
                    break
                }
        }
    for (n = -1; ++n < e.length; )
        e[n][1].type === `attentionSequence` && (e[n][1].type = `data`);
    return e
}
function xs(e, t) {
    let n = this.parser.constructs.attentionMarkers.null, r = this.previous, i = _s(r), a;
    return o;
    function o(t) {
        return a = t,
        e.enter(`attentionSequence`),
        s(t)
    }
    function s(o) {
        if (o === a)
            return e.consume(o),
            s;
        let c = e.exit(`attentionSequence`)
          , l = _s(o)
          , u = !l || l === 2 && i || n.includes(o) && o !== 42 && o !== 95
          , d = !i || i === 2 && l || n.includes(r) && r !== 42 && r !== 95;
        return c._open = !!(a === 42 ? u : u && (i || !d)),
        c._close = !!(a === 42 ? d : d && (l || !u)),
        t(o)
    }
}
function Ss(e, t) {
    e.column += t,
    e.offset += t,
    e._bufferIndex += t
}
var Cs = {
    name: `autolink`,
    tokenize: ws
};
function ws(e, t, n) {
    let r = 0;
    return i;
    function i(t) {
        return e.enter(`autolink`),
        e.enter(`autolinkMarker`),
        e.consume(t),
        e.exit(`autolinkMarker`),
        e.enter(`autolinkProtocol`),
        a
    }
    function a(t) {
        return q(t) ? (e.consume(t),
        o) : t === 64 ? n(t) : l(t)
    }
    function o(e) {
        return e === 43 || e === 45 || e === 46 || J(e) ? (r = 1,
        s(e)) : l(e)
    }
    function s(t) {
        return t === 58 ? (e.consume(t),
        r = 0,
        c) : (t === 43 || t === 45 || t === 46 || J(t)) && r++ < 32 ? (e.consume(t),
        s) : (r = 0,
        l(t))
    }
    function c(r) {
        return r === 62 ? (e.exit(`autolinkProtocol`),
        e.enter(`autolinkMarker`),
        e.consume(r),
        e.exit(`autolinkMarker`),
        e.exit(`autolink`),
        t) : r === null || r === 32 || r === 60 || es(r) ? n(r) : (e.consume(r),
        c)
    }
    function l(t) {
        return t === 64 ? (e.consume(t),
        u) : $o(t) ? (e.consume(t),
        l) : n(t)
    }
    function u(e) {
        return J(e) ? d(e) : n(e)
    }
    function d(n) {
        return n === 46 ? (e.consume(n),
        r = 0,
        u) : n === 62 ? (e.exit(`autolinkProtocol`).type = `autolinkEmail`,
        e.enter(`autolinkMarker`),
        e.consume(n),
        e.exit(`autolinkMarker`),
        e.exit(`autolink`),
        t) : f(n)
    }
    function f(t) {
        if ((t === 45 || J(t)) && r++ < 63) {
            let n = t === 45 ? f : d;
            return e.consume(t),
            n
        }
        return n(t)
    }
}
var Ts = {
    partial: !0,
    tokenize: Es
};
function Es(e, t, n) {
    return r;
    function r(t) {
        return Z(t) ? Q(e, i, `linePrefix`)(t) : i(t)
    }
    function i(e) {
        return e === null || Y(e) ? t(e) : n(e)
    }
}
var Ds = {
    continuation: {
        tokenize: ks
    },
    exit: As,
    name: `blockQuote`,
    tokenize: Os
};
function Os(e, t, n) {
    let r = this;
    return i;
    function i(t) {
        if (t === 62) {
            let n = r.containerState;
            return n.open ||= (e.enter(`blockQuote`, {
                _container: !0
            }),
            !0),
            e.enter(`blockQuotePrefix`),
            e.enter(`blockQuoteMarker`),
            e.consume(t),
            e.exit(`blockQuoteMarker`),
            a
        }
        return n(t)
    }
    function a(n) {
        return Z(n) ? (e.enter(`blockQuotePrefixWhitespace`),
        e.consume(n),
        e.exit(`blockQuotePrefixWhitespace`),
        e.exit(`blockQuotePrefix`),
        t) : (e.exit(`blockQuotePrefix`),
        t(n))
    }
}
function ks(e, t, n) {
    let r = this;
    return i;
    function i(t) {
        return Z(t) ? Q(e, a, `linePrefix`, r.parser.constructs.disable.null.includes(`codeIndented`) ? void 0 : 4)(t) : a(t)
    }
    function a(r) {
        return e.attempt(Ds, t, n)(r)
    }
}
function As(e) {
    e.exit(`blockQuote`)
}
var js = {
    name: `characterEscape`,
    tokenize: Ms
};
function Ms(e, t, n) {
    return r;
    function r(t) {
        return e.enter(`characterEscape`),
        e.enter(`escapeMarker`),
        e.consume(t),
        e.exit(`escapeMarker`),
        i
    }
    function i(r) {
        return rs(r) ? (e.enter(`characterEscapeValue`),
        e.consume(r),
        e.exit(`characterEscapeValue`),
        e.exit(`characterEscape`),
        t) : n(r)
    }
}
var Ns = {
    name: `characterReference`,
    tokenize: Ps
};
function Ps(e, t, n) {
    let r = this, i = 0, a, o;
    return s;
    function s(t) {
        return e.enter(`characterReference`),
        e.enter(`characterReferenceMarker`),
        e.consume(t),
        e.exit(`characterReferenceMarker`),
        c
    }
    function c(t) {
        return t === 35 ? (e.enter(`characterReferenceMarkerNumeric`),
        e.consume(t),
        e.exit(`characterReferenceMarkerNumeric`),
        l) : (e.enter(`characterReferenceValue`),
        a = 31,
        o = J,
        u(t))
    }
    function l(t) {
        return t === 88 || t === 120 ? (e.enter(`characterReferenceMarkerHexadecimal`),
        e.consume(t),
        e.exit(`characterReferenceMarkerHexadecimal`),
        e.enter(`characterReferenceValue`),
        a = 6,
        o = ns,
        u) : (e.enter(`characterReferenceValue`),
        a = 7,
        o = ts,
        u(t))
    }
    function u(s) {
        if (s === 59 && i) {
            let i = e.exit(`characterReferenceValue`);
            return o === J && !Wo(r.sliceSerialize(i)) ? n(s) : (e.enter(`characterReferenceMarker`),
            e.consume(s),
            e.exit(`characterReferenceMarker`),
            e.exit(`characterReference`),
            t)
        }
        return o(s) && i++ < a ? (e.consume(s),
        u) : n(s)
    }
}
var Fs = {
    partial: !0,
    tokenize: Is
};
function Is(e, t, n) {
    let r = this;
    return i;
    function i(t) {
        return t === null ? n(t) : (e.enter(`lineEnding`),
        e.consume(t),
        e.exit(`lineEnding`),
        a)
    }
    function a(e) {
        return r.parser.lazy[r.now().line] ? n(e) : t(e)
    }
}
var Ls = {
    concrete: !0,
    name: `codeFenced`,
    tokenize: Rs
};
function Rs(e, t, n) {
    let r = this, i = {
        partial: !0,
        tokenize: x
    }, a = 0, o = 0, s;
    return c;
    function c(e) {
        return l(e)
    }
    function l(t) {
        let n = r.events[r.events.length - 1];
        return a = n && n[1].type === `linePrefix` ? n[2].sliceSerialize(n[1], !0).length : 0,
        s = t,
        e.enter(`codeFenced`),
        e.enter(`codeFencedFence`),
        e.enter(`codeFencedFenceSequence`),
        u(t)
    }
    function u(t) {
        return t === s ? (o++,
        e.consume(t),
        u) : o < 3 ? n(t) : (e.exit(`codeFencedFenceSequence`),
        Z(t) ? Q(e, d, `whitespace`)(t) : d(t))
    }
    function d(n) {
        return n === null || Y(n) ? (e.exit(`codeFencedFence`),
        r.interrupt ? t(n) : e.check(Fs, h, b)(n)) : (e.enter(`codeFencedFenceInfo`),
        e.enter(`chunkString`, {
            contentType: `string`
        }),
        f(n))
    }
    function f(t) {
        return t === null || Y(t) ? (e.exit(`chunkString`),
        e.exit(`codeFencedFenceInfo`),
        d(t)) : Z(t) ? (e.exit(`chunkString`),
        e.exit(`codeFencedFenceInfo`),
        Q(e, p, `whitespace`)(t)) : t === 96 && t === s ? n(t) : (e.consume(t),
        f)
    }
    function p(t) {
        return t === null || Y(t) ? d(t) : (e.enter(`codeFencedFenceMeta`),
        e.enter(`chunkString`, {
            contentType: `string`
        }),
        m(t))
    }
    function m(t) {
        return t === null || Y(t) ? (e.exit(`chunkString`),
        e.exit(`codeFencedFenceMeta`),
        d(t)) : t === 96 && t === s ? n(t) : (e.consume(t),
        m)
    }
    function h(t) {
        return e.attempt(i, b, g)(t)
    }
    function g(t) {
        return e.enter(`lineEnding`),
        e.consume(t),
        e.exit(`lineEnding`),
        _
    }
    function _(t) {
        return a > 0 && Z(t) ? Q(e, v, `linePrefix`, a + 1)(t) : v(t)
    }
    function v(t) {
        return t === null || Y(t) ? e.check(Fs, h, b)(t) : (e.enter(`codeFlowValue`),
        y(t))
    }
    function y(t) {
        return t === null || Y(t) ? (e.exit(`codeFlowValue`),
        v(t)) : (e.consume(t),
        y)
    }
    function b(n) {
        return e.exit(`codeFenced`),
        t(n)
    }
    function x(e, t, n) {
        let i = 0;
        return a;
        function a(t) {
            return e.enter(`lineEnding`),
            e.consume(t),
            e.exit(`lineEnding`),
            c
        }
        function c(t) {
            return e.enter(`codeFencedFence`),
            Z(t) ? Q(e, l, `linePrefix`, r.parser.constructs.disable.null.includes(`codeIndented`) ? void 0 : 4)(t) : l(t)
        }
        function l(t) {
            return t === s ? (e.enter(`codeFencedFenceSequence`),
            u(t)) : n(t)
        }
        function u(t) {
            return t === s ? (i++,
            e.consume(t),
            u) : i >= o ? (e.exit(`codeFencedFenceSequence`),
            Z(t) ? Q(e, d, `whitespace`)(t) : d(t)) : n(t)
        }
        function d(r) {
            return r === null || Y(r) ? (e.exit(`codeFencedFence`),
            t(r)) : n(r)
        }
    }
}
var zs = {
    name: `codeIndented`,
    tokenize: Vs
}
  , Bs = {
    partial: !0,
    tokenize: Hs
};
function Vs(e, t, n) {
    return r;
    function r(t) {
        return e.enter(`codeIndented`),
        cs(e, i, n, `linePrefix`, 4, 4)(t)
    }
    function i(t) {
        return t === null ? o(t) : Y(t) ? e.attempt(Bs, i, o)(t) : (e.enter(`codeFlowValue`),
        a(t))
    }
    function a(t) {
        return t === null || Y(t) ? (e.exit(`codeFlowValue`),
        i(t)) : (e.consume(t),
        a)
    }
    function o(n) {
        return e.exit(`codeIndented`),
        t(n)
    }
}
function Hs(e, t, n) {
    let r = this;
    return i;
    function i(o) {
        return r.parser.lazy[r.now().line] ? n(o) : Y(o) ? (e.enter(`lineEnding`),
        e.consume(o),
        e.exit(`lineEnding`),
        i) : cs(e, t, a, `linePrefix`, 4, 4)(o)
    }
    function a(e) {
        return Y(e) ? i(e) : n(e)
    }
}
var Us = {
    name: `codeText`,
    previous: Gs,
    resolve: Ws,
    tokenize: Ks
};
function Ws(e) {
    let t = e.length - 4, n = 3, r, i;
    if ((e[n][1].type === `lineEnding` || e[n][1].type === `space`) && (e[t][1].type === `lineEnding` || e[t][1].type === `space`)) {
        for (r = n; ++r < t; )
            if (e[r][1].type === `codeTextData`) {
                e[n][1].type = `codeTextPadding`,
                e[t][1].type = `codeTextPadding`,
                n += 2,
                t -= 2;
                break
            }
    }
    for (r = n - 1,
    t++; ++r <= t; )
        i === void 0 ? r !== t && e[r][1].type !== `lineEnding` && (i = r) : (r === t || e[r][1].type === `lineEnding`) && (e[i][1].type = `codeTextData`,
        r !== i + 2 && (e[i][1].end = e[r - 1][1].end,
        e.splice(i + 2, r - i - 2),
        t -= r - i - 2,
        r = i + 2),
        i = void 0);
    return e
}
function Gs(e) {
    return e !== 96 || this.events[this.events.length - 1][1].type === `characterEscape`
}
function Ks(e, t, n) {
    let r = 0, i, a;
    return o;
    function o(t) {
        return e.enter(`codeText`),
        e.enter(`codeTextSequence`),
        s(t)
    }
    function s(t) {
        return t === 96 ? (e.consume(t),
        r++,
        s) : (e.exit(`codeTextSequence`),
        c(t))
    }
    function c(t) {
        return t === null ? n(t) : t === 32 ? (e.enter(`space`),
        e.consume(t),
        e.exit(`space`),
        c) : t === 96 ? (a = e.enter(`codeTextSequence`),
        i = 0,
        u(t)) : Y(t) ? (e.enter(`lineEnding`),
        e.consume(t),
        e.exit(`lineEnding`),
        c) : (e.enter(`codeTextData`),
        l(t))
    }
    function l(t) {
        return t === null || t === 32 || t === 96 || Y(t) ? (e.exit(`codeTextData`),
        c(t)) : (e.consume(t),
        l)
    }
    function u(n) {
        return n === 96 ? (e.consume(n),
        i++,
        u) : i === r ? (e.exit(`codeTextSequence`),
        e.exit(`codeText`),
        t(n)) : (a.type = `codeTextData`,
        l(n))
    }
}
var qs = class {
    constructor(e) {
        this.left = e ? [...e] : [],
        this.right = []
    }
    get(e) {
        if (e < 0 || e >= this.left.length + this.right.length)
            throw RangeError("Cannot access index `" + e + "` in a splice buffer of size `" + (this.left.length + this.right.length) + "`");
        return e < this.left.length ? this.left[e] : this.right[this.right.length - e + this.left.length - 1]
    }
    get length() {
        return this.left.length + this.right.length
    }
    shift() {
        return this.setCursor(0),
        this.right.pop()
    }
    slice(e, t) {
        let n = t ?? 1 / 0;
        return n < this.left.length ? this.left.slice(e, n) : e > this.left.length ? this.right.slice(this.right.length - n + this.left.length, this.right.length - e + this.left.length).reverse() : this.left.slice(e).concat(this.right.slice(this.right.length - n + this.left.length).reverse())
    }
    splice(e, t, n) {
        let r = t || 0;
        this.setCursor(Math.trunc(e));
        let i = this.right.splice(this.right.length - r, 1 / 0);
        return n && Js(this.left, n),
        i.reverse()
    }
    pop() {
        return this.setCursor(1 / 0),
        this.left.pop()
    }
    push(e) {
        this.setCursor(1 / 0),
        this.left.push(e)
    }
    pushMany(e) {
        this.setCursor(1 / 0),
        Js(this.left, e)
    }
    unshift(e) {
        this.setCursor(0),
        this.right.push(e)
    }
    unshiftMany(e) {
        this.setCursor(0),
        Js(this.right, e.reverse())
    }
    setCursor(e) {
        if (!(e === this.left.length || e > this.left.length && this.right.length === 0 || e < 0 && this.left.length === 0))
            if (e < this.left.length) {
                let t = this.left.splice(e, 1 / 0);
                Js(this.right, t.reverse())
            } else {
                let t = this.right.splice(this.left.length + this.right.length - e, 1 / 0);
                Js(this.left, t.reverse())
            }
    }
}
;
function Js(e, t) {
    let n = 0;
    if (t.length < 1e4)
        e.push(...t);
    else
        for (; n < t.length; )
            e.push(...t.slice(n, n + 1e4)),
            n += 1e4
}
function Ys(e) {
    let t = {}, n = -1, r, i, a, o, s, c, l, u = new qs(e);
    for (; ++n < u.length; ) {
        for (; n in t; )
            n = t[n];
        if (r = u.get(n),
        n && r[1].type === `chunkFlow` && u.get(n - 1)[1].type === `listItemPrefix` && (c = r[1]._tokenizer.events,
        a = 0,
        a < c.length && c[a][1].type === `lineEndingBlank` && (a += 2),
        a < c.length && c[a][1].type === `content`))
            for (; ++a < c.length && c[a][1].type !== `content`; )
                c[a][1].type === `chunkText` && (c[a][1]._isInFirstContentOfListItem = !0,
                a++);
        if (r[0] === `enter`)
            r[1].contentType && (Object.assign(t, Xs(u, n)),
            n = t[n],
            l = !0);
        else if (r[1]._container) {
            for (a = n,
            i = void 0; a--; )
                if (o = u.get(a),
                o[1].type === `lineEnding` || o[1].type === `lineEndingBlank`)
                    o[0] === `enter` && (i && (u.get(i)[1].type = `lineEndingBlank`),
                    o[1].type = `lineEnding`,
                    i = a);
                else if (o[1].type !== `linePrefix` && o[1].type !== `listItemIndent`)
                    break;
            i && (r[1].end = {
                ...u.get(i)[1].start
            },
            s = u.slice(i, n),
            s.unshift(r),
            u.splice(i, n - i + 1, s))
        }
    }
    return Go(e, 0, 1 / 0, u.slice(0)),
    !l
}
function Xs(e, t) {
    let n = e.get(t)[1]
      , r = e.get(t)[2]
      , i = t - 1
      , a = []
      , o = n._tokenizer;
    o || (o = r.parser[n.contentType](n.start),
    n._contentTypeTextTrailing && (o._contentTypeTextTrailing = !0));
    let s = o.events, c = [], l = {}, u, d, f = -1, p = n, m = 0, h = 0, g = [h];
    for (; p; ) {
        for (; e.get(++i)[1] !== p; )
            ;
        a.push(i),
        p._tokenizer || (u = r.sliceStream(p),
        p.next || u.push(null),
        d && o.defineSkip(p.start),
        p._isInFirstContentOfListItem && (o._gfmTasklistFirstContentOfListItem = !0),
        o.write(u),
        p._isInFirstContentOfListItem && (o._gfmTasklistFirstContentOfListItem = void 0)),
        d = p,
        p = p.next
    }
    for (p = n; ++f < s.length; )
        s[f][0] === `exit` && s[f - 1][0] === `enter` && s[f][1].type === s[f - 1][1].type && s[f][1].start.line !== s[f][1].end.line && (h = f + 1,
        g.push(h),
        p._tokenizer = void 0,
        p.previous = void 0,
        p = p.next);
    for (o.events = [],
    p ? (p._tokenizer = void 0,
    p.previous = void 0) : g.pop(),
    f = g.length; f--; ) {
        let t = s.slice(g[f], g[f + 1])
          , n = a.pop();
        c.push([n, n + t.length - 1]),
        e.splice(n, 2, t)
    }
    for (c.reverse(),
    f = -1; ++f < c.length; )
        l[m + c[f][0]] = m + c[f][1],
        m += c[f][1] - c[f][0] - 1;
    return l
}
var Zs = {
    resolve: $s,
    tokenize: ec
}
  , Qs = {
    partial: !0,
    tokenize: tc
};
function $s(e) {
    return Ys(e),
    e
}
function ec(e, t) {
    let n;
    return r;
    function r(t) {
        return e.enter(`content`),
        n = e.enter(`chunkContent`, {
            contentType: `content`
        }),
        i(t)
    }
    function i(t) {
        return t === null ? a(t) : Y(t) ? e.check(Qs, o, a)(t) : (e.consume(t),
        i)
    }
    function a(n) {
        return e.exit(`chunkContent`),
        e.exit(`content`),
        t(n)
    }
    function o(t) {
        return e.consume(t),
        e.exit(`chunkContent`),
        n.next = e.enter(`chunkContent`, {
            contentType: `content`,
            previous: n
        }),
        n = n.next,
        i
    }
}
function tc(e, t, n) {
    let r = this;
    return i;
    function i(t) {
        return e.exit(`chunkContent`),
        e.enter(`lineEnding`),
        e.consume(t),
        e.exit(`lineEnding`),
        Q(e, a, `linePrefix`)
    }
    function a(i) {
        if (i === null || Y(i))
            return n(i);
        let a = r.events[r.events.length - 1];
        return !r.parser.constructs.disable.null.includes(`codeIndented`) && a && a[1].type === `linePrefix` && a[2].sliceSerialize(a[1], !0).length >= 4 ? t(i) : e.interrupt(r.parser.constructs.flow, n, t)(i)
    }
}
function nc(e, t, n, r, i, a, o, s, c) {
    let l = c || 1 / 0
      , u = 0;
    return d;
    function d(t) {
        return t === 60 ? (e.enter(r),
        e.enter(i),
        e.enter(a),
        e.consume(t),
        e.exit(a),
        f) : t === null || t === 32 || t === 41 || es(t) ? n(t) : (e.enter(r),
        e.enter(o),
        e.enter(s),
        e.enter(`chunkString`, {
            contentType: `string`
        }),
        h(t))
    }
    function f(n) {
        return n === 62 ? (e.enter(a),
        e.consume(n),
        e.exit(a),
        e.exit(i),
        e.exit(r),
        t) : (e.enter(s),
        e.enter(`chunkString`, {
            contentType: `string`
        }),
        p(n))
    }
    function p(t) {
        return t === 62 ? (e.exit(`chunkString`),
        e.exit(s),
        f(t)) : t === null || t === 60 || Y(t) ? n(t) : (e.consume(t),
        t === 92 ? m : p)
    }
    function m(t) {
        return t === 60 || t === 62 || t === 92 ? (e.consume(t),
        p) : p(t)
    }
    function h(i) {
        return !u && (i === null || i === 41 || X(i)) ? (e.exit(`chunkString`),
        e.exit(s),
        e.exit(o),
        e.exit(r),
        t(i)) : u < l && i === 40 ? (e.consume(i),
        u++,
        h) : i === 41 ? (e.consume(i),
        u--,
        h) : i === null || i === 32 || i === 40 || es(i) ? n(i) : (e.consume(i),
        i === 92 ? g : h)
    }
    function g(t) {
        return t === 40 || t === 41 || t === 92 ? (e.consume(t),
        h) : h(t)
    }
}
function rc(e, t, n, r, i, a) {
    let o = this, s = 0, c;
    return l;
    function l(t) {
        return e.enter(r),
        e.enter(i),
        e.consume(t),
        e.exit(i),
        e.enter(a),
        u
    }
    function u(l) {
        return s > 999 || l === null || l === 91 || l === 93 && !c || l === 94 && !s && `_hiddenFootnoteSupport` in o.parser.constructs ? n(l) : l === 93 ? (e.exit(a),
        e.enter(i),
        e.consume(l),
        e.exit(i),
        e.exit(r),
        t) : Y(l) ? (e.enter(`lineEnding`),
        e.consume(l),
        e.exit(`lineEnding`),
        u) : (e.enter(`chunkString`, {
            contentType: `string`
        }),
        d(l))
    }
    function d(t) {
        return t === null || t === 91 || t === 93 || Y(t) || s++ > 999 ? (e.exit(`chunkString`),
        u(t)) : (e.consume(t),
        c ||= !Z(t),
        t === 92 ? f : d)
    }
    function f(t) {
        return t === 91 || t === 92 || t === 93 ? (e.consume(t),
        s++,
        d) : d(t)
    }
}
function ic(e, t, n, r, i, a) {
    let o;
    return s;
    function s(t) {
        return t === 34 || t === 39 || t === 40 ? (e.enter(r),
        e.enter(i),
        e.consume(t),
        e.exit(i),
        o = t === 40 ? 41 : t,
        c) : n(t)
    }
    function c(n) {
        return n === o ? (e.enter(i),
        e.consume(n),
        e.exit(i),
        e.exit(r),
        t) : (e.enter(a),
        l(n))
    }
    function l(t) {
        return t === o ? (e.exit(a),
        c(o)) : t === null ? n(t) : Y(t) ? (e.enter(`lineEnding`),
        e.consume(t),
        e.exit(`lineEnding`),
        Q(e, l, `linePrefix`)) : (e.enter(`chunkString`, {
            contentType: `string`
        }),
        u(t))
    }
    function u(t) {
        return t === o || t === null || Y(t) ? (e.exit(`chunkString`),
        l(t)) : (e.consume(t),
        t === 92 ? d : u)
    }
    function d(t) {
        return t === o || t === 92 ? (e.consume(t),
        u) : u(t)
    }
}
function ac(e, t) {
    let n;
    return r;
    function r(i) {
        return Y(i) ? (e.enter(`lineEnding`),
        e.consume(i),
        e.exit(`lineEnding`),
        n = !0,
        r) : Z(i) ? Q(e, r, n ? `linePrefix` : `lineSuffix`)(i) : t(i)
    }
}
var oc = {
    name: `definition`,
    tokenize: cc
}
  , sc = {
    partial: !0,
    tokenize: lc
};
function cc(e, t, n) {
    let r = this, i;
    return a;
    function a(t) {
        return e.enter(`definition`),
        o(t)
    }
    function o(t) {
        return rc.call(r, e, s, n, `definitionLabel`, `definitionLabelMarker`, `definitionLabelString`)(t)
    }
    function s(t) {
        return i = Qo(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1)),
        t === 58 ? (e.enter(`definitionMarker`),
        e.consume(t),
        e.exit(`definitionMarker`),
        c) : n(t)
    }
    function c(t) {
        return X(t) ? ac(e, l)(t) : l(t)
    }
    function l(t) {
        return nc(e, u, n, `definitionDestination`, `definitionDestinationLiteral`, `definitionDestinationLiteralMarker`, `definitionDestinationRaw`, `definitionDestinationString`)(t)
    }
    function u(t) {
        return e.attempt(sc, d, d)(t)
    }
    function d(t) {
        return Z(t) ? Q(e, f, `whitespace`)(t) : f(t)
    }
    function f(a) {
        return a === null || Y(a) ? (e.exit(`definition`),
        r.parser.defined.push(i),
        t(a)) : n(a)
    }
}
function lc(e, t, n) {
    return r;
    function r(t) {
        return X(t) ? ac(e, i)(t) : n(t)
    }
    function i(t) {
        return ic(e, a, n, `definitionTitle`, `definitionTitleMarker`, `definitionTitleString`)(t)
    }
    function a(t) {
        return Z(t) ? Q(e, o, `whitespace`)(t) : o(t)
    }
    function o(e) {
        return e === null || Y(e) ? t(e) : n(e)
    }
}
var uc = {
    name: `hardBreakEscape`,
    tokenize: dc
};
function dc(e, t, n) {
    return r;
    function r(t) {
        return e.enter(`hardBreakEscape`),
        e.consume(t),
        i
    }
    function i(r) {
        return Y(r) ? (e.exit(`hardBreakEscape`),
        t(r)) : n(r)
    }
}
var fc = {
    name: `headingAtx`,
    resolve: pc,
    tokenize: mc
};
function pc(e, t) {
    let n = e.length - 2
      , r = 3;
    if (e[r][1].type === `whitespace` && (r += 2),
    n - 2 > r && e[n][1].type === `whitespace` && (n -= 2),
    e[n][1].type === `atxHeadingSequence` && (r === n - 1 || n - 4 > r && e[n - 2][1].type === `whitespace`) && (n -= r + 1 === n ? 2 : 4),
    n > r) {
        let i = {
            type: `atxHeadingText`,
            start: e[r][1].start,
            end: e[n][1].end
        }
          , a = {
            type: `chunkText`,
            start: e[r][1].start,
            end: e[n][1].end,
            contentType: `text`
        };
        Go(e, r, n - r + 1, [[`enter`, i, t], [`enter`, a, t], [`exit`, a, t], [`exit`, i, t]])
    }
    return e
}
function mc(e, t, n) {
    let r = 0;
    return i;
    function i(t) {
        return e.enter(`atxHeading`),
        a(t)
    }
    function a(t) {
        return e.enter(`atxHeadingSequence`),
        o(t)
    }
    function o(t) {
        return t === 35 && r++ < 6 ? (e.consume(t),
        o) : t === null || X(t) ? (e.exit(`atxHeadingSequence`),
        s(t)) : n(t)
    }
    function s(n) {
        return n === 35 ? (e.enter(`atxHeadingSequence`),
        c(n)) : n === null || Y(n) ? (e.exit(`atxHeading`),
        t(n)) : Z(n) ? Q(e, s, `whitespace`)(n) : (e.enter(`atxHeadingText`),
        l(n))
    }
    function c(t) {
        return t === 35 ? (e.consume(t),
        c) : (e.exit(`atxHeadingSequence`),
        s(t))
    }
    function l(t) {
        return t === null || t === 35 || X(t) ? (e.exit(`atxHeadingText`),
        s(t)) : (e.consume(t),
        l)
    }
}
var hc = `address.article.aside.base.basefont.blockquote.body.caption.center.col.colgroup.dd.details.dialog.dir.div.dl.dt.fieldset.figcaption.figure.footer.form.frame.frameset.h1.h2.h3.h4.h5.h6.head.header.hr.html.iframe.legend.li.link.main.menu.menuitem.nav.noframes.ol.optgroup.option.p.param.search.section.summary.table.tbody.td.tfoot.th.thead.title.tr.track.ul`.split(`.`)
  , gc = [`pre`, `script`, `style`, `textarea`]
  , _c = {
    concrete: !0,
    name: `htmlFlow`,
    resolveTo: yc,
    tokenize: bc
}
  , vc = {
    partial: !0,
    tokenize: xc
};
function yc(e) {
    let t = e.length;
    for (; t-- && (e[t][0] !== `enter` || e[t][1].type !== `htmlFlow`); )
        ;
    return t > 1 && e[t - 2][1].type === `linePrefix` && (e[t][1].start = e[t - 2][1].start,
    e[t + 1][1].start = e[t - 2][1].start,
    e.splice(t - 2, 2)),
    e
}
function bc(e, t, n) {
    let r = this, i, a, o, s, c;
    return l;
    function l(e) {
        return u(e)
    }
    function u(t) {
        return e.enter(`htmlFlow`),
        e.enter(`htmlFlowData`),
        e.consume(t),
        d
    }
    function d(s) {
        return s === 33 ? (e.consume(s),
        f) : s === 47 ? (e.consume(s),
        a = !0,
        h) : s === 63 ? (e.consume(s),
        i = 3,
        r.interrupt ? t : P) : q(s) ? (e.consume(s),
        o = String.fromCharCode(s),
        g) : n(s)
    }
    function f(a) {
        return a === 45 ? (e.consume(a),
        i = 2,
        p) : a === 91 ? (e.consume(a),
        i = 5,
        s = 0,
        m) : q(a) ? (e.consume(a),
        i = 4,
        r.interrupt ? t : P) : n(a)
    }
    function p(i) {
        return i === 45 ? (e.consume(i),
        r.interrupt ? t : P) : n(i)
    }
    function m(i) {
        return i === `CDATA[`.charCodeAt(s++) ? (e.consume(i),
        s === 6 ? r.interrupt ? t : O : m) : n(i)
    }
    function h(t) {
        return q(t) ? (e.consume(t),
        o = String.fromCharCode(t),
        g) : n(t)
    }
    function g(s) {
        if (s === null || s === 47 || s === 62 || X(s)) {
            let c = s === 47
              , l = o.toLowerCase();
            return !c && !a && gc.includes(l) ? (i = 1,
            r.interrupt ? t(s) : O(s)) : hc.includes(o.toLowerCase()) ? (i = 6,
            c ? (e.consume(s),
            _) : r.interrupt ? t(s) : O(s)) : (i = 7,
            r.interrupt && !r.parser.lazy[r.now().line] ? n(s) : a ? v(s) : y(s))
        }
        return s === 45 || J(s) ? (e.consume(s),
        o += String.fromCharCode(s),
        g) : n(s)
    }
    function _(i) {
        return i === 62 ? (e.consume(i),
        r.interrupt ? t : O) : n(i)
    }
    function v(t) {
        return Z(t) ? (e.consume(t),
        v) : E(t)
    }
    function y(t) {
        return t === 47 ? (e.consume(t),
        E) : t === 58 || t === 95 || q(t) ? (e.consume(t),
        b) : Z(t) ? (e.consume(t),
        y) : E(t)
    }
    function b(t) {
        return t === 45 || t === 46 || t === 58 || t === 95 || J(t) ? (e.consume(t),
        b) : x(t)
    }
    function x(t) {
        return t === 61 ? (e.consume(t),
        S) : Z(t) ? (e.consume(t),
        x) : y(t)
    }
    function S(t) {
        return t === null || t === 60 || t === 61 || t === 62 || t === 96 ? n(t) : t === 34 || t === 39 ? (e.consume(t),
        c = t,
        C) : Z(t) ? (e.consume(t),
        S) : w(t)
    }
    function C(t) {
        return t === c ? (e.consume(t),
        c = null,
        T) : t === null || Y(t) ? n(t) : (e.consume(t),
        C)
    }
    function w(t) {
        return t === null || t === 34 || t === 39 || t === 47 || t === 60 || t === 61 || t === 62 || t === 96 || X(t) ? x(t) : (e.consume(t),
        w)
    }
    function T(e) {
        return e === 47 || e === 62 || Z(e) ? y(e) : n(e)
    }
    function E(t) {
        return t === 62 ? (e.consume(t),
        D) : n(t)
    }
    function D(t) {
        return t === null || Y(t) ? O(t) : Z(t) ? (e.consume(t),
        D) : n(t)
    }
    function O(t) {
        return t === 45 && i === 2 ? (e.consume(t),
        M) : t === 60 && i === 1 ? (e.consume(t),
        N) : t === 62 && i === 4 ? (e.consume(t),
        F) : t === 63 && i === 3 ? (e.consume(t),
        P) : t === 93 && i === 5 ? (e.consume(t),
        te) : Y(t) && (i === 6 || i === 7) ? (e.exit(`htmlFlowData`),
        e.check(vc, ne, k)(t)) : t === null || Y(t) ? (e.exit(`htmlFlowData`),
        k(t)) : (e.consume(t),
        O)
    }
    function k(t) {
        return e.check(Fs, A, ne)(t)
    }
    function A(t) {
        return e.enter(`lineEnding`),
        e.consume(t),
        e.exit(`lineEnding`),
        j
    }
    function j(t) {
        return t === null || Y(t) ? k(t) : (e.enter(`htmlFlowData`),
        O(t))
    }
    function M(t) {
        return t === 45 ? (e.consume(t),
        P) : O(t)
    }
    function N(t) {
        return t === 47 ? (e.consume(t),
        o = ``,
        ee) : O(t)
    }
    function ee(t) {
        if (t === 62) {
            let n = o.toLowerCase();
            return gc.includes(n) ? (e.consume(t),
            F) : O(t)
        }
        return q(t) && o.length < 8 ? (e.consume(t),
        o += String.fromCharCode(t),
        ee) : O(t)
    }
    function te(t) {
        return t === 93 ? (e.consume(t),
        P) : O(t)
    }
    function P(t) {
        return t === 62 ? (e.consume(t),
        F) : t === 45 && i === 2 ? (e.consume(t),
        P) : O(t)
    }
    function F(t) {
        return t === null || Y(t) ? (e.exit(`htmlFlowData`),
        ne(t)) : (e.consume(t),
        F)
    }
    function ne(n) {
        return e.exit(`htmlFlow`),
        t(n)
    }
}
function xc(e, t, n) {
    return r;
    function r(r) {
        return e.enter(`lineEnding`),
        e.consume(r),
        e.exit(`lineEnding`),
        e.attempt(Ts, t, n)
    }
}
var Sc = {
    name: `htmlText`,
    tokenize: Cc
};
function Cc(e, t, n) {
    let r = this, i, a, o;
    return s;
    function s(t) {
        return e.enter(`htmlText`),
        e.enter(`htmlTextData`),
        e.consume(t),
        c
    }
    function c(t) {
        return t === 33 ? (e.consume(t),
        l) : t === 47 ? (e.consume(t),
        x) : t === 63 ? (e.consume(t),
        y) : q(t) ? (e.consume(t),
        w) : n(t)
    }
    function l(t) {
        return t === 45 ? (e.consume(t),
        u) : t === 91 ? (e.consume(t),
        a = 0,
        m) : q(t) ? (e.consume(t),
        v) : n(t)
    }
    function u(t) {
        return t === 45 ? (e.consume(t),
        p) : n(t)
    }
    function d(t) {
        return t === null ? n(t) : t === 45 ? (e.consume(t),
        f) : Y(t) ? (o = d,
        N(t)) : (e.consume(t),
        d)
    }
    function f(t) {
        return t === 45 ? (e.consume(t),
        p) : d(t)
    }
    function p(e) {
        return e === 62 ? M(e) : e === 45 ? f(e) : d(e)
    }
    function m(t) {
        return t === `CDATA[`.charCodeAt(a++) ? (e.consume(t),
        a === 6 ? h : m) : n(t)
    }
    function h(t) {
        return t === null ? n(t) : t === 93 ? (e.consume(t),
        g) : Y(t) ? (o = h,
        N(t)) : (e.consume(t),
        h)
    }
    function g(t) {
        return t === 93 ? (e.consume(t),
        _) : h(t)
    }
    function _(t) {
        return t === 62 ? M(t) : t === 93 ? (e.consume(t),
        _) : h(t)
    }
    function v(t) {
        return t === null || t === 62 ? M(t) : Y(t) ? (o = v,
        N(t)) : (e.consume(t),
        v)
    }
    function y(t) {
        return t === null ? n(t) : t === 63 ? (e.consume(t),
        b) : Y(t) ? (o = y,
        N(t)) : (e.consume(t),
        y)
    }
    function b(e) {
        return e === 62 ? M(e) : y(e)
    }
    function x(t) {
        return q(t) ? (e.consume(t),
        S) : n(t)
    }
    function S(t) {
        return t === 45 || J(t) ? (e.consume(t),
        S) : C(t)
    }
    function C(t) {
        return Y(t) ? (o = C,
        N(t)) : Z(t) ? (e.consume(t),
        C) : M(t)
    }
    function w(t) {
        return t === 45 || J(t) ? (e.consume(t),
        w) : t === 47 || t === 62 || X(t) ? T(t) : n(t)
    }
    function T(t) {
        return t === 47 ? (e.consume(t),
        M) : t === 58 || t === 95 || q(t) ? (e.consume(t),
        E) : Y(t) ? (o = T,
        N(t)) : Z(t) ? (e.consume(t),
        T) : M(t)
    }
    function E(t) {
        return t === 45 || t === 46 || t === 58 || t === 95 || J(t) ? (e.consume(t),
        E) : D(t)
    }
    function D(t) {
        return t === 61 ? (e.consume(t),
        O) : Y(t) ? (o = D,
        N(t)) : Z(t) ? (e.consume(t),
        D) : T(t)
    }
    function O(t) {
        return t === null || t === 60 || t === 61 || t === 62 || t === 96 ? n(t) : t === 34 || t === 39 ? (e.consume(t),
        i = t,
        k) : Y(t) ? (o = O,
        N(t)) : Z(t) ? (e.consume(t),
        O) : (e.consume(t),
        A)
    }
    function k(t) {
        return t === i ? (e.consume(t),
        i = void 0,
        j) : t === null ? n(t) : Y(t) ? (o = k,
        N(t)) : (e.consume(t),
        k)
    }
    function A(t) {
        return t === null || t === 34 || t === 39 || t === 60 || t === 61 || t === 96 ? n(t) : t === 47 || t === 62 || X(t) ? T(t) : (e.consume(t),
        A)
    }
    function j(e) {
        return e === 47 || e === 62 || X(e) ? T(e) : n(e)
    }
    function M(r) {
        return r === 62 ? (e.consume(r),
        e.exit(`htmlTextData`),
        e.exit(`htmlText`),
        t) : n(r)
    }
    function N(t) {
        return e.exit(`htmlTextData`),
        e.enter(`lineEnding`),
        e.consume(t),
        e.exit(`lineEnding`),
        ee
    }
    function ee(t) {
        return Z(t) ? Q(e, te, `linePrefix`, r.parser.constructs.disable.null.includes(`codeIndented`) ? void 0 : 4)(t) : te(t)
    }
    function te(t) {
        return e.enter(`htmlTextData`),
        o(t)
    }
}
var wc = {
    name: `labelEnd`,
    resolveAll: Oc,
    resolveTo: kc,
    tokenize: Ac
}
  , Tc = {
    tokenize: jc
}
  , Ec = {
    tokenize: Mc
}
  , Dc = {
    tokenize: Nc
};
function Oc(e) {
    let t = -1
      , n = [];
    for (; ++t < e.length; ) {
        let r = e[t][1];
        if (n.push(e[t]),
        r.type === `labelImage` || r.type === `labelLink` || r.type === `labelEnd`) {
            let e = r.type === `labelImage` ? 4 : 2;
            r.type = `data`,
            t += e
        }
    }
    return e.length !== n.length && Go(e, 0, e.length, n),
    e
}
function kc(e, t) {
    let n = e.length, r = 0, i, a, o;
    for (; n--; ) {
        let t = e[n][1];
        if (i) {
            if (t.type === `link` || t.type === `labelLink` && t._inactive)
                break;
            e[n][0] === `enter` && t.type === `labelLink` && (t._inactive = !0)
        } else if (a) {
            if (e[n][0] === `enter` && (t.type === `labelImage` || t.type === `labelLink`) && !t._balanced && (i = n,
            t.type !== `labelLink`)) {
                r = 2;
                break
            }
        } else
            t.type === `labelEnd` && (a = n)
    }
    let s = {
        type: e[i][1].type === `labelLink` ? `link` : `image`,
        start: {
            ...e[i][1].start
        },
        end: {
            ...e[e.length - 1][1].end
        }
    }
      , c = {
        type: `label`,
        start: {
            ...e[i][1].start
        },
        end: {
            ...e[a][1].end
        }
    }
      , l = {
        type: `labelText`,
        start: {
            ...e[i + r + 2][1].end
        },
        end: {
            ...e[a - 2][1].start
        }
    };
    return o = [[`enter`, s, t], [`enter`, c, t]],
    o = Ko(o, e.slice(i + 1, i + r + 3)),
    o = Ko(o, [[`enter`, l, t]]),
    o = Ko(o, vs(t.parser.constructs.insideSpan.null, e.slice(i + r + 4, a - 3), t)),
    o = Ko(o, [[`exit`, l, t], e[a - 2], e[a - 1], [`exit`, c, t]]),
    o = Ko(o, e.slice(a + 1)),
    o = Ko(o, [[`exit`, s, t]]),
    Go(e, i, e.length, o),
    e
}
function Ac(e, t, n) {
    let r = this, i = r._labelStarts, a, o;
    if (i) {
        for (; i.length > 0 && i[i.length - 1]._balanced; )
            i.pop();
        a = i[i.length - 1]
    }
    return s;
    function s(t) {
        return a ? a._inactive ? d(t) : (o = r.parser.defined.includes(Qo(r.sliceSerialize({
            start: a.end,
            end: r.now()
        }))),
        e.enter(`labelEnd`),
        e.enter(`labelMarker`),
        e.consume(t),
        e.exit(`labelMarker`),
        e.exit(`labelEnd`),
        c) : n(t)
    }
    function c(t) {
        return t === 40 ? e.attempt(Tc, u, o ? u : d)(t) : t === 91 ? e.attempt(Ec, u, o ? l : d)(t) : o ? u(t) : d(t)
    }
    function l(t) {
        return e.attempt(Dc, u, d)(t)
    }
    function u(e) {
        return i.pop(),
        t(e)
    }
    function d(e) {
        return a._balanced = !0,
        n(e)
    }
}
function jc(e, t, n) {
    return r;
    function r(t) {
        return e.enter(`resource`),
        e.enter(`resourceMarker`),
        e.consume(t),
        e.exit(`resourceMarker`),
        i
    }
    function i(t) {
        return X(t) ? ac(e, a)(t) : a(t)
    }
    function a(t) {
        return t === 41 ? u(t) : nc(e, o, s, `resourceDestination`, `resourceDestinationLiteral`, `resourceDestinationLiteralMarker`, `resourceDestinationRaw`, `resourceDestinationString`, 32)(t)
    }
    function o(t) {
        return X(t) ? ac(e, c)(t) : u(t)
    }
    function s(e) {
        return n(e)
    }
    function c(t) {
        return t === 34 || t === 39 || t === 40 ? ic(e, l, n, `resourceTitle`, `resourceTitleMarker`, `resourceTitleString`)(t) : u(t)
    }
    function l(t) {
        return X(t) ? ac(e, u)(t) : u(t)
    }
    function u(r) {
        return r === 41 ? (e.enter(`resourceMarker`),
        e.consume(r),
        e.exit(`resourceMarker`),
        e.exit(`resource`),
        t) : n(r)
    }
}
function Mc(e, t, n) {
    let r = this;
    return i;
    function i(t) {
        return rc.call(r, e, a, o, `reference`, `referenceMarker`, `referenceString`)(t)
    }
    function a(e) {
        return r.parser.defined.includes(Qo(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1))) ? t(e) : n(e)
    }
    function o(e) {
        return n(e)
    }
}
function Nc(e, t, n) {
    return r;
    function r(t) {
        return e.enter(`reference`),
        e.enter(`referenceMarker`),
        e.consume(t),
        e.exit(`referenceMarker`),
        i
    }
    function i(r) {
        return r === 93 ? (e.enter(`referenceMarker`),
        e.consume(r),
        e.exit(`referenceMarker`),
        e.exit(`reference`),
        t) : n(r)
    }
}
var Pc = {
    name: `labelStartImage`,
    resolveAll: wc.resolveAll,
    tokenize: Fc
};
function Fc(e, t, n) {
    let r = this, i;
    return a;
    function a(t) {
        return e.enter(`labelImage`),
        e.enter(`labelImageMarker`),
        e.consume(t),
        e.exit(`labelImageMarker`),
        o
    }
    function o(t) {
        return t === 91 ? (e.enter(`labelMarker`),
        e.consume(t),
        e.exit(`labelMarker`),
        i = e.exit(`labelImage`),
        s) : n(t)
    }
    function s(e) {
        return e === 94 && `_hiddenFootnoteSupport` in r.parser.constructs ? n(e) : (r._labelStarts = r._labelStarts || [],
        r._labelStarts.push(i),
        t(e))
    }
}
var Ic = {
    name: `labelStartLink`,
    resolveAll: wc.resolveAll,
    tokenize: Lc
};
function Lc(e, t, n) {
    let r = this, i;
    return a;
    function a(t) {
        return e.enter(`labelLink`),
        e.enter(`labelMarker`),
        e.consume(t),
        e.exit(`labelMarker`),
        i = e.exit(`labelLink`),
        o
    }
    function o(e) {
        return e === 94 && `_hiddenFootnoteSupport` in r.parser.constructs ? n(e) : (r._labelStarts = r._labelStarts || [],
        r._labelStarts.push(i),
        t(e))
    }
}
var Rc = {
    name: `lineEnding`,
    tokenize: zc
};
function zc(e, t) {
    return n;
    function n(n) {
        return e.enter(`lineEnding`),
        e.consume(n),
        e.exit(`lineEnding`),
        Q(e, t, `linePrefix`)
    }
}
var Bc = {
    name: `thematicBreak`,
    tokenize: Vc
};
function Vc(e, t, n) {
    let r = 0, i;
    return a;
    function a(t) {
        return e.enter(`thematicBreak`),
        o(t)
    }
    function o(e) {
        return i = e,
        s(e)
    }
    function s(a) {
        return a === i ? (e.enter(`thematicBreakSequence`),
        c(a)) : r >= 3 && (a === null || Y(a)) ? (e.exit(`thematicBreak`),
        t(a)) : n(a)
    }
    function c(t) {
        return t === i ? (e.consume(t),
        r++,
        c) : (e.exit(`thematicBreakSequence`),
        Z(t) ? Q(e, s, `whitespace`)(t) : s(t))
    }
}
var $ = {
    continuation: {
        tokenize: Gc
    },
    exit: qc,
    name: `list`,
    tokenize: Wc
}
  , Hc = {
    partial: !0,
    tokenize: Jc
}
  , Uc = {
    partial: !0,
    tokenize: Kc
};
function Wc(e, t, n) {
    let r = this
      , i = r.events[r.events.length - 1]
      , a = i && i[1].type === `linePrefix` ? i[2].sliceSerialize(i[1], !0).length : 0
      , o = 0;
    return s;
    function s(t) {
        let i = r.containerState.type || (t === 42 || t === 43 || t === 45 ? `listUnordered` : `listOrdered`);
        if (i === `listUnordered` ? !r.containerState.marker || t === r.containerState.marker : ts(t)) {
            if (r.containerState.type || (r.containerState.type = i,
            e.enter(i, {
                _container: !0
            })),
            i === `listUnordered`)
                return e.enter(`listItemPrefix`),
                t === 42 || t === 45 ? e.check(Bc, n, l)(t) : l(t);
            if (!r.interrupt || t === 49)
                return e.enter(`listItemPrefix`),
                e.enter(`listItemValue`),
                c(t)
        }
        return n(t)
    }
    function c(t) {
        return ts(t) && ++o < 10 ? (e.consume(t),
        c) : (!r.interrupt || o < 2) && (r.containerState.marker ? t === r.containerState.marker : t === 41 || t === 46) ? (e.exit(`listItemValue`),
        l(t)) : n(t)
    }
    function l(t) {
        return e.enter(`listItemMarker`),
        e.consume(t),
        e.exit(`listItemMarker`),
        r.containerState.marker = r.containerState.marker || t,
        e.check(Ts, r.interrupt ? n : u, e.attempt(Hc, f, d))
    }
    function u(e) {
        return r.containerState.initialBlankLine = !0,
        a++,
        f(e)
    }
    function d(t) {
        return Z(t) ? (e.enter(`listItemPrefixWhitespace`),
        e.consume(t),
        e.exit(`listItemPrefixWhitespace`),
        f) : n(t)
    }
    function f(n) {
        return r.containerState.size = a + r.sliceSerialize(e.exit(`listItemPrefix`), !0).length,
        t(n)
    }
}
function Gc(e, t, n) {
    let r = this;
    return r.containerState._closeFlow = void 0,
    e.check(Ts, i, a);
    function i(n) {
        return r.containerState.furtherBlankLines = r.containerState.furtherBlankLines || r.containerState.initialBlankLine,
        Q(e, t, `listItemIndent`, r.containerState.size + 1)(n)
    }
    function a(n) {
        return r.containerState.furtherBlankLines || !Z(n) ? (r.containerState.furtherBlankLines = void 0,
        r.containerState.initialBlankLine = void 0,
        o(n)) : (r.containerState.furtherBlankLines = void 0,
        r.containerState.initialBlankLine = void 0,
        e.attempt(Uc, t, o)(n))
    }
    function o(i) {
        return r.containerState._closeFlow = !0,
        r.interrupt = void 0,
        Q(e, e.attempt($, t, n), `linePrefix`, r.parser.constructs.disable.null.includes(`codeIndented`) ? void 0 : 4)(i)
    }
}
function Kc(e, t, n) {
    let r = this;
    return Q(e, i, `listItemIndent`, r.containerState.size + 1);
    function i(e) {
        let i = r.events[r.events.length - 1];
        return i && i[1].type === `listItemIndent` && i[2].sliceSerialize(i[1], !0).length === r.containerState.size ? t(e) : n(e)
    }
}
function qc(e) {
    e.exit(this.containerState.type)
}
function Jc(e, t, n) {
    let r = this;
    return Q(e, i, `listItemPrefixWhitespace`, r.parser.constructs.disable.null.includes(`codeIndented`) ? void 0 : 5);
    function i(e) {
        let i = r.events[r.events.length - 1];
        return !Z(e) && i && i[1].type === `listItemPrefixWhitespace` ? t(e) : n(e)
    }
}
var Yc = {
    name: `setextUnderline`,
    resolveTo: Xc,
    tokenize: Zc
};
function Xc(e, t) {
    let n = new ds, r = e.length, i, a, o;
    for (; r--; )
        if (e[r][0] === `enter`) {
            if (e[r][1].type === `content`) {
                i = r;
                break
            }
            e[r][1].type === `paragraph` && (a = r)
        } else
            e[r][1].type === `content` && n.add(r, 1, []),
            !o && e[r][1].type === `definition` && (o = r);
    let s = {
        type: `setextHeading`,
        start: {
            ...e[i][1].start
        },
        end: {
            ...e[e.length - 1][1].end
        }
    };
    return e[a][1].type = `setextHeadingText`,
    o ? (n.add(a, 0, [[`enter`, s, t]]),
    n.add(o + 1, 0, [[`exit`, e[i][1], t]]),
    e[i][1].end = {
        ...e[o][1].end
    }) : e[i][1] = s,
    n.add(e.length, 0, [[`exit`, s, t]]),
    n.consume(e),
    e
}
function Zc(e, t, n) {
    let r = this, i;
    return a;
    function a(t) {
        let a = r.events.length, s;
        for (; a--; )
            if (r.events[a][1].type !== `lineEnding` && r.events[a][1].type !== `linePrefix` && r.events[a][1].type !== `content`) {
                s = r.events[a][1].type === `paragraph`;
                break
            }
        return !r.parser.lazy[r.now().line] && (r.interrupt || s) ? (e.enter(`setextHeadingLine`),
        i = t,
        o(t)) : n(t)
    }
    function o(t) {
        return e.enter(`setextHeadingLineSequence`),
        s(t)
    }
    function s(t) {
        return t === i ? (e.consume(t),
        s) : (e.exit(`setextHeadingLineSequence`),
        Z(t) ? Q(e, c, `lineSuffix`)(t) : c(t))
    }
    function c(r) {
        return r === null || Y(r) ? (e.exit(`setextHeadingLine`),
        t(r)) : n(r)
    }
}
var Qc = {
    tokenize: $c
};
function $c(e) {
    let t = this
      , n = e.attempt(Ts, r, e.attempt(this.parser.constructs.flowInitial, i, Q(e, e.attempt(this.parser.constructs.flow, i, e.attempt(Zs, i)), `linePrefix`)));
    return n;
    function r(r) {
        if (r === null) {
            e.consume(r);
            return
        }
        return e.enter(`lineEndingBlank`),
        e.consume(r),
        e.exit(`lineEndingBlank`),
        t.currentConstruct = void 0,
        n
    }
    function i(r) {
        if (r === null) {
            e.consume(r);
            return
        }
        return e.enter(`lineEnding`),
        e.consume(r),
        e.exit(`lineEnding`),
        t.currentConstruct = void 0,
        n
    }
}
var el = {
    resolveAll: il()
}
  , tl = rl(`string`)
  , nl = rl(`text`);
function rl(e) {
    return {
        resolveAll: il(e === `text` ? al : void 0),
        tokenize: t
    };
    function t(t) {
        let n = this
          , r = this.parser.constructs[e]
          , i = t.attempt(r, a, o);
        return a;
        function a(e) {
            return c(e) ? i(e) : o(e)
        }
        function o(e) {
            if (e === null) {
                t.consume(e);
                return
            }
            return t.enter(`data`),
            t.consume(e),
            s
        }
        function s(e) {
            return c(e) ? (t.exit(`data`),
            i(e)) : (t.consume(e),
            s)
        }
        function c(e) {
            if (e === null)
                return !0;
            let t = r[e]
              , i = -1;
            if (t)
                for (; ++i < t.length; ) {
                    let e = t[i];
                    if (!e.previous || e.previous.call(n, n.previous))
                        return !0
                }
            return !1
        }
    }
}
function il(e) {
    return t;
    function t(t, n) {
        let r = -1, i;
        for (; ++r <= t.length; )
            i === void 0 ? t[r] && t[r][1].type === `data` && (i = r,
            r++) : (!t[r] || t[r][1].type !== `data`) && (r !== i + 2 && (t[i][1].end = t[r - 1][1].end,
            t.splice(i + 2, r - i - 2),
            r = i + 2),
            i = void 0);
        return e ? e(t, n) : t
    }
}
function al(e, t) {
    let n = new ds
      , r = 0;
    for (; ++r <= e.length; )
        if ((r === e.length || e[r][1].type === `lineEnding`) && e[r - 1][1].type === `data`) {
            let i = e[r - 1][1], a = t.sliceStream(i), o = a.length, s = -1, c = 0, l;
            for (; o--; ) {
                let e = a[o];
                if (typeof e == `string`) {
                    for (s = e.length; e.charCodeAt(s - 1) === 32; )
                        c++,
                        s--;
                    if (s)
                        break;
                    s = -1
                } else if (e === -2)
                    l = !0,
                    c++;
                else if (e !== -1) {
                    o++;
                    break
                }
            }
            if (t._contentTypeTextTrailing && r === e.length && (c = 0),
            c) {
                let a = {
                    type: r === e.length || l || c < 2 ? `lineSuffix` : `hardBreakTrailing`,
                    start: {
                        _bufferIndex: o ? s : i.start._bufferIndex + s,
                        _index: i.start._index + o,
                        line: i.end.line,
                        column: i.end.column - c,
                        offset: i.end.offset - c
                    },
                    end: {
                        ...i.end
                    }
                };
                i.end = {
                    ...a.start
                },
                i.start.offset === i.end.offset ? Object.assign(i, a) : n.add(r, 0, [[`enter`, a, t], [`exit`, a, t]])
            }
            r++
        }
    return n.consume(e),
    e
}
var ol = t({
    attentionMarkers: () => ml,
    contentInitial: () => cl,
    disable: () => hl,
    document: () => sl,
    flow: () => ul,
    flowInitial: () => ll,
    insideSpan: () => pl,
    string: () => dl,
    text: () => fl
})
  , sl = {
    42: $,
    43: $,
    45: $,
    48: $,
    49: $,
    50: $,
    51: $,
    52: $,
    53: $,
    54: $,
    55: $,
    56: $,
    57: $,
    62: Ds
}
  , cl = {
    91: oc
}
  , ll = {
    [-2]: zs,
    [-1]: zs,
    32: zs
}
  , ul = {
    35: fc,
    42: Bc,
    45: [Yc, Bc],
    60: _c,
    61: Yc,
    95: Bc,
    96: Ls,
    126: Ls
}
  , dl = {
    38: Ns,
    92: js
}
  , fl = {
    [-5]: Rc,
    [-4]: Rc,
    [-3]: Rc,
    33: Pc,
    38: Ns,
    42: ys,
    60: [Cs, Sc],
    91: Ic,
    92: [uc, js],
    93: wc,
    95: ys,
    96: Us
}
  , pl = {
    null: [ys, el]
}
  , ml = {
    null: [42, 95]
}
  , hl = {
    null: []
};
function gl(e, t, n) {
    let r = {
        _bufferIndex: -1,
        _index: 0,
        line: n && n.line || 1,
        column: n && n.column || 1,
        offset: n && n.offset || 0
    }
      , i = {}
      , a = []
      , o = []
      , s = []
      , c = {
        attempt: C(x),
        check: C(S),
        consume: v,
        enter: y,
        exit: b,
        interrupt: C(S, {
            interrupt: !0
        })
    }
      , l = {
        code: null,
        containerState: {},
        defineSkip: h,
        events: [],
        now: m,
        parser: e,
        previous: null,
        sliceSerialize: f,
        sliceStream: p,
        write: d
    }
      , u = t.tokenize.call(l, c);
    return t.resolveAll && a.push(t),
    l;
    function d(e) {
        return o = Ko(o, e),
        g(),
        o[o.length - 1] === null ? (w(t, 0),
        l.events = vs(a, l.events, l),
        l.events) : []
    }
    function f(e, t) {
        return vl(p(e), t)
    }
    function p(e) {
        return _l(o, e)
    }
    function m() {
        let {_bufferIndex: e, _index: t, line: n, column: i, offset: a} = r;
        return {
            _bufferIndex: e,
            _index: t,
            line: n,
            column: i,
            offset: a
        }
    }
    function h(e) {
        i[e.line] = e.column,
        E()
    }
    function g() {
        for (; r._index < o.length; ) {
            let e = o[r._index];
            if (typeof e == `string`) {
                let t = r._index;
                for (r._bufferIndex < 0 && (r._bufferIndex = 0); r._index === t && r._bufferIndex < e.length; )
                    _(e.charCodeAt(r._bufferIndex))
            } else
                _(e)
        }
    }
    function _(e) {
        u = u(e)
    }
    function v(e) {
        Y(e) ? (r.line++,
        r.column = 1,
        r.offset += e === -3 ? 2 : 1,
        E()) : e !== -1 && (r.column++,
        r.offset++),
        r._bufferIndex < 0 ? r._index++ : (r._bufferIndex++,
        r._bufferIndex === o[r._index].length && (r._bufferIndex = -1,
        r._index++)),
        l.previous = e
    }
    function y(e, t) {
        let n = t || {};
        return n.type = e,
        n.start = m(),
        l.events.push([`enter`, n, l]),
        s.push(n),
        n
    }
    function b(e) {
        let t = s.pop();
        return t.end = m(),
        l.events.push([`exit`, t, l]),
        t
    }
    function x(e, t) {
        w(e, t.from)
    }
    function S(e, t) {
        t.restore()
    }
    function C(e, t) {
        return n;
        function n(n, r, i) {
            let a, o, s, u;
            return Array.isArray(n) ? f(n) : `tokenize` in n ? f([n]) : d(n);
            function d(e) {
                return t;
                function t(t) {
                    let n = t !== null && e[t]
                      , r = t !== null && e.null;
                    return f([...Array.isArray(n) ? n : n ? [n] : [], ...Array.isArray(r) ? r : r ? [r] : []])(t)
                }
            }
            function f(e) {
                return a = e,
                o = 0,
                e.length === 0 ? i : p(e[o])
            }
            function p(e) {
                return n;
                function n(n) {
                    return u = T(),
                    s = e,
                    e.partial || (l.currentConstruct = e),
                    e.name && l.parser.constructs.disable.null.includes(e.name) ? h(n) : e.tokenize.call(t ? Object.assign(Object.create(l), t) : l, c, m, h)(n)
                }
            }
            function m(t) {
                return e(s, u),
                r
            }
            function h(e) {
                return u.restore(),
                ++o < a.length ? p(a[o]) : i
            }
        }
    }
    function w(e, t) {
        e.resolveAll && !a.includes(e) && a.push(e),
        e.resolve && Go(l.events, t, l.events.length - t, e.resolve(l.events.slice(t), l)),
        e.resolveTo && (l.events = e.resolveTo(l.events, l))
    }
    function T() {
        let e = m()
          , t = l.previous
          , n = l.currentConstruct
          , i = l.events.length
          , a = Array.from(s);
        return {
            from: i,
            restore: o
        };
        function o() {
            r = e,
            l.previous = t,
            l.currentConstruct = n,
            l.events.length = i,
            s = a,
            E()
        }
    }
    function E() {
        r.line in i && r.column < 2 && (r.column = i[r.line],
        r.offset += i[r.line] - 1)
    }
}
function _l(e, t) {
    let n = t.start._index, r = t.start._bufferIndex, i = t.end._index, a = t.end._bufferIndex, o;
    if (n === i)
        o = [e[n].slice(r, a)];
    else {
        if (o = e.slice(n, i),
        r > -1) {
            let e = o[0];
            typeof e == `string` ? o[0] = e.slice(r) : o.shift()
        }
        a > 0 && o.push(e[i].slice(0, a))
    }
    return o
}
function vl(e, t) {
    let n = -1, r = [], i;
    for (; ++n < e.length; ) {
        let a = e[n], o;
        if (typeof a == `string`)
            o = a;
        else
            switch (a) {
            case -5:
                o = `\r`;
                break;
            case -4:
                o = `
`;
                break;
            case -3:
                o = `\r
`;
                break;
            case -2:
                o = t ? ` ` : `	`;
                break;
            case -1:
                if (!t && i)
                    continue;
                o = ` `;
                break;
            default:
                o = String.fromCharCode(a)
            }
        i = a === -2,
        r.push(o)
    }
    return r.join(``)
}
function yl(e) {
    let t = {
        constructs: Jo([ol, ...(e || {}).extensions || []]),
        content: n(ls),
        defined: [],
        document: n(ps),
        flow: n(Qc),
        lazy: {},
        string: n(tl),
        text: n(nl)
    };
    return t;
    function n(e) {
        return n;
        function n(n) {
            return gl(t, e, n)
        }
    }
}
function bl(e) {
    for (; !Ys(e); )
        ;
    return e
}
var xl = /[\0\t\n\r]/g;
function Sl() {
    let e = 1, t = ``, n = !0, r;
    return i;
    function i(i, a, o) {
        i = t + (typeof i == `string` ? i.toString() : new TextDecoder(a || void 0).decode(i));
        let s = []
          , c = 0;
        for (t = ``,
        n &&= (i.charCodeAt(0) === 65279 && c++,
        void 0); c < i.length; ) {
            xl.lastIndex = c;
            let n = xl.exec(i)
              , a = n && n.index !== void 0 ? n.index : i.length
              , o = i.charCodeAt(a);
            if (!n) {
                t = i.slice(c);
                break
            }
            if (o === 10 && c === a && r)
                s.push(-3),
                r = void 0;
            else
                switch (r &&= (s.push(-5),
                void 0),
                c < a && (s.push(i.slice(c, a)),
                e += a - c),
                o) {
                case 0:
                    s.push(65533),
                    e++;
                    break;
                case 9:
                    {
                        let t = Math.ceil(e / 4) * 4;
                        for (s.push(-2); e++ < t; )
                            s.push(-1);
                        break
                    }
                case 10:
                    s.push(-4),
                    e = 1;
                    break;
                default:
                    r = !0,
                    e = 1
                }
            c = a + 1
        }
        return o && (r && s.push(-5),
        t && s.push(t),
        s.push(null)),
        s
    }
}
var Cl = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function wl(e) {
    return e.replace(Cl, Tl)
}
function Tl(e, t, n) {
    if (t)
        return t;
    if (n.charCodeAt(0) === 35) {
        let e = n.charCodeAt(1)
          , t = e === 120 || e === 88;
        return Zo(n.slice(t ? 2 : 1), t ? 16 : 10)
    }
    return Wo(n) || e
}
var El = {}.hasOwnProperty;
function Dl(e, t, n) {
    return t && typeof t == `object` && (n = t,
    t = void 0),
    Ol(n)(bl(yl(n).document().write(Sl()(e, t, !0))))
}
function Ol(e) {
    let t = {
        afterExit: [],
        beforeEnter: [],
        transforms: [],
        canContainEols: [`emphasis`, `fragment`, `heading`, `paragraph`, `strong`],
        enter: {
            autolink: o(ve),
            autolinkProtocol: E,
            autolinkEmail: E,
            atxHeading: o(me),
            blockQuote: o(ue),
            characterEscape: E,
            characterReference: E,
            codeFenced: o(de),
            codeFencedFenceInfo: s,
            codeFencedFenceMeta: s,
            codeIndented: o(de, s),
            codeText: o(L, s),
            codeTextData: E,
            data: E,
            codeFlowValue: E,
            definition: o(fe),
            definitionDestinationString: s,
            definitionLabelString: s,
            definitionTitleString: s,
            emphasis: o(pe),
            hardBreakEscape: o(he),
            hardBreakTrailing: o(he),
            htmlFlow: o(ge, s),
            htmlFlowData: E,
            htmlText: o(ge, s),
            htmlTextData: E,
            image: o(_e),
            label: s,
            link: o(ve),
            listItem: o(be),
            listItemValue: p,
            listOrdered: o(ye, f),
            listUnordered: o(ye),
            paragraph: o(xe),
            reference: ie,
            referenceString: s,
            resourceDestinationString: s,
            resourceTitleString: s,
            setextHeading: o(me),
            strong: o(Se),
            thematicBreak: o(we)
        },
        exit: {
            atxHeading: l(),
            atxHeadingSequence: S,
            autolink: l(),
            autolinkEmail: le,
            autolinkProtocol: ce,
            blockQuote: l(),
            characterEscapeValue: D,
            characterReferenceMarkerHexadecimal: oe,
            characterReferenceMarkerNumeric: oe,
            characterReferenceValue: se,
            characterReference: I,
            codeFenced: l(_),
            codeFencedFence: g,
            codeFencedFenceInfo: m,
            codeFencedFenceMeta: h,
            codeFlowValue: D,
            codeIndented: l(v),
            codeText: l(M),
            codeTextData: D,
            data: D,
            definition: l(),
            definitionDestinationString: x,
            definitionLabelString: y,
            definitionTitleString: b,
            emphasis: l(),
            hardBreakEscape: l(k),
            hardBreakTrailing: l(k),
            htmlFlow: l(A),
            htmlFlowData: D,
            htmlText: l(j),
            htmlTextData: D,
            image: l(ee),
            label: P,
            labelText: te,
            lineEnding: O,
            link: l(N),
            listItem: l(),
            listOrdered: l(),
            listUnordered: l(),
            paragraph: l(),
            referenceString: ae,
            resourceDestinationString: F,
            resourceTitleString: ne,
            resource: re,
            setextHeading: l(T),
            setextHeadingLineSequence: w,
            setextHeadingText: C,
            strong: l(),
            thematicBreak: l()
        }
    };
    Al(t, (e || {}).mdastExtensions || []);
    let n = {};
    return r;
    function r(e) {
        let r = {
            type: `root`,
            children: [],
            position: void 0
        }
          , o = {
            stack: [r],
            tokenStack: [],
            config: t,
            enter: c,
            exit: u,
            buffer: s,
            resume: d,
            data: n
        }
          , l = []
          , f = []
          , p = -1;
        for (; ++p < e.length; )
            f.push(e[p]),
            (e[p][1].type === `listOrdered` || e[p][1].type === `listUnordered`) && (e[p][0] === `enter` ? l.push(f.length - 1) : a(f, l.pop()));
        for (e = f,
        p = -1; ++p < e.length; ) {
            let n = t[e[p][0]];
            e[p][0] === `enter` && t.beforeEnter.length > 0 && i(t.beforeEnter, {
                ...o,
                sliceSerialize: e[p][2].sliceSerialize
            }, e[p][1]),
            El.call(n, e[p][1].type) && n[e[p][1].type].call({
                ...o,
                sliceSerialize: e[p][2].sliceSerialize
            }, e[p][1]),
            e[p][0] === `exit` && t.afterExit.length > 0 && i(t.afterExit, {
                ...o,
                sliceSerialize: e[p][2].sliceSerialize
            }, e[p][1])
        }
        if (o.tokenStack.length > 0) {
            let e = o.tokenStack[o.tokenStack.length - 1];
            (e[1] || Ml).call(o, void 0, e[0])
        }
        for (r.position = {
            start: kl(e.length > 0 ? e[0][1].start : {
                line: 1,
                column: 1,
                offset: 0
            }),
            end: kl(e.length > 0 ? e[e.length - 2][1].end : {
                line: 1,
                column: 1,
                offset: 0
            })
        },
        p = -1; ++p < t.transforms.length; )
            r = t.transforms[p](r) || r;
        return r
    }
    function i(e, t, n) {
        let r = -1;
        for (; ++r < e.length; )
            e[r].call(t, n)
    }
    function a(e, t) {
        let n = e.length - 1, r = t - 1, i = -1, a = !1, o, s, c, l, u = [];
        for (; ++r <= n; ) {
            let t = e[r];
            switch (t[1].type) {
            case `listUnordered`:
            case `listOrdered`:
            case `blockQuote`:
                t[0] === `enter` ? i++ : i--,
                l = void 0;
                break;
            case `lineEndingBlank`:
                t[0] === `enter` && (o && !l && !i && !c && (c = r),
                l = void 0);
                break;
            case `linePrefix`:
            case `listItemValue`:
            case `listItemMarker`:
            case `listItemPrefix`:
            case `listItemPrefixWhitespace`:
                break;
            default:
                l = void 0
            }
            if (!i && t[0] === `enter` && t[1].type === `listItemPrefix` || i === -1 && t[0] === `exit` && (t[1].type === `listUnordered` || t[1].type === `listOrdered`)) {
                if (o) {
                    let n = r;
                    for (s = void 0; n--; ) {
                        let t = e[n];
                        if (t[1].type === `lineEnding` || t[1].type === `lineEndingBlank`) {
                            if (t[0] === `exit`)
                                continue;
                            s && (e[s][1].type = `lineEndingBlank`,
                            a = !0),
                            t[1].type = `lineEnding`,
                            s = n
                        } else if (t[1].type !== `linePrefix` && t[1].type !== `blockQuotePrefix` && t[1].type !== `blockQuotePrefixWhitespace` && t[1].type !== `blockQuoteMarker` && t[1].type !== `listItemIndent`)
                            break
                    }
                    c && (!s || c < s) && (o._spread = !0),
                    o.end = Object.assign({}, s ? e[s][1].start : t[1].end),
                    u.push({
                        at: s || r,
                        event: [`exit`, o, t[2]]
                    })
                }
                if (t[1].type === `listItemPrefix`) {
                    let e = {
                        type: `listItem`,
                        _spread: !1,
                        start: Object.assign({}, t[1].start),
                        end: void 0
                    };
                    o = e,
                    u.push({
                        at: r,
                        event: [`enter`, e, t[2]]
                    }),
                    c = void 0,
                    l = !0
                }
            }
        }
        let d = e.splice(t)
          , f = 0;
        for (r = -1; ++r < d.length; ) {
            for (; f < u.length && u[f].at === t + r; )
                e.push(u[f++].event);
            e.push(d[r])
        }
        e[t][1]._spread = a
    }
    function o(e, t) {
        return n;
        function n(n) {
            c.call(this, e(n), n),
            t && t.call(this, n)
        }
    }
    function s() {
        this.stack.push({
            type: `fragment`,
            children: []
        })
    }
    function c(e, t, n) {
        this.stack[this.stack.length - 1].children.push(e),
        this.stack.push(e),
        this.tokenStack.push([t, n || void 0]),
        e.position = {
            start: kl(t.start),
            end: void 0
        }
    }
    function l(e) {
        return t;
        function t(t) {
            e && e.call(this, t),
            u.call(this, t)
        }
    }
    function u(e, t) {
        let n = this.stack.pop()
          , r = this.tokenStack.pop();
        if (!r)
            throw Error("Cannot close `" + e.type + "` (" + no({
                start: e.start,
                end: e.end
            }) + `): it’s not open`);
        r[0].type !== e.type && (t ? t.call(this, e, r[0]) : (r[1] || Ml).call(this, e, r[0])),
        n.position.end = kl(e.end)
    }
    function d() {
        return zo(this.stack.pop())
    }
    function f() {
        this.data.expectingFirstListItemValue = !0
    }
    function p(e) {
        if (this.data.expectingFirstListItemValue) {
            let t = this.stack[this.stack.length - 2];
            t.start = Number.parseInt(this.sliceSerialize(e), 10),
            this.data.expectingFirstListItemValue = void 0
        }
    }
    function m() {
        let e = this.resume()
          , t = this.stack[this.stack.length - 1];
        t.lang = e
    }
    function h() {
        let e = this.resume()
          , t = this.stack[this.stack.length - 1];
        t.meta = e
    }
    function g() {
        this.data.flowCodeInside || (this.buffer(),
        this.data.flowCodeInside = !0)
    }
    function _() {
        let e = this.resume()
          , t = this.stack[this.stack.length - 1];
        t.value = e.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, ``),
        this.data.flowCodeInside = void 0
    }
    function v() {
        let e = this.resume()
          , t = this.stack[this.stack.length - 1];
        t.value = e.replace(/(\r?\n|\r)$/g, ``)
    }
    function y(e) {
        let t = this.resume()
          , n = this.stack[this.stack.length - 1];
        n.label = t,
        n.identifier = Qo(this.sliceSerialize(e)).toLowerCase()
    }
    function b() {
        let e = this.resume()
          , t = this.stack[this.stack.length - 1];
        t.title = e
    }
    function x() {
        let e = this.resume()
          , t = this.stack[this.stack.length - 1];
        t.url = e
    }
    function S(e) {
        let t = this.stack[this.stack.length - 1];
        t.depth ||= this.sliceSerialize(e).length
    }
    function C() {
        this.data.setextHeadingSlurpLineEnding = !0
    }
    function w(e) {
        let t = this.stack[this.stack.length - 1];
        t.depth = this.sliceSerialize(e).codePointAt(0) === 61 ? 1 : 2
    }
    function T() {
        this.data.setextHeadingSlurpLineEnding = void 0
    }
    function E(e) {
        let t = this.stack[this.stack.length - 1].children
          , n = t[t.length - 1];
        (!n || n.type !== `text`) && (n = Ce(),
        n.position = {
            start: kl(e.start),
            end: void 0
        },
        t.push(n)),
        this.stack.push(n)
    }
    function D(e) {
        let t = this.stack.pop();
        t.value += this.sliceSerialize(e),
        t.position.end = kl(e.end)
    }
    function O(e) {
        let n = this.stack[this.stack.length - 1];
        if (this.data.atHardBreak) {
            let t = n.children[n.children.length - 1];
            t.position.end = kl(e.end),
            this.data.atHardBreak = void 0;
            return
        }
        !this.data.setextHeadingSlurpLineEnding && t.canContainEols.includes(n.type) && (E.call(this, e),
        D.call(this, e))
    }
    function k() {
        this.data.atHardBreak = !0
    }
    function A() {
        let e = this.resume()
          , t = this.stack[this.stack.length - 1];
        t.value = e
    }
    function j() {
        let e = this.resume()
          , t = this.stack[this.stack.length - 1];
        t.value = e
    }
    function M() {
        let e = this.resume()
          , t = this.stack[this.stack.length - 1];
        t.value = e
    }
    function N() {
        let e = this.stack[this.stack.length - 1];
        if (this.data.inReference) {
            let t = this.data.referenceType || `shortcut`;
            e.type += `Reference`,
            e.referenceType = t,
            delete e.url,
            delete e.title
        } else
            delete e.identifier,
            delete e.label;
        this.data.referenceType = void 0
    }
    function ee() {
        let e = this.stack[this.stack.length - 1];
        if (this.data.inReference) {
            let t = this.data.referenceType || `shortcut`;
            e.type += `Reference`,
            e.referenceType = t,
            delete e.url,
            delete e.title
        } else
            delete e.identifier,
            delete e.label;
        this.data.referenceType = void 0
    }
    function te(e) {
        let t = this.sliceSerialize(e)
          , n = this.stack[this.stack.length - 2];
        n.label = wl(t),
        n.identifier = Qo(t).toLowerCase()
    }
    function P() {
        let e = this.stack[this.stack.length - 1]
          , t = this.resume()
          , n = this.stack[this.stack.length - 1];
        this.data.inReference = !0,
        n.type === `link` ? n.children = e.children : n.alt = t
    }
    function F() {
        let e = this.resume()
          , t = this.stack[this.stack.length - 1];
        t.url = e
    }
    function ne() {
        let e = this.resume()
          , t = this.stack[this.stack.length - 1];
        t.title = e
    }
    function re() {
        this.data.inReference = void 0
    }
    function ie() {
        this.data.referenceType = `collapsed`
    }
    function ae(e) {
        let t = this.resume()
          , n = this.stack[this.stack.length - 1];
        n.label = t,
        n.identifier = Qo(this.sliceSerialize(e)).toLowerCase(),
        this.data.referenceType = `full`
    }
    function oe(e) {
        this.data.characterReferenceType = e.type
    }
    function se(e) {
        let t = this.sliceSerialize(e), n = this.data.characterReferenceType, r;
        n ? (r = Zo(t, n === `characterReferenceMarkerNumeric` ? 10 : 16),
        this.data.characterReferenceType = void 0) : r = Wo(t);
        let i = this.stack[this.stack.length - 1];
        i.value += r
    }
    function I(e) {
        let t = this.stack.pop();
        t.position.end = kl(e.end)
    }
    function ce(e) {
        D.call(this, e);
        let t = this.stack[this.stack.length - 1];
        t.url = this.sliceSerialize(e)
    }
    function le(e) {
        D.call(this, e);
        let t = this.stack[this.stack.length - 1];
        t.url = `mailto:` + this.sliceSerialize(e)
    }
    function ue() {
        return {
            type: `blockquote`,
            children: [],
            position: void 0
        }
    }
    function de() {
        return {
            type: `code`,
            lang: null,
            meta: null,
            value: ``,
            position: void 0
        }
    }
    function L() {
        return {
            type: `inlineCode`,
            value: ``,
            position: void 0
        }
    }
    function fe() {
        return {
            type: `definition`,
            identifier: ``,
            label: null,
            title: null,
            url: ``,
            position: void 0
        }
    }
    function pe() {
        return {
            type: `emphasis`,
            children: [],
            position: void 0
        }
    }
    function me() {
        return {
            type: `heading`,
            depth: 0,
            children: [],
            position: void 0
        }
    }
    function he() {
        return {
            type: `break`,
            position: void 0
        }
    }
    function ge() {
        return {
            type: `html`,
            value: ``,
            position: void 0
        }
    }
    function _e() {
        return {
            type: `image`,
            title: null,
            url: ``,
            alt: null,
            position: void 0
        }
    }
    function ve() {
        return {
            type: `link`,
            title: null,
            url: ``,
            children: [],
            position: void 0
        }
    }
    function ye(e) {
        return {
            type: `list`,
            ordered: e.type === `listOrdered`,
            start: null,
            spread: e._spread,
            children: [],
            position: void 0
        }
    }
    function be(e) {
        return {
            type: `listItem`,
            spread: e._spread,
            checked: null,
            children: [],
            position: void 0
        }
    }
    function xe() {
        return {
            type: `paragraph`,
            children: [],
            position: void 0
        }
    }
    function Se() {
        return {
            type: `strong`,
            children: [],
            position: void 0
        }
    }
    function Ce() {
        return {
            type: `text`,
            value: ``,
            position: void 0
        }
    }
    function we() {
        return {
            type: `thematicBreak`,
            position: void 0
        }
    }
}
function kl(e) {
    return {
        line: e.line,
        column: e.column,
        offset: e.offset
    }
}
function Al(e, t) {
    let n = -1;
    for (; ++n < t.length; ) {
        let r = t[n];
        Array.isArray(r) ? Al(e, r) : jl(e, r)
    }
}
function jl(e, t) {
    let n;
    for (n in t)
        if (El.call(t, n))
            switch (n) {
            case `canContainEols`:
                {
                    let r = t[n];
                    r && e[n].push(...r);
                    break
                }
            case `transforms`:
                {
                    let r = t[n];
                    r && e[n].push(...r);
                    break
                }
            case `afterExit`:
            case `beforeEnter`:
                {
                    let r = t[n];
                    r && e[n].push(r);
                    break
                }
            case `enter`:
            case `exit`:
                {
                    let r = t[n];
                    r && Object.assign(e[n], r);
                    break
                }
            }
}
function Ml(e, t) {
    throw Error(e ? "Cannot close `" + e.type + "` (" + no({
        start: e.start,
        end: e.end
    }) + "): a different token (`" + t.type + "`, " + no({
        start: t.start,
        end: t.end
    }) + `) is open` : "Cannot close document, a token (`" + t.type + "`, " + no({
        start: t.start,
        end: t.end
    }) + `) is still open`)
}
function Nl(e) {
    let t = this;
    t.parser = n;
    function n(n) {
        return Dl(n, {
            ...t.data(`settings`),
            ...e,
            extensions: t.data(`micromarkExtensions`) || [],
            mdastExtensions: t.data(`fromMarkdownExtensions`) || []
        })
    }
}
function Pl(e, t) {
    let n = {
        type: `element`,
        tagName: `blockquote`,
        properties: {},
        children: e.wrap(e.all(t), !0)
    };
    return e.patch(t, n),
    e.applyData(t, n)
}
function Fl(e, t) {
    let n = {
        type: `element`,
        tagName: `br`,
        properties: {},
        children: []
    };
    return e.patch(t, n),
    [e.applyData(t, n), {
        type: `text`,
        value: `
`
    }]
}
function Il(e, t) {
    let n = t.value ? t.value + `
` : ``
      , r = {}
      , i = t.lang ? t.lang.split(/\s+/) : [];
    i.length > 0 && (r.className = [`language-` + i[0]]);
    let a = {
        type: `element`,
        tagName: `code`,
        properties: r,
        children: [{
            type: `text`,
            value: n
        }]
    };
    return t.meta && (a.data = {
        meta: t.meta
    }),
    e.patch(t, a),
    a = e.applyData(t, a),
    a = {
        type: `element`,
        tagName: `pre`,
        properties: {},
        children: [a]
    },
    e.patch(t, a),
    a
}
function Ll(e, t) {
    let n = {
        type: `element`,
        tagName: `del`,
        properties: {},
        children: e.all(t)
    };
    return e.patch(t, n),
    e.applyData(t, n)
}
function Rl(e, t) {
    let n = {
        type: `element`,
        tagName: `em`,
        properties: {},
        children: e.all(t)
    };
    return e.patch(t, n),
    e.applyData(t, n)
}
function zl(e, t) {
    let n = typeof e.options.clobberPrefix == `string` ? e.options.clobberPrefix : `user-content-`, r = String(t.identifier).toUpperCase(), i = ss(r.toLowerCase()), a = e.footnoteOrder.indexOf(r), o, s = e.footnoteCounts.get(r);
    s === void 0 ? (s = 0,
    e.footnoteOrder.push(r),
    o = e.footnoteOrder.length) : o = a + 1,
    s += 1,
    e.footnoteCounts.set(r, s);
    let c = {
        type: `element`,
        tagName: `a`,
        properties: {
            href: `#` + n + `fn-` + i,
            id: n + `fnref-` + i + (s > 1 ? `-` + s : ``),
            dataFootnoteRef: !0,
            ariaDescribedBy: [`footnote-label`]
        },
        children: [{
            type: `text`,
            value: String(o)
        }]
    };
    e.patch(t, c);
    let l = {
        type: `element`,
        tagName: `sup`,
        properties: {},
        children: [c]
    };
    return e.patch(t, l),
    e.applyData(t, l)
}
function Bl(e, t) {
    let n = {
        type: `element`,
        tagName: `h` + t.depth,
        properties: {},
        children: e.all(t)
    };
    return e.patch(t, n),
    e.applyData(t, n)
}
function Vl(e, t) {
    if (e.options.allowDangerousHtml) {
        let n = {
            type: `raw`,
            value: t.value
        };
        return e.patch(t, n),
        e.applyData(t, n)
    }
}
function Hl(e, t) {
    let n = t.referenceType
      , r = `]`;
    if (n === `collapsed` ? r += `[]` : n === `full` && (r += `[` + (t.label || t.identifier) + `]`),
    t.type === `imageReference`)
        return [{
            type: `text`,
            value: `![` + t.alt + r
        }];
    let i = e.all(t)
      , a = i[0];
    a && a.type === `text` ? a.value = `[` + a.value : i.unshift({
        type: `text`,
        value: `[`
    });
    let o = i[i.length - 1];
    return o && o.type === `text` ? o.value += r : i.push({
        type: `text`,
        value: r
    }),
    i
}
function Ul(e, t) {
    let n = String(t.identifier).toUpperCase()
      , r = e.definitionById.get(n);
    if (!r)
        return Hl(e, t);
    let i = {
        src: ss(r.url || ``),
        alt: t.alt
    };
    r.title !== null && r.title !== void 0 && (i.title = r.title);
    let a = {
        type: `element`,
        tagName: `img`,
        properties: i,
        children: []
    };
    return e.patch(t, a),
    e.applyData(t, a)
}
function Wl(e, t) {
    let n = {
        src: ss(t.url)
    };
    t.alt !== null && t.alt !== void 0 && (n.alt = t.alt),
    t.title !== null && t.title !== void 0 && (n.title = t.title);
    let r = {
        type: `element`,
        tagName: `img`,
        properties: n,
        children: []
    };
    return e.patch(t, r),
    e.applyData(t, r)
}
function Gl(e, t) {
    let n = {
        type: `text`,
        value: t.value.replace(/\r?\n|\r/g, ` `)
    };
    e.patch(t, n);
    let r = {
        type: `element`,
        tagName: `code`,
        properties: {},
        children: [n]
    };
    return e.patch(t, r),
    e.applyData(t, r)
}
function Kl(e, t) {
    let n = String(t.identifier).toUpperCase()
      , r = e.definitionById.get(n);
    if (!r)
        return Hl(e, t);
    let i = {
        href: ss(r.url || ``)
    };
    r.title !== null && r.title !== void 0 && (i.title = r.title);
    let a = {
        type: `element`,
        tagName: `a`,
        properties: i,
        children: e.all(t)
    };
    return e.patch(t, a),
    e.applyData(t, a)
}
function ql(e, t) {
    let n = {
        href: ss(t.url)
    };
    t.title !== null && t.title !== void 0 && (n.title = t.title);
    let r = {
        type: `element`,
        tagName: `a`,
        properties: n,
        children: e.all(t)
    };
    return e.patch(t, r),
    e.applyData(t, r)
}
function Jl(e, t, n) {
    let r = e.all(t)
      , i = n ? Yl(n) : Xl(t)
      , a = {}
      , o = [];
    if (typeof t.checked == `boolean`) {
        let e = r[0], n;
        e && e.type === `element` && e.tagName === `p` ? n = e : (n = {
            type: `element`,
            tagName: `p`,
            properties: {},
            children: []
        },
        r.unshift(n)),
        n.children.length > 0 && n.children.unshift({
            type: `text`,
            value: ` `
        }),
        n.children.unshift({
            type: `element`,
            tagName: `input`,
            properties: {
                type: `checkbox`,
                checked: t.checked,
                disabled: !0
            },
            children: []
        }),
        a.className = [`task-list-item`]
    }
    let s = -1;
    for (; ++s < r.length; ) {
        let e = r[s];
        (i || s !== 0 || e.type !== `element` || e.tagName !== `p`) && o.push({
            type: `text`,
            value: `
`
        }),
        e.type === `element` && e.tagName === `p` && !i ? o.push(...e.children) : o.push(e)
    }
    let c = r[r.length - 1];
    c && (i || c.type !== `element` || c.tagName !== `p`) && o.push({
        type: `text`,
        value: `
`
    });
    let l = {
        type: `element`,
        tagName: `li`,
        properties: a,
        children: o
    };
    return e.patch(t, l),
    e.applyData(t, l)
}
function Yl(e) {
    let t = !1;
    if (e.type === `list`) {
        t = e.spread || !1;
        let n = e.children
          , r = -1;
        for (; !t && ++r < n.length; )
            t = Xl(n[r])
    }
    return t
}
function Xl(e) {
    return e.spread ?? e.children.length > 1
}
function Zl(e, t) {
    let n = {}
      , r = e.all(t)
      , i = -1;
    for (typeof t.start == `number` && t.start !== 1 && (n.start = t.start); ++i < r.length; ) {
        let e = r[i];
        if (e.type === `element` && e.tagName === `li` && e.properties && Array.isArray(e.properties.className) && e.properties.className.includes(`task-list-item`)) {
            n.className = [`contains-task-list`];
            break
        }
    }
    let a = {
        type: `element`,
        tagName: t.ordered ? `ol` : `ul`,
        properties: n,
        children: e.wrap(r, !0)
    };
    return e.patch(t, a),
    e.applyData(t, a)
}
function Ql(e, t) {
    let n = {
        type: `element`,
        tagName: `p`,
        properties: {},
        children: e.all(t)
    };
    return e.patch(t, n),
    e.applyData(t, n)
}
function $l(e, t) {
    let n = {
        type: `root`,
        children: e.wrap(e.all(t))
    };
    return e.patch(t, n),
    e.applyData(t, n)
}
function eu(e, t) {
    let n = {
        type: `element`,
        tagName: `strong`,
        properties: {},
        children: e.all(t)
    };
    return e.patch(t, n),
    e.applyData(t, n)
}
function tu(e, t) {
    let n = e.all(t)
      , r = n.shift()
      , i = [];
    if (r) {
        let n = {
            type: `element`,
            tagName: `thead`,
            properties: {},
            children: e.wrap([r], !0)
        };
        e.patch(t.children[0], n),
        i.push(n)
    }
    if (n.length > 0) {
        let r = {
            type: `element`,
            tagName: `tbody`,
            properties: {},
            children: e.wrap(n, !0)
        }
          , a = $a(t.children[1])
          , o = Qa(t.children[t.children.length - 1]);
        a && o && (r.position = {
            start: a,
            end: o
        }),
        i.push(r)
    }
    let a = {
        type: `element`,
        tagName: `table`,
        properties: {},
        children: e.wrap(i, !0)
    };
    return e.patch(t, a),
    e.applyData(t, a)
}
function nu(e, t, n) {
    let r = n ? n.children : void 0
      , i = (r ? r.indexOf(t) : 1) === 0 ? `th` : `td`
      , a = n && n.type === `table` ? n.align : void 0
      , o = a ? a.length : t.children.length
      , s = -1
      , c = [];
    for (; ++s < o; ) {
        let n = t.children[s]
          , r = {}
          , o = a ? a[s] : void 0;
        o && (r.align = o);
        let l = {
            type: `element`,
            tagName: i,
            properties: r,
            children: []
        };
        n && (l.children = e.all(n),
        e.patch(n, l),
        l = e.applyData(n, l)),
        c.push(l)
    }
    let l = {
        type: `element`,
        tagName: `tr`,
        properties: {},
        children: e.wrap(c, !0)
    };
    return e.patch(t, l),
    e.applyData(t, l)
}
function ru(e, t) {
    let n = {
        type: `element`,
        tagName: `td`,
        properties: {},
        children: e.all(t)
    };
    return e.patch(t, n),
    e.applyData(t, n)
}
var iu = 9
  , au = 32;
function ou(e) {
    let t = String(e)
      , n = /\r?\n|\r/g
      , r = n.exec(t)
      , i = 0
      , a = [];
    for (; r; )
        a.push(su(t.slice(i, r.index), i > 0, !0), r[0]),
        i = r.index + r[0].length,
        r = n.exec(t);
    return a.push(su(t.slice(i), i > 0, !1)),
    a.join(``)
}
function su(e, t, n) {
    let r = 0
      , i = e.length;
    if (t) {
        let t = e.codePointAt(r);
        for (; t === iu || t === au; )
            r++,
            t = e.codePointAt(r)
    }
    if (n) {
        let t = e.codePointAt(i - 1);
        for (; t === iu || t === au; )
            i--,
            t = e.codePointAt(i - 1)
    }
    return i > r ? e.slice(r, i) : ``
}
function cu(e, t) {
    let n = {
        type: `text`,
        value: ou(String(t.value))
    };
    return e.patch(t, n),
    e.applyData(t, n)
}
function lu(e, t) {
    let n = {
        type: `element`,
        tagName: `hr`,
        properties: {},
        children: []
    };
    return e.patch(t, n),
    e.applyData(t, n)
}
var uu = {
    blockquote: Pl,
    break: Fl,
    code: Il,
    delete: Ll,
    emphasis: Rl,
    footnoteReference: zl,
    heading: Bl,
    html: Vl,
    imageReference: Ul,
    image: Wl,
    inlineCode: Gl,
    linkReference: Kl,
    link: ql,
    listItem: Jl,
    list: Zl,
    paragraph: Ql,
    root: $l,
    strong: eu,
    table: tu,
    tableCell: ru,
    tableRow: nu,
    text: cu,
    thematicBreak: lu,
    toml: du,
    yaml: du,
    definition: du,
    footnoteDefinition: du
};
function du() {}
var {defineProperty: fu} = Object
  , pu = typeof self == `object` ? self : globalThis
  , mu = (e, t) => {
    switch (e) {
    case `Function`:
    case `SharedWorker`:
    case `Worker`:
    case `eval`:
    case `setInterval`:
    case `setTimeout`:
        throw TypeError(`unable to deserialize ` + e)
    }
    return new pu[e](t)
}
  , hu = (e, t) => {
    let n = (t, n) => (e.set(n, t),
    t)
      , r = i => {
        if (e.has(i))
            return e.get(i);
        let[a,o] = t[i];
        switch (a) {
        case 0:
        case -1:
            return n(o, i);
        case 1:
            {
                let e = n([], i);
                for (let t of o)
                    e.push(r(t));
                return e
            }
        case 2:
            {
                let e = n({}, i);
                for (let[t,n] of o) {
                    let i = r(t)
                      , a = r(n);
                    i === `__proto__` ? fu(e, i, {
                        value: a,
                        configurable: !0,
                        enumerable: !0,
                        writable: !0
                    }) : e[i] = a
                }
                return e
            }
        case 3:
            return n(new Date(o), i);
        case 4:
            {
                let {source: e, flags: t} = o;
                return n(new RegExp(e,t), i)
            }
        case 5:
            {
                let e = n(new Map, i);
                for (let[t,n] of o)
                    e.set(r(t), r(n));
                return e
            }
        case 6:
            {
                let e = n(new Set, i);
                for (let t of o)
                    e.add(r(t));
                return e
            }
        case 7:
            {
                let {name: e, message: t} = o;
                return n(typeof pu[e] == `function` ? mu(e, t) : Error(t), i)
            }
        case 8:
            return n(BigInt(o), i);
        case `BigInt`:
            return n(Object(BigInt(o)), i);
        case `ArrayBuffer`:
            return n(new Uint8Array(o).buffer, o);
        case `DataView`:
            {
                let {buffer: e} = new Uint8Array(o);
                return n(new DataView(e), o)
            }
        case `-0`:
            return -0
        }
        return n(mu(a, o), i)
    }
    ;
    return r
}
  , gu = e => hu(new Map, e)(0)
  , _u = ``
  , {toString: vu} = {}
  , {keys: yu, is: bu} = Object
  , xu = e => {
    let t = typeof e;
    if (t !== `object` || !e)
        return [0, t];
    let n = vu.call(e).slice(8, -1);
    switch (n) {
    case `Array`:
        return [1, _u];
    case `Object`:
        return [2, _u];
    case `Date`:
        return [3, _u];
    case `RegExp`:
        return [4, _u];
    case `Map`:
        return [5, _u];
    case `Set`:
        return [6, _u];
    case `DataView`:
        return [1, n]
    }
    return n.includes(`Array`) ? [1, n] : e instanceof Error ? [7, e.name || `Error`] : [2, n]
}
  , Su = ([e,t]) => e === 0 && (t === `function` || t === `symbol`)
  , Cu = (e, t, n, r) => {
    let i = (e, t) => {
        let i = r.push(e) - 1;
        return n.set(t, i),
        i
    }
      , a = o => {
        if (n.has(o))
            return n.get(o);
        let[s,c] = xu(o);
        switch (s) {
        case 0:
            {
                let t = o;
                switch (c) {
                case `bigint`:
                    s = 8,
                    t = o.toString();
                    break;
                case `number`:
                    if (!o && bu(o, -0))
                        return r.push([`-0`]) - 1;
                    break;
                case `function`:
                case `symbol`:
                    if (e)
                        throw TypeError(`unable to serialize ` + c);
                    t = null;
                    break;
                case `undefined`:
                    return i([-1], o)
                }
                return i([s, t], o)
            }
        case 1:
            {
                if (c) {
                    let e = o;
                    return c === `DataView` ? e = new Uint8Array(o.buffer) : c === `ArrayBuffer` && (e = new Uint8Array(o)),
                    i([c, [...e]], o)
                }
                let e = []
                  , t = i([s, e], o);
                for (let t of o)
                    e.push(a(t));
                return t
            }
        case 2:
            {
                if (c)
                    switch (c) {
                    case `BigInt`:
                        return i([c, o.toString()], o);
                    case `Boolean`:
                    case `Number`:
                    case `String`:
                        return i([c, o.valueOf()], o)
                    }
                if (t && `toJSON` in o)
                    return a(o.toJSON());
                let n = []
                  , r = i([s, n], o);
                for (let t of yu(o))
                    (e || !Su(xu(o[t]))) && n.push([a(t), a(o[t])]);
                return r
            }
        case 3:
            return i([s, isNaN(o.getTime()) ? _u : o.toISOString()], o);
        case 4:
            {
                let {source: e, flags: t} = o;
                return i([s, {
                    source: e,
                    flags: t
                }], o)
            }
        case 5:
            {
                let t = []
                  , n = i([s, t], o);
                for (let[n,r] of o)
                    (e || !(Su(xu(n)) || Su(xu(r)))) && t.push([a(n), a(r)]);
                return n
            }
        case 6:
            {
                let t = []
                  , n = i([s, t], o);
                for (let n of o)
                    (e || !Su(xu(n))) && t.push(a(n));
                return n
            }
        }
        let {message: l} = o;
        return i([s, {
            name: c,
            message: l
        }], o)
    }
    ;
    return a
}
  , wu = (e, {json: t, lossy: n}={}) => {
    let r = [];
    return Cu(!(t || n), !!t, new Map, r)(e),
    r
}
  , Tu = typeof structuredClone == `function` ? (e, t) => t && (`json` in t || `lossy` in t) ? gu(wu(e, t)) : structuredClone(e) : (e, t) => gu(wu(e, t));
function Eu(e, t) {
    let n = [{
        type: `text`,
        value: `↩`
    }];
    return t > 1 && n.push({
        type: `element`,
        tagName: `sup`,
        properties: {},
        children: [{
            type: `text`,
            value: String(t)
        }]
    }),
    n
}
function Du(e, t) {
    return `Back to reference ` + (e + 1) + (t > 1 ? `-` + t : ``)
}
function Ou(e) {
    let t = typeof e.options.clobberPrefix == `string` ? e.options.clobberPrefix : `user-content-`
      , n = e.options.footnoteBackContent || Eu
      , r = e.options.footnoteBackLabel || Du
      , i = e.options.footnoteLabel || `Footnotes`
      , a = e.options.footnoteLabelTagName || `h2`
      , o = e.options.footnoteLabelProperties || {
        className: [`sr-only`]
    }
      , s = []
      , c = -1;
    for (; ++c < e.footnoteOrder.length; ) {
        let i = e.footnoteById.get(e.footnoteOrder[c]);
        if (!i)
            continue;
        let a = e.all(i)
          , o = String(i.identifier).toUpperCase()
          , l = ss(o.toLowerCase())
          , u = 0
          , d = []
          , f = e.footnoteCounts.get(o);
        for (; f !== void 0 && ++u <= f; ) {
            d.length > 0 && d.push({
                type: `text`,
                value: ` `
            });
            let e = typeof n == `string` ? n : n(c, u);
            typeof e == `string` && (e = {
                type: `text`,
                value: e
            }),
            d.push({
                type: `element`,
                tagName: `a`,
                properties: {
                    href: `#` + t + `fnref-` + l + (u > 1 ? `-` + u : ``),
                    dataFootnoteBackref: ``,
                    ariaLabel: typeof r == `string` ? r : r(c, u),
                    className: [`data-footnote-backref`]
                },
                children: Array.isArray(e) ? e : [e]
            })
        }
        let p = a[a.length - 1];
        if (p && p.type === `element` && p.tagName === `p`) {
            let e = p.children[p.children.length - 1];
            e && e.type === `text` ? e.value += ` ` : p.children.push({
                type: `text`,
                value: ` `
            }),
            p.children.push(...d)
        } else
            a.push(...d);
        let m = {
            type: `element`,
            tagName: `li`,
            properties: {
                id: t + `fn-` + l
            },
            children: e.wrap(a, !0)
        };
        e.patch(i, m),
        s.push(m)
    }
    if (s.length !== 0)
        return {
            type: `element`,
            tagName: `section`,
            properties: {
                dataFootnotes: !0,
                className: [`footnotes`]
            },
            children: [{
                type: `element`,
                tagName: a,
                properties: {
                    ...Tu(o),
                    id: `footnote-label`
                },
                children: [{
                    type: `text`,
                    value: i
                }]
            }, {
                type: `text`,
                value: `
`
            }, {
                type: `element`,
                tagName: `ol`,
                properties: {},
                children: e.wrap(s, !0)
            }, {
                type: `text`,
                value: `
`
            }]
        }
}
var ku = (function(e) {
    if (e == null)
        return Pu;
    if (typeof e == `function`)
        return Nu(e);
    if (typeof e == `object`)
        return Array.isArray(e) ? Au(e) : ju(e);
    if (typeof e == `string`)
        return Mu(e);
    throw Error(`Expected function, string, or object as test`)
}
);
function Au(e) {
    let t = []
      , n = -1;
    for (; ++n < e.length; )
        t[n] = ku(e[n]);
    return Nu(r);
    function r(...e) {
        let n = -1;
        for (; ++n < t.length; )
            if (t[n].apply(this, e))
                return !0;
        return !1
    }
}
function ju(e) {
    let t = e;
    return Nu(n);
    function n(n) {
        let r = n, i;
        for (i in e)
            if (r[i] !== t[i])
                return !1;
        return !0
    }
}
function Mu(e) {
    return Nu(t);
    function t(t) {
        return t && t.type === e
    }
}
function Nu(e) {
    return t;
    function t(t, n, r) {
        return !!(Fu(t) && e.call(this, t, typeof n == `number` ? n : void 0, r || void 0))
    }
}
function Pu() {
    return !0
}
function Fu(e) {
    return typeof e == `object` && !!e && `type` in e
}
function Iu(e) {
    return e
}
var Lu = []
  , Ru = `skip`;
function zu(e, t, n, r) {
    if (!e || typeof e != `object`)
        throw Error("Unexpected value `" + e + "` for `tree`, expected node");
    let i = !0, a, o, s, c;
    if (typeof n == `function` || n && typeof n == `object` ? (a = t,
    o = n,
    r && (i = !1)) : (o = t,
    n && (i = !1)),
    typeof o == `function`)
        s = o;
    else if (o && typeof o == `object`) {
        if (o.enter !== null && o.enter !== void 0)
            if (typeof o.enter == `function`)
                s = o.enter;
            else
                throw Error("Unexpected value `" + o.enter + "` for `visitors.enter`, expected optional visitor");
        if (typeof o.exit == `function`)
            c = o.exit;
        else
            throw Error("Unexpected value `" + o.exit + "` for `visitors.exit`, expected visitor (pass a visitor directly if you only want an enter visitor)")
    } else
        throw Error("Unexpected value `" + o + "` for `enter` or `visitors`, expected visitor or object with visitors");
    let l = ku(a)
      , u = i ? 1 : -1;
    d(e, void 0, [])();
    function d(e, t, n) {
        let r = e && typeof e == `object` ? e : {};
        if (typeof r.type == `string`) {
            let t = typeof r.tagName == `string` ? r.tagName : typeof r.name == `string` ? r.name : void 0;
            Object.defineProperty(o, "name", {
                value: `node (` + Iu(e.type + (t ? `<` + t + `>` : ``)) + `)`
            })
        }
        return o;
        function o() {
            let r = !a || l(e, t, n[n.length - 1] || void 0)
              , o = Lu;
            if (s && r && (o = Bu(s(e, n, t)),
            o[0] === !1))
                return o;
            if (`children` in e && e.children) {
                let t = e;
                if (t.children && o[0] !== `skip`) {
                    let e = (i ? -1 : t.children.length) + u
                      , r = [...n, t];
                    for (; e > -1 && e < t.children.length; ) {
                        let n = t.children[e]
                          , i = d(n, e, r)();
                        if (i[0] === !1)
                            return i;
                        e = typeof i[1] == `number` ? i[1] : e + u
                    }
                }
            }
            if (c && r) {
                let r = Bu(c(e, n, t));
                if (r[0] === `skip`)
                    throw Error("Unexpected value `" + r[0] + "` from `exit`, expected `CONTINUE`, `EXIT`, index, or nothing");
                if (r[0] === !1 || typeof r[1] == `number`)
                    return r
            }
            return o
        }
    }
}
function Bu(e) {
    return Array.isArray(e) ? e : typeof e == `number` ? [!0, e] : e == null ? Lu : [e]
}
function Vu(e, t, n, r) {
    let i, a, o;
    typeof n == `function` || n && typeof n == `object` ? (i = t,
    a = n,
    o = r) : (a = t,
    o = n),
    typeof a == `function` ? zu(e, i, Uu(a), o) : zu(e, i, Hu(a), o)
}
function Hu(e) {
    return !e || typeof e != `object` ? e : {
        enter: typeof e.enter == `function` ? Uu(e.enter) : e.enter,
        exit: typeof e.exit == `function` ? Uu(e.exit) : e.exit
    }
}
function Uu(e) {
    return t;
    function t(t, n, r) {
        return e(t, r, n[n.length - 1])
    }
}
var Wu = {}.hasOwnProperty
  , Gu = {};
function Ku(e, t) {
    let n = t || Gu
      , r = new Map
      , i = new Map
      , a = {
        all: s,
        applyData: Ju,
        definitionById: r,
        footnoteById: i,
        footnoteCounts: new Map,
        footnoteOrder: [],
        handlers: {
            ...uu,
            ...n.handlers
        },
        one: o,
        options: n,
        patch: qu,
        wrap: Xu
    };
    return Vu(e, function(e) {
        if (e.type === `definition` || e.type === `footnoteDefinition`) {
            let t = e.type === `definition` ? r : i
              , n = String(e.identifier).toUpperCase();
            t.has(n) || t.set(n, e)
        }
    }),
    a;
    function o(e, t) {
        let n = e.type
          , r = a.handlers[n];
        if (Wu.call(a.handlers, n) && r)
            return r(a, e, t);
        if (a.options.passThrough && a.options.passThrough.includes(n)) {
            if (`children` in e) {
                let {children: t, ...n} = e
                  , r = Tu(n);
                return r.children = a.all(e),
                r
            }
            return Tu(e)
        }
        return (a.options.unknownHandler || Yu)(a, e, t)
    }
    function s(e) {
        let t = [];
        if (`children` in e) {
            let n = e.children
              , r = -1;
            for (; ++r < n.length; ) {
                let i = a.one(n[r], e);
                if (i) {
                    if (r && n[r - 1].type === `break` && (!Array.isArray(i) && i.type === `text` && (i.value = Zu(i.value)),
                    !Array.isArray(i) && i.type === `element`)) {
                        let e = i.children[0];
                        e && e.type === `text` && (e.value = Zu(e.value))
                    }
                    Array.isArray(i) ? t.push(...i) : t.push(i)
                }
            }
        }
        return t
    }
}
function qu(e, t) {
    e.position && (t.position = to(e))
}
function Ju(e, t) {
    let n = t;
    if (e && e.data) {
        let t = e.data.hName
          , r = e.data.hChildren
          , i = e.data.hProperties;
        typeof t == `string` && (n.type === `element` ? n.tagName = t : n = {
            type: `element`,
            tagName: t,
            properties: {},
            children: `children` in n ? n.children : [n]
        }),
        n.type === `element` && i && Object.assign(n.properties, Tu(i)),
        `children` in n && n.children && r != null && (n.children = r)
    }
    return n
}
function Yu(e, t) {
    let n = t.data || {}
      , r = `value` in t && !(Wu.call(n, `hProperties`) || Wu.call(n, `hChildren`)) ? {
        type: `text`,
        value: t.value
    } : {
        type: `element`,
        tagName: `div`,
        properties: {},
        children: e.all(t)
    };
    return e.patch(t, r),
    e.applyData(t, r)
}
function Xu(e, t) {
    let n = []
      , r = -1;
    for (t && n.push({
        type: `text`,
        value: `
`
    }); ++r < e.length; )
        r && n.push({
            type: `text`,
            value: `
`
        }),
        n.push(e[r]);
    return t && e.length > 0 && n.push({
        type: `text`,
        value: `
`
    }),
    n
}
function Zu(e) {
    let t = 0
      , n = e.charCodeAt(t);
    for (; n === 9 || n === 32; )
        t++,
        n = e.charCodeAt(t);
    return e.slice(t)
}
function Qu(e, t) {
    let n = Ku(e, t)
      , r = n.one(e, void 0)
      , i = Ou(n)
      , a = Array.isArray(r) ? {
        type: `root`,
        children: r
    } : r || {
        type: `root`,
        children: []
    };
    return i && (`children` in a,
    a.children.push({
        type: `text`,
        value: `
`
    }, i)),
    a
}
function $u(e, t) {
    return e && `run` in e ? async function(n, r) {
        let i = Qu(n, {
            file: r,
            ...t
        });
        await e.run(i, r)
    }
    : function(n, r) {
        return Qu(n, {
            file: r,
            ...e || t
        })
    }
}
function ed(e) {
    if (e)
        throw e
}
var td = n(( (e, t) => {
    var n = Object.prototype.hasOwnProperty
      , r = Object.prototype.toString
      , i = Object.defineProperty
      , a = Object.getOwnPropertyDescriptor
      , o = function(e) {
        return typeof Array.isArray == `function` ? Array.isArray(e) : r.call(e) === `[object Array]`
    }
      , s = function(e) {
        if (!e || r.call(e) !== `[object Object]`)
            return !1;
        var t = n.call(e, `constructor`)
          , i = e.constructor && e.constructor.prototype && n.call(e.constructor.prototype, `isPrototypeOf`);
        if (e.constructor && !t && !i)
            return !1;
        for (var a in e)
            ;
        return a === void 0 || n.call(e, a)
    }
      , c = function(e, t) {
        i && t.name === `__proto__` ? i(e, t.name, {
            enumerable: !0,
            configurable: !0,
            value: t.newValue,
            writable: !0
        }) : e[t.name] = t.newValue
    }
      , l = function(e, t) {
        if (t === `__proto__`) {
            if (!n.call(e, t))
                return;
            if (a)
                return a(e, t).value
        }
        return e[t]
    };
    t.exports = function e() {
        var t, n, r, i, a, u, d = arguments[0], f = 1, p = arguments.length, m = !1;
        for (typeof d == `boolean` && (m = d,
        d = arguments[1] || {},
        f = 2),
        (d == null || typeof d != `object` && typeof d != `function`) && (d = {}); f < p; ++f)
            if (t = arguments[f],
            t != null)
                for (n in t)
                    r = l(d, n),
                    i = l(t, n),
                    d !== i && (m && i && (s(i) || (a = o(i))) ? (a ? (a = !1,
                    u = r && o(r) ? r : []) : u = r && s(r) ? r : {},
                    c(d, {
                        name: n,
                        newValue: e(m, u, i)
                    })) : i !== void 0 && c(d, {
                        name: n,
                        newValue: i
                    }));
        return d
    }
}
));
function nd(e) {
    if (typeof e != `object` || !e)
        return !1;
    let t = Object.getPrototypeOf(e);
    return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e)
}
function rd() {
    let e = []
      , t = {
        run: n,
        use: r
    };
    return t;
    function n(...t) {
        let n = -1
          , r = t.pop();
        if (typeof r != `function`)
            throw TypeError(`Expected function as last argument, not ` + r);
        i(null, ...t);
        function i(a, ...o) {
            let s = e[++n]
              , c = -1;
            if (a) {
                r(a);
                return
            }
            for (; ++c < t.length; )
                (o[c] === null || o[c] === void 0) && (o[c] = t[c]);
            t = o,
            s ? id(s, i)(...o) : r(null, ...o)
        }
    }
    function r(n) {
        if (typeof n != `function`)
            throw TypeError("Expected `middelware` to be a function, not " + n);
        return e.push(n),
        t
    }
}
function id(e, t) {
    let n;
    return r;
    function r(...t) {
        let r = e.length > t.length, o;
        r && t.push(i);
        try {
            o = e.apply(this, t)
        } catch (e) {
            let t = e;
            if (r && n)
                throw t;
            return i(t)
        }
        r || (o && o.then && typeof o.then == `function` ? o.then(a, i) : o instanceof Error ? i(o) : a(o))
    }
    function i(e, ...r) {
        n || (n = !0,
        t(e, ...r))
    }
    function a(e) {
        i(null, e)
    }
}
var ad = {
    basename: od,
    dirname: sd,
    extname: cd,
    join: ld,
    sep: `/`
};
function od(e, t) {
    if (t !== void 0 && typeof t != `string`)
        throw TypeError(`"ext" argument must be a string`);
    fd(e);
    let n = 0, r = -1, i = e.length, a;
    if (t === void 0 || t.length === 0 || t.length > e.length) {
        for (; i--; )
            if (e.codePointAt(i) === 47) {
                if (a) {
                    n = i + 1;
                    break
                }
            } else
                r < 0 && (a = !0,
                r = i + 1);
        return r < 0 ? `` : e.slice(n, r)
    }
    if (t === e)
        return ``;
    let o = -1
      , s = t.length - 1;
    for (; i--; )
        if (e.codePointAt(i) === 47) {
            if (a) {
                n = i + 1;
                break
            }
        } else
            o < 0 && (a = !0,
            o = i + 1),
            s > -1 && (e.codePointAt(i) === t.codePointAt(s--) ? s < 0 && (r = i) : (s = -1,
            r = o));
    return n === r ? r = o : r < 0 && (r = e.length),
    e.slice(n, r)
}
function sd(e) {
    if (fd(e),
    e.length === 0)
        return `.`;
    let t = -1, n = e.length, r;
    for (; --n; )
        if (e.codePointAt(n) === 47) {
            if (r) {
                t = n;
                break
            }
        } else
            r ||= !0;
    return t < 0 ? e.codePointAt(0) === 47 ? `/` : `.` : t === 1 && e.codePointAt(0) === 47 ? `//` : e.slice(0, t)
}
function cd(e) {
    fd(e);
    let t = e.length, n = -1, r = 0, i = -1, a = 0, o;
    for (; t--; ) {
        let s = e.codePointAt(t);
        if (s === 47) {
            if (o) {
                r = t + 1;
                break
            }
            continue
        }
        n < 0 && (o = !0,
        n = t + 1),
        s === 46 ? i < 0 ? i = t : a !== 1 && (a = 1) : i > -1 && (a = -1)
    }
    return i < 0 || n < 0 || a === 0 || a === 1 && i === n - 1 && i === r + 1 ? `` : e.slice(i, n)
}
function ld(...e) {
    let t = -1, n;
    for (; ++t < e.length; )
        fd(e[t]),
        e[t] && (n = n === void 0 ? e[t] : n + `/` + e[t]);
    return n === void 0 ? `.` : ud(n)
}
function ud(e) {
    fd(e);
    let t = e.codePointAt(0) === 47
      , n = dd(e, !t);
    return n.length === 0 && !t && (n = `.`),
    n.length > 0 && e.codePointAt(e.length - 1) === 47 && (n += `/`),
    t ? `/` + n : n
}
function dd(e, t) {
    let n = ``, r = 0, i = -1, a = 0, o = -1, s, c;
    for (; ++o <= e.length; ) {
        if (o < e.length)
            s = e.codePointAt(o);
        else if (s === 47)
            break;
        else
            s = 47;
        if (s === 47) {
            if (i !== o - 1 && a !== 1)
                if (i !== o - 1 && a === 2) {
                    if (n.length < 2 || r !== 2 || n.codePointAt(n.length - 1) !== 46 || n.codePointAt(n.length - 2) !== 46) {
                        if (n.length > 2) {
                            if (c = n.lastIndexOf(`/`),
                            c !== n.length - 1) {
                                c < 0 ? (n = ``,
                                r = 0) : (n = n.slice(0, c),
                                r = n.length - 1 - n.lastIndexOf(`/`)),
                                i = o,
                                a = 0;
                                continue
                            }
                        } else if (n.length > 0) {
                            n = ``,
                            r = 0,
                            i = o,
                            a = 0;
                            continue
                        }
                    }
                    t && (n = n.length > 0 ? n + `/..` : `..`,
                    r = 2)
                } else
                    n.length > 0 ? n += `/` + e.slice(i + 1, o) : n = e.slice(i + 1, o),
                    r = o - i - 1;
            i = o,
            a = 0
        } else
            s === 46 && a > -1 ? a++ : a = -1
    }
    return n
}
function fd(e) {
    if (typeof e != `string`)
        throw TypeError(`Path must be a string. Received ` + JSON.stringify(e))
}
var pd = {
    cwd: md
};
function md() {
    return `/`
}
function hd(e) {
    return !!(typeof e == `object` && e && `href` in e && e.href && `protocol` in e && e.protocol && e.auth === void 0)
}
function gd(e) {
    if (typeof e == `string`)
        e = new URL(e);
    else if (!hd(e)) {
        let t = TypeError('The "path" argument must be of type string or an instance of URL. Received `' + e + "`");
        throw t.code = `ERR_INVALID_ARG_TYPE`,
        t
    }
    if (e.protocol !== `file:`) {
        let e = TypeError(`The URL must be of scheme file`);
        throw e.code = `ERR_INVALID_URL_SCHEME`,
        e
    }
    return _d(e)
}
function _d(e) {
    if (e.hostname !== ``) {
        let e = TypeError(`File URL host must be "localhost" or empty on darwin`);
        throw e.code = `ERR_INVALID_FILE_URL_HOST`,
        e
    }
    let t = e.pathname
      , n = -1;
    for (; ++n < t.length; )
        if (t.codePointAt(n) === 37 && t.codePointAt(n + 1) === 50) {
            let e = t.codePointAt(n + 2);
            if (e === 70 || e === 102) {
                let e = TypeError(`File URL path must not include encoded / characters`);
                throw e.code = `ERR_INVALID_FILE_URL_PATH`,
                e
            }
        }
    return decodeURIComponent(t)
}
var vd = [`history`, `path`, `basename`, `stem`, `extname`, `dirname`]
  , yd = class {
    constructor(e) {
        let t;
        t = e ? hd(e) ? {
            path: e
        } : typeof e == `string` || Cd(e) ? {
            value: e
        } : e : {},
        this.cwd = `cwd` in t ? `` : pd.cwd(),
        this.data = {},
        this.history = [],
        this.messages = [],
        this.value,
        this.map,
        this.result,
        this.stored;
        let n = -1;
        for (; ++n < vd.length; ) {
            let e = vd[n];
            e in t && t[e] !== void 0 && t[e] !== null && (this[e] = e === `history` ? [...t[e]] : t[e])
        }
        let r;
        for (r in t)
            vd.includes(r) || (this[r] = t[r])
    }
    get basename() {
        return typeof this.path == `string` ? ad.basename(this.path) : void 0
    }
    set basename(e) {
        xd(e, `basename`),
        bd(e, `basename`),
        this.path = ad.join(this.dirname || ``, e)
    }
    get dirname() {
        return typeof this.path == `string` ? ad.dirname(this.path) : void 0
    }
    set dirname(e) {
        Sd(this.basename, `dirname`),
        this.path = ad.join(e || ``, this.basename)
    }
    get extname() {
        return typeof this.path == `string` ? ad.extname(this.path) : void 0
    }
    set extname(e) {
        if (bd(e, `extname`),
        Sd(this.dirname, `extname`),
        e) {
            if (e.codePointAt(0) !== 46)
                throw Error("`extname` must start with `.`");
            if (e.includes(`.`, 1))
                throw Error("`extname` cannot contain multiple dots")
        }
        this.path = ad.join(this.dirname, this.stem + (e || ``))
    }
    get path() {
        return this.history[this.history.length - 1]
    }
    set path(e) {
        hd(e) && (e = gd(e)),
        xd(e, `path`),
        this.path !== e && this.history.push(e)
    }
    get stem() {
        return typeof this.path == `string` ? ad.basename(this.path, this.extname) : void 0
    }
    set stem(e) {
        xd(e, `stem`),
        bd(e, `stem`),
        this.path = ad.join(this.dirname || ``, e + (this.extname || ``))
    }
    fail(e, t, n) {
        let r = this.message(e, t, n);
        throw r.fatal = !0,
        r
    }
    info(e, t, n) {
        let r = this.message(e, t, n);
        return r.fatal = void 0,
        r
    }
    message(e, t, n) {
        let r = new oo(e,t,n);
        return this.path && (r.name = this.path + `:` + r.name,
        r.file = this.path),
        r.fatal = !1,
        this.messages.push(r),
        r
    }
    toString(e) {
        return this.value === void 0 ? `` : typeof this.value == `string` ? this.value : new TextDecoder(e || void 0).decode(this.value)
    }
}
;
function bd(e, t) {
    if (e && e.includes(ad.sep))
        throw Error("`" + t + "` cannot be a path: did not expect `" + ad.sep + "`")
}
function xd(e, t) {
    if (!e)
        throw Error("`" + t + "` cannot be empty")
}
function Sd(e, t) {
    if (!e)
        throw Error("Setting `" + t + "` requires `path` to be set too")
}
function Cd(e) {
    return !!(e && typeof e == `object` && `byteLength` in e && `byteOffset` in e)
}
var wd = (function(e) {
    let t = this.constructor.prototype
      , n = t[e]
      , r = function() {
        return n.apply(r, arguments)
    };
    return Object.setPrototypeOf(r, t),
    r
}
)
  , Td = e(td(), 1)
  , Ed = {}.hasOwnProperty
  , Dd = new class e extends wd {
    constructor() {
        super(`copy`),
        this.Compiler = void 0,
        this.Parser = void 0,
        this.attachers = [],
        this.compiler = void 0,
        this.freezeIndex = -1,
        this.frozen = void 0,
        this.namespace = {},
        this.parser = void 0,
        this.transformers = rd()
    }
    copy() {
        let t = new e
          , n = -1;
        for (; ++n < this.attachers.length; ) {
            let e = this.attachers[n];
            t.use(...e)
        }
        return t.data((0,
        Td.default)(!0, {}, this.namespace)),
        t
    }
    data(e, t) {
        return typeof e == `string` ? arguments.length === 2 ? (Ad(`data`, this.frozen),
        this.namespace[e] = t,
        this) : Ed.call(this.namespace, e) && this.namespace[e] || void 0 : e ? (Ad(`data`, this.frozen),
        this.namespace = e,
        this) : this.namespace
    }
    freeze() {
        if (this.frozen)
            return this;
        let e = this;
        for (; ++this.freezeIndex < this.attachers.length; ) {
            let[t,...n] = this.attachers[this.freezeIndex];
            if (n[0] === !1)
                continue;
            n[0] === !0 && (n[0] = void 0);
            let r = t.call(e, ...n);
            typeof r == `function` && this.transformers.use(r)
        }
        return this.frozen = !0,
        this.freezeIndex = 1 / 0,
        this
    }
    parse(e) {
        this.freeze();
        let t = Nd(e)
          , n = this.parser || this.Parser;
        return Od(`parse`, n),
        n(String(t), t)
    }
    process(e, t) {
        let n = this;
        return this.freeze(),
        Od(`process`, this.parser || this.Parser),
        kd(`process`, this.compiler || this.Compiler),
        t ? r(void 0, t) : new Promise(r);
        function r(r, i) {
            let a = Nd(e)
              , o = n.parse(a);
            n.run(o, a, function(e, t, r) {
                if (e || !t || !r)
                    return s(e);
                let i = t
                  , a = n.stringify(i, r);
                Fd(a) ? r.value = a : r.result = a,
                s(e, r)
            });
            function s(e, n) {
                e || !n ? i(e) : r ? r(n) : t(void 0, n)
            }
        }
    }
    processSync(e) {
        let t = !1, n;
        return this.freeze(),
        Od(`processSync`, this.parser || this.Parser),
        kd(`processSync`, this.compiler || this.Compiler),
        this.process(e, r),
        Md(`processSync`, `process`, t),
        n;
        function r(e, r) {
            t = !0,
            ed(e),
            n = r
        }
    }
    run(e, t, n) {
        jd(e),
        this.freeze();
        let r = this.transformers;
        return !n && typeof t == `function` && (n = t,
        t = void 0),
        n ? i(void 0, n) : new Promise(i);
        function i(i, a) {
            let o = Nd(t);
            r.run(e, o, s);
            function s(t, r, o) {
                let s = r || e;
                t ? a(t) : i ? i(s) : n(void 0, s, o)
            }
        }
    }
    runSync(e, t) {
        let n = !1, r;
        return this.run(e, t, i),
        Md(`runSync`, `run`, n),
        r;
        function i(e, t) {
            ed(e),
            r = t,
            n = !0
        }
    }
    stringify(e, t) {
        this.freeze();
        let n = Nd(t)
          , r = this.compiler || this.Compiler;
        return kd(`stringify`, r),
        jd(e),
        r(e, n)
    }
    use(e, ...t) {
        let n = this.attachers
          , r = this.namespace;
        if (Ad(`use`, this.frozen),
        e != null)
            if (typeof e == `function`)
                s(e, t);
            else if (typeof e == `object`)
                Array.isArray(e) ? o(e) : a(e);
            else
                throw TypeError("Expected usable value, not `" + e + "`");
        return this;
        function i(e) {
            if (typeof e == `function`)
                s(e, []);
            else if (typeof e == `object`)
                if (Array.isArray(e)) {
                    let[t,...n] = e;
                    s(t, n)
                } else
                    a(e);
            else
                throw TypeError("Expected usable value, not `" + e + "`")
        }
        function a(e) {
            if (!(`plugins` in e) && !(`settings` in e))
                throw Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");
            o(e.plugins),
            e.settings && (r.settings = (0,
            Td.default)(!0, r.settings, e.settings))
        }
        function o(e) {
            let t = -1;
            if (e != null)
                if (Array.isArray(e))
                    for (; ++t < e.length; ) {
                        let n = e[t];
                        i(n)
                    }
                else
                    throw TypeError("Expected a list of plugins, not `" + e + "`")
        }
        function s(e, t) {
            let r = -1
              , i = -1;
            for (; ++r < n.length; )
                if (n[r][0] === e) {
                    i = r;
                    break
                }
            if (i === -1)
                n.push([e, ...t]);
            else if (t.length > 0) {
                let[r,...a] = t
                  , o = n[i][1];
                nd(o) && nd(r) && (r = (0,
                Td.default)(!0, o, r)),
                n[i] = [e, r, ...a]
            }
        }
    }
}
().freeze();
function Od(e, t) {
    if (typeof t != `function`)
        throw TypeError("Cannot `" + e + "` without `parser`")
}
function kd(e, t) {
    if (typeof t != `function`)
        throw TypeError("Cannot `" + e + "` without `compiler`")
}
function Ad(e, t) {
    if (t)
        throw Error("Cannot call `" + e + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")
}
function jd(e) {
    if (!nd(e) || typeof e.type != `string`)
        throw TypeError("Expected node, got `" + e + "`")
}
function Md(e, t, n) {
    if (!n)
        throw Error("`" + e + "` finished async. Use `" + t + "` instead")
}
function Nd(e) {
    return Pd(e) ? e : new yd(e)
}
function Pd(e) {
    return !!(e && typeof e == `object` && `message` in e && `messages` in e)
}
function Fd(e) {
    return typeof e == `string` || Id(e)
}
function Id(e) {
    return !!(e && typeof e == `object` && `byteLength` in e && `byteOffset` in e)
}
var Ld = []
  , Rd = {
    allowDangerousHtml: !0
}
  , zd = /^(https?|ircs?|mailto|xmpp)$/i
  , Bd = [{
    from: `astPlugins`,
    id: `remove-buggy-html-in-markdown-parser`
}, {
    from: `allowDangerousHtml`,
    id: `remove-buggy-html-in-markdown-parser`
}, {
    from: `allowNode`,
    id: `replace-allownode-allowedtypes-and-disallowedtypes`,
    to: `allowElement`
}, {
    from: `allowedTypes`,
    id: `replace-allownode-allowedtypes-and-disallowedtypes`,
    to: `allowedElements`
}, {
    from: `className`,
    id: `remove-classname`
}, {
    from: `disallowedTypes`,
    id: `replace-allownode-allowedtypes-and-disallowedtypes`,
    to: `disallowedElements`
}, {
    from: `escapeHtml`,
    id: `remove-buggy-html-in-markdown-parser`
}, {
    from: `includeElementIndex`,
    id: `#remove-includeelementindex`
}, {
    from: `includeNodeIndex`,
    id: `change-includenodeindex-to-includeelementindex`
}, {
    from: `linkTarget`,
    id: `remove-linktarget`
}, {
    from: `plugins`,
    id: `change-plugins-to-remarkplugins`,
    to: `remarkPlugins`
}, {
    from: `rawSourcePos`,
    id: `#remove-rawsourcepos`
}, {
    from: `renderers`,
    id: `change-renderers-to-components`,
    to: `components`
}, {
    from: `source`,
    id: `change-source-to-children`,
    to: `children`
}, {
    from: `sourcePos`,
    id: `#remove-sourcepos`
}, {
    from: `transformImageUri`,
    id: `#add-urltransform`,
    to: `urlTransform`
}, {
    from: `transformLinkUri`,
    id: `#add-urltransform`,
    to: `urlTransform`
}];
function Vd(e) {
    let t = Hd(e)
      , n = Ud(e);
    return Wd(t.runSync(t.parse(n), n), e)
}
function Hd(e) {
    let t = e.rehypePlugins || Ld
      , n = e.remarkPlugins || Ld
      , r = e.remarkRehypeOptions ? {
        ...e.remarkRehypeOptions,
        ...Rd
    } : Rd;
    return Dd().use(Nl).use(n).use($u, r).use(t)
}
function Ud(e) {
    let t = e.children || ``
      , n = new yd;
    return typeof t == `string` ? n.value = t : `` + t,
    n
}
function Wd(e, t) {
    let n = t.allowedElements
      , r = t.allowElement
      , i = t.components
      , a = t.disallowedElements
      , o = t.skipHtml
      , s = t.unwrapDisallowed
      , c = t.urlTransform || Gd;
    for (let e of Bd)
        Object.hasOwn(t, e.from) && `` + e.from + (e.to ? "use `" + e.to + "` instead" : `remove it`) + e.id;
    return Vu(e, l),
    mo(e, {
        Fragment: z.Fragment,
        components: i,
        ignoreInvalidStyle: !0,
        jsx: z.jsx,
        jsxs: z.jsxs,
        passKeys: !0,
        passNode: !0
    });
    function l(e, t, i) {
        if (e.type === `raw` && i && typeof t == `number`)
            return o ? i.children.splice(t, 1) : i.children[t] = {
                type: `text`,
                value: e.value
            },
            t;
        if (e.type === `element`) {
            let t;
            for (t in Lo)
                if (Object.hasOwn(Lo, t) && Object.hasOwn(e.properties, t)) {
                    let n = e.properties[t]
                      , r = Lo[t];
                    (r === null || r.includes(e.tagName)) && (e.properties[t] = c(String(n || ``), t, e))
                }
        }
        if (e.type === `element`) {
            let o = n ? !n.includes(e.tagName) : a ? a.includes(e.tagName) : !1;
            if (!o && r && typeof t == `number` && (o = !r(e, t, i)),
            o && i && typeof t == `number`)
                return s && e.children ? i.children.splice(t, 1, ...e.children) : i.children.splice(t, 1),
                t
        }
    }
}
function Gd(e) {
    let t = e.indexOf(`:`)
      , n = e.indexOf(`?`)
      , r = e.indexOf(`#`)
      , i = e.indexOf(`/`);
    return t === -1 || i !== -1 && t > i || n !== -1 && t > n || r !== -1 && t > r || zd.test(e.slice(0, t)) ? e : ``
}
function Kd(e, t) {
    let n = String(e);
    if (typeof t != `string`)
        throw TypeError(`Expected character`);
    let r = 0
      , i = n.indexOf(t);
    for (; i !== -1; )
        r++,
        i = n.indexOf(t, i + t.length);
    return r
}
function qd(e) {
    if (typeof e != `string`)
        throw TypeError(`Expected a string`);
    return e.replace(/[|\\{}()[\]^$+*?.]/g, `\\$&`).replace(/-/g, `\\x2d`)
}
function Jd(e, t, n) {
    let r = ku((n || {}).ignore || [])
      , i = Yd(t)
      , a = -1;
    for (; ++a < i.length; )
        zu(e, o);
    function o(e, t, n) {
        if (e.type === `text` && typeof n == `number`)
            return s(e, t, n);
        if (r(e, n, t[t.length - 1]))
            return Ru
    }
    function s(e, t, n) {
        let r = t[t.length - 1]
          , o = i[a][0]
          , s = i[a][1]
          , c = 0
          , l = !1
          , u = [];
        o.lastIndex = 0;
        let d = o.exec(e.value);
        for (; d; ) {
            let n = d.index
              , r = {
                index: d.index,
                input: d.input,
                stack: [...t, e]
            }
              , i = s(...d, r);
            if (typeof i == `string` && (i = i.length > 0 ? {
                type: `text`,
                value: i
            } : void 0),
            i === !1)
                o.lastIndex = n + 1;
            else {
                if (c !== n && f({
                    type: `text`,
                    value: e.value.slice(c, n)
                }),
                Array.isArray(i))
                    for (let e of i)
                        f(e);
                else
                    i && f(i);
                c = n + d[0].length,
                l = !0
            }
            if (!o.global)
                break;
            d = o.exec(e.value)
        }
        return l ? (c < e.value.length && f({
            type: `text`,
            value: e.value.slice(c)
        }),
        r.children.splice(n, 1, ...u)) : u = [e],
        n + u.length;
        function f(e) {
            let t = u[u.length - 1];
            t && t.type === `text` && e.type === `text` ? t.value += e.value : u.push(e)
        }
    }
}
function Yd(e) {
    if (!Array.isArray(e))
        throw TypeError(`Expected find and replace tuple or list of tuples`);
    let t = []
      , n = !e[0] || Array.isArray(e[0]) ? e : [e]
      , r = -1;
    for (; ++r < n.length; ) {
        let e = n[r];
        t.push([Xd(e[0]), Zd(e[1])])
    }
    return t
}
function Xd(e) {
    return typeof e == `string` ? new RegExp(qd(e),`g`) : e
}
function Zd(e) {
    return typeof e == `function` ? e : function() {
        return e
    }
}
var Qd = `phrasing`
  , $d = [`autolink`, `link`, `image`, `label`];
function ef() {
    return {
        transforms: [lf],
        enter: {
            literalAutolink: nf,
            literalAutolinkEmail: rf,
            literalAutolinkHttp: rf,
            literalAutolinkWww: rf
        },
        exit: {
            literalAutolink: cf,
            literalAutolinkEmail: sf,
            literalAutolinkHttp: af,
            literalAutolinkWww: of
        }
    }
}
function tf() {
    return {
        unsafe: [{
            character: `@`,
            before: `[+\\-.\\w]`,
            after: `[\\-.\\w]`,
            inConstruct: Qd,
            notInConstruct: $d
        }, {
            character: `.`,
            before: `[Ww]`,
            after: `[\\-.\\w]`,
            inConstruct: Qd,
            notInConstruct: $d
        }, {
            character: `:`,
            before: `[ps]`,
            after: `\\/`,
            inConstruct: Qd,
            notInConstruct: $d
        }]
    }
}
function nf(e) {
    this.enter({
        type: `link`,
        title: null,
        url: ``,
        children: [],
        position: void 0
    }, e)
}
function rf(e) {
    this.config.enter.autolinkProtocol.call(this, e)
}
function af(e) {
    this.config.exit.autolinkProtocol.call(this, e)
}
function of(e) {
    this.config.exit.data.call(this, e);
    let t = this.stack[this.stack.length - 1];
    t.type,
    t.url = `http://` + this.sliceSerialize(e)
}
function sf(e) {
    this.config.exit.autolinkEmail.call(this, e)
}
function cf(e) {
    this.exit(e)
}
function lf(e) {
    Jd(e, [[/(?<![\da-z])(https?:\/\/|www(?=\.))([\w-]*\.[\w\-.]*)([^\t\n\r ]*)/gi, uf], [/(?<![\w+\-.@])xmpp:([\w+\-.]+)@([\w-]+(?:\.[\w-]+)+)(\/(?:[\w\-/]|\.(?=[\dA-Za-z]))*)?/g, pf], [/(?<![\w+\-.@])mailto:([\w+\-.]+)@([\w-]+(?:\.[\w-]+)+)/g, ff], [/(?<![\w+\-.]|(?:^|[^\d@A-Za-z])(?:mailto|xmpp):)([\w+\-.]+)@([\w-]+(?:\.[\w-]+)+)/g, df]], {
        ignore: [`link`, `linkReference`]
    })
}
function uf(e, t, n, r, i) {
    if (!gf(i))
        return !1;
    let a = ``;
    if (/^w/i.test(t) && (n = t + n,
    t = ``,
    a = `http://`),
    is(n.charCodeAt(0)) || !mf(n))
        return !1;
    let o = hf(n + r)
      , s = {
        type: `link`,
        title: null,
        url: a + t + o[0],
        children: [{
            type: `text`,
            value: t + o[0],
            position: void 0
        }],
        position: void 0
    };
    return o[1] ? [s, {
        type: `text`,
        value: o[1],
        position: void 0
    }] : s
}
function df(e, t, n) {
    return !/[\d\-_]$/.test(n) && {
        type: `link`,
        title: null,
        url: `mailto:` + t + `@` + n,
        children: [{
            type: `text`,
            value: t + `@` + n,
            position: void 0
        }],
        position: void 0
    }
}
function ff(e, t, n) {
    if (/[\d\-_]$/.test(n))
        return !1;
    let r = `mailto:` + t + `@` + n;
    return {
        type: `link`,
        title: null,
        url: r,
        children: [{
            type: `text`,
            value: r,
            position: void 0
        }],
        position: void 0
    }
}
function pf(e, t, n, r, i) {
    if (/[\d\-_]$/.test(n) || r && (!/[A-Za-z]$/.test(r) || i.input.charAt(i.index + e.length) === `@`))
        return !1;
    let a = `xmpp:` + t + `@` + n + (r || ``);
    return {
        type: `link`,
        title: null,
        url: a,
        children: [{
            type: `text`,
            value: a,
            position: void 0
        }],
        position: void 0
    }
}
function mf(e) {
    let t = e.split(`.`);
    return !(t.length < 2 || t[t.length - 1] && (/_/.test(t[t.length - 1]) || !/[\dA-Za-z]/.test(t[t.length - 1])) || t[t.length - 2] && (/_/.test(t[t.length - 2]) || !/[\dA-Za-z]/.test(t[t.length - 2])))
}
function hf(e) {
    let t = e.length;
    for (; t > 0; ) {
        let n = e.charCodeAt(t - 1);
        if (n === 33 || n === 34 || n === 38 || n === 39 || n === 41 || n === 44 || n === 46 || n === 58 || n === 59 || n === 60 || n === 62 || n === 63 || n === 93 || n === 125)
            t--;
        else
            break
    }
    if (t === e.length)
        return [e, void 0];
    let n = e.slice(t);
    e = e.slice(0, t);
    let r = n.indexOf(`)`)
      , i = Kd(e, `(`)
      , a = Kd(e, `)`);
    for (; r !== -1 && i > a; )
        e += n.slice(0, r + 1),
        n = n.slice(r + 1),
        r = n.indexOf(`)`),
        a++;
    return [e, n]
}
function gf(e) {
    let t = e.input.charCodeAt(e.index - 1);
    return e.index === 0 || as(t) || is(t)
}
Ef.peek = Tf;
function _f() {
    this.buffer()
}
function vf(e) {
    this.enter({
        type: `footnoteReference`,
        identifier: ``,
        label: ``
    }, e)
}
function yf() {
    this.buffer()
}
function bf(e) {
    this.enter({
        type: `footnoteDefinition`,
        identifier: ``,
        label: ``,
        children: []
    }, e)
}
function xf(e) {
    let t = this.resume()
      , n = this.stack[this.stack.length - 1];
    n.type,
    n.identifier = Qo(this.sliceSerialize(e)).toLowerCase(),
    n.label = t
}
function Sf(e) {
    this.exit(e)
}
function Cf(e) {
    let t = this.resume()
      , n = this.stack[this.stack.length - 1];
    n.type,
    n.identifier = Qo(this.sliceSerialize(e)).toLowerCase(),
    n.label = t
}
function wf(e) {
    this.exit(e)
}
function Tf() {
    return `[`
}
function Ef(e, t, n, r) {
    let i = n.createTracker(r)
      , a = i.move(`[^`)
      , o = n.enter(`footnoteReference`)
      , s = n.enter(`reference`);
    return a += i.move(n.safe(n.associationId(e), {
        after: `]`,
        before: a
    })),
    s(),
    o(),
    a += i.move(`]`),
    a
}
function Df() {
    return {
        enter: {
            gfmFootnoteCallString: _f,
            gfmFootnoteCall: vf,
            gfmFootnoteDefinitionLabelString: yf,
            gfmFootnoteDefinition: bf
        },
        exit: {
            gfmFootnoteCallString: xf,
            gfmFootnoteCall: Sf,
            gfmFootnoteDefinitionLabelString: Cf,
            gfmFootnoteDefinition: wf
        }
    }
}
function Of(e) {
    let t = !1;
    return e && e.firstLineBlank && (t = !0),
    {
        handlers: {
            footnoteDefinition: n,
            footnoteReference: Ef
        },
        unsafe: [{
            character: `[`,
            inConstruct: [`label`, `phrasing`, `reference`]
        }]
    };
    function n(e, n, r, i) {
        let a = r.createTracker(i)
          , o = a.move(`[^`)
          , s = r.enter(`footnoteDefinition`)
          , c = r.enter(`label`);
        return o += a.move(r.safe(r.associationId(e), {
            before: o,
            after: `]`
        })),
        c(),
        o += a.move(`]:`),
        e.children && e.children.length > 0 && (a.shift(4),
        o += a.move((t ? `
` : ` `) + r.indentLines(r.containerFlow(e, a.current()), t ? Af : kf))),
        s(),
        o
    }
}
function kf(e, t, n) {
    return t === 0 ? e : Af(e, t, n)
}
function Af(e, t, n) {
    return (n ? `` : `    `) + e
}
var jf = [`autolink`, `destinationLiteral`, `destinationRaw`, `reference`, `titleQuote`, `titleApostrophe`];
If.attention = Lf,
If.peek = Rf;
function Mf() {
    return {
        canContainEols: [`delete`],
        enter: {
            strikethrough: Pf
        },
        exit: {
            strikethrough: Ff
        }
    }
}
function Nf() {
    return {
        handlers: {
            delete: If
        },
        unsafe: [{
            character: `~`,
            inConstruct: `phrasing`,
            notInConstruct: jf
        }]
    }
}
function Pf(e) {
    this.enter({
        type: `delete`,
        children: [],
        position: void 0
    }, e)
}
function Ff(e) {
    this.exit(e)
}
function If(e, t, n, r) {
    let i = n.createTracker(r)
      , a = n.stack.includes(`strikethrough`) ? `~` : `~~`
      , o = n.enter(`strikethrough`)
      , s = i.move(a);
    return s += n.containerPhrasing(e, {
        ...i.current(),
        before: s,
        after: `~`
    }),
    s += i.move(a),
    o(),
    s
}
function Lf() {
    return {
        construct: `strikethrough`,
        markers: [`~`],
        sizes: [2, 1]
    }
}
function Rf() {
    return `~`
}
function zf(e) {
    return e.length
}
function Bf(e, t) {
    let n = t || {}
      , r = (n.align || []).concat()
      , i = n.stringLength || zf
      , a = []
      , o = []
      , s = []
      , c = []
      , l = 0
      , u = -1;
    for (; ++u < e.length; ) {
        let t = []
          , r = []
          , a = -1;
        for (e[u].length > l && (l = e[u].length); ++a < e[u].length; ) {
            let o = Vf(e[u][a]);
            if (n.alignDelimiters !== !1) {
                let e = i(o);
                r[a] = e,
                (c[a] === void 0 || e > c[a]) && (c[a] = e)
            }
            t.push(o)
        }
        o[u] = t,
        s[u] = r
    }
    let d = -1;
    if (typeof r == `object` && `length` in r)
        for (; ++d < l; )
            a[d] = Hf(r[d]);
    else {
        let e = Hf(r);
        for (; ++d < l; )
            a[d] = e
    }
    d = -1;
    let f = []
      , p = [];
    for (; ++d < l; ) {
        let e = a[d]
          , t = ``
          , r = ``;
        e === 99 ? (t = `:`,
        r = `:`) : e === 108 ? t = `:` : e === 114 && (r = `:`);
        let i = n.alignDelimiters === !1 ? 1 : Math.max(1, c[d] - t.length - r.length)
          , o = t + `-`.repeat(i) + r;
        n.alignDelimiters !== !1 && (i = t.length + i + r.length,
        i > c[d] && (c[d] = i),
        p[d] = i),
        f[d] = o
    }
    o.splice(1, 0, f),
    s.splice(1, 0, p),
    u = -1;
    let m = [];
    for (; ++u < o.length; ) {
        let e = o[u]
          , t = s[u]
          , r = n.fillRows === !1 ? Math.max(1, o[u === 1 ? 0 : u].length) : l;
        d = -1;
        let i = [];
        for (; ++d < r; ) {
            let o = e[d] || ``
              , s = ``
              , l = ``;
            if (n.alignDelimiters !== !1) {
                let e = c[d] - (t[d] || 0)
                  , n = a[d];
                if (n === 114)
                    s = ` `.repeat(e);
                else if (n === 99) {
                    let t = e / 2;
                    e % 2 ? (s = ` `.repeat(t + .5),
                    l = ` `.repeat(t - .5)) : (s = ` `.repeat(t),
                    l = s)
                } else
                    l = ` `.repeat(e)
            }
            n.delimiterStart !== !1 && !d && i.push(`|`),
            n.padding !== !1 && (n.alignDelimiters !== !1 || o !== ``) && (n.delimiterStart !== !1 || d) && i.push(` `),
            n.alignDelimiters !== !1 && i.push(s),
            i.push(o),
            n.alignDelimiters !== !1 && i.push(l),
            n.padding !== !1 && i.push(` `),
            (n.delimiterEnd !== !1 || d !== r - 1) && i.push(`|`)
        }
        m.push(n.delimiterEnd === !1 ? i.join(``).replace(/ +$/, ``) : i.join(``))
    }
    return m.join(`
`)
}
function Vf(e) {
    return e == null ? `` : String(e)
}
function Hf(e) {
    let t = typeof e == `string` ? e.codePointAt(0) : 0;
    return t === 67 || t === 99 ? 99 : t === 76 || t === 108 ? 108 : t === 82 || t === 114 ? 114 : 0
}
var Uf = ku([`break`, `delete`, `emphasis`, `footnote`, `footnoteReference`, `image`, `imageReference`, `inlineCode`, `inlineMath`, `link`, `linkReference`, `mdxJsxTextElement`, `mdxTextExpression`, `strong`, `text`, `textDirective`]);
function Wf(e, t, n, r) {
    let i = n.enter(`blockquote`)
      , a = n.createTracker(r);
    a.move(`> `),
    a.shift(2);
    let o = n.indentLines(n.containerFlow(e, a.current()), Gf);
    return i(),
    o
}
function Gf(e, t, n) {
    return `>` + (n ? `` : ` `) + e
}
function Kf(e, t) {
    return qf(e, t.inConstruct, !0) && !qf(e, t.notInConstruct, !1)
}
function qf(e, t, n) {
    if (typeof t == `string` && (t = [t]),
    !t || t.length === 0)
        return n;
    let r = -1;
    for (; ++r < t.length; )
        if (e.includes(t[r]))
            return !0;
    return !1
}
function Jf(e, t, n, r) {
    let i = -1;
    for (; ++i < n.unsafe.length; ) {
        let e = n.unsafe[i];
        if (e.character === `
` && !e.before && !e.after && Kf(n.stack, e))
            return /[\t ]/.test(r.before) ? `` : ` `
    }
    return `\\
`
}
function Yf(e, t) {
    let n = String(e)
      , r = n.indexOf(t)
      , i = r
      , a = 0
      , o = 0;
    if (typeof t != `string`)
        throw TypeError(`Expected substring`);
    for (; r !== -1; )
        r === i ? ++a > o && (o = a) : a = 1,
        i = r + t.length,
        r = n.indexOf(t, i);
    return o
}
function Xf(e, t) {
    return !!(t.options.fences === !1 && e.value && !e.lang && /[^\n\r ]/.test(e.value) && !/^[\t ]*(?:[\n\r]|$)|(?:^|[\n\r])[\t ]*$/.test(e.value))
}
function Zf(e) {
    let t = e.options.fence || "`";
    if (t !== "`" && t !== `~`)
        throw Error("Cannot serialize code with `" + t + "` for `options.fence`, expected `` ` `` or `~`");
    return t
}
function Qf(e, t, n, r) {
    let i = Zf(n)
      , a = e.value || ``;
    if (Xf(e, n)) {
        let e = n.enter(`codeIndented`)
          , t = n.indentLines(a, $f);
        return e(),
        t
    }
    let o = n.createTracker(r)
      , s = i.repeat(Math.max(Yf(a, i) + 1, 3))
      , c = n.enter(`codeFenced`)
      , l = i === "`" ? `GraveAccent` : `Tilde`
      , u = o.move(s);
    if (e.lang) {
        let t = n.enter(`codeFencedLang${l}`);
        u += o.move(n.safe(e.lang, {
            before: u,
            after: ` `,
            encode: ["`"],
            ...o.current()
        })),
        t()
    }
    if (e.lang && e.meta) {
        let t = n.enter(`codeFencedMeta${l}`);
        u += o.move(` `),
        u += o.move(n.safe(e.meta, {
            before: u,
            after: `
`,
            encode: ["`"],
            ...o.current()
        })),
        t()
    }
    return u += o.move(`
`),
    a && (u += o.move(a + `
`)),
    u += o.move(s),
    c(),
    u
}
function $f(e, t, n) {
    return (n ? `` : `    `) + e
}
function ep(e) {
    let t = e.options.quote || `"`;
    if (t !== `"` && t !== `'`)
        throw Error("Cannot serialize title with `" + t + "` for `options.quote`, expected `\"`, or `'`");
    return t
}
function tp(e, t, n, r) {
    let i = ep(n)
      , a = i === `"` ? `Quote` : `Apostrophe`
      , o = n.enter(`definition`)
      , s = n.enter(`label`)
      , c = n.createTracker(r)
      , l = c.move(`[`);
    return l += c.move(n.safe(n.associationId(e), {
        before: l,
        after: `]`,
        ...c.current()
    })),
    l += c.move(`]: `),
    s(),
    !e.url || /[\0- \u007F]/.test(e.url) ? (s = n.enter(`destinationLiteral`),
    l += c.move(`<`),
    l += c.move(n.safe(e.url, {
        before: l,
        after: `>`,
        ...c.current()
    })),
    l += c.move(`>`)) : (s = n.enter(`destinationRaw`),
    l += c.move(n.safe(e.url, {
        before: l,
        after: e.title ? ` ` : `
`,
        ...c.current()
    }))),
    s(),
    e.title && (s = n.enter(`title${a}`),
    l += c.move(` ` + i),
    l += c.move(n.safe(e.title, {
        before: l,
        after: i,
        ...c.current()
    })),
    l += c.move(i),
    s()),
    o(),
    l
}
function np(e) {
    let t = e.options.emphasis || `*`;
    if (t !== `*` && t !== `_`)
        throw Error("Cannot serialize emphasis with `" + t + "` for `options.emphasis`, expected `*`, or `_`");
    return t
}
function rp(e) {
    let t = e.codePointAt(0);
    return t === void 0 ? `` : String.fromCodePoint(t)
}
function ip(e) {
    let t = e.codePointAt(e.length - 2);
    return t !== void 0 && t > 65535 ? e.slice(-2) : e.slice(-1)
}
function ap(e) {
    return `&#x` + e.toString(16).toUpperCase() + `;`
}
function op(e, t, n) {
    let r = _s(e)
      , i = _s(t);
    return r === void 0 ? i === void 0 ? n === `_` ? {
        inside: !0,
        outside: !0
    } : {
        inside: !1,
        outside: !1
    } : i === 1 ? {
        inside: !0,
        outside: !0
    } : {
        inside: !1,
        outside: !0
    } : r === 1 ? i === void 0 ? {
        inside: !1,
        outside: !1
    } : i === 1 ? {
        inside: !0,
        outside: !0
    } : {
        inside: !1,
        outside: !1
    } : i === void 0 ? {
        inside: !1,
        outside: !1
    } : i === 1 ? {
        inside: !0,
        outside: !1
    } : {
        inside: !1,
        outside: !1
    }
}
function sp(e) {
    if (e.charCodeAt(0) !== 60)
        return;
    let t = e.charCodeAt(1);
    if (t === 33) {
        let t = e.charCodeAt(2);
        return t === 45 ? 2 : t === 91 ? 5 : q(t) ? 4 : void 0
    }
    if (t === 63)
        return 3;
    let n = t === 47
      , r = n ? 2 : 1
      , i = r
      , a = e.charCodeAt(i);
    if (!q(a))
        return;
    for (; a === 45 || J(a); )
        a = e.charCodeAt(++i);
    let o = e.slice(r, i).toLowerCase();
    return !n && a !== 47 && gc.includes(o) ? 1 : hc.includes(o) ? 6 : 7
}
var cp = new Map([[`*`, !1], [`_`, !0]]);
function lp(e, t, n) {
    let r = new Set;
    for (let i of e) {
        let e = n.get(i);
        if (e && i.attention && t.some(e => e.attention === i.attention))
            for (let t of e.tokens)
                r.add(t.attention)
    }
    let i = [];
    for (let t of e)
        t.attention && r.delete(t.attention) && i.push(t.attention);
    return i.reverse(),
    i
}
function up(e, t, n) {
    let r = []
      , i = new Map
      , a = new Map
      , o = 0;
    for (; o < e.length; ) {
        if (!e[o].attention) {
            o++;
            continue
        }
        let s = e[o].value.charAt(0)
          , c = cp.get(s)
          , l = o + 1;
        for (; l < e.length && e[l].attention && e[l].value.charAt(0) === s; )
            l++;
        let u = o ? e[o - 1].value : t
          , d = _s(u.charCodeAt(u.length - 1))
          , f = _s((l < e.length ? e[l].value : n).charCodeAt(0))
          , p = !f || f === 2 && !!d
          , m = !d || d === 2 && !!f
          , h = {
            tokens: e.slice(o, l),
            markers: [],
            start: 0,
            end: 0,
            open: c ? p && (!!d || !m) : p,
            close: c ? m && (!!f || !p) : m,
            split: c !== void 0
        };
        for (let e of h.tokens) {
            i.set(e, [...h.tokens]),
            a.set(e, h);
            let t = e.value.length;
            for (; t--; )
                h.markers.push(e)
        }
        h.end = h.markers.length,
        r.push(h),
        o = l
    }
    for (pp(r, i),
    o = -1; ++o < e.length; ) {
        let t = i.get(e[o]);
        if (t)
            return {
                attention: lp(e, t, a),
                index: o
            }
    }
}
function dp(e, t) {
    let n = e[t ? 0 : e.length - 1];
    if (!n || n.attention)
        return;
    let r = t ? rp(n.value) : ip(n.value)
      , i = ap(r.codePointAt(0));
    if (t)
        n.value = i + n.value.slice(r.length);
    else {
        let e = n.value.slice(0, n.value.length - r.length)
          , t = 0;
        for (; e.charCodeAt(e.length - 1 - t) === 92; )
            t++;
        t % 2 && (e += `\\`),
        n.value = e + i
    }
}
function fp(e, t, n, r, i) {
    for (let a of n.attention) {
        let o = t.get(a) || a.sequences[0];
        for (let s of a.sequences) {
            if (s === o)
                continue;
            let c = new Map(t);
            c.set(a, s);
            let l = yp(e, c, r, i)
              , u = up(l, r, i);
            if (!u || u.index > n.index)
                return {
                    chosen: c,
                    mistake: u,
                    tokens: l
                }
        }
    }
}
function pp(e, t) {
    let n = new Map;
    for (let r of e) {
        let e = r.tokens[0].value.charAt(0)
          , i = n.get(e);
        i || (i = [],
        n.set(e, i));
        let a = r.close ? i.length : 0;
        for (; a-- && r.start < r.end; ) {
            let e = i[a]
              , n = e.end - e.start
              , o = r.end - r.start;
            if (r.split ? (e.close || r.open) && o % 3 && !((n + o) % 3) : n !== e.markers.length || n !== o)
                continue;
            let s = r.split ? n > 1 && o > 1 ? 2 : 1 : o
              , c = e.markers.slice(e.end - s, e.end)
              , l = r.markers.slice(r.start, r.start + s)
              , u = c[0]
              , d = l[0];
            if (u === c[s - 1] && u.value.length === s && d === l[s - 1] && d.value.length === s && u.attention === d.attention)
                t.delete(u),
                t.delete(d);
            else {
                let e = [...new Set([...c, ...l])];
                for (let n of e) {
                    let r = t.get(n);
                    r && r.push(...e)
                }
            }
            e.end -= s,
            r.start += s,
            e.start === e.end && i.splice(a, 1),
            a = i.length
        }
        r.open && r.start < r.end && i.push(r)
    }
}
function mp(e, t, n) {
    if (t.length === 0)
        throw Error("Cannot serialize `" + e + "` as attention without markers, expected one or more markers");
    if (n.length === 0)
        throw Error("Cannot serialize `" + e + "` as attention without sizes, expected one or more sizes");
    for (let t of n)
        if (!Number.isSafeInteger(t) || t < 1)
            throw Error("Cannot serialize `" + e + "` as attention with `" + t + "` as size, expected positive integer");
    let r = [];
    for (let i of t) {
        if (i.length !== 1)
            throw Error("Cannot serialize `" + e + "` as attention with `" + i + "` as marker, expected a single ascii character");
        if (!rs(i.charCodeAt(0)))
            throw Error("Cannot serialize `" + e + "` as attention with `" + i + "` as marker, expected ascii punctuation");
        for (let e of n)
            r.push(i.repeat(e))
    }
    return r
}
function hp(e, t, n) {
    let r = t.indexStack
      , i = e.children || []
      , a = []
      , o = -1
      , s = n.before;
    r.push(-1);
    let c = t.createTracker(n);
    for (; ++o < i.length; ) {
        let l = i[o], u;
        if (r[r.length - 1] = o,
        o + 1 < i.length) {
            let n = t.handle.handlers[i[o + 1].type];
            n && n.peek && (n = n.peek),
            u = n ? rp(n(i[o + 1], e, t, {
                before: ``,
                after: ``,
                ...c.current()
            })) : ``
        } else
            u = n.after;
        let d = a[a.length - 1];
        typeof d == `string` && (s === `\r` || s === `
`) && l.type === `html` && sp(l.value) !== 7 && (a[a.length - 1] = d.replace(/(\r?\n|\r)$/, ` `),
        s = ` `,
        c = t.createTracker(n),
        c.move(bp(a, n.before, n.after)));
        let f = t.handle.handlers[l.type];
        if (f && f.attention) {
            let e = gp(l, f.attention, t, c);
            if (!e)
                continue;
            a.push(e),
            s = ip(e.sequences[0])
        } else {
            let n = t.handle(l, e, t, {
                ...c.current(),
                after: u,
                before: s
            });
            if (!n)
                continue;
            c.move(n),
            a.push(n),
            s = ip(n)
        }
    }
    return r.pop(),
    a
}
function gp(e, t, n, r) {
    let {construct: i, markers: a, sizes: o} = t(e, n)
      , s = mp(e.type, a, o)
      , c = s[0]
      , l = n.enter(i)
      , u = n.createTracker(r.current());
    u.move(c);
    let d = hp(e, n, {
        ...u.current(),
        before: c,
        after: c
    });
    if (l(),
    d.length !== 0)
        return r.move(c),
        r.move(bp(d, c, c)),
        r.move(c),
        {
            children: d,
            sequences: s
        }
}
function _p(e, t, n, r) {
    let i = yp(e, t, n, r)
      , a = up(i, n, r);
    for (; a; ) {
        let o = fp(e, t, a, n, r);
        if (!o)
            return;
        t = o.chosen,
        i = o.tokens,
        a = o.mistake
    }
    return i
}
function vp(e, t, n, r) {
    let i = n
      , a = -1;
    for (; ++a < e.length; ) {
        let o = e[a];
        if (typeof o == `string`) {
            i = ``;
            continue
        }
        let s = a === e.length - 1 ? r : ``
          , c = o.sequences.find(function(t) {
            let r = t.charAt(0);
            return r !== i.charAt(0) && r !== s.charAt(0) || e.length === 1 && cp.has(r) && t.length > n.length
        }) || o.sequences[0];
        c !== o.sequences[0] && t.set(o, c),
        vp(o.children, t, c, c),
        i = c
    }
}
function yp(e, t, n, r) {
    let i = [], a, o = ip(n), s = -1;
    for (; ++s < e.length; ) {
        let n = e[s];
        if (typeof n == `string`) {
            let e = {
                value: n,
                attention: void 0
            };
            a && a === rp(n) && dp([e], !0),
            a = void 0,
            i.push(e),
            e.value && (o = ip(e.value));
            continue
        }
        let c = t.get(n) || n.sequences[0]
          , l = c.charAt(0)
          , u = e[s + 1]
          , d = o
          , f = rp(u === void 0 ? r : typeof u == `string` ? u : t.get(u) || u.sequences[0])
          , p = yp(n.children, t, c, c)
          , m = p[0].value
          , h = op(d.charCodeAt(d.length - 1), m.charCodeAt(0), l);
        h.inside && dp(p, !0);
        let g = ip(p[p.length - 1].value)
          , _ = op(f.charCodeAt(0), g.charCodeAt(g.length - 1), l);
        _.inside && dp(p, !1),
        h.outside && d !== `
` && d !== `\r` && dp(i, !1),
        _.outside && (a = f),
        i.push({
            value: c,
            attention: n
        }, ...p, {
            value: c,
            attention: n
        }),
        o = c.charAt(c.length - 1)
    }
    return i
}
function bp(e, t, n) {
    let r = new Map;
    vp(e, r, t, n);
    let i = (r.size > 0 ? _p(e, r, t, n) : void 0) || _p(e, new Map, t, n) || yp(e, new Map, t, n)
      , a = ``;
    for (let e of i)
        a += e.value;
    return a
}
xp.attention = Sp,
xp.peek = Cp;
function xp(e, t, n, r) {
    let i = n.enter(`phrasing`)
      , a = gp(e, Sp, n, n.createTracker(r))
      , o = a ? bp([a], r.before, r.after) : ``;
    return i(),
    o
}
function Sp(e, t) {
    return {
        construct: `emphasis`,
        markers: np(t) === `*` ? [`*`, `_`] : [`_`, `*`],
        sizes: [1]
    }
}
function Cp(e, t, n) {
    return n.options.emphasis || `*`
}
function wp(e, t) {
    let n = !1;
    return Vu(e, function(e) {
        if (`value` in e && /\r?\n|\r/.test(e.value) || e.type === `break`)
            return n = !0,
            !1
    }),
    !!((!e.depth || e.depth < 3) && zo(e) && (t.options.setext || n))
}
function Tp(e, t, n, r) {
    let i = Math.max(Math.min(6, e.depth || 1), 1)
      , a = n.createTracker(r);
    if (wp(e, n)) {
        let t = n.enter(`headingSetext`)
          , r = n.enter(`phrasing`)
          , o = n.containerPhrasing(e, {
            ...a.current(),
            before: `
`,
            after: `
`
        });
        return r(),
        t(),
        o + `
` + (i === 1 ? `=` : `-`).repeat(o.length - (Math.max(o.lastIndexOf(`\r`), o.lastIndexOf(`
`)) + 1))
    }
    let o = `#`.repeat(i)
      , s = n.enter(`headingAtx`)
      , c = n.enter(`phrasing`);
    a.move(o + ` `);
    let l = n.containerPhrasing(e, {
        before: `# `,
        after: `
`,
        ...a.current()
    })
      , u = l.charCodeAt(0);
    return (u === 9 || u === 32) && (l = ap(u) + l.slice(1)),
    l = l ? o + ` ` + l : o,
    n.options.closeAtx && (l += ` ` + o),
    c(),
    s(),
    l
}
Ep.peek = Dp;
function Ep(e) {
    return e.value || ``
}
function Dp() {
    return `<`
}
Op.peek = kp;
function Op(e, t, n, r) {
    let i = ep(n)
      , a = i === `"` ? `Quote` : `Apostrophe`
      , o = n.enter(`image`)
      , s = n.enter(`label`)
      , c = n.createTracker(r)
      , l = c.move(`![`);
    return l += c.move(n.safe(e.alt, {
        before: l,
        after: `]`,
        ...c.current()
    })),
    l += c.move(`](`),
    s(),
    !e.url && e.title || /[\0- \u007F]/.test(e.url) ? (s = n.enter(`destinationLiteral`),
    l += c.move(`<`),
    l += c.move(n.safe(e.url, {
        before: l,
        after: `>`,
        ...c.current()
    })),
    l += c.move(`>`)) : (s = n.enter(`destinationRaw`),
    l += c.move(n.safe(e.url, {
        before: l,
        after: e.title ? ` ` : `)`,
        ...c.current()
    }))),
    s(),
    e.title && (s = n.enter(`title${a}`),
    l += c.move(` ` + i),
    l += c.move(n.safe(e.title, {
        before: l,
        after: i,
        ...c.current()
    })),
    l += c.move(i),
    s()),
    l += c.move(`)`),
    o(),
    l
}
function kp() {
    return `!`
}
Ap.peek = jp;
function Ap(e, t, n, r) {
    let i = e.referenceType
      , a = n.enter(`imageReference`)
      , o = n.enter(`label`)
      , s = n.createTracker(r)
      , c = s.move(`![`)
      , l = n.safe(e.alt, {
        before: c,
        after: `]`,
        ...s.current()
    });
    c += s.move(l + `][`),
    o();
    let u = n.stack;
    n.stack = u.filter(function(e) {
        return e !== `phrasing`
    }),
    o = n.enter(`reference`);
    let d = n.safe(n.associationId(e), {
        before: c,
        after: `]`,
        ...s.current()
    });
    return o(),
    n.stack = u,
    a(),
    i === `full` || !l || l !== d ? c += s.move(d + `]`) : i === `shortcut` ? c = c.slice(0, -1) : c += s.move(`]`),
    c
}
function jp() {
    return `!`
}
Mp.peek = Np;
function Mp(e, t, n) {
    let r = e.value || ``
      , i = "`"
      , a = -1;
    for (; RegExp("(^|[^`])" + i + "([^`]|$)").test(r); )
        i += "`";
    for (/[^\n\r ]/.test(r) && (/^[\n\r ]/.test(r) && /[\n\r ]$/.test(r) || /^`|`$/.test(r)) && (r = ` ` + r + ` `); ++a < n.unsafe.length; ) {
        let e = n.unsafe[a]
          , t = n.compilePattern(e);
        if (!e.atBreak)
            continue;
        let i;
        for (; i = t.exec(r); ) {
            let e = i.index;
            r.charCodeAt(e) === 10 && r.charCodeAt(e - 1) === 13 && e--,
            r = r.slice(0, e) + ` ` + r.slice(i.index + 1)
        }
    }
    return i + r + i
}
function Np() {
    return "`"
}
function Pp(e, t) {
    let n = zo(e);
    return !!(!t.options.resourceLink && e.url && !e.title && e.children && e.children.length === 1 && e.children[0].type === `text` && (n === e.url || `mailto:` + n === e.url) && /^[a-z][+\-.a-z]+:/i.test(e.url) && !/[\0- <>\u007F]/.test(e.url))
}
Fp.peek = Ip;
function Fp(e, t, n, r) {
    let i = ep(n)
      , a = i === `"` ? `Quote` : `Apostrophe`
      , o = n.createTracker(r);
    if (Pp(e, n)) {
        let t = n.stack;
        n.stack = t.filter(function(e) {
            return e !== `phrasing`
        });
        let r = n.enter(`autolink`)
          , i = o.move(`<`);
        return i += o.move(n.containerPhrasing(e, {
            before: i,
            after: `>`,
            ...o.current()
        })),
        i += o.move(`>`),
        r(),
        n.stack = t,
        i
    }
    let s = n.enter(`link`)
      , c = n.enter(`label`)
      , l = o.move(`[`)
      , u = n.containerPhrasing(e, {
        before: l,
        after: `](`,
        ...o.current()
    });
    l += o.move(u),
    c(),
    l += o.move(`](`);
    let d = /[\0- \u007F]/.test(e.url)
      , f = r.before.charAt(r.before.length - 1)
      , p = e.title || void 0;
    if (!p && !d && (f === `
` || f === `\r`)) {
        let e = 0;
        for (; e < u.length && u.charCodeAt(e) !== 93; )
            e += u.charCodeAt(e) === 92 ? 2 : 1;
        u.charCodeAt(e + 1) === 58 && (p = ``)
    }
    return !e.url && typeof p == `string` || d ? (c = n.enter(`destinationLiteral`),
    l += o.move(`<`),
    l += o.move(n.safe(e.url, {
        before: l,
        after: `>`,
        ...o.current()
    })),
    l += o.move(`>`)) : (c = n.enter(`destinationRaw`),
    l += o.move(n.safe(e.url, {
        before: l,
        after: typeof p == `string` ? ` ` : `)`,
        ...o.current()
    }))),
    c(),
    typeof p == `string` && (c = n.enter(`title${a}`),
    l += o.move(` ` + i),
    l += o.move(n.safe(p, {
        before: l,
        after: i,
        ...o.current()
    })),
    l += o.move(i),
    c()),
    l += o.move(`)`),
    s(),
    l
}
function Ip(e, t, n) {
    return Pp(e, n) ? `<` : `[`
}
Lp.peek = Rp;
function Lp(e, t, n, r) {
    let i = e.referenceType
      , a = n.enter(`linkReference`)
      , o = n.enter(`label`)
      , s = n.createTracker(r)
      , c = s.move(`[`)
      , l = n.containerPhrasing(e, {
        before: c,
        after: `]`,
        ...s.current()
    });
    c += s.move(l + `][`),
    o();
    let u = n.stack;
    n.stack = u.filter(function(e) {
        return e !== `phrasing`
    }),
    o = n.enter(`reference`);
    let d = n.safe(n.associationId(e), {
        before: c,
        after: `]`,
        ...s.current()
    });
    return o(),
    n.stack = u,
    a(),
    i === `full` || !l || l !== d ? c += s.move(d + `]`) : i === `shortcut` ? c = c.slice(0, -1) : c += s.move(`]`),
    c
}
function Rp() {
    return `[`
}
function zp(e) {
    let t = e.options.bullet || `*`;
    if (t !== `*` && t !== `+` && t !== `-`)
        throw Error("Cannot serialize items with `" + t + "` for `options.bullet`, expected `*`, `+`, or `-`");
    return t
}
function Bp(e) {
    let t = zp(e)
      , n = e.options.bulletOther;
    if (!n)
        return t === `*` ? `-` : `*`;
    if (n !== `*` && n !== `+` && n !== `-`)
        throw Error("Cannot serialize items with `" + n + "` for `options.bulletOther`, expected `*`, `+`, or `-`");
    if (n === t)
        throw Error("Expected `bullet` (`" + t + "`) and `bulletOther` (`" + n + "`) to be different");
    return n
}
function Vp(e) {
    let t = e.options.bulletOrdered || `.`;
    if (t !== `.` && t !== `)`)
        throw Error("Cannot serialize items with `" + t + "` for `options.bulletOrdered`, expected `.` or `)`");
    return t
}
function Hp(e) {
    let t = e.options.rule || `*`;
    if (t !== `*` && t !== `-` && t !== `_`)
        throw Error("Cannot serialize rules with `" + t + "` for `options.rule`, expected `*`, `-`, or `_`");
    return t
}
function Up(e, t, n, r) {
    let i = n.enter(`list`)
      , a = n.bulletCurrent
      , o = e.ordered ? Vp(n) : zp(n)
      , s = e.ordered ? o === `.` ? `)` : `.` : Bp(n)
      , c = t && n.bulletLastUsed ? o === n.bulletLastUsed : !1;
    if (!e.ordered) {
        let t = e.children ? e.children[0] : void 0;
        if ((o === `*` || o === `-`) && t && (!t.children || !t.children[0]) && n.stack[n.stack.length - 1] === `list` && n.stack[n.stack.length - 2] === `listItem` && n.stack[n.stack.length - 3] === `list` && n.stack[n.stack.length - 4] === `listItem` && n.indexStack[n.indexStack.length - 1] === 0 && n.indexStack[n.indexStack.length - 2] === 0 && n.indexStack[n.indexStack.length - 3] === 0 && (c = !0),
        Hp(n) === o && t) {
            let t = -1;
            for (; ++t < e.children.length; ) {
                let n = e.children[t];
                if (n && n.type === `listItem` && n.children && n.children[0] && n.children[0].type === `thematicBreak`) {
                    c = !0;
                    break
                }
            }
        }
    }
    c && (o = s),
    n.bulletCurrent = o;
    let l = n.containerFlow(e, r);
    return n.bulletLastUsed = o,
    n.bulletCurrent = a,
    i(),
    l
}
function Wp(e) {
    let t = e.options.listItemIndent || `one`;
    if (t !== `tab` && t !== `one` && t !== `mixed`)
        throw Error("Cannot serialize items with `" + t + "` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");
    return t
}
function Gp(e, t, n, r) {
    let i = Wp(n)
      , a = n.bulletCurrent || zp(n);
    t && t.type === `list` && t.ordered && (a = (typeof t.start == `number` && t.start > -1 ? t.start : 1) + (n.options.incrementListMarker === !1 ? 0 : t.children.indexOf(e)) + a);
    let o = a.length + 1;
    (i === `tab` || i === `mixed` && (t && t.type === `list` && t.spread || e.spread)) && (o = Math.ceil(o / 4) * 4);
    let s = n.createTracker(r);
    s.move(a + ` `.repeat(o - a.length)),
    s.shift(o);
    let c = n.enter(`listItem`)
      , l = n.indentLines(n.containerFlow(e, s.current()), u);
    return c(),
    l;
    function u(e, t, n) {
        return t ? (n ? `` : ` `.repeat(o)) + e : (n ? a : a + ` `.repeat(o - a.length)) + e
    }
}
function Kp(e, t, n, r) {
    let i = n.enter(`paragraph`)
      , a = n.enter(`phrasing`)
      , o = n.containerPhrasing(e, r);
    return a(),
    i(),
    o
}
function qp(e, t, n, r) {
    if (!e.children.some(function(e) {
        return Uf(e)
    }))
        return n.containerFlow(e, r);
    let i = n.enter(`phrasing`)
      , a = n.containerPhrasing(e, r);
    return i(),
    a
}
function Jp(e) {
    let t = e.options.strong || `*`;
    if (t !== `*` && t !== `_`)
        throw Error("Cannot serialize strong with `" + t + "` for `options.strong`, expected `*`, or `_`");
    return t
}
Yp.attention = Xp,
Yp.peek = Zp;
function Yp(e, t, n, r) {
    let i = n.enter(`phrasing`)
      , a = gp(e, Xp, n, n.createTracker(r))
      , o = a ? bp([a], r.before, r.after) : ``;
    return i(),
    o
}
function Xp(e, t) {
    return {
        construct: `strong`,
        markers: Jp(t) === `*` ? [`*`, `_`] : [`_`, `*`],
        sizes: [2]
    }
}
function Zp(e, t, n) {
    return n.options.strong || `*`
}
function Qp(e, t, n, r) {
    let i = t ? t.children : []
      , a = n.indexStack[n.indexStack.length - 1];
    return n.safe(e.value, {
        ...r,
        afterNode: i[a + 1],
        beforeNode: i[a - 1]
    })
}
function $p(e) {
    let t = e.options.ruleRepetition || 3;
    if (t < 3)
        throw Error("Cannot serialize rules with repetition `" + t + "` for `options.ruleRepetition`, expected `3` or more");
    return t
}
function em(e, t, n) {
    let r = (Hp(n) + (n.options.ruleSpaces ? ` ` : ``)).repeat($p(n));
    return n.options.ruleSpaces ? r.slice(0, -1) : r
}
var tm = {
    blockquote: Wf,
    break: Jf,
    code: Qf,
    definition: tp,
    emphasis: xp,
    hardBreak: Jf,
    heading: Tp,
    html: Ep,
    image: Op,
    imageReference: Ap,
    inlineCode: Mp,
    link: Fp,
    linkReference: Lp,
    list: Up,
    listItem: Gp,
    paragraph: Kp,
    root: qp,
    strong: Yp,
    text: Qp,
    thematicBreak: em
};
function nm() {
    return {
        enter: {
            table: rm,
            tableData: sm,
            tableHeader: sm,
            tableRow: am
        },
        exit: {
            codeText: cm,
            table: im,
            tableData: om,
            tableHeader: om,
            tableRow: om
        }
    }
}
function rm(e) {
    let t = e._align;
    this.enter({
        type: `table`,
        align: t.map(function(e) {
            return e === `none` ? null : e
        }),
        children: [],
        position: void 0
    }, e),
    this.data.inTable = !0
}
function im(e) {
    this.exit(e),
    this.data.inTable = void 0
}
function am(e) {
    this.enter({
        type: `tableRow`,
        children: [],
        position: void 0
    }, e)
}
function om(e) {
    this.exit(e)
}
function sm(e) {
    this.enter({
        type: `tableCell`,
        children: [],
        position: void 0
    }, e)
}
function cm(e) {
    let t = this.resume();
    this.data.inTable && (t = t.replace(/\\([\\|])/g, lm));
    let n = this.stack[this.stack.length - 1];
    n.type,
    n.value = t,
    this.exit(e)
}
function lm(e, t) {
    return t === `|` ? t : e
}
function um(e) {
    let {tableCellPadding: t, tablePipeAlign: n, stringLength: r} = e || {}
      , i = t ? ` ` : `|`;
    return {
        handlers: {
            inlineCode: d,
            table: a,
            tableCell: s,
            tableRow: o
        },
        join: [dm],
        unsafe: [{
            character: `\r`,
            inConstruct: `tableCell`
        }, {
            character: `
`,
            inConstruct: `tableCell`
        }, {
            atBreak: !0,
            character: `|`,
            after: `[	 :-]`
        }, {
            character: `|`,
            inConstruct: `tableCell`
        }, {
            atBreak: !0,
            character: `:`,
            after: `-`
        }, {
            atBreak: !0,
            character: `-`,
            after: `[:|-]`
        }]
    };
    function a(e, t, n, r) {
        let i = l(e, n, r)
          , a = i[0];
        if (a) {
            let t = e.align ? e.align.length : 0
              , n = -1;
            if (!t)
                for (; ++n < i.length; )
                    i[n].length > t && (t = i[n].length);
            for (; a.length < t; )
                a.push(``)
        }
        return c(i, e.align)
    }
    function o(e, t, n, r) {
        let i = c([u(e, n, r)]);
        return i.slice(0, i.indexOf(`
`))
    }
    function s(e, t, n, r) {
        let a = n.enter(`tableCell`)
          , o = n.enter(`phrasing`)
          , s = n.containerPhrasing(e, {
            ...r,
            before: i,
            after: i
        });
        return o(),
        a(),
        s
    }
    function c(e, i) {
        return Bf(e, {
            align: i,
            alignDelimiters: n,
            fillRows: !1,
            padding: t,
            stringLength: r
        })
    }
    function l(e, t, n) {
        let {children: r} = e
          , i = -1
          , a = []
          , o = t.enter(`table`);
        for (; ++i < r.length; )
            a[i] = u(r[i], t, n);
        return o(),
        a
    }
    function u(e, t, n) {
        let {children: r} = e
          , i = -1
          , a = []
          , o = t.enter(`tableRow`);
        for (; ++i < r.length; )
            a[i] = s(r[i], e, t, n);
        return o(),
        a
    }
    function d(e, t, n) {
        let r = tm.inlineCode(e, t, n);
        if (!n.stack.includes(`tableCell`))
            return r;
        let i = []
          , a = 0
          , o = r.indexOf(`|`);
        for (; o !== -1; ) {
            let e = o;
            for (; e > a && r.charCodeAt(e - 1) === 92; )
                e--;
            i.push(r.slice(a, o)),
            (o - e) % 2 == 0 && i.push(`\\`),
            a = o,
            o = r.indexOf(`|`, o + 1)
        }
        return i.push(r.slice(a)),
        i.join(``)
    }
}
function dm(e, t, n, r) {
    if (e.type === `table` && n.type === `listItem` && n.spread === !1 && (t.type === `definition` || t.type === `heading` && fm(t, r) || t.type === `paragraph` || t.type === `table`))
        return 1
}
function fm(e, t) {
    let n = !1;
    return Vu(e, function(e) {
        if (e.type === `break` || `value` in e && /\r?\n|\r/.test(e.value))
            return n = !0,
            !1
    }),
    !!((!e.depth || e.depth < 3) && zo(e) && (t.options.setext || n))
}
function pm() {
    return {
        exit: {
            taskListCheckValueChecked: hm,
            taskListCheckValueUnchecked: hm,
            paragraph: gm
        }
    }
}
function mm() {
    return {
        handlers: {
            paragraph: _m
        },
        join: [vm]
    }
}
function hm(e) {
    let t = this.stack[this.stack.length - 2];
    t.type,
    t.checked = e.type === `taskListCheckValueChecked`
}
function gm(e) {
    let t = this.stack[this.stack.length - 2];
    if (t && t.type === `listItem` && typeof t.checked == `boolean`) {
        let e = this.stack[this.stack.length - 1];
        e.type;
        let n = e.children[0];
        if (n && n.type === `text`) {
            let r = t.children, i = -1, a;
            for (; ++i < r.length; ) {
                let e = r[i];
                if (e.type === `paragraph`) {
                    a = e;
                    break
                }
            }
            a === e && (n.value = n.value.slice(1),
            n.value.length === 0 ? e.children.shift() : e.position && n.position && typeof n.position.start.offset == `number` && (n.position.start.column++,
            n.position.start.offset++,
            e.position.start = {
                ...n.position.start
            }))
        }
    }
    this.exit(e)
}
function _m(e, t, n, r) {
    if (!t || t.type !== `listItem` || ym(t) !== e)
        return tm.paragraph(e, t, n, r);
    let i = `[` + (t.checked ? `x` : ` `) + `] `
      , a = n.createTracker(r);
    return a.move(i),
    i + tm.paragraph(e.children.length > 0 ? e : {
        type: `paragraph`,
        children: [{
            type: `text`,
            value: ` `
        }]
    }, t, n, {
        ...r,
        ...a.current()
    })
}
function vm(e, t, n) {
    if (e.type !== `definition` || n.type !== `listItem`)
        return;
    let r = ym(n);
    if (r && n.children.indexOf(e) < n.children.indexOf(r))
        return 0
}
function ym(e) {
    if (typeof e.checked == `boolean`)
        for (let t of e.children) {
            if (t.type === `paragraph`)
                return t;
            if (t.type !== `definition`)
                return
        }
}
function bm() {
    return [ef(), Df(), Mf(), nm(), pm()]
}
function xm(e) {
    return {
        extensions: [tf(), Of(e), Nf(), um(e), mm()]
    }
}
var Sm = {
    tokenize: Im,
    partial: !0
}
  , Cm = {
    tokenize: Lm,
    partial: !0
}
  , wm = {
    tokenize: Rm,
    partial: !0
}
  , Tm = {
    tokenize: zm,
    partial: !0
}
  , Em = {
    tokenize: Bm,
    partial: !0
}
  , Dm = {
    name: `wwwAutolink`,
    tokenize: Pm,
    previous: Vm
}
  , Om = {
    name: `protocolAutolink`,
    tokenize: Fm,
    previous: Hm
}
  , km = {
    name: `emailAutolink`,
    tokenize: Nm,
    previous: Um
}
  , Am = {};
function jm() {
    return {
        text: Am
    }
}
for (var Mm = 48; Mm < 123; )
    Am[Mm] = km,
    Mm++,
    Mm === 58 ? Mm = 65 : Mm === 91 && (Mm = 97);
Am[43] = km,
Am[45] = km,
Am[46] = km,
Am[95] = km,
Am[72] = [km, Om],
Am[104] = [km, Om],
Am[87] = [km, Dm],
Am[119] = [km, Dm];
function Nm(e, t, n) {
    let r = this, i, a;
    return o;
    function o(t) {
        return !Wm(t) || !Um.call(r, r.previous) || Gm(r.events) ? n(t) : (e.enter(`literalAutolink`),
        e.enter(`literalAutolinkEmail`),
        s(t))
    }
    function s(t) {
        return Wm(t) ? (e.consume(t),
        s) : t === 64 ? (e.consume(t),
        c) : n(t)
    }
    function c(t) {
        return t === 46 ? e.check(Em, u, l)(t) : t === 45 || t === 95 || J(t) ? (a = !0,
        e.consume(t),
        c) : u(t)
    }
    function l(t) {
        return e.consume(t),
        i = !0,
        c
    }
    function u(o) {
        return a && i && q(r.previous) ? (e.exit(`literalAutolinkEmail`),
        e.exit(`literalAutolink`),
        t(o)) : n(o)
    }
}
function Pm(e, t, n) {
    let r = this;
    return i;
    function i(t) {
        return t !== 87 && t !== 119 || !Vm.call(r, r.previous) || Gm(r.events) ? n(t) : (e.enter(`literalAutolink`),
        e.enter(`literalAutolinkWww`),
        e.check(Sm, e.attempt(Cm, e.attempt(wm, a), n), n)(t))
    }
    function a(n) {
        return e.exit(`literalAutolinkWww`),
        e.exit(`literalAutolink`),
        t(n)
    }
}
function Fm(e, t, n) {
    let r = this
      , i = ``
      , a = !1;
    return o;
    function o(t) {
        return (t === 72 || t === 104) && Hm.call(r, r.previous) && !Gm(r.events) ? (e.enter(`literalAutolink`),
        e.enter(`literalAutolinkHttp`),
        i += String.fromCodePoint(t),
        e.consume(t),
        s) : n(t)
    }
    function s(t) {
        if (q(t) && i.length < 5)
            return i += String.fromCodePoint(t),
            e.consume(t),
            s;
        if (t === 58) {
            let n = i.toLowerCase();
            if (n === `http` || n === `https`)
                return e.consume(t),
                c
        }
        return n(t)
    }
    function c(t) {
        return t === 47 ? (e.consume(t),
        a ? l : (a = !0,
        c)) : n(t)
    }
    function l(t) {
        return t === null || es(t) || X(t) || as(t) || is(t) ? n(t) : e.attempt(Cm, e.attempt(wm, u), n)(t)
    }
    function u(n) {
        return e.exit(`literalAutolinkHttp`),
        e.exit(`literalAutolink`),
        t(n)
    }
}
function Im(e, t, n) {
    let r = 0;
    return i;
    function i(t) {
        return (t === 87 || t === 119) && r < 3 ? (r++,
        e.consume(t),
        i) : t === 46 && r === 3 ? (e.consume(t),
        a) : n(t)
    }
    function a(e) {
        return e === null ? n(e) : t(e)
    }
}
function Lm(e, t, n) {
    let r, i, a;
    return o;
    function o(t) {
        return t === 46 || t === 95 ? e.check(Tm, c, s)(t) : t === null || X(t) || as(t) || t !== 45 && is(t) ? c(t) : (a = !0,
        e.consume(t),
        o)
    }
    function s(t) {
        return t === 95 ? r = !0 : (i = r,
        r = void 0),
        e.consume(t),
        o
    }
    function c(e) {
        return i || r || !a ? n(e) : t(e)
    }
}
function Rm(e, t) {
    let n = 0
      , r = 0;
    return i;
    function i(o) {
        return o === 40 ? (n++,
        e.consume(o),
        i) : o === 41 && r < n ? a(o) : o === 33 || o === 34 || o === 38 || o === 39 || o === 41 || o === 42 || o === 44 || o === 46 || o === 58 || o === 59 || o === 60 || o === 63 || o === 93 || o === 95 || o === 126 ? e.check(Tm, t, a)(o) : o === null || X(o) || as(o) ? t(o) : (e.consume(o),
        i)
    }
    function a(t) {
        return t === 41 && r++,
        e.consume(t),
        i
    }
}
function zm(e, t, n) {
    return r;
    function r(o) {
        return o === 33 || o === 34 || o === 39 || o === 41 || o === 42 || o === 44 || o === 46 || o === 58 || o === 59 || o === 63 || o === 95 || o === 126 ? (e.consume(o),
        r) : o === 38 ? (e.consume(o),
        a) : o === 93 ? (e.consume(o),
        i) : o === 60 || o === null || X(o) || as(o) ? t(o) : n(o)
    }
    function i(e) {
        return e === null || e === 40 || e === 91 || X(e) || as(e) ? t(e) : r(e)
    }
    function a(e) {
        return q(e) ? o(e) : n(e)
    }
    function o(t) {
        return t === 59 ? (e.consume(t),
        r) : q(t) ? (e.consume(t),
        o) : n(t)
    }
}
function Bm(e, t, n) {
    return r;
    function r(t) {
        return e.consume(t),
        i
    }
    function i(e) {
        return J(e) ? n(e) : t(e)
    }
}
function Vm(e) {
    return e === null || e === 40 || e === 42 || e === 95 || e === 91 || e === 93 || e === 126 || X(e)
}
function Hm(e) {
    return !q(e)
}
function Um(e) {
    return !(e === 47 || Wm(e))
}
function Wm(e) {
    return e === 43 || e === 45 || e === 46 || e === 95 || J(e)
}
function Gm(e) {
    let t = e.length
      , n = !1;
    for (; t--; ) {
        let r = e[t][1];
        if ((r.type === `labelLink` || r.type === `labelImage`) && !r._balanced) {
            n = !0;
            break
        }
        if (r._gfmAutolinkLiteralWalkedInto) {
            n = !1;
            break
        }
    }
    return e.length > 0 && !n && (e[e.length - 1][1]._gfmAutolinkLiteralWalkedInto = !0),
    n
}
var Km = {
    tokenize: eh,
    partial: !0
};
function qm() {
    return {
        document: {
            91: {
                name: `gfmFootnoteDefinition`,
                tokenize: Zm,
                continuation: {
                    tokenize: Qm
                },
                exit: $m
            }
        },
        text: {
            91: {
                name: `gfmFootnoteCall`,
                tokenize: Xm
            },
            93: {
                name: `gfmPotentialFootnoteCall`,
                add: `after`,
                tokenize: Jm,
                resolveTo: Ym
            }
        }
    }
}
function Jm(e, t, n) {
    let r = this, i = r.events.length, a = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []), o;
    for (; i--; ) {
        let e = r.events[i][1];
        if (e.type === `labelImage`) {
            o = e;
            break
        }
        if (e.type === `gfmFootnoteCall` || e.type === `labelLink` || e.type === `label` || e.type === `image` || e.type === `link`)
            break
    }
    return s;
    function s(i) {
        if (!o || !o._balanced)
            return n(i);
        let s = Qo(r.sliceSerialize({
            start: o.end,
            end: r.now()
        }));
        return s.codePointAt(0) !== 94 || !a.includes(s.slice(1)) ? n(i) : (e.enter(`gfmFootnoteCallLabelMarker`),
        e.consume(i),
        e.exit(`gfmFootnoteCallLabelMarker`),
        t(i))
    }
}
function Ym(e, t) {
    let n = e.length;
    for (; n--; )
        if (e[n][1].type === `labelImage` && e[n][0] === `enter`) {
            e[n][1];
            break
        }
    e[n + 1][1].type = `data`,
    e[n + 3][1].type = `gfmFootnoteCallLabelMarker`;
    let r = {
        type: `gfmFootnoteCall`,
        start: Object.assign({}, e[n + 3][1].start),
        end: Object.assign({}, e[e.length - 1][1].end)
    }
      , i = {
        type: `gfmFootnoteCallMarker`,
        start: Object.assign({}, e[n + 3][1].end),
        end: Object.assign({}, e[n + 3][1].end)
    };
    i.end.column++,
    i.end.offset++,
    i.end._bufferIndex++;
    let a = {
        type: `gfmFootnoteCallString`,
        start: Object.assign({}, i.end),
        end: Object.assign({}, e[e.length - 1][1].start)
    }
      , o = {
        type: `chunkString`,
        contentType: `string`,
        start: Object.assign({}, a.start),
        end: Object.assign({}, a.end)
    }
      , s = [e[n + 1], e[n + 2], [`enter`, r, t], e[n + 3], e[n + 4], [`enter`, i, t], [`exit`, i, t], [`enter`, a, t], [`enter`, o, t], [`exit`, o, t], [`exit`, a, t], e[e.length - 2], e[e.length - 1], [`exit`, r, t]];
    return e.splice(n, e.length - n + 1, ...s),
    e
}
function Xm(e, t, n) {
    let r = this, i = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []), a = 0, o;
    return s;
    function s(t) {
        return e.enter(`gfmFootnoteCall`),
        e.enter(`gfmFootnoteCallLabelMarker`),
        e.consume(t),
        e.exit(`gfmFootnoteCallLabelMarker`),
        c
    }
    function c(t) {
        return t === 94 ? (e.enter(`gfmFootnoteCallMarker`),
        e.consume(t),
        e.exit(`gfmFootnoteCallMarker`),
        e.enter(`gfmFootnoteCallString`),
        e.enter(`chunkString`).contentType = `string`,
        l) : n(t)
    }
    function l(s) {
        if (a > 999 || s === 93 && !o || s === null || s === 91 || X(s))
            return n(s);
        if (s === 93) {
            e.exit(`chunkString`);
            let a = e.exit(`gfmFootnoteCallString`);
            return i.includes(Qo(r.sliceSerialize(a))) ? (e.enter(`gfmFootnoteCallLabelMarker`),
            e.consume(s),
            e.exit(`gfmFootnoteCallLabelMarker`),
            e.exit(`gfmFootnoteCall`),
            t) : n(s)
        }
        return X(s) || (o = !0),
        a++,
        e.consume(s),
        s === 92 ? u : l
    }
    function u(t) {
        return t === 91 || t === 92 || t === 93 ? (e.consume(t),
        a++,
        l) : l(t)
    }
}
function Zm(e, t, n) {
    let r = this, i = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []), a, o = 0, s;
    return c;
    function c(t) {
        return e.enter(`gfmFootnoteDefinition`)._container = !0,
        e.enter(`gfmFootnoteDefinitionLabel`),
        e.enter(`gfmFootnoteDefinitionLabelMarker`),
        e.consume(t),
        e.exit(`gfmFootnoteDefinitionLabelMarker`),
        l
    }
    function l(t) {
        return t === 94 ? (e.enter(`gfmFootnoteDefinitionMarker`),
        e.consume(t),
        e.exit(`gfmFootnoteDefinitionMarker`),
        e.enter(`gfmFootnoteDefinitionLabelString`),
        e.enter(`chunkString`).contentType = `string`,
        u) : n(t)
    }
    function u(t) {
        if (o > 999 || t === 93 && !s || t === null || t === 91 || X(t))
            return n(t);
        if (t === 93) {
            e.exit(`chunkString`);
            let n = e.exit(`gfmFootnoteDefinitionLabelString`);
            return a = Qo(r.sliceSerialize(n)),
            e.enter(`gfmFootnoteDefinitionLabelMarker`),
            e.consume(t),
            e.exit(`gfmFootnoteDefinitionLabelMarker`),
            e.exit(`gfmFootnoteDefinitionLabel`),
            f
        }
        return X(t) || (s = !0),
        o++,
        e.consume(t),
        t === 92 ? d : u
    }
    function d(t) {
        return t === 91 || t === 92 || t === 93 ? (e.consume(t),
        o++,
        u) : u(t)
    }
    function f(t) {
        return t === 58 ? (e.enter(`definitionMarker`),
        e.consume(t),
        e.exit(`definitionMarker`),
        i.includes(a) || i.push(a),
        Q(e, p, `gfmFootnoteDefinitionWhitespace`)) : n(t)
    }
    function p(e) {
        return t(e)
    }
}
function Qm(e, t, n) {
    return e.check(Ts, t, e.attempt(Km, t, n))
}
function $m(e) {
    e.exit(`gfmFootnoteDefinition`)
}
function eh(e, t, n) {
    let r = this;
    return Q(e, i, `gfmFootnoteDefinitionIndent`, 5);
    function i(e) {
        let i = r.events[r.events.length - 1];
        return i && i[1].type === `gfmFootnoteDefinitionIndent` && i[2].sliceSerialize(i[1], !0).length === 4 ? t(e) : n(e)
    }
}
function th(e) {
    let t = (e || {}).singleTilde
      , n = {
        name: `strikethrough`,
        tokenize: i,
        resolveAll: r
    };
    return t ??= !0,
    {
        text: {
            126: n
        },
        insideSpan: {
            null: [n]
        },
        attentionMarkers: {
            null: [126]
        }
    };
    function r(e, t) {
        let n = -1;
        for (; ++n < e.length; )
            if (e[n][0] === `enter` && e[n][1].type === `strikethroughSequenceTemporary` && e[n][1]._close) {
                let r = n;
                for (; r--; )
                    if (e[r][0] === `exit` && e[r][1].type === `strikethroughSequenceTemporary` && e[r][1]._open && e[n][1].end.offset - e[n][1].start.offset === e[r][1].end.offset - e[r][1].start.offset) {
                        e[n][1].type = `strikethroughSequence`,
                        e[r][1].type = `strikethroughSequence`;
                        let i = {
                            type: `strikethrough`,
                            start: Object.assign({}, e[r][1].start),
                            end: Object.assign({}, e[n][1].end)
                        }
                          , a = {
                            type: `strikethroughText`,
                            start: Object.assign({}, e[r][1].end),
                            end: Object.assign({}, e[n][1].start)
                        }
                          , o = [[`enter`, i, t], [`enter`, e[r][1], t], [`exit`, e[r][1], t], [`enter`, a, t]]
                          , s = t.parser.constructs.insideSpan.null;
                        s && Go(o, o.length, 0, vs(s, e.slice(r + 1, n), t)),
                        Go(o, o.length, 0, [[`exit`, a, t], [`enter`, e[n][1], t], [`exit`, e[n][1], t], [`exit`, i, t]]),
                        Go(e, r - 1, n - r + 3, o),
                        n = r + o.length - 2;
                        break
                    }
            }
        for (n = -1; ++n < e.length; )
            e[n][1].type === `strikethroughSequenceTemporary` && (e[n][1].type = `data`);
        return e
    }
    function i(e, n, r) {
        let i = this.previous
          , a = this.events
          , o = 0;
        return s;
        function s(t) {
            return i === 126 && a[a.length - 1][1].type !== `characterEscape` ? r(t) : (e.enter(`strikethroughSequenceTemporary`),
            c(t))
        }
        function c(a) {
            let s = _s(i);
            if (a === 126)
                return o > 1 ? r(a) : (e.consume(a),
                o++,
                c);
            if (o < 2 && !t)
                return r(a);
            let l = e.exit(`strikethroughSequenceTemporary`)
              , u = _s(a);
            return l._open = !u || u === 2 && !!s,
            l._close = !s || s === 2 && !!u,
            n(a)
        }
    }
}
var nh = class {
    constructor() {
        this.map = [],
        this.index = new Map
    }
    add(e, t, n) {
        rh(this, e, t, n)
    }
    consume(e) {
        if (this.map.sort(function(e, t) {
            return e[0] - t[0]
        }),
        this.map.length === 0)
            return;
        let t = this.map.length
          , n = [];
        for (; t > 0; )
            --t,
            n.push(e.slice(this.map[t][0] + this.map[t][1]), this.map[t][2]),
            e.length = this.map[t][0];
        n.push(e.slice()),
        e.length = 0;
        let r = n.pop();
        for (; r; ) {
            for (let t of r)
                e.push(t);
            r = n.pop()
        }
        this.map.length = 0,
        this.index.clear()
    }
}
;
function rh(e, t, n, r) {
    if (n === 0 && r.length === 0)
        return;
    let i = e.index.get(t);
    if (i) {
        i[1] += n,
        i[2].push(...r);
        return
    }
    let a = [t, n, r];
    e.map.push(a),
    e.index.set(t, a)
}
function ih(e, t) {
    let n = !1
      , r = [];
    for (; t < e.length; ) {
        let i = e[t];
        if (n) {
            if (i[0] === `enter`)
                i[1].type === `tableContent` && r.push(e[t + 1][1].type === `tableDelimiterMarker` ? `left` : `none`);
            else if (i[1].type === `tableContent`) {
                if (e[t - 1][1].type === `tableDelimiterMarker`) {
                    let e = r.length - 1;
                    r[e] = r[e] === `left` ? `center` : `right`
                }
            } else if (i[1].type === `tableDelimiterRow`)
                break
        } else
            i[0] === `enter` && i[1].type === `tableDelimiterRow` && (n = !0);
        t += 1
    }
    return r
}
function ah() {
    return {
        flow: {
            null: {
                name: `table`,
                tokenize: oh,
                resolveAll: sh
            }
        }
    }
}
function oh(e, t, n) {
    let r = this, i = 0, a = 0, o;
    return s;
    function s(e) {
        let t = r.events.length - 1;
        for (; t > -1; ) {
            let {type: e} = r.events[t][1];
            if (e === `lineEnding` || e === `linePrefix`)
                t--;
            else
                break
        }
        let i = t > -1 ? r.events[t][1].type : null
          , a = i === `tableHead` || i === `tableRow` ? S : c;
        return a === S && r.parser.lazy[r.now().line] ? n(e) : a(e)
    }
    function c(t) {
        return e.enter(`tableHead`),
        e.enter(`tableRow`),
        l(t)
    }
    function l(e) {
        return e === 124 ? u(e) : (o = !0,
        a += 1,
        u(e))
    }
    function u(t) {
        return t === null ? n(t) : Y(t) ? a > 1 ? (a = 0,
        r.interrupt = !0,
        e.exit(`tableRow`),
        e.enter(`lineEnding`),
        e.consume(t),
        e.exit(`lineEnding`),
        p) : n(t) : Z(t) ? Q(e, u, `whitespace`)(t) : (a += 1,
        o && (o = !1,
        i += 1),
        t === 124 ? (e.enter(`tableCellDivider`),
        e.consume(t),
        e.exit(`tableCellDivider`),
        o = !0,
        u) : (e.enter(`data`),
        d(t)))
    }
    function d(t) {
        return t === null || t === 124 || X(t) ? (e.exit(`data`),
        u(t)) : (e.consume(t),
        t === 92 ? f : d)
    }
    function f(t) {
        return t === 92 || t === 124 ? (e.consume(t),
        d) : d(t)
    }
    function p(t) {
        return r.interrupt = !1,
        r.parser.lazy[r.now().line] ? n(t) : (e.enter(`tableDelimiterRow`),
        o = !1,
        Z(t) ? Q(e, m, `linePrefix`, r.parser.constructs.disable.null.includes(`codeIndented`) ? void 0 : 4)(t) : m(t))
    }
    function m(t) {
        return t === 45 || t === 58 ? g(t) : t === 124 ? (o = !0,
        e.enter(`tableCellDivider`),
        e.consume(t),
        e.exit(`tableCellDivider`),
        h) : x(t)
    }
    function h(t) {
        return Z(t) ? Q(e, g, `whitespace`)(t) : g(t)
    }
    function g(t) {
        return t === 58 ? (a += 1,
        o = !0,
        e.enter(`tableDelimiterMarker`),
        e.consume(t),
        e.exit(`tableDelimiterMarker`),
        _) : t === 45 ? (a += 1,
        _(t)) : t === null || Y(t) ? b(t) : x(t)
    }
    function _(t) {
        return t === 45 ? (e.enter(`tableDelimiterFiller`),
        v(t)) : x(t)
    }
    function v(t) {
        return t === 45 ? (e.consume(t),
        v) : t === 58 ? (o = !0,
        e.exit(`tableDelimiterFiller`),
        e.enter(`tableDelimiterMarker`),
        e.consume(t),
        e.exit(`tableDelimiterMarker`),
        y) : (e.exit(`tableDelimiterFiller`),
        y(t))
    }
    function y(t) {
        return Z(t) ? Q(e, b, `whitespace`)(t) : b(t)
    }
    function b(n) {
        return n === 124 ? m(n) : n === null || Y(n) ? !o || i !== a ? x(n) : (e.exit(`tableDelimiterRow`),
        e.exit(`tableHead`),
        t(n)) : x(n)
    }
    function x(e) {
        return n(e)
    }
    function S(t) {
        return e.enter(`tableRow`),
        C(t)
    }
    function C(n) {
        return n === 124 ? (e.enter(`tableCellDivider`),
        e.consume(n),
        e.exit(`tableCellDivider`),
        C) : n === null || Y(n) ? (e.exit(`tableRow`),
        t(n)) : Z(n) ? Q(e, C, `whitespace`)(n) : (e.enter(`data`),
        w(n))
    }
    function w(t) {
        return t === null || t === 124 || X(t) ? (e.exit(`data`),
        C(t)) : (e.consume(t),
        t === 92 ? T : w)
    }
    function T(t) {
        return t === 92 || t === 124 ? (e.consume(t),
        w) : w(t)
    }
}
function sh(e, t) {
    let n = -1, r = !0, i = 0, a = [0, 0, 0, 0], o = [0, 0, 0, 0], s = !1, c = 0, l, u, d, f = new nh;
    for (; ++n < e.length; ) {
        let p = e[n]
          , m = p[1];
        p[0] === `enter` ? m.type === `tableHead` ? (s = !1,
        c !== 0 && (lh(f, t, c, l, u),
        u = void 0,
        c = 0),
        l = {
            type: `table`,
            start: Object.assign({}, m.start),
            end: Object.assign({}, m.end)
        },
        f.add(n, 0, [[`enter`, l, t]])) : m.type === `tableRow` || m.type === `tableDelimiterRow` ? (r = !0,
        d = void 0,
        a = [0, 0, 0, 0],
        o = [0, n + 1, 0, 0],
        s && (s = !1,
        u = {
            type: `tableBody`,
            start: Object.assign({}, m.start),
            end: Object.assign({}, m.end)
        },
        f.add(n, 0, [[`enter`, u, t]])),
        i = m.type === `tableDelimiterRow` ? 2 : u ? 3 : 1) : i && (m.type === `data` || m.type === `tableDelimiterMarker` || m.type === `tableDelimiterFiller`) ? (r = !1,
        o[2] === 0 && (a[1] !== 0 && (o[0] = o[1],
        d = ch(f, t, a, i, void 0, d),
        a = [0, 0, 0, 0]),
        o[2] = n)) : m.type === `tableCellDivider` && (r ? r = !1 : (a[1] !== 0 && (o[0] = o[1],
        d = ch(f, t, a, i, void 0, d)),
        a = o,
        o = [a[1], n, 0, 0])) : m.type === `tableHead` ? (s = !0,
        c = n) : m.type === `tableRow` || m.type === `tableDelimiterRow` ? (c = n,
        a[1] === 0 ? o[1] !== 0 && (d = ch(f, t, o, i, n, d)) : (o[0] = o[1],
        d = ch(f, t, a, i, n, d)),
        i = 0) : i && (m.type === `data` || m.type === `tableDelimiterMarker` || m.type === `tableDelimiterFiller`) && (o[3] = n)
    }
    for (c !== 0 && lh(f, t, c, l, u),
    f.consume(t.events),
    n = -1; ++n < t.events.length; ) {
        let e = t.events[n];
        e[0] === `enter` && e[1].type === `table` && (e[1]._align = ih(t.events, n))
    }
    return e
}
function ch(e, t, n, r, i, a) {
    let o = r === 1 ? `tableHeader` : r === 2 ? `tableDelimiter` : `tableData`;
    n[0] !== 0 && (a.end = Object.assign({}, uh(t.events, n[0])),
    e.add(n[0], 0, [[`exit`, a, t]]));
    let s = uh(t.events, n[1]);
    if (a = {
        type: o,
        start: Object.assign({}, s),
        end: Object.assign({}, s)
    },
    e.add(n[1], 0, [[`enter`, a, t]]),
    n[2] !== 0) {
        let i = uh(t.events, n[2])
          , a = uh(t.events, n[3])
          , o = {
            type: `tableContent`,
            start: Object.assign({}, i),
            end: Object.assign({}, a)
        };
        if (e.add(n[2], 0, [[`enter`, o, t]]),
        r !== 2) {
            let r = t.events[n[2]]
              , i = t.events[n[3]];
            if (r[1].end = Object.assign({}, i[1].end),
            r[1].type = `chunkText`,
            r[1].contentType = `text`,
            n[3] > n[2] + 1) {
                let t = n[2] + 1
                  , r = n[3] - n[2] - 1;
                e.add(t, r, [])
            }
        }
        e.add(n[3] + 1, 0, [[`exit`, o, t]])
    }
    return i !== void 0 && (a.end = Object.assign({}, uh(t.events, i)),
    e.add(i, 0, [[`exit`, a, t]]),
    a = void 0),
    a
}
function lh(e, t, n, r, i) {
    let a = []
      , o = uh(t.events, n);
    i && (i.end = Object.assign({}, o),
    a.push([`exit`, i, t])),
    r.end = Object.assign({}, o),
    a.push([`exit`, r, t]),
    e.add(n + 1, 0, a)
}
function uh(e, t) {
    let n = e[t]
      , r = n[0] === `enter` ? `start` : `end`;
    return n[1][r]
}
var dh = {
    name: `tasklistCheck`,
    tokenize: ph
};
function fh() {
    return {
        text: {
            91: dh
        }
    }
}
function ph(e, t, n) {
    let r = this;
    return i;
    function i(t) {
        return r.previous !== null || !r._gfmTasklistFirstContentOfListItem ? n(t) : (e.enter(`taskListCheck`),
        e.enter(`taskListCheckMarker`),
        e.consume(t),
        e.exit(`taskListCheckMarker`),
        a)
    }
    function a(t) {
        return X(t) ? (e.enter(`taskListCheckValueUnchecked`),
        e.consume(t),
        e.exit(`taskListCheckValueUnchecked`),
        o) : t === 88 || t === 120 ? (e.enter(`taskListCheckValueChecked`),
        e.consume(t),
        e.exit(`taskListCheckValueChecked`),
        o) : n(t)
    }
    function o(t) {
        return t === 93 ? (e.enter(`taskListCheckMarker`),
        e.consume(t),
        e.exit(`taskListCheckMarker`),
        e.exit(`taskListCheck`),
        s) : n(t)
    }
    function s(r) {
        return Y(r) ? t(r) : Z(r) ? e.check({
            tokenize: mh
        }, t, n)(r) : n(r)
    }
}
function mh(e, t, n) {
    return Q(e, r, `whitespace`);
    function r(e) {
        return e === null ? n(e) : t(e)
    }
}
function hh(e) {
    return Jo([jm(), qm(), th(e), ah(), fh()])
}
var gh = {};
function _h(e) {
    let t = this
      , n = e || gh
      , r = t.data()
      , i = r.micromarkExtensions ||= []
      , a = r.fromMarkdownExtensions ||= []
      , o = r.toMarkdownExtensions ||= [];
    i.push(hh(n)),
    a.push(bm()),
    o.push(xm(n))
}
function vh({children: e, lang: t}) {
    let[n,r] = (0,
    R.useState)(!1);
    return (0,
    z.jsxs)(`div`, {
        className: `my-3 overflow-hidden rounded-lg border bg-sidebar`,
        dir: `ltr`,
        children: [(0,
        z.jsxs)(`div`, {
            className: `flex items-center justify-between border-b px-3 py-1.5 text-xs text-muted-foreground`,
            children: [(0,
            z.jsx)(`span`, {
                children: t || `code`
            }), (0,
            z.jsxs)(`button`, {
                type: `button`,
                className: `flex items-center gap-1 rounded px-1.5 py-0.5 transition-app hover:text-foreground`,
                onClick: () => {
                    navigator.clipboard.writeText(e),
                    r(!0),
                    setTimeout( () => r(!1), 1500)
                }
                ,
                "aria-label": `نسخ الكود`,
                children: [n ? (0,
                z.jsx)(Te, {
                    width: 14,
                    height: 14
                }) : (0,
                z.jsx)(ge, {
                    width: 14,
                    height: 14
                }), n ? `تم النسخ` : `نسخ`]
            })]
        }), (0,
        z.jsx)(`pre`, {
            className: `!m-0 !border-0`,
            children: (0,
            z.jsx)(`code`, {
                children: e
            })
        })]
    })
}
function yh({text: e}) {
    return (0,
    z.jsx)(`div`, {
        className: `prose-chat`,
        children: (0,
        z.jsx)(Vd, {
            remarkPlugins: [_h],
            components: {
                a: ({href: e, children: t}) => {
                    let n = e && /^(https?:|mailto:)/i.test(e) ? e : void 0;
                    return (0,
                    z.jsx)(`a`, {
                        href: n,
                        target: `_blank`,
                        rel: `noopener noreferrer nofollow`,
                        children: t
                    })
                }
                ,
                img: () => null,
                code: ({className: e, children: t}) => {
                    let n = /language-(\w+)/.exec(e || ``)
                      , r = String(t).replace(/\n$/, ``);
                    return n || r.includes(`
`) ? (0,
                    z.jsx)(vh, {
                        lang: n?.[1] ?? ``,
                        children: r
                    }) : (0,
                    z.jsx)(`code`, {
                        children: t
                    })
                }
                ,
                pre: ({children: e}) => (0,
                z.jsx)(z.Fragment, {
                    children: e
                })
            },
            children: e
        })
    })
}
function bh({value: e, options: t, onChange: n, label: r}) {
    return (0,
    z.jsxs)(`fieldset`, {
        className: `space-y-2`,
        children: [(0,
        z.jsx)(`legend`, {
            className: `text-sm font-semibold`,
            children: r
        }), (0,
        z.jsx)(`div`, {
            className: `flex flex-wrap gap-1.5 rounded-lg bg-surface-2 p-1`,
            role: `radiogroup`,
            children: t.map(t => (0,
            z.jsx)(`button`, {
                type: `button`,
                role: `radio`,
                "aria-checked": e === t.v,
                onClick: () => n(t.v),
                className: `flex-1 rounded-md px-3 py-1.5 text-sm transition-app ${e === t.v ? `bg-primary text-primary-foreground` : `text-muted-foreground hover:text-foreground`}`,
                children: t.l
            }, t.v))
        })]
    })
}
function xh({open: e, onOpenChange: t, prefs: n, onPrefs: r, sync: i, onRetry: a, onExport: o, onClearAll: s}) {
    let[c,l] = (0,
    R.useState)([``, ``, ``])
      , u = (e, t) => r({
        ...n,
        [e]: t
    });
    return (0,
    z.jsx)(F, {
        open: e,
        onOpenChange: e => {
            e && l(Ki()),
            t(e)
        }
        ,
        children: (0,
        z.jsxs)(j, {
            className: `max-h-[90dvh] overflow-y-auto border bg-popover sm:max-w-lg`,
            dir: `rtl`,
            children: [(0,
            z.jsxs)(te, {
                className: `text-right`,
                children: [(0,
                z.jsx)(ne, {
                    children: `الإعدادات`
                }), (0,
                z.jsx)(T, {
                    role: `status`,
                    children: i === `local` ? `التفضيلات محفوظة في هذا المتصفح؛ سجّل الدخول لمزامنتها.` : i === `loading` ? `جارٍ تحميل تفضيلات حسابك…` : i === `saving` ? `جارٍ حفظ التفضيلات…` : i === `error` ? `تعذّرت المزامنة. لم يتم تأكيد حفظ التغييرات.` : `تفضيلاتك محفوظة في حسابك.`
                }), i === `error` && (0,
                z.jsx)(fe, {
                    variant: `outline`,
                    onClick: a,
                    children: `إعادة محاولة المزامنة`
                })]
            }), (0,
            z.jsxs)(He, {
                defaultValue: `look`,
                dir: `rtl`,
                children: [(0,
                z.jsxs)(Be, {
                    className: `grid w-full grid-cols-3 bg-surface-2`,
                    children: [(0,
                    z.jsx)(Ie, {
                        value: `look`,
                        children: `المظهر`
                    }), (0,
                    z.jsx)(Ie, {
                        value: `keys`,
                        children: `مفاتيح Gemini`
                    }), (0,
                    z.jsx)(Ie, {
                        value: `data`,
                        children: `البيانات`
                    })]
                }), (0,
                z.jsx)(Re, {
                    value: `look`,
                    className: `space-y-5 pt-4`,
                    children: (0,
                    z.jsxs)(`fieldset`, {
                        disabled: i === `loading`,
                        className: `space-y-5 disabled:opacity-50`,
                        children: [(0,
                        z.jsx)(bh, {
                            label: `السمة`,
                            value: n.theme,
                            onChange: e => u(`theme`, e),
                            options: [{
                                v: `dark`,
                                l: `داكن`
                            }, {
                                v: `light`,
                                l: `فاتح`
                            }, {
                                v: `system`,
                                l: `النظام`
                            }]
                        }), (0,
                        z.jsxs)(`fieldset`, {
                            className: `space-y-2`,
                            children: [(0,
                            z.jsx)(`legend`, {
                                className: `text-sm font-semibold`,
                                children: `لون التمييز`
                            }), (0,
                            z.jsx)(`div`, {
                                className: `flex gap-3`,
                                children: O.map(e => (0,
                                z.jsx)(`button`, {
                                    type: `button`,
                                    "aria-label": e.name,
                                    "aria-pressed": n.hue === e.hue,
                                    onClick: () => u(`hue`, e.hue),
                                    className: `h-9 w-9 rounded-full border-2 transition-app ${n.hue === e.hue ? `border-foreground` : `border-transparent`}`,
                                    style: {
                                        background: `oklch(0.75 0.13 ${e.hue})`
                                    }
                                }, e.hue))
                            })]
                        }), (0,
                        z.jsx)(bh, {
                            label: `الخط`,
                            value: n.font,
                            onChange: e => u(`font`, e),
                            options: [{
                                v: `Cairo`,
                                l: `Cairo`
                            }, {
                                v: `Tajawal`,
                                l: `Tajawal`
                            }, {
                                v: `Inter`,
                                l: `Inter`
                            }, {
                                v: `system-ui`,
                                l: `النظام`
                            }]
                        }), (0,
                        z.jsxs)(`fieldset`, {
                            className: `space-y-2`,
                            children: [(0,
                            z.jsxs)(`legend`, {
                                className: `text-sm font-semibold`,
                                children: [`حجم النص: `, n.fontSize, `px`]
                            }), (0,
                            z.jsx)(`input`, {
                                type: `range`,
                                min: 14,
                                max: 20,
                                value: n.fontSize,
                                onChange: e => u(`fontSize`, Number(e.target.value)),
                                className: `w-full accent-primary`,
                                "aria-label": `حجم النص`
                            })]
                        }), (0,
                        z.jsx)(bh, {
                            label: `الكثافة`,
                            value: n.density,
                            onChange: e => u(`density`, e),
                            options: [{
                                v: `comfortable`,
                                l: `مريحة`
                            }, {
                                v: `compact`,
                                l: `مضغوطة`
                            }]
                        }), (0,
                        z.jsx)(bh, {
                            label: `الحواف`,
                            value: n.radius,
                            onChange: e => u(`radius`, e),
                            options: [{
                                v: `rounded`,
                                l: `دائرية`
                            }, {
                                v: `soft`,
                                l: `ناعمة`
                            }, {
                                v: `crisp`,
                                l: `حادة`
                            }]
                        }), (0,
                        z.jsx)(bh, {
                            label: `الحركة`,
                            value: n.motion,
                            onChange: e => u(`motion`, e),
                            options: [{
                                v: `system`,
                                l: `حسب النظام`
                            }, {
                                v: `reduce`,
                                l: `مخفّضة`
                            }]
                        })]
                    })
                }), (0,
                z.jsxs)(Re, {
                    value: `keys`,
                    className: `space-y-3 pt-4`,
                    children: [(0,
                    z.jsx)(`p`, {
                        className: `text-sm text-muted-foreground`,
                        children: `اختياري: مفاتيحك الشخصية تفتح نماذج Gemini الأصلية مع التدوير التلقائي عند تجاوز الحد. تبقى في هذا المتصفح فقط ولا تُرسل لخادمنا.`
                    }), c.map( (e, t) => (0,
                    z.jsxs)(`label`, {
                        className: `block space-y-1`,
                        children: [(0,
                        z.jsxs)(`span`, {
                            className: `text-sm`,
                            children: [`المفتاح `, t + 1]
                        }), (0,
                        z.jsx)(`input`, {
                            type: `password`,
                            dir: `ltr`,
                            autoComplete: `off`,
                            value: e,
                            onChange: e => l(c.map( (n, r) => r === t ? e.target.value : n)),
                            className: `w-full rounded-md border bg-surface px-3 py-2 text-sm`,
                            placeholder: `AIza...`
                        })]
                    }, t)), (0,
                    z.jsx)(`button`, {
                        type: `button`,
                        onClick: () => {
                            qi(c.map(e => e.trim())),
                            ue.success(`تم حفظ المفاتيح`)
                        }
                        ,
                        className: `w-full rounded-md bg-primary py-2 font-semibold text-primary-foreground transition-app hover:opacity-90`,
                        children: `حفظ المفاتيح`
                    })]
                }), (0,
                z.jsxs)(Re, {
                    value: `data`,
                    className: `space-y-3 pt-4`,
                    children: [(0,
                    z.jsx)(`button`, {
                        type: `button`,
                        onClick: o,
                        className: `w-full rounded-md border py-2 transition-app hover:bg-accent`,
                        children: `تصدير كل المحادثات (JSON)`
                    }), (0,
                    z.jsx)(`button`, {
                        type: `button`,
                        onClick: s,
                        className: `w-full rounded-md border border-destructive/50 py-2 text-destructive transition-app hover:bg-destructive/10`,
                        children: `حذف كل المحادثات`
                    })]
                })]
            })]
        })
    })
}
var Sh = [{
    t: `لخّص لي ملفاً`,
    p: `سأرفق ملفاً، لخّصه في نقاط واضحة مع أهم الأرقام.`
}, {
    t: `اشرح كوداً`,
    p: `اشرح لي هذا الكود سطراً بسطر واقترح تحسينات:
`
}, {
    t: `سؤال ضريبي`,
    p: `ما الفرق بين ضريبة القيمة المضافة وضريبة الدخل؟`
}, {
    t: `خطة مذاكرة`,
    p: `اعمل لي خطة مذاكرة أسبوعية لمادة الرياضيات مع أوقات راحة.`
}];
function Ch() {
    let[e,t] = (0,
    R.useState)(!1)
      , {chats: n, setChats: r, sync: i, retry: a} = Ve()
      , [o,c] = (0,
    R.useState)(null)
      , {prefs: l, updatePrefs: u, sync: d, retry: f} = Vi()
      , [p,m] = (0,
    R.useState)(Li[0]?.id ?? `openai/gpt-6-astra`)
      , h = Ke()
      , [g,_] = (0,
    R.useState)([])
      , [v,y] = (0,
    R.useState)(``)
      , [b,x] = (0,
    R.useState)([])
      , [S,C] = (0,
    R.useState)(!1)
      , [w,T] = (0,
    R.useState)(!1)
      , [E,D] = (0,
    R.useState)(``)
      , [O,k] = (0,
    R.useState)(!1)
      , [A,j] = (0,
    R.useState)(null)
      , [M,N] = (0,
    R.useState)(!0)
      , [ee,te] = (0,
    R.useState)(!1)
      , [P,F] = (0,
    R.useState)(!1)
      , ne = (0,
    R.useRef)(null)
      , ie = (0,
    R.useRef)(null)
      , ae = (0,
    R.useRef)(null)
      , oe = (0,
    R.useRef)(null)
      , se = (0,
    R.useRef)(null);
    (0,
    R.useEffect)( () => {
        try {
            let e = sessionStorage.getItem(Fe);
            if (e) {
                let t = JSON.parse(e);
                y(String(t.text || ``)),
                Array.isArray(t.files) && x(t.files),
                sessionStorage.removeItem(Fe)
            }
        } catch {
            sessionStorage.removeItem(Fe)
        }
        N(navigator.onLine),
        t(!0);
        let e = () => N(!0)
          , n = () => N(!1);
        return addEventListener(`online`, e),
        addEventListener(`offline`, n),
        matchMedia(`(min-width: 1024px)`).matches && T(!0),
        () => {
            removeEventListener(`online`, e),
            removeEventListener(`offline`, n)
        }
    }
    , []);
    let I = n.find(e => e.id === o) ?? null;
    (0,
    R.useEffect)( () => {
        ae.current?.scrollIntoView({
            block: `end`
        })
    }
    , [I?.messages.length, I?.messages.at(-1)?.text]),
    (0,
    R.useEffect)( () => {
        ie.current?.focus()
    }
    , [o, S]);
    let ce = e && Ji().length > 0
      , le = (0,
    R.useMemo)( () => {
        let e = E.trim().toLowerCase()
          , t = e ? n.filter(t => t.title.toLowerCase().includes(e) || t.messages.some(t => t.text.toLowerCase().includes(e))) : n;
        return Pe(t)
    }
    , [n, E])
      , de = (e, t) => r(n => n.map(n => n.id === e ? t(n) : n))
      , L = (0,
    R.useCallback)(async e => {
        for (let t of Array.from(e))
            try {
                let e = await ze(t);
                x(t => t.length >= 6 ? (ue.error(`الحد الأقصى 6 ملفات`),
                t) : [...t, e])
            } catch (e) {
                ue.error(e.message)
            }
    }
    , []);
    async function pe(e) {
        let t = (e ?? v).trim();
        if (!t && !b.length || S)
            return;
        if (!M) {
            ue.error(`لا يوجد اتصال بالإنترنت.`);
            return
        }
        let n = Bi(p);
        if (n.provider === `gemini` && !Ji().length) {
            ue.error(`أضف مفتاح Gemini من الإعدادات أولاً.`),
            k(!0);
            return
        }
        let i = I;
        if (!i) {
            let e = {
                ...Le(p),
                skillIds: g
            };
            i = e,
            r(t => [e, ...t]),
            c(e.id)
        }
        let a = {
            id: crypto.randomUUID(),
            role: `user`,
            text: t,
            attachments: b,
            createdAt: Date.now()
        }
          , o = {
            id: crypto.randomUUID(),
            role: `assistant`,
            text: ``,
            createdAt: Date.now()
        }
          , s = [...i.messages.filter(e => !e.error), a]
          , l = i.id
          , u = Ge(i.skillIds, h.all).map(e => ({
            title: e.title,
            instructions: e.instructions
        }));
        de(l, e => ({
            ...e,
            title: e.messages.length ? e.title : Ue(t || b[0]?.name || ``),
            model: p,
            updatedAt: Date.now(),
            messages: [...e.messages, a, o]
        })),
        y(``),
        x([]),
        C(!0);
        let d = new AbortController;
        ne.current = d;
        let f = e => de(l, t => ({
            ...t,
            messages: t.messages.map(t => t.id === o.id ? {
                ...t,
                text: t.text + e
            } : t)
        }));
        try {
            if (n.provider === `gemini`)
                await Qi(n.id, s, f, d.signal, u);
            else {
                let e = await fetch(`/api/chat`, {
                    method: `POST`,
                    signal: d.signal,
                    headers: {
                        "Content-Type": `application/json`
                    },
                    body: JSON.stringify({
                        model: n.id,
                        skills: u,
                        messages: s.map(e => ({
                            role: e.role,
                            text: e.text,
                            images: e.attachments?.filter(e => e.kind === `image` && e.data).map(e => e.data),
                            files: e.attachments?.filter(e => e.kind === `text` && e.data).map(e => ({
                                name: e.name,
                                text: e.data
                            }))
                        }))
                    })
                });
                if (!e.ok || !e.body) {
                    let t = await e.json().catch( () => ({}));
                    throw Error(t.error || `تعذّر الحصول على رد (${e.status}).`)
                }
                let t = e.body.getReader()
                  , r = new TextDecoder;
                for (; ; ) {
                    let {done: e, value: n} = await t.read();
                    if (e)
                        break;
                    f(r.decode(n, {
                        stream: !0
                    }))
                }
            }
            de(l, e => ({
                ...e,
                messages: e.messages.map(e => e.id === o.id && !e.text ? {
                    ...e,
                    error: `لم يصل أي رد. حاول مرة أخرى.`
                } : e)
            }))
        } catch (e) {
            let t = e.name === `AbortError`;
            de(l, n => ({
                ...n,
                messages: n.messages.map(n => n.id === o.id ? t ? {
                    ...n,
                    text: n.text || `_تم الإيقاف._`
                } : {
                    ...n,
                    error: e.message
                } : n)
            }))
        } finally {
            C(!1),
            ne.current = null
        }
    }
    function me() {
        let e = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (!e) {
            ue.error(`الإملاء الصوتي غير مدعوم في هذا المتصفح.`);
            return
        }
        if (P) {
            se.current?.stop();
            return
        }
        let t = new e;
        t.lang = `ar-EG`,
        t.interimResults = !1,
        t.continuous = !0,
        t.onresult = e => {
            let t = Array.from(e.results).slice(e.resultIndex).map(e => e[0].transcript).join(` `);
            y(e => (e ? e + ` ` : ``) + t)
        }
        ,
        t.onend = () => F(!1),
        t.onerror = () => F(!1),
        se.current = t,
        t.start(),
        F(!0)
    }
    function ge() {
        let e = new Blob([JSON.stringify({
            version: 2,
            exportedAt: new Date().toISOString(),
            chats: n
        }, null, 2)],{
            type: `application/json`
        })
          , t = document.createElement(`a`);
        t.href = URL.createObjectURL(e),
        t.download = `hazem-tech-chats.json`,
        t.click(),
        URL.revokeObjectURL(t.href)
    }
    function Te(e) {
        let t = e.messages.map(e => `### ${e.role === `user` ? `أنت` : `Hazem-Tech`}\n\n${e.text}`).join(`

`)
          , n = document.createElement(`a`);
        n.href = URL.createObjectURL(new Blob([`# ${e.title}\n\n${t}`],{
            type: `text/markdown`
        })),
        n.download = `${e.title.slice(0, 40)}.md`,
        n.click()
    }
    let Ie = Bi(p);
    return (0,
    z.jsxs)(`div`, {
        dir: `rtl`,
        className: `flex h-dvh overflow-hidden bg-background text-foreground`,
        onDragOver: e => {
            e.preventDefault(),
            te(!0)
        }
        ,
        onDragLeave: e => {
            e.currentTarget === e.target && te(!1)
        }
        ,
        onDrop: e => {
            e.preventDefault(),
            te(!1),
            e.dataTransfer.files.length && L(e.dataTransfer.files)
        }
        ,
        children: [w && (0,
        z.jsx)(`button`, {
            "aria-label": `إغلاق القائمة`,
            className: `fixed inset-0 z-30 bg-background/70 lg:hidden`,
            onClick: () => T(!1)
        }), (0,
        z.jsxs)(`aside`, {
            "aria-label": `سجل المحادثات`,
            className: `fixed inset-y-0 right-0 z-40 flex w-[min(84vw,290px)] flex-col border-l bg-sidebar transition-app lg:static ${w ? `translate-x-0` : `translate-x-full lg:hidden`}`,
            children: [(0,
            z.jsxs)(`div`, {
                className: `flex items-center gap-2 px-4 pt-4 pb-3`,
                children: [(0,
                z.jsx)(Ae, {}), (0,
                z.jsxs)(`span`, {
                    className: `text-lg font-bold`,
                    children: [`Hazem-Tech `, (0,
                    z.jsx)(`span`, {
                        className: `text-primary`,
                        children: `AI`
                    })]
                })]
            }), (0,
            z.jsxs)(`div`, {
                className: `space-y-2 px-3`,
                children: [(0,
                z.jsxs)(`button`, {
                    type: `button`,
                    onClick: () => {
                        c(null),
                        matchMedia(`(min-width:1024px)`).matches || T(!1)
                    }
                    ,
                    className: `flex w-full items-center gap-2 rounded-lg bg-primary px-3 py-2 font-semibold text-primary-foreground transition-app hover:opacity-90`,
                    children: [(0,
                    z.jsx)(ye, {}), ` محادثة جديدة`]
                }), (0,
                z.jsxs)(`label`, {
                    className: `flex items-center gap-2 rounded-lg border bg-surface px-3 py-1.5 text-sm text-muted-foreground focus-within:border-primary`,
                    children: [(0,
                    z.jsx)(De, {
                        width: 16,
                        height: 16
                    }), (0,
                    z.jsx)(`input`, {
                        value: E,
                        onChange: e => D(e.target.value),
                        placeholder: `ابحث في المحادثات`,
                        className: `w-full bg-transparent text-foreground outline-none`,
                        "aria-label": `بحث في المحادثات`
                    })]
                })]
            }), (0,
            z.jsx)(`nav`, {
                className: `mt-3 flex-1 overflow-y-auto px-2 pb-3`,
                children: e ? le.length === 0 ? (0,
                z.jsx)(`p`, {
                    className: `px-3 py-6 text-center text-sm text-muted-foreground`,
                    children: E ? `لا نتائج مطابقة.` : `لا توجد محادثات بعد.`
                }) : le.map(e => (0,
                z.jsxs)(`section`, {
                    className: `mb-3`,
                    children: [(0,
                    z.jsx)(`h3`, {
                        className: `px-2 py-1 text-xs font-semibold text-muted-foreground`,
                        children: e.label
                    }), (0,
                    z.jsx)(`ul`, {
                        children: e.items.map(e => (0,
                        z.jsxs)(`li`, {
                            className: `group flex items-center rounded-md transition-app ${e.id === o ? `bg-sidebar-accent` : `hover:bg-sidebar-accent/60`}`,
                            children: [(0,
                            z.jsxs)(`button`, {
                                type: `button`,
                                className: `min-w-0 flex-1 truncate px-2 py-2 text-right text-sm`,
                                onClick: () => {
                                    c(e.id),
                                    matchMedia(`(min-width:1024px)`).matches || T(!1)
                                }
                                ,
                                children: [e.pinned && (0,
                                z.jsx)(ve, {
                                    width: 13,
                                    height: 13,
                                    className: `ml-1 inline text-primary`
                                }), e.title]
                            }), (0,
                            z.jsxs)(Pi, {
                                children: [(0,
                                z.jsx)(Fi, {
                                    className: `ml-1 rounded p-1 text-muted-foreground opacity-100 hover:text-foreground lg:opacity-0 lg:group-hover:opacity-100 lg:focus:opacity-100`,
                                    "aria-label": `خيارات ${e.title}`,
                                    children: (0,
                                    z.jsx)(Oe, {
                                        width: 16,
                                        height: 16
                                    })
                                }), (0,
                                z.jsxs)(Ii, {
                                    align: `start`,
                                    className: `w-44 p-1`,
                                    dir: `rtl`,
                                    children: [(0,
                                    z.jsx)(wh, {
                                        onClick: () => de(e.id, e => ({
                                            ...e,
                                            pinned: !e.pinned
                                        })),
                                        icon: (0,
                                        z.jsx)(ve, {
                                            width: 16,
                                            height: 16
                                        }),
                                        children: e.pinned ? `إلغاء التثبيت` : `تثبيت`
                                    }), (0,
                                    z.jsx)(wh, {
                                        onClick: () => {
                                            let t = prompt(`الاسم الجديد`, e.title)?.trim();
                                            t && de(e.id, e => ({
                                                ...e,
                                                title: t.slice(0, 120)
                                            }))
                                        }
                                        ,
                                        icon: (0,
                                        z.jsx)(ke, {
                                            width: 16,
                                            height: 16
                                        }),
                                        children: `إعادة تسمية`
                                    }), (0,
                                    z.jsx)(wh, {
                                        onClick: () => Te(e),
                                        icon: (0,
                                        z.jsx)(Ee, {
                                            width: 16,
                                            height: 16
                                        }),
                                        children: `تصدير Markdown`
                                    }), (0,
                                    z.jsx)(wh, {
                                        danger: !0,
                                        onClick: () => j(e.id),
                                        icon: (0,
                                        z.jsx)(he, {
                                            width: 16,
                                            height: 16
                                        }),
                                        children: `حذف`
                                    })]
                                })]
                            })]
                        }, e.id))
                    })]
                }, e.label)) : (0,
                z.jsx)(`div`, {
                    className: `space-y-2 px-2`,
                    children: [0, 1, 2].map(e => (0,
                    z.jsx)(`div`, {
                        className: `h-8 animate-pulse rounded-md bg-surface`
                    }, e))
                })
            }), (0,
            z.jsxs)(`div`, {
                className: `border-t p-3`,
                children: [(0,
                z.jsx)(fe, {
                    variant: `ghost`,
                    asChild: !0,
                    className: `w-full justify-start`,
                    children: (0,
                    z.jsxs)(s, {
                        to: `/tools`,
                        children: [(0,
                        z.jsx)(_e, {
                            width: 18,
                            height: 18
                        }), `الأدوات والمهارات`]
                    })
                }), (0,
                z.jsxs)(`button`, {
                    type: `button`,
                    onClick: () => k(!0),
                    className: `flex w-full items-center gap-2 rounded-md px-2 py-2 text-sm transition-app hover:bg-sidebar-accent`,
                    children: [(0,
                    z.jsx)(xe, {
                        width: 18,
                        height: 18
                    }), ` الإعدادات`]
                }), (0,
                z.jsx)(`p`, {
                    role: `status`,
                    className: `px-2 pt-1 text-xs text-muted-foreground`,
                    children: i
                }), i.includes(`تعذّرت`) && (0,
                z.jsx)(fe, {
                    variant: `link`,
                    onClick: a,
                    children: `إعادة محاولة المزامنة`
                })]
            })]
        }), (0,
        z.jsxs)(`main`, {
            className: `relative flex min-w-0 flex-1 flex-col stage-glow`,
            children: [(0,
            z.jsxs)(`header`, {
                className: `flex items-center gap-2 px-3 py-2.5 sm:px-5`,
                children: [(0,
                z.jsx)(`button`, {
                    type: `button`,
                    onClick: () => T(e => !e),
                    className: `rounded-md p-2 transition-app hover:bg-accent`,
                    "aria-label": `القائمة`,
                    "aria-expanded": w,
                    children: (0,
                    z.jsx)(Ce, {})
                }), (0,
                z.jsxs)(Pi, {
                    children: [(0,
                    z.jsxs)(Fi, {
                        className: `flex items-center gap-1.5 rounded-full border bg-surface px-3.5 py-1.5 text-sm font-semibold transition-app hover:bg-surface-2`,
                        "aria-label": `اختيار النموذج`,
                        children: [Ie.label, (0,
                        z.jsx)(Oe, {
                            width: 16,
                            height: 16,
                            className: `text-muted-foreground`
                        })]
                    }), (0,
                    z.jsxs)(Ii, {
                        className: `w-[min(92vw,320px)] p-1.5`,
                        dir: `rtl`,
                        align: `start`,
                        children: [(0,
                        z.jsx)(Th, {
                            title: `مدمج`,
                            models: Li,
                            value: p,
                            onPick: m,
                            enabled: !0
                        }), (0,
                        z.jsx)(Th, {
                            title: ce ? `Gemini (مفاتيحك)` : `Gemini — يحتاج مفتاحاً من الإعدادات`,
                            models: Ri,
                            value: p,
                            onPick: m,
                            enabled: ce
                        })]
                    })]
                }), (0,
                z.jsxs)(Pi, {
                    children: [(0,
                    z.jsxs)(Fi, {
                        className: `rounded-full border bg-surface px-3 py-1.5 text-sm transition-app hover:bg-surface-2`,
                        "aria-label": `مهارات المحادثة`,
                        children: [`المهارات`, (I ? I.skillIds ?? [] : g).length ? ` (${(I ? I.skillIds ?? [] : g).length})` : ``]
                    }), (0,
                    z.jsxs)(Ii, {
                        className: `w-[min(92vw,320px)] space-y-1 p-2`,
                        dir: `rtl`,
                        align: `start`,
                        children: [(0,
                        z.jsxs)(`p`, {
                            className: `px-1 pb-1 text-xs text-muted-foreground`,
                            children: [`تُطبّق على `, I ? `هذه المحادثة` : `المحادثة الجديدة`, ` (حتى `, 5, `)`]
                        }), h.all.map(e => {
                            let t = I ? I.skillIds ?? [] : g
                              , n = t.includes(e.id);
                            return (0,
                            z.jsxs)(`label`, {
                                className: `flex cursor-pointer items-start gap-2 rounded-md p-2 text-sm hover:bg-accent`,
                                children: [(0,
                                z.jsx)(`input`, {
                                    type: `checkbox`,
                                    checked: n,
                                    disabled: !n && t.length >= 5,
                                    onChange: () => {
                                        let r = n ? t.filter(t => t !== e.id) : [...t, e.id];
                                        I ? de(I.id, e => ({
                                            ...e,
                                            skillIds: r,
                                            updatedAt: Date.now()
                                        })) : _(r)
                                    }
                                    ,
                                    className: `mt-1`
                                }), (0,
                                z.jsxs)(`span`, {
                                    children: [(0,
                                    z.jsx)(`span`, {
                                        className: `font-medium`,
                                        children: e.title
                                    }), (0,
                                    z.jsx)(`span`, {
                                        className: `block text-xs text-muted-foreground`,
                                        children: e.category
                                    })]
                                })]
                            }, e.id)
                        }
                        ), (0,
                        z.jsx)(s, {
                            to: `/skills`,
                            className: `block rounded-md p-2 text-sm text-primary hover:bg-accent`,
                            children: `إدارة المهارات`
                        })]
                    })]
                }), (0,
                z.jsx)(`span`, {
                    className: `flex-1`
                }), (0,
                z.jsx)(re, {}), (0,
                z.jsxs)(`span`, {
                    className: `flex items-center gap-1.5 text-xs ${M ? `text-muted-foreground` : `text-destructive`}`,
                    role: `status`,
                    children: [(0,
                    z.jsx)(`span`, {
                        className: `h-2 w-2 rounded-full ${M ? `bg-success` : `bg-destructive`}`
                    }), M ? `متصل` : `غير متصل`]
                })]
            }), (0,
            z.jsx)(`div`, {
                className: `flex-1 overflow-y-auto`,
                children: !I || I.messages.length === 0 ? (0,
                z.jsxs)(`div`, {
                    className: `mx-auto flex h-full max-w-2xl flex-col items-center justify-center px-5 text-center`,
                    children: [(0,
                    z.jsx)(Ae, {
                        width: 56,
                        height: 56
                    }), (0,
                    z.jsx)(`h1`, {
                        className: `mt-4 text-2xl font-bold sm:text-3xl`,
                        children: `بماذا أساعدك اليوم؟`
                    }), (0,
                    z.jsx)(`p`, {
                        className: `mt-2 text-muted-foreground`,
                        children: `اكتب سؤالك، أو أرفق صورة أو ملفاً نصياً.`
                    }), (0,
                    z.jsx)(`div`, {
                        className: `mt-7 grid w-full grid-cols-1 gap-2 sm:grid-cols-2`,
                        children: Sh.map(e => (0,
                        z.jsxs)(`button`, {
                            type: `button`,
                            onClick: () => {
                                y(e.p),
                                ie.current?.focus()
                            }
                            ,
                            className: `rounded-xl border bg-surface px-4 py-3 text-right transition-app hover:border-primary/60 hover:bg-surface-2`,
                            children: [(0,
                            z.jsx)(`span`, {
                                className: `block text-sm font-semibold`,
                                children: e.t
                            }), (0,
                            z.jsx)(`span`, {
                                className: `block truncate text-xs text-muted-foreground`,
                                children: e.p
                            })]
                        }, e.t))
                    })]
                }) : (0,
                z.jsxs)(`div`, {
                    className: `mx-auto max-w-3xl space-y-6 px-4 py-6 sm:px-6`,
                    "aria-live": `polite`,
                    children: [I.messages.map(e => (0,
                    z.jsx)(Eh, {
                        m: e,
                        streaming: S && e === I.messages.at(-1)
                    }, e.id)), (0,
                    z.jsx)(`div`, {
                        ref: ae
                    })]
                })
            }), (0,
            z.jsxs)(`div`, {
                className: `px-3 pb-3 sm:px-6 sm:pb-5`,
                children: [(0,
                z.jsxs)(`form`, {
                    className: `mx-auto max-w-3xl rounded-2xl border bg-surface shadow-pop transition-app focus-within:border-primary/70`,
                    onSubmit: e => {
                        e.preventDefault(),
                        pe()
                    }
                    ,
                    children: [b.length > 0 && (0,
                    z.jsx)(`ul`, {
                        className: `flex flex-wrap gap-2 p-2.5 pb-0`,
                        "aria-label": `المرفقات`,
                        children: b.map(e => (0,
                        z.jsxs)(`li`, {
                            className: `flex max-w-[220px] items-center gap-2 rounded-lg border bg-surface-2 p-1.5 pl-2`,
                            children: [e.kind === `image` ? (0,
                            z.jsx)(`img`, {
                                src: e.data,
                                alt: ``,
                                className: `h-9 w-9 rounded-md object-cover`
                            }) : (0,
                            z.jsx)(`span`, {
                                className: `grid h-9 w-9 place-items-center rounded-md bg-accent text-primary`,
                                children: (0,
                                z.jsx)(_e, {
                                    width: 18,
                                    height: 18
                                })
                            }), (0,
                            z.jsxs)(`span`, {
                                className: `min-w-0 text-xs`,
                                children: [(0,
                                z.jsx)(`span`, {
                                    className: `block truncate font-semibold`,
                                    children: e.name
                                }), (0,
                                z.jsx)(`span`, {
                                    className: `text-muted-foreground`,
                                    children: Ne(e.size)
                                })]
                            }), (0,
                            z.jsx)(`button`, {
                                type: `button`,
                                "aria-label": `إزالة ${e.name}`,
                                className: `rounded p-0.5 text-muted-foreground hover:text-destructive`,
                                onClick: () => x(t => t.filter(t => t.id !== e.id)),
                                children: (0,
                                z.jsx)(Me, {
                                    width: 14,
                                    height: 14
                                })
                            })]
                        }, e.id))
                    }), (0,
                    z.jsx)(`textarea`, {
                        ref: ie,
                        value: v,
                        rows: 1,
                        dir: `auto`,
                        onChange: e => {
                            y(e.target.value),
                            e.target.style.height = `auto`,
                            e.target.style.height = Math.min(e.target.scrollHeight, 220) + `px`
                        }
                        ,
                        onKeyDown: e => {
                            e.key === `Enter` && !e.shiftKey && !e.nativeEvent.isComposing && (e.preventDefault(),
                            pe())
                        }
                        ,
                        onPaste: e => {
                            e.clipboardData.files.length && (e.preventDefault(),
                            L(e.clipboardData.files))
                        }
                        ,
                        placeholder: `اكتب رسالتك…`,
                        title: `Enter للإرسال، Shift+Enter لسطر جديد`,
                        "aria-label": `الرسالة`,
                        className: `block max-h-[220px] w-full resize-none bg-transparent px-4 pt-3.5 pb-1 outline-none placeholder:text-muted-foreground`
                    }), (0,
                    z.jsxs)(`div`, {
                        className: `flex items-center gap-1 px-2 pb-2`,
                        children: [(0,
                        z.jsx)(`input`, {
                            ref: oe,
                            type: `file`,
                            multiple: !0,
                            hidden: !0,
                            accept: `image/png,image/jpeg,image/webp,image/gif,.pdf,.docx,.xlsx,.pptx,.txt,.md,.csv,.json,.js,.ts,.tsx,.jsx,.py,.html,.css,.xml,.yaml,.yml,.sql,.log`,
                            onChange: e => {
                                e.target.files && L(e.target.files),
                                e.target.value = ``
                            }
                        }), (0,
                        z.jsx)(`button`, {
                            type: `button`,
                            onClick: () => oe.current?.click(),
                            className: `rounded-full p-2 text-muted-foreground transition-app hover:bg-accent hover:text-foreground`,
                            "aria-label": `إرفاق ملف`,
                            children: (0,
                            z.jsx)(Se, {})
                        }), (0,
                        z.jsx)(`button`, {
                            type: `button`,
                            onClick: me,
                            "aria-pressed": P,
                            className: `rounded-full p-2 transition-app hover:bg-accent ${P ? `text-primary` : `text-muted-foreground hover:text-foreground`}`,
                            "aria-label": P ? `إيقاف الإملاء` : `إملاء صوتي`,
                            children: (0,
                            z.jsx)(je, {})
                        }), (0,
                        z.jsx)(`span`, {
                            className: `flex-1`
                        }), S ? (0,
                        z.jsx)(`button`, {
                            type: `button`,
                            onClick: () => ne.current?.abort(),
                            className: `grid h-9 w-9 place-items-center rounded-full bg-foreground text-background transition-app`,
                            "aria-label": `إيقاف التوليد`,
                            children: (0,
                            z.jsx)(be, {})
                        }) : (0,
                        z.jsx)(`button`, {
                            type: `submit`,
                            disabled: !v.trim() && !b.length,
                            className: `grid h-9 w-9 place-items-center rounded-full bg-primary text-primary-foreground transition-app disabled:opacity-40`,
                            "aria-label": `إرسال`,
                            children: (0,
                            z.jsx)(we, {
                                className: `-scale-x-100`
                            })
                        })]
                    })]
                }), (0,
                z.jsx)(`p`, {
                    className: `mt-1.5 text-center text-xs text-muted-foreground`,
                    children: `قد يخطئ الذكاء الاصطناعي؛ تحقّق من المعلومات المهمة.`
                })]
            }), ee && (0,
            z.jsx)(`div`, {
                className: `pointer-events-none absolute inset-3 grid place-items-center rounded-2xl border-2 border-dashed border-primary bg-background/80 text-lg font-semibold`,
                children: `أفلت الملفات هنا`
            })]
        }), (0,
        z.jsx)(xh, {
            open: O,
            onOpenChange: k,
            prefs: l,
            onPrefs: u,
            sync: d,
            onRetry: f,
            onExport: ge,
            onClearAll: () => j(`all`)
        }), (0,
        z.jsx)(_t, {
            open: !!A,
            onOpenChange: e => !e && j(null),
            children: (0,
            z.jsxs)(bt, {
                dir: `rtl`,
                className: `bg-popover`,
                children: [(0,
                z.jsxs)(xt, {
                    className: `text-right`,
                    children: [(0,
                    z.jsx)(Ct, {
                        children: A === `all` ? `حذف كل المحادثات؟` : `حذف هذه المحادثة؟`
                    }), (0,
                    z.jsx)(wt, {
                        children: `لا يمكن التراجع عن هذا الإجراء.`
                    })]
                }), (0,
                z.jsxs)(St, {
                    className: `gap-2`,
                    children: [(0,
                    z.jsx)(Et, {
                        children: `إلغاء`
                    }), (0,
                    z.jsx)(Tt, {
                        className: `bg-destructive text-destructive-foreground hover:bg-destructive/90`,
                        onClick: () => {
                            A === `all` ? (r([]),
                            c(null),
                            k(!1)) : (r(e => e.filter(e => e.id !== A)),
                            o === A && c(null)),
                            j(null),
                            ue.success(`تم الحذف`)
                        }
                        ,
                        children: `حذف`
                    })]
                })]
            })
        })]
    })
}
function wh({children: e, icon: t, onClick: n, danger: r}) {
    return (0,
    z.jsxs)(`button`, {
        type: `button`,
        onClick: n,
        className: `flex w-full items-center gap-2 rounded px-2 py-1.5 text-sm transition-app hover:bg-accent ${r ? `text-destructive` : ``}`,
        children: [t, e]
    })
}
function Th({title: e, models: t, value: n, onPick: r, enabled: i}) {
    return (0,
    z.jsxs)(`div`, {
        className: `mb-1`,
        children: [(0,
        z.jsx)(`p`, {
            className: `px-2 py-1 text-xs font-semibold text-muted-foreground`,
            children: e
        }), t.map(e => (0,
        z.jsxs)(`button`, {
            type: `button`,
            disabled: !i,
            onClick: () => r(e.id),
            "aria-pressed": n === e.id,
            className: `flex w-full items-center justify-between rounded-md px-2 py-2 text-right transition-app disabled:opacity-45 ${n === e.id ? `bg-accent` : `enabled:hover:bg-accent/60`}`,
            children: [(0,
            z.jsxs)(`span`, {
                children: [(0,
                z.jsx)(`span`, {
                    className: `block text-sm font-semibold`,
                    children: e.label
                }), (0,
                z.jsxs)(`span`, {
                    className: `block text-xs text-muted-foreground`,
                    children: [e.description, ` · `, e.caps.join(`، `)]
                })]
            }), n === e.id && (0,
            z.jsx)(Te, {
                width: 16,
                height: 16,
                className: `text-primary`
            })]
        }, e.id))]
    })
}
function Eh({m: e, streaming: t}) {
    let n = e.attachments ?? [];
    return e.role === `user` ? (0,
    z.jsxs)(`div`, {
        className: `flex flex-col items-start gap-1.5`,
        children: [n.length > 0 && (0,
        z.jsx)(`div`, {
            className: `flex flex-wrap gap-2`,
            children: n.map(e => e.kind === `image` && e.data ? (0,
            z.jsx)(`img`, {
                src: e.data,
                alt: e.name,
                className: `max-h-40 rounded-lg border`
            }, e.id) : (0,
            z.jsxs)(`span`, {
                className: `flex items-center gap-1.5 rounded-lg border bg-surface px-2 py-1 text-xs`,
                children: [(0,
                z.jsx)(_e, {
                    width: 14,
                    height: 14
                }), e.name]
            }, e.id))
        }), e.text && (0,
        z.jsx)(`div`, {
            dir: `auto`,
            className: `max-w-[85%] whitespace-pre-wrap rounded-2xl rounded-tr-md bg-bubble px-4 py-2.5 text-bubble-foreground`,
            children: e.text
        })]
    }) : (0,
    z.jsxs)(`div`, {
        className: `flex gap-3`,
        children: [(0,
        z.jsx)(Ae, {
            width: 26,
            height: 26,
            className: `mt-1 shrink-0`
        }), (0,
        z.jsx)(`div`, {
            className: `min-w-0 flex-1`,
            dir: `auto`,
            children: e.error ? (0,
            z.jsx)(`p`, {
                role: `alert`,
                className: `rounded-lg border border-destructive/40 bg-destructive/10 px-3 py-2 text-sm text-destructive`,
                children: e.error
            }) : e.text ? (0,
            z.jsx)(yh, {
                text: e.text
            }) : t ? (0,
            z.jsx)(`span`, {
                className: `inline-flex gap-1 py-2`,
                "aria-label": `جارٍ الكتابة`,
                children: [0, 1, 2].map(e => (0,
                z.jsx)(`span`, {
                    className: `h-2 w-2 animate-pulse rounded-full bg-primary`,
                    style: {
                        animationDelay: `${e * 150}ms`
                    }
                }, e))
            }) : null
        })]
    })
}
var Dh = Ch;
export {Dh as component};
