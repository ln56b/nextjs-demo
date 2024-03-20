export default function Button({ label }: { label: string }) {
  return (
    <button className="h-12 rounded-lg bg-white font-bold px-5">{label}</button>
  );
}
