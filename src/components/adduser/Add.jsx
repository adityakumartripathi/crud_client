import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import "./add.css";
const Add = () => {
  const users = {
    fname: "",
    lname: "",
    email: "",
    password: "",
  };

  const [user, setUser] = useState(users);
  const navigate = useNavigate();

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    console.log(user);
  };

  const submitForm = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:8000/api/create", user)
      .then((response) => {
        toast.success(response.data.msg, { position: "top-right" });
        navigate("/");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="addUser">
      <Link to={"/"}>Back</Link>
      <h3>Add new user</h3>

      <form className="addUserForm" onSubmit={submitForm}>
        <div className=" inputGroup">
          <label htmlFor="fname">First name </label>
          <input
            type="text"
            onChange={inputHandler}
            id="fname"
            name="fname"
            autoComplete="off"
            placeholder="first name"
          />
        </div>

        <div className=" inputGroup">
          <label htmlFor="lname">Last name </label>
          <input
            type="text"
            onChange={inputHandler}
            id="lname"
            name="lname"
            autoComplete="off"
            placeholder="Last name"
          />
        </div>

        <div className=" inputGroup">
          <label htmlFor="fname">Email </label>
          <input
            type="text"
            onChange={inputHandler}
            id="email"
            name="email"
            autoComplete="off"
            placeholder="first name"
          />
        </div>

        <div className=" inputGroup">
          <label htmlFor="fname">passward </label>
          <input
            type="text"
            onChange={inputHandler}
            id="password"
            name="password"
            autoComplete="off"
            placeholder="first name"
          />
        </div>

        <div className=" inputGroup">
          <button type="submit">ADD USER</button>
        </div>
      </form>
    </div>
  );
};
export default Add;
