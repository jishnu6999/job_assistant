import React from "react";

const items = [
  {
    title: "Smart Resume Analysis",
    desc: "Detailed feedback and scoring to improve interview callback rates.",
    icon: "📄",
  },
  {
    title: "Job Application Autofill",
    desc: "Auto-fill common fields using your saved profile and resume data.",
    icon: "⚡",
  },
  {
    title: "Interview Practice",
    desc: "Generate tailored practice questions and concise model answers.",
    icon: "🎯",
  },
  {
    title: "Application Tracking",
    desc: "Stay organized with simple tracking and reminders.",
    icon: "📈",
  },
];

export default function Features(){
  return (
    <section className="section bg-gradient-to-b from-white to-slate-50">
      <div className="container-outer">
        <h2 className="text-3xl font-bold text-ink text-center">Everything You Need to Get Hired</h2>
        <p className="text-slate-600 text-center mt-2">A clear toolkit for every step of your job search.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it,i)=>(
            <div key={i} className="card p-6 hover:shadow-lg transition">
              <div className="text-3xl">{it.icon}</div>
              <div className="mt-3 text-lg font-semibold">{it.title}</div>
              <p className="text-sm text-slate-600 mt-1">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
