import React, { useState } from "react";

import Modal from "@material-tailwind/react/Modal";
import ModalHeader from "@material-tailwind/react/ModalHeader";
import ModalBody from "@material-tailwind/react/ModalBody";
import ModalFooter from "@material-tailwind/react/ModalFooter";
import Button from "@material-tailwind/react/Button";

import ApplyModal from "../Apply-modal/Apply-modal";

const JobListCard = ({
  jobId,
  createdAt,
  companyName,
  listingName,
  website,
  description,
}) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="md:flex-1 lg:flex-1 px-10 mt-8">
      <div className="bg-white mx-auto rounded-2xl px-10 py-8 shadow-lg hover:shadow-2xl transition duration-500">
        <div className="mt-2">
          <a href={website}>
            <h1 className="text-xl text-gray-700 font-semibold hover:underline cursor-pointer">
              {companyName}
            </h1>
          </a>
          <div className="flex mt-3">
            <h2 className="text-md text-gray-700 font-semibold">
              {listingName}
            </h2>
          </div>
          <p className="mt-4 text-md text-gray-600">{description}</p>
          <div className="flex justify-between items-center">
            <div className="mt-4 flex items-center space-x-4 py-6">
              <div className="">
                <img
                  className="w-12 h-12 rounded-full"
                  src="https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1036&q=80"
                  alt=""
                />
              </div>
              <div className="text-sm font-semibold">
                <span> Posted Date: {createdAt}</span>
              </div>
            </div>
            <button
              className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full"
              onClick={() => setShowModal(true)}
            >
              Apply
            </button>
            <Modal
              size="regular"
              active={showModal}
              toggler={() => setShowModal(false)}
            >
              <ModalHeader toggler={() => setShowModal(false)}>
                Apply for this Job!
              </ModalHeader>
              <ModalBody>
                <ApplyModal jobId={jobId} />
              </ModalBody>
              <ModalFooter>
                <Button
                  color="red"
                  buttonType="link"
                  onClick={(e) => setShowModal(false)}
                  ripple="dark"
                >
                  Close
                </Button>

                <Button
                  color="green"
                  onClick={(e) => setShowModal(false)}
                  ripple="light"
                >
                  Confirm
                </Button>
              </ModalFooter>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobListCard;
