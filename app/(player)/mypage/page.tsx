'use client'

import { useState } from 'react'
import Link from 'next/link'

const user = {
  name: '김민준',
  level: '고급',
  dupr: 4.8,
  joinDate: '2024.03.15',
  region: '서울',
  stats: {
    tournaments: 12,
    wins: 31,
    losses: 3,
    winRate: 91.2,
    points: 2840,
  },
}

const participationHistory = [
  { id: '1', title: '2025 서울 오픈 피클볼 챔피언십', date: '2025.06.28', status: '진행중', result: '-', fee: 50000 },
  { id: '4', title: '전국 피클볼 마스터즈', date: '2025.05.10', status: '완료', result: '준우승', fee: 80000 },
  { id: 'p3', title: '봄 피클볼 챌린지', date: '2025.04.05', status: '완료', result: '우승 🏆', fee: 35000 },
  { id: 'p4', title: '강남 오픈 토너먼트', date: '2025.03.22', status: '완료', result: '4강', fee: 40000 },
]

const payments = [
  { date: '2025.06.15', title: '2025 서울 오픈 피클볼 챔피언십', amount: 50000, status: '결제완료' },
  { date: '2025.04.28', title: '전국 피클볼 마스터즈', amount: 80000, status: '결제완료' },
  { date: '2025.03.20', title: '봄 피클볼 챌린지', amount: 35000, status: '결제완료' },
  { date: '2025.03.10', title: '강남 오픈 토너먼트', amount: 40000, status: '결제완료' },
]

const statusStyles: Record<string, string> = {
  '진행중': 'bg-[#EDE9FE] text-[#5B21B6]',
  '완료': 'bg-[#D1FAE5] text-[#065F46]',
  '접수중': 'bg-[#DBEAFE] text-[#1E40AF]',
}

const tabs = ['내 정보', '참가내역', '결제내역']

export default function MyPage() {
  const [activeTab, setActiveTab] = useState<string>('내 정보')

  return (
    <div className="min-h-screen bg-[#F8F7FF]">
      {/* Profile hero */}
      <div className="bg-gradient-to-br from-[#6D28D9] to-[#4F46E5] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            {/* Avatar */}
            <div className="w-20 h-20 rounded-full bg-white/20 border-2 border-white/50 flex items-center justify-center text-3xl font-black text-white backdrop-blur-sm">
              {user.name[0]}
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <h1 className="text-2xl font-bold">{user.name}</h1>
                <span className="bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full">{user.level}</span>
              </div>
              <div className="text-white/70 text-sm">{user.region} · 가입일 {user.joinDate}</div>
              <div className="flex items-center gap-1 mt-2">
                <span className="text-white/80 text-sm">DUPR 레이팅</span>
                <span className="text-xl font-black ml-1">{user.dupr}</span>
              </div>
            </div>
            <div className="flex gap-2">
              <Link href="/mypage/profile" className="px-4 py-2 bg-white/20 border border-white/30 rounded-xl text-sm font-semibold hover:bg-white/30 transition-colors">
                프로필 수정
              </Link>
              <button onClick={() => alert('로그아웃 되었습니다.')} className="px-4 py-2 bg-white/10 border border-white/20 rounded-xl text-sm font-semibold hover:bg-white/20 transition-colors text-white/80">
                로그아웃
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Tab navigation */}
      <div className="bg-white border-b border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-0">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-4 text-sm font-semibold border-b-2 transition-colors ${
                  tab === activeTab
                    ? 'text-[#6D28D9] border-[#6D28D9]'
                    : 'border-transparent text-[#6B7280] hover:text-[#1F2937]'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        {/* 내 정보 tab content */}
        {activeTab === '내 정보' && (
          <>
            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { label: '참가 대회', value: `${user.stats.tournaments}개` },
                { label: '전적', value: `${user.stats.wins}승 ${user.stats.losses}패` },
                { label: '승률', value: `${user.stats.winRate}%` },
                { label: '획득 포인트', value: `${user.stats.points.toLocaleString()}P` },
              ].map((stat) => (
                <div key={stat.label} className="bg-white rounded-2xl border border-[#E5E7EB] p-4 text-center shadow-sm">
                  <div className="text-xl font-black text-[#6D28D9]">{stat.value}</div>
                  <div className="text-xs text-[#6B7280] mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Next match */}
            <div className="bg-white rounded-2xl border-l-4 border-l-[#6D28D9] border border-[#E5E7EB] p-5 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <h2 className="font-bold text-[#1F2937]">다음 경기</h2>
                <span className="text-xs font-semibold bg-[#EDE9FE] text-[#6D28D9] px-2.5 py-1 rounded-full">8강</span>
              </div>
              <div className="text-sm text-[#6B7280] space-y-1 mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-[#6D28D9]">📅</span>
                  <span>2025.06.28 (토) 14:00</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#6D28D9]">🏟️</span>
                  <span>선릉 실내체육관 3번 코트</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#6D28D9]">🆚</span>
                  <span className="font-semibold text-[#1F2937]">정수현/강다은 팀</span>
                </div>
              </div>
              <button
                onClick={() => alert('경기 결과 입력 기능은 준비 중입니다.')}
                className="px-4 py-2 rounded-lg border border-[#6D28D9] text-[#6D28D9] text-sm font-semibold hover:bg-[#EDE9FE] transition-colors"
              >
                경기 결과 입력
              </button>
            </div>
          </>
        )}

        {/* 참가내역 tab content */}
        {activeTab === '참가내역' && (
          <div className="bg-white rounded-2xl border border-[#E5E7EB] shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-[#E5E7EB]">
              <h2 className="font-bold text-[#1F2937]">참가 내역</h2>
            </div>
            <div className="divide-y divide-[#E5E7EB]">
              {participationHistory.map((item) => (
                <div key={item.id} className="px-6 py-4 flex items-center justify-between hover:bg-[#F8F7FF] transition-colors">
                  <div>
                    <div className="font-semibold text-[#1F2937] text-sm">{item.title}</div>
                    <div className="text-xs text-[#6B7280] mt-0.5">{item.date} · {item.fee.toLocaleString()}원</div>
                  </div>
                  <div className="flex items-center gap-2 shrink-0 ml-4">
                    {item.result !== '-' && (
                      <span className="text-xs font-semibold text-[#1F2937]">{item.result}</span>
                    )}
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${statusStyles[item.status]}`}>
                      {item.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 결제내역 tab content */}
        {activeTab === '결제내역' && (
          <div className="bg-white rounded-2xl border border-[#E5E7EB] shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-[#E5E7EB]">
              <h2 className="font-bold text-[#1F2937]">결제 내역</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[#F8F7FF] border-b border-[#E5E7EB]">
                    <th className="text-left px-6 py-3 text-xs font-semibold text-[#6B7280]">결제일</th>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-[#6B7280]">대회명</th>
                    <th className="text-right px-4 py-3 text-xs font-semibold text-[#6B7280]">금액</th>
                    <th className="text-right px-6 py-3 text-xs font-semibold text-[#6B7280]">상태</th>
                  </tr>
                </thead>
                <tbody>
                  {payments.map((p, i) => (
                    <tr
                      key={i}
                      className={`border-b border-[#E5E7EB] last:border-0 ${i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAFA]'}`}
                    >
                      <td className="px-6 py-3 text-[#6B7280] text-xs">{p.date}</td>
                      <td className="px-4 py-3 text-[#1F2937] font-medium">{p.title}</td>
                      <td className="px-4 py-3 text-right font-semibold text-[#1F2937]">{p.amount.toLocaleString()}원</td>
                      <td className="px-6 py-3 text-right">
                        <span className="text-xs font-semibold bg-[#D1FAE5] text-[#065F46] px-2.5 py-1 rounded-full">
                          {p.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
