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
      };

      setData(profileInfo);
    } catch (err) {
      console.log(`Network Error. ${err}`);
    }
  };

  return (
    <div>
      <p>Hi</p>
      <DevProfileCard
        username={data.username}
        bio={data.bio}
        avatar={data.avatar}
      />
    </div>
  );
};

export default DeveloperProfile;
