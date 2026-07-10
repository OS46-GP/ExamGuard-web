import { ChevronDown } from "lucide-react";

export default function BasicInfoForm() {
  return (
    <div className="bg-surface-container-low border border-outline-variant rounded-xl p-8 space-y-8">
      {/* ── General Section ── */}
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="md:col-span-2 space-y-2">
            <label className="text-on-surface-variant font-sans text-sm font-semibold leading-none">
              Exam Title
            </label>
            <input
              className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary-container focus:outline-none transition-all text-on-surface placeholder:text-on-surface-variant/60"
              placeholder="e.g. Final Assessment"
              defaultValue="Data Structures Midterm 2025"
            />
          </div>
          <div className="space-y-2">
            <label className="text-on-surface-variant font-sans text-sm font-semibold leading-none">
              Course
            </label>
            <div className="relative">
              <input
                className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary-container focus:outline-none transition-all text-on-surface"
                defaultValue="CS301"
              />
              <ChevronDown
                size={18}
                className="absolute right-4 top-3.5 text-on-surface-variant pointer-events-none"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-on-surface-variant font-sans text-sm font-semibold leading-none">
              Duration (Minutes)
            </label>
            <input
              className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary-container focus:outline-none transition-all text-on-surface"
              type="number"
              defaultValue={90}
            />
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-on-surface-variant font-sans text-sm font-semibold leading-none">
            Description
          </label>
          <textarea
            className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary-container focus:outline-none transition-all text-on-surface resize-none placeholder:text-on-surface-variant/60"
            rows={4}
            defaultValue="Comprehensive midterm exam covering Linked Lists, Binary Trees, and Hash Maps. Students are expected to solve both theoretical and practical coding snippets."
          />
        </div>
      </div>

      {/* ── Separator ── */}
      <div className="h-px bg-outline-variant" />

      {/* ── Scheduling Section ── */}
      <div className="space-y-6">
        <h3 className="font-heading text-2xl font-semibold leading-tight text-on-surface">
          Availability &amp; Performance
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-on-surface-variant font-sans text-sm font-semibold leading-none">
              Start Date &amp; Time
            </label>
            <input
              className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary-container focus:outline-none transition-all text-on-surface"
              type="datetime-local"
              defaultValue="2025-03-15T09:00"
            />
          </div>
          <div className="space-y-2">
            <label className="text-on-surface-variant font-sans text-sm font-semibold leading-none">
              End Date &amp; Time
            </label>
            <input
              className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary-container focus:outline-none transition-all text-on-surface"
              type="datetime-local"
              defaultValue="2025-03-15T11:00"
            />
          </div>
          <div className="space-y-2">
            <label className="text-on-surface-variant font-sans text-sm font-semibold leading-none">
              Passing Score (%)
            </label>
            <input
              className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary-container focus:outline-none transition-all text-on-surface"
              type="number"
              defaultValue={60}
            />
          </div>
          <div className="space-y-2">
            <label className="text-on-surface-variant font-sans text-sm font-semibold leading-none">
              Visibility
            </label>
            <div className="relative">
              <select className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary-container focus:outline-none transition-all text-on-surface appearance-none cursor-pointer">
                <option>Draft</option>
                <option>Scheduled</option>
                <option>Hidden</option>
              </select>
              <ChevronDown
                size={18}
                className="absolute right-4 top-3.5 text-on-surface-variant pointer-events-none"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
