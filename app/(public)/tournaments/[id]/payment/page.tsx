'use client'

import { useState } from 'react'
import Link from 'next/link'
import { use } from 'react'

type PaymentMethod = '카카오페이' | '신용카드' | '토스페이' | '네이버페이'

const paymentMethods: { key: PaymentMethod; icon: string; iconBg: string; iconText: string; label: string }[] = [
  { key: '카카오페이', icon: 'K', iconBg: 'bg-[#FEE500]', iconText: 'text-black', label: '카카오페이' },
  { key: '신용카드', icon: '💳', iconBg: 'bg-[#F3F4F6]', iconText: 'text-[#6B7280]', label: '신용카드' },
  { key: '토스페이', icon: 'T', iconBg: 'bg-[#0064FF]', iconText: 'text-white', label: '토스페이' },
  { key: '네이버페이', icon: 'N', iconBg: 'bg-[#03C75A]', iconText: 'text-white', label: '네이버페이' },
]

const methodConfig: Record<PaymentMethod, { btnBg: string; btnText: string; btnLabel: string }> = {
  '카카오페이': { btnBg: 'bg-[#FEE500] hover:bg-[#FDD800]', btnText: 'text-black', btnLabel: '카카오페이로 결제하기' },
  '신용카드':   { btnBg: 'bg-[#6D28D9] hover:bg-[#5B21B6]', btnText: 'text-white', btnLabel: '신용카드로 결제하기' },
  '토스페이':   { btnBg: 'bg-[#0064FF] hover:bg-[#0052CC]', btnText: 'text-white', btnLabel: '토스페이로 결제하기' },
  '네이버페이': { btnBg: 'bg-[#03C75A] hover:bg-[#02A84C]', btnText: 'text-white', btnLabel: '네이버페이로 결제하기' },
}

export default function PaymentPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = use(params)
  const [selectedMethod, setSelectedMethod] = useState<PaymentMethod>('카카오페이')

  const config = methodConfig[selectedMethod]

  const handlePay = () => {
    alert(`결제가 완료되었습니다! 카카오 알림톡으로 확인 메시지가 발송됩니다.`)
  }

  return (
    <div className="min-h-screen bg-[#F8F7FF]">
      {/* Page header */}
      <div className="bg-white border-b border-[#E5E7EB]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            href={`/tournaments/${id}/apply`}
            className="inline-flex items-center gap-1 text-sm text-[#6B7280] hover:text-[#1F2937] transition-colors mb-3"
          >
            ← 참가 신청
          </Link>
          <h1 className="text-xl font-bold text-[#1F2937]">결제</h1>
        </div>
      </div>

      {/* Step indicator */}
      <div className="bg-white border-b border-[#E5E7EB]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 bg-[#D1FAE5] text-[#065F46] text-xs font-bold px-3 py-1.5 rounded-full">
                <span>✓</span>
                <span>신청 정보</span>
              </span>
            </div>
            <div className="flex-1 max-w-[48px] h-px bg-[#E5E7EB]" />
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 bg-[#6D28D9] text-white text-xs font-bold px-3 py-1.5 rounded-full">
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
          {/* Main content */}
          <div className="lg:col-span-2 space-y-6">

            {/* Section 1 — 결제 금액 확인 */}
            <div className="bg-white rounded-2xl border border-[#E5E7EB] shadow-sm p-6">
              <h2 className="text-base font-bold text-[#1F2937] mb-4">결제 금액 확인</h2>
              <p className="text-sm font-semibold text-[#1F2937] mb-5">
                2025 서울 오픈 피클볼 챔피언십 · 복식
              </p>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-[#6B7280]">참가비</span>
                  <span className="font-medium text-[#1F2937]">50,000원</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[#6B7280]">수수료 (0%)</span>
                  <span className="font-medium text-[#1F2937]">0원</span>
                </div>
                <div className="border-t border-[#E5E7EB] pt-3 flex justify-between items-center">
                  <span className="font-bold text-[#1F2937]">합계</span>
                  <span className="font-black text-[#6D28D9] text-xl">50,000원</span>
                </div>
              </div>
            </div>

            {/* Section 2 — 결제 방법 선택 */}
            <div className="bg-white rounded-2xl border border-[#E5E7EB] shadow-sm p-6">
              <h2 className="text-base font-bold text-[#1F2937] mb-4">결제 방법 선택</h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {paymentMethods.map((m) => {
                  const isSelected = selectedMethod === m.key
                  return (
                    <div
                      key={m.key}
                      onClick={() => setSelectedMethod(m.key)}
                      className={`border-2 rounded-xl p-4 flex flex-col items-center gap-2 cursor-pointer transition-colors ${
                        isSelected
                          ? 'border-[#6D28D9] bg-[#EDE9FE]'
                          : 'border-[#E5E7EB] bg-white hover:border-[#6D28D9]'
                      }`}
                    >
                      <span className={`w-10 h-10 rounded-full ${m.iconBg} flex items-center justify-center text-lg font-black ${m.iconText}`}>
                        {m.icon}
                      </span>
                      <span className={`text-xs font-bold ${isSelected ? 'text-[#6D28D9]' : 'text-[#1F2937]'}`}>
                        {m.label}
                      </span>
                    </div>
                  )
                })}
              </div>

              {/* Payment method notice */}
              <div className="mt-4">
                {selectedMethod === '카카오페이' && (
                  <div className="bg-[#FFFBEB] border border-[#FDE68A] rounded-xl p-4 text-sm text-[#92400E]">
                    <p><strong>선택한 결제 수단: 카카오페이.</strong> 카카오페이 앱에서 최종 결제를 진행합니다.</p>
                  </div>
                )}
                {selectedMethod === '신용카드' && (
                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm font-semibold text-[#1F2937] mb-1.5">카드번호</label>
                      <input
                        type="text"
                        placeholder="0000 - 0000 - 0000 - 0000"
                        disabled
                        className="w-full px-4 py-3 border border-[#E5E7EB] rounded-xl text-sm bg-[#F8F7FF] text-[#9CA3AF] cursor-not-allowed"
                      />
                    </div>
                    <div className="flex gap-3">
                      <div className="flex-1">
                        <label className="block text-sm font-semibold text-[#1F2937] mb-1.5">유효기간</label>
                        <input
                          type="text"
                          placeholder="MM / YY"
                          disabled
                          className="w-full px-4 py-3 border border-[#E5E7EB] rounded-xl text-sm bg-[#F8F7FF] text-[#9CA3AF] cursor-not-allowed"
                        />
                      </div>
                      <div className="flex-1">
                        <label className="block text-sm font-semibold text-[#1F2937] mb-1.5">CVC</label>
                        <input
                          type="text"
                          placeholder="CVC"
                          disabled
                          className="w-full px-4 py-3 border border-[#E5E7EB] rounded-xl text-sm bg-[#F8F7FF] text-[#9CA3AF] cursor-not-allowed"
                        />
                      </div>
                    </div>
                  </div>
                )}
                {selectedMethod === '토스페이' && (
                  <div className="bg-[#EFF6FF] border border-[#BFDBFE] rounded-xl p-4 text-sm text-[#1E40AF]">
                    <p><strong>선택한 결제 수단: 토스페이.</strong> 토스 앱에서 최종 결제를 진행합니다.</p>
                  </div>
                )}
                {selectedMethod === '네이버페이' && (
                  <div className="bg-[#ECFDF5] border border-[#A7F3D0] rounded-xl p-4 text-sm text-[#065F46]">
                    <p><strong>선택한 결제 수단: 네이버페이.</strong> 네이버페이로 결제합니다.</p>
                  </div>
                )}
              </div>
            </div>

            {/* Section 3 — 쿠폰/포인트 */}
            <div className="bg-white rounded-2xl border border-[#E5E7EB] shadow-sm p-6">
              <h2 className="text-base font-bold text-[#1F2937] mb-4">쿠폰/포인트</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-[#1F2937] mb-1.5">쿠폰 입력</label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="쿠폰 코드를 입력하세요"
                      className="flex-1 px-4 py-3 border border-[#E5E7EB] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#6D28D9]"
                    />
                    <button className="px-4 py-3 bg-[#6D28D9] text-white font-bold rounded-xl hover:bg-[#5B21B6] transition-colors text-sm shrink-0">
                      적용
                    </button>
                  </div>
                </div>
                <div className="flex justify-between items-center text-sm bg-[#F8F7FF] rounded-xl p-3 border border-[#E5E7EB]">
                  <span className="text-[#6B7280]">보유 포인트</span>
                  <span className="font-semibold text-[#1F2937]">
                    0P <span className="text-[#6B7280] font-normal">(사용 가능 포인트: 0P)</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom notice */}
            <div className="bg-[#EDE9FE] border border-[#C4B5FD] rounded-xl p-4 text-sm text-[#5B21B6] flex items-start gap-2">
              <span>💬</span>
              <span>결제 완료 후 카카오 알림톡으로 신청 확인 메시지가 발송됩니다.</span>
            </div>

          </div>

          {/* Right sidebar */}
          <div className="lg:col-span-1 hidden lg:block">
            <div className="bg-white rounded-2xl border border-[#E5E7EB] shadow-sm p-6 sticky top-24">
              <h3 className="text-base font-bold text-[#1F2937] mb-4">최종 결제금액</h3>

              <div className="space-y-2.5 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-[#6B7280]">참가비</span>
                  <span className="font-medium text-[#1F2937]">50,000원</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[#6B7280]">할인</span>
                  <span className="font-medium text-[#10B981]">-0원</span>
                </div>
              </div>

              <div className="border-t border-[#E5E7EB] pt-4 mb-5">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-[#1F2937]">합계</span>
                  <span className="font-black text-[#6D28D9] text-xl">50,000원</span>
                </div>
              </div>

              <button
                onClick={handlePay}
                className={`w-full py-3.5 font-bold rounded-xl transition-colors text-sm ${config.btnBg} ${config.btnText}`}
              >
                {config.btnLabel}
              </button>

              <p className="text-xs text-[#6B7280] text-center mt-4 flex items-center justify-center gap-1">
                <span>🔒</span>
                <span>SSL 암호화로 안전하게 처리됩니다</span>
              </p>

              <div className="mt-4 pt-4 border-t border-[#E5E7EB] text-center">
                <a href="#" className="text-xs text-[#6B7280] underline hover:text-[#1F2937] transition-colors">
                  환불 정책 확인
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile fixed bottom bar */}
      <div className="md:hidden fixed bottom-0 inset-x-0 bg-white border-t border-[#E5E7EB] p-4 z-50">
        <button
          onClick={handlePay}
          className={`w-full py-3.5 font-bold rounded-xl transition-colors text-sm ${config.btnBg} ${config.btnText}`}
        >
          {config.btnLabel} · 50,000원
        </button>
      </div>
    </div>
  )
}
