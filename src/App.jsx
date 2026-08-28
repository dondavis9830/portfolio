import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import LandinPage from './pages/LandinPage'
import PageNotFoud from './pages/PageNotFoud'
import Mail from './components/Mail'

function App() {

  return (
    <>
    <Header/>
      <Routes>
        <Route path='/' element={<LandinPage/>} />
        <Route path='*' element={<PageNotFoud/>} />
      </Routes>
      <Mail/>
    <Footer/>
    </>
  )
}

export default App
