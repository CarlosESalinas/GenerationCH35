import './Navbar.css' // Importación de CSS
import IssLogo from '../assets/ISS_logo.svg'

const Navbar = () =>{
    const url1 = "https://www.nasa.gov/international-space-station/";
    const url2 = "http://open-notify.org/Open-Notify-API/People-In-Space/";
    const url3 = "https://www.nasa.gov/mission/apollo-13/";

    return(
        <> 
        <div className = 'navbar--container'>
            <div className = 'navbar--title'>
                <a href={ url1 } id="link--logo">
                    <img src={ IssLogo } alt="ISS Logo"/>
                </a>
            </div>
            <div className = 'navbar--links'>
                <div className = 'navbar--link'>
                    <a href = { url1 }> Home </a>
                </div>
                <div className = 'navbar--link'>
                    <a href = { url2 }> About </a>
                </div>
                <div className = 'navbar--link'>
                    <a href = { url3 }> Astros API </a>
                </div>
            </div>
        </div>        
        </>
    )
}

export default Navbar;