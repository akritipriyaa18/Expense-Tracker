import React from "react"
import DropdownButton from "../DropdownButton/DropdownButton"
import DropdownContent from "../DropdolwnContent/DropdownContent"
import './Dropdown.css'
import { useState } from "react"

const Dropdown = ({buttonText, content, onSelect}) => { 

    const [open, setOpen] = useState(false)
    const [selectedItem, setSelectedItem] = useState(buttonText)

    const toggleDropdown = () => {
        setOpen((prev) => !prev)
    }

    const handleSelect = (itemText) => {
        onSelect(itemText)
        setSelectedItem(itemText)
        setOpen(false)
    }


    return (<div className="dropdown"><DropdownButton toggle={toggleDropdown} open={open}>{selectedItem}</DropdownButton>
    {open && (
        <DropdownContent>
            {content.map((item, index) => ( 
                                   <div key={index} onClick = {() => handleSelect(item)}>{item}</div>
    ))}
    </DropdownContent>
    )}
    </div>
)
}

export default Dropdown