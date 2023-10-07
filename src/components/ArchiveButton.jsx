function ArchiveButton({ id, isArchived, onArchive }) {
  return (
    <button className="note-item__archive-button" onClick={() => onArchive(id)}>
        {!isArchived ? "Arsipkan" : "Pindahkan"}
    </button>
  );
}

export default ArchiveButton;
