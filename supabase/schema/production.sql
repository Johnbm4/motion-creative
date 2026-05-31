-- Run in Supabase SQL Editor (Dashboard → SQL → New query)

create table if not exists public.production (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  category text not null,
  description text not null,
  image_url text not null,
  status text not null check (status in ('draft', 'published', 'archived')),
  created_at timestamptz not null default now()
);

alter table public.production enable row level security;

create policy "Public read production"
  on public.production
  for select
  to anon, authenticated
  using (true);

-- Optional seed row
-- insert into public.production (title, category, description, image_url, status)
-- values (
--   'Modern Heritage',
--   'Documentary',
--   'A cinematic exploration of culture and identity.',
--   '/placeholder.jpg',
--   'published'
-- );
