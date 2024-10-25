import LoginModal from "@/components/Modal/Login";
import Link from "next/link";
export default function LoggedOut() {
  return (
    <div className="flex gap-2 items-center">
      <Link href="/register">Register</Link> <p> or</p>
      <LoginModal triggerVariant="reverse" />
    </div>
  );
}
