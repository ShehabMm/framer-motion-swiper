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

      settitle("")
      setsummary("")
      setbody("")
    })
  }


  return (
    <div className="containerForm">
      <form action="/Worxmart" method="POST">
        <label htmlFor="">Article Title:</label>
        <input onChange={(eo) => {

          settitle(eo.target.value)

        }}  value={title}  placeholder="title" type="text" required />

        <label htmlFor="">Article Summary:</label>
        <input onChange={(eo) => {
          setsummary(eo.target.value)
        }}  value={summary}  placeholder="summary" name="summary" type="text" required />

        <label htmlFor="">Article Body</label>
        <textarea onChange={(eo) => {
          setbody(eo.target.value)
        }}  value={body}          placeholder="body" name="body" ></textarea>
        <button onClick={createNew}>Create</button>
      </form>
    </div>
  );
};

export default CreateElement;
