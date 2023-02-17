import React, { useState } from "react";
import "../styles/App.css";

const App = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    gender: "male",
    phoneNumber: "",
    password: "",
    message: ""
  });
  function handleChange(el) {
    let name = el.target.name;
    let value = el.target.value;

    setInputs((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }

  function handleClick(el) {
    let name = inputs.name.trim();
    let email = inputs.email.trim();
    let gender = inputs.gender.trim();
    let phoneNumber = inputs.phoneNumber.trim();
    let password = inputs.password.trim();
    console.log(gender);

    if (
      name === "" ||
      email === "" ||
      gender === "" ||
      phoneNumber === "" ||
      password === ""
    ) {
      setInputs((prevValue) => {
        return {
          ...prevValue,
          message: "All fields are mandatory"
        };
      });
      return;
    }

    if (!/^[\w\-\s]+$/.test(name)) {
      //for alpha numeric name
      setInputs((prevValue) => {
        return {
          ...prevValue,
          message: "Name is not alphanumeric"
        };
      });
      return;
    }

    if (!email.includes("@")) {
      setInputs((prevValue) => {
        return {
          ...prevValue,
          message: "Email must contain @"
        };
      });
      return;
    }

    if (gender !== "male" && gender !== "female" && gender !== "others") {
      setInputs((prevValue) => {
        return {
          ...prevValue,
          message: "Please identify as male, female or others"
        };
      });
      return;
    }

    if (isNaN(phoneNumber)) {
      setInputs((prevValue) => {
        return {
          ...prevValue,
          message: "Phone Number must contain only numbers"
        };
      });
      return;
    }

    if (password.length < 6) {
      setInputs((prevValue) => {
        return {
          ...prevValue,
          message: "Password must contain atleast 6 letters"
        };
      });
      return;
    }

    let msg = inputs.email.split("@");
    msg = msg[0];
    setInputs((prevValue) => {
      return {
        ...prevValue,
        message: `Hello ${msg}`
      };
    });
  }

  return (
    <div id="main">
      <input
        type="text"
        name="name"
        onChange={handleChange}
        placeholder="Enter Name e.g. John Doe"
        data-testid="name"
        value={inputs.name}
      />
      <input
        type="email"
        name="email"
        onChange={handleChange}
        placeholder="Enter Email e.g.example@gmail.com"
        data-testid="email"
        value={inputs.email}
      />
      <input
        type="text"
        name="gender"
        onChange={handleChange}
        default="Male"
        placeholder="Enter Gender e.g. Male/Female/Others"
        data-testid="gender"
        value={inputs.gender}
      />
      <input
        type="text"
        name="phoneNumber"
        onChange={handleChange}
        placeholder="Enter Phone number"
        data-testid="phoneNumber"
        value={inputs.phoneNumber}
      />
      <input
        type="password"
        name="password"
        onChange={handleChange}
        placeholder="Enter Password"
        data-testid="password"
        value={inputs.password}
      />
      <button data-testid="submit" onClick={handleClick}>
        Submit
      </button>
      <div>{inputs.message}</div>
    </div>
  );
};

export default App;