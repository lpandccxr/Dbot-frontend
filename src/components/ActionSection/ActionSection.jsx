import React from 'react';
import "./ActionSection.scss";
import notification from "./../../assets/cta-section-img.png";

const ActionSection = () => {
  return (
    <>
    <section className="Action">
    <div className="Action__content">
        <p className="Action__info">
         Add <b>Able bot</b> to your discord
         and get conversating.
        </p>
        <button className="Action__button"> Add to discord</button>
    </div>
    <div className='Action__notification'>
      <img src={notification} alt="comment" className="Action__img" />
    </div>
    <button className="Action__button Action__button_mobile"> Add to discord</button>
    </section>
    </>
  )
}

export default ActionSection
