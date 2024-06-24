module.exports = {
  content: ["./*html"],
  theme: {
    extend: {
      fontFamily: {
        BaiJamjuree: "Bai Jamjuree, sans-serif",
      },
      colors: {
        customCyan: "hsl(171, 66%, 44%)",
        customBlue: "hsl(233, 100%, 69%)",
        customGrayishBlue: "hsl(210, 10%, 33%)",
        customDarkGryBlue: "hsl(201, 11%, 66%)",
      },
      backgroundImage: {
        "hero-desktop": "url('/assets/bg-header-desktop.png')",
        "hero-mobile": "url('/assets/bg-header-mobile.png')",
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          lg: "1440px",
          xl: "1440px",
          "2xl": "1440px",
        },
      },
    },
    plugins: [],
  },
};
