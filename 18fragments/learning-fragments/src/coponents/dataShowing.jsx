import styles from "./dataShowing.module.css";
const DataShowing = (props) => {
  const ClickingBuy = (event) => {
    console.log(event);
    console.log(`${props.data} is added to cart`);
  };
  return (
    <ul className="list-group">
      <li className="list-group-item">
        {props.data}
        <button
          className={`${styles.buyButton} btn btn-info`}
          onClick={(event) => ClickingBuy(event)}
        >
          buy
        </button>
      </li>
    </ul>
  );
};
export default DataShowing;
