# Hazem-Tech AI Studio — merged package

This archive combines three supplied archives without overwriting the source project with compiled files.

## Folders
- `source/`: editable TanStack Start/Vite project, server routes, database migrations, Supabase integration and dependencies.
- `site/`: latest extracted static frontend from `Hazemo.zip`, supplemented with extra chunks/assets from `hazemtechai_original_files.zip`.

## Important
- The `.env` file from the source archive was not copied. Use `.env.example` as a template and provide your own Supabase project values.
- The source project includes the `/api/chat` server route and server-side implementation; deploy it as a server-capable TanStack Start app, not as a static-only GitHub Pages site, if you need server routes.
- The extracted static site is a convenience snapshot, not a verified production build. The extracted JS refers to dynamically loaded document parsing chunks (`mammoth.browser-BRlV2Hhy.js` and `pdf-g2cI78vC.js`) that were not present in either extracted-site archive. The source project declares the corresponding packages and can generate these chunks through its build process.
- External Supabase configuration/database must exist and be configured separately. The archive contains migrations and integration code, not a running hosted database.
- No API secrets or service-role keys were added.

## Build source project
1. Install Bun (or a compatible package manager).
2. Copy `.env.example` to `.env` and fill in your own Supabase values.
3. From `source/`, install dependencies using the lockfile.
4. Run `npm run build` (or `bun run build`).
5. Deploy the generated server-capable build to a compatible hosting provider.


آخر التعديلات (20 نوفمبر 2026):
- صفحة تسجيل الدخول أعيد تنظيمها لتضم Google والبريد وكلمة المرور وإنشاء الحساب واستعادة كلمة المرور، مع انتظار اكتمال فحص الجلسة قبل التحويل.
- صفحة الأدوات والمهارات تحتفظ بمحتوى البطاقات والبحث والتصنيفات، وأعيدت أداة المستندات أسفل الصفحة.
- أزيل زر القراءة الصوتية فقط من قسم المستندات، مع الإبقاء على قراءة ملفات PDF وOffice وتصدير PDF.
- قائمة اختيار النموذج أصبحت في منتصف الشريط العلوي.
- تم توسيع .env.example ليشمل المتغيرات التي يقرأها الخادم.

تشغيل المشروع من مجلد source:
1) انسخ .env.example إلى .env وأدخل بيانات مشروعك.
2) استخدم Bun المتوافق مع bun.lock: bun install
3) نفّذ: bun run build
4) نفّذ الاختبارات: bun run test
5) للتشغيل المحلي: bun run dev

ملاحظة التحقق: لم أتمكن من تنفيذ Build أو الاختبارات آلياً في بيئة التجهيز لأن الاعتماديات لم تكن مثبتة وتعذر تنزيلها من npm registry. لا تعتبر النسخة مجتازة لاختبار التشغيل قبل تنفيذ أوامر البناء والاختبار في بيئة متصلة.
