import type { ReactNode } from "react";

export function PlayMoment({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`font-sans ${className}`}>{children}</div>;
}
