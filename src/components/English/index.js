import React from "react";
import "./English.scss";
//import { crazyEnglish1 } from "../../assets/img/English/crazyEnglish1.png";
import crazyEnglish1 from "../../assets/img/English/crazyEnglish1.png";
import crazyEnglish2 from "../../assets/img/English/crazyEnglish2.png";

const images = [crazyEnglish1, crazyEnglish2];

const English = () => {
  return (
    <div className="english__container">
      <div className="content">
        {images &&
          images.length > 0 &&
          images.map((item, index) => (
            <div className="image__group" key={index}>
              <img className="image__item" src={item} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default English;
