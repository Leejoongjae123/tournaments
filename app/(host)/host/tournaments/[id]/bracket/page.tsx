import Link from 'next/link'

const rounds = ['16강', '8강', '4강', '결승']

const matches = [
  {
    id: 1,
    teamA: '김민준/박서연',
    teamB: '류승현/남지현',
    court: '코트1',
    time: '10:00',
    status: '완료',
    score: '11-4, 11-6',
  },
  {
    id: 2,
    teamA: '정수현/강다은',
    teamB: '오세훈/강지원',
    court: '코트2',
    time: '10:00',
    status: '완료',
    score: '11-7, 11-9',
  },
  {
    id: 3,
    teamA: '한태양/임소희',
    teamB: '배성민/조유진',
    court: '코트3',
    time: '14:00',
    status: '진행중',
    score: null,
  },
  {
    id: 4,
    teamA: '신동혁/문채원',
    teamB: '이준호/최지수',
    court: '코트4',
    time: '14:00',
    status: '예정',
    score: null,
  },
]

const notifications = [
  { date: '2025.06.28 08:00', title: '8강 대진 배정 알림', count: 98 },
  { date: '2025.06.27 18:00', title: '대진표 공개 알림', count: 98 },
]

const statusStyles: Record<string, string> = {
  '완료': 'bg-[#D1FAE5] text-[#065F46]',
  '진행중': 'bg-[#EDE9FE] text-[#5B21B6]',
  '예정': 'bg-[#F3F4F6] text-[#6B7280]',
}

export default async function BracketManagePage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params

  return (
    <div className="min-h-screen bg-[#F8F7FF]">
      {/* Page header */}
      <div className="bg-white border-b border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link
            href="/host/tournaments"
            className="text-sm text-[#6B7280] hover:text-[#6D28D9] transition-colors font-semibold inline-flex items-center gap-1 mb-3"
          >
            ← 대회 관리
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-[#1F2937]">대진표 관리</h1>
            <p className="text-[#6B7280] mt-0.5 text-sm">2025 서울 오픈 피클볼 챔피언십</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        {/* Status banner */}
        <div className="bg-[#D1FAE5] border border-[#6EE7B7] rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="text-lg">✅</span>
            <p className="text-sm font-semibold text-[#065F46]">
              대진표가 공개되었습니다. 참가자들이 대진표를 확인할 수 있습니다.
            </p>
          </div>
          <button className="shrink-0 px-4 py-2 text-sm font-semibold border border-[#6EE7B7] text-[#065F46] rounded-lg hover:bg-[#A7F3D0] transition-colors bg-white">
            대진표 숨기기
          </button>
        </div>

        {/* Action buttons */}
        <div className="flex flex-wrap gap-3">
          <button className="px-5 py-2.5 bg-[#6D28D9] text-white font-bold rounded-xl hover:bg-[#5B21B6] transition-colors text-sm flex items-center gap-2">
            <span>⚡</span> 대진표 자동 생성
          </button>
          <button className="px-5 py-2.5 border border-[#E5E7EB] text-[#1F2937] font-semibold rounded-xl hover:bg-[#F8F7FF] transition-colors text-sm">
            수동 수정 모드
          </button>
          <button className="px-5 py-2.5 bg-[#10B981] text-white font-bold rounded-xl hover:bg-[#059669] transition-colors text-sm flex items-center gap-2">
            <span>💬</span> 참가자에게 알림톡 발송
          </button>
        </div>

        {/* Round selector */}
        <div className="flex gap-1 bg-white rounded-xl border border-[#E5E7EB] p-1 w-fit shadow-sm">
          {rounds.map((round, i) => (
            <button
              key={round}
              className={`px-5 py-2 rounded-lg text-sm font-semibold transition-colors ${
                i === 1
                  ? 'bg-[#6D28D9] text-white'
                  : 'text-[#6B7280] hover:text-[#1F2937]'
              }`}
            >
              {round}
            </button>
          ))}
        </div>

        {/* Bracket preview */}
        <div className="bg-white rounded-2xl border border-[#E5E7EB] shadow-sm p-6">
          <h2 className="font-bold text-[#1F2937] mb-5">8강 대진표</h2>
          <div className="space-y-3">
            {matches.map((match) => (
              <div
                key={match.id}
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 border border-[#E5E7EB] rounded-xl hover:bg-[#F8F7FF] transition-colors"
              >
                {/* Match info */}
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold text-[#6B7280] w-14 shrink-0">
                    Match {match.id}
                  </span>
                  <div className="flex items-center gap-2 text-sm font-semibold text-[#1F2937]">
                    <span>{match.teamA}</span>
                    <span className="text-[#9CA3AF] font-normal text-xs">vs</span>
                    <span>{match.teamB}</span>
                  </div>
                </div>

                {/* Court / Time / Score / Status */}
                <div className="flex flex-wrap items-center gap-3 shrink-0">
                  <span className="text-xs text-[#6B7280]">{match.court}</span>
                  <span className="text-xs text-[#6B7280]">{match.time}</span>
                  {match.score && (
                    <span className="text-xs font-semibold text-[#6D28D9]">{match.score}</span>
                  )}
                  <span
                    className={`text-xs font-semibold px-2.5 py-1 rounded-full ${statusStyles[match.status]}`}
                  >
                    {match.status}
                  </span>
                  <button className="px-3 py-1.5 text-xs font-semibold border border-[#E5E7EB] rounded-lg text-[#1F2937] hover:bg-[#EDE9FE] hover:border-[#6D28D9] hover:text-[#6D28D9] transition-colors">
                    수정
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Edit mode notice */}
          <p className="mt-4 text-xs text-[#9CA3AF] bg-[#F8F7FF] rounded-lg p-3">
            수정 모드에서 대진 순서 변경, 코트 배정 수정, 경기 시간 변경이 가능합니다.
          </p>
        </div>

        {/* Kakao notification section */}
        <div className="bg-white rounded-2xl border border-[#E5E7EB] shadow-sm p-6">
          <div className="flex items-center justify-between mb-5">
            <h2 className="font-bold text-[#1F2937]">알림톡 발송 내역</h2>
            <button className="px-4 py-2 bg-[#10B981] text-white font-semibold rounded-xl hover:bg-[#059669] transition-colors text-sm">
              새 알림톡 발송
            </button>
          </div>
          <div className="space-y-3">
            {notifications.map((n, i) => (
              <div
                key={i}
                className="flex items-center justify-between p-4 bg-[#F8F7FF] rounded-xl border border-[#E5E7EB]"
              >
                <div>
                  <p className="text-sm font-semibold text-[#1F2937]">{n.title}</p>
                  <p className="text-xs text-[#6B7280] mt-0.5">{n.date}</p>
                </div>
                <span className="text-xs font-semibold text-[#10B981] bg-[#D1FAE5] px-2.5 py-1 rounded-full">
                  {n.count}명 발송 완료
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
