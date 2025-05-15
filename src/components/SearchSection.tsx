import SearchBar from "./SearchBar";
import TypeButton from "./TypeButton";

export default function SearchSection() {
  return (
    <section className="flex gap-5">
      <SearchBar />
      <TypeButton Type="Add" Size="Large" State="Default" Hovered />
    </section>
  );
}
