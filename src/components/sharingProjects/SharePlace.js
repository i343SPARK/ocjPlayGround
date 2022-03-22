import React from 'react'

export const SharePlace = () => {
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
                    <button className='buttonProyect'>
                        <img width='100px' className='img' src='http://cdn.eso.org/images/screen/sunrise-shadow-cc.jpg'/>
                        <h3>Proyecto 1</h3>
                    </button>
                </div>
            </article>
        </div>
    </section>
  )
}
