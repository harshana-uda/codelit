import { useEffect, useState } from "react"
import * as esbuild from 'esbuild-wasm' 

function App() {
  const [input, setInput] = useState(''); // To trake the code write into the text area
  const [code, setCode] = useState(''); // To store tranpited code

  const startService = async () => {
    try {
      await esbuild.initialize({wasmURL: '/esbuild.wasm'})
    }
    catch {
    }
  }

  useEffect(()=> {
    startService();
  }, [])
  
  const onClick = async () => {
      // Transpile the code using esbuild
      console.log(`Code you've written so far\n\t${input}`);
  }

  return (
    <>
      <textarea cols={50} rows={18} defaultValue={'// Enter some code here'} onChange={e => setInput(e.target.value)}></textarea>
      <button 
        style={{display: 'block', margin: '8px 0 0', padding: '5px'}}
        onClick={onClick}
      >
          Submit</button>
      <hr></hr>
      {/* To show the transpile code */}
      <pre>{ code }</pre>
    </>
  )
}

export default App
