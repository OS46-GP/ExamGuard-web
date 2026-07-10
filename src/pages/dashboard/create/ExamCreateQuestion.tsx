import { useState } from "react";
import QuestionDetailsSection from "@/components/exam/builder/QuestionDetailsSection";
import AnswerOptionsSection from "@/components/exam/builder/AnswerOptionsSection";
import ExplanationSection from "@/components/exam/builder/ExplanationSection";
import QuestionFormActions from "@/components/exam/builder/QuestionFormActions";
import type { FormAction } from "@/components/exam/builder/QuestionFormActions";
import LivePreviewSection from "@/components/exam/builder/LivePreviewSection";

const formActions: FormAction[] = [
  { label: "Cancel", variant: "outline" },
  { label: "Save Draft", variant: "ghost" },
  { label: "Save & Add Another", variant: "primary-border" },
  { label: "Save Question", variant: "primary" },
];

export default function ExamCreateQuestion() {
  const [questionType, setQuestionType] = useState("Multiple Choice");

  return (
    <div className="pt-8 flex justify-center">
      <div className="w-full max-w-[900px] flex flex-col gap-12">
        <QuestionDetailsSection
          onTypeChange={setQuestionType}
        />
        <AnswerOptionsSection questionType={questionType} />
        {questionType === "Multiple Choice" && <ExplanationSection />}
        <QuestionFormActions actions={formActions} />
        <LivePreviewSection />
      </div>
    </div>
  );
}
