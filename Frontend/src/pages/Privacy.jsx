import React from "react";

export default function Privacy() {
  return (
    <section className="section">
      <div className="container-outer">
        <div className="max-w-3xl mx-auto card p-6 sm:p-8">
          <h1 className="text-3xl font-bold text-ink mb-4">Privacy Policy</h1>
          <p className="text-sm text-slate-500 mb-6">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <p className="mb-4">
            We respect your privacy. We collect only the data necessary to provide features
            (e.g., resume analysis requests). We do not sell your data. You may request deletion
            of your data by contacting the owner.
          </p>
          <p className="mb-4">
            Logs may include technical information (timestamps, IPs, user agent) to keep the
            service secure and improve reliability. Reasonable safeguards are used, but no
            system is perfectly secure.
          </p>
          <p>
            Questions? Contact <strong>Jishnuvardhan Karpuram</strong>.
          </p>
        </div>
      </div>
    </section>
  );
}
