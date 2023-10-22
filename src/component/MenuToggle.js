import React from 'react'

function MenuToggle(props) {
    
  return (
    <div className='toggled-menu'>
        <p id = "Home" className = "toggled--menu-list" onClick = {props.menuClickHandler}>Home</p>
         <p id = "Feedback" className = "toggled--menu-list" onClick = {props.menuClickHandler}>Feedback</p>
      </div>
  )
}

export default MenuToggle