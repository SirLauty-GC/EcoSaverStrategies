import React from 'react';
import './preguntasFrecuentes.css';

const PreguntasFrecuentes = () => {
    return(
        <>
            <div className='preguntasFrecuentesDiv grid sm:grid-cols-2 lg:grid-cols-4 gap-4'>
                <div className='preguntaWrapper'>
                    <div className='preguntaCollapsible'>
                        <input type='checkbox' id='preguntaCollapsibleHeadOne'></input>
                        <label htmlFor='preguntaCollapsibleHeadOne' className='preguntaCollapsibleHeadOne'>¿Cómo crearon el sitio?</label>
                        <div className='preguntaRespuesta'>
                            <p>Utilizamos React, que estilizamos con Tailwind CSS para poder crear nuestra "landing page".</p>
                        </div>
                    </div>
                </div>
                <div className='preguntaWrapper'>
                    <div className='preguntaCollapsible'>
                        <input type='checkbox' id='preguntaCollapsibleHeadTwo'></input>
                        <label htmlFor='preguntaCollapsibleHeadTwo' className='preguntaCollapsibleHeadTwo'>¿Cuál fue la principal motivación?</label>
                        <div className='preguntaRespuesta'>
                            <p>Nos dimos cuenta de lo desorbitado que puede ser el gasto inconciente de la energia: Lo que puede afectarles a las personas que lo derrochan y a nuestro medio ambiente.</p>
                        </div>
                    </div>
                </div>
                <div className='preguntaWrapper'>
                    <div className='preguntaCollapsible'>
                        <input type='checkbox' id='preguntaCollapsibleHeadThree'></input>
                        <label htmlFor='preguntaCollapsibleHeadThree' className='preguntaCollapsibleHeadThree'>¿Cuál es el objetivo?</label>
                        <div className='preguntaRespuesta'>
                            <p>Nuestro fin es crear un uso más sustentable con la energia a partir de nuestros equipos de mediciones y cálculos.</p>
                        </div>
                    </div>
                </div>
                <div className='preguntaWrapper'>
                    <div className='preguntaCollapsible'>
                        <input type='checkbox' id='preguntaCollapsibleHeadFour'></input>
                        <label htmlFor='preguntaCollapsibleHeadFour' className='preguntaCollapsibleHeadFour'>¿Cómo trabajan sus programadores?</label>
                        <div className='preguntaRespuesta'>
                            <p>Nuestros desarrolladores se encuentran separado en varios sectores con tareas especificas, para maximizar la eficiencia de trabajo ante tareas de alta complejidad.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PreguntasFrecuentes;