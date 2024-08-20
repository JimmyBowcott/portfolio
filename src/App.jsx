import { Routes, Route} from "react-router-dom";
import Homepage from './pages/Homepage'
import ErrorPage from './pages/ErrorPage'
import AboutPage from './pages/AboutPage'
import Pixterest from './pages/Pixterest'
import AlgorithmVisualiser from './pages/AlgorithmVisualiser'
import KnightMoves from './pages/KnightMoves'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

function App() {

  return (
    <div className="flex flex-col w-full min-h-screen bg-white text-slate-800 text-lg justify-center items-center">
      <NavBar />
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects/pixterest" element={<Pixterest />} />
            <Route path="/projects/algorithm-visualiser" element={<AlgorithmVisualiser />} />
            <Route path="/projects/knight-moves" element={<KnightMoves />} />
            <Route path="*" element={<ErrorPage />} />
        </Routes>
      <Footer />
    </div>
  )
}

export default App
