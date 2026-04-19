-- Contact form storage + admin dashboard. Run in Supabase SQL Editor or via CLI.
-- After applying: Database → Replication → enable "contact_submissions" for supabase_realtime
-- (or run: alter publication supabase_realtime add table public.contact_submissions;)

create table if not exists public.contact_submissions (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  message text not null,
  quote_products jsonb not null default '[]'::jsonb,
  status text not null default 'new'
    check (status in ('new', 'approved', 'pending', 'rejected'))
);

create index if not exists contact_submissions_created_at_idx
  on public.contact_submissions (created_at desc);

alter table public.contact_submissions enable row level security;

-- SPA uses anon key; tighten with Supabase Auth or a server proxy for production.
create policy "contact_submissions_insert_anon"
  on public.contact_submissions for insert
  to anon, authenticated
  with check (true);

create policy "contact_submissions_select_anon"
  on public.contact_submissions for select
  to anon, authenticated
  using (true);

create policy "contact_submissions_update_anon"
  on public.contact_submissions for update
  to anon, authenticated
  using (true)
  with check (true);
