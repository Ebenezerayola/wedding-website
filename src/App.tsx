import React from "react";
import Header from "./Component/Header/Header";
import "./App.css";
import Landing from "./Component/Landing/Landing";
import { StoryTeller } from "./Component/Story/Story";
import { MoreInfomation } from './Component/MoreInfo/MoreInfo';
import PhotoDisplay from "./Component/Photo/Photo";
import Footer from "./Component/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Landing />
      <StoryTeller />
      <MoreInfomation />
      <PhotoDisplay />
      <Footer />
    </>
  );
}

export default App;
