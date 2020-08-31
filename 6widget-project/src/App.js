import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
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

const options = [
  {
    label: "The Color Red",
    value: "red",
  },
  {
    label: "The Color Blue",
    value: "blue",
  },
  {
    label: "The Color Green",
    value: "green",
  },
];
export default () => {


  return (
    <div>
 <Translate /> 
    </div>
  );
};
