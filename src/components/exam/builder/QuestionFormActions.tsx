export type FormAction = {
  label: string;
  variant: "outline" | "ghost" | "primary-border" | "primary";
  onClick?: () => void;
};

type QuestionFormActionsProps = {
  actions: FormAction[];
  className?: string;
};

const variantStyles: Record<string, string> = {
  outline:
    "border border-outline text-on-surface hover:bg-surface-container-high",
  ghost:
    "text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high",
  "primary-border":
    "border border-primary text-primary hover:bg-primary/10",
  primary:
    "bg-primary-container text-white hover:opacity-90 shadow-lg shadow-primary-container/20",
};

export default function QuestionFormActions({
  actions,
  className = "",
}: QuestionFormActionsProps) {
  return (
    <section
      className={`flex flex-wrap items-center gap-4 ${className}`}
    >
      {actions.map((action) => (
        <button
          key={action.label}
          type="button"
          onClick={action.onClick}
          className={`px-6 py-2.5 rounded-lg transition-all font-sans text-sm font-semibold leading-none cursor-pointer ${variantStyles[action.variant]}`}
        >
          {action.label}
        </button>
      ))}
    </section>
  );
}
