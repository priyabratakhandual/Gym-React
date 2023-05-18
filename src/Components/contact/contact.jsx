import React, { useRef } from 'react';
import "./contact.css";
import axios from "axios";
import { useState } from "react";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: String,
    age:Number,
    gender: String,
    address: String,
    email: String,
  })
  

  const changeHandler = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };
  
  const handleSubmit = (e) => {
   
    e.preventDefault();
    console.log(formState);
    axios
      .post("http://localhost:5000/contact", formState)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
 
  };
  

  const { name, age, gender, address, email} = formState;
  
  return (
    <section id="contact">
      <div className="container3">
        <h2 id="muss"> Contact Us</h2>
        <div className="container4">
          <form
            method="post"
            onSubmit={handleSubmit}
          >
            <div className="item">
              <input
                className="input"
                type="text"
                value={name}
                name="name"
                onChange={changeHandler}
                placeholder="Name"
                required
              />
            </div>

            <div className="item">
              <input
                className="input"
                type="number"
                value={age}
                name="age"
                onChange={changeHandler}
                placeholder="Age"
                required
              />
            </div>
            <div className="item">
              <input
                className="input"
                type="text"
                value={email}
                name="email"
                onChange={changeHandler}
                placeholder="email"
                required
              />
            </div>
            <div className="item">
              <input
                className="input"
                type="text"
                value={gender}
                name="gender"
                onChange={changeHandler}
                placeholder="Gender"
                required
              />
            </div>
            <textarea
              className="input"
              type="text"
              value={address}
              name="address"
              onChange={changeHandler}
              cols="30"
              rows="6"
              placeholder="Address"
              required
            ></textarea>

            <button type="submit" className="btn btn-success">
              Submit
            </button>
            {/* <input type="submit" value="send" /> */}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

//Japneet Rina
//23
//male
//Z-456 sector-14 , noida , up-201301
//I am a good power lifter
