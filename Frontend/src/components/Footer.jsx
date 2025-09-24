import React from "react";
import { Link } from "react-router-dom";

export default function Footer(){
  return (
    <footer className="bg-ink text-white">
      <div className="container-outer py-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-white text-ink grid place-items-center font-bold">JA</div>
            <div className="font-semibold">JobAssist</div>
          </div>
          <nav className="flex items-center gap-4 text-sm">
            <Link className="text-white/80 hover:text-white" to="/terms">Terms</Link>
            <Link className="text-white/80 hover:text-white" to="/privacy">Privacy</Link>
            <a className="text-white/80 hover:text-white" href="http://localhost:5000/status" target="_blank" rel="noreferrer">API</a>
          </nav>
        </div>
        <div className="mt-6 text-sm text-white/70">
          © {new Date().getFullYear()} JobAssist. All rights reserved. Built by <strong>Jishnuvardhan Karpuram</strong>.  
          All project IP (code, design, content) is owned by Jishnuvardhan Karpuram unless otherwise stated.
        </div>
      </div>
    </footer>
  );
}
