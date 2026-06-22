'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function HostSignupPage() {
  const [currentStep, setCurrentStep] = useState(1)

  // Step 1
  const [managerName, setManagerName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const [phone, setPhone] = useState('')
  const [orgType, setOrgType] = useState('')
  const [region, setRegion] = useState('')

  // Step 2
  const [orgName, setOrgName] = useState('')
  const [bizNumber, setBizNumber] = useState('')
  const [ceoName, setCeoName] = useState('')
  const [address, setAddress] = useState('')
  const [postalCode, setPostalCode] = useState('')

  const inputClass = "w-full px-4 py-3 border border-[#E5E7EB] rounded-xl text-sm text-[#1F2937] placeholder-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#6D28D9] focus:border-transparent"
  const labelClass = "block text-sm font-semibold text-[#1F2937] mb-1.5"

  const isStep1Complete = currentStep > 1

  return (
    <div className="min-h-screen bg-[#F8F7FF] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-lg p-8">
        <Link
          href="/auth/signup"
          className="text-sm text-[#6D28D9] hover:text-[#5B21B6] font-semibold flex items-center gap-1 mb-6"
        >
          ← 가입 유형 선택
        </Link>

        {/* Step indicator */}
        <div className="flex items-center justify-center mb-6">
          <div className="flex items-center gap-2">
            <span className={`w-7 h-7 rounded-full text-white text-xs font-bold flex items-center justify-center ${isStep1Complete ? 'bg-[#059669]' : 'bg-[#059669]'}`}>
              {isStep1Complete ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-3.5 h-3.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
              ) : '01'}
            </span>
            <span className="text-sm font-semibold text-[#059669]">기본정보</span>
          </div>

          <div className={`w-12 h-px mx-3 ${isStep1Complete ? 'bg-[#059669]' : 'bg-[#E5E7EB]'}`} />

          <div className="flex items-center gap-2">
            <span className={`w-7 h-7 rounded-full text-xs font-bold flex items-center justify-center ${currentStep === 2 ? 'bg-[#059669] text-white' : 'bg-[#E5E7EB] text-[#9CA3AF]'}`}>
              02
            </span>
            <span className={`text-sm font-semibold ${currentStep === 2 ? 'text-[#059669]' : 'text-[#9CA3AF]'}`}>사업자 정보</span>
          </div>
        </div>

        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-[#1F2937] mb-3">호스트로 가입하기</h1>
          <span className="inline-block bg-[#D1FAE5] text-[#059669] text-sm font-bold px-4 py-1.5 rounded-full">
            🏟️ 호스트
          </span>
        </div>

        {/* Step 1: 기본정보 */}
        {currentStep === 1 && (
          <form className="space-y-4" onSubmit={e => { e.preventDefault(); setCurrentStep(2) }}>
            <div>
              <label className={labelClass}>담당자명</label>
              <input type="text" value={managerName} onChange={e => setManagerName(e.target.value)} placeholder="담당자 이름을 입력하세요" className={inputClass} />
            </div>

            <div>
              <label className={labelClass}>이메일</label>
              <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="example@email.com" className={inputClass} />
            </div>

            <div>
              <label className={labelClass}>비밀번호</label>
              <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="비밀번호를 입력하세요" className={inputClass} />
            </div>

            <div>
              <label className={labelClass}>비밀번호 확인</label>
              <input type="password" value={passwordConfirm} onChange={e => setPasswordConfirm(e.target.value)} placeholder="비밀번호를 다시 입력하세요" className={inputClass} />
            </div>

            <div>
              <label className={labelClass}>휴대폰 번호</label>
              <input type="tel" value={phone} onChange={e => setPhone(e.target.value)} placeholder="010-0000-0000" className={inputClass} />
            </div>

            <div>
              <label className={labelClass}>단체 유형</label>
              <select value={orgType} onChange={e => setOrgType(e.target.value)} className={inputClass + " bg-white"}>
                <option value="">단체 유형을 선택하세요</option>
                <option value="individual">개인</option>
                <option value="club">동호회</option>
                <option value="sports-center">스포츠센터</option>
                <option value="corporation">기업</option>
                <option value="government">지자체/협회</option>
              </select>
            </div>

            <div>
              <label className={labelClass}>지역</label>
              <select value={region} onChange={e => setRegion(e.target.value)} className={inputClass + " bg-white"}>
                <option value="">지역을 선택하세요</option>
                <option value="seoul">서울</option>
                <option value="gyeonggi">경기</option>
                <option value="busan">부산</option>
                <option value="incheon">인천</option>
                <option value="daegu">대구</option>
                <option value="gwangju">광주</option>
                <option value="other">기타</option>
              </select>
            </div>

            <div className="bg-[#D1FAE5] border border-[#6EE7B7] rounded-xl p-4">
              <p className="text-sm text-[#065F46] leading-relaxed">
                호스트는 대회 개설 및 운영 권한을 갖습니다. 사업자 정보는 다음 단계에서 입력합니다.
              </p>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-[#059669] text-white font-bold rounded-xl hover:bg-[#047857] transition-colors text-sm"
            >
              다음 단계 →
            </button>
          </form>
        )}

        {/* Step 2: 사업자 정보 */}
        {currentStep === 2 && (
          <form className="space-y-4" onSubmit={e => { e.preventDefault(); window.location.href = '/auth/login' }}>
            <div>
              <label className={labelClass}>단체명</label>
              <input type="text" value={orgName} onChange={e => setOrgName(e.target.value)} placeholder="단체명을 입력하세요" className={inputClass} />
            </div>

            <div>
              <label className={labelClass}>사업자등록번호</label>
              <input type="text" value={bizNumber} onChange={e => setBizNumber(e.target.value)} placeholder="000-00-00000" className={inputClass} />
            </div>

            <div>
              <label className={labelClass}>대표자명</label>
              <input type="text" value={ceoName} onChange={e => setCeoName(e.target.value)} placeholder="대표자 이름을 입력하세요" className={inputClass} />
            </div>

            <div>
              <label className={labelClass}>주소</label>
              <input type="text" value={address} onChange={e => setAddress(e.target.value)} placeholder="주소를 입력하세요" className={inputClass} />
            </div>

            <div>
              <label className={labelClass}>우편번호</label>
              <input type="text" value={postalCode} onChange={e => setPostalCode(e.target.value)} placeholder="우편번호" className={inputClass} />
            </div>

            <div className="flex gap-3 pt-2">
              <button
                type="button"
                onClick={() => setCurrentStep(1)}
                className="flex-1 py-3 bg-white text-[#059669] font-bold rounded-xl border border-[#059669] hover:bg-[#F0FDF4] transition-colors text-sm"
              >
                ← 이전
              </button>
              <button
                type="submit"
                className="flex-1 py-3 bg-[#059669] text-white font-bold rounded-xl hover:bg-[#047857] transition-colors text-sm"
              >
                가입 완료
              </button>
            </div>
          </form>
        )}

        <p className="text-center text-sm text-[#6B7280] mt-8">
          이미 계정이 있으신가요?{' '}
          <Link href="/auth/login" className="text-[#6D28D9] font-semibold hover:text-[#5B21B6]">
            로그인
          </Link>
        </p>
      </div>
    </div>
  )
}
