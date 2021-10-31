import React from "react";
import { useHistory } from "react-router-dom";
import { useState } from "react";

import arr from "../assets/data/navigation.json";

const NavBar = () => {
  const [state, setstate] = useState("");
  const history = useHistory();

  const handleClick = (e) => {
    setstate(e);
    console.log(e);
  };

  return (
    <ul className="navbar">
      {arr.map((e) => {
        return (
          <li
            key={e.name}
            onClick={() => {
              history.push(e.url);
              handleClick(e);
            }}
            className={state === e ? "route_btn_color" : "route_btn"}
          >
            {e.name}
          </li>
        );
      })}
    </ul>
  );
};

export default NavBar;
