import React from "react";

const EquipoListado = ({equipo =''}) => {
    const EquipoInformacion = {
        'Diseño.Grafico' : [
            {
                "Edad": 17,
                "Rol": "Líder",
                "Nombre": "Alejo Schverdfinger ",
                "Correo": 'alejoelrasta2007@gmail.com',
                "Linkedin": "https://www.linkedin.com/in/alejo-schverdfinger-00783b30a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
                "Insta": "alejo_00011DG"
            },
            {
                "Edad": 19,
                "Rol": "Diseño Gráfico",
                "Nombre": "Cristian Mamani",
                "Correo": 'cristianmamani347@gmail.com',
                "Linkedin": "https://www.linkedin.com/in/cristian-esteban-mamani-aparicio-984a0230b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
                "Insta": "cristian18511"
            },
            {
                "Edad": 18,
                "Rol": "Creador de imagenes",
                "Nombre": "Diego Salas",
                "Correo": 'Lautarosalas181@gmail.com',
                "Linkedin": "https://www.linkedin.com/in/diego-salas-1095522b7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
                "Insta": ""
            }
        ],
        'Software' : [
            {
                "Edad": 17,
                "Rol": "Líder & Front-End Developer",
                "Nombre": "Lautaro Caylá",
                "Correo": 'caylalautaro@gmail.com',
                "Linkedin": "https://www.linkedin.com/in/lautaro-caylá-84677727b/",
                "Insta": "sir_lauty"
            },
            {
                "Edad": 18,
                "Rol": "Front/Back-End Developer",
                "Nombre": "Fernando Guevara",
                "Correo": 'agu.guevara2006@gmail.com',
                "Linkedin": "https://www.linkedin.com/in/fernando-guevara-28264330a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
                "Insta": ""
            },
            {
                "Edad": 17,
                "Rol": "Front-End Developer",
                "Nombre": "Nehuen Arenas",
                "Correo": 'nehuenarenas567@gmail.com',
                "Linkedin": "https://www.linkedin.com/in/nehuen-arenas-ortubia-38635b277/",
                "Insta": ""
            },
            {
                "Edad": 17,
                "Rol": "Back-End Developer",
                "Nombre": "Ibarra Juan Pablo",
                "Correo": 'Ibarrajuanpablo06@gmail.com',
                "Linkedin": "https://www.linkedin.com/in/juan-pablo-ibarra-salazar-b91b002ba?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
                "Insta": "Juampi__ijp"
            },
            {
                "Edad": 17,
                "Rol": "Back-End Developer",
                "Nombre": "Agustina Enrique Matile",
                "Correo": 'agushamatile666@gmail.com',
                "Linkedin": "https://www.linkedin.com/in/agustina-enrique-matile-362863307?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
                "Insta": "aguss._matile"
            },
            {
                "Edad": 18,
                "Rol": "Back-End Developer",
                "Nombre": "Brenda Campos",
                "Correo": 'Camposbrenda264@gmail.com',
                "Linkedin": "https://www.linkedin.com/in/brenda-mail%C3%A9n-campos-carrizo-313812312?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
                "Insta": "brenda_campos.7"
            },
            {
                "Edad": 19,
                "Rol": "Front-End Developer",
                "Nombre": "Maximiliano cabrera",
                "Correo": 'Maxideer2005@gmail.com',
                "Linkedin": "https://ar.linkedin.com/in/maxi-cabrera-746ba030b",
                "Insta": ""
            },
            {
                "Edad": 16,
                "Rol": "Front-End Developer",
                "Nombre": "Matias Valdivia",
                "Correo": 'Matinovaldivia1@gmail.com',
                "Linkedin": "https://www.linkedin.com/in/matias-valdivia-94a5b4216?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
                "Insta": "Mati.valdiviaa"
            },
            {
                "Edad": 17,
                "Rol": "Back-End Developer",
                "Nombre": "Tiziano Bellene",
                "Correo": 'bellenetiziano@gmail.com',
                "Linkedin": "https://www.linkedin.com/me?trk=p_mwlite_feed-secondary_nav",
                "Insta": "tizibellene"
            }
        ],
        'Comercial' : [
            {
                "Edad": 18,
                "Rol": "Líder",
                "Nombre": "Julián Ferrer",
                "Correo": 'josejulianferrer06@gmail.com',
                "Linkedin": "https://www.linkedin.com/in/juli%C3%A1n-ferrer-84858630a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
                "Insta": "heart_jjf"
            },
            {
                "Edad": 17,
                "Rol": "Marketing Manager",
                "Nombre": "Eunice Montiveros",
                "Correo": 'Santinomuoz81@gmail.com',
                "Linkedin": "https://www.linkedin.com/in/marcos-santino-mu%C3%B1oz-a07814312?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
                "Insta": "Santino_muoz81"
            }
        ],
        'Hardware' : [
            {
                "Edad": 18,
                "Rol": "Líder",
                "Nombre": "Francisco Quinteros",
                "Correo": 'quintefran44@gmail.com',
                "Linkedin": "https://www.linkedin.com/in/francisco-quinteros-57258430a",
                "Insta": "quinte_fran"
            },
            {
                "Edad": 18,
                "Rol": "Programador",
                "Nombre": "Nicolás Sanchez",
                "Correo": 'navarronicolas248@gmail.com',
                "Linkedin": "https://www.linkedin.com/in/nicol%C3%A1s-sanchez-194551257?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
                "Insta": "niconavarro_07"
            },
            {
                "Edad": 18,
                "Rol": "Armado de circuitos",
                "Nombre": "Lautaro Arias",
                "Correo": 'Ariaslautaro57@gmail.com',
                "Linkedin": "https://www.linkedin.com/in/lautaro-agustin-arias-53175a172?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
                "Insta": "lautyagus"
            },
            {
                "Edad": 20,
                "Rol": "Programador",
                "Nombre": "Leonardo Olguin",
                "Correo": 'leonardoalexolguin28@gmail.com',
                "Linkedin": "https://www.linkedin.com/in/leonardo-olguin-865a0730b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
                "Insta": "l.olguinn"
            }
        ]
    };
    
    const info = EquipoInformacion[equipo];

    return(
        <>
            <h3 className="text-3xl text-marca-verdeoscuro">{equipo.replace(/\./g, ' ')}</h3>
            <div id={equipo} className="shadow-md rounded-2xl grid items-center">
                <table>
                    <thead className='bg-marca-gris rounded-2xl text-white'>
                        <tr>
                            <th className="min-w-[90px] font-bold uppercase text-large">Edad</th>
                            <th className="min-w-[200px] font-bold uppercase text-large">Nombre</th>
                            <th className="min-w-[250px] font-bold uppercase text-large">Rol</th>
                            <th className="min-w-[150px] font-bold uppercase text-large">Redes</th>
                            <th className="min-w-[250px] font-bold uppercase text-large">Correo</th>
                        </tr>
                    </thead>
                    <tbody>
                        {info.map((intg , index)=>(
                            <tr key={index}>
                                <td className='py-2 text-tiny font-bold text-center bg-marca-verdeclarito'>{intg.Edad} años</td>
                                <td className='py-2 text-tiny font-bold text-center'>{intg.Nombre}</td>
                                <td className='py-2 text-tiny font-bold text-center bg-marca-verdeclarito'>{intg.Rol}</td>
                                <td className='py-2 text-tiny font-bold flex justify-evenly'>
                                    <a href={intg.Linkedin} target="_blank">
                                        <img alt="Logo LinkedIn icono" src='images/logos/LogosLinkedinIcon.webp' className="w-4 shadow-md"/>
                                    </a>
                                    {intg.Insta != '' &&
                                        <a href={'https://www.instagram.com/' + intg.Insta} target="_blank">
                                            <img alt="Logo Instagram icono" src='images/logos/LogosInstagramIconBlack.webp' className="w-4 shadow-md"/>
                                        </a> ||
                                        <div className="w-4"/>
                                    }
                                </td>
                                <td className='py-2 text-tiny font-bold text-center bg-marca-verdeclarito'>{intg.Correo}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default EquipoListado