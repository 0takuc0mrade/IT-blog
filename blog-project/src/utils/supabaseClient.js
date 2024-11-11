import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://jgymrlldgcqvnbrfqvdd.supabase.co';
const supabaseAnonKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpneW1ybGxkZ2Nxdm5icmZxdmRkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA1NTkyODUsImV4cCI6MjA0NjEzNTI4NX0.iYl1EXDbqSCnzQTcVkoRZOvGkdKQzA0bcT9RlZsC0lE';
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
