import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";

import { JOB_APPLY } from "../../utils/mutations";
import { QUERY_JOB } from "../../utils/queries";
// f
function ApplyModal({ jobId, companyName, listingName }) {
  const [message, setMessage] = useState("");

  const [jobApply] = useMutation(JOB_APPLY);
  const { loading, data: posterData } = useQuery(QUERY_JOB, {
    variables: { _id: jobId },
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(posterData);
    const employerID = posterData?.Job.poster;
    console.log(employerID);

    setMessage("");

    try {
      await jobApply({
        variables: { employerId: employerID, jobID: jobId, message },
      });

      window.location.assign("/view/jobs");
    } catch (e) {
      console.error(e);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  const msg = `${jobId}msg`;

  return (
    <div className="container mx-auto job-post">
      <div className="md:grid md:grid-cols-3 md:gap-6">
        <div className="md:col-span-1">
          <div className="px-4 sm:px-0">
            <h3 className="text-lg text-center font-medium leading-6 text-gray-900">
              {companyName}
            </h3>
            <p className="mt-1 text-sm text-gray-600 flex justify-center">
              {listingName}
            </p>
          </div>
        </div>
        <div className="mt-5 md:mt-0 md:col-span-2">
          <form action="#" method="POST">
            <div className="shadow sm:rounded-md sm:overflow-hidden">
              <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                <div>
                  <label
                    htmlFor="details"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Messages
                  </label>
                  <div className="mt-1">
                    <textarea
                      id={msg}
                      name="about"
                      rows={7}
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                      placeholder="Pick me up!"
                      onChange={(event) => setMessage(event.target.value)}
                      defaultValue={""}
                    />
                  </div>
                  <p className="mt-2 text-sm text-gray-500">
                    Tell the employer that you are a good developer!
                  </p>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button
                    type="button"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    onClick={handleFormSubmit}
                  >
                    Apply
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ApplyModal;
