import type { Metadata } from "next";
import { Suspense } from "react";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import InquiryForm from "@/components/contact/InquiryForm";

export const metadata: Metadata = {
  title: "联系我们",
  description:
    "提交设备采购询盘或服务需求，芯迹半导体设备工程师团队将在1个工作日内回复，支持电话、邮件、微信多渠道沟通。",
};

const contactItems = [
  {
    icon: Phone,
    label: "电话 / 微信",
    value: "400-xxx-xxxx",
    sub: "工作日 09:00 - 18:00",
  },
  {
    icon: Mail,
    label: "商务邮箱",
    value: "bd@xinjisemi.com",
    sub: "24小时内回复",
  },
  {
    icon: MapPin,
    label: "公司地址",
    value: "上海市浦东新区张江高科技园区",
    sub: "（详细地址见合作协议）",
  },
  {
    icon: Clock,
    label: "响应时效",
    value: "1个工作日内",
    sub: "紧急需求可电话直达",
  },
];

const faqs = [
  {
    q: "设备是否支持到厂验机？",
    a: "所有在售设备均支持到厂验机，买方工程师可全程参与。部分海外设备可在国内整备后安排验机，费用按实际情况协商。",
  },
  {
    q: "设备发货前是否有整备记录？",
    a: "经整备的设备均随机附带完整的整备工作记录，含备件更换清单、电气测试数据及工艺验证报告。",
  },
  {
    q: "是否提供安装调试服务？",
    a: "提供。工程师可到买方厂区负责设备开箱、定位安装、公用工程接入及功能调试，具体收费按设备类型和工作量报价。",
  },
  {
    q: "设备是否提供保修？",
    a: "整备设备提供90天质保，具体保修范围以合同条款为准。维保合同客户享有优先响应通道。",
  },
];

function FormSkeleton() {
  return (
    <div className="space-y-5 animate-pulse">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="h-10 bg-white/[0.04] rounded-lg" />
      ))}
      <div className="h-24 bg-white/[0.04] rounded-lg" />
      <div className="h-11 bg-blue-600/20 rounded-lg" />
    </div>
  );
}

export default function ContactPage() {
  return (
    <>
      {/* Page hero */}
      <div className="bg-[#080810] border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <p className="text-xs font-semibold tracking-widest uppercase text-blue-400 mb-3">
            联系我们
          </p>
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white mb-3">
            提交采购需求或服务询盘
          </h1>
          <p className="text-sm text-[#606070] max-w-lg leading-relaxed">
            填写下方表单，我们的工程师将在1个工作日内与您联系，提供设备资料、报价及技术咨询服务。
          </p>
        </div>
      </div>

      {/* Main */}
      <div className="bg-[#080810]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid lg:grid-cols-[2fr_3fr] gap-12 items-start">

            {/* Left: contact info + FAQ */}
            <div className="space-y-10">
              {/* Contact details */}
              <div>
                <h2 className="text-base font-semibold text-white mb-5">联系方式</h2>
                <ul className="space-y-4">
                  {contactItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <li key={item.label} className="flex items-start gap-3">
                        <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-blue-600/10 border border-blue-500/20 shrink-0 mt-0.5">
                          <Icon size={15} className="text-blue-400" />
                        </div>
                        <div>
                          <p className="text-xs text-[#404050] mb-0.5">{item.label}</p>
                          <p className="text-sm font-medium text-white">{item.value}</p>
                          <p className="text-xs text-[#606070]">{item.sub}</p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* WeChat QR placeholder */}
              <div className="bg-[#111118] border border-white/[0.06] rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <MessageCircle size={15} className="text-blue-400" />
                  <span className="text-sm font-medium text-white">微信扫码咨询</span>
                </div>
                <div className="aspect-square w-28 bg-white/[0.04] rounded-lg flex items-center justify-center border border-white/[0.06]">
                  <span className="text-xs text-[#303040] text-center leading-tight px-2">
                    微信二维码<br />待上传
                  </span>
                </div>
                <p className="text-xs text-[#606070] mt-3 leading-relaxed">
                  扫码添加业务微信，可直接发送设备需求清单或询价单。
                </p>
              </div>

              {/* FAQ */}
              <div>
                <h2 className="text-base font-semibold text-white mb-5">常见问题</h2>
                <ul className="space-y-5">
                  {faqs.map((faq) => (
                    <li key={faq.q}>
                      <p className="text-sm font-medium text-[#a0a0b0] mb-1.5">
                        {faq.q}
                      </p>
                      <p className="text-sm text-[#606070] leading-relaxed">
                        {faq.a}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right: form */}
            <div className="bg-[#111118] border border-white/[0.06] rounded-2xl p-7">
              <h2 className="text-base font-semibold text-white mb-1">询盘表单</h2>
              <p className="text-xs text-[#606070] mb-6">
                标 <span className="text-red-400">*</span> 为必填项
              </p>
              <Suspense fallback={<FormSkeleton />}>
                <InquiryForm />
              </Suspense>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
