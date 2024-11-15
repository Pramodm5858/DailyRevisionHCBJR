import React, { useContext, useState } from 'react'
import NoteContexta from './NoteContexta'

export default function Logina() {

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");


    const { setUser } = useContext(NoteContexta)

    const HandleSubmit = (e) => {
        e.preventDefault();
        setUser({ name, password })
    }

    return (
        <div>
            <h1>Logina</h1>
            <form onSubmit={HandleSubmit}>
                <label>Enter Name</label>
                <input type='text' placeholder='name here please' value={name} onChange={(e) => { setName(e.target.value) }} />
                <input type='text' placeholder='password here please' value={password} onChange={(e) => { setPassword(e.target.value) }} />


                <input type='submit' />

            </form>
        </div>
    )
}
