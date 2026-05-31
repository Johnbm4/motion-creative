-- Run in Supabase SQL Editor (Dashboard → SQL → New query)

create table if not exists public.marketing (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  category text not null,
  description text not null,
  image_url text not null,
  status text not null check (status in ('draft', 'published', 'archived')),
  created_at timestamptz not null default now()
);

alter table public.marketing enable row level security;

create policy "Public read marketing"
  on public.marketing
  for select
  to anon, authenticated
  using (true);

-- Optional seed row
-- insert into public.marketing (title, category, description, image_url, status)
-- values (
--   'Ethio-Tech Brand Launch',
--   'Campaign',
--   'Integrated launch campaign across digital and experiential channels.',
--   '/placeholder.jpg',
--   'published'
-- );
