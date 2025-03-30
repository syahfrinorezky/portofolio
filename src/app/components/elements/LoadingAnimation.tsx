"use client";

import dynamic from "next/dynamic";

const Player = dynamic(() => import("@lottiefiles/react-lottie-player").then(mod => mod.Player), { ssr: false });
import LoadingAnimation from "../../../../public/anim/waterdroplets.json";

export default function AnimationLoading() {
  return (
    <Player
      autoplay
      loop
      src={LoadingAnimation}
      style={{ height: "400px", width: "400px" }}
    />
  );
}
