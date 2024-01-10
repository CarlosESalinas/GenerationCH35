import './Button.css'

/*  
 > Props: Properties that are passed to components for 
    modifying the text, the info from the render
 > Be assigned as parameters in the function
 > Be call it in the block of code 
 
*/ 

const Button = ({ label }) =>{
    return(
        <>
        <button>
            {label}
        </button>
        </>
    )
}

export default Button;