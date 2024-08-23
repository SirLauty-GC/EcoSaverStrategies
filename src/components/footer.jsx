import React from "react";
function Footer(){
    return(
    <>   
        <footer className='grid md:flex items-center justify-between bg-marca-gris text-white pb-4 px-6 mt-10'>
            <div>
                <h4 className="text-center md:text-left">Contactanos:</h4>
                <div className="grid mt-1">
                    <div className='flex items-center'>
                        <img className='w-7 mr-1' src={'images/logos/MaterialSymbolsLocationOn.webp'}></img>
                        <p>Patricias Argentinas 56 - Maipú, Mendoza</p>
                    </div>
                    <div className='flex items-center'>
                        <img className='w-7 mr-1' src={'images/logos/MaterialSymbolsCallSharp.webp'}></img>
                        <p>+54 9 261 xxx-xxxx</p>
                    </div>
                    <div className='flex items-center'>
                        <img className='w-7 mr-1' src={'images/logos/MaterialSymbolsMail.webp'}></img>
                        <p>EcoSaverStrategies@gmail.com</p>
                    </div>
                </div>
            </div>
            <div className="grid md:flex md:justify-between">
                <div className="md:mr-12">
                    <h4 className="text-center mb-2 md:text-left md:mb-0">Seguinos en nuestras redes</h4>
                    <div className="flex justify-around md:grid md:justify-items-center md:mt-1">
                        <div>
                            <a className="text-white text-lg md:no-underline" href="https://www.instagram.com/" target="_blank">
                                <img className="w-24" src={'images/logos/LogosInstagram.webp'} alt="Instagram"></img>
                            </a>
                        </div>
                        <div className='md:mt-2'>
                            <a className="text-white text-lg md:no-underline" href="https://www.linkedin.com/groups/14465076/" target="_blank">
                                <img className="w-24" src={'images/logos/LogosLinkedin.webp'} alt="LinkedIn"></img>
                            </a>
                        </div>
                    </div>
                </div>
                <div>
                    <h4 className="text-center mb-2 md:text-left md:mb-0">Mendoza Futura</h4>
                    <div className="flex justify-around md:grid md:justify-items-center md:mt-1">
                        <div>
                            <a className="text-white text-lg md:no-underline" href="https://www.instagram.com/mendozafutura.comunidad/" target="_blank">
                                <img className="w-24" src={'images/logos/LogosInstagram.webp'} alt="Instagram"></img>
                            </a>
                        </div>
                        <div className='mt-2'>
                            <a className="text-white text-lg md:no-underline" href="https://www.mendoza.gov.ar/economia/mendoza-futura-2024/" target="_blank">
                                <img className="w-24" src= {'images/logos/LogosConectadosMendozaFutura.webp'} alt="Conectados por Mendoza Futura"></img>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </>
    )
}
export default Footer