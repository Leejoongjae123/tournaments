'use client'

import { useState } from 'react'
import Link from 'next/link'

const tournaments = [
  {
    id: '1',
    title: '2025 서울 오픈 피클볼 챔피언십',
    date: '2025.06.28-29',
    location: '선릉 실내체육관',
    current: 98,
    max: 120,
    status: '진행중',
    revenue: '4,900,000원',
  },
  {
    id: '2',
    title: '봄 피클볼 챌린지',
    date: '2025.07.26',
    location: '강남 스포츠센터',
    current: 24,
    max: 40,
    status: '접수중',
    revenue: '600,000원',
  },
]

const statusStyles: Record<string, string> = {
  '진행중': 'bg-[#EDE9FE] text-[#5B21B6]',
  '접수중': 'bg-[#D1FAE5] text-[#065F46]',
  '종료': 'bg-[#F3F4F6] text-[#6B7280]',
}

const tabs = [
  { label: '전체', count: 2 },
  { label: '진행중', count: 1 },
  { label: '접수중', count: 1 },
  { label: '종료', count: 0 },
]

export default function HostTournamentsPage() {
  const [activeTab, setActiveTab] = useState<string>('전체')

  const filtered = activeTab === '전체'
    ? tournaments
    : tournaments.filter((t) => t.status === activeTab)

  return (
    <div className="min-h-screen bg-[#F8F7FF]">
      {/* Page header */}
      <div className="bg-white border-b border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-[#1F2937]">내 대회 목록</h1>
              <p className="text-[#6B7280] mt-1">운영중인 모든 대회를 관리하세요</p>
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        {/* Filter tabs */}
        <div className="flex gap-1 bg-white rounded-xl border border-[#E5E7EB] p-1 w-fit shadow-sm">
          {tabs.map((tab) => (
            <button
              key={tab.label}
              onClick={() => setActiveTab(tab.label)}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors flex items-center gap-1.5 ${
                tab.label === activeTab
                  ? 'bg-[#6D28D9] text-white'
                  : 'text-[#6B7280] hover:text-[#1F2937]'
              }`}
            >
              {tab.label}
              <span
                className={`text-xs px-1.5 py-0.5 rounded-full font-bold ${
                  tab.label === activeTab ? 'bg-white/20 text-white' : 'bg-[#F3F4F6] text-[#6B7280]'
                }`}
              >
                {tab.count}
              </span>
            </button>
          ))}
        </div>

        {/* Tournament list */}
        <div className="bg-white rounded-2xl border border-[#E5E7EB] shadow-sm divide-y divide-[#E5E7EB]">
          {filtered.length === 0 ? (
            <div className="px-6 py-12 text-center text-[#6B7280] text-sm">
              해당 상태의 대회가 없습니다
            </div>
          ) : (
            filtered.map((t) => (
              <div
                key={t.id}
                className="px-6 py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-[#F8F7FF] transition-colors"
              >
                {/* Left: status + info */}
                <div className="flex items-start gap-3 min-w-0">
                  <span
                    className={`shrink-0 text-xs font-semibold px-2.5 py-1 rounded-full ${statusStyles[t.status]}`}
                  >
                    {t.status}
                  </span>
                  <div className="min-w-0">
                    <div className="font-semibold text-[#1F2937] text-sm leading-snug">
                      {t.title}
                    </div>
                    <div className="text-xs text-[#6B7280] mt-0.5">
                      {t.date} · {t.location}
                    </div>
                  </div>
                </div>

                {/* Middle: participants progress */}
                <div className="flex flex-col gap-1 shrink-0 sm:min-w-[140px]">
                  <div className="text-xs font-semibold text-[#1F2937]">
                    {t.current}/{t.max}명
                  </div>
                  <div className="w-32 h-1.5 bg-[#E5E7EB] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#6D28D9] rounded-full"
                      style={{ width: `${(t.current / t.max) * 100}%` }}
                    />
                  </div>
                </div>

                {/* Right: action buttons */}
                <div className="flex items-center gap-2 shrink-0">
                  <Link
                    href={`/host/tournaments/${t.id}/participants`}
                    className="px-3 py-1.5 text-xs font-semibold border border-[#E5E7EB] rounded-lg text-[#1F2937] hover:bg-[#F8F7FF] hover:border-[#6D28D9] hover:text-[#6D28D9] transition-colors"
                  >
                    참가자 관리
                  </Link>
                  <Link
                    href={`/host/tournaments/${t.id}/bracket`}
                    className="px-3 py-1.5 text-xs font-semibold border border-[#E5E7EB] rounded-lg text-[#1F2937] hover:bg-[#F8F7FF] hover:border-[#6D28D9] hover:text-[#6D28D9] transition-colors"
                  >
                    대진표
                  </Link>
                  <Link
                    href={`/host/tournaments/${t.id}/results`}
                    className="px-3 py-1.5 text-xs font-semibold border border-[#E5E7EB] rounded-lg text-[#1F2937] hover:bg-[#F8F7FF] hover:border-[#6D28D9] hover:text-[#6D28D9] transition-colors"
                  >
                    결과 입력
                  </Link>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Stats summary */}
        <div className="bg-[#F8F7FF] rounded-2xl border border-[#E5E7EB] p-6">
          <h2 className="font-bold text-[#1F2937] mb-4">대회 통계 요약</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white rounded-xl border border-[#E5E7EB] p-4 shadow-sm">
              <div className="text-xs text-[#6B7280] font-semibold">총 참가자</div>
              <div className="text-2xl font-black text-[#1F2937] mt-1">122명</div>
            </div>
            <div className="bg-white rounded-xl border border-[#E5E7EB] p-4 shadow-sm">
              <div className="text-xs text-[#6B7280] font-semibold">총 결제금액</div>
              <div className="text-2xl font-black text-[#1F2937] mt-1">5,500,000원</div>
            </div>
            <div className="bg-white rounded-xl border border-[#E5E7EB] p-4 shadow-sm">
              <div className="text-xs text-[#6B7280] font-semibold">미승인 결과</div>
              <div className="text-2xl font-black text-[#F59E0B] mt-1">3건</div>
              <Link
                href="/host/tournaments/1/results"
                className="text-xs text-[#F59E0B] font-semibold hover:text-[#D97706] transition-colors mt-1 inline-block"
              >
                확인하러 가기 →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
