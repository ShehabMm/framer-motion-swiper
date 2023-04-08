import Head from './components/head';
import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useSelector } from 'react-redux';



const App = () => {
  const {mymood} = useSelector((state) => state.counter)

  const darkTheme = createTheme({
    palette: {
      mode: mymood,
    },
  });
  
  return (
    <ThemeProvider theme={darkTheme}>
<CssBaseline />
    <div>
      <Head/>


      fff
    </div>
    </ThemeProvider>
  );
}

export default App;
