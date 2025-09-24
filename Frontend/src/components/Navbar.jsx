import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar(){
  const loc = useLocation();
  const link = (to, label) => (
    <Link
      to={to}
      className={`text-sm px-3 py-2 rounded-lg hover:bg-slate-100 ${loc.pathname === to ? "text-ink font-semibold" : "text-slate-600"}`}
    >
      {label}
    </Link>
  );

  return (
    <header className="border-b bg-white/70 backdrop-blur sticky top-0 z-30">
      <div className="container-outer py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl bg-brand text-white grid place-items-center font-bold">JA</div>
          <span className="text-lg font-semibold">JobAssist</span>
        </Link>
        <nav className="flex items-center gap-1">
          {link("/", "Home")}
          {link("/terms", "Terms")}
          {link("/privacy", "Privacy")}
          <a
            href="http://localhost:5000/status"
            target="_blank"
            rel="noreferrer"
            className="text-sm px-3 py-2 rounded-lg text-slate-600 hover:bg-slate-100"
          >
            API Status
          </a>
          <a
            href="#get-started"
            className="btn btn-primary"
          >
            Get Started
          </a>
        </nav>
      </div>
    </header>
  );
}
