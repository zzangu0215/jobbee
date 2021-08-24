import React, { useEffect, useState } from "react";
import DevProfileCard from "../../components/Dev-profile-card";

const DeveloperProfile = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    getGithubInfo("zzangu0215");
  }, []);

  const getGithubInfo = async (repo) => {
    let infoURL = `https://api.github.com/users/${repo}`;

    try {
      const res = await fetch(infoURL);
      const githubData = await res.json();

      const profileInfo = {
        username: githubData.login,
        bio: githubData.bio,
        avatar: githubData.avatar_url,
        github: githubData.html_url,
      };

      setData(profileInfo);
    } catch (err) {
      console.log(`Network Error. ${err}`);
    }
  };

  return (
    <div>
      <DevProfileCard
        name={"Jun Park"}
        username={data.username}
        bio={data.bio}
        avatar={data.avatar}
        github={data.github}
      />
    </div>
  );
};

export default DeveloperProfile;
