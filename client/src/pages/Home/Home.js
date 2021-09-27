import React, { useState, useEffect } from "react";
import "./Home.css";
import Auth from "../../utils/auth";
import LinksModalBody from "../../components/Links-modal-body/Links-modal-body";

import homeLogo from "../../content/logo/home-logo";
import { Link } from "react-router-dom";
import Modal from "@material-tailwind/react/Modal";
import ModalHeader from "@material-tailwind/react/ModalHeader";
import ModalBody from "@material-tailwind/react/ModalBody";
import ModalFooter from "@material-tailwind/react/ModalFooter";
import Button from "@material-tailwind/react/Button";

function Home() {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  const [showModal, setShowModal] = useState(false);

  const devSigned = window.localStorage.getItem("devSignUp");

  useEffect(() => {
    setShowModal(devSigned);
    window.localStorage.removeItem("devSignUp");
  }, []);

  return (
    <div className="flex flex-wrap justify-center homeDiv">
      <div className="xl:w-5/12 lg:w-6/12 md:w-7/12 sm:w-8/12 w-8/12 px-4">
        <img
          src={homeLogo}
          alt="home-logo"
          className="shadow rounded max-w-full h-auto align-middle border-none"
        />
      </div>
      <Modal
        size="large"
        active={showModal}
        toggler={() => setShowModal(false)}
      >
        <ModalHeader toggler={() => setShowModal(false)}>
          Be More Competitive!
        </ModalHeader>
        <ModalBody>
          <LinksModalBody />
        </ModalBody>
        <ModalFooter>
          <Button color="green" onClick={(e) => setShowModal(false)}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
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
