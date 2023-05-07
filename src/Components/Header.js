import { AppBar, Container, createTheme, makeStyles, MenuItem, Select, ThemeProvider, Toolbar, Typography } from '@material-ui/core'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { CryptoState } from '../CryptoContext';
import AuthModal from './Authentication/AuthModal';
import UserSidebar from './Authentication/UserSidebar';


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

  const {currency, setCurrency, user} = CryptoState()
  
  const handleTitleOnClick=()=>{
    navigate("/");
  }

  console.log(currency);

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
    <AppBar color='dark' position='static'>
      <Container>
        <Toolbar>
          <Typography onClick={()=>handleTitleOnClick()} variant="h6" className={classes.title}>CryptoHub</Typography>
          <Select variant="outlined" style={{
            width: 100,
            height: 40,
            marginRight: 15,
            
            
          }} value={currency} onChange={(e) => setCurrency(e.target.value)}>
            
            <MenuItem value={"USD"}>USD</MenuItem>
            <MenuItem value={"INR"}>INR</MenuItem>
          </Select>

          {user ? <UserSidebar/> : <AuthModal/>}
        </Toolbar>
      </Container>
    </AppBar>
    </ThemeProvider>
  )
}

export default Header
