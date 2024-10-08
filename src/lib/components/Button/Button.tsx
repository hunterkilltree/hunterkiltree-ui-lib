import { ButtonProps } from "./ButtonType";

export function Button({ title, disabled }: ButtonProps) {
  return (
    <button
      type="button"
      className={`text-white font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 
        ${
          disabled
            ? "bg-blue-400 cursor-not-allowed"
            : "bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        }`}
      disabled={disabled}
    >
      {title}
    </button>
  );
}
