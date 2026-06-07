import { createTheme } from "../../helpers/create-theme";
import type { FlowbiteAlertTheme } from "./Alert";

export const alertTheme: FlowbiteAlertTheme = createTheme({
  base: "flex flex-col gap-2 p-4 text-sm",
  borderAccent: "border-t-4",
  closeButton: {
    base: "-m-1.5 ml-auto inline-flex h-8 w-8 rounded-lg p-1.5 focus:ring-2",
    icon: "h-5 w-5",
    color: {
      info: "bg-cyan-100 text-cyan-500 hover:bg-cyan-200 focus:ring-cyan-400 dark:bg-cyan-200 dark:text-cyan-600 dark:hover:bg-cyan-300",
      gray: "bg-gray-100 text-gray-500 hover:bg-gray-200 focus:ring-gray-400 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600",
      failure:
        "bg-red-100 text-red-500 hover:bg-red-200 focus:ring-red-400 dark:bg-red-200 dark:text-red-600 dark:hover:bg-red-300",
      success:
        "bg-green-100 text-green-500 hover:bg-green-200 focus:ring-green-400 dark:bg-green-200 dark:text-green-600 dark:hover:bg-green-300",
      warning:
        "bg-yellow-100 text-yellow-500 hover:bg-yellow-200 focus:ring-yellow-400 dark:bg-yellow-200 dark:text-yellow-600 dark:hover:bg-yellow-300",
    },
  },
  color: {
    info: "text-cyan-800 bg-cyan-50 border-cyan-500 dark:bg-gray-800 dark:text-cyan-400",
    gray: "text-gray-800 bg-gray-50 border-gray-500 dark:bg-gray-800 dark:text-gray-300",
    failure: "text-red-800 bg-red-50 border-red-500 dark:bg-gray-800 dark:text-red-400",
    success: "text-green-800 bg-green-50 border-green-500 dark:bg-gray-800 dark:text-green-400",
    warning: "text-yellow-800 bg-yellow-50 border-yellow-500 dark:bg-gray-800 dark:text-yellow-300",
  },
  icon: "mr-3 inline h-5 w-5 shrink-0",
  rounded: "rounded-lg",
  wrapper: "flex items-center",
});
