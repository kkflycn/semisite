import Link from "next/link";
import { ChevronRight, ArrowLeft, Package, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

const suggestions = [
  { label: "浏览在售设备", href: "/equipment", icon: Package },
  { label: "服务中心", href: "/services", icon: Search },
];

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-[#080810]">
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-600/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative text-center px-4 sm:px-6">
        {/* 404 number */}
        <p className="text-[120px] sm:text-[160px] font-bold leading-none tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white/10 to-transparent select-none mb-2">
          404
        </p>

        <h1 className="text-2xl sm:text-3xl font-semibold text-white mb-3 -mt-4">
          页面不存在
        </h1>
        <p className="text-sm text-[#606070] max-w-sm mx-auto leading-relaxed mb-8">
          您访问的页面可能已移除、链接有误，或暂时无法访问。
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10">
          <Link href="/">
            <Button
              variant="outline"
              className="h-10 px-5 gap-2 text-sm font-medium rounded-lg border-white/[0.12] bg-white/[0.04] text-[#a0a0b0] hover:text-white hover:bg-white/[0.08] cursor-pointer"
            >
              <ArrowLeft size={14} />
              返回首页
            </Button>
          </Link>
          <Link href="/contact">
            <Button className="h-10 px-5 gap-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium border-0 rounded-lg cursor-pointer">
              提交询盘
              <ChevronRight size={14} />
            </Button>
          </Link>
        </div>

        {/* Quick links */}
        <div className="flex items-center justify-center gap-4">
          {suggestions.map(({ label, href, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className="inline-flex items-center gap-1.5 text-sm text-[#606070] hover:text-blue-400 transition-colors"
            >
              <Icon size={13} />
              {label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
