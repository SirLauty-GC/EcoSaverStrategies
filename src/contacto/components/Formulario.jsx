import React, { useEffect, useState } from 'react';

function Formulario() {
    const [result, setResult] = React.useState("");
  
    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "1b77cb56-9879-43c1-8ca2-12334f9c16ab");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("¡Formulario enviado!");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  
    return (
        <div className="grid items-center justify-center min-h-screen">
          <form 
            className="bg-white shadow-md rounded-lg p-8 max-w-lg w-full"
          >
            <div className="mb-6">
              <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-2">
                Nombre
              </label>
              <input 
                type="text" 
                name="nombre" 
                id="nombre" 
                required 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
      
            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input 
                type="email" 
                name="email" 
                id="email" 
                required 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
      
            <div className="mb-6">
              <label htmlFor="Mensaje" className="block text-sm font-medium text-gray-700 mb-2">
                Mensaje
              </label>
              <textarea 
                name="Mensaje" 
                id="Mensaje" 
                required 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 h-32 resize-none"
              ></textarea>
            </div>
      
            <button 
              type="submit" 
              className='py-2 px-4 bg-marca-verdeoscuro hover:bg-marca-verdeoscuro_hover text-white font-bold rounded-xl transition duration-300'
              >
              Enviar
            </button>
          </form>
      
          <span className="mt-4 text-center text-gray-600 block">{result}</span>
        </div>
      );
      
  }
  
  export default Formulario;