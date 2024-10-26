import Link from "next/link";
import Newsletter from "./Newsletter";
import FooterEnd from "./FooterEnd";

export default function Footer() {
  return (
    <footer className="py-10 px-4 bg-accent">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between flex-wrap gap-10">
          <p className="text-lg font-bold">Holidaze</p>
          <div className="flex md:gap-12 xl:gap-24 gap-4 flex-wrap ">
            <div className="flex flex-col gap-1 ">
              <p className="font-semibold mb-1">Explore</p>
              <Link href="/venues">Venues</Link>
              <Link href="/venues?sort=top">Top Venues</Link>
              <Link href="/contact">Blog</Link>
            </div>
            <div className="flex flex-col gap-1 ">
              <p className="font-semibold mb-1">Company</p>
              <Link href="/contact">Careers</Link>
              <Link href="/contact">Blog</Link>
            </div>
            <Newsletter />
          </div>
        </div>
        <FooterEnd />
      </div>
    </footer>
  );
}
