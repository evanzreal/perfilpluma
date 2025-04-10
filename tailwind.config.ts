import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./client/index.html", "./client/src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Playfair Display", "serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        // Cores principais GestãoPluma
        psi: {
          "50": "rgb(var(--psi-50) / <alpha-value>)",
          "100": "rgb(var(--psi-100) / <alpha-value>)",
          "200": "rgb(var(--psi-200) / <alpha-value>)",
          "300": "rgb(var(--psi-300) / <alpha-value>)",
          "400": "rgb(var(--psi-400) / <alpha-value>)",
          "500": "rgb(var(--psi-500) / <alpha-value>)",
          "600": "rgb(var(--psi-600) / <alpha-value>)",
          "700": "rgb(var(--psi-700) / <alpha-value>)",
          "800": "rgb(var(--psi-800) / <alpha-value>)",
          "900": "rgb(var(--psi-900) / <alpha-value>)",
          "950": "rgb(var(--psi-950) / <alpha-value>)",
        },
        // Cores secundárias GestãoPluma
        cream: {
          "50": "rgb(var(--cream-50) / <alpha-value>)",
          "100": "rgb(var(--cream-100) / <alpha-value>)",
          "200": "rgb(var(--cream-200) / <alpha-value>)",
          "300": "rgb(var(--cream-300) / <alpha-value>)",
          "400": "rgb(var(--cream-400) / <alpha-value>)",
          "500": "rgb(var(--cream-500) / <alpha-value>)",
          "600": "rgb(var(--cream-600) / <alpha-value>)",
          "700": "rgb(var(--cream-700) / <alpha-value>)",
          "800": "rgb(var(--cream-800) / <alpha-value>)",
          "900": "rgb(var(--cream-900) / <alpha-value>)",
          "950": "rgb(var(--cream-950) / <alpha-value>)",
        },
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      backgroundImage: {
        'gradient-button': 'linear-gradient(-90deg,#007cf0,#00dfd8,#ff0080,#007cf0)',
        'trial': 'linear-gradient(135deg,#0070f3,#f81ce5)',
        'book-bind-bg': 'linear-gradient(90deg,hsla(0,0%,100%,0),hsla(0,0%,100%,0) 12%,hsla(0,0%,100%,.25) 29.25%,hsla(0,0%,100%,0) 50.5%,hsla(0,0%,100%,0) 75.25%,hsla(0,0%,100%,.25) 91%,hsla(0,0%,100%,0)),linear-gradient(90deg,rgba(0,0,0,.03),rgba(0,0,0,.1) 12%,transparent 30%,rgba(0,0,0,.02) 50%,rgba(0,0,0,.2) 73.5%,rgba(0,0,0,.5) 75.25%,rgba(0,0,0,.15) 85.25%,transparent)',
        'book-pages': 'repeating-linear-gradient(90deg,#fff,#efefef 1px,#fff 3px,#9a9a9a 0)',
      },
      boxShadow: { 
        'book': '0 1.8px 3.6px rgba(0,0,0,.05),0 10.8px 21.6px rgba(0,0,0,.08),inset 0 -.9px 0 rgba(0,0,0,.1),inset 0 1.8px 1.8px hsla(0,0%,100%,.1),inset 3.6px 0 3.6px rgba(0,0,0,.1)',
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;
