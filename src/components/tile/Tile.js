import React from "react";

export const Tile = ({name, description}) => {
  return (
    <div className="tile-container">
      <p className='tile-title'>{name}</p>
      {description.map(
        (thing, index) => {
            return <p className='tile' key={index} >{thing}</p>

        }
      )}
    </div>
  );
};
