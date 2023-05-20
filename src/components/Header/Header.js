import React from 'react'
import "./header.css"
import {FiEdit } from "react-icons/fi"

const Header = () => {
  return (
    <>
    <div className='container'>
        <div className="trip">
            <h3 className="trip1">
                Trip1
            </h3>
            <div className="edit-icon">
             <FiEdit  size={20}/>
            </div>
        </div>
        </div>
    </>
  )
}

export default Header