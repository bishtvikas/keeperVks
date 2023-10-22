import React, { useEffect } from "react";
import Hero from "./Hero";
import MenuToggle from "./MenuToggle";

function Navbar() {
  const hamburger = require("../images/hamburger.png");
  const googlekeep = require("../images/google-keep-logo.png");
  const lens = require("../images/lens.png");
  const cross = require("../images/cross.png");
  const refresh = require("../images/refresh.png");
  const list = require("../images/list.png");
  const setting = require("../images/setting.png");
  const dots = require("../images/dots.png");
  const avatar = require("../images/avatar.png");
  const dark = require("../images/dark.png");
  const light = require("../images/light.png");


// darkMode  : state to store darkMode value in boolean
const [darkMode , setDarkMode] = React.useState({
  isDarkmodeOn : false,
   
})

const [theme , setTheme] = React.useState("light-theme");

// console.log(darkMode);
// console.log(theme);

// function to toggle the darkmode : switch between dark and bright
const toggle_darkmode = () => {
  setDarkMode((prevData) => {
    return{
      ...prevData,
      isDarkmodeOn: !prevData.isDarkmodeOn,
      
    }
  } )

if(theme === 'light-theme'){
  setTheme('dark-theme');
}
else{
  setTheme('light-theme');
}

}


useEffect(() => {
  document.body.className = theme;
} , [theme]);



// menu = state that will keep the state for hamburger menu being toggled between on and off.

  const [menu, setMenu] = React.useState({
    toggle_menu: false,
    id: 'Home'
  });


  // console.log(menu);
// function to handle menu click in MenuToggle.js child component
function menuClickHandler(event){
  // console.log(event.target.id)
  // console.log("clicked")
  setMenu((prevMenu) => {
    return {
      ...prevMenu,
      id: event.target.id,
    };
  });
}

  function handleClickMenu() {
    // console.log("menu clicked");
    setMenu((prevMenu) => {
      return {
        ...prevMenu,
        toggle_menu: !prevMenu.toggle_menu,
      };
    });
  }

  return (
    <>
      {menu.toggle_menu && <MenuToggle menu = {menu} menuClickHandler = {menuClickHandler}/>}
      {/* // header */}
      <div className="Header">
        {/* navbar */}
        <div className="Navbar">
          <img
            src={hamburger}
            alt="hamburger"
            className="Navbar--icon on-focus"
            onClick={handleClickMenu}
          ></img>
          <span className="google-keep-logo--box">
            <img
              src={googlekeep}
              alt="googlekeep"
              className="googlekeep--img"
            ></img>
            <p className="keep-text">Keeper</p>
          </span>
          {/* searchbox */}
          <form className="searchbox--div">
            <img src={lens} alt="searchlogo" className="lens-tile-img"></img>

            <input
              className="search--field no-outline"
              placeholder="Search"
            ></input>

            <img src={cross} alt="crosslogo" className="cross--img"></img>
          </form>
          {/* searchbox end*/}


          <div className="dark--mode--setting">
           { darkMode.isDarkmodeOn && <img src={dark} className = "DarkMode" onClick={toggle_darkmode} alt = "darkModeimg" />} 
            {!darkMode.isDarkmodeOn && <img src={light} className = "DarkMode" onClick={toggle_darkmode}  alt = "darkModeimg"/>
          }
          </div>
          
          {/* refresh list setting = div */}
          
          <div className="refresh--list--setting">
            
            <img
              src={refresh}
              alt="crosslogo"
              className="Navbar--icon on-focus"
            ></img>
            <img
              src={list}
              alt="crosslogo"
              className="Navbar--icon on-focus"
            ></img>
            <img
              src={setting}
              alt="crosslogo"
              className="Navbar--icon on-focus"
            ></img>
          </div>
          {/* refresh list setting = div end */}

          {/* dots avatar = div */}
          <div className="dots--avatar">
            
            <img
              src={dots}
              alt="crosslogo"
              className="lens-tile-img on-focus"
            ></img>
            <img
              src={avatar}
              alt="crosslogo"
              className="avatar-logo on-focus"
            ></img>
          </div>
          {/* dots avatar = div end */}
        </div>
        {/* navbar end*/}
      </div>
      {/*   header end */}
      <Hero menu = {menu}/>
    </>
  );
}

export default Navbar;
