import React from 'react';
import './preguntasFrecuentes.css';

const PreguntasFrecuentes = () => {
    return(
        <>
            <div className='preguntasFrecuentesDiv'>
                <div className='preguntaWrapper'>
                    <div className='preguntaCollapsible'>
                        <input type='checkbox' id='preguntaCollapsibleHeadOne'></input>
                        <label htmlFor='preguntaCollapsibleHeadOne' className='preguntaCollapsibleHeadOne'>¿Cómo crearon el sitio?</label>
                        <div className='preguntaRespuesta'>
                            <p>Utilizamos varias tecnologias del momento que convinamos para poder crear nuestra landing page entre el equipo de developers, entre las tecnologias utilizadas se encuentran: TaildWindCSS, React, Node.js, Github</p>
                        </div>
                    </div>
                </div>
                <div className='preguntaWrapper'>
                    <div className='preguntaCollapsible'>
                        <input type='checkbox' id='preguntaCollapsibleHeadTwo'></input>
                        <label htmlFor='preguntaCollapsibleHeadTwo' className='preguntaCollapsibleHeadTwo'>¿Cuál fue la principal motivación detrás de la creación de este proyecto ecoamigable?</label>
                        <div className='preguntaRespuesta'>
                            <p>La motivacion se presento desde que nos dimos cuenta de lo desorbitado que puede ser el gasto inconciente de la energia, y lo que puede afectarles a las personas que lo derrochan y a nuestro medio ambiente.</p>
                        </div>
                    </div>
                </div>
                <div className='preguntaWrapper'>
                    <div className='preguntaCollapsible'>
                        <input type='checkbox' id='preguntaCollapsibleHeadThree'></input>
                        <label htmlFor='preguntaCollapsibleHeadThree' className='preguntaCollapsibleHeadThree'>¿Cuál es el objetivo?</label>
                        <div className='preguntaRespuesta'>
                            <p>El fin de nuestro proyecto es crear un habito mas sustentable del uso de la energia con nuestros equipos de mediciones y calculos.</p>
                        </div>
                    </div>
                </div>
                <div className='preguntaWrapper'>
                    <div className='preguntaCollapsible'>
                        <input type='checkbox' id='preguntaCollapsibleHeadFour'></input>
                        <label htmlFor='preguntaCollapsibleHeadFour' className='preguntaCollapsibleHeadFour'>¿Como trabajan nuestros equipos de developers en conjunto?</label>
                        <div className='preguntaRespuesta'>
                            <p>Nuestros desarrolladores se encuentra separado en varios sectores con tareas especificas, para maximizar la eficiencia de trabajo ante tareas de alta complejidad</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PreguntasFrecuentes;