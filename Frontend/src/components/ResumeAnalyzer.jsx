import React, { useState } from 'react';

export default function ResumeAnalyzer({ backend, user, onAnalyzed }) {
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);

  const analyze = async () => {
    if(!text) return alert('Paste resume text first');
    setLoading(true);
    try {
      const res = await fetch(`${backend}/api/resume/analyze`, {
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify({ userId: user?.id, resumeText: text })
      });
      const data = await res.json();
      onAnalyzed(data);
    } catch(err){
      console.error(err);
      alert('Analysis failed');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <h3 className="font-semibold mb-2">Resume Analyzer</h3>
      <textarea className="resumetext" value={text} onChange={e=>setText(e.target.value)} placeholder="Paste bullets or text..." />
      <div className="mt-3 flex gap-2">
        <button className="btn btn-primary" onClick={analyze} disabled={loading}>{loading ? 'Analyzing...' : 'Analyze'}</button>
        <button className="btn btn-ghost" onClick={()=>{ setText(''); onAnalyzed(null); }}>Clear</button>
      </div>
    </div>
  );
}
