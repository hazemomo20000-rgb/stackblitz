REVOKE EXECUTE ON FUNCTION public.create_studio_profile() FROM anon, authenticated;
REVOKE EXECUTE ON FUNCTION public.touch_studio_profile() FROM PUBLIC, anon, authenticated;