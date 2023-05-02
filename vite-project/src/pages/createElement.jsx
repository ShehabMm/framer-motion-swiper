import { Button } from "@mui/material";
import Axios from "axios";
import { useEffect, useState } from "react";
import "./createElemnt.css";



const CreateElement = () => {
  const [title, settitle] = useState("");
  const [summary, setsummary] = useState("");
  const [body, setbody] = useState("");
  const [newName, setnewName] = useState("");



  const [list, setlist] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:5000/api").then((res) => {
      res.data;
      console.log(res.data);
      setlist(res.data);
    });
  }, []);

  const update = (id) => {

    Axios.put("http://localhost:5000/lolo/up", { id: id, newName:newName })
  }







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

        }} value={title} placeholder="title" type="text" required />

        <label htmlFor="">Article Summary:</label>
        <input onChange={(eo) => {
          setsummary(eo.target.value)
        }} value={summary} placeholder="summary" name="summary" type="text" required />

        <label htmlFor="">Article Body</label>
        <textarea onChange={(eo) => {
          setbody(eo.target.value)
        }} value={body} placeholder="body" name="body" ></textarea>
        <button onClick={createNew}>Create</button>



        <input onChange={(eo) => {
setnewName(eo.target.value)
          eo.target.value

        }} style={{ marginTop: "50px" }} placeholder="Update data" type="text" />

{list.map((item, i) => {
  

return (             <Button variant="contained" onClick={() => {
  update(item._id)
}}>Update</Button>
)


})}

      </form>
    </div>
  );
};

export default CreateElement;
