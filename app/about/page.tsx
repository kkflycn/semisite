import type { Metadata } from "next";
import Link from "next/link";
import {
  ChevronRight,
  Users,
  Award,
  Globe,
  Zap,
  CheckCircle2,
  TrendingUp,
  Shield,
  Heart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import CTASection from "@/components/layout/CTASection";

export const metadata: Metadata = {
  title: "关于我们",
  description:
    "芯迹半导体设备成立于2016年，深耕半导体中后道二手设备交易与服务领域，拥有原厂背景工程师团队，服务国内外50余家半导体封测企业。",
};

const stats = [
  { value: "300+", label: "设备成交台次", sub: "涵盖8大设备类别" },
  { value: "50+", label: "服务客户", sub: "覆盖封测/IDM/研发机构" },
  { value: "8年", label: "行业深耕", sub: "专注半导体中后道领域" },
  { value: "全程", label: "整备验机保障", sub: "附完整检测报告" },
];

const capabilities = [
  {
    icon: Users,
    title: "原厂工程师团队",
    desc: "核心技术团队成员均具有 ASM、Disco、TEL、Teradyne、Advantest 等头部半导体设备原厂的服务与应用工程师背景，对主流设备的机械结构、电气控制与工艺原理有深度理解，能够独立完成整备验机与安装调试工作。",
  },
  {
    icon: Globe,
    title: "全球设备资源网络",
    desc: "与日本、韩国、新加坡、美国、欧洲的设备经纪商及产线升级客户建立长期合作关系，持续维护国内外二手设备资源库，能够快速响应客户的特定型号采购需求，提供现货与调货双轨选择。",
  },
  {
    icon: Award,
    title: "标准化交付体系",
    desc: "建立了覆盖设备来源核查、整备执行、验机评估到安装调试的全流程标准化作业规范，每个环节出具结构化文档，满足 IATF 16949 与 ISO 9001 体系的质量追溯要求。",
  },
  {
    icon: Zap,
    title: "快速响应能力",
    desc: "在长三角、珠三角、京津冀等半导体产业聚集区建立服务网络，常规询盘1个工作日内回复，设备评估报告5个工作日内出具，紧急维修需求工程师48小时内到场。",
  },
];

const values = [
  {
    icon: Shield,
    title: "诚信透明",
    desc: "如实呈现设备状态，不做选择性披露。验机报告包含 Pass 与 Fail 项，整备范围按实际执行，不虚报不缩水。",
  },
  {
    icon: TrendingUp,
    title: "专业精进",
    desc: "持续跟踪主流设备的技术演进与市场动态，工程师定期参与原厂培训，保持对新型号与新工艺的服务能力。",
  },
  {
    icon: Heart,
    title: "长期主义",
    desc: "不追求单次交易利润最大化，以帮助客户产线稳定运行为目标，建立长期信任关系，大多数客户来自转介绍。",
  },
];

const cases = [
  {
    tag: "设备交易 + 安装调试",
    title: "某 OSAT 企业 8 英寸产线扩产",
    content:
      "客户计划新增一条 200mm 晶圆封测产线，需在6个月内完成设备采购与产线调试。我们协助客户完成了包括探针台、固晶机、焊线机在内的整线7台核心设备的采购，其中4台为现货整备设备，3台通过全球调货渠道完成交付，并派驻工程师团队完成全线安装调试，整线产线按期达产。",
    metrics: ["7台设备整线交付", "6个月内完成产线调试", "按期达产，零停线"],
  },
  {
    tag: "独立验机服务",
    title: "跨境设备采购的第三方验机",
    content:
      "某国内功率半导体企业计划从日本采购一批二手 Disco 划片机，委托我们在设备发运前进行独立验机。工程师赴日完成设备的机械精度、主轴状态和切割精度全项检测，发现其中1台设备主轴轴承存在异常振动，出具验机报告后协助客户与卖方重新谈判，最终以更低价格成交并由卖方负责轴承更换后交付。",
    metrics: ["发现隐性设备问题", "协助客户节省采购成本", "出具中英双语验机报告"],
  },
  {
    tag: "长期维保服务",
    title: "某封测厂焊线机群的年度维保",
    content:
      "与某中型封装测试企业签署年度维保合同，覆盖其 12 台 ASM、K&S 焊线机的预防性维护与故障响应服务。通过制定季度 PM 计划、本地备件库存管理和工程师快速响应机制，将客户焊线机群的非计划停机时间较合作前降低约 60%，设备综合利用率（OEE）提升明显。",
    metrics: ["12台焊线机覆盖", "非计划停机减少60%", "OEE显著提升"],
  },
];

const timeline = [
  { year: "2016", event: "公司成立，专注华南地区半导体设备交易" },
  { year: "2018", event: "扩展服务至长三角，建立整备翻新能力" },
  { year: "2020", event: "启动全球设备采购网络，首次完成跨境设备验机服务" },
  { year: "2022", event: "推出年度维保合同服务，服务客户数突破 30 家" },
  { year: "2024", event: "设备成交台次突破 300 台，服务客户覆盖国内主要半导体产业聚集区" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <div className="relative overflow-hidden bg-[#080810] border-b border-white/[0.06]">
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
        >
          <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[400px] bg-blue-600/5 rounded-full blur-[100px]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <p className="text-xs font-semibold tracking-widest uppercase text-blue-400 mb-3">
            关于我们
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white mb-5 max-w-2xl leading-[1.15]">
            专注半导体中后道设备交易与服务
          </h1>
          <p className="text-base text-[#606070] max-w-xl leading-relaxed mb-8">
            芯迹半导体设备成立于2016年，深耕半导体中后道设备交易与服务领域。我们不是设备中介，而是具备原厂技术背景的专业服务商——每一台设备的背后，都有工程师的亲手验证。
          </p>
          <Link href="/contact">
            <Button className="h-10 px-5 gap-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium border-0 rounded-lg cursor-pointer">
              联系我们
              <ChevronRight size={15} />
            </Button>
          </Link>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-[#0a0a14] border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl sm:text-4xl font-semibold text-white mb-1">
                  {stat.value}
                </p>
                <p className="text-sm font-medium text-[#a0a0b0]">
                  {stat.label}
                </p>
                <p className="text-xs text-[#404050] mt-0.5">{stat.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Capabilities */}
      <section className="py-20 bg-[#080810] border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-xs font-semibold tracking-widest uppercase text-blue-400 mb-3">
              核心能力
            </p>
            <h2 className="text-2xl sm:text-3xl font-semibold text-white max-w-xl">
              专业能力构成我们的竞争壁垒
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {capabilities.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-[#111118] border border-white/[0.06] rounded-2xl p-7"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-500/20 mb-5">
                    <Icon size={18} className="text-blue-400" />
                  </div>
                  <h3 className="text-base font-semibold text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#606070] leading-[1.9]">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Cases */}
      <section className="py-20 bg-[#0a0a14] border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-xs font-semibold tracking-widest uppercase text-blue-400 mb-3">
              服务案例
            </p>
            <h2 className="text-2xl sm:text-3xl font-semibold text-white">
              用结果说话
            </h2>
            <p className="text-sm text-[#606070] mt-2">
              以下案例经客户授权，隐去具体企业名称
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-6">
            {cases.map((c) => (
              <div
                key={c.title}
                className="bg-[#111118] border border-white/[0.06] rounded-2xl p-6 flex flex-col"
              >
                <span className="inline-block text-xs font-medium text-blue-400 bg-blue-600/10 border border-blue-500/20 px-2.5 py-1 rounded-full mb-4 self-start">
                  {c.tag}
                </span>
                <h3 className="text-base font-semibold text-white mb-3">
                  {c.title}
                </h3>
                <p className="text-sm text-[#606070] leading-relaxed flex-1">
                  {c.content}
                </p>
                <ul className="mt-5 pt-5 border-t border-white/[0.06] space-y-1.5">
                  {c.metrics.map((m) => (
                    <li
                      key={m}
                      className="flex items-center gap-2 text-xs text-[#a0a0b0]"
                    >
                      <CheckCircle2 size={12} className="text-emerald-400 shrink-0" />
                      {m}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-[#080810] border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-xs font-semibold tracking-widest uppercase text-blue-400 mb-3">
              发展历程
            </p>
            <h2 className="text-2xl sm:text-3xl font-semibold text-white">
              从0到300+台的成长轨迹
            </h2>
          </div>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[11px] top-2 bottom-2 w-px bg-white/[0.06] hidden sm:block" />
            <div className="space-y-8">
              {timeline.map((item) => (
                <div key={item.year} className="flex gap-6 items-start">
                  <div className="flex flex-col items-center shrink-0">
                    <div className="w-6 h-6 rounded-full bg-blue-600/20 border border-blue-500/30 flex items-center justify-center relative z-10">
                      <div className="w-2 h-2 rounded-full bg-blue-400" />
                    </div>
                  </div>
                  <div className="pb-2">
                    <span className="text-xs font-bold text-blue-400 mb-1 block">
                      {item.year}
                    </span>
                    <p className="text-sm text-[#a0a0b0]">{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-[#0a0a14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-xs font-semibold tracking-widest uppercase text-blue-400 mb-3">
              企业价值观
            </p>
            <h2 className="text-2xl sm:text-3xl font-semibold text-white">
              我们相信的事
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {values.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="flex gap-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-500/20 shrink-0 mt-0.5">
                    <Icon size={18} className="text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#606070] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection
        headline="与我们合作"
        subtext="无论是设备采购、独立验机还是产线维保，我们的工程师团队随时准备提供专业支持。"
        primaryLabel="联系我们"
        secondaryLabel="查看在售设备"
        secondaryHref="/equipment"
      />
    </>
  );
}
