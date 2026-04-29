"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

interface FadeInOnScrollProps {
  children: ReactNode;
  className?: string;
}

export function FadeInOnScroll({ children, className }: FadeInOnScrollProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
