import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_DEVELOPER } from "../../utils/queries";

import AppliedJobCard from "./Applied-Job-card";

function AppliedJobs() {
  const { loading, data: developerData } = useQuery(QUERY_DEVELOPER);

  const appliedJobs = developerData?.Developer.appliedJobs || [];

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="mt-8 flex justify-center dev-lists">Applied Job</div>
      <div className="min-h-screen md:flex items-center md:justify-center">
        {appliedJobs.map((job) => (
          <AppliedJobCard
            key={job._id}
            companyName={job.companyName}
            listingName={job.listingName}
            createdAt={job.createdAt}
          />
        ))}
      </div>
    </>
  );
}

export default AppliedJobs;
