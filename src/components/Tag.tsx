export default function Tag({ label }: { label: string }) {
  return (
    <span className="rounded-full bg-accent px-2.5 py-0.5 text-[11px] font-bold uppercase leading-[16.5px] tracking-[0.55px] text-black">
      {label}
    </span>
  );
}
