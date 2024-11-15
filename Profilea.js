import React, { useContext } from 'react'
import NoteContexta from './NoteContexta'

export default function Profilea() {


    const { user } = useContext(NoteContexta);

    if (!user) return <div>details sould not be empty </div>

    return (
        <div>Profilea is {user.name} and {user.password} </div>
    )
}
