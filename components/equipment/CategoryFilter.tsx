"use client";

import { cn } from "@/lib/utils";
import type { EquipmentCategory } from "@/types";
import { CATEGORY_LABELS } from "@/types";

const CATEGORIES = Object.keys(CATEGORY_LABELS) as EquipmentCategory[];

interface CategoryFilterProps {
  selected: EquipmentCategory | "all";
  onSelect: (cat: EquipmentCategory | "all") => void;
  counts: Record<EquipmentCategory | "all", number>;
  stockOnly: boolean;
  onStockToggle: (v: boolean) => void;
}

export default function CategoryFilter({
  selected,
  onSelect,
  counts,
  stockOnly,
  onStockToggle,
}: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap items-center gap-2 justify-between">
      {/* Category pills */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => onSelect("all")}
          className={cn(
            "h-8 px-4 rounded-full text-sm font-medium transition-all border",
            selected === "all"
              ? "bg-blue-600/15 text-blue-400 border-blue-500/40"
              : "bg-white/[0.03] text-[#606070] border-white/[0.08] hover:border-white/[0.14] hover:text-[#a0a0b0]"
          )}
        >
          全部
          <span className="ml-1.5 text-xs opacity-60">{counts.all}</span>
        </button>

        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => onSelect(cat)}
            className={cn(
              "h-8 px-4 rounded-full text-sm font-medium transition-all border",
              selected === cat
                ? "bg-blue-600/15 text-blue-400 border-blue-500/40"
                : "bg-white/[0.03] text-[#606070] border-white/[0.08] hover:border-white/[0.14] hover:text-[#a0a0b0]"
            )}
          >
            {CATEGORY_LABELS[cat]}
            <span className="ml-1.5 text-xs opacity-60">{counts[cat]}</span>
          </button>
        ))}
      </div>

      {/* Stock toggle */}
      <button
        onClick={() => onStockToggle(!stockOnly)}
        className={cn(
          "h-8 px-4 rounded-full text-sm font-medium transition-all border shrink-0",
          stockOnly
            ? "bg-emerald-600/10 text-emerald-400 border-emerald-500/30"
            : "bg-white/[0.03] text-[#606070] border-white/[0.08] hover:border-white/[0.14] hover:text-[#a0a0b0]"
        )}
      >
        <span className="flex items-center gap-1.5">
          <span
            className={cn(
              "w-1.5 h-1.5 rounded-full",
              stockOnly ? "bg-emerald-400" : "bg-[#606070]"
            )}
          />
          现货优先
        </span>
      </button>
    </div>
  );
}
