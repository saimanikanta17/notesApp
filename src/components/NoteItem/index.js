const NoteItem = props => {
  const {eachNote} = props
  const {title, note} = eachNote
  return (
    <li>
      <h1>{title}</h1>
      <p>{note}</p>
    </li>
  )
}

export default NoteItem
