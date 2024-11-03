import React from "react";
import { Tile } from '../tile/Tile';

export const TileList = ( {arrayOfData}
 ) => {
  return (
    <div>
      {arrayOfData.map((object, index) => {
        // Create a description array from all properties except 'name'
        const description = Object.entries(object)
          .filter(([key]) => key !== 'name')
          .map(([key, value]) => {
                  if (key === 'contact') {
                    return `${key}: ${value.name}`
                  } else {
                    return  `${key}: ${value}`
                  }
                 
          });

        return <Tile key={index} name={object.name} description={description} />;
      })}
    </div>
  );
};
