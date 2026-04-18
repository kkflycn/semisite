export type EquipmentCategory =
  | "probe-station"
  | "tester"
  | "grinder"
  | "dicer"
  | "die-bonder"
  | "wire-bonder"
  | "mold"
  | "other";

export const CATEGORY_LABELS: Record<EquipmentCategory, string> = {
  "probe-station": "探针台",
  tester: "测试机",
  grinder: "减薄机",
  dicer: "划片机",
  "die-bonder": "固晶机",
  "wire-bonder": "焊线机",
  mold: "塑封机",
  other: "其他",
};

export type EquipmentStatus = "in-stock" | "on-order";

export interface EquipmentSpec {
  label: string;
  value: string;
}

export interface Equipment {
  id: string;
  name: string;
  brand: string;
  model: string;
  category: EquipmentCategory;
  year: number;
  origin: string;
  status: EquipmentStatus;
  refurbished: boolean;
  inspected: boolean;
  process: string[];
  specs: EquipmentSpec[];
  description: string;
  imageUrl: string;
  videoUrl?: string;
  inquiryNote?: string;
}

export interface InquiryFormData {
  company: string;
  name: string;
  title: string;
  phone: string;
  email: string;
  interestedEquipment?: string;
  requirements: string;
  budget?: string;
  deliveryTime?: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: string;
}
