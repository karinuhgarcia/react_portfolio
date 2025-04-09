import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Aboutme from './components/AboutMe'
import Contact from './components/Contact'
import Resume from './components/Resume'
import Portfolio from './components/Portfolio'

function App() {

  return (
    <div id='mainPage'>
      <Header />
      <Aboutme />
      <Portfolio />
      <Contact />
      <Resume />

      <Footer />
    </div>
  )
}

export default App
