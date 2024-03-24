import { useState } from "react"
import { Modal } from "./Modal";

import "./style.css"

export const ModalTest = () => {
    const[showModalPopup , setShowModalPopup] = useState(false);

    const toggleModal = ()=>{
        setShowModalPopup(!showModalPopup)
    }
    function onClose (){
        setShowModalPopup(false)

    }
  return (
    <div>
        {!showModalPopup && <button onClick={toggleModal}>Open Modal Popup</button>}
        
        {showModalPopup && <Modal onClose={onClose} />}
    </div>
  )
}
