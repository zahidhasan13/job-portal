import React from "react";
import JobCard from "./JobCard";

const LatestJobs = () => {
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
  

  return (
    <div className="bg-gray-50">
        <div className="container mx-auto">
        <div>
            <h2 className="text-3xl font-semibold uppercase">Latest Jobs</h2>
        </div>
        <div className="space-y-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-5">
      {jobs.slice(0, 6).map(
        (
          job 
        ) => (
          <JobCard key={job._id} job={job} />
        )
      )}
    </div>
    </div>
    </div>
  );
};

export default LatestJobs;
