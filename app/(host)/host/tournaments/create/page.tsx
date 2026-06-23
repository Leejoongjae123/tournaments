'use client'

import { useState } from 'react'

const STEPS = ['기본정보', '일정/장소', '참가설정', '확인']

function StepIndicator({ current }: { current: number }) {
  return (
    <div className="flex items-center mb-8">
      {STEPS.map((label, i) => {
        const n = i + 1
        const done = current > n
        const active = current === n
        return (
          <div key={label} className="flex items-center flex-1 last:flex-none">
            <div className="flex flex-col items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${done ? 'bg-[#059669] text-white' : active ? 'bg-[#6D28D9] text-white' : 'bg-[#E5E7EB] text-[#9CA3AF]'}`}>
                {done
                  ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>
                  : n}
              </div>
              <span className={`text-xs mt-1 font-semibold whitespace-nowrap ${done ? 'text-[#059669]' : active ? 'text-[#6D28D9]' : 'text-[#9CA3AF]'}`}>{label}</span>
            </div>
            {i < STEPS.length - 1 && <div className={`flex-1 h-px mx-2 mb-4 ${done ? 'bg-[#059669]' : 'bg-[#E5E7EB]'}`} />}
          </div>
        )
      })}
    </div>
  )
}

const inputCls = "w-full px-4 py-3 rounded-xl border border-[#E5E7EB] text-[#1F2937] placeholder-[#9CA3AF] text-sm focus:outline-none focus:ring-2 focus:ring-[#6D28D9] focus:border-transparent"
const labelCls = "block text-sm font-semibold text-[#1F2937] mb-1.5"
const btnNext = "px-8 py-3 bg-[#6D28D9] text-white font-bold rounded-xl hover:bg-[#5B21B6] transition-colors text-sm"
const btnPrev = "px-8 py-3 bg-white text-[#6D28D9] font-bold rounded-xl border border-[#6D28D9] hover:bg-[#F8F7FF] transition-colors text-sm"

export default function CreateTournamentPage() {
  const [step, setStep] = useState(1)
  const [name, setName] = useState('')
  const [type, setType] = useState('')
  const [level, setLevel] = useState('')
  const [desc, setDesc] = useState('')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [regStart, setRegStart] = useState('')
  const [regEnd, setRegEnd] = useState('')
  const [venue, setVenue] = useState('')
  const [address, setAddress] = useState('')
  const [maxP, setMaxP] = useState('')
  const [fee, setFee] = useState('')
  const [refund, setRefund] = useState('')
  const [regMethod, setRegMethod] = useState('open')

  const next = (n: number) => setStep(n)

  return (
    <div className="min-h-screen bg-[#F8F7FF]">
      <div className="bg-white border-b border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-2xl font-bold text-[#1F2937]">새 대회 개설</h1>
          <p className="text-[#6B7280] mt-1">대회 정보를 단계별로 입력하세요</p>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <StepIndicator current={step} />

        {step === 1 && (
          <div className="bg-white rounded-2xl border border-[#E5E7EB] shadow-sm p-6 space-y-5 mb-6">
            <h2 className="font-bold text-[#1F2937] text-lg">1단계: 기본 정보</h2>
            <div>
              <label className={labelCls}>대회명</label>
              <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="예: 2025 서울 오픈 피클볼 챔피언십" className={inputCls} />
            </div>
            <div>
              <label className={labelCls}>대회 유형</label>
              <select value={type} onChange={e => setType(e.target.value)} className={inputCls + " bg-white"}>
                <option value="">선택하세요</option>
                <option>단식</option>
                <option>복식</option>
                <option>혼합복식</option>
              </select>
            </div>
            <div>
              <label className={labelCls}>레벨</label>
              <select value={level} onChange={e => setLevel(e.target.value)} className={inputCls + " bg-white"}>
                <option value="">선택하세요</option>
                <option>초급</option>
                <option>중급</option>
                <option>고급</option>
                <option>오픈</option>
                <option>전체</option>
              </select>
            </div>
            <div>
              <label className={labelCls}>대회 소개</label>
              <textarea rows={4} value={desc} onChange={e => setDesc(e.target.value)} placeholder="대회에 대한 간단한 소개를 작성해주세요..." className={inputCls + " resize-none"} />
            </div>
            <div className="flex justify-end pt-2">
              <button type="button" onClick={() => next(2)} className={btnNext}>다음 단계 →</button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="bg-white rounded-2xl border border-[#E5E7EB] shadow-sm p-6 space-y-5 mb-6">
            <h2 className="font-bold text-[#1F2937] text-lg">2단계: 일정 / 장소</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className={labelCls}>대회 시작일</label>
                <input type="date" value={startDate} onChange={e => setStartDate(e.target.value)} className={inputCls} />
              </div>
              <div>
                <label className={labelCls}>대회 종료일</label>
                <input type="date" value={endDate} onChange={e => setEndDate(e.target.value)} className={inputCls} />
              </div>
              <div>
                <label className={labelCls}>신청 시작일</label>
                <input type="date" value={regStart} onChange={e => setRegStart(e.target.value)} className={inputCls} />
              </div>
              <div>
                <label className={labelCls}>신청 마감일</label>
                <input type="date" value={regEnd} onChange={e => setRegEnd(e.target.value)} className={inputCls} />
              </div>
            </div>
            <div>
              <label className={labelCls}>장소명</label>
              <input type="text" value={venue} onChange={e => setVenue(e.target.value)} placeholder="예: 올림픽공원 테니스장" className={inputCls} />
            </div>
            <div>
              <label className={labelCls}>상세 주소</label>
              <input type="text" value={address} onChange={e => setAddress(e.target.value)} placeholder="예: 서울특별시 송파구 올림픽로 424" className={inputCls} />
            </div>
            <div className="flex justify-between pt-2">
              <button type="button" onClick={() => next(1)} className={btnPrev}>← 이전</button>
              <button type="button" onClick={() => next(3)} className={btnNext}>다음 단계 →</button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="bg-white rounded-2xl border border-[#E5E7EB] shadow-sm p-6 space-y-5 mb-6">
            <h2 className="font-bold text-[#1F2937] text-lg">3단계: 참가 설정</h2>
            <div>
              <label className={labelCls}>최대 참가자 수</label>
              <input type="number" value={maxP} onChange={e => setMaxP(e.target.value)} placeholder="예: 64" className={inputCls} />
            </div>
            <div>
              <label className={labelCls}>참가비 (단위: 원)</label>
              <input type="number" value={fee} onChange={e => setFee(e.target.value)} placeholder="예: 30000" className={inputCls} />
            </div>
            <div>
              <label className={labelCls}>환불 정책</label>
              <select value={refund} onChange={e => setRefund(e.target.value)} className={inputCls + " bg-white"}>
                <option value="">선택하세요</option>
                <option value="full">전액환불 (7일 전)</option>
                <option value="half">50% 환불 (3일 전)</option>
                <option value="none">환불 불가</option>
              </select>
            </div>
            <div>
              <label className={labelCls}>참가 신청 방법</label>
              <div className="space-y-3 mt-2">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="radio" name="regMethod" value="open" checked={regMethod === 'open'} onChange={() => setRegMethod('open')} className="w-4 h-4 accent-[#6D28D9]" />
                  <span className="text-sm text-[#1F2937]">자유신청</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="radio" name="regMethod" value="approval" checked={regMethod === 'approval'} onChange={() => setRegMethod('approval')} className="w-4 h-4 accent-[#6D28D9]" />
                  <span className="text-sm text-[#1F2937]">호스트 승인 후 확정</span>
                </label>
              </div>
            </div>
            <div className="flex justify-between pt-2">
              <button type="button" onClick={() => next(2)} className={btnPrev}>← 이전</button>
              <button type="button" onClick={() => next(4)} className={btnNext}>다음 단계 →</button>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="space-y-4 mb-6">
            <h2 className="font-bold text-[#1F2937] text-lg">4단계: 확인</h2>
            <div className="bg-white rounded-2xl border border-[#E5E7EB] shadow-sm p-6 space-y-3">
              <h3 className="font-bold text-sm uppercase tracking-wide text-[#6D28D9]">기본정보</h3>
              <div className="space-y-2 text-sm">
                {[['대회명', name], ['대회 유형', type], ['레벨', level], ['대회 소개', desc]].map(([k, v]) => (
                  <div key={k} className="flex justify-between"><span className="text-[#6B7280]">{k}</span><span className="text-[#1F2937] font-medium text-right max-w-[60%]">{v || '—'}</span></div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-2xl border border-[#E5E7EB] shadow-sm p-6 space-y-3">
              <h3 className="font-bold text-sm uppercase tracking-wide text-[#6D28D9]">일정/장소</h3>
              <div className="space-y-2 text-sm">
                {[['대회 시작일', startDate], ['대회 종료일', endDate], ['신청 시작일', regStart], ['신청 마감일', regEnd], ['장소명', venue], ['상세 주소', address]].map(([k, v]) => (
                  <div key={k} className="flex justify-between"><span className="text-[#6B7280]">{k}</span><span className="text-[#1F2937] font-medium">{v || '—'}</span></div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-2xl border border-[#E5E7EB] shadow-sm p-6 space-y-3">
              <h3 className="font-bold text-sm uppercase tracking-wide text-[#6D28D9]">참가설정</h3>
              <div className="space-y-2 text-sm">
                {[
                  ['최대 참가자 수', maxP ? `${maxP}명` : ''],
                  ['참가비', fee ? `${Number(fee).toLocaleString()}원` : ''],
                  ['환불 정책', refund === 'full' ? '전액환불 (7일 전)' : refund === 'half' ? '50% 환불 (3일 전)' : refund === 'none' ? '환불 불가' : ''],
                  ['신청 방법', regMethod === 'open' ? '자유신청' : '호스트 승인 후 확정'],
                ].map(([k, v]) => (
                  <div key={k} className="flex justify-between"><span className="text-[#6B7280]">{k}</span><span className="text-[#1F2937] font-medium">{v || '—'}</span></div>
                ))}
              </div>
            </div>
            <p className="text-sm text-[#6B7280] text-center">개설 후 참가자 모집이 시작됩니다.</p>
            <div className="flex flex-col gap-3">
              <button type="button" onClick={() => alert('대회가 개설되었습니다!')} className="w-full py-3.5 bg-[#059669] text-white font-bold rounded-xl hover:bg-[#047857] transition-colors text-sm">대회 개설하기</button>
              <button type="button" onClick={() => next(3)} className="w-full py-3 bg-white text-[#6D28D9] font-bold rounded-xl border border-[#6D28D9] hover:bg-[#F8F7FF] transition-colors text-sm">← 이전</button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
