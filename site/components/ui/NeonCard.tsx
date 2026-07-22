"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { hoverLift, tapPress, useMotionSafe } from "@/lib/motion";

type Variant = "cyan" | "lime" | "magenta" | "gradient";

export default function NeonCard({
  children,
  variant = "cyan",
  bracket = false,
  className = "",
}: {
  children: ReactNode;
  variant?: Variant;
  bracket?: boolean;
  className?: string;
}) {
  const motionSafe = useMotionSafe();
  const classes = `neon-card neon-card--${variant} ${bracket ? "neon-card--bracket" : ""} p-4 sm:p-5 ${className}`;

  if (!motionSafe) {
    return <div className={classes}>{children}</div>;
  }

  return (
    <motion.div className={classes} whileHover={hoverLift} whileTap={tapPress} transition={{ duration: 0.25 }}>
      {children}
    </motion.div>
  );
}
