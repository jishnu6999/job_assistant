
import React, { useState } from 'react';
import ProfileForm from './components/ProfileForm';
import ResumeAnalyzer from './components/ResumeAnalyzer';
import GeneratedAnswer from './components/GeneratedAnswer';

const BACKEND = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000';

export default function App(){
  const [user, setUser] = useState(null);
  const [analysis, setAnalysis] = useState(null);
  const [generated, setGenerated] = useState(null);

  return (
    <div className="container">
      <h1>Job Assistant — MVP</h1>

      <div className="card">
        <ProfileForm backend={BACKEND} onSaved={setUser} user={user}/>
      </div>

      <div className="card">
        <ResumeAnalyzer backend={BACKEND} user={user} onAnalyzed={setAnalysis}/>
        {analysis && <div><strong>Score:</strong> {analysis.score} — <em>{analysis.foundKeywords?.join(', ')}</em>
          <div>{analysis.tips?.map((t,i)=><div key={i}>• {t}</div>)}</div>
        </div>}
      </div>

      <div className="card">
        <GeneratedAnswer backend={BACKEND} user={user} onGenerated={setGenerated}/>
        {generated && <pre style={{whiteSpace:'pre-wrap'}}>{generated.answer}</pre>}
      </div>
    </div>
  );
}
