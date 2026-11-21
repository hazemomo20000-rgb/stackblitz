import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ACCENTS, type Prefs } from "@/lib/preferences";
import { Button } from "@/components/ui/button";

function Seg<T extends string>({
  value,
  options,
  onChange,
  label,
}: {
  value: T;
  options: { v: T; l: string }[];
  onChange: (v: T) => void;
  label: string;
}) {
  return (
    <fieldset className="space-y-2">
      <legend className="text-sm font-semibold">{label}</legend>
      <div className="flex flex-wrap gap-1.5 rounded-lg bg-surface-2 p-1" role="radiogroup">
        {options.map((o) => (
          <button
            key={o.v}
            type="button"
            role="radio"
            aria-checked={value === o.v}
            onClick={() => onChange(o.v)}
            className={`flex-1 rounded-md px-3 py-1.5 text-sm transition-app ${
              value === o.v ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {o.l}
          </button>
        ))}
      </div>
    </fieldset>
  );
}

export function SettingsDialog({
  open,
  onOpenChange,
  prefs,
  onPrefs,
  sync,
  onRetry,
  onExport,
  onClearAll,
}: {
  open: boolean;
  onOpenChange: (o: boolean) => void;
  prefs: Prefs;
  onPrefs: (p: Prefs) => void;
  onExport: () => void;
  onClearAll: () => void;
  sync: "local" | "loading" | "saving" | "saved" | "error";
  onRetry: () => void;
}) {
  const set = <K extends keyof Prefs>(k: K, v: Prefs[K]) => onPrefs({ ...prefs, [k]: v });

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90dvh] overflow-y-auto border bg-popover sm:max-w-lg" dir="rtl">
        <DialogHeader className="text-right">
          <DialogTitle>الإعدادات</DialogTitle>
          <DialogDescription role="status">
            {sync === "local"
              ? "التفضيلات محفوظة في هذا المتصفح؛ سجّل الدخول لمزامنتها."
              : sync === "loading"
                ? "جارٍ تحميل تفضيلات حسابك…"
                : sync === "saving"
                  ? "جارٍ حفظ التفضيلات…"
                  : sync === "error"
                    ? "تعذّرت المزامنة. لم يتم تأكيد حفظ التغييرات."
                    : "تفضيلاتك محفوظة في حسابك."}
          </DialogDescription>
          {sync === "error" && (
            <Button variant="outline" onClick={onRetry}>
              إعادة محاولة المزامنة
            </Button>
          )}
        </DialogHeader>

        <Tabs defaultValue="look" dir="rtl">
          <TabsList className="grid w-full grid-cols-2 bg-surface-2">
            <TabsTrigger value="look">المظهر</TabsTrigger>
            <TabsTrigger value="data">البيانات</TabsTrigger>
          </TabsList>

          <TabsContent value="look" className="space-y-5 pt-4">
            <fieldset disabled={sync === "loading"} className="space-y-5 disabled:opacity-50">
              <Seg
                label="السمة"
                value={prefs.theme}
                onChange={(v) => set("theme", v)}
                options={[
                  { v: "dark", l: "داكن" },
                  { v: "light", l: "فاتح" },
                  { v: "system", l: "النظام" },
                ]}
              />
              <fieldset className="space-y-2">
                <legend className="text-sm font-semibold">لون التمييز</legend>
                <div className="flex gap-3">
                  {ACCENTS.map((a) => (
                    <button
                      key={a.hue}
                      type="button"
                      aria-label={a.name}
                      aria-pressed={prefs.hue === a.hue}
                      onClick={() => set("hue", a.hue)}
                      className={`h-9 w-9 rounded-full border-2 transition-app ${
                        prefs.hue === a.hue ? "border-foreground" : "border-transparent"
                      }`}
                      style={{ background: `oklch(0.75 0.13 ${a.hue})` }}
                    />
                  ))}
                </div>
              </fieldset>
              <Seg
                label="الخط"
                value={prefs.font}
                onChange={(v) => set("font", v)}
                options={[
                  { v: "Cairo", l: "Cairo" },
                  { v: "Tajawal", l: "Tajawal" },
                  { v: "Inter", l: "Inter" },
                  { v: "system-ui", l: "النظام" },
                ]}
              />
              <fieldset className="space-y-2">
                <legend className="text-sm font-semibold">حجم النص: {prefs.fontSize}px</legend>
                <input
                  type="range"
                  min={14}
                  max={20}
                  value={prefs.fontSize}
                  onChange={(e) => set("fontSize", Number(e.target.value))}
                  className="w-full accent-primary"
                  aria-label="حجم النص"
                />
              </fieldset>
              <Seg
                label="الكثافة"
                value={prefs.density}
                onChange={(v) => set("density", v)}
                options={[
                  { v: "comfortable", l: "مريحة" },
                  { v: "compact", l: "مضغوطة" },
                ]}
              />
              <Seg
                label="الحواف"
                value={prefs.radius}
                onChange={(v) => set("radius", v)}
                options={[
                  { v: "rounded", l: "دائرية" },
                  { v: "soft", l: "ناعمة" },
                  { v: "crisp", l: "حادة" },
                ]}
              />
              <Seg
                label="الحركة"
                value={prefs.motion}
                onChange={(v) => set("motion", v)}
                options={[
                  { v: "system", l: "حسب النظام" },
                  { v: "reduce", l: "مخفّضة" },
                ]}
              />
            </fieldset>
          </TabsContent>

          <TabsContent value="data" className="space-y-3 pt-4">
            <button
              type="button"
              onClick={onExport}
              className="w-full rounded-md border py-2 transition-app hover:bg-accent"
            >
              تصدير كل المحادثات (JSON)
            </button>
            <button
              type="button"
              onClick={onClearAll}
              className="w-full rounded-md border border-destructive/50 py-2 text-destructive transition-app hover:bg-destructive/10"
            >
              حذف كل المحادثات
            </button>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
