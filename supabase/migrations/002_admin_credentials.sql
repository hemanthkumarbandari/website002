-- Admin credentials table used by the web admin login.
-- Note: This stores plain text passwords because the current UI requirement
-- is to verify exact username/password values from DB.

create table if not exists public.admin_credentials (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  username text not null unique,
  password text not null
);

create index if not exists admin_credentials_username_idx
  on public.admin_credentials (username);

alter table public.admin_credentials enable row level security;

do $$
begin
  if not exists (
    select 1
    from pg_policies
    where schemaname = 'public'
      and tablename = 'admin_credentials'
      and policyname = 'admin_credentials_select_anon'
  ) then
    create policy "admin_credentials_select_anon"
      on public.admin_credentials for select
      to anon, authenticated
      using (true);
  end if;
end $$;

insert into public.admin_credentials (username, password)
values ('admin', 'admi')
on conflict (username) do update
set password = excluded.password;
