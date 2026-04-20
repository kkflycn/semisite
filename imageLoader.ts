export default function loader({ src }: { src: string; width: number; quality?: number }) {
  const basePath = process.env.NODE_ENV === "production" ? "/semisite" : "";
  return `${basePath}${src}`;
}
