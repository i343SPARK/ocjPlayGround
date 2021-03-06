import React from 'react'
import { ModalHook } from '../../hooks/ModalHook';
import { Modal } from './indexPopUp/Modal';

export const IndexTextAudio = () => {
    const [isOpenModal1, openModal1, closeModal1] = ModalHook(false);

  return (
      <section className='main-section'>
        <h1>Prueba de diccionario</h1>
        <div className='flex-top'>
            <iframe title='Audio' className='audio' frameborder="no" scrolling="no" seamless src="https://player.simplecast.com/445b23b6-bc27-4e74-a276-df3b2d0a89fd?dark=true"></iframe>
            <p className='description'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi maiores nostrum quisquam voluptas. Ad, aperiam consequuntur!
            <span className='pop-up-section'>     
                <button className='selected-word' onClick={openModal1}> 
                Nemo</button>
                <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
                    <h2>Nemo</h2>
                    <p>description masterist</p>
                </Modal>
            </span> vitae, consectetur quod, dicta quibusdam iure autem error fugiat, asperiores perferendis sapiente modi!<br/>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi maiores nostrum quisquam voluptas. Ad, aperiam consequuntur! Nemo vitae, consectetur quod, dicta quibusdam iure autem error fugiat, asperiores</p>
        </div>
        <div><a rel="noreferrer" target="_blank" href="https://www.linkedin.com/profile/add?startTask=CERTIFICATION_NAME&name=Happines%20Certification%20JesusAdri&organizationName=AZI%20APPLIED%20TECHNOLOGY&issueYear=2021&issueMonth=4&certUrl=https%3A%2F%2Fdocs.microsoft.com%2Fen-us%2Flearn%2Fcertifications%2Fd365-functional-consultant-sales&certId=4345"><img src="https://download.linkedin.com/desktop/add2profile/buttons/en_US.png " alt="LinkedIn Add to Profile button"/></a>
        </div>
      </section>
  )
}

// function sayHello(){
//     alert('Hola');
// }