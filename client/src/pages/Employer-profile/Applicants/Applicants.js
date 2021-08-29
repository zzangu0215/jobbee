import React from  "react";
import ApplicantCard from "./Applicant-card";

function Applicants() {
  return (
    <>
      <div className="mt-8 flex justify-center dev-lists">Applicants</div>
      <div className="min-h-screen md:flex items-center md:justify-center">
        <ApplicantCard githubName={"zzangu0215"} />
      </div>
    </>  
  ) 
}

export default Applicants;