import React from 'react'
import './form-component.css'

export default function FormComponent() {
  return (
    <form className='form-style'>
      <input type="text" placeholder='name' />
      <input type="text" placeholder='wieght' />
      <input type="text" placeholder='string' />
    </form>
  )
}
