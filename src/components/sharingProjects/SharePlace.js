import React from 'react'
import { ModalHook } from '../../hooks/ModalHook'

export const SharePlace = () => {
    const [isOpenModal1, openModal1, closeModal1] = ModalHook(false);

  return (
    <section className='generalContent'>
        <div className='shareDiv'>
            <h2>Grupos</h2>
            <article className='overflowGrp'>
                <div className='numGroup'>
                    <span className='imgGroup'></span>
                    <h3>Grupo 1</h3>
                </div>
                <div className='numGroup'>
                    <span className='imgGroup'></span>
                    <h3>Grupo 2</h3>
                </div>
                <div className='numGroup'>
                    <span className='imgGroup'></span>
                    <h3>Grupo 3</h3>
                </div>
                <div className='numGroup'>
                    <span className='imgGroup'></span>
                    <h3>Grupo 4</h3>
                </div>
                <div className='numGroup'>
                    <span className='imgGroup'></span>
                    <h3>Grupo 5</h3>
                </div>
                <div className='numGroup'>
                    <span className='imgGroup'></span>
                    <h3>Grupo 6</h3>
                </div>
            </article>
        </div>
        <div className='shareDiv'>
            <h2>Proyectos</h2>
            <article className='overflowGrp1'>
                <div>
                    <button onClick={openModal1} className='buttonProyect'>
                        <img width='10px' className='img' src='http://cdn.eso.org/images/screen/sunrise-shadow-cc.jpg'/>
                        <h3>Proyecto 1</h3>
                    </button>
                    <button onClick={openModal1} className='buttonProyect'>
                        <img width='10px' className='img' src='http://cdn.eso.org/images/screen/sunrise-shadow-cc.jpg'/>
                        <h3>Proyecto 2</h3>
                    </button>
                </div>
                <div>
                    <button onClick={openModal1} className='buttonProyect'>
                        <img width='10px' className='img' src='http://cdn.eso.org/images/screen/sunrise-shadow-cc.jpg'/>
                        <h3>Proyecto 3</h3>
                    </button>
                    <button onClick={openModal1} className='buttonProyect'>
                        <img width='10px' className='img' src='http://cdn.eso.org/images/screen/sunrise-shadow-cc.jpg'/>
                        <h3>Proyecto 4</h3>
                    </button>
                </div>
                <div>
                    <button onClick={openModal1} className='buttonProyect'>
                        <img width='10px' className='img' src='http://cdn.eso.org/images/screen/sunrise-shadow-cc.jpg'/>
                        <h3>Proyecto 5</h3>
                    </button>
                    <button onClick={openModal1} className='buttonProyect'>
                        <img width='10px' className='img' src='http://cdn.eso.org/images/screen/sunrise-shadow-cc.jpg'/>
                        <h3>Proyecto 6</h3>
                    </button>
                </div>
                <div>
                    <button onClick={openModal1} className='buttonProyect'>
                        <img width='10px' className='img' src='http://cdn.eso.org/images/screen/sunrise-shadow-cc.jpg'/>
                        <h3>Proyecto 7</h3>
                    </button>
                    <button onClick={openModal1} className='buttonProyect'>
                        <img width='10px' className='img' src='http://cdn.eso.org/images/screen/sunrise-shadow-cc.jpg'/>
                        <h3>Proyecto 8</h3>
                    </button>
                </div>
            </article>
        </div>
    </section>
  )
}
