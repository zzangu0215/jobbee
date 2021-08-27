import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { UPDATE_JOB } from "../../utils/mutations";
import { useState } from "react";

const UpdateModal = () => {
  const [listingName, setlistingName] = useState("");
  const [companyName, setcompanyName] = useState("");
  const [description, setDescription] = useState("");
  const [updateJob, { error, data }] = useMutation(UPDATE_JOB);
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setName("");
    setEmail("");
    setPassword("");
    setGithubName("");

    try {
      const { data } = await addDeveloper({
        variables: { name, email, password, githubName },
      });
      console.log(data.addDeveloper);
      Auth.login(data.addDeveloper.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="container mx-auto job-post">
      <div className="md:grid md:grid-cols-3 md:gap-6">
        <div className="mt-5 md:mt-0 md:col-span-2">
          <form action="#" method="POST">
            <div className="shadow sm:rounded-md sm:overflow-hidden">
              <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                <div className="grid grid-cols-3 gap-6">
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
                      />
                    </div>
                  </div>
                </div>

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
                      defaultValue={""}
                    />
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UpdateModal;
