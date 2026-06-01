const SUPABASE_URL = "https://agkgwhegtjnzrheazufp.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_LD3d16a6ZImmnmkaKVu-Tw_dfP3CKop";

const supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY
);