import './NoteCard.css'

type NoteCardProps = {
  id: number
  content: string
  disabled: boolean
  onDelete: (id: number) => void
}

// Карточка заметки с крестиком для удаления
function NoteCard({ id, content, disabled, onDelete }: NoteCardProps) {
  return (
    <article className="note-card">
      <p className="note-card-content">{content}</p>
      <button
        type="button"
        className="note-card-delete"
        onClick={() => onDelete(id)}
        disabled={disabled}
        aria-label={`Удалить заметку ${id}`}
        title="Удалить"
      >
        ✕
      </button>
    </article>
  )
}

export { NoteCard }
