import { createClient } from '@supabase/supabase-js';

const projectId = import.meta.env.VITE_SUPABASE_PROJECT_ID;
const url = import.meta.env.VITE_SUPABASE_URL ?? (projectId ? `https://${projectId}.supabase.co` : undefined);
const anon =
  import.meta.env.VITE_SUPABASE_ANON_KEY ??
  import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

if (!url || !anon) {
  console.warn(
    '[supabase] Missing VITE_SUPABASE_URL/VITE_SUPABASE_PROJECT_ID or anon key. ' +
    'API calls will fail until these are configured.'
  );
}

export const supabase = createClient(url!, anon!, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
  },
});
