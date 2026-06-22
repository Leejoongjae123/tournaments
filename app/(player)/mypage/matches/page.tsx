import Link from 'next/link'

const matches = [
  {
    id: '1',
    date: '2025.06.28',
    time: '10:00',
    round: '16강',
    opponent: '류승현/남지현 팀',
    court: '코트 1번',
    status: '완료',
    score: '11-4, 11-6',
    win: true,
  },
  {
    id: '2',
    date: '2025.06.28',
    time: '14:00',
    round: '8강',
    opponent: '정수현/강다은 팀',
    court: '코트 3번',
    status: '예정',
    score: null,
    win: null,
  },
  {
    id: '3',
    date: '2025.06.29',
    time: '(예정)',
    round: '4강',
    opponent: 'TBD',
    court: '코트 TBD',
    status: '예정',
    score: null,
    win: null,
  },
  {
    id: '4',
    date: '2025.06.29',
    time: '(예정)',
    round: '결승 또는 3위전',
    opponent: 'TBD',
    court: '코트 TBD',
    status: '예정',
    score: null,
    win: null,
  },
]

const dotColor: Record<string, string> = {
  '완료': 'bg-[#10B981]',
  '예정': 'bg-[#D1D5DB]',
  '진행중': 'bg-[#6D28D9]',
}

const statusBadge: Record<string, string> = {
  '완료': 'bg-[#D1FAE5] text-[#065F46]',
  '예정': 'bg-[#F3F4F6] text-[#6B7280]',
  '진행중': 'bg-[#EDE9FE] text-[#5B21B6]',
}

export default function MatchesPage() {
  return (
    <div className="min-h-screen bg-[#F8F7FF]">
      {/* Top breadcrumb/header */}
      <div className="bg-white border-b border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center gap-4">
          <Link href="/mypage" className="text-sm text-[#6B7280] hover:text-[#1F2937] transition-colors">
            ← 마이페이지
          </Link>
          <h1 className="text-2xl font-bold text-[#1F2937]">내 경기 일정</h1>
        </div>
      </div>

      {/* Content area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">

        {/* Tournament selector */}
        <div className="bg-white rounded-2xl border border-[#E5E7EB] shadow-sm px-6 py-4 flex items-center justify-between">
          <div>
            <div className="text-xs text-[#6B7280] mb-0.5">대회 선택</div>
            <div className="font-semibold text-[#1F2937]">2025 서울 오픈 피클볼 챔피언십</div>
          </div>
          <Link href="#" className="text-sm font-semibold text-[#6D28D9] hover:text-[#5B21B6] transition-colors shrink-0 ml-4">
            변경
          </Link>
        </div>

        {/* 다음 경기 highlight card */}
        <div className="bg-[#F5F3FF] rounded-2xl border border-[#DDD6FE] border-l-4 border-l-[#6D28D9] shadow-sm px-6 py-5">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-[#6D28D9] text-white">다음 경기</span>
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#EDE9FE] text-[#5B21B6]">8강</span>
          </div>
          <div className="space-y-2 text-sm text-[#1F2937] mb-4">
            <div className="flex items-center gap-2">
              <span className="text-[#6D28D9]">📅</span>
              <span className="font-semibold">2025.06.28 (토) 14:00</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#6D28D9]">🏟️</span>
              <span>선릉 실내체육관 3번 코트</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#6D28D9]">🆚</span>
              <span>
                <span className="font-semibold">정수현/강다은 팀</span>
                <span className="ml-1 text-[#6B7280] text-xs">(DUPR 4.2)</span>
              </span>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <button className="px-4 py-2 rounded-xl border border-[#6D28D9] text-[#6D28D9] text-sm font-semibold hover:bg-[#EDE9FE] transition-colors">
              경기 결과 입력
            </button>
            <Link href="#" className="text-sm text-[#6B7280] hover:text-[#1F2937] transition-colors">
              카카오 알림톡 설정
            </Link>
          </div>
        </div>

        {/* 전체 경기 일정 — timeline */}
        <div className="bg-white rounded-2xl border border-[#E5E7EB] shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-[#E5E7EB]">
            <h2 className="font-bold text-[#1F2937]">전체 경기 일정</h2>
          </div>
          <div className="px-6 py-5">
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-[7px] top-3 bottom-3 w-0.5 bg-[#E5E7EB]" />

              <div className="space-y-6">
                {matches.map((match) => (
                  <div key={match.id} className="flex gap-5 relative">
                    {/* Dot */}
                    <div className={`w-4 h-4 rounded-full shrink-0 mt-1 border-2 border-white shadow-sm z-10 ${dotColor[match.status]}`} />

                    {/* Match detail */}
                    <div className="flex-1 min-w-0 pb-1">
                      <div className="flex flex-wrap items-center gap-2 mb-1.5">
                        <span className="text-xs font-semibold text-[#6B7280]">
                          {match.date} {match.time}
                        </span>
                        <span className="text-xs font-bold text-[#6D28D9] bg-[#EDE9FE] px-2 py-0.5 rounded-full">
                          {match.round}
                        </span>
                        <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${statusBadge[match.status]}`}>
                          {match.status}
                        </span>
                      </div>

                      <div className="text-sm font-semibold text-[#1F2937] mb-0.5">
                        vs {match.opponent}
                      </div>
                      <div className="text-xs text-[#6B7280] mb-1.5">{match.court}</div>

                      {/* Completed match score */}
                      {match.status === '완료' && match.score !== null && (
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-bold text-[#10B981]">{match.score}</span>
                          {match.win && (
                            <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-[#D1FAE5] text-[#065F46]">
                              승
                            </span>
                          )}
                          {match.win === false && (
                            <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-[#FEE2E2] text-[#991B1B]">
                              패
                            </span>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
