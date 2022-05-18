import React from 'react'
import './output-component.css'

export default function OutputComponent(props) {
  console.log(props.outPut)
  return (
    <div>
      {
        props.outPut.map(({id, name, weight, string}) => (
          <div key={id} style={{display: "flex", justifyContent: 'space-between'}}>
            <p>{name}</p>
            <p>{weight}</p>
            <p>{string}</p>
          </div>
        ))
      }
    </div>
  )
}
