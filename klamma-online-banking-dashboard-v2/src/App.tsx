import React from "react";
import Sidebar from "./components/Sidebar";
import HomeScreen from "./screens/HomeScreen";
import { Container } from "./App.styles";

function App() {
  return (
    <Container className="App">
      <Sidebar></Sidebar>
      <HomeScreen></HomeScreen>
    </Container>
  );
}

export default App;
