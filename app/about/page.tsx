import { SiteNav } from "@/components/site-nav";

const careers = [
  {
    company: "비보존제약",
    role: "의약품 디자이너",
    period: "2024.10—현재",
    field: "제약",
    work: [
      "의약품 패키지 디자인 및 제품 소개 브로슈어 제작·리뉴얼",
      "사내외 홍보물과 학회 부스, 판촉물 디자인",
      "해외 제조소와 협업해 신약 패키지 및 출시 홍보물 제작",
    ],
    result: [
      "기존 브로슈어의 정보 구조를 개선해 제품별 정보 접근성 향상",
      "약 성상 이미지를 실물 크기에 맞게 조정해 현장 활용도 증대",
    ],
  },
  {
    company: "이포에이",
    role: "브랜드 디자이너",
    period: "2023.02—2024.09",
    field: "스포츠 뉴트리션 · 건강기능식품",
    work: [
      "BI 가이드, 아이콘 및 폰트 디자인",
      "건강기능식품 패키지와 자사몰, 상세페이지, 광고 및 SNS 콘텐츠 디자인",
      "행사 부스, 굿즈, 인쇄물 제작과 인쇄소 감리",
    ],
    result: [
      "컬러와 타이포 규칙을 정리한 BI 가이드 제작으로 브랜드 일관성 강화",
      "반복 콘텐츠용 디자인 가이드 제작으로 내부 제작 프로세스 효율화",
      "4050 고객에 맞춘 상세페이지 리디자인으로 체류 시간 30% 증가 및 구매 전환율 개선",
    ],
  },
  {
    company: "레진엔터테인먼트",
    role: "그래픽 디자이너",
    period: "2020.06—2021.12",
    field: "웹툰",
    work: [
      "US·스페인 서비스 사이트 배너 및 상세페이지 제작",
      "구글 광고 이미지 등 광고 소재 제작",
      "이벤트 기획 참여 및 프로모션 비주얼 제작",
    ],
    result: [
      "글로벌 타깃별 배너와 상세페이지 제작으로 신규 유저 유입 및 이벤트 참여에 기여",
      "데이터팀과 클릭률을 분석해 디자인 패턴과 광고 효율 개선",
    ],
  },
];

export default function AboutPage() {
  return (
    <main className="about-page">
      <SiteNav />

      <header className="about-hero">
        <p>Profile & Experience</p>
        <h1>About</h1>
        <div className="about-lead">
          <strong>도수미<br />Graphic Designer</strong>
          <p>브랜드와 제품의 시각 커뮤니케이션을 총괄해 온 그래픽 디자이너입니다. 브랜드 아이덴티티부터 패키지, 디지털 콘텐츠, 인쇄물까지 매체를 넘나들며 일관된 경험을 설계합니다.</p>
        </div>
      </header>

      <section className="about-section expertise-section">
        <header><span>01</span><h2>Expertise</h2></header>
        <div className="expertise-list">
          <p>Brand Identity</p><p>Package Design</p><p>Graphic Design</p>
          <p>Digital Content</p><p>Editorial Design</p><p>Project Management</p>
        </div>
      </section>

      <section className="about-section career-section">
        <header><span>02</span><h2>Experience</h2></header>
        <div className="career-list">
          {careers.map((career) => (
            <article key={career.company}>
              <div className="career-title">
                <span>{career.period}</span>
                <h3>{career.company}</h3>
                <p>{career.role} · {career.field}</p>
              </div>
              <div className="career-detail">
                <div><h4>Work</h4><ul>{career.work.map((item) => <li key={item}>{item}</li>)}</ul></div>
                <div><h4>Impact</h4><ul>{career.result.map((item) => <li key={item}>{item}</li>)}</ul></div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about-section profile-section">
        <header><span>03</span><h2>Details</h2></header>
        <div className="profile-columns">
          <div><h3>Education</h3><p>서울과학기술대학교<br />시각디자인학과 학사<br /><small>2017.03—2023.02</small></p></div>
          <div><h3>Software</h3><p>Adobe Photoshop<br />Adobe Illustrator<br />Adobe InDesign<br />Adobe Premiere Pro<br />Figma</p></div>
          <div><h3>Certificate</h3><p>컴퓨터활용능력 1급<br />컴퓨터그래픽스운용기능사<br />GTQ 포토샵 1급<br />TOEIC 880</p></div>
        </div>
      </section>

      <footer className="about-contact">
        <span>Let’s work together</span>
        <a href="mailto:aiky171005@gmail.com">aiky171005@gmail.com ↗</a>
      </footer>
    </main>
  );
}
