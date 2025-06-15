import React, { useState } from "react";
import WorldMap from "react-world-map";

function WorldMapComponent() {
  const [selected, onSelect] = useState(null);

  return (
    <div className="opacity-20 flex flex-col items-center justify-center h-dvh ">


      <div className=" scale-250">
        <WorldMap selected={selected} onSelect={onSelect} />
      </div>
    </div>
  );
}

export default WorldMapComponent;
