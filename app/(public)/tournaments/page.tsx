'use client'

import { useState } from 'react'
import TournamentCard, { TournamentCardProps } from '@/app/components/TournamentCard'

const tournaments: TournamentCardProps[] = [
  {
    id: '1',
    title: '2025 서울 오픈 피클볼 챔피언십',
    date: '2025.06.28 - 06.29',
    location: '선릉 실내체육관, 서울',
    category: '복식',
    level: '오픈',
    maxParticipants: 120,
    currentParticipants: 98,
    fee: 50000,
    status: '마감임박',
  },
  {
    id: '2',
    title: '부산 비치 피클볼 토너먼트',
    date: '2025.07.05 - 07.06',
    location: '해운대 스포츠센터, 부산',
    category: '혼합복식',
    level: '중급',
    maxParticipants: 64,
    currentParticipants: 32,
    fee: 40000,
    status: '접수중',
  },
  {
    id: '3',
    title: '강남 기업인 피클볼 리그',
    date: '2025.07.12',
    location: '강남 스포츠센터, 서울',
    category: '단식',
    level: '초급',
    maxParticipants: 32,
    currentParticipants: 12,
    fee: 30000,
    status: '접수중',
  },
  {
    id: '4',
    title: '전국 피클볼 마스터즈',
    date: '2025.08.02 - 08.03',
    location: '올림픽공원 체육관, 서울',
    category: '복식',
    level: '고급',
    maxParticipants: 256,
    currentParticipants: 256,
    fee: 80000,
    status: '마감',
  },
  {
    id: '5',
    title: '인천 오픈 피클볼 챌린지',
    date: '2025.07.19 - 07.20',
    location: '인천 스포츠센터, 인천',
    category: '단식',
    level: '중급',
    maxParticipants: 48,
    currentParticipants: 28,
    fee: 35000,
    status: '접수중',
  },
  {
    id: '6',
    title: '대구 피클볼 페스티벌',
    date: '2025.07.26',
    location: '대구 실내체육관, 대구',
    category: '혼합복식',
    level: '초급',
    maxParticipants: 40,
    currentParticipants: 5,
    fee: 25000,
    status: '접수중',
  },
]

const categories = ['전체', '단식', '복식', '혼합복식', '접수중']
const levels = ['전체', '초급', '중급', '고급', '오픈']

export default function TournamentsPage() {
  const [activeCategory, setActiveCategory] = useState('전체')
  const [activeLevel, setActiveLevel] = useState('전체')

  const filtered = tournaments.filter((t) => {
    const categoryMatch =
      activeCategory === '전체'
        ? true
        : activeCategory === '접수중'
        ? t.status === '접수중'
        : t.category === activeCategory
    const levelMatch = activeLevel === '전체' ? true : t.level === activeLevel
    return categoryMatch && levelMatch
  })

  return (
    <div className="min-h-screen bg-[#F8F7FF]">
      {/* Page header */}
      <div className="bg-white border-b border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-2xl font-bold text-[#1F2937]">대회 찾기</h1>
          <p className="text-[#6B7280] mt-1">전국의 피클볼 대회를 찾아보세요</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search bar */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="대회명, 지역으로 검색..."
            className="w-full px-4 py-3 rounded-xl border border-[#E5E7EB] bg-white text-[#1F2937] placeholder-[#9CA3AF] text-sm focus:outline-none focus:ring-2 focus:ring-[#6D28D9] focus:border-transparent shadow-sm"
          />
        </div>

        {/* Category filter */}
        <div className="mb-4">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`shrink-0 px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                  activeCategory === cat
                    ? 'bg-[#6D28D9] text-white'
                    : 'bg-white text-[#6B7280] border border-[#E5E7EB] hover:border-[#6D28D9] hover:text-[#6D28D9]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Level filter */}
        <div className="mb-6">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            <span className="shrink-0 text-sm text-[#6B7280] flex items-center mr-1">레벨:</span>
            {levels.map((lv) => (
              <button
                key={lv}
                onClick={() => setActiveLevel(lv)}
                className={`shrink-0 px-3 py-1.5 rounded-full text-xs font-semibold transition-colors ${
                  activeLevel === lv
                    ? 'bg-[#EDE9FE] text-[#6D28D9]'
                    : 'bg-white text-[#6B7280] border border-[#E5E7EB] hover:border-[#6D28D9] hover:text-[#6D28D9]'
                }`}
              >
                {lv}
              </button>
            ))}
          </div>
        </div>

        {/* Result header with sort */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-sm font-semibold text-[#1F2937]">총 {filtered.length}개 대회</p>
          <select className="text-sm border border-[#E5E7EB] rounded-lg px-3 py-1.5 text-[#6B7280] bg-white focus:outline-none focus:ring-2 focus:ring-[#6D28D9]">
            <option>최신순</option>
            <option>마감임박순</option>
            <option>참가비순</option>
          </select>
        </div>

        {/* Tournament grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((t) => (
              <TournamentCard key={t.id} {...t} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 gap-4">
            <p className="text-[#6B7280] text-sm">조건에 맞는 대회가 없습니다</p>
            <button
              onClick={() => { setActiveCategory('전체'); setActiveLevel('전체') }}
              className="px-4 py-2 rounded-full text-sm font-semibold bg-[#6D28D9] text-white hover:bg-[#5B21B6] transition-colors"
            >
              필터 초기화
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
