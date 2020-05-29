import store from "../../config/root-reducer";
import { SPRITE_SIZE } from "../../config/constants";

const handleMovement = (player: any) => {
  const getNewPosition = (direction: string) => {
    const oldPos = store.getState().player.position;
    switch (direction) {
      case "WEST":
        return [oldPos[0] - SPRITE_SIZE, oldPos[1]];
      case "NORTH":
        return [oldPos[0], oldPos[1] + SPRITE_SIZE];
      case "EAST":
        return [oldPos[0] + SPRITE_SIZE, oldPos[1]];
      case "SOUTH":
        return [oldPos[0], oldPos[1] - SPRITE_SIZE];
    }
  };

  const dispatchMove = (direction: string) => {
    store.dispatch({
      type: "MOVE_PLAYER",
      payload: {
        position: getNewPosition(direction),
      },
    });
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    e.preventDefault();
    switch (e.keyCode) {
      case 37:
        return dispatchMove("WEST");
      case 38:
        return dispatchMove("NORTH");
      case 39:
        return dispatchMove("EAST");
      case 40:
        return dispatchMove("SOUTH");
      default:
        console.log(e.keyCode);
    }
  };

  // window.addEventListener("keydown", (e) => {
  //   handleKeyDown(e);
  // });

  window.addEventListener("keydown", ((e: KeyboardEvent) => {
    handleKeyDown(e);
  }) as EventListener);

  return player;
};

export default handleMovement;
