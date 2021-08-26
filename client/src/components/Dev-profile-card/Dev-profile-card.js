import React, { useState } from "react";
import Heart from "react-heart";
import { FaGithub } from "react-icons/fa";

const DevProfileCard = ({ name, username, bio, avatar, github }) => {
  const skillsURL = `https://github-readme-stats.vercel.app/api/top-langs?username=${username}&show_icons=true&locale=en&layout=compact`;

  const [active, setActive] = useState(false);

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
            <a href={github}>
              <FaGithub size={40} />
            </a>
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
        </div>
      </div>
    </>
  );
};
//

export default DevProfileCard;
