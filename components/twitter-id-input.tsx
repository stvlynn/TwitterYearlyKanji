"use client";

import { Input } from "@/components/ui/input";

export function TwitterIdInput() {
  return (
    <div className="relative">
      <span 
        className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/90 text-xl"
        style={{ fontFamily: 'system-ui' }}
      >
        @
      </span>
      <Input
        type="text"
        name="userId"
        className="pl-10 h-14 text-xl rounded-xl border-2 focus-visible:ring-1"
        placeholder="Twitter ID"
        required
      />
    </div>
  );
}