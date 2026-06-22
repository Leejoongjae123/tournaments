'use client'

import { useState } from 'react'
import Link from 'next/link'

const payments = [
  {
    id: '1',
    date: '2025.06.15',
    tournament: '2025 서울 오픈 피클볼 챔피언십',
    category: '복식',
    amount: 50000,
    method: '카카오페이',
    status: '결제완료',
  },
  {
    id: '2',
    date: '2025.04.28',
    tournament: '전국 피클볼 마스터즈',
    category: '복식',
    amount: 80000,
    method: '신용카드',
    status: '결제완료',
  },
  {
    id: '3',
    date: '2025.03.20',
    tournament: '봄 피클볼 챌린지',
    category: '단식',
    amount: 35000,
    method: '토스페이',
    status: '결제완료',
  },
  {
    id: '4',
    date: '2025.03.10',
    tournament: '강남 오픈 토너먼트',
    category: '복식',
    amount: 40000,
    method: '신용카드',
    status: '결제완료',
  },
  {
    id: '5',
    date: '2025.01.05',
    tournament: '2025 겨울 피클볼 리그',
    category: '단식',
    amount: 30000,
    method: '카카오페이',
    status: '결제완료',
  },
  {
    id: '6',
    date: '2024.12.10',
    tournament: '신년 피클볼 페스티벌',
    category: '복식',
    amount: 45000,
    method: '신용카드',
    status: '결제완료',
  },
]

const statusStyles: Record<string, string> = {
  '결제완료': 'bg-[#D1FAE5] text-[#065F46]',
  '환불완료': 'bg-[#DBEAFE] text-[#1E40AF]',
  '취소': 'bg-[#F3F4F6] text-[#6B7280]',
}

const filterPills = ['전체', '결제완료', '환불완료', '취소']

const totalAmount = payments.reduce((sum, p) => sum + p.amount, 0)

export default function PaymentsPage() {
  const [activeFilter, setActiveFilter] = useState('전체')

  const filtered = activeFilter === '전체'
    ? payments
    : payments.filter((p) => p.status === activeFilter)

  return (
    <div className="min-h-screen bg-[#F8F7FF]">
      {/* Top breadcrumb/header */}
      <div className="bg-white border-b border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center gap-4">
          <Link href="/mypage" className="text-sm text-[#6B7280] hover:text-[#1F2937] transition-colors">
            ← 마이페이지
          </Link>
          <h1 className="text-2xl font-bold text-[#1F2937]">결제 내역</h1>
        </div>
      </div>

      {/* Content area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">

        {/* Summary card */}
        <div className="bg-white rounded-2xl border border-[#E5E7EB] shadow-sm px-6 py-5">
          <div className="text-3xl font-black text-[#6D28D9] mb-1">
            {totalAmount.toLocaleString()}원
          </div>
          <div className="text-sm text-[#6B7280] mb-0.5">총 결제 금액</div>
          <div className="flex flex-wrap gap-4 mt-3 text-sm">
            <span className="text-[#6B7280]">환불 금액: <span className="font-semibold text-[#1F2937]">0원</span></span>
            <span className="text-[#6B7280]">이번 달 결제: <span className="font-semibold text-[#1F2937]">50,000원</span></span>
          </div>
        </div>

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

        {/* Payment table */}
        <div className="bg-white rounded-2xl border border-[#E5E7EB] shadow-sm overflow-x-auto">
          <table className="w-full text-sm min-w-[640px]">
            <thead>
              <tr className="bg-[#F8F7FF] border-b border-[#E5E7EB]">
                <th className="text-left px-5 py-3 text-xs font-semibold text-[#6B7280]">결제일</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-[#6B7280]">대회명</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-[#6B7280]">종목</th>
                <th className="text-right px-4 py-3 text-xs font-semibold text-[#6B7280]">금액</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-[#6B7280]">결제방법</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-[#6B7280]">상태</th>
                <th className="text-center px-5 py-3 text-xs font-semibold text-[#6B7280]">영수증</th>
              </tr>
            </thead>
            <tbody>
              {filtered.length > 0 ? filtered.map((p, i) => (
                <tr
                  key={p.id}
                  className={`border-b border-[#E5E7EB] last:border-0 hover:bg-[#F8F7FF] transition-colors ${
                    i % 2 === 1 ? 'bg-[#FAFAFA]' : 'bg-white'
                  }`}
                >
                  <td className="px-5 py-3.5 text-xs text-[#6B7280] whitespace-nowrap">{p.date}</td>
                  <td className="px-4 py-3.5 font-medium text-[#1F2937]">{p.tournament}</td>
                  <td className="px-4 py-3.5 text-[#6B7280]">{p.category}</td>
                  <td className="px-4 py-3.5 text-right font-semibold text-[#1F2937] whitespace-nowrap">
                    {p.amount.toLocaleString()}원
                  </td>
                  <td className="px-4 py-3.5 text-[#6B7280]">{p.method}</td>
                  <td className="px-4 py-3.5">
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${statusStyles[p.status]}`}>
                      {p.status}
                    </span>
                  </td>
                  <td className="px-5 py-3.5 text-center">
                    <button className="px-3 py-1 rounded-lg border border-[#E5E7EB] text-xs font-semibold text-[#6B7280] hover:border-[#6D28D9] hover:text-[#6D28D9] transition-colors">
                      영수증
                    </button>
                  </td>
                </tr>
              )) : (
                <tr>
                  <td colSpan={7} className="px-5 py-12 text-center text-sm text-[#6B7280]">
                    해당 상태의 결제 내역이 없습니다.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Notice box */}
        <div className="bg-[#FEF3C7] border border-[#FDE68A] rounded-xl p-4 text-sm text-[#92400E]">
          결제 취소 및 환불은 대회 신청 취소 정책에 따라 처리됩니다. 문의:{' '}
          <a href="mailto:support@pickleballkr.com" className="font-semibold underline hover:text-[#78350F]">
            support@pickleballkr.com
          </a>
        </div>
      </div>
    </div>
  )
}
