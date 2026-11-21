CREATE TABLE public.studio_speech_access (user_id uuid PRIMARY KEY REFERENCES public.profiles(id) ON DELETE CASCADE, blocked boolean NOT NULL DEFAULT false, reason text NOT NULL DEFAULT '', status integer NOT NULL DEFAULT 403);
GRANT ALL ON public.studio_speech_access TO service_role;
ALTER TABLE public.studio_speech_access ENABLE ROW LEVEL SECURITY;