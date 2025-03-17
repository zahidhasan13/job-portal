import JobCard from "@/components/JobCard";

const Browse = () => {
  const jobs = [
    {
      id: "64f8e4b5e4b0d1a2b3c4d5e6",
      title: "Senior Software Engineer",
      companyName: "Tech Corp",
      companyLogo: "https://example.com/logo.png", // URL to the company logo
      jobType: "Full-time",
      location: "San Francisco, CA",
      postingDate: "2023-10-01",
      description:
        "We are looking for a talented Senior Software Engineer to join our team and help build scalable, high-performance applications. The ideal candidate has 5+ years of experience in software development and a strong understanding of modern web technologies.",
      tags: ["JavaScript", "React", "Node.js", "AWS"],
      salary: 120000,
    },
    {
      id: "64f8e4b5e4b0d1a2b3c4d5e6",
      title: "Senior Software Engineer",
      companyName: "Tech Corp",
      companyLogo: "https://example.com/logo.png", // URL to the company logo
      jobType: "Full-time",
      location: "San Francisco, CA",
      postingDate: "2023-10-01",
      description:
        "We are looking for a talented Senior Software Engineer to join our team and help build scalable, high-performance applications. The ideal candidate has 5+ years of experience in software development and a strong understanding of modern web technologies.",
      tags: ["JavaScript", "React", "Node.js", "AWS"],
      salary: 120000,
    },
    {
      id: "64f8e4b5e4b0d1a2b3c4d5e6",
      title: "Senior Software Engineer",
      companyName: "Tech Corp",
      companyLogo: "https://example.com/logo.png", // URL to the company logo
      jobType: "Full-time",
      location: "San Francisco, CA",
      postingDate: "2023-10-01",
      description:
        "We are looking for a talented Senior Software Engineer to join our team and help build scalable, high-performance applications. The ideal candidate has 5+ years of experience in software development and a strong understanding of modern web technologies.",
      tags: ["JavaScript", "React", "Node.js", "AWS"],
      salary: 120000,
    },
    {
      id: "64f8e4b5e4b0d1a2b3c4d5e6",
      title: "Senior Software Engineer",
      companyName: "Tech Corp",
      companyLogo: "https://example.com/logo.png", // URL to the company logo
      jobType: "Full-time",
      location: "San Francisco, CA",
      postingDate: "2023-10-01",
      description:
        "We are looking for a talented Senior Software Engineer to join our team and help build scalable, high-performance applications. The ideal candidate has 5+ years of experience in software development and a strong understanding of modern web technologies.",
      tags: ["JavaScript", "React", "Node.js", "AWS"],
      salary: 120000,
    },
  ];
  return (
    <div className="container mx-auto my-2 min-h-[100vh]">
      <div>
        <p className="text-2xl font-semibold">Search Result (3)</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 my-5">{
      jobs.map(job => <JobCard job={job} key={job.id}/>)
      }</div>
    </div>
  );
};

export default Browse;
