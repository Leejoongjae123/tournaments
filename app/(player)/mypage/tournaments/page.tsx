'use client'

import { useState } from 'react'
import Link from 'next/link'

const tournaments = [
  {
    id: '1',
    title: '2025 서울 오픈 피클볼 챔피언십',
    date: '2025.06.28',
    location: '선릉 실내체육관',
    status: '진행중',
    result: '진행중',
    fee: 50000,
    category: '복식',
  },
  {
    id: '2',
    title: '전국 피클볼 마스터즈',
    date: '2025.05.10',
    location: '올림픽공원 체육관',
    status: '완료',
    result: '준우승 🥈',
    fee: 80000,
    category: '복식',
  },
  {
    id: '3',
    title: '봄 피클볼 챌린지',
    date: '2025.04.05',
    location: '강남 스포츠센터',
    status: '완료',
    result: '우승 🏆',
    fee: 35000,
    category: '단식',
  },
  {
    id: '4',
    title: '강남 오픈 토너먼트',
    date: '2025.03.22',
    location: '강남 스포츠센터',
    status: '완료',
    result: '4강',
    fee: 40000,
    category: '복식',
  },
  {
    id: '5',
    title: '2025 겨울 피클볼 리그',
    date: '2025.01.18',
    location: '인천 스포츠센터',
    status: '완료',
    result: '8강',
    fee: 30000,
    category: '단식',
  },
  {
    id: '6',
    title: '신년 피클볼 페스티벌',
    date: '2024.12.28',
    location: '올림픽공원 체육관',
    status: '완료',
    result: '16강',
    fee: 45000,
    category: '복식',
  },
]

const statusStyles: Record<string, string> = {
  '진행중': 'bg-[#EDE9FE] text-[#5B21B6]',
  '완료': 'bg-[#D1FAE5] text-[#065F46]',
  '신청중': 'bg-[#DBEAFE] text-[#1E40AF]',
}

const filterPills = ['전체', '진행중', '완료', '신청중']

export default function TournamentsPage() {
  const [activeFilter, setActiveFilter] = useState('전체')

  const filtered = activeFilter === '전체'
    ? tournaments
    : tournaments.filter((t) => t.status === activeFilter)

  return (
    <div className="min-h-screen bg-[#F8F7FF]">
      {/* Top breadcrumb/header */}
      <div className="bg-white border-b border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center gap-4">
          <Link href="/mypage" className="text-sm text-[#6B7280] hover:text-[#1F2937] transition-colors">
            ← 마이페이지
          </Link>
          <h1 className="text-2xl font-bold text-[#1F2937]">참가 내역</h1>
        </div>
      </div>

      {/* Content area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">

        {/* Filter pills */}
        <div className="flex gap-2 flex-wrap">
          {filterPills.map((pill) => (
            <button
              key={pill}
              onClick={() => setActiveFilter(pill)}
              className={`px-4 py-2 rounded-full text-sm font-semibold border transition-colors ${
                activeFilter === pill
                  ? 'bg-[#6D28D9] text-white border-[#6D28D9]'
                  : 'bg-white text-[#6B7280] border-[#E5E7EB] hover:border-[#6D28D9] hover:text-[#6D28D9]'
              }`}
            >
              {pill}
            </button>
          ))}
        </div>

        {/* Tournament list */}
        <div className="bg-white rounded-2xl border border-[#E5E7EB] shadow-sm overflow-hidden divide-y divide-[#E5E7EB]">
          {filtered.length > 0 ? filtered.map((item) => (
            <div key={item.id} className="px-6 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 hover:bg-[#F8F7FF] transition-colors">
              {/* Left */}
              <div className="flex items-start gap-3 flex-1 min-w-0">
                <span className={`shrink-0 mt-0.5 text-xs font-semibold px-2.5 py-1 rounded-full ${statusStyles[item.status]}`}>
                  {item.status}
                </span>
                <div className="min-w-0">
                  <div className="font-semibold text-[#1F2937] text-sm leading-tight">{item.title}</div>
                  <div className="text-xs text-[#6B7280] mt-1">{item.date} · {item.location} · {item.category} · {item.fee.toLocaleString()}원</div>
                </div>
              </div>

              {/* Middle — result */}
              <div className="shrink-0 px-0 sm:px-6 text-sm font-semibold text-[#1F2937]">
                {item.result}
              </div>

              {/* Right — link */}
              <Link
                href={`/tournaments/${item.id}`}
                className="shrink-0 text-sm font-semibold text-[#6D28D9] hover:text-[#5B21B6] transition-colors"
              >
                자세히보기 →
              </Link>
            </div>
          )) : (
            <div className="px-6 py-12 text-center text-sm text-[#6B7280]">
              해당 상태의 참가 내역이 없습니다.
            </div>
          )}
        </div>

        {/* Stats summary */}
        <div className="bg-[#F8F7FF] rounded-2xl border border-[#E5E7EB] px-6 py-4 text-sm text-[#6B7280] text-center font-medium">
          총 <span className="text-[#1F2937] font-bold">6회</span> 참가 ·
          우승 <span className="text-[#1F2937] font-bold">1회</span> ·
          준우승 <span className="text-[#1F2937] font-bold">1회</span> ·
          획득 포인트 <span className="text-[#6D28D9] font-bold">2,840P</span>
        </div>
      </div>
    </div>
  )
}
