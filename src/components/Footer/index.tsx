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
            <div className="flex flex-col  ">
              <p className="font-semibold mb-2">Explore</p>
              <Link
                href="/"
                className="hover:underline pb-1  transition-all duration-300"
              >
                Venues
              </Link>
              <Link
                href="/venues?sort=top"
                className="hover:underline pb-1  transition-all duration-300"
              >
                Top Venues
              </Link>
              <Link
                href="/"
                className="hover:underline pb-1  transition-all duration-300"
              >
                Blog
              </Link>
            </div>
            <div className="flex flex-col gap-1 ">
              <p className="font-semibold mb-1">Company</p>
              <Link
                href="/"
                className="hover:underline pb-1  transition-all duration-300"
              >
                Careers
              </Link>
              <Link
                href="/"
                className="hover:underline pb-1  transition-all duration-300"
              >
                Blog
              </Link>
            </div>
            <Newsletter />
          </div>
        </div>
        <FooterEnd />
      </div>
    </footer>
  );
}
