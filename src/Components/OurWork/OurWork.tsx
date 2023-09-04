import SingleCard from "./SingleCard";
import macbook from "../../assets/macbook.png";
import macbook2 from "../../assets/macbook2.png";
import ipad from "../../assets/ipad.png";
import ipad2 from "../../assets/ipad2.png";

function OurWork() {
  return (
    <div className="ourWorkWrapper">
      <div className="ourWorkTitle">Our Works</div>
      <div className="cardsWrapper">
        <SingleCard
          title={"Tolq"}
          description={
            "Tolq is the translation solution built for e-commerce. It provides all pieces of the localization puzzle in one single integrated solution."
          }
          image={macbook}
        />
        <SingleCard
          title={"Feedback Labs"}
          description={
            "Feedback Labs turns feedback into actionable insights for your team."
          }
          image={ipad}
        />
        <SingleCard
          title={"LegalSite"}
          description={
            "Protected against legal risks, privacy compliant and always up-to-date with the latest regulatory developments."
          }
          image={ipad2}
        />
        <SingleCard
          title={"Codekeeper"}
          description={
            "Codekeeper is an all-in-one solution for software developers and publishers to provide source code escrow as part of service level and license agreements."
          }
          image={macbook2}
        />
      </div>
    </div>
  );
}

export default OurWork;
