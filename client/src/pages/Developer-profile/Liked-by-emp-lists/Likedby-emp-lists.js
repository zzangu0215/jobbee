import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_DEVELOPER } from "../../../utils/queries";

import LikedByEmpCard from "./Likedby-emp-card";

function LikedByEmpLists() {
  const { loading, data: userData } = useQuery(QUERY_DEVELOPER);
  // const { loading: devLoading, }
  // console.log(userData);

  const likedByEmployers = userData?.Developer.likedBy || [];
  // console.log(likedByEmployers);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div>
        <h1>Employers who liked you!</h1>
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
