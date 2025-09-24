"use client";

import { useState, useEffect } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const BACKEND = process.env.NEXT_PUBLIC_BACKEND_URL!;

export default function ProfileForm({ onSaved, user }:{ onSaved:(u:any)=>void, user?:any }) {
  const [name,setName] = useState(user?.name||"");
  const [email,setEmail] = useState(user?.email||"");
  const [title,setTitle] = useState(user?.title||"");
  const [loading,setLoading] = useState(false);

  useEffect(()=>{ if(user){ setName(user.name||""); setEmail(user.email||""); setTitle(user.title||""); }},[user]);

  const save = async () => {
    if(!name || !email) return alert("Name and email required");
    setLoading(true);
    try {
      const res = await fetch(`${BACKEND}/api/users`, {
        method:"POST",
        headers:{ "Content-Type":"application/json" },
        body: JSON.stringify({ name, email, title })
      });
      const data = await res.json();
      onSaved(data);
    } finally { setLoading(false); }
  };

  return (
    <div className="space-y-3">
      <div>
        <Label>Full name</Label>
        <Input className="mt-1" value={name} onChange={e=>setName(e.target.value)} />
      </div>
      <div>
        <Label>Email</Label>
        <Input className="mt-1" value={email} onChange={e=>setEmail(e.target.value)} />
      </div>
      <div>
        <Label>Title</Label>
        <Input className="mt-1" value={title} onChange={e=>setTitle(e.target.value)} />
      </div>
      <div className="flex gap-2 pt-1">
        <button className="px-4 py-2 rounded-md bg-emerald-600 text-white" onClick={save} disabled={loading}>
          {loading ? "Saving..." : "Save profile"}
        </button>
        <button className="px-4 py-2 rounded-md border" onClick={()=>{ setName(""); setEmail(""); setTitle(""); }}>
          Reset
        </button>
      </div>
    </div>
  );
}
