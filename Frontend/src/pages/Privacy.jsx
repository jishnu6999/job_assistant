import React from "react";

export default function Privacy() {
  return (
    <section className="section">
      <div className="container-outer max-w-3xl">
        <div className="bg-white rounded-xl shadow p-6">
          <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
          <p className="text-sm text-slate-500 mb-6">Last updated: {new Date().toLocaleDateString()}</p>

          <p className="mb-4">
            We collect only what’s necessary to provide features (like resume analysis requests). We do not sell your data.
            You can request deletion by contacting the owner.
          </p>
          <p className="mb-2">
            Logs may include technical info (timestamps, IPs, user agent) for security and reliability. We use reasonable safeguards,
            but no system is perfectly secure.
          </p>
          <p>Questions? Contact <strong>Jishnuvardhan Karpuram</strong>.</p>
        </div>
      </div>
    </section>
  );
}
