import './App.css'
import { Navbar } from './components/navbar/navbar'
import {Banner} from './components/banner/banner'
import { AboutUs } from './components/about-us/AboutUs'
import { Partfolio } from './components/partfolio/partfolio'
function App() {

  return (
    <>
      <Navbar />
      <Banner />
      <AboutUs />
      <Partfolio />
    </>
  )
}

export default App
