import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Dashboard } from './components/code-splitting/Dashboard';
import { Home } from './components/code-splitting/Home';
import { Profile } from './components/code-splitting/Profile';

function App() {
  return (<>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='profile' element={<Profile />} />
        <Route path='dashboard' element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  </>)
}

export default App;