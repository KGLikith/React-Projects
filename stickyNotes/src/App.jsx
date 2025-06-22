import { useState } from 'react'
import './App.css'
import Notes from './components/Notes'

function App() {
  const savedNotes = JSON.parse(localStorage.getItem("Notes")) ;
  let length=0
  if(savedNotes){
    length=savedNotes[savedNotes.length-1].id;
  }
    
  const [count, setCount] = useState(length)
  const [notes, setnotes] = useState([])

  return (
    <>
      <div>
        <Notes count={count} setcount={setCount} notes={notes} setnotes={setnotes} />
      </div>
    </>
  )
}

export default App