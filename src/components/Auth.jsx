import React from "react";
import {useSelector, useDispatch} from "react-redux";
import { toggleAuth } from "../actions/bankingActions";

export default function Auth() {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleAuth = () =>{
    dispatch(toggleAuth())
  }

  return (
    <div>
      <button onClick={handleAuth} className="btn btn-info">
        {auth.isLoggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
}

