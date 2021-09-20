import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import Heart from "react-heart";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import auth from "../../utils/auth";
import { UPDATE_LINKEDIN } from "../../utils/mutations";

const DevProfileCard = ({ name, username, bio, avatar, github, linkedIn }) => {
  const skillsURL = `https://github-readme-stats.vercel.app/api/top-langs?username=${username}&show_icons=true&locale=en&layout=compact`;

  const [active, setActive] = useState(false);
  const [linkedInValue, setLinkedInValue] = useState("");
  const [updateLinkedIn, { error, data }] = useMutation(UPDATE_LINKEDIN);

  const handleFormSubmit = async () => {
    try {
      const { data } = await auth.getProfile();
      const userId = data._id;
      await updateLinkedIn({
        variables: { developerId: userId, linkedIn: linkedInValue },
      });
      setLinkedInValue("");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <div className="md:flex-1 px-10 mt-8">
        <div className="bg-white relative mx-auto rounded-2xl px-10 py-8 shadow-lg hover:shadow-2xl transition duration-500">
          <div className="absolute top-10 right-10" style={{ width: "3rem" }}>
            <Heart
              isActive={active}
              onClick={() => setActive(!active)}
              animationScale={1.25}
              style={{ marginBottom: "1rem" }}
            />
            <div style={{ display: "flex", justifyContent: "end" }}>
              <a href={github}>
                <FaGithub size={40} />
              </a>
              {linkedIn ? (
                <a href={linkedIn}>
                  <FaLinkedin size={40} />
                </a>
              ) : (
                <div></div>
              )}
            </div>
          </div>
          <div className="">
            <img
              className="w-20 h-20 rounded-full"
              src={avatar}
              alt={username}
            />
          </div>

          <div className="mt-4">
            <h1
              className="text-gray-700 font-semibold"
              style={{ fontSize: "2rem" }}
            >
              {name}{" "}
            </h1>
            <p className="mt-4 text-md text-gray-600">{bio}</p>
          </div>

          <div className="mt-4 sm:flex sm:justify-center">
            <img src={skillsURL} alt={username} />
          </div>
          <form className="my-3" onSubmit={handleFormSubmit}>
            <label>
              <FaLinkedin size="35" />
            </label>
            <input
              className="my-1 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Update LinkedIn..."
              value={linkedInValue}
              onChange={(event) => setLinkedInValue(event.target.value)}
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              +
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
//

export default DevProfileCard;
