"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronRight, ArrowRight, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { getFeaturedEquipments } from "@/data/equipments";

const ease = [0.22, 1, 0.36, 1] as const;

const stats = [
  { value: "300+", label: "成交台次" },
  { value: "50+", label: "服务客户" },
  { value: "8年", label: "行业经验" },
  { value: "全程", label: "整备验机" },
];

const badges = ["TEL", "TSK", "Teradyne", "Advantest", "Disco"];

const carouselItems = getFeaturedEquipments(5).map((eq) => ({
  id: eq.id,
  src: eq.imageUrl,
  alt: eq.name,
  name: `${eq.brand} ${eq.model} ${eq.name}`,
  sub: `${eq.specs[0]?.value ?? ""} · 已整备验机 · 可议价`,
}));

export default function HeroSection() {
  const [index, setIndex] = useState(0);
  const [hovered, setHovered] = useState(false);
  const paused = useRef(false);

  useEffect(() => {
    const id = setInterval(() => {
      if (!paused.current) setIndex((i) => (i + 1) % carouselItems.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  const current = carouselItems[index];

  return (
    <section
      className="relative flex items-start overflow-hidden"
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
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#0a0a0f] to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* ── Left: copy ── */}
          <div className="max-w-xl">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease }}
              className="text-xs font-semibold tracking-[0.18em] uppercase text-blue-400 mb-5"
            >
              半导体中后道设备交易与服务
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease, delay: 0.07 }}
              className="text-4xl sm:text-5xl lg:text-[54px] font-semibold tracking-tight leading-[1.15] mb-5"
            >
              <span className="text-white">专业半导体设备</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-500">
                交易与服务
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease, delay: 0.14 }}
              className="text-base text-[#a0a0b0] leading-relaxed max-w-lg mb-8"
            >
              覆盖探针台、测试机、焊线机、划片机等中后道核心设备买卖，提供验机、整备、安装调试及维保全程服务。
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease, delay: 0.18 }}
              className="flex flex-wrap gap-x-5 gap-y-2 mb-8"
            >
              {["原厂整备验机", "到货即用", "售后有保障"].map((item) => (
                <span key={item} className="flex items-center gap-1.5 text-sm text-[#a0a0b0]">
                  <CheckCircle2 size={14} className="text-blue-400 shrink-0" />
                  {item}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease, delay: 0.21 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-14"
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

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease, delay: 0.28 }}
              className="grid grid-cols-4 gap-6 pt-8 border-t border-white/[0.06]"
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

          {/* ── Right: carousel ── */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.15 }}
            className="hidden lg:block relative"
            onMouseEnter={() => { paused.current = true; setHovered(true); }}
            onMouseLeave={() => { paused.current = false; setHovered(false); }}
          >
            {/* Glow */}
            <div className="absolute -inset-6 bg-blue-600/15 blur-3xl rounded-3xl pointer-events-none" />

            {/* Floating wrapper — stops on hover */}
            <motion.div
              animate={{ y: hovered ? 0 : [0, -14, 0] }}
              transition={hovered
                ? { duration: 0.6, ease: "easeOut" }
                : { repeat: Infinity, duration: 5, ease: "easeInOut" }
              }
              className="relative"
            >
              {/* Card */}
              <Link href={`/equipment/${current.id}`} className="block relative rounded-2xl overflow-hidden border border-white/[0.08] shadow-2xl group/card">

                {/* Image crossfade */}
                <div className="relative w-full" style={{ aspectRatio: "4/3" }}>
                  <AnimatePresence mode="sync">
                    <motion.div
                      key={current.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.8, ease: "easeInOut" }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={current.src}
                        alt={current.alt}
                        fill
                        className="object-cover transition-transform duration-[4000ms] ease-out scale-100 group-hover/card:scale-110"
                        priority
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f]/80 via-transparent to-transparent pointer-events-none transition-opacity duration-300 group-hover/card:opacity-80" />

                {/* Status badge */}
                <div className="absolute top-4 left-4 flex items-center gap-1.5 bg-black/50 backdrop-blur-sm border border-white/10 rounded-full px-3 py-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs text-white/80 font-medium">实时在售</span>
                </div>

                {/* Dot indicators */}
                <div className="absolute top-4 right-4 flex gap-1.5">
                  {carouselItems.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setIndex(i)}
                      className={`w-1.5 h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                        i === index ? "bg-white w-4" : "bg-white/30"
                      }`}
                    />
                  ))}
                </div>

                {/* Bottom info crossfade */}
                <div className="absolute bottom-0 inset-x-0 p-4">
                  <p className="text-xs text-[#a0a0b0] mb-1">最新上架</p>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={current.id + "-info"}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.35 }}
                    >
                      <p className="text-sm font-semibold text-white leading-snug">{current.name}</p>
                      <p className="text-xs text-[#606070] mt-0.5">{current.sub}</p>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </Link>

              {/* Brand badges row */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease, delay: 0.5 }}
                className="absolute -bottom-5 left-4 right-4 flex items-center gap-2 bg-[#111118]/90 backdrop-blur-sm border border-white/[0.08] rounded-xl px-4 py-3"
              >
                <span className="text-[10px] text-[#606070] shrink-0 mr-1">覆盖品牌</span>
                {badges.map((b) => (
                  <span key={b} className="text-xs font-medium text-[#a0a0b0] bg-white/[0.05] rounded px-2 py-0.5 whitespace-nowrap">
                    {b}
                  </span>
                ))}
                <span className="text-xs text-[#606070]">等10+</span>
              </motion.div>
            </motion.div>

            {/* Corner dot grid */}
            <div
              className="absolute -top-8 -right-8 w-32 h-32 opacity-20 pointer-events-none"
              style={{
                backgroundImage: "radial-gradient(circle, rgba(96,130,255,0.6) 1px, transparent 1px)",
                backgroundSize: "12px 12px",
              }}
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
