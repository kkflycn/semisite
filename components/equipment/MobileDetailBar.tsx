"use client";

import Link from "next/link";
import { ArrowLeft, MessageSquare } from "lucide-react";

export default function MobileDetailBar({ inquiryHref }: { inquiryHref: string }) {
  return (
    <div className="block lg:hidden fixed bottom-0 inset-x-0 z-50 bg-[#080810]/96 backdrop-blur-md border-t border-white/[0.08] px-4 pt-3 pb-5">
      <div className="flex gap-2.5">
        <Link
          href="/"
          className="flex items-center gap-1.5 h-12 px-4 rounded-xl border border-white/[0.12] bg-white/[0.04] text-[#a0a0b0] text-[14px] font-medium shrink-0 hover:text-white hover:bg-white/[0.08] transition-colors"
        >
          <ArrowLeft size={16} />
          返回
        </Link>
        <Link href={inquiryHref} className="flex-1">
          <button className="w-full h-12 flex items-center justify-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-[15px] font-semibold transition-colors cursor-pointer">
            <MessageSquare size={16} />
            立即询盘
          </button>
        </Link>
      </div>
    </div>
  );
}
