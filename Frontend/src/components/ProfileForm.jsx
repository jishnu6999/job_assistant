import React, { useState, useEffect } from 'react';

export default function ProfileForm({ backend, onSaved, user }) {
  const [name, setName] = useState(user?.name || '');
  const [email, setEmail] = useState(user?.email || '');
  const [title, setTitle] = useState(user?.title || '');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user) {
      setName(user.name || '');
      setEmail(user.email || '');
      setTitle(user.title || '');
    }
  }, [user]);

  const save = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${backend}/api/users`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, title })
      });
      const data = await res.json();
      onSaved(data);
    } catch (err) {
      console.error(err);
      alert('Save failed - check backend.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Profile</h2>
      <label>Name<input value={name} onChange={e => setName(e.target.value)} /></label>
      <label>Email<input value={email} onChange={e => setEmail(e.target.value)} /></label>
      <label>Title<input value={title} onChange={e => setTitle(e.target.value)} /></label>
      <button onClick={save} disabled={loading || !name || !email}>{loading ? 'Saving...' : 'Save Profile'}</button>
      {user && <div style={{marginTop:8}}>Saved: {user.name} ({user.email})</div>}
    </div>
  );
}

