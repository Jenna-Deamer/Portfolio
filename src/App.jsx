//Vercel insights import
import { SpeedInsights } from '@vercel/speed-insights/react';
//Vercel analytics import
import { inject } from '@vercel/analytics';
// components
import Nav from './components/Nav'
import Hero from './components/Hero'
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
  <Projects />
  <Contact />
  <Footer/>
  <SpeedInsights />
 </main>
    </>
  )
}

export default App
