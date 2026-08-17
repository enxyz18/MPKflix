import Link from "next/link";

type WatchButtonProps = {
  href: string;
  children?: React.ReactNode;
};

export default function WatchButton({
  href,
  children = "▶ Watch Now",
}: WatchButtonProps) {
  return (
    <Link
      href={href}
      className="inline-block rounded-lg bg-red-600 px-6 py-3 font-bold transition hover:bg-red-700"
    >
      {children}
    </Link>
  );
}