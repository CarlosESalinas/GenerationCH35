import './Astros.css'
import { useEffect, useState } from 'react';
import Astro from './Astro.jsx'

// Mandar a llamar la API utilzando Hooks (useState, useEffect)
// Componente para agregar unfo de la API Astros dentros de las cards
const Astros = () =>{
    // Definir URL de la API
    const ASTROS_URL = "http://api.open-notify.org/astros.json";
    // Implementado UseState
    const [astros, setAstros] = useState([]);

    // Implementando UseEffect
    useEffect(() => {
        fetchAstros();
    }, []) // Para que se ejecute una sola vez

    // Implementando UseEffect
    const fetchAstros = () => {
        fetch(ASTROS_URL)
            .then(response => response.json())
            .then(data => setAstros(data.people)) //Para que la información viva dentro del componente actualizado, traigo setAstros y le paso los datos de `people` de la API
            .catch(error => console.error(error))
    }

    console.log(astros);
    // Enviar la info a las cards
    return (
        <>
        {
            astros.map((astro, index)=> (   
                // Exportar el compo nente Astro
                // Crear llave única para cada elemento del array
                // Desestructurar el objeto astro
                <Astro key={index} {...astro} />
            ))
        }        
        </>
    )
}

export default Astros