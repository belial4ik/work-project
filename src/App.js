import React, { useState } from 'react'
import './App.css';
import FormComponent from './pages/main/components/form-component/form-component';
import OutputComponent from './pages/main/components/output-component/output-component';

const initialState = [
  { id: 1, name: 'KB 121212', weight: 100, string: 100, },
  { id: 2, name: 'CBODEC 569877', weight: 500, string: 1800, }
]

function App() {
  const [ state, setState ] = useState(initialState)
  return (
    <div className="App">
      <h1>Сборка заявок</h1>
      <>
        <FormComponent />
      </>

      <>
        <OutputComponent outPut={state} />
      </>
    </div>
  );
}

export default App;