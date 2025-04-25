import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home";
import Header from "./Components/Header";
import { createContext, useEffect, useState } from "react";
import axios from 'axios';

const MyContext = createContext();

function App() {

  const [locationList,setLocationList] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState(null);
  
  useEffect(()=>{
    getLocation("https://psgc.cloud/api/regions");
  },[]);

  const getLocation = async (url) => {
    const res = await axios.get(url);
    setLocationList(res.data);
  };

  const values = {
    locationList,
    selectedRegion, // Provide the selected region in context
    setSelectedRegion, // Provide a function to update the selected region
  };

  return (
    <Router>
    <MyContext.Provider value={values}>
      <Header />
        <Routes>
          <Route path="/" exact={true} element={<Home/>} />

        </Routes>
    </MyContext.Provider>
    </Router>
  );
}

export default App;


export {MyContext}