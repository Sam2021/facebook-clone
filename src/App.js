import React, { Fragment } from "react";
import Sidebar from "./components/Main/Sidebar";
import "./App.css";
import Header from "./components/Main/Header";
import Feed from "./components/Home/Feed";
import Widgets from "./components/Home/Widgets";
import Login from "./components/Main/Login";
import { useStateValue } from "./components/Other/StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();
  return (
    //BEM naming convention
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <Fragment>
          <Header />
          <div className="app__body">
            <Sidebar />
            <Feed />
            <Widgets />
          </div>
        </Fragment>
      )}
    </div>
  );
}

export default App;
