import { assetPath } from "@/lib/projects";

type SiteNavProps = { overHero?: boolean };

export function SiteNav({ overHero = false }: SiteNavProps) {
  return (
    <header className={`site-nav${overHero ? " is-hero" : ""}`}>
      <a className="site-mark" href={assetPath("/")}>
        <strong>도수미</strong>
        <span>Graphic Designer</span>
      </a>
      <nav aria-label="주요 메뉴">
        <a href={assetPath("/work")}>Work</a>
        <a href={assetPath("/about")}>About</a>
        <a href={assetPath("/about#contact")}>Contact</a>
      </nav>
    </header>
  );
}
