import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [novels, setNovels] = useState([]);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    fetch('http://localhost:5001/api/novels')
      .then(res => res.json())
      .then(data => setNovels(data));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:5001/api/novels', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ title, author, description })
    })
      .then(res => res.json())
      .then(data => setNovels([...novels, data]))
      .then(() => {
        setTitle('');
        setAuthor('');
        setDescription('');
      });
  };

  return (
    <div className="app">
      <h1>AI Novel Writing Assistant</h1>
      
      <div className="create-novel">
        <h2>Create New Novel</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Title:</label>
            <input 
              type="text" 
              value={title} 
              onChange={(e) => setTitle(e.target.value)} 
              required
            />
          </div>
          <div>
            <label>Author:</label>
            <input 
              type="text" 
              value={author} 
              onChange={(e) => setAuthor(e.target.value)} 
              required
            />
          </div>
          <div>
            <label>Description:</label>
            <textarea 
              value={description} 
              onChange={(e) => setDescription(e.target.value)} 
              required
            ></textarea>
          </div>
          <button type="submit">Create Novel</button>
        </form>
      </div>

      <div className="novel-list">
        <h2>Novels</h2>
        {novels.map(novel => (
          <div key={novel.id} className="novel-card">
            <h3>{novel.title}</h3>
            <p>Author: {novel.author}</p>
            <p>{novel.description}</p>
            <p>Chapters: {novel.chapters.length}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
