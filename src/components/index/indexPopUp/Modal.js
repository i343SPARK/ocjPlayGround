import React from 'react'
import '../../../styles/Styles.scss'

export const Modal = ({children, isOpen, closeModal, openDic}) => {
  return (
    <article className={`modal ${isOpen && "is-open"}`}>
        <div className='modal-container'>
            {children}
            <button onClick={closeModal}>agregar</button>
            <button onClick={openDic}>gar</button>
        </div>
    </article>
  )
}
