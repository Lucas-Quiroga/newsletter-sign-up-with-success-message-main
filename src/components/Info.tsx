import iconList from "./../assets/images/icon-list.svg";

const Info = () => {
  return (
    <div className="container">
      <h1 className="dark">Stay updated!s</h1>
      <p>Join 60,000+ product managers receiving monthly updates on:</p>
      <div>
        <div>
          <img src={iconList} />
          <span> Product discovery and building what matters</span>
        </div>
        <div>
          {" "}
          <img src={iconList} />
          <span>Measuring to ensure updates are a success</span>
        </div>
        <div>
          {" "}
          <img src={iconList} />
          <span>And much more!</span>
        </div>
      </div>
      {/* <div className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Your Name Here</a>.
      </div> */}
    </div>
  );
};

export default Info;
