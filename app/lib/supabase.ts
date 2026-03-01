import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://lvmbhdlcdqxafnosydlj.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx2bWJoZGxjZHF4YWZub3N5ZGxqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIwNjUzMTEsImV4cCI6MjA4NzY0MTMxMX0.qUXPDCAEJSAAts967zNRRcWoJ4hWzo5xtvUMsCatozQ";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);