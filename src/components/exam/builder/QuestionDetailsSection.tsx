import { FileEdit, ChevronDown } from "lucide-react";

type QuestionDetailsSectionProps = {
  questionText?: string;
  questionType?: string;
  points?: number;
  difficulty?: string;
  onTypeChange?: (type: string) => void;
};

export default function QuestionDetailsSection({
  questionText = "Which data structure follows the FIFO principle?",
  questionType = "Multiple Choice",
  points = 5,
  difficulty = "Medium",
  onTypeChange,
}: QuestionDetailsSectionProps) {
  return (
    <section className="space-y-6">
      <div className="flex items-center gap-2 text-primary">
        <FileEdit size={22} />
        <h3 className="font-heading text-[24px] font-semibold leading-[1.4] text-on-surface">
          Question Details
        </h3>
      </div>
      <div className="grid grid-cols-6 gap-6">
        <div className="col-span-6 space-y-2">
          <label className="block text-on-surface-variant font-sans text-sm font-semibold leading-none">
            Question Text
          </label>
          <textarea
            className="w-full h-32 bg-surface-container-low border border-outline-variant rounded-lg p-4 font-sans text-base leading-[1.6] text-on-surface placeholder:text-on-surface-variant/30 focus:ring-2 focus:ring-primary-container focus:outline-none transition-all resize-none"
            placeholder="Enter the main question body here..."
            defaultValue={questionText}
          />
        </div>
        <div className="col-span-6 sm:col-span-2 space-y-2">
          <label className="block text-on-surface-variant font-sans text-sm font-semibold leading-none">
            Type
          </label>
          <div className="relative">
            <select
              className="w-full bg-surface-container-low border border-outline-variant rounded-lg p-3 font-sans text-base leading-none text-on-surface focus:ring-2 focus:ring-primary-container focus:outline-none appearance-none cursor-pointer transition-all"
              defaultValue={questionType}
              onChange={(e) => onTypeChange?.(e.target.value)}
            >
              <option>Multiple Choice</option>
              <option>True / False</option>
            </select>
            <ChevronDown
              size={18}
              className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant"
            />
          </div>
        </div>
        <div className="col-span-6 sm:col-span-2 space-y-2">
          <label className="block text-on-surface-variant font-sans text-sm font-semibold leading-none">
            Points
          </label>
          <input
            className="w-full bg-surface-container-low border border-outline-variant rounded-lg p-3 font-sans text-base leading-none text-on-surface focus:ring-2 focus:ring-primary-container focus:outline-none transition-all"
            type="number"
            defaultValue={points}
          />
        </div>
        <div className="col-span-6 sm:col-span-2 space-y-2">
          <label className="block text-on-surface-variant font-sans text-sm font-semibold leading-none">
            Difficulty
          </label>
          <div className="relative">
            <select
              className="w-full bg-surface-container-low border border-outline-variant rounded-lg p-3 font-sans text-base leading-none text-on-surface focus:ring-2 focus:ring-primary-container focus:outline-none appearance-none cursor-pointer transition-all"
              defaultValue={difficulty}
            >
              <option>Easy</option>
              <option>Medium</option>
              <option>Hard</option>
            </select>
            <ChevronDown
              size={18}
              className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
