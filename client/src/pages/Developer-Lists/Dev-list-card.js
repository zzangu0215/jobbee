import React, { useEffect, useState } from "react";
import Heart from "react-heart";
import { useMutation, useQuery } from "@apollo/client";
import { ADD_DEV_LIKE } from "../../utils/mutations";

import { FaGithub, FaLinkedin, FaArrowRight } from "react-icons/fa";
import { QUERY_ME, QUERY_DEVELOPERS } from "../../utils/queries";
import Auth from "../../utils/auth";

const getGithubInfo = async (user) => {
  let infoURL = `https://api.github.com/users/${user}`;

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

const DevListCard = ({ developer }) => {
  const [{ username, bio, avatar, github }, setGithubInfo] = useState({});
  const [active, setActive] = useState(false);
  const [developerId, setDeveloperId] = useState("");

  const skillsURL = `https://github-readme-stats.vercel.app/api/top-langs?username=${developer.githubName}&show_icons=true&locale=en&layout=compact`;

  useEffect(() => {
    getGithubInfo(developer.githubName).then(setGithubInfo);
  }, [developer.githubName]);

  const [addDevLike] = useMutation(ADD_DEV_LIKE, {
    refetchQueries: [QUERY_DEVELOPERS],
  });

  const { loading, data: userData } = useQuery(QUERY_ME);

  const userId = userData?.me._id || "";

  if (loading) {
    return <div>Loading...</div>;
  }

  const handleAddLike = async (developerId) => {
    try {
      setDeveloperId(developerId);
      await addDevLike({
        variables: { developerId: developerId },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const linkedInButton = () => {
    if (developer.linkedIn) {
      return (
        <a href={developer.linkedIn}>
          <FaLinkedin size={40} />
        </a>
      );
    }
  };

  console.log(linkedInButton());

  return (
    <div className="px-10 mt-8" style={{ flex: "1 1 300px" }}>
      <div className="bg-white relative mx-auto rounded-2xl px-10 py-8 shadow-lg hover:shadow-2xl transition duration-500">
        <div className="absolute top-10 right-10" style={{ width: "3rem" }}>
          {Auth.loggedIn() ? (
            <Heart
              isActive={active}
              onClick={() => {
                setActive(!active);
                handleAddLike(developer._id);
              }}
              animationScale={1.25}
              style={{ marginBottom: "1rem" }}
            />
          ) : (
            <></>
          )}
          <div className="inlineButtons">
            <a href={github}>
              <FaGithub size={40} />
            </a>
            {developer.linkedIn ? (
              <a href={developer.linkedIn}>
                <FaLinkedin size={40} />
              </a>
            ) : (
              <div></div>
            )}
          </div>
        </div>
        <div>
          <img className="w-20 h-20 rounded-full" src={avatar} alt={username} />
        </div>

        <div className="mt-4">
          <h1
            className="text-gray-700 font-semibold"
            style={{ fontSize: "2rem" }}
          >
            {developer.name}
          </h1>
          <p className="mt-4 text-md text-gray-600">{bio}</p>
          {developer.resumeLink ? (
            <a
              href={developer.resumeLink}
              className="mt-4 text-md text-blue-600 no-underline hover:underline"
            >
              My resume
              <FaArrowRight size="15" />
            </a>
          ) : (
            <div></div>
          )}
        </div>

        <div className="mt-4 sm:flex sm:justify-center">
          <img src={skillsURL} alt={username} />
        </div>
      </div>
    </div>
  );
};

export default DevListCard;
//
