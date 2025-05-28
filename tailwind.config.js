/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./core/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@aj.dev/easylib-ui/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "#3b82f6",
          foreground: "#fff",
        },
        secondary: {
          DEFAULT: "#6366f1",
          foreground: "#fff",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "#93c5fd",
          foreground: "#000",
        },
        destructive: {
          DEFAULT: "#ef4444",
          foreground: "#fff",
        },
        dark: {
          DEFAULT: "#27272a",
          foreground: "#fff",
        },
        light: {
          DEFAULT: "#fff",
          foreground: "#000",
        },
        warning: {
          DEFAULT: "#eab308",
          foreground: "#713f12",
        },
        gray: {
          DEFAULT: "#6b7280",
          foreground: "#fff",
        },
        success: {
          DEFAULT: "#16a34a",
          foreground: "#fff",
        },
        border: "#71717a",
        input: "var(--input)",
        ring: "var(--ring)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
