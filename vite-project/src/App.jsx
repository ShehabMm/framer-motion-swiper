import "./App.css";
import { useState } from "react";
import Number2 from "./pages/number2";
import Head from "./pages/components/head";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
function App() {
  const [name, setname] = useState("aloo");

  // @ts-ignore
  const { themes } = useSelector((state) => state.counter)
  return (
    <div className={`App ${themes} `}>
      <Head />
      <Number2 />
      <p>
        gfgfgfgfggfgfgfg fffffffffffffffffffffffffffffffffffffffffffff my name
        is {name}
      </p>
      <button
        onClick={() => {
          {
            name === "aloo" ? setname("habibi") : setname("aloo");
            console.log(themes)

          }
        }}
      >
        change name
      </button>


      <div className="swiper">

        <motion.div className="container">


          <motion.div className="inner">



          </motion.div>
        </motion.div>

      </div>
    </div>
  );
}

export default App;
