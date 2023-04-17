import Head from "./components/head";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useSelector } from "react-redux";
import Typography from '@mui/material/Typography'

const App = () => {
  // @ts-ignore
  const { mymood } = useSelector((state) => state.counter);

  const darkTheme = createTheme({
    palette: {
      mode: mymood,
    },
  });

  // mongoose


  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />

 
      <div>
        <Head />
      <Typography variant="h1" color="error" sx={{textAlign:"center", mt:10}}> My name is Khan </Typography>  


      </div>



    </ThemeProvider>
  );
};

export default App;
