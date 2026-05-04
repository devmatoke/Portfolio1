import Header from './components/Header'
import HeroAbout from './components/HeroAbout'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <main>
        <HeroAbout />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </>
  )
}

export default App
