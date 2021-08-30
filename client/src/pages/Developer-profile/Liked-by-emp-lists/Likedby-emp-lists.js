import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_DEVELOPER } from "../../../utils/queries";

import LikedByEmpCard from "./Likedby-emp-card";

function LikedByEmpLists() {
  const { loading, data: userData } = useQuery(QUERY_DEVELOPER);

  const likedByEmployers = userData?.Developer.likedBy || [];

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="mt-8 flex justify-center dev-lists">
        Hearts from Employers
      </div>
      <div className="min-h-screen md:flex items-center md:justify-center">
        {likedByEmployers.map((employer) => (
          <LikedByEmpCard
            key={employer._id}
            name={employer.name}
            companyName={employer.companyName}
          />
        ))}
      </div>
    </>
  );
}

export default LikedByEmpLists;
