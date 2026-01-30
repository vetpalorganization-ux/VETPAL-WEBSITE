import { supabase } from '@/integrations/supabase/client';
import { Application, ApplicationFilters } from './types/applications';

const TABLE = 'applications';

export async function submitApplication(payload: Application) {
  const { error, data } = await supabase
    .from(TABLE)
    .insert({
      full_name: payload.full_name,
      email: payload.email,
      phone: payload.phone ?? null,
      location: payload.location ?? null,
      role_applied: payload.role_applied,
      linkedin_url: payload.linkedin_url ?? null,
      resume_url: payload.resume_url ?? null,
      cover_note: payload.cover_note ?? null,
      veteran_status: payload.veteran_status ?? null,
      relocation: payload.relocation ?? null,
      start_date: payload.start_date ?? null,
      status: payload.status ?? 'new',
    })
    .select()
    .single();

  if (error) {
    console.error('[applications] submit error', error);
    throw error;
  }

  return data as Application;
}

export async function listApplications(filters: ApplicationFilters = {}) {
  let query = supabase.from(TABLE).select('*').order('created_at', { ascending: false });

  if (filters.status) {
    query = query.eq('status', filters.status);
  }

  if (filters.role) {
    query = query.ilike('role_applied', `%${filters.role}%`);
  }

  if (filters.search) {
    query = query.or(
      [
        `full_name.ilike.%${filters.search}%`,
        `email.ilike.%${filters.search}%`,
        `role_applied.ilike.%${filters.search}%`,
        `cover_note.ilike.%${filters.search}%`,
      ].join(',')
    );
  }

  const { data, error } = await query;

  if (error) {
    console.error('[applications] list error', error);
    throw error;
  }

  return data as Application[];
}

export async function updateApplicationStatus(id: string, status: Application['status']) {
  const { data, error } = await supabase
    .from(TABLE)
    .update({ status })
    .eq('id', id)
    .select()
    .single();

  if (error) {
    console.error('[applications] update status error', error);
    throw error;
  }

  return data as Application;
}
