import Style from "./coponents/Heading.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Buffering from "./coponents/buffering";
import DataShowing from "./coponents/dataShowing";
import Heading from "./coponents/heading";
import Container from "./coponents/container";
import InputItems from "./coponents/inputItems";
function App() {
  let foodsArr = ["samosa", "idli", "vada", "khaman", "khichdi", "dal"];
  // let foodsArr = [];
  const handleData = (event) => {
    console.log(`${props.data} is added to cart`);
  };
  return (
    <>
      {" "}
      <Container>
        <Heading className={`${Style.headingCss}`}></Heading>
        {foodsArr.length === 0 ? <Buffering></Buffering> : null}
        <InputItems></InputItems>
        {foodsArr.map((item) => (
          <DataShowing data={item} handleData={handleData}></DataShowing>
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
