import React from 'react'
import { ModalHook } from '../../hooks/ModalHook'
import { gapi } from 'gapi-script'

const API_KEY = "AIzaSyDdR5e_m79MIBVcebpNwMBQFyNsjWQYbNs"
const SCOPES = "https://www.googleapis.com/auth/drive"

export const SharePlace = () => {
    const [isOpenModal1, openModal1, closeModal1] = ModalHook(false);

    function createFile(tag){
        var accessToken = gapi.auth.getToken().access_token;
        fetch('https://docs.googleapis.com/v1/documents', {
            method: "POST",
            headers: new Headers({ 'Authorization': 'Bearer ' + accessToken})
            }).then((res) => {
                return res.json();
            }).then( function(val) {
                console.log(val.documentId)
            })
        }

  return (
      <>
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
                            <img alt='' width='10px' className='img' src='http://cdn.eso.org/images/screen/sunrise-shadow-cc.jpg'/>
                            <h3>Proyecto 1</h3>
                        </button>
                        <button onClick={openModal1} className='buttonProyect'>
                            <img alt='' width='10px' className='img' src='http://cdn.eso.org/images/screen/sunrise-shadow-cc.jpg'/>
                            <h3>Proyecto 2</h3>
                        </button>
                    </div>
                    <div>
                        <button onClick={openModal1} className='buttonProyect'>
                            <img alt='' width='10px' className='img' src='http://cdn.eso.org/images/screen/sunrise-shadow-cc.jpg'/>
                            <h3>Proyecto 3</h3>
                        </button>
                        <button onClick={openModal1} className='buttonProyect'>
                            <img alt='' width='10px' className='img' src='http://cdn.eso.org/images/screen/sunrise-shadow-cc.jpg'/>
                            <h3>Proyecto 4</h3>
                        </button>
                    </div>
                    <div>
                        <button onClick={openModal1} className='buttonProyect'>
                            <img alt='' width='10px' className='img' src='http://cdn.eso.org/images/screen/sunrise-shadow-cc.jpg'/>
                            <h3>Proyecto 5</h3>
                        </button>
                        <button onClick={openModal1} className='buttonProyect'>
                            <img alt='' width='10px' className='img' src='http://cdn.eso.org/images/screen/sunrise-shadow-cc.jpg'/>
                            <h3>Proyecto 6</h3>
                        </button>
                    </div>
                    <div>
                        <button onClick={openModal1} className='buttonProyect'>
                            <img alt='' width='10px' className='img' src='http://cdn.eso.org/images/screen/sunrise-shadow-cc.jpg'/>
                            <h3>Proyecto 7</h3>
                        </button>
                        <button onClick={openModal1} className='buttonProyect'>
                            <img alt='' width='10px' className='img' src='http://cdn.eso.org/images/screen/sunrise-shadow-cc.jpg'/>
                            <h3>Proyecto 8</h3>
                        </button>
                    </div>
                </article>
            </div>
        </section>
        <section className={`pop-up ${isOpenModal1 && "on"}`}>
            <article className='popUp_content'>
                <div>
                    <button onClick={() => createFile('OCJApi')}>Test Note</button>
                    <a rel="noreferrer" target="_blank" href='https://drive.google.com/drive/my-drive'><img alt='' src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Google_Drive_icon_%282020%29.svg/1200px-Google_Drive_icon_%282020%29.svg.png'/></a>
                    <a rel="noreferrer" target="_blank" href='https://docs.google.com/document/u/0/'><img alt='' src='https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/a3/f7fbbcdda6459f8e5efeb950cfc613/Docs_Product_Icon_512dp-2x.png?auto=format%2Ccompress&dpr=1'/></a>
                    <a rel="noreferrer" target="_blank" href='https://docs.google.com/presentation/u/0/'><img alt='' src='https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/3e/78bccb2b7c4a859a24f0b1b0653adc/Slides_Product_Icon_512dp-2x.png?auto=format%2Ccompress&dpr=1'/></a>
                    <a rel="noreferrer" target="_blank" href='https://docs.google.com/spreadsheets/u/0/'><img alt='' src='https://lh3.ggpht.com/e3oZddUHSC6EcnxC80rl_6HbY94sM63dn6KrEXJ-C4GIUN-t1XM0uYA_WUwyhbIHmVMH=w300'/></a>
                    <a rel="noreferrer" target="_blank" href='https://jamboard.google.com'><img alt='' src='https://www.uc3m.es/ss/Satellite?blobcol=urldata&blobkey=id&blobtable=MungoBlobs&blobwhere=1371564669620&ssbinary=true'/></a>
                    <a rel="noreferrer" target="_blank" href='https://classroom.google.com/u/0/h'><img alt='' src='https://play-lh.googleusercontent.com/GBYSf20osBl2CRHbjGOyaOG5kQ3G4xbRau-dzScU9ozuXQJtnUZPkR3IqEDOo5OiVgU'/></a>
                </div>
                <button onClick={closeModal1}>cerrar</button>
            </article>
        </section>
      </>
  )
}
