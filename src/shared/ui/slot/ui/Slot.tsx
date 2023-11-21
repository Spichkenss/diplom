import {
  Children,
  cloneElement,
  forwardRef,
  type HTMLAttributes,
  isValidElement,
  type PropsWithChildren
} from "react";

interface SlotProps extends PropsWithChildren<HTMLAttributes<HTMLElement>> {}

export const Slot = forwardRef<HTMLElement, SlotProps>(({ children, ...rest }: SlotProps, ref) => (
  Children.map(children, (child) => {
    if (isValidElement(child)) {
      return cloneElement(child, { ...child.props, ref, ...rest });
    }
    return child;
  })
));

Slot.displayName = "Slot";
