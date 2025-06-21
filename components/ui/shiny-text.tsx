import { cn } from "@/lib/utils";
import React, { CSSProperties } from "react";

interface ShinyTextProps {
  text: string;
  className?: string;
  style?: CSSProperties;
}

const ShinyText: React.FC<ShinyTextProps> = ({ text, className, style }) => {
  return (
    <p
      style={
        {
          "--shine-angle": "45deg",
          "--shine-color": "#fff",
          ...style,
        } as CSSProperties
      }
      className={cn(
        "text-2xl font-bold text-gray-800 dark:text-gray-200",
        "animate-background-shine bg-[linear-gradient(var(--shine-angle),_transparent_20%,_var(--shine-color)_30%,_var(--shine-color)_70%,_transparent_80%)] bg-[length:250%_100%] bg-clip-text text-transparent",
        className
      )}
    >
      {text}
    </p>
  );
};

export default ShinyText; 