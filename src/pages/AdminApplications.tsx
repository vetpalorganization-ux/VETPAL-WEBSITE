import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Layout } from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Loader2, RefreshCcw } from 'lucide-react';
import { listApplications, updateApplicationStatus } from '@/lib/applications';
import { Application, ApplicationStatus } from '@/lib/types/applications';
import { StatusBadge } from '@/components/admin/StatusBadge';
import { useState } from 'react';
import { isAdminAuthenticated } from '@/hooks/use-admin-auth';
import { Navigate } from 'react-router-dom';

export default function AdminApplications() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [statusFilter, setStatusFilter] = useState<ApplicationStatus | 'all'>('all');
  const [search, setSearch] = useState('');

  if (!isAdminAuthenticated()) {
    return <Navigate to="/admin/login" state={{ from: '/admin/applications' }} replace />;
  }

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ['applications'],
    queryFn: () => listApplications({}),
  });

  const mutation = useMutation({
    mutationFn: ({ id, status }: { id: string; status: ApplicationStatus }) =>
      updateApplicationStatus(id, status),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['applications'] });
    },
  });

  const filtered = useMemo(() => {
    if (!data) return [];
    return data.filter((item) => {
      const matchesStatus = statusFilter === 'all' || item.status === statusFilter;
      const q = search.toLowerCase();
      const matchesSearch =
        !q ||
        item.full_name?.toLowerCase().includes(q) ||
        item.email?.toLowerCase().includes(q) ||
        item.role_applied?.toLowerCase().includes(q);
      return matchesStatus && matchesSearch;
    });
  }, [data, statusFilter, search]);

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-10 space-y-6">
          <div className="flex items-center justify-between flex-wrap gap-3">
            <div>
              <h1 className="text-2xl font-heading font-bold text-foreground">Applications</h1>
              <p className="text-sm text-muted-foreground">Review and manage career applications.</p>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" onClick={() => refetch()}>
                <RefreshCcw className="w-4 h-4 mr-2" />
                Refresh
              </Button>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Filters</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col md:flex-row gap-3">
              <Select value={statusFilter} onValueChange={(v) => setStatusFilter(v as ApplicationStatus | 'all')}>
                <SelectTrigger className="w-full md:w-[200px]">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All statuses</SelectItem>
                  <SelectItem value="new">New</SelectItem>
                  <SelectItem value="review">Review</SelectItem>
                  <SelectItem value="contacted">Contacted</SelectItem>
                  <SelectItem value="closed">Closed</SelectItem>
                </SelectContent>
              </Select>
              <Input
                placeholder="Search name, email, role..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Applicants</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              {isLoading && (
                <div className="p-6 flex items-center justify-center">
                  <Loader2 className="w-5 h-5 animate-spin text-muted-foreground" />
                </div>
              )}
              {isError && (
                <div className="p-6 text-sm text-destructive">Unable to load applications. Check Supabase config.</div>
              )}
              {!isLoading && !isError && (
                <div className="divide-y divide-border">
                  {filtered.length === 0 && (
                    <div className="p-6 text-sm text-muted-foreground">No applications found.</div>
                  )}
                  {filtered.map((app: Application) => (
                    <div key={app.id} className="p-4 md:p-6 flex flex-col gap-3">
                      <div className="flex items-center justify-between gap-3 flex-wrap">
                        <div>
                          <div className="font-semibold text-foreground">{app.full_name}</div>
                          <div className="text-sm text-muted-foreground">{app.email}</div>
                        </div>
                        <StatusBadge status={(app.status as ApplicationStatus) || 'new'} />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm text-muted-foreground">
                        <div>
                          <div className="text-xs uppercase tracking-wide text-muted-foreground/80">Role</div>
                          <div className="text-foreground">{app.role_applied || '—'}</div>
                        </div>
                        <div>
                          <div className="text-xs uppercase tracking-wide text-muted-foreground/80">Location</div>
                          <div className="text-foreground">{app.location || '—'}</div>
                        </div>
                        <div>
                          <div className="text-xs uppercase tracking-wide text-muted-foreground/80">Submitted</div>
                          <div className="text-foreground">
                            {app.created_at ? new Date(app.created_at).toLocaleString() : '—'}
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-wrap items-center gap-3">
                        <Button variant="outline" size="sm" onClick={() => navigate(`/admin/applications/${app.id}`)}>
                          View
                        </Button>
                        <Select
                          value={(app.status as ApplicationStatus) || 'new'}
                          onValueChange={(value) =>
                            mutation.mutate({ id: app.id as string, status: value as ApplicationStatus })
                          }
                        >
                          <SelectTrigger className="w-[170px]">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="new">New</SelectItem>
                            <SelectItem value="review">Review</SelectItem>
                            <SelectItem value="contacted">Contacted</SelectItem>
                            <SelectItem value="closed">Closed</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
