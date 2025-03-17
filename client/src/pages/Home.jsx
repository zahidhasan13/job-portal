import HeroSection from '@/components/HeroSection';
import JobCategorySection from '@/components/JobCategorySection';
import LatestJobs from '@/components/LatestJobs';
import React from 'react';

const Home = () => {
    return (
        <>
            <HeroSection/>
            <JobCategorySection/>
            <LatestJobs/>
        </>
    );
};

export default Home;