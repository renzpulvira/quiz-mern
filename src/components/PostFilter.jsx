import React, { useState } from "react";

export default function PostFilter() {
  const [filterData, setFilterData] = useState([
    "gameofthrones",
    "starwars",
    "deadcells",
    "computers",
    "bitcoin",
  ]);

  return (
    <div className="filters">
      {filterData.forEach((x) => {
        return <div>{filterData[x]}</div>;
      })}
    </div>
  );
}
