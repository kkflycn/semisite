import Link from "next/link";
import { ChevronRight, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CTASectionProps {
  headline?: string;
  subtext?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export default function CTASection({
  headline = "有采购需求？立即联系我们",
  subtext = "无论是单台设备采购、整线规划，还是设备评估与维保，我们的工程师团队随时准备为您提供专业支持。",
  primaryLabel = "提交询盘",
  secondaryLabel = "浏览设备",
  secondaryHref = "/equipment",
}: CTASectionProps) {
  return (
    <section
      className="relative overflow-hidden bg-[#080810]"
      aria-label="联系我们"
    >
      {/* Blue glow background */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-600/10 rounded-full blur-[100px]" />
      </div>

      {/* Top border accent */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        {/* Icon */}
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-blue-600/10 border border-blue-500/20 mb-6">
          <MessageSquare size={22} className="text-blue-400" />
        </div>

        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white mb-4">
          {headline}
        </h2>
        <p className="text-base text-[#a0a0b0] leading-relaxed max-w-xl mx-auto mb-10">
          {subtext}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link href="/contact">
            <Button className="h-11 px-6 gap-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium border-0 rounded-lg transition-colors cursor-pointer">
              {primaryLabel}
              <ChevronRight size={16} />
            </Button>
          </Link>
          <Link href={secondaryHref}>
            <Button
              variant="outline"
              className="h-11 px-6 text-sm font-medium rounded-lg border-white/[0.12] bg-white/[0.04] text-[#a0a0b0] hover:text-white hover:bg-white/[0.08] hover:border-white/[0.18] transition-colors cursor-pointer"
            >
              {secondaryLabel}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
