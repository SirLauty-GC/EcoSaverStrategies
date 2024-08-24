import React from 'react';
import { Link } from "react-router-dom";

export const LideresCubos = ({ nombre = '' }) => {
    const CuadroInfo = {
        LiderSoftware: {
            titulo: 'Lautaro Caylá',
            info: 'Departamento de Software',
            departamento: '/equipo#Software',
            srcimg: 'https://media.licdn.com/dms/image/v2/D4D35AQH9kgK5Gmk7-Q/profile-framedphoto-shrink_100_100/profile-framedphoto-shrink_100_100/0/1722084568790?e=1725120000&v=beta&t=tQ6RZ_bZm2Ltgu-C6gUij1skF98gS7eiP4W-yJp5FJU'
        },
        LiderHardware: {
            titulo: 'Francisco Quinteros',
            info: 'Departamento de Hardware',
            departamento: '/equipo#Hardware',
            srcimg: 'https://media.licdn.com/dms/image/v2/D4E03AQHqjZYPiq37WA/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1718264509978?e=1729728000&v=beta&t=HGc4kTIm30s2RI5TQWmRibfUQhtiLivIzlH2LYYSsqk'
        },
        LiderComercial: {
            titulo: 'Eunice Montiveros',
            info: 'Departamento Comercial',
            departamento: '/equipo#Comercial',
            srcimg: 'https://media.licdn.com/dms/image/v2/D5635AQHt2rUt-UEtOQ/profile-framedphoto-shrink_200_200/profile-framedphoto-shrink_200_200/0/1719671354968?e=1725120000&v=beta&t=NeVZXrPHWYB5CmoetTz0cpPgXiOD6VPnImZHDBkCVeI'
        },
        LiderDiseñoGrafico: {
            titulo: 'Alejo Schverdfinger',
            info: 'Departamento de Diseño Gráfico',
            departamento: '/equipo#Diseño.Grafico',
            srcimg: 'https://media.licdn.com/dms/image/v2/D4D03AQE0OBJ-poIv6g/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1716036219866?e=1729728000&v=beta&t=Zg_TWg8iUSLtUPHPUghL0jeWkYG2SdpzeRadIR3cyiA'
        }
    };

    const data = CuadroInfo[nombre];

    return(
        <> 
        <div className='w-full bg-white rounded-xl shadow-lg grid md:items-center md:space-x-4 md:mb-4 max-w-[300px]'>
            <div className="service-item flex flex-col justify-center text-center rounded-lg p-6 min-h-[300px]">
                <div className="service-icon w-20 h-20 bg-gray-100 rounded-full mx-auto flex items-center justify-center">
                    <img className="rounded-full" src={data.srcimg} alt={data.nombre} />
                </div>
                <h5 className="my-3 font-semibold text-lg">{data.titulo}</h5>
                <p className="text-gray-600 pb-4">
                    {data.info}
                </p>
                <Link to={data.departamento} className="btn px-4 py-2  mt-auto mx-auto bg-marca-verdeoscuro hover:bg-marca-verdeoscuro_hover text-white rounded-md">
                    Ver más
                </Link>
            </div>
        </div>
        </>
    );
};