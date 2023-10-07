import DeleteButton from "./DeleteButton";
import ArchiveButton from "./ArchiveButton";

function NoteItemAction({ id, isArchived, onDelete, onArchive }) {
  return (
    <>
      <div className="note-item__action">
        <DeleteButton id={id} onDelete={onDelete} />
        <ArchiveButton id={id} onArchive={onArchive} isArchived={isArchived} />
      </div>
    </>
  );
}

export default NoteItemAction;
