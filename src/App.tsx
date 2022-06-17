import React from 'react';
import { AppCodeSplitting } from './components/code-splitting/AppCodeSplitting';
import { AppErr } from './components/error-boundary/AppErr';
import { AppHoc } from './components/hoc/AppHoc';
import { AppRenderProps } from './components/rendering-props/AppRenderProps';


function App() {
  return (
    <>
      {/* <AppCodeSplitting /> */}
      {/* <AppErr /> */}
      {/* <AppHoc /> */}
      <AppRenderProps />
    </>
  )
}

export default App;