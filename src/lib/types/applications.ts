export type ApplicationStatus = 'new' | 'review' | 'contacted' | 'closed';

export interface Application {
  id?: string;
  created_at?: string;
  full_name: string;
  email: string;
  phone?: string;
  location?: string;
  role_applied: string;
  linkedin_url?: string;
  resume_url?: string;
  cover_note?: string;
  veteran_status?: string;
  relocation?: boolean;
  start_date?: string;
  status?: ApplicationStatus;
}

export interface ApplicationFilters {
  status?: ApplicationStatus;
  search?: string;
  role?: string;
}
