import artLeft from "../../assets/artLeft.png";
import artRight from "../../assets/artRight.png";
import "./style.css";

function BlockWithImages() {
  return (
    <div className="imagesWrapper">
      <div
        className="artLeft"
        style={{
          backgroundImage: `url(${artLeft})`,
        }}
      ></div>
      <div className="blockWithImages-wrapper">
        <div className="blockWithImages-title">We are hiring!</div>
        <div className="blockWithImages-description">
          We're always looking for talented people to join and help build our
          startups. Check out our current openings
        </div>
        <div className="filledButton">See current openings</div>
      </div>
      <div
        className="artRight"
        style={{
          backgroundImage: `url(${artRight})`,
        }}
      ></div>
    </div>
  );
}

export default BlockWithImages;
