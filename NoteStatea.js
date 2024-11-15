import React, { useState } from 'react'
import NoteContexta from "./NoteContexta";

export default function NoteStatea({children}) {

    const [user, setUser] = useState(null);

  return (
    <NoteContexta.Provider value={{user,setUser}}>
        {children}
    </NoteContexta.Provider>
  )    
}
