import Link from 'next/link'

const clubs = [
  {
    id: '1',
    name: '서울 피클볼 클럽',
    region: '서울',
    members: 48,
    emoji: '🏓',
    gradient: 'from-violet-500 to-purple-600',
    status: '활동중',
    desc: '서울 강남/강북 지역을 기반으로 활동하는 피클볼 동호회입니다. 초급부터 고급까지 누구나 환영합니다.',
  },
  {
    id: '2',
    name: '부산 해변 피클볼',
    region: '부산',
    members: 32,
    emoji: '🌊',
    gradient: 'from-cyan-500 to-blue-600',
    status: '모집중',
    desc: '해운대를 중심으로 활동하는 부산 최대 피클볼 동호회. 주말 정기 모임 운영 중입니다.',
  },
  {
    id: '3',
    name: '강남 파워 피클볼',
    region: '서울',
    members: 24,
    emoji: '⚡',
    gradient: 'from-amber-500 to-orange-600',
    status: '활동중',
    desc: '강남구 기업인 중심의 피클볼 동호회. 평일 저녁 & 주말 운영.',
  },
  {
    id: '4',
    name: '인천 오션 피클볼',
    region: '인천',
    members: 20,
    emoji: '🐬',
    gradient: 'from-emerald-500 to-teal-600',
    status: '모집중',
    desc: '인천 연수구 중심 동호회. 초보자 환영, 정기 레슨 진행.',
  },
  {
    id: '5',
    name: '대구 불꽃 피클볼',
    region: '대구',
    members: 16,
    emoji: '🔥',
    gradient: 'from-red-500 to-rose-600',
    status: '활동중',
    desc: '대구 수성구 중심. 매주 토/일 정기 경기 운영.',
  },
  {
    id: '6',
    name: '경기 스타 피클볼',
    region: '경기',
    members: 38,
    emoji: '⭐',
    gradient: 'from-indigo-500 to-violet-600',
    status: '활동중',
    desc: '수원/성남/분당 지역 통합 동호회. 다양한 레벨 환영.',
  },
]

const members = ['김민준', '박서연', '이준호', '정수현', '강다은', '윤성진', '최지수', '오하린']

const activities = [
  { date: '2025.06.15', desc: '6월 정기 경기 개최 — 18명 참가' },
  { date: '2025.06.01', desc: '서울 오픈 단체 참가 신청 완료' },
  { date: '2025.05.25', desc: '신입 회원 환영 모임 — 12명 참가' },
]

export default async function ClubDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const club = clubs.find((c) => c.id === id) ?? clubs[0]
  const otherClubs = clubs.filter((c) => c.id !== club.id).slice(0, 3)

  return (
    <div className="min-h-screen bg-[#F8F7FF]">
      {/* Club hero banner */}
      <div className={`bg-gradient-to-br ${club.gradient} text-white py-12`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/clubs"
            className="inline-flex items-center gap-1 text-white/70 hover:text-white text-sm mb-6 transition-colors"
          >
            ← 동호회 목록
          </Link>

          <div className="flex flex-wrap items-start gap-6 justify-between">
            <div className="flex items-center gap-4">
              {/* Club emoji logo */}
              <div className="w-16 h-16 bg-white/20 rounded-2xl text-3xl flex items-center justify-center shrink-0">
                {club.emoji}
              </div>
              <div>
                <h1 className="text-3xl font-bold">{club.name}</h1>
                <p className="text-white/80 mt-1">
                  📍 {club.region} · 👥 {club.members}명
                </p>
              </div>
            </div>

            {/* Join button */}
            <button className="shrink-0 bg-white text-[#6D28D9] font-bold px-6 py-2.5 rounded-xl hover:bg-white/90 transition-colors">
              가입 신청
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        {/* Info grid */}
        <div className="bg-white rounded-2xl border border-[#E5E7EB] shadow-sm p-6">
          <h2 className="text-lg font-bold text-[#1F2937] mb-4">동호회 정보</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { label: '설립일', value: '2023.03.15', icon: '📅' },
              { label: '활동 지역', value: '서울 강남구, 송파구', icon: '📍' },
              { label: '정기 모임', value: '매주 토요일 10:00-14:00', icon: '🗓️' },
              { label: '레벨', value: '초급~고급 (누구나)', icon: '📊' },
            ].map((info) => (
              <div key={info.label} className="flex items-start gap-3 p-3 bg-[#F8F7FF] rounded-xl">
                <span className="text-xl">{info.icon}</span>
                <div>
                  <div className="text-xs text-[#6B7280] font-medium">{info.label}</div>
                  <div className="text-sm font-semibold text-[#1F2937] mt-0.5">{info.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 소개글 */}
        <div className="bg-white rounded-2xl border border-[#E5E7EB] shadow-sm p-6">
          <h2 className="text-lg font-bold text-[#1F2937] mb-3">소개글</h2>
          <p className="text-sm text-[#6B7280] leading-relaxed">
            서울 피클볼 클럽은 2023년 3월에 창설된 서울 최대 피클볼 동호회입니다. 강남구와 송파구를 중심으로 매주 정기 모임을 운영하며, 초급부터 고급까지 모든 레벨의 회원을 환영합니다. 전문 코치의 지도 아래 체계적인 훈련 프로그램을 제공하며, 정기 친선전과 대외 대회 참가를 통해 실력을 키울 수 있습니다. 함께 성장하는 즐거운 피클볼 커뮤니티를 만들어가고 있습니다.
          </p>
        </div>

        {/* 회원 목록 */}
        <div className="bg-white rounded-2xl border border-[#E5E7EB] shadow-sm p-6">
          <h2 className="text-lg font-bold text-[#1F2937] mb-4">회원 목록</h2>
          <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
            {members.map((name) => (
              <div key={name} className="shrink-0 flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-[#EDE9FE] flex items-center justify-center text-[#6D28D9] font-bold text-lg">
                  {name[0]}
                </div>
                <span className="text-xs text-[#6B7280] whitespace-nowrap">{name}</span>
              </div>
            ))}
            <div className="shrink-0 flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-[#F3F4F6] flex items-center justify-center text-[#6B7280] text-xs font-semibold text-center leading-tight px-1">
                +40
              </div>
              <span className="text-xs text-[#6B7280] whitespace-nowrap">더보기</span>
            </div>
          </div>
        </div>

        {/* 최근 활동 */}
        <div className="bg-white rounded-2xl border border-[#E5E7EB] shadow-sm p-6">
          <h2 className="text-lg font-bold text-[#1F2937] mb-4">최근 활동</h2>
          <div className="space-y-4">
            {activities.map((activity) => (
              <div key={activity.date} className="flex gap-4 items-start">
                <span className="shrink-0 text-xs font-semibold text-[#6D28D9] w-24">{activity.date}</span>
                <span className="text-sm text-[#1F2937]">{activity.desc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 운영중인 대회 */}
        <div className="bg-white rounded-2xl border border-[#E5E7EB] shadow-sm p-6">
          <h2 className="text-lg font-bold text-[#1F2937] mb-4">운영중인 대회</h2>
          <Link
            href="/tournaments/1"
            className="flex items-center justify-between p-4 bg-[#F8F7FF] rounded-xl border border-[#E5E7EB] hover:border-[#6D28D9] transition-colors group"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white text-lg">
                🏆
              </div>
              <div>
                <div className="text-sm font-bold text-[#1F2937]">2025 서울 오픈 피클볼 챔피언십</div>
                <div className="text-xs text-[#6B7280] mt-0.5">2025.06.28 - 06.29 · 선릉 실내체육관</div>
              </div>
            </div>
            <span className="text-[#6D28D9] text-sm font-semibold group-hover:translate-x-0.5 transition-transform">→</span>
          </Link>
        </div>

        {/* 관련 동호회 */}
        <div>
          <h2 className="text-lg font-bold text-[#1F2937] mb-4">관련 동호회</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {otherClubs.map((other) => (
              <Link
                key={other.id}
                href={`/clubs/${other.id}`}
                className="bg-white rounded-2xl border border-[#E5E7EB] shadow-sm hover:shadow-md transition-shadow overflow-hidden"
              >
                <div className={`h-2 bg-gradient-to-r ${other.gradient}`} />
                <div className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#EDE9FE] flex items-center justify-center text-xl">
                      {other.emoji}
                    </div>
                    <div>
                      <div className="text-sm font-bold text-[#1F2937]">{other.name}</div>
                      <div className="text-xs text-[#6B7280]">📍 {other.region} · 👥 {other.members}명</div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
