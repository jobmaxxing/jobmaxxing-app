-- JobMaxxing: auth profile, resume, and GitHub schema
-- Run once in Supabase Dashboard -> SQL Editor (or `supabase db push` if you use the CLI).
-- Safe to re-run: uses IF NOT EXISTS / OR REPLACE / ON CONFLICT DO NOTHING throughout.

-- ============================================================
-- profiles — one row per auth user, auto-created on signup
-- ============================================================
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  name text not null default '',
  headline text,
  avatar_url text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.profiles enable row level security;

drop policy if exists "profiles_select_own" on public.profiles;
create policy "profiles_select_own" on public.profiles
  for select using (auth.uid() = id);

drop policy if exists "profiles_update_own" on public.profiles;
create policy "profiles_update_own" on public.profiles
  for update using (auth.uid() = id);

-- Auto-create a profile row whenever a new auth user signs up.
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.profiles (id, name)
  values (new.id, coalesce(new.raw_user_meta_data->>'name', split_part(new.email, '@', 1)));
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- ============================================================
-- resumes — uploaded resume files, one row per version
-- ============================================================
create table if not exists public.resumes (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  label text not null,
  storage_path text not null,
  file_name text not null,
  is_active boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.resumes enable row level security;

drop policy if exists "resumes_select_own" on public.resumes;
create policy "resumes_select_own" on public.resumes
  for select using (auth.uid() = user_id);

drop policy if exists "resumes_insert_own" on public.resumes;
create policy "resumes_insert_own" on public.resumes
  for insert with check (auth.uid() = user_id);

drop policy if exists "resumes_update_own" on public.resumes;
create policy "resumes_update_own" on public.resumes
  for update using (auth.uid() = user_id);

drop policy if exists "resumes_delete_own" on public.resumes;
create policy "resumes_delete_own" on public.resumes
  for delete using (auth.uid() = user_id);

create index if not exists resumes_user_id_idx on public.resumes(user_id);

-- ============================================================
-- resume_analyses — one row per AI analysis run
-- ============================================================
create table if not exists public.resume_analyses (
  id uuid primary key default gen_random_uuid(),
  resume_id uuid not null references public.resumes(id) on delete cascade,
  user_id uuid not null references auth.users(id) on delete cascade,
  target_role text,
  score smallint,
  summary text,
  checklist jsonb not null default '[]'::jsonb,
  missing_keywords jsonb not null default '[]'::jsonb,
  created_at timestamptz not null default now()
);

alter table public.resume_analyses enable row level security;

drop policy if exists "resume_analyses_select_own" on public.resume_analyses;
create policy "resume_analyses_select_own" on public.resume_analyses
  for select using (auth.uid() = user_id);

drop policy if exists "resume_analyses_insert_own" on public.resume_analyses;
create policy "resume_analyses_insert_own" on public.resume_analyses
  for insert with check (auth.uid() = user_id);

create index if not exists resume_analyses_resume_id_idx on public.resume_analyses(resume_id);
create index if not exists resume_analyses_user_id_idx on public.resume_analyses(user_id);

-- ============================================================
-- github_profiles — one row per connected GitHub account
-- ============================================================
create table if not exists public.github_profiles (
  user_id uuid primary key references auth.users(id) on delete cascade,
  username text not null,
  score smallint,
  public_repos integer,
  followers integer,
  ai_summary text,
  last_synced_at timestamptz not null default now()
);

alter table public.github_profiles enable row level security;

drop policy if exists "github_profiles_select_own" on public.github_profiles;
create policy "github_profiles_select_own" on public.github_profiles
  for select using (auth.uid() = user_id);

drop policy if exists "github_profiles_insert_own" on public.github_profiles;
create policy "github_profiles_insert_own" on public.github_profiles
  for insert with check (auth.uid() = user_id);

drop policy if exists "github_profiles_update_own" on public.github_profiles;
create policy "github_profiles_update_own" on public.github_profiles
  for update using (auth.uid() = user_id);

-- ============================================================
-- github_repos — top repos snapshot from the last sync
-- ============================================================
create table if not exists public.github_repos (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  name text not null,
  language text,
  stars integer not null default 0,
  last_commit_at timestamptz
);

alter table public.github_repos enable row level security;

drop policy if exists "github_repos_select_own" on public.github_repos;
create policy "github_repos_select_own" on public.github_repos
  for select using (auth.uid() = user_id);

drop policy if exists "github_repos_insert_own" on public.github_repos;
create policy "github_repos_insert_own" on public.github_repos
  for insert with check (auth.uid() = user_id);

drop policy if exists "github_repos_delete_own" on public.github_repos;
create policy "github_repos_delete_own" on public.github_repos
  for delete using (auth.uid() = user_id);

create index if not exists github_repos_user_id_idx on public.github_repos(user_id);

-- ============================================================
-- Storage: private "resumes" bucket, path-scoped to auth.uid()
-- Expected object path: resumes/{user_id}/{filename}
-- ============================================================
insert into storage.buckets (id, name, public)
values ('resumes', 'resumes', false)
on conflict (id) do nothing;

drop policy if exists "resumes_storage_insert_own" on storage.objects;
create policy "resumes_storage_insert_own" on storage.objects
  for insert with check (
    bucket_id = 'resumes'
    and (storage.foldername(name))[1] = auth.uid()::text
  );

drop policy if exists "resumes_storage_select_own" on storage.objects;
create policy "resumes_storage_select_own" on storage.objects
  for select using (
    bucket_id = 'resumes'
    and (storage.foldername(name))[1] = auth.uid()::text
  );

drop policy if exists "resumes_storage_delete_own" on storage.objects;
create policy "resumes_storage_delete_own" on storage.objects
  for delete using (
    bucket_id = 'resumes'
    and (storage.foldername(name))[1] = auth.uid()::text
  );
