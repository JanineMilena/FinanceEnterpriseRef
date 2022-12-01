import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import HomePage from './pages/Home'
import Color from './pages/color'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<HomePage />} />
        <Route path='/color' element={<Color />} />
      </Routes>
    </Router>
  )
}

export default App
