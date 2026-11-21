import { cn } from "utils/functions";

function LinkButton({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "flex items-center gap-2 rounded border border-(--border-color) bg-(--background-surface-color) px-3 py-2 text-xs font-medium transition-colors hover:border-(--primary-color)",
        className,
      )}
    >
      {children}
    </a>
  );
}

export { LinkButton };
