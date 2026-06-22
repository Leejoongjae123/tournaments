import Link from 'next/link'

export interface TournamentCardProps {
  id: string
  title: string
  date: string
  location: string
  category: string
  level: string
  maxParticipants: number
  currentParticipants: number
  fee: number
  status: '접수중' | '마감임박' | '마감' | '진행중' | '종료'
  imageGradient?: string
}

const statusBorderColors: Record<string, string> = {
  '접수중': 'border-l-[#10B981]',
  '마감임박': 'border-l-[#F59E0B]',
  '마감': 'border-l-[#EF4444]',
  '진행중': 'border-l-[#6D28D9]',
  '종료': 'border-l-[#9CA3AF]',
}

const statusBadgeColors: Record<string, string> = {
  '접수중': 'bg-[#D1FAE5] text-[#065F46]',
  '마감임박': 'bg-[#FEF3C7] text-[#92400E]',
  '마감': 'bg-[#FEE2E2] text-[#991B1B]',
  '진행중': 'bg-[#EDE9FE] text-[#5B21B6]',
  '종료': 'bg-[#F3F4F6] text-[#6B7280]',
}

const categoryBadgeColors: Record<string, string> = {
  '단식': 'bg-[#EDE9FE] text-[#5B21B6]',
  '복식': 'bg-[#D1FAE5] text-[#065F46]',
  '혼합복식': 'bg-[#FEF3C7] text-[#92400E]',
}

export default function TournamentCard({
  id,
  title,
  date,
  location,
  category,
  level,
  maxParticipants,
  currentParticipants,
  fee,
  status,
}: TournamentCardProps) {
  const progressPct = Math.round((currentParticipants / maxParticipants) * 100)

  return (
    <div
      className={`bg-white rounded-xl border border-[#E5E7EB] border-l-4 ${statusBorderColors[status]} hover:shadow-md transition-shadow overflow-hidden`}
    >
      <div className="p-4 flex flex-col gap-2.5">
        {/* Top row: category badge + title + status badge */}
        <div className="flex items-start justify-between gap-2">
          <div className="flex items-start gap-2 flex-1 min-w-0">
            <span
              className={`shrink-0 text-[11px] font-semibold px-2 py-0.5 rounded-full ${categoryBadgeColors[category] ?? 'bg-[#F3F4F6] text-[#6B7280]'}`}
            >
              {category}
            </span>
            <h3 className="font-bold text-[#1F2937] text-sm leading-snug line-clamp-2">{title}</h3>
          </div>
          <span
            className={`shrink-0 text-[11px] font-semibold px-2 py-0.5 rounded-full ${statusBadgeColors[status]}`}
          >
            {status}
          </span>
        </div>

        {/* Second row: date + location */}
        <div className="flex items-center gap-3 text-xs text-[#6B7280]">
          <span className="flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3.5 h-3.5 shrink-0">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
            </svg>
            {date}
          </span>
          <span className="text-[#D1D5DB]">|</span>
          <span className="flex items-center gap-1 truncate">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3.5 h-3.5 shrink-0">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
            </svg>
            <span className="truncate">{location}</span>
          </span>
        </div>

        {/* Third row: progress bar + participant count + level badge */}
        <div className="flex items-center gap-2">
          <div className="flex-1 h-1.5 bg-[#E5E7EB] rounded-full overflow-hidden">
            <div
              className="h-full bg-[#6D28D9] rounded-full transition-all"
              style={{ width: `${progressPct}%` }}
            />
          </div>
          <span className="text-xs text-[#6B7280] shrink-0">{progressPct}%</span>
          <span className="text-xs text-[#6B7280] shrink-0">{currentParticipants}/{maxParticipants}명</span>
          <span className="text-[11px] font-semibold bg-[#F3F4F6] text-[#6B7280] px-2 py-0.5 rounded-full shrink-0">
            {level}
          </span>
        </div>

        {/* Bottom row: fee + link */}
        <div className="flex items-center justify-between pt-0.5">
          <span className="text-sm font-black text-[#1F2937]">
            {fee.toLocaleString()}원
          </span>
          <Link
            href={`/tournaments/${id}`}
            className="text-xs font-semibold text-[#6D28D9] hover:text-[#5B21B6] transition-colors"
          >
            자세히보기 →
          </Link>
        </div>
      </div>
    </div>
  )
}
