import React from 'react';

export const InfoConsumo = ({}) => {
    return(
        <>
        <div>
            <p className='py-4 text-md text-center sm:text-left sm:text-xl text-2xl text-slate-500'>En base a los datos proporcionados por el gobierno de Mendoza en 2022 sobre el consumo eléctrico, hemos realizado la siguiente gráfica de la demanda eléctrica:</p>
            <div className="overflow-auto">
                <img className='min-w-max min-h-max' alt='Consumo de energía promedio 2022' src='images/inicio/ConsumoMW.webp'/>
                <div className='grid text-center'>
                    <a className='text-xs' href='https://datosabiertos.mendoza.gov.ar/dataset/datosabiertos-mendoza-gov-ar-dataset-demanda-maxima-de-energia-electrica-2022' target="_blank">Fuente: Dataset Mendoza</a>
                </div>
            </div>
        </div>
        </>
    );
};
