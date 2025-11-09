import React from "react";

export function Container({
  children,
}: {
  children: React.ReactNode | React.ReactNode[];
}) {
  return (
    <div className="w-full px-auto flex flex-col justify-center min-h-screen">
      <div className="px-2">{children}</div>
    </div>
  );
}
