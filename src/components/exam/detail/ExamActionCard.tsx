import { ArrowRight, Info } from "lucide-react";
import GlassCard from "@/components/shared/GlassCard";
import { Button } from "@/components/ui/button";

type ExamActionCardProps = {
  questionsCount: number;
  timeLimitMinutes: number;
  passingScore: number;
  onStart?: () => void;
};

export default function ExamActionCard({
  questionsCount,
  timeLimitMinutes,
  passingScore,
  onStart,
}: ExamActionCardProps) {
  return (
    <GlassCard className="p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-8 items-center border-l-4 border-l-primary-container">
      <div className="flex-1 space-y-4 w-full">
        <div className="flex flex-wrap gap-x-6 gap-y-3">
          <div className="flex flex-col">
            <span className="font-mono text-xs text-outline uppercase tracking-wider">
              Questions
            </span>
            <span className="font-heading text-2xl font-semibold text-on-surface">
              {questionsCount} Items
            </span>
          </div>
          <div className="w-px h-10 bg-outline-variant hidden sm:block self-end" />
          <div className="flex flex-col">
            <span className="font-mono text-xs text-outline uppercase tracking-wider">
              Time Limit
            </span>
            <span className="font-heading text-2xl font-semibold text-on-surface">
              {timeLimitMinutes} Min
            </span>
          </div>
          <div className="w-px h-10 bg-outline-variant hidden sm:block self-end" />
          <div className="flex flex-col">
            <span className="font-mono text-xs text-outline uppercase tracking-wider">
              Passing
            </span>
            <span className="font-heading text-2xl font-semibold text-on-surface">
              {passingScore}%
            </span>
          </div>
        </div>
        <div className="bg-surface-container p-4 rounded-lg flex items-start gap-3">
          <Info className="size-5 text-primary shrink-0 mt-0.5" />
          <p className="text-body-sm text-on-surface-variant">
            Browser lockdown will be initiated upon starting. All other
            applications must be closed.
          </p>
        </div>
      </div>
      <Button
        size="lg"
        onClick={onStart}
        className="w-full md:w-48 h-14 text-base font-bold gap-2 rounded-xl"
      >
        Start Exam
        <ArrowRight className="size-5" />
      </Button>
    </GlassCard>
  );
}
