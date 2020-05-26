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
        backgroundImage: `url("${sprite}")`,
      }}
    />
  );
};

export default Player;
