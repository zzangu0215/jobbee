import React from "react";
import DevProfileCard from "./Dev-profile-card";

import "./Developer-Lists.css";

function DeveloperLists() {
  return (
    <>
      <div className="mt-8 flex justify-center dev-lists">Developer Lists</div>
      <div className="min-h-screen pb-8 bg-gray-100 md:flex items-center md:justify-center">
        <DevProfileCard />
      </div>
    </>
  );
}

export default DeveloperLists;
