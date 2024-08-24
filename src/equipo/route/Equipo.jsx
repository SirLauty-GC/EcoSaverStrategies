import React from 'react'
import EquipoCarrousel from '../components/EquipoCarrousel.jsx'
import EquipoListado from '../components/EquipoListado.jsx'

function equipo() {
    const classButton = 'py-2 px-3 bg-marca-verdeoscuro hover:bg-marca-verdeoscuro_hover text-white font-bold rounded-xl transition duration-300'
    return(
        <>
            <div>
                <div className='pb-6'>
                    <ul className='grid grid-cols-2 gap-0.5 sm:grid-cols-4 pt-4 place-items-center'>
                        <li><a href='#Software'><button className={classButton}>Software</button></a></li>
                        <li><a href='#Hardware'><button className={classButton}>Hardware</button></a></li>
                        <li><a href='#Comercial'><button className={classButton}>Comercial</button></a></li>
                        <li><a href='#Diseño.Grafico'><button className={classButton}>Diseño Gráfico</button></a></li>
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