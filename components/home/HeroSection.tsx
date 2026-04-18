"use client";

import Link from "next/link";
import { ChevronRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const stats = [
  { value: "300+", label: "成交设备台次" },
  { value: "50+", label: "服务客户" },
  { value: "8", label: "年行业经验" },
  { value: "全程", label: "整备验机保障" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

export default function HeroSection() {
  return (
    <section
      className="relative min-h-[92vh] flex items-center overflow-hidden"
      aria-label="品牌主张"
    >
      {/* Background grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Blue radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-600/8 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[#0a0a0f] to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="max-w-3xl">
          {/* Label chip */}
          <motion.div
            initial="hidden"
            animate="visible"
            custom={0}
            variants={fadeUp}
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-blue-600/10 text-blue-400 border border-blue-500/20 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              半导体中后道设备交易与服务
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial="hidden"
            animate="visible"
            custom={0.1}
            variants={fadeUp}
            className="text-4xl sm:text-5xl lg:text-[56px] font-semibold tracking-tight text-white leading-[1.15] mb-6"
          >
            专业的半导体
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
              设备交易与服务
            </span>
            <br />
            合作伙伴
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial="hidden"
            animate="visible"
            custom={0.2}
            variants={fadeUp}
            className="text-base sm:text-lg text-[#a0a0b0] leading-relaxed max-w-xl mb-10"
          >
            覆盖探针台、测试机、焊线机、划片机、固晶机等中后道核心设备的买卖与服务，
            提供设备验机、整备翻新、安装调试及全周期维保，帮助您的产线快速达产。
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial="hidden"
            animate="visible"
            custom={0.3}
            variants={fadeUp}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-16"
          >
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
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial="hidden"
            animate="visible"
            custom={0.4}
            variants={fadeUp}
            className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-white/[0.06]"
          >
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl sm:text-3xl font-semibold text-white mb-0.5">
                  {stat.value}
                </p>
                <p className="text-xs text-[#606070]">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
