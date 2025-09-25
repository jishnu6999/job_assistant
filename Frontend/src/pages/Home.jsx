import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <section className="section">
        <div className="container-outer grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl font-extrabold leading-tight text-slate-900">
              Land Your Dream Job <span className="text-brand">Faster & Smarter</span>
            </h1>
            <p className="mt-3 text-slate-600">
              AI-powered resume analysis and answer generation to help you win more interviews.
            </p>
            <div className="mt-5 flex gap-3">
              <a href="#start" className="btn btn-primary">Get Started</a>
              <Link to="/terms" className="btn bg-white border border-slate-200 hover:bg-slate-100">View Terms</Link>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow p-6">
            <div className="text-sm text-slate-600">Demo block — replace with your app preview later.</div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-outer">
          <h2 className="text-2xl font-bold">Everything You Need to Get Hired</h2>
          <ul className="mt-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {["Smart Resume Analysis","Autofill","Interview Practice","Application Tracking"].map((t,i)=>(
              <li key={i} className="bg-white rounded-xl shadow p-5">{t}</li>
            ))}
          </ul>
        </div>
      </section>

      <section id="start" className="py-12 bg-brand text-white">
        <div className="container-outer text-center">
          <h3 className="text-2xl font-bold">Ready to Accelerate Your Job Search?</h3>
          <p className="mt-2 text-white/90">Join job seekers landing more interviews with AI-assisted preparation.</p>
          <div className="mt-6">
            <a className="btn bg-white text-slate-900 hover:bg-slate-100" href="#">Start Free Trial →</a>
          </div>
        </div>
      </section>
    </>
  );
}
