import React from "react";
import "./directory-item.style.scss";

const DirectoryItem = ({ image, title, size }) => (
  <div
    style={{ backgroundImage: `url(${image})` }}
    className={`${size} directory-item`}
  >
    <div className="content">
      <h1 className="title">{title}</h1>
      <span className="subtitle">GET IT NOW</span>
    </div>
  </div>
);

export default DirectoryItem;
