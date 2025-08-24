import { cn } from "utils/functions";

export default function LinkButton({
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
      rel="noreferrer"
      className={cn(
        "rounded border border-(--border-color) bg-(--surface-color) px-3 py-2 text-xs font-medium text-(--text-color) transition-colors hover:border-(--primary-color)",
        className,
      )}
    >
      {children}
    </a>
  );
}
