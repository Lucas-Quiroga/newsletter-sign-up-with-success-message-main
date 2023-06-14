import iconList from "./../assets/images/icon-list.svg";
import "../styles/InfoStyles.css";

const Info = () => {
  return (
    <div className="container mt-5">
      <h1 className="h1_info" style={{ fontSize: "3.5rem", color: "#24242b " }}>
        Stay updated!
      </h1>
      <p style={{ marginTop: 25 }}>
        Join 60,000+ product managers receiving monthly updates on:
      </p>
      <div
        className="d-flex flex-column gap-2"
        style={{ fontSize: "1.1rem", color: "#24242b " }}
      >
        <div className="pt-2 mt-1">
          <img src={iconList} />
          <span>&nbsp;&nbsp; Product discovery and building what matters</span>
        </div>
        <div>
          {" "}
          <img src={iconList} />
          <span>&nbsp;&nbsp; Measuring to ensure updates are a success</span>
        </div>
        <div>
          {" "}
          <img src={iconList} />
          <span>&nbsp;&nbsp; And much more!</span>
        </div>
      </div>
    </div>
  );
};

export default Info;
