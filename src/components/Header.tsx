import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";

interface HeaderProps {
  title: string;
}

export default function Header({ title }: HeaderProps) {
  return (
    <header className="p-4 flex items-center justify-between fixed top-0 left-0 right-0">
      <div>
        <Link
          to={"/"}
          className="w-[40px] h-[40px] border border-zinc-100 rounded-lg flex items-center justify-center shadow hover:shadow-lg transition"
        >
          <ChevronLeft />
        </Link>
      </div>
      <div>
        <strong>{title}</strong>
      </div>
    </header>
  );
}
