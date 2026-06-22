import Link from 'next/link'

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-[#F8F7FF] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        {/* Title */}
        <div className="text-center mb-8">
          <div className="text-3xl mb-2">🏓</div>
          <h1 className="text-2xl font-bold text-[#1F2937]">피클볼 KR 로그인</h1>
          <p className="text-sm text-[#6B7280] mt-1">계정에 로그인하세요</p>
        </div>

        {/* Form */}
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-[#1F2937] mb-1.5">이메일</label>
            <input
              type="email"
              placeholder="example@email.com"
              className="w-full px-4 py-3 rounded-xl border border-[#E5E7EB] text-[#1F2937] placeholder-[#9CA3AF] text-sm focus:outline-none focus:ring-2 focus:ring-[#6D28D9] focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-[#1F2937] mb-1.5">비밀번호</label>
            <input
              type="password"
              placeholder="비밀번호를 입력하세요"
              className="w-full px-4 py-3 rounded-xl border border-[#E5E7EB] text-[#1F2937] placeholder-[#9CA3AF] text-sm focus:outline-none focus:ring-2 focus:ring-[#6D28D9] focus:border-transparent"
            />
          </div>

          <div className="flex justify-end">
            <Link href="#" className="text-xs text-[#6D28D9] hover:text-[#5B21B6] font-semibold">
              비밀번호를 잊으셨나요?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-[#6D28D9] text-white font-bold rounded-xl hover:bg-[#5B21B6] transition-colors text-sm mt-2"
          >
            로그인
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-3 my-6">
          <div className="flex-1 h-px bg-[#E5E7EB]" />
          <span className="text-xs text-[#9CA3AF] font-medium">또는</span>
          <div className="flex-1 h-px bg-[#E5E7EB]" />
        </div>

        {/* Social login */}
        <div className="space-y-3">
          <button className="w-full py-3 rounded-xl bg-[#FEE500] text-[#1F2937] font-bold text-sm hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
            <span className="text-base">💬</span>
            카카오로 로그인
          </button>
          <button className="w-full py-3 rounded-xl bg-[#03C75A] text-white font-bold text-sm hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
            <span className="text-base font-black text-white">N</span>
            네이버로 로그인
          </button>
          <button className="w-full py-3 rounded-xl bg-white border border-[#E5E7EB] text-[#1F2937] font-bold text-sm hover:bg-[#F9FAFB] transition-colors flex items-center justify-center gap-2">
            <span className="text-base">🌐</span>
            구글로 로그인
          </button>
        </div>

        {/* Sign up link */}
        <p className="text-center text-sm text-[#6B7280] mt-6">
          아직 계정이 없으신가요?{' '}
          <Link href="/auth/signup" className="text-[#6D28D9] font-semibold hover:text-[#5B21B6]">
            회원가입
          </Link>
        </p>
      </div>
    </div>
  )
}
