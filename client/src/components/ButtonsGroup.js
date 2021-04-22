import { buttons } from "./controls";

const ButtonsGroup = ({ onClickHandler }) => {  
  const returnElementId = (event) => {
    event.preventDefault();
    [...document.querySelectorAll("button")].forEach(button=>button.className="")
    document.querySelector(`#${event.target.id}`).className = "selected";
    onClickHandler(event.target.id);
  };

  return (
    <div className="buttons-group">
      {buttons.map((item, index) => (
        <button
          key={index}
          id={item.id}
          onClick={returnElementId}
        >
          {item.caption}
        </button>
      ))}
    </div>
  );
};

export default ButtonsGroup;
