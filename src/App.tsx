import './App.css';
import { FormEvent, useState } from 'react';
import { Note } from './types';

function App() {
  const [title, setTitle] = useState('Test Title');
  const [content, setContent] = useState('Test Content');
  const [notes, setNotes] = useState<Note[]>([]);

  function createNote(newNote: Note) {
    setNotes([...notes, newNote]);
  }

  function clearValues() {
    setTitle('');
    setContent('');
  }

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const newNote: Note = {
      content,
      created: new Date(),
      id: '1',
      title,
      updated: new Date(),
    };
    createNote(newNote);
    clearValues();
  }

  return (
    <div className="min-h-screen flex justify-center items-center">
      <form onSubmit={onSubmit}>
        <label>Title</label>
        <input type={'text'} value={title} onChange={(e) => setTitle(e.target.value)} />

        <label>Content</label>
        <textarea value={content} onChange={(e) => setContent(e.target.value)} />

        <input type={'submit'} value={'Save'} />
      </form>
    </div>
  );
}

export default App;
