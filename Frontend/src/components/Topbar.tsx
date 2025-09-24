import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export function Topbar() {
  return (
    <header className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="text-lg font-semibold">Job Assistant</div>
        <div className="text-sm text-slate-500">Professional UI</div>
      </div>

      <div className="flex items-center gap-3">
        <div className="hidden md:block relative">
          <MagnifyingGlassIcon className="w-5 h-5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input className="pl-9 pr-3 py-2 border rounded-md bg-white" placeholder="Search actions or help..." />
        </div>
        <button className="px-4 py-2 rounded-md border">Docs</button>
      </div>
    </header>
  );
}
