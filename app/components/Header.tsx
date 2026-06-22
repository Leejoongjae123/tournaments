'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { href: '/', label: '홈', exact: true },
  { href: '/tournaments', label: '대회찾기', exact: false },
  { href: '/bracket', label: '대진표', exact: false },
  { href: '/ranking', label: '랭킹', exact: false },
  { href: '/mypage', label: '마이페이지', exact: false },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (href: string, exact: boolean) =>
    exact ? pathname === href : pathname.startsWith(href)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 text-xl font-bold text-[#6D28D9]">
            🏓 피클볼 KR
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const active = isActive(link.href, link.exact)
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-medium transition-colors pb-0.5 ${
                    active
                      ? 'text-[#6D28D9] border-b-2 border-[#6D28D9]'
                      : 'text-[#1F2937] hover:text-[#6D28D9]'
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>

          {/* Auth buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link href="/auth/login" className="px-4 py-2 rounded-lg border border-[#6D28D9] text-[#6D28D9] font-semibold hover:bg-[#EDE9FE] transition-colors text-sm">
              로그인
            </Link>
            <Link href="/auth/signup" className="px-4 py-2 rounded-lg bg-[#6D28D9] text-white font-semibold hover:bg-[#5B21B6] transition-colors text-sm">
              회원가입
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="메뉴 열기"
          >
            <span className={`block w-6 h-0.5 bg-[#1F2937] transition-transform ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-[#1F2937] transition-opacity ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-[#1F2937] transition-transform ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-[#E5E7EB] bg-white px-4 py-4 flex flex-col gap-4">
          {navLinks.map((link) => {
            const active = isActive(link.href, link.exact)
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`font-medium py-2 transition-colors ${active ? 'text-[#6D28D9]' : 'text-[#1F2937]'}`}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            )
          })}
          <div className="flex gap-3 pt-2 border-t border-[#E5E7EB]">
            <Link href="/auth/login" className="flex-1 py-2 text-center rounded-lg border border-[#6D28D9] text-[#6D28D9] font-semibold text-sm" onClick={() => setMenuOpen(false)}>로그인</Link>
            <Link href="/auth/signup" className="flex-1 py-2 text-center rounded-lg bg-[#6D28D9] text-white font-semibold text-sm" onClick={() => setMenuOpen(false)}>회원가입</Link>
          </div>
        </div>
      )}
    </header>
  )
}
