import React from "react";
import "./Home.css";

import homeLogo from "../../content/logo/home-logo";

function Home() {
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
        <h2>Employer!</h2>
      </div>
      <div className="flex justify-center w-10/12 greeting">
        <h2>Developer!</h2>
      </div>
      <div className="container flex flex-wrap justify-center home-buttons">
        <div className="p-2 md:w-50 ">
          <div className="flex items-center p-4 bg-blue-200 rounded-lg shadow-xs cursor-pointer hover:bg-blue-500 hover:text-gray-100">
            <div>
              <p className="text-xs font-medium ml-2 view-dev">
                View Developer
              </p>
            </div>
          </div>
        </div>

        <div className="p-2 md:w-50 ">
          <div className="flex items-center p-4 bg-gray-200 rounded-lg shadow-xs cursor-pointer hover:bg-gray-500 hover:text-gray-100">
            <div>
              <p className="text-xs font-medium ml-2 view-emp">View Employer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
