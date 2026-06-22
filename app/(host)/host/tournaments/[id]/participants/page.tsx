import Link from 'next/link'

const participants = [
  { no: 1, name: '김민준', event: '복식', partner: '박서연', level: '고급', dupr: 4.8, fee: 50000, status: '결제완료', date: '2025.06.10' },
  { no: 2, name: '이준호', event: '복식', partner: '최지수', level: '고급', dupr: 4.5, fee: 50000, status: '결제완료', date: '2025.06.11' },
  { no: 3, name: '정수현', event: '복식', partner: '강다은', level: '중급', dupr: 4.2, fee: 50000, status: '결제완료', date: '2025.06.11' },
  { no: 4, name: '윤성진', event: '단식', partner: '-', level: '중급', dupr: 3.9, fee: 50000, status: '결제완료', date: '2025.06.12' },
  { no: 5, name: '한태양', event: '복식', partner: '임소희', level: '고급', dupr: 3.6, fee: 50000, status: '결제완료', date: '2025.06.12' },
  { no: 6, name: '신동혁', event: '복식', partner: '문채원', level: '중급', dupr: 3.5, fee: 50000, status: '결제완료', date: '2025.06.13' },
  { no: 7, name: '류승현', event: '혼합복식', partner: '남지현', level: '초급', dupr: 3.2, fee: 50000, status: '결제완료', date: '2025.06.14' },
  { no: 8, name: '배성민', event: '복식', partner: '조유진', level: '중급', dupr: 3.8, fee: 50000, status: '결제대기', date: '2025.06.15' },
  { no: 9, name: '오세훈', event: '단식', partner: '-', level: '초급', dupr: 3.0, fee: 50000, status: '결제대기', date: '2025.06.15' },
  { no: 10, name: '강지원', event: '혼합복식', partner: '이민아', level: '중급', dupr: 3.4, fee: 50000, status: '취소', date: '2025.06.16' },
]

const stats = [
  { label: '전체 신청', value: '98명', color: 'text-[#1F2937]' },
  { label: '결제 완료', value: '90명', color: 'text-[#10B981]' },
  { label: '결제 대기', value: '5명', color: 'text-[#F59E0B]' },
  { label: '취소/환불', value: '3명', color: 'text-[#EF4444]' },
]

const filterPills = [
  { label: '전체', count: 98 },
  { label: '결제완료', count: 90 },
  { label: '결제대기', count: 5 },
  { label: '취소', count: 3 },
]

export default async function ParticipantsPage({
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
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-[#1F2937]">참가자 관리</h1>
              <p className="text-[#6B7280] mt-0.5 text-sm">2025 서울 오픈 피클볼 챔피언십</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        {/* Stats row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-white rounded-2xl border border-[#E5E7EB] shadow-sm p-5">
              <div className={`text-2xl font-black ${s.color}`}>{s.value}</div>
              <div className="text-xs text-[#6B7280] mt-1 font-semibold">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Filter bar */}
        <div className="bg-white rounded-2xl border border-[#E5E7EB] shadow-sm p-4">
          <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-3 flex-1">
              <input
                type="text"
                placeholder="선수명, 이메일 검색"
                className="px-4 py-2.5 rounded-xl border border-[#E5E7EB] text-[#1F2937] placeholder-[#9CA3AF] text-sm focus:outline-none focus:ring-2 focus:ring-[#6D28D9] focus:border-transparent sm:w-64"
              />
              <div className="flex gap-2 flex-wrap">
                {filterPills.map((pill, i) => (
                  <button
                    key={pill.label}
                    className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-colors flex items-center gap-1 ${
                      i === 0
                        ? 'bg-[#6D28D9] text-white'
                        : 'bg-[#F3F4F6] text-[#6B7280] hover:bg-[#EDE9FE] hover:text-[#6D28D9]'
                    }`}
                  >
                    {pill.label}
                    <span className={`text-xs ${i === 0 ? 'opacity-80' : ''}`}>({pill.count})</span>
                  </button>
                ))}
              </div>
            </div>
            <button className="px-4 py-2.5 text-sm font-semibold border border-[#E5E7EB] rounded-xl text-[#1F2937] hover:bg-[#F8F7FF] transition-colors shrink-0">
              엑셀 다운로드
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-2xl border border-[#E5E7EB] shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#F8F7FF] border-b border-[#E5E7EB]">
                  {['번호', '선수명', '종목', '파트너', '레벨', 'DUPR', '결제금액', '결제상태', '신청일', '관리'].map((col) => (
                    <th
                      key={col}
                      className="px-4 py-3 text-left text-xs font-bold text-[#6B7280] whitespace-nowrap"
                    >
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E5E7EB]">
                {participants.map((p) => {
                  const isCancelled = p.status === '취소'
                  const isPending = p.status === '결제대기'
                  return (
                    <tr
                      key={p.no}
                      className={`hover:bg-[#F8F7FF] transition-colors ${isPending ? 'bg-[#FFFBEB]' : ''} ${isCancelled ? 'opacity-60' : ''}`}
                    >
                      <td className="px-4 py-3 text-xs text-[#6B7280]">{p.no}</td>
                      <td className="px-4 py-3 font-semibold text-[#1F2937] whitespace-nowrap">
                        <span className={isCancelled ? 'line-through text-[#9CA3AF]' : ''}>
                          {p.name}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-[#6B7280] whitespace-nowrap">{p.event}</td>
                      <td className="px-4 py-3 text-[#6B7280] whitespace-nowrap">{p.partner}</td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-[#F3F4F6] text-[#6B7280]">
                          {p.level}
                        </span>
                      </td>
                      <td className="px-4 py-3 font-semibold text-[#6D28D9]">{p.dupr}</td>
                      <td className="px-4 py-3 text-[#1F2937] whitespace-nowrap">
                        {p.fee.toLocaleString()}원
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        <span
                          className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                            isCancelled
                              ? 'bg-[#F3F4F6] text-[#6B7280]'
                              : isPending
                              ? 'bg-[#FEF3C7] text-[#92400E]'
                              : 'bg-[#D1FAE5] text-[#065F46]'
                          }`}
                        >
                          {p.status}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-xs text-[#6B7280] whitespace-nowrap">{p.date}</td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        {isCancelled ? (
                          <span className="text-xs text-[#9CA3AF]">-</span>
                        ) : isPending ? (
                          <div className="flex gap-1.5">
                            <button className="px-2.5 py-1 text-xs font-semibold bg-[#D1FAE5] text-[#065F46] rounded-lg hover:bg-[#A7F3D0] transition-colors">
                              확인
                            </button>
                            <button className="px-2.5 py-1 text-xs font-semibold border border-[#EF4444] text-[#EF4444] rounded-lg hover:bg-[#FEE2E2] transition-colors">
                              취소처리
                            </button>
                          </div>
                        ) : (
                          <button className="px-2.5 py-1 text-xs font-semibold border border-[#E5E7EB] text-[#6B7280] rounded-lg hover:bg-[#F8F7FF] transition-colors">
                            상세보기
                          </button>
                        )}
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="px-6 py-4 border-t border-[#E5E7EB] flex items-center justify-between">
            <p className="text-xs text-[#6B7280]">총 98명 · 1-10 표시중</p>
            <div className="flex items-center gap-1">
              {[1, 2, 3, '...', 10].map((page, i) => (
                <button
                  key={i}
                  className={`w-8 h-8 rounded-lg text-xs font-semibold transition-colors ${
                    page === 1
                      ? 'bg-[#6D28D9] text-white'
                      : 'text-[#6B7280] hover:bg-[#F3F4F6]'
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
