import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Dashboard from './components/code-splitting/Dashboard';
import { Home } from './components/code-splitting/Home';
// import Profile from './components/code-splitting/Profile';

/**
 * Dynamically import components using react lazy
 * React.Lazy() is a function that takes another function as an argument.
 * The argument calls a dynamic imports (here we specify the path of a component)
 * 
 * A promise will be return from this dynamic import which is then converted into
 * a module that contains a default export react component.
 * 
 * The component which we want to lazy load have to have default export (not named export)
 * 
 * Step-2 
 * we include lazy components as part of the route configuration.
 * 
 * Note- only with this configuration, if we try to run the app, we will see a error.
 * A react component suspended while rendering, but no fallback UI was specified.
 * To fix this error, we have to use the suspense component from react
 * 
 * Dynamic import is asynchronous and hence the loading fallback is rendered
 * while resource is downloaded in the background.
 * 
 * fallback will take any jsx.
 */

const LazyProfile = React.lazy(() => import('./components/code-splitting/Profile'));
const LazyDashboard = React.lazy(() => import('./components/code-splitting/Dashboard'));

function App() {
  return (<>
    <BrowserRouter>
      <Routes>
        <React.Suspense fallback='Loading...'>
          <Route path='/' element={<Home />} />
          <Route path='profile' element={<LazyProfile />} />
          <Route path='dashboard' element={<LazyDashboard />} />
        </React.Suspense>
      </Routes>
    </BrowserRouter>
  </>)
}

export default App;