import type { Metadata } from "next";
import { Suspense } from "react";
import EquipmentList from "@/components/equipment/EquipmentList";
import { equipments } from "@/data/equipments";

export const metadata: Metadata = {
  title: "在售设备",
  description:
    "浏览芯迹半导体设备在售库存，涵盖探针台、测试机、减薄机、划片机、固晶机、焊线机、塑封机等半导体中后道核心设备，均已完成整备验机。",
};

export default function EquipmentPage() {
  return (
    <>
      {/* Page hero */}
      <div className="bg-[#080810] border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <p className="text-xs font-semibold tracking-widest uppercase text-blue-400 mb-3">
            在售设备
          </p>
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white mb-3">
            半导体中后道设备库存
          </h1>
          <p className="text-sm text-[#606070] max-w-xl leading-relaxed">
            覆盖 8 大设备类别，共 {equipments.length}{" "}
            台在售机台，含探针台、测试机、减薄机、划片机、固晶机、焊线机、塑封机及检测类设备。
            <br />
            所有设备均已完成来源核查，整备验机设备附有完整检测报告。
          </p>
        </div>
      </div>

      {/* Filtered list */}
      <Suspense fallback={<div className="py-20 text-center text-sm text-[#606070]">加载中...</div>}>
        <EquipmentList equipments={equipments} />
      </Suspense>
    </>
  );
}
