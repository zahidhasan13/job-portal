import React, { useState, useEffect } from 'react';
import { Plus, MoreHorizontal, ArrowUpDown, Search, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const RecruiterJobs = () => {
  const [jobs, setJobs] = useState([
    { 
      id: 1, 
      title: 'Senior Frontend Developer', 
      company: 'TechCorp', 
      location: 'New York, NY', 
      type: 'Full-time', 
      salary: '$120,000 - $150,000',
      description: 'We are looking for an experienced frontend developer proficient in React and modern JavaScript.',
      status: 'Active',
      applicants: 12,
      postedDate: '2025-03-10'
    },
    { 
      id: 2, 
      title: 'UX Designer', 
      company: 'DesignStudio', 
      location: 'Remote', 
      type: 'Contract', 
      salary: '$90,000 - $110,000',
      description: 'Seeking a talented UX designer to join our creative team and work on exciting projects.',
      status: 'Active',
      applicants: 8,
      postedDate: '2025-03-15'
    },
    { 
      id: 3, 
      title: 'Data Scientist', 
      company: 'AnalyticsPro', 
      location: 'San Francisco, CA', 
      type: 'Full-time', 
      salary: '$130,000 - $160,000',
      description: 'Join our data team to develop and implement machine learning models for our products.',
      status: 'Draft',
      applicants: 0,
      postedDate: '2025-03-18'
    },
    { 
      id: 4, 
      title: 'Backend Developer', 
      company: 'TechCorp', 
      location: 'Chicago, IL', 
      type: 'Full-time', 
      salary: '$110,000 - $140,000',
      description: 'Seeking an experienced backend developer with strong knowledge of Node.js and databases.',
      status: 'Active',
      applicants: 5,
      postedDate: '2025-03-12'
    }
  ]);
  
  const [open, setOpen] = useState(false);
  const [companyFilter, setCompanyFilter] = useState('');
  const [filteredJobs, setFilteredJobs] = useState(jobs);
  const [uniqueCompanies, setUniqueCompanies] = useState([]);
  
  const [newJob, setNewJob] = useState({
    title: '',
    company: '',
    location: '',
    type: 'Full-time',
    salary: '',
    description: '',
    status: 'Draft',
    applicants: 0,
    postedDate: new Date().toISOString().split('T')[0]
  });

  // Extract unique company names
  useEffect(() => {
    const companies = [...new Set(jobs.map(job => job.company))];
    setUniqueCompanies(companies);
  }, [jobs]);

  // Apply filters
  useEffect(() => {
    let results = [...jobs];
    
    if (companyFilter) {
      results = results.filter(job => job.company === companyFilter);
    }
    
    setFilteredJobs(results);
  }, [jobs, companyFilter]);

  const handleAddJob = () => {
    const id = jobs.length > 0 ? Math.max(...jobs.map(job => job.id)) + 1 : 1;
    const newJobItem = { ...newJob, id };
    setJobs([...jobs, newJobItem]);
    setNewJob({
      title: '',
      company: '',
      location: '',
      type: 'Full-time',
      salary: '',
      description: '',
      status: 'Draft',
      applicants: 0,
      postedDate: new Date().toISOString().split('T')[0]
    });
    setOpen(false);
  };

  const clearFilters = () => {
    setCompanyFilter('');
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active':
        return 'bg-green-100 text-green-800';
      case 'Draft':
        return 'bg-gray-100 text-gray-800';
      case 'Closed':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-blue-100 text-blue-800';
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
  };

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Job Listings</h1>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add Job
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-lg">
            <DialogHeader>
              <DialogTitle>Create New Job Listing</DialogTitle>
              <DialogDescription>
                Fill in the details for the new job position.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="title" className="text-right">
                  Job Title
                </Label>
                <Input
                  id="title"
                  value={newJob.title}
                  onChange={(e) => setNewJob({ ...newJob, title: e.target.value })}
                  className="col-span-3"
                  placeholder="e.g. Senior Developer"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="company" className="text-right">
                  Company
                </Label>
                <Input
                  id="company"
                  value={newJob.company}
                  onChange={(e) => setNewJob({ ...newJob, company: e.target.value })}
                  className="col-span-3"
                  placeholder="e.g. TechCorp"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="location" className="text-right">
                  Location
                </Label>
                <Input
                  id="location"
                  value={newJob.location}
                  onChange={(e) => setNewJob({ ...newJob, location: e.target.value })}
                  className="col-span-3"
                  placeholder="e.g. New York, NY or Remote"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="type" className="text-right">
                  Job Type
                </Label>
                <Select 
                  value={newJob.type}
                  onValueChange={(value) => setNewJob({ ...newJob, type: value })}
                >
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="Select job type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Full-time">Full-time</SelectItem>
                    <SelectItem value="Part-time">Part-time</SelectItem>
                    <SelectItem value="Contract">Contract</SelectItem>
                    <SelectItem value="Freelance">Freelance</SelectItem>
                    <SelectItem value="Internship">Internship</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="salary" className="text-right">
                  Salary Range
                </Label>
                <Input
                  id="salary"
                  value={newJob.salary}
                  onChange={(e) => setNewJob({ ...newJob, salary: e.target.value })}
                  className="col-span-3"
                  placeholder="e.g. $80,000 - $100,000"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="status" className="text-right">
                  Status
                </Label>
                <Select 
                  value={newJob.status}
                  onValueChange={(value) => setNewJob({ ...newJob, status: value })}
                >
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Draft">Draft</SelectItem>
                    <SelectItem value="Active">Active</SelectItem>
                    <SelectItem value="Closed">Closed</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-4 items-start gap-4">
                <Label htmlFor="description" className="text-right pt-2">
                  Description
                </Label>
                <Textarea
                  id="description"
                  value={newJob.description}
                  onChange={(e) => setNewJob({ ...newJob, description: e.target.value })}
                  className="col-span-3"
                  rows={4}
                  placeholder="Enter job description..."
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit" onClick={handleAddJob}>Add Job Listing</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      
      {/* Filters Section */}
      <div className="mb-6 flex flex-col sm:flex-row gap-4">
        <div className="w-full sm:w-64">
          <Label htmlFor="companyFilter" className="mb-2 block">Filter by Company</Label>
          <Select 
            value={companyFilter}
            onValueChange={setCompanyFilter}
          >
            <SelectTrigger id="companyFilter" className="w-full">
              <SelectValue placeholder="All Companies" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all-companies">All Companies</SelectItem>
              {uniqueCompanies.map(company => (
                <SelectItem key={company} value={company}>{company}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        {(companyFilter) && (
          <Button variant="outline" onClick={clearFilters} className="mt-auto h-10">
            <X className="mr-2 h-4 w-4" />
            Clear Filters
          </Button>
        )}
      </div>
      
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[250px]">
                <div className="flex items-center space-x-1">
                  <span>Job Title</span>
                  <ArrowUpDown className="h-4 w-4" />
                </div>
              </TableHead>
              <TableHead>Company</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Salary</TableHead>
              <TableHead>
                <div className="flex items-center space-x-1">
                  <span>Posted Date</span>
                  <ArrowUpDown className="h-4 w-4" />
                </div>
              </TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Applicants</TableHead>
              <TableHead className="w-[80px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredJobs.map((job) => (
              <TableRow key={job.id}>
                <TableCell className="font-medium">{job.title}</TableCell>
                <TableCell>{job.company}</TableCell>
                <TableCell>{job.location}</TableCell>
                <TableCell>{job.type}</TableCell>
                <TableCell>{job.salary}</TableCell>
                <TableCell>{formatDate(job.postedDate)}</TableCell>
                <TableCell>
                  <Badge className={getStatusColor(job.status)}>{job.status}</Badge>
                </TableCell>
                <TableCell>{job.applicants}</TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="h-8 w-8 p-0">
                        <span className="sr-only">Open menu</span>
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuItem>View details</DropdownMenuItem>
                      <DropdownMenuItem>Edit job</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      {job.status === 'Draft' && (
                        <DropdownMenuItem>Publish</DropdownMenuItem>
                      )}
                      {job.status === 'Active' && (
                        <DropdownMenuItem>View applicants</DropdownMenuItem>
                      )}
                      <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
            {filteredJobs.length === 0 && (
              <TableRow>
                <TableCell colSpan={9} className="h-24 text-center">
                  No jobs found matching the current filters.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default RecruiterJobs;