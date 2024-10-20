import fetchRequest from "../fetch";

export default function getRequest({
  endpoint,
  body,
}: {
  endpoint: string;
  body?: unknown;
}) {
  return fetchRequest({ method: "GET", endpoint, body });
}
