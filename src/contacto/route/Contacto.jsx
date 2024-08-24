import React, { useState } from 'react';
import Formulario from '../components/Formulario.jsx'

function Contacto() {
    const [showForm, setShowForm] = useState(false);
    const key = import.meta.env.PUBLIC_KEY
    const handleClick = () => {
        setShowForm(true);
    };

    return (
        <>
        <div>
            <h3>Contactanos por correo electrónico al: <span className='font-bold'>ecosaverstrategies@gmail.com</span></h3>
        </div>
        <div className='pt-10'>
            <h3>O rellena nuestro formulario:</h3>
            <div className='bg-emeralda-200'>
                <Formulario />
            </div>
        </div>
        </>
    );
}

export default Contacto;