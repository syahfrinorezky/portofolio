"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Loading from "./loading";
import { MostSkills } from "./sections";
import { Profile } from "../lib/constants";
import { TypeAnimation } from "react-type-animation";
import { HiArrowDownTray } from "react-icons/hi2";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 12000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="bg-primary min-h-screen flex items-center justify-center">
        <Loading />
      </div>
    );
  }

  return (
    <div className="bg-primary text-white flex flex-col">
      {/* Hero Section */}
      <section className="flex-1 flex items-center justify-center w-full px-4 sm:px-6 py-16  min-h-screen">
        <div className="w-full max-w-screen-lg mx-auto flex flex-col items-center justify-center space-y-6">
          <div
            className="image-container flex items-center justify-center"
            onContextMenu={(e) => e.preventDefault()}>
            <div className="absolute border-b border-t border-white rounded-full w-48 h-48 animate-spin md:w-52 md:h-52 lg:w-56 lg:h-56"></div>
            <Image
              src="/images/personal.webp"
              width={500}
              height={500}
              alt="Personal Image"
              className="w-48 select-none pointer-events-none rounded-full p-2 md:w-52 lg:w-56"
              draggable={false}
              priority
            />
          </div>

          <div className="text-center space-y-3 w-full">
            <h1 className="font-accent font-bold text-3xl md:text-4xl">
              {Profile.name.slice(0, 2).join(" ")}
              <span className="hidden md:inline"> {Profile.name[2]}</span>
            </h1>

            <h2 className="text-lg md:text-xl">
              I&apos;m{" "}
              <TypeAnimation
                sequence={["an IT Student", 2000, "a SysAdmin", 2000]}
                wrapper="span"
                repeat={Infinity}
                cursor={true}
                className="text-accent font-bold"
              />
            </h2>

            <p className="font-secondary text-sm md:text-base max-w-md mx-auto">
              Aspiring to be an IT Professional and continuously learning about
              technology.
            </p>
          </div>

          <Link
            href="/resume"
            className="px-5 py-2 bg-accent flex items-center justify-center gap-x-2 text-primary rounded-sm hover:bg-accent/90 transition-colors">
            <HiArrowDownTray className="w-5 h-5" />
            <span className="font-bold font-secondary">RESUME</span>
          </Link>
        </div>
      </section>

      {/* Skills Section */}
      <section className="w-full px-4 sm:px-6 py-16 bg-primary-dark">
        <div className="w-full max-w-screen-md mx-auto">
          <MostSkills />
        </div>
      </section>
    </div>
  );
}
