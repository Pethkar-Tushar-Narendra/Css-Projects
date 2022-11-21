import React, { useState } from 'react';
import './style.css';
import img from '../../images/gifts.png';
const GiftPopup = () => {
  const [modal, setModal] = useState(true);
  const toggle = () => {
    setModal(!modal);
  };
  return (
    <>
      <button onClick={toggle}>click</button>
      <div
        className="container"
        style={modal ? { display: 'flex' } : { display: 'none' }}
      >
        <div className="card">
          <div className="close" onClick={toggle}></div>
          <div className="col1">
            <img src={img} />
          </div>
          <div className="col2"></div>
        </div>
      </div>
    </>
  );
};

export default GiftPopup;
