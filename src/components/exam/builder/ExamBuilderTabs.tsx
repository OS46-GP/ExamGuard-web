import type { LucideIcon } from "lucide-react";

export type BuilderTab = {
  label: string;
  icon: LucideIcon;
};

type ExamBuilderTabsProps = {
  tabs: BuilderTab[];
  activeTab: string;
  onTabChange: (tab: string) => void;
};

export default function ExamBuilderTabs({
  tabs,
  activeTab,
  onTabChange,
}: ExamBuilderTabsProps) {
  return (
    <div className="flex items-center gap-8 border-b border-outline-variant px-2">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = tab.label === activeTab;
        return (
          <button
            key={tab.label}
            onClick={() => onTabChange(tab.label)}
            className={
              isActive
                ? "inline-flex items-center gap-2 py-4 font-sans text-sm font-semibold leading-none text-primary border-b-2 border-primary relative -mb-px transition-colors cursor-pointer"
                : "inline-flex items-center gap-2 py-4 font-sans text-sm font-semibold leading-none text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer"
            }
          >
            <Icon size={18} />
            <span className="hidden sm:inline">{tab.label}</span>
          </button>
        );
      })}
    </div>
  );
}
