"use client";

import Link from "next/link";
import { Search, Hammer, Settings, Shield, ArrowRight } from "lucide-react";
import { FadeIn, FadeInStagger, FadeInItem } from "@/components/shared/FadeIn";

const services = [
  {
    icon: Search,
    title: "设备验机",
    subtitle: "Independent Inspection",
    description:
      "由资深工程师对设备进行系统性功能验证，出具详细检测报告，涵盖机械精度、电气参数、软件功能及工艺性能，为采购决策提供客观依据。",
    href: "/services#inspection",
  },
  {
    icon: Hammer,
    title: "整备翻新",
    subtitle: "Refurbishment",
    description:
      "对机械磨损件、电气老化件、光学组件进行针对性维修或更换，恢复设备至接近出厂状态，并完成工艺参数重新标定，附出厂整备报告。",
    href: "/services#refurbishment",
  },
  {
    icon: Settings,
    title: "安装调试",
    subtitle: "Installation & Commissioning",
    description:
      "工程师到厂负责设备开箱验货、安装定位、水电气接入，完成功能调试与工艺参数优化，确保设备在客户产线上稳定达产。",
    href: "/services#installation",
  },
  {
    icon: Shield,
    title: "维保服务",
    subtitle: "Maintenance & Support",
    description:
      "提供年度预防性维护计划（PM）与故障响应维修服务，支持签署长期技术服务合同，关键备件本地备货，保障产线连续运转。",
    href: "/services#maintenance",
  },
];

export default function ServicesPreview() {
  return (
    <section className="py-24 bg-[#080810]" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-blue-400 mb-3">
              技术服务
            </p>
            <h2
              id="services-heading"
              className="text-3xl sm:text-4xl font-semibold tracking-tight text-white"
            >
              端到端的设备服务保障
            </h2>
            <p className="text-sm text-[#606070] mt-2 max-w-lg">
              从设备采购评估到产线稳定运行，提供覆盖设备全生命周期的技术服务
            </p>
          </div>
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors group shrink-0"
          >
            查看全部服务
            <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </FadeIn>

        <FadeInStagger stagger={0.08} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <FadeInItem key={service.title}>
                <Link
                  href={service.href}
                  className="flex flex-col h-full bg-[#111118] border border-white/[0.06] rounded-xl p-6 hover:border-white/[0.12] hover:bg-[#141420] transition-all group"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-500/20 mb-5">
                    <Icon size={18} className="text-blue-400" />
                  </div>
                  <h3 className="text-base font-semibold text-white mb-0.5">
                    {service.title}
                  </h3>
                  <p className="text-[11px] text-[#606070] mb-3 font-medium tracking-wide">
                    {service.subtitle}
                  </p>
                  <p className="text-sm text-[#a0a0b0] leading-relaxed flex-1">
                    {service.description}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1 text-xs text-blue-400 group-hover:gap-1.5 transition-all">
                    了解详情
                    <ArrowRight size={11} />
                  </span>
                </Link>
              </FadeInItem>
            );
          })}
        </FadeInStagger>
      </div>
    </section>
  );
}
