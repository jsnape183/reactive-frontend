import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store/configureStore";
import Editor from "./pages/Editor/Editor";

function App() {
  return (
    <Provider store={store}>
      <Editor />
    </Provider>
  );
}

export default App;
