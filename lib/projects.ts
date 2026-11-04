export type InteractivePage = {
  page: number;
  src: string;
  label: string;
};

export type Project = {
  slug: string;
  title: string;
  englishTitle?: string;
  year: string;
  cover: number;
  thumbnail: string;
  headline: string;
  description: string;
  tags: string[];
  meta: string[];
  pages: number[];
  accent: string;
  interactive?: InteractivePage[];
  externalLink?: {
    label: string;
    url: string;
  };
};

const publicBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
export const assetPath = (path: string) => {
  if (!publicBasePath || !path.startsWith("/") || path.startsWith(`${publicBasePath}/`)) return path;
  return `${publicBasePath}${path}`;
};

export const projects: Project[] = [
  {
    slug: "vivozon-pharmaceutical",
    title: "비보존제약",
    year: "2024—",
    cover: 2,
    thumbnail: assetPath("/projects/vivozon/detail-aid.webp"),
    headline: "비마약성 진통제 혁신신약 개발 기업",
    description: "약 185개의 자사 전문·일반의약품 외 위·수탁 품목을 제조 및 관리하는 기업입니다. 제약사의 전문성과 통일감이 있되, 각 의약품의 특징을 살린 디자인을 할 수 있도록 하였습니다. 특히 신약 관련 업무는 해외 제조소와 소통하며 다양한 인쇄물 및 학회 부스, 판촉물 등을 제작하였습니다.",
    tags: ["전문의약품", "국내혁신신약 38호"],
    meta: ["2024.10—", "개인작업", "패키지 · 홍보물 · 학회부스 · 판촉"],
    pages: [3, 4],
    accent: "#19a8ad",
  },
  {
    slug: "e4a",
    title: "E4A",
    year: "2023—2024",
    cover: 5,
    thumbnail: assetPath("/projects/e4a/family.webp"),
    headline: "스포츠인을 위한 뉴트리션 브랜딩",
    description: "E4A는 스포츠 뉴트리션 제품을 주로 판매하는 브랜드입니다. 스포츠인들을 대상으로 ‘회복’이라는 키워드를 중심으로 기존 시장에 없던 포뮬러 제품들과 가성비 있는 영양제들을 판매하고 있습니다. 이러한 브랜드의 성격을 고려하여 기존 브랜드 아이덴티티를 보완하고 발전시켜 패키지와 웹 등 전 분야에 적용할 수 있는 디자인 가이드를 제작하였습니다.",
    tags: ["스포츠", "뉴트리션", "건기식", "4050", "온오프라인"],
    meta: ["2023.02—2024.02", "개인작업", "브랜딩 · 기획 · 로고 · 그래픽 · 폰트 · 아이콘 · 패키지"],
    pages: [6, 7, 8, 9, 10, 11, 12],
    accent: "#111111",
    externalLink: {
      label: "SNS & 상세페이지",
      url: "https://www.figma.com/design/i9mAHbd3XaDGGEDBc6QkA5/%ED%8F%AC%ED%8A%B8%ED%8F%B4%EB%A6%AC%EC%98%A4_%EB%8F%84%EC%88%98%EB%AF%B8_%EB%B0%B0%EB%84%88-%EC%83%81%EC%84%B8%ED%8E%98%EC%9D%B4%EC%A7%80?node-id=0-286&t=rQwtIO3mfI8SAh9F-1",
    },
    interactive: [
      { page: 8, src: assetPath("/projects/e4a/point-font.svg"), label: "Point Font" },
      { page: 9, src: assetPath("/projects/e4a/icons.svg"), label: "Icon Design" },
    ],
  },
  {
    slug: "celeblossom",
    title: "Celeblossom",
    year: "2022",
    cover: 13,
    thumbnail: assetPath("/projects/celeblossom/street-banner.webp"),
    headline: "서울과학기술대학교 시각디자인과 제40회 졸업전시",
    description: "셀러블라썸은 졸업전시회 브랜딩입니다. 최소 4년간의 학업을 거치며 그 시간을 잘 마무리하고 졸업작품이라는 결과를 피워 낸 졸업생들이 스스로에게 건넬 수 있는 꽃다발을 선물하고자 했습니다. 폭죽이 팡 터지는 듯한 꽃다발을 한 입 한 입 그려내며, 축하의 마음이 생생히 전해질 수 있기를 바랐습니다.",
    tags: ["졸업전시", "축하", "온오프라인"],
    meta: ["2022.03—2022.10", "팀작업 · 편집팀 3인", "기획 · 인쇄물 · 메인그래픽 · 포스터 · 도록 · 리플렛"],
    pages: [14, 15, 16, 17, 18, 19, 20],
    accent: "#83d9ee",
    interactive: [{ page: 15, src: assetPath("/projects/celeblossom/graphic-system.svg"), label: "Graphic System" }],
  },
  {
    slug: "crack",
    title: "CRACK",
    year: "2022",
    cover: 21,
    thumbnail: assetPath("/projects/crack/graphic.webp"),
    headline: "신규 웹툰 스튜디오 아이덴티티 디자인",
    description: "크랙 엔터테인먼트는 웹툰을 제작·공급하는 신규 설립 스튜디오입니다. 크랙만의 브랜드 가치를 보여줄 수 있고 앞으로 활용 가능한 로고와 캐릭터를 제작하였으며, 그래픽 모티브에 따른 디자인 방향성도 함께 제안하였습니다.",
    tags: ["웹툰", "온라인", "그래픽"],
    meta: ["2022.02", "개인작업", "로고 · 캐릭터 · 폰트 · 컬러 · 명함"],
    pages: [22, 23],
    accent: "#12372f",
    interactive: [{ page: 23, src: assetPath("/projects/crack/characters.svg"), label: "Character System" }],
  },
  {
    slug: "dongdong",
    title: "동동",
    year: "2022 / 2024",
    cover: 24,
    thumbnail: assetPath("/projects/dongdong/stationery.webp"),
    headline: "성인을 위한 동화책 맞춤추천 서비스",
    description: "동동은 성인을 위한 맞춤 동화책 추천 및 정기배송 서비스입니다. 가벼운 마음으로 시작할 수 있는 동화책으로 사용자들에게 이야기를 전하고 그들의 마음을 케어할 수 있는 브랜드를 만들고자 했습니다.",
    tags: ["동화책", "종이책", "맞춤추천", "정기배송", "온라인"],
    meta: ["2022.03—2022.10 · 2024.03 리디자인", "개인작업", "브랜딩 · 기획 · 로고 · 그래픽 · 패키지 · 북커버 · 굿즈"],
    pages: [25, 26, 27, 28, 29],
    accent: "#35105d",
    interactive: [{ page: 26, src: assetPath("/projects/dongdong/system.svg"), label: "Graphic System" }],
  },
  {
    slug: "charan",
    title: "차란",
    year: "2023 / 2024",
    cover: 30,
    thumbnail: assetPath("/projects/charan/window.webp"),
    headline: "나만의 블렌딩 티 조합 서비스",
    description: "차란은 입문자는 더 쉽게 다가갈 수 있고, 기존 소비자들은 새롭게 즐길 수 있도록 소비자의 취향에 맞춘 블렌딩티를 추천 및 매칭해주는 서비스입니다. 녹차, 홍차, 허브차 세 가지로 분류되는 8종의 베이스 티를 중심으로 블렌딩되며 취향에 꼭 맞는 새로운 블렌딩 티를 선사합니다.",
    tags: ["블렌딩티", "온오프라인", "맞춤추천", "2030"],
    meta: ["2023.03 · 2024.03 리디자인", "개인작업", "브랜딩 · 기획 · 로고 · 그래픽 · 패키지 · 굿즈"],
    pages: [31, 32, 33, 34],
    accent: "#2d35cd",
    interactive: [{ page: 32, src: assetPath("/projects/charan/system.svg"), label: "Identity System" }],
  },
  {
    slug: "lezhin",
    title: "LEZHIN",
    year: "2020—2021",
    cover: 35,
    thumbnail: assetPath("/projects/lezhin/hero.webp"),
    headline: "웹툰 서비스 플랫폼 콘텐츠 디자인",
    description: "레진 엔터테인먼트는 웹툰을 제작·공급하는 스튜디오입니다. 기존 보유 IP를 활용하고 다양한 장르의 작품들의 색을 살리면서, 각기 다른 작품들이 특별전으로 묶여도 이질감이 느껴지지 않도록 구성했습니다.",
    tags: ["웹툰", "온라인", "콘텐츠"],
    meta: ["2020.06—2021.12", "개인작업 · 회사", "콘텐츠 · 일러스트 · 굿즈"],
    pages: [36, 37],
    accent: "#f51f27",
    externalLink: {
      label: "이벤트 페이지",
      url: "https://www.figma.com/design/i9mAHbd3XaDGGEDBc6QkA5/%ED%8F%AC%ED%8A%B8%ED%8F%B4%EB%A6%AC%EC%98%A4_%EB%8F%84%EC%88%98%EB%AF%B8_%EB%B0%B0%EB%84%88-%EC%83%81%EC%84%B8%ED%8E%98%EC%9D%B4%EC%A7%80?node-id=330-2&t=I7dePtqKAlTMzMEa-1",
    },
  },
];

export const pageImage = (page: number) => assetPath(`/work/page-${String(page).padStart(2, "0")}.webp`);
