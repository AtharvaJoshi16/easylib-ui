/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class", `[data-theme="dark"]`],
  content: [
    "./core/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@aj.dev/easylib-ui/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 3px)",
        sm: "calc(var(--radius) - 4px)",
        xs: "calc(var(--radius) - 5px)",
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
          foreground: "#1e3a8a",
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
        border: "#93c5fd",
        input: "#d4d4d8",
        ring: "var(--ring)",
      },
      padding: {
        // Custom padding values
        xs: "0.25rem", // 4px
        sm: "0.5rem", // 8px
        md: "1rem", // 16px
        lg: "1.5rem", // 24px
        xl: "2rem", // 32px
        "2xl": "3rem", // 48px
        section: "4.5rem", // 72px custom named spacing
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
