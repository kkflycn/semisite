import Link from "next/link";
import { MapPin, Phone, Mail, ExternalLink } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const quickLinks = [
  { label: "设备列表", href: "/equipment" },
  { label: "服务中心", href: "/services" },
  { label: "关于我们", href: "/about" },
  { label: "联系我们", href: "/contact" },
];

const equipmentLinks = [
  { label: "探针台", href: "/equipment?category=probe-station" },
  { label: "测试机", href: "/equipment?category=tester" },
  { label: "焊线机", href: "/equipment?category=wire-bonder" },
  { label: "划片机", href: "/equipment?category=dicer" },
  { label: "固晶机", href: "/equipment?category=die-bonder" },
  { label: "减薄机", href: "/equipment?category=grinder" },
];

const serviceLinks = [
  { label: "设备验机", href: "/services#inspection" },
  { label: "整备翻新", href: "/services#refurbishment" },
  { label: "安装调试", href: "/services#installation" },
  { label: "维保服务", href: "/services#maintenance" },
];

export default function Footer() {
  return (
    <footer
      className="bg-[#080810] border-t border-white/[0.06]"
      aria-label="页脚"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ══ MOBILE FOOTER ══ */}
        <div className="block lg:hidden py-8">
          {/* Brand row */}
          <div className="flex items-center justify-between mb-4">
            <Link href="/" className="inline-flex items-center gap-2" aria-label="InnoSemi 创芯半导体">
              <div className="flex items-center justify-center w-7 h-7 rounded-md shrink-0" style={{ background: "linear-gradient(135deg, #2F68FF 0%, #1a4fd6 100%)" }}>
                <svg width="15" height="15" viewBox="0 0 18 18" fill="none">
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
                <span className="text-[13px] font-semibold text-white" style={{ letterSpacing: "0.02em" }}>InnoSemi</span>
                <span className="text-[9px] text-[#4FD1FF]/70" style={{ letterSpacing: "0.05em" }}>创芯半导体</span>
              </div>
            </Link>
            <div className="flex items-center gap-3 text-[#505060]">
              <a href="tel:+86755XXXXXXXX" aria-label="电话">
                <Phone size={15} className="hover:text-[#a0a0b0] transition-colors" />
              </a>
              <a href="mailto:info@innosemi.com" aria-label="邮箱">
                <Mail size={15} className="hover:text-[#a0a0b0] transition-colors" />
              </a>
              <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" aria-label="地址">
                <MapPin size={15} className="hover:text-[#a0a0b0] transition-colors" />
              </a>
            </div>
          </div>

          <p className="text-[12px] text-[#505060] leading-relaxed mb-6">
            专注半导体中后道二手设备交易与服务，整备验机，全程保障。
          </p>

          <Separator className="bg-white/[0.06] mb-5" />

          {/* Link rows: label + chips */}
          <div className="space-y-4">
            {[
              { label: "快速导航", links: quickLinks },
              { label: "设备分类", links: equipmentLinks },
              { label: "服务项目", links: serviceLinks },
            ].map(({ label, links }) => (
              <div key={label} className="flex items-start gap-3">
                <span className="text-[10px] text-[#404050] font-medium w-[4.5rem] shrink-0 pt-1 tracking-wide">
                  {label}
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-[12px] text-[#808090] bg-white/[0.04] border border-white/[0.07] rounded-md px-2.5 py-1 hover:text-white hover:bg-white/[0.08] hover:border-white/[0.12] transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <Separator className="bg-white/[0.06] mt-6 mb-4" />

          <div className="flex items-center justify-between text-[11px] text-[#404050]">
            <p>© {new Date().getFullYear()} 创芯半导体设备</p>
            <a
              href="https://beian.miit.gov.cn/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-[#606070] transition-colors"
            >
              粤ICP备XXXXXXXX号
              <ExternalLink size={9} />
            </a>
          </div>
        </div>

        {/* ══ DESKTOP FOOTER ══ */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-4 gap-10 py-14">
            {/* Brand column */}
            <div>
              <Link href="/" className="inline-flex items-center gap-2.5 mb-5" aria-label="InnoSemi 创芯半导体">
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
                  <span className="text-[15px] font-semibold text-white" style={{ letterSpacing: "0.02em" }}>InnoSemi</span>
                  <span className="text-[9px] text-[#4FD1FF]/70 font-medium" style={{ letterSpacing: "0.05em" }}>创芯半导体</span>
                </div>
              </Link>
              <p className="text-sm text-[#606070] leading-relaxed mb-6 max-w-[220px]">
                专注半导体中后道二手设备交易与服务，覆盖设备采购、整备验机、安装调试及全周期维保。
              </p>
              <ul className="space-y-2.5">
                <li className="flex items-start gap-2.5 text-sm text-[#606070]">
                  <MapPin size={14} className="text-blue-500 mt-0.5 shrink-0" />
                  <span>广东省深圳市南山区科技园</span>
                </li>
                <li className="flex items-center gap-2.5 text-sm text-[#606070]">
                  <Phone size={14} className="text-blue-500 shrink-0" />
                  <a href="tel:+86755XXXXXXXX" className="hover:text-white transition-colors">+86 755-XXXX-XXXX</a>
                </li>
                <li className="flex items-center gap-2.5 text-sm text-[#606070]">
                  <Mail size={14} className="text-blue-500 shrink-0" />
                  <a href="mailto:info@innosemi.com" className="hover:text-white transition-colors">info@innosemi.com</a>
                </li>
              </ul>
            </div>

            {/* Quick links */}
            <div>
              <h3 className="text-xs font-semibold tracking-widest uppercase text-[#606070] mb-4">快速导航</h3>
              <ul className="space-y-2.5">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-[#a0a0b0] hover:text-white transition-colors">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Equipment categories */}
            <div>
              <h3 className="text-xs font-semibold tracking-widest uppercase text-[#606070] mb-4">设备分类</h3>
              <ul className="space-y-2.5">
                {equipmentLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-[#a0a0b0] hover:text-white transition-colors">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-xs font-semibold tracking-widest uppercase text-[#606070] mb-4">服务项目</h3>
              <ul className="space-y-2.5">
                {serviceLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-[#a0a0b0] hover:text-white transition-colors">{link.label}</Link>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-6 border-t border-white/[0.06]">
                <p className="text-xs text-[#606070] mb-2">营业时间</p>
                <p className="text-sm text-[#a0a0b0]">周一至周五</p>
                <p className="text-sm text-[#a0a0b0]">09:00 – 18:00 CST</p>
              </div>
            </div>
          </div>

          <Separator className="bg-white/[0.06]" />

          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 py-5 text-xs text-[#606070]">
            <p>© {new Date().getFullYear()} 创芯半导体设备（深圳）有限公司 版权所有</p>
            <div className="flex items-center gap-4">
              <a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:text-[#a0a0b0] transition-colors">
                粤ICP备XXXXXXXX号
                <ExternalLink size={10} />
              </a>
              <span>隐私政策</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
