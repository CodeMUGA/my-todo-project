const API_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZzZXVldHV5b2p4cXdjc3FkaW54Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA4NzkwMTgsImV4cCI6MjAyNjQ1NTAxOH0.DXYdNBcUyMy43-kBsVhLgNyH9LvxuiTeccbE3Wdg7dY'

const PROJECT_URL = 'https://vseuetuyojxqwcsqdinx.supabase.co'

import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(PROJECT_URL, API_KEY)
