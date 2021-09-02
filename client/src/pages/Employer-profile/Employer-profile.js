import React, { useState } from "react";
import "./Employer-profile.css";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { POST_JOB } from "../../utils/mutations";

function EmployerProfile() {
  const [listingName, setListingName] = useState("");
  const [description, setDescription] = useState("");
  const [website, setWebsite] = useState("");

  const [addJobb, { error, data }] = useMutation(POST_JOB);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setListingName("");
    setDescription("");
    setWebsite("");
    try {
      await addJobb({
        variables: { listingName, description, website },
      });

      window.location.assign("/profile/employer/jobs");
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <div className="container mx-auto job-post">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Post your Job!
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                This information will be displayed publicly so be careful what
                you share.
              </p>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            {data ? (
              <div>
                <p>
                  Success! You may now head{" "}
                  <Link to="/">back to the homepage.</Link>
                </p>
              </div>
            ) : (
              <form action="#" method="POST">
                <div className="shadow sm:rounded-md sm:overflow-hidden">
                  <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                    <div className="grid grid-cols-3 gap-6">
                      <div className="col-span-3 sm:col-span-2">
                        <label
                          htmlFor="company-website"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Company Website
                        </label>
                        <div className="mt-1 flex rounded-md shadow-sm">
                          <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                            http://
                          </span>
                          <input
                            type="text"
                            name="company-website"
                            id="company-website"
                            className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                            placeholder="www.example.com"
                            onChange={(event) => setWebsite(event.target.value)}
                            value={website}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-6">
                      <div className="col-span-3 sm:col-span-2">
                        <label
                          htmlFor="job-title"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Job Title
                        </label>
                        <div className="mt-1 flex rounded-md shadow-sm">
                          <input
                            type="text"
                            name="company-website"
                            id="company-website"
                            className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                            placeholder="Web Developer"
                            onChange={(event) =>
                              setListingName(event.target.value)
                            }
                            value={listingName}
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="details"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Details
                      </label>
                      <div className="mt-1">
                        <textarea
                          id="about"
                          name="about"
                          rows={3}
                          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                          placeholder=""
                          onChange={(event) =>
                            setDescription(event.target.value)
                          }
                          value={description}
                        />
                      </div>
                      <p className="mt-2 text-sm text-gray-500">
                        Brief description of the job. URLs are hyperlinked.
                      </p>
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
              </form>
            )}
            {error && (
              <div className="my-3 p-3 bg-danger text-white">
                {error.message}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5">
          <div className="border-t border-gray-200" />
        </div>
      </div>

      <div className="container flex flex-wrap justify-center emp-profile-button">
        <Link to="/profile/employer/jobs">
          <div className="p-2 md:w-50 ">
            <div className="flex items-center p-4 bg-blue-200 rounded-lg shadow-xs cursor-pointer hover:bg-blue-500 hover:text-gray-100">
              <div>
                <p className="text-xs font-medium ml-2 view-jobs">
                  Jobs you posted
                </p>
              </div>
            </div>
          </div>
        </Link>

        <Link to="/profile/employer/likeddevelopers">
          <div className="p-2 md:w-50 ">
            <div className="flex items-center p-4 bg-gray-200 rounded-lg shadow-xs cursor-pointer hover:bg-gray-500 hover:text-gray-100">
              <div>
                <p className="text-xs font-medium ml-2 view-devs">
                  Developers you liked
                </p>
              </div>
            </div>
          </div>
        </Link>
        
      </div>
    </>
  );
}

export default EmployerProfile;
