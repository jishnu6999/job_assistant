import React, { useState } from 'react';

export default function GeneratedAnswer({ backend, user, onGenerated }) {
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);

  const generate = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${backend}/api/generate/answer`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ userId: user?.id, prompt })
      });
      const data = await res.json();
      onGenerated(data);
    } catch (err) {
      console.error(err);
      alert('Generation failed - check backend.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Generate Answer</h2>
      <input value={prompt} onChange={e => setPrompt(e.target.value)} placeholder='e.g., "Tell me about a time you handled conflict"' />
      <button onClick={generate} disabled={loading || !prompt}>{loading ? 'Generating...' : 'Generate'}</button>
    </div>
  );
}

