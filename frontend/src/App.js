import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import InstructorStudentsView from '/pages/classviews/instructorstudentsview';
import StudentSignIn from './pages/signinviews/studentsignin';
import StudentLaunch from './pages/classviews/studentlaunch';
import { Theme, ThemeProvider } from '@material-ui/core/styles/'
import { Link } from "react-router-dom";
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from './theme.js'

import Test from './pages/test';

// React functional component
function App() {
  // state for storage of the information on the webpage of forms and list, uses hooks
  const [number, setNumber] = useState("")
  const [values, setValues] = useState([])

  // ENTER YOUR EC2 PUBLIC IP/URL HERE
  const ec2_url = 'http://localhost:8000';
  // CHANGE THIS TO TRUE IF HOSTING ON EC2, MAKE SURE TO ADD IP/URL ABOVE
  const ec2 = true;
  // USE localhost OR ec2_url ACCORDING TO ENVIRONMENT
  const url = ec2 ? ec2_url : 'ec2_url';

  // handle input field state change
  const handleChange = (e) => {
    setNumber(e.target.value);
  }

  const fetchBase = () => {
    axios.get(`http://${url}:8000/`).then((res) => {
      alert(res.data);
    })
  }

  // fetches vals of db via GET request
  const fetchVals = () => {
    axios.get(`http://${url}:8000/`).then(
      res => {
        const values = res.data.data;
        console.log(values);
        setValues(values)
      }).catch(err => {
        console.log(err)
      });
  }

  // handle input form submission to backend via POST request
  const handleSubmit = (e) => {
    e.preventDefault();
    let prod = number * number;
    axios.post(`http://${url}:8000/multplynumber`, { product: prod }).then(res => {
      console.log(res);
      fetchVals();
    }).catch(err => {
      console.log(err)
    });;
    setNumber("");
  }
  // handle intialization and setup of database table, can reinitialize to wipe db
  const reset = () => {
    axios.post(`http://${url}:8000/reset`).then(res => {
      console.log(res);
      fetchVals();
    }).catch(err => {
      console.log(err)
    });;
  }


  // tell app to fetch values from db on first load (if initialized)
  // the comment below silences an error that doesn't matter.=
  useEffect(() => {
    fetchVals();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return ( //launch app at student sign in 
    // <ThemeProvider theme={theme}> 
    // {/* add gui theme to all child components */}
    // <CssBaseline/>
    <div className="App">
      {/* <InstructorStudentsView/> */}
      <StudentSignIn/>
      {/* <StudentLaunch></StudentLaunch> */}
    </div>
    // </ThemeProvider>
  );


}

export default App;
