create table if not exists sites (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users not null,
  name text not null,
  description text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table sites enable row level security;

create policy "Users can view their own sites"
  on sites for select
  using ( auth.uid() = user_id );

create policy "Users can insert their own sites"
  on sites for insert
  with check ( auth.uid() = user_id );

create policy "Users can update their own sites"
  on sites for update
  using ( auth.uid() = user_id );

create policy "Users can delete their own sites"
  on sites for delete
  using ( auth.uid() = user_id );
