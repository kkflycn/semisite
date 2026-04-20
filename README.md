# 芯迹半导体设备 · Semisite

半导体中后道设备交易与服务平台，专注探针台、测试机、焊线机、划片机等核心设备的买卖、验机、整备与维保。

**线上预览：** https://kkflycn.github.io/semisite

---

## 技术栈

- **Next.js 16** — App Router，静态导出 (`output: "export"`)
- **Tailwind CSS v4** + **shadcn/ui v4**
- **Framer Motion** — 页面入场 & 滚动触发动画
- **TypeScript** · **Playwright** (视觉 QA)

## 本地开发

```bash
npm install
npm run dev        # http://localhost:3000
```

## 构建与部署

```bash
npm run build      # 静态导出到 /out 目录
```

部署到 GitHub Pages（自动）：push 到 `main` 分支后，GitHub Actions 会构建并发布到 `gh-pages`。

## 视觉自查

需先启动开发服务器：

```bash
node scripts/screenshot.mjs          # 所有页面 desktop + mobile
node scripts/screenshot.mjs /        # 仅首页
node scripts/screenshot.mjs /equipment/ps-001
```

截图输出到 `.screenshots/`。

## 项目结构

```
app/                  # 页面（首页、设备列表、设备详情、服务、关于、联系）
components/
  home/               # 首页各区块（Hero、Business、Trust、Featured、Services）
  equipment/          # 设备列表与筛选
  contact/            # 询盘表单
  layout/             # Header、Footer、CTA
  shared/             # EquipmentCard、FadeIn 动画封装
data/equipments.ts    # 32 条设备数据
types/index.ts        # 类型定义
```

## 数据维护

设备数据统一在 `data/equipments.ts` 管理。新增设备按 `Equipment` 接口填写，`category` 取值见 `types/index.ts` 的 `EquipmentCategory`。

询盘表单目前提交到 `console.log`，对接后端时替换 `components/contact/InquiryForm.tsx` 的 `onSubmit` 即可。
