import React from "react";
import LoginContainer from "./Login/Components/LoginContainer";
import { Provider } from "react-redux";
import store from "./Store";

function App() {
  return (
    <Provider store={store}>
        <LoginContainer />
    </Provider>
  );
}

export default App;
