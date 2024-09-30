import { createClient } from "@supabase/supabase-js";
const url="https://gkdicmbzlricsyrzohje.supabase.co"
const api_key="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdrZGljbWJ6bHJpY3N5cnpvaGplIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDI4MjAwNDgsImV4cCI6MjAxODM5NjA0OH0.aES-7GFHWntdysmzglCb_PDIXwj2gvGvv3P0Y8-ut8E"




export const supabase = createClient(url,api_key);