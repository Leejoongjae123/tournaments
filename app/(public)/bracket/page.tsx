'use client'

import { useState } from 'react'

type MatchStatus = '완료' | '진행중' | '예정'

interface Match {
  id: number
  teamA: string
  teamB: string
  scoreA?: string
  scoreB?: string
  winner?: 'A' | 'B'
  status: MatchStatus
}

const quarterFinals: Match[] = [
  {
    id: 1,
    teamA: '김민준/박서연',
    teamB: '이준호/최지수',
    scoreA: '11-7, 11-5',
    scoreB: '7-11, 5-11',
    winner: 'A',
    status: '완료',
  },
  {
    id: 2,
    teamA: '정수현/강다은',
    teamB: '윤성진/오하린',
    scoreA: '11-9, 9-11, 11-8',
    scoreB: '9-11, 11-9, 8-11',
    winner: 'A',
    status: '완료',
  },
  {
    id: 3,
    teamA: '한태양/임소희',
    teamB: '배성민/조유진',
    status: '진행중',
  },
  {
    id: 4,
    teamA: '신동혁/문채원',
    teamB: '류승현/남지현',
    status: '예정',
  },
]

const semiFinals: Match[] = [
  {
    id: 5,
    teamA: '김민준/박서연',
    teamB: '정수현/강다은',
    status: '예정',
  },
  {
    id: 6,
    teamA: 'TBD',
    teamB: 'TBD',
    status: '예정',
  },
]

const finals: Match[] = [
  {
    id: 7,
    teamA: 'TBD',
    teamB: 'TBD',
    status: '예정',
  },
]

const rounds = ['16강', '8강', '4강', '결승']

const statusStyles: Record<MatchStatus, { badge: string; label: string }> = {
  '완료': { badge: 'bg-[#D1FAE5] text-[#065F46]', label: '완료' },
  '진행중': { badge: 'bg-[#EDE9FE] text-[#5B21B6]', label: '진행중' },
  '예정': { badge: 'bg-[#F3F4F6] text-[#6B7280]', label: '예정' },
}

function MatchCard({ match }: { match: Match }) {
  const s = statusStyles[match.status]
  return (
    <div className={`bg-white rounded-xl border overflow-hidden shadow-sm w-56 ${
      match.status === '진행중' ? 'border-[#6D28D9] ring-1 ring-[#6D28D9]/30' : 'border-[#E5E7EB]'
    }`}>
      <div className="flex items-center justify-between px-3 py-1.5 bg-[#F8F7FF] border-b border-[#E5E7EB]">
        <span className="text-xs text-[#6B7280]">경기 {match.id}</span>
        <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${s.badge}`}>{s.label}</span>
      </div>
      {/* Team A */}
      <div className={`flex items-center justify-between px-3 py-2.5 ${
        match.winner === 'A' ? 'bg-[#EDE9FE]' : ''
      }`}>
        <span className={`text-sm font-medium truncate ${
          match.winner === 'A' ? 'text-[#6D28D9] font-bold' : 'text-[#1F2937]'
        }`}>
          {match.teamA}
        </span>
        {match.scoreA && (
          <span className={`text-xs ml-2 shrink-0 ${match.winner === 'A' ? 'text-[#6D28D9] font-bold' : 'text-[#6B7280]'}`}>
            {match.status === '완료' ? '승' : ''}
          </span>
        )}
      </div>
      {/* Divider */}
      <div className="h-px bg-[#E5E7EB] mx-3" />
      {/* Team B */}
      <div className={`flex items-center justify-between px-3 py-2.5 ${
        match.winner === 'B' ? 'bg-[#EDE9FE]' : ''
      }`}>
        <span className={`text-sm font-medium truncate ${
          match.winner === 'B' ? 'text-[#6D28D9] font-bold' : 'text-[#1F2937]'
        }`}>
          {match.teamB}
        </span>
        {match.scoreB && (
          <span className={`text-xs ml-2 shrink-0 ${match.winner === 'B' ? 'text-[#6D28D9] font-bold' : 'text-[#6B7280]'}`}>
            {match.status === '완료' ? '승' : ''}
          </span>
        )}
      </div>
      {/* Score detail */}
      {(match.scoreA || match.scoreB) && match.status === '완료' && (
        <div className="px-3 py-2 bg-[#F8F7FF] border-t border-[#E5E7EB]">
          <div className="text-xs text-[#6B7280]">
            <span className="text-[#6D28D9] font-semibold">{match.teamA.split('/')[0]}</span>팀: {match.scoreA}
          </div>
        </div>
      )}
    </div>
  )
}

export default function BracketPage() {
  const [activeRound, setActiveRound] = useState('8강')

  const roundMatches: Record<string, Match[]> = {
    '16강': [],
    '8강': quarterFinals,
    '4강': semiFinals,
    '결승': finals,
  }

  const matches = roundMatches[activeRound]

  return (
    <div className="min-h-screen bg-[#F8F7FF]">
      {/* Header */}
      <div className="bg-white border-b border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-2xl font-bold text-[#1F2937]">2025 서울 오픈 - 대진표</h1>
          <p className="text-[#6B7280] mt-1">2025.06.28 - 06.29 · 선릉 실내체육관, 서울</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Round selector */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
          {rounds.map((round) => (
            <button
              key={round}
              onClick={() => setActiveRound(round)}
              className={`shrink-0 px-5 py-2.5 rounded-full font-semibold text-sm transition-colors ${
                activeRound === round
                  ? 'bg-[#6D28D9] text-white shadow-sm'
                  : 'bg-white text-[#6B7280] border border-[#E5E7EB] hover:border-[#6D28D9] hover:text-[#6D28D9]'
              }`}
            >
              {round}
            </button>
          ))}
        </div>

        {/* Bracket area */}
        {activeRound === '16강' ? (
          <div className="bg-white rounded-2xl border border-[#E5E7EB] p-12 text-center">
            <div className="text-4xl mb-3">🏓</div>
            <p className="text-[#6B7280]">16강 대진표는 예선 종료 후 공개됩니다.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            {/* Full bracket view for 8강 */}
            {activeRound === '8강' && (
              <div>
                {/* Column headers */}
                <div className="flex mb-4">
                  <div className="w-56">
                    <h3 className="text-sm font-bold text-[#6B7280] uppercase tracking-wide">8강</h3>
                  </div>
                  <div className="w-16" />
                  <div className="w-56">
                    <h3 className="text-sm font-bold text-[#6B7280] uppercase tracking-wide">4강</h3>
                  </div>
                </div>

                {/* Bracket pairs */}
                <div className="flex flex-col gap-8">
                  {([
                    [quarterFinals[0], quarterFinals[1], semiFinals[0]],
                    [quarterFinals[2], quarterFinals[3], semiFinals[1]],
                  ] as [Match, Match, Match][]).map(([qf1, qf2, sf], i) => (
                    <div key={i} className="flex items-stretch">
                      {/* Two QF cards */}
                      <div className="flex flex-col gap-4 shrink-0">
                        <MatchCard match={qf1} />
                        <MatchCard match={qf2} />
                      </div>

                      {/* Bracket connector */}
                      <div className="flex shrink-0 w-16">
                        <div className="flex flex-col w-8">
                          <div className="flex-1 border-r-2 border-t-2 border-[#D1D5DB] rounded-tr-md" />
                          <div className="flex-1 border-r-2 border-b-2 border-[#D1D5DB] rounded-br-md" />
                        </div>
                        <div className="self-center w-8 border-t-2 border-[#D1D5DB]" />
                      </div>

                      {/* SF card centered */}
                      <div className="self-center shrink-0">
                        <MatchCard match={sf} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Simple list view for 4강/결승 */}
            {(activeRound === '4강' || activeRound === '결승') && (
              <div>
                <h3 className="text-sm font-bold text-[#6B7280] mb-6 uppercase tracking-wide">{activeRound}</h3>
                <div className="flex flex-col gap-4 max-w-sm">
                  {matches.map((match) => (
                    <MatchCard key={match.id} match={match} />
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Legend */}
        <div className="mt-8 flex items-center gap-6 text-xs text-[#6B7280]">
          <span className="font-semibold text-[#1F2937]">범례:</span>
          {Object.entries(statusStyles).map(([key, val]) => (
            <div key={key} className="flex items-center gap-1.5">
              <span className={`px-2 py-0.5 rounded-full font-semibold ${val.badge}`}>{val.label}</span>
            </div>
          ))}
          <div className="flex items-center gap-1.5">
            <div className="w-4 h-3 bg-[#EDE9FE] rounded" />
            <span>승자</span>
          </div>
        </div>
      </div>
    </div>
  )
}
