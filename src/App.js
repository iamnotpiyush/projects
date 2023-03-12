import React,{useState} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Forms from './components/Forms';
import Alert from './components/Alert';
//import Aboutus from './components/Aboutus';
  // import {
  //   BrowserRouter as Router,
  //   Switch,
  //   Route,
    
  // } from "react-router-dom";

function App() {
  const [mode,setMode]=useState('light');
  const [alert,setAlert]=useState(null);
  const showAlert=(messege,type)=>{
          setAlert({
            mess:messege,
            type:type
          })

          setTimeout(()=>{
              setAlert(null);
          },3000)
  }
  const toggleMode=()=>{
    if(mode==='light'){
      setMode("dark")
      document.body.style.backgroundColor="gray"; 
      showAlert("dark mode on","success")
      document.title="Text-Editor HOME(dark)"
    }
    else{
      setMode("light");
      document.body.style.backgroundColor="white"; 
      showAlert("light mode on","success")
      
    }
  } 
  return (

    <>
    {/*<Router>*/}
    <Navbar title="Text-Editor" about="About-us" mode={mode}  toggleMode={toggleMode}></Navbar>
    <Alert alert={alert}></Alert>
   
    <div className='container my-3'  >
   
  {/* <Switch>
          <Route exact path="/about">
          <Aboutus />
           </Route>   */}
          
         {/*  <Route exact path="/">   */}
          <Forms  heading="enter the text to anaylise" showAlert={showAlert} mode={mode}/> 

          {/* </Route>
  </Switch>  */}
    </div>
   {/*  </Router>   */}
    </>
  );
}

export default App;


