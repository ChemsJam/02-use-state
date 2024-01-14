import React, {useState} from 'react'
import PropTypes from "prop-types" 

export const EjercicioComponent = ({year}) => {

    const [yearNow, setYearNow]= useState(year);

    const siguiente = e =>{
        setYearNow(yearNow+1)
    }

    const anterior = e =>{
        setYearNow(yearNow-1)
    }

    const cambiarYear = e => {
        let dato = parseInt(e.target.value)

        if(Number.isInteger(dato)){
            setYearNow(dato);
        }else{
            setYearNow(year);
        }

    }

  return (
    <div>
        
    <h2>Ejercicio con Eventos y Usestates</h2>
    <p><strong className='label'>
    {yearNow }    
    </strong>
    </p>

    <p>
        <button onClick={anterior}>Año anterior</button>
        &nbsp;
        <button onClick={siguiente}>Año siguiente</button>
    </p>
    <p>
        Cambiar Año
        <input
            onChange={cambiarYear}

        
        />
    </p>
    </div>
  )
}

EjercicioComponent.protoTypes = {
    year: PropTypes.number.isRequired
}