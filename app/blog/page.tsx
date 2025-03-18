import CardList from "@/components/card";
import { title } from "@/components/primitives";

export default function BlogPage() {
  return (
    <div className="flex flex-col gap-8">
      <h1 className={`${title()}`}>Блог</h1>
      <CardList />
    </div>
  );
}
