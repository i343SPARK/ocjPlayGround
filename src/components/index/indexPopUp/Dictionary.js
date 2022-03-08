import React from 'react'
import '../../../styles/Styles.scss'

export const Dictionary = ({children, isOpen, closeModal}) => {
  return (
    <article className={`dictionary ${isOpen && 'main-container'}`}>
        <div className='dictionary-container'>
          <span>
            {children}
          </span>
            <button className='deleted' onClick={closeModal}>Eliminar</button>
        </div>
    </article>
  )
}

