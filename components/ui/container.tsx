import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

type ContainerProps<T extends ElementType> = {
  children: ReactNode;
  className?: string;
  as?: T;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

export function Container<T extends ElementType = "div">({
  children,
  className,
  as,
  ...rest
}: ContainerProps<T>) {
  const Component = as ?? "div";
  const classes = className ? `app-container ${className}` : "app-container";

  return (
    <Component className={classes} {...rest}>
      {children}
    </Component>
  );
}
