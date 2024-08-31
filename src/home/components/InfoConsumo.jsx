import React from 'react';

export const InfoConsumo = ({}) => {
    return(
        <> 
        <div className="pt-8 overflow-auto">
            <img className='min-w-max' alt='Consumo de energía promedio 2022' src='images/inicio/ConsumoMW.webp'/>
            <div className='grid text-center'>
                <a className='text-xs' href='https://datosabiertos.mendoza.gov.ar/dataset/datosabiertos-mendoza-gov-ar-dataset-demanda-maxima-de-energia-electrica-2022' target="_blank">Fuente: Dataset Mendoza</a>
            </div>
        </div>
        </>
    );
};
