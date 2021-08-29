import React from "react";
import { useQuery } from "@apollo/client";

import JobListCard from "../../components/Job-List-card/Job-List-card";
import { FiSearch } from "react-icons/fi";

import "./Job-Lists.css";
import { QUERY_JOBS } from "../../utils/queries";

const JobLists = () => {
  const { loading, data: jobData } = useQuery(QUERY_JOBS);

  const jobs = jobData?.Jobs || [];

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="mt-8 flex justify-center job-lists">Job Lists</div>
      <div className="mt-4 mb-4 relative flex justify-center text-gray-600">
        <input
          type="search"
          name="serch"
          placeholder="Search by Position..."
          className="bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none"
        />
        <button type="submit">
          <FiSearch size={30} className="right-0" />
        </button>
      </div>
      <div className="min-h-screen pb-8 bg-gray-100 md:flex md:flex-wrap md:justify-center lg:flex lg:flex-wrap lg:justify-center item-center">
        {jobs.map((job) => (
          <JobListCard
            jobId={job._id}
            listingName={job.listingName}
            companyName={job.companyName}
            key={job._id}
            website={job.website}
            description={job.description}
            createdAt={job.createdAt}
          />
        ))}
      </div>
    </>
  );
};

export default JobLists;
