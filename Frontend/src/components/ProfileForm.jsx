import React, { useState, useEffect } from 'react';

export default function ProfileForm({ backend, onSaved, user }) {
  const [name, setName] = useState(user?.name || '');
  const [email, setEmail] = useState(user?.email || '');
  const [title, setTitle] = useState(user?.title || '');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if(user){
      setName(user.name||'');
      setEmail(user.email||'');
      setTitle(user.title||'');
    }
  }, [user]);

  const save = async () => {
    if(!name || !email) return alert('Name and email required');
    setLoading(true);
    try {
      const res = await fetch(`${backend}/api/users`, {
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify({ name, email, title })
      });
      const data = await res.json();
      onSaved(data);
    } catch(err){
      console.error(err);
      alert('Save failed');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <h3 className="font-semibold mb-2">Profile</h3>
      <div className="space-y-3">
        <div>
          <div className="kv">Full name</div>
          <input value={name} onChange={e=>setName(e.target.value)} className="w-full border p-2 rounded-md mt-1" />
        </div>
        <div>
          <div className="kv">Email</div>
          <input value={email} onChange={e=>setEmail(e.target.value)} className="w-full border p-2 rounded-md mt-1" />
        </div>
        <div>
          <div className="kv">Title</div>
          <input value={title} onChange={e=>setTitle(e.target.value)} className="w-full border p-2 rounded-md mt-1" />
        </div>

        <div className="flex items-center gap-3">
          <button className="btn btn-primary" onClick={save} disabled={loading}>{loading ? 'Saving...' : 'Save profile'}</button>
          <button className="btn btn-ghost" onClick={()=>{ setName(''); setEmail(''); setTitle(''); }}>Reset</button>
        </div>
      </div>
    </div>
  );
}
