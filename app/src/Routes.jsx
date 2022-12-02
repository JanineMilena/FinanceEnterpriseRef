import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import {Login} from './pages/Login'
import {Register} from './pages/Register'
import {Dashboard} from './pages/Dashboard'

import Tests from './pages/tests'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/dashboard' element={<Register />} />

        <Route path='/tests' element={<Tests />} />
      </Routes>
    </Router>
  )
}

export default App
