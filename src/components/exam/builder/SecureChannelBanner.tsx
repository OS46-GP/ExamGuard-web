export default function SecureChannelBanner() {
  return (
    <div className="relative h-40 rounded-xl overflow-hidden border border-outline-variant bg-surface-container-lowest">
      <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-background to-transparent">
        <span className="font-heading text-sm font-bold text-primary">
          Secure Channel Active
        </span>
        <p className="text-[10px] text-on-surface-variant font-mono font-medium tracking-wider">
          Encrypted connection to proctoring nodes...
        </p>
      </div>
    </div>
  );
}
