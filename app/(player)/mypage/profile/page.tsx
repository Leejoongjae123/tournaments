'use client'

import Link from 'next/link'

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-[#F8F7FF]">
      {/* Top breadcrumb/header */}
      <div className="bg-white border-b border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center gap-4">
          <Link href="/mypage" className="text-sm text-[#6B7280] hover:text-[#1F2937] transition-colors">
            ← 마이페이지
          </Link>
          <h1 className="text-2xl font-bold text-[#1F2937]">프로필 수정</h1>
        </div>
      </div>

      {/* Content area — max-w-2xl centered */}
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">

        {/* Avatar section */}
        <div className="bg-white rounded-2xl border border-[#E5E7EB] shadow-sm p-8 text-center">
          <div className="w-24 h-24 rounded-full bg-[#EDE9FE] flex items-center justify-center text-3xl font-black text-[#6D28D9] mx-auto mb-4">
            김
          </div>
          <button className="px-4 py-1.5 rounded-lg border border-[#6D28D9] text-[#6D28D9] text-sm font-semibold hover:bg-[#EDE9FE] transition-colors mb-3">
            사진 변경
          </button>
          <div className="text-[#1F2937] font-semibold">김민준</div>
        </div>

        {/* 기본 정보 */}
        <div className="bg-white rounded-2xl border border-[#E5E7EB] shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-[#E5E7EB]">
            <h2 className="font-bold text-[#1F2937]">기본 정보</h2>
          </div>
          <div className="px-6 py-5 space-y-4">
            <div>
              <label className="block text-sm font-semibold text-[#1F2937] mb-1.5">이름</label>
              <input
                type="text"
                defaultValue="김민준"
                className="w-full rounded-xl border border-[#E5E7EB] px-4 py-2.5 text-sm text-[#1F2937] focus:outline-none focus:ring-2 focus:ring-[#6D28D9] focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#1F2937] mb-1.5">이메일</label>
              <input
                type="email"
                defaultValue="kiminjun@email.com"
                readOnly
                className="w-full rounded-xl border border-[#E5E7EB] px-4 py-2.5 text-sm text-[#6B7280] bg-[#F3F4F6] cursor-not-allowed"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#1F2937] mb-1.5">휴대폰</label>
              <input
                type="tel"
                defaultValue="010-1234-5678"
                className="w-full rounded-xl border border-[#E5E7EB] px-4 py-2.5 text-sm text-[#1F2937] focus:outline-none focus:ring-2 focus:ring-[#6D28D9] focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#1F2937] mb-1.5">생년월일</label>
              <input
                type="date"
                defaultValue="1990-05-15"
                className="w-full rounded-xl border border-[#E5E7EB] px-4 py-2.5 text-sm text-[#1F2937] focus:outline-none focus:ring-2 focus:ring-[#6D28D9] focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#1F2937] mb-1.5">성별</label>
              <select className="w-full rounded-xl border border-[#E5E7EB] px-4 py-2.5 text-sm text-[#1F2937] focus:outline-none focus:ring-2 focus:ring-[#6D28D9] focus:border-transparent bg-white">
                <option value="male">남성</option>
                <option value="female">여성</option>
                <option value="none">선택안함</option>
              </select>
            </div>
          </div>
        </div>

        {/* 피클볼 정보 */}
        <div className="bg-white rounded-2xl border border-[#E5E7EB] shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-[#E5E7EB]">
            <h2 className="font-bold text-[#1F2937]">피클볼 정보</h2>
          </div>
          <div className="px-6 py-5 space-y-4">
            <div>
              <label className="block text-sm font-semibold text-[#1F2937] mb-1.5">지역</label>
              <select defaultValue="서울" className="w-full rounded-xl border border-[#E5E7EB] px-4 py-2.5 text-sm text-[#1F2937] focus:outline-none focus:ring-2 focus:ring-[#6D28D9] focus:border-transparent bg-white">
                <option>서울</option>
                <option>경기</option>
                <option>인천</option>
                <option>부산</option>
                <option>대구</option>
                <option>광주</option>
                <option>대전</option>
                <option>울산</option>
                <option>세종</option>
                <option>강원</option>
                <option>충북</option>
                <option>충남</option>
                <option>전북</option>
                <option>전남</option>
                <option>경북</option>
                <option>경남</option>
                <option>제주</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#1F2937] mb-1.5">레벨</label>
              <select defaultValue="고급" className="w-full rounded-xl border border-[#E5E7EB] px-4 py-2.5 text-sm text-[#1F2937] focus:outline-none focus:ring-2 focus:ring-[#6D28D9] focus:border-transparent bg-white">
                <option>초급</option>
                <option>중급</option>
                <option>고급</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#1F2937] mb-1.5">
                DUPR 레이팅
                <span className="ml-2 text-xs font-normal text-[#6B7280]" title="DUPR 레이팅은 대회 결과에 따라 자동 산정됩니다">
                  ⓘ DUPR 레이팅은 대회 결과에 따라 자동 산정됩니다
                </span>
              </label>
              <input
                type="number"
                defaultValue="4.8"
                step="0.1"
                readOnly
                className="w-full rounded-xl border border-[#E5E7EB] px-4 py-2.5 text-sm text-[#6B7280] bg-[#F3F4F6] cursor-not-allowed"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#1F2937] mb-1.5">소속 동호회</label>
              <div className="flex items-center gap-3">
                <span className="flex-1 rounded-xl border border-[#E5E7EB] px-4 py-2.5 text-sm text-[#1F2937] bg-white">
                  서울 피클볼 클럽
                </span>
                <Link href="#" className="text-sm font-semibold text-[#6D28D9] hover:text-[#5B21B6] transition-colors shrink-0">
                  변경
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* 알림 설정 */}
        <div className="bg-white rounded-2xl border border-[#E5E7EB] shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-[#E5E7EB]">
            <h2 className="font-bold text-[#1F2937]">알림 설정</h2>
          </div>
          <div className="px-6 py-5 space-y-4">
            {[
              { label: '다음 경기 배정 알림톡', defaultChecked: true },
              { label: '대회 신청 결과 알림', defaultChecked: true },
              { label: '랭킹 변동 알림', defaultChecked: true },
              { label: '마케팅 정보 수신', defaultChecked: false },
            ].map((item) => (
              <label key={item.label} className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  defaultChecked={item.defaultChecked}
                  className="w-5 h-5 rounded accent-[#6D28D9] cursor-pointer"
                />
                <span className="text-sm text-[#1F2937]">{item.label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* 저장하기 */}
        <button
          onClick={() => alert('프로필이 저장되었습니다.')}
          className="w-full py-3 rounded-xl bg-[#6D28D9] hover:bg-[#5B21B6] text-white font-bold text-base transition-colors"
        >
          저장하기
        </button>
      </div>
    </div>
  )
}
