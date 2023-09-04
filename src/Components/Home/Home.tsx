import art from "../../assets/art.jpg";
import "./style.css";

function Home() {
  return (
    <div
      className="homeWrapper"
      style={{
        backgroundImage: `url(${art})`,
      }}
    >
      <div className="homeTitle">
        <div className="homeTitle_title">We Create Startups.</div>
        <div className="homeTitle_description">
          We are startup studio that develops and launches new companies.
        </div>
        <div className="filledButton">See our works</div>
      </div>
    </div>
  );
}

export default Home;
