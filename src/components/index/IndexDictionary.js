import React from 'react'
import { ModalHook } from '../../hooks/ModalHook'
import { Dictionary } from './indexPopUp/Dictionary'
import { Modal } from './indexPopUp/Modal';

export const IndexDictionary = () => {
    const [isOpenModal2, openModal2, closeModal2] = ModalHook(false);
  return (
    <section>
        <h2>Diccionario</h2>
        <Modal openDic={openModal2}></Modal>
        <Dictionary isOpen={isOpenModal2} closeModal={closeModal2}>
            <h3>Nemo:</h3>
            <p>description masterist</p>
        </Dictionary>
        <button onClick={openModal2}>agregar</button>
    </section>
  )
}
