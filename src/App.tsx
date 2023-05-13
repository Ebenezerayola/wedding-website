import React from "react";
import Header from "./Component/Header/Header";
import "./App.css";
import Landing from "./Component/Landing/Landing";
import { StoryTeller } from "./Component/Story/Story";
import { MoreInfomation } from './Component/MoreInfo/MoreInfo'

function App() {
  return (
    <>
      <Header />
      <Landing />
      <StoryTeller />
      <MoreInfomation />
    </>
  );
}

export default App;
