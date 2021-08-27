import React, { useState } from "react";
import { Link } from "react-router-dom";

import { useMutation } from "@apollo/client";
import { UPDATE_JOB } from "../../utils/mutations";



function UpdateModal({ _id }) {
  const [listingName, setlistingName] = useState("");
  const [description, setDescription] = useState("");

  const [updateJob, { error, data }] = useMutation(UPDATE_JOB);


  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setlistingName("");
    setDescription("");

    try {
      await updateJob({
        variables: { _id, listingName, description },
      });


    } catch (e) {
      console.error(e);
    }
  };
  return (
    <div className="container mx-auto job-post">
      <div className="md:grid md:grid-cols-3 md:gap-6">
        <div className="mt-5 md:mt-0 md:col-span-2">
          {data ? (<Link to="/profile/employer/jobs/"></Link>)
            : (<form onSubmit={handleFormSubmit} action="#" method="POST">
              <div className="shadow sm:rounded-md sm:overflow-hidden">
                <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                  {/* <div className="grid grid-cols-3 gap-6">
                    <div className="col-span-3 sm:col-span-2">
                      <label
                        htmlFor="company-name-update"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Company Name
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <input
                          type="text"
                          name="company-name-update"
                          id="company-name-update"
                          className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                          value={companyName}
                          onChange={(event) => setcompanyName(event.target.value)}
                        />
                      </div>
                    </div>
                  </div> */}

                  <div className="grid grid-cols-3 gap-6">
                    <div className="col-span-3 sm:col-span-2">
                      <label
                        htmlFor="job-role-update"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Job Role
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <input
                          type="text"
                          name="job-role-update"
                          id="job-role-update"
                          className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                          value={listingName}
                          onChange={(event) => setlistingName(event.target.value)}
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="description-update"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Description
                    </label>
                    <div className="mt-1">
                      <textarea
                        id="description-update"
                        name="description-update"
                        rows={5}
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                        value={description}
                        onChange={(event) => setDescription(event.target.value)}
                      />
                    </div>
                  </div>
                  <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                    <button
                      type="submit"
                      className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      onClick={handleFormSubmit}
                    >
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </form>
            )}
          {error && (
            <div className="my-3 p-3 bg-danger text-white">{error.message}</div>
          )}

        </div>
      </div>
    </div>
  );
}

export default UpdateModal;
