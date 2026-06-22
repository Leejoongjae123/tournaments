'use client'

import { useState, use } from 'react'
import Link from 'next/link'

const allTournaments = [
  {
    id: '1',
    title: '2025 서울 오픈 피클볼 챔피언십',
    date: '2025.06.28 - 06.29',
    registrationPeriod: '2025.05.01 - 2025.06.20',
    location: '선릉 실내체육관, 서울',
    category: '복식',
    level: '오픈',
    maxParticipants: 120,
    currentParticipants: 98,
    fee: 50000,
    status: '마감임박',
    gradient: 'from-emerald-500 to-teal-600',
  },
  {
    id: '2',
    title: '부산 비치 피클볼 토너먼트',
    date: '2025.07.05 - 07.06',
    registrationPeriod: '2025.05.15 - 2025.06.30',
    location: '해운대 스포츠센터, 부산',
    category: '혼합복식',
    level: '중급',
    maxParticipants: 64,
    currentParticipants: 32,
    fee: 40000,
    status: '접수중',
    gradient: 'from-orange-400 to-amber-500',
  },
  {
    id: '3',
    title: '강남 기업인 피클볼 리그',
    date: '2025.07.12',
    registrationPeriod: '2025.06.01 - 2025.07.05',
    location: '강남 스포츠센터, 서울',
    category: '단식',
    level: '초급',
    maxParticipants: 32,
    currentParticipants: 12,
    fee: 30000,
    status: '접수중',
    gradient: 'from-violet-500 to-purple-600',
  },
  {
    id: '4',
    title: '전국 피클볼 마스터즈',
    date: '2025.08.02 - 08.03',
    registrationPeriod: '2025.06.01 - 2025.07.25',
    location: '올림픽공원 체육관, 서울',
    category: '복식',
    level: '고급',
    maxParticipants: 256,
    currentParticipants: 256,
    fee: 80000,
    status: '마감',
    gradient: 'from-blue-500 to-indigo-600',
  },
  {
    id: '5',
    title: '인천 오픈 피클볼 챌린지',
    date: '2025.07.19 - 07.20',
    registrationPeriod: '2025.06.10 - 2025.07.12',
    location: '인천 스포츠센터, 인천',
    category: '단식',
    level: '중급',
    maxParticipants: 48,
    currentParticipants: 28,
    fee: 35000,
    status: '접수중',
    gradient: 'from-violet-500 to-purple-600',
  },
  {
    id: '6',
    title: '대구 피클볼 페스티벌',
    date: '2025.07.26',
    registrationPeriod: '2025.06.15 - 2025.07.20',
    location: '대구 실내체육관, 대구',
    category: '혼합복식',
    level: '초급',
    maxParticipants: 40,
    currentParticipants: 5,
    fee: 25000,
    status: '접수중',
    gradient: 'from-orange-400 to-amber-500',
  },
]

const statusColors: Record<string, string> = {
  '접수중': 'bg-[#D1FAE5] text-[#065F46]',
  '마감임박': 'bg-[#FEF3C7] text-[#92400E]',
  '마감': 'bg-[#FEE2E2] text-[#991B1B]',
  '진행중': 'bg-[#EDE9FE] text-[#5B21B6]',
  '종료': 'bg-[#F3F4F6] text-[#6B7280]',
}

const tabs = ['대회안내', '대진표', '참가자', '결과']

const participants = [
  { name: '김민준', category: '복식', level: '고급' },
  { name: '박서연', category: '복식', level: '고급' },
  { name: '이준호', category: '단식', level: '고급' },
  { name: '정수현', category: '혼합복식', level: '중급' },
  { name: '강다은', category: '혼합복식', level: '중급' },
  { name: '윤성진', category: '단식', level: '중급' },
]

export default function TournamentDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = use(params)
  const tournament = allTournaments.find((t) => t.id === id) ?? allTournaments[0]
  const progressPct = Math.round((tournament.currentParticipants / tournament.maxParticipants) * 100)

  const [activeTab, setActiveTab] = useState<string>('대회안내')

  return (
    <div className="min-h-screen bg-[#F8F7FF]">
      {/* Banner */}
      <div className={`bg-gradient-to-br ${tournament.gradient} text-white`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link href="/tournaments" className="inline-flex items-center gap-1 text-white/70 hover:text-white text-sm mb-6 transition-colors">
            ← 대회 목록으로
          </Link>
          <div className="flex flex-wrap items-start gap-4 justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full">{tournament.category}</span>
                <span className="bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full">{tournament.level}</span>
                <span className={`text-xs font-semibold px-3 py-1 rounded-full ${statusColors[tournament.status]}`}>{tournament.status}</span>
              </div>
              <h1 className="text-2xl md:text-3xl font-bold leading-tight max-w-2xl">{tournament.title}</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main content */}
          <div className="flex-1">
            {/* Info grid */}
            <div className="bg-white rounded-2xl shadow-sm border border-[#E5E7EB] p-6 mb-6">
              <h2 className="text-lg font-bold text-[#1F2937] mb-4">대회 정보</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { label: '날짜', value: tournament.date, icon: '📅' },
                  { label: '장소', value: tournament.location, icon: '📍' },
                  { label: '종목', value: tournament.category, icon: '🏓' },
                  { label: '레벨', value: tournament.level, icon: '📊' },
                  { label: '참가비', value: `${tournament.fee.toLocaleString()}원`, icon: '💳' },
                  { label: '신청기간', value: tournament.registrationPeriod, icon: '📋' },
                ].map((info) => (
                  <div key={info.label} className="flex items-start gap-3 p-3 bg-[#F8F7FF] rounded-xl">
                    <span className="text-xl">{info.icon}</span>
                    <div>
                      <div className="text-xs text-[#6B7280] font-medium">{info.label}</div>
                      <div className="text-sm font-semibold text-[#1F2937] mt-0.5">{info.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Participants progress */}
            <div className="bg-white rounded-2xl shadow-sm border border-[#E5E7EB] p-6 mb-6">
              <div className="flex justify-between items-center mb-3">
                <h2 className="text-lg font-bold text-[#1F2937]">참가자 현황</h2>
                <span className="text-sm font-semibold text-[#6D28D9]">{tournament.currentParticipants}/{tournament.maxParticipants}명</span>
              </div>
              <div className="h-3 bg-[#E5E7EB] rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#6D28D9] to-[#7C3AED] rounded-full transition-all"
                  style={{ width: `${progressPct}%` }}
                />
              </div>
              <div className="flex justify-between text-xs text-[#6B7280] mt-2">
                <span>{progressPct}% 차있음</span>
                <span>잔여 {tournament.maxParticipants - tournament.currentParticipants}자리</span>
              </div>
            </div>

            {/* Tabs */}
            <div className="bg-white rounded-2xl shadow-sm border border-[#E5E7EB] overflow-hidden">
              <div className="flex border-b border-[#E5E7EB]">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex-1 py-3.5 text-sm font-semibold transition-colors ${
                      tab === activeTab
                        ? 'text-[#6D28D9] border-b-2 border-[#6D28D9]'
                        : 'text-[#6B7280] hover:text-[#1F2937]'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Tab content: 대회안내 */}
              {activeTab === '대회안내' && (
                <div className="p-6">
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-bold text-[#1F2937] mb-3">대회 규정</h3>
                      <ul className="space-y-2 text-sm text-[#6B7280]">
                        <li className="flex items-start gap-2"><span className="text-[#6D28D9] mt-0.5">•</span>국제 피클볼 협회(IFP) 공식 규정을 따릅니다.</li>
                        <li className="flex items-start gap-2"><span className="text-[#6D28D9] mt-0.5">•</span>경기 방식: 더블 일리미네이션 (예선 탈락 후 패자부활전 참가 가능)</li>
                        <li className="flex items-start gap-2"><span className="text-[#6D28D9] mt-0.5">•</span>세트: 3게임 중 2승제, 각 게임 11점 (듀스 시 2점 차 승리)</li>
                        <li className="flex items-start gap-2"><span className="text-[#6D28D9] mt-0.5">•</span>사용 볼: USAPA 공인 야외용 피클볼</li>
                        <li className="flex items-start gap-2"><span className="text-[#6D28D9] mt-0.5">•</span>복장: 운동복 착용 필수, 실내화 지참</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-bold text-[#1F2937] mb-3">일정</h3>
                      <div className="space-y-3">
                        {[
                          { time: '06.28 08:00', event: '선수 등록 및 웜업' },
                          { time: '06.28 09:00', event: '조별 예선 시작' },
                          { time: '06.28 18:00', event: '예선 종료 / 토너먼트 대진 발표' },
                          { time: '06.29 09:00', event: '16강 토너먼트 시작' },
                          { time: '06.29 15:00', event: '준결승 / 결승' },
                          { time: '06.29 17:00', event: '시상식' },
                        ].map((s) => (
                          <div key={s.time} className="flex gap-4 text-sm">
                            <span className="text-[#6D28D9] font-semibold shrink-0 w-32">{s.time}</span>
                            <span className="text-[#1F2937]">{s.event}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-[#1F2937] mb-3">장소 안내</h3>
                      <div className="bg-[#F8F7FF] rounded-xl h-40 flex items-center justify-center text-[#6B7280] text-sm border border-[#E5E7EB]">
                        <div className="text-center">
                          <div className="text-3xl mb-2">📍</div>
                          <div className="font-semibold text-[#1F2937]">선릉 실내체육관</div>
                          <div className="text-xs mt-1">서울 강남구 선릉로 12길 8</div>
                          <div className="text-xs text-[#6D28D9] mt-2">지도 보기 →</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab content: 대진표 */}
              {activeTab === '대진표' && (
                <div className="p-6">
                  <div className="text-center py-8">
                    <div className="text-4xl mb-4">🏆</div>
                    <p className="text-[#1F2937] font-semibold mb-2">
                      대진표는 접수 마감 후 공개됩니다.
                    </p>
                    <p className="text-sm text-[#6B7280] mb-6">
                      현재 {tournament.currentParticipants}/{tournament.maxParticipants}명 참가 신청 완료
                    </p>
                    <Link
                      href="/bracket"
                      className="inline-flex items-center gap-1 px-5 py-2.5 bg-[#6D28D9] text-white text-sm font-semibold rounded-xl hover:bg-[#5B21B6] transition-colors"
                    >
                      대진표 보기 →
                    </Link>
                  </div>
                </div>
              )}

              {/* Tab content: 참가자 */}
              {activeTab === '참가자' && (
                <div className="p-6">
                  <h3 className="font-bold text-[#1F2937] mb-4">참가자 목록</h3>
                  <div className="space-y-2">
                    {participants.map((p, i) => (
                      <div key={i} className="flex items-center justify-between px-4 py-3 bg-[#F8F7FF] rounded-xl">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-[#EDE9FE] flex items-center justify-center text-xs font-bold text-[#6D28D9]">
                            {p.name[0]}
                          </div>
                          <span className="font-semibold text-[#1F2937] text-sm">{p.name}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-[#6B7280]">{p.category}</span>
                          <span className="text-xs font-semibold bg-[#EDE9FE] text-[#5B21B6] px-2 py-0.5 rounded-full">{p.level}</span>
                        </div>
                      </div>
                    ))}
                    <div className="text-center text-sm text-[#6B7280] pt-2">
                      외 {tournament.currentParticipants - participants.length}명
                    </div>
                  </div>
                </div>
              )}

              {/* Tab content: 결과 */}
              {activeTab === '결과' && (
                <div className="p-6">
                  <div className="text-center py-8">
                    <div className="text-4xl mb-4">🏆</div>
                    <p className="text-[#1F2937] font-semibold">대회 진행 후 결과가 공개됩니다</p>
                    <p className="text-sm text-[#6B7280] mt-2">대회 종료 후 결과를 확인하세요.</p>
                  </div>
                </div>
              )}
            </div>

            {/* Mobile register button */}
            <div className="lg:hidden mt-6">
              <Link
                href={`/tournaments/${id}/apply`}
                className="block w-full py-4 bg-[#6D28D9] text-white font-bold rounded-xl hover:bg-[#5B21B6] transition-colors text-lg text-center"
              >
                참가 신청하기
              </Link>
            </div>
          </div>

          {/* Desktop sidebar */}
          <div className="hidden lg:block w-80 shrink-0">
            <div className="bg-white rounded-2xl shadow-sm border border-[#E5E7EB] p-6 sticky top-24">
              <h3 className="font-bold text-[#1F2937] text-lg mb-4">참가 신청</h3>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-[#6B7280]">참가비</span>
                  <span className="font-semibold text-[#1F2937]">{tournament.fee.toLocaleString()}원</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[#6B7280]">종목</span>
                  <span className="font-semibold text-[#1F2937]">{tournament.category}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[#6B7280]">레벨</span>
                  <span className="font-semibold text-[#1F2937]">{tournament.level}</span>
                </div>
                <div className="border-t border-[#E5E7EB] pt-3 flex justify-between">
                  <span className="font-bold text-[#1F2937]">합계</span>
                  <span className="font-bold text-[#6D28D9] text-lg">{tournament.fee.toLocaleString()}원</span>
                </div>
              </div>
              <Link
                href={`/tournaments/${id}/apply`}
                className="block w-full py-3.5 bg-[#6D28D9] text-white font-bold rounded-xl hover:bg-[#5B21B6] transition-colors text-center"
              >
                참가 신청하기
              </Link>
              <p className="text-xs text-[#6B7280] text-center mt-3">신청 마감: {tournament.registrationPeriod.split(' - ')[1]}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
