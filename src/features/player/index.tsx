import React, { FunctionComponent } from "react";
import sprite from "./player_walk.png";
import { connect } from "react-redux";
import handleMovement from "./movement";

const Player: FunctionComponent = () => {
  const position = [0, 0];
  return (
    <div
      style={{
        position: "absolute",
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

const mapStateToProps = (state: any) => {
  return {
    ...state.player,
  };
};

export default connect(mapStateToProps)(handleMovement(Player));
