import React, { useState } from "react";

import Modal from "@material-tailwind/react/Modal";
import ModalHeader from "@material-tailwind/react/ModalHeader";
import ModalBody from "@material-tailwind/react/ModalBody";
import ModalFooter from "@material-tailwind/react/ModalFooter";
import Button from "@material-tailwind/react/Button";

import { useMutation } from "@apollo/client";
import { REMOVE_JOB } from "../../utils/mutations";
import { QUERY_EMPLOYER } from "../../utils/queries";

import UpdateModal from "../../components/Update-modal/Update-modal";

const EmpJobCard = ({
  _id,
  createdAt,
  companyName,
  listingName,
  website,
  description,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [removeJob, { data }] = useMutation(REMOVE_JOB, {
    refetchQueries: [QUERY_EMPLOYER],
  });
  console.log(data);

  const handleRemoveJob = async (event) => {
    event.preventDefault();
    try {
      await removeJob({
        variables: { _id },
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="md:flex-1 px-10 mt-8">
      <div className="bg-white  mx-auto rounded-2xl px-10 py-8 shadow-lg hover:shadow-2xl transition duration-500">
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
              <div className="text-sm font-semibold">
                <span> Posted Date: {createdAt}</span>
              </div>
            </div>
            <button
              className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full"
              onClick={() => setShowModal(true)}
            >
              Update
            </button>
            <button
              onClick={handleRemoveJob}
              onSubmit={handleRemoveJob}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
            >
              Delete
            </button>
            <Modal
              size="regular"
              active={showModal}
              toggler={() => setShowModal(false)}
            >
              <ModalHeader toggler={() => setShowModal(false)}>
                Update your job!
              </ModalHeader>
              <ModalBody>
                <UpdateModal _id={_id} />
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
              </ModalFooter>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmpJobCard;
