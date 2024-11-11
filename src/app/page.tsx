/* import Explore from "./_components/Explore"; */
import { redirect } from "next/navigation";

export const metadata = {
  title: "Holidaze | Home",
  description: "Holidaze | Home page",
};

export default function Home() {
  redirect("/venues");
  return (
    /*     <>
      <Explore />
    </> */

    <></>
  );
}
