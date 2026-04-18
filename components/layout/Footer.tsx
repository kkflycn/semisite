import Link from "next/link";
import { Cpu, MapPin, Phone, Mail, ExternalLink } from "lucide-react";
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
        {/* Main footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-14">
          {/* Brand column */}
          <div className="lg:col-span-1">
            {/* Logo */}
            <Link
              href="/"
              className="inline-flex items-center gap-2.5 mb-5"
              aria-label="芯迹半导体设备"
            >
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-600 shrink-0">
                <Cpu size={18} className="text-white" strokeWidth={1.8} />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-sm font-semibold tracking-tight text-white">
                  芯迹半导体
                </span>
                <span className="text-[10px] tracking-widest text-blue-400 uppercase font-medium">
                  Equipment
                </span>
              </div>
            </Link>

            <p className="text-sm text-[#606070] leading-relaxed mb-6 max-w-[220px]">
              专注半导体中后道二手设备交易与服务，覆盖设备采购、整备验机、安装调试及全周期维保。
            </p>

            {/* Contact info */}
            <ul className="space-y-2.5">
              <li className="flex items-start gap-2.5 text-sm text-[#606070]">
                <MapPin size={14} className="text-blue-500 mt-0.5 shrink-0" />
                <span>广东省深圳市南山区科技园</span>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-[#606070]">
                <Phone size={14} className="text-blue-500 shrink-0" />
                <a
                  href="tel:+86755XXXXXXXX"
                  className="hover:text-white transition-colors"
                >
                  +86 755-XXXX-XXXX
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-[#606070]">
                <Mail size={14} className="text-blue-500 shrink-0" />
                <a
                  href="mailto:info@xinjisemi.com"
                  className="hover:text-white transition-colors"
                >
                  info@xinjisemi.com
                </a>
              </li>
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-xs font-semibold tracking-widest uppercase text-[#606070] mb-4">
              快速导航
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#a0a0b0] hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Equipment categories */}
          <div>
            <h3 className="text-xs font-semibold tracking-widest uppercase text-[#606070] mb-4">
              设备分类
            </h3>
            <ul className="space-y-2.5">
              {equipmentLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#a0a0b0] hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs font-semibold tracking-widest uppercase text-[#606070] mb-4">
              服务项目
            </h3>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#a0a0b0] hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
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

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 py-5 text-xs text-[#606070]">
          <p>© {new Date().getFullYear()} 芯迹半导体设备（深圳）有限公司 版权所有</p>
          <div className="flex items-center gap-4">
            <a
              href="https://beian.miit.gov.cn/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-[#a0a0b0] transition-colors"
            >
              粤ICP备XXXXXXXX号
              <ExternalLink size={10} />
            </a>
            <span>隐私政策</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
