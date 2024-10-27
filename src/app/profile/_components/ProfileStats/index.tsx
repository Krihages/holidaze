import request from "@/api/requests";
import AllStats from "./AllStats";
import Section from "@/components/Section";

export default async function ProfileStats({
  name,
  manager,
}: {
  name: string;
  manager: boolean;
}) {
  const data = await request.get({
    endpoint: `profiles/${name}/bookings?_venue=true`,
  });
  const bookings = data.data.data;

  return (
    <Section>
      <AllStats bookings={bookings} manager={manager} />
    </Section>
  );
}
