import { ReactNode } from "react";

interface IconWrapperProps {
  children: ReactNode;
}

export default function IconWrapper({ children }: IconWrapperProps) {
  return (
    <div className="rounded-md border bg-gradient-to-b from-muted to-secondary p-0.5 shadow-md from-primary/60 text-primary-foreground">
      {children}
    </div>
  );
}