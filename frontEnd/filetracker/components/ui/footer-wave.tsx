import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "../../lib/utils"

const footerVariant = cva("absolute -left-1 right-1 top-5 bottom-0", {
  variants: {
    variant: {
      eighty: "",
      hundred: "",
      fifty: "",
    },
  },
  defaultVariants: {
    variant: "eighty",
  },
})

export interface footerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof footerVariant> {}

const Footer = React.forwardRef<HTMLDivElement, footerProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn(" border  shadow", className)} {...props} />
  )
)

Footer.displayName = "Fotter"

export { footerVariant, Footer }

/* Rectangle 95 */

// left: -0.06%;
// right: 0.06%;
// top: 20.03%;
// bottom: 0%;

// background: linear-gradient(90deg, rgba(1, 106, 112, 0.8) 0%, rgba(1, 106, 112, 0.8) 50%, rgba(1, 106, 112, 0.8) 100%);
