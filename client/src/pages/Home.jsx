import HeroSection from '@/components/HeroSection';
import JobCategorySection from '@/components/JobCategorySection';
import LatestJobs from '@/components/LatestJobs';
import useGetAllJobs from '@/hooks/useGetAllJobs';
import React from 'react';

const Home = () => {
    useGetAllJobs()
    return (
        <>
            <HeroSection/>
            <JobCategorySection/>
            <LatestJobs/>
        </>
    );
};

export default Home;