import Style from "./coponents/Heading.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Buffering from "./coponents/buffering";
import DataShowing from "./coponents/dataShowing";
import Heading from "./coponents/heading";

function App() {
  let foodsArr = ["samosa", "idli", "vada", "khaman", "khichdi", "dal"];
  // let foodsArr = [];

  return (
    <>
      <Heading className={`${Style.headingCss}`}></Heading>
      {foodsArr.length === 0 ? <Buffering></Buffering> : null}
      {foodsArr.map((item) => (
        <ul className="list-group">
          <DataShowing data={item}></DataShowing>
        </ul>
      ))}
    </>
  );
}

export default App;
