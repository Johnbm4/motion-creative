-- Run in Supabase SQL Editor (Dashboard → SQL → New query)

create table if not exists public.events (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  date timestamptz not null,
  location text not null,
  description text not null,
  status text not null check (
    status in ('upcoming', 'ongoing', 'completed', 'archived')
  ),
  marketing_url text,
  created_at timestamptz not null default now()
);

alter table public.events enable row level security;

create policy "Public read events"
  on public.events
  for select
  to anon, authenticated
  using (true);

-- Optional seed row
-- insert into public.events (title, date, location, description, status, marketing_url)
-- values (
--   'Ethio-Tech Summit',
--   '2026-09-15T09:00:00+00:00',
--   'Addis Ababa',
--   'Flagship technology and culture summit.',
--   'upcoming',
--   'https://example.com/campaign'
-- );
