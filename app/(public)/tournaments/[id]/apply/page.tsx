'use client'

import { useState } from 'react'
import Link from 'next/link'
import { use } from 'react'

const events = [
  { key: '복식', label: '복식 (기본)', sub: '파트너 필요' },
  { key: '단식', label: '단식', sub: '개인전' },
  { key: '혼합복식', label: '혼합복식', sub: '남녀 혼합 복식' },
]

export default function ApplyPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = use(params)

  const [selectedEvent, setSelectedEvent] = useState('복식')
  const [agreements, setAgreements] = useState({
    rule: false,
    privacy: false,
    refund: false,
    photo: false,
  })

  const allChecked = agreements.rule && agreements.privacy && agreements.refund && agreements.photo
  const requiredChecked = agreements.rule && agreements.privacy && agreements.refund

  const toggleAll = () => {
    const next = !allChecked
    setAgreements({ rule: next, privacy: next, refund: next, photo: next })
  }

  const showPartner = selectedEvent === '복식' || selectedEvent === '혼합복식'

  return (
    <div className="min-h-screen bg-[#F8F7FF]">
      {/* Page header */}
      <div className="bg-white border-b border-[#E5E7EB]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            href={`/tournaments/${id}`}
            className="inline-flex items-center gap-1 text-sm text-[#6B7280] hover:text-[#1F2937] transition-colors mb-3"
          >
            ← 대회 상세
          </Link>
          <div className="flex flex-col gap-1">
            <h1 className="text-xl font-bold text-[#1F2937]">참가 신청</h1>
            <p className="text-sm text-[#6B7280]">2025 서울 오픈 피클볼 챔피언십</p>
          </div>
        </div>
      </div>

      {/* Step indicator */}
      <div className="bg-white border-b border-[#E5E7EB]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 bg-[#6D28D9] text-white text-xs font-bold px-3 py-1.5 rounded-full">
                <span>01</span>
                <span>신청 정보</span>
              </span>
            </div>
            <div className="flex-1 max-w-[48px] h-px bg-[#E5E7EB]" />
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 bg-[#E5E7EB] text-[#6B7280] text-xs font-bold px-3 py-1.5 rounded-full">
                <span>02</span>
                <span>결제</span>
              </span>
            </div>
            <div className="flex-1 max-w-[48px] h-px bg-[#E5E7EB]" />
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 bg-[#E5E7EB] text-[#6B7280] text-xs font-bold px-3 py-1.5 rounded-full">
                <span>03</span>
                <span>완료</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="lg:grid lg:grid-cols-3 gap-8">
          {/* Main form */}
          <div className="lg:col-span-2 space-y-6">

            {/* Section 1 — 신청자 정보 */}
            <div className="bg-white rounded-2xl border border-[#E5E7EB] shadow-sm p-6">
              <h2 className="text-base font-bold text-[#1F2937] mb-4">신청자 정보</h2>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <label className="text-sm font-semibold text-[#1F2937]">이름</label>
                    <span className="text-xs bg-[#EDE9FE] text-[#6D28D9] font-semibold px-2 py-0.5 rounded-full">로그인된 정보</span>
                  </div>
                  <input
                    type="text"
                    defaultValue="김민준"
                    readOnly
                    className="w-full px-4 py-3 border border-[#E5E7EB] rounded-xl text-sm bg-[#F8F7FF] text-[#6B7280] focus:outline-none cursor-not-allowed"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#1F2937] mb-1.5">이메일</label>
                  <input
                    type="email"
                    defaultValue="kiminjun@email.com"
                    readOnly
                    className="w-full px-4 py-3 border border-[#E5E7EB] rounded-xl text-sm bg-[#F8F7FF] text-[#6B7280] focus:outline-none cursor-not-allowed"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#1F2937] mb-1.5">휴대폰</label>
                  <input
                    type="tel"
                    defaultValue="010-1234-5678"
                    readOnly
                    className="w-full px-4 py-3 border border-[#E5E7EB] rounded-xl text-sm bg-[#F8F7FF] text-[#6B7280] focus:outline-none cursor-not-allowed"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#1F2937] mb-1.5">DUPR 레이팅</label>
                  <input
                    type="text"
                    defaultValue="4.8"
                    readOnly
                    className="w-full px-4 py-3 border border-[#E5E7EB] rounded-xl text-sm bg-[#F8F7FF] text-[#6B7280] focus:outline-none cursor-not-allowed"
                  />
                </div>
                <p className="text-xs text-[#6B7280] bg-[#F8F7FF] rounded-xl p-3 border border-[#E5E7EB]">
                  신청자 정보 수정은 <strong className="text-[#6D28D9]">마이페이지 &gt; 프로필 수정</strong>에서 가능합니다.
                </p>
              </div>
            </div>

            {/* Section 2 — 종목 선택 */}
            <div className="bg-white rounded-2xl border border-[#E5E7EB] shadow-sm p-6">
              <h2 className="text-base font-bold text-[#1F2937] mb-4">종목 선택</h2>
              <div className="space-y-3">
                {events.map((ev) => {
                  const isSelected = selectedEvent === ev.key
                  return (
                    <div
                      key={ev.key}
                      onClick={() => setSelectedEvent(ev.key)}
                      className={`border-2 rounded-xl p-4 cursor-pointer transition-colors ${
                        isSelected
                          ? 'border-[#6D28D9] bg-[#EDE9FE]'
                          : 'border-[#E5E7EB] bg-white hover:border-[#6D28D9]'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <p className={`text-sm font-bold ${isSelected ? 'text-[#6D28D9]' : 'text-[#1F2937]'}`}>{ev.label}</p>
                          <p className="text-xs text-[#6B7280] mt-0.5">{ev.sub}</p>
                        </div>
                        <span className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                          isSelected ? 'border-[#6D28D9] bg-[#6D28D9]' : 'border-[#E5E7EB]'
                        }`}>
                          {isSelected && <span className="w-2 h-2 rounded-full bg-white" />}
                        </span>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Section 3 — 파트너 정보 (조건부) */}
            {showPartner && (
              <div className="bg-white rounded-2xl border border-[#E5E7EB] shadow-sm p-6">
                <h2 className="text-base font-bold text-[#1F2937] mb-4">파트너 정보</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-[#1F2937] mb-1.5">파트너 이름</label>
                    <input
                      type="text"
                      placeholder="파트너 이름을 입력하세요"
                      className="w-full px-4 py-3 border border-[#E5E7EB] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#6D28D9]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#1F2937] mb-1.5">파트너 이메일</label>
                    <input
                      type="email"
                      placeholder="파트너 이메일을 입력하세요"
                      className="w-full px-4 py-3 border border-[#E5E7EB] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#6D28D9]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#1F2937] mb-1.5">파트너 DUPR 레이팅</label>
                    <input
                      type="number"
                      placeholder="예: 4.5"
                      step="0.1"
                      min="1"
                      max="8"
                      className="w-full px-4 py-3 border border-[#E5E7EB] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#6D28D9]"
                    />
                  </div>
                  <p className="text-xs text-[#6B7280] flex items-start gap-1.5 bg-[#FFFBEB] border border-[#FDE68A] rounded-xl p-3">
                    <span>📧</span>
                    <span>파트너에게도 참가 확인 이메일이 발송됩니다.</span>
                  </p>
                </div>
              </div>
            )}

            {/* Section 4 — 동의 사항 */}
            <div className="bg-white rounded-2xl border border-[#E5E7EB] shadow-sm p-6">
              <h2 className="text-base font-bold text-[#1F2937] mb-4">동의 사항</h2>
              <div className="space-y-3">
                {/* 전체 동의 */}
                <label className="flex items-center gap-3 bg-[#F8F7FF] rounded-xl p-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={allChecked}
                    onChange={toggleAll}
                    className="w-4 h-4 accent-[#6D28D9] cursor-pointer"
                  />
                  <span className="text-sm font-bold text-[#1F2937]">전체 동의</span>
                </label>
                <div className="border-t border-[#E5E7EB] pt-3 space-y-3 pl-1">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={agreements.rule}
                      onChange={(e) => setAgreements((prev) => ({ ...prev, rule: e.target.checked }))}
                      className="w-4 h-4 accent-[#6D28D9] cursor-pointer mt-0.5"
                    />
                    <span className="text-sm text-[#1F2937]">(필수) 대회 참가 규정에 동의합니다</span>
                  </label>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={agreements.privacy}
                      onChange={(e) => setAgreements((prev) => ({ ...prev, privacy: e.target.checked }))}
                      className="w-4 h-4 accent-[#6D28D9] cursor-pointer mt-0.5"
                    />
                    <span className="text-sm text-[#1F2937]">(필수) 개인정보 수집 및 이용에 동의합니다</span>
                  </label>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={agreements.refund}
                      onChange={(e) => setAgreements((prev) => ({ ...prev, refund: e.target.checked }))}
                      className="w-4 h-4 accent-[#6D28D9] cursor-pointer mt-0.5"
                    />
                    <span className="text-sm text-[#1F2937]">(필수) 참가비 환불 정책에 동의합니다</span>
                  </label>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={agreements.photo}
                      onChange={(e) => setAgreements((prev) => ({ ...prev, photo: e.target.checked }))}
                      className="w-4 h-4 accent-[#6D28D9] cursor-pointer mt-0.5"
                    />
                    <span className="text-sm text-[#6B7280]">(선택) 대회 결과 및 사진 공개에 동의합니다</span>
                  </label>
                </div>
              </div>
            </div>

          </div>

          {/* Right sidebar */}
          <div className="lg:col-span-1 hidden lg:block">
            <div className="bg-white rounded-2xl border border-[#E5E7EB] shadow-sm p-6 sticky top-24">
              <h3 className="text-base font-bold text-[#1F2937] mb-4">신청 요약</h3>
              <p className="text-sm font-semibold text-[#1F2937] mb-4">2025 서울 오픈 피클볼 챔피언십</p>

              <div className="space-y-2.5 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-[#6B7280]">날짜</span>
                  <span className="font-medium text-[#1F2937]">2025.06.28 - 06.29</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[#6B7280]">장소</span>
                  <span className="font-medium text-[#1F2937] text-right max-w-[130px]">선릉 실내체육관, 서울</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[#6B7280]">종목</span>
                  <span className="font-medium text-[#1F2937]">{selectedEvent}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[#6B7280]">레벨</span>
                  <span className="font-medium text-[#1F2937]">오픈</span>
                </div>
              </div>

              <div className="border-t border-[#E5E7EB] pt-4 mb-5">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-[#1F2937]">참가비</span>
                  <span className="font-black text-[#6D28D9] text-lg">50,000원</span>
                </div>
              </div>

              {requiredChecked ? (
                <Link
                  href={`/tournaments/${id}/payment`}
                  className="block w-full py-3.5 bg-[#6D28D9] text-white font-bold rounded-xl hover:bg-[#5B21B6] transition-colors text-center text-sm"
                >
                  결제로 이동
                </Link>
              ) : (
                <button
                  disabled
                  className="block w-full py-3.5 bg-[#E5E7EB] text-[#9CA3AF] font-bold rounded-xl text-center text-sm cursor-not-allowed"
                >
                  결제로 이동
                </button>
              )}

              <p className="text-xs text-[#6B7280] text-center mt-4">로그인 상태: 김민준</p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile fixed bottom bar */}
      <div className="md:hidden fixed bottom-0 inset-x-0 bg-white border-t border-[#E5E7EB] p-4 z-50">
        {requiredChecked ? (
          <Link
            href={`/tournaments/${id}/payment`}
            className="block w-full py-3.5 bg-[#6D28D9] text-white font-bold rounded-xl hover:bg-[#5B21B6] transition-colors text-center text-sm"
          >
            결제로 이동 · 50,000원
          </Link>
        ) : (
          <button
            disabled
            className="block w-full py-3.5 bg-[#E5E7EB] text-[#9CA3AF] font-bold rounded-xl text-center text-sm cursor-not-allowed"
          >
            결제로 이동 · 50,000원
          </button>
        )}
      </div>
    </div>
  )
}
