import "./style.css";

function SingleCard({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: string;
}) {
  return (
    <div className="singleCard-wrapper">
      <div className="singleCard-title">{title}</div>
      <div className="singleCard-description">{description}</div>
      <div className="singleCard-image">
        <img src={image} alt="image" className="devicesImage" />
      </div>
      <div className="button outlinedButton">More</div>
    </div>
  );
}

export default SingleCard;
