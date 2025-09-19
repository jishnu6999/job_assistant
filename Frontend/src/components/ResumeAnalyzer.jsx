import React, { useState } from 'react';

export default function ResumeAnalyzer({ backend, user, onAnalyzed }) {
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);

  const analyze = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${backend}/api/resume/analyze`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ userId: user?.id, resumeText: text })
      });
      const data = await res.json();
      onAnalyzed(data);
    } catch (err) {
      console.error(err);
      alert('Analysis failed - check backend.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Resume Analyzer</h2>
      <textarea rows={8} value={text} onChange={e => setText(e.target.value)} placeholder="Paste resume text here..." />
      <button onClick={analyze} disabled={loading || !text}>{loading ? 'Analyzing...' : 'Analyze Resume'}</button>
    </div>
  );
}

