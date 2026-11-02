import { assetPath } from "@/lib/projects";
import { SiteNav } from "@/components/site-nav";

export function HomeHero() {
  return (
    <main className="home-hero">
      <SiteNav overHero />
      <div className="home-cover home-cover-desktop">
        <img src={assetPath("/work/page-01.webp")} alt="호기심 많은 취향부자 도수미입니다" />
      </div>
      <div className="home-cover-mobile" aria-hidden="true">
        <div className="home-cover-mobile-copy">
          <img src={assetPath("/work/page-01.webp")} alt="" />
        </div>
        <div className="home-cover-mobile-art">
          <img src={assetPath("/work/page-01.webp")} alt="" />
        </div>
      </div>
      <div className="home-footer">
        <span>Selected work 2020—2026</span>
        <a href={assetPath("/work")}>Explore projects <b>↗</b></a>
      </div>
    </main>
  );
}
