import React from "react";

const DevProfileCard = ({ username, bio, avatar }) => {
  const skillsURL = `https://github-readme-stats.vercel.app/api/top-langs?username=${username}&show_icons=true&locale=en&layout=compact`;

  return (
    <div>
      <p>Github ID: {username}</p>
      <p>Description: {bio}</p>
      <p>
        Profile picture: <img src={avatar} alt={username} />
      </p>
      <p>
        Skills: <img align="left" src={skillsURL} alt={username} />
      </p>
    </div>
  );
};

export default DevProfileCard;
