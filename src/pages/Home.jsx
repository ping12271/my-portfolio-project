import { useEffect, useState } from "react";
import { Github, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";
import resume from "../assets/resume.pdf";

/* ─── Data ──────────────────────────────────────────────── */
const NAV_ITEMS = ["About", "Experience", "Work", "Contact"];

const SKILLS = ["React", "Angular", "TypeScript", "Tailwind CSS", "SCSS", "shadcn/ui", "Bootstrap", "반응형"];

const EXPERIENCES = [
    {
        period: "2020 — 2025",
        company: "Lemoncloud",
        desc: [
            "사내 서비스 및 외부 프로젝트의 UI 퍼블리싱 담당",
            "React 및 Angular 기반 화면 퍼블리싱",
            "Tailwind, ShadCN, SCSS를 활용한 반응형·다크모드 디자인 구현",
            "디자이너와 실시간 협업 (Figma·Zeplin)",
            "공통 컴포넌트 정리 및 문서화로 퍼블리싱 일관성 확보",
            "관리자(Admin), 사용자(Web/App), 키오스크 화면 퍼블리싱 수행",
        ],
    },
];

const WORKS = [
    {
        id: "eureka",
        title: "유레카코즈",
        desc: "반응형 웹 기반의 개발자 콘솔로, 서비스 카탈로그 카드 그리드와 타입별 탭 필터, 다크/라이트 테마 전환 UI를 퍼블리싱",
        tags: ["React", "Tailwind", "shadcn/ui"],
        link: "https://eureka.codes",
        color: "from-[#112240] to-[#1d3461]",
        accent: "rgba(100,255,218,0.15)",
    },
    {
        id: "admin",
        title: "기업 어드민",
        desc: "반응형 웹 기반의 기업 어드민 대시보드에서 데이터 테이블·카드·사이드바 네비게이션 UI를 퍼블리싱한 프로젝트",
        tags: ["React", "tailwind", "shadcn/ui"],
        color: "from-[#1a1a2e] to-[#16213e]",
        accent: "rgba(255,165,0,0.15)",
    },
    {
        id: "kiosk",
        title: "키오스크 / POS",
        desc: "카페·레스토랑 매장의 키오스크 주문 플로우와 POS 2단 레이아웃, 매장·상품·디바이스를 관리하는 어드민 화면까지 퍼블리싱한 데스크톱용 UI",
        tags: ["React", "SCSS", "tailwind", "shadcn/ui"],
        color: "from-[#0d1b2a] to-[#1b2838]",
        accent: "rgba(255,200,0,0.15)",
    },
    {
        id: "slp",
        title: "SLP 주거 서비스 앱 / 어드민",
        desc: "아파트·오피스 입주민용 앱과 어드민에서 배너, Living Service 메뉴 그리드, 공지·날씨 위젯, 입주자·시설 관리 화면을 퍼블리싱",
        tags: ["Angular", "Material UI", "Ionic", "SCSS"],
        color: "from-[#1a0a2e] to-[#2d1b4e]",
        accent: "rgba(150,100,255,0.15)",
    },
];

const SOCIALS = [
    { href: "https://github.com/ping12271", icon: Github },
    { href: "mailto:ping12271@hanmail.net", icon: Mail },
];

/* ─── SectionLabel ──────────────────────────────────────── */
function SectionLabel({ children }) {
    return (
        <div className="mb-8 flex items-center gap-3">
            <span className="text-xs font-medium tracking-[0.22em] text-slate-200 uppercase">{children}</span>
            <span className="h-px flex-1 bg-slate-400/20" />
        </div>
    );
}

/* ─── WorkThumb ─────────────────────────────────────────── */
function WorkThumb({ work }) {
    if (work.video) {
        return (
            <video
                src={work.video}
                autoPlay
                loop
                muted
                playsInline
                className="h-full w-full object-cover"
            />
        );
    }
    return (
        <div className={`h-full w-full bg-linear-to-br ${work.color} flex flex-col gap-2 p-3`}>
            <div
                className="h-2 w-3/5 rounded-sm"
                style={{ background: work.accent }}
            />
            <div
                className="h-2 w-2/5 rounded-sm"
                style={{ background: work.accent, opacity: 0.6 }}
            />
            <div className="mt-1 grid flex-1 grid-cols-3 gap-1">
                {Array.from({ length: 6 }).map((_, i) => (
                    <div
                        key={i}
                        className="rounded-sm"
                        style={{ background: i % 2 === 0 ? work.accent : work.accent.replace("0.15", "0.07") }}
                    />
                ))}
            </div>
        </div>
    );
}

/* ─── Portfolio ─────────────────────────────────────────── */
const Home = () => {
    const navigate = useNavigate();
    const [activeSection, setActiveSection] = useState("about");

    useEffect(() => {
        const els = document.querySelectorAll(".reveal");
        const io = new IntersectionObserver(
            (entries) =>
                entries.forEach((e) => {
                    if (e.isIntersecting) {
                        e.target.classList.add("revealed");
                        io.unobserve(e.target);
                    }
                }),
            { threshold: 0.1 },
        );
        els.forEach((el) => io.observe(el));
        return () => io.disconnect();
    }, []);

    /* active nav */
    useEffect(() => {
        const sections = document.querySelectorAll("section[id]");
        const io = new IntersectionObserver(
            (entries) =>
                entries.forEach((e) => {
                    if (e.isIntersecting) setActiveSection(e.target.id);
                }),
            { threshold: 0.35 },
        );
        sections.forEach((s) => io.observe(s));
        return () => io.disconnect();
    }, []);

    return (
        <div className="mx-auto max-w-360 px-6 lg:px-12">
            <div className="lg:flex lg:gap-16">
                {/* ══════ LEFT ══════ */}
                <aside className="pt-20 pb-0 lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-[320px] lg:shrink-0 lg:flex-col lg:justify-between lg:pb-20">
                    <div>
                        <h1 className="mb-4 text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
                            Shin Hyeeun
                            <span className="mt-3 block text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
                                Web Publisher
                            </span>
                        </h1>

                        <p className="max-w-[320px] leading-relaxed text-slate-400">
                            웹·앱·키오스크·어드민까지, 어떤 화면이든 <br></br>구현하는 5년 차 웹 퍼블리셔입니다.
                        </p>

                        {/* Navigation */}
                        <nav className="mt-12 hidden flex-col gap-1 lg:flex">
                            {NAV_ITEMS.map((item) => {
                                const id = item.toLowerCase();
                                const isActive = activeSection === id;
                                return (
                                    <a
                                        key={item}
                                        href={`#${id}`}
                                        className="group flex items-center gap-3 py-1.5 no-underline"
                                    >
                                        <span
                                            className={`h-px shrink-0 transition-all duration-300 ${
                                                isActive ? "w-12 bg-slate-200" : "w-6 bg-slate-500"
                                            }`}
                                        />
                                        <span
                                            className={`text-xs font-bold tracking-[0.16em] uppercase transition-colors duration-200 ${
                                                isActive ? "text-slate-200" : "text-slate-500"
                                            }`}
                                        >
                                            {item}
                                        </span>
                                    </a>
                                );
                            })}
                        </nav>
                    </div>

                    {/* 하단: 소셜 링크 */}
                    <div className="mt-5 flex gap-5">
                        {SOCIALS.map(({ href, icon: Icon }) => (
                            <a
                                key={href}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-1.5 pb-0.5 tracking-wider text-slate-400 transition-all duration-300 hover:text-teal-300"
                            >
                                <Icon
                                    size={24}
                                    strokeWidth={1.5}
                                    className="transition-transform group-hover:-translate-y-0.5"
                                />
                            </a>
                        ))}
                    </div>
                </aside>

                {/* ══════ RIGHT — 스크롤 영역 ══════ */}
                <main className="flex min-w-0 flex-1 flex-col gap-28 py-16 lg:gap-36 lg:py-20">
                    {/* ── About ── */}
                    <section id="about">
                        <SectionLabel>About</SectionLabel>
                        <div className="reveal max-w-125 space-y-4 leading-relaxed text-slate-400">
                            <ul>
                                <li className="list-disc">
                                    다양한 디바이스 대응 : 웹앱, 모바일, 키오스크, POS, 어드민까지 환경을 가리지 않는
                                    유연한 구현력을 갖추고 있습니다.
                                </li>
                                <li className="list-disc">
                                    최적화된 도구 활용 : Angular와 React 환경에서 SCSS, Bootstrap, Tailwind CSS,
                                    shadcn/ui 등 프로젝트 상황에 최적화된 도구를 선택하고 내재화하며 성과를
                                    만들어왔습니다.
                                </li>
                                <li className="list-disc">
                                    확장성 있는 설계 : 다크모드 대응 및 다국어(i18n) 퍼블리싱 경험을 통해 유지보수가
                                    용이한 코드 구조를 설계하는 데 강점이 있습니다.
                                </li>
                                <li className="list-disc">
                                    AI 기반 효율화 : Cursor 등 AI 도구를 적극 활용해 개발 공수를 최적화하며, 이를 통해
                                    확보된 시간으로 고도화된 인터랙션 연구에 집중합니다.
                                </li>
                                <li className="list-disc">
                                    UX 중심 사고 : 기술적 해결책을 통해 디자인과 개발 사이에서 최상의 사용자 경험(UX)을
                                    연결해 낼 준비가 되어 있습니다.
                                </li>
                            </ul>

                            <div className="flex flex-wrap gap-2 pt-2">
                                {SKILLS.map((s) => (
                                    <span
                                        key={s}
                                        className="rounded-full bg-teal-400/10 px-3 py-1 text-xs leading-5 font-medium text-teal-300"
                                    >
                                        {s}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* ── Experience ── */}
                    <section id="experience">
                        <SectionLabel>Experience</SectionLabel>
                        <div className="flex flex-col gap-1">
                            {EXPERIENCES.map((exp, i) => (
                                <div
                                    key={i}
                                    className="group grid gap-5 rounded border border-transparent p-4 lg:grid-cols-[90px_1fr]"
                                >
                                    <p className="pt-0.5 text-xs leading-relaxed tracking-wide text-slate-400">
                                        {exp.period}
                                    </p>
                                    <div>
                                        <p className="mb-3 font-bold tracking-wide text-slate-200 transition-colors duration-200 group-hover:text-teal-300">
                                            {exp.company}
                                        </p>
                                        <ul className="space-y-1">
                                            {exp.desc.map((d, j) => (
                                                <li
                                                    key={j}
                                                    className="relative pl-4 text-sm leading-relaxed text-slate-400"
                                                >
                                                    <span className="absolute top-0.5 left-0 text-xs">▹</span>
                                                    {d}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* ── Work ── */}
                    <section id="work">
                        <SectionLabel>Work</SectionLabel>
                        <div className="flex flex-col gap-1">
                            {WORKS.map((work, i) => (
                                <div
                                    key={i}
                                    className="reveal group grid cursor-pointer grid-cols-1 gap-5 rounded border border-transparent p-4 transition-all duration-200 hover:border-teal-300/10 hover:bg-teal-300/3 sm:grid-cols-[180px_1fr]"
                                    onClick={() => navigate(`/work/${work.id}`)}
                                >
                                    <div className="h-27 w-full shrink-0 overflow-hidden rounded border border-[#1d3461] brightness-75 saturate-50 transition-all duration-300 group-hover:border-teal-300/30 group-hover:brightness-100 group-hover:saturate-100 sm:w-45">
                                        <WorkThumb work={work} />
                                    </div>

                                    <div>
                                        <p className="mb-2 flex items-center gap-1.5 font-bold text-slate-200 transition-colors duration-200 group-hover:text-teal-300">
                                            {work.title}
                                            <span className="inline-block text-slate-400 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-teal-300">
                                                ↗
                                            </span>
                                        </p>
                                        <p className="mb-3 text-sm leading-relaxed text-slate-400">{work.desc}</p>
                                        <div className="flex flex-wrap gap-1.5">
                                            {work.tags.map((t) => (
                                                <span
                                                    key={t}
                                                    className="rounded-full bg-teal-400/9 px-2 py-0.5 text-xs text-teal-300"
                                                >
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <a
                                href={resume}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group text-bold mt-10 flex cursor-pointer gap-2 font-medium text-slate-400 transition-colors duration-200 hover:text-teal-300"
                            >
                                이력서 보기
                                <span className="inline-block transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-teal-300">
                                    ↗
                                </span>
                            </a>
                        </div>
                    </section>

                    {/* ── Contact ── */}
                    <section
                        id="contact"
                        className="pb-16"
                    >
                        <SectionLabel>Contact</SectionLabel>
                        <p className="mb-8 text-base leading-relaxed text-slate-200">010.6627.3135</p>
                    </section>
                </main>
            </div>
        </div>
    );
};

export default Home;
