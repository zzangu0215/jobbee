import React from "react";
import { useQuery } from '@apollo/client';

import { useParams } from 'react-router-dom';

import { QUERY_JOB } from '../../utils/queries';


const JobListCard = () => {
  const { jobId } = useParams();
  const { loading, data } = useQuery(QUERY_JOB, {
    variables: { jobId: jobId },
  });

  const job = data?.job || {};
  console.log(job.website)

  return (
    <div className="md:flex-1 px-10 mt-8">
      <div className="bg-white  mx-auto rounded-2xl px-10 py-8 shadow-lg hover:shadow-2xl transition duration-500">
        <div className="mt-2">
          <h1 className="text-xl text-gray-700 font-semibold hover:underline cursor-pointer">
            {job.companyName}
          </h1>
          <div className="flex mt-3">
            <h2 className="text-md text-gray-700 font-semibold">
              {job.listingName}
            </h2>
          </div>
          <p className="mt-4 text-md text-gray-600">
            {job.description}
          </p>
          <div className="flex justify-between items-center">
            <div className="mt-4 flex items-center space-x-4 py-6">
              <div className="">
                <img
                  className="w-12 h-12 rounded-full"
                  src="https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1036&q=80"
                  alt=""
                />
              </div>
              <div className="text-sm font-semibold">
                {job.website} • <br />
                <span className="font-normal"> {job.createdAt}</span>
              </div>
            </div>
            <button class="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full">
              Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};





export default JobListCard;


