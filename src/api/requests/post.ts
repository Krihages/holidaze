import fetchRequest from "../fetch";

export default function postRequest({
  endpoint,
  body,
}: {
  endpoint: string;
  body?: unknown;
}) {
  return fetchRequest({ method: "POST", endpoint, body });
}
