import React, { useState } from 'react';
import { Button } from '@/components/ui/button'; // Shadcn UI Button
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'; // Shadcn UI Tabs
import { User, Briefcase, Bookmark, FileText, Edit } from 'lucide-react'; // Icons
import { Badge } from '@/components/ui/badge';
import UserInfoTab from '@/components/UserInfoTab';
import AppliedJobsTable from '@/components/AppliedJobsTable';
import SavedJobsTable from '@/components/SavedJobsTable';
import UpdateProfileDialog from '@/components/UpdateProfileDialog';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('user-info');
  const [isOpen, setIsOpen] = useState(false);

  // Dummy user data
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    location: 'San Francisco, CA',
    bio: 'Experienced software engineer with a passion for building scalable applications.',
  };

  // Dummy applied jobs data
  const appliedJobs = [
    { id: 1, title: 'Software Engineer', company: 'Tech Corp', location: 'San Francisco, CA', status: 'Applied' },
    { id: 2, title: 'Product Manager', company: 'Innovate Inc', location: 'New York, NY', status: 'Interviewing' },
    { id: 3, title: 'Data Scientist', company: 'DataWorks', location: 'Remote', status: 'Rejected' },
  ];

  // Dummy saved jobs data
  const savedJobs = [
    { id: 1, title: 'Frontend Developer', company: 'Web Solutions', location: 'Remote' },
    { id: 2, title: 'Backend Developer', company: 'API Masters', location: 'Boston, MA' },
  ];


  return (
    <div className="container mx-auto px-4 py-8 min-h-screen">
      {/* Tabs */}
      <Tabs defaultValue="user-info" className="w-full">
        <TabsList className="grid grid-cols-3 w-full max-w-2xl">
          <TabsTrigger value="user-info" onClick={() => setActiveTab('user-info')}>
            <User className="w-4 h-4 mr-2" />
            User Info
          </TabsTrigger>
          <TabsTrigger value="applied-jobs" onClick={() => setActiveTab('applied-jobs')}>
            <Briefcase className="w-4 h-4 mr-2" />
            Applied Jobs
          </TabsTrigger>
          <TabsTrigger value="saved-jobs" onClick={() => setActiveTab('saved-jobs')}>
            <Bookmark className="w-4 h-4 mr-2" />
            Saved Jobs
          </TabsTrigger>
        </TabsList>

        {/* User Info Tab */}
        <TabsContent value="user-info" className="mt-6">
          <UserInfoTab user={user} isOpen={isOpen} setIsOpen={setIsOpen}/>
        </TabsContent>

        {/* Applied Jobs Tab */}
        <TabsContent value="applied-jobs" className="mt-6">
        <AppliedJobsTable appliedJobs={appliedJobs}/>
        </TabsContent>

        {/* Saved Jobs Tab */}
        <TabsContent value="saved-jobs" className="mt-6">
          <SavedJobsTable savedJobs={savedJobs}/>
        </TabsContent>

      </Tabs>
      <UpdateProfileDialog isOpen={isOpen} setIsOpen={setIsOpen}/>
    </div>
  );
};

export default Profile;