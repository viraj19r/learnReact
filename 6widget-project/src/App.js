import React from "react";
import Accordion from "./components/Accordion";
export default () => {
  const items = [
    {
      title: "what is react ?",
      content: "React is a frontend javascript framework",
    },
    {
      title: "why use react ?",
      content: "React is favorite JS library among engineers",
    },
    {
      title: "How do we use react ?",
      content: "we use react by creating components.",
    },
  ];
  return (
    <div>
      <Accordion items={items}/>
    </div>
  );
};
