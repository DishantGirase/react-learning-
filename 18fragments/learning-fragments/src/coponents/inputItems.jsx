import styles from "./inputItems.module.css";
const InputItems = ({ handleOnChangeOnUserEnter, handleAdd }) => {
  const handleChangeEvent = (event) => {
    console.log(event.target.value);
  };
  return (
    <>
      <input
        type="text"
        placeholder="enter your items here"
        className={styles.inputSection}
        onChange={(event) => {
          handleChangeEvent(event);
          handleOnChangeOnUserEnter(event);
        }}
      />
      <button onClick={handleAdd}>add</button>
    </>
  );
};

export default InputItems;
