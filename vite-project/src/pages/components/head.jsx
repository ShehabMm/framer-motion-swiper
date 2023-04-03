import React from 'react';
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useTheme } from '@mui/material/styles';
import { Box, IconButton } from "@mui/material";
import { useSelector, useDispatch } from 'react-redux'
import { increment } from '../../Redux/counterSlice'



const ColorModeContext = React.createContext({ toggleColorMode: () => { } });

const Head = () => {
  // @ts-ignore
  const { themes } = useSelector((state) => state.counter)


  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);

  const dispatch = useDispatch()

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "background.default",
          color: "text.primary",
          borderRadius: 1,
          p: 3,
          position: "fixed",
          top: 0,
          left: 0,

        }}
      >
        {theme.palette.mode} mode
        <IconButton
          sx={{ ml: 1 }}
          color="inherit"

          onClick={() => {


            dispatch(increment(themes == "" ? "dark" : ""))

          }}
        >
          {theme.palette.mode === "dark" ? (
            <Brightness7Icon />
          ) : (
            <Brightness4Icon />
          )}
        </IconButton>
      </Box>

    </div>
  );
}

export default Head;
