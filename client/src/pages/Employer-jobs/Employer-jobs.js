import React from "react";
import { useQuery } from "@apollo/client";

import EmpJobCard from "./Employer-job-card";

import "./Employer-jobs.css";
import { QUERY_EMPLOYER } from "../../utils/queries";

const EmployerJobs = () => {
  const { loading, data: employer } = useQuery(QUERY_EMPLOYER);
  const employerCompany = employer?.Employer.companyName || "";
  const employerJobs = employer?.Employer.jobs || [];

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="mt-8 flex justify-center emp-jobs">Your Jobs</div>

      <div className="min-h-screen pb-8 bg-gray-100 md:flex items-center md:justify-center">
        {employerJobs.map((job) => (
          <EmpJobCard
            _id={job._id}
            listingName={job.listingName}
            companyName={employerCompany}
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
