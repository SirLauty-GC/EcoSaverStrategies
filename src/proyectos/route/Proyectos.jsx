import React from 'react';
import ProyectoFigura from '../components/ProyectoFigura.jsx';
import PreguntasFrecuentes from '../components/PreguntasFrecuentes.jsx';

function proyectos() {
    return(
        <>
            <div>
                <h3 className='text-3xl font-medium text-emerald-700'>Proyectos anteriores:</h3>
            </div>
            <div className='pt-4 grid sm:flex justify-around'>
                <div>
                    <ProyectoFigura nombre='DoctorStock'/>
                </div>
                <div className='pt-8 sm:pt-0 '>
                    <ProyectoFigura nombre='SensArInclusive'/>
                </div>
            </div>
            <div className='pt-4'>
                <h3 className='text-3xl font-medium text-emerald-700'>Preguntas Frecuentes:</h3>
                <PreguntasFrecuentes />
            </div>
        </>
    )
}

export default proyectos