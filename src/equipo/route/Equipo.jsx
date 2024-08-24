import React from 'react'
import EquipoCarrousel from '../components/EquipoCarrousel.jsx'
import EquipoListado from '../components/EquipoListado.jsx'

function equipo() {
    return(
        <>
            <div>
                <div className='pb-6'>
                    <ul className='flex flex-wrap space-x-4'>
                        <li><a href='#Software'><button className='py-2 px-4 bg-marca-verdeoscuro hover:bg-marca-verdeoscuro_hover text-white font-bold rounded-xl transition duration-300'>Software</button></a></li>
                        <li><a href='#Hardware'><button className='py-2 px-4 bg-marca-verdeoscuro hover:bg-marca-verdeoscuro_hover text-white font-bold rounded-xl transition duration-300'>Hardware</button></a></li>
                        <li><a href='#Comercial'><button className='py-2 px-4 bg-marca-verdeoscuro hover:bg-marca-verdeoscuro_hover text-white font-bold rounded-xl transition duration-300'>Comercial</button></a></li>
                        <li><a href='#Diseño.Grafico'><button className='py-2 px-4 bg-marca-verdeoscuro hover:bg-marca-verdeoscuro_hover text-white font-bold rounded-xl transition duration-300'>Diseño Gráfico</button></a></li>
                    </ul>
                </div>
                <div>
                    <EquipoCarrousel/>
                </div>
                <div className='overflow-auto'>
                    <EquipoListado equipo='Software'/>
                    <EquipoListado equipo='Hardware'/>
                    <EquipoListado equipo='Comercial'/>
                    <EquipoListado equipo='Diseño.Grafico'/>
                </div>
            </div>
        </>
    )
}

export default equipo