import React from "react";

const quotes = [
  {
    quote: "The autofill and tailored answers saved me hours every week.",
    name: "Priya S.",
    role: "Data Analyst",
  },
  {
    quote: "Resume tips helped me get 3 interviews in two weeks.",
    name: "Alex M.",
    role: "Frontend Engineer",
  },
];

export default function Testimonials(){
  return (
    <section className="section">
      <div className="container-outer">
        <h2 className="text-3xl font-bold text-ink text-center">Why Users Love JobAssist</h2>
        <p className="text-slate-600 text-center mt-2">Real results from real job seekers.</p>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {quotes.map((q, i)=>(
            <div key={i} className="card p-6">
              <p className="text-slate-800 italic">“{q.quote}”</p>
              <div className="mt-3 text-sm text-slate-600">— {q.name}, {q.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
