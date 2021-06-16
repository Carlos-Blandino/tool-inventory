import React from "react";
import "../../sass/directory-item.style.scss";

const DirectoryItem = ({ image, title, size }) => (
  <div className={`${size} directory-item`}>
    <div
      style={{ backgroundImage: `url(${image})` }}
      className="background-image"
    />
    <div className="content">
      <h1 className="title">{title}</h1>
      <span className="subtitle">GET IT NOW</span>
    </div>
  </div>
);

export default DirectoryItem;
