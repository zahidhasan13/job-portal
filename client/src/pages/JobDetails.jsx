import React from 'react';
import { Badge } from '@/components/ui/badge'; // Shadcn UI Badge
import { Button } from '@/components/ui/button'; // Shadcn UI Button
import { Briefcase, MapPin, Clock, DollarSign, BarChart, Mail } from 'lucide-react'; // Icons

const JobDetails = ({ job }) => {
  // Format salary range
  const formatSalary = (salary) => {
    if (!salary || (!salary.min && !salary.max)) return 'Not specified';

    const formatNumber = (num) => {
      return num >= 1000 ? `${(num / 1000).toFixed(0)}k` : num;
    };

    if (salary.min && salary.max) {
      return `${salary.currency} ${formatNumber(salary.min)} - ${formatNumber(salary.max)}`;
    } else if (salary.min) {
      return `${salary.currency} ${formatNumber(salary.min)}+`;
    } else if (salary.max) {
      return `Up to ${salary.currency} ${formatNumber(salary.max)}`;
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md min-h-screen">
      {/* Job Title and Company */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">{job?.title}</h1>
          <p className="text-gray-600 text-lg">{job?.company?.name || "Company Name"}</p>
        </div>
        <Button className="bg-black">Apply Now</Button>
      </div>

      {/* Key Job Details */}
      <div className="mt-6 space-y-4">
        <div className="flex items-center text-gray-600">
          <MapPin className="w-5 h-5 mr-2" />
          <span>{job?.location}</span>
        </div>
        <div className="flex items-center text-gray-600">
          <Briefcase className="w-5 h-5 mr-2" />
          <span>{job?.employmentType}</span>
        </div>
        <div className="flex items-center text-gray-600">
          <DollarSign className="w-5 h-5 mr-2" />
          <span>{formatSalary(job?.salary)}</span>
        </div>
        <div className="flex items-center text-gray-600">
          <BarChart className="w-5 h-5 mr-2" />
          <span>{job?.experienceLevel}</span>
        </div>
        <div className="flex items-center text-gray-600">
          <Clock className="w-5 h-5 mr-2" />
          <span>Posted on {new Date(job?.postedDate).toLocaleDateString()}</span>
        </div>
        {job?.applicationDeadline && (
          <div className="flex items-center text-gray-600">
            <Clock className="w-5 h-5 mr-2" />
            <span>Apply by {new Date(job?.applicationDeadline).toLocaleDateString()}</span>
          </div>
        )}
      </div>

      {/* Description */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Job Description</h2>
        <p className="text-gray-700">{job?.description}</p>
      </div>

      {/* Requirements */}
      {job?.requirements && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Requirements</h2>
          <p className="text-gray-700">{job?.requirements}</p>
        </div>
      )}

      {/* Responsibilities */}
      {job?.responsibilities && job?.responsibilities.length > 0 && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Responsibilities</h2>
          <ul className="list-disc list-inside text-gray-700">
            {job?.responsibilities.map((responsibility, index) => (
              <li key={index}>{responsibility}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Skills */}
      {job?.skills && job.skills?.length > 0 && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {job?.skills.map((skill, index) => (
              <Badge key={index} variant="secondary" className="bg-gray-100 text-gray-700">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      )}

      {/* Industry */}
      {job?.industry && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Industry</h2>
          <p className="text-gray-700">{job?.industry}</p>
        </div>
      )}

      {/* Contact Email */}
      {job?.contactEmail && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Contact Email</h2>
          <div className="flex items-center text-gray-700">
            <Mail className="w-5 h-5 mr-2" />
            <a href={`mailto:${job?.contactEmail}`} className="text-blue-600 hover:underline">
              {job.contactEmail}
            </a>
          </div>
        </div>
      )}

      {/* Application Count and Views */}
      <div className="mt-8 flex items-center gap-4 text-gray-600">
        <span>{job?.applicationCount} applications</span>
        <span>{job?.views} views</span>
      </div>
    </div>
  );
};

export default JobDetails;