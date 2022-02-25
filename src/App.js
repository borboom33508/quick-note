import React from 'react'
import './App.css'

const Form = ({addNote}) => {
  const [text, setText] = React.useState("")

  const handleSubmit = (e) =>{
    e.preventDefault();
    if (!text) return;
    console.log(text);
    addNote(text);
    setText("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type={"text"} placeholder={"Type something."} onChange={(e) => setText(e.target.value)} value={text}></input>
    </form>
  )
}

const Card = ({note, index, removeNote}) =>{
  return (
    <div className='card'>
      <p onDoubleClick={() => removeNote(index)}>{note.text}</p>
      <button onClick={() => removeNote(index)}>X</button>
    </div>
  )
}

function App(){
  const [notes, setNote] = React.useState([
    {
    text: "Today I have to eat some fruit 🍇."
  }])
  
  const addNote = text =>{
    const newNote = [...notes, {text}]
    setNote(newNote);
  }

  const removeNote = index =>{
    const newNote = [...notes]
    newNote.splice(index, 1);
    setNote(newNote);
  }

  // const toggleTheme = () =>{
  //   const e = document.body;
  //   e.classList.toggle("dark-mode")
  // }

  return (
    <div className='main-content'>
      {/* <button className='dark-mode'>darkmode</button> */}
      <div className='container'>
        <h1>Quick Note</h1>
        <Form addNote={addNote}/>
      </div>
      {notes.map((note, index) => (
        <Card key={index} index={index} note={note} removeNote={removeNote}/>
      ))}
    </div>
  )
}

export default App