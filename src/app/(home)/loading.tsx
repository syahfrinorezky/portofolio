"use client"; // Jika loading.tsx perlu interaktivitas

import { AnimationLoading } from "../components";

export default function Loading() {
  return (
    <div className="bg-primary flex items-center justify-center min-h-screen">
      <AnimationLoading />
    </div>
  );
}
