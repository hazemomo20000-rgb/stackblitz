# Hazemtechai

أنت فريق منتج وهندسة متكامل يضم: Principal Product Designer، Staff Frontend Engineer، Backend Engineer، Security Engineer، Accessibility Specialist، QA Automation Lead. المطلوب تطوير ملف المشروع الحالي نفسه وليس إنشاء واجهة منفصلة أو إعادة كتابة عشوائية. تعامل مع الملفات والكود الموجود باعتبارها المصدر الوحيد للحقيقة.

1) المهمة والنتيجة المطلوبة

حوّل تطبيق Hazem-Tech AI Studio الحالي إلى منتج AI Studio احترافي قابل للتوسع، بهوية بصرية أصلية اسمها Midnight Teal. المطلوب تجربة ناضجة قريبة من جودة ChatGPT وGemini من حيث سهولة الاستخدام والسرعة والوضوح، لكن بشخصية مستقلة تماماً. لا تستخدم قوالب SaaS الجاهزة، ولا مظهر “AI-generated UI”، ولا تكديس بطاقات متشابهة أو تدرجات بنفسجية أو زجاجية مبالغاً فيها.

ابدأ بفحص المشروع كاملاً: بنية HTML، CSS، JavaScript، حالات التطبيق، جميع المعرفات، event listeners، localStorage/IndexedDB، وظائف Gemini، إدارة المفاتيح، المحادثات، الملفات، الصوت، المهارات، التصدير، وأي تكاملات خارجية. أنشئ خريطة اعتماد قبل التعديل. لا تحذف ميزة موجودة لمجرد أنها غير مألوفة.

2) الهوية البصرية Midnight Teal

لوحة أساسية: خلفية ليلية خضراء مزرقة شديدة العمق (#071B1C تقريباً)، أسطح متدرجة في السطوع (#0D2829 / #102F30)، حدود هادئة (#214647)، Accent تركواز واضح (#2DD4BF)، نص فاتح مريح، ونص ثانوي أخضر رمادي.

اصنع نظام Design Tokens موحداً للألوان، المسافات، الارتفاعات، الظلال، الحواف، حالات hover/focus/disabled/error/success.

دعم Dark / Light / System، مع انتقالات قصيرة ناعمة واحترام prefers-reduced-motion.

دعم تخصيص Accent Colors، نوع الخط (Cairo/Tajawal/Inter/System)، حجم النص، كثافة الواجهة، شكل الحواف Rounded/Soft/Crisp.

احفظ تفضيلات المستخدم في قاعدة البيانات عند تسجيل الدخول، مع Cache محلي، وحل تعارض واضح عند فتح التطبيق على جهازين.

Responsive حقيقي للهاتف والتابلت وسطح المكتب. لا تستخدم fixed widths تكسر الشاشات الصغيرة.

كل الأيقونات الجديدة أو المعدلة SVG inline نظيف، مع viewBox ثابت، stroke/fill متناسق، aria-hidden أو aria-label صحيح. ممنوع Emoji كبديل للأيقونات.

3) نظام الحسابات والمصادقة

نفّذ Auth حقيقياً باستخدام Supabase Auth أو Firebase Auth، لا محاكاة شكلية:

تسجيل دخول بالبريد وكلمة المرور، إنشاء حساب، تأكيد البريد، إعادة تعيين كلمة المرور، تسجيل خروج.

جهّز OAuth Google كخيار قابل للتفعيل من لوحة المزود، مع Redirect URLs واضحة.

إدارة انتهاء الجلسة وتجديدها، إظهار حالة الاتصال، معالجة فشل الشبكة، وحالات التحميل.

لا تخزن كلمات المرور أو الرموز السرية يدوياً في localStorage. دع SDK الموثوق يدير الجلسة.

لا تضع Service Role Key أو أسرار Backend داخل HTML أو JavaScript. استخدم Public/Anon key فقط مع سياسات RLS صارمة.

اجعل واجهات Auth قابلة للوصول بلوحة المفاتيح، مع validation ورسائل أخطاء مفهومة بالعربية.

4) الملف الشخصي

صورة شخصية: اختيار، معاينة، قص/تحجيم اختياري، رفع آمن إلى Storage خاص، حد حجم ونوع ملف، وحذف/استبدال.

الاسم الظاهر، username فريد، نبذة، اهتمامات، أهداف، لغة مفضلة، وتفضيلات أسلوب الإجابة.

شاشة تعديل واضحة مع حفظ/إلغاء، حالات dirty state، ورسالة نجاح/فشل.

لا تجعل الصورة Base64 ضخمة داخل صف قاعدة البيانات؛ استخدم Storage path أو URL موقّعاً.

5) قاعدة البيانات والمزامنة

صمم schema موثقاً ومهاجراً بشكل قابل للتكرار:

profiles مرتبطة بـ auth.users.

conversations مع user_id وid ثابت وtitle وtimestamps.

messages إما جدول مستقل أو JSONB مع مبرر واضح، مع الحفاظ على المرفقات والبيانات الوصفية.

user_preferences، skills، pinned_tools، attachment metadata عند الحاجة.

فعّل RLS لكل جدول وكل Storage bucket. كل سياسة تقيد القراءة والكتابة والحذف بمالك الصف auth.uid().

أضف indexes مناسبة، قيود تحقق، foreign keys، migrations، ونسخ احتياطية/خطة استعادة.

المزامنة تدعم رفع المحادثات المحلية القديمة عند أول تسجيل دخول، جلب المحادثات عند جهاز جديد، تحديثات تدريجية، منع التكرار، ومعالجة التعارضات.

لا ترفع API keys أو أسرار المستخدم أو بيانات اعتماد Gemini إلى جداول عامة.

وضّح حدود حجم JSON، pagination، ومعدل الطلبات.

6) إدارة الأجهزة والجلسات

اعرض الجلسة الحالية وتاريخ آخر نشاط ومعلومات الجهاز المتاحة بأمان.

زر تسجيل الخروج من الجهاز الحالي، وخيار تسجيل الخروج من كل الأجهزة عبر آلية خادمية موثوقة.

لا تدّعِ عرض كل الجلسات النشطة إن لم يوفر مزود الهوية ذلك. استخدم Edge Function/Admin API على الخادم عند الحاجة، ولا تكشف Service Role.

أضف إدارة الأجهزة الموثوقة ووسائل حماية الحساب حسب إمكانات مزود المصادقة.

7) واجهة المحادثة

Sidebar قابلة للطي، مجموعات محادثات حديثة/قديمة، بحث في السجل، تثبيت، إعادة تسمية، حذف مع تأكيد، ومحادثة جديدة.

Welcome screen شخصية غير مزدحمة، مع اقتراحات مهام واقعية قابلة للنقر.

Header يعرض النموذج المختار وحالة الاتصال ومعلومات المحادثة دون تشويش.

Model picker يعرض النماذج المتاحة فعلياً فقط، وصفاً مختصراً لكل نموذج، والقدرات/القيود.

Composer احترافي: textarea مرنة، إرسال وإيقاف التوليد، اختصارات لوحة مفاتيح، مؤشر حالة، ومرفقات كـ chips/cards بها الاسم والنوع والحجم والمعاينة والحذف.

دعم drag & drop، clipboard paste، صور ومستندات وأنواع الملفات المسموحة. تحقّق من MIME والامتداد والحجم، ولا تثق في اسم الملف.

رسائل المستخدم والمساعد بتسلسل بصري واضح، code blocks مع نسخ، Markdown آمن، جداول، روابط، ومخرجات ملفات.

حافظ على وظائف Gemini الحالية ومفاتيح التدوير/التعامل مع الأخطاء. لا تغيّر API contract إلا مع Adapter وتوافق رجعي.

لا تعرض نموذجاً أو أداة على أنها تعمل إن لم يكن التكامل متاحاً بالفعل.

8) صفحة الأدوات والمهارات

صفحة Explore مستقلة بها بحث وتصنيفات وفلاتر: كتابة، برمجة، تحليل، ملفات، إنتاجية، تعليم، صور/صوت إذا كانت مدعومة فعلياً.

Tool cards ذات وصف حقيقي، حالة توفر، مثال استخدام، وزر تشغيل يمرر إلى الوظيفة الحقيقية.

Skill manager: استعراض، تفعيل/تعطيل، إنشاء/تحرير، استيراد وتصدير، صلاحيات، ومصدر المهارة.

افصل بين “تعليمات سياقية” و“تنفيذ أدوات حقيقي”. لا تدّعِ تنفيذ Terminal أو التحكم بالجهاز من HTML دون Backend/Native bridge وصلاحيات.

9) الإعدادات والخصوصية

Appearance: theme, accent, font, font-size, density, radius, motion.

Language/RTL/LTR مع ترجمة كاملة وليس تبديل اتجاه فقط.

Privacy: إعدادات الاحتفاظ بالمحادثات، حذف/تصدير البيانات، مشاركة الروابط، وحالة الظهور إن وجدت.

Notifications: تفضيلات التنبيهات داخل التطبيق والبريد حسب تكامل فعلي.

Personalization: الاهتمامات، الأهداف، أسلوب الرد، والذاكرة مع موافقة صريحة.

Security: تغيير كلمة المرور عبر Auth، جلسات، MFA إن توفر، وتسجيل الخروج.

شاشة مراجعة للتغييرات قبل تطبيق الإعدادات الحساسة، مع Discard/Apply.

10) معايير التصميم والتفاصيل

لا تستخدم Emoji كأيقونات؛ جميع الرموز SVG.

Typography hierarchy متزن، line-height عربي مريح، ودعم كامل للتشكيل والنصوص الطويلة.

حالات Empty/Loading/Error/Offline/Success لكل منطقة بيانات.

Skeleton loading بسيط، Toast غير مزعج، Dialog accessible، focus trap، Escape للإغلاق.

حركة قصيرة ومقصودة، لا مؤثرات مستمرة ولا parallax مزعج.

لا تستخدم نصوصاً تسويقية وهمية أو أرقام مستخدمين أو ratings غير حقيقية.

لا تضع بيانات تجريبية تبدو حقيقية. أي Demo data يجب وسمها بوضوح.

11) الأمن والجودة

حماية XSS: لا تستخدم innerHTML مع محتوى المستخدم إلا بعد sanitization موثوق. اعتمد textContent أو DOM APIs حيثما أمكن.

CSP وسياسة تحميل CDN، التحقق من روابط الصور، منع open redirects، وقيود upload.

Rate limiting على الخادم، logging دون أسرار، ومعالجة أخطاء لا تكشف stack traces للمستخدم.

اختبر RLS بمحاولات مستخدم A لقراءة/تعديل بيانات مستخدم B.

لا تخزن المفاتيح الحساسة أو محتوى سري في console logs.

لا تكسر local data عند الترحيل؛ أضف versioned migration وrollback.

12) خطة التنفيذ المطلوبة

Audit للمشروع الأصلي مع قائمة الوظائف التي يجب الحفاظ عليها.

Design system وطبقة tokens.

إعادة تنظيم Layout والـ responsive navigation.

Auth/Profile/Settings.

Database schema + migrations + RLS + Storage policies.

Conversation sync and conflict handling.

Composer, attachments, tool discovery, skills.

Accessibility, security, performance.

QA كامل وتسليم.

13) الاختبارات الإلزامية

قدّم Test Plan ونتائج حقيقية من تشغيل الاختبارات، ولا تقل “تم الاختبار” دون دليل:

Syntax lint لجميع ملفات JS/TS وHTML validation.

Unit tests للتحقق من validation، profile mapping، sync diff، وerror states.

Integration tests لتسجيل الدخول والتسجيل واستعادة كلمة المرور وتجديد الجلسة.

RLS tests لمستخدمين منفصلين ومحاولات cross-tenant.

Migration test على قاعدة فارغة وقاعدة تحتوي بيانات قديمة.

اختبارات 0 محادثة، محادثة واحدة، آلاف المحادثات، رسائل طويلة، JSON تالف، انقطاع شبكة، انتهاء جلسة، وتكرار طلب sync.

ملفات 0 bytes، أكبر من الحد، امتداد مزيف، MIME غير مسموح، أسماء ملفات عربية، وصورة تالفة.

Responsive 320px / 375px / 768px / 1024px / 1440px.

Keyboard-only، screen reader labels، contrast، reduced motion.

Regression tests لكل وظائف التطبيق الأصلية: Gemini، key rotation، chat history، voice، file parsing/export، skills، theme.

اذكر ما تم اختباره فعلياً، وما لم يمكن اختباره بسبب غياب مفاتيح أو Backend أو Browser.

14) التسليم

سلّم:

ملفات المشروع كاملة قابلة للتشغيل، وليس مقتطفات.

SQL migrations/schema وسياسات RLS وStorage.

ملف .env.example بلا أسرار حقيقية.

دليل تشغيل محلي وربط Supabase وGoogle OAuth وRedirect URLs.

دليل معماري يشرح طبقات التطبيق وتدفق البيانات.

QA report فيه حالات الاختبار ونتائجها وأي عيوب معروفة.

سجل تغييرات يوضح ما أُضيف وما عُدّل وما بقي مؤجلاً.

قاعدة حاسمة: لا تستبدل المشروع بتصميم جديد منفصل. لا تحذف الوظائف الحالية. لا تدّعِ أن تسجيل الدخول أو المزامنة أو إدارة الجلسات تعمل دون Backend موثق ومهيأ. إذا تعذر إكمال جزء بسبب غياب credentials أو خدمة خارجية، ابنِ الواجهة والتكامل بطريقة صحيحة، اشرح خطوات التفعيل، وعلّم الجزء بوضوح بأنه غير مفعّل بدلاً من اختلاق نجاح.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://hazemtechai.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/3914db29-babe-4e8f-9a2b-e18b4dae6f04).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
