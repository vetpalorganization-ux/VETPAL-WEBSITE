import { useParams, Navigate } from 'react-router-dom';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Layout } from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Loader2, ArrowLeft } from 'lucide-react';
import { listApplications, updateApplicationStatus } from '@/lib/applications';
import { Application, ApplicationStatus } from '@/lib/types/applications';
import { StatusBadge } from '@/components/admin/StatusBadge';
import { isAdminAuthenticated } from '@/hooks/use-admin-auth';
import { useNavigate } from 'react-router-dom';

export default function AdminApplicationDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  if (!isAdminAuthenticated()) {
    return <Navigate to="/admin/login" state={{ from: `/admin/applications/${id}` }} replace />;
  }

  const { data, isLoading, isError } = useQuery({
    queryKey: ['applications'],
    queryFn: () => listApplications({}),
  });

  const application = data?.find((a) => a.id === id);

  const mutation = useMutation({
    mutationFn: ({ status }: { status: ApplicationStatus }) =>
      updateApplicationStatus(id as string, status),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['applications'] });
    },
  });

  if (isLoading) {
    return (
      <Layout>
        <div className="min-h-[60vh] flex items-center justify-center">
          <Loader2 className="w-5 h-5 animate-spin text-muted-foreground" />
        </div>
      </Layout>
    );
  }

  if (isError || !application) {
    return (
      <Layout>
        <div className="min-h-[60vh] flex items-center justify-center text-sm text-muted-foreground">
          Unable to load application.
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-10 space-y-6">
        <div className="flex items-center gap-3">
          <Button variant="ghost" onClick={() => navigate('/admin/applications')}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
          <h1 className="text-2xl font-heading font-bold text-foreground">Application Detail</h1>
        </div>

        <Card>
          <CardHeader className="flex flex-col gap-2">
            <CardTitle className="text-xl flex items-center gap-3">
              <span>{application.full_name}</span>
              <StatusBadge status={(application.status as ApplicationStatus) || 'new'} />
            </CardTitle>
            <div className="text-sm text-muted-foreground">
              Submitted {application.created_at ? new Date(application.created_at).toLocaleString() : '—'}
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Info label="Email" value={application.email} />
              <Info label="Phone" value={application.phone} />
              <Info label="Role" value={application.role_applied} />
              <Info label="Location" value={application.location} />
              <Info label="LinkedIn" value={application.linkedin_url} isLink />
              <Info label="Resume" value={application.resume_url} isLink />
              <Info label="Veteran status" value={application.veteran_status} />
              <Info label="Relocation" value={application.relocation ? 'Yes' : 'No'} />
              <Info label="Start date" value={application.start_date} />
            </div>

            <Separator />

            <div>
              <h3 className="font-semibold text-foreground mb-2">Cover note</h3>
              <p className="text-sm text-muted-foreground whitespace-pre-line">
                {application.cover_note || '—'}
              </p>
            </div>

            <Separator />

            <div className="flex flex-col gap-2 w-full max-w-xs">
              <label className="text-sm font-medium text-foreground">Update status</label>
              <Select
                defaultValue={(application.status as ApplicationStatus) || 'new'}
                onValueChange={(value) => mutation.mutate({ status: value as ApplicationStatus })}
              >
                <SelectTrigger>
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
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}

function Info({
  label,
  value,
  isLink,
}: {
  label: string;
  value?: string | null;
  isLink?: boolean;
}) {
  if (!value) {
    return (
      <div className="space-y-1">
        <div className="text-xs uppercase tracking-wide text-muted-foreground/80">{label}</div>
        <div className="text-sm text-muted-foreground">—</div>
      </div>
    );
  }

  return (
    <div className="space-y-1">
      <div className="text-xs uppercase tracking-wide text-muted-foreground/80">{label}</div>
      {isLink ? (
        <a href={value} target="_blank" rel="noreferrer" className="text-sm text-accent hover:underline">
          {value}
        </a>
      ) : (
        <div className="text-sm text-foreground">{value}</div>
      )}
    </div>
  );
}
