-- Run in Supabase SQL Editor (Dashboard → SQL → New query)

create table if not exists public.testimonials (
  id uuid primary key default gen_random_uuid(),
  quote text not null,
  author_name text not null,
  author_role text not null,
  company text,
  avatar_url text,
  created_at timestamptz not null default now()
);

alter table public.testimonials enable row level security;

create policy "Public read testimonials"
  on public.testimonials
  for select
  to anon, authenticated
  using (true);

-- Optional seed row
-- insert into public.testimonials (quote, author_name, author_role, company)
-- values (
--   'Motion transformed our launch into an unforgettable experience.',
--   'Selam Bekele',
--   'Creative Director',
--   'Ethio-Tech Summit'
-- );
