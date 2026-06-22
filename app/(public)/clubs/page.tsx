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

const regions = ['전체', '서울', '경기', '부산', '인천', '대구', '광주']

export default function ClubsPage() {
  return (
    <div className="min-h-screen bg-[#F8F7FF]">
      {/* Page header */}
      <div className="bg-white border-b border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-2xl font-bold text-[#1F2937]">동호회</h1>
          <p className="text-[#6B7280] mt-1">전국 피클볼 동호회를 찾아보세요</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search bar */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="동호회명, 지역으로 검색..."
            className="w-full px-4 py-3 rounded-xl border border-[#E5E7EB] bg-white text-[#1F2937] placeholder-[#9CA3AF] text-sm focus:outline-none focus:ring-2 focus:ring-[#6D28D9] focus:border-transparent shadow-sm"
          />
        </div>

        {/* Region filter pills */}
        <div className="mb-6">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {regions.map((region) => (
              <button
                key={region}
                className={`shrink-0 px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                  region === '전체'
                    ? 'bg-[#6D28D9] text-white'
                    : 'bg-white text-[#6B7280] border border-[#E5E7EB] hover:border-[#6D28D9] hover:text-[#6D28D9]'
                }`}
              >
                {region}
              </button>
            ))}
          </div>
        </div>

        {/* Result count */}
        <p className="text-sm font-semibold text-[#1F2937] mb-6">전체 {clubs.length}개 동호회</p>

        {/* Club grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {clubs.map((club) => (
            <div
              key={club.id}
              className="bg-white rounded-2xl border border-[#E5E7EB] shadow-sm hover:shadow-md transition-shadow overflow-hidden"
            >
              {/* Accent bar */}
              <div className={`h-2 bg-gradient-to-r ${club.gradient}`} />

              {/* Card body */}
              <div className="p-5">
                {/* Logo */}
                <div className="w-14 h-14 rounded-2xl bg-[#EDE9FE] flex items-center justify-center text-2xl">
                  {club.emoji}
                </div>

                {/* Club name */}
                <h2 className="font-bold text-[#1F2937] text-lg mt-3">{club.name}</h2>

                {/* Region + member count */}
                <p className="text-sm text-[#6B7280] mt-1">
                  📍 {club.region} · 👥 {club.members}명
                </p>

                {/* Activity badge */}
                <div className="mt-2">
                  {club.status === '활동중' ? (
                    <span className="inline-block text-xs font-semibold px-2.5 py-1 rounded-full bg-[#D1FAE5] text-[#065F46]">
                      활동중
                    </span>
                  ) : (
                    <span className="inline-block text-xs font-semibold px-2.5 py-1 rounded-full bg-[#EDE9FE] text-[#5B21B6]">
                      모집중
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="text-sm text-[#6B7280] mt-2 line-clamp-2">{club.desc}</p>

                {/* Footer link */}
                <div className="mt-4">
                  <Link
                    href={`/clubs/${club.id}`}
                    className="text-sm font-semibold text-[#6D28D9] hover:text-[#5B21B6] transition-colors"
                  >
                    자세히보기 →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA banner */}
        <div className="mt-12 bg-white rounded-2xl border border-[#E5E7EB] shadow-sm p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-bold text-[#1F2937]">내 동호회를 만들고 싶으신가요?</h3>
            <p className="text-sm text-[#6B7280] mt-1">직접 동호회를 개설하고 회원을 모집해보세요.</p>
          </div>
          <Link
            href="/host/clubs/create"
            className="shrink-0 px-6 py-3 bg-[#6D28D9] text-white font-bold rounded-xl hover:bg-[#5B21B6] transition-colors"
          >
            동호회 개설하기
          </Link>
        </div>
      </div>
    </div>
  )
}
