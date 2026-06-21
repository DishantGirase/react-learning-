import Style from "./coponents/Heading.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Buffering from "./coponents/buffering";
import DataShowing from "./coponents/dataShowing";
import Heading from "./coponents/heading";
import Container from "./coponents/container";

function App() {
  let foodsArr = ["samosa", "idli", "vada", "khaman", "khichdi", "dal"];
  // let foodsArr = [];

  return (
    <>
      {" "}
      <Container>
        <Heading className={`${Style.headingCss}`}></Heading>
        {foodsArr.length === 0 ? <Buffering></Buffering> : null}
        {foodsArr.map((item) => (
          <DataShowing data={item}></DataShowing>
        ))}
      </Container>
      <Container>
        <p>
          this is the use of children props in react , create any thing 1 time
          and use multiple time
        </p>
      </Container>
    </>
  );
}

export default App;
