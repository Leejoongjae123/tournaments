'use client'

import { useState } from 'react'

export default function CreateTournamentPage() {
  const [currentStep, setCurrentStep] = useState(1)

  // Step 1
  const [name, setName] = useState('')
  const [type, setType] = useState('')
  const [level, setLevel] = useState('')
  const [description, setDescription] = useState('')

  // Step 2
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [regStartDate, setRegStartDate] = useState('')
  const [regEndDate, setRegEndDate] = useState('')
  const [venueName, setVenueName] = useState('')
  const [venueAddress, setVenueAddress] = useState('')

  // Step 3
  const [maxParticipants, setMaxParticipants] = useState('')
  const [fee, setFee] = useState('')
  const [refundPolicy, setRefundPolicy] = useState('')
  const [registrationMethod, setRegistrationMethod] = useState('open')

  const steps = ['기본정보', '일정/장소', '참가설정', '확인']

  function StepIndicator() {
    return (
      <div className="flex items-center mb-8">
        {steps.map((step, i) => {
          const stepNum = i + 1
          const isCompleted = currentStep > stepNum
          const isActive = currentStep === stepNum
          return (
            <div key={step} className="flex items-center flex-1 last:flex-none">
              <div className="flex flex-col items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${
                    isCompleted
                      ? 'bg-[#059669] text-white'
                      : isActive
                      ? 'bg-[#6D28D9] text-white'
                      : 'bg-[#E5E7EB] text-[#9CA3AF]'
                  }`}
                >
                  {isCompleted ? (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                  ) : (
                    stepNum
                  )}
                </div>
                <span className={`text-xs mt-1 font-semibold whitespace-nowrap ${
                  isCompleted ? 'text-[#059669]' : isActive ? 'text-[#6D28D9]' : 'text-[#9CA3AF]'
                }`}>
                  {step}
                </span>
              </div>
              {i < steps.length - 1 && (
                <div className={`flex-1 h-px mx-2 mb-4 ${isCompleted ? 'bg-[#059669]' : 'bg-[#E5E7EB]'}`} />
              )}
            </div>
          )
        })}
      </div>
    )
  }

  const inputClass = "w-full px-4 py-3 rounded-xl border border-[#E5E7EB] text-[#1F2937] placeholder-[#9CA3AF] text-sm focus:outline-none focus:ring-2 focus:ring-[#6D28D9] focus:border-transparent"
  const labelClass = "block text-sm font-semibold text-[#1F2937] mb-1.5"

  return (
    <div className="min-h-screen bg-[#F8F7FF]">
      <div className="bg-white border-b border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-2xl font-bold text-[#1F2937]">새 대회 개설</h1>
          <p className="text-[#6B7280] mt-1">대회 정보를 단계별로 입력하세요</p>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <StepIndicator />

        {/* Step 1 */}
        {currentStep === 1 && (
          <div className="bg-white rounded-2xl border border-[#E5E7EB] shadow-sm p-6 space-y-5 mb-6">
            <h2 className="font-bold text-[#1F2937] text-lg">1단계: 기본 정보</h2>

            <div>
              <label className={labelClass}>대회명</label>
              <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="예: 2025 서울 오픈 피클볼 챔피언십"
                className={inputClass}
              />
            </div>

            <div>
              <label className={labelClass}>대회 유형</label>
              <select value={type} onChange={e => setType(e.target.value)} className={inputClass + " bg-white"}>
                <option value="">선택하세요</option>
                <option>단식</option>
                <option>복식</option>
                <option>혼합복식</option>
              </select>
            </div>

            <div>
              <label className={labelClass}>레벨</label>
              <select value={level} onChange={e => setLevel(e.target.value)} className={inputClass + " bg-white"}>
                <option value="">선택하세요</option>
                <option>초급</option>
                <option>중급</option>
                <option>고급</option>
                <option>오픈</option>
                <option>전체</option>
              </select>
            </div>

            <div>
              <label className={labelClass}>대회 소개</label>
              <textarea
                rows={4}
                value={description}
                onChange={e => setDescription(e.target.value)}
                placeholder="대회에 대한 간단한 소개를 작성해주세요..."
                className={inputClass + " resize-none"}
              />
            </div>

            <div>
              <label className={labelClass}>대표 이미지</label>
              <div className="border-2 border-dashed border-[#E5E7EB] rounded-xl p-8 flex flex-col items-center justify-center gap-2 hover:border-[#6D28D9] transition-colors cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-[#9CA3AF]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
                </svg>
                <span className="text-sm text-[#9CA3AF] font-medium">이미지 업로드</span>
                <span className="text-xs text-[#9CA3AF]">PNG, JPG (최대 5MB)</span>
              </div>
            </div>

            <div className="flex justify-end">
              <button
                onClick={() => setCurrentStep(2)}
                className="px-8 py-3 bg-[#6D28D9] text-white font-bold rounded-xl hover:bg-[#5B21B6] transition-colors text-sm"
              >
                다음 단계 →
              </button>
            </div>
          </div>
        )}

        {/* Step 2 */}
        {currentStep === 2 && (
          <div className="bg-white rounded-2xl border border-[#E5E7EB] shadow-sm p-6 space-y-5 mb-6">
            <h2 className="font-bold text-[#1F2937] text-lg">2단계: 일정 / 장소</h2>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>대회 시작일</label>
                <input type="date" value={startDate} onChange={e => setStartDate(e.target.value)} className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>대회 종료일</label>
                <input type="date" value={endDate} onChange={e => setEndDate(e.target.value)} className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>신청 시작일</label>
                <input type="date" value={regStartDate} onChange={e => setRegStartDate(e.target.value)} className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>신청 마감일</label>
                <input type="date" value={regEndDate} onChange={e => setRegEndDate(e.target.value)} className={inputClass} />
              </div>
            </div>

            <div>
              <label className={labelClass}>장소명</label>
              <input
                type="text"
                value={venueName}
                onChange={e => setVenueName(e.target.value)}
                placeholder="예: 올림픽공원 테니스장"
                className={inputClass}
              />
            </div>

            <div>
              <label className={labelClass}>상세 주소</label>
              <input
                type="text"
                value={venueAddress}
                onChange={e => setVenueAddress(e.target.value)}
                placeholder="예: 서울특별시 송파구 올림픽로 424"
                className={inputClass}
              />
            </div>

            <div className="flex justify-between">
              <button
                onClick={() => setCurrentStep(1)}
                className="px-8 py-3 bg-white text-[#6D28D9] font-bold rounded-xl border border-[#6D28D9] hover:bg-[#F8F7FF] transition-colors text-sm"
              >
                ← 이전
              </button>
              <button
                onClick={() => setCurrentStep(3)}
                className="px-8 py-3 bg-[#6D28D9] text-white font-bold rounded-xl hover:bg-[#5B21B6] transition-colors text-sm"
              >
                다음 단계 →
              </button>
            </div>
          </div>
        )}

        {/* Step 3 */}
        {currentStep === 3 && (
          <div className="bg-white rounded-2xl border border-[#E5E7EB] shadow-sm p-6 space-y-5 mb-6">
            <h2 className="font-bold text-[#1F2937] text-lg">3단계: 참가 설정</h2>

            <div>
              <label className={labelClass}>최대 참가자 수</label>
              <input
                type="number"
                value={maxParticipants}
                onChange={e => setMaxParticipants(e.target.value)}
                placeholder="예: 64"
                className={inputClass}
              />
            </div>

            <div>
              <label className={labelClass}>참가비 (단위: 원)</label>
              <input
                type="number"
                value={fee}
                onChange={e => setFee(e.target.value)}
                placeholder="예: 30000"
                className={inputClass}
              />
            </div>

            <div>
              <label className={labelClass}>환불 정책</label>
              <select value={refundPolicy} onChange={e => setRefundPolicy(e.target.value)} className={inputClass + " bg-white"}>
                <option value="">선택하세요</option>
                <option value="full">전액환불 (7일 전)</option>
                <option value="half">50% 환불 (3일 전)</option>
                <option value="none">환불 불가</option>
              </select>
            </div>

            <div>
              <label className={labelClass}>참가 신청 방법</label>
              <div className="space-y-3 mt-2">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="registrationMethod"
                    value="open"
                    checked={registrationMethod === 'open'}
                    onChange={() => setRegistrationMethod('open')}
                    className="w-4 h-4 accent-[#6D28D9]"
                  />
                  <span className="text-sm text-[#1F2937]">자유신청</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="registrationMethod"
                    value="approval"
                    checked={registrationMethod === 'approval'}
                    onChange={() => setRegistrationMethod('approval')}
                    className="w-4 h-4 accent-[#6D28D9]"
                  />
                  <span className="text-sm text-[#1F2937]">호스트 승인 후 확정</span>
                </label>
              </div>
            </div>

            <div className="flex justify-between">
              <button
                onClick={() => setCurrentStep(2)}
                className="px-8 py-3 bg-white text-[#6D28D9] font-bold rounded-xl border border-[#6D28D9] hover:bg-[#F8F7FF] transition-colors text-sm"
              >
                ← 이전
              </button>
              <button
                onClick={() => setCurrentStep(4)}
                className="px-8 py-3 bg-[#6D28D9] text-white font-bold rounded-xl hover:bg-[#5B21B6] transition-colors text-sm"
              >
                다음 단계 →
              </button>
            </div>
          </div>
        )}

        {/* Step 4 */}
        {currentStep === 4 && (
          <div className="space-y-4 mb-6">
            <h2 className="font-bold text-[#1F2937] text-lg">4단계: 확인</h2>

            <div className="bg-white rounded-2xl border border-[#E5E7EB] shadow-sm p-6 space-y-3">
              <h3 className="font-bold text-[#1F2937] text-sm uppercase tracking-wide text-[#6D28D9]">기본정보</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-[#6B7280]">대회명</span>
                  <span className="text-[#1F2937] font-medium">{name || '—'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#6B7280]">대회 유형</span>
                  <span className="text-[#1F2937] font-medium">{type || '—'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#6B7280]">레벨</span>
                  <span className="text-[#1F2937] font-medium">{level || '—'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#6B7280]">대회 소개</span>
                  <span className="text-[#1F2937] font-medium max-w-[60%] text-right">{description || '—'}</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-[#E5E7EB] shadow-sm p-6 space-y-3">
              <h3 className="font-bold text-sm uppercase tracking-wide text-[#6D28D9]">일정/장소</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-[#6B7280]">대회 시작일</span>
                  <span className="text-[#1F2937] font-medium">{startDate || '—'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#6B7280]">대회 종료일</span>
                  <span className="text-[#1F2937] font-medium">{endDate || '—'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#6B7280]">신청 시작일</span>
                  <span className="text-[#1F2937] font-medium">{regStartDate || '—'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#6B7280]">신청 마감일</span>
                  <span className="text-[#1F2937] font-medium">{regEndDate || '—'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#6B7280]">장소명</span>
                  <span className="text-[#1F2937] font-medium">{venueName || '—'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#6B7280]">상세 주소</span>
                  <span className="text-[#1F2937] font-medium">{venueAddress || '—'}</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-[#E5E7EB] shadow-sm p-6 space-y-3">
              <h3 className="font-bold text-sm uppercase tracking-wide text-[#6D28D9]">참가설정</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-[#6B7280]">최대 참가자 수</span>
                  <span className="text-[#1F2937] font-medium">{maxParticipants ? `${maxParticipants}명` : '—'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#6B7280]">참가비</span>
                  <span className="text-[#1F2937] font-medium">{fee ? `${Number(fee).toLocaleString()}원` : '—'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#6B7280]">환불 정책</span>
                  <span className="text-[#1F2937] font-medium">
                    {refundPolicy === 'full' ? '전액환불 (7일 전)' : refundPolicy === 'half' ? '50% 환불 (3일 전)' : refundPolicy === 'none' ? '환불 불가' : '—'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#6B7280]">신청 방법</span>
                  <span className="text-[#1F2937] font-medium">{registrationMethod === 'open' ? '자유신청' : '호스트 승인 후 확정'}</span>
                </div>
              </div>
            </div>

            <p className="text-sm text-[#6B7280] text-center">개설 후 참가자 모집이 시작됩니다.</p>

            <div className="flex flex-col gap-3">
              <button
                onClick={() => alert('대회가 개설되었습니다!')}
                className="w-full py-3.5 bg-[#059669] text-white font-bold rounded-xl hover:bg-[#047857] transition-colors text-sm"
              >
                대회 개설하기
              </button>
              <button
                onClick={() => setCurrentStep(3)}
                className="w-full py-3 bg-white text-[#6D28D9] font-bold rounded-xl border border-[#6D28D9] hover:bg-[#F8F7FF] transition-colors text-sm"
              >
                ← 이전
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
