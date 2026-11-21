export default function Work() {
  return (
    <section id="work" className="flex flex-col gap-4">
      <h2 className="font-fira-code text-2xl font-medium uppercase">Work</h2>

      <div className="grid gap-2 xs:grid-cols-2 xs:items-center xs:gap-x-4 xs:gap-y-1">
        <div className="flex flex-col gap-1 xs:contents">
          <h3 className="font-medium">PheedLoop</h3>
          <p className="text-sm text-(--text-muted-color)">Full Stack Software Engineer</p>
        </div>

        <div className="flex flex-col gap-1 xs:contents">
          <p className="text-sm text-(--text-muted-color) xs:col-start-2 xs:row-start-1 xs:text-right">
            Feb 2022 - Mar 2025
          </p>
          <p className="text-sm text-(--text-muted-color) xs:text-right">Toronto, ON</p>
        </div>
      </div>
    </section>
  );
}
