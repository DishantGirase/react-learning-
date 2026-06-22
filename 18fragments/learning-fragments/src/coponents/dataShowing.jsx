import styles from "./dataShowing.module.css";
const DataShowing = (props) => {
  return (
    <ul className="list-group">
      <li className="list-group-item">
        {props.data}
        <button
          className={`${styles.buyButton} btn btn-info`}
          onClick={(event) => props.handleData(props.data)}
        >
          buy
        </button>
      </li>
    </ul>
  );
};
export default DataShowing;
