import Link from "next/link";
import { ChevronRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { value: "300+", label: "成交台次" },
  { value: "50+", label: "服务客户" },
  { value: "8年", label: "行业经验" },
  { value: "全程", label: "整备验机" },
];

export default function HeroSection() {
  return (
    <section
      className="relative min-h-[92vh] flex items-center overflow-hidden"
      aria-label="品牌主张"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      {/* Blue radial glow */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#0a0a0f] to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="max-w-2xl">

          {/* Eyebrow */}
          <p className="text-xs font-semibold tracking-[0.18em] uppercase text-blue-400 mb-5">
            半导体中后道设备交易与服务
          </p>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-semibold tracking-tight leading-[1.15] mb-5">
            <span className="text-white">专业半导体设备</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-500">
              交易与服务
            </span>
          </h1>

          {/* Body */}
          <p className="text-base text-[#a0a0b0] leading-relaxed max-w-lg mb-10">
            覆盖探针台、测试机、焊线机、划片机等中后道核心设备买卖，提供验机、整备、安装调试及维保全程服务。
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-16">
            <Link href="/equipment">
              <Button className="h-11 px-6 gap-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium border-0 rounded-lg transition-colors cursor-pointer">
                浏览在售设备
                <ChevronRight size={16} />
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="outline"
                className="h-11 px-6 gap-2 text-sm font-medium rounded-lg border-white/[0.12] bg-white/[0.04] text-[#a0a0b0] hover:text-white hover:bg-white/[0.08] hover:border-white/[0.18] transition-colors cursor-pointer"
              >
                提交采购需求
                <ArrowRight size={16} />
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-4 gap-6 pt-8 border-t border-white/[0.06]">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl sm:text-3xl font-semibold text-white mb-0.5">
                  {stat.value}
                </p>
                <p className="text-xs text-[#606070]">{stat.label}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
