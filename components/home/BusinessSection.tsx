"use client";

import Link from "next/link";
import { ArrowRight, ShoppingCart, Wrench } from "lucide-react";
import { motion } from "framer-motion";

const pillars = [
  {
    icon: ShoppingCart,
    tag: "设备交易",
    title: "二手 / 翻新设备买卖",
    description:
      "持续维护国内外半导体中后道设备资源网络，覆盖探针台、测试机、焊线机、划片机、固晶机、减薄机、塑封机等核心设备类别。所有在售机台均经过来源核查，确保产权清晰、机况可溯。",
    highlights: [
      "Wire Bonder / Die Bonder / Probe Station",
      "Dicing Saw / Backgrinder / Mold Press",
      "ATE 测试机：Teradyne / Advantest / Cohu",
      "库存现货 + 全球调货双轨模式",
    ],
    href: "/equipment",
    linkLabel: "查看在售设备",
    accent: "blue",
  },
  {
    icon: Wrench,
    tag: "技术服务",
    title: "整备 · 验机 · 维保",
    description:
      "拥有资深半导体设备工程师团队，提供设备整备翻新、到厂验机、安装调试及长期维保服务。无论是单台设备交付还是产线整体构建，我们均可提供端到端的技术支持。",
    highlights: [
      "设备到厂验机与功能评估报告",
      "机械 / 电气 / 光学系统专项整备",
      "现场安装调试及工艺参数优化",
      "年度维保合同 / 按需响应维修",
    ],
    href: "/services",
    linkLabel: "了解服务项目",
    accent: "slate",
  },
];

export default function BusinessSection() {
  return (
    <section
      className="py-24 bg-[#080810]"
      aria-labelledby="business-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14"
        >
          <p className="text-xs font-semibold tracking-widest uppercase text-blue-400 mb-3">
            核心业务
          </p>
          <h2
            id="business-heading"
            className="text-3xl sm:text-4xl font-semibold tracking-tight text-white max-w-xl"
          >
            交易与服务，覆盖设备全生命周期
          </h2>
        </motion.div>

        {/* Two pillars */}
        <div className="grid md:grid-cols-2 gap-6">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.tag}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                  delay: i * 0.1,
                }}
                className="flex flex-col bg-[#111118] border border-white/[0.06] rounded-2xl p-8 hover:border-white/[0.10] transition-colors"
              >
                {/* Icon + tag */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-500/20">
                    <Icon size={20} className="text-blue-400" />
                  </div>
                  <span className="text-xs font-semibold tracking-widest uppercase text-blue-400">
                    {pillar.tag}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-white mb-3">
                  {pillar.title}
                </h3>
                <p className="text-sm text-[#a0a0b0] leading-relaxed mb-6">
                  {pillar.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-2 mb-8">
                  {pillar.highlights.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm text-[#a0a0b0]"
                    >
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Link */}
                <Link
                  href={pillar.href}
                  className="mt-auto inline-flex items-center gap-1.5 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors group"
                >
                  {pillar.linkLabel}
                  <ArrowRight
                    size={14}
                    className="group-hover:translate-x-0.5 transition-transform"
                  />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
