-- Applications table for Careers submissions
create table if not exists public.applications (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  full_name text not null,
  email text not null,
  phone text,
  location text,
  role_applied text not null,
  linkedin_url text,
  resume_url text,
  cover_note text,
  veteran_status text,
  relocation boolean,
  start_date text,
  status text not null default 'new'
);

-- Indexes for common filters
create index if not exists applications_created_at_idx on public.applications (created_at desc);
create index if not exists applications_status_idx on public.applications (status);
create index if not exists applications_role_idx on public.applications (role_applied);

-- RLS: require authenticated users to read/write; anon can submit
alter table public.applications enable row level security;

-- Allow anonymous insert (public form submissions)
create policy "Allow anon insert applications"
  on public.applications
  for insert
  to anon
  with check (true);

-- Allow authenticated users to read all (admin will filter in app)
create policy "Allow authenticated select applications"
  on public.applications
  for select
  to authenticated
  using (true);

-- Allow authenticated status updates
create policy "Allow authenticated update status"
  on public.applications
  for update
  to authenticated
  using (true)
  with check (true);

-- TODO for production hardening:
-- - Add an 'admin' role claim and restrict select/update to admin users only.
-- - Move public insert behind rate limiting (Edge Function) if spam risk.
