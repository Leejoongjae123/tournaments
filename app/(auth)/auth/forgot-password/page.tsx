import Link from 'next/link'

export default function ForgotPasswordPage() {
  return (
    <div className="min-h-screen bg-[#F8F7FF] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        {/* Back link */}
        <Link
          href="/auth/login"
          className="text-sm text-[#6D28D9] hover:text-[#5B21B6] font-semibold flex items-center gap-1 mb-6"
        >
          ← 로그인으로 돌아가기
        </Link>

        {/* Lock icon */}
        <div className="flex justify-center mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-12 h-12 text-[#6D28D9]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
            />
          </svg>
        </div>

        {/* Title & subtitle */}
        <h1 className="text-2xl font-bold text-center text-[#1F2937]">비밀번호 찾기</h1>
        <p className="text-sm text-[#6B7280] text-center mt-2 mb-8">
          가입하신 이메일로 재설정 링크를 보내드립니다.
        </p>

        {/* Step indicator */}
        <div className="flex items-center justify-center mb-8">
          {/* Step 1 — active */}
          <div className="flex items-center gap-2">
            <span className="w-7 h-7 rounded-full bg-[#6D28D9] text-white text-xs font-bold flex items-center justify-center">
              01
            </span>
            <span className="text-sm font-semibold text-[#6D28D9]">이메일 확인</span>
          </div>

          {/* Connector line */}
          <div className="w-12 h-px bg-[#E5E7EB] mx-3" />

          {/* Step 2 — inactive */}
          <div className="flex items-center gap-2">
            <span className="w-7 h-7 rounded-full bg-[#E5E7EB] text-[#9CA3AF] text-xs font-bold flex items-center justify-center">
              02
            </span>
            <span className="text-sm font-semibold text-[#9CA3AF]">비밀번호 재설정</span>
          </div>
        </div>

        {/* Form */}
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-[#1F2937] mb-1.5">이메일 주소</label>
            <input
              type="email"
              placeholder="example@email.com"
              className="w-full px-4 py-3 border border-[#E5E7EB] rounded-xl text-sm text-[#1F2937] placeholder-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#6D28D9] focus:border-transparent"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3.5 bg-[#6D28D9] text-white font-bold rounded-xl hover:bg-[#5B21B6] transition-colors text-sm"
          >
            재설정 링크 보내기
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-3 my-6">
          <div className="flex-1 h-px bg-[#E5E7EB]" />
          <span className="text-xs text-[#9CA3AF] font-medium">또는</span>
          <div className="flex-1 h-px bg-[#E5E7EB]" />
        </div>

        {/* Customer center link */}
        <p className="text-center text-sm text-[#6B7280]">
          이메일이 기억나지 않으시나요?{' '}
          <Link href="#" className="text-[#6D28D9] font-semibold hover:text-[#5B21B6]">
            고객센터 문의
          </Link>
        </p>

        {/* Info box */}
        <div className="mt-6 bg-[#EFF6FF] border border-[#BFDBFE] rounded-xl p-4">
          <p className="text-sm text-[#1E40AF] leading-relaxed">
            입력하신 이메일로 비밀번호 재설정 링크가 발송됩니다. 스팸함도 확인해 주세요.
          </p>
        </div>

        {/* Sign up link */}
        <p className="text-center text-sm text-[#6B7280] mt-6">
          계정이 없으신가요?{' '}
          <Link href="/auth/signup" className="text-[#6D28D9] font-semibold hover:text-[#5B21B6]">
            회원가입
          </Link>
        </p>
      </div>
    </div>
  )
}
