import React from 'react';
import { AppCodeSplitting } from './components/code-splitting/AppCodeSplitting';
import { AppErr } from './components/error-boundary/AppErr';


function App() {
  return (
    <>
      {/* <AppCodeSplitting /> */}
      <AppErr />
    </>
  )
}

export default App;