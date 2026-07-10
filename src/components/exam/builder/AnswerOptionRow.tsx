export type AnswerOption = {
  label: string;
  text: string;
  isCorrect: boolean;
};

type AnswerOptionRowProps = {
  option: AnswerOption;
  name: string;
  onChange?: () => void;
};

export default function AnswerOptionRow({
  option,
  name,
  onChange,
}: AnswerOptionRowProps) {
  return (
    <div className="flex items-center gap-4 group">
      <input
        type="radio"
        name={name}
        defaultChecked={option.isCorrect}
        onChange={onChange}
        className="shrink-0 w-5 h-5 text-primary-container bg-surface-container-low border-outline-variant focus:ring-primary-container"
      />
      <div
        className={`flex-grow flex items-center bg-surface-container-low rounded-lg p-1 transition-all group-hover:border-primary-container ${
          option.isCorrect
            ? "border border-primary-container/40"
            : "border border-outline-variant group-hover:border-outline"
        }`}
      >
        <span className="font-mono text-[12px] font-medium tracking-[0.05em] leading-none px-4 text-on-surface-variant shrink-0">
          {option.label}
        </span>
        <input
          className="w-full bg-transparent border-none focus:ring-0 text-on-surface font-sans text-base leading-[1.6] py-2 outline-none"
          type="text"
          defaultValue={option.text}
        />
        {option.isCorrect && (
          <span className="bg-green-100 text-green-700 border-green-300 dark:bg-green-900/30 dark:text-green-400 dark:border-green-800 text-[10px] font-bold px-2 py-1 rounded mr-2 uppercase tracking-widest border shrink-0">
            Correct
          </span>
        )}
      </div>
    </div>
  );
}
