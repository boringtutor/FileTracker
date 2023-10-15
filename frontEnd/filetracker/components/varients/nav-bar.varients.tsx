import { cva } from "class-variance-authority"

const navbarVarients = cva({
  variants: {
    variant: {
      logo: "h-6 w-6 text-text hover:text-background transition-all ease-in-out",
      item: "flex items-center text-sm font-medium text-text hover:text-background transition-all ease-in-out",
      disbaled:
        "flex items-center text-sm font-medium text-text hover:text-background transition-all ease-in-out cursor-not-allowed opacity-80",
    },
  },
  defaultVariants: {
    variant: "logo",
  },
})

export default { navbarVarients }
