import { FavoritesProvider } from "./Favorites";

export default function Providers({ children }: { children: React.ReactNode }) {
  return <FavoritesProvider>{children}</FavoritesProvider>;
}
