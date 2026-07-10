import { Info } from "lucide-react";

type ExplanationSectionProps = {
  initialExplanation?: string;
};

export default function ExplanationSection({
  initialExplanation = "A Queue follows the First In First Out principle.",
}: ExplanationSectionProps) {
  return (
    <section className="space-y-4">
      <div className="flex items-center gap-2 text-primary">
        <Info size={22} />
        <h3 className="font-heading text-[24px] font-semibold leading-[1.4] text-on-surface">
          Explanation
        </h3>
      </div>
      <p className="font-sans text-sm leading-[1.5] text-on-surface-variant">
        Students will see this after the exam is graded.
      </p>
      <textarea
        className="w-full h-24 bg-surface-container-low border border-outline-variant rounded-lg p-4 font-sans text-base leading-[1.6] text-on-surface placeholder:text-on-surface-variant/30 focus:ring-2 focus:ring-primary-container focus:outline-none transition-all resize-none"
        defaultValue={initialExplanation}
      />
    </section>
  );
}
