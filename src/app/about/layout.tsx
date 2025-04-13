import React from "react";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="bg-neutral-800 text-white">{children}</div>;
}
