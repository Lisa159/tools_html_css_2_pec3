module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    textColor: {
      primary: "#148e94",
      "dark-primary": "#146468",
      white: "#fff",
      black: "#000",
    },
    colors: {
      primary: "#148e94",
      "light-primary": "#c3f4f7",
      "lighter-primary": "#e1fafb",
      "dark-primary": "#146468",
    },
    extend: {
      backgroundImage: {
        festival:
          "linear-gradient(rgba(0, 0, 0, 0.62), rgba(0 0 0 / 0.2)), url('../images/festival.jpg?width=800')",
        poster: "url('../images/guitar-poster.jpg?width=800')",
        "poster-desktop":
          "linear-gradient(rgba(0 0 0 / 0.8), rgba(0 0 0 / 0.2)), url('../images/guitar-poster.jpg?width=800')",
      },
    },
  },
};
