'use client'

import { useState } from 'react'

const players = [
  { rank: 1, name: '김민준', region: '서울', level: '고급', wins: 28, losses: 3, dupr: 4.8, points: 2840, category: '복식' },
  { rank: 2, name: '박서연', region: '경기', level: '고급', wins: 25, losses: 5, dupr: 4.6, points: 2650, category: '복식' },
  { rank: 3, name: '이준호', region: '부산', level: '고급', wins: 24, losses: 6, dupr: 4.5, points: 2580, category: '단식' },
  { rank: 4, name: '정수현', region: '서울', level: '중급', wins: 22, losses: 8, dupr: 4.2, points: 2340, category: '혼합복식' },
  { rank: 5, name: '강다은', region: '인천', level: '중급', wins: 20, losses: 10, dupr: 4.0, points: 2200, category: '혼합복식' },
  { rank: 6, name: '윤성진', region: '대구', level: '중급', wins: 18, losses: 9, dupr: 3.9, points: 2050, category: '단식' },
  { rank: 7, name: '최지수', region: '서울', level: '중급', wins: 17, losses: 11, dupr: 3.8, points: 1980, category: '복식' },
  { rank: 8, name: '오하린', region: '부산', level: '초급', wins: 16, losses: 10, dupr: 3.7, points: 1920, category: '단식' },
  { rank: 9, name: '한태양', region: '서울', level: '고급', wins: 15, losses: 12, dupr: 3.6, points: 1850, category: '복식' },
  { rank: 10, name: '임소희', region: '경기', level: '중급', wins: 14, losses: 11, dupr: 3.5, points: 1800, category: '혼합복식' },
]

const tabs = ['전체', '단식', '복식', '혼합복식']
const regions = ['전체', '서울', '부산', '인천', '대구', '경기']

const rankColors = ['text-[#F59E0B]', 'text-[#9CA3AF]', 'text-[#B45309]']
const podiumBg = ['border-[#F59E0B] bg-[#FFFBEB]', 'border-[#9CA3AF] bg-[#F9FAFB]', 'border-[#B45309] bg-[#FEF3C7]']
const podiumLabel = ['🥇', '🥈', '🥉']

const levelColors: Record<string, string> = {
  '초급': 'bg-[#D1FAE5] text-[#065F46]',
  '중급': 'bg-[#DBEAFE] text-[#1E40AF]',
  '고급': 'bg-[#EDE9FE] text-[#5B21B6]',
  '오픈': 'bg-[#FEE2E2] text-[#991B1B]',
}

export default function RankingPage() {
  const [activeCategory, setActiveCategory] = useState<string>('전체')
  const [activeRegion, setActiveRegion] = useState<string>('전체')

  const filtered = players.filter((p) => {
    const categoryMatch = activeCategory === '전체' || p.category === activeCategory
    const regionMatch = activeRegion === '전체' || p.region === activeRegion
    return categoryMatch && regionMatch
  })

  const top3 = filtered.slice(0, 3)
  const rest = filtered.slice(3)

  return (
    <div className="min-h-screen bg-[#F8F7FF]">
      {/* Header */}
      <div className="bg-white border-b border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <div>
              <h1 className="text-2xl font-bold text-[#1F2937]">전국 랭킹</h1>
              <p className="text-[#6B7280] mt-1">DUPR 레이팅 기반 공식 랭킹</p>
            </div>
            <span className="text-sm text-[#6B7280]">기준일: 2026.06.22</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tab filter */}
        <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveCategory(tab)}
              className={`shrink-0 px-5 py-2 rounded-full text-sm font-semibold transition-colors ${
                tab === activeCategory
                  ? 'bg-[#6D28D9] text-white'
                  : 'bg-white text-[#6B7280] border border-[#E5E7EB] hover:border-[#6D28D9] hover:text-[#6D28D9]'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Region filter */}
        <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
          <span className="shrink-0 text-sm text-[#6B7280] flex items-center mr-1">지역:</span>
          {regions.map((r) => (
            <button
              key={r}
              onClick={() => setActiveRegion(r)}
              className={`shrink-0 px-3 py-1.5 rounded-full text-xs font-semibold transition-colors ${
                r === activeRegion
                  ? 'bg-[#EDE9FE] text-[#6D28D9]'
                  : 'bg-white text-[#6B7280] border border-[#E5E7EB] hover:border-[#6D28D9] hover:text-[#6D28D9]'
              }`}
            >
              {r}
            </button>
          ))}
        </div>

        {/* Count */}
        <div className="mb-6 text-sm text-[#6B7280]">
          총 <span className="font-semibold text-[#1F2937]">{filtered.length}명</span>
        </div>

        {filtered.length === 0 ? (
          <div className="bg-white rounded-2xl border border-[#E5E7EB] shadow-sm p-12 text-center text-[#6B7280]">
            해당 조건의 선수가 없습니다
          </div>
        ) : (
          <>
            {/* Top 3 Podium */}
            {top3.length > 0 && (
              <div className={`grid gap-4 mb-8 ${top3.length === 1 ? 'grid-cols-1 max-w-xs mx-auto' : top3.length === 2 ? 'grid-cols-2' : 'grid-cols-3'}`}>
                {top3.map((p, i) => (
                  <div
                    key={p.rank}
                    className={`bg-white rounded-2xl border-2 p-4 text-center shadow-sm ${podiumBg[i]}`}
                  >
                    <div className="text-3xl mb-2">{podiumLabel[i]}</div>
                    <div className="w-12 h-12 rounded-full bg-[#EDE9FE] flex items-center justify-center mx-auto mb-2 text-lg font-bold text-[#6D28D9]">
                      {p.name[0]}
                    </div>
                    <div className="font-bold text-[#1F2937] text-sm">{p.name}</div>
                    <div className="text-xs text-[#6B7280] mt-0.5">{p.region}</div>
                    <div className={`text-2xl font-black mt-2 ${rankColors[i]}`}>
                      {p.points.toLocaleString()}P
                    </div>
                    <div className="text-xs text-[#6B7280] mt-1">DUPR {p.dupr}</div>
                  </div>
                ))}
              </div>
            )}

            {/* Ranking table */}
            {rest.length > 0 && (
              <div className="bg-white rounded-2xl shadow-sm border border-[#E5E7EB] overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-[#F8F7FF] border-b border-[#E5E7EB]">
                        <th className="text-left px-4 py-3 text-xs font-semibold text-[#6B7280] w-12">순위</th>
                        <th className="text-left px-4 py-3 text-xs font-semibold text-[#6B7280]">선수명</th>
                        <th className="text-left px-4 py-3 text-xs font-semibold text-[#6B7280]">지역</th>
                        <th className="text-left px-4 py-3 text-xs font-semibold text-[#6B7280]">레벨</th>
                        <th className="text-right px-4 py-3 text-xs font-semibold text-[#6B7280]">승/패</th>
                        <th className="text-right px-4 py-3 text-xs font-semibold text-[#6B7280]">DUPR</th>
                        <th className="text-right px-4 py-3 text-xs font-semibold text-[#6B7280]">포인트</th>
                      </tr>
                    </thead>
                    <tbody>
                      {rest.map((p, i) => (
                        <tr
                          key={p.rank}
                          className={`border-b border-[#E5E7EB] last:border-0 hover:bg-[#F8F7FF] transition-colors ${
                            i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAFA]'
                          }`}
                        >
                          <td className="px-4 py-3">
                            <span className="font-bold text-[#1F2937]">{p.rank}</span>
                          </td>
                          <td className="px-4 py-3">
                            <div className="flex items-center gap-2">
                              <div className="w-8 h-8 rounded-full bg-[#EDE9FE] flex items-center justify-center text-xs font-bold text-[#6D28D9] shrink-0">
                                {p.name[0]}
                              </div>
                              <span className="font-semibold text-[#1F2937]">{p.name}</span>
                            </div>
                          </td>
                          <td className="px-4 py-3 text-[#6B7280]">{p.region}</td>
                          <td className="px-4 py-3">
                            <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${levelColors[p.level]}`}>
                              {p.level}
                            </span>
                          </td>
                          <td className="px-4 py-3 text-right">
                            <span className="text-[#10B981] font-semibold">{p.wins}승</span>
                            <span className="text-[#6B7280]"> / </span>
                            <span className="text-[#EF4444] font-semibold">{p.losses}패</span>
                          </td>
                          <td className="px-4 py-3 text-right font-semibold text-[#6D28D9]">{p.dupr}</td>
                          <td className="px-4 py-3 text-right font-bold text-[#1F2937]">{p.points.toLocaleString()}P</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </>
        )}

        {/* Rating info block */}
        <div className="mt-6 bg-white rounded-xl border border-[#E5E7EB] p-4 flex items-start gap-3">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-[#6D28D9] shrink-0 mt-0.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
          </svg>
          <div>
            <p className="text-sm font-semibold text-[#1F2937] mb-0.5">랭킹 기준 안내</p>
            <p className="text-xs text-[#6B7280]">DUPR 레이팅과 대회 성적을 종합한 포인트로 산정됩니다.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
