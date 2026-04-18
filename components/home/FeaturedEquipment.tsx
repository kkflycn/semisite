"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import EquipmentCard from "@/components/shared/EquipmentCard";
import { getFeaturedEquipments } from "@/data/equipments";

export default function FeaturedEquipment() {
  const featured = getFeaturedEquipments(6);

  return (
    <section
      className="py-24 bg-[#0a0a0f]"
      aria-labelledby="featured-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12"
        >
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
            查看全部 {">"}
            <ArrowRight
              size={14}
              className="group-hover:translate-x-0.5 transition-transform"
            />
          </Link>
        </motion.div>

        {/* Equipment grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {featured.map((equipment, i) => (
            <motion.div
              key={equipment.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.45,
                ease: [0.22, 1, 0.36, 1],
                delay: Math.min(i * 0.08, 0.3),
              }}
            >
              <EquipmentCard equipment={equipment} />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-10 text-center"
        >
          <Link href="/equipment">
            <span className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium text-[#a0a0b0] border border-white/[0.08] hover:border-white/[0.15] hover:text-white hover:bg-white/[0.04] transition-all">
              查看全部 31 台在售设备
              <ArrowRight size={14} />
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
