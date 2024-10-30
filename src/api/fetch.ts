import headers from "./headers";

type RequestProps = {
  method: "GET" | "POST" | "PUT" | "DELETE";
  endpoint: string;
  body?: unknown;
  baseUrl?: boolean;
};

type HeadersProps = {
  token?: string;
  "Content-Type": string;
  "X-Noroff-API-Key": string;
};

export default async function fetchRequest({
  method,
  endpoint,
  body,
  baseUrl = false,
}: RequestProps) {
  try {
    const URL = baseUrl ? process.env.BASE_URL : process.env.API_URL;

    const response = await fetch(URL + endpoint, {
      method,
      body: body ? JSON.stringify(body) : null,
      headers: headers() as HeadersProps,
    });

    if (response?.status === 204) {
      return { success: true, data: null };
    }

    if (!response.ok) {
      throw new Error(
        `${response.status} ${
          response.statusText ? response.statusText : "Unknown error"
        }`
      );
    }

    const data = await response.json();
    if (data.error) {
      throw new Error(data?.error || "Unknown error");
    }

    return { success: true, data: data };
  } catch (error) {
    console.error(error);
    return { success: false, error: error };
  }
}
