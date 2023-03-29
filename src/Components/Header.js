import { AppBar, Container, createTheme, makeStyles, MenuItem, Select, ThemeProvider, Toolbar, Typography } from '@material-ui/core'
import React from 'react'
import { useNavigate } from 'react-router-dom'


const useStyles = makeStyles((theme) => ({
  title: {
    flex: 1,
    color: "gold",
    fontFamily: "Montserrat",
    fontWeight: "bold",
    cursor: "pointer",
  }
}))





function Header (){
  const navigate = useNavigate();
  const classes = useStyles();

  
  const handleTitleOnClick=()=>{
    navigate("/homepage");
  }

  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      type: "dark",
    },
  })
  

  return (
    <ThemeProvider theme={darkTheme}>
    <AppBar color='primary' position='static'>
      <Container>
        <Toolbar>
          <Typography onClick={()=>handleTitleOnClick()} variant="h6" className={classes.title}>CryptoHub</Typography>
          <Select variant="outlined" style={{
            width: 100,
            height: 40,
            marginRight: 15,
            
            
          }}>
            <MenuItem value={"USD"}>USD</MenuItem>
            <MenuItem value={"INR"}>INR</MenuItem>
          </Select>
        </Toolbar>
      </Container>
    </AppBar>
    </ThemeProvider>
  )
}

export default Header
