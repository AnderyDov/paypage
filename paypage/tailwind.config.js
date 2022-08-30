module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  themes: ["night", "fantasy"],
  plugins: [require("daisyui")],
  theme: {
    screens: {
      s: { max: "320px" },
      sm: { max: "642px" },
      "-sm": { min: "643px" },
    },
  },
};
