import styles from "./inputItems.module.css";
const InputItems = () => {
  const handleChangeEvent = (event) => {
    console.log(event.target.value);
  };
  return (
    <>
      <input
        type="text"
        placeholder="enter your items here"
        className={styles.inputSection}
        onChange={handleChangeEvent}
      />
    </>
  );
};

export default InputItems;
