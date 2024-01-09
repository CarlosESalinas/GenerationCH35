import './Main.css' // import the css file
import GenMxLogo from '../assets/generationmx.jpg'

const Main = () => {
    return (
        <>
        <div className="main--container">
            <div className="main--head">
                <a href="https://mexico.generation.org/" target='_blank'>
                    <img src ={ GenMxLogo} className='main--logo' alt='Logo Gen Mex' />
                </a>
            </div>
            <h1>React + Vite </h1>
            <h2>Astros API </h2>
        </div>
        </>
    )

}

export default Main