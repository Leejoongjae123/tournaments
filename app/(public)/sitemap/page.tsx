import Link from 'next/link'

interface PageItem {
  url: string
  label: string
  desc: string
  status: 'built' | 'planned' | 'wip'
}

interface RoleColumn {
  role: string
  roleEn: string
  icon: string
  accentColor: string       // Tailwind inline hex for text
  bgColor: string           // card header bg
  borderColor: string       // column border
  badgeBg: string
  badgeText: string
  pages: PageItem[]
}

const columns: RoleColumn[] = [
  {
    role: '공통',
    roleEn: 'Public',
    icon: '🌐',
    accentColor: '#6B7280',
    bgColor: '#F9FAFB',
    borderColor: '#E5E7EB',
    badgeBg: '#F3F4F6',
    badgeText: '#374151',
    pages: [
      { url: '/', label: '홈 / 랜딩', desc: '히어로, 주요 대회, 카테고리', status: 'built' },
      { url: '/tournaments', label: '대회 목록', desc: '검색·필터, 대회 카드 그리드', status: 'built' },
      { url: '/tournaments/[id]', label: '대회 상세', desc: '대회 정보·규정·일정', status: 'built' },
      { url: '/bracket', label: '대진표 조회', desc: '라운드별 브래킷 시각화', status: 'built' },
      { url: '/ranking', label: '전국 랭킹', desc: 'DUPR 기반 순위 테이블', status: 'built' },
      { url: '/clubs', label: '동호회 목록', desc: '지역별 동호회 탐색', status: 'built' },
      { url: '/clubs/[id]', label: '동호회 상세', desc: '회원·활동 내역·가입 신청', status: 'built' },
      { url: '/sitemap', label: '사이트맵', desc: '전체 페이지 구조', status: 'built' },
    ],
  },
  {
    role: '인증',
    roleEn: 'Auth',
    icon: '🔐',
    accentColor: '#1D4ED8',
    bgColor: '#EFF6FF',
    borderColor: '#BFDBFE',
    badgeBg: '#DBEAFE',
    badgeText: '#1E40AF',
    pages: [
      { url: '/auth/login', label: '로그인', desc: '이메일·소셜(카카오·네이버·구글)', status: 'built' },
      { url: '/auth/signup', label: '가입 유형 선택', desc: '선수 또는 호스트 선택', status: 'built' },
      { url: '/auth/signup/player', label: '선수 회원가입', desc: '이름·지역·레벨 입력', status: 'built' },
      { url: '/auth/signup/host', label: '호스트 회원가입', desc: '단체명·사업자 정보', status: 'built' },
      { url: '/auth/forgot-password', label: '비밀번호 찾기', desc: '이메일 인증 재설정', status: 'built' },
    ],
  },
  {
    role: '선수',
    roleEn: 'Player',
    icon: '🏃',
    accentColor: '#6D28D9',
    bgColor: '#F5F3FF',
    borderColor: '#DDD6FE',
    badgeBg: '#EDE9FE',
    badgeText: '#5B21B6',
    pages: [
      { url: '/mypage', label: '마이페이지', desc: 'DUPR·다음 경기·성적 요약', status: 'built' },
      { url: '/mypage/profile', label: '프로필 수정', desc: '개인정보·알림 설정', status: 'built' },
      { url: '/mypage/tournaments', label: '참가 내역', desc: '신청·진행중·종료 대회', status: 'built' },
      { url: '/mypage/payments', label: '결제 내역', desc: '참가비 결제·환불 조회', status: 'built' },
      { url: '/mypage/matches', label: '내 경기 일정', desc: '대회별 경기 타임라인', status: 'built' },
      { url: '/tournaments/[id]/apply', label: '대회 참가 신청', desc: '종목 선택·파트너·동의', status: 'built' },
      { url: '/tournaments/[id]/payment', label: '참가비 결제', desc: '카카오페이·토스·신용카드', status: 'built' },
      { url: '/matches/[id]/result', label: '경기 결과 입력', desc: '점수 입력 → 호스트 승인', status: 'planned' },
    ],
  },
  {
    role: '호스트',
    roleEn: 'Host',
    icon: '🏟️',
    accentColor: '#047857',
    bgColor: '#ECFDF5',
    borderColor: '#A7F3D0',
    badgeBg: '#D1FAE5',
    badgeText: '#065F46',
    pages: [
      { url: '/host', label: '호스트 대시보드', desc: '대회 현황·미승인 결과·알림', status: 'built' },
      { url: '/host/tournaments', label: '내 대회 목록', desc: '개설 대회 관리·통계', status: 'built' },
      { url: '/host/tournaments/create', label: '대회 개설', desc: '기본정보·일정·참가 설정', status: 'built' },
      { url: '/host/tournaments/[id]/participants', label: '참가자 관리', desc: '결제 확인·승인·거절', status: 'built' },
      { url: '/host/tournaments/[id]/bracket', label: '대진표 관리', desc: '자동 생성·수동 수정·알림톡', status: 'built' },
      { url: '/host/tournaments/[id]/results', label: '경기 결과 승인', desc: '선수 입력 결과 검토·승인', status: 'built' },
      { url: '/host/clubs/create', label: '동호회 개설', desc: '동호회 소개·모임 설정', status: 'built' },
      { url: '/host/tournaments/[id]/edit', label: '대회 수정', desc: '개설 후 정보 수정', status: 'planned' },
    ],
  },
  {
    role: '관리자',
    roleEn: 'Admin',
    icon: '⚙️',
    accentColor: '#B45309',
    bgColor: '#FFFBEB',
    borderColor: '#FDE68A',
    badgeBg: '#FEF3C7',
    badgeText: '#92400E',
    pages: [
      { url: '/admin', label: '관리자 대시보드', desc: '플랫폼 전체 지표·현황', status: 'planned' },
      { url: '/admin/users', label: '회원 관리', desc: '전체 회원·권한·정지 처리', status: 'planned' },
      { url: '/admin/tournaments', label: '대회 전체 관리', desc: '모든 대회 모니터링', status: 'planned' },
      { url: '/admin/payments', label: '결제/정산 관리', desc: 'PG사 내역·환불·수수료', status: 'planned' },
      { url: '/admin/notifications', label: '알림톡 관리', desc: '발송 내역·템플릿 관리', status: 'planned' },
      { url: '/admin/rankings', label: '랭킹 관리', desc: '포인트 기준·시즌 리셋', status: 'planned' },
    ],
  },
]

const totalPages = columns.reduce((sum, c) => sum + c.pages.length, 0)
const builtCount = columns.reduce((sum, c) => sum + c.pages.filter(p => p.status === 'built').length, 0)

function StatusDot({ status }: { status: PageItem['status'] }) {
  if (status === 'built') return <span className="w-2 h-2 rounded-full bg-[#10B981] inline-block shrink-0" title="구현 완료" />
  if (status === 'wip') return <span className="w-2 h-2 rounded-full bg-[#F59E0B] inline-block shrink-0" title="작업중" />
  return <span className="w-2 h-2 rounded-full bg-[#D1D5DB] inline-block shrink-0" title="계획중" />
}

function StatusBadge({ status }: { status: PageItem['status'] }) {
  if (status === 'built') return (
    <span className="text-[9px] font-bold text-[#10B981] bg-[#D1FAE5] px-1.5 py-0.5 rounded-full shrink-0">DEMO</span>
  )
  if (status === 'wip') return (
    <span className="text-[9px] font-bold text-[#D97706] bg-[#FEF3C7] px-1.5 py-0.5 rounded-full shrink-0">WIP</span>
  )
  return null
}

export default function SitemapPage() {
  return (
    <div className="min-h-screen bg-[#F8F7FF]">
      {/* Page header */}
      <div className="bg-white border-b border-[#E5E7EB]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="inline-block text-xs font-semibold text-[#6D28D9] bg-[#EDE9FE] px-3 py-1 rounded-full mb-2">
                사이트맵
              </span>
              <h1 className="text-2xl font-bold text-[#1F2937]">역할별 페이지 구성</h1>
              <p className="text-[#6B7280] text-sm mt-1">
                5개 역할 · {totalPages}개 페이지 · MVP 구현 {builtCount}개 완료
              </p>
            </div>
            {/* Progress */}
            <div className="flex items-center gap-4">
              <div className="flex gap-3 text-xs text-[#6B7280]">
                <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-[#10B981] inline-block" /> 구현완료</span>
                <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-[#F59E0B] inline-block" /> 작업중</span>
                <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-[#D1D5DB] inline-block" /> 계획중</span>
              </div>
              <div className="text-right">
                <div className="text-2xl font-black text-[#6D28D9]">{Math.round((builtCount / totalPages) * 100)}%</div>
                <div className="text-xs text-[#6B7280]">완료율</div>
              </div>
            </div>
          </div>
          {/* Global progress bar */}
          <div className="mt-4 h-1.5 bg-[#E5E7EB] rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#6D28D9] to-[#7C3AED] rounded-full"
              style={{ width: `${(builtCount / totalPages) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Route group plan banner */}
      <div className="bg-[#1F2937] text-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center gap-3 text-sm overflow-x-auto whitespace-nowrap">
            <span className="text-[#9CA3AF] font-mono text-xs shrink-0">라우트 그룹:</span>
            {[
              { group: '(public)', label: '공통', color: '#9CA3AF' },
              { group: '(auth)', label: '인증', color: '#60A5FA' },
              { group: '(player)', label: '선수', color: '#A78BFA' },
              { group: '(host)', label: '호스트', color: '#34D399' },
              { group: '(admin)', label: '관리자', color: '#FBB924' },
            ].map((g, i) => (
              <span key={g.group} className="flex items-center gap-2 shrink-0">
                {i > 0 && <span className="text-[#4B5563]">·</span>}
                <code className="text-xs font-mono" style={{ color: g.color }}>app/{g.group}/</code>
                <span className="text-[#6B7280] text-xs">{g.label}</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Columns layout */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Horizontal columns — overflow-x-auto on mobile */}
        <div className="overflow-x-auto pb-4">
          <div className="flex gap-4 min-w-max lg:min-w-0 lg:grid lg:grid-cols-5">
            {columns.map((col) => {
              const built = col.pages.filter(p => p.status === 'built').length
              return (
                <div
                  key={col.role}
                  className="w-64 lg:w-auto flex-shrink-0 rounded-2xl border overflow-hidden"
                  style={{ borderColor: col.borderColor }}
                >
                  {/* Column header */}
                  <div
                    className="px-4 py-4 border-b"
                    style={{ backgroundColor: col.bgColor, borderColor: col.borderColor }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-xl">{col.icon}</span>
                        <div>
                          <div className="font-bold text-sm" style={{ color: col.accentColor }}>
                            {col.role}
                          </div>
                          <div className="text-[10px] text-[#9CA3AF]">{col.roleEn}</div>
                        </div>
                      </div>
                      <span
                        className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                        style={{ backgroundColor: col.badgeBg, color: col.badgeText }}
                      >
                        {built}/{col.pages.length}
                      </span>
                    </div>
                    {/* Column progress bar */}
                    <div className="h-1 bg-white/60 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all"
                        style={{
                          width: `${(built / col.pages.length) * 100}%`,
                          backgroundColor: col.accentColor,
                        }}
                      />
                    </div>
                    {/* Route group label */}
                    <div className="mt-2">
                      <code
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/50"
                        style={{ color: col.accentColor }}
                      >
                        app/({col.roleEn.toLowerCase()})/
                      </code>
                    </div>
                  </div>

                  {/* Pages list */}
                  <div className="bg-white divide-y divide-[#F3F4F6]">
                    {col.pages.map((page, idx) => (
                      <div key={idx} className="px-3.5 py-3 hover:bg-[#FAFAFA] transition-colors">
                        <div className="flex items-start gap-2">
                          <StatusDot status={page.status} />
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-1.5 flex-wrap">
                              <span className="text-xs font-semibold text-[#1F2937] leading-tight">
                                {page.label}
                              </span>
                              <StatusBadge status={page.status} />
                            </div>
                            <div className="text-[10px] text-[#9CA3AF] mt-0.5 leading-tight">
                              {page.desc}
                            </div>
                            {page.status === 'built' ? (
                              <Link
                                href={page.url.includes('[') ? page.url.replace('[id]', '1') : page.url}
                                className="text-[10px] font-mono mt-0.5 block truncate hover:underline"
                                style={{ color: col.accentColor }}
                              >
                                {page.url}
                              </Link>
                            ) : (
                              <span className="text-[10px] font-mono text-[#D1D5DB] mt-0.5 block truncate">
                                {page.url}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Tech stack + info row */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Tech stack */}
          <div className="bg-white rounded-2xl border border-[#E5E7EB] p-5 shadow-sm">
            <h3 className="font-bold text-[#1F2937] mb-3 flex items-center gap-2 text-sm">
              <span>🛠</span> 기술 스택
            </h3>
            <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-xs">
              {[
                { label: 'Frontend', value: 'Next.js 16 + TypeScript' },
                { label: 'Styling', value: 'Tailwind CSS v4' },
                { label: 'Backend', value: 'Next.js API Routes' },
                { label: 'Database', value: 'PostgreSQL + Prisma' },
                { label: '결제', value: '토스페이먼츠 PG' },
                { label: '알림', value: '카카오 알림톡 API' },
                { label: '인증', value: 'NextAuth.js + 소셜' },
                { label: 'Infra', value: 'AWS (EC2·RDS·S3)' },
              ].map((t) => (
                <div key={t.label} className="flex justify-between gap-2">
                  <span className="text-[#9CA3AF]">{t.label}</span>
                  <span className="font-semibold text-[#1F2937]">{t.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Route group plan */}
          <div className="bg-[#1F2937] rounded-2xl p-5 shadow-sm">
            <h3 className="font-bold text-white mb-3 flex items-center gap-2 text-sm">
              <span>📁</span> 라우트 그룹 구조
            </h3>
            <pre className="text-[11px] font-mono text-[#9CA3AF] leading-relaxed overflow-x-auto">
{`app/
├─ (public)/         # 공통 (비회원)
│   ├─ page.tsx      # /
│   ├─ tournaments/
│   ├─ bracket/
│   ├─ ranking/
│   └─ clubs/
├─ (auth)/           # 인증
│   └─ auth/
│       ├─ login/
│       └─ signup/
├─ (player)/         # 선수 전용
│   ├─ mypage/
│   └─ matches/
├─ (host)/           # 호스트 전용
│   └─ host/
└─ (admin)/          # 관리자 전용
    └─ admin/`}
            </pre>
          </div>
        </div>

        <p className="text-center text-xs text-[#9CA3AF] mt-6 pb-4">
          피클볼 KR · 역할 기반 사이트맵 · 2025
        </p>
      </div>
    </div>
  )
}
