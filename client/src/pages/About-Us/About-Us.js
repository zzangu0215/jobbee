import React from "react";
import AboutUsCard from "./About-Us-Card";
import "./About-Us.css";
import maxImg from "../../content/images/max.jpg";
import israelImg from "../../content/images/israel.jpg";
import junImg from "../../content/images/jun.png";
import daeyoungImg from "../../content/images/daeyoung-avatar.png";

function AboutUs() {
  const jobbeeDevs = [
    {
      orientation: "left",
      name: "Daeyoung Bae",
      aka: "Wooglow",
      bio: "Stuff goes here.",
      linkedIn: "https://www.linkedin.com/feed/",
      github: "https://github.com/wooglow",
      portfolio: "https://wooglow.github.io/react-portfolio/#/about",
      bgColor: "orange",
      bgWeight: "200",
      pic: daeyoungImg,
    },
    {
      orientation: "right",
      name: "Israel Magallon",
      aka: "Izzy",
      bio: "Sometimes I can't find all the worms I dug up.",
      linkedIn: "https://www.linkedin.com/in/izzymag/",
      github: "https://github.com/imagallon",
      portfolio: "https://imagallon.github.io/react-portfolio/",
      bgColor: "green",
      bgWeight: "300",
      pic: israelImg,
    },
    {
      orientation: "left",
      name: "Jun Park",
      aka: "Kakao talky",
      bio: "North Korean who loves dogs.",
      linkedIn: "https://www.linkedin.com/in/junnyzzangu/",
      github: "https://github.com/zzangu0215",
      portfolio: "https://zzangu0215.github.io/portfolio-v3/",
      bgColor: "red",
      bgWeight: "200",
      pic: junImg,
    },
    {
      orientation: "right",
      name: "Maxwell Dunn",
      aka: "Maxo",
      bio: "Keyboard thocks and gamer socks.",
      linkedIn: "https://www.linkedin.com/in/maxwell-dunn-a30374188/",
      github: "https://github.com/maxd66",
      portfolio: "https://mdd-portfolio.herokuapp.com/",
      bgColor: "blue",
      bgWeight: "200",
      pic: maxImg,
    },
  ];
  return (
    <div className="container my-2 px-5 mx-auto max-w-6xl">
      <div className="container my-2">
        <h1 className="title">About Us</h1>
        <div className="bg-white mx-auto rounded-2xl px-10 py-8 shadow-lg hover:shadow-2xl transition duration-500">
          <p className="my-4">
            The developers here at Jobbee are a tight knit group of hard-working
            and driven individuals. As up and coming software developers, Jobbee
            was the web application we all wished for, so we thought,{" "}
            <em>
              <strong>"Why not make it ourselves."</strong>
            </em>
          </p>
          <p className="my-4">
            Jobbee was designed to create an environment, specifically for
            developers to find work. We are committed to making the developer
            our champion, and giving them as many opportunities as possible.
          </p>
          <p className="my-4">
            We know what it's like to be on the hunt. We know what its like to
            feel like a small fish in infinite depths. We too are just a small
            group of developers looking for our opportunity to grow and succeed.
            <em>
              <strong> This is who we are.</strong>
            </em>
          </p>
        </div>
      </div>
      <div>
        {jobbeeDevs.map((dev) => {
          return (
            <div className="my-3 customSkew">
              <AboutUsCard
                key={dev.github}
                orientation={dev.orientation}
                name={dev.name}
                aka={dev.aka}
                bio={dev.bio}
                linkedIn={dev.linkedIn}
                github={dev.github}
                portfolio={dev.portfolio}
                bgColor={dev.bgColor}
                bgWeight={dev.bgWeight}
                pic={dev.pic}
              ></AboutUsCard>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AboutUs;
