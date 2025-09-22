import React from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

export default function Topbar(){
  return (
    <header className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="text-lg font-semibold">Job Assistant</div>
        <div className="kv">Creative UI</div>
      </div>

      <div className="flex items-center gap-3">
        <div className="hidden md:block relative">
          <MagnifyingGlassIcon className="w-5 h-5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input className="pl-9 pr-3 py-2 border border-slate-200 rounded-md" placeholder="Search actions or help..." />
        </div>
        <div className="flex items-center gap-2">
          <button className="btn btn-ghost">Docs</button>
          <button className="btn btn-ghost">Sign in</button>
        </div>
      </div>
    </header>
  );
}
