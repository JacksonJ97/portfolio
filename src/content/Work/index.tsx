export default function Work() {
  return (
    <section id="work" className="scroll-mt-20">
      <h2 className="mb-4 font-fira-code text-2xl font-medium text-(--text-color) uppercase">
        Work
      </h2>

      <div className="mb-1 flex flex-col justify-between gap-1 xs:flex-row xs:items-center">
        <h3 className="text-base font-medium text-(--text-color)">PheedLoop</h3>
        <p className="text-sm text-(--text-muted-color)">Feb 2022 - Mar 2025</p>
      </div>

      <div className="flex flex-col justify-between gap-1 xs:flex-row xs:items-center">
        <p className="text-sm text-(--text-muted-color)">Full Stack Software Engineer</p>
        <p className="text-sm text-(--text-muted-color)">Toronto, ON</p>
      </div>
    </section>
  );
}
