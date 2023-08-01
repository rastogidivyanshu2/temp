import React from "react";
import Text from "./Text"
import Item from "./item";
import YourComponent from "./YourComponent";
import Form from "./Form";
import "./Home.css";
import { useState } from "react";

const content = [
  [
    "React is extremely popular",
    "It makes building complex, interactive UIs a breeze",
    "It's powerful & flexible",
    "It has a very active and versatile ecosystem"
  ],
  [
    "Components, JSX & Props",
    "State",
    "Hooks (e.g., useEffect())",
    "Dynamic rendering"
  ],
  [
    "Official web page (react.dev)",
    "Next.js (Fullstack framework)",
    "React Native (build native mobile apps with React)"
  ]
];

const Home = () => {

  const [activeContentIndex, setActiveContentIndex] = useState(0);



  return (
    <div className="home-container">
      <h1 style={{ color: "white" }}>Have any Query?</h1>
      <Form></Form>
      <h1 style={{ color: "white" , marginTop:"2rem" }}>FAQs</h1>
      {/* <Text></Text> */}


      <YourComponent></YourComponent>




{/* 
      <div id="tabs">
        <menu style={{display:'flex' , flexDirection:'column' }}>
          <button
            className={activeContentIndex === 0 ? "active" : ""}
            onClick={() => setActiveContentIndex(0)}
          >
            Why React?
          </button>
          <button
            className={activeContentIndex === 1 ? "active" : ""}
            onClick={() => setActiveContentIndex(1)}
          >
            Core Features
          </button>
          <button
            className={activeContentIndex === 2 ? "active" : ""}
            onClick={() => setActiveContentIndex(2)}
          >
            Related Resources
          </button>
        </menu>
        <div id="tab-content">
          <ul>
            {content[activeContentIndex].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div> */}






    </div>
  );
};

export default Home;
