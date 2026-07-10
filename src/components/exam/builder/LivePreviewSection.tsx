import { Eye } from "lucide-react";
import QuestionPreview from "./QuestionPreview";

export default function LivePreviewSection() {
  return (
    <section className="space-y-6 pt-6 border-t border-outline-variant">
      <div className="flex items-center gap-2 text-on-surface-variant">
        <Eye size={22} />
        <h3 className="font-heading text-[18px] font-semibold leading-[1.4] text-on-surface-variant">
          Live Preview
        </h3>
      </div>
      <QuestionPreview />
    </section>
  );
}
