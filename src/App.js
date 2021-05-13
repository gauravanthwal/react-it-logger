import "./App.css";
import React, { Fragment, useEffect } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";

import SearchBar from "./components/layouts/SearchBar";
import Loggs from "./components/loggs/Loggs";
import AddBtn from "./components/layouts/AddBtn";
import AddLog from "./components/loggs/AddLog";
import EditLog from "./components/loggs/EditLog";
import AddTechModal from "./components/techs/AddTechModal";
import TechListModal from "./components/techs/TechListModal";

import { Provider } from "react-redux";
import store from "./store";

const App = () => {
  useEffect(() => {
    // Init materilize
    M.AutoInit();
  });
  return (
    <Provider store={store}>
      <Fragment>
        <SearchBar />
        <div className="container">
          <AddBtn />
          <AddLog />
          <EditLog />
          <AddTechModal />
          <TechListModal />
          <Loggs />
        </div>
      </Fragment>
    </Provider>
  );
};

export default App;
