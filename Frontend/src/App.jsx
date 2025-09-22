import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import ProfileForm from './components/ProfileForm';
import ResumeAnalyzer from './components/ResumeAnalyzer';
import GeneratedAnswer from './components/GeneratedAnswer';
import Toast from './components/Toast';

const BACKEND = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000';

export default function App(){
  const [user, setUser] = useState(null);
  const [analysis, setAnalysis] = useState(null);
  const [generated, setGenerated] = useState(null);
  const [toast, setToast] = useState(null);

  const show = (msg) => { setToast(msg); setTimeout(()=>setToast(null),2500); }

  return (
    <div className="app">
      <Topbar />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6">
        {/* Sidebar */}
        <aside className="lg:col-span-3">
          <div className="sidebar card space-y-4">
            <div className="flex items-center gap-3">
              <div className="logo-badge">JA</div>
              <div>
                <div className="font-semibold">Job Assistant</div>
                <div className="kv">Resume scoring · answer generator</div>
              </div>
            </div>

            <div className="mt-3">
              <h4 className="text-sm font-medium mb-2">Quick Actions</h4>
              <div className="flex flex-col gap-2">
                <button className="btn btn-primary" onClick={() => show('Start by saving your profile')}>Save profile</button>
                <button className="btn btn-ghost" onClick={() => show('Try analyzing your resume')}>Analyze resume</button>
              </div>
            </div>

            <div className="mt-4">
              <h4 className="text-sm font-medium mb-2">Tips</h4>
              <ul className="text-sm text-slate-600 list-disc pl-5 space-y-1">
                <li>Start with a concise profile</li>
                <li>Paste bullets — not long paragraphs</li>
                <li>Use specific numbers & tools</li>
              </ul>
            </div>

            <div className="mt-4 kv">
              Version <strong className="text-slate-700">MVP</strong>
            </div>
          </div>
        </aside>

        {/* Main workspace */}
        <main className="lg:col-span-9 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card card-hero">
              <ProfileForm backend={BACKEND} onSaved={(u)=>{ setUser(u); show('Profile saved') }} user={user} />
            </div>

            <div className="card">
              <GeneratedAnswer backend={BACKEND} user={user} onGenerated={(g)=>{ setGenerated(g); show('Answer generated') }} />
            </div>
          </div>

          <div className="card">
            <ResumeAnalyzer backend={BACKEND} user={user} onAnalyzed={(a)=>{ setAnalysis(a); show('Resume analyzed') }} />
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="card">
              <h4 className="font-medium mb-2">Score</h4>
              <div className="text-4xl font-bold">{analysis ? analysis.score : '—'}</div>
              <div className="kv mt-1">Out of 100</div>
            </div>

            <div className="card">
              <h4 className="font-medium mb-2">Detected Keywords</h4>
              <div className="text-sm text-slate-700">{analysis?.foundKeywords?.length ? analysis.foundKeywords.join(', ') : '—'}</div>
            </div>

            <div className="card">
              <h4 className="font-medium mb-2">Tips</h4>
              <ul className="text-sm text-slate-700 list-disc pl-5">
                {analysis?.tips?.length ? analysis.tips.map((t,i)=>(<li key={i}>{t}</li>)) : <li>No suggestions yet</li>}
              </ul>
            </div>
          </div>

          <div className="card">
            <h4 className="font-medium mb-2">Generated Answer Preview</h4>
            <div className="p-4 bg-slate-50 rounded-md min-h-[120px]">
              {generated ? (
                <>
                  <pre className="whitespace-pre-wrap text-sm">{generated.answer}</pre>
                  <div className="mt-4 flex gap-2">
                    <button className="btn btn-primary" onClick={() => { navigator.clipboard.writeText(generated.answer); show('Copied to clipboard') }}>Copy</button>
                    <button className="btn btn-ghost" onClick={() => show('Thanks for the feedback!')}>Give feedback</button>
                  </div>
                </>
              ) : <div className="kv">Generate an answer to preview it here</div>}
            </div>
          </div>
        </main>
      </div>

      {toast && <Toast message={toast} />}
    </div>
  )
}
