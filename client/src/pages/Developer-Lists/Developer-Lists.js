import React, { useEffect, useState } from "react";
// import { useQuery } from "@apollo/client";

import DevListCard from "./Dev-list-card";

import "./Developer-Lists.css";
// import { QUERY_DEVELOPERS } from "../../utils/queries";

const DeveloperLists = () => {
  const [githubInfo, setgithubInfo] = useState({});

  // const { loading, error, data: developerData } = useQuery(QUERY_DEVELOPERS);
  // console.log({ loading, error, developerData });

  // const developers = developerData?.Developers || [];

  // console.log(developers);
  useEffect(() => {
    getGithubInfo("imagallon");
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

      setgithubInfo(profileInfo);
    } catch (err) {
      console.log(`Network Error. ${err}`);
    }
  };

  return (
    <>
      <div className="mt-8 flex justify-center dev-lists">Developer Lists</div>
      <div className="min-h-screen pb-8 bg-gray-100 md:flex items-center md:justify-center">
        {/* {developers.map((developer) => ( */}
        <DevListCard
          username={githubInfo.username}
          bio={githubInfo.bio}
          key={githubInfo._id}
          avatar={githubInfo.avatar}
          github={githubInfo.github}
        />
        {/* <DevListCard githubName={"zzangu0215"} /> */}
        {/* ))} */}
      </div>
    </>
  );
};

export default DeveloperLists;
