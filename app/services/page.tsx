import type { Metadata } from "next";
import Link from "next/link";
import {
  Search,
  Hammer,
  Settings,
  Shield,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  FileText,
  Truck,
  Headphones,
  Layers,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import CTASection from "@/components/layout/CTASection";

export const metadata: Metadata = {
  title: "服务中心",
  description:
    "创芯半导体设备提供设备验机、整备翻新、安装调试及维保全套技术服务，覆盖半导体中后道设备全生命周期，工程师团队24小时响应。",
};

const services = [
  {
    id: "inspection",
    icon: Search,
    tag: "Independent Inspection",
    title: "设备验机",
    summary:
      "由资深工程师对设备进行系统性功能验证，出具客观、完整的检测报告，为采购决策提供可信依据。",
    description:
      "验机是设备交易中最关键的环节之一。我们的验机服务由具有原厂背景的资深工程师执行，覆盖机械结构、电气系统、控制软件及工艺性能的全面检测，确保设备状态如实呈现。无论是买方委托的独立验机，还是卖方主动提供的设备证明，我们均可提供中立、专业的评估服务。",
    features: [
      "机械结构精度与磨损状态评估",
      "电气系统绝缘与安全性检查",
      "控制软件及操作系统功能验证",
      "关键工艺参数实晶测试（含测试数据）",
      "出具标准化检测报告，含 Pass/Fail 判定",
      "支持买方工程师到厂见证验机",
    ],
    deliverables: ["设备检测报告（PDF）", "实机照片/视频记录", "关键参数测试数据表"],
  },
  {
    id: "refurbishment",
    icon: Hammer,
    tag: "Refurbishment",
    title: "整备翻新",
    summary:
      "针对性检修机械磨损件、电气老化件与光学组件，恢复设备至接近出厂状态，附出厂整备报告与交付前验证记录。",
    description:
      "二手设备整备的核心在于「有的放矢」——不是对设备进行表面清洁，而是基于深入的设备状态评估，对真正影响使用性能的部件进行针对性维修或更换。我们的整备服务遵循原厂工艺规范，所有替换备件优先采用原厂件或同等规格认证件，整备完成后进行完整的功能与工艺验证。",
    features: [
      "主轴轴承、导轨、传动系统专项大修",
      "电气控制板卡、驱动器及传感器检修更换",
      "光学系统（镜头/摄像头/对准系统）清洁校准",
      "冷却/气路/水路系统疏通与密封检查",
      "工艺参数重新标定与出厂验证",
      "整备报告含前后对比数据",
    ],
    deliverables: ["整备工作记录单", "备件更换清单", "出厂验证报告"],
  },
  {
    id: "installation",
    icon: Settings,
    tag: "Installation & Commissioning",
    title: "安装调试",
    summary:
      "工程师到厂负责设备开箱验货、安装定位、公用工程接入，完成功能调试与工艺参数优化，确保稳定达产。",
    description:
      "设备落地是整个采购周期中风险最集中的阶段。我们的安装调试团队熟悉主流半导体设备的现场安装要求，可协助客户完成厂房布局规划、公用工程对接（电/气/水/负压），以及设备定位调平、功能调试和初始工艺参数设定。对于从海外采购的设备，我们还可提供原厂技术文档翻译与操作培训支持。",
    features: [
      "开箱验货与运输损伤评估",
      "设备定位、调平与固定安装",
      "电气、气体、冷却水等公用工程接入",
      "设备上电调试与功能验证",
      "工艺参数初始设定与优化",
      "操作培训及技术文档交付",
    ],
    deliverables: ["安装调试记录", "工艺参数初始设定表", "操作培训记录"],
  },
  {
    id: "maintenance",
    icon: Shield,
    tag: "Maintenance & Support",
    title: "维保服务",
    summary:
      "提供预防性维护计划（PM）与故障响应维修，支持签署长期技术服务合同，关键备件本地备货保障产线连续运行。",
    description:
      "设备稳定运行是封测产线产能保障的基础。我们的维保服务体系包含两个层次：一是定期预防性维护（Preventive Maintenance），按季度或半年度计划对设备关键部件进行检查与预防性更换，降低非计划停机风险；二是故障响应维修服务，针对突发故障提供快速响应，工程师远程诊断 + 现场到厂双轨并行，最大限度压缩停机时间。",
    features: [
      "季度/半年度 PM 计划制定与执行",
      "关键备件本地库存管理",
      "故障远程诊断与技术支持（电话/视频）",
      "工程师现场到厂故障响应",
      "PM 维护记录与设备健康档案",
      "年度维保合同，灵活定制服务范围",
    ],
    deliverables: ["PM 执行记录", "设备健康档案", "备件消耗与库存报告"],
  },
];

const workflow = [
  {
    step: "01",
    icon: FileText,
    title: "需求沟通",
    desc: "提交服务需求，明确设备型号、当前状态与服务目标，我们在1个工作日内反馈初步方案。",
  },
  {
    step: "02",
    icon: Search,
    title: "设备评估",
    desc: "工程师到厂或远程评估设备现状，出具初步评估报告，确定服务范围与工期。",
  },
  {
    step: "03",
    icon: Hammer,
    title: "服务执行",
    desc: "按约定方案执行验机/整备/安装/维保，过程中保持实时沟通，关键节点提供进度报告。",
  },
  {
    step: "04",
    icon: FileText,
    title: "验收交付",
    desc: "服务完成后进行功能验证与工艺测试，客户确认后交付完整的服务报告与技术文档。",
  },
  {
    step: "05",
    icon: Headphones,
    title: "持续支持",
    desc: "交付后提供技术跟踪支持，问题在保障期内快速响应，建立长期合作关系。",
  },
];

const advantages = [
  {
    icon: Layers,
    title: "原厂工程师背景",
    desc: "团队核心成员具有 ASM、Disco、TEL、Teradyne 等原厂服务经验，熟悉设备底层工艺与维修规范。",
  },
  {
    icon: Truck,
    title: "全国快速响应",
    desc: "在长三角、珠三角、京津冀等半导体产业聚集区具备快速到厂能力，关键故障48小时内工程师到场。",
  },
  {
    icon: FileText,
    title: "完整文档交付",
    desc: "所有服务均出具结构化报告，含检测数据、操作记录与结论，满足 IATF 16949 / ISO 9001 审计要求。",
  },
  {
    icon: Shield,
    title: "服务质量承诺",
    desc: "整备/安装服务提供90天质保期；维保合同客户享有优先响应通道，停机损失风险最小化。",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <div className="bg-[#080810] border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <p className="text-xs font-semibold tracking-widest uppercase text-blue-400 mb-3">
            技术服务
          </p>
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white mb-4 max-w-2xl">
            覆盖设备全生命周期的技术服务
          </h1>
          <p className="text-base text-[#606070] max-w-xl leading-relaxed mb-8">
            从设备采购前的独立验机，到交付后的长期维保，我们的工程师团队提供端到端的专业技术支持，保障您的产线稳定达产。
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact">
              <Button className="h-10 px-5 gap-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium border-0 rounded-lg cursor-pointer">
                提交服务需求
                <ChevronRight size={15} />
              </Button>
            </Link>
            <a href="#inspection">
              <Button
                variant="outline"
                className="h-10 px-5 text-sm font-medium rounded-lg border-white/[0.12] bg-white/[0.04] text-[#a0a0b0] hover:text-white hover:bg-white/[0.08] cursor-pointer"
              >
                了解服务详情
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Service sections */}
      <div className="bg-[#080810]">
        {services.map((service, idx) => {
          const Icon = service.icon;
          const isEven = idx % 2 === 0;
          return (
            <section
              key={service.id}
              id={service.id}
              className={`border-b border-white/[0.06] ${isEven ? "bg-[#080810]" : "bg-[#0a0a14]"}`}
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid lg:grid-cols-[1fr_1fr] gap-12 items-start">
                  {/* Left: info */}
                  <div>
                    {/* Icon + tag */}
                    <div className="flex items-center gap-3 mb-5">
                      <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-500/20">
                        <Icon size={20} className="text-blue-400" />
                      </div>
                      <span className="text-xs font-semibold tracking-widest uppercase text-blue-400">
                        {service.tag}
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-3">
                      {service.title}
                    </h2>
                    <p className="text-sm font-medium text-[#a0a0b0] mb-4 leading-relaxed">
                      {service.summary}
                    </p>
                    <p className="text-sm text-[#606070] leading-[1.9]">
                      {service.description}
                    </p>

                    {/* Deliverables */}
                    <div className="mt-6">
                      <p className="text-xs font-semibold text-[#404050] uppercase tracking-widest mb-3">
                        交付物
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {service.deliverables.map((d) => (
                          <span
                            key={d}
                            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs text-[#a0a0b0] border border-white/[0.08] bg-white/[0.02]"
                          >
                            <FileText size={10} className="text-blue-400" />
                            {d}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right: feature list */}
                  <div className="bg-[#111118] border border-white/[0.06] rounded-2xl p-6">
                    <p className="text-xs font-semibold text-[#404050] uppercase tracking-widest mb-4">
                      服务内容
                    </p>
                    <ul className="space-y-3">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-3 text-sm text-[#a0a0b0]"
                        >
                          <CheckCircle2
                            size={15}
                            className="text-blue-400 shrink-0 mt-0.5"
                          />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 pt-5 border-t border-white/[0.06]">
                      <Link
                        href={`/contact?service=${encodeURIComponent(service.title)}`}
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors group"
                      >
                        咨询此服务
                        <ArrowRight
                          size={14}
                          className="group-hover:translate-x-0.5 transition-transform"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* Workflow */}
      <section className="py-20 bg-[#080810] border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-xs font-semibold tracking-widest uppercase text-blue-400 mb-3">
              服务流程
            </p>
            <h2 className="text-2xl sm:text-3xl font-semibold text-white">
              标准化交付流程
            </h2>
            <p className="text-sm text-[#606070] mt-2">
              透明、可追溯的服务流程，每个节点均有文档记录
            </p>
          </div>

          <div className="relative">
            {/* Connector line */}
            <div className="absolute top-6 left-6 right-6 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent hidden lg:block" />

            <div className="grid sm:grid-cols-3 lg:grid-cols-5 gap-6">
              {workflow.map((step) => {
                const Icon = step.icon;
                return (
                  <div key={step.step} className="relative">
                    <div className="flex flex-col items-start">
                      <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#111118] border border-white/[0.08] mb-4 relative z-10">
                        <Icon size={18} className="text-blue-400" />
                      </div>
                      <span className="text-xs font-bold text-[#303040] mb-1">
                        {step.step}
                      </span>
                      <h3 className="text-sm font-semibold text-white mb-2">
                        {step.title}
                      </h3>
                      <p className="text-xs text-[#606070] leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-20 bg-[#0a0a14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-xs font-semibold tracking-widest uppercase text-blue-400 mb-3">
              为什么选择我们
            </p>
            <h2 className="text-2xl sm:text-3xl font-semibold text-white">
              专业团队，可信赖的服务保障
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {advantages.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-[#111118] border border-white/[0.06] rounded-xl p-6"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-500/20 mb-4">
                    <Icon size={18} className="text-blue-400" />
                  </div>
                  <h3 className="text-sm font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#606070] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection
        headline="有服务需求？立即联系我们"
        subtext="告诉我们您的设备型号、当前状态和服务目标，我们的工程师团队将在1个工作日内提供初步方案和报价。"
        primaryLabel="提交服务需求"
        secondaryLabel="查看在售设备"
        secondaryHref="/equipment"
      />
    </>
  );
}
