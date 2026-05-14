import Header from './components/Header'
import HeroAbout from './components/HeroAbout'
import Experience from './components/Experience'
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
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </>
  )
}

export default App
