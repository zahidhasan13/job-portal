import AllJobs from '@/components/AllJobs';
import JobFilter from '@/components/JobFilter';
import React, { useState } from 'react';

const Jobs = () => {
  const [filters, setFilters] = useState({
    location: '',
    jobType: '',
    experienceLevel: '',
  });

  // Dummy jobs data
  const jobs = [
    {
        "id": "64f8e4b5e4b0d1a2b3c4d5e6",
        "title": "Senior Software Engineer",
        "companyName": "Tech Corp",
        "companyLogo": "https://example.com/logo.png", // URL to the company logo
        "jobType": "Full-time",
        "location": "San Francisco, CA",
        "postingDate": "2023-10-01",
        "description": "We are looking for a talented Senior Software Engineer to join our team and help build scalable, high-performance applications. The ideal candidate has 5+ years of experience in software development and a strong understanding of modern web technologies.",
        "tags": ["JavaScript", "React", "Node.js", "AWS"],
        "salary": 120000
      },
    {
        "id": "64f8e4b5e4b0d1a2b3c4d5e6",
        "title": "Senior Software Engineer",
        "companyName": "Tech Corp",
        "companyLogo": "https://example.com/logo.png", // URL to the company logo
        "jobType": "Full-time",
        "location": "San Francisco, CA",
        "postingDate": "2023-10-01",
        "description": "We are looking for a talented Senior Software Engineer to join our team and help build scalable, high-performance applications. The ideal candidate has 5+ years of experience in software development and a strong understanding of modern web technologies.",
        "tags": ["JavaScript", "React", "Node.js", "AWS"],
        "salary": 120000
      },
    {
        "id": "64f8e4b5e4b0d1a2b3c4d5e6",
        "title": "Senior Software Engineer",
        "companyName": "Tech Corp",
        "companyLogo": "https://example.com/logo.png", // URL to the company logo
        "jobType": "Full-time",
        "location": "San Francisco, CA",
        "postingDate": "2023-10-01",
        "description": "We are looking for a talented Senior Software Engineer to join our team and help build scalable, high-performance applications. The ideal candidate has 5+ years of experience in software development and a strong understanding of modern web technologies.",
        "tags": ["JavaScript", "React", "Node.js", "AWS"],
        "salary": 120000
      },
    {
        "id": "64f8e4b5e4b0d1a2b3c4d5e6",
        "title": "Senior Software Engineer",
        "companyName": "Tech Corp",
        "companyLogo": "https://example.com/logo.png", // URL to the company logo
        "jobType": "Full-time",
        "location": "San Francisco, CA",
        "postingDate": "2023-10-01",
        "description": "We are looking for a talented Senior Software Engineer to join our team and help build scalable, high-performance applications. The ideal candidate has 5+ years of experience in software development and a strong understanding of modern web technologies.",
        "tags": ["JavaScript", "React", "Node.js", "AWS"],
        "salary": 120000
      },
    {
        "id": "64f8e4b5e4b0d1a2b3c4d5e6",
        "title": "Senior Software Engineer",
        "companyName": "Tech Corp",
        "companyLogo": "https://example.com/logo.png", // URL to the company logo
        "jobType": "Full-time",
        "location": "San Francisco, CA",
        "postingDate": "2023-10-01",
        "description": "We are looking for a talented Senior Software Engineer to join our team and help build scalable, high-performance applications. The ideal candidate has 5+ years of experience in software development and a strong understanding of modern web technologies.",
        "tags": ["JavaScript", "React", "Node.js", "AWS"],
        "salary": 120000
      },
    {
        "id": "64f8e4b5e4b0d1a2b3c4d5e6",
        "title": "Senior Software Engineer",
        "companyName": "Tech Corp",
        "companyLogo": "https://example.com/logo.png", // URL to the company logo
        "jobType": "Full-time",
        "location": "San Francisco, CA",
        "postingDate": "2023-10-01",
        "description": "We are looking for a talented Senior Software Engineer to join our team and help build scalable, high-performance applications. The ideal candidate has 5+ years of experience in software development and a strong understanding of modern web technologies.",
        "tags": ["JavaScript", "React", "Node.js", "AWS"],
        "salary": 120000
      },
    {
        "id": "64f8e4b5e4b0d1a2b3c4d5e6",
        "title": "Senior Software Engineer",
        "companyName": "Tech Corp",
        "companyLogo": "https://example.com/logo.png", // URL to the company logo
        "jobType": "Full-time",
        "location": "San Francisco, CA",
        "postingDate": "2023-10-01",
        "description": "We are looking for a talented Senior Software Engineer to join our team and help build scalable, high-performance applications. The ideal candidate has 5+ years of experience in software development and a strong understanding of modern web technologies.",
        "tags": ["JavaScript", "React", "Node.js", "AWS"],
        "salary": 120000
      },
  ];

  // Filter jobs based on filters
  const filteredJobs = jobs.filter((job) => {
    return (
      (filters.location === '' || job.location.includes(filters.location)) &&
      (filters.jobType === '' || job.jobType === filters.jobType) &&
      (filters.experienceLevel === '' || job.experienceLevel === filters.experienceLevel)
    );
  });

  if (!jobs || jobs.length === 0) {
    return (
      <div className="p-8 text-center bg-gray-50">
        <h3 className="text-lg font-medium text-gray-900">No jobs found</h3>
        <p className="text-gray-500 mt-2">
          Try adjusting your search filters or check back later.
        </p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Job Filter */}
        <div className="lg:col-span-1">
          <JobFilter onFilter={setFilters} />
        </div>

        {/* All Jobs */}
        <div className="lg:col-span-3">
          <AllJobs filteredJobs={filteredJobs} jobs={jobs}/>
        </div>
      </div>
    </div>
  );
};

export default Jobs;