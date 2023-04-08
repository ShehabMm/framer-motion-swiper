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
import { increment } from '../Redux/counterSlice';

const Head = () => {

  // @ts-ignore
  const { mymood } = useSelector((state) => state.counter)
  const dispatch = useDispatch()
  const theme = useTheme();

  return (


    <Box sx={{ flexGrow: 1 }}>











      <AppBar position="static">
        <Toolbar>

          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon sx={{ display: { md: "none" } }} />
          </IconButton>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>


          <IconButton color="inherit" sx={{ flexGrow: 4 }} onClick={() => {


            dispatch(increment(theme.palette.mode === "dark" ? "light" : "dark"))

          }}  >
            {theme.palette.mode === 'dark' ? <Brightness7Icon sx={{ color: "orange" }} /> : <Brightness4Icon />}
          </IconButton>

          <Typography variant="h6" component="div" sx={{ flexGrow: 0.2 }}>
            About
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 0.2 }}>
            Profile
          </Typography>

          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>


  );
}

export default Head;
