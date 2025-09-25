import React from "react";

export default function Terms() {
  return (
    <section className="section">
      <div className="container-outer max-w-3xl">
        <div className="bg-white rounded-xl shadow p-6">
          <h1 className="text-3xl font-bold mb-2">Terms & Conditions</h1>
          <p className="text-sm text-slate-500 mb-6">Last updated: {new Date().toLocaleDateString()}</p>

          <h2 className="text-xl font-semibold mt-4 mb-2">1) Ownership & Intellectual Property</h2>
          <p className="mb-4">
            The project “JobAssist” (including source code, designs, copy, and all derivative works) is owned by
            <strong> Jishnuvardhan Karpuram</strong>. All rights reserved. No part may be reproduced, modified,
            distributed, or sold without prior written permission from the owner, unless otherwise licensed.
          </p>

          <h2 className="text-xl font-semibold mt-4 mb-2">2) Acceptable Use</h2>
          <p className="mb-4">Do not attempt unauthorized access, disrupt services, or reverse engineer proprietary components.</p>

          <h2 className="text-xl font-semibold mt-4 mb-2">3) Generated Content</h2>
          <p className="mb-4">AI outputs are provided “as is”. You are responsible for how you use them.</p>

          <h2 className="text-xl font-semibold mt-4 mb-2">4) No Warranty</h2>
          <p className="mb-4">The service is provided without warranties, express or implied.</p>

          <h2 className="text-xl font-semibold mt-4 mb-2">5) Limitation of Liability</h2>
          <p className="mb-4">We are not liable for indirect, incidental, or consequential damages.</p>

          <h2 className="text-xl font-semibold mt-4 mb-2">6) Changes</h2>
          <p className="mb-4">Terms may change; continued use means you accept the updates.</p>

          <h2 className="text-xl font-semibold mt-4 mb-2">7) Contact</h2>
          <p>For permissions or questions, contact <strong>Jishnuvardhan Karpuram</strong>.</p>
        </div>
      </div>
    </section>
  );
}
