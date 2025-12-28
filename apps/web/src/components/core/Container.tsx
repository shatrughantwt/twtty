import React from "react";
import { cn } from "@/lib/utils";

export default function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("max-w-5xl mx-auto container", className)}>
    {children}
  </div>
  );
}
