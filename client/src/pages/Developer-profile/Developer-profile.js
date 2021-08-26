import React, { useEffect, useState } from "react";
// import { useParams } from "react-router";
// import { useQuery } from "@apollo/client";
// import { QUERY_ADEVELOPER } from "../../utils/queries";
import DevProfileCard from "../../components/Dev-profile-card/Dev-profile-card";

const DeveloperProfile = () => {
  const [data, setData] = useState({});

  // const { loading, err, queryData } = useQuery(QUERY_ADEVELOPER, {
  //   variables: { _id: "61268b2d6388ff6154c0d5ff" },
  // });
  // console.log(queryData);

  // const developer = queryData?.githubName || "";

  useEffect(() => {
    getGithubInfo("zzangu0215");
  }, []);

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
