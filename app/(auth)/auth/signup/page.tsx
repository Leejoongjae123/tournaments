import Link from 'next/link'

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-[#F8F7FF] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-2xl">
        {/* Title */}
        <div className="text-center mb-10">
          <div className="text-3xl mb-3">🏓</div>
          <h1 className="text-2xl font-bold text-[#1F2937]">어떤 역할로 가입하시나요?</h1>
          <p className="text-sm text-[#6B7280] mt-2">역할에 맞는 맞춤 경험을 제공해드립니다</p>
        </div>

        {/* Role cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          {/* Player card */}
          <div className="bg-white rounded-2xl shadow-sm border border-[#E5E7EB] p-8 flex flex-col items-center text-center hover:shadow-md transition-shadow">
            <div className="text-5xl mb-4">🏃</div>
            <h2 className="text-xl font-bold text-[#1F2937] mb-2">선수로 가입</h2>
            <p className="text-sm text-[#6B7280] leading-relaxed mb-6">
              대회에 참가하고 랭킹을 쌓으세요
            </p>
            <Link
              href="/auth/signup/player"
              className="w-full py-3 bg-[#6D28D9] text-white font-bold rounded-xl hover:bg-[#5B21B6] transition-colors text-sm text-center block"
            >
              선수로 시작하기
            </Link>
          </div>

          {/* Host card */}
          <div className="bg-white rounded-2xl shadow-sm border border-[#E5E7EB] p-8 flex flex-col items-center text-center hover:shadow-md transition-shadow">
            <div className="text-5xl mb-4">🏟️</div>
            <h2 className="text-xl font-bold text-[#1F2937] mb-2">호스트로 가입</h2>
            <p className="text-sm text-[#6B7280] leading-relaxed mb-6">
              직접 대회를 개설하고 운영하세요
            </p>
            <Link
              href="/auth/signup/host"
              className="w-full py-3 bg-[#10B981] text-white font-bold rounded-xl hover:bg-[#059669] transition-colors text-sm text-center block"
            >
              호스트로 시작하기
            </Link>
          </div>
        </div>

        <p className="text-center text-sm text-[#6B7280]">
          이미 계정이 있으신가요?{' '}
          <Link href="/auth/login" className="text-[#6D28D9] font-semibold hover:text-[#5B21B6]">
            로그인
          </Link>
        </p>
      </div>
    </div>
  )
}
