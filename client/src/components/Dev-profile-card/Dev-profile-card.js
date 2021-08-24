import React, { useState } from "react";
import Heart from "react-heart";
import { FaGithub } from "react-icons/fa";

const DevProfileCard = ({ name, username, bio, avatar, github }) => {
  const skillsURL = `https://github-readme-stats.vercel.app/api/top-langs?username=${username}&show_icons=true&locale=en&layout=compact`;

  const [active, setActive] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="container flex justify-center">
        <div className="max-w-sm py-16">
          <div className="bg-white relative shadow-lg hover:shadow-xl transition duration-500 rounded-lg">
            <img
              className="rounded-t-lg"
              // style={avatarSize}
              src={avatar}
              alt=""
            />
            <div className="py-6 px-8 rounded-lg bg-white">
              <h1 className="text-gray-700 font-bold text-2xl mb-3 hover:text-gray-900 hover:cursor-pointer">
                {name}
              </h1>
              <p className="text-gray-700 tracking-wide">{bio}</p>
              <br />
              <img src={skillsURL} alt={username} /> <br />
              <p align="center">
                <a href={github}>
                  <FaGithub size={40} />
                </a>
              </p>
            </div>
            <div className="absolute top-2 right-2" style={{ width: "3rem" }}>
              <Heart
                isActive={active}
                onClick={() => setActive(!active)}
                animationScale={1.25}
                style={{ marginBottom: "1rem" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
//

export default DevProfileCard;
