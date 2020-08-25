import React, { useState } from "react";

const Accordion = ({ items }) => {
  // here basically we are using array destructuring to use the function useState()
  const [activeIndex, setActiveIndex] = useState(null); // this function creates a state named activeIndex and set it using the function setActiveIndex function
  const onTitleClick = (index) => {
    setActiveIndex(index); // after setting this function whole component will re-renders
  };
  const renderedItems = items.map((item, index) => {
    const active = index === activeIndex ? "active" : "";
    return (
      <React.Fragment key={item.title}>
        <div className={`title ${active}`} onClick={() => onTitleClick(index)}>
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className={`content ${active}`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  }); // adding the React fragment will not add any additional item and won't affect the semantic ui styling
  // it does not add any nodes to the dom and but combines all the children's.
  return <div className="ui styled accordion">{renderedItems} </div>;
};

export default Accordion;
