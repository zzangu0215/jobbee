import React, { useEffect, useState } from "react";
// import { useParams } from "react-router";
import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../../utils/queries";
import DevProfileCard from "../../components/Dev-profile-card/Dev-profile-card";

const DeveloperProfile = () => {
  const [githubInfo, setgithubInfo] = useState({});

  const { loading, error, data: userData } = useQuery(QUERY_ME);
  console.log({ loading, error, userData });
  // console.log(loading);

  const developer = userData?.me.githubName || "";
  console.log(developer);

  useEffect(() => {
    getGithubInfo(developer);
  }, [developer]);

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

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

      setgithubInfo(profileInfo);
    } catch (err) {
      console.log(`Network Error. ${err}`);
    }
  };

  return (
    <div>
      <DevProfileCard
        name={userData.me.name}
        username={githubInfo.username}
        bio={githubInfo.bio}
        avatar={githubInfo.avatar}
        github={githubInfo.github}
      />
    </div>
  );
};

export default DeveloperProfile;
