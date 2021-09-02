import React from "react";
import { useQuery } from "@apollo/client";

import DevListCard from "./Dev-list-card";

import "./Developer-Lists.css";
import { QUERY_DEVELOPERS } from "../../utils/queries";

const DeveloperLists = () => {
  const { loading, data: developerData } = useQuery(QUERY_DEVELOPERS);

  const developers = developerData?.Developers || [];

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="mt-8 flex justify-center dev-lists">Developer Lists</div>
      <div className="min-h-screen pb-8 bg-gray-100 md:flex md:flex-wrap items-center md:justify-center">
        {developers.map((developer) => (
          <DevListCard key={developer._id} developer={developer} />
        ))}
      </div>
    </>
  );
};

export default DeveloperLists;
