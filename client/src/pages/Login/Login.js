import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { USER_LOGIN } from "../../utils/mutations";
import Auth from "../../utils/auth";

import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, { error, data }] = useMutation(USER_LOGIN);

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setEmail("");
    setPassword("");
    try {
      const { data } = await login({
        variables: { email, password },
      });

      console.log(data);
      Auth.login(data.userlogin.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <div className="mt-8 flex justify-center login-header">User Login</div>
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
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
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
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="your@email.com"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  name="password"
                >
                  Confirm Password
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder="**********"
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                  onClick={handleFormSubmit}
                >
                  Login
                </button>
                <Link
                  to="/signup"
                  className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                >
                  Don't have an account yet?
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

export default Login;
