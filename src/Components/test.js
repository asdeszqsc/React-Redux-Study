import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch, useSelector } from "react-redux";
import { GetUser } from "src/_Actions/user_action";

function Test() {
  const users = useSelector((state) => state.user.users) || [];
  const dispatch = useDispatch();

  const getUserData = async () => {
    await dispatch(GetUser());
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <div>
      {users.map((item) => (
        <div key={item._id}>{item.name}</div>
      ))}
    </div>
  );
}
export default withRouter(Test);
