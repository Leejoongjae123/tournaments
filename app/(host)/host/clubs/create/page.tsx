'use client'

import { useState } from 'react'
import Link from 'next/link'

const emojis = ['🏓', '⚡', '🌊', '🔥', '⭐', '🏆', '🎯', '🦋']
const regions = ['서울', '경기', '부산', '인천', '대구', '광주', '기타']
const levels = ['초급', '중급', '고급', '오픈(전체)']
const days = ['월', '화', '수', '목', '금', '토', '일']

export default function CreateClubPage() {
  const [selectedEmoji, setSelectedEmoji] = useState('🏓')
  const [selectedDays, setSelectedDays] = useState<string[]>(['토', '일'])
  const [joinType, setJoinType] = useState<'자유' | '승인'>('승인')
  const [isPublic, setIsPublic] = useState(true)

  const toggleDay = (day: string) => {
    setSelectedDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    )
  }

  return (
    <div className="min-h-screen bg-[#F8F7FF]">
      {/* Page header */}
      <div className="bg-white border-b border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link
            href="/clubs"
            className="text-sm text-[#6B7280] hover:text-[#10B981] transition-colors font-semibold inline-flex items-center gap-1 mb-3"
          >
            ← 동호회 목록
          </Link>
          <h1 className="text-2xl font-bold text-[#1F2937]">동호회 개설</h1>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Step indicator */}
        <div className="flex items-center gap-3 mb-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#10B981] flex items-center justify-center text-white text-sm font-bold">
              1
            </div>
            <span className="text-sm font-bold text-[#10B981]">기본 정보</span>
          </div>
          <div className="flex-1 h-px bg-[#E5E7EB]" />
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#E5E7EB] flex items-center justify-center text-[#9CA3AF] text-sm font-bold">
              2
            </div>
            <span className="text-sm font-semibold text-[#9CA3AF]">설정 완료</span>
          </div>
        </div>

        {/* Form card */}
        <div className="bg-white rounded-2xl border border-[#E5E7EB] shadow-sm p-8 space-y-6">

          {/* Section: 동호회 기본 정보 */}
          <div>
            <h2 className="font-bold text-[#1F2937] text-base mb-4 pb-2 border-b border-[#E5E7EB]">
              동호회 기본 정보
            </h2>
            <div className="space-y-5">

              {/* 동호회명 */}
              <div>
                <label className="block text-sm font-semibold text-[#1F2937] mb-1.5">
                  동호회명 <span className="text-[#EF4444]">*</span>
                </label>
                <input
                  type="text"
                  placeholder="예: 서울 피클볼 클럽"
                  className="w-full px-4 py-3 rounded-xl border border-[#E5E7EB] text-[#1F2937] placeholder-[#9CA3AF] text-sm focus:outline-none focus:ring-2 focus:ring-[#10B981] focus:border-transparent"
                />
              </div>

              {/* 대표 이모지 */}
              <div>
                <label className="block text-sm font-semibold text-[#1F2937] mb-2">
                  대표 이모지
                </label>
                <div className="flex gap-2 flex-wrap">
                  {emojis.map((emoji) => (
                    <button
                      key={emoji}
                      type="button"
                      onClick={() => setSelectedEmoji(emoji)}
                      className={`w-11 h-11 rounded-xl text-xl flex items-center justify-center border-2 transition-all hover:border-[#10B981] ${
                        selectedEmoji === emoji
                          ? 'border-[#10B981] ring-2 ring-[#10B981]/30 bg-[#ECFDF5] scale-110'
                          : 'border-[#E5E7EB] bg-[#F8F7FF]'
                      }`}
                    >
                      {emoji}
                    </button>
                  ))}
                </div>
              </div>

              {/* 활동 지역 */}
              <div>
                <label className="block text-sm font-semibold text-[#1F2937] mb-1.5">
                  활동 지역 <span className="text-[#EF4444]">*</span>
                </label>
                <select className="w-full px-4 py-3 rounded-xl border border-[#E5E7EB] text-[#1F2937] text-sm focus:outline-none focus:ring-2 focus:ring-[#10B981] focus:border-transparent bg-white">
                  <option value="">선택하세요</option>
                  {regions.map((r) => (
                    <option key={r}>{r}</option>
                  ))}
                </select>
              </div>

              {/* 동호회 소개 */}
              <div>
                <label className="block text-sm font-semibold text-[#1F2937] mb-1.5">
                  동호회 소개
                </label>
                <textarea
                  rows={4}
                  placeholder="동호회를 소개해주세요..."
                  className="w-full px-4 py-3 rounded-xl border border-[#E5E7EB] text-[#1F2937] placeholder-[#9CA3AF] text-sm focus:outline-none focus:ring-2 focus:ring-[#10B981] focus:border-transparent resize-none"
                />
              </div>

              {/* 모집 레벨 */}
              <div>
                <label className="block text-sm font-semibold text-[#1F2937] mb-2">
                  모집 레벨
                </label>
                <div className="flex flex-wrap gap-4">
                  {levels.map((lv, i) => (
                    <label key={lv} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        defaultChecked={i < 2}
                        className="w-4 h-4 rounded border-[#E5E7EB] text-[#10B981] accent-[#10B981] cursor-pointer"
                      />
                      <span className="text-sm text-[#1F2937]">{lv}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Section: 정기 모임 정보 */}
          <div>
            <h2 className="font-bold text-[#1F2937] text-base mb-4 pb-2 border-b border-[#E5E7EB]">
              정기 모임 정보
            </h2>
            <div className="space-y-5">

              {/* 모임 요일 */}
              <div>
                <label className="block text-sm font-semibold text-[#1F2937] mb-2">
                  모임 요일
                </label>
                <div className="flex gap-2 flex-wrap">
                  {days.map((day) => {
                    const isActive = selectedDays.includes(day)
                    return (
                      <button
                        key={day}
                        type="button"
                        onClick={() => toggleDay(day)}
                        className={`w-10 h-10 rounded-xl text-sm font-bold border-2 transition-all ${
                          isActive
                            ? 'border-[#10B981] bg-[#ECFDF5] text-[#10B981]'
                            : 'border-[#E5E7EB] text-[#6B7280] bg-white hover:border-[#10B981] hover:text-[#10B981]'
                        }`}
                      >
                        {day}
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* 모임 시간 */}
              <div>
                <label className="block text-sm font-semibold text-[#1F2937] mb-1.5">
                  모임 시간
                </label>
                <input
                  type="time"
                  defaultValue="09:00"
                  className="px-4 py-3 rounded-xl border border-[#E5E7EB] text-[#1F2937] text-sm focus:outline-none focus:ring-2 focus:ring-[#10B981] focus:border-transparent"
                />
              </div>

              {/* 활동 장소 */}
              <div>
                <label className="block text-sm font-semibold text-[#1F2937] mb-1.5">
                  활동 장소
                </label>
                <input
                  type="text"
                  placeholder="예: 강남 스포츠센터"
                  className="w-full px-4 py-3 rounded-xl border border-[#E5E7EB] text-[#1F2937] placeholder-[#9CA3AF] text-sm focus:outline-none focus:ring-2 focus:ring-[#10B981] focus:border-transparent"
                />
              </div>
            </div>
          </div>

          {/* Section: 가입 설정 */}
          <div>
            <h2 className="font-bold text-[#1F2937] text-base mb-4 pb-2 border-b border-[#E5E7EB]">
              가입 설정
            </h2>
            <div className="space-y-5">

              {/* 가입 방식 */}
              <div>
                <label className="block text-sm font-semibold text-[#1F2937] mb-2">
                  가입 방식
                </label>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="joinType"
                      checked={joinType === '자유'}
                      onChange={() => setJoinType('자유')}
                      className="w-4 h-4 accent-[#10B981] cursor-pointer"
                    />
                    <span className="text-sm text-[#1F2937]">자유 가입</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="joinType"
                      checked={joinType === '승인'}
                      onChange={() => setJoinType('승인')}
                      className="w-4 h-4 accent-[#10B981] cursor-pointer"
                    />
                    <span className="text-sm text-[#1F2937]">승인 후 가입</span>
                  </label>
                </div>
              </div>

              {/* 공개 여부 */}
              <div>
                <label className="block text-sm font-semibold text-[#1F2937] mb-2">
                  공개 여부
                </label>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="visibility"
                      checked={isPublic === true}
                      onChange={() => setIsPublic(true)}
                      className="w-4 h-4 accent-[#10B981] cursor-pointer"
                    />
                    <span className="text-sm text-[#1F2937]">공개</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="visibility"
                      checked={isPublic === false}
                      onChange={() => setIsPublic(false)}
                      className="w-4 h-4 accent-[#10B981] cursor-pointer"
                    />
                    <span className="text-sm text-[#1F2937]">비공개</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Section: 대표 이미지 */}
          <div>
            <h2 className="font-bold text-[#1F2937] text-base mb-4 pb-2 border-b border-[#E5E7EB]">
              대표 이미지 <span className="text-xs font-normal text-[#9CA3AF]">(선택)</span>
            </h2>
            <div className="border-2 border-dashed border-[#E5E7EB] rounded-xl h-32 flex flex-col items-center justify-center gap-2 hover:border-[#10B981] transition-colors cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-[#9CA3AF]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
              </svg>
              <span className="text-sm text-[#9CA3AF] font-medium">클릭하거나 드래그하여 이미지 업로드</span>
            </div>
          </div>
        </div>

        {/* Submit button */}
        <div className="mt-6 space-y-3">
          <button
            onClick={() => alert('동호회가 개설되었습니다!')}
            className="w-full py-4 bg-[#059669] text-white font-bold rounded-xl hover:bg-[#047857] transition-colors text-base"
          >
            동호회 개설하기
          </button>
          <p className="text-center text-xs text-[#9CA3AF]">
            개설 후 동호회 페이지가 즉시 공개됩니다. 언제든지 수정 가능합니다.
          </p>
        </div>
      </div>
    </div>
  )
}
