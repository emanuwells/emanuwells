"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";
import { pageEnter, useMotionSafe } from "@/lib/motion";

export default function PageMotion({ children }: { children: ReactNode }) {
  const motionSafe = useMotionSafe();

  if (!motionSafe) {
    return <>{children}</>;
  }

  return (
    <motion.div initial="hidden" animate="visible" variants={pageEnter}>
      {children}
    </motion.div>
  );
}
