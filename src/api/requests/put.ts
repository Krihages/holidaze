import fetchRequest from "../fetch";

export default async function putRequest({
  endpoint,
  body,
}: {
  endpoint: string;
  body?: unknown;
}) {
  return fetchRequest({ method: "PUT", endpoint, body });
}
