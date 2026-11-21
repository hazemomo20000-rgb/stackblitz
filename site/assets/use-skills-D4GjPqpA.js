import {i as e} from "./rolldown-runtime-Dd_uD5pT.js";
import {B as t, a as n, i as r, n as i} from "./AccountProvider-BXmG3VwF.js";
import {V as a} from "./AccountControl-BjyFqWHo.js";
var o = e(t(), 1)
  , s = 2e3
  , c = `hazem_studio_skills_v1`
  , l = [{
    id: `builtin:concise`,
    title: `إجابات مختصرة`,
    category: `الأسلوب`,
    builtin: !0,
    instructions: `أجب باختصار شديد في نقاط قليلة، دون مقدمات أو تكرار.`
}, {
    id: `builtin:teacher`,
    title: `شرح تعليمي`,
    category: `التعلّم`,
    builtin: !0,
    instructions: `اشرح خطوة بخطوة كمعلم صبور، مع مثال بسيط وسؤال تحقق قصير في النهاية.`
}, {
    id: `builtin:reviewer`,
    title: `مراجع كود صارم`,
    category: `البرمجة`,
    builtin: !0,
    instructions: `عند وجود كود: رتّب الملاحظات حسب الخطورة (أمان، أخطاء، أداء، أسلوب) واقترح تعديلاً محدداً لكل ملاحظة.`
}, {
    id: `builtin:english`,
    title: `الرد بالإنجليزية`,
    category: `اللغة`,
    builtin: !0,
    instructions: `Always answer in clear English regardless of the user's language.`
}];
function u(e) {
    return Array.isArray(e) ? e.slice(0, 5).flatMap(e => {
        let t = String(e?.title ?? ``).trim().slice(0, 80)
          , n = String(e?.instructions ?? ``).trim().slice(0, s);
        return t && n ? [{
            title: t,
            instructions: n
        }] : []
    }
    ) : []
}
function d(e, t) {
    let n = u(t);
    return n.length ? `${e}\n\n# مهارات مفعّلة لهذه المحادثة (اتبعها ما لم تتعارض مع القواعد أعلاه أو مع السلامة)\n${n.map( (e, t) => `${t + 1}. [${e.title}]\n${e.instructions}`).join(`

`)}` : e
}
function f(e, t) {
    return (e ?? []).map(e => t.find(t => t.id === e)).filter(e => !!e).slice(0, 5)
}
var p = e => ({
    title: e.title.trim().slice(0, 80),
    category: (e.category.trim() || `مخصصة`).slice(0, 40),
    instructions: e.instructions.trim().slice(0, s)
});
function m() {
    let {user: e} = i()
      , t = r()
      , s = e?.id
      , [u,d] = (0,
    o.useState)([]);
    (0,
    o.useEffect)( () => {
        if (!s)
            try {
                let e = JSON.parse(localStorage.getItem(`hazem_studio_skills_v1`) || `[]`);
                d(Array.isArray(e) ? e : [])
            } catch {
                d([])
            }
    }
    , [s]);
    let f = a({
        queryKey: [`skills`, s],
        enabled: !!s,
        queryFn: async () => {
            let e = await n.from(`studio_skills`).select(`id,title,category,instructions`).eq(`user_id`, s).order(`updated_at`, {
                ascending: !1
            });
            if (e.error)
                throw e.error;
            return e.data
        }
    })
      , m = s ? f.data ?? [] : u
      , h = e => {
        d(e),
        localStorage.setItem(c, JSON.stringify(e))
    }
    ;
    async function g(e, r) {
        let i = p(e);
        if (!i.title || !i.instructions)
            throw Error(`العنوان والتعليمات مطلوبة.`);
        if (!s) {
            h(r ? u.map(e => e.id === r ? {
                ...e,
                ...i
            } : e) : [{
                id: crypto.randomUUID(),
                ...i
            }, ...u]);
            return
        }
        if ((r ? await n.from(`studio_skills`).update({
            ...i,
            updated_at: new Date().toISOString()
        }).eq(`id`, r).select(`id`).single() : await n.from(`studio_skills`).insert({
            ...i,
            user_id: s
        }).select(`id`).single()).error)
            throw Error(`تعذّر حفظ المهارة.`);
        await t.invalidateQueries({
            queryKey: [`skills`, s]
        })
    }
    async function _(e) {
        if (!s) {
            h(u.filter(t => t.id !== e));
            return
        }
        if ((await n.from(`studio_skills`).delete().eq(`id`, e)).error)
            throw Error(`تعذّر حذف المهارة.`);
        await t.invalidateQueries({
            queryKey: [`skills`, s]
        })
    }
    return {
        all: [...l, ...m],
        custom: m,
        loading: !!s && f.isLoading,
        error: f.error ? `تعذّر تحميل المهارات.` : ``,
        save: g,
        remove: _,
        signedIn: !!s
    }
}
export {d as i, s as n, f as r, m as t};
