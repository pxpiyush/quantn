import React from "react";

interface PageHeaderProps {
  hero: string;
  subtitle?: string;
}

export default function PageHeader({ hero, subtitle }: PageHeaderProps) {
  return (
    <div className="px-6 pt-2 pb-4">
      <div className="inline-flex items-center px-4 py-2 rounded-xl glass-effect bg-card/60 border border-border shadow-neumorphic mb-4">
        <span className="text-base font-black tracking-tight text-foreground">QUANTN</span>
      </div>
      <div className="h-px bg-border mb-4" />
      <h1 className="text-hero text-foreground">{hero}</h1>
      {subtitle && <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{subtitle}</p>}
    </div>
  );
}
