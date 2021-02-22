import React, { useState, createContext } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./views/index.jsx";
import "./public/stylesheets/main.css";

export const UserContext = createContext();

const Root = () => {
  const [user, setUser] = useState({});

  return (
    <Router>
      <UserContext.Provider value={{ user, setUser }}>
        <App />
      </UserContext.Provider>
    </Router>
  );
};

export default render(<Root />, document.getElementById("root"));
