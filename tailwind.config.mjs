/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        autofit: "repeat(auto-fit, 288px)",
      },
      colors: {
        "light-gray": "#b4afb6",
      },
    },
  },
  plugins: [],
};
