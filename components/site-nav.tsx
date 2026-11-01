import Link from "next/link";
import { assetPath } from "@/lib/projects";

type SiteNavProps = { overHero?: boolean };

export function SiteNav({ overHero = false }: SiteNavProps) {
  return (
    <header className={`site-nav${overHero ? " is-hero" : ""}`}>
      <Link className="site-mark" href={assetPath("/")}>
        <strong>도수미</strong>
        <span>Graphic Designer</span>
      </Link>
      <nav aria-label="주요 메뉴">
        <Link href={assetPath("/work")}>Work</Link>
        <Link href={assetPath("/about")}>About</Link>
        <a href="mailto:aiky171005@gmail.com">Contact ↗</a>
      </nav>
    </header>
  );
}
