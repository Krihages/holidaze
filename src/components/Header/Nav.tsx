import Link from "next/link";

export default function Nav() {
  return (
    <div className="flex  gap-8 lg:gap-12 font-semibold text-lg">
      <Link href="/">Home</Link>
      <Link href="/venues">Venues</Link>
      <Link href="/contact">Contact</Link>
    </div>
  );
}
