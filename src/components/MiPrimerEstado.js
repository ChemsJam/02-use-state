import React, {useState} from 'react'

export const MiPrimerEstado = () => {
    
    /*

    //problematica
    let nombre = "Johan Ontiveros"

    const cambiarName = e => {
        nombre = "Mi pana el Tavito"
    }

    */

   const [ nombre, setNombre ]= useState('Mi panta el tavito')

    const ChangeName = (e, nombreFijo) =>{
        setNombre(nombreFijo)
    }

    return (
    <div>
        
        <h3>Componente 1: Mi primer Estado</h3>
        <strong className='label'>
            {nombre}
        </strong>
        
        <input type='text' onKeyUp={ e => ChangeName(e, e.target.value)} placeholder='Cambia el nombre'/>

        <button onClick={e => ChangeName(e,"Tujan panita")}>Cambiar</button>
        

    </div>
    )
}
