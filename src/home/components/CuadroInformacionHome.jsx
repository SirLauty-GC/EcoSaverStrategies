import React from "react";

export const CuadroInformacionHome = ({ nombre = '' , clase = '' }) => {
    const CuadroInfo = {
        Presentacion: {
            titulo: 'Una solución sustentable y eficaz para el mundo real',
            info: 'Controlá el consumo de tus dispositivos y lográ la mayor eficiencia, para un mundo mejor.',
            srcimg: 'images/inicio/Presentacion.webp'
        },
        SobreNosotros: {
            titulo: 'Sobre nosotros',
            info: 'Somos un grupo de emprendedores que, gracias al programa gubernamental: "Mendoza Futura"; Hemos desarrollado un proyecto en el cual administra el consumo energético en edificios particulares. Viviendas, bibliotecas, etc. Buscando la eficiencia.',
            srcimg: 'images/inicio/SobreNosotros.webp'
        }
    };

    const data = CuadroInfo[nombre];
    
    const clases = 'w-full bg-white rounded-xl shadow-lg grid md:flex md:items-center md:space-x-4 md:mb-4' + clase;

    return(
        <>
            <div className={clases}>
                <div className='shrink-0'>
                    <img className='w-100% md:w-72 lg:w-96 rounded-tl-3xl rounded-br-3xl' alt='Energia Solar en Mendoza' src={data.srcimg}></img>
                </div>
                <div>
                    <h3 className='text-4xl lg:text-5xl font-medium text-marca-verdeoscuro'>{data.titulo}</h3>
                    <p className='text-md sm:text-xl text-2xl text-slate-500'>{data.info}</p>
                </div>
            </div>
        </>
    )
}