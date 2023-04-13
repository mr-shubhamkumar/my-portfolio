import React from "react";

const Card = ({ item }) => {
  return (
    <>
      <div className="work__container container grid">
        {item.map((Val) => {
          return (
            <div  className="work__card" key={Val.id}>
              <img
                src={Val.img}
                className="work__img"
                width="100px"
                height="150px"
              />
              <h3 className="work__title">{Val.title}</h3>
              <p style={{width:'300px',marginBottom:'10px',marginTop:'10px',}}>
              {Val.desc}
              </p>
              <a href={Val.github} target="_blank" className="work__button">
                <i className="fa-brands fa-github"></i>
                GitHub
                <i className="bx bx-right-arrow-alt"></i>
              </a>
              <a href={Val.link} target="_blank" className="work__button">
                <i className="fa-solid fa-earth-americas"></i>
                Live Demo <i className="bx bx-right-arrow-alt"></i>
              </a>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Card;
