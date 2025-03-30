import { skillsList } from "@/app/lib/constants";

export default function MostSkills() {
  return (
    <section className="flex flex-col gap-y-8">
      <div className="text-center md:text-left">
        <h1 className="text-2xl font-bold font-secondary md:text-3xl">
          Most Skills
        </h1>
      </div>

      <div className="grid grid-cols-3 gap-3 md:gap-4">
        {skillsList.map((skill, id) => (
          <div
            key={id}
            className="flex items-center justify-center py-3 border border-gray-600 transition-all duration-300 ease-in-out hover:scale-105 hover:border-white hover:-translate-y-1 hover:bg-white/5 group md:justify-start md:px-6 md:py-4 md:gap-x-4">
            <skill.icon className="text-2xl md:text-3xl group-hover:text-accent" />
            <p className="hidden md:block font-semibold font-secondary text-center">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
