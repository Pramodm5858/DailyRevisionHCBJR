import React from 'react';
import './App.css';

import SecMain from './SecMain';
import NoteStated from './Context2/NoteStated';
import Logind from "./Context2/Logind";
import Profiled from "./Context2/Profiled";

function App3() {
  return (
    <>
      <NoteStated>
        <SecMain />
        <Logind />
        <Profiled />
      </NoteStated>
    </>

  );
}
export default App3;


