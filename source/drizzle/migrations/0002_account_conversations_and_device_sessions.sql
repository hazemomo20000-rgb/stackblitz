CREATE TABLE public.studio_conversations (
 user_id uuid NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
 id text NOT NULL,
 payload jsonb NOT NULL,
 revision integer NOT NULL DEFAULT 1,
 deleted boolean NOT NULL DEFAULT false,
 updated_at timestamptz NOT NULL DEFAULT now(),
 PRIMARY KEY(user_id,id)
);
GRANT SELECT ON public.studio_conversations TO authenticated;
GRANT ALL ON public.studio_conversations TO service_role;
ALTER TABLE public.studio_conversations ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Owner reads conversations" ON public.studio_conversations FOR SELECT TO authenticated USING (user_id = (SELECT auth.uid()));
CREATE OR REPLACE FUNCTION public.save_studio_conversation(p_id text, p_payload jsonb, p_revision integer, p_deleted boolean DEFAULT false)
RETURNS jsonb LANGUAGE plpgsql SECURITY DEFINER SET search_path = '' AS $$
DECLARE owner_id uuid := auth.uid(); row_value public.studio_conversations; BEGIN
 IF owner_id IS NULL THEN RAISE EXCEPTION 'Authentication required'; END IF;
 IF length(p_id) NOT BETWEEN 1 AND 200 OR jsonb_typeof(p_payload) <> 'object' OR p_payload->>'id' IS DISTINCT FROM p_id OR jsonb_typeof(p_payload->'messages') IS DISTINCT FROM 'array' THEN RAISE EXCEPTION 'Invalid conversation'; END IF;
 INSERT INTO public.studio_conversations(user_id,id,payload,deleted) VALUES(owner_id,p_id,p_payload,p_deleted) ON CONFLICT DO NOTHING;
 IF FOUND THEN RETURN jsonb_build_object('saved',true,'row', (SELECT to_jsonb(c) FROM public.studio_conversations c WHERE c.user_id=owner_id AND c.id=p_id)); END IF;
 SELECT * INTO row_value FROM public.studio_conversations WHERE user_id=owner_id AND id=p_id FOR UPDATE;
 IF row_value.revision <> p_revision THEN RETURN jsonb_build_object('saved',false,'row',to_jsonb(row_value)); END IF;
 UPDATE public.studio_conversations SET payload=p_payload,deleted=p_deleted,revision=revision+1,updated_at=now() WHERE user_id=owner_id AND id=p_id RETURNING * INTO row_value;
 RETURN jsonb_build_object('saved',true,'row',to_jsonb(row_value)); END; $$;
REVOKE ALL ON FUNCTION public.save_studio_conversation(text,jsonb,integer,boolean) FROM PUBLIC,anon;
GRANT EXECUTE ON FUNCTION public.save_studio_conversation(text,jsonb,integer,boolean) TO authenticated;
CREATE TABLE public.studio_device_sessions (
 user_id uuid NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
 session_id uuid NOT NULL,
 device_label text NOT NULL,
 last_seen timestamptz NOT NULL DEFAULT now(),
 PRIMARY KEY(user_id,session_id)
);
GRANT SELECT,INSERT,UPDATE,DELETE ON public.studio_device_sessions TO authenticated;
GRANT ALL ON public.studio_device_sessions TO service_role;
ALTER TABLE public.studio_device_sessions ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Owner session records" ON public.studio_device_sessions FOR ALL TO authenticated USING (user_id=(SELECT auth.uid())) WITH CHECK (user_id=(SELECT auth.uid()));