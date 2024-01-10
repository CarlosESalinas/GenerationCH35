import { Link } from "react-router-dom"

const SobreNosotros = () => {
    return (
        <div>
            <h1>Esta es la página de Sobre nosotros</h1>
            <Link to="/">
                Regresar a Inicio
            </Link>
        </div>
    );
}

export default SobreNosotros;