import React from "react"
import './App.css';
import {Routes, Route,} from "react-router-dom";
import Nav from "./components/Nav"
import HomeMain from "./components/HomeMain"
import Footer from "./components/Footer"
import ResourcesMain from "./components/ResourcesMain"

function App() {
  const [navState, changeNavState] = React.useState(true)

  React.useLayoutEffect(() => {
    document.body.className = "loading";
    let timer = setTimeout(function(){
        document.body.className = "";
    }, 500);

    return () => {
      clearTimeout(timer)
    }
  }, [])

  function navClick() {
    changeNavState(!navState)
  }

  !navState ? document.body.style.overflow = "hidden" : document.body.style.overflow = "scroll"
  return (
    <Routes>
      <Route path="/" element={
        <>
          <Nav 
            navClick={navClick}
            navState={navState}
          />
          <HomeMain />
          <Footer />
        </>
      }/>
      <Route path="/resources" element={
        <>
          <Nav 
            navClick={navClick}
            navState={navState}
          />
          <ResourcesMain />
          <Footer />
        </>
      }/>
    </Routes>
  );
}

export default App;
