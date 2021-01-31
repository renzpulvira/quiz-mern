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
      <span>Filters: </span>
      <ul>
        {filterData.map((x) => (
          <li>#{x}</li>
        ))}
      </ul>
    </div>
  );
}
