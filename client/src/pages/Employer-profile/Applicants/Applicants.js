import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_EMPLOYER } from "../../../utils/queries";

import ApplicantCard from "./Applicant-card";

function Applicants() {
  const { loading, data: employerData } = useQuery(QUERY_EMPLOYER);

  const applicants = employerData?.Employer.messages || [];

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="mt-8 flex justify-center dev-lists">Applicants</div>
      <div className="min-h-screen md:flex items-center md:justify-center">
        {applicants.map((applicant) => (
          <ApplicantCard
            key={applicant._id}
            applicant={applicant.applicant}
            name={applicant.name}
            githubName={applicant.githubName}
            companyName={applicant.companyName}
            listingName={applicant.listingName}
            message={applicant.message}
            createdAt={applicant.createdAt}
          />
        ))}
      </div>
    </>
  );
}

export default Applicants;
