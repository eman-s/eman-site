import React, { FunctionComponent } from "react";
import sprite from "./player_walk.png";

interface PlayerProps {
  position: [];
}

const Player: FunctionComponent<PlayerProps> = ({ position }) => {
  return (
    <div
      style={{
        position: "relative",
        top: position[1],
        left: position[0],
        backgroundImage: `url('${sprite}')`,
        backgroundPosition: "0 0",
        width: "40px",
        height: "40px",
      }}
    />
  );
};

export default Player;
