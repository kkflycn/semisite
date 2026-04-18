"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useSearchParams } from "next/navigation";
import { Send, CheckCircle2, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const schema = z.object({
  company: z.string().min(1, "请填写公司名称"),
  name: z.string().min(1, "请填写联系人姓名"),
  title: z.string().min(1, "请填写职位"),
  phone: z
    .string()
    .min(1, "请填写手机号或微信")
    .regex(/^[\d\-\+\(\)\s]{7,}$/, "请填写有效的手机号码"),
  email: z.string().min(1, "请填写邮箱").email("邮箱格式不正确"),
  interestedEquipment: z.string().optional(),
  requirements: z.string().min(10, "需求描述至少10个字"),
  budget: z.string().optional(),
  deliveryTime: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

const BUDGET_OPTIONS = [
  { value: "", label: "不便透露 / 面议" },
  { value: "under-50w", label: "50万以内" },
  { value: "50w-100w", label: "50 - 100万" },
  { value: "100w-300w", label: "100 - 300万" },
  { value: "over-300w", label: "300万以上" },
];

const DELIVERY_OPTIONS = [
  { value: "", label: "暂无明确计划" },
  { value: "asap", label: "尽快（1个月内）" },
  { value: "1-3m", label: "1 - 3 个月" },
  { value: "3-6m", label: "3 - 6 个月" },
  { value: "over-6m", label: "6 个月以上" },
];

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return <p className="text-xs text-red-400 mt-1">{message}</p>;
}

const inputCls =
  "h-10 bg-[#111118] border-white/[0.10] text-white placeholder:text-[#404050] focus-visible:ring-blue-500/50 focus-visible:border-blue-500/50 rounded-lg text-sm";

const selectCls =
  "w-full h-10 bg-[#111118] border border-white/[0.10] text-sm text-[#a0a0b0] rounded-lg px-3 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 appearance-none";

export default function InquiryForm() {
  const searchParams = useSearchParams();
  const preEquipment = searchParams.get("equipment") ?? "";
  const preService = searchParams.get("service") ?? "";

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { budget: "", deliveryTime: "" },
  });

  useEffect(() => {
    if (preEquipment) setValue("interestedEquipment", preEquipment);
    else if (preService) setValue("interestedEquipment", preService);
  }, [preEquipment, preService, setValue]);

  async function onSubmit(data: FormData) {
    // Simulate network delay — replace with webhook/email API call
    await new Promise((r) => setTimeout(r, 800));
    console.log("[InquiryForm] submission:", JSON.stringify(data, null, 2));
  }

  if (isSubmitSuccessful) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-emerald-600/10 border border-emerald-500/20 mb-5">
          <CheckCircle2 size={28} className="text-emerald-400" />
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">询盘已提交</h3>
        <p className="text-sm text-[#606070] max-w-xs leading-relaxed">
          我们已收到您的需求，工程师将在 1 个工作日内与您联系。感谢您的信任。
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      {/* Row 1: company + name */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="company" className="text-xs text-[#606070] mb-1.5 block">
            公司名称 <span className="text-red-400">*</span>
          </Label>
          <Input
            id="company"
            placeholder="贵司全称"
            className={cn(inputCls, errors.company && "border-red-500/50")}
            {...register("company")}
          />
          <FieldError message={errors.company?.message} />
        </div>
        <div>
          <Label htmlFor="name" className="text-xs text-[#606070] mb-1.5 block">
            联系人 <span className="text-red-400">*</span>
          </Label>
          <Input
            id="name"
            placeholder="姓名"
            className={cn(inputCls, errors.name && "border-red-500/50")}
            {...register("name")}
          />
          <FieldError message={errors.name?.message} />
        </div>
      </div>

      {/* Row 2: title + phone */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="title" className="text-xs text-[#606070] mb-1.5 block">
            职位 <span className="text-red-400">*</span>
          </Label>
          <Input
            id="title"
            placeholder="如：采购经理 / 工程经理"
            className={cn(inputCls, errors.title && "border-red-500/50")}
            {...register("title")}
          />
          <FieldError message={errors.title?.message} />
        </div>
        <div>
          <Label htmlFor="phone" className="text-xs text-[#606070] mb-1.5 block">
            手机 / 微信 <span className="text-red-400">*</span>
          </Label>
          <Input
            id="phone"
            placeholder="手机号或微信号"
            className={cn(inputCls, errors.phone && "border-red-500/50")}
            {...register("phone")}
          />
          <FieldError message={errors.phone?.message} />
        </div>
      </div>

      {/* Email */}
      <div>
        <Label htmlFor="email" className="text-xs text-[#606070] mb-1.5 block">
          邮箱 <span className="text-red-400">*</span>
        </Label>
        <Input
          id="email"
          type="email"
          placeholder="business@company.com"
          className={cn(inputCls, errors.email && "border-red-500/50")}
          {...register("email")}
        />
        <FieldError message={errors.email?.message} />
      </div>

      {/* Interested equipment */}
      <div>
        <Label htmlFor="interestedEquipment" className="text-xs text-[#606070] mb-1.5 block">
          意向设备
          <span className="text-[#404050] ml-1">（选填）</span>
        </Label>
        <Input
          id="interestedEquipment"
          placeholder="如：TEL P12XL 探针台 / 焊线机 ASM EAGLE 60"
          className={inputCls}
          {...register("interestedEquipment")}
        />
      </div>

      {/* Requirements */}
      <div>
        <Label htmlFor="requirements" className="text-xs text-[#606070] mb-1.5 block">
          需求描述 <span className="text-red-400">*</span>
        </Label>
        <Textarea
          id="requirements"
          rows={4}
          placeholder="请描述您的采购需求、设备用途、数量、技术要求等，越详细我们越能快速为您提供方案"
          className={cn(
            "bg-[#111118] border-white/[0.10] text-white placeholder:text-[#404050] focus-visible:ring-blue-500/50 focus-visible:border-blue-500/50 rounded-lg text-sm resize-none",
            errors.requirements && "border-red-500/50"
          )}
          {...register("requirements")}
        />
        <FieldError message={errors.requirements?.message} />
      </div>

      {/* Row: budget + delivery */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="budget" className="text-xs text-[#606070] mb-1.5 block">
            预算范围
            <span className="text-[#404050] ml-1">（选填）</span>
          </Label>
          <div className="relative">
            <select id="budget" className={selectCls} {...register("budget")}>
              {BUDGET_OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
              <svg className="w-4 h-4 text-[#404050]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>
        <div>
          <Label htmlFor="deliveryTime" className="text-xs text-[#606070] mb-1.5 block">
            期望交付时间
            <span className="text-[#404050] ml-1">（选填）</span>
          </Label>
          <div className="relative">
            <select id="deliveryTime" className={selectCls} {...register("deliveryTime")}>
              {DELIVERY_OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
              <svg className="w-4 h-4 text-[#404050]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Submit */}
      <div className="pt-2">
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full h-11 gap-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium border-0 rounded-lg transition-colors cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <Loader2 size={15} className="animate-spin" />
              提交中...
            </>
          ) : (
            <>
              <Send size={15} />
              提交询盘
            </>
          )}
        </Button>
        <p className="text-center text-xs text-[#404050] mt-2">
          提交即视为同意我们联系您，工作日 24 小时内响应
        </p>
      </div>
    </form>
  );
}
