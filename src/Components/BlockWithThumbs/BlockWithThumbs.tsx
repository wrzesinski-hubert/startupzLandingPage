import thumb from "../../assets/thumb.png";
import "./style.css";

function BlockWithThumbs({ description }: { description: string }) {
  return (
    <div className="thumbsWrapper">
      <img className="thumbLeft" src={thumb} alt="thumbLeft" />
      <h1 className="thumbsTitle">{description}</h1>
      <img className="thumbRight" src={thumb} alt="thumbRight" />
    </div>
  );
}

export default BlockWithThumbs;
