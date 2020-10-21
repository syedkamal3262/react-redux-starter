import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUser, selectUser } from "./UserSlice";
const User = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const [state, setstate] = useState("");
  return (
    <div>
      <div className="test_form">
        <label htmlFor="username">Input username</label>
        <br />
        <input
          type="text"
          value={state}
          id="username"
          onChange={(e) => setstate(e.target.value)}
        ></input>
        <button onClick={() => dispatch(setUser(state))}>getUser</button>
      </div>
      <h1 style={{ margin: "0px", height: "50px", color: "#785CBC" }}>
        usename is {user}
      </h1>
    </div>
  );
};

export default User;
