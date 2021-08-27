import React from "react";
import LikedByEmpCard from "./Likedby-emp-card";

function LikedByEmpLists() {
  return (
    <>
      <div>
        <h1>Employers who liked you!</h1>
      </div>
      <div className="mt-8 flex justify-center">
        <LikedByEmpCard />
      </div>
    </>
  );
}

export default LikedByEmpLists;
