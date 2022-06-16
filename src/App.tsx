import React from 'react';
import { AppCodeSplitting } from './components/code-splitting/AppCodeSplitting';
import { AppErr } from './components/error-boundary/AppErr';
import { AppHoc } from './components/hoc/AppHoc';


function App() {
  return (
    <>
      {/* <AppCodeSplitting /> */}
      {/* <AppErr /> */}
      <AppHoc />
    </>
  )
}

export default App;