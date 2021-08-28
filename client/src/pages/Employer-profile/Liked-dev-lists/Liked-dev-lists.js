import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_EMPLIKEDLIST } from "../../../utils/queries";
import LikedDevCard from "./Liked-dev-card";

function LikedDevLists() {
  const { loading, data: employerData } = useQuery(QUERY_EMPLIKEDLIST);

  console.log(employerData);
  const likedDevelopers = employerData?.EmpLikedList.likedDevelopers || [];

  return (
    <>
      <div className="mt-8 flex justify-center dev-lists">Developer Lists</div>
      <div className="min-h-screen pb-8 bg-gray-100 md:flex items-center md:justify-center">
        {likedDevelopers.map((developer) => (
          <LikedDevCard key={developer._id} developer={developer} />
        ))}
      </div>
    </>
  );
}

export default LikedDevLists;
