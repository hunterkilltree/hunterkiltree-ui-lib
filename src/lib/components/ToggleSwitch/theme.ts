import { createTheme } from "../../helpers/create-theme";
import type { FlowbiteToggleSwitchTheme } from "./ToggleSwitch";

export const toggleSwitchTheme: FlowbiteToggleSwitchTheme = createTheme({
  root: {
    base: "group flex rounded-lg focus:outline-none",
    active: {
      on: "cursor-pointer",
      off: "cursor-not-allowed opacity-50",
    },
    label: "ms-3 mt-0.5 text-start text-sm font-medium text-gray-900 dark:text-gray-300",
  },
  toggle: {
    base: "relative rounded-full border after:absolute after:rounded-full after:bg-white after:transition-all group-focus:ring-4 group-focus:ring-cyan-500/25",
    checked: {
      on: "after:translate-x-full after:border-white rtl:after:-translate-x-full",
      off: "border-gray-200 bg-gray-200 dark:border-gray-600 dark:bg-gray-700",
      color: {
        blue: "border-cyan-700 bg-cyan-700",
        dark: "border-gray-900 bg-gray-900 dark:border-gray-700 dark:bg-gray-700",
        failure: "border-red-700 bg-red-700",
        gray: "border-gray-500 bg-gray-500",
        green: "border-green-600 bg-green-600",
        info: "border-cyan-700 bg-cyan-700",
        purple: "border-purple-700 bg-purple-700",
        success: "border-green-500 bg-green-500",
        warning: "border-yellow-600 bg-yellow-600",
      },
    },
    sizes: {
      sm: "h-5 w-9 after:left-0.5 after:top-0.5 after:h-4 after:w-4 rtl:after:right-0.5",
      md: "h-6 w-11 after:left-0.5 after:top-0.5 after:h-5 after:w-5 rtl:after:right-0.5",
      lg: "h-7 w-[52px] after:left-0.5 after:top-0.5 after:h-6 after:w-6 rtl:after:right-0.5",
    },
  },
});
