import {
  forwardRef, type HTMLAttributes, useId, useMemo
} from "react";

import { cn } from "@/shared/lib/cn";
import { FormItemContext } from "@/shared/ui/form/ui/form-item/FormItem.context";

export const FormItem = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const id = useId();
  const memoizedContextValue = useMemo(() => ({ id }), [id]);

  return (
    <FormItemContext.Provider value={memoizedContextValue}>
      <div ref={ref} className={cn("space-y-1", className)} {...props} />
    </FormItemContext.Provider>
  );
});
FormItem.displayName = "FormItem";
