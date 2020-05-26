import { FunctionComponent } from "react";
import Map from "../map";
import Player from "../player";

const World: FunctionComponent = () => {
  return (
    <div
      style={{
        width: "800px",
        height: "400px",
      }}
    >
      <Map />
      <Player />
    </div>
  );
};

export default World;
