import Style from "./coponents/Heading.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Buffering from "./coponents/buffering";
import DataShowing from "./coponents/dataShowing";
import Heading from "./coponents/heading";
import Container from "./coponents/container";
import InputItems from "./coponents/inputItems";
import UserEnter from "./coponents/userenter";
import { useState } from "react";
function App() {
  let [foodsArr, setFoodsArr] = useState([
    "samosa",
    "idli",
    "vada",
    "khaman",
    "khichdi",
    "dal",
  ]);
  // let foodsArr = [];
  let [textEnterd, setTextEnterd] = useState("item enterd by user");
  const handleOnChangeOnUserEnter = (event) => {
    setTextEnterd(event.target.value);
  };
  const handleData = (event) => {
    console.log(`${props.data} is added to cart`);
  };
  const handleAdd = () => {
    setFoodsArr([...foodsArr, textEnterd]);
    setTextEnterd("");
  };
  return (
    <>
      {" "}
      <Container>
        <Heading className={`${Style.headingCss}`}></Heading>
        {foodsArr.length === 0 ? <Buffering></Buffering> : null}

        <InputItems
          handleOnChangeOnUserEnter={handleOnChangeOnUserEnter}
          handleAdd={handleAdd}
        ></InputItems>
        <UserEnter textEnterd={textEnterd}></UserEnter>
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
