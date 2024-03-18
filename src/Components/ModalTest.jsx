import { useState } from "react"
import { Modal } from "./Modal";



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
        <button onClick={toggleModal}>Open Modal Popup</button>
        {showModalPopup && <Modal onClose={onClose} />}
    </div>
  )
}
