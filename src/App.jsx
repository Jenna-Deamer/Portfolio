//Vercel insights & analytics import
import { inject } from '@vercel/analytics';
import { SpeedInsights } from '@vercel/speed-insights/react'; 
// components
import Nav from './components/Nav'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
// inject Vercel Analytics
inject();
function App() {
  return (
    <>
    <Nav />
 <main>
  <Hero />
  <Skills />
  <Projects />
  <Contact />
  <Footer/>
 </main>
 <SpeedInsights />
    </>
  )
}

export default App
