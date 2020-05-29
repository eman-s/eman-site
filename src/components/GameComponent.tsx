import React, { FunctionComponent } from "react";
import { Provider } from "react-redux";
import store from "../config/root-reducer";
import Game from "./Game";
import { Store } from "redux";

interface GameProps {
  store: Store;
}

const GameComponent: React.FC = (GameProps) => {
  return (
    <div
      style={{
        margin: "20px auto",
        position: "relative",
      }}
    >
      <Game />
    </div>
  );
};

export default GameComponent;
