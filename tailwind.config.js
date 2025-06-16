/** @type {import('tailwindcss').Config} */
const daisyui = /** @type {any} */ (require("daisyui"));
export const content = [
  "./src//*.{js,ts,jsx,tsx}",
  "./app//*.{js,ts,jsx,tsx}",
  "./pages//*.{js,ts,jsx,tsx}",
  "./components//*.{js,ts,jsx,tsx}",
];
export const theme = {
  extend: {},
};
export const plugins = [daisyui];
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
