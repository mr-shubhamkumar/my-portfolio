import React, { useState } from "react";
import Data from "./Data";
import Card from "./Card";
import './project.css'
import Buttons from "./Buttons";

const App = () => {
  const [item, setItem] = useState(Data);

  const menuItems = [...new Set(Data.map((Val) => Val.category))];

  const filterItem = (curcat) => {
    const newItem = Data.filter((newVal) => {
      return newVal.category === curcat;
    });
    setItem(newItem);
  };
  return (
    <>
      <div className="work section" id='project'>
        <h2 className='section__title'>My Projects</h2>
        <span className='section__subtitle'>More Recents</span>
          <Buttons
            filterItem={filterItem}
            setItem={setItem}
            menuItems={menuItems}
          />
        <div className="work__filters">

          <Card item={item} />
        </div>
      </div>
    </>
  );
};

export default App;
