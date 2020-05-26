import React, { FunctionComponent } from "react";
import { Provider } from "react-redux";
import store from "../config/store";
import Game from "./Game";

const GameComponent: FunctionComponent = () => {
  return (
    <Provider store={store}>
      <div
        style={{
          margin: "20px auto",
          position: "relative",
        }}
      >
        <Game />
      </div>
    </Provider>
  );
};

export default GameComponent;
