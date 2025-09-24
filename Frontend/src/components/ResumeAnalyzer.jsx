"use client";

import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const BACKEND = process.env.NEXT_PUBLIC_BACKEND_URL!;

export default function ResumeAnalyzer({ user, onAnalyzed }:{ user?:any, onAnalyzed:(a:any)=>void }) {
  const [text,setText] = useState("");
  const [loading,setLoading] = useState(false);

  const analyze = async () => {
    if(!text) return alert("Paste resume text first");
    setLoading(true);
    try{
      const res = await fetch(`${BACKEND}/api/resume/analyze`, {
        method:"POST",
        headers:{ "Content-Type":"application/json" },
        body: JSON.stringify({ userId: user?.id, resumeText: text })
      });
      const data = await res.json();
      onAnalyzed(data);
    } finally { setLoading(false); }
  };

  return (
    <div className="space-y-3">
      <div>
        <Label>Resume text / bullets</Label>
        <Textarea className="mt-1 min-h-[10rem]" value={text} onChange={e=>setText(e.target.value)} />
      </div>
      <div className="flex gap-2">
        <button className="px-4 py-2 rounded-md bg-emerald-600 text-white" onClick={analyze} disabled={loading}>
          {loading ? "Analyzing..." : "Analyze"}
        </button>
        <button className="px-4 py-2 rounded-md border" onClick={()=>{ setText(""); onAnalyzed(null); }}>
          Clear
        </button>
      </div>
    </div>
  );
}
