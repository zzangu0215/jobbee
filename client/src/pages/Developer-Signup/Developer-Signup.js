import React, { useState } from "react";
import { Link } from "react-router-dom";

import { useMutation } from "@apollo/client";
import { ADD_DEVELOPER } from "../../utils/mutations";

import Auth from "../../utils/auth";

const DeveloperSignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [githubName, setGithubName] = useState("");
  const [addDeveloper, { error, data }] = useMutation(ADD_DEVELOPER);
  // submit form
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
    <div>
      <h1>Developer Sign Up</h1>
      <div className="flex justify-center">
        <div className="w-full max-w-sm">
          {data ? (
            <div>
              <p>
                Success! You may now head{" "}
                <Link to="/">back to the homepage.</Link>
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleFormSubmit}
              className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
            >
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="text"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="github"
                >
                  Github Username
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="github"
                  type="text"
                  placeholder="github username"
                  value={githubName}
                  onChange={(event) => setGithubName(event.target.value)}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="**********"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="password"
                >
                  Confirm Password
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="confirm-password"
                  type="password"
                  placeholder="**********"
                />
                <p className="text-red-500 text-xs italic">
                  Password should match.
                </p>
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                  onClick={handleFormSubmit}
                >
                  Sign Up
                </button>
                <a
                  className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                  href="/"
                >
                  Already have an account?
                </a>
              </div>
            </form>
          )}

          {error && (
            <div className="my-3 p-3 bg-danger text-white">{error.message}</div>
          )}

          <p className="text-center text-gray-500 text-xs">
            &copy;2021 FANTOM Corp. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DeveloperSignUp;
