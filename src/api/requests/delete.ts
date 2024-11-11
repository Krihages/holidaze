import fetchRequest from "../fetch";

export default function deleteRequest({
  endpoint,
  body,
}: {
  endpoint: string;
  body?: unknown;
}) {
  return fetchRequest({ method: "DELETE", endpoint, body });
}
