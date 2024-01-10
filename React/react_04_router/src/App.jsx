import './App.css'
import { Route, Routes } from 'react-router-dom'
import Inicio from '../components/Inicio'
import Nosotros from '../components/SobreNosotros'
import Contacto from '../components/Contacto'

/*
 > Routes: Actuá como contenedor padre de todas las rutas individuañes que se crearán en la aplicación.
 > Route: Es la ruta hija de cada componente. Recibe dos atributos:
  1. path: Es el path (URL) de la ruta.
  2. element: Es el componente que se renderizará en la ruta.
 */


function App() {
  
  return (
    <>
    <Routes>
      <Route path='/' element={ <Inicio /> } />
      <Route path='about-us' element={ <Nosotros /> } />
      <Route path='contact' element={ <Contacto /> } />
    </Routes>
    
    </>   
  )
}

export default App