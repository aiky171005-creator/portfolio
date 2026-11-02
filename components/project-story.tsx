"use client";

import { useState, type CSSProperties } from "react";
import { CeleExhibitionBookSection, CelePosterSection, CharanBackgroundSection, DesignSystemSection, DongdongApproachSection, E4AProductLines, LezhinGallery } from "@/components/design-system-section";
import { assetPath, pageImage, type Project } from "@/lib/projects";

type ProjectStoryProps = { project: Project };

const systemStartPages: Record<string, number> = {
  e4a: 6,
  celeblossom: 14,
  crack: 22,
  dongdong: 26,
  charan: 32,
};

const skippedSystemPages: Record<string, number[]> = {
  e4a: [7, 8, 9],
  celeblossom: [15, 19],
  crack: [23],
  lezhin: [37],
};

const pageDetails: Record<number, { title: string; copy?: string; cleanImage?: boolean; image?: string }> = {
  3: {
    title: "Design System",
    image: "/work/page-03-hq.webp",
  },
  4: {
    title: "Promotion Items",
    copy: "품목 디자인 아이덴티티를 활용한 각종 판촉물 디자인",
    image: "/work-clean/page-04-hq.webp",
  },
  11: {
    title: "Package — Premium Line",
    copy: "강하고 단단하며 에너지 넘치는 이미지 표현 매일 먹어야하는 제품의 특성을 고려하여 하단 박스를 두꺼운 재질로 제작",
    cleanImage: true,
  },
  12: {
    title: "Package — Essential Line",
    copy: "프리미엄 대비 대중적인 타겟팅을 위해 밝고 화사한 컬러 선택 기존에 영양제에서 사용하던 미색의 종이 대신 코스메틱에 사용하는 새하얀 종이를 사용하여 깨끗하고 믿을 수 있는 이미지로 제작",
    cleanImage: true,
  },
  17: { title: "Banner", copy: "전시장 내 트랙별 부스 안내를 위한 배너 입니다.", image: "/projects/celeblossom/standing-banners.webp" },
  20: {
    title: "Leaflet",
    copy: "리플렛은 축하 선물들과 함께 들고 다니며 원하는 부스를 찾을 수 있도록 한 손에 들고 볼 수 있는 컴팩트 한 사이즈로 제작했습니다.",
    image: "/projects/celeblossom/leaflet.webp",
  },
  27: { title: "Package", cleanImage: true },
  29: { title: "Stationery", cleanImage: true },
  33: { title: "Package", cleanImage: true },
  34: { title: "Stationery", cleanImage: true },
};

export function ProjectStory({ project }: ProjectStoryProps) {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <>
      <section className="story-album" aria-label={`${project.title} 프로젝트 상세 이미지`}>
        {project.pages.map((page, index) => {
          if (skippedSystemPages[project.slug]?.includes(page)) return null;
          if (systemStartPages[project.slug] === page) {
            return <DesignSystemSection slug={project.slug} key={`system-${project.slug}`} />;
          }
          if (project.slug === "celeblossom" && page === 16) {
            return <CelePosterSection key="celeblossom-poster" />;
          }
          if (project.slug === "celeblossom" && page === 18) {
            return <CeleExhibitionBookSection key="celeblossom-book" />;
          }
          if (project.slug === "dongdong" && page === 25) {
            return <DongdongApproachSection key="dongdong-approach" />;
          }
          if (project.slug === "charan" && page === 31) {
            return <CharanBackgroundSection key="charan-background" />;
          }
          if (project.slug === "lezhin" && page === 36) {
            return <LezhinGallery key="lezhin-gallery" />;
          }
          if (project.slug === "e4a" && page === 10) {
            return <E4AProductLines key="e4a-product-lines" />;
          }
          const detail = pageDetails[page];
          const src = assetPath(detail?.image ?? (detail?.cleanImage ? `/work-clean/page-${String(page).padStart(2, "0")}.webp` : pageImage(page)));
          return (
            <section className="story-page-section" key={page}>
              {detail && <header className="story-section-heading"><h2>{detail.title}</h2>{detail.copy && <p>{detail.copy}</p>}</header>}
              <figure className="story-item is-wide" style={{ "--item-index": index } as CSSProperties}>
                <button type="button" onClick={() => setExpanded(src)} aria-label={`${project.title} 상세 이미지 확대`}>
                  <img src={src} alt={`${project.title} ${detail?.title ?? "프로젝트 상세"}`} loading={index < 2 ? "eager" : "lazy"} />
                  <span>View larger +</span>
                </button>
              </figure>
            </section>
          );
        })}
      </section>

      {expanded && (
        <div className="story-lightbox" role="dialog" aria-modal="true" aria-label="프로젝트 이미지 확대">
          <button type="button" onClick={() => setExpanded(null)}>Close ×</button>
          <img src={expanded} alt={`${project.title} 확대 이미지`} />
        </div>
      )}
    </>
  );
}
