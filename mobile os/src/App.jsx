import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const os = ["Androied", "Blackberry", "iphone", "Windows phone"];
  const brands = [
    { name: "Samsung", type: "square" },
    { name: "HTC", type: "square" },
    { name: "Micromax", type: "disc" },
    { name: "Apple", type: "circle" },
  ];
  const Heading = ({ props }) => {
    return <h1>{props}</h1>;
  };
  const List = ({ list,type }) => {
    return (
      <ul>
        <li className={type}>{list}</li>
      </ul>
    );
  };
  return (
    <div className="App">
      <Heading props={"Mobile operating sysytem"} />
      {os.map((e) => {
        return <List list={e} />;
      })}
      <Heading props={"Mobile Manufactures"} />
      {brands.map((e)=>{
        return  <List list={e.name} type={e.type}/>
       
      })}
    </div>
  );
}

export default App;
