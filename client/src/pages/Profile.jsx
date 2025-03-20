import React, { useState } from 'react';
import { Button } from '@/components/ui/button'; // Shadcn UI Button
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'; // Shadcn UI Tabs
import { User, Briefcase, Bookmark, FileText, Edit } from 'lucide-react'; // Icons
import { Badge } from '@/components/ui/badge';
import UserInfoTab from '@/components/UserInfoTab';
import AppliedJobsTable from '@/components/AppliedJobsTable';
import SavedJobsTable from '@/components/SavedJobsTable';
import UpdateProfileDialog from '@/components/UpdateProfileDialog';
import { useSelector } from 'react-redux';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('user-info');
  const [isOpen, setIsOpen] = useState(false);
  const {user} = useSelector(state => state.auth);

 

  

  
  return (
    <div className="container mx-auto px-4 py-8 min-h-screen">
      {/* Tabs */}
      <Tabs defaultValue="user-info" className="w-full">
        {
          (user && user?.role === 'jobseeker') && <TabsList className="grid grid-cols-3 w-full max-w-2xl">
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
        }

        {/* User Info Tab */}
        <TabsContent value="user-info" className="mt-6">
          <UserInfoTab user={user} isOpen={isOpen} setIsOpen={setIsOpen}/>
        </TabsContent>

        {/* Applied Jobs Tab */}
        <TabsContent value="applied-jobs" className="mt-6">
        <AppliedJobsTable/>
        </TabsContent>

        {/* Saved Jobs Tab */}
        <TabsContent value="saved-jobs" className="mt-6">
          <SavedJobsTable/>
        </TabsContent>

      </Tabs>
      <UpdateProfileDialog isOpen={isOpen} setIsOpen={setIsOpen}/>
    </div>
  );
};

export default Profile;