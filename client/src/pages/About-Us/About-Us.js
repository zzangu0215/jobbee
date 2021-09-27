import React from "react";
import AboutUsCard from "./About-Us-Card";
import "./About-Us.css";
import maxImg from "../../content/images/max.jpg";

function AboutUs() {
  const jobbeeDevs = [
    {
      orientation: "left",
      name: "Daeyoung Bae",
      aka: "Wooglow",
      bio: "Stuff goes here.",
      linkedIn: "LinkedIn Link here",
      github: "Github link here",
      portfolio: "Portfolio link here",
      bgColor: "green",
      bgWeight: "200",
      pic: "",
    },
    {
      orientation: "right",
      name: "Israel Magallon",
      aka: "I'm a Gallon",
      bio: "Stuff goes here.",
      linkedIn: "LinkedIn Link here",
      github: "Github link here",
      portfolio: "Portfolio link here",
      bgColor: "purple",
      bgWeight: "300",
      pic: "",
    },
    {
      orientation: "left",
      name: "Jun Park",
      aka: "The North Korean",
      bio: "Stuff goes here.",
      linkedIn: "LinkedIn Link here",
      github: "Github link here",
      portfolio: "Portfolio link here",
      bgColor: "red",
      bgWeight: "200",
      pic: "",
    },
    {
      orientation: "right",
      name: "Maxwell Dunn",
      aka: "The Machine",
      bio: "Never takes breaks. Strives to always be the hardest worker in the room.",
      linkedIn: "LinkedIn Link here",
      github: "Github link here",
      portfolio: "Portfolio link here",
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
