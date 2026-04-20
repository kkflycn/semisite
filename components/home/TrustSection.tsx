"use client";

import { CheckCircle2, Building2 } from "lucide-react";
import { FadeIn, FadeInStagger, FadeInItem } from "@/components/shared/FadeIn";

const cases = [
  {
    tag: "设备交易 + 安装调试",
    title: "某 OSAT 企业 8 英寸产线扩产",
    summary:
      "协助客户完成整线 7 台核心设备采购，涵盖探针台、固晶机、焊线机，现货+调货双轨，按期达产。",
    metrics: ["7台设备整线交付", "6个月内完成产线调试", "按期达产，零停线"],
  },
  {
    tag: "独立验机服务",
    title: "跨境设备采购第三方验机",
    summary:
      "赴日完成 Disco 划片机全项检测，发现主轴轴承异常，协助客户重新谈判并节省采购成本。",
    metrics: ["发现隐性设备问题", "协助节省采购成本", "出具中英双语报告"],
  },
  {
    tag: "长期维保服务",
    title: "某封测厂焊线机群年度维保",
    summary:
      "覆盖 12 台 ASM、K&S 焊线机，通过季度 PM 计划与快速响应机制，非计划停机减少约 60%。",
    metrics: ["12台焊线机覆盖", "非计划停机减少60%", "OEE显著提升"],
  },
];

const brandGroups = [
  {
    label: "探针台 / 测试机",
    brands: ["TEL", "TSK", "Teradyne", "Advantest"],
  },
  {
    label: "划片 / 减薄",
    brands: ["Disco", "ACCRETECH", "Okamoto"],
  },
  {
    label: "固晶 / 焊线",
    brands: ["ASM", "K&S", "Shinkawa", "ESEC"],
  },
  {
    label: "塑封",
    brands: ["TOWA", "YAMADA"],
  },
];

export default function TrustSection() {
  return (
    <section className="py-24 bg-[#0a0a14]" aria-labelledby="trust-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="mb-14">
          <p className="text-xs font-semibold tracking-widest uppercase text-blue-400 mb-3">
            公司实力
          </p>
          <h2
            id="trust-heading"
            className="text-3xl sm:text-4xl font-semibold tracking-tight text-white max-w-xl"
          >
            用案例说话，用实绩证明
          </h2>
          <p className="text-sm text-[#606070] mt-2 max-w-lg">
            以下案例经客户授权，隐去具体企业名称
          </p>
        </FadeIn>

        <div className="grid lg:grid-cols-[3fr_2fr] gap-10 items-start">
          {/* Left: Cases */}
          <FadeInStagger stagger={0.1} className="space-y-4">
            {cases.map((c) => (
              <FadeInItem key={c.title}>
                <div className="bg-[#111118] border border-white/[0.06] rounded-xl p-6 hover:border-white/[0.10] transition-colors">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <span className="inline-block text-xs font-medium text-blue-400 bg-blue-600/10 border border-blue-500/20 px-2.5 py-1 rounded-full shrink-0">
                      {c.tag}
                    </span>
                  </div>
                  <h3 className="text-sm font-semibold text-white mb-2">
                    {c.title}
                  </h3>
                  <p className="text-sm text-[#606070] leading-relaxed mb-4">
                    {c.summary}
                  </p>
                  <ul className="flex flex-wrap gap-x-5 gap-y-1.5">
                    {c.metrics.map((m) => (
                      <li
                        key={m}
                        className="flex items-center gap-1.5 text-xs text-[#a0a0b0]"
                      >
                        <CheckCircle2
                          size={11}
                          className="text-emerald-400 shrink-0"
                        />
                        {m}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeInItem>
            ))}
          </FadeInStagger>

          {/* Right: Brand coverage */}
          <FadeIn delay={0.2} className="lg:sticky lg:top-24">
            <div className="bg-[#111118] border border-white/[0.06] rounded-xl p-6">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-600/10 border border-blue-500/20">
                  <Building2 size={16} className="text-blue-400" />
                </div>
                <h3 className="text-sm font-semibold text-white">
                  覆盖主流品牌，熟悉设备底层
                </h3>
              </div>
              <p className="text-xs text-[#606070] leading-relaxed mb-5">
                工程师团队具有原厂背景，对以下主流设备品牌的机械结构与工艺原理有深度理解。
              </p>

              <div className="space-y-4">
                {brandGroups.map((group) => (
                  <div key={group.label}>
                    <p className="text-[10px] font-semibold tracking-widest uppercase text-[#404050] mb-2">
                      {group.label}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {group.brands.map((brand) => (
                        <span
                          key={brand}
                          className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium text-[#a0a0b0] bg-white/[0.03] border border-white/[0.08] hover:border-white/[0.14] hover:text-white transition-colors"
                        >
                          {brand}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-5 border-t border-white/[0.06]">
                <p className="text-xs text-[#606070] leading-relaxed border-l-2 border-blue-500/40 pl-3">
                  所有在售设备均支持买方工程师到厂见证验机，我们出具完整检测报告。
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
