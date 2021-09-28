import React, { useState, useEffect } from "react";
import { FaFile, FaLinkedin, FaSpinner, FaCheckCircle } from "react-icons/fa";
import { useMutation } from "@apollo/client";
import { UPDATE_RESUME } from "../../utils/mutations";
import { UPDATE_LINKEDIN } from "../../utils/mutations";
import auth from "../../utils/auth";

function LinksModalBody() {
  const [linkedInValue, setLinkedInValue] = useState("");
  const [resumeLinkValue, setResumeLinkValue] = useState("");
  const [linkedInStatus, setLinkedInStatus] = useState(false);
  const [resumeStatus, setResumeStatus] = useState(false);
  const [linkedInButtonStatus, setLinkedInButtonStatus] = useState("+");
  const [resumeButtonStatus, setResumeButtonStatus] = useState("+");
  const [updateLinkedIn] = useMutation(UPDATE_LINKEDIN);
  const [updateResumeLink] = useMutation(UPDATE_RESUME);

  const handleLinkedInSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await auth.getProfile();
      const userId = data._id;
      const updateStatus = await updateLinkedIn({
        variables: { developerId: userId, linkedIn: linkedInValue },
      });
      setLinkedInStatus(updateStatus);
      setLinkedInValue("");
    } catch (e) {
      console.log(e);
    }
  };

  const handleResumeSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await auth.getProfile();
      const userId = data._id;
      const updateStatus = await updateResumeLink({
        variables: { developerId: userId, resumeLink: resumeLinkValue },
      });
      setResumeStatus(updateStatus);
      setResumeLinkValue("");
    } catch (e) {
      console.log(e);
    }
  };
  const linkedInButtonChange = () => {
    if (linkedInStatus) {
      setLinkedInButtonStatus(<FaCheckCircle />);
    }
  };

  const linkedInButtonClick = () => {
    setLinkedInButtonStatus(<FaSpinner className="animate-spin" />);
  };

  useEffect(() => {
    linkedInButtonChange();
    // linkedIn button change does not need to be a dependency because is only ever called or altered here in the useEffect
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [linkedInStatus]);

  const resumeButtonChange = () => {
    if (resumeStatus) {
      setResumeButtonStatus(<FaCheckCircle />);
    }
  };

  const resumeButtonClick = () => {
    setResumeButtonStatus(<FaSpinner className="animate-spin" />);
  };

  useEffect(() => {
    resumeButtonChange();
    // resume button change does not need to be a dependency because is only ever called or altered here in the useEffect
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resumeStatus]);

  return (
    <div>
      <h2>
        Add your Linked In and a link to your resume here to increase your
        recognition with employers.{" "}
        <strong>
          You can always update them or add them later in your profile page!
        </strong>
      </h2>
      <form className="my-3" onSubmit={handleLinkedInSubmit}>
        <label>
          <FaLinkedin size="35" />
        </label>
        <div className="flex flex-row lg:block">
          <input
            className="my-1 shadow appearance-none border rounded-l lg:rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Update LinkedIn..."
            value={linkedInValue}
            onChange={(event) => setLinkedInValue(event.target.value)}
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold my-1 lg:my-0 lg:py-2 px-4 rounded-r lg:rounded focus:outline-none focus:shadow-outline"
            onClick={linkedInButtonClick}
          >
            {linkedInButtonStatus}
          </button>
        </div>
      </form>
      <br></br>
      <form className="my-3" onSubmit={handleResumeSubmit}>
        <label>
          <FaFile size="35" />
        </label>
        <div className="flex flex-row lg:block">
          <input
            className="my-1 shadow appearance-none border rounded-l lg:rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Update Resume..."
            value={resumeLinkValue}
            onChange={(event) => setResumeLinkValue(event.target.value)}
          />
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-700 text-white font-bold my-1 lg:my-0 lg:py-2 px-4 rounded-r lg:rounded focus:outline-none focus:shadow-outline"
            onClick={resumeButtonClick}
          >
            {resumeButtonStatus}
          </button>
        </div>
      </form>
    </div>
  );
}

export default LinksModalBody;
