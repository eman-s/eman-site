import React, { FunctionComponent } from "react";
import { Provider } from "react-redux";
import store from "../config/store";
import Player from "../features/player";

interface GameProps {
  playerPosition: [];
}

const Game: FunctionComponent<GameProps> = ({ playerPosition }) => {
  return <Player position={playerPosition} />;
};

export default Game;
