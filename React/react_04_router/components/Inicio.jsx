import { Link } from "react-router-dom"

const Incio = () => {
    return (
        <div>
            <h1>Esta es la página de Inicio</h1>
            <Link to="about-us">
                Presiona aquí para ir a Sobre Nosotros
            </Link>
            <br />
            <Link to="contact">
                Presiona aquí para ir a Contacto
            </Link>
        </div>
    );
}

export default Incio;
