"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "首页", href: "/" },
  { label: "设备列表", href: "/equipment" },
  { label: "服务中心", href: "/services" },
  { label: "关于我们", href: "/about" },
  { label: "联系我们", href: "/contact" },
];

function Logo({ onClick }: { onClick?: () => void }) {
  return (
    <Link
      href="/"
      onClick={onClick}
      className="flex items-center gap-2.5 group"
      aria-label="创芯半导体设备 — 返回首页"
    >
      <div className="flex items-center justify-center w-8 h-8 rounded-lg shrink-0" style={{ background: "linear-gradient(135deg, #2F68FF 0%, #1a4fd6 100%)" }}>
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <rect x="5" y="5" width="8" height="8" rx="1" stroke="white" strokeWidth="1.4"/>
          <line x1="7" y1="2" x2="7" y2="5" stroke="white" strokeWidth="1.4" strokeLinecap="round"/>
          <line x1="11" y1="2" x2="11" y2="5" stroke="white" strokeWidth="1.4" strokeLinecap="round"/>
          <line x1="7" y1="13" x2="7" y2="16" stroke="white" strokeWidth="1.4" strokeLinecap="round"/>
          <line x1="11" y1="13" x2="11" y2="16" stroke="white" strokeWidth="1.4" strokeLinecap="round"/>
          <line x1="2" y1="7" x2="5" y2="7" stroke="white" strokeWidth="1.4" strokeLinecap="round"/>
          <line x1="2" y1="11" x2="5" y2="11" stroke="white" strokeWidth="1.4" strokeLinecap="round"/>
          <line x1="13" y1="7" x2="16" y2="7" stroke="white" strokeWidth="1.4" strokeLinecap="round"/>
          <line x1="13" y1="11" x2="16" y2="11" stroke="white" strokeWidth="1.4" strokeLinecap="round"/>
        </svg>
      </div>
      <div className="flex flex-col leading-none">
        <span className="text-[15px] font-semibold tracking-tight text-white" style={{ letterSpacing: "0.02em" }}>
          InnoSemi
        </span>
        <span className="text-[9px] text-[#4FD1FF]/80 font-medium" style={{ letterSpacing: "0.05em" }}>
          创芯半导体
        </span>
      </div>
    </Link>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-[#0a0a0f]/90 backdrop-blur-md border-b border-white/[0.06] shadow-xl shadow-black/20"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Logo />

          {/* Desktop nav */}
          <nav
            className="hidden md:flex items-center gap-1"
            aria-label="主导航"
          >
            {navItems.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "px-3.5 py-2 rounded-md text-sm font-medium transition-colors",
                    active
                      ? "text-white bg-white/[0.08]"
                      : "text-[#a0a0b0] hover:text-white hover:bg-white/[0.05]"
                  )}
                  aria-current={active ? "page" : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link href="/contact">
              <Button className="h-9 px-4 gap-1.5 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium border-0 rounded-lg transition-colors cursor-pointer">
                提交询盘
                <ChevronRight size={14} />
              </Button>
            </Link>
          </div>

          {/* Mobile menu trigger */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger
              className="md:hidden p-2 rounded-md text-[#a0a0b0] hover:text-white hover:bg-white/[0.05] transition-colors"
              aria-label={mobileOpen ? "关闭菜单" : "打开菜单"}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </SheetTrigger>

            <SheetContent
              side="right"
              showCloseButton={false}
              className="w-[280px] bg-[#111118] border-l border-white/[0.06] pt-0 gap-0"
            >
              {/* Mobile header */}
              <div className="flex items-center justify-between h-16 px-5 border-b border-white/[0.06]">
                <Logo onClick={() => setMobileOpen(false)} />
                <SheetClose
                  className="p-2 rounded-md text-[#a0a0b0] hover:text-white hover:bg-white/[0.05] transition-colors"
                  aria-label="关闭菜单"
                >
                  <X size={18} />
                </SheetClose>
              </div>

              {/* Nav items — route change closes sheet via useEffect */}
              <nav
                className="flex flex-col gap-1 p-4 flex-1"
                aria-label="移动端导航"
              >
                {navItems.map((item) => {
                  const active =
                    item.href === "/"
                      ? pathname === "/"
                      : pathname.startsWith(item.href);
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "flex items-center px-3.5 py-2.5 rounded-md text-sm font-medium transition-colors",
                        active
                          ? "text-white bg-white/[0.08]"
                          : "text-[#a0a0b0] hover:text-white hover:bg-white/[0.05]"
                      )}
                      aria-current={active ? "page" : undefined}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </nav>

              {/* Mobile CTA */}
              <div className="px-4 pb-6">
                <Link href="/contact" onClick={() => setMobileOpen(false)}>
                  <Button className="w-full h-10 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium border-0 rounded-lg transition-colors cursor-pointer">
                    提交询盘
                  </Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
