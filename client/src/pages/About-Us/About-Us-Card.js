import "./About-Us.css";

function AboutUsCard(props) {
  const buttonClick = (e) => {
    window.location = e.target.getAttribute("data-link");
  };
  if (props.orientation === "left") {
    return (
      <div
        className={`bg-${props.bgColor}-${props.bgWeight} p-2 flex flex-wrap justify-around items-center`}
      >
        <img src={props.pic} alt={`${props.name}`} className="max-w-sm"></img>
        <div>
          <h2>
            <span className="text-xl">
              <strong>{props.name}</strong>
            </span>
            <em> also known as {props.aka}</em>
          </h2>
          <p>{props.bio}</p>
          <div>
            <button
              onClick={buttonClick}
              data-link={props.linkedIn}
              className="m-1 p-2 rounded-lg bg-white hover:bg-gray-200"
            >
              Github
            </button>
            <button
              onClick={buttonClick}
              data-link={props.portfolio}
              className="m-1 p-2 rounded-md bg-white hover:rounded-sm hover:bg-gray-200"
            >
              Portfolio
            </button>
            <button
              onClick={buttonClick}
              data-link={props.github}
              className="m-1 p-2 rounded-md bg-white hover:rounded-sm hover:bg-gray-200"
            >
              LinkedIn
            </button>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div
      className={`bg-${props.bgColor}-${props.bgWeight} p-2 flex flex-wrap-reverse justify-around items-center flex-row`}
    >
      <div>
        <h2>
          <span className="text-xl">
            <strong>{props.name}</strong>
          </span>
          <em> also known as {props.aka}</em>
        </h2>
        <p>{props.bio}</p>
        <div>
          <button
            onClick={buttonClick}
            data-link={props.linkedIn}
            className="m-1 p-2 rounded-lg bg-white hover:bg-gray-200"
          >
            Github
          </button>
          <button
            onClick={buttonClick}
            data-link={props.portfolio}
            className="m-1 p-2 rounded-md bg-white hover:rounded-sm hover:bg-gray-200"
          >
            Portfolio
          </button>
          <button
            onClick={buttonClick}
            data-link={props.github}
            className="m-1 p-2 rounded-md bg-white hover:rounded-sm hover:bg-gray-200"
          >
            LinkedIn
          </button>
        </div>
      </div>
      <img src={props.pic} alt={`${props.name}`} className="max-w-sm"></img>
    </div>
  );
}

export default AboutUsCard;
