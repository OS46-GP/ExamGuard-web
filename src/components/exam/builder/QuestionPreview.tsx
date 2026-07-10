import { useState } from "react";
import QuestionHeader from "@/components/exam/session/QuestionHeader";
import QuestionOptionsList from "@/components/exam/session/QuestionOptionsList";

type Option = {
  value: string;
  label: string;
};

type QuestionPreviewProps = {
  number?: number;
  total?: number;
  points?: number;
  difficulty?: "easy" | "medium" | "hard";
  title?: string;
  context?: string;
  options?: Option[];
};

export default function QuestionPreview({
  number = 1,
  total = 10,
  points = 5,
  difficulty = "medium",
  title = "Which data structure follows the FIFO principle?",
  context = "A Queue follows the First In First Out principle.",
  options = [
    { value: "a", label: "Queue" },
    { value: "b", label: "Stack" },
    { value: "c", label: "Tree" },
    { value: "d", label: "Graph" },
  ],
}: QuestionPreviewProps) {
  const [selected, setSelected] = useState<string | undefined>();

  return (
    <div className="bg-surface-container border border-outline-variant rounded-xl p-6 space-y-6">
      <QuestionHeader
        number={number}
        total={total}
        points={points}
        difficulty={difficulty}
      />
      <div className="space-y-2">
        <h2 className="font-heading text-xl text-on-surface">{title}</h2>
        <p className="text-sm text-on-surface-variant leading-relaxed">
          {context}
        </p>
      </div>
      <QuestionOptionsList
        name="preview"
        options={options}
        selected={selected}
        onSelect={setSelected}
      />
    </div>
  );
}
