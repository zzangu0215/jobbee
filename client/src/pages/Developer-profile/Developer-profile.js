import React, { useEffect, useState } from "react";
// import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../../utils/queries";
import DevProfileCard from "../../components/Dev-profile-card/Dev-profile-card";

import "./Developer-profile.css";

const getGithubInfo = async (repo) => {
  let infoURL = `https://api.github.com/users/${repo}`;

  try {
    const res = await fetch(infoURL);
    const githubData = await res.json();

    return {
      username: githubData.login,
      bio: githubData.bio,
      avatar: githubData.avatar_url,
      github: githubData.html_url,
    };
  } catch (err) {
    console.log(`Network Error. ${err}`);
  }
};

const DeveloperProfile = () => {
  const [{ username, bio, avatar, github }, setgithubInfo] = useState({});

  const { loading, data: userData } = useQuery(QUERY_ME);

  const developer = userData?.me.githubName || "";

  useEffect(() => {
    if (developer) getGithubInfo(developer).then(setgithubInfo);
  }, [developer]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="mt-8 flex justify-center dev-profile">
        {userData?.me.name}'s Profile
      </div>
      <div className="bg-gray-100 flex justify-center">
        <DevProfileCard
          name={userData?.me.name}
          username={username}
          bio={bio}
          avatar={avatar}
          github={github}
          linkedIn={userData?.me.linkedIn}
          resumeLink={userData?.me.resumeLink}
        />
      </div>
      <div className="container flex flex-wrap justify-center emp-profile-button pt-8 pb-8">
        <Link to="/profile/developer/appliedjobs">
          <div className="p-2 md:w-50 ">
            <div className="flex items-center p-4 bg-blue-200 rounded-lg shadow-xs cursor-pointer hover:bg-blue-500 hover:text-gray-100">
              <div>
                <p className="text-xs font-medium ml-2 view-jobs">
                  Jobs you applied to
                </p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default DeveloperProfile;
