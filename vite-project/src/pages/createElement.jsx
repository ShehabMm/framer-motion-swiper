import Axios from "axios";
import React, { useEffect, useState } from "react";
import "./createElemnt.css";



const CreateElement = () => {




  return (
    <div>
      <form action="/Worxmart" method="POST">
        <label htmlFor="">Article Title:</label>
        <input name="name" type="text" required />

        <label htmlFor="">Article Summary:</label>
        <input name="type" type="text" required />

        <label htmlFor="">Article Body</label>
        <textarea name="price" ></textarea>
        <button onClick={(eo) => {
          eo.preventDefault()
        }}>Create</button>
      </form>
    </div>
  );
};

export default CreateElement;
