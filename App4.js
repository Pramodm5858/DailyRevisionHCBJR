import React from 'react';
import './App.css';
import ThirdMain from './ThirdMain';
import NoteStatea from './Context3/NoteStatea';
import Logina from './Context3/Logina';
import Profilea from './Context3/Profilea';
import "bootstrap/dist/css/bootstrap.min.css";

function App4() {
  return (
    <>
    
    <NoteStatea>

    <div className='App'>
      <ThirdMain />
      <Logina />
      <Profilea />
    </div>

    </NoteStatea>

    
    </>
    

  );
}
export default App4;


