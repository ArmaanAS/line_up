import React from "react";
import "./button.css";

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  type?: "normal" | "theme";
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
  /**
   * Button contents if 'normal' type
   */
  label?: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export default function Button({
  primary = false,
  type = "normal",
  size = "medium",
  backgroundColor,
  label,
  ...props
}: ButtonProps) {
  const mode = type === "theme" ?
    "storybook-button--theme" : primary
      ? "storybook-button--primary"
      : "storybook-button--secondary";

  function toggleTheme() {
    document.body.classList.toggle("dark");
  }

  const theme = document.body.classList.contains("dark") ? "dark" : "light";

  return type === "normal" ? (
    <button
      type="button"
      className={[
        "storybook-button",
        `storybook-button--${size}`,
        "text-slate-700 dark:text-slate-200", , mode].join(
          " "
        )}
      style={{ backgroundColor }}
      {...props}>
      {label}
    </button>
  ) : (
    type === "theme" ? (
      <button
        type="button"
        onClick={toggleTheme}
        className={[
          "storybook-button",
          `storybook-button--${size}`,
          "text-slate-700 dark:text-slate-200",
          mode,
        ].join(" ")}
        style={{ backgroundColor }}
        {...props}>
        {theme === "dark" ?
          <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
          :
          <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        }
      </button>
    ) : null
  );
}
