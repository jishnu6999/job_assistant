import React from "react";
import { Link } from "react-router-dom";

export default function Hero(){
  return (
    <section className="section">
      <div className="container-outer">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight text-ink">
              Land Your Dream Job <span className="text-brand">Faster &amp; Smarter</span>
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              AI-powered resume analysis and answer generation to help you win more interviews.
              Built for speed, clarity, and results.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="#get-started" className="btn btn-primary">Get Started Free</a>
              <Link to="/terms" className="btn btn-ghost">View Terms</Link>
            </div>
            <div className="mt-4 text-sm text-slate-500">No credit card required.</div>
          </div>
          <div className="card p-6">
            <img
              alt="App preview"
              className="rounded-lg"
              src="https://images.unsplash.com/photo-1551281044-8d8d6830cf5f?q=80&w=1200&auto=format&fit=crop"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
