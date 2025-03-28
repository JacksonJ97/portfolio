import Button from "../Button";

const TechBox = ({ text }: { text: string }) => {
  return (
    <li className="inline-block border border-[#222831] text-[#eeeeee] text-sm p-2 my-1 mx-2 -ml-px rounded-md">
      {text}
    </li>
  );
};

const Card = ({
  title,
  img,
  description,
  technologies,
  liveLink,
  repoLink,
}: {
  title: string;
  img: string;
  description: string;
  technologies: string[];
  liveLink: string;
  repoLink: string;
}) => {
  return (
    <div className="flex gap-8 bg-[#393e46] p-8 rounded-md w-full h-full shadow-[0_0_16px_rgba(0,0,0,0.15)]">
      <img
        src={img}
        alt={title}
        className="w-[30%] min-w-[160px] self-center max-[520px]:hidden"
      />

      <div>
        <h4 className="text-xl">{title}</h4>
        <p className="my-4 mb-[12.5px] break-words max-w-[450px]">
          {description}
        </p>

        <ul className="mb-4">
          {technologies.map((tech, index) => (
            <TechBox text={tech} key={index} />
          ))}
        </ul>

        <div className="flex flex-wrap items-center">
          <a href={liveLink} target="_blank" rel="noreferrer" className="mr-2">
            <Button text="Live" />
          </a>
          <a href={repoLink} target="_blank" rel="noreferrer">
            <Button text="Repo" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
