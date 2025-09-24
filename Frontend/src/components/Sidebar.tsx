export function Sidebar({ onQuick }:{ onQuick:(msg:string)=>void }) {
  return (
    <div className="bg-white rounded-xl p-5 shadow-sm sticky top-6">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 rounded-lg bg-emerald-700 text-white flex items-center justify-center font-bold">JA</div>
        <div>
          <div className="font-semibold">Job Assistant</div>
          <div className="text-xs text-slate-500">Resume scoring • answers</div>
        </div>
      </div>

      <h4 className="text-sm font-medium mb-2">Quick Actions</h4>
      <div className="flex flex-col gap-2">
        <button className="px-4 py-2 rounded-md bg-emerald-600 text-white" onClick={()=>onQuick("Start by saving your profile")}>
          Save profile
        </button>
        <button className="px-4 py-2 rounded-md border" onClick={()=>onQuick("Try analyzing your resume")}>
          Analyze resume
        </button>
      </div>

      <h4 className="text-sm font-medium mt-4 mb-2">Tips</h4>
      <ul className="text-sm text-slate-600 list-disc pl-5 space-y-1">
        <li>Keep profile concise</li>
        <li>Paste bullet points</li>
        <li>Use metrics & tools</li>
      </ul>
    </div>
  );
}
