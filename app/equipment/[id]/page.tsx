import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ChevronRight,
  CheckCircle2,
  Clock,
  MapPin,
  CalendarDays,
  ArrowLeft,
  MessageSquare,
  BadgeCheck,
  Wrench,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import CTASection from "@/components/layout/CTASection";
import MobileDetailBar from "@/components/equipment/MobileDetailBar";
import { equipments, getEquipmentById } from "@/data/equipments";
import { CATEGORY_LABELS } from "@/types";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return equipments.map((e) => ({ id: e.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const equipment = getEquipmentById(id);
  if (!equipment) return {};
  return {
    title: `${equipment.brand} ${equipment.model} — ${equipment.name}`,
    description: equipment.description.slice(0, 160),
  };
}

export default async function EquipmentDetailPage({ params }: Props) {
  const { id } = await params;
  const equipment = getEquipmentById(id);
  if (!equipment) notFound();

  const {
    name,
    brand,
    model,
    category,
    year,
    origin,
    status,
    refurbished,
    inspected,
    process,
    specs,
    description,
    imageUrl,
    inquiryNote,
  } = equipment;

  const isInStock = status === "in-stock";

  return (
    <>

    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Product',
          name: `${brand} ${model} — ${name}`,
          brand: {
            '@type': 'Brand',
            name: brand,
          },
          description: description,
          image: imageUrl,
          offers: {
            '@type': 'Offer',
            availability: isInStock
              ? 'https://schema.org/InStock'
              : 'https://schema.org/PreOrder',
            seller: {
              '@type': 'Organization',
              name: '芯迹半导体设备',
            },
          },
        }).replace(/</g, '\u003c'),
      }}
    />
      {/* Breadcrumb */}
      <div className="border-b border-white/[0.06] bg-[#080810]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-2 text-xs text-[#606070]">
          <Link href="/equipment" className="hover:text-white transition-colors flex items-center gap-1">
            <ArrowLeft size={12} />
            在售设备
          </Link>
          <ChevronRight size={12} />
          <span className="text-[#a0a0b0]">{CATEGORY_LABELS[category]}</span>
          <ChevronRight size={12} />
          <span className="text-white">{brand} {model}</span>
        </div>
      </div>

      {/* Mobile sticky bottom bar */}
      <MobileDetailBar inquiryHref={`/contact?equipment=${encodeURIComponent(`${brand} ${model}`)}`} />

      {/* Main content */}
      <div className="bg-[#080810] pb-24 lg:pb-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-[3fr_2fr] gap-10 items-start">

            {/* ── Left: Image ── */}
            <div className="space-y-4">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#0d0d18] border border-white/[0.06]">
                <Image
                  src={imageUrl}
                  alt={`${brand} ${model} — ${name}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  priority
                />
                {/* Status overlay */}
                <div className="absolute top-4 left-4">
                  {isInStock ? (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-emerald-950/90 backdrop-blur-sm text-emerald-400 border border-emerald-500/30">
                      <CheckCircle2 size={12} />
                      库存现货
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-amber-950/90 backdrop-blur-sm text-amber-400 border border-amber-500/30">
                      <Clock size={12} />
                      可调货
                    </span>
                  )}
                </div>
                {/* Category badge */}
                <div className="absolute top-4 right-4">
                  <span className="px-2.5 py-1 rounded-md text-xs font-medium bg-black/70 backdrop-blur-sm text-[#a0a0b0] border border-white/[0.10]">
                    {CATEGORY_LABELS[category]}
                  </span>
                </div>
              </div>

              {/* Certification badges */}
              {(refurbished || inspected) && (
                <div className="flex gap-3">
                  {refurbished && (
                    <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-950/30 border border-blue-500/20 flex-1">
                      <Wrench size={15} className="text-blue-400 shrink-0" />
                      <div>
                        <p className="text-xs font-semibold text-blue-400">已完成整备</p>
                        <p className="text-[11px] text-[#606070] mt-0.5">机械/电气/光学系统专项检修，附整备报告</p>
                      </div>
                    </div>
                  )}
                  {inspected && (
                    <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-950/20 border border-emerald-500/20 flex-1">
                      <BadgeCheck size={15} className="text-emerald-400 shrink-0" />
                      <div>
                        <p className="text-xs font-semibold text-emerald-400">已完成验机</p>
                        <p className="text-[11px] text-[#606070] mt-0.5">功能验证通过，出具完整检测报告</p>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* ── Right: Info panel ── */}
            <div className="space-y-6 lg:sticky lg:top-24">
              {/* Brand / Model / Name */}
              <div>
                <p className="text-sm font-semibold text-blue-400 mb-1">{brand}</p>
                <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white mb-1">
                  {model}
                </h1>
                <p className="text-base text-[#606070]">{name}</p>
              </div>

              {/* Meta row */}
              <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-[#a0a0b0]">
                <span className="flex items-center gap-1.5">
                  <CalendarDays size={13} className="text-[#606070]" />
                  {year} 年
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin size={13} className="text-[#606070]" />
                  {origin}
                </span>
              </div>

              {/* Key specs — first 5 */}
              <div className="border border-white/[0.06] rounded-xl overflow-hidden">
                {specs.slice(0, 5).map((spec, i) => (
                  <div
                    key={spec.label}
                    className={`flex items-center justify-between px-4 py-3 text-sm ${
                      i < specs.slice(0, 5).length - 1 ? "border-b border-white/[0.05]" : ""
                    } ${i % 2 === 0 ? "bg-white/[0.02]" : "bg-transparent"}`}
                  >
                    <span className="text-[#606070] shrink-0">{spec.label}</span>
                    <span className="text-[#a0a0b0] text-right ml-4">{spec.value}</span>
                  </div>
                ))}
              </div>

              {/* Inquiry note */}
              {inquiryNote && (
                <p className="text-xs text-[#606070] border-l-2 border-blue-500/40 pl-3 leading-relaxed">
                  {inquiryNote}
                </p>
              )}

              {/* CTA */}
              <div className="space-y-2.5">
                <Link href={`/contact?equipment=${encodeURIComponent(`${brand} ${model}`)}`}>
                  <Button className="w-full h-11 gap-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium border-0 rounded-lg transition-colors cursor-pointer">
                    <MessageSquare size={15} />
                    提交询盘
                  </Button>
                </Link>
                <p className="text-center text-xs text-[#404050]">
                  工作日 24 小时内响应 · 支持到厂验机
                </p>
              </div>
            </div>
          </div>

          {/* ── Full specs ── */}
          {specs.length > 5 && (
            <div className="mt-14">
              <h2 className="text-lg font-semibold text-white mb-4">完整参数</h2>
              <div className="border border-white/[0.06] rounded-xl overflow-hidden">
                {specs.map((spec, i) => (
                  <div
                    key={spec.label}
                    className={`flex items-center justify-between px-5 py-3.5 text-sm ${
                      i < specs.length - 1 ? "border-b border-white/[0.05]" : ""
                    } ${i % 2 === 0 ? "bg-white/[0.02]" : "bg-transparent"}`}
                  >
                    <span className="text-[#606070] w-48 shrink-0">{spec.label}</span>
                    <span className="text-[#a0a0b0]">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ── Description ── */}
          <div className="mt-14 grid lg:grid-cols-[3fr_2fr] gap-10">
            <div>
              <h2 className="text-lg font-semibold text-white mb-4">设备说明</h2>
              <p className="text-sm text-[#a0a0b0] leading-[1.9]">{description}</p>
            </div>

            <div className="space-y-6">
              {/* Applicable process */}
              {process.length > 0 && (
                <div>
                  <h3 className="text-sm font-semibold text-[#606070] uppercase tracking-widest mb-3">适用工艺</h3>
                  <div className="flex flex-wrap gap-2">
                    {process.map((p) => (
                      <Badge
                        key={p}
                        variant="secondary"
                        className="text-xs bg-white/[0.04] text-[#a0a0b0] border border-white/[0.08] font-normal"
                      >
                        {p}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {/* Service guarantee */}
              <div>
                <h3 className="text-sm font-semibold text-[#606070] uppercase tracking-widest mb-3">服务保障</h3>
                <ul className="space-y-2.5">
                  {[
                    "设备来源核查，产权清晰可溯",
                    "提供实机照片及视频",
                    "支持第三方到厂验机",
                    "可协助安排国内外物流运输",
                    "安装调试及工艺调试支持",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-[#a0a0b0]">
                      <CheckCircle2 size={14} className="text-blue-400 shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CTASection
        headline="对此设备感兴趣？"
        subtext="填写询盘表单，我们的工程师将在24小时内与您联系，提供详细的设备资料、报价及交付方案。"
        primaryLabel="提交询盘"
        secondaryLabel="查看更多设备"
        secondaryHref="/equipment"
      />
    </>
  );
}
