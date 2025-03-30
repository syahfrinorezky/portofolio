import { SiCss3, SiHtml5, SiJavascript, SiNextdotjs, SiNodedotjs, SiReact, SiTailwindcss, SiTypescript } from "react-icons/si";

interface Biodata {
  name: string[];
}

export const Profile: Biodata = {
  name: ["Syahfrino", "Rezky", "Oktaviant"],
};


export const skillsList = [
    { id: 1, name: "HTML", icon: SiHtml5 }, 
    { id: 2, name: "CSS", icon:  SiCss3}, 
    { id: 3, name: "JavaScript", icon: SiJavascript },
    { id: 4, name: "TypeScript", icon: SiTypescript },
    { id: 5, name: "React", icon: SiReact },
    { id: 6, name: "NextJS", icon: SiNextdotjs },
    { id: 7, name: "TailwindCSS", icon: SiTailwindcss },
    { id: 8, name: "NodeJS", icon: SiNodedotjs },
  ];