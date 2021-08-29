import React, { useState } from "react";
import { Link } from "react-router-dom";

import { useMutation } from "@apollo/client";
import { ADD_EMPLOYER } from "../../utils/mutations";

import Auth from "../../utils/auth";

function EmployerSignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [errorsName, seterrorsName] = useState("");
  const [errorsEmail1, seterrorsEmail1] = useState("");
  const [errorsEmail2, seterrorsEmail2] = useState("");
  const [errorsPassword, seterrorsPassword] = useState("");
  const [errorscompanyName, seterrorscompanyName] = useState("");
  const [errorsConfirmPassword, seterrorsConfirmPassword] = useState("");
  const [errorPasswordMatch, seterrorPasswordMatch] = useState("");
  const [addEmployer, { error, data }] = useMutation(ADD_EMPLOYER);
  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setName("");
    setEmail("");
    setPassword("");
    setCompanyName("");
    seterrorsName("");
    seterrorsEmail1("");
    seterrorsEmail2("");
    seterrorsPassword("");
    seterrorsConfirmPassword("");
    seterrorPasswordMatch("");
    seterrorscompanyName("");
    setconfirmPassword("");

    if (
      name &&
      email &&
      password &&
      companyName &&
      confirmPassword &&
      password === confirmPassword
    ) {
      const { data } = await addEmployer({
        variables: { name, email, password, companyName },
      });
      console.log(data.addEmployer);
      Auth.login(data.addEmployer.token);
    } else {
      console.log(error);
    }

    if (!name) {
      seterrorsName("Please enter your name.");
    }

    if (!email) {
      seterrorsEmail1("Please enter your email.");
    }

    if (typeof email !== "undefined") {
      var pattern = new RegExp(/^([\w-.]+@([\w-]+\.)+[\w-]{2,5})?$/);
      if (!pattern.test(email)) {
        seterrorsEmail2("Please enter valid email address.");
      }
    }

    if (!password) {
      seterrorsPassword("Please enter your password.");
    }

    if (!companyName) {
      seterrorscompanyName("Please enter your company name.");
    }

    if (!confirmPassword) {
      seterrorsConfirmPassword("Please enter your confirm password.");
    }

    if (
      typeof password !== "undefined" &&
      typeof confirmPassword !== "undefined"
    ) {
      if (password !== confirmPassword) {
        seterrorPasswordMatch("Passwords don't match.");
      }
    }
  };

  return (
    <div>
      <div className="mt-1 flex justify-center dev-signup-header">
        Employer Signup
      </div>
      <div className="flex justify-center">
        <div className="w-full max-w-sm">
          {data ? (
            <p>
              <p>
                Success! You may now head{" "}
                <Link to="/">back to the homepage.</Link>
              </p>
            </p>
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
                <p className="text-red-500 text-xs italic">{errorsName}</p>
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
                <p className="text-red-500 text-xs italic">
                  {errorsEmail1}
                  {errorsEmail2}
                </p>
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="company"
                >
                  Company
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="company"
                  type="text"
                  placeholder="Company Name"
                  value={companyName}
                  onChange={(event) => setCompanyName(event.target.value)}
                />
                <p className="text-red-500 text-xs italic">
                  {errorscompanyName}
                </p>
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
                  autoComplete="off"
                  onChange={(event) => setPassword(event.target.value)}
                />
                <p className="text-red-500 text-xs italic">{errorsPassword}</p>
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
                  autoComplete="off"
                  onChange={(event) => setconfirmPassword(event.target.value)}
                />
                <p className="text-red-500 text-xs italic">
                  {errorsConfirmPassword}
                </p>
                <p className="text-red-500 text-xs italic">
                  {errorPasswordMatch}
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
                <Link
                  to="/login"
                  className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                >
                  Already have an account?
                </Link>
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
}

export default EmployerSignUp;
