import React from "react";

function ApplicantCard({
  applicant,
  name,
  githubName,
  companyName,
  listingName,
  message,
  createdAt,
}) {
  const githubURL = `https://github.com/${githubName}`;

  return (
    <div className="md:flex-1 px-10 mt-8">
      <div className="p-6 bg-white flex items-center space-x-6 rounded-lg shadow-md hover:scale-105 transition transform cursor-pointer">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-20 w-20 text-indigo-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
        </div>
        <div>
          <h1 className="text-xl font-bold text-gray-700 mb-2">
            {name} <a href={githubURL}>({githubName})</a>
          </h1>
          <h2 className="text-lg font-bold text-gray-700 mb-2">
            {companyName}: {listingName}
          </h2>
          <p className="text-gray-600 w-80 text-sm">
            <strong>Message: </strong>
            {message}
          </p>
          <p className="text-gray-600 w-80 text-sm">
            <strong>Created At:</strong> {createdAt}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ApplicantCard;
