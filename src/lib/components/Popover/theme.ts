import { createTheme } from "../../helpers/create-theme";
import type { FlowbitePopoverTheme } from "./Popover";

export const popoverTheme: FlowbitePopoverTheme = createTheme({
  target: "w-fit",
  animation: "transition-opacity",
  arrow: {
    base: "absolute z-10 h-2 w-2 rotate-45",
    style: {
      dark: "bg-gray-900 dark:bg-gray-700",
      light: "bg-white border border-gray-200 dark:border-gray-600 dark:bg-gray-800",
      auto: "bg-white border border-gray-200 dark:border-gray-600 dark:bg-gray-800",
    },
    placement: "-4px",
  },
  base: "absolute z-20 inline-block w-max max-w-[100vw] rounded-lg shadow-sm outline-none",
  hidden: "invisible opacity-0",
  style: {
    dark: "bg-gray-900 text-white dark:bg-gray-700",
    light:
      "border border-gray-200 bg-white text-sm text-gray-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400",
    auto: "border border-gray-200 bg-white text-sm text-gray-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400",
  },
  content: "relative z-20",
});
