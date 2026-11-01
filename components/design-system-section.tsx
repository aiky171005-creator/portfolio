"use client";

import { useState } from "react";
import { assetPath } from "@/lib/projects";

function SectionTitle({ eyebrow, title, copy }: { eyebrow: string; title: string; copy?: string }) {
  return <header className="system-title"><span>{eyebrow}</span><h2>{title}</h2>{copy && <p>{copy}</p>}</header>;
}

function VectorAsset({ name, alt, className = "" }: { name: string; alt: string; className?: string }) {
  return <img className={`vector-asset ${className}`} src={assetPath(`/projects/extracted/${name}.svg`)} alt={alt} />;
}

function SystemTabs<T extends string>({ tabs, active, onChange, label }: { tabs: readonly T[]; active: T; onChange: (tab: T) => void; label: string }) {
  return <div className="system-tabs" role="tablist" aria-label={label}>{tabs.map((tab) => <button key={tab} type="button" role="tab" aria-selected={active === tab} onClick={() => onChange(tab)}>{tab}</button>)}</div>;
}

const e4aTabs = ["Design System", "Point Font", "Icon Design"] as const;

function E4ASystem() {
  const [active, setActive] = useState<(typeof e4aTabs)[number]>("Design System");
  const pointFontOrder = [1, 2, 3, 4, 5, 6, 7, 25, 26, 20, 21, 22, 23, 24, 13, 14, 15, 16, 17, 18, 19, 9, 8, 10, 11, 12];
  const iconOrder = [1, 3, 2, 4, 6, 7, 8, 9, 10, 11, 14, 5, 12, 13];
  return <section className="system-section e4a-system">
    <SectionTitle eyebrow="Brand Toolkit" title="E4A Design System" />
    <SystemTabs tabs={e4aTabs} active={active} onChange={setActive} label="E4A 디자인 시스템 구성" />

    {active === "Design System" && <div className="system-panel e4a-foundation" role="tabpanel">
      <article><span>Symbol</span><VectorAsset name="e4a-symbol-system" alt="E4A 기본형과 축소형 심볼" /></article>
      <article><span>Logo</span><VectorAsset name="e4a-logo-system" alt="E4A 로고 시스템" /></article>
      <article><span>Graphic</span><VectorAsset name="e4a-graphic-system" alt="E4A 그래픽 시스템" /></article>
      <article><span>Typeface</span><VectorAsset name="e4a-font-system" alt="E4A 기본 서체 시스템" /></article>
      <article className="is-wide"><span>Color</span><VectorAsset name="e4a-color-system" alt="E4A 컬러 시스템" /></article>
    </div>}

    {active === "Point Font" && <div className="system-panel" role="tabpanel">
      <div className="panel-copy"><span>Custom Type</span><p>브랜드 무드에 맞추어 포인트로 사용할 수 있는 묵직하고 각진 이미지의 폰트 디자인</p></div>
      <div className="glyph-specimen">{pointFontOrder.map((number, index) => <VectorAsset key={number} name={`e4a-point-${String(number).padStart(2, "0")}`} alt={`E4A 포인트 폰트 ${String.fromCharCode(65 + index)}`} />)}</div>
    </div>}

    {active === "Icon Design" && <div className="system-panel" role="tabpanel">
      <div className="panel-copy"><span>Iconography</span><p>10도 우상향 그래픽 모티브에 맞춘 아이콘 디자인</p></div>
      <div className="icon-specimen">{iconOrder.map((number, index) => <VectorAsset key={number} name={`e4a-icon-${String(number).padStart(2, "0")}`} alt={`E4A 브랜드 아이콘 ${index + 1}`} />)}</div>
    </div>}
  </section>;
}

const celeTabs = ["Design System", "Graphic System"] as const;

function CeleblossomSystem() {
  const [active, setActive] = useState<(typeof celeTabs)[number]>("Design System");
  const flowerOrder = [7, 6, 5, 4, 3, 2, 1];
  return <section className="system-section cele-system">
    <SectionTitle eyebrow="Brand Toolkit" title="Celeblossom System" />
    <SystemTabs tabs={celeTabs} active={active} onChange={setActive} label="셀러블라썸 디자인 시스템 구성" />
    {active === "Design System" && <div className="system-panel cele-foundation" role="tabpanel">
      <div className="cele-keywords"><article><span>01</span><strong>졸업전시</strong><p>전시 디자인 자체의 강한 의미부여 대신 밝은 결실의 느낌</p></article><article><span>02</span><strong>축하</strong><p>팡 터지는 듯한 화려한 꽃다발</p></article><article><span>03</span><strong>6개의 트랙</strong><p>학교를 중심으로 6단계로 피어나는 모양</p></article></div>
      <div className="cele-type-color"><article><span>Typeface</span><strong>Sandoll Gothic Neo 1</strong><strong>HV Clio</strong></article><article><span>Color</span><div><i>#76C2DD</i><i>#2A5397</i></div></article></div>
    </div>}
    {active === "Graphic System" && <div className="system-panel" role="tabpanel">
      <div className="panel-copy"><span>Graphic System</span></div>
      <div className="flower-stages">{flowerOrder.map((number, index) => <div key={number}><span>0{index + 1}</span><VectorAsset name={`cele-flower-${String(number).padStart(2, "0")}`} alt={`셀러블라썸 꽃 그래픽 ${index + 1}`} /></div>)}</div>
    </div>}
  </section>;
}

function CrackSystem() {
  return <section className="system-section crack-system">
    <SectionTitle eyebrow="Brand Toolkit" title="CRACK Design System" />
    <div className="crack-foundation">
      <article className="crack-logo-card"><span>Logo</span><VectorAsset name="crack-logo-system" alt="CRACK 원본 로고" /></article>
      <article><span>Keyword</span><div className="crack-keywords"><strong>통통 튀는</strong><strong>유니크한</strong><strong>재미있는</strong></div></article>
      <article><span>Typeface</span><div className="crack-typefaces"><strong className="is-aggro">SB 어그로</strong><strong className="is-cocogoose">COCOGOOSE</strong></div></article>
      <article><span>Color</span><div className="crack-colors"><i>#FF4713</i><i>#00AB84</i><i>#13322B</i></div></article>
    </div>
    <figure className="business-card-feature"><figcaption><span>Application</span><h3>Business Card</h3></figcaption><img src={assetPath("/projects/crack/business-cards-light.webp")} alt="CRACK 비즈니스 카드 목업" /></figure>
    <div className="subsection-title"><h3>Character Design</h3></div>
    <div className="character-grid">{Array.from({ length: 6 }, (_, index) => <VectorAsset key={index} name={`crack-character-${String(index + 1).padStart(2, "0")}`} alt={`CRACK 악어 캐릭터 ${index + 1}`} />)}</div>
  </section>;
}

function DongdongSystem() {
  return <section className="system-section dongdong-system">
    <SectionTitle eyebrow="Identity System" title="“내가 너에게 전하고 싶은 이야기, 네가 품고 있는 이야기”" />
    <div className="identity-keywords identity-keywords-detailed"><span><strong>부드러운</strong><small>부드러운 이미지의 컬러와 어조</small></span><span><strong>친근함</strong><small>아기자기한 그래픽과 말하는 듯한 메세지</small></span><span><strong>동화적인</strong><small>동화의 환상적인 느낌을 살린 디자인</small></span></div>
    <div className="dongdong-message"><VectorAsset name="dongdong-background-art" alt="A story I wanna tell, A story you have 동동 브랜드 배경 그래픽" /></div>
    <div className="identity-vector-grid"><div><small>Logo</small><VectorAsset name="dongdong-logo-system" alt="동동 원본 로고 시스템" /></div><div><small>Graphic</small><VectorAsset name="dongdong-graphic-system" alt="동동 원본 그래픽 시스템" /></div></div>
    <div className="identity-colors dongdong-colors"><span>#43197C</span><span>#FFF1D2</span><span>#FFBBE8</span><span>#DCFFF9</span><span>#E8C7FF</span></div>
  </section>;
}

function CharanSystem() {
  return <section className="system-section charan-system">
    <SectionTitle eyebrow="Identity System" title="Logo & Identity" />
    <div className="identity-keywords identity-keywords-detailed"><span><strong>온전한</strong><small>정제되지 않은 온전한 나의 개성<br />온전한 휴식을 즐기는 시간</small></span><span><strong>즐거운</strong><small>나만의 취향을 찾아보는 즐거움</small></span><span><strong>새로운</strong><small>기존에 없던 차란만의 오리지널 블렌딩 티</small></span></div>
    <div className="charan-logo-row"><div className="charan-original-logo"><small>Original Logo</small><VectorAsset name="charan-logo-system" alt="차란 원본 영문과 한글 로고" /></div><div><small>Color</small><strong>#2A1BF2</strong><span>PANTONE 2728 C</span></div></div>
  </section>;
}

export function CelePosterSection() {
  return <section className="poster-feature" aria-label="셀러블라썸 포스터 디자인">
    <SectionTitle eyebrow="Application" title="Poster Design" />
    <div className="poster-layout">
      <div className="poster-ornaments is-left">{[1, 2, 3, 4].map((number) => <VectorAsset key={number} name={`cele-poster-flower-${String(number).padStart(2, "0")}`} alt={`포스터 왼쪽 꽃 그래픽 ${number}`} />)}</div>
      <img className="poster-original" src={assetPath("/projects/celeblossom/poster.webp")} alt="셀러블라썸 졸업전시 포스터 원본" />
      <div className="poster-ornaments is-right">{[5, 6, 7, 8].map((number) => <VectorAsset key={number} name={`cele-poster-flower-${String(number).padStart(2, "0")}`} alt={`포스터 오른쪽 꽃 그래픽 ${number - 4}`} />)}</div>
    </div>
  </section>;
}

export function DongdongApproachSection() {
  return <section className="narrative-section dongdong-approach">
    <SectionTitle eyebrow="Research" title="Approach" />
    <p className="approach-lead">코로나 이후 20대 우울증환자의 수는 폭발적으로 증가하였습니다. 성인들은 나이에 맞는 책을 읽어야 한다는 압박감과 책을 읽기 위한 시간 부족으로 인해 독서에 대한 부담감이 커져있는 경우가 많습니다. 직접 읽고 선정한 52권의 짧은 글과 그림이 있는 동화책을 통해 가볍게 독서를 시작하며 특유의 부드러운 문장과 이야기 전개로 심리적으로 편안하게 즐길 수 있고 그 안에 담긴 인사이트가 있는 마음을 위로 하는 서비스를 제안하고자 합니다.</p>
    <div className="approach-stat"><article><span>Main Target</span><strong>20대</strong><p>우울 지수가 가장 높은 연령층</p></article><article><span>Sub Target</span><strong>5–60대</strong><p>자녀 또는 주변 사람들에게 추천 및 선물</p></article></div>
    <div className="approach-data"><article><span>2021 연령대별 우울증 환자</span><ol><li><b>01</b>20대 · 170,987명</li><li><b>02</b>60대 · 146,661명</li><li><b>03</b>50대 · 164,401명</li></ol></article><article><span>20대의 스트레스 요인</span><ol><li><b>84.6%</b>미래 · 진로</li><li><b>54%</b>대인관계</li><li><b>26.5%</b>주변환경</li><li><b>14.1%</b>자기 자신</li></ol></article></div>
  </section>;
}

const teas = [
  { name: "과수원 옆 녹차 폭포", description: "제주 녹차 베이스 · 스피아민트 · 파인애플조각 · 샤인머스켓향" },
  { name: "다랑쉬 오름네 녹차의 봄", description: "제주 녹차 베이스 · 유채 · 동백 · 감귤조각" },
  { name: "꽃의 퍼레이드 단장, 캐모마일", description: "캐모마일 베이스 · 라벤더 · 펜넬 · 마리골드" },
  { name: "붉은 여왕의 히비스커스 정원", description: "히비스커스 베이스 · 건조사과 · 로즈플라워 · 레몬그라스" },
  { name: "세더버그 산맥의 중심, 루이보스", description: "루이보스 베이스 · 카라멜 · 제주보리 · 블랙베리" },
  { name: "누와라엘리야 언덕 위 얼그레이", description: "우바 베이스 · 베르가못 · 수레국화 · 오렌지필" },
  { name: "샴페인 파티의 다즐링 쇼콜라티", description: "다즐링 베이스 · 천연초콜릿향 · 다크초콜릿 · 화이트초콜릿" },
  { name: "아쌈과 실론의 에덴동산", description: "아쌈 베이스 · 실론 · 바닐라향 · 사과조각" },
];

export function CharanBackgroundSection() {
  return <section className="narrative-section charan-background">
    <SectionTitle eyebrow="Research" title="Background" />
    <p className="background-lead">최근 몇 년간 ‘웰니스’에 관심을 가지는 사람들이 많아지면서, 커피나 음료 대신 몸에 좋은 차(茶)에 대한 관심도도 덩달아 오르고 있습니다. 또한 웰니스 열풍으로 바쁘게 사는 것도 중요하지만 그만큼 틈틈이 자신만의 힐링을 갖는 것도 중요해습니다. 요즘 MZ세대라고 불리는 젊은 층은 특히나 자신만의 개성을 추구하며 그에 따른 활동을 즐기는데 차는 수 많은 종류로 파생될 수 있으며 차를 마시는 과정과 특유의 여유로운 분위기로, 다도는 그들이 즐기는 다양성에 부합하는 활동이 되었습니다.</p>
    <div className="charan-audience"><article><span>Main Target</span><strong>20–30</strong><p>웰니스에 관심이 있는<br />바쁜 일상에 여유를 갖고 싶은<br />차에 관심이 있는, 입문하고 싶은</p></article><article><span>Service</span><strong>Blending Tea</strong><p>녹차, 홍차, 허브티를 베이스로 온전히 새로운 조합을 만드는 것도 가능하지만 고르기 힘든 입문자를 위한 추천 조합 블렌딩 티 레시피 있음</p></article></div>
    <div className="subsection-title tea-example-title"><h3>Blending Examples</h3></div>
    <div className="tea-grid">{teas.map((tea, index) => <article key={tea.name}><img src={assetPath(`/projects/extracted/charan-tea-${String(index + 1).padStart(2, "0")}.webp`)} alt={`${tea.name} 블렌딩 재료`} /><span>{String(index + 1).padStart(2, "0")}</span><h3>{tea.name}</h3><p>{tea.description}</p></article>)}</div>
  </section>;
}

export function E4AProductLines() {
  return <section className="product-lines-section">
    <SectionTitle eyebrow="Product Line" title="Premium Line / Essential Line" />
    <div className="product-lines-grid">
      <article className="product-line-card is-premium">
        <header><span>Black Base</span><h3>Premium Line</h3></header>
        <ul><li>오리지널 포뮬러 조합</li><li>비교적 높은 가격대</li><li>스포츠인 타겟 제품</li></ul>
        <div className="premium-cutouts">
          <img src={assetPath("/projects/e4a/cutout-amino.webp")} alt="E4A 아미노리젠 제품" />
          <img src={assetPath("/projects/e4a/cutout-creatine.webp")} alt="E4A 크레아틴 제품" />
          <img src={assetPath("/projects/e4a/cutout-preworkout.webp")} alt="E4A 프리워크아웃 제품" />
        </div>
        <div className="product-colors"><i>#3CDBC0<br />Recovery</i><i>#FF0D0E<br />Boosting</i></div>
      </article>
      <article className="product-line-card is-essential">
        <header><span>White Base</span><h3>Essential Line</h3></header>
        <ul><li>시중 판매 원료 배합</li><li>고품질 &amp; 가성비</li><li>대중적인 타겟팅</li></ul>
        <div className="essential-product-visual"><img src={assetPath("/projects/e4a/still-life.webp")} alt="E4A 에센셜 라인 제품" /></div>
        <div className="product-colors"><i>#009BD8</i><i>#910BD8</i><i>#FF7F00</i><i>#303AB0</i></div>
      </article>
    </div>
  </section>;
}

export function LezhinGallery() {
  return <section className="lezhin-static-gallery">
    <SectionTitle eyebrow="Content Design" title="BANNER_CONTENTS" />
    <figure><img src={assetPath("/work-clean/page-36.webp")} alt="레진 배너 콘텐츠 디자인" /></figure>
    <div className="subsection-title"><h3>BANNER_IP</h3></div>
    <figure><img src={assetPath("/work-clean/page-37.webp")} alt="레진 IP 배너 프로모션 디자인" /></figure>
  </section>;
}

export function VivozonDesignSystemSection() {
  return <section className="vivozon-original-system">
    <div className="vivozon-system-images">
      <figure className="is-detail-aid"><img src={assetPath("/projects/vivozon/detail-aid.webp")} alt="UNAFRA 제품 디테일 에이드" /></figure>
      <figure className="is-campaign-room"><img src={assetPath("/projects/vivozon/campaign-room.webp")} alt="커튼 사이로 들어오는 빛을 활용한 UNAFRA 캠페인" /><figcaption>New option for<br />post-op pain management</figcaption></figure>
    </div>
    <div className="vivozon-system-copy">
      <SectionTitle eyebrow="Brand Identity" title="Design System" />
      <div className="vivozon-system-row"><span>Keyword</span><strong>UN</strong><p>UN+afraid, 접두사 un을 강조하였으며, UNAFRA를 통해 환자가 더 이상 통증을 두려워하지 말라는 의미</p></div>
      <div className="vivozon-system-row"><span aria-hidden="true"></span><strong>Shining</strong><p>커튼 사이로 들어오는 빛을 표현하여, 환자가 통증으로부터 벗어나는 희망을 표현</p></div>
      <div className="vivozon-system-row"><span aria-hidden="true"></span><strong>Navy &amp;<br />Orange</strong><p>신뢰할 수 있는 효과로 환자에게 활력을 불어넣어 줄 수 있는 의약품</p></div>
      <div className="vivozon-system-product"><span>Logo<br /><br />Graphic &amp; Color</span><img src={assetPath("/projects/vivozon/product.webp")} alt="UNAFRA 로고가 적용된 제품 패키지" /></div>
    </div>
  </section>;
}

export function VivozonPromotionSection() {
  return <section className="vivozon-section vivozon-promotion">
    <SectionTitle eyebrow="Application" title="Promotion Items" copy="품목 디자인 아이덴티티를 활용한 각종 판촉물 디자인" />
    <div className="vivozon-promotion-collage">
      <img className="is-detail" src={assetPath("/projects/vivozon/detail-aid.webp")} alt="UNAFRA 디테일 에이드" />
      <img className="is-brochure" src={assetPath("/projects/vivozon/brochure.webp")} alt="UNAFRA 브로슈어" />
      <img className="is-line" src={assetPath("/projects/vivozon/product-line.webp")} alt="UNAFRA 20mL 제품 라인" />
      <img className="is-promotion" src={assetPath("/projects/vivozon/promotion.webp")} alt="UNAFRA 비교 프로모션 캠페인" />
      <img className="is-stationery" src={assetPath("/projects/vivozon/stationery.webp")} alt="UNAFRA 메모 패드" />
    </div>
  </section>;
}

export function CeleExhibitionBookSection() {
  return <section className="cele-book-section">
    <SectionTitle eyebrow="Editorial" title="Exhibition Book" copy="총 120개의 다양한 작품을 담을 수 있도록 깔끔하게 레이아웃을 구성했습니다. 페이지별 정보가 많아 180도 펼쳐지는 제본을 선택하였고, 표지 스크래치와 구김을 최소화하기 위해 밝은 무광의 하드커버로 제작했습니다." />
    <div className="cele-book-images"><img src={assetPath("/projects/celeblossom/catalog.webp")} alt="셀러블라썸 졸업전시 도록" /></div>
  </section>;
}

export function DesignSystemSection({ slug }: { slug: string }) {
  if (slug === "e4a") return <E4ASystem />;
  if (slug === "celeblossom") return <CeleblossomSystem />;
  if (slug === "crack") return <CrackSystem />;
  if (slug === "dongdong") return <DongdongSystem />;
  if (slug === "charan") return <CharanSystem />;
  return null;
}
