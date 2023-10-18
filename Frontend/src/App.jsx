import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { useRoutes } from "react-router-dom";
import routes from "./routes";
import "./App.css";

function App() {
  const router = useRoutes(routes);
  return <div>{router}</div>;
}

export default App;
