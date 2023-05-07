import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from './Components/Header';
import HomePage from './Pages/HomePage';
import CoinPage from './Pages/CoinPage';
import { makeStyles } from '@material-ui/core';
import Alert from './Components/Alert';

function App() {

  const useStyles = makeStyles(() => ({
    App: {
      backgroundColor:"#14161a",
      minHeight: "100vh",
      color:"white",
    }
  }))

  const classes = useStyles();

  return (
    
    
    
      <div className={classes.App}>
        <Header/>
        <HomePage/>
        {/* <Routes>
        <Route path='/' component={HomePage} exact/>
        <Route path='/coins/:id' component={CoinPage}/>
        </Routes> */}
        <Alert/>
      </div>

   

    
  );
}

export default App;
