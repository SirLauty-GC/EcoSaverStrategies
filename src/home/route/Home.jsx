import React from 'react';
import { CuadroInformacionHome } from '../components/CuadroInformacionHome.jsx';
import { LideresCubos } from '../components/LideresCubos.jsx';
import { InfoConsumo } from '../components/InfoConsumo.jsx';
import InstaPublicacion from '../components/InstaPublicacion.jsx';
import InstaPublicacionDos from '../components/InstaPublicacionDos.jsx';
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
                <div className='pt-12'>
                    <h3 className='text-4xl text-center sm:text-left lg:text-5xl font-medium text-marca-verdeoscuro'>Líderes de nuestro proyecto</h3>
                </div>
                <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4 place-items-center'>
                    <LideresCubos nombre='LiderSoftware'/>
                    <LideresCubos nombre='LiderHardware'/>
                    <LideresCubos nombre='LiderComercial'/>
                    <LideresCubos nombre='LiderDiseñoGrafico'/>
                </div>
                <div className='pt-12'>
                    <h3 className='text-4xl text-center sm:text-left lg:text-5xl font-medium text-marca-verdeoscuro'>Consumo eléctrico Mendoza 2022</h3>
                    <div className='grid justify-center pt-4'>
                        <InfoConsumo/>
                    </div>
                </div>
                <div className='pt-12'>
                    <h3 className='text-4xl text-center sm:text-left lg:text-5xl font-medium text-marca-verdeoscuro'>Nuestras redes</h3>
                    <div className='pt-6 grid sm:flex sm:justify-evenly'>
                        <InstaPublicacion/>
                        <InstaPublicacionDos/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default home