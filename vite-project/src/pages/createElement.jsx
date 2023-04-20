import React from "react";
import "./createElemnt.css";



const CreateElement = () => {
  return (
    <div>
      <form action="">
        <label htmlFor="">Article Title:</label>
        <input type="text" required />

        <label htmlFor="">Article Summary:</label>
        <input type="text" required />

        <label htmlFor="">Article Body</label>
<textarea  ></textarea>
        <button>Create</button>
      </form>
    </div>
  );
};

export default CreateElement;
