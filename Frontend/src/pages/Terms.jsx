import React from "react";

export default function Terms() {
  return (
    <section className="section">
      <div className="container-outer">
        <div className="max-w-3xl mx-auto card p-6 sm:p-8">
          <h1 className="text-3xl font-bold text-ink mb-4">Terms & Conditions</h1>
          <p className="text-sm text-slate-500 mb-6">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-2">1. Ownership & Intellectual Property</h2>
          <p className="mb-4">
            The project “JobAssist” (including source code, designs, copy, and all derivative
            works) is owned by <strong>Jishnuvardhan Karpuram</strong>. All rights are reserved by the owner.
            No part of the project may be reproduced, modified, distributed, or sold without
            the owner’s prior written permission, unless explicitly stated otherwise in a
            separate written license.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-2">2. Acceptable Use</h2>
          <p className="mb-4">
            You agree not to misuse the site or APIs, and not to attempt to gain unauthorized
            access to systems, disrupt services, or reverse engineer proprietary components.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-2">3. Generated Content</h2>
          <p className="mb-4">
            AI-generated outputs are provided “as is” for informational purposes. You are
            responsible for reviewing and deciding how to use any generated content.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-2">4. No Warranty</h2>
          <p className="mb-4">
            The service is provided without warranties of any kind, express or implied.
            We do not guarantee accuracy, reliability, or suitability for any purpose.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-2">5. Limitation of Liability</h2>
          <p className="mb-4">
            To the maximum extent permitted by law, we are not liable for any indirect,
            incidental, or consequential damages arising from your use of the service.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-2">6. Changes</h2>
          <p className="mb-4">
            Terms may be updated from time to time. Continued use of the site after changes
            indicates acceptance of the revised terms.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-2">7. Contact</h2>
          <p>
            For permissions or questions, contact <strong>Jishnuvardhan Karpuram</strong>.
          </p>
        </div>
      </div>
    </section>
  );
}
