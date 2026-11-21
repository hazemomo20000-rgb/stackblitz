import {i as e} from "./rolldown-runtime-Dd_uD5pT.js";
import {B as t, a as n, c as r, d as i, h as a, i as o, l as s, n as c, o as l, s as u} from "./AccountProvider-BXmG3VwF.js";
import {C as d, S as f, T as p, _ as m, a as h, b as g, c as _, d as v, f as y, g as ee, h as b, i as x, l as te, m as ne, n as re, o as ie, p as ae, r as oe, s as se, u as S, v as ce, w as le, x as ue, y as de} from "./index-dAyLOZ_j.js";
import {a as fe, i as pe, n as C, o as me, t as he} from "./input-BzwlD5Ye.js";
function ge(e) {
    if (Array.isArray(e))
        return e.flatMap(e => ge(e));
    if (typeof e != `string`)
        return [];
    let t = [], n = 0, r, i, a, o, s, c = () => {
        for (; n < e.length && /\s/.test(e.charAt(n)); )
            n += 1;
        return n < e.length
    }
    , l = () => (i = e.charAt(n),
    i !== `=` && i !== `;` && i !== `,`);
    for (; n < e.length; ) {
        for (r = n,
        s = !1; c(); )
            if (i = e.charAt(n),
            i === `,`) {
                for (a = n,
                n += 1,
                c(),
                o = n; n < e.length && l(); )
                    n += 1;
                n < e.length && e.charAt(n) === `=` ? (s = !0,
                n = o,
                t.push(e.slice(r, a)),
                r = n) : n = a + 1
            } else
                n += 1;
        (!s || n >= e.length) && t.push(e.slice(r))
    }
    return t
}
function _e(e) {
    return e instanceof Headers ? e : Array.isArray(e) || typeof e == `object` ? new Headers(e) : null
}
function ve(...e) {
    return e.reduce( (e, t) => {
        let n = _e(t);
        if (!n)
            return e;
        for (let[t,r] of n.entries())
            t === `set-cookie` ? ge(r).forEach(t => e.append(`set-cookie`, t)) : e.set(t, r);
        return e
    }
    , new Headers)
}
var w = e(t(), 1);
function ye(e) {
    let t = i();
    return w.useCallback(async (...n) => {
        try {
            let t = await e(...n);
            if (ue(t))
                throw t;
            return t
        } catch (e) {
            if (ue(e))
                return e.options._fromLocation = t.stores.location.get(),
                t.navigate(t.resolveRedirect(e).options);
            throw e
        }
    }
    , [t, e])
}
function be(e) {
    return e !== `__proto__` && e !== `constructor` && e !== `prototype`
}
function xe(e, t) {
    let n = Object.create(null);
    if (e)
        for (let t of Object.keys(e))
            be(t) && (n[t] = e[t]);
    if (t && typeof t == `object`)
        for (let e of Object.keys(t))
            be(e) && (n[e] = t[e]);
    return n
}
function Se(e) {
    if (!e)
        return Object.create(null);
    let t = Object.create(null);
    for (let n of Object.keys(e))
        be(n) && (t[n] = e[n]);
    return t
}
var Ce = () => {
    throw Error(`createServerOnlyFn() functions can only be called on the server!`)
}
  , we = (e, t) => {
    let n = t || e || {};
    n.method === void 0 && (n.method = `GET`);
    let r = e => we(void 0, {
        ...n,
        validator: e,
        inputValidator: e
    });
    return Object.assign(e => we(void 0, {
        ...n,
        ...e
    }), {
        options: n,
        middleware: e => {
            let t = [...n.middleware || []];
            e.forEach(e => {
                le in e ? e.options.middleware && t.push(...e.options.middleware) : t.push(e)
            }
            );
            let r = we(void 0, {
                ...n,
                middleware: t
            });
            return r[le] = !0,
            r
        }
        ,
        validator: r,
        inputValidator: r,
        handler: (...e) => {
            let[t,r] = e
              , i = {
                ...n,
                extractedFn: t,
                serverFn: r
            }
              , a = [...i.middleware || [], Oe(i)];
            return t.method = n.method,
            Object.assign(async e => {
                let n = await Te(a, `client`, {
                    ...t,
                    ...i,
                    data: e?.data,
                    headers: e?.headers,
                    signal: e?.signal,
                    fetch: e?.fetch,
                    context: Se()
                })
                  , r = f(n.error);
                if (r)
                    throw r;
                if (n.error)
                    throw n.error;
                return n.result
            }
            , {
                ...t,
                method: n.method,
                __executeServer: async e => {
                    let r = Ce()
                      , i = r.contextAfterGlobalMiddlewares;
                    return await Te(a, `server`, {
                        ...t,
                        data: e.data,
                        method: e.method ?? n.method,
                        serverFnMeta: t.serverFnMeta,
                        context: xe(e.context, i),
                        request: r.request
                    }).then(e => ({
                        result: e.result,
                        error: e.error,
                        context: e.sendContext
                    }))
                }
            })
        }
    })
}
;
async function Te(e, t, n) {
    let r = Ee([...d()?.functionMiddleware || [], ...e]);
    if (t === `server`) {
        let e = Ce({
            throwIfNotFound: !1
        });
        e?.executedRequestMiddlewares && (r = r.filter(t => !e.executedRequestMiddlewares.has(t)))
    }
    let i = async e => {
        let n = r.shift();
        if (!n)
            return e;
        try {
            let r = `validator` in n.options ? n.options.validator : void 0;
            !r && `inputValidator` in n.options && (r = n.options.inputValidator),
            r && t === `server` && (e.data = await De(r, e.data));
            let a;
            if (t === `client` ? `client` in n.options && (a = n.options.client) : `server` in n.options && (a = n.options.server),
            a) {
                let t = async (t={}) => {
                    let n = await i({
                        ...e,
                        ...t,
                        context: xe(e.context, t.context),
                        sendContext: xe(e.sendContext, t.sendContext),
                        headers: ve(e.headers, t.headers),
                        _callSiteFetch: e._callSiteFetch,
                        fetch: e._callSiteFetch ?? t.fetch ?? e.fetch,
                        result: t.result === void 0 ? t instanceof Response ? t : e.result : t.result,
                        error: t.error ?? e.error
                    });
                    if (n.error)
                        throw n.error;
                    return n
                }
                  , n = await a({
                    ...e,
                    next: t
                });
                if (ue(n))
                    return {
                        ...e,
                        error: n
                    };
                if (n instanceof Response)
                    return {
                        ...e,
                        result: n
                    };
                if (!n)
                    throw Error(`User middleware returned undefined. You must call next() or return a result in your middlewares.`);
                return n
            }
            return i(e)
        } catch (t) {
            return {
                ...e,
                error: t
            }
        }
    }
    ;
    return i({
        ...n,
        headers: n.headers || {},
        sendContext: n.sendContext || {},
        context: n.context || Se(),
        _callSiteFetch: n.fetch
    })
}
function Ee(e, t=100) {
    let n = new Set
      , r = []
      , i = (e, a) => {
        if (a > t)
            throw Error(`Middleware nesting depth exceeded maximum of ${t}. Check for circular references.`);
        e.forEach(e => {
            e.options.middleware && i(e.options.middleware, a + 1),
            n.has(e) || (n.add(e),
            r.push(e))
        }
        )
    }
    ;
    return i(e, 0),
    r
}
async function De(e, t) {
    if (e == null)
        return {};
    if (`~standard` in e) {
        let n = await e[`~standard`].validate(t);
        if (n.issues)
            throw Error(JSON.stringify(n.issues, void 0, 2));
        return n.value
    }
    if (`parse` in e)
        return e.parse(t);
    if (typeof e == `function`)
        return e(t);
    throw Error(`Invalid validator type!`)
}
function Oe(e) {
    return {
        "~types": void 0,
        options: {
            inputValidator: e.validator ?? e.inputValidator,
            client: async ({next: t, sendContext: n, fetch: r, ...i}) => {
                let a = {
                    ...i,
                    context: n,
                    fetch: r
                };
                return t(await e.extractedFn?.(a))
            }
            ,
            server: async ({next: t, ...n}) => {
                let r = await e.serverFn?.(n);
                return t({
                    ...n,
                    result: r
                })
            }
        }
    }
}
var ke = class extends m {
    constructor(e, t) {
        super(),
        this.options = t,
        this.#e = e,
        this.#s = null,
        this.#o = h(),
        this.bindMethods(),
        this.setOptions(t)
    }
    #e;
    #t = void 0;
    #n = void 0;
    #r = void 0;
    #i;
    #a;
    #o;
    #s;
    #c;
    #l;
    #u;
    #d;
    #f;
    #p;
    #m = new Set;
    bindMethods() {
        this.refetch = this.refetch.bind(this)
    }
    onSubscribe() {
        this.listeners.size === 1 && (this.#t.addObserver(this),
        je(this.#t, this.options) ? this.#h() : this.updateResult(),
        this.#y())
    }
    onUnsubscribe() {
        this.hasListeners() || this.destroy()
    }
    shouldFetchOnReconnect() {
        return Me(this.#t, this.options, this.options.refetchOnReconnect)
    }
    shouldFetchOnWindowFocus() {
        return Me(this.#t, this.options, this.options.refetchOnWindowFocus)
    }
    destroy() {
        this.listeners = new Set,
        this.#b(),
        this.#x(),
        this.#t.removeObserver(this)
    }
    setOptions(e) {
        let t = this.options
          , n = this.#t;
        if (this.options = this.#e.defaultQueryOptions(e),
        this.options.enabled !== void 0 && typeof this.options.enabled != `boolean` && typeof this.options.enabled != `function` && typeof S(this.options.enabled, this.#t) != `boolean`)
            throw Error(`Expected enabled to be a boolean or a callback that returns a boolean`);
        this.#S(),
        this.#t.setOptions(this.options),
        t._defaulted && !y(this.options, t) && this.#e.getQueryCache().notify({
            type: `observerOptionsUpdated`,
            query: this.#t,
            observer: this
        });
        let r = this.hasListeners();
        r && Ne(this.#t, n, this.options, t) && this.#h(),
        this.updateResult(),
        r && (this.#t !== n || S(this.options.enabled, this.#t) !== S(t.enabled, this.#t) || v(this.options.staleTime, this.#t) !== v(t.staleTime, this.#t)) && this.#g();
        let i = this.#_();
        r && (this.#t !== n || S(this.options.enabled, this.#t) !== S(t.enabled, this.#t) || i !== this.#p) && this.#v(i)
    }
    getOptimisticResult(e) {
        let t = this.#e.getQueryCache().build(this.#e, e)
          , n = this.createResult(t, e);
        return Fe(this, n) && (this.#r = n,
        this.#a = this.options,
        this.#i = this.#t.state),
        n
    }
    getCurrentResult() {
        return this.#r
    }
    trackResult(e, t) {
        return new Proxy(e,{
            get: (e, n) => (this.trackProp(n),
            t?.(n),
            n === `promise` && (this.trackProp(`data`),
            !this.options.experimental_prefetchInRender && this.#o.status === `pending` && this.#o.reject(Error(`experimental_prefetchInRender feature flag is not enabled`))),
            Reflect.get(e, n))
        })
    }
    trackProp(e) {
        this.#m.add(e)
    }
    getCurrentQuery() {
        return this.#t
    }
    refetch({...e}={}) {
        return this.fetch({
            ...e
        })
    }
    fetchOptimistic(e) {
        let t = this.#e.defaultQueryOptions(e)
          , n = this.#e.getQueryCache().build(this.#e, t);
        return n.fetch().then( () => this.createResult(n, t))
    }
    fetch(e) {
        return this.#h({
            ...e,
            cancelRefetch: e.cancelRefetch ?? !0
        }).then( () => (this.updateResult(),
        this.#r))
    }
    #h(e) {
        this.#S();
        let t = this.#t.fetch(this.options, e);
        return e?.throwOnError || (t = t.catch(_)),
        t
    }
    #g() {
        this.#b();
        let e = v(this.options.staleTime, this.#t);
        if (ie.isServer() || this.#r.isStale || !se(e))
            return;
        let t = ne(this.#r.dataUpdatedAt, e) + 1;
        this.#d = b.setTimeout( () => {
            this.#r.isStale || this.updateResult()
        }
        , t)
    }
    #_() {
        return (typeof this.options.refetchInterval == `function` ? this.options.refetchInterval(this.#t) : this.options.refetchInterval) ?? !1
    }
    #v(e) {
        this.#x(),
        this.#p = e,
        !(ie.isServer() || S(this.options.enabled, this.#t) === !1 || !se(this.#p) || this.#p === 0) && (this.#f = b.setInterval( () => {
            (this.options.refetchIntervalInBackground || ee.isFocused()) && this.#h()
        }
        , this.#p))
    }
    #y() {
        this.#g(),
        this.#v(this.#_())
    }
    #b() {
        this.#d !== void 0 && (b.clearTimeout(this.#d),
        this.#d = void 0)
    }
    #x() {
        this.#f !== void 0 && (b.clearInterval(this.#f),
        this.#f = void 0)
    }
    createResult(e, t) {
        let n = this.#t, r = this.options, i = this.#r, a = this.#i, o = this.#a, s = e === n ? this.#n : e.state, {state: c} = e, l = {
            ...c
        }, u = !1, d;
        if (t._optimisticResults) {
            let i = this.hasListeners()
              , a = !i && je(e, t)
              , o = i && Ne(e, n, t, r);
            (a || o) && (l = {
                ...l,
                ...oe(c.data, e.options)
            }),
            t._optimisticResults === `isRestoring` && (l.fetchStatus = `idle`)
        }
        let {error: f, errorUpdatedAt: p, status: m} = l;
        d = l.data;
        let g = !1;
        if (t.placeholderData !== void 0 && d === void 0 && m === `pending`) {
            let e;
            i?.isPlaceholderData && t.placeholderData === o?.placeholderData ? (e = i.data,
            g = !0) : e = typeof t.placeholderData == `function` ? t.placeholderData(this.#u?.state.data, this.#u) : t.placeholderData,
            e !== void 0 && (m = `success`,
            d = te(i?.data, e, t),
            u = !0)
        }
        if (t.select && d !== void 0 && !g)
            if (i && d === a?.data && t.select === this.#c)
                d = this.#l;
            else
                try {
                    this.#c = t.select,
                    d = t.select(d),
                    d = te(i?.data, d, t),
                    this.#l = d,
                    this.#s = null
                } catch (e) {
                    this.#s = e
                }
        this.#s && (f = this.#s,
        d = this.#l,
        p = Date.now(),
        m = `error`);
        let _ = l.fetchStatus === `fetching`
          , v = m === `pending`
          , y = m === `error`
          , ee = v && _
          , b = d !== void 0
          , x = {
            status: m,
            fetchStatus: l.fetchStatus,
            isPending: v,
            isSuccess: m === `success`,
            isError: y,
            isInitialLoading: ee,
            isLoading: ee,
            data: d,
            dataUpdatedAt: l.dataUpdatedAt,
            error: f,
            errorUpdatedAt: p,
            failureCount: l.fetchFailureCount,
            failureReason: l.fetchFailureReason,
            errorUpdateCount: l.errorUpdateCount,
            isFetched: e.isFetched(),
            isFetchedAfterMount: l.dataUpdateCount > s.dataUpdateCount || l.errorUpdateCount > s.errorUpdateCount,
            isFetching: _,
            isRefetching: _ && !v,
            isLoadingError: y && !b,
            isPaused: l.fetchStatus === `paused`,
            isPlaceholderData: u,
            isRefetchError: y && b,
            isStale: Pe(e, t),
            refetch: this.refetch,
            promise: this.#o,
            isEnabled: S(t.enabled, e) !== !1
        };
        if (this.options.experimental_prefetchInRender) {
            let t = x.data !== void 0
              , r = x.status === `error` && !t
              , i = e => {
                r ? e.reject(x.error) : t && e.resolve(x.data)
            }
              , a = () => {
                let e = this.#o = x.promise = h();
                i(e)
            }
              , o = this.#o;
            switch (o.status) {
            case `pending`:
                e.queryHash === n.queryHash && i(o);
                break;
            case `fulfilled`:
                (r || x.data !== o.value) && a();
                break;
            case `rejected`:
                (!r || x.error !== o.reason) && a()
            }
        }
        return x
    }
    updateResult() {
        let e = this.#r
          , t = this.createResult(this.#t, this.options);
        this.#i = this.#t.state,
        this.#a = this.options,
        this.#i.data !== void 0 && (this.#u = this.#t),
        !y(t, e) && (this.#r = t,
        this.#C({
            listeners: ( () => {
                if (!e)
                    return !0;
                let {notifyOnChangeProps: t} = this.options
                  , n = typeof t == `function` ? t() : t;
                if (n === `all` || !n && !this.#m.size)
                    return !0;
                let r = new Set(n ?? this.#m);
                return this.options.throwOnError && r.add(`error`),
                Object.keys(this.#r).some(t => {
                    let n = t;
                    return this.#r[n] !== e[n] && r.has(n)
                }
                )
            }
            )()
        }))
    }
    #S() {
        let e = this.#e.getQueryCache().build(this.#e, this.options);
        if (e === this.#t)
            return;
        let t = this.#t;
        this.#t = e,
        this.#n = e.state,
        this.hasListeners() && (t?.removeObserver(this),
        e.addObserver(this))
    }
    onQueryUpdate() {
        this.updateResult(),
        this.hasListeners() && this.#y()
    }
    #C(e) {
        x.batch( () => {
            e.listeners && this.listeners.forEach(e => {
                e(this.#r)
            }
            ),
            this.#e.getQueryCache().notify({
                query: this.#t,
                type: `observerResultsUpdated`
            })
        }
        )
    }
}
;
function Ae(e, t) {
    return S(t.enabled, e) !== !1 && e.state.data === void 0 && (e.state.status !== `error` || S(t.retryOnMount, e) !== !1)
}
function je(e, t) {
    return Ae(e, t) || e.state.data !== void 0 && Me(e, t, t.refetchOnMount)
}
function Me(e, t, n) {
    if (S(t.enabled, e) !== !1 && v(t.staleTime, e) !== `static`) {
        let r = typeof n == `function` ? n(e) : n;
        return r === `always` || r !== !1 && Pe(e, t)
    }
    return !1
}
function Ne(e, t, n, r) {
    return (e !== t || S(r.enabled, e) === !1) && (!n.suspense || e.state.status !== `error`) && Pe(e, n)
}
function Pe(e, t) {
    return S(t.enabled, e) !== !1 && e.isStaleByTime(v(t.staleTime, e))
}
function Fe(e, t) {
    return !y(e.getCurrentResult(), t)
}
var T = a()
  , Ie = w.createContext(!1)
  , Le = () => w.useContext(Ie);
Ie.Provider;
function Re() {
    let e = !1;
    return {
        clearReset: () => {
            e = !1
        }
        ,
        reset: () => {
            e = !0
        }
        ,
        isReset: () => e
    }
}
var ze = w.createContext(Re())
  , Be = () => w.useContext(ze)
  , Ve = (e, t, n) => {
    let r = n?.state.error && typeof e.throwOnError == `function` ? ae(e.throwOnError, [n.state.error, n]) : e.throwOnError;
    (e.suspense || e.experimental_prefetchInRender || r) && (t.isReset() || (e.retryOnMount = !1))
}
  , He = e => {
    w.useEffect( () => {
        e.clearReset()
    }
    , [e])
}
  , Ue = ({result: e, errorResetBoundary: t, throwOnError: n, query: r, suspense: i}) => e.isError && !t.isReset() && !e.isFetching && r && (i && e.data === void 0 || ae(n, [e.error, r]))
  , We = e => {
    if (e.suspense) {
        let t = 1e3
          , n = e => e === `static` ? e : Math.max(e ?? t, t)
          , r = e.staleTime;
        e.staleTime = typeof r == `function` ? (...e) => n(r(...e)) : n(r),
        typeof e.gcTime == `number` && (e.gcTime = Math.max(e.gcTime, t))
    }
}
  , Ge = (e, t) => e.isLoading && e.isFetching && !t
  , Ke = (e, t) => e?.suspense && t.isPending
  , qe = (e, t, n) => t.fetchOptimistic(e).catch( () => {
    n.clearReset()
}
);
function Je(e, t, n) {
    let r = Le()
      , i = Be()
      , a = o(n)
      , s = a.defaultQueryOptions(e);
    a.getDefaultOptions().queries?._experimental_beforeQuery?.(s);
    let c = a.getQueryCache().get(s.queryHash)
      , l = e.subscribed !== !1;
    s._optimisticResults = r ? `isRestoring` : l ? `optimistic` : void 0,
    We(s),
    Ve(s, i, c),
    He(i);
    let u = !a.getQueryCache().get(s.queryHash)
      , [d] = w.useState( () => new t(a,s))
      , f = d.getOptimisticResult(s)
      , p = !r && l;
    if (w.useSyncExternalStore(w.useCallback(e => {
        let t = p ? d.subscribe(x.batchCalls(e)) : _;
        return d.updateResult(),
        t
    }
    , [d, p]), () => d.getCurrentResult(), () => d.getCurrentResult()),
    w.useEffect( () => {
        d.setOptions(s)
    }
    , [s, d]),
    Ke(s, f))
        throw qe(s, d, i);
    if (Ue({
        result: f,
        errorResetBoundary: i,
        throwOnError: s.throwOnError,
        query: c,
        suspense: s.suspense
    }))
        throw f.error;
    return a.getDefaultOptions().queries?._experimental_afterQuery?.(s, f),
    s.experimental_prefetchInRender && !ie.isServer() && Ge(f, r) && (u ? qe(s, d, i) : c?.promise)?.catch(_).finally( () => {
        d.updateResult()
    }
    ),
    s.notifyOnChangeProps ? f : d.trackResult(f)
}
function Ye(e, t) {
    return Je(e, ke, t)
}
var Xe = Object.defineProperty
  , E = (e, t) => Xe(e, `name`, {
    value: t,
    configurable: !0
});
function Ze(e, t) {
    let n = w.createContext(t);
    n.displayName = e + `Context`;
    let r = E(e => {
        let {children: t, ...r} = e
          , i = w.useMemo( () => r, Object.values(r));
        return (0,
        T.jsx)(n.Provider, {
            value: i,
            children: t
        })
    }
    , `Provider`);
    r.displayName = e + `Provider`;
    function i(r, i={}) {
        let {optional: a=!1} = i
          , o = w.useContext(n);
        if (o)
            return o;
        if (t !== void 0)
            return t;
        if (!a)
            throw Error(`\`${r}\` must be used within \`${e}\``)
    }
    return E(i, `useContext`),
    [r, i]
}
E(Ze, `createContext`);
function Qe(e, t=[]) {
    let n = [];
    function r(t, r) {
        let i = w.createContext(r);
        i.displayName = t + `Context`;
        let a = n.length;
        n = [...n, r];
        let o = E(t => {
            let {scope: n, children: r, ...o} = t
              , s = n?.[e]?.[a] || i
              , c = w.useMemo( () => o, Object.values(o));
            return (0,
            T.jsx)(s.Provider, {
                value: c,
                children: r
            })
        }
        , `Provider`);
        o.displayName = t + `Provider`;
        function s(n, o, s={}) {
            let {optional: c=!1} = s
              , l = o?.[e]?.[a] || i
              , u = w.useContext(l);
            if (u)
                return u;
            if (r !== void 0)
                return r;
            if (!c)
                throw Error(`\`${n}\` must be used within \`${t}\``)
        }
        return E(s, `useContext`),
        [o, s]
    }
    E(r, `createContext`);
    let i = E( () => {
        let t = n.map(e => w.createContext(e));
        return E(function(n) {
            let r = n?.[e] || t;
            return w.useMemo( () => ({
                [`__scope${e}`]: {
                    ...n,
                    [e]: r
                }
            }), [n, r])
        }, `useScope`)
    }
    , `createScope`);
    return i.scopeName = e,
    [r, $e(i, ...t)]
}
E(Qe, `createContextScope`);
function $e(...e) {
    let t = e[0];
    if (e.length === 1)
        return t;
    let n = E( () => {
        let n = e.map(e => ({
            useScope: e(),
            scopeName: e.scopeName
        }));
        return E(function(e) {
            let r = n.reduce( (t, {useScope: n, scopeName: r}) => {
                let i = n(e)[`__scope${r}`];
                return {
                    ...t,
                    ...i
                }
            }
            , {});
            return w.useMemo( () => ({
                [`__scope${t.scopeName}`]: r
            }), [r])
        }, `useComposedScopes`)
    }
    , `createScope`);
    return n.scopeName = t.scopeName,
    n
}
E($e, `composeContextScopes`);
var et = Object.defineProperty
  , tt = (e, t) => et(e, `name`, {
    value: t,
    configurable: !0
})
  , nt = !!(typeof window < `u` && window.document && window.document.createElement);
function D(e, t, {checkForDefaultPrevented: n=!0}={}) {
    return tt(function(r) {
        if (e?.(r),
        n === !1 || !r || !r.defaultPrevented)
            return t?.(r)
    }, `handleEvent`)
}
tt(D, `composeEventHandlers`);
function rt(e) {
    if (!nt)
        throw Error(`Cannot access window outside of the DOM`);
    return e?.ownerDocument?.defaultView ?? window
}
tt(rt, `getOwnerWindow`);
function it(e) {
    if (!nt)
        throw Error(`Cannot access document outside of the DOM`);
    return e?.ownerDocument ?? document
}
tt(it, `getOwnerDocument`);
function at(e, t=!1) {
    let {activeElement: n} = it(e);
    if (!n?.nodeName)
        return null;
    if (ot(n) && n.contentDocument)
        return at(n.contentDocument.body, t);
    if (t) {
        let e = n.getAttribute(`aria-activedescendant`);
        if (e) {
            let t = it(n).getElementById(e);
            if (t)
                return t
        }
    }
    return n
}
tt(at, `getActiveElement`);
function ot(e) {
    return e.tagName === `IFRAME`
}
tt(ot, `isFrame`);
var O = globalThis?.document ? w.useLayoutEffect : () => {}
  , st = Object.defineProperty
  , ct = (e, t) => st(e, `name`, {
    value: t,
    configurable: !0
})
  , lt = w.useId || ( () => void 0)
  , ut = 0;
function dt(e) {
    let[t,n] = w.useState(lt());
    return O( () => {
        e || n(e => e ?? String(ut++))
    }
    , [e]),
    e || (t ? `radix-${t}` : ``)
}
ct(dt, `useId`);
var ft = Object.defineProperty
  , pt = (e, t) => ft(e, `name`, {
    value: t,
    configurable: !0
})
  , mt = w.useEffectEvent
  , ht = w.useInsertionEffect;
function gt(e) {
    if (typeof mt == `function`)
        return mt(e);
    let t = w.useRef( () => {
        throw Error(`Cannot call an event handler while rendering.`)
    }
    );
    return typeof ht == `function` ? ht( () => {
        t.current = e
    }
    ) : O( () => {
        t.current = e
    }
    ),
    w.useMemo( () => ( (...e) => t.current?.(...e)), [])
}
pt(gt, `useEffectEvent`);
var _t = Object.defineProperty
  , vt = (e, t) => _t(e, `name`, {
    value: t,
    configurable: !0
})
  , yt = w.useInsertionEffect || O;
function bt({prop: e, defaultProp: t, onChange: n=vt( () => {}
, `onChange`), caller: r}) {
    let[i,a,o] = xt({
        defaultProp: t,
        onChange: n
    })
      , s = e !== void 0;
    return [s ? e : i, w.useCallback(t => {
        if (s) {
            let n = St(t) ? t(e) : t;
            n !== e && o.current?.(n)
        } else
            a(t)
    }
    , [s, e, a, o])]
}
vt(bt, `useControllableState`);
function xt({defaultProp: e, onChange: t}) {
    let[n,r] = w.useState(e)
      , i = w.useRef(n)
      , a = w.useRef(t);
    return yt( () => {
        a.current = t
    }
    , [t]),
    w.useEffect( () => {
        i.current !== n && (a.current?.(n),
        i.current = n)
    }
    , [n, i]),
    [n, r, a]
}
vt(xt, `useUncontrolledState`);
function St(e) {
    return typeof e == `function`
}
vt(St, `isFunction`);
var Ct = Symbol(`RADIX:SYNC_STATE`);
function wt(e, t, n, r) {
    let {prop: i, defaultProp: a, onChange: o, caller: s} = t
      , c = i !== void 0
      , l = gt(o)
      , u = [{
        ...n,
        state: a
    }];
    r && u.push(r);
    let[d,f] = w.useReducer( (t, n) => {
        if (n.type === Ct)
            return {
                ...t,
                state: n.state
            };
        let r = e(t, n);
        return c && !Object.is(r.state, t.state) && l(r.state),
        r
    }
    , ...u)
      , p = d.state
      , m = w.useRef(p);
    w.useEffect( () => {
        m.current !== p && (m.current = p,
        c || l(p))
    }
    , [p, m, c]);
    let h = w.useMemo( () => i === void 0 ? d : {
        ...d,
        state: i
    }, [d, i]);
    return w.useEffect( () => {
        c && !Object.is(i, d.state) && f({
            type: Ct,
            state: i
        })
    }
    , [i, d.state, c]),
    [h, f]
}
vt(wt, `useControllableStateReducer`);
var Tt = e(p(), 1)
  , Et = Object.defineProperty
  , Dt = (e, t) => Et(e, `name`, {
    value: t,
    configurable: !0
})
  , k = [`a`, `button`, `div`, `form`, `h2`, `h3`, `img`, `input`, `label`, `li`, `nav`, `ol`, `p`, `select`, `span`, `svg`, `ul`].reduce( (e, t) => {
    let n = fe(`Primitive.${t}`)
      , r = w.forwardRef( (e, r) => {
        let {asChild: i, ...a} = e
          , o = i ? n : t;
        return typeof window < `u` && (window[Symbol.for(`radix-ui`)] = !0),
        (0,
        T.jsx)(o, {
            ...a,
            ref: r
        })
    }
    );
    return r.displayName = `Primitive.${t}`,
    {
        ...e,
        [t]: r
    }
}
, {});
function Ot(e, t) {
    e && Tt.flushSync( () => e.dispatchEvent(t))
}
Dt(Ot, `dispatchDiscreteCustomEvent`);
var kt = Object.defineProperty
  , At = (e, t) => kt(e, `name`, {
    value: t,
    configurable: !0
});
function jt(e) {
    let t = w.useRef(e);
    return w.useEffect( () => {
        t.current = e
    }
    ),
    w.useMemo( () => ( (...e) => t.current?.(...e)), [])
}
At(jt, `useCallbackRef`);
var Mt = Object.defineProperty, A = (e, t) => Mt(e, `name`, {
    value: t,
    configurable: !0
}), Nt = `dismissableLayer.update`, Pt = `dismissableLayer.pointerDownOutside`, Ft = `dismissableLayer.focusOutside`, It, Lt = w.createContext({
    layers: new Set,
    layersWithOutsidePointerEventsDisabled: new Set,
    branches: new Set,
    dismissableSurfaces: new Set
}), Rt = w.forwardRef(A(function(e, t) {
    let {disableOutsidePointerEvents: n=!1, deferPointerDownOutside: r=!1, onEscapeKeyDown: i, onPointerDownOutside: a, onFocusOutside: o, onInteractOutside: s, onDismiss: c, ...l} = e
      , u = w.useContext(Lt)
      , [d,f] = w.useState(null)
      , p = d?.ownerDocument ?? globalThis?.document
      , [,m] = w.useState({})
      , h = me(t, f)
      , g = Array.from(u.layers)
      , [_] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1)
      , v = _ ? g.indexOf(_) : -1
      , y = d ? g.indexOf(d) : -1
      , ee = u.layersWithOutsidePointerEventsDisabled.size > 0
      , b = y >= v
      , x = w.useRef(!1)
      , te = Vt(e => {
        a?.(e),
        s?.(e),
        e.defaultPrevented || c?.()
    }
    , {
        ownerDocument: p,
        deferPointerDownOutside: r,
        isDeferredPointerDownOutsideRef: x,
        dismissableSurfaces: u.dismissableSurfaces,
        shouldHandlePointerDownOutside: w.useCallback(e => {
            if (!(e instanceof Node))
                return !1;
            let t = [...u.branches].some(t => t.contains(e));
            return b && !t
        }
        , [u.branches, b])
    })
      , ne = Ht(e => {
        if (r && x.current)
            return;
        let t = e.target;
        [...u.branches].some(e => e.contains(t)) || (o?.(e),
        s?.(e),
        e.defaultPrevented || c?.())
    }
    , p)
      , re = d ? y === g.length - 1 : !1
      , ie = jt(e => {
        e.key === `Escape` && (i?.(e),
        !e.defaultPrevented && c && (e.preventDefault(),
        c()))
    }
    );
    return w.useEffect( () => {
        if (re)
            return p.addEventListener(`keydown`, ie, {
                capture: !0
            }),
            () => p.removeEventListener(`keydown`, ie, {
                capture: !0
            })
    }
    , [p, re, ie]),
    w.useEffect( () => {
        if (d)
            return n && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (It = p.body.style.pointerEvents,
            p.body.style.pointerEvents = `none`),
            u.layersWithOutsidePointerEventsDisabled.add(d)),
            u.layers.add(d),
            Ut(),
            () => {
                n && (u.layersWithOutsidePointerEventsDisabled.delete(d),
                u.layersWithOutsidePointerEventsDisabled.size === 0 && (p.body.style.pointerEvents = It))
            }
    }
    , [d, p, n, u]),
    w.useEffect( () => () => {
        d && (u.layers.delete(d),
        u.layersWithOutsidePointerEventsDisabled.delete(d),
        Ut())
    }
    , [d, u]),
    w.useEffect( () => {
        let e = A( () => m({}), `handleUpdate`);
        return document.addEventListener(Nt, e),
        () => document.removeEventListener(Nt, e)
    }
    , []),
    (0,
    T.jsx)(k.div, {
        ...l,
        ref: h,
        style: {
            pointerEvents: ee ? b ? `auto` : `none` : void 0,
            ...e.style
        },
        onFocusCapture: D(e.onFocusCapture, ne.onFocusCapture),
        onBlurCapture: D(e.onBlurCapture, ne.onBlurCapture),
        onPointerDownCapture: D(e.onPointerDownCapture, te.onPointerDownCapture)
    })
}, `DismissableLayer`));
function zt() {
    let e = w.useContext(Lt)
      , [t,n] = w.useState(null);
    return w.useEffect( () => {
        if (t)
            return e.dismissableSurfaces.add(t),
            () => {
                e.dismissableSurfaces.delete(t)
            }
    }
    , [t, e.dismissableSurfaces]),
    n
}
A(zt, `useDismissableLayerSurface`);
var Bt = A( () => !0, `IS_TRUE`);
function Vt(e, t) {
    let {ownerDocument: n=globalThis?.document, deferPointerDownOutside: r=!1, isDeferredPointerDownOutsideRef: i, dismissableSurfaces: a, shouldHandlePointerDownOutside: o=Bt} = t
      , s = jt(e)
      , c = w.useRef(!1)
      , l = w.useRef(!1)
      , u = w.useRef(new Map)
      , d = w.useRef( () => {}
    );
    return w.useEffect( () => {
        function e() {
            l.current = !1,
            i.current = !1,
            u.current.clear()
        }
        A(e, `resetOutsideInteraction`);
        function t() {
            return Array.from(u.current.values()).some(Boolean)
        }
        A(t, `isOutsideInteractionIntercepted`);
        function f(e) {
            if (!l.current)
                return;
            let t = e.target;
            t instanceof Node && [...a].some(e => e.contains(t)) || u.current.set(e.type, !0),
            e.type === `click` && window.setTimeout( () => {
                l.current && d.current()
            }
            , 0)
        }
        A(f, `handleInteractionCapture`);
        function p(e) {
            l.current && u.current.set(e.type, !1)
        }
        A(p, `handleInteractionBubble`);
        let m = A(a => {
            if (a.target && !c.current) {
                let f = function() {
                    n.removeEventListener(`click`, d.current);
                    let r = t();
                    e(),
                    r || Wt(Pt, s, p, {
                        discrete: !0
                    })
                };
                if (A(f, `handleAndDispatchPointerDownOutsideEvent`),
                !o(a.target)) {
                    n.removeEventListener(`click`, d.current),
                    e(),
                    c.current = !1;
                    return
                }
                let p = {
                    originalEvent: a
                };
                l.current = !0,
                i.current = r && a.button === 0,
                u.current.clear(),
                !r || a.button !== 0 ? f() : (n.removeEventListener(`click`, d.current),
                d.current = f,
                n.addEventListener(`click`, d.current, {
                    once: !0
                }))
            } else
                n.removeEventListener(`click`, d.current),
                e();
            c.current = !1
        }
        , `handlePointerDown`)
          , h = [`pointerup`, `mousedown`, `mouseup`, `touchstart`, `touchend`, `click`];
        for (let e of h)
            n.addEventListener(e, f, !0),
            n.addEventListener(e, p);
        let g = window.setTimeout( () => {
            n.addEventListener(`pointerdown`, m)
        }
        , 0);
        return () => {
            window.clearTimeout(g),
            n.removeEventListener(`pointerdown`, m),
            n.removeEventListener(`click`, d.current);
            for (let e of h)
                n.removeEventListener(e, f, !0),
                n.removeEventListener(e, p)
        }
    }
    , [n, s, r, i, a, o]),
    {
        onPointerDownCapture: A( () => c.current = !0, `onPointerDownCapture`)
    }
}
A(Vt, `usePointerDownOutside`);
function Ht(e, t=globalThis?.document) {
    let n = jt(e)
      , r = w.useRef(!1);
    return w.useEffect( () => {
        let e = A(e => {
            e.target && !r.current && Wt(Ft, n, {
                originalEvent: e
            }, {
                discrete: !1
            })
        }
        , `handleFocus`);
        return t.addEventListener(`focusin`, e),
        () => t.removeEventListener(`focusin`, e)
    }
    , [t, n]),
    {
        onFocusCapture: A( () => r.current = !0, `onFocusCapture`),
        onBlurCapture: A( () => r.current = !1, `onBlurCapture`)
    }
}
A(Ht, `useFocusOutside`);
function Ut() {
    let e = new CustomEvent(Nt);
    document.dispatchEvent(e)
}
A(Ut, `dispatchUpdate`);
function Wt(e, t, n, {discrete: r}) {
    let i = n.originalEvent.target
      , a = new CustomEvent(e,{
        bubbles: !1,
        cancelable: !0,
        detail: n
    });
    t && i.addEventListener(e, t, {
        once: !0
    }),
    r ? Ot(i, a) : i.dispatchEvent(a)
}
A(Wt, `handleAndDispatchCustomEvent`);
var Gt = Object.defineProperty
  , j = (e, t) => Gt(e, `name`, {
    value: t,
    configurable: !0
})
  , Kt = `focusScope.autoFocusOnMount`
  , qt = `focusScope.autoFocusOnUnmount`
  , Jt = {
    bubbles: !1,
    cancelable: !0
}
  , Yt = w.forwardRef(j(function(e, t) {
    let {loop: n=!1, trapped: r=!1, onMountAutoFocus: i, onUnmountAutoFocus: a, ...o} = e
      , [s,c] = w.useState(null)
      , l = jt(i)
      , u = jt(a)
      , d = w.useRef(null)
      , f = me(t, c)
      , p = w.useRef({
        paused: !1,
        pause() {
            this.paused = !0
        },
        resume() {
            this.paused = !1
        }
    }).current;
    w.useEffect( () => {
        if (r) {
            let e = function(e) {
                if (p.paused || !s)
                    return;
                let t = e.target;
                s.contains(t) ? d.current = t : M(d.current, {
                    select: !0
                })
            }
              , t = function(e) {
                if (p.paused || !s)
                    return;
                let t = e.relatedTarget;
                t !== null && (s.contains(t) || M(d.current, {
                    select: !0
                }))
            }
              , n = function(e) {
                if (document.activeElement === document.body)
                    for (let t of e)
                        t.removedNodes.length > 0 && M(s)
            };
            j(e, `handleFocusIn`),
            j(t, `handleFocusOut`),
            j(n, `handleMutations`),
            document.addEventListener(`focusin`, e),
            document.addEventListener(`focusout`, t);
            let r = new MutationObserver(n);
            return s && r.observe(s, {
                childList: !0,
                subtree: !0
            }),
            () => {
                document.removeEventListener(`focusin`, e),
                document.removeEventListener(`focusout`, t),
                r.disconnect()
            }
        }
    }
    , [r, s, p.paused]),
    w.useEffect( () => {
        if (s) {
            nn.add(p);
            let e = document.activeElement;
            if (!s.contains(e)) {
                let t = new CustomEvent(Kt,Jt);
                s.addEventListener(Kt, l),
                s.dispatchEvent(t),
                t.defaultPrevented || (Xt(on(Qt(s)), {
                    select: !0
                }),
                document.activeElement === e && M(s))
            }
            return () => {
                s.removeEventListener(Kt, l),
                setTimeout( () => {
                    let t = new CustomEvent(qt,Jt);
                    s.addEventListener(qt, u),
                    s.dispatchEvent(t),
                    t.defaultPrevented || M(e ?? document.body, {
                        select: !0
                    }),
                    s.removeEventListener(qt, u),
                    nn.remove(p)
                }
                , 0)
            }
        }
    }
    , [s, l, u, p]);
    let m = w.useCallback(e => {
        if (!n && !r || p.paused)
            return;
        let t = e.key === `Tab` && !e.altKey && !e.ctrlKey && !e.metaKey
          , i = document.activeElement;
        if (t && i) {
            let t = e.currentTarget
              , [r,a] = Zt(t);
            r && a ? !e.shiftKey && i === a ? (e.preventDefault(),
            n && M(r, {
                select: !0
            })) : e.shiftKey && i === r && (e.preventDefault(),
            n && M(a, {
                select: !0
            })) : i === t && e.preventDefault()
        }
    }
    , [n, r, p.paused]);
    return (0,
    T.jsx)(k.div, {
        tabIndex: -1,
        ...o,
        ref: f,
        onKeyDown: m
    })
}, `FocusScope`));
function Xt(e, {select: t=!1}={}) {
    let n = document.activeElement;
    for (let r of e)
        if (M(r, {
            select: t
        }),
        document.activeElement !== n)
            return
}
j(Xt, `focusFirst`);
function Zt(e) {
    let t = Qt(e);
    return [$t(t, e), $t(t.reverse(), e)]
}
j(Zt, `getTabbableEdges`);
function Qt(e) {
    let t = []
      , n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
        acceptNode: j(e => {
            let t = e.tagName === `INPUT` && e.type === `hidden`;
            return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
        }
        , `acceptNode`)
    });
    for (; n.nextNode(); )
        t.push(n.currentNode);
    return t
}
j(Qt, `getTabbableCandidates`);
function $t(e, t) {
    let n = typeof t.checkVisibility == `function` && t.checkVisibility({
        checkVisibilityCSS: !0
    });
    for (let r of e)
        if (!(n ? !r.checkVisibility({
            checkVisibilityCSS: !0
        }) : en(r, {
            upTo: t
        })))
            return r
}
j($t, `findVisible`);
function en(e, {upTo: t}) {
    if (getComputedStyle(e).visibility === `hidden`)
        return !0;
    for (; e; ) {
        if (t !== void 0 && e === t)
            return !1;
        if (getComputedStyle(e).display === `none`)
            return !0;
        e = e.parentElement
    }
    return !1
}
j(en, `isHidden`);
function tn(e) {
    return e instanceof HTMLInputElement && `select` in e
}
j(tn, `isSelectableInput`);
function M(e, {select: t=!1}={}) {
    if (e && e.focus) {
        let n = document.activeElement;
        e.focus({
            preventScroll: !0
        }),
        e !== n && tn(e) && t && e.select()
    }
}
j(M, `focus`);
var nn = rn();
function rn() {
    let e = [];
    return {
        add(t) {
            let n = e[0];
            t !== n && n?.pause(),
            e = an(e, t),
            e.unshift(t)
        },
        remove(t) {
            e = an(e, t),
            e[0]?.resume()
        }
    }
}
j(rn, `createFocusScopesStack`);
function an(e, t) {
    let n = [...e]
      , r = n.indexOf(t);
    return r !== -1 && n.splice(r, 1),
    n
}
j(an, `arrayRemove`);
function on(e) {
    return e.filter(e => e.tagName !== `A`)
}
j(on, `removeLinks`);
var sn = Object.defineProperty
  , cn = w.forwardRef(( (e, t) => sn(e, `name`, {
    value: t,
    configurable: !0
}))(function(e, t) {
    let {container: n, ...r} = e
      , [i,a] = w.useState(!1);
    O( () => a(!0), []);
    let o = n || i && globalThis?.document?.body;
    return o ? Tt.createPortal((0,
    T.jsx)(k.div, {
        ...r,
        ref: t
    }), o) : null
}, `Portal`))
  , ln = Object.defineProperty
  , N = (e, t) => ln(e, `name`, {
    value: t,
    configurable: !0
});
function un(e, t) {
    return w.useReducer( (e, n) => t[e][n] ?? e, e)
}
N(un, `useStateMachine`);
var dn = N(e => {
    let {present: t, children: n} = e
      , r = fn(t)
      , i = typeof n == `function` ? n({
        present: r.isPresent
    }) : w.Children.only(n)
      , a = mn(r.ref, gn(i));
    return typeof n == `function` || r.isPresent ? w.cloneElement(i, {
        ref: a
    }) : null
}
, `Presence`);
function fn(e) {
    let[t,n] = w.useState()
      , r = w.useRef(null)
      , i = w.useRef(e)
      , a = w.useRef(`none`)
      , o = w.useRef(void 0)
      , [s,c] = un(e ? `mounted` : `unmounted`, {
        mounted: {
            UNMOUNT: `unmounted`,
            ANIMATION_OUT: `unmountSuspended`
        },
        unmountSuspended: {
            MOUNT: `mounted`,
            ANIMATION_END: `unmounted`
        },
        unmounted: {
            MOUNT: `mounted`
        }
    });
    return w.useEffect( () => {
        s === `mounted` ? (a.current = o.current ?? hn(r.current),
        o.current = void 0) : a.current = `none`
    }
    , [s]),
    O( () => {
        let t = r.current
          , n = i.current;
        if (n !== e) {
            let r = a.current
              , s = hn(t);
            e ? (o.current = s,
            c(`MOUNT`)) : s === `none` || t?.display === `none` ? c(`UNMOUNT`) : c(n && r !== s ? `ANIMATION_OUT` : `UNMOUNT`),
            i.current = e
        }
    }
    , [e, c]),
    O( () => {
        if (t) {
            let e, n = t.ownerDocument.defaultView ?? window, o = N(a => {
                let o = hn(r.current).includes(CSS.escape(a.animationName));
                if (a.target === t && o && (c(`ANIMATION_END`),
                !i.current)) {
                    let r = t.style.animationFillMode;
                    t.style.animationFillMode = `forwards`,
                    e = n.setTimeout( () => {
                        t.style.animationFillMode === `forwards` && (t.style.animationFillMode = r)
                    }
                    )
                }
            }
            , `handleAnimationEnd`), s = N(e => {
                e.target === t && (a.current = hn(r.current))
            }
            , `handleAnimationStart`);
            return t.addEventListener(`animationstart`, s),
            t.addEventListener(`animationcancel`, o),
            t.addEventListener(`animationend`, o),
            () => {
                n.clearTimeout(e),
                t.removeEventListener(`animationstart`, s),
                t.removeEventListener(`animationcancel`, o),
                t.removeEventListener(`animationend`, o)
            }
        }
        c(`ANIMATION_END`)
    }
    , [t, c]),
    {
        isPresent: [`mounted`, `unmountSuspended`].includes(s),
        ref: w.useCallback(e => {
            if (e) {
                let t = getComputedStyle(e);
                r.current = t,
                o.current = hn(t)
            } else
                r.current = null;
            n(e)
        }
        , [])
    }
}
N(fn, `usePresence`);
function pn(e, t) {
    if (typeof e == `function`)
        return e(t);
    e != null && (e.current = t)
}
N(pn, `setRef`);
function mn(...e) {
    let t = w.useRef(e);
    return t.current = e,
    w.useCallback(e => {
        let n = t.current
          , r = !1
          , i = n.map(t => {
            let n = pn(t, e);
            return !r && typeof n == `function` && (r = !0),
            n
        }
        );
        if (r)
            return () => {
                for (let e = 0; e < i.length; e++) {
                    let t = i[e];
                    typeof t == `function` ? t() : pn(n[e], null)
                }
            }
    }
    , [])
}
N(mn, `useStableComposedRefs`);
function hn(e) {
    return e?.animationName || `none`
}
N(hn, `getAnimationName`);
function gn(e) {
    let t = Object.getOwnPropertyDescriptor(e.props, `ref`)?.get
      , n = t && `isReactWarning` in t && t.isReactWarning;
    return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, `ref`)?.get,
    n = t && `isReactWarning` in t && t.isReactWarning,
    n ? e.props.ref : e.props.ref || e.ref)
}
N(gn, `getElementRef`);
var _n = Object.defineProperty
  , vn = (e, t) => _n(e, `name`, {
    value: t,
    configurable: !0
})
  , yn = 0
  , bn = null;
function xn(e) {
    return Sn(),
    e.children
}
vn(xn, `FocusGuards`);
function Sn() {
    w.useEffect( () => {
        bn ||= {
            start: Cn(),
            end: Cn()
        };
        let {start: e, end: t} = bn;
        return document.body.firstElementChild !== e && document.body.insertAdjacentElement(`afterbegin`, e),
        document.body.lastElementChild !== t && document.body.insertAdjacentElement(`beforeend`, t),
        yn++,
        () => {
            yn === 1 && (bn?.start.remove(),
            bn?.end.remove(),
            bn = null),
            yn = Math.max(0, yn - 1)
        }
    }
    , [])
}
vn(Sn, `useFocusGuards`);
function Cn() {
    let e = document.createElement(`span`);
    return e.setAttribute(`data-radix-focus-guard`, ``),
    e.tabIndex = 0,
    e.style.outline = `none`,
    e.style.opacity = `0`,
    e.style.position = `fixed`,
    e.style.pointerEvents = `none`,
    e
}
vn(Cn, `createFocusGuard`);
var wn = `right-scroll-bar-position`
  , Tn = `width-before-scroll-bar`
  , En = `with-scroll-bars-hidden`
  , Dn = `--removed-body-scroll-bar-size`;
function On(e, t) {
    return typeof e == `function` ? e(t) : e && (e.current = t),
    e
}
function kn(e, t) {
    var n = (0,
    w.useState)(function() {
        return {
            value: e,
            callback: t,
            facade: {
                get current() {
                    return n.value
                },
                set current(e) {
                    var t = n.value;
                    t !== e && (n.value = e,
                    n.callback(e, t))
                }
            }
        }
    })[0];
    return n.callback = t,
    n.facade
}
var An = typeof window < `u` ? w.useLayoutEffect : w.useEffect
  , jn = new WeakMap;
function Mn(e, t) {
    var n = kn(t || null, function(t) {
        return e.forEach(function(e) {
            return On(e, t)
        })
    });
    return An(function() {
        var t = jn.get(n);
        if (t) {
            var r = new Set(t)
              , i = new Set(e)
              , a = n.current;
            r.forEach(function(e) {
                i.has(e) || On(e, null)
            }),
            i.forEach(function(e) {
                r.has(e) || On(e, a)
            })
        }
        jn.set(n, e)
    }, [e]),
    n
}
function Nn(e) {
    return e
}
function Pn(e, t) {
    t === void 0 && (t = Nn);
    var n = []
      , r = !1;
    return {
        read: function() {
            if (r)
                throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
            return n.length ? n[n.length - 1] : e
        },
        useMedium: function(e) {
            var i = t(e, r);
            return n.push(i),
            function() {
                n = n.filter(function(e) {
                    return e !== i
                })
            }
        },
        assignSyncMedium: function(e) {
            for (r = !0; n.length; ) {
                var t = n;
                n = [],
                t.forEach(e)
            }
            n = {
                push: function(t) {
                    return e(t)
                },
                filter: function() {
                    return n
                }
            }
        },
        assignMedium: function(e) {
            r = !0;
            var t = [];
            if (n.length) {
                var i = n;
                n = [],
                i.forEach(e),
                t = n
            }
            var a = function() {
                var n = t;
                t = [],
                n.forEach(e)
            }
              , o = function() {
                return Promise.resolve().then(a)
            };
            o(),
            n = {
                push: function(e) {
                    t.push(e),
                    o()
                },
                filter: function(e) {
                    return t = t.filter(e),
                    n
                }
            }
        }
    }
}
function Fn(e) {
    e === void 0 && (e = {});
    var t = Pn(null);
    return t.options = l({
        async: !0,
        ssr: !1
    }, e),
    t
}
var In = function(e) {
    var t = e.sideCar
      , n = u(e, [`sideCar`]);
    if (!t)
        throw Error("Sidecar: please provide `sideCar` property to import the right car");
    var r = t.read();
    if (!r)
        throw Error(`Sidecar medium not found`);
    return w.createElement(r, l({}, n))
};
In.isSideCarExport = !0;
function Ln(e, t) {
    return e.useMedium(t),
    In
}
var Rn = Fn()
  , zn = function() {}
  , Bn = w.forwardRef(function(e, t) {
    var n = w.useRef(null)
      , r = w.useState({
        onScrollCapture: zn,
        onWheelCapture: zn,
        onTouchMoveCapture: zn
    })
      , i = r[0]
      , a = r[1]
      , o = e.forwardProps
      , s = e.children
      , c = e.className
      , d = e.removeScrollBar
      , f = e.enabled
      , p = e.shards
      , m = e.sideCar
      , h = e.noRelative
      , g = e.noIsolation
      , _ = e.inert
      , v = e.allowPinchZoom
      , y = e.as
      , ee = y === void 0 ? `div` : y
      , b = e.gapMode
      , x = u(e, [`forwardProps`, `children`, `className`, `removeScrollBar`, `enabled`, `shards`, `sideCar`, `noRelative`, `noIsolation`, `inert`, `allowPinchZoom`, `as`, `gapMode`])
      , te = m
      , ne = Mn([n, t])
      , re = l(l({}, x), i);
    return w.createElement(w.Fragment, null, f && w.createElement(te, {
        sideCar: Rn,
        removeScrollBar: d,
        shards: p,
        noRelative: h,
        noIsolation: g,
        inert: _,
        setCallbacks: a,
        allowPinchZoom: !!v,
        lockRef: n,
        gapMode: b
    }), o ? w.cloneElement(w.Children.only(s), l(l({}, re), {
        ref: ne
    })) : w.createElement(ee, l({}, re, {
        className: c,
        ref: ne
    }), s))
});
Bn.defaultProps = {
    enabled: !0,
    removeScrollBar: !0,
    inert: !1
},
Bn.classNames = {
    fullWidth: Tn,
    zeroRight: wn
};
var Vn, Hn = function() {
    if (Vn)
        return Vn;
    if (typeof __webpack_nonce__ < `u`)
        return __webpack_nonce__
};
function Un() {
    if (!document)
        return null;
    var e = document.createElement(`style`);
    e.type = `text/css`;
    var t = Hn();
    return t && e.setAttribute(`nonce`, t),
    e
}
function Wn(e, t) {
    e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t))
}
function Gn(e) {
    (document.head || document.getElementsByTagName(`head`)[0]).appendChild(e)
}
var Kn = function() {
    var e = 0
      , t = null;
    return {
        add: function(n) {
            e == 0 && (t = Un()) && (Wn(t, n),
            Gn(t)),
            e++
        },
        remove: function() {
            e--,
            !e && t && (t.parentNode && t.parentNode.removeChild(t),
            t = null)
        }
    }
}
  , qn = function() {
    var e = Kn();
    return function(t, n) {
        w.useEffect(function() {
            return e.add(t),
            function() {
                e.remove()
            }
        }, [t && n])
    }
}
  , Jn = function() {
    var e = qn();
    return function(t) {
        var n = t.styles
          , r = t.dynamic;
        return e(n, r),
        null
    }
}
  , Yn = {
    left: 0,
    top: 0,
    right: 0,
    gap: 0
}
  , Xn = function(e) {
    return parseInt(e || ``, 10) || 0
}
  , Zn = function(e) {
    var t = window.getComputedStyle(document.body)
      , n = t[e === `padding` ? `paddingLeft` : `marginLeft`]
      , r = t[e === `padding` ? `paddingTop` : `marginTop`]
      , i = t[e === `padding` ? `paddingRight` : `marginRight`];
    return [Xn(n), Xn(r), Xn(i)]
}
  , Qn = function(e) {
    if (e === void 0 && (e = `margin`),
    typeof window > `u`)
        return Yn;
    var t = Zn(e)
      , n = document.documentElement.clientWidth
      , r = window.innerWidth;
    return {
        left: t[0],
        top: t[1],
        right: t[2],
        gap: Math.max(0, r - n + t[2] - t[0])
    }
}
  , $n = Jn()
  , er = `data-scroll-locked`
  , tr = function(e, t, n, r) {
    var i = e.left
      , a = e.top
      , o = e.right
      , s = e.gap;
    return n === void 0 && (n = `margin`),
    `
  .${En} {
   overflow: hidden ${r};
   padding-right: ${s}px ${r};
  }
  body[${er}] {
    overflow: hidden ${r};
    overscroll-behavior: contain;
    ${[t && `position: relative ${r};`, n === `margin` && `
    padding-left: ${i}px;
    padding-top: ${a}px;
    padding-right: ${o}px;
    margin-left:0;
    margin-top:0;
    margin-right: ${s}px ${r};
    `, n === `padding` && `padding-right: ${s}px ${r};`].filter(Boolean).join(``)}
  }
  
  .${wn} {
    right: ${s}px ${r};
  }
  
  .${Tn} {
    margin-right: ${s}px ${r};
  }
  
  .${wn} .${wn} {
    right: 0 ${r};
  }
  
  .${Tn} .${Tn} {
    margin-right: 0 ${r};
  }
  
  body[${er}] {
    ${Dn}: ${s}px;
  }
`
}
  , nr = function() {
    var e = parseInt(document.body.getAttribute(`data-scroll-locked`) || `0`, 10);
    return isFinite(e) ? e : 0
}
  , rr = function() {
    w.useEffect(function() {
        return document.body.setAttribute(er, (nr() + 1).toString()),
        function() {
            var e = nr() - 1;
            e <= 0 ? document.body.removeAttribute(er) : document.body.setAttribute(er, e.toString())
        }
    }, [])
}
  , ir = function(e) {
    var t = e.noRelative
      , n = e.noImportant
      , r = e.gapMode
      , i = r === void 0 ? `margin` : r;
    rr();
    var a = w.useMemo(function() {
        return Qn(i)
    }, [i]);
    return w.createElement($n, {
        styles: tr(a, !t, i, n ? `` : `!important`)
    })
}
  , ar = !1;
if (typeof window < `u`)
    try {
        var or = Object.defineProperty({}, "passive", {
            get: function() {
                return ar = !0,
                !0
            }
        });
        window.addEventListener(`test`, or, or),
        window.removeEventListener(`test`, or, or)
    } catch {
        ar = !1
    }
var sr = ar ? {
    passive: !1
} : !1
  , cr = function(e) {
    return e.tagName === `TEXTAREA`
}
  , lr = function(e, t) {
    if (!(e instanceof Element))
        return !1;
    var n = window.getComputedStyle(e);
    return n[t] !== `hidden` && !(n.overflowY === n.overflowX && !cr(e) && n[t] === `visible`)
}
  , ur = function(e) {
    return lr(e, `overflowY`)
}
  , dr = function(e) {
    return lr(e, `overflowX`)
}
  , fr = function(e, t) {
    var n = t.ownerDocument
      , r = t;
    do {
        if (typeof ShadowRoot < `u` && r instanceof ShadowRoot && (r = r.host),
        hr(e, r)) {
            var i = gr(e, r);
            if (i[1] > i[2])
                return !0
        }
        r = r.parentNode
    } while (r && r !== n.body);
    return !1
}
  , pr = function(e) {
    return [e.scrollTop, e.scrollHeight, e.clientHeight]
}
  , mr = function(e) {
    return [e.scrollLeft, e.scrollWidth, e.clientWidth]
}
  , hr = function(e, t) {
    return e === `v` ? ur(t) : dr(t)
}
  , gr = function(e, t) {
    return e === `v` ? pr(t) : mr(t)
}
  , _r = function(e, t) {
    return e === `h` && t === `rtl` ? -1 : 1
}
  , vr = function(e, t, n, r, i) {
    var a = _r(e, window.getComputedStyle(t).direction)
      , o = a * r
      , s = n.target
      , c = t.contains(s)
      , l = !1
      , u = o > 0
      , d = 0
      , f = 0;
    do {
        if (!s)
            break;
        var p = gr(e, s)
          , m = p[0]
          , h = p[1] - p[2] - a * m;
        (m || h) && hr(e, s) && (d += h,
        f += m);
        var g = s.parentNode;
        s = g && g.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? g.host : g
    } while (!c && s !== document.body || c && (t.contains(s) || t === s));
    return (u && (i && Math.abs(d) < 1 || !i && o > d) || !u && (i && Math.abs(f) < 1 || !i && -o > f)) && (l = !0),
    l
}
  , yr = function(e) {
    return `changedTouches` in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0]
}
  , br = function(e) {
    return [e.deltaX, e.deltaY]
}
  , xr = function(e) {
    return e && `current` in e ? e.current : e
}
  , Sr = function(e, t) {
    return e[0] === t[0] && e[1] === t[1]
}
  , Cr = function(e) {
    return `
  .block-interactivity-${e} {pointer-events: none;}
  .allow-interactivity-${e} {pointer-events: all;}
`
}
  , wr = 0
  , Tr = [];
function Er(e) {
    var t = w.useRef([])
      , n = w.useRef([0, 0])
      , i = w.useRef()
      , a = w.useState(wr++)[0]
      , o = w.useState(Jn)[0]
      , s = w.useRef(e);
    w.useEffect(function() {
        s.current = e
    }, [e]),
    w.useEffect(function() {
        if (e.inert) {
            document.body.classList.add(`block-interactivity-${a}`);
            var t = r([e.lockRef.current], (e.shards || []).map(xr), !0).filter(Boolean);
            return t.forEach(function(e) {
                return e.classList.add(`allow-interactivity-${a}`)
            }),
            function() {
                document.body.classList.remove(`block-interactivity-${a}`),
                t.forEach(function(e) {
                    return e.classList.remove(`allow-interactivity-${a}`)
                })
            }
        }
    }, [e.inert, e.lockRef.current, e.shards]);
    var c = w.useCallback(function(e, t) {
        if (`touches` in e && e.touches.length === 2 || e.type === `wheel` && e.ctrlKey)
            return !s.current.allowPinchZoom;
        var r = yr(e), a = n.current, o = `deltaX` in e ? e.deltaX : a[0] - r[0], c = `deltaY` in e ? e.deltaY : a[1] - r[1], l, u = e.target, d = Math.abs(o) > Math.abs(c) ? `h` : `v`;
        if (`touches` in e && d === `h` && u.type === `range`)
            return !1;
        var f = window.getSelection()
          , p = f && f.anchorNode;
        if (p && (p === u || p.contains(u)))
            return !1;
        var m = fr(d, u);
        if (!m)
            return !0;
        if (m ? l = d : (l = d === `v` ? `h` : `v`,
        m = fr(d, u)),
        !m)
            return !1;
        if (!i.current && `changedTouches` in e && (o || c) && (i.current = l),
        !l)
            return !0;
        var h = i.current || l;
        return vr(h, t, e, h === `h` ? o : c, !0)
    }, [])
      , l = w.useCallback(function(e) {
        var n = e;
        if (!(!Tr.length || Tr[Tr.length - 1] !== o)) {
            var r = `deltaY` in n ? br(n) : yr(n)
              , i = t.current.filter(function(e) {
                return e.name === n.type && (e.target === n.target || n.target === e.shadowParent) && Sr(e.delta, r)
            })[0];
            if (i && i.should) {
                n.cancelable && n.preventDefault();
                return
            }
            if (!i) {
                var a = (s.current.shards || []).map(xr).filter(Boolean).filter(function(e) {
                    return e.contains(n.target)
                });
                (a.length > 0 ? c(n, a[0]) : !s.current.noIsolation) && n.cancelable && n.preventDefault()
            }
        }
    }, [])
      , u = w.useCallback(function(e, n, r, i) {
        var a = {
            name: e,
            delta: n,
            target: r,
            should: i,
            shadowParent: Dr(r)
        };
        t.current.push(a),
        setTimeout(function() {
            t.current = t.current.filter(function(e) {
                return e !== a
            })
        }, 1)
    }, [])
      , d = w.useCallback(function(e) {
        n.current = yr(e),
        i.current = void 0
    }, [])
      , f = w.useCallback(function(t) {
        u(t.type, br(t), t.target, c(t, e.lockRef.current))
    }, [])
      , p = w.useCallback(function(t) {
        u(t.type, yr(t), t.target, c(t, e.lockRef.current))
    }, []);
    w.useEffect(function() {
        return Tr.push(o),
        e.setCallbacks({
            onScrollCapture: f,
            onWheelCapture: f,
            onTouchMoveCapture: p
        }),
        document.addEventListener(`wheel`, l, sr),
        document.addEventListener(`touchmove`, l, sr),
        document.addEventListener(`touchstart`, d, sr),
        function() {
            Tr = Tr.filter(function(e) {
                return e !== o
            }),
            document.removeEventListener(`wheel`, l, sr),
            document.removeEventListener(`touchmove`, l, sr),
            document.removeEventListener(`touchstart`, d, sr)
        }
    }, []);
    var m = e.removeScrollBar
      , h = e.inert;
    return w.createElement(w.Fragment, null, h ? w.createElement(o, {
        styles: Cr(a)
    }) : null, m ? w.createElement(ir, {
        noRelative: e.noRelative,
        gapMode: e.gapMode
    }) : null)
}
function Dr(e) {
    for (var t = null; e !== null; )
        e instanceof ShadowRoot && (t = e.host,
        e = e.host),
        e = e.parentNode;
    return t
}
var Or = Ln(Rn, Er)
  , kr = w.forwardRef(function(e, t) {
    return w.createElement(Bn, l({}, e, {
        ref: t,
        sideCar: Or
    }))
});
kr.classNames = Bn.classNames;
var Ar = function(e) {
    return typeof document > `u` ? null : (Array.isArray(e) ? e[0] : e).ownerDocument.body
}
  , jr = new WeakMap
  , Mr = new WeakMap
  , Nr = {}
  , Pr = 0
  , Fr = function(e) {
    return e && (e.host || Fr(e.parentNode))
}
  , Ir = function(e, t) {
    return t.map(function(t) {
        if (e.contains(t))
            return t;
        var n = Fr(t);
        return n && e.contains(n) ? n : (console.error(`aria-hidden`, t, `in not contained inside`, e, `. Doing nothing`),
        null)
    }).filter(function(e) {
        return !!e
    })
}
  , Lr = function(e, t, n, r) {
    var i = Ir(t, Array.isArray(e) ? e : [e]);
    Nr[n] || (Nr[n] = new WeakMap);
    var a = Nr[n]
      , o = []
      , s = new Set
      , c = new Set(i)
      , l = function(e) {
        !e || s.has(e) || (s.add(e),
        l(e.parentNode))
    };
    i.forEach(l);
    var u = function(e) {
        !e || c.has(e) || Array.prototype.forEach.call(e.children, function(e) {
            if (s.has(e))
                u(e);
            else
                try {
                    var t = e.getAttribute(r)
                      , i = t !== null && t !== `false`
                      , c = (jr.get(e) || 0) + 1
                      , l = (a.get(e) || 0) + 1;
                    jr.set(e, c),
                    a.set(e, l),
                    o.push(e),
                    c === 1 && i && Mr.set(e, !0),
                    l === 1 && e.setAttribute(n, `true`),
                    i || e.setAttribute(r, `true`)
                } catch (t) {
                    console.error(`aria-hidden: cannot operate on `, e, t)
                }
        })
    };
    return u(t),
    s.clear(),
    Pr++,
    function() {
        o.forEach(function(e) {
            var t = jr.get(e) - 1
              , i = a.get(e) - 1;
            jr.set(e, t),
            a.set(e, i),
            t || (Mr.has(e) || e.removeAttribute(r),
            Mr.delete(e)),
            i || e.removeAttribute(n)
        }),
        Pr--,
        Pr || (jr = new WeakMap,
        jr = new WeakMap,
        Mr = new WeakMap,
        Nr = {})
    }
}
  , Rr = function(e, t, n) {
    n === void 0 && (n = `data-aria-hidden`);
    var r = Array.from(Array.isArray(e) ? e : [e])
      , i = t || Ar(e);
    return i ? (r.push.apply(r, Array.from(i.querySelectorAll(`[aria-live], script`))),
    Lr(r, i, n, `aria-hidden`)) : function() {
        return null
    }
}
  , zr = Object.defineProperty
  , P = (e, t) => zr(e, `name`, {
    value: t,
    configurable: !0
})
  , Br = `Dialog`
  , [Vr,Hr] = Qe(Br)
  , [Ur,F] = Vr(Br)
  , Wr = P(e => {
    let {__scopeDialog: t, children: n, open: r, defaultOpen: i, onOpenChange: a, modal: o=!0} = e
      , s = w.useRef(null)
      , c = w.useRef(null)
      , [l,u] = bt({
        prop: r,
        defaultProp: i ?? !1,
        onChange: a,
        caller: Br
    })
      , [d,f] = w.useState(0)
      , [p,m] = w.useState(0);
    return (0,
    T.jsx)(Ur, {
        scope: t,
        triggerRef: s,
        contentRef: c,
        contentId: dt(),
        titleId: dt(),
        descriptionId: dt(),
        titlePresent: d > 0,
        descriptionPresent: p > 0,
        setTitleCount: f,
        setDescriptionCount: m,
        open: l,
        onOpenChange: u,
        onOpenToggle: w.useCallback( () => u(e => !e), [u]),
        modal: o,
        children: n
    })
}
, `Dialog`)
  , Gr = `DialogTrigger`
  , Kr = w.forwardRef(P(function(e, t) {
    let {__scopeDialog: n, ...r} = e
      , i = F(Gr, n)
      , a = me(t, i.triggerRef);
    return (0,
    T.jsx)(k.button, {
        type: `button`,
        "aria-haspopup": `dialog`,
        "aria-expanded": i.open,
        "aria-controls": i.open ? i.contentId : void 0,
        "data-state": fi(i.open),
        ...r,
        ref: a,
        onClick: D(e.onClick, i.onOpenToggle)
    })
}, `DialogTrigger`))
  , qr = `DialogPortal`
  , [Jr,Yr] = Vr(qr, {
    forceMount: void 0
})
  , Xr = P(e => {
    let {__scopeDialog: t, forceMount: n, children: r, container: i} = e
      , a = F(qr, t);
    return (0,
    T.jsx)(Jr, {
        scope: t,
        forceMount: n,
        children: w.Children.map(r, e => (0,
        T.jsx)(dn, {
            present: n || a.open,
            children: (0,
            T.jsx)(cn, {
                asChild: !0,
                container: i,
                children: e
            })
        }))
    })
}
, `DialogPortal`)
  , Zr = `DialogOverlay`
  , Qr = w.forwardRef(P(function(e, t) {
    let n = Yr(Zr, e.__scopeDialog)
      , {forceMount: r=n.forceMount, ...i} = e
      , a = F(Zr, e.__scopeDialog);
    return a.modal ? (0,
    T.jsx)(dn, {
        present: r || a.open,
        children: (0,
        T.jsx)(ei, {
            ...i,
            ref: t
        })
    }) : null
}, `DialogOverlay`))
  , $r = fe(`DialogOverlay.RemoveScroll`)
  , ei = w.forwardRef(P(function(e, t) {
    let {__scopeDialog: n, ...r} = e
      , i = F(Zr, n)
      , a = zt()
      , o = me(t, a);
    return (0,
    T.jsx)(kr, {
        as: $r,
        allowPinchZoom: !0,
        shards: [i.contentRef],
        children: (0,
        T.jsx)(k.div, {
            "data-state": fi(i.open),
            ...r,
            ref: o,
            style: {
                pointerEvents: `auto`,
                ...r.style
            }
        })
    })
}, `DialogOverlayImpl`))
  , ti = `DialogContent`
  , ni = w.forwardRef(P(function(e, t) {
    let n = Yr(ti, e.__scopeDialog)
      , {forceMount: r=n.forceMount, ...i} = e
      , a = F(ti, e.__scopeDialog);
    return (0,
    T.jsx)(dn, {
        present: r || a.open,
        children: a.modal ? (0,
        T.jsx)(ri, {
            ...i,
            ref: t
        }) : (0,
        T.jsx)(ii, {
            ...i,
            ref: t
        })
    })
}, `DialogContent`))
  , ri = w.forwardRef(P(function(e, t) {
    let n = F(ti, e.__scopeDialog)
      , r = w.useRef(null)
      , i = me(t, n.contentRef, r);
    return w.useEffect( () => {
        let e = r.current;
        if (e)
            return Rr(e)
    }
    , []),
    (0,
    T.jsx)(ai, {
        ...e,
        ref: i,
        trapFocus: n.open,
        disableOutsidePointerEvents: n.open,
        onCloseAutoFocus: D(e.onCloseAutoFocus, e => {
            e.preventDefault(),
            n.triggerRef.current?.focus()
        }
        ),
        onPointerDownOutside: D(e.onPointerDownOutside, e => {
            let t = e.detail.originalEvent
              , n = t.button === 0 && t.ctrlKey === !0;
            (t.button === 2 || n) && e.preventDefault()
        }
        ),
        onFocusOutside: D(e.onFocusOutside, e => e.preventDefault())
    })
}, `DialogContentModal`))
  , ii = w.forwardRef(P(function(e, t) {
    let n = F(ti, e.__scopeDialog)
      , r = w.useRef(!1)
      , i = w.useRef(!1);
    return (0,
    T.jsx)(ai, {
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
}, `DialogContentNonModal`))
  , ai = w.forwardRef(P(function(e, t) {
    let {__scopeDialog: n, trapFocus: r, onOpenAutoFocus: i, onCloseAutoFocus: a, ...o} = e
      , s = F(ti, n);
    return Sn(),
    (0,
    T.jsx)(T.Fragment, {
        children: (0,
        T.jsx)(Yt, {
            asChild: !0,
            loop: !0,
            trapped: r,
            onMountAutoFocus: i,
            onUnmountAutoFocus: a,
            children: (0,
            T.jsx)(Rt, {
                role: `dialog`,
                id: s.contentId,
                "aria-describedby": s.descriptionPresent ? s.descriptionId : void 0,
                "aria-labelledby": s.titlePresent ? s.titleId : void 0,
                "data-state": fi(s.open),
                ...o,
                ref: t,
                deferPointerDownOutside: !0,
                onDismiss: () => s.onOpenChange(!1)
            })
        })
    })
}, `DialogContentImpl`))
  , oi = `DialogTitle`
  , si = w.forwardRef(P(function(e, t) {
    let {__scopeDialog: n, ...r} = e
      , i = F(oi, n)
      , {setTitleCount: a} = i;
    return O( () => (a(e => e + 1),
    () => a(e => e - 1)), [a]),
    (0,
    T.jsx)(k.h2, {
        id: i.titleId,
        ...r,
        ref: t
    })
}, `DialogTitle`))
  , ci = `DialogDescription`
  , li = w.forwardRef(P(function(e, t) {
    let {__scopeDialog: n, ...r} = e
      , i = F(ci, n)
      , {setDescriptionCount: a} = i;
    return O( () => (a(e => e + 1),
    () => a(e => e - 1)), [a]),
    (0,
    T.jsx)(k.p, {
        id: i.descriptionId,
        ...r,
        ref: t
    })
}, `DialogDescription`))
  , ui = `DialogClose`
  , di = w.forwardRef(P(function(e, t) {
    let {__scopeDialog: n, ...r} = e
      , i = F(ui, n);
    return (0,
    T.jsx)(k.button, {
        type: `button`,
        ...r,
        ref: t,
        onClick: D(e.onClick, () => i.onOpenChange(!1))
    })
}, `DialogClose`));
function fi(e) {
    return e ? `open` : `closed`
}
P(fi, `getState`);
function pi() {
    let {user: e} = c()
      , t = o()
      , r = e?.id
      , i = Ye({
        queryKey: [`profile`, r],
        enabled: !!r,
        queryFn: async () => {
            if (!r)
                throw Error(`سجّل الدخول أولاً.`);
            let {data: e, error: t} = await n.from(`profiles`).select(`id,display_name,avatar_path,preferences,updated_at`).eq(`id`, r).single();
            if (t)
                throw t;
            let i = null;
            if (e.avatar_path) {
                let t = await n.storage.from(`avatars`).createSignedUrl(e.avatar_path, 3600);
                if (t.error)
                    throw t.error;
                i = t.data.signedUrl
            }
            return {
                ...e,
                avatarUrl: i
            }
        }
        ,
        staleTime: 3e4,
        refetchInterval: 18e5
    });
    return (0,
    w.useEffect)( () => {
        if (!r)
            return;
        let e = n.channel(`profile-${r}-${crypto.randomUUID()}`).on(`postgres_changes`, {
            event: `UPDATE`,
            schema: `public`,
            table: `profiles`,
            filter: `id=eq.${r}`
        }, () => {
            t.invalidateQueries({
                queryKey: [`profile`, r]
            })
        }
        ).subscribe();
        return () => {
            n.removeChannel(e)
        }
    }
    , [r, t]),
    i
}
var mi = {
    theme: `dark`,
    hue: 178,
    font: `Cairo`,
    fontSize: 16,
    density: `comfortable`,
    radius: `rounded`,
    motion: `system`
}
  , hi = [{
    hue: 178,
    name: `تركواز`
}, {
    hue: 150,
    name: `زمردي`
}, {
    hue: 215,
    name: `أزرق`
}, {
    hue: 75,
    name: `عنبري`
}, {
    hue: 25,
    name: `مرجاني`
}]
  , gi = `hazem_studio_prefs_v1`;
function _i() {
    try {
        return {
            ...mi,
            ...JSON.parse(localStorage.getItem(gi) || `{}`)
        }
    } catch {
        return mi
    }
}
function vi(e) {
    localStorage.setItem(gi, JSON.stringify(e))
}
function yi(e) {
    let t = document.documentElement
      , n = e.theme === `dark` || e.theme === `system` && matchMedia(`(prefers-color-scheme: dark)`).matches;
    t.classList.toggle(`light`, !n),
    t.classList.toggle(`dark`, n),
    t.style.setProperty(`--hue`, String(e.hue)),
    t.style.setProperty(`--app-font`, e.font === `system-ui` ? `system-ui` : `"${e.font}"`),
    t.style.setProperty(`--app-font-size`, `${e.fontSize}px`),
    t.dataset.density = e.density,
    t.dataset.radius = e.radius,
    t.dataset.motion = e.motion
}
var I;
(function(e) {
    e.assertEqual = e => {}
    ;
    function t(e) {}
    e.assertIs = t;
    function n(e) {
        throw Error()
    }
    e.assertNever = n,
    e.arrayToEnum = e => {
        let t = {};
        for (let n of e)
            t[n] = n;
        return t
    }
    ,
    e.getValidEnumValues = t => {
        let n = e.objectKeys(t).filter(e => typeof t[t[e]] != `number`)
          , r = {};
        for (let e of n)
            r[e] = t[e];
        return e.objectValues(r)
    }
    ,
    e.objectValues = t => e.objectKeys(t).map(function(e) {
        return t[e]
    }),
    e.objectKeys = typeof Object.keys == `function` ? e => Object.keys(e) : e => {
        let t = [];
        for (let n in e)
            Object.prototype.hasOwnProperty.call(e, n) && t.push(n);
        return t
    }
    ,
    e.find = (e, t) => {
        for (let n of e)
            if (t(n))
                return n
    }
    ,
    e.isInteger = typeof Number.isInteger == `function` ? e => Number.isInteger(e) : e => typeof e == `number` && Number.isFinite(e) && Math.floor(e) === e;
    function r(e, t=` | `) {
        return e.map(e => typeof e == `string` ? `'${e}'` : e).join(t)
    }
    e.joinValues = r,
    e.jsonStringifyReplacer = (e, t) => typeof t == `bigint` ? t.toString() : t
}
)(I ||= {});
var bi;
(function(e) {
    e.mergeShapes = (e, t) => ({
        ...e,
        ...t
    })
}
)(bi ||= {});
var L = I.arrayToEnum([`string`, `nan`, `number`, `integer`, `float`, `boolean`, `date`, `bigint`, `symbol`, `function`, `undefined`, `null`, `array`, `object`, `unknown`, `promise`, `void`, `never`, `map`, `set`])
  , R = e => {
    switch (typeof e) {
    case `undefined`:
        return L.undefined;
    case `string`:
        return L.string;
    case `number`:
        return Number.isNaN(e) ? L.nan : L.number;
    case `boolean`:
        return L.boolean;
    case `function`:
        return L.function;
    case `bigint`:
        return L.bigint;
    case `symbol`:
        return L.symbol;
    case `object`:
        return Array.isArray(e) ? L.array : e === null ? L.null : e.then && typeof e.then == `function` && e.catch && typeof e.catch == `function` ? L.promise : typeof Map < `u` && e instanceof Map ? L.map : typeof Set < `u` && e instanceof Set ? L.set : typeof Date < `u` && e instanceof Date ? L.date : L.object;
    default:
        return L.unknown
    }
}
  , z = I.arrayToEnum([`invalid_type`, `invalid_literal`, `custom`, `invalid_union`, `invalid_union_discriminator`, `invalid_enum_value`, `unrecognized_keys`, `invalid_arguments`, `invalid_return_type`, `invalid_date`, `invalid_string`, `too_small`, `too_big`, `invalid_intersection_types`, `not_multiple_of`, `not_finite`])
  , B = class e extends Error {
    get errors() {
        return this.issues
    }
    constructor(e) {
        super(),
        this.issues = [],
        this.addIssue = e => {
            this.issues = [...this.issues, e]
        }
        ,
        this.addIssues = (e=[]) => {
            this.issues = [...this.issues, ...e]
        }
        ;
        let t = new.target.prototype;
        Object.setPrototypeOf ? Object.setPrototypeOf(this, t) : this.__proto__ = t,
        this.name = `ZodError`,
        this.issues = e
    }
    format(e) {
        let t = e || function(e) {
            return e.message
        }
          , n = {
            _errors: []
        }
          , r = e => {
            for (let i of e.issues)
                if (i.code === `invalid_union`)
                    i.unionErrors.map(r);
                else if (i.code === `invalid_return_type`)
                    r(i.returnTypeError);
                else if (i.code === `invalid_arguments`)
                    r(i.argumentsError);
                else if (i.path.length === 0)
                    n._errors.push(t(i));
                else {
                    let e = n
                      , r = 0;
                    for (; r < i.path.length; ) {
                        let n = i.path[r];
                        r === i.path.length - 1 ? (e[n] = e[n] || {
                            _errors: []
                        },
                        e[n]._errors.push(t(i))) : e[n] = e[n] || {
                            _errors: []
                        },
                        e = e[n],
                        r++
                    }
                }
        }
        ;
        return r(this),
        n
    }
    static assert(t) {
        if (!(t instanceof e))
            throw Error(`Not a ZodError: ${t}`)
    }
    toString() {
        return this.message
    }
    get message() {
        return JSON.stringify(this.issues, I.jsonStringifyReplacer, 2)
    }
    get isEmpty() {
        return this.issues.length === 0
    }
    flatten(e=e => e.message) {
        let t = {}
          , n = [];
        for (let r of this.issues)
            if (r.path.length > 0) {
                let n = r.path[0];
                t[n] = t[n] || [],
                t[n].push(e(r))
            } else
                n.push(e(r));
        return {
            formErrors: n,
            fieldErrors: t
        }
    }
    get formErrors() {
        return this.flatten()
    }
}
;
B.create = e => new B(e);
var xi = (e, t) => {
    let n;
    switch (e.code) {
    case z.invalid_type:
        n = e.received === L.undefined ? `Required` : `Expected ${e.expected}, received ${e.received}`;
        break;
    case z.invalid_literal:
        n = `Invalid literal value, expected ${JSON.stringify(e.expected, I.jsonStringifyReplacer)}`;
        break;
    case z.unrecognized_keys:
        n = `Unrecognized key(s) in object: ${I.joinValues(e.keys, `, `)}`;
        break;
    case z.invalid_union:
        n = `Invalid input`;
        break;
    case z.invalid_union_discriminator:
        n = `Invalid discriminator value. Expected ${I.joinValues(e.options)}`;
        break;
    case z.invalid_enum_value:
        n = `Invalid enum value. Expected ${I.joinValues(e.options)}, received '${e.received}'`;
        break;
    case z.invalid_arguments:
        n = `Invalid function arguments`;
        break;
    case z.invalid_return_type:
        n = `Invalid function return type`;
        break;
    case z.invalid_date:
        n = `Invalid date`;
        break;
    case z.invalid_string:
        typeof e.validation == `object` ? `includes` in e.validation ? (n = `Invalid input: must include "${e.validation.includes}"`,
        typeof e.validation.position == `number` && (n = `${n} at one or more positions greater than or equal to ${e.validation.position}`)) : `startsWith` in e.validation ? n = `Invalid input: must start with "${e.validation.startsWith}"` : `endsWith` in e.validation ? n = `Invalid input: must end with "${e.validation.endsWith}"` : I.assertNever(e.validation) : n = e.validation === `regex` ? `Invalid` : `Invalid ${e.validation}`;
        break;
    case z.too_small:
        n = e.type === `array` ? `Array must contain ${e.exact ? `exactly` : e.inclusive ? `at least` : `more than`} ${e.minimum} element(s)` : e.type === `string` ? `String must contain ${e.exact ? `exactly` : e.inclusive ? `at least` : `over`} ${e.minimum} character(s)` : e.type === `number` || e.type === `bigint` ? `Number must be ${e.exact ? `exactly equal to ` : e.inclusive ? `greater than or equal to ` : `greater than `}${e.minimum}` : e.type === `date` ? `Date must be ${e.exact ? `exactly equal to ` : e.inclusive ? `greater than or equal to ` : `greater than `}${new Date(Number(e.minimum))}` : `Invalid input`;
        break;
    case z.too_big:
        n = e.type === `array` ? `Array must contain ${e.exact ? `exactly` : e.inclusive ? `at most` : `less than`} ${e.maximum} element(s)` : e.type === `string` ? `String must contain ${e.exact ? `exactly` : e.inclusive ? `at most` : `under`} ${e.maximum} character(s)` : e.type === `number` ? `Number must be ${e.exact ? `exactly` : e.inclusive ? `less than or equal to` : `less than`} ${e.maximum}` : e.type === `bigint` ? `BigInt must be ${e.exact ? `exactly` : e.inclusive ? `less than or equal to` : `less than`} ${e.maximum}` : e.type === `date` ? `Date must be ${e.exact ? `exactly` : e.inclusive ? `smaller than or equal to` : `smaller than`} ${new Date(Number(e.maximum))}` : `Invalid input`;
        break;
    case z.custom:
        n = `Invalid input`;
        break;
    case z.invalid_intersection_types:
        n = `Intersection results could not be merged`;
        break;
    case z.not_multiple_of:
        n = `Number must be a multiple of ${e.multipleOf}`;
        break;
    case z.not_finite:
        n = `Number must be finite`;
        break;
    default:
        n = t.defaultError,
        I.assertNever(e)
    }
    return {
        message: n
    }
}
  , Si = xi;
function Ci() {
    return Si
}
var wi = e => {
    let {data: t, path: n, errorMaps: r, issueData: i} = e
      , a = [...n, ...i.path || []]
      , o = {
        ...i,
        path: a
    };
    if (i.message !== void 0)
        return {
            ...i,
            path: a,
            message: i.message
        };
    let s = ``
      , c = r.filter(e => !!e).slice().reverse();
    for (let e of c)
        s = e(o, {
            data: t,
            defaultError: s
        }).message;
    return {
        ...i,
        path: a,
        message: s
    }
}
;
function V(e, t) {
    let n = Ci()
      , r = wi({
        issueData: t,
        data: e.data,
        path: e.path,
        errorMaps: [e.common.contextualErrorMap, e.schemaErrorMap, n, n === xi ? void 0 : xi].filter(e => !!e)
    });
    e.common.issues.push(r)
}
var H = class e {
    constructor() {
        this.value = `valid`
    }
    dirty() {
        this.value === `valid` && (this.value = `dirty`)
    }
    abort() {
        this.value !== `aborted` && (this.value = `aborted`)
    }
    static mergeArray(e, t) {
        let n = [];
        for (let r of t) {
            if (r.status === `aborted`)
                return U;
            r.status === `dirty` && e.dirty(),
            n.push(r.value)
        }
        return {
            status: e.value,
            value: n
        }
    }
    static async mergeObjectAsync(t, n) {
        let r = [];
        for (let e of n) {
            let t = await e.key
              , n = await e.value;
            r.push({
                key: t,
                value: n
            })
        }
        return e.mergeObjectSync(t, r)
    }
    static mergeObjectSync(e, t) {
        let n = {};
        for (let r of t) {
            let {key: t, value: i} = r;
            if (t.status === `aborted` || i.status === `aborted`)
                return U;
            t.status === `dirty` && e.dirty(),
            i.status === `dirty` && e.dirty(),
            t.value !== `__proto__` && (i.value !== void 0 || r.alwaysSet) && (n[t.value] = i.value)
        }
        return {
            status: e.value,
            value: n
        }
    }
}
, U = Object.freeze({
    status: `aborted`
}), Ti = e => ({
    status: `dirty`,
    value: e
}), W = e => ({
    status: `valid`,
    value: e
}), Ei = e => e.status === `aborted`, Di = e => e.status === `dirty`, Oi = e => e.status === `valid`, ki = e => typeof Promise < `u` && e instanceof Promise, G;
(function(e) {
    e.errToObj = e => typeof e == `string` ? {
        message: e
    } : e || {},
    e.toString = e => typeof e == `string` ? e : e?.message
}
)(G ||= {});
var K = class {
    constructor(e, t, n, r) {
        this._cachedPath = [],
        this.parent = e,
        this.data = t,
        this._path = n,
        this._key = r
    }
    get path() {
        return this._cachedPath.length || (Array.isArray(this._key) ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)),
        this._cachedPath
    }
}
  , Ai = (e, t) => {
    if (Oi(t))
        return {
            success: !0,
            data: t.value
        };
    if (!e.common.issues.length)
        throw Error(`Validation failed but no issues detected.`);
    return {
        success: !1,
        get error() {
            if (this._error)
                return this._error;
            let t = new B(e.common.issues);
            return this._error = t,
            this._error
        }
    }
}
;
function q(e) {
    if (!e)
        return {};
    let {errorMap: t, invalid_type_error: n, required_error: r, description: i} = e;
    if (t && (n || r))
        throw Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
    return t ? {
        errorMap: t,
        description: i
    } : {
        errorMap: (t, i) => {
            let {message: a} = e;
            return t.code === `invalid_enum_value` ? {
                message: a ?? i.defaultError
            } : i.data === void 0 ? {
                message: a ?? r ?? i.defaultError
            } : t.code === `invalid_type` ? {
                message: a ?? n ?? i.defaultError
            } : {
                message: i.defaultError
            }
        }
        ,
        description: i
    }
}
var J = class {
    get description() {
        return this._def.description
    }
    _getType(e) {
        return R(e.data)
    }
    _getOrReturnCtx(e, t) {
        return t || {
            common: e.parent.common,
            data: e.data,
            parsedType: R(e.data),
            schemaErrorMap: this._def.errorMap,
            path: e.path,
            parent: e.parent
        }
    }
    _processInputParams(e) {
        return {
            status: new H,
            ctx: {
                common: e.parent.common,
                data: e.data,
                parsedType: R(e.data),
                schemaErrorMap: this._def.errorMap,
                path: e.path,
                parent: e.parent
            }
        }
    }
    _parseSync(e) {
        let t = this._parse(e);
        if (ki(t))
            throw Error(`Synchronous parse encountered promise.`);
        return t
    }
    _parseAsync(e) {
        let t = this._parse(e);
        return Promise.resolve(t)
    }
    parse(e, t) {
        let n = this.safeParse(e, t);
        if (n.success)
            return n.data;
        throw n.error
    }
    safeParse(e, t) {
        let n = {
            common: {
                issues: [],
                async: t?.async ?? !1,
                contextualErrorMap: t?.errorMap
            },
            path: t?.path || [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data: e,
            parsedType: R(e)
        };
        return Ai(n, this._parseSync({
            data: e,
            path: n.path,
            parent: n
        }))
    }
    "~validate"(e) {
        let t = {
            common: {
                issues: [],
                async: !!this[`~standard`].async
            },
            path: [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data: e,
            parsedType: R(e)
        };
        if (!this[`~standard`].async)
            try {
                let n = this._parseSync({
                    data: e,
                    path: [],
                    parent: t
                });
                return Oi(n) ? {
                    value: n.value
                } : {
                    issues: t.common.issues
                }
            } catch (e) {
                e?.message?.toLowerCase()?.includes(`encountered`) && (this[`~standard`].async = !0),
                t.common = {
                    issues: [],
                    async: !0
                }
            }
        return this._parseAsync({
            data: e,
            path: [],
            parent: t
        }).then(e => Oi(e) ? {
            value: e.value
        } : {
            issues: t.common.issues
        })
    }
    async parseAsync(e, t) {
        let n = await this.safeParseAsync(e, t);
        if (n.success)
            return n.data;
        throw n.error
    }
    async safeParseAsync(e, t) {
        let n = {
            common: {
                issues: [],
                contextualErrorMap: t?.errorMap,
                async: !0
            },
            path: t?.path || [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data: e,
            parsedType: R(e)
        }
          , r = this._parse({
            data: e,
            path: n.path,
            parent: n
        });
        return Ai(n, await (ki(r) ? r : Promise.resolve(r)))
    }
    refine(e, t) {
        let n = e => typeof t == `string` || t === void 0 ? {
            message: t
        } : typeof t == `function` ? t(e) : t;
        return this._refinement( (t, r) => {
            let i = e(t)
              , a = () => r.addIssue({
                code: z.custom,
                ...n(t)
            });
            return typeof Promise < `u` && i instanceof Promise ? i.then(e => e ? !0 : (a(),
            !1)) : i ? !0 : (a(),
            !1)
        }
        )
    }
    refinement(e, t) {
        return this._refinement( (n, r) => e(n) ? !0 : (r.addIssue(typeof t == `function` ? t(n, r) : t),
        !1))
    }
    _refinement(e) {
        return new Z({
            schema: this,
            typeName: $.ZodEffects,
            effect: {
                type: `refinement`,
                refinement: e
            }
        })
    }
    superRefine(e) {
        return this._refinement(e)
    }
    constructor(e) {
        this.spa = this.safeParseAsync,
        this._def = e,
        this.parse = this.parse.bind(this),
        this.safeParse = this.safeParse.bind(this),
        this.parseAsync = this.parseAsync.bind(this),
        this.safeParseAsync = this.safeParseAsync.bind(this),
        this.spa = this.spa.bind(this),
        this.refine = this.refine.bind(this),
        this.refinement = this.refinement.bind(this),
        this.superRefine = this.superRefine.bind(this),
        this.optional = this.optional.bind(this),
        this.nullable = this.nullable.bind(this),
        this.nullish = this.nullish.bind(this),
        this.array = this.array.bind(this),
        this.promise = this.promise.bind(this),
        this.or = this.or.bind(this),
        this.and = this.and.bind(this),
        this.transform = this.transform.bind(this),
        this.brand = this.brand.bind(this),
        this.default = this.default.bind(this),
        this.catch = this.catch.bind(this),
        this.describe = this.describe.bind(this),
        this.pipe = this.pipe.bind(this),
        this.readonly = this.readonly.bind(this),
        this.isNullable = this.isNullable.bind(this),
        this.isOptional = this.isOptional.bind(this),
        this[`~standard`] = {
            version: 1,
            vendor: `zod`,
            validate: e => this[`~validate`](e)
        }
    }
    optional() {
        return Q.create(this, this._def)
    }
    nullable() {
        return ja.create(this, this._def)
    }
    nullish() {
        return this.nullable().optional()
    }
    array() {
        return pa.create(this)
    }
    promise() {
        return Aa.create(this, this._def)
    }
    or(e) {
        return ha.create([this, e], this._def)
    }
    and(e) {
        return ya.create(this, e, this._def)
    }
    transform(e) {
        return new Z({
            ...q(this._def),
            schema: this,
            typeName: $.ZodEffects,
            effect: {
                type: `transform`,
                transform: e
            }
        })
    }
    default(e) {
        let t = typeof e == `function` ? e : () => e;
        return new Ma({
            ...q(this._def),
            innerType: this,
            defaultValue: t,
            typeName: $.ZodDefault
        })
    }
    brand() {
        return new Fa({
            typeName: $.ZodBranded,
            type: this,
            ...q(this._def)
        })
    }
    catch(e) {
        let t = typeof e == `function` ? e : () => e;
        return new Na({
            ...q(this._def),
            innerType: this,
            catchValue: t,
            typeName: $.ZodCatch
        })
    }
    describe(e) {
        let t = this.constructor;
        return new t({
            ...this._def,
            description: e
        })
    }
    pipe(e) {
        return Ia.create(this, e)
    }
    readonly() {
        return La.create(this)
    }
    isOptional() {
        return this.safeParse(void 0).success
    }
    isNullable() {
        return this.safeParse(null).success
    }
}
, ji = /^c[^\s-]{8,}$/i, Mi = /^[0-9a-z]+$/, Ni = /^[0-9A-HJKMNP-TV-Z]{26}$/i, Pi = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i, Fi = /^[a-z0-9_-]{21}$/i, Ii = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/, Li = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/, Ri = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i, zi = `^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$`, Bi, Vi = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, Hi = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/, Ui = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/, Wi = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, Gi = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/, Ki = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/, qi = `((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))`, Ji = RegExp(`^${qi}$`);
function Yi(e) {
    let t = `[0-5]\\d`;
    e.precision ? t = `${t}\\.\\d{${e.precision}}` : e.precision ?? (t = `${t}(\\.\\d+)?`);
    let n = e.precision ? `+` : `?`;
    return `([01]\\d|2[0-3]):[0-5]\\d(:${t})${n}`
}
function Xi(e) {
    return RegExp(`^${Yi(e)}$`)
}
function Zi(e) {
    let t = `${qi}T${Yi(e)}`
      , n = [];
    return n.push(e.local ? `Z?` : `Z`),
    e.offset && n.push(`([+-]\\d{2}:?\\d{2})`),
    t = `${t}(${n.join(`|`)})`,
    RegExp(`^${t}$`)
}
function Qi(e, t) {
    return !!((t === `v4` || !t) && Vi.test(e) || (t === `v6` || !t) && Ui.test(e))
}
function $i(e, t) {
    if (!Ii.test(e))
        return !1;
    try {
        let[n] = e.split(`.`);
        if (!n)
            return !1;
        let r = n.replace(/-/g, `+`).replace(/_/g, `/`).padEnd(n.length + (4 - n.length % 4) % 4, `=`)
          , i = JSON.parse(atob(r));
        return !(typeof i != `object` || !i || `typ` in i && i?.typ !== `JWT` || !i.alg || t && i.alg !== t)
    } catch {
        return !1
    }
}
function ea(e, t) {
    return !!((t === `v4` || !t) && Hi.test(e) || (t === `v6` || !t) && Wi.test(e))
}
var ta = class e extends J {
    _parse(e) {
        if (this._def.coerce && (e.data = String(e.data)),
        this._getType(e) !== L.string) {
            let t = this._getOrReturnCtx(e);
            return V(t, {
                code: z.invalid_type,
                expected: L.string,
                received: t.parsedType
            }),
            U
        }
        let t = new H, n;
        for (let r of this._def.checks)
            if (r.kind === `min`)
                e.data.length < r.value && (n = this._getOrReturnCtx(e, n),
                V(n, {
                    code: z.too_small,
                    minimum: r.value,
                    type: `string`,
                    inclusive: !0,
                    exact: !1,
                    message: r.message
                }),
                t.dirty());
            else if (r.kind === `max`)
                e.data.length > r.value && (n = this._getOrReturnCtx(e, n),
                V(n, {
                    code: z.too_big,
                    maximum: r.value,
                    type: `string`,
                    inclusive: !0,
                    exact: !1,
                    message: r.message
                }),
                t.dirty());
            else if (r.kind === `length`) {
                let i = e.data.length > r.value
                  , a = e.data.length < r.value;
                (i || a) && (n = this._getOrReturnCtx(e, n),
                i ? V(n, {
                    code: z.too_big,
                    maximum: r.value,
                    type: `string`,
                    inclusive: !0,
                    exact: !0,
                    message: r.message
                }) : a && V(n, {
                    code: z.too_small,
                    minimum: r.value,
                    type: `string`,
                    inclusive: !0,
                    exact: !0,
                    message: r.message
                }),
                t.dirty())
            } else if (r.kind === `email`)
                Ri.test(e.data) || (n = this._getOrReturnCtx(e, n),
                V(n, {
                    validation: `email`,
                    code: z.invalid_string,
                    message: r.message
                }),
                t.dirty());
            else if (r.kind === `emoji`)
                Bi ||= new RegExp(zi,`u`),
                Bi.test(e.data) || (n = this._getOrReturnCtx(e, n),
                V(n, {
                    validation: `emoji`,
                    code: z.invalid_string,
                    message: r.message
                }),
                t.dirty());
            else if (r.kind === `uuid`)
                Pi.test(e.data) || (n = this._getOrReturnCtx(e, n),
                V(n, {
                    validation: `uuid`,
                    code: z.invalid_string,
                    message: r.message
                }),
                t.dirty());
            else if (r.kind === `nanoid`)
                Fi.test(e.data) || (n = this._getOrReturnCtx(e, n),
                V(n, {
                    validation: `nanoid`,
                    code: z.invalid_string,
                    message: r.message
                }),
                t.dirty());
            else if (r.kind === `cuid`)
                ji.test(e.data) || (n = this._getOrReturnCtx(e, n),
                V(n, {
                    validation: `cuid`,
                    code: z.invalid_string,
                    message: r.message
                }),
                t.dirty());
            else if (r.kind === `cuid2`)
                Mi.test(e.data) || (n = this._getOrReturnCtx(e, n),
                V(n, {
                    validation: `cuid2`,
                    code: z.invalid_string,
                    message: r.message
                }),
                t.dirty());
            else if (r.kind === `ulid`)
                Ni.test(e.data) || (n = this._getOrReturnCtx(e, n),
                V(n, {
                    validation: `ulid`,
                    code: z.invalid_string,
                    message: r.message
                }),
                t.dirty());
            else if (r.kind === `url`)
                try {
                    new URL(e.data)
                } catch {
                    n = this._getOrReturnCtx(e, n),
                    V(n, {
                        validation: `url`,
                        code: z.invalid_string,
                        message: r.message
                    }),
                    t.dirty()
                }
            else
                r.kind === `regex` ? (r.regex.lastIndex = 0,
                r.regex.test(e.data) || (n = this._getOrReturnCtx(e, n),
                V(n, {
                    validation: `regex`,
                    code: z.invalid_string,
                    message: r.message
                }),
                t.dirty())) : r.kind === `trim` ? e.data = e.data.trim() : r.kind === `includes` ? e.data.includes(r.value, r.position) || (n = this._getOrReturnCtx(e, n),
                V(n, {
                    code: z.invalid_string,
                    validation: {
                        includes: r.value,
                        position: r.position
                    },
                    message: r.message
                }),
                t.dirty()) : r.kind === `toLowerCase` ? e.data = e.data.toLowerCase() : r.kind === `toUpperCase` ? e.data = e.data.toUpperCase() : r.kind === `startsWith` ? e.data.startsWith(r.value) || (n = this._getOrReturnCtx(e, n),
                V(n, {
                    code: z.invalid_string,
                    validation: {
                        startsWith: r.value
                    },
                    message: r.message
                }),
                t.dirty()) : r.kind === `endsWith` ? e.data.endsWith(r.value) || (n = this._getOrReturnCtx(e, n),
                V(n, {
                    code: z.invalid_string,
                    validation: {
                        endsWith: r.value
                    },
                    message: r.message
                }),
                t.dirty()) : r.kind === `datetime` ? Zi(r).test(e.data) || (n = this._getOrReturnCtx(e, n),
                V(n, {
                    code: z.invalid_string,
                    validation: `datetime`,
                    message: r.message
                }),
                t.dirty()) : r.kind === `date` ? Ji.test(e.data) || (n = this._getOrReturnCtx(e, n),
                V(n, {
                    code: z.invalid_string,
                    validation: `date`,
                    message: r.message
                }),
                t.dirty()) : r.kind === `time` ? Xi(r).test(e.data) || (n = this._getOrReturnCtx(e, n),
                V(n, {
                    code: z.invalid_string,
                    validation: `time`,
                    message: r.message
                }),
                t.dirty()) : r.kind === `duration` ? Li.test(e.data) || (n = this._getOrReturnCtx(e, n),
                V(n, {
                    validation: `duration`,
                    code: z.invalid_string,
                    message: r.message
                }),
                t.dirty()) : r.kind === `ip` ? Qi(e.data, r.version) || (n = this._getOrReturnCtx(e, n),
                V(n, {
                    validation: `ip`,
                    code: z.invalid_string,
                    message: r.message
                }),
                t.dirty()) : r.kind === `jwt` ? $i(e.data, r.alg) || (n = this._getOrReturnCtx(e, n),
                V(n, {
                    validation: `jwt`,
                    code: z.invalid_string,
                    message: r.message
                }),
                t.dirty()) : r.kind === `cidr` ? ea(e.data, r.version) || (n = this._getOrReturnCtx(e, n),
                V(n, {
                    validation: `cidr`,
                    code: z.invalid_string,
                    message: r.message
                }),
                t.dirty()) : r.kind === `base64` ? Gi.test(e.data) || (n = this._getOrReturnCtx(e, n),
                V(n, {
                    validation: `base64`,
                    code: z.invalid_string,
                    message: r.message
                }),
                t.dirty()) : r.kind === `base64url` ? Ki.test(e.data) || (n = this._getOrReturnCtx(e, n),
                V(n, {
                    validation: `base64url`,
                    code: z.invalid_string,
                    message: r.message
                }),
                t.dirty()) : I.assertNever(r);
        return {
            status: t.value,
            value: e.data
        }
    }
    _regex(e, t, n) {
        return this.refinement(t => e.test(t), {
            validation: t,
            code: z.invalid_string,
            ...G.errToObj(n)
        })
    }
    _addCheck(t) {
        return new e({
            ...this._def,
            checks: [...this._def.checks, t]
        })
    }
    email(e) {
        return this._addCheck({
            kind: `email`,
            ...G.errToObj(e)
        })
    }
    url(e) {
        return this._addCheck({
            kind: `url`,
            ...G.errToObj(e)
        })
    }
    emoji(e) {
        return this._addCheck({
            kind: `emoji`,
            ...G.errToObj(e)
        })
    }
    uuid(e) {
        return this._addCheck({
            kind: `uuid`,
            ...G.errToObj(e)
        })
    }
    nanoid(e) {
        return this._addCheck({
            kind: `nanoid`,
            ...G.errToObj(e)
        })
    }
    cuid(e) {
        return this._addCheck({
            kind: `cuid`,
            ...G.errToObj(e)
        })
    }
    cuid2(e) {
        return this._addCheck({
            kind: `cuid2`,
            ...G.errToObj(e)
        })
    }
    ulid(e) {
        return this._addCheck({
            kind: `ulid`,
            ...G.errToObj(e)
        })
    }
    base64(e) {
        return this._addCheck({
            kind: `base64`,
            ...G.errToObj(e)
        })
    }
    base64url(e) {
        return this._addCheck({
            kind: `base64url`,
            ...G.errToObj(e)
        })
    }
    jwt(e) {
        return this._addCheck({
            kind: `jwt`,
            ...G.errToObj(e)
        })
    }
    ip(e) {
        return this._addCheck({
            kind: `ip`,
            ...G.errToObj(e)
        })
    }
    cidr(e) {
        return this._addCheck({
            kind: `cidr`,
            ...G.errToObj(e)
        })
    }
    datetime(e) {
        return typeof e == `string` ? this._addCheck({
            kind: `datetime`,
            precision: null,
            offset: !1,
            local: !1,
            message: e
        }) : this._addCheck({
            kind: `datetime`,
            precision: e?.precision === void 0 ? null : e?.precision,
            offset: e?.offset ?? !1,
            local: e?.local ?? !1,
            ...G.errToObj(e?.message)
        })
    }
    date(e) {
        return this._addCheck({
            kind: `date`,
            message: e
        })
    }
    time(e) {
        return typeof e == `string` ? this._addCheck({
            kind: `time`,
            precision: null,
            message: e
        }) : this._addCheck({
            kind: `time`,
            precision: e?.precision === void 0 ? null : e?.precision,
            ...G.errToObj(e?.message)
        })
    }
    duration(e) {
        return this._addCheck({
            kind: `duration`,
            ...G.errToObj(e)
        })
    }
    regex(e, t) {
        return this._addCheck({
            kind: `regex`,
            regex: e,
            ...G.errToObj(t)
        })
    }
    includes(e, t) {
        return this._addCheck({
            kind: `includes`,
            value: e,
            position: t?.position,
            ...G.errToObj(t?.message)
        })
    }
    startsWith(e, t) {
        return this._addCheck({
            kind: `startsWith`,
            value: e,
            ...G.errToObj(t)
        })
    }
    endsWith(e, t) {
        return this._addCheck({
            kind: `endsWith`,
            value: e,
            ...G.errToObj(t)
        })
    }
    min(e, t) {
        return this._addCheck({
            kind: `min`,
            value: e,
            ...G.errToObj(t)
        })
    }
    max(e, t) {
        return this._addCheck({
            kind: `max`,
            value: e,
            ...G.errToObj(t)
        })
    }
    length(e, t) {
        return this._addCheck({
            kind: `length`,
            value: e,
            ...G.errToObj(t)
        })
    }
    nonempty(e) {
        return this.min(1, G.errToObj(e))
    }
    trim() {
        return new e({
            ...this._def,
            checks: [...this._def.checks, {
                kind: `trim`
            }]
        })
    }
    toLowerCase() {
        return new e({
            ...this._def,
            checks: [...this._def.checks, {
                kind: `toLowerCase`
            }]
        })
    }
    toUpperCase() {
        return new e({
            ...this._def,
            checks: [...this._def.checks, {
                kind: `toUpperCase`
            }]
        })
    }
    get isDatetime() {
        return !!this._def.checks.find(e => e.kind === `datetime`)
    }
    get isDate() {
        return !!this._def.checks.find(e => e.kind === `date`)
    }
    get isTime() {
        return !!this._def.checks.find(e => e.kind === `time`)
    }
    get isDuration() {
        return !!this._def.checks.find(e => e.kind === `duration`)
    }
    get isEmail() {
        return !!this._def.checks.find(e => e.kind === `email`)
    }
    get isURL() {
        return !!this._def.checks.find(e => e.kind === `url`)
    }
    get isEmoji() {
        return !!this._def.checks.find(e => e.kind === `emoji`)
    }
    get isUUID() {
        return !!this._def.checks.find(e => e.kind === `uuid`)
    }
    get isNANOID() {
        return !!this._def.checks.find(e => e.kind === `nanoid`)
    }
    get isCUID() {
        return !!this._def.checks.find(e => e.kind === `cuid`)
    }
    get isCUID2() {
        return !!this._def.checks.find(e => e.kind === `cuid2`)
    }
    get isULID() {
        return !!this._def.checks.find(e => e.kind === `ulid`)
    }
    get isIP() {
        return !!this._def.checks.find(e => e.kind === `ip`)
    }
    get isCIDR() {
        return !!this._def.checks.find(e => e.kind === `cidr`)
    }
    get isBase64() {
        return !!this._def.checks.find(e => e.kind === `base64`)
    }
    get isBase64url() {
        return !!this._def.checks.find(e => e.kind === `base64url`)
    }
    get minLength() {
        let e = null;
        for (let t of this._def.checks)
            t.kind === `min` && (e === null || t.value > e) && (e = t.value);
        return e
    }
    get maxLength() {
        let e = null;
        for (let t of this._def.checks)
            t.kind === `max` && (e === null || t.value < e) && (e = t.value);
        return e
    }
}
;
ta.create = e => new ta({
    checks: [],
    typeName: $.ZodString,
    coerce: e?.coerce ?? !1,
    ...q(e)
});
function na(e, t) {
    let n = (e.toString().split(`.`)[1] || ``).length
      , r = (t.toString().split(`.`)[1] || ``).length
      , i = n > r ? n : r;
    return Number.parseInt(e.toFixed(i).replace(`.`, ``)) % Number.parseInt(t.toFixed(i).replace(`.`, ``)) / 10 ** i
}
var ra = class e extends J {
    constructor() {
        super(...arguments),
        this.min = this.gte,
        this.max = this.lte,
        this.step = this.multipleOf
    }
    _parse(e) {
        if (this._def.coerce && (e.data = Number(e.data)),
        this._getType(e) !== L.number) {
            let t = this._getOrReturnCtx(e);
            return V(t, {
                code: z.invalid_type,
                expected: L.number,
                received: t.parsedType
            }),
            U
        }
        let t, n = new H;
        for (let r of this._def.checks)
            r.kind === `int` ? I.isInteger(e.data) || (t = this._getOrReturnCtx(e, t),
            V(t, {
                code: z.invalid_type,
                expected: `integer`,
                received: `float`,
                message: r.message
            }),
            n.dirty()) : r.kind === `min` ? (r.inclusive ? e.data < r.value : e.data <= r.value) && (t = this._getOrReturnCtx(e, t),
            V(t, {
                code: z.too_small,
                minimum: r.value,
                type: `number`,
                inclusive: r.inclusive,
                exact: !1,
                message: r.message
            }),
            n.dirty()) : r.kind === `max` ? (r.inclusive ? e.data > r.value : e.data >= r.value) && (t = this._getOrReturnCtx(e, t),
            V(t, {
                code: z.too_big,
                maximum: r.value,
                type: `number`,
                inclusive: r.inclusive,
                exact: !1,
                message: r.message
            }),
            n.dirty()) : r.kind === `multipleOf` ? na(e.data, r.value) !== 0 && (t = this._getOrReturnCtx(e, t),
            V(t, {
                code: z.not_multiple_of,
                multipleOf: r.value,
                message: r.message
            }),
            n.dirty()) : r.kind === `finite` ? Number.isFinite(e.data) || (t = this._getOrReturnCtx(e, t),
            V(t, {
                code: z.not_finite,
                message: r.message
            }),
            n.dirty()) : I.assertNever(r);
        return {
            status: n.value,
            value: e.data
        }
    }
    gte(e, t) {
        return this.setLimit(`min`, e, !0, G.toString(t))
    }
    gt(e, t) {
        return this.setLimit(`min`, e, !1, G.toString(t))
    }
    lte(e, t) {
        return this.setLimit(`max`, e, !0, G.toString(t))
    }
    lt(e, t) {
        return this.setLimit(`max`, e, !1, G.toString(t))
    }
    setLimit(t, n, r, i) {
        return new e({
            ...this._def,
            checks: [...this._def.checks, {
                kind: t,
                value: n,
                inclusive: r,
                message: G.toString(i)
            }]
        })
    }
    _addCheck(t) {
        return new e({
            ...this._def,
            checks: [...this._def.checks, t]
        })
    }
    int(e) {
        return this._addCheck({
            kind: `int`,
            message: G.toString(e)
        })
    }
    positive(e) {
        return this._addCheck({
            kind: `min`,
            value: 0,
            inclusive: !1,
            message: G.toString(e)
        })
    }
    negative(e) {
        return this._addCheck({
            kind: `max`,
            value: 0,
            inclusive: !1,
            message: G.toString(e)
        })
    }
    nonpositive(e) {
        return this._addCheck({
            kind: `max`,
            value: 0,
            inclusive: !0,
            message: G.toString(e)
        })
    }
    nonnegative(e) {
        return this._addCheck({
            kind: `min`,
            value: 0,
            inclusive: !0,
            message: G.toString(e)
        })
    }
    multipleOf(e, t) {
        return this._addCheck({
            kind: `multipleOf`,
            value: e,
            message: G.toString(t)
        })
    }
    finite(e) {
        return this._addCheck({
            kind: `finite`,
            message: G.toString(e)
        })
    }
    safe(e) {
        return this._addCheck({
            kind: `min`,
            inclusive: !0,
            value: -(2 ** 53 - 1),
            message: G.toString(e)
        })._addCheck({
            kind: `max`,
            inclusive: !0,
            value: 2 ** 53 - 1,
            message: G.toString(e)
        })
    }
    get minValue() {
        let e = null;
        for (let t of this._def.checks)
            t.kind === `min` && (e === null || t.value > e) && (e = t.value);
        return e
    }
    get maxValue() {
        let e = null;
        for (let t of this._def.checks)
            t.kind === `max` && (e === null || t.value < e) && (e = t.value);
        return e
    }
    get isInt() {
        return !!this._def.checks.find(e => e.kind === `int` || e.kind === `multipleOf` && I.isInteger(e.value))
    }
    get isFinite() {
        let e = null
          , t = null;
        for (let n of this._def.checks)
            if (n.kind === `finite` || n.kind === `int` || n.kind === `multipleOf`)
                return !0;
            else
                n.kind === `min` ? (t === null || n.value > t) && (t = n.value) : n.kind === `max` && (e === null || n.value < e) && (e = n.value);
        return Number.isFinite(t) && Number.isFinite(e)
    }
}
;
ra.create = e => new ra({
    checks: [],
    typeName: $.ZodNumber,
    coerce: e?.coerce || !1,
    ...q(e)
});
var ia = class e extends J {
    constructor() {
        super(...arguments),
        this.min = this.gte,
        this.max = this.lte
    }
    _parse(e) {
        if (this._def.coerce)
            try {
                e.data = BigInt(e.data)
            } catch {
                return this._getInvalidInput(e)
            }
        if (this._getType(e) !== L.bigint)
            return this._getInvalidInput(e);
        let t, n = new H;
        for (let r of this._def.checks)
            r.kind === `min` ? (r.inclusive ? e.data < r.value : e.data <= r.value) && (t = this._getOrReturnCtx(e, t),
            V(t, {
                code: z.too_small,
                type: `bigint`,
                minimum: r.value,
                inclusive: r.inclusive,
                message: r.message
            }),
            n.dirty()) : r.kind === `max` ? (r.inclusive ? e.data > r.value : e.data >= r.value) && (t = this._getOrReturnCtx(e, t),
            V(t, {
                code: z.too_big,
                type: `bigint`,
                maximum: r.value,
                inclusive: r.inclusive,
                message: r.message
            }),
            n.dirty()) : r.kind === `multipleOf` ? e.data % r.value !== BigInt(0) && (t = this._getOrReturnCtx(e, t),
            V(t, {
                code: z.not_multiple_of,
                multipleOf: r.value,
                message: r.message
            }),
            n.dirty()) : I.assertNever(r);
        return {
            status: n.value,
            value: e.data
        }
    }
    _getInvalidInput(e) {
        let t = this._getOrReturnCtx(e);
        return V(t, {
            code: z.invalid_type,
            expected: L.bigint,
            received: t.parsedType
        }),
        U
    }
    gte(e, t) {
        return this.setLimit(`min`, e, !0, G.toString(t))
    }
    gt(e, t) {
        return this.setLimit(`min`, e, !1, G.toString(t))
    }
    lte(e, t) {
        return this.setLimit(`max`, e, !0, G.toString(t))
    }
    lt(e, t) {
        return this.setLimit(`max`, e, !1, G.toString(t))
    }
    setLimit(t, n, r, i) {
        return new e({
            ...this._def,
            checks: [...this._def.checks, {
                kind: t,
                value: n,
                inclusive: r,
                message: G.toString(i)
            }]
        })
    }
    _addCheck(t) {
        return new e({
            ...this._def,
            checks: [...this._def.checks, t]
        })
    }
    positive(e) {
        return this._addCheck({
            kind: `min`,
            value: BigInt(0),
            inclusive: !1,
            message: G.toString(e)
        })
    }
    negative(e) {
        return this._addCheck({
            kind: `max`,
            value: BigInt(0),
            inclusive: !1,
            message: G.toString(e)
        })
    }
    nonpositive(e) {
        return this._addCheck({
            kind: `max`,
            value: BigInt(0),
            inclusive: !0,
            message: G.toString(e)
        })
    }
    nonnegative(e) {
        return this._addCheck({
            kind: `min`,
            value: BigInt(0),
            inclusive: !0,
            message: G.toString(e)
        })
    }
    multipleOf(e, t) {
        return this._addCheck({
            kind: `multipleOf`,
            value: e,
            message: G.toString(t)
        })
    }
    get minValue() {
        let e = null;
        for (let t of this._def.checks)
            t.kind === `min` && (e === null || t.value > e) && (e = t.value);
        return e
    }
    get maxValue() {
        let e = null;
        for (let t of this._def.checks)
            t.kind === `max` && (e === null || t.value < e) && (e = t.value);
        return e
    }
}
;
ia.create = e => new ia({
    checks: [],
    typeName: $.ZodBigInt,
    coerce: e?.coerce ?? !1,
    ...q(e)
});
var aa = class extends J {
    _parse(e) {
        if (this._def.coerce && (e.data = !!e.data),
        this._getType(e) !== L.boolean) {
            let t = this._getOrReturnCtx(e);
            return V(t, {
                code: z.invalid_type,
                expected: L.boolean,
                received: t.parsedType
            }),
            U
        }
        return W(e.data)
    }
}
;
aa.create = e => new aa({
    typeName: $.ZodBoolean,
    coerce: e?.coerce || !1,
    ...q(e)
});
var oa = class e extends J {
    _parse(e) {
        if (this._def.coerce && (e.data = new Date(e.data)),
        this._getType(e) !== L.date) {
            let t = this._getOrReturnCtx(e);
            return V(t, {
                code: z.invalid_type,
                expected: L.date,
                received: t.parsedType
            }),
            U
        }
        if (Number.isNaN(e.data.getTime()))
            return V(this._getOrReturnCtx(e), {
                code: z.invalid_date
            }),
            U;
        let t = new H, n;
        for (let r of this._def.checks)
            r.kind === `min` ? e.data.getTime() < r.value && (n = this._getOrReturnCtx(e, n),
            V(n, {
                code: z.too_small,
                message: r.message,
                inclusive: !0,
                exact: !1,
                minimum: r.value,
                type: `date`
            }),
            t.dirty()) : r.kind === `max` ? e.data.getTime() > r.value && (n = this._getOrReturnCtx(e, n),
            V(n, {
                code: z.too_big,
                message: r.message,
                inclusive: !0,
                exact: !1,
                maximum: r.value,
                type: `date`
            }),
            t.dirty()) : I.assertNever(r);
        return {
            status: t.value,
            value: new Date(e.data.getTime())
        }
    }
    _addCheck(t) {
        return new e({
            ...this._def,
            checks: [...this._def.checks, t]
        })
    }
    min(e, t) {
        return this._addCheck({
            kind: `min`,
            value: e.getTime(),
            message: G.toString(t)
        })
    }
    max(e, t) {
        return this._addCheck({
            kind: `max`,
            value: e.getTime(),
            message: G.toString(t)
        })
    }
    get minDate() {
        let e = null;
        for (let t of this._def.checks)
            t.kind === `min` && (e === null || t.value > e) && (e = t.value);
        return e == null ? null : new Date(e)
    }
    get maxDate() {
        let e = null;
        for (let t of this._def.checks)
            t.kind === `max` && (e === null || t.value < e) && (e = t.value);
        return e == null ? null : new Date(e)
    }
}
;
oa.create = e => new oa({
    checks: [],
    coerce: e?.coerce || !1,
    typeName: $.ZodDate,
    ...q(e)
});
var sa = class extends J {
    _parse(e) {
        if (this._getType(e) !== L.symbol) {
            let t = this._getOrReturnCtx(e);
            return V(t, {
                code: z.invalid_type,
                expected: L.symbol,
                received: t.parsedType
            }),
            U
        }
        return W(e.data)
    }
}
;
sa.create = e => new sa({
    typeName: $.ZodSymbol,
    ...q(e)
});
var ca = class extends J {
    _parse(e) {
        if (this._getType(e) !== L.undefined) {
            let t = this._getOrReturnCtx(e);
            return V(t, {
                code: z.invalid_type,
                expected: L.undefined,
                received: t.parsedType
            }),
            U
        }
        return W(e.data)
    }
}
;
ca.create = e => new ca({
    typeName: $.ZodUndefined,
    ...q(e)
});
var la = class extends J {
    _parse(e) {
        if (this._getType(e) !== L.null) {
            let t = this._getOrReturnCtx(e);
            return V(t, {
                code: z.invalid_type,
                expected: L.null,
                received: t.parsedType
            }),
            U
        }
        return W(e.data)
    }
}
;
la.create = e => new la({
    typeName: $.ZodNull,
    ...q(e)
});
var ua = class extends J {
    constructor() {
        super(...arguments),
        this._any = !0
    }
    _parse(e) {
        return W(e.data)
    }
}
;
ua.create = e => new ua({
    typeName: $.ZodAny,
    ...q(e)
});
var da = class extends J {
    constructor() {
        super(...arguments),
        this._unknown = !0
    }
    _parse(e) {
        return W(e.data)
    }
}
;
da.create = e => new da({
    typeName: $.ZodUnknown,
    ...q(e)
});
var Y = class extends J {
    _parse(e) {
        let t = this._getOrReturnCtx(e);
        return V(t, {
            code: z.invalid_type,
            expected: L.never,
            received: t.parsedType
        }),
        U
    }
}
;
Y.create = e => new Y({
    typeName: $.ZodNever,
    ...q(e)
});
var fa = class extends J {
    _parse(e) {
        if (this._getType(e) !== L.undefined) {
            let t = this._getOrReturnCtx(e);
            return V(t, {
                code: z.invalid_type,
                expected: L.void,
                received: t.parsedType
            }),
            U
        }
        return W(e.data)
    }
}
;
fa.create = e => new fa({
    typeName: $.ZodVoid,
    ...q(e)
});
var pa = class e extends J {
    _parse(e) {
        let {ctx: t, status: n} = this._processInputParams(e)
          , r = this._def;
        if (t.parsedType !== L.array)
            return V(t, {
                code: z.invalid_type,
                expected: L.array,
                received: t.parsedType
            }),
            U;
        if (r.exactLength !== null) {
            let e = t.data.length > r.exactLength.value
              , i = t.data.length < r.exactLength.value;
            (e || i) && (V(t, {
                code: e ? z.too_big : z.too_small,
                minimum: i ? r.exactLength.value : void 0,
                maximum: e ? r.exactLength.value : void 0,
                type: `array`,
                inclusive: !0,
                exact: !0,
                message: r.exactLength.message
            }),
            n.dirty())
        }
        if (r.minLength !== null && t.data.length < r.minLength.value && (V(t, {
            code: z.too_small,
            minimum: r.minLength.value,
            type: `array`,
            inclusive: !0,
            exact: !1,
            message: r.minLength.message
        }),
        n.dirty()),
        r.maxLength !== null && t.data.length > r.maxLength.value && (V(t, {
            code: z.too_big,
            maximum: r.maxLength.value,
            type: `array`,
            inclusive: !0,
            exact: !1,
            message: r.maxLength.message
        }),
        n.dirty()),
        t.common.async)
            return Promise.all([...t.data].map( (e, n) => r.type._parseAsync(new K(t,e,t.path,n)))).then(e => H.mergeArray(n, e));
        let i = [...t.data].map( (e, n) => r.type._parseSync(new K(t,e,t.path,n)));
        return H.mergeArray(n, i)
    }
    get element() {
        return this._def.type
    }
    min(t, n) {
        return new e({
            ...this._def,
            minLength: {
                value: t,
                message: G.toString(n)
            }
        })
    }
    max(t, n) {
        return new e({
            ...this._def,
            maxLength: {
                value: t,
                message: G.toString(n)
            }
        })
    }
    length(t, n) {
        return new e({
            ...this._def,
            exactLength: {
                value: t,
                message: G.toString(n)
            }
        })
    }
    nonempty(e) {
        return this.min(1, e)
    }
}
;
pa.create = (e, t) => new pa({
    type: e,
    minLength: null,
    maxLength: null,
    exactLength: null,
    typeName: $.ZodArray,
    ...q(t)
});
function ma(e) {
    if (e instanceof X) {
        let t = {};
        for (let n in e.shape) {
            let r = e.shape[n];
            t[n] = Q.create(ma(r))
        }
        return new X({
            ...e._def,
            shape: () => t
        })
    }
    return e instanceof pa ? new pa({
        ...e._def,
        type: ma(e.element)
    }) : e instanceof Q ? Q.create(ma(e.unwrap())) : e instanceof ja ? ja.create(ma(e.unwrap())) : e instanceof ba ? ba.create(e.items.map(e => ma(e))) : e
}
var X = class e extends J {
    constructor() {
        super(...arguments),
        this._cached = null,
        this.nonstrict = this.passthrough,
        this.augment = this.extend
    }
    _getCached() {
        if (this._cached !== null)
            return this._cached;
        let e = this._def.shape()
          , t = I.objectKeys(e);
        return this._cached = {
            shape: e,
            keys: t
        },
        this._cached
    }
    _parse(e) {
        if (this._getType(e) !== L.object) {
            let t = this._getOrReturnCtx(e);
            return V(t, {
                code: z.invalid_type,
                expected: L.object,
                received: t.parsedType
            }),
            U
        }
        let {status: t, ctx: n} = this._processInputParams(e)
          , {shape: r, keys: i} = this._getCached()
          , a = [];
        if (!(this._def.catchall instanceof Y && this._def.unknownKeys === `strip`))
            for (let e in n.data)
                i.includes(e) || a.push(e);
        let o = [];
        for (let e of i) {
            let t = r[e]
              , i = n.data[e];
            o.push({
                key: {
                    status: `valid`,
                    value: e
                },
                value: t._parse(new K(n,i,n.path,e)),
                alwaysSet: e in n.data
            })
        }
        if (this._def.catchall instanceof Y) {
            let e = this._def.unknownKeys;
            if (e === `passthrough`)
                for (let e of a)
                    o.push({
                        key: {
                            status: `valid`,
                            value: e
                        },
                        value: {
                            status: `valid`,
                            value: n.data[e]
                        }
                    });
            else if (e === `strict`)
                a.length > 0 && (V(n, {
                    code: z.unrecognized_keys,
                    keys: a
                }),
                t.dirty());
            else if (e !== `strip`)
                throw Error(`Internal ZodObject error: invalid unknownKeys value.`)
        } else {
            let e = this._def.catchall;
            for (let t of a) {
                let r = n.data[t];
                o.push({
                    key: {
                        status: `valid`,
                        value: t
                    },
                    value: e._parse(new K(n,r,n.path,t)),
                    alwaysSet: t in n.data
                })
            }
        }
        return n.common.async ? Promise.resolve().then(async () => {
            let e = [];
            for (let t of o) {
                let n = await t.key
                  , r = await t.value;
                e.push({
                    key: n,
                    value: r,
                    alwaysSet: t.alwaysSet
                })
            }
            return e
        }
        ).then(e => H.mergeObjectSync(t, e)) : H.mergeObjectSync(t, o)
    }
    get shape() {
        return this._def.shape()
    }
    strict(t) {
        return G.errToObj,
        new e({
            ...this._def,
            unknownKeys: `strict`,
            ...t === void 0 ? {} : {
                errorMap: (e, n) => {
                    let r = this._def.errorMap?.(e, n).message ?? n.defaultError;
                    return e.code === `unrecognized_keys` ? {
                        message: G.errToObj(t).message ?? r
                    } : {
                        message: r
                    }
                }
            }
        })
    }
    strip() {
        return new e({
            ...this._def,
            unknownKeys: `strip`
        })
    }
    passthrough() {
        return new e({
            ...this._def,
            unknownKeys: `passthrough`
        })
    }
    extend(t) {
        return new e({
            ...this._def,
            shape: () => ({
                ...this._def.shape(),
                ...t
            })
        })
    }
    merge(t) {
        return new e({
            unknownKeys: t._def.unknownKeys,
            catchall: t._def.catchall,
            shape: () => ({
                ...this._def.shape(),
                ...t._def.shape()
            }),
            typeName: $.ZodObject
        })
    }
    setKey(e, t) {
        return this.augment({
            [e]: t
        })
    }
    catchall(t) {
        return new e({
            ...this._def,
            catchall: t
        })
    }
    pick(t) {
        let n = {};
        for (let e of I.objectKeys(t))
            t[e] && this.shape[e] && (n[e] = this.shape[e]);
        return new e({
            ...this._def,
            shape: () => n
        })
    }
    omit(t) {
        let n = {};
        for (let e of I.objectKeys(this.shape))
            t[e] || (n[e] = this.shape[e]);
        return new e({
            ...this._def,
            shape: () => n
        })
    }
    deepPartial() {
        return ma(this)
    }
    partial(t) {
        let n = {};
        for (let e of I.objectKeys(this.shape)) {
            let r = this.shape[e];
            n[e] = t && !t[e] ? r : r.optional()
        }
        return new e({
            ...this._def,
            shape: () => n
        })
    }
    required(t) {
        let n = {};
        for (let e of I.objectKeys(this.shape))
            if (t && !t[e])
                n[e] = this.shape[e];
            else {
                let t = this.shape[e];
                for (; t instanceof Q; )
                    t = t._def.innerType;
                n[e] = t
            }
        return new e({
            ...this._def,
            shape: () => n
        })
    }
    keyof() {
        return Da(I.objectKeys(this.shape))
    }
}
;
X.create = (e, t) => new X({
    shape: () => e,
    unknownKeys: `strip`,
    catchall: Y.create(),
    typeName: $.ZodObject,
    ...q(t)
}),
X.strictCreate = (e, t) => new X({
    shape: () => e,
    unknownKeys: `strict`,
    catchall: Y.create(),
    typeName: $.ZodObject,
    ...q(t)
}),
X.lazycreate = (e, t) => new X({
    shape: e,
    unknownKeys: `strip`,
    catchall: Y.create(),
    typeName: $.ZodObject,
    ...q(t)
});
var ha = class extends J {
    _parse(e) {
        let {ctx: t} = this._processInputParams(e)
          , n = this._def.options;
        function r(e) {
            for (let t of e)
                if (t.result.status === `valid`)
                    return t.result;
            for (let n of e)
                if (n.result.status === `dirty`)
                    return t.common.issues.push(...n.ctx.common.issues),
                    n.result;
            let n = e.map(e => new B(e.ctx.common.issues));
            return V(t, {
                code: z.invalid_union,
                unionErrors: n
            }),
            U
        }
        if (t.common.async)
            return Promise.all(n.map(async e => {
                let n = {
                    ...t,
                    common: {
                        ...t.common,
                        issues: []
                    },
                    parent: null
                };
                return {
                    result: await e._parseAsync({
                        data: t.data,
                        path: t.path,
                        parent: n
                    }),
                    ctx: n
                }
            }
            )).then(r);
        {
            let e, r = [];
            for (let i of n) {
                let n = {
                    ...t,
                    common: {
                        ...t.common,
                        issues: []
                    },
                    parent: null
                }
                  , a = i._parseSync({
                    data: t.data,
                    path: t.path,
                    parent: n
                });
                if (a.status === `valid`)
                    return a;
                a.status === `dirty` && !e && (e = {
                    result: a,
                    ctx: n
                }),
                n.common.issues.length && r.push(n.common.issues)
            }
            if (e)
                return t.common.issues.push(...e.ctx.common.issues),
                e.result;
            let i = r.map(e => new B(e));
            return V(t, {
                code: z.invalid_union,
                unionErrors: i
            }),
            U
        }
    }
    get options() {
        return this._def.options
    }
}
;
ha.create = (e, t) => new ha({
    options: e,
    typeName: $.ZodUnion,
    ...q(t)
});
var ga = e => e instanceof Ta ? ga(e.schema) : e instanceof Z ? ga(e.innerType()) : e instanceof Ea ? [e.value] : e instanceof Oa ? e.options : e instanceof ka ? I.objectValues(e.enum) : e instanceof Ma ? ga(e._def.innerType) : e instanceof ca ? [void 0] : e instanceof la ? [null] : e instanceof Q ? [void 0, ...ga(e.unwrap())] : e instanceof ja ? [null, ...ga(e.unwrap())] : e instanceof Fa || e instanceof La ? ga(e.unwrap()) : e instanceof Na ? ga(e._def.innerType) : []
  , _a = class e extends J {
    _parse(e) {
        let {ctx: t} = this._processInputParams(e);
        if (t.parsedType !== L.object)
            return V(t, {
                code: z.invalid_type,
                expected: L.object,
                received: t.parsedType
            }),
            U;
        let n = this.discriminator
          , r = t.data[n]
          , i = this.optionsMap.get(r);
        return i ? t.common.async ? i._parseAsync({
            data: t.data,
            path: t.path,
            parent: t
        }) : i._parseSync({
            data: t.data,
            path: t.path,
            parent: t
        }) : (V(t, {
            code: z.invalid_union_discriminator,
            options: Array.from(this.optionsMap.keys()),
            path: [n]
        }),
        U)
    }
    get discriminator() {
        return this._def.discriminator
    }
    get options() {
        return this._def.options
    }
    get optionsMap() {
        return this._def.optionsMap
    }
    static create(t, n, r) {
        let i = new Map;
        for (let e of n) {
            let n = ga(e.shape[t]);
            if (!n.length)
                throw Error(`A discriminator value for key \`${t}\` could not be extracted from all schema options`);
            for (let r of n) {
                if (i.has(r))
                    throw Error(`Discriminator property ${String(t)} has duplicate value ${String(r)}`);
                i.set(r, e)
            }
        }
        return new e({
            typeName: $.ZodDiscriminatedUnion,
            discriminator: t,
            options: n,
            optionsMap: i,
            ...q(r)
        })
    }
}
;
function va(e, t) {
    let n = R(e)
      , r = R(t);
    if (e === t)
        return {
            valid: !0,
            data: e
        };
    if (n === L.object && r === L.object) {
        let n = I.objectKeys(t)
          , r = I.objectKeys(e).filter(e => n.indexOf(e) !== -1)
          , i = {
            ...e,
            ...t
        };
        for (let n of r) {
            let r = va(e[n], t[n]);
            if (!r.valid)
                return {
                    valid: !1
                };
            i[n] = r.data
        }
        return {
            valid: !0,
            data: i
        }
    }
    if (n === L.array && r === L.array) {
        if (e.length !== t.length)
            return {
                valid: !1
            };
        let n = [];
        for (let r = 0; r < e.length; r++) {
            let i = e[r]
              , a = t[r]
              , o = va(i, a);
            if (!o.valid)
                return {
                    valid: !1
                };
            n.push(o.data)
        }
        return {
            valid: !0,
            data: n
        }
    }
    return n === L.date && r === L.date && +e == +t ? {
        valid: !0,
        data: e
    } : {
        valid: !1
    }
}
var ya = class extends J {
    _parse(e) {
        let {status: t, ctx: n} = this._processInputParams(e)
          , r = (e, r) => {
            if (Ei(e) || Ei(r))
                return U;
            let i = va(e.value, r.value);
            return i.valid ? ((Di(e) || Di(r)) && t.dirty(),
            {
                status: t.value,
                value: i.data
            }) : (V(n, {
                code: z.invalid_intersection_types
            }),
            U)
        }
        ;
        return n.common.async ? Promise.all([this._def.left._parseAsync({
            data: n.data,
            path: n.path,
            parent: n
        }), this._def.right._parseAsync({
            data: n.data,
            path: n.path,
            parent: n
        })]).then( ([e,t]) => r(e, t)) : r(this._def.left._parseSync({
            data: n.data,
            path: n.path,
            parent: n
        }), this._def.right._parseSync({
            data: n.data,
            path: n.path,
            parent: n
        }))
    }
}
;
ya.create = (e, t, n) => new ya({
    left: e,
    right: t,
    typeName: $.ZodIntersection,
    ...q(n)
});
var ba = class e extends J {
    _parse(e) {
        let {status: t, ctx: n} = this._processInputParams(e);
        if (n.parsedType !== L.array)
            return V(n, {
                code: z.invalid_type,
                expected: L.array,
                received: n.parsedType
            }),
            U;
        if (n.data.length < this._def.items.length)
            return V(n, {
                code: z.too_small,
                minimum: this._def.items.length,
                inclusive: !0,
                exact: !1,
                type: `array`
            }),
            U;
        !this._def.rest && n.data.length > this._def.items.length && (V(n, {
            code: z.too_big,
            maximum: this._def.items.length,
            inclusive: !0,
            exact: !1,
            type: `array`
        }),
        t.dirty());
        let r = [...n.data].map( (e, t) => {
            let r = this._def.items[t] || this._def.rest;
            return r ? r._parse(new K(n,e,n.path,t)) : null
        }
        ).filter(e => !!e);
        return n.common.async ? Promise.all(r).then(e => H.mergeArray(t, e)) : H.mergeArray(t, r)
    }
    get items() {
        return this._def.items
    }
    rest(t) {
        return new e({
            ...this._def,
            rest: t
        })
    }
}
;
ba.create = (e, t) => {
    if (!Array.isArray(e))
        throw Error(`You must pass an array of schemas to z.tuple([ ... ])`);
    return new ba({
        items: e,
        typeName: $.ZodTuple,
        rest: null,
        ...q(t)
    })
}
;
var xa = class e extends J {
    get keySchema() {
        return this._def.keyType
    }
    get valueSchema() {
        return this._def.valueType
    }
    _parse(e) {
        let {status: t, ctx: n} = this._processInputParams(e);
        if (n.parsedType !== L.object)
            return V(n, {
                code: z.invalid_type,
                expected: L.object,
                received: n.parsedType
            }),
            U;
        let r = []
          , i = this._def.keyType
          , a = this._def.valueType;
        for (let e in n.data)
            r.push({
                key: i._parse(new K(n,e,n.path,e)),
                value: a._parse(new K(n,n.data[e],n.path,e)),
                alwaysSet: e in n.data
            });
        return n.common.async ? H.mergeObjectAsync(t, r) : H.mergeObjectSync(t, r)
    }
    get element() {
        return this._def.valueType
    }
    static create(t, n, r) {
        return n instanceof J ? new e({
            keyType: t,
            valueType: n,
            typeName: $.ZodRecord,
            ...q(r)
        }) : new e({
            keyType: ta.create(),
            valueType: t,
            typeName: $.ZodRecord,
            ...q(n)
        })
    }
}
  , Sa = class extends J {
    get keySchema() {
        return this._def.keyType
    }
    get valueSchema() {
        return this._def.valueType
    }
    _parse(e) {
        let {status: t, ctx: n} = this._processInputParams(e);
        if (n.parsedType !== L.map)
            return V(n, {
                code: z.invalid_type,
                expected: L.map,
                received: n.parsedType
            }),
            U;
        let r = this._def.keyType
          , i = this._def.valueType
          , a = [...n.data.entries()].map( ([e,t], a) => ({
            key: r._parse(new K(n,e,n.path,[a, `key`])),
            value: i._parse(new K(n,t,n.path,[a, `value`]))
        }));
        if (n.common.async) {
            let e = new Map;
            return Promise.resolve().then(async () => {
                for (let n of a) {
                    let r = await n.key
                      , i = await n.value;
                    if (r.status === `aborted` || i.status === `aborted`)
                        return U;
                    (r.status === `dirty` || i.status === `dirty`) && t.dirty(),
                    e.set(r.value, i.value)
                }
                return {
                    status: t.value,
                    value: e
                }
            }
            )
        }
        {
            let e = new Map;
            for (let n of a) {
                let r = n.key
                  , i = n.value;
                if (r.status === `aborted` || i.status === `aborted`)
                    return U;
                (r.status === `dirty` || i.status === `dirty`) && t.dirty(),
                e.set(r.value, i.value)
            }
            return {
                status: t.value,
                value: e
            }
        }
    }
}
;
Sa.create = (e, t, n) => new Sa({
    valueType: t,
    keyType: e,
    typeName: $.ZodMap,
    ...q(n)
});
var Ca = class e extends J {
    _parse(e) {
        let {status: t, ctx: n} = this._processInputParams(e);
        if (n.parsedType !== L.set)
            return V(n, {
                code: z.invalid_type,
                expected: L.set,
                received: n.parsedType
            }),
            U;
        let r = this._def;
        r.minSize !== null && n.data.size < r.minSize.value && (V(n, {
            code: z.too_small,
            minimum: r.minSize.value,
            type: `set`,
            inclusive: !0,
            exact: !1,
            message: r.minSize.message
        }),
        t.dirty()),
        r.maxSize !== null && n.data.size > r.maxSize.value && (V(n, {
            code: z.too_big,
            maximum: r.maxSize.value,
            type: `set`,
            inclusive: !0,
            exact: !1,
            message: r.maxSize.message
        }),
        t.dirty());
        let i = this._def.valueType;
        function a(e) {
            let n = new Set;
            for (let r of e) {
                if (r.status === `aborted`)
                    return U;
                r.status === `dirty` && t.dirty(),
                n.add(r.value)
            }
            return {
                status: t.value,
                value: n
            }
        }
        let o = [...n.data.values()].map( (e, t) => i._parse(new K(n,e,n.path,t)));
        return n.common.async ? Promise.all(o).then(e => a(e)) : a(o)
    }
    min(t, n) {
        return new e({
            ...this._def,
            minSize: {
                value: t,
                message: G.toString(n)
            }
        })
    }
    max(t, n) {
        return new e({
            ...this._def,
            maxSize: {
                value: t,
                message: G.toString(n)
            }
        })
    }
    size(e, t) {
        return this.min(e, t).max(e, t)
    }
    nonempty(e) {
        return this.min(1, e)
    }
}
;
Ca.create = (e, t) => new Ca({
    valueType: e,
    minSize: null,
    maxSize: null,
    typeName: $.ZodSet,
    ...q(t)
});
var wa = class e extends J {
    constructor() {
        super(...arguments),
        this.validate = this.implement
    }
    _parse(e) {
        let {ctx: t} = this._processInputParams(e);
        if (t.parsedType !== L.function)
            return V(t, {
                code: z.invalid_type,
                expected: L.function,
                received: t.parsedType
            }),
            U;
        function n(e, n) {
            return wi({
                data: e,
                path: t.path,
                errorMaps: [t.common.contextualErrorMap, t.schemaErrorMap, Ci(), xi].filter(e => !!e),
                issueData: {
                    code: z.invalid_arguments,
                    argumentsError: n
                }
            })
        }
        function r(e, n) {
            return wi({
                data: e,
                path: t.path,
                errorMaps: [t.common.contextualErrorMap, t.schemaErrorMap, Ci(), xi].filter(e => !!e),
                issueData: {
                    code: z.invalid_return_type,
                    returnTypeError: n
                }
            })
        }
        let i = {
            errorMap: t.common.contextualErrorMap
        }
          , a = t.data;
        if (this._def.returns instanceof Aa) {
            let e = this;
            return W(async function(...t) {
                let o = new B([])
                  , s = await e._def.args.parseAsync(t, i).catch(e => {
                    throw o.addIssue(n(t, e)),
                    o
                }
                )
                  , c = await Reflect.apply(a, this, s);
                return await e._def.returns._def.type.parseAsync(c, i).catch(e => {
                    throw o.addIssue(r(c, e)),
                    o
                }
                )
            })
        }
        {
            let e = this;
            return W(function(...t) {
                let o = e._def.args.safeParse(t, i);
                if (!o.success)
                    throw new B([n(t, o.error)]);
                let s = Reflect.apply(a, this, o.data)
                  , c = e._def.returns.safeParse(s, i);
                if (!c.success)
                    throw new B([r(s, c.error)]);
                return c.data
            })
        }
    }
    parameters() {
        return this._def.args
    }
    returnType() {
        return this._def.returns
    }
    args(...t) {
        return new e({
            ...this._def,
            args: ba.create(t).rest(da.create())
        })
    }
    returns(t) {
        return new e({
            ...this._def,
            returns: t
        })
    }
    implement(e) {
        return this.parse(e)
    }
    strictImplement(e) {
        return this.parse(e)
    }
    static create(t, n, r) {
        return new e({
            args: t || ba.create([]).rest(da.create()),
            returns: n || da.create(),
            typeName: $.ZodFunction,
            ...q(r)
        })
    }
}
  , Ta = class extends J {
    get schema() {
        return this._def.getter()
    }
    _parse(e) {
        let {ctx: t} = this._processInputParams(e);
        return this._def.getter()._parse({
            data: t.data,
            path: t.path,
            parent: t
        })
    }
}
;
Ta.create = (e, t) => new Ta({
    getter: e,
    typeName: $.ZodLazy,
    ...q(t)
});
var Ea = class extends J {
    _parse(e) {
        if (e.data !== this._def.value) {
            let t = this._getOrReturnCtx(e);
            return V(t, {
                received: t.data,
                code: z.invalid_literal,
                expected: this._def.value
            }),
            U
        }
        return {
            status: `valid`,
            value: e.data
        }
    }
    get value() {
        return this._def.value
    }
}
;
Ea.create = (e, t) => new Ea({
    value: e,
    typeName: $.ZodLiteral,
    ...q(t)
});
function Da(e, t) {
    return new Oa({
        values: e,
        typeName: $.ZodEnum,
        ...q(t)
    })
}
var Oa = class e extends J {
    _parse(e) {
        if (typeof e.data != `string`) {
            let t = this._getOrReturnCtx(e)
              , n = this._def.values;
            return V(t, {
                expected: I.joinValues(n),
                received: t.parsedType,
                code: z.invalid_type
            }),
            U
        }
        if (this._cache ||= new Set(this._def.values),
        !this._cache.has(e.data)) {
            let t = this._getOrReturnCtx(e)
              , n = this._def.values;
            return V(t, {
                received: t.data,
                code: z.invalid_enum_value,
                options: n
            }),
            U
        }
        return W(e.data)
    }
    get options() {
        return this._def.values
    }
    get enum() {
        let e = {};
        for (let t of this._def.values)
            e[t] = t;
        return e
    }
    get Values() {
        let e = {};
        for (let t of this._def.values)
            e[t] = t;
        return e
    }
    get Enum() {
        let e = {};
        for (let t of this._def.values)
            e[t] = t;
        return e
    }
    extract(t, n=this._def) {
        return e.create(t, {
            ...this._def,
            ...n
        })
    }
    exclude(t, n=this._def) {
        return e.create(this.options.filter(e => !t.includes(e)), {
            ...this._def,
            ...n
        })
    }
}
;
Oa.create = Da;
var ka = class extends J {
    _parse(e) {
        let t = I.getValidEnumValues(this._def.values)
          , n = this._getOrReturnCtx(e);
        if (n.parsedType !== L.string && n.parsedType !== L.number) {
            let e = I.objectValues(t);
            return V(n, {
                expected: I.joinValues(e),
                received: n.parsedType,
                code: z.invalid_type
            }),
            U
        }
        if (this._cache ||= new Set(I.getValidEnumValues(this._def.values)),
        !this._cache.has(e.data)) {
            let e = I.objectValues(t);
            return V(n, {
                received: n.data,
                code: z.invalid_enum_value,
                options: e
            }),
            U
        }
        return W(e.data)
    }
    get enum() {
        return this._def.values
    }
}
;
ka.create = (e, t) => new ka({
    values: e,
    typeName: $.ZodNativeEnum,
    ...q(t)
});
var Aa = class extends J {
    unwrap() {
        return this._def.type
    }
    _parse(e) {
        let {ctx: t} = this._processInputParams(e);
        return t.parsedType !== L.promise && t.common.async === !1 ? (V(t, {
            code: z.invalid_type,
            expected: L.promise,
            received: t.parsedType
        }),
        U) : W((t.parsedType === L.promise ? t.data : Promise.resolve(t.data)).then(e => this._def.type.parseAsync(e, {
            path: t.path,
            errorMap: t.common.contextualErrorMap
        })))
    }
}
;
Aa.create = (e, t) => new Aa({
    type: e,
    typeName: $.ZodPromise,
    ...q(t)
});
var Z = class extends J {
    innerType() {
        return this._def.schema
    }
    sourceType() {
        return this._def.schema._def.typeName === $.ZodEffects ? this._def.schema.sourceType() : this._def.schema
    }
    _parse(e) {
        let {status: t, ctx: n} = this._processInputParams(e)
          , r = this._def.effect || null
          , i = {
            addIssue: e => {
                V(n, e),
                e.fatal ? t.abort() : t.dirty()
            }
            ,
            get path() {
                return n.path
            }
        };
        if (i.addIssue = i.addIssue.bind(i),
        r.type === `preprocess`) {
            let e = r.transform(n.data, i);
            if (n.common.async)
                return Promise.resolve(e).then(async e => {
                    if (t.value === `aborted`)
                        return U;
                    let r = await this._def.schema._parseAsync({
                        data: e,
                        path: n.path,
                        parent: n
                    });
                    return r.status === `aborted` ? U : r.status === `dirty` || t.value === `dirty` ? Ti(r.value) : r
                }
                );
            {
                if (t.value === `aborted`)
                    return U;
                let r = this._def.schema._parseSync({
                    data: e,
                    path: n.path,
                    parent: n
                });
                return r.status === `aborted` ? U : r.status === `dirty` || t.value === `dirty` ? Ti(r.value) : r
            }
        }
        if (r.type === `refinement`) {
            let e = e => {
                let t = r.refinement(e, i);
                if (n.common.async)
                    return Promise.resolve(t);
                if (t instanceof Promise)
                    throw Error(`Async refinement encountered during synchronous parse operation. Use .parseAsync instead.`);
                return e
            }
            ;
            if (n.common.async === !1) {
                let r = this._def.schema._parseSync({
                    data: n.data,
                    path: n.path,
                    parent: n
                });
                return r.status === `aborted` ? U : (r.status === `dirty` && t.dirty(),
                e(r.value),
                {
                    status: t.value,
                    value: r.value
                })
            }
            return this._def.schema._parseAsync({
                data: n.data,
                path: n.path,
                parent: n
            }).then(n => n.status === `aborted` ? U : (n.status === `dirty` && t.dirty(),
            e(n.value).then( () => ({
                status: t.value,
                value: n.value
            }))))
        }
        if (r.type === `transform`)
            if (n.common.async === !1) {
                let e = this._def.schema._parseSync({
                    data: n.data,
                    path: n.path,
                    parent: n
                });
                if (!Oi(e))
                    return U;
                let a = r.transform(e.value, i);
                if (a instanceof Promise)
                    throw Error(`Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.`);
                return {
                    status: t.value,
                    value: a
                }
            } else
                return this._def.schema._parseAsync({
                    data: n.data,
                    path: n.path,
                    parent: n
                }).then(e => Oi(e) ? Promise.resolve(r.transform(e.value, i)).then(e => ({
                    status: t.value,
                    value: e
                })) : U);
        I.assertNever(r)
    }
}
;
Z.create = (e, t, n) => new Z({
    schema: e,
    typeName: $.ZodEffects,
    effect: t,
    ...q(n)
}),
Z.createWithPreprocess = (e, t, n) => new Z({
    schema: t,
    effect: {
        type: `preprocess`,
        transform: e
    },
    typeName: $.ZodEffects,
    ...q(n)
});
var Q = class extends J {
    _parse(e) {
        return this._getType(e) === L.undefined ? W(void 0) : this._def.innerType._parse(e)
    }
    unwrap() {
        return this._def.innerType
    }
}
;
Q.create = (e, t) => new Q({
    innerType: e,
    typeName: $.ZodOptional,
    ...q(t)
});
var ja = class extends J {
    _parse(e) {
        return this._getType(e) === L.null ? W(null) : this._def.innerType._parse(e)
    }
    unwrap() {
        return this._def.innerType
    }
}
;
ja.create = (e, t) => new ja({
    innerType: e,
    typeName: $.ZodNullable,
    ...q(t)
});
var Ma = class extends J {
    _parse(e) {
        let {ctx: t} = this._processInputParams(e)
          , n = t.data;
        return t.parsedType === L.undefined && (n = this._def.defaultValue()),
        this._def.innerType._parse({
            data: n,
            path: t.path,
            parent: t
        })
    }
    removeDefault() {
        return this._def.innerType
    }
}
;
Ma.create = (e, t) => new Ma({
    innerType: e,
    typeName: $.ZodDefault,
    defaultValue: typeof t.default == `function` ? t.default : () => t.default,
    ...q(t)
});
var Na = class extends J {
    _parse(e) {
        let {ctx: t} = this._processInputParams(e)
          , n = {
            ...t,
            common: {
                ...t.common,
                issues: []
            }
        }
          , r = this._def.innerType._parse({
            data: n.data,
            path: n.path,
            parent: {
                ...n
            }
        });
        return ki(r) ? r.then(e => ({
            status: `valid`,
            value: e.status === `valid` ? e.value : this._def.catchValue({
                get error() {
                    return new B(n.common.issues)
                },
                input: n.data
            })
        })) : {
            status: `valid`,
            value: r.status === `valid` ? r.value : this._def.catchValue({
                get error() {
                    return new B(n.common.issues)
                },
                input: n.data
            })
        }
    }
    removeCatch() {
        return this._def.innerType
    }
}
;
Na.create = (e, t) => new Na({
    innerType: e,
    typeName: $.ZodCatch,
    catchValue: typeof t.catch == `function` ? t.catch : () => t.catch,
    ...q(t)
});
var Pa = class extends J {
    _parse(e) {
        if (this._getType(e) !== L.nan) {
            let t = this._getOrReturnCtx(e);
            return V(t, {
                code: z.invalid_type,
                expected: L.nan,
                received: t.parsedType
            }),
            U
        }
        return {
            status: `valid`,
            value: e.data
        }
    }
}
;
Pa.create = e => new Pa({
    typeName: $.ZodNaN,
    ...q(e)
});
var Fa = class extends J {
    _parse(e) {
        let {ctx: t} = this._processInputParams(e)
          , n = t.data;
        return this._def.type._parse({
            data: n,
            path: t.path,
            parent: t
        })
    }
    unwrap() {
        return this._def.type
    }
}
  , Ia = class e extends J {
    _parse(e) {
        let {status: t, ctx: n} = this._processInputParams(e);
        if (n.common.async)
            return (async () => {
                let e = await this._def.in._parseAsync({
                    data: n.data,
                    path: n.path,
                    parent: n
                });
                return e.status === `aborted` ? U : e.status === `dirty` ? (t.dirty(),
                Ti(e.value)) : this._def.out._parseAsync({
                    data: e.value,
                    path: n.path,
                    parent: n
                })
            }
            )();
        {
            let e = this._def.in._parseSync({
                data: n.data,
                path: n.path,
                parent: n
            });
            return e.status === `aborted` ? U : e.status === `dirty` ? (t.dirty(),
            {
                status: `dirty`,
                value: e.value
            }) : this._def.out._parseSync({
                data: e.value,
                path: n.path,
                parent: n
            })
        }
    }
    static create(t, n) {
        return new e({
            in: t,
            out: n,
            typeName: $.ZodPipeline
        })
    }
}
  , La = class extends J {
    _parse(e) {
        let t = this._def.innerType._parse(e)
          , n = e => (Oi(e) && (e.value = Object.freeze(e.value)),
        e);
        return ki(t) ? t.then(e => n(e)) : n(t)
    }
    unwrap() {
        return this._def.innerType
    }
}
;
La.create = (e, t) => new La({
    innerType: e,
    typeName: $.ZodReadonly,
    ...q(t)
}),
X.lazycreate;
var $;
(function(e) {
    e.ZodString = `ZodString`,
    e.ZodNumber = `ZodNumber`,
    e.ZodNaN = `ZodNaN`,
    e.ZodBigInt = `ZodBigInt`,
    e.ZodBoolean = `ZodBoolean`,
    e.ZodDate = `ZodDate`,
    e.ZodSymbol = `ZodSymbol`,
    e.ZodUndefined = `ZodUndefined`,
    e.ZodNull = `ZodNull`,
    e.ZodAny = `ZodAny`,
    e.ZodUnknown = `ZodUnknown`,
    e.ZodNever = `ZodNever`,
    e.ZodVoid = `ZodVoid`,
    e.ZodArray = `ZodArray`,
    e.ZodObject = `ZodObject`,
    e.ZodUnion = `ZodUnion`,
    e.ZodDiscriminatedUnion = `ZodDiscriminatedUnion`,
    e.ZodIntersection = `ZodIntersection`,
    e.ZodTuple = `ZodTuple`,
    e.ZodRecord = `ZodRecord`,
    e.ZodMap = `ZodMap`,
    e.ZodSet = `ZodSet`,
    e.ZodFunction = `ZodFunction`,
    e.ZodLazy = `ZodLazy`,
    e.ZodLiteral = `ZodLiteral`,
    e.ZodEnum = `ZodEnum`,
    e.ZodEffects = `ZodEffects`,
    e.ZodNativeEnum = `ZodNativeEnum`,
    e.ZodOptional = `ZodOptional`,
    e.ZodNullable = `ZodNullable`,
    e.ZodDefault = `ZodDefault`,
    e.ZodCatch = `ZodCatch`,
    e.ZodPromise = `ZodPromise`,
    e.ZodBranded = `ZodBranded`,
    e.ZodPipeline = `ZodPipeline`,
    e.ZodReadonly = `ZodReadonly`
}
)($ ||= {}),
ta.create;
var Ra = ra.create;
Pa.create,
ia.create,
aa.create,
oa.create,
sa.create,
ca.create,
la.create,
ua.create,
da.create,
Y.create,
fa.create,
pa.create;
var za = X.create;
X.strictCreate,
ha.create,
_a.create,
ya.create,
ba.create,
xa.create,
Sa.create,
Ca.create,
wa.create,
Ta.create,
Ea.create;
var Ba = Oa.create;
ka.create,
Aa.create,
Z.create,
Q.create,
ja.create,
Z.createWithPreprocess,
Ia.create;
var Va = za({
    theme: Ba([`dark`, `light`, `system`]),
    hue: Ra().finite().min(0).max(360),
    font: Ba([`Cairo`, `Tajawal`, `Inter`, `system-ui`]),
    fontSize: Ra().int().min(14).max(20),
    density: Ba([`comfortable`, `compact`]),
    radius: Ba([`rounded`, `soft`, `crisp`]),
    motion: Ba([`system`, `reduce`])
});
function Ha(e) {
    let t = Va.safeParse(e);
    return t.success ? t.data : {
        ...mi
    }
}
function Ua(e) {
    if (![`image/jpeg`, `image/png`, `image/webp`].includes(e.type))
        throw Error(`اختر صورة PNG أو JPEG أو WebP.`);
    if (e.size === 0 || e.size > 5242880)
        throw Error(`حجم الصورة يجب ألا يتجاوز 5MB وألا تكون فارغة.`)
}
var Wa = (...e) => e.filter( (e, t, n) => !!e && e.trim() !== `` && n.indexOf(e) === t).join(` `).trim()
  , Ga = e => e.replace(/([a-z0-9])([A-Z])/g, `$1-$2`).toLowerCase()
  , Ka = e => e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, t, n) => n ? n.toUpperCase() : t.toLowerCase())
  , qa = e => {
    let t = Ka(e);
    return t.charAt(0).toUpperCase() + t.slice(1)
}
  , Ja = {
    xmlns: `http://www.w3.org/2000/svg`,
    width: 24,
    height: 24,
    viewBox: `0 0 24 24`,
    fill: `none`,
    stroke: `currentColor`,
    strokeWidth: 2,
    strokeLinecap: `round`,
    strokeLinejoin: `round`
}
  , Ya = e => {
    for (let t in e)
        if (t.startsWith(`aria-`) || t === `role` || t === `title`)
            return !0;
    return !1
}
  , Xa = (0,
w.forwardRef)( ({color: e=`currentColor`, size: t=24, strokeWidth: n=2, absoluteStrokeWidth: r, className: i=``, children: a, iconNode: o, ...s}, c) => (0,
w.createElement)(`svg`, {
    ref: c,
    ...Ja,
    width: t,
    height: t,
    stroke: e,
    strokeWidth: r ? Number(n) * 24 / Number(t) : n,
    className: Wa(`lucide`, i),
    ...!a && !Ya(s) && {
        "aria-hidden": `true`
    },
    ...s
}, [...o.map( ([e,t]) => (0,
w.createElement)(e, t)), ...Array.isArray(a) ? a : [a]]))
  , Za = (e, t) => {
    let n = (0,
    w.forwardRef)( ({className: n, ...r}, i) => (0,
    w.createElement)(Xa, {
        ref: i,
        iconNode: t,
        className: Wa(`lucide-${Ga(qa(e))}`, `lucide-${e}`, n),
        ...r
    }));
    return n.displayName = qa(e),
    n
}
  , Qa = Za(`camera`, [[`path`, {
    d: `M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z`,
    key: `18u6gg`
}], [`circle`, {
    cx: `12`,
    cy: `13`,
    r: `3`,
    key: `1vg3eu`
}]])
  , $a = Za(`log-out`, [[`path`, {
    d: `m16 17 5-5-5-5`,
    key: `1bji2h`
}], [`path`, {
    d: `M21 12H9`,
    key: `dn1m92`
}], [`path`, {
    d: `M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4`,
    key: `1uf3rs`
}]])
  , eo = Za(`monitor-smartphone`, [[`path`, {
    d: `M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8`,
    key: `10dyio`
}], [`path`, {
    d: `M10 19v-3.96 3.15`,
    key: `1irgej`
}], [`path`, {
    d: `M7 19h5`,
    key: `qswx4l`
}], [`rect`, {
    width: `6`,
    height: `10`,
    x: `16`,
    y: `12`,
    rx: `2`,
    key: `1egngj`
}]])
  , to = Za(`trash-2`, [[`path`, {
    d: `M10 11v6`,
    key: `nco0om`
}], [`path`, {
    d: `M14 11v6`,
    key: `outv1u`
}], [`path`, {
    d: `M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6`,
    key: `miytrc`
}], [`path`, {
    d: `M3 6h18`,
    key: `d0wm0j`
}], [`path`, {
    d: `M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2`,
    key: `e791ji`
}]])
  , no = Za(`user-round`, [[`circle`, {
    cx: `12`,
    cy: `8`,
    r: `5`,
    key: `1hypcn`
}], [`path`, {
    d: `M20 21a8 8 0 0 0-16 0`,
    key: `rfgkzh`
}]])
  , ro = Za(`x`, [[`path`, {
    d: `M18 6 6 18`,
    key: `1bl5f8`
}], [`path`, {
    d: `m6 6 12 12`,
    key: `d8bk6v`
}]])
  , io = Wr
  , ao = Xr
  , oo = w.forwardRef( ({className: e, ...t}, n) => (0,
T.jsx)(Qr, {
    ref: n,
    className: pe(`fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0`, e),
    ...t
}));
oo.displayName = Qr.displayName;
var so = w.forwardRef( ({className: e, children: t, ...n}, r) => (0,
T.jsxs)(ao, {
    children: [(0,
    T.jsx)(oo, {}), (0,
    T.jsxs)(ni, {
        ref: r,
        className: pe(`fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg`, e),
        ...n,
        children: [t, (0,
        T.jsxs)(di, {
            className: `absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground`,
            children: [(0,
            T.jsx)(ro, {
                className: `h-4 w-4`
            }), (0,
            T.jsx)(`span`, {
                className: `sr-only`,
                children: `Close`
            })]
        })]
    })]
}));
so.displayName = ni.displayName;
var co = ({className: e, ...t}) => (0,
T.jsx)(`div`, {
    className: pe(`flex flex-col space-y-1.5 text-center sm:text-left`, e),
    ...t
});
co.displayName = `DialogHeader`;
var lo = w.forwardRef( ({className: e, ...t}, n) => (0,
T.jsx)(si, {
    ref: n,
    className: pe(`text-lg font-semibold leading-none tracking-tight`, e),
    ...t
}));
lo.displayName = si.displayName;
var uo = w.forwardRef( ({className: e, ...t}, n) => (0,
T.jsx)(li, {
    ref: n,
    className: pe(`text-sm text-muted-foreground`, e),
    ...t
}));
uo.displayName = li.displayName;
var fo = ce({
    type: `function`
})
  , po = we({
    method: `POST`
}).middleware([fo]).handler(g(`6813f6f308863959e3b7cd9acadf923b6927f9fa4402980caeba2f2145ddc168`));
function mo() {
    let e = ye(po)
      , [t,r] = (0,
    w.useState)()
      , [i,a] = (0,
    w.useState)(``)
      , [o,s] = (0,
    w.useState)(!1);
    return (0,
    w.useEffect)( () => {
        e({
            data: {
                label: /Android|iPhone|Mobile/i.test(navigator.userAgent) ? `هاتف · متصفح` : `كمبيوتر · متصفح`
            }
        }).then(r).catch( () => a(`تعذّر تحميل الأجهزة.`))
    }
    , [e]),
    (0,
    T.jsxs)(`section`, {
        className: `space-y-3 border-t pt-4`,
        children: [(0,
        T.jsxs)(`h3`, {
            className: `flex items-center gap-2 font-semibold`,
            children: [(0,
            T.jsx)(eo, {}), `الأجهزة والجلسات`]
        }), (0,
        T.jsx)(`p`, {
            className: `text-xs text-muted-foreground`,
            children: `أجهزة فتحت التطبيق بهذا الحساب؛ آخر ظهور ليس ضماناً لاستمرار الجلسة.`
        }), t?.devices.map(e => (0,
        T.jsxs)(`div`, {
            className: `flex flex-wrap justify-between gap-2 text-sm`,
            children: [(0,
            T.jsxs)(`span`, {
                children: [e.device_label, e.session_id === t.currentId ? ` · هذا الجهاز` : ``]
            }), (0,
            T.jsx)(`time`, {
                className: `text-xs text-muted-foreground`,
                children: new Date(e.last_seen).toLocaleString(`ar-EG`)
            })]
        }, e.session_id)), i && (0,
        T.jsx)(`p`, {
            role: `status`,
            className: `text-sm text-destructive`,
            children: i
        }), (0,
        T.jsxs)(C, {
            variant: `outline`,
            disabled: o,
            className: `w-full`,
            onClick: async () => {
                s(!0),
                a(``),
                (await n.auth.signOut({
                    scope: `others`
                })).error ? a(`تعذّر إنهاء الجلسات الأخرى.`) : a(`تم إلغاء تجديد الجلسات الأخرى؛ قد يظل الوصول سارياً حتى انتهاء رمز الدخول الحالي.`),
                s(!1)
            }
            ,
            children: [(0,
            T.jsx)($a, {}), `تسجيل خروج الأجهزة الأخرى`]
        })]
    })
}
function ho() {
    let {user: e, ready: t} = c()
      , r = pi()
      , [i,a] = (0,
    w.useState)(!1)
      , [l,u] = (0,
    w.useState)(``)
      , [d,f] = (0,
    w.useState)(!1)
      , [p,m] = (0,
    w.useState)(``)
      , h = (0,
    w.useRef)(null)
      , g = o()
      , _ = de();
    if (!t)
        return (0,
        T.jsx)(`span`, {
            className: `h-9 w-20 animate-pulse rounded-md bg-surface`
        });
    if (!e)
        return (0,
        T.jsx)(C, {
            variant: `outline`,
            asChild: !0,
            children: (0,
            T.jsxs)(s, {
                to: `/auth`,
                children: [(0,
                T.jsx)(no, {}), `تسجيل الدخول`]
            })
        });
    let v = e.id;
    async function y(e) {
        let {error: t, data: r} = await n.from(`profiles`).update(e).eq(`id`, v).select(`id`).single();
        if (t || !r)
            throw t || Error(`تعذّر حفظ الملف الشخصي.`);
        await g.invalidateQueries({
            queryKey: [`profile`, v]
        })
    }
    async function ee(e) {
        if (!e)
            return;
        f(!0),
        m(``);
        let t;
        try {
            Ua(e);
            let i = await createImageBitmap(e)
              , a = document.createElement(`canvas`)
              , o = Math.min(1, 512 / Math.max(i.width, i.height));
            a.width = Math.max(1, Math.round(i.width * o)),
            a.height = Math.max(1, Math.round(i.height * o));
            let s = a.getContext(`2d`);
            if (!s)
                throw i.close(),
                Error(`تعذّر تجهيز الصورة.`);
            s.drawImage(i, 0, 0, a.width, a.height),
            i.close();
            let c = await new Promise( (e, t) => a.toBlob(n => n ? e(n) : t(Error(`تعذّر تجهيز الصورة.`)), `image/webp`, .85));
            t = `${v}/${crypto.randomUUID()}.webp`;
            let l = r.data?.avatar_path
              , u = await n.storage.from(`avatars`).upload(t, c, {
                contentType: `image/webp`
            });
            if (u.error)
                throw u.error;
            await y({
                avatar_path: t
            }),
            t = void 0,
            l && await n.storage.from(`avatars`).remove([l]),
            re.success(`تم حفظ الصورة`)
        } catch (e) {
            t && await n.storage.from(`avatars`).remove([t]),
            m(e.message)
        } finally {
            f(!1)
        }
    }
    return (0,
    T.jsxs)(T.Fragment, {
        children: [(0,
        T.jsxs)(C, {
            variant: `ghost`,
            className: `max-w-40 gap-2`,
            "aria-label": `الملف الشخصي`,
            onClick: () => {
                u(r.data?.display_name || ``),
                m(``),
                a(!0)
            }
            ,
            children: [r.data?.avatarUrl ? (0,
            T.jsx)(`img`, {
                src: r.data.avatarUrl,
                className: `h-7 w-7 shrink-0 rounded-full object-cover`,
                alt: `صورتك`
            }) : (0,
            T.jsx)(no, {}), (0,
            T.jsx)(`span`, {
                className: `hidden truncate sm:inline`,
                children: r.data?.display_name || `حسابي`
            })]
        }), (0,
        T.jsx)(io, {
            open: i,
            onOpenChange: a,
            children: (0,
            T.jsxs)(so, {
                dir: `rtl`,
                className: `max-h-[90dvh] overflow-y-auto sm:max-w-md`,
                children: [(0,
                T.jsxs)(co, {
                    className: `text-right`,
                    children: [(0,
                    T.jsx)(lo, {
                        children: `الملف الشخصي`
                    }), (0,
                    T.jsx)(uo, {
                        className: `break-all`,
                        dir: `ltr`,
                        children: e.email
                    })]
                }), r.isLoading ? (0,
                T.jsx)(`p`, {
                    role: `status`,
                    children: `جارٍ تحميل الملف…`
                }) : r.isError ? (0,
                T.jsxs)(T.Fragment, {
                    children: [(0,
                    T.jsx)(`p`, {
                        role: `alert`,
                        className: `text-destructive`,
                        children: `تعذّر تحميل الملف الشخصي.`
                    }), (0,
                    T.jsx)(C, {
                        variant: `outline`,
                        onClick: () => void r.refetch(),
                        children: `إعادة المحاولة`
                    })]
                }) : (0,
                T.jsxs)(T.Fragment, {
                    children: [(0,
                    T.jsxs)(`div`, {
                        className: `flex items-center gap-4`,
                        children: [r.data?.avatarUrl ? (0,
                        T.jsx)(`img`, {
                            src: r.data.avatarUrl,
                            alt: `الصورة الشخصية`,
                            className: `h-20 w-20 rounded-full object-cover`
                        }) : (0,
                        T.jsx)(`div`, {
                            className: `grid h-20 w-20 shrink-0 place-items-center rounded-full bg-accent`,
                            children: (0,
                            T.jsx)(no, {
                                className: `h-8 w-8 text-primary`
                            })
                        }), (0,
                        T.jsxs)(`div`, {
                            className: `space-y-2`,
                            children: [(0,
                            T.jsx)(`input`, {
                                ref: h,
                                type: `file`,
                                accept: `image/png,image/jpeg,image/webp`,
                                hidden: !0,
                                onChange: e => {
                                    ee(e.target.files?.[0]),
                                    e.target.value = ``
                                }
                            }), (0,
                            T.jsxs)(C, {
                                variant: `outline`,
                                disabled: d,
                                onClick: () => h.current?.click(),
                                children: [(0,
                                T.jsx)(Qa, {}), `تغيير الصورة`]
                            }), (0,
                            T.jsx)(`p`, {
                                className: `text-xs text-muted-foreground`,
                                children: `PNG، JPEG، WebP · حتى 5MB`
                            }), r.data?.avatar_path && (0,
                            T.jsxs)(C, {
                                variant: `ghost`,
                                disabled: d,
                                onClick: async () => {
                                    f(!0),
                                    m(``);
                                    try {
                                        let e = r.data?.avatar_path;
                                        await y({
                                            avatar_path: null
                                        }),
                                        e && await n.storage.from(`avatars`).remove([e])
                                    } catch (e) {
                                        m(e.message)
                                    } finally {
                                        f(!1)
                                    }
                                }
                                ,
                                children: [(0,
                                T.jsx)(to, {}), `إزالة الصورة`]
                            })]
                        })]
                    }), (0,
                    T.jsxs)(`form`, {
                        className: `space-y-4`,
                        onSubmit: async e => {
                            e.preventDefault(),
                            f(!0),
                            m(``);
                            try {
                                await y({
                                    display_name: l.trim()
                                }),
                                re.success(`تم حفظ الاسم`)
                            } catch (e) {
                                m(e.message)
                            } finally {
                                f(!1)
                            }
                        }
                        ,
                        children: [(0,
                        T.jsxs)(`label`, {
                            className: `block space-y-2`,
                            children: [`الاسم`, (0,
                            T.jsx)(he, {
                                value: l,
                                onChange: e => u(e.target.value),
                                maxLength: 80,
                                required: !0,
                                autoComplete: `name`
                            })]
                        }), (0,
                        T.jsx)(C, {
                            type: `submit`,
                            disabled: d,
                            className: `w-full`,
                            children: d ? `جارٍ الحفظ…` : `حفظ الاسم`
                        })]
                    })]
                }), p && (0,
                T.jsx)(`p`, {
                    role: `alert`,
                    className: `break-words text-sm text-destructive`,
                    children: p
                }), (0,
                T.jsx)(mo, {}), (0,
                T.jsxs)(C, {
                    variant: `outline`,
                    disabled: d,
                    onClick: async () => {
                        f(!0),
                        m(``);
                        try {
                            await g.cancelQueries(),
                            g.clear();
                            let e = await n.auth.signOut({
                                scope: `local`
                            });
                            if (e.error)
                                throw e.error;
                            a(!1),
                            await _({
                                to: `/auth`,
                                replace: !0
                            })
                        } catch (e) {
                            m(e.message)
                        } finally {
                            f(!1)
                        }
                    }
                    ,
                    children: [(0,
                    T.jsx)($a, {}), `تسجيل الخروج من هذا الجهاز`]
                })]
            })
        })]
    })
}
export {dn as A, Qe as B, Xr as C, Rr as D, Hr as E, k as F, we as H, bt as I, dt as L, Yt as M, Rt as N, kr as O, jt as P, O as R, Qr as S, Kr as T, ye as U, Ye as V, pi as _, uo as a, ni as b, to as c, Va as d, hi as f, vi as g, _i as h, so as i, cn as j, Sn as k, Za as l, yi as m, fo as n, co as o, mi as p, io as r, lo as s, ho as t, Ha as u, Wr as v, si as w, li as x, di as y, D as z};
