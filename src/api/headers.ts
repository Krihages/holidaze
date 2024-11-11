import cookies from "../lib/cookies";

export default function headers() {
  const token = cookies.get("auth_token");

  return {
    "Content-Type": "application/json",
    "X-Noroff-API-Key": process.env.API_KEY,
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };
}
