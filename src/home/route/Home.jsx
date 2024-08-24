import React from 'react';
import { CuadroInformacionHome } from '../components/CuadroInformacionHome.jsx';
import { Cubes } from '../components/Cubes.jsx';
function home() {
    return(
        <>
            <div className='grid'>
                <div className='pb-4'>
                    <CuadroInformacionHome nombre='Presentacion'/>
                </div>
                <div>
                    <CuadroInformacionHome nombre='SobreNosotros' clase='flex flex-row-reverse'/>
                </div>
                <div className='grid sm:flex pt-5 justify-center space-x-16'>
                <Cubes nombre='Seccionuno'/>
                <Cubes nombre='Secciondos'/>
                <Cubes nombre='Secciontres'/>
                </div>
            </div>
        </>
    )
}

export default home