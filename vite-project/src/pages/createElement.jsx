import Axios from "axios";
import { useState } from "react";
import "./createElemnt.css";



const CreateElement = () => {
  const [title, settitle] = useState("");
  const [summary, setsummary] = useState("");
  const [body, setbody] = useState("");


  const createNew = (eo) => {
    eo.preventDefault()
    Axios.post("  http://localhost:5000/lolo", { title, summary, body, }).then((result) => {
      alert("user created")

      
    })
  }


  return (
    <div>
      <form action="/Worxmart" method="POST">
        <label htmlFor="">Article Title:</label>
        <input onChange={(eo) => {

          settitle(eo.target.value)

        }} placeholder="title" type="text" required />

        <label htmlFor="">Article Summary:</label>
        <input onChange={(eo) => {
          setsummary(eo.target.value)
        }} placeholder="summary" name="summary" type="text" required />

        <label htmlFor="">Article Body</label>
        <textarea onChange={(eo) => {
          setbody(eo.target.value)
        }} placeholder="body" name="body" ></textarea>
        <button onClick={createNew}>Create</button>
      </form>
    </div>
  );
};

export default CreateElement;
