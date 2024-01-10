import { Link } from "react-router-dom"

const Contacto = () => {
    return (
        <div>
            <h1> Esta es la página de Contacto</h1>
            <Link to="/">
                Regresar a Inicio
            </Link>
        </div>
    );
}

export default Contacto;