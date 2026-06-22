import Link from 'next/link'
import TournamentCard, { TournamentCardProps } from '@/app/components/TournamentCard'

const featuredTournaments: TournamentCardProps[] = [
  {
    id: '1',
    title: '2025 서울 오픈 피클볼 챔피언십',
    date: '2025.06.28 - 06.29',
    location: '선릉 실내체육관, 서울',
    category: '복식',
    level: '오픈',
    maxParticipants: 120,
    currentParticipants: 98,
    fee: 50000,
    status: '마감임박',
  },
  {
    id: '2',
    title: '부산 비치 피클볼 토너먼트',
    date: '2025.07.05 - 07.06',
    location: '해운대 스포츠센터, 부산',
    category: '혼합복식',
    level: '중급',
    maxParticipants: 64,
    currentParticipants: 32,
    fee: 40000,
    status: '접수중',
  },
  {
    id: '3',
    title: '강남 기업인 피클볼 리그',
    date: '2025.07.12',
    location: '강남 스포츠센터, 서울',
    category: '단식',
    level: '초급',
    maxParticipants: 32,
    currentParticipants: 12,
    fee: 30000,
    status: '접수중',
  },
]

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#6D28D9] via-[#7C3AED] to-[#4F46E5] text-white overflow-hidden">
        {/* Decorative court SVG */}
        <svg
          className="absolute right-0 top-0 opacity-10 w-96 h-96"
          viewBox="0 0 400 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="50" y="50" width="300" height="300" rx="4" stroke="white" strokeWidth="3"/>
          <line x1="200" y1="50" x2="200" y2="350" stroke="white" strokeWidth="2"/>
          <line x1="50" y1="200" x2="350" y2="200" stroke="white" strokeWidth="2"/>
          <rect x="100" y="100" width="200" height="100" stroke="white" strokeWidth="2"/>
          <rect x="100" y="200" width="200" height="100" stroke="white" strokeWidth="2"/>
          <circle cx="200" cy="200" r="30" stroke="white" strokeWidth="2"/>
          <circle cx="200" cy="200" r="5" fill="white"/>
        </svg>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 relative z-10">
          <div className="max-w-2xl">
            <span className="inline-block bg-white/20 text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-6 backdrop-blur-sm">
              🏓 한국 최대 피클볼 플랫폼
            </span>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              피클볼로<br />연결되다
            </h1>
            <p className="text-lg text-white/80 mb-10 leading-relaxed">
              전국 대회 참가부터 랭킹까지, 피클볼 KR에서 시작하세요.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/tournaments"
                className="px-8 py-3.5 bg-white text-[#6D28D9] font-bold rounded-xl hover:bg-[#EDE9FE] transition-colors text-center text-lg shadow-lg"
              >
                대회찾기
              </Link>
              <Link
                href="/host"
                className="px-8 py-3.5 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-colors text-center text-lg"
              >
                토너먼트 개설
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-[#F8F7FF] border-y border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-black text-[#6D28D9]">12개</div>
              <div className="text-sm text-[#6B7280] mt-1">활성 대회</div>
            </div>
            <div>
              <div className="text-3xl font-black text-[#6D28D9]">2,847명</div>
              <div className="text-sm text-[#6B7280] mt-1">참가 선수</div>
            </div>
            <div>
              <div className="text-3xl font-black text-[#6D28D9]">8,420+</div>
              <div className="text-sm text-[#6B7280] mt-1">진행된 경기</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Tournaments */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-[#1F2937]">진행중인 대회</h2>
            <p className="text-[#6B7280] mt-1">지금 참가할 수 있는 인기 대회</p>
          </div>
          <Link href="/tournaments" className="text-[#6D28D9] font-semibold hover:text-[#5B21B6] transition-colors text-sm">
            전체보기 →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredTournaments.map((t) => (
            <TournamentCard key={t.id} {...t} />
          ))}
        </div>
      </section>

      {/* Category Cards */}
      <section className="bg-[#F8F7FF] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-[#1F2937]">대회 카테고리</h2>
            <p className="text-[#6B7280] mt-2">종목별 대회를 찾아보세요</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: '🏃',
                title: '단식',
                desc: '1:1 개인전. 자신의 실력을 마음껏 발휘해보세요.',
                color: 'from-violet-500 to-purple-600',
                href: '/tournaments?category=단식',
              },
              {
                icon: '👥',
                title: '복식',
                desc: '2:2 팀전. 파트너와 호흡을 맞춰 우승을 노리세요.',
                color: 'from-emerald-500 to-teal-600',
                href: '/tournaments?category=복식',
              },
              {
                icon: '🤝',
                title: '혼합복식',
                desc: '남녀 혼합 2:2. 다양한 조합으로 더욱 재미있는 경기.',
                color: 'from-orange-400 to-amber-500',
                href: '/tournaments?category=혼합복식',
              },
            ].map((cat) => (
              <Link
                key={cat.title}
                href={cat.href}
                className="group bg-white rounded-2xl shadow-sm border border-[#E5E7EB] overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className={`h-3 bg-gradient-to-r ${cat.color}`} />
                <div className="p-6">
                  <div className="text-4xl mb-3">{cat.icon}</div>
                  <h3 className="text-lg font-bold text-[#1F2937] mb-2">{cat.title}</h3>
                  <p className="text-[#6B7280] text-sm leading-relaxed">{cat.desc}</p>
                  <span className="inline-block mt-4 text-sm font-semibold text-[#6D28D9] group-hover:text-[#5B21B6]">
                    대회 보기 →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-[#1F2937]">이용 방법</h2>
          <p className="text-[#6B7280] mt-2">3단계로 간단하게 시작하세요</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: '👤',
              iconBg: 'bg-[#EDE9FE]',
              title: '회원가입',
              desc: '간단한 정보 입력으로 무료 회원가입. DUPR 레이팅도 함께 등록하세요.',
            },
            {
              icon: '🏆',
              iconBg: 'bg-[#D1FAE5]',
              title: '대회참가',
              desc: '원하는 대회를 찾아 온라인으로 신청하고 참가비를 결제하세요.',
            },
            {
              icon: '🏓',
              iconBg: 'bg-[#FEF3C7]',
              title: '경기진행',
              desc: '대진표를 확인하고 경기에 참가하세요. 결과는 자동으로 기록됩니다.',
            },
          ].map((step, i) => (
            <div key={step.title} className="flex flex-col items-center text-center relative">
              {i < 2 && (
                <div className="hidden md:block absolute top-8 left-[calc(50%+48px)] right-0 h-0.5 bg-[#E5E7EB]" />
              )}
              <div className={`w-16 h-16 rounded-full ${step.iconBg} flex items-center justify-center text-2xl mb-4 relative z-10`}>
                {step.icon}
              </div>
              <h3 className="text-lg font-bold text-[#1F2937] mb-2">{step.title}</h3>
              <p className="text-[#6B7280] text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1F2937] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between gap-8">
            <div>
              <div className="text-xl font-bold mb-2">🏓 피클볼 KR</div>
              <p className="text-[#9CA3AF] text-sm">한국 최대 피클볼 토너먼트 플랫폼</p>
            </div>
            <div className="flex gap-12 text-sm text-[#9CA3AF]">
              <div className="flex flex-col gap-2">
                <span className="text-white font-semibold mb-1">서비스</span>
                <Link href="/tournaments" className="hover:text-white transition-colors">대회찾기</Link>
                <Link href="/bracket" className="hover:text-white transition-colors">대진표</Link>
                <Link href="/ranking" className="hover:text-white transition-colors">랭킹</Link>
                <Link href="#" className="hover:text-white transition-colors">서비스 소개</Link>
                <Link href="#" className="hover:text-white transition-colors">사이트맵</Link>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-white font-semibold mb-1">고객지원</span>
                <a href="#" className="hover:text-white transition-colors">이용약관</a>
                <a href="#" className="hover:text-white transition-colors">개인정보처리방침</a>
                <a href="#" className="hover:text-white transition-colors">문의하기</a>
              </div>
            </div>
          </div>
          <div className="mt-10 pt-6 border-t border-[#374151] text-sm text-[#6B7280]">
            피클볼 KR © 2025. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
