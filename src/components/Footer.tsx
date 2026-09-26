import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-[#1a1d24] bg-footer">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-3 px-4 py-10 text-center sm:flex-row sm:justify-between sm:px-6 sm:text-left">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo-footer.svg" alt="FitLog logo" width={20} height={20} />
          <span className="font-display text-sm font-bold uppercase leading-5 tracking-[0.7px] text-white">
            FitLog
          </span>
        </Link>
        <p className="text-xs leading-4 text-subtle">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
}
