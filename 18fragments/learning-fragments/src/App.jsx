import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Buffering from "./coponents/buffering";
import DataShowing from "./coponents/dataShowing";
function App() {
  let foodsArr = ["samosa", "idli", "vada", "khaman", "khichdi", "dal"];
  // let foodsArr = [];

  return (
    <>
      <h2>foods</h2>
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
