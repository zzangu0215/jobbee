import React from "react";
import "./Home.css";
import Auth from "../../utils/auth";

import homeLogo from "../../content/logo/home-logo";
import { Link } from "react-router-dom";

function Home() {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <div className="flex flex-wrap justify-center homeDiv">
      <div className="xl:w-5/12 lg:w-6/12 md:w-7/12 sm:w-8/12 w-8/12 px-4">
        <img
          src={homeLogo}
          alt="home-logo"
          className="shadow rounded max-w-full h-auto align-middle border-none"
        />
      </div>
      <div className="flex justify-center w-10/12 welcome">
        <h1>Welcome to JOBBEE!</h1>
      </div>
      <div className="flex justify-center w-10/12 greeting">
        <h2>Explore jobs and developers for your needs!</h2>
      </div>
      <div className="flex justify-center w-10/12 greeting">
        {Auth.loggedIn() ? (
          <>
            <button onClick={logout}>
              <div className="flex items-center p-4 bg-gray-200 rounded-lg shadow-xs cursor-pointer hover:bg-gray-500 hover:text-gray-100">
                <div>
                  <p className="text-xs font-medium view-emp">Logout</p>
                </div>
              </div>
            </button>
          </>
        ) : (
          <>
            <Link to="/login">
              <div className="flex items-center p-4 bg-gray-200 rounded-lg shadow-xs cursor-pointer hover:bg-gray-500 hover:text-gray-100">
                <div>
                  <p className="text-xs font-medium view-emp">Login</p>
                </div>
              </div>
            </Link>
          </>
        )}
      </div>
      <div className="container flex flex-wrap justify-center home-buttons">
        <Link to="/view/developers">
          <div className="p-2 md:w-50 ">
            <div className="flex items-center p-4 bg-green-200 rounded-lg shadow-xs cursor-pointer hover:bg-green-500 hover:text-gray-100">
              <div>
                <p className="text-xs font-medium view-dev">
                  Browse Developers
                </p>
              </div>
            </div>
          </div>
        </Link>

        <Link to="/view/jobs">
          <div className="p-2 md:w-50 ">
            <div className="flex items-center p-4 bg-green-200 rounded-lg shadow-xs cursor-pointer hover:bg-green-500 hover:text-gray-100">
              <div>
                <p className="text-xs font-medium view-emp">Browse Jobs</p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Home;
