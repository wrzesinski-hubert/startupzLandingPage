import "./style.css";

function BlockWithList({
  title,
  description,
  listElements,
  image,
}: {
  title: string;
  description: string;
  listElements: { title?: string; description: string }[];
  image: string;
}) {
  return (
    <div className="colorWrapper">
      <div className="BlockWithListWrapper">
        <img className="questionMark" src={image} alt="questionMark" />
        <div>
          <h1 className="listTitle">{title}</h1>
          <h3 className="listDescription">{description}</h3>
        </div>
        <div className="list">
          {listElements.map(({ title, description }, index) => (
            <div className="list_singleElement">
              <div className="list_singleElement-wrapper">
                <div className="list_singleElement-number">
                  {index < 9 && "0"}
                  {index + 1}
                </div>
                {title && title}
              </div>
              <div className="list_singleElement-description">
                {description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BlockWithList;
