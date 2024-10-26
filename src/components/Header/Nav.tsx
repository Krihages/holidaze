import Link from "next/link";

export default function Nav() {
  return (
    <div className="hidden sm:flex  gap-8 lg:gap-12  text-lg">
      <Link href="/">Home</Link>
      <Link href="/venues">Venues</Link>
      <Link href="/contact">Contact</Link>
    </div>
  );
}
