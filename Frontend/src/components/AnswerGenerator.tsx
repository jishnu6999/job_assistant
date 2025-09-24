"use client";

import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const BACKEND = process.env.NEXT_PUBLIC_BACKEND_URL!;

export default function AnswerGenerator({ user, onGenerated }:{ user?:any, onGenerated:(g:any)=>void }) {
  const [prompt,setPrompt] = useState("");
  const [loading,setLoading] = useState(false);

  const generate = async () => {
    if(!prompt) return alert("Enter a prompt");
    setLoading(true);
    try{
      const res = await fetch(`${BACKEND}/api/generate/answer`, {
        method:"POST",
        headers:{ "Content-Type":"application/json" },
        body: JSON.stringify({ userId: user?.id, prompt })
      });
      const data = await res.json();
      onGenerated(data);
    } finally { setLoading(false); }
  };

  return (
    <div className="space-y-3">
      <div>
        <Label>Prompt</Label>
        <Input className="mt-1" value={prompt} onChange={e=>setPrompt(e.target.value)} placeholder='e.g., "Tell me about a time you led a project"' />
      </div>
      <div className="flex gap-2">
        <button className="px-4 py-2 rounded-md bg-emerald-600 text-white" onClick={generate} disabled={loading}>
          {loading ? "Generating..." : "Generate"}
        </button>
        <button className="px-4 py-2 rounded-md border" onClick={()=>setPrompt("")}>
          Reset
        </button>
      </div>
    </div>
  );
}
