// backend/index.js
const express = require('express');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Simple in-memory stores (ephemeral)
const users = new Map();
const analyses = new Map();

// Health check
app.get('/status', (req, res) => res.json({ status: 'ok', uptime: process.uptime() }));

// Create user profile
app.post('/api/users', (req, res) => {
  const { name, email, title } = req.body;
  if (!name || !email) return res.status(400).json({ error: 'name and email required' });
  const id = uuidv4();
  const user = { id, name, email, title: title || '' , createdAt: new Date().toISOString() };
  users.set(id, user);
  return res.status(201).json(user);
});

// Get user
app.get('/api/users/:id', (req, res) => {
  const user = users.get(req.params.id);
  if (!user) return res.status(404).json({ error: 'user not found' });
  return res.json(user);
});

// Resume analyze - simple rule-based scorer (placeholder for LLM)
app.post('/api/resume/analyze', (req, res) => {
  const { userId, resumeText } = req.body;
  if (!resumeText) return res.status(400).json({ error: 'resumeText required' });

  // very simple scoring logic:
  const lengthScore = Math.min(60, Math.floor(resumeText.length / 20)); // up to 60 points by length
  const keywords = ['react', 'node', 'python', 'sql', 'engineer', 'project', 'team', 'design', 'develop', 'data'];
  const found = keywords.filter(k => resumeText.toLowerCase().includes(k));
  const keywordScore = Math.min(40, found.length * 6); // up to 40 points
  const score = Math.min(100, lengthScore + keywordScore);

  const tips = [];
  if (score < 50) tips.push('Add measurable achievements (numbers, outcomes).');
  if (found.length < 3) tips.push('Include more relevant keywords and tools used.');
  if (resumeText.length < 400) tips.push('Increase detail — show concrete project results.');

  const analysis = {
    id: uuidv4(),
    userId: userId || null,
    score,
    foundKeywords: found,
    tips,
    createdAt: new Date().toISOString()
  };
  analyses.set(analysis.id, analysis);
  return res.json(analysis);
});

// Generate answer (templated placeholder)
app.post('/api/generate/answer', (req, res) => {
  const { userId, prompt } = req.body;
  if (!prompt) return res.status(400).json({ error: 'prompt required' });

  const user = userId ? users.get(userId) : null;
  const userName = user ? user.name : 'Candidate';

  // simple template as placeholder until LLM is integrated
  const answer = `Hi ${userName},\n\nHere's a suggested answer for: "${prompt}"\n\n1) Start with 1-2 lines summarizing relevant experience.\n2) Give a concrete short example with metrics.\n3) Mention what you learned and how it helps the role.\n\n(Replace with real LLM output later.)`;

  return res.json({ id: uuidv4(), answer, createdAt: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`Backend running: http://localhost:${PORT}`);
});

