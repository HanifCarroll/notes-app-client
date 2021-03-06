import './App.css';
import { DateTime } from 'luxon';
import { FormEvent, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Note } from './types';

function App() {
  const [title, setTitle] = useState('Test Title');
  const [content, setContent] = useState('Test Content');
  const [notes, setNotes] = useState<Note[]>([]);

  function createNote(newNote: Note) {
    setNotes([...notes, newNote]);
  }

  function deleteNote(id: string) {
    setNotes(notes.filter((note) => note.id !== id));
  }

  function clearValues() {
    setTitle('');
    setContent('');
  }

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const newNote: Note = {
      content,
      created: DateTime.now(),
      id: uuidv4(),
      title,
      updated: DateTime.now(),
    };
    createNote(newNote);
    clearValues();
  }

  return (
    <div>
      <div className="flex justify-center items-center">
        <form onSubmit={onSubmit}>
          <label>Title</label>
          <input type={'text'} value={title} onChange={(e) => setTitle(e.target.value)} />

          <label>Content</label>
          <textarea value={content} onChange={(e) => setContent(e.target.value)} />

          <input type={'submit'} value={'Save'} />
        </form>
      </div>
      <div>
        {notes.map(({ content, id, title }) => (
          <div>
            <button onClick={() => deleteNote(id)}>Delete</button>
            <h3>{title}</h3>
            <div>{content}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
