import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'; // Shadcn UI Table components
import { Badge } from '@/components/ui/badge'; // Shadcn UI Badge

const AppliedJobsTable = ({ appliedJobs }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <Table>
        {/* Table Header */}
        <TableHeader>
          <TableRow>
            <TableHead>Job Title</TableHead>
            <TableHead>Company</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>Job Role</TableHead> {/* New Column */}
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>

        {/* Table Body */}
        <TableBody>
          {appliedJobs.map((job) => (
            <TableRow key={job.id}>
              <TableCell className="font-medium">{job.title}</TableCell>
              <TableCell>{job.company}</TableCell>
              <TableCell>{job.location}</TableCell>
              <TableCell>{job.role || "N/A"}</TableCell> {/* New Column */}
              <TableCell>
                <Badge variant={job.status === 'Rejected' ? 'destructive' : 'default'}>
                  {job.status}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default AppliedJobsTable;