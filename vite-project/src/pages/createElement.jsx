import React from "react";
import "./createElemnt.css";



const CreateElement = () => {
  return (
    <div>
      <form action="/createElement" method="POST">
        <label htmlFor="">Article Title:</label>
        <input name="title" type="text" required />

        <label htmlFor="">Article Summary:</label>
        <input name="detail" type="text" required />

        <label htmlFor="">Article Body</label>
<textarea name="body" ></textarea>
        <button>Create</button>
      </form>
    </div>
  );
};

export default CreateElement;
