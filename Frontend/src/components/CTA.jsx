import React from "react";

export default function CTA(){
  return (
    <section id="get-started" className="py-14 bg-brand text-white">
      <div className="container-outer">
        <div className="text-center">
          <h3 className="text-3xl font-bold">Ready to Accelerate Your Job Search?</h3>
          <p className="mt-2 text-white/90">
            Join job seekers landing more interviews with AI-assisted preparation.
          </p>
          <div className="mt-6">
            <a
              className="btn bg-white text-ink hover:bg-slate-100"
              href="http://localhost:5173" /* change if you deploy */
            >
              Start Free Trial →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
