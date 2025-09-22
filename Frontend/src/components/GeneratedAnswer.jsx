import React, { useState } from 'react';

export default function GeneratedAnswer({ backend, user, onGenerated }) {
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);

  const generate = async () => {
    if(!prompt) return alert('Enter a prompt');
    setLoading(true);
    try {
      const res = await fetch(`${backend}/api/generate/answer`, {
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify({ userId: user?.id, prompt })
      });
      const data = await res.json();
      onGenerated(data);
    } catch(err){
      console.error(err);
      alert('Generation failed');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <h3 className="font-semibold mb-2">Quick Answer</h3>
      <input className="w-full border p-2 rounded-md" placeholder='e.g., "Tell me about a time you led a project"' value={prompt} onChange={e=>setPrompt(e.target.value)} />
      <div className="mt-3 flex gap-2">
        <button className="btn btn-primary" onClick={generate} disabled={loading}>{loading ? 'Generating...' : 'Generate'}</button>
        <button className="btn btn-ghost" onClick={()=>setPrompt('')}>Reset</button>
      </div>
    </div>
  );
}
