"use client";

import { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { PackageSearch } from "lucide-react";
import EquipmentCard from "@/components/shared/EquipmentCard";
import CategoryFilter from "@/components/equipment/CategoryFilter";
import type { Equipment, EquipmentCategory } from "@/types";
import { CATEGORY_LABELS } from "@/types";

const CATEGORIES = Object.keys(CATEGORY_LABELS) as EquipmentCategory[];

interface EquipmentListProps {
  equipments: Equipment[];
}

export default function EquipmentList({ equipments }: EquipmentListProps) {
  const searchParams = useSearchParams();
  const initCategory = searchParams.get("category") as EquipmentCategory | null;

  const [selectedCategory, setSelectedCategory] = useState<
    EquipmentCategory | "all"
  >(initCategory && CATEGORIES.includes(initCategory) ? initCategory : "all");
  const [stockOnly, setStockOnly] = useState(false);

  // Counts per category (unaffected by stock filter, so counts stay stable)
  const counts = useMemo(() => {
    const base = { all: equipments.length } as Record<
      EquipmentCategory | "all",
      number
    >;
    for (const cat of CATEGORIES) {
      base[cat] = equipments.filter((e) => e.category === cat).length;
    }
    return base;
  }, [equipments]);

  const filtered = useMemo(() => {
    let list = equipments;
    if (selectedCategory !== "all") {
      list = list.filter((e) => e.category === selectedCategory);
    }
    if (stockOnly) {
      // in-stock first, then on-order
      list = [...list].sort((a, b) => {
        if (a.status === b.status) return 0;
        return a.status === "in-stock" ? -1 : 1;
      });
    }
    return list;
  }, [equipments, selectedCategory, stockOnly]);

  return (
    <div>
      {/* Filter bar */}
      <div className="sticky top-16 z-30 bg-[#080810]/90 backdrop-blur-md border-b border-white/[0.06] py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CategoryFilter
            selected={selectedCategory}
            onSelect={setSelectedCategory}
            counts={counts}
            stockOnly={stockOnly}
            onStockToggle={setStockOnly}
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Result count */}
        <p className="text-sm text-[#606070] mb-6">
          共{" "}
          <span className="text-white font-medium">{filtered.length}</span> 台
          {selectedCategory !== "all" && (
            <span className="text-[#606070]">
              {" "}· {CATEGORY_LABELS[selectedCategory]}
            </span>
          )}
          {stockOnly && (
            <span className="text-emerald-400 ml-1">· 现货优先排列</span>
          )}
        </p>

        {/* Grid */}
        {filtered.length > 0 ? (
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((equipment, i) => (
                <motion.div
                  key={equipment.id}
                  layout
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{
                    duration: 0.3,
                    ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
                    delay: Math.min(i * 0.04, 0.2),
                  }}
                >
                  <EquipmentCard equipment={equipment} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <PackageSearch size={40} className="text-[#303040] mb-4" />
            <p className="text-sm font-medium text-[#606070]">
              暂无符合条件的设备
            </p>
            <p className="text-xs text-[#404050] mt-1">
              请尝试切换其他分类或关闭"现货优先"筛选
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
