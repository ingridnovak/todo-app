import Image from "next/image";
import Link from "next/link";

export default function Footer({ auth }) {
  return (
    <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
      <>
        <Link
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/about"
        >
          {" "}
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          About
        </Link>

        <div>{auth}</div>
      </>
      <Link
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="/tips"
      >
        <Image
          aria-hidden
          src="/window.svg"
          alt="Window icon"
          width={16}
          height={16}
        />
        Productivity tips
      </Link>

      <div>{auth}</div>
      <>
        <Link
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/feedback"
        >
          {" "}
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Feedback →
        </Link>

        <div>{auth}</div>
      </>
    </footer>
  );
}
