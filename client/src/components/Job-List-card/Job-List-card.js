import React, { useState } from "react";
// import { useQuery } from "@apollo/client";

// import { useParams } from "react-router-dom";
import Modal from "@material-tailwind/react/Modal";
import ModalHeader from "@material-tailwind/react/ModalHeader";
import ModalBody from "@material-tailwind/react/ModalBody";
import ModalFooter from "@material-tailwind/react/ModalFooter";
import Button from "@material-tailwind/react/Button";

// import { QUERY_JOB } from "../../utils/queries";
import ApplyModal from "../Apply-modal/Apply-modal";

const JobListCard = () => {
  const [showModal, setShowModal] = useState(false);
  // const { jobId } = useParams();
  // const { loading, data } = useQuery(QUERY_JOB, {
  //   variables: { jobId: jobId },
  // });

  // const job = data?.job || {};
  // console.log(job.website);

  return (
    <div className="md:flex-1 px-10 mt-8">
      <div className="bg-white  mx-auto rounded-2xl px-10 py-8 shadow-lg hover:shadow-2xl transition duration-500">
        <div className="mt-2">
          <h1 className="text-xl text-gray-700 font-semibold hover:underline cursor-pointer">
            Company Name
          </h1>
          <div className="flex mt-3">
            <h2 className="text-md text-gray-700 font-semibold">
              Full Stack Developer
            </h2>
          </div>
          <p className="mt-4 text-md text-gray-600">
            But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account of the system, and expound the actual teachings of the great
            explorer of the truth, the master-builder of human happines.
          </p>
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
                Jun Park • <br />
                <span className="font-normal"> Posted Date: 2021-08-13</span>
              </div>
            </div>
            <button
              className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full"
              onClick={() => setShowModal(true)}
            >
              Apply
            </button>
            {/* <ApplyModal state={showModal} modalShow={setShowModal(false)} /> */}
            <Modal
              size="regular"
              active={showModal}
              toggler={() => setShowModal(false)}
            >
              <ModalHeader toggler={() => setShowModal(false)}>
                Apply for this Job!
              </ModalHeader>
              <ModalBody>
                <ApplyModal />
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
    // <div className="md:flex-1 px-10 mt-8">
    //   <div className="bg-white  mx-auto rounded-2xl px-10 py-8 shadow-lg hover:shadow-2xl transition duration-500">
    //     <div className="mt-2">
    //       <h1 className="text-xl text-gray-700 font-semibold hover:underline cursor-pointer">
    //         {job.companyName}
    //       </h1>
    //       <div className="flex mt-3">
    //         <h2 className="text-md text-gray-700 font-semibold">
    //           {job.listingName}
    //         </h2>
    //       </div>
    //       <p className="mt-4 text-md text-gray-600">{job.description}</p>
    //       <div className="flex justify-between items-center">
    //         <div className="mt-4 flex items-center space-x-4 py-6">
    //           <div className="">
    //             <img
    //               className="w-12 h-12 rounded-full"
    //               src="https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1036&q=80"
    //               alt=""
    //             />
    //           </div>
    //           <div className="text-sm font-semibold">
    //             {job.website} • <br />
    //             <span className="font-normal"> {job.createdAt}</span>
    //           </div>
    //         </div>
    //         <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full">
    //           Apply
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default JobListCard;
