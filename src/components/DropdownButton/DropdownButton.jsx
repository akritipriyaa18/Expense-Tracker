import React from 'react'
import {FaChevronDown, FaChevronUp} from 'react-icons/fa'
import './DropdownButton.css'

const DropdownButton = ({children, open, toggle}) => {
  return (
    <div onClick={toggle} className={`drpdown-btn ${open ? "button-open" : null}`}>{children}
    <span className='toggle-icons'>{open ? <FaChevronUp/> : <FaChevronDown/>}</span></div>
  )
}

export default DropdownButton