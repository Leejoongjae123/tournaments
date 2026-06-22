import Link from 'next/link'

const hostedTournaments = [
  {
    id: '1',
    title: '2025 서울 오픈 피클볼 챔피언십',
    status: '진행중',
    participants: 98,
    maxParticipants: 120,
  },
  {
    id: '2',
    title: '봄 피클볼 챌린지',
    status: '접수중',
    participants: 24,
    maxParticipants: 40,
  },
]

const pendingResults = [
  {
    id: 'r1',
    match: '한태양/임소희 vs 배성민/조유진',
    score: '11-8, 11-6',
    winner: '한태양/임소희팀 신청',
    date: '2025.06.28 14:00',
  },
  {
    id: 'r2',
    match: '김민준 vs 정수현',
    score: '11-7, 9-11, 11-5',
    winner: '김민준 신청',
    date: '2025.06.28 15:00',
  },
  {
    id: 'r3',
    match: '박서연/강다은 vs 최지수/오하린',
    score: '11-4, 11-9',
    winner: '박서연팀 신청',
    date: '2025.06.28 16:00',
  },
]

const statusStyles: Record<string, string> = {
  '진행중': 'bg-[#EDE9FE] text-[#5B21B6]',
  '접수중': 'bg-[#D1FAE5] text-[#065F46]',
  '마감': 'bg-[#FEE2E2] text-[#991B1B]',
}

export default function HostDashboard() {
  return (
    <div className="min-h-screen bg-[#F8F7FF]">
      {/* Page header */}
      <div className="bg-white border-b border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-[#1F2937]">호스트 대시보드</h1>
              <p className="text-[#6B7280] mt-1">운영중인 대회를 관리하세요</p>
            </div>
            <Link
              href="/host/tournaments/create"
              className="px-5 py-2.5 bg-[#6D28D9] text-white font-bold rounded-xl hover:bg-[#5B21B6] transition-colors text-sm flex items-center gap-2"
            >
              <span>+</span> 새 대회 개설
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Stats row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { label: '운영중인 대회', value: '2개', color: 'text-[#6D28D9]' },
            { label: '총 참가자', value: '130명', color: 'text-[#10B981]' },
            { label: '이번 달 결제', value: '5,800,000원', color: 'text-[#F59E0B]' },
            { label: '미승인 결과', value: '3건', color: 'text-[#EF4444]' },
          ].map((stat) => (
            <div key={stat.label} className="bg-white rounded-2xl border border-[#E5E7EB] p-5 shadow-sm">
              <div className={`text-2xl font-black ${stat.color}`}>{stat.value}</div>
              <div className="text-xs text-[#6B7280] mt-1 font-semibold">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Hosted tournaments */}
        <div className="bg-white rounded-2xl border border-[#E5E7EB] shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-[#E5E7EB]">
            <h2 className="font-bold text-[#1F2937]">운영중인 대회</h2>
          </div>
          <div className="divide-y divide-[#E5E7EB]">
            {hostedTournaments.map((t) => (
              <div key={t.id} className="px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-[#F8F7FF] transition-colors">
                <div className="flex items-center gap-3">
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full shrink-0 ${statusStyles[t.status]}`}>
                    {t.status}
                  </span>
                  <div>
                    <div className="font-semibold text-[#1F2937] text-sm">{t.title}</div>
                    <div className="text-xs text-[#6B7280] mt-0.5">{t.participants}/{t.maxParticipants}명 참가</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <button className="px-3 py-1.5 text-xs font-semibold border border-[#E5E7EB] rounded-lg text-[#1F2937] hover:bg-[#F8F7FF] transition-colors">
                    참가자 관리
                  </button>
                  <button className="px-3 py-1.5 text-xs font-semibold border border-[#E5E7EB] rounded-lg text-[#1F2937] hover:bg-[#F8F7FF] transition-colors">
                    대진표
                  </button>
                  <button className="px-3 py-1.5 text-xs font-semibold bg-[#EDE9FE] text-[#6D28D9] rounded-lg hover:bg-[#DDD6FE] transition-colors">
                    결과 입력
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pending results */}
        <div className="bg-white rounded-2xl border border-[#E5E7EB] shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-[#E5E7EB] flex items-center justify-between">
            <h2 className="font-bold text-[#1F2937]">미승인 경기 결과</h2>
            <span className="text-xs font-semibold bg-[#FEE2E2] text-[#991B1B] px-2.5 py-1 rounded-full">
              {pendingResults.length}건 대기중
            </span>
          </div>
          <div className="divide-y divide-[#E5E7EB]">
            {pendingResults.map((r) => (
              <div key={r.id} className="px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="font-semibold text-[#1F2937] text-sm">{r.match}</div>
                  <div className="text-xs text-[#6B7280] mt-0.5">{r.date} · {r.winner}</div>
                  <div className="text-sm font-black text-[#6D28D9] mt-1">{r.score}</div>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <button className="px-4 py-2 text-xs font-bold bg-[#D1FAE5] text-[#065F46] rounded-lg hover:bg-[#A7F3D0] transition-colors">
                    승인
                  </button>
                  <button className="px-4 py-2 text-xs font-bold bg-[#FEE2E2] text-[#991B1B] rounded-lg hover:bg-[#FECACA] transition-colors">
                    거절
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
