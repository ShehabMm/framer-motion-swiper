import "./App.css";
import { useEffect, useRef, useState } from "react";
import Number2 from "./pages/number2";
import Head from "./pages/components/head";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

const arr = ['https://res.cloudinary.com/dvytkrzaq/image/upload/v1679635329/online%20store/black-bowler-hat-on-white-background-vector_n7f2ah.jpg', 'https://res.cloudinary.com/dvytkrzaq/image/upload/v1679635329/online%20store/black-bowler-hat-on-white-background-vector_n7f2ah.jpg','https://res.cloudinary.com/dvytkrzaq/image/upload/v1679635328/online%20store/800px_COLOURBOX8072182_de1amq.jpg', 'https://res.cloudinary.com/dvytkrzaq/image/upload/v1679635328/online%20store/istockphoto-1152609532-170667a_wnxcc7.jpg', 'https://res.cloudinary.com/dvytkrzaq/image/upload/v1679635328/online%20store/istockphoto-1152609532-170667a_wnxcc7.jpg']






function App() {
  const [m, setm] = useState(0);
  useEffect(() => {
    setm (n.current.scrollWidth - n.current.offsetWidth)
  }, []);
  const n = useRef(null)

  
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

        <motion.div ref={n} className="container">


          <motion.div drag="x" dragConstraints={{ right: 0, left: -m }} className="inner">

            {arr.map((item) => {
              return (


                <motion.div className="image-container">
                  <img src={item} alt="" />
                </motion.div >

              )

            })}

          </motion.div>

        </motion.div>

      </div>
    </div>
  );
}

export default App;
