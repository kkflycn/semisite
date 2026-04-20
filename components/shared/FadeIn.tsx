"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease },
  },
};

/* ── Simple fade-in on scroll ─────────────────────────────────────────── */
interface FadeInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function FadeIn({ children, delay = 0, className }: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, ease, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ── Stagger container — wraps a grid/flex parent ─────────────────────── */
interface FadeInStaggerProps {
  children: ReactNode;
  stagger?: number;
  className?: string;
}

export function FadeInStagger({
  children,
  stagger = 0.08,
  className,
}: FadeInStaggerProps) {
  return (
    <motion.div
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: stagger } },
      }}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-40px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ── Direct child of FadeInStagger ────────────────────────────────────── */
interface FadeInItemProps {
  children: ReactNode;
  className?: string;
}

export function FadeInItem({ children, className }: FadeInItemProps) {
  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  );
}
