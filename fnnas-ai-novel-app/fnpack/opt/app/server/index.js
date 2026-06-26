const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 5001;

app.use(cors());
app.use(bodyParser.json());

// Mock data for novels
const novels = [
  {
    id: 1,
    title: 'Sample Novel',
    author: 'Author Name',
    description: 'A sample novel created with the AI Novel Writing Assistant',
    chapters: [
      {
        id: 1,
        title: 'Chapter 1',
        content: 'This is the first chapter of the novel.'
      }
    ]
  }
];

// Routes
app.get('/api/novels', (req, res) => {
  res.json(novels);
});

app.post('/api/novels', (req, res) => {
  const newNovel = {
    id: novels.length + 1,
    ...req.body,
    chapters: []
  };
  novels.push(newNovel);
  res.json(newNovel);
});

app.get('/api/novels/:id', (req, res) => {
  const novel = novels.find(n => n.id === parseInt(req.params.id));
  if (novel) {
    res.json(novel);
  } else {
    res.status(404).json({ message: 'Novel not found' });
  }
});

app.post('/api/novels/:id/chapters', (req, res) => {
  const novel = novels.find(n => n.id === parseInt(req.params.id));
  if (novel) {
    const newChapter = {
      id: novel.chapters.length + 1,
      ...req.body
    };
    novel.chapters.push(newChapter);
    res.json(newChapter);
  } else {
    res.status(404).json({ message: 'Novel not found' });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
