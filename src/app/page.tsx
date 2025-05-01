import Link from "next/link";

export default function RootPage() {

  const links = [
    { href: "001" },
    { href: "002" },
  ]

  return (
    <div className="flex flex-col max-w-2xs mx-auto pt-10">
      {links.map((link) => (
        <Link
          key={link.href}
          href={"/" + link.href}
          className="border-b border-zinc-700 py-2 font-bold text-white/60 hover:text-white transition-colors"
        >
          {link.href}
        </Link>
      ))}
    </div>
  );
}
