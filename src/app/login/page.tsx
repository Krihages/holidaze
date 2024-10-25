import LoginForm from "@/components/FormBuilder/Login";
import Section from "@/components/Section";

export default function LoginPage() {
  return (
    <Section>
      <div className="max-w-lg flex flex-col gap-8 border rounded-lg py-6 px-10 shadow-lg">
        <h1 className="text-2xl font-semibold">Login to your account</h1>
        <LoginForm redirectTo="profile" />
      </div>
    </Section>
  );
}
