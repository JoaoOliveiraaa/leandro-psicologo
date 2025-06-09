import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#3A71A3",
          50: "#E8F1F8",
          100: "#D1E3F1",
          200: "#A3C7E3",
          300: "#75ABD5",
          400: "#478FC7",
          500: "#3A71A3",
          600: "#2E5A82",
          700: "#234462",
          800: "#172D41",
          900: "#0C1721",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "#5FA6DA",
          50: "#EBF5FD",
          100: "#D7EBFB",
          200: "#AFD7F7",
          300: "#87C3F3",
          400: "#5FA6DA",
          500: "#4A8BC2",
          600: "#3A6F9B",
          700: "#2B5374",
          800: "#1C374D",
          900: "#0E1B26",
          foreground: "hsl(var(--secondary-foreground))",
        },
        accent: {
          DEFAULT: "#0AA0DB",
          50: "#E6F7FE",
          100: "#CDEFFD",
          200: "#9BDFFB",
          300: "#69CFF9",
          400: "#37BFF7",
          500: "#0AA0DB",
          600: "#0880B0",
          700: "#066085",
          800: "#04405A",
          900: "#02202F",
          foreground: "hsl(var(--accent-foreground))",
        },
        dark: {
          DEFAULT: "#171D48",
          50: "#E8E9F2",
          100: "#D1D3E5",
          200: "#A3A7CB",
          300: "#757BB1",
          400: "#474F97",
          500: "#171D48",
          600: "#12173A",
          700: "#0E112B",
          800: "#090B1D",
          900: "#05060E",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
