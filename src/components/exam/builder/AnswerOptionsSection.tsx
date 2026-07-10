import { useEffect, useState } from "react";
import { FileCheck, Plus } from "lucide-react";
import AnswerOptionRow from "./AnswerOptionRow";
import type { AnswerOption } from "./AnswerOptionRow";

const mcqOptions: AnswerOption[] = [
  { label: "A", text: "Queue", isCorrect: true },
  { label: "B", text: "Stack", isCorrect: false },
  { label: "C", text: "Tree", isCorrect: false },
  { label: "D", text: "Graph", isCorrect: false },
];

const trueFalseOptions: AnswerOption[] = [
  { label: "A", text: "True", isCorrect: true },
  { label: "B", text: "False", isCorrect: false },
];

type AnswerOptionsSectionProps = {
  questionType?: string;
};

export default function AnswerOptionsSection({
  questionType = "Multiple Choice",
}: AnswerOptionsSectionProps) {
  const isMcq = questionType === "Multiple Choice";
  const [options, setOptions] = useState<AnswerOption[]>(
    isMcq ? mcqOptions : trueFalseOptions,
  );

  useEffect(() => {
    setOptions(isMcq ? mcqOptions : trueFalseOptions);
  }, [isMcq]);

  function handleAddOption() {
    const nextLabel = String.fromCharCode(65 + options.length);
    setOptions((prev) => [
      ...prev,
      { label: nextLabel, text: "", isCorrect: false },
    ]);
  }

  function handleSelectCorrect(index: number) {
    setOptions((prev) =>
      prev.map((opt, i) => ({ ...opt, isCorrect: i === index })),
    );
  }

  return (
    <section className="space-y-6">
      <div className="flex items-center gap-2 text-primary">
        <FileCheck size={22} />
        <h3 className="font-heading text-[24px] font-semibold leading-[1.4] text-on-surface">
          Answer Configuration
        </h3>
      </div>
      <div className="space-y-4">
        {options.map((opt, i) => (
          <AnswerOptionRow
            key={opt.label}
            option={opt}
            name="correct_answer"
            onChange={() => handleSelectCorrect(i)}
          />
        ))}
      </div>
      {isMcq && (
        <button
          type="button"
          onClick={handleAddOption}
          className="flex items-center gap-2 text-primary font-sans text-sm font-semibold leading-none hover:bg-primary-container/10 px-4 py-2 rounded-lg transition-all cursor-pointer"
        >
          <Plus size={18} />
          Add Option
        </button>
      )}
    </section>
  );
}
