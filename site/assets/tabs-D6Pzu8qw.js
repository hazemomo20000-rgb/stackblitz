const __vite__mapDeps = (i, m=__vite__mapDeps, d=(m.f || (m.f = ["assets/document-reader-EqHNbatE.js", "assets/rolldown-runtime-Dd_uD5pT.js", "assets/index-dAyLOZ_j.js", "assets/AccountProvider-BXmG3VwF.js"]))) => i.map(i => d[i]);
import {i as e} from "./rolldown-runtime-Dd_uD5pT.js";
import {B as t, a as n, h as r, n as i} from "./AccountProvider-BXmG3VwF.js";
import {A as a, B as o, F as s, I as c, L as l, P as u, R as d, z as f} from "./AccountControl-BjyFqWHo.js";
import {t as p} from "./index-dAyLOZ_j.js";
import {a as m, i as h, o as g} from "./input-BzwlD5Ye.js";
var _ = [{
    id: `summarize`,
    title: `تلخيص الملفات`,
    category: `المستندات`,
    kind: `tool`,
    acceptsFiles: !0,
    prompt: `لخّص المحتوى التالي في نقاط واضحة مع الحفاظ على الأرقام والمعلومات الأصلية:`
}, {
    id: `data`,
    title: `تحليل البيانات`,
    category: `البيانات`,
    kind: `tool`,
    acceptsFiles: !0,
    prompt: `حلّل البيانات التالية، واستخرج الاتجاهات والملاحظات دون اختلاق قيم:`
}, {
    id: `code`,
    title: `مراجعة الكود`,
    category: `البرمجة`,
    kind: `tool`,
    acceptsFiles: !0,
    prompt: `راجع الكود التالي، ووضح الأخطاء واقترح إصلاحات محددة:`
}, {
    id: `translate`,
    title: `الترجمة`,
    category: `الكتابة`,
    kind: `tool`,
    prompt: `ترجم النص التالي إلى اللغة المحددة في الطلب مع الحفاظ على المعنى والتنسيق:`
}, {
    id: `report`,
    title: `كتابة تقرير`,
    category: `المستندات`,
    kind: `skill`,
    prompt: `أعد تقريراً منظماً بعناوين وملخص وتوصيات استناداً حصراً إلى المعلومات التالية:`
}, {
    id: `study`,
    title: `خطة مذاكرة`,
    category: `التعلّم`,
    kind: `skill`,
    prompt: `نظّم خطة مذاكرة عملية للمعلومات التالية، مع تقسيم الوقت والمراجعة:`
}, {
    id: `slides`,
    title: `محتوى عرض تقديمي`,
    category: `الكتابة`,
    kind: `skill`,
    prompt: `أعد محتوى عرض تقديمي شريحة بشريحة مع عناوين ونقاط وملاحظات المتحدث، وليس ملف عرض جاهزاً:`
}, {
    id: `tax`,
    title: `مراجعة سؤال ضريبي`,
    category: `البيانات`,
    kind: `skill`,
    prompt: `حلّل السؤال الضريبي التالي. وضح البلد والفترة وأي معلومات ناقصة، ولا تدّع التحقق من القوانين الحديثة دون مصادر:`
}];
function v(e, t, n) {
    let r = e.trim().toLocaleLowerCase();
    return _.filter(e => (t === `all` || e.category === t) && (n === `all` || e.kind === n) && `${e.title} ${e.category}`.toLocaleLowerCase().includes(r))
}
var y = `hazem_studio_tool_draft`
  , b = e(t(), 1)
  , x = `hazem_studio_chats_v2`
  , S = () => crypto.randomUUID();
function C(e) {
    if (!Array.isArray(e))
        return [];
    let t = Date.now();
    return e.filter(e => !!e && typeof e == `object`).map( (e, n) => {
        let r = Array.isArray(e.messages) ? e.messages : []
          , i = Number(e.id) > 0xe8d4a51000 ? Number(e.id) : t - n * 1e3;
        return {
            id: String(e.id ?? S()),
            title: String(e.title ?? `محادثة`).slice(0, 120),
            pinned: !!e.pinned,
            model: `openai/gpt-6-astra`,
            createdAt: i,
            updatedAt: i,
            messages: r.filter(e => e && typeof e == `object`).map(e => ({
                id: S(),
                role: e.role === `user` ? `user` : `assistant`,
                text: String(e.rawText ?? w(String(e.text ?? ``))),
                createdAt: i
            }))
        }
    }
    )
}
function w(e) {
    return e.replace(/<[^>]*>/g, ` `).replace(/\s+/g, ` `).trim()
}
function T(e) {
    if (!e)
        return [];
    try {
        let t = JSON.parse(e);
        if (t && t.version === 2 && Array.isArray(t.chats))
            return t.chats.filter(ee)
    } catch {}
    return []
}
function ee(e) {
    return e && typeof e.id == `string` && Array.isArray(e.messages)
}
function E() {
    if (typeof window > `u`)
        return [];
    let e = localStorage.getItem(x);
    if (e !== null)
        return T(e);
    let t = [];
    try {
        t = JSON.parse(localStorage.getItem(`hazem_tech_chats`) || `[]`)
    } catch {
        t = []
    }
    let n = C(t);
    return D(n),
    n
}
function D(e) {
    try {
        let t = e.slice(0, 500);
        localStorage.setItem(x, JSON.stringify({
            version: 2,
            chats: t
        }))
    } catch {}
}
function O(e) {
    let t = Date.now();
    return {
        id: S(),
        title: `محادثة جديدة`,
        pinned: !1,
        model: e,
        messages: [],
        createdAt: t,
        updatedAt: t
    }
}
function te(e) {
    let t = e.replace(/\s+/g, ` `).trim();
    return t ? t.length > 48 ? t.slice(0, 48) + `…` : t : `محادثة جديدة`
}
function ne(e, t=Date.now()) {
    let n = 864e5
      , r = [{
        label: `مثبّتة`,
        items: []
    }, {
        label: `اليوم`,
        items: []
    }, {
        label: `آخر 7 أيام`,
        items: []
    }, {
        label: `أقدم`,
        items: []
    }];
    for (let i of [...e].sort( (e, t) => t.updatedAt - e.updatedAt))
        i.pinned ? r[0].items.push(i) : t - i.updatedAt < n ? r[1].items.push(i) : t - i.updatedAt < 7 * n ? r[2].items.push(i) : r[3].items.push(i);
    return r.filter(e => e.items.length)
}
function re(e, t) {
    let n = new Map(e.filter(e => !e.deleted).map(e => [e.id, e.payload]));
    for (let[e,r] of t)
        r ? n.set(e, r) : n.delete(e);
    return [...n.values()].sort( (e, t) => t.updatedAt - e.updatedAt)
}
function ie(e, t=crypto.randomUUID()) {
    return {
        ...e,
        id: t,
        title: `${e.title} — نسخة تعارض`,
        updatedAt: Date.now()
    }
}
function ae() {
    let {user: e, ready: t} = i()
      , [r,a] = (0,
    b.useState)([])
      , [o,s] = (0,
    b.useState)(`جارٍ تحميل المحادثات…`)
      , c = (0,
    b.useRef)([])
      , l = (0,
    b.useRef)(new Map)
      , u = (0,
    b.useRef)(void 0)
      , d = (0,
    b.useRef)(!1)
      , f = (0,
    b.useRef)(!1)
      , p = (0,
    b.useRef)(async () => {}
    )
      , [m,h] = (0,
    b.useState)(0)
      , g = (0,
    b.useCallback)(e => {
        let t = c.current
          , n = typeof e == `function` ? e(t) : e;
        if (d.current) {
            if (u.current) {
                for (let e of n)
                    JSON.stringify(t.find(t => t.id === e.id)) !== JSON.stringify(e) && l.current.set(e.id, e);
                for (let e of t)
                    n.some(t => t.id === e.id) || l.current.set(e.id, null);
                s(`جارٍ حفظ المحادثات…`);
                try {
                    localStorage.setItem(`hazem_account_chats_${u.current}`, JSON.stringify({
                        version: 2,
                        chats: n,
                        pending: [...l.current]
                    }))
                } catch {
                    s(`المساحة المحلية ممتلئة؛ جارٍ محاولة الحفظ في الحساب…`)
                }
            } else
                D(n);
            c.current = n,
            a(n),
            h(e => e + 1)
        }
    }
    , []);
    return (0,
    b.useEffect)( () => {
        if (!t)
            return;
        let r = e?.id;
        u.current = r,
        d.current = !1,
        l.current = new Map,
        f.current = !1;
        let i = r ?? ``
          , o = !0
          , m = new Map
          , h = i ? `hazem_account_chats_${i}` : ``
          , g = [];
        if (i)
            try {
                let e = localStorage.getItem(h);
                g = T(e);
                let t = JSON.parse(e || `{}`);
                Array.isArray(t.pending) && (l.current = new Map(t.pending))
            } catch {}
        else
            g = E();
        if (c.current = g,
        a(g),
        !i) {
            d.current = !0,
            s(`المحادثات محفوظة في هذا المتصفح`);
            return
        }
        let _ = l.current
          , v = () => {
            try {
                localStorage.setItem(h, JSON.stringify({
                    version: 2,
                    chats: c.current,
                    pending: [..._]
                }))
            } catch {}
        }
        ;
        async function y() {
            if (!(!o || f.current || !navigator.onLine)) {
                f.current = !0;
                try {
                    let e = await n.from(`studio_conversations`).select(`id,payload,revision,deleted`).eq(`user_id`, i);
                    if (e.error)
                        throw e.error;
                    if (!o)
                        return;
                    let t = e.data || [];
                    for (let e of t)
                        m.has(e.id) || m.set(e.id, e.revision);
                    if (!d.current && !localStorage.getItem(`${h}_imported`))
                        for (let e of E())
                            !t.some(t => t.id === e.id) && !_.has(e.id) && _.set(e.id, e);
                    d.current = !0;
                    for (let[e,r] of [..._]) {
                        let i = r || t.find(t => t.id === e)?.payload;
                        if (!i) {
                            _.delete(e);
                            continue
                        }
                        let a = await n.rpc(`save_studio_conversation`, {
                            p_id: e,
                            p_payload: i,
                            p_revision: m.get(e) || 0,
                            p_deleted: r === null
                        });
                        if (a.error)
                            throw a.error;
                        if (!o)
                            return;
                        let s = a.data;
                        if (!s.saved && r) {
                            let e = ie(r);
                            _.set(e.id, e)
                        }
                        _.get(e) === r && _.delete(e),
                        m.set(e, s.row.revision),
                        t = [...t.filter(t => t.id !== e), s.row]
                    }
                    for (let e of t)
                        _.has(e.id) || m.set(e.id, e.revision);
                    c.current = re(t, _),
                    a(c.current),
                    v(),
                    _.size ? s(`جارٍ حفظ المحادثات…`) : (localStorage.setItem(`${h}_imported`, `1`),
                    s(`المحادثات محفوظة في حسابك`))
                } catch {
                    o && (d.current = !0,
                    v(),
                    s(`تعذّرت مزامنة المحادثات؛ أعد المحاولة`))
                } finally {
                    o && (f.current = !1)
                }
            }
        }
        p.current = y,
        y();
        let b = setInterval( () => void y(), 5e3)
          , x = () => void y();
        return window.addEventListener(`online`, x),
        window.addEventListener(`focus`, x),
        () => {
            o = !1,
            clearInterval(b),
            window.removeEventListener(`online`, x),
            window.removeEventListener(`focus`, x)
        }
    }
    , [e?.id, t]),
    (0,
    b.useEffect)( () => {
        let e = setTimeout( () => void p.current(), 750);
        return () => clearTimeout(e)
    }
    , [m]),
    {
        chats: r,
        setChats: g,
        sync: o,
        retry: () => void p.current()
    }
}
var oe = {
    "image/png": [`png`],
    "image/jpeg": [`jpg`, `jpeg`],
    "image/webp": [`webp`],
    "image/gif": [`gif`]
}
  , se = [`txt`, `md`, `csv`, `json`, `js`, `ts`, `tsx`, `jsx`, `py`, `html`, `css`, `xml`, `yaml`, `yml`, `sql`, `log`]
  , k = {
    pdf: `application/pdf`,
    docx: `application/vnd.openxmlformats-officedocument.wordprocessingml.document`,
    xlsx: `application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`,
    pptx: `application/vnd.openxmlformats-officedocument.presentationml.presentation`
};
function ce(e) {
    let t = e.lastIndexOf(`.`);
    return t > 0 ? e.slice(t + 1).toLowerCase() : ``
}
function le(e) {
    if (e.size === 0)
        return {
            ok: !1,
            error: `الملف "${e.name}" فارغ.`
        };
    if (e.size > 8388608)
        return {
            ok: !1,
            error: `الملف "${e.name}" أكبر من 8 ميجابايت.`
        };
    let t = ce(e.name);
    if (k[t] && (!e.type || e.type === k[t]))
        return {
            ok: !0,
            kind: `text`
        };
    let n = oe[e.type];
    return n ? n.includes(t) ? {
        ok: !0,
        kind: `image`
    } : {
        ok: !1,
        error: `امتداد "${e.name}" لا يطابق نوع الصورة.`
    } : se.includes(t) && (e.type === `` || e.type.startsWith(`text/`) || e.type.includes(`json`) || e.type.includes(`javascript`) || e.type.includes(`xml`) || e.type.includes(`typescript`)) ? {
        ok: !0,
        kind: `text`
    } : {
        ok: !1,
        error: `نوع الملف "${e.name}" غير مدعوم حالياً.`
    }
}
function ue(e) {
    return e < 1024 ? `${e} B` : e < 1048576 ? `${(e / 1024).toFixed(1)} KB` : `${(e / 1024 / 1024).toFixed(1)} MB`
}
async function de(e) {
    let t = le(e);
    if (!t.ok)
        throw Error(t.error);
    let n = k[ce(e.name)];
    if (n) {
        let {readDocument: t} = await p(async () => {
            let {readDocument: e} = await import(`./document-reader-EqHNbatE.js`);
            return {
                readDocument: e
            }
        }
        , __vite__mapDeps([0, 1, 2, 3]));
        return {
            id: crypto.randomUUID(),
            name: e.name,
            mime: e.type || n,
            size: e.size,
            kind: `text`,
            data: await t(e)
        }
    }
    let r = await new Promise( (n, r) => {
        let i = new FileReader;
        i.onerror = () => r(Error(`تعذّرت قراءة "${e.name}".`)),
        i.onload = () => n(String(i.result)),
        t.kind === `image` ? i.readAsDataURL(e) : i.readAsText(e)
    }
    );
    return t.kind === `image` && await new Promise( (t, n) => {
        let i = new Image;
        i.onload = () => t(),
        i.onerror = () => n(Error(`الصورة "${e.name}" تالفة.`)),
        i.src = r
    }
    ),
    {
        id: crypto.randomUUID(),
        name: e.name,
        mime: e.type || `text/plain`,
        size: e.size,
        kind: t.kind,
        data: r
    }
}
var A = r()
  , fe = Object.defineProperty
  , j = (e, t) => fe(e, `name`, {
    value: t,
    configurable: !0
});
function M(e) {
    let t = e + `CollectionProvider`
      , [n,r] = o(t)
      , [i,a] = n(t, {
        collectionRef: {
            current: null
        },
        itemMap: new Map
    })
      , s = j(e => {
        let {scope: t, children: n} = e
          , r = b.useRef(null)
          , a = b.useRef(new Map).current;
        return (0,
        A.jsx)(i, {
            scope: t,
            itemMap: a,
            collectionRef: r,
            children: n
        })
    }
    , `CollectionProvider`);
    s.displayName = t;
    let c = e + `CollectionSlot`
      , l = m(c)
      , u = b.forwardRef( (e, t) => {
        let {scope: n, children: r} = e
          , i = a(c, n)
          , o = g(t, i.collectionRef);
        return (0,
        A.jsx)(l, {
            ref: o,
            children: r
        })
    }
    );
    u.displayName = c;
    let d = e + `CollectionItemSlot`
      , f = `data-radix-collection-item`
      , p = m(d)
      , h = b.forwardRef( (e, t) => {
        let {scope: n, children: r, ...i} = e
          , o = b.useRef(null)
          , s = g(t, o)
          , c = a(d, n);
        return b.useEffect( () => (c.itemMap.set(o, {
            ref: o,
            ...i
        }),
        () => void c.itemMap.delete(o))),
        (0,
        A.jsx)(p, {
            [f]: ``,
            ref: s,
            children: r
        })
    }
    );
    h.displayName = d;
    function _(t) {
        let n = a(e + `CollectionConsumer`, t);
        return b.useCallback( () => {
            let e = n.collectionRef.current;
            if (!e)
                return [];
            let t = Array.from(e.querySelectorAll(`[${f}]`));
            return Array.from(n.itemMap.values()).sort( (e, n) => t.indexOf(e.ref.current) - t.indexOf(n.ref.current))
        }
        , [n.collectionRef, n.itemMap])
    }
    return j(_, `useCollection`),
    [{
        Provider: s,
        Slot: u,
        ItemSlot: h
    }, _, r]
}
j(M, `createCollection`);
var N = new WeakMap
  , P = class e extends Map {
    static{j(this, `OrderedDict`)
    } #e;
    constructor(e) {
        super(e),
        this.#e = [...super.keys()],
        N.set(this, !0)
    }
    set(e, t) {
        return N.get(this) && (this.has(e) ? this.#e[this.#e.indexOf(e)] = e : this.#e.push(e)),
        super.set(e, t),
        this
    }
    insert(e, t, n) {
        let r = this.has(t)
          , i = this.#e.length
          , a = I(e)
          , o = a >= 0 ? a : i + a
          , s = o < 0 || o >= i ? -1 : o;
        if (s === this.size || r && s === this.size - 1 || s === -1)
            return this.set(t, n),
            this;
        let c = this.size + +!r;
        a < 0 && o++;
        let l = [...this.#e], u, d = !1;
        for (let e = o; e < c; e++)
            if (o === e) {
                let i = l[e];
                l[e] === t && (i = l[e + 1]),
                r && this.delete(t),
                u = this.get(i),
                this.set(t, n)
            } else {
                !d && l[e - 1] === t && (d = !0);
                let n = l[d ? e : e - 1]
                  , r = u;
                u = this.get(n),
                this.delete(n),
                this.set(n, r)
            }
        return this
    }
    with(t, n, r) {
        let i = new e(this);
        return i.insert(t, n, r),
        i
    }
    before(e) {
        let t = this.#e.indexOf(e) - 1;
        if (!(t < 0))
            return this.entryAt(t)
    }
    setBefore(e, t, n) {
        let r = this.#e.indexOf(e);
        return r === -1 ? this : this.insert(r, t, n)
    }
    after(e) {
        let t = this.#e.indexOf(e);
        if (t = t === -1 || t === this.size - 1 ? -1 : t + 1,
        t !== -1)
            return this.entryAt(t)
    }
    setAfter(e, t, n) {
        let r = this.#e.indexOf(e);
        return r === -1 ? this : this.insert(r + 1, t, n)
    }
    first() {
        return this.entryAt(0)
    }
    last() {
        return this.entryAt(-1)
    }
    clear() {
        return this.#e = [],
        super.clear()
    }
    delete(e) {
        let t = super.delete(e);
        return t && this.#e.splice(this.#e.indexOf(e), 1),
        t
    }
    deleteAt(e) {
        let t = this.keyAt(e);
        return t !== void 0 && this.delete(t)
    }
    at(e) {
        let t = F(this.#e, e);
        if (t !== void 0)
            return this.get(t)
    }
    entryAt(e) {
        let t = F(this.#e, e);
        if (t !== void 0)
            return [t, this.get(t)]
    }
    indexOf(e) {
        return this.#e.indexOf(e)
    }
    keyAt(e) {
        return F(this.#e, e)
    }
    from(e, t) {
        let n = this.indexOf(e);
        if (n === -1)
            return;
        let r = n + t;
        return r < 0 && (r = 0),
        r >= this.size && (r = this.size - 1),
        this.at(r)
    }
    keyFrom(e, t) {
        let n = this.indexOf(e);
        if (n === -1)
            return;
        let r = n + t;
        return r < 0 && (r = 0),
        r >= this.size && (r = this.size - 1),
        this.keyAt(r)
    }
    find(e, t) {
        let n = 0;
        for (let r of this) {
            if (Reflect.apply(e, t, [r, n, this]))
                return r;
            n++
        }
    }
    findIndex(e, t) {
        let n = 0;
        for (let r of this) {
            if (Reflect.apply(e, t, [r, n, this]))
                return n;
            n++
        }
        return -1
    }
    filter(t, n) {
        let r = []
          , i = 0;
        for (let e of this)
            Reflect.apply(t, n, [e, i, this]) && r.push(e),
            i++;
        return new e(r)
    }
    map(t, n) {
        let r = []
          , i = 0;
        for (let e of this)
            r.push([e[0], Reflect.apply(t, n, [e, i, this])]),
            i++;
        return new e(r)
    }
    reduce(...e) {
        let[t,n] = e
          , r = 0
          , i = n ?? this.at(0);
        for (let n of this)
            i = r === 0 && e.length === 1 ? n : Reflect.apply(t, this, [i, n, r, this]),
            r++;
        return i
    }
    reduceRight(...e) {
        let[t,n] = e
          , r = n ?? this.at(-1);
        for (let n = this.size - 1; n >= 0; n--) {
            let i = this.at(n);
            r = n === this.size - 1 && e.length === 1 ? i : Reflect.apply(t, this, [r, i, n, this])
        }
        return r
    }
    toSorted(t) {
        let n = [...this.entries()].sort(t);
        return new e(n)
    }
    toReversed() {
        let t = new e;
        for (let e = this.size - 1; e >= 0; e--) {
            let n = this.keyAt(e)
              , r = this.get(n);
            t.set(n, r)
        }
        return t
    }
    toSpliced(...t) {
        let n = [...this.entries()];
        return n.splice(...t),
        new e(n)
    }
    slice(t, n) {
        let r = new e
          , i = this.size - 1;
        if (t === void 0)
            return r;
        t < 0 && (t += this.size),
        n !== void 0 && n > 0 && (i = n - 1);
        for (let e = t; e <= i; e++) {
            let t = this.keyAt(e)
              , n = this.get(t);
            r.set(t, n)
        }
        return r
    }
    every(e, t) {
        let n = 0;
        for (let r of this) {
            if (!Reflect.apply(e, t, [r, n, this]))
                return !1;
            n++
        }
        return !0
    }
    some(e, t) {
        let n = 0;
        for (let r of this) {
            if (Reflect.apply(e, t, [r, n, this]))
                return !0;
            n++
        }
        return !1
    }
}
;
function F(e, t) {
    if (`at` in Array.prototype)
        return Array.prototype.at.call(e, t);
    let n = pe(e, t);
    return n === -1 ? void 0 : e[n]
}
j(F, `at`);
function pe(e, t) {
    let n = e.length
      , r = I(t)
      , i = r >= 0 ? r : n + r;
    return i < 0 || i >= n ? -1 : i
}
j(pe, `toSafeIndex`);
function I(e) {
    return e !== e || e === 0 ? 0 : Math.trunc(e)
}
j(I, `toSafeInteger`);
function me(e) {
    let t = e + `CollectionProvider`
      , [n,r] = o(t)
      , [i,a] = n(t, {
        collectionElement: null,
        collectionRef: {
            current: null
        },
        collectionRefObject: {
            current: null
        },
        itemMap: new P,
        setItemMap: j( () => void 0, `setItemMap`)
    })
      , s = j( ({state: e, ...t}) => e ? (0,
    A.jsx)(l, {
        ...t,
        state: e
    }) : (0,
    A.jsx)(c, {
        ...t
    }), `CollectionProvider`);
    s.displayName = t;
    let c = j(e => {
        let t = v();
        return (0,
        A.jsx)(l, {
            ...e,
            state: t
        })
    }
    , `CollectionInit`);
    c.displayName = t + `Init`;
    let l = j(e => {
        let {scope: t, children: n, state: r} = e
          , a = b.useRef(null)
          , [o,s] = b.useState(null)
          , c = g(a, s)
          , [l,u] = r;
        return b.useEffect( () => {
            if (!o)
                return;
            let e = z( () => {}
            );
            return e.observe(o, {
                childList: !0,
                subtree: !0
            }),
            () => {
                e.disconnect()
            }
        }
        , [o]),
        (0,
        A.jsx)(i, {
            scope: t,
            itemMap: l,
            setItemMap: u,
            collectionRef: c,
            collectionRefObject: a,
            collectionElement: o,
            children: n
        })
    }
    , `CollectionProviderImpl`);
    l.displayName = t + `Impl`;
    let u = e + `CollectionSlot`
      , d = m(u)
      , f = b.forwardRef( (e, t) => {
        let {scope: n, children: r} = e
          , i = a(u, n)
          , o = g(t, i.collectionRef);
        return (0,
        A.jsx)(d, {
            ref: o,
            children: r
        })
    }
    );
    f.displayName = u;
    let p = e + `CollectionItemSlot`
      , h = m(p)
      , _ = b.forwardRef( (e, t) => {
        let {scope: n, children: r, ...i} = e
          , o = b.useRef(null)
          , [s,c] = b.useState(null)
          , l = g(t, o, c)
          , {setItemMap: u} = a(p, n)
          , d = b.useRef(i);
        L(d.current, i) || (d.current = i);
        let f = d.current;
        return b.useEffect( () => {
            let e = f;
            return u(t => s ? t.has(s) ? t.set(s, {
                ...e,
                element: s
            }).toSorted(R) : (t.set(s, {
                ...e,
                element: s
            }),
            t.toSorted(R)) : t),
            () => {
                u(e => !s || !e.has(s) ? e : (e.delete(s),
                new P(e)))
            }
        }
        , [s, f, u]),
        (0,
        A.jsx)(h, {
            "data-radix-collection-item": ``,
            ref: l,
            children: r
        })
    }
    );
    _.displayName = p;
    function v() {
        return b.useState(new P)
    }
    j(v, `useInitCollection`);
    function y(t) {
        let {itemMap: n} = a(e + `CollectionConsumer`, t);
        return n
    }
    return j(y, `useCollection`),
    [{
        Provider: s,
        Slot: f,
        ItemSlot: _
    }, {
        createCollectionScope: r,
        useCollection: y,
        useInitCollection: v
    }]
}
j(me, `createCollection`);
function L(e, t) {
    if (e === t)
        return !0;
    if (typeof e != `object` || typeof t != `object` || e == null || t == null)
        return !1;
    let n = Object.keys(e)
      , r = Object.keys(t);
    if (n.length !== r.length)
        return !1;
    for (let r of n)
        if (!Object.prototype.hasOwnProperty.call(t, r) || e[r] !== t[r])
            return !1;
    return !0
}
j(L, `shallowEqual`);
function he(e, t) {
    return !!(t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_PRECEDING)
}
j(he, `isElementPreceding`);
function R(e, t) {
    return !e[1].element || !t[1].element ? 0 : he(e[1].element, t[1].element) ? -1 : 1
}
j(R, `sortByDocumentPosition`);
function z(e) {
    return new MutationObserver(t => {
        for (let n of t)
            if (n.type === `childList`) {
                e();
                return
            }
    }
    )
}
j(z, `getChildListObserver`);
var ge = Object.defineProperty
  , _e = (e, t) => ge(e, `name`, {
    value: t,
    configurable: !0
})
  , ve = b.createContext(void 0);
function B(e) {
    let t = b.useContext(ve);
    return e || t || `ltr`
}
_e(B, `useDirection`);
var ye = Object.defineProperty
  , V = (e, t) => ye(e, `name`, {
    value: t,
    configurable: !0
})
  , H = !1;
function be() {
    let[e,t] = b.useState(H);
    return b.useEffect( () => {
        H || (H = !0,
        t(!0))
    }
    , []),
    e
}
V(be, `useIsHydrated`);
var xe = b.useSyncExternalStore;
function Se() {
    return () => {}
}
V(Se, `subscribe`);
function Ce() {
    return xe(Se, () => !0, () => !1)
}
V(Ce, `useIsHydratedModern`);
var we = typeof xe == `function` ? Ce : be
  , Te = Object.defineProperty
  , U = (e, t) => Te(e, `name`, {
    value: t,
    configurable: !0
})
  , W = `rovingFocusGroup.onEntryFocus`
  , Ee = {
    bubbles: !1,
    cancelable: !0
}
  , G = `RovingFocusGroup`
  , [K,De,Oe] = M(G)
  , [ke,Ae] = o(G, [Oe])
  , [je,Me] = ke(G)
  , Ne = b.forwardRef(U(function(e, t) {
    return (0,
    A.jsx)(K.Provider, {
        scope: e.__scopeRovingFocusGroup,
        children: (0,
        A.jsx)(K.Slot, {
            scope: e.__scopeRovingFocusGroup,
            children: (0,
            A.jsx)(Pe, {
                ...e,
                ref: t
            })
        })
    })
}, `RovingFocusGroup`))
  , Pe = b.forwardRef(U(function(e, t) {
    let {__scopeRovingFocusGroup: n, orientation: r, loop: i=!1, dir: a, currentTabStopId: o, defaultCurrentTabStopId: l, onCurrentTabStopIdChange: d, onEntryFocus: p, preventScrollOnEntryFocus: m=!1, ...h} = e
      , _ = b.useRef(null)
      , v = g(t, _)
      , y = B(a)
      , [x,S] = c({
        prop: o,
        defaultProp: l ?? null,
        onChange: d,
        caller: G
    })
      , [C,w] = b.useState(!1)
      , T = u(p)
      , ee = De(n)
      , E = b.useRef(!1)
      , [D,O] = b.useState(0);
    return b.useEffect( () => {
        let e = _.current;
        if (e)
            return e.addEventListener(W, T),
            () => e.removeEventListener(W, T)
    }
    , [T]),
    (0,
    A.jsx)(je, {
        scope: n,
        orientation: r,
        dir: y,
        loop: i,
        currentTabStopId: x,
        onItemFocus: b.useCallback(e => S(e), [S]),
        onItemShiftTab: b.useCallback( () => w(!0), []),
        onFocusableItemAdd: b.useCallback( () => O(e => e + 1), []),
        onFocusableItemRemove: b.useCallback( () => O(e => e - 1), []),
        children: (0,
        A.jsx)(s.div, {
            tabIndex: C || D === 0 ? -1 : 0,
            "data-orientation": r,
            ...h,
            ref: v,
            style: {
                outline: `none`,
                ...e.style
            },
            onMouseDown: f(e.onMouseDown, () => {
                E.current = !0
            }
            ),
            onFocus: f(e.onFocus, e => {
                let t = !E.current;
                if (e.target === e.currentTarget && t && !C) {
                    let t = new CustomEvent(W,Ee);
                    if (e.currentTarget.dispatchEvent(t),
                    !t.defaultPrevented) {
                        let e = ee().filter(e => e.focusable);
                        q([e.find(e => e.active), e.find(e => e.id === x), ...e].filter(Boolean).map(e => e.ref.current), m)
                    }
                }
                E.current = !1
            }
            ),
            onBlur: f(e.onBlur, () => w(!1))
        })
    })
}, `RovingFocusGroupImpl`))
  , Fe = `RovingFocusGroupItem`
  , Ie = b.forwardRef(U(function(e, t) {
    let {__scopeRovingFocusGroup: n, focusable: r=!0, active: i=!1, tabStopId: a, children: o, ...c} = e
      , u = l()
      , p = a || u
      , m = Me(Fe, n)
      , h = m.currentTabStopId === p
      , g = De(n)
      , {onFocusableItemAdd: _, onFocusableItemRemove: v, currentTabStopId: y} = m
      , x = we();
    return d( () => {
        if (!(!x || !r))
            return _(),
            () => v()
    }
    , [x, r, _, v]),
    b.useEffect( () => {
        if (!(x || !r))
            return _(),
            () => v()
    }
    , [x, r, _, v]),
    (0,
    A.jsx)(K.ItemSlot, {
        scope: n,
        id: p,
        focusable: r,
        active: i,
        children: (0,
        A.jsx)(s.span, {
            tabIndex: h ? 0 : -1,
            "data-orientation": m.orientation,
            ...c,
            ref: t,
            onMouseDown: f(e.onMouseDown, e => {
                r ? m.onItemFocus(p) : e.preventDefault()
            }
            ),
            onFocus: f(e.onFocus, () => m.onItemFocus(p)),
            onKeyDown: f(e.onKeyDown, e => {
                if (e.key === `Tab` && e.shiftKey) {
                    m.onItemShiftTab();
                    return
                }
                if (e.target !== e.currentTarget)
                    return;
                let t = ze(e, m.orientation, m.dir);
                if (t !== void 0) {
                    if (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey)
                        return;
                    e.preventDefault();
                    let n = g().filter(e => e.focusable).map(e => e.ref.current);
                    if (t === `last`)
                        n.reverse();
                    else if (t === `prev` || t === `next`) {
                        t === `prev` && n.reverse();
                        let r = n.indexOf(e.currentTarget);
                        n = m.loop ? Be(n, r + 1) : n.slice(r + 1)
                    }
                    setTimeout( () => q(n))
                }
            }
            ),
            children: typeof o == `function` ? o({
                isCurrentTabStop: h,
                hasTabStop: y != null
            }) : o
        })
    })
}, `RovingFocusGroupItem`))
  , Le = {
    ArrowLeft: `prev`,
    ArrowUp: `prev`,
    ArrowRight: `next`,
    ArrowDown: `next`,
    PageUp: `first`,
    Home: `first`,
    PageDown: `last`,
    End: `last`
};
function Re(e, t) {
    return t === `rtl` ? e === `ArrowLeft` ? `ArrowRight` : e === `ArrowRight` ? `ArrowLeft` : e : e
}
U(Re, `getDirectionAwareKey`);
function ze(e, t, n) {
    let r = Re(e.key, n);
    if (!(t === `vertical` && [`ArrowLeft`, `ArrowRight`].includes(r)) && !(t === `horizontal` && [`ArrowUp`, `ArrowDown`].includes(r)))
        return Le[r]
}
U(ze, `getFocusIntent`);
function q(e, t=!1) {
    let n = document.activeElement;
    for (let r of e)
        if (r === n || (r.focus({
            preventScroll: t
        }),
        document.activeElement !== n))
            return
}
U(q, `focusFirst`);
function Be(e, t) {
    return e.map( (n, r) => e[(t + r) % e.length])
}
U(Be, `wrapArray`);
var Ve = Ne
  , He = Ie
  , Ue = Object.defineProperty
  , J = (e, t) => Ue(e, `name`, {
    value: t,
    configurable: !0
})
  , Y = `Tabs`
  , [We,Ge] = o(Y, [Ae])
  , Ke = Ae()
  , [qe,X] = We(Y)
  , Je = b.forwardRef(J(function(e, t) {
    let {__scopeTabs: n, value: r, onValueChange: i, defaultValue: a, orientation: o=`horizontal`, dir: u, activationMode: d=`automatic`, ...f} = e
      , p = B(u)
      , [m,h] = c({
        prop: r,
        onChange: i,
        defaultProp: a ?? ``,
        caller: Y
    });
    return (0,
    A.jsx)(qe, {
        scope: n,
        baseId: l(),
        value: m,
        onValueChange: h,
        orientation: o,
        dir: p,
        activationMode: d,
        children: (0,
        A.jsx)(s.div, {
            dir: p,
            "data-orientation": o,
            ...f,
            ref: t
        })
    })
}, `Tabs`))
  , Ye = `TabsList`
  , Xe = b.forwardRef(J(function(e, t) {
    let {__scopeTabs: n, loop: r=!0, ...i} = e
      , a = X(Ye, n)
      , o = Ke(n);
    return (0,
    A.jsx)(Ve, {
        asChild: !0,
        ...o,
        orientation: a.orientation,
        dir: a.dir,
        loop: r,
        children: (0,
        A.jsx)(s.div, {
            role: `tablist`,
            "aria-orientation": a.orientation,
            ...i,
            ref: t
        })
    })
}, `TabsList`))
  , Ze = `TabsTrigger`
  , Qe = b.forwardRef(J(function(e, t) {
    let {__scopeTabs: n, value: r, disabled: i=!1, ...a} = e
      , o = X(Ze, n)
      , c = Ke(n)
      , l = Z(o.baseId, r)
      , u = Q(o.baseId, r)
      , d = r === o.value;
    return (0,
    A.jsx)(He, {
        asChild: !0,
        ...c,
        focusable: !i,
        active: d,
        children: (0,
        A.jsx)(s.button, {
            type: `button`,
            role: `tab`,
            "aria-selected": d,
            "aria-controls": u,
            "data-state": d ? `active` : `inactive`,
            "data-disabled": i ? `` : void 0,
            disabled: i,
            id: l,
            ...a,
            ref: t,
            onMouseDown: f(e.onMouseDown, e => {
                !i && e.button === 0 && e.ctrlKey === !1 ? o.onValueChange(r) : e.preventDefault()
            }
            ),
            onKeyDown: f(e.onKeyDown, e => {
                i || e.target !== e.currentTarget || [` `, `Enter`].includes(e.key) && o.onValueChange(r)
            }
            ),
            onFocus: f(e.onFocus, () => {
                let e = o.activationMode !== `manual`;
                !d && !i && e && o.onValueChange(r)
            }
            )
        })
    })
}, `TabsTrigger`))
  , $e = `TabsContent`
  , et = b.forwardRef(J(function(e, t) {
    let {__scopeTabs: n, value: r, forceMount: i, children: o, ...c} = e
      , l = X($e, n)
      , u = Z(l.baseId, r)
      , d = Q(l.baseId, r)
      , f = r === l.value
      , p = b.useRef(f);
    return b.useEffect( () => {
        let e = requestAnimationFrame( () => p.current = !1);
        return () => cancelAnimationFrame(e)
    }
    , []),
    (0,
    A.jsx)(a, {
        present: i || f,
        children: ({present: n}) => (0,
        A.jsx)(s.div, {
            "data-state": f ? `active` : `inactive`,
            "data-orientation": l.orientation,
            role: `tabpanel`,
            "aria-labelledby": u,
            hidden: !n,
            id: d,
            tabIndex: 0,
            ...c,
            ref: t,
            style: {
                ...e.style,
                animationDuration: p.current ? `0s` : void 0
            },
            children: n && o
        })
    })
}, `TabsContent`));
function Z(e, t) {
    return `${e}-trigger-${t}`
}
J(Z, `makeTriggerId`);
function Q(e, t) {
    return `${e}-content-${t}`
}
J(Q, `makeContentId`);
var tt = Je
  , $ = Xe
  , nt = Qe
  , rt = et
  , it = tt
  , at = b.forwardRef( ({className: e, ...t}, n) => (0,
A.jsx)($, {
    ref: n,
    className: h(`inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground`, e),
    ...t
}));
at.displayName = $.displayName;
var ot = b.forwardRef( ({className: e, ...t}, n) => (0,
A.jsx)(nt, {
    ref: n,
    className: h(`inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background cursor-pointer transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow`, e),
    ...t
}));
ot.displayName = nt.displayName;
var st = b.forwardRef( ({className: e, ...t}, n) => (0,
A.jsx)(rt, {
    ref: n,
    className: h(`mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2`, e),
    ...t
}));
st.displayName = rt.displayName;
export {ue as a, ne as c, _ as d, y as f, ot as i, O as l, st as n, de as o, v as p, at as r, ae as s, it as t, te as u};
