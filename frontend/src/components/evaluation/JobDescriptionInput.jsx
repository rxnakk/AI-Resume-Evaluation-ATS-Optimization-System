export default function JobDescriptionInput({ value, onChange, error }) {
  return (
    <div className="space-y-2">
      <label htmlFor="job-description" className="block text-sm font-medium text-slate-300">
        Job Description
      </label>
      <textarea
        id="job-description"
        rows={8}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Paste the job description here. Include required skills, qualifications, and responsibilities for accurate matching..."
        className="
          w-full px-4 py-3 rounded-xl
          bg-slate-800/60 border border-slate-600/50
          text-slate-200 placeholder-slate-500
          focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50
          resize-y min-h-[180px] transition-all
        "
      />
      <div className="flex justify-between items-center">
        {error ? (
          <p className="text-red-400 text-sm">{error}</p>
        ) : (
          <p className="text-slate-600 text-xs">
            Tip: Include technical skills and keywords from the job posting
          </p>
        )}
        <span className="text-slate-600 text-xs">{value.length} characters</span>
      </div>
    </div>
  )
}
