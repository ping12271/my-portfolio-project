import { useEffect } from "react";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { useParams, useNavigate } from "react-router-dom";
import VideoCompanyAdmin01 from "../assets/company_admin_01.mp4";
import VideoCompanyAdmin02 from "../assets/company_admin_02.mp4";
import VideoCompanyAdmin03 from "../assets/company_admin_03.mp4";
import VideoSlpApp01 from "../assets/slp_app_01.mp4";
import VideoSlpApp02 from "../assets/slp_app_02.mp4";
import VideoKiosk from "../assets/kiosk.mp4";
import VideoPos from "../assets/pos.mp4";
import VideoKioskAdmin from "../assets/kiosk_admin.mp4";
import VideoCodes from "../assets/codes.mp4";
import VideoSlpAdmin from "../assets/slp_admin.mp4";

const WORKS = [
    {
        id: "eureka",
        title: "유레카코즈",
        platform: "Web",
        link: "https://eureka.codes",
        tags: ["React", "Tailwind", "shadcn/ui", "TypeScript"],
        summary:
            "클라우드 서비스를 관리하는 개발자용 웹 콘솔입니다. 서비스 카탈로그, 배포 현황, 팀 관리 등 다양한 기능을 하나의 화면에서 제어할 수 있습니다.",
        sections: [
            {
                title: "서비스 카탈로그",
                desc: "프로젝트 내 서비스를 카드 그리드 형태로 시각화하고, 솔루션·프론트엔드·백엔드 등 타입별 탭 필터를 통해 원하는 서비스를 빠르게 찾을 수 있도록 설계했습니다. 로그인·인증 화면과 테마 전환 UI까지 일관된 레이아웃과 스타일로 퍼블리싱했습니다.",
                video: VideoCodes,
            },
        ],
        next: "admin",
    },
    {
        id: "admin",
        title: "기업 어드민",
        platform: "Admin",
        link: null,
        tags: ["React", "Tailwind", "shadcn/ui", "TypeScript"],
        summary:
            "기업의 고용 현황, 거래 통계, AI 추천 정보를 한눈에 파악할 수 있는 어드민 대시보드입니다.\n데이터 집약적인 화면을 직관적으로 표현하는 데 집중했습니다.",
        sections: [
            {
                title: "대시보드 & 차트 & \n데이터 테이블",
                desc: "고용 현황 카드, 연간 통계 차트, 상세 데이터 테이블을 한 화면에 배치해 정보의 계층 구조가 자연스럽게 보이도록 그리드 레이아웃을 설계했습니다.",
                video: VideoCompanyAdmin01,
            },
            {
                title: "로그인 · 인증 플로우",
                desc: "아이디·비밀번호 입력 필드, 안내 문구, 버튼 상태를 일관된 수직 레이아웃으로 정리해 다양한 해상도에서 폼이 깨지지 않도록 퍼블리싱했습니다.",
                video: VideoCompanyAdmin02,
            },
            {
                title: "폼 카드 & 사이드 시트",
                desc: "리스트에서 항목을 선택하면 우측 사이드 시트에서 상세 정보와 폼을 확인·수정할 수 있는 2단 구조를 퍼블리싱했습니다.",
                video: VideoCompanyAdmin03,
            },
        ],
        next: "kiosk",
    },
    {
        id: "kiosk",
        title: "키오스크 / POS 단말기 / 어드민",
        platform: "Kiosk · POS Terminal",
        link: null,
        tags: ["React", "Tailwind", "shadcn/ui", "TypeScript"],
        summary:
            "카페 · 레스토랑 매장의 키오스크, 직원용 POS, 어드민을 하나의 데스크톱 앱으로 구성한 프로젝트입니다. 터치 주문·결제 플로우부터 매장·상품·디바이스 관리 화면까지 퍼블리싱했습니다.",
        sections: [
            {
                title: "키오스크 - 주문 플로우",
                desc: "유형 선택 → 메뉴 선택 → 주문 확인 → 결제 → 완료의 5단계 플로우를 스텝 인디케이터로 시각화했습니다. 터치 타겟 크기와 가독성을 일반 웹과 다르게 설계했습니다.",
                video: VideoKiosk,
            },
            {
                title: "POS - 2단 레이아웃",
                desc: "왼쪽 상품 그리드 + 오른쪽 주문 내역의 2단 구조로 구성했습니다. 품절 처리, 회원 조회, 카드 결제 등 실제 매장 운영에 필요한 기능을 모두 담았습니다.",
                video: VideoPos,
            },
            {
                title: "어드민",
                desc: "좌측 사이드바와 상단 헤더를 가진 어드민 레이아웃에서 매장 기본 설정, 상품·카테고리, 키오스크 디바이스와 QR 테이블, 입장 전용 상품을 관리하는 카드·테이블·폼 UI를 퍼블리싱했습니다.",
                video: VideoKioskAdmin,
            },
        ],
        next: "slp",
    },
    {
        id: "slp",
        title: "SLP 주거 서비스",
        platform: "App / 어드민",
        link: null,
        tags: ["Angular", "Material UI", "Ionic", "SCSS"],
        summary:
            "아파트·오피스 입주민을 위한 주거 서비스 앱과 어드민입니다. 배너 슬라이더, Living Service 그리드, 공지사항 캐러셀, 날씨 위젯이 있는 메인 홈과 입주자·시설 관리용 화면을 퍼블리싱했습니다.",
        sections: [
            {
                title: "앱 v1",
                desc: "배너 슬라이더, Living Service 그리드 메뉴, 공지사항 캐러셀, 날씨 위젯으로 구성된 메인 홈입니다. 다양한 컴포넌트를 하나의 스크롤 뷰에 자연스럽게 배치했습니다.",
                video: VideoSlpApp01,
            },
            {
                title: "앱 v2",
                desc: "기존 v1 구조를 바탕으로 상단 헤더와 카드형 서비스 섹션, 공지·배너 영역의 배치를 조정해 정보 우선순위가 더 잘 보이도록 리뉴얼한 메인 홈입니다.",
                video: VideoSlpApp02,
            },
            {
                title: "어드민",
                desc: "입주자·세대 관리, 공지사항·배너 등록, 시설 예약 관리, 앱 색상·로고 등 브랜드 설정, 통계 대시보드까지 주거 서비스 운영에 필요한 전반적인 어드민 화면을 퍼블리싱했습니다. 다양한 기능을 사이드바 네비게이션 기반의 일관된 레이아웃 안에 구조적으로 배치해 운영자가 직관적으로 사용할 수 있도록 구성했습니다.",
                video: VideoSlpAdmin,
            },
        ],
        next: "eureka",
    },
];

const KioskSections = ({ sections }) => {
    const [first, ...rest] = sections;

    return (
        <div className="flex flex-col gap-28">
            <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-12">
                    <div className="w-full overflow-hidden rounded-lg border border-slate-200 bg-slate-100 lg:w-3/5">
                        {first.video && (
                            <video
                                src={first.video}
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="h-full w-full object-cover"
                            />
                        )}
                    </div>
                    <div className="lg:w-2/5">
                        <p className="mb-2 text-[10px] tracking-[0.2em] text-teal-600">01</p>
                        <h2 className="mb-4 text-[22px] leading-[1.3] whitespace-pre-line text-slate-800">
                            {first.title}
                        </h2>
                        <p className="text-sm leading-[1.9] text-slate-500">{first.desc}</p>
                    </div>
                </div>
                <div className="h-px bg-slate-200" />
            </div>

            {rest.map((sec, i) => (
                <div
                    key={i}
                    className="flex flex-col gap-8"
                >
                    <div className="w-full overflow-hidden rounded-lg border border-slate-200 bg-slate-100">
                        {sec.video && (
                            <video
                                src={sec.video}
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="h-full w-full object-cover"
                            />
                        )}
                    </div>
                    <div className="flex flex-col gap-3 lg:flex-row lg:gap-16">
                        <div className="shrink-0 lg:w-50">
                            <p className="mb-2 text-[10px] tracking-[0.2em] text-teal-600">
                                {String(i + 2).padStart(2, "0")}
                            </p>
                            <h2 className="text-[22px] leading-[1.3] whitespace-pre-line text-slate-800">
                                {sec.title}
                            </h2>
                        </div>
                        <p className="flex-1 text-sm leading-[1.9] text-slate-500">{sec.desc}</p>
                    </div>
                    {i < rest.length - 1 && <div className="h-px bg-slate-200" />}
                </div>
            ))}
        </div>
    );
};

const SlpSections = ({ sections }) => {
    const first2 = sections.slice(0, 2);
    const last = sections[2];

    return (
        <div className="flex flex-col gap-28">
            <div className="flex flex-col gap-8">
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                    {first2.map((sec, i) => (
                        <div
                            key={i}
                            className="flex flex-col gap-4"
                        >
                            <div className="w-full overflow-hidden rounded-lg border border-slate-200 bg-slate-100">
                                {sec.video && (
                                    <video
                                        src={sec.video}
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        className="h-full w-full object-cover"
                                    />
                                )}
                            </div>
                            <div>
                                <p className="mb-1 text-[10px] tracking-[0.2em] text-teal-600">
                                    {String(i + 1).padStart(2, "0")}
                                </p>
                                <h2 className="mb-2 text-[18px] leading-[1.3] text-slate-800">{sec.title}</h2>
                                <p className="text-sm leading-[1.9] text-slate-500">{sec.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="h-px bg-slate-200" />
            </div>

            {last && (
                <div className="flex flex-col gap-8">
                    <div className="w-full overflow-hidden rounded-lg border border-slate-200 bg-slate-100">
                        {last.video && (
                            <video
                                src={last.video}
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="h-full w-full object-cover"
                            />
                        )}
                    </div>
                    <div className="flex flex-col gap-3 lg:flex-row lg:gap-16">
                        <div className="shrink-0 lg:w-50">
                            <p className="mb-2 text-[10px] tracking-[0.2em] text-teal-600">03</p>
                            <h2 className="text-[22px] leading-[1.3] whitespace-pre-line text-slate-800">
                                {last.title}
                            </h2>
                        </div>
                        <p className="flex-1 text-sm leading-[1.9] text-slate-500">{last.desc}</p>
                    </div>
                    <div className="h-px bg-slate-200" />
                </div>
            )}
        </div>
    );
};

const DefaultSections = ({ sections }) => (
    <div className="flex flex-col gap-28">
        {sections.map((sec, i) => (
            <div
                key={i}
                className="flex flex-col gap-8"
            >
                <div className="w-full overflow-hidden rounded-lg border border-slate-200 bg-slate-100">
                    {sec.video && (
                        <video
                            src={sec.video}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="h-full w-full object-cover"
                        />
                    )}
                </div>
                <div className="flex flex-col gap-3 lg:flex-row lg:gap-16">
                    <div className="shrink-0 lg:w-50">
                        <p className="mb-2 text-[10px] tracking-[0.2em] text-teal-600">
                            {String(i + 1).padStart(2, "0")}
                        </p>
                        <h2 className="text-[22px] leading-[1.3] whitespace-pre-line text-slate-800">{sec.title}</h2>
                    </div>
                    <p className="flex-1 text-sm leading-[1.9] text-slate-500">{sec.desc}</p>
                </div>
                {i < sections.length - 1 && <div className="mt-2 h-px bg-slate-200" />}
            </div>
        ))}
    </div>
);

const WorkDetail = ({ workId }) => {
    const { id } = useParams();
    const navigate = useNavigate();

    const work = WORKS.find((w) => w.id === id) || WORKS[0];
    const nextWork = WORKS.find((w) => w.id === work.next);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [workId]);

    return (
        <div className="min-h-screen bg-slate-50 text-slate-800">
            <nav className="fixed top-0 right-0 left-0 z-50 flex items-center justify-between border-b border-slate-200 bg-white/90 px-8 py-5 backdrop-blur-md">
                <button
                    onClick={() => navigate("/")}
                    className="group cursor-pointer transition-colors duration-200 hover:text-teal-600"
                >
                    <ArrowLeft className="text-slate-400 transition-all duration-200 group-hover:-translate-x-0.5 group-hover:text-teal-600" />
                </button>
                <span className="text-sm font-medium tracking-[0.2em] text-slate-700">WORK DETAIL</span>
                {work.link && (
                    <a
                        href={work.link}
                        target="_blank"
                        rel="noreferrer"
                        className="group cursor-pointer"
                    >
                        <ExternalLink className="text-slate-400 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-teal-600" />
                    </a>
                )}
                {!work.link && <span style={{ width: 60 }} />}
            </nav>

            <header className="flex flex-col justify-end border-b border-slate-200 px-8 pt-36 pb-16 lg:px-24">
                <div className="mx-auto w-full max-w-215">
                    <p className="mb-4 block text-[11px] tracking-[0.2em] text-teal-600 uppercase">{work.platform}</p>
                    <h1 className="mb-6 text-[clamp(36px,6vw,64px)] leading-[1.1] text-slate-800">{work.title}</h1>
                    <p className="mb-7 max-w-150 text-[15px] leading-[1.9] whitespace-pre-line text-slate-500">
                        {work.summary}
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {work.tags.map((t) => (
                            <span
                                key={t}
                                className="rounded-full border border-teal-200 bg-teal-50 px-3 py-1 text-xs leading-5 font-medium text-teal-700"
                            >
                                {t}
                            </span>
                        ))}
                    </div>
                </div>
            </header>

            <div className="mx-auto flex w-full flex-col gap-28 px-8 py-20 lg:max-w-240 lg:px-24">
                {work.id === "kiosk" ? (
                    <KioskSections sections={work.sections} />
                ) : work.id === "slp" ? (
                    <SlpSections sections={work.sections} />
                ) : (
                    <DefaultSections sections={work.sections} />
                )}

                {nextWork && (
                    <div
                        className="group cursor-pointer"
                        onClick={() => navigate(`/work/${nextWork.id}`)}
                    >
                        <p className="mb-1 text-xs tracking-[0.2em] text-slate-400">NEXT WORK</p>
                        <p className="group flex items-center gap-2 text-xl text-slate-700 transition-colors duration-200 hover:text-teal-600">
                            {nextWork.title}
                            <ArrowLeft className="rotate-180 transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-teal-600" />
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default WorkDetail;
