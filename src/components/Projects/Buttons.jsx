import React from "react";
import Data from "./Data";

const Buttons = ({ filterItem, setItem, menuItems }) => {
  return (
    <>
      <div className="work__filters">
        {menuItems.map((Val, id) => {
          return (
            <button
              className="work__item"
              onClick={() => filterItem(Val)}
              key={id}
            >
              {Val}
            </button>
          );
        })}

        <button
          className="work__item"
          onClick={() => setItem(Data)}
        >
          All
        </button>

      </div>
    </>
  );
};

export default Buttons;
