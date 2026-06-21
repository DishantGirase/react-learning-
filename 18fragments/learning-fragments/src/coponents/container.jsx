import style from "./container.module.css";
const Container = (props) => {
  return <div className={style.containerCss}>{props.children}</div>;
};
export default Container;
