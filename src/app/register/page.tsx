import Section from "@/components/Section";
import RegisterForm from "@/components/FormBuilder/RegisterForm";

export const metadata = {
  title: "Holidaze | Register",
  description:
    "Create your Holidaze account to start booking unique venues, become a host, and join our community of travelers. Quick and easy registration process.",
};

export default function Register() {
  return (
    <Section>
      <RegisterForm />
    </Section>
  );
}
