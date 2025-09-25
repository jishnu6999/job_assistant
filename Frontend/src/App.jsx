import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800">
      <header className="border-b bg-white sticky top-0 z-10">
        <div className="container-outer py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-brand text-white grid place-items-center font-bold">JA</div>
            <span className="text-lg font-semibold">JobAssist</span>
          </Link>
          <nav className="flex items-center gap-2">
            <Link to="/" className="px-3 py-2 rounded-lg hover:bg-slate-100">Home</Link>
            <Link to="/terms" className="px-3 py-2 rounded-lg hover:bg-slate-100">Terms</Link>
            <Link to="/privacy" className="px-3 py-2 rounded-lg hover:bg-slate-100">Privacy</Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
      </main>

      <footer className="bg-slate-900 text-white">
        <div className="container-outer py-8 text-sm">
          © {new Date().getFullYear()} JobAssist — All rights reserved by <strong>Jishnuvardhan Karpuram</strong>.
        </div>
      </footer>
    </div>
  );
}
