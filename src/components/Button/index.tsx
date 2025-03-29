export default function Button({ text }: { text: string }) {
  return (
    <button className="h-10 cursor-pointer rounded-md bg-yellow-400 px-3 text-lg text-slate-800 hover:bg-white">
      {text}
    </button>
  );
}
