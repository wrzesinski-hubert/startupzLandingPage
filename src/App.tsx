import "./App.css";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import ListWithTitle from "./Components/ListWithTitle/ListWithTitle";
import BlockWithThumbs from "./Components/BlockWithThumbs/BlockWithThumbs";
import questionMark from "./assets/questionMark.png";
import bulb from "./assets/bulb.png";
import OurWork from "./Components/OurWork/OurWork";
import BlockWithImages from "./Components/BlockWithImages/BlockWithImages";
import BlockWithMessage from "./Components/BlockWithMessage/BlockWithMessage";

function App() {
  return (
    <div className="pageWrapper">
      <Navbar />
      <Home />
      <ListWithTitle
        title={"Who we are"}
        description={
          "We create products that have innovation and technology at their core. We value working with talented people that understand the possibilities of today."
        }
        listElements={[
          {
            description: "We develop innovative products, systems and services",
          },
          { description: "Next we build teams to scale them into companies" },
          { description: "Each startup solving one problem at a time" },
        ]}
        image={questionMark}
      />
      <BlockWithThumbs description={"We love solving problems!"} />
      <ListWithTitle
        title={"Our core values"}
        description={""}
        listElements={[
          {
            title: "Innovation",
            description:
              "Startupz operates where entrepreneurship and technology intersect. We design solutions and turn them into businesses models.",
          },
          {
            title: "People",
            description: "Talent is what enable us to create great companies.",
          },
        ]}
        image={bulb}
      />
      <OurWork />
      <BlockWithThumbs
        description={
          "Startups create a world that actually is better. Any problem that can be solved, will be solved by a startup, and that is a huge opportunity."
        }
      />
      <BlockWithImages />
      <BlockWithMessage />
    </div>
  );
}

export default App;
