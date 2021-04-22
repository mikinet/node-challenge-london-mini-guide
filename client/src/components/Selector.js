import { label, select } from "./controls";

const Selector = ({ onChangeHandler }) => {
  return (
    <div className="selector">
      <label htmlFor={label.for}>{label.text}</label>
      <select
        id={select.id}
        onChange={(event) => { onChangeHandler(event.target.value) }}
      >
        {select.options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.text}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Selector;
