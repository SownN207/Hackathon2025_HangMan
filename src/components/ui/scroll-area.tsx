import * as React from "react";
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";

import { cn } from "~/lib/utils"; // Optional utility to combine classes

const ScrollArea = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <ScrollAreaPrimitive.Root
    ref={ref}
    className={cn("relative overflow-hidden rounded-lg", className)}
    {...props}
  >
    <ScrollAreaPrimitive.Viewport className="w-full h-full rounded-[inherit]">
      {children}
    </ScrollAreaPrimitive.Viewport>

    <ScrollAreaPrimitive.Scrollbar
      orientation="vertical"
      className="flex select-none touch-none p-0.5 bg-gray-200 dark:bg-gray-700"
    >
      <ScrollAreaPrimitive.Thumb className="flex-1 bg-gray-400 rounded-full dark:bg-gray-500" />
    </ScrollAreaPrimitive.Scrollbar>

    <ScrollAreaPrimitive.Corner className="bg-gray-200 dark:bg-gray-700" />
  </ScrollAreaPrimitive.Root>
));

ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName;

export { ScrollArea };
