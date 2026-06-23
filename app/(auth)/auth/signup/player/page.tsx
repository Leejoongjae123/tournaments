'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function PlayerSignupPage() {
  const [currentStep, setCurrentStep] = useState(1)

  // Step 1
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const [phone, setPhone] = useState('')

  // Step 2
  const [region, setRegion] = useState('')
  const [level, setLevel] = useState('')
  const [club, setClub] = useState('')
  const [agreed, setAgreed] = useState(false)

  const inputClass = "w-full px-4 py-3 rounded-xl border border-[#E5E7EB] text-[#1F2937] placeholder-[#9CA3AF] text-sm focus:outline-none focus:ring-2 focus:ring-[#6D28D9] focus:border-transparent"
  const labelClass = "block text-sm font-semibold text-[#1F2937] mb-1.5"

  return (
    <div className="min-h-screen bg-[#F8F7FF] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        {/* Step indicator */}
        <div className="flex items-center gap-2 mb-8">
          <div className="flex items-center gap-1.5">
            <div className={`w-7 h-7 rounded-full text-white text-xs font-bold flex items-center justify-center ${currentStep > 1 ? 'bg-[#059669]' : 'bg-[#6D28D9]'}`}>
              {currentStep > 1 ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-3.5 h-3.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
              ) : '1'}
            </div>
            <span className={`text-xs font-semibold ${currentStep > 1 ? 'text-[#059669]' : 'text-[#6D28D9]'}`}>기본 정보</span>
          </div>
          <div className={`flex-1 h-px ${currentStep > 1 ? 'bg-[#059669]' : 'bg-[#E5E7EB]'}`} />
          <div className="flex items-center gap-1.5">
            <div className={`w-7 h-7 rounded-full text-xs font-bold flex items-center justify-center ${currentStep === 2 ? 'bg-[#6D28D9] text-white' : 'bg-[#E5E7EB] text-[#9CA3AF]'}`}>
              2
            </div>
            <span className={`text-xs font-semibold ${currentStep === 2 ? 'text-[#6D28D9]' : 'text-[#9CA3AF]'}`}>레벨 설정</span>
          </div>
        </div>

        <h1 className="text-xl font-bold text-[#1F2937] mb-6">선수 회원가입</h1>

        {/* Step 1 */}
        {currentStep === 1 && (
          <form className="space-y-4" onSubmit={e => { e.preventDefault(); setCurrentStep(2); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>
            <div>
              <label className={labelClass}>이름</label>
              <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="홍길동" className={inputClass} />
            </div>

            <div>
              <label className={labelClass}>이메일</label>
              <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="example@email.com" className={inputClass} />
            </div>

            <div>
              <label className={labelClass}>비밀번호</label>
              <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="8자 이상 입력" className={inputClass} />
            </div>

            <div>
              <label className={labelClass}>비밀번호 확인</label>
              <input type="password" value={passwordConfirm} onChange={e => setPasswordConfirm(e.target.value)} placeholder="비밀번호를 다시 입력하세요" className={inputClass} />
            </div>

            <div>
              <label className={labelClass}>휴대폰 번호</label>
              <input type="tel" value={phone} onChange={e => setPhone(e.target.value)} placeholder="010-0000-0000" className={inputClass} />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-[#6D28D9] text-white font-bold rounded-xl hover:bg-[#5B21B6] transition-colors text-sm mt-2"
            >
              다음 단계 →
            </button>
          </form>
        )}

        {/* Step 2 */}
        {currentStep === 2 && (
          <form className="space-y-4" onSubmit={e => { e.preventDefault(); alert('회원가입이 완료되었습니다!') }}>
            <div>
              <label className={labelClass}>지역</label>
              <select value={region} onChange={e => setRegion(e.target.value)} className={inputClass + " bg-white"}>
                <option value="">지역 선택</option>
                <option>서울</option>
                <option>경기</option>
                <option>부산</option>
                <option>인천</option>
                <option>대구</option>
                <option>광주</option>
                <option>기타</option>
              </select>
            </div>

            <div>
              <label className={labelClass}>레벨</label>
              <select value={level} onChange={e => setLevel(e.target.value)} className={inputClass + " bg-white"}>
                <option value="">레벨 선택</option>
                <option>초급</option>
                <option>중급</option>
                <option>고급</option>
              </select>
            </div>

            <div>
              <label className={labelClass}>동호회 <span className="text-[#9CA3AF] font-normal">(선택)</span></label>
              <input type="text" value={club} onChange={e => setClub(e.target.value)} placeholder="소속 동호회명 (없으면 비워두세요)" className={inputClass} />
            </div>

            <div className="flex items-start gap-3 pt-1">
              <input
                type="checkbox"
                id="agree"
                checked={agreed}
                onChange={e => setAgreed(e.target.checked)}
                className="mt-0.5 w-4 h-4 rounded border-[#E5E7EB] accent-[#6D28D9]"
              />
              <label htmlFor="agree" className="text-xs text-[#6B7280] leading-relaxed">
                <Link href="#" className="text-[#6D28D9] font-semibold hover:underline">개인정보처리방침</Link>에 동의합니다 (필수)
              </label>
            </div>

            <div className="flex gap-3 pt-2">
              <button
                type="button"
                onClick={() => setCurrentStep(1)}
                className="flex-1 py-3 bg-white text-[#6D28D9] font-bold rounded-xl border border-[#6D28D9] hover:bg-[#F8F7FF] transition-colors text-sm"
              >
                ← 이전
              </button>
              <button
                type="submit"
                className="flex-1 py-3 bg-[#6D28D9] text-white font-bold rounded-xl hover:bg-[#5B21B6] transition-colors text-sm"
              >
                가입 완료
              </button>
            </div>
          </form>
        )}

        <p className="text-center text-sm text-[#6B7280] mt-6">
          <Link href="/auth/signup" className="text-[#6D28D9] font-semibold hover:text-[#5B21B6]">
            ← 역할 선택으로 돌아가기
          </Link>
        </p>
      </div>
    </div>
  )
}
