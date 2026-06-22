import Link from 'next/link'

const pendingResults = [
  {
    id: 'p1',
    round: '8강 · 경기 3',
    matchup: '한태양/임소희 vs 배성민/조유진',
    submitted: '2025.06.28 14:35 · 한태양/임소희팀 제출',
    score: '11-8, 11-6 (한태양/임소희 팀 승)',
  },
  {
    id: 'p2',
    round: '8강 · 경기 4',
    matchup: '신동혁/문채원 vs 이준호/최지수',
    submitted: '2025.06.28 15:10 · 신동혁/문채원팀 제출',
    score: '11-9, 11-7 (신동혁/문채원 팀 승)',
  },
  {
    id: 'p3',
    round: '16강 · 경기 5',
    matchup: '류승현/남지현 vs 배성민/조유진',
    submitted: '2025.06.28 16:00 · 류승현/남지현팀 제출',
    score: '11-6, 11-8 (류승현/남지현 팀 승)',
  },
]

const allResults = [
  { round: '16강', match: '경기1', teamA: '김민준/박서연', teamB: '류승현/남지현', result: '11-4,11-6 (김민준팀)', status: '승인완료', date: '2025.06.28' },
  { round: '16강', match: '경기2', teamA: '정수현/강다은', teamB: '오세훈/강지원', result: '11-7,11-9 (정수현팀)', status: '승인완료', date: '2025.06.28' },
  { round: '8강', match: '경기1', teamA: '김민준/박서연', teamB: '이준호/최지수', result: '11-7,11-5 (김민준팀)', status: '승인완료', date: '2025.06.28' },
  { round: '8강', match: '경기2', teamA: '정수현/강다은', teamB: '윤성진/오하린', result: '11-9,9-11,11-8 (정수현팀)', status: '승인완료', date: '2025.06.28' },
  { round: '8강', match: '경기3', teamA: '한태양/임소희', teamB: '배성민/조유진', result: '11-8,11-6 (한태양팀)', status: '미승인', date: '2025.06.28' },
  { round: '8강', match: '경기4', teamA: '신동혁/문채원', teamB: '류승현/남지현', result: '결과 미입력', status: '예정', date: '-' },
  { round: '4강', match: '경기1', teamA: '김민준/박서연', teamB: 'TBD', result: '미진행', status: '예정', date: '-' },
  { round: '결승', match: '-', teamA: 'TBD', teamB: 'TBD', result: '미진행', status: '예정', date: '-' },
]

const statusStyles: Record<string, string> = {
  '승인완료': 'bg-[#D1FAE5] text-[#065F46]',
  '미승인': 'bg-[#FEF3C7] text-[#92400E]',
  '예정': 'bg-[#F3F4F6] text-[#6B7280]',
}

export default async function ResultsPage({
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
            <h1 className="text-2xl font-bold text-[#1F2937]">경기 결과 관리</h1>
            <p className="text-[#6B7280] mt-0.5 text-sm">2025 서울 오픈 피클볼 챔피언십</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white rounded-2xl border border-[#E5E7EB] shadow-sm p-5">
            <div className="text-2xl font-black text-[#1F2937]">15경기</div>
            <div className="text-xs text-[#6B7280] mt-1 font-semibold">전체 경기</div>
          </div>
          <div className="bg-white rounded-2xl border border-[#E5E7EB] shadow-sm p-5">
            <div className="text-2xl font-black text-[#10B981]">12경기</div>
            <div className="text-xs text-[#6B7280] mt-1 font-semibold">결과 확인 완료</div>
          </div>
          <div className="bg-white rounded-2xl border border-[#E5E7EB] shadow-sm p-5">
            <div className="text-2xl font-black text-[#F59E0B]">3경기</div>
            <div className="text-xs text-[#6B7280] mt-1 font-semibold">미승인 결과</div>
          </div>
        </div>

        {/* Pending results section */}
        <div className="bg-[#FFFBEB] border border-[#FDE68A] rounded-2xl p-6">
          <h2 className="font-bold text-[#92400E] mb-4 flex items-center gap-2">
            <span>⚠️</span> 승인 대기중인 경기 결과 {pendingResults.length}건
          </h2>
          <div className="space-y-3">
            {pendingResults.map((r) => (
              <div key={r.id} className="bg-white rounded-xl border border-[#FDE68A] p-4">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                  <div className="space-y-1">
                    <span className="inline-block text-xs font-bold px-2.5 py-0.5 rounded-full bg-[#FEF3C7] text-[#92400E]">
                      {r.round}
                    </span>
                    <p className="font-semibold text-[#1F2937] text-sm">{r.matchup}</p>
                    <p className="text-xs text-[#6B7280]">{r.submitted}</p>
                    <p className="text-sm font-bold text-[#6D28D9] mt-1">{r.score}</p>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <button className="px-4 py-2 bg-[#10B981] text-white font-bold rounded-lg hover:bg-[#059669] transition-colors text-sm">
                      승인
                    </button>
                    <button className="px-4 py-2 border border-[#EF4444] text-[#EF4444] font-semibold rounded-lg hover:bg-[#FEE2E2] transition-colors text-xs">
                      거절 및 재입력 요청
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All results table */}
        <div className="bg-white rounded-2xl border border-[#E5E7EB] shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-[#E5E7EB]">
            <h2 className="font-bold text-[#1F2937]">전체 경기 결과 목록</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#F8F7FF] border-b border-[#E5E7EB]">
                  {['라운드', '경기', '팀A', '팀B', '결과', '상태', '입력일', '관리'].map((col) => (
                    <th key={col} className="px-4 py-3 text-left text-xs font-bold text-[#6B7280] whitespace-nowrap">
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E5E7EB]">
                {allResults.map((r, i) => (
                  <tr key={i} className="hover:bg-[#F8F7FF] transition-colors">
                    <td className="px-4 py-3 text-xs font-semibold text-[#6B7280] whitespace-nowrap">{r.round}</td>
                    <td className="px-4 py-3 text-xs text-[#6B7280] whitespace-nowrap">{r.match}</td>
                    <td className="px-4 py-3 font-semibold text-[#1F2937] text-xs whitespace-nowrap">{r.teamA}</td>
                    <td className="px-4 py-3 text-[#1F2937] text-xs whitespace-nowrap">{r.teamB}</td>
                    <td className="px-4 py-3 text-xs text-[#6B7280] max-w-[160px]">{r.result}</td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${statusStyles[r.status]}`}>
                        {r.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-xs text-[#6B7280] whitespace-nowrap">{r.date}</td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      {r.status === '예정' && (
                        <button className="px-3 py-1.5 text-xs font-semibold border border-[#E5E7EB] rounded-lg text-[#6D28D9] hover:bg-[#EDE9FE] transition-colors">
                          수동 입력
                        </button>
                      )}
                      {r.status === '미승인' && (
                        <button className="px-3 py-1.5 text-xs font-semibold border border-[#EF4444] text-[#EF4444] rounded-lg hover:bg-[#FEE2E2] transition-colors">
                          취소
                        </button>
                      )}
                      {r.status === '승인완료' && (
                        <span className="text-xs text-[#9CA3AF]">-</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
