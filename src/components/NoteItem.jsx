import NoteItemBody from "./NoteItemBody";
import NoteItemTitle from "./NoteItemTitle";
import NoteItemAction from "./NoteItemAction";

function NoteItem({
  id,
  title,
  body,
  createdAt,
  archived,
  onDelete,
  onArchive,
}) {
  return (
    <>
      <div className="note-item">
        <div className="note-item__content">
          <NoteItemTitle title={title} createdAt={createdAt} />
          <NoteItemBody body={body} />
        </div>
        <NoteItemAction id={id} onDelete={onDelete} onArchive={onArchive} isArchived={archived} />
      </div>
    </>
  );
}

export default NoteItem;
