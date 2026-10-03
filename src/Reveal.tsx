import type { CSSProperties, ElementType, HTMLAttributes, ReactNode } from "react"
import { useReveal } from "./useReveal"

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  as?: ElementType
} & Omit<HTMLAttributes<HTMLElement>, "className" | "children" | "style">

export function Reveal({
  children,
  className = "",
  delay = 0,
  as: Tag = "div",
  ...rest
}: RevealProps) {
  const ref = useReveal<HTMLElement>()

  return (
    <Tag
      ref={ref}
      className={`reveal ${className}`.trim()}
      style={delay ? ({ "--reveal-delay": `${delay}ms` } as CSSProperties) : undefined}
      {...rest}
    >
      {children}
    </Tag>
  )
}
