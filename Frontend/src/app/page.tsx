"use client";

import { useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { Topbar } from "@/components/Topbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ProfileForm from "@/components/ProfileForm";
import ResumeAnalyzer from "@/components/ResumeAnalyzer";
import AnswerGenerator from "@/components/AnswerGenerator";
import { useToast } from "@/components/ui/use-toast";

export default function Page() {
  const [user, setUser] = useState<any>(null);
  const [analysis, setAnalysis] = useState<any>(null);
  const [generated, setGenerated] = useState<any>(null);
  const { toast } = useToast();

  return (
    <div className="max-w-7xl mx-auto p-6">
      <Topbar />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6">
        {/* Sidebar */}
        <aside className="lg:col-span-3">
          <Sidebar onQuick={(msg)=>toast({ description: msg })} />
        </aside>

        {/* Main */}
        <main className="lg:col-span-9 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="shadow-sm">
              <CardHeader><CardTitle>Profile</CardTitle></CardHeader>
              <CardContent>
                <ProfileForm onSaved={(u)=>{ setUser(u); toast({ description: "Profile saved" })}} />
              </CardContent>
            </Card>

            <Card className="shadow-sm">
              <CardHeader><CardTitle>Quick Answer</CardTitle></CardHeader>
              <CardContent>
                <AnswerGenerator user={user} onGenerated={(g)=>{ setGenerated(g); toast({ description: "Answer generated" })}} />
              </CardContent>
            </Card>
          </div>

          <Card className="shadow-sm">
            <CardHeader><CardTitle>Resume Analyzer</CardTitle></CardHeader>
            <CardContent>
              <ResumeAnalyzer user={user} onAnalyzed={(a)=>{ setAnalysis(a); toast({ description: "Resume analyzed" })}} />
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-3 gap-4">
            <Card className="shadow-sm">
              <CardHeader><CardTitle>Score</CardTitle></CardHeader>
              <CardContent>
                <div className="text-4xl font-bold">{analysis ? analysis.score : "—"}</div>
                <div className="text-sm text-slate-500">Out of 100</div>
              </CardContent>
            </Card>

            <Card className="shadow-sm">
              <CardHeader><CardTitle>Detected Keywords</CardTitle></CardHeader>
              <CardContent className="text-sm">
                {analysis?.foundKeywords?.length ? analysis.foundKeywords.join(", ") : "—"}
              </CardContent>
            </Card>

            <Card className="shadow-sm">
              <CardHeader><CardTitle>Tips</CardTitle></CardHeader>
              <CardContent>
                <ul className="text-sm list-disc pl-5">
                  {analysis?.tips?.length ? analysis.tips.map((t:string,i:number)=><li key={i}>{t}</li>) : <li>No suggestions yet</li>}
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="shadow-sm">
            <CardHeader><CardTitle>Generated Answer Preview</CardTitle></CardHeader>
            <CardContent>
              {generated ? (
                <>
                  <pre className="whitespace-pre-wrap text-sm">{generated.answer}</pre>
                  <div className="mt-4 flex gap-2">
                    <button
                      className="px-4 py-2 rounded-md bg-emerald-600 text-white"
                      onClick={() => navigator.clipboard.writeText(generated.answer)}
                    >
                      Copy
                    </button>
                    <button className="px-4 py-2 rounded-md border" onClick={()=>toast({ description: "Thanks for the feedback!" })}>
                      Give feedback
                    </button>
                  </div>
                </>
              ) : <div className="text-sm text-slate-500">Generate an answer to preview it here</div>}
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
}
