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
                <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-5 place-items-center'>
                    <Cubes nombre='LiderSoftware'/>
                    <Cubes nombre='LiderHardware'/>
                    <Cubes nombre='LiderComercial'/>
                    <Cubes nombre='LiderDiseñoGrafico'/>
                </div>
            </div>
        </>
    )
}

export default home