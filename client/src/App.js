import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import {DataProvider} from './GlobalState'
import Header from './components/headers/Header'
import MainPages from './components/mainpages/Pages'
import {useState} from "react";
import {createContext} from "react";
import ReactSwitch from "react-switch"
export const ThemeContext = createContext(null);

function App() {

  const[theme, setTheme] = useState("dark");
  
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light")); 
  }
  return (
    <ThemeContext.Provider value = { { theme, toggleTheme} }>
    <DataProvider>
      <Router>
      
        <div className="App" id = {theme}>
          <Header />
          <MainPages />
          <div className = 'switch'>
            <label> {theme ==="light" ? "Light Mode" : "Dark Mode"}</label>
          <ReactSwitch onChange={toggleTheme} checked={theme==="dark"}/>
          </div>
        </div>
       
        
      </Router>
    </DataProvider>
    </ThemeContext.Provider>
  );
}

export default App;
