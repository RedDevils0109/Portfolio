import Header from "./Components/Header/Header"
import Home from "./Components/Home/Home"
import About from "./Components/About/About"
import Skill from "./Components/Skill/Skill"
import Contact from "./Components/Contact/Contact"
import Footer from "./Components/Footer/Footer"
import Projects from "./Components/Project/Projects"
import ScrollBarFunc from "./Components/ScrollBarFunc"

function App() {
  ScrollBarFunc();
  return (
    <>
      <Header></Header>
      <Home></Home>
      <About></About>
      <Skill></Skill>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
    </>
  )


}

export default App
