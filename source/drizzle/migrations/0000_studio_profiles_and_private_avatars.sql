CREATE TABLE public.profiles (
 id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
 display_name text NOT NULL DEFAULT '' CHECK (char_length(display_name) <= 80),
 avatar_path text,
 preferences jsonb,
 updated_at timestamptz NOT NULL DEFAULT now(),
 CONSTRAINT own_avatar_path CHECK (avatar_path IS NULL OR (split_part(avatar_path, '/', 1) = id::text AND avatar_path !~ '\.\.'))
);
GRANT SELECT, UPDATE ON public.profiles TO authenticated;
GRANT ALL ON public.profiles TO service_role;
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Read own profile" ON public.profiles FOR SELECT TO authenticated USING (id = (select auth.uid()));
CREATE POLICY "Update own profile" ON public.profiles FOR UPDATE TO authenticated USING (id = (select auth.uid())) WITH CHECK (id = (select auth.uid()));
CREATE FUNCTION public.create_studio_profile() RETURNS trigger LANGUAGE plpgsql SECURITY DEFINER SET search_path = '' AS $$ BEGIN
 INSERT INTO public.profiles(id, display_name) VALUES (NEW.id, left(coalesce(NEW.raw_user_meta_data->>'display_name', NEW.raw_user_meta_data->>'full_name', ''),80));
 RETURN NEW; END; $$;
REVOKE ALL ON FUNCTION public.create_studio_profile() FROM PUBLIC;
CREATE TRIGGER on_studio_user_created AFTER INSERT ON auth.users FOR EACH ROW EXECUTE FUNCTION public.create_studio_profile();
INSERT INTO public.profiles(id, display_name) SELECT id, left(coalesce(raw_user_meta_data->>'display_name', raw_user_meta_data->>'full_name', ''),80) FROM auth.users ON CONFLICT DO NOTHING;
CREATE FUNCTION public.touch_studio_profile() RETURNS trigger LANGUAGE plpgsql SET search_path = '' AS $$ BEGIN NEW.updated_at = now(); RETURN NEW; END; $$;
CREATE TRIGGER touch_studio_profile BEFORE UPDATE ON public.profiles FOR EACH ROW EXECUTE FUNCTION public.touch_studio_profile();
CREATE POLICY "Read own avatar" ON storage.objects FOR SELECT TO authenticated USING (bucket_id = 'avatars' AND (storage.foldername(name))[1] = (select auth.uid())::text);
CREATE POLICY "Upload own avatar" ON storage.objects FOR INSERT TO authenticated WITH CHECK (bucket_id = 'avatars' AND (storage.foldername(name))[1] = (select auth.uid())::text AND lower(storage.extension(name)) IN ('jpg','jpeg','png','webp'));
CREATE POLICY "Delete own avatar" ON storage.objects FOR DELETE TO authenticated USING (bucket_id = 'avatars' AND (storage.foldername(name))[1] = (select auth.uid())::text);
ALTER PUBLICATION supabase_realtime ADD TABLE public.profiles;