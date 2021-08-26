import React from "react";
import { Link } from "react-router-dom";
import "./Signup.css";

function Signup() {
  return (
    <>
      <div className="flex justify-center welcome">Welcome new User!</div>
      <div className="mt-8 flex justify-center signup-redirect">
        Are you signing up as a(n)...
      </div>
      <div className="mt-8 flex justify-center home-buttons">
        <Link to="/signup/employer">
          <div class="p-2 md:w-50 ">
            <div class="flex items-center p-4 bg-blue-200 rounded-lg shadow-xs cursor-pointer hover:bg-blue-500 hover:text-gray-100">
              <div>
                <p class="text-xs font-medium ml-2 emp-signup">Employer</p>
              </div>
            </div>
          </div>
        </Link>

        <Link to="/signup/developer">
          <div class="p-2 md:w-50 ">
            <div class="flex items-center p-4 bg-gray-200 rounded-lg shadow-xs cursor-pointer hover:bg-gray-500 hover:text-gray-100">
              <div>
                <p class="text-xs font-medium ml-2 dev-signup">Developer</p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}

export default Signup;
