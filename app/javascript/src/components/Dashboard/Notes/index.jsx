import React, { useState, useEffect } from "react";

import EmptyNotesListImage from "images/EmptyNotesList";
import { Button, PageLoader } from "neetoui";
import { Container, Header } from "neetoui/layouts";

import notesApi from "apis/notes";
import EmptyState from "components/Common/EmptyState";

import Card from "./Card";
import DeleteAlert from "./DeleteAlert";
import MenuBar from "./MenuBar";
import NewNotePane from "./Pane/NewNote";

const Notes = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isNewNotePaneOpen, setIsNewNotePaneOpen] = useState(false);
  const [isDeleteAlertOpen, setIsDeleteAlertOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedNote, setSelectedNote] = useState({});
  const [notes, setNotes] = useState([]);
  const [isMenuBarOpen, setIsMenuBarOpen] = useState(false);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      setIsLoading(true);
      const {
        data: { notes },
      } = await notesApi.fetch();
      setNotes(notes);
    } catch (error) {
      logger.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <PageLoader />;
  }

  return (
    <>
      <MenuBar isMenuBarOpen={isMenuBarOpen} />
      <Container>
        <Header
          title="All Notes"
          actionBlock={
            <Button
              label="Add Note"
              size="small"
              onClick={() => setIsNewNotePaneOpen(true)}
            />
          }
          menuBarToggle={() =>
            setIsMenuBarOpen(isMenuBarOpen => !isMenuBarOpen)
          }
          searchProps={{
            value: searchTerm,
            onChange: e => setSearchTerm(e.target.value),
          }}
        />
        {notes.length > 0 ? (
          notes.map(note => (
            <Card
              key={note.id}
              note={note}
              setIsDeleteAlertOpen={setIsDeleteAlertOpen}
              setSelectedNote={setSelectedNote}
            />
          ))
        ) : (
          <EmptyState
            image={EmptyNotesListImage}
            primaryAction={() => setIsNewNotePaneOpen(true)}
            primaryActionLabel="Add Note"
            subtitle="Add your notes to send customized emails to them."
            title="Looks like you don't have any notes!"
          />
        )}
        <NewNotePane
          fetchNotes={fetchNotes}
          isNewNotePaneOpen={isNewNotePaneOpen}
          setIsNewNotePaneOpen={setIsNewNotePaneOpen}
        />
        <DeleteAlert
          isOpen={isDeleteAlertOpen}
          refetch={fetchNotes}
          selectedNote={selectedNote}
          setSelectedNote={setSelectedNote}
          onClose={() => setIsDeleteAlertOpen(false)}
        />
      </Container>
    </>
  );
};

export default Notes;
