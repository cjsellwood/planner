export const noteColors = [
  "rgb(40, 40, 40)",
  "rgb(80, 0, 0)",
  "rgb(122, 54, 19)",
  "rgb(100, 100, 0)",
  "rgb(0, 70, 0)",
  "rgb(0, 97, 103)",
  "rgb(0, 0, 90)",
  "rgb(65, 0, 110)",
  "rgb(120, 50, 120)",
];

const primaryColors = [
  "aqua",
  "blueviolet",
  "chocolate",
  "coral",
  "cornflowerblue",
  "crimson",
  "cyan",
  "darkgoldenrod",
  "darkmagenta",
  "darkorange",
  "darkorchid",
  "darksalmon",
  "darkturquoise",
  "darkviolet",
  "deeppink",
  "deepskyblue",
  "dodgerblue",
  "firebrick",
  "forestgreen",
  "fuchsia",
  "gold",
  "goldenrod",
  "green",
  "hotpink",
  "indianred",
  "lightcoral",
  "lightgreen",
  "lightsalmon",
  "lightseagreen",
  "lightskyblue",
  "limegreen",
  "mediumaquamarine",
  "mediumorchid",
  "mediumpurple",
  "mediumseagreen",
  "mediumslateblue",
  "mediumspringgreen",
  "mediumturquoise",
  "mediumvioletred",
  "olivedrab",
  "orange",
  "orangered",
  "orchid",
  "palevioletred",
  "peru",
  "rebeccapurple",
  "royalblue",
  "salmon",
  "sandybrown",
  "seagreen",
  "slateblue",
  "springgreen",
  "steelblue",
  "teal",
  "tomato",
  "turquoise",
  "violet",
  "yellowgreen",
];

const randomColor = Math.floor(Math.random() * primaryColors.length);
console.log("PRIMARY_COLOR", randomColor, primaryColors[randomColor]);

const theme = {
  colors: {
    navBarText: "white",
    navBarBackground: "rgb(20, 20, 20)",
    mainBackground: "rgb(30, 30, 30)",
    primary: primaryColors[randomColor],
    dullNoteText: "rgb(205, 205, 205)",
  },
  navBarHeight: 60,
  noteColorStyles: {
    color0: {
      backgroundColor: noteColors[0],
    },
    color1: {
      backgroundColor: noteColors[1],
    },
    color2: {
      backgroundColor: noteColors[2],
    },
    color3: {
      backgroundColor: noteColors[3],
    },
    color4: {
      backgroundColor: noteColors[4],
    },
    color5: {
      backgroundColor: noteColors[5],
    },
    color6: {
      backgroundColor: noteColors[6],
    },
    color7: {
      backgroundColor: noteColors[7],
    },
    color8: {
      backgroundColor: noteColors[8],
    },
  },
};

export default theme;
