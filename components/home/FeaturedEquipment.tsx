"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import EquipmentCard from "@/components/shared/EquipmentCard";
import { getFeaturedEquipments } from "@/data/equipments";
import { FadeIn, FadeInStagger, FadeInItem } from "@/components/shared/FadeIn";

export default function FeaturedEquipment() {
  const featured = getFeaturedEquipments(6);

  return (
    <section className="py-24 bg-[#0a0a14]" aria-labelledby="featured-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-blue-400 mb-3">
              精选在售
            </p>
            <h2
              id="featured-heading"
              className="text-3xl sm:text-4xl font-semibold tracking-tight text-white"
            >
              近期在售设备
            </h2>
            <p className="text-sm text-[#606070] mt-2">
              均已完成整备验机，可随时提供设备实机照片及检测报告
            </p>
          </div>
          <Link
            href="/equipment"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors group shrink-0"
          >
            查看全部
            <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </FadeIn>

        <FadeInStagger stagger={0.06} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {featured.map((equipment) => (
            <FadeInItem key={equipment.id}>
              <EquipmentCard equipment={equipment} />
            </FadeInItem>
          ))}
        </FadeInStagger>

        <FadeIn delay={0.1} className="mt-10 text-center">
          <Link href="/equipment">
            <span className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium text-[#a0a0b0] border border-white/[0.08] hover:border-white/[0.15] hover:text-white hover:bg-white/[0.04] transition-all">
              查看全部在售设备
              <ArrowRight size={14} />
            </span>
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
