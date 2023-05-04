import {useState} from 'react'
import {v4} from 'uuid'
import NoteItem from '../NoteItem'
import {Heading} from './styledComponents'

const Notes = () => {
  const [title, titleFunction] = useState('')
  const [note, noteFunction] = useState('')
  const [notesDetails, addNotesFunction] = useState([])

  const onChangeTitle = event => {
    titleFunction(event.target.value)
  }

  const onChangeNote = event => {
    noteFunction(event.target.value)
  }

  const addNotes = event => {
    event.preventDefault()
    const newNote = {
      id: v4(),
      title,
      note,
    }
    addNotesFunction(prevState => [...prevState, newNote])
    titleFunction('')
    noteFunction('')
  }

  const noNotes = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
        alt="notes empty"
      />
      <h1>No Notes Yet</h1>
      <p>Notes you add will appear here</p>
    </div>
  )

  const notesList = () => (
    <ul>
      {notesDetails.map(eachNote => (
        <NoteItem eachNote={eachNote} key={eachNote.id} />
      ))}
    </ul>
  )

  const showNotes = notesDetails.length > 0

  return (
    <div>
      <Heading>Notes</Heading>
      <form onSubmit={addNotes}>
        <input
          placeholder="Title"
          type="text"
          onChange={onChangeTitle}
          value={title}
        />
        <textarea
          placeholder="Take a Note..."
          rows="4"
          onChange={onChangeNote}
          value={note}
        />
        <button type="submit">Add</button>
      </form>
      {showNotes ? notesList() : noNotes()}
    </div>
  )
}
export default Notes
