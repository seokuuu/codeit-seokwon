module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      mobile: "360px",
      tablet: "640px",
      desktop: "1280px",
    },
    extend: {
      colors: {
        slate: {
          900: "#0F172A",
          800: "#1E293B",
          500: "#64748B",
          400: "#94A3B8",
          300: "#CBD5E1",
          200: "#E2E8F0",
          100: "#F1F5F9",
        },
        violet: {
          600: "#7C3AED",
          100: "#EDE9FE",
        },
        rose: {
          500: "#F43F5E",
        },
        lime: {
          300: "#BEF264",
        },
        amber: {
          200: "#FDE68A",
          800: "#92400E",
        },
        bgPrimary: "#FFFFFF",
        bgGrey: "#F9FAFB",
      },
    },
  },
  plugins: [],
};
