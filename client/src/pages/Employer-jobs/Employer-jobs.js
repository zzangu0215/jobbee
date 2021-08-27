import React from "react";
import { useQuery } from "@apollo/client";

import EmpJobCard from "./Employer-job-card";

import "./Employer-jobs.css";
import { QUERY_JOBS } from "../../utils/queries";

const EmployerJobs = () => {
  const { loading, error, data: empJobsData } = useQuery(QUERY_JOBS);
  console.log(loading, error);

  const jobs = empJobsData?.Jobs || [];

  return (
    <>
      <div className="mt-8 flex justify-center emp-jobs">Your Jobs</div>

      <div className="min-h-screen pb-8 bg-gray-100 md:flex items-center md:justify-center">
        {jobs.map((job) => (
          <EmpJobCard
            _id={job._id}
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

export default EmployerJobs;
