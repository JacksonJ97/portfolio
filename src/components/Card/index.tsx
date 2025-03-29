import Button from "../Button";

export default function Card({
  title,
  description,
  technologies,
  liveLink,
  repoLink,
}: {
  title: string;
  description: string;
  technologies: string[];
  liveLink: string;
  repoLink: string;
}) {
  return (
    <div className="rounded-md bg-slate-600 p-8">
      <div>
        <h4 className="text-xl">{title}</h4>
        <p className="mt-4 max-w-prose leading-relaxed">{description}</p>

        <ul className="mt-4 flex flex-wrap items-center gap-2">
          {technologies.map((technology, index) => (
            <li
              className="max-w-max rounded-md border border-slate-800 p-2 text-sm text-white"
              key={index}
            >
              {technology}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap items-center gap-2">
          <a href={liveLink} target="_blank" rel="noreferrer">
            <Button text="Live" />
          </a>
          <a href={repoLink} target="_blank" rel="noreferrer">
            <Button text="Repo" />
          </a>
        </div>
      </div>
    </div>
  );
}
