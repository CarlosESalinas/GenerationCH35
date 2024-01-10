import './App.css'
import Navbar from './components/Navbar.jsx'
import Main from './components/Main.jsx'
import Button from './components/Button.jsx'
import Products from './components/Products.jsx'
import Card from './components/Card.jsx'


function App() {
  const imgFashion = "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/82/6142201/1.jpg?2933";
  const imgDark = "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/01/241417/1.jpg?6747";
  const imgCamel = "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/06/4410121/1.jpg?4437";

  return (
    <>
      <Navbar />
      <Main />
      <Button label='Get Info'/>
      <Button label= 'Send Info'/>
      <Products 
        img= {imgFashion}
        name="Fasion"
        description="Tennis Fitness Running Purple"
        price="$1958"
      />
      <Products 
        img= {imgDark}
        name="Dark"
        description="Tennis Running Dark"
        price="$2058"
      />
      <Products 
        img= {imgCamel}
        name="Camel"
        description="Casual Tennis"
        price="$3431"
      />

      {/* MUI & JoyUI Components*/}
      <Card />
      
    </>
  )
}

export default App
