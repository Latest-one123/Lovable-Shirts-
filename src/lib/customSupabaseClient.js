import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://wrxsfcxupomirotvzofm.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndyeHNmY3h1cG9taXJvdHZ6b2ZtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE4Nzk5NzcsImV4cCI6MjA2NzQ1NTk3N30.7M5rbE4xQrtG-BdIhobsFltrN5cSK5rBIJ1FKPkRGOo';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);