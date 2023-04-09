import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useTheme } from '@mui/material/styles';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { changeDisplay, increment } from '../Redux/counterSlice';
import DrawerOne from './drawer';

const Head = () => {

  // @ts-ignore
  const { mymood } = useSelector((state) => state.counter)
  const dispatch = useDispatch()
  const theme = useTheme();
  // @ts-ignore
  const { display } = useSelector((state) => state.counter);

  return (
    <>

      <Box sx={{ display: "flex", padding: "0, 50px", }}>











        <AppBar position="static">


          <Toolbar sx={{}}>

            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}

              onClick={() => {
                dispatch(changeDisplay("none"))

              }}
            >

              <MenuIcon sx={{ display: { md: "none" } }}
              />
            </IconButton>

            <Typography variant="h6" component="div" sx={{ flexGrow: 5, ml: 3 }}>
              News

              <IconButton color="inherit" sx={{}} onClick={() => {

                localStorage.setItem("currenMode", theme.palette.mode === "dark" ? "light" : "dark")
                dispatch(increment(theme.palette.mode === "dark" ? "light" : "dark"))

              }}  >
                {theme.palette.mode === 'dark' ? <Brightness7Icon sx={{ color: "orange" }} /> : <Brightness4Icon />}
              </IconButton>

            </Typography>



            <Typography variant="h6" component="div" sx={{ mr: 8, display: { xs: "none", md: "block" } }}>
              About
            </Typography>
            <Typography variant="h6" component="div" sx={{ flexGrow: 0.2, display: { xs: "none", md: "block" } }}>
              Profile
            </Typography>

            <Button sx={{ ml: 4, display: { xs: "none", md: "block" } }} color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
        <DrawerOne />
      </Box>


    </>
  );
}

export default Head;
