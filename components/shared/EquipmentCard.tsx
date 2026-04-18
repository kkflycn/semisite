import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { Equipment } from "@/types";
import { CATEGORY_LABELS } from "@/types";

interface EquipmentCardProps {
  equipment: Equipment;
  className?: string;
}

export default function EquipmentCard({
  equipment,
  className,
}: EquipmentCardProps) {
  const {
    id,
    name,
    brand,
    model,
    category,
    year,
    status,
    refurbished,
    inspected,
    specs,
    imageUrl,
  } = equipment;

  return (
    <Link
      href={`/equipment/${id}`}
      className={cn(
        "group flex flex-col bg-[#111118] border border-white/[0.06] rounded-xl overflow-hidden",
        "hover:border-white/[0.12] hover:bg-[#141420] transition-all duration-200",
        className
      )}
      aria-label={`查看 ${brand} ${model} 详情`}
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-[#0d0d18]">
        <Image
          src={imageUrl}
          alt={`${brand} ${model} — ${name}`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          loading="lazy"
        />
        {/* Category badge */}
        <div className="absolute top-3 left-3">
          <span className="inline-flex items-center px-2 py-0.5 rounded-md text-[11px] font-medium bg-black/60 backdrop-blur-sm text-[#a0a0b0] border border-white/[0.08]">
            {CATEGORY_LABELS[category]}
          </span>
        </div>
        {/* Status badge */}
        <div className="absolute top-3 right-3">
          {status === "in-stock" ? (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-medium bg-emerald-950/80 backdrop-blur-sm text-emerald-400 border border-emerald-500/20">
              <CheckCircle2 size={10} />
              现货
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-medium bg-amber-950/80 backdrop-blur-sm text-amber-400 border border-amber-500/20">
              <Clock size={10} />
              可调货
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-4 gap-3">
        {/* Brand + model */}
        <div>
          <p className="text-xs text-blue-400 font-medium mb-0.5">{brand}</p>
          <h3 className="text-sm font-semibold text-white leading-snug">
            {model}
          </h3>
          <p className="text-xs text-[#606070] mt-0.5">{name}</p>
        </div>

        {/* Key specs — show first 2 */}
        {specs.length > 0 && (
          <ul className="space-y-1.5">
            {specs.slice(0, 2).map((spec) => (
              <li
                key={spec.label}
                className="flex items-center justify-between gap-2"
              >
                <span className="text-[11px] text-[#606070] shrink-0">
                  {spec.label}
                </span>
                <span className="text-[11px] text-[#a0a0b0] text-right">
                  {spec.value}
                </span>
              </li>
            ))}
          </ul>
        )}

        {/* Footer row */}
        <div className="mt-auto pt-3 border-t border-white/[0.06] flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="text-[11px] text-[#606070]">{year} 年</span>
            {refurbished && (
              <Badge
                variant="secondary"
                className="text-[10px] h-4 px-1.5 bg-blue-950/60 text-blue-400 border-blue-500/20 font-normal"
              >
                已整备
              </Badge>
            )}
            {inspected && (
              <Badge
                variant="secondary"
                className="text-[10px] h-4 px-1.5 bg-emerald-950/60 text-emerald-400 border-emerald-500/20 font-normal"
              >
                已验机
              </Badge>
            )}
          </div>
          <span className="flex items-center gap-0.5 text-[11px] text-blue-400 group-hover:gap-1.5 transition-all">
            询价
            <ArrowRight size={12} />
          </span>
        </div>
      </div>
    </Link>
  );
}
