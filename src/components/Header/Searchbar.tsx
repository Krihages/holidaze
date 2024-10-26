import { Input } from "@/components/ui/input";
import SearchIcon from "@/components/icons/SearchIcon";
import SearchFilter from "@/components/Modal/SearchFilter";

export default function Searchbar() {
  return (
    <div className="bg-white w-full p-4 shadow-md">
      <div className="max-w-xl mx-auto relative cursor-pointer">
        <Input
          type="text"
          placeholder="Where do you want to go?"
          className="rounded-full px-8 py-2 shadow-sm"
        />
        <div className="absolute right-6 top-1/2 -translate-y-1/2">
          <SearchIcon size={20} color="muted" />
        </div>
      </div>
    </div>
  );
}
