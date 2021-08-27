const noteColors = [
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
  "yellowgreen",
  "violet",
  "turquoise",
  "tomato",
  "teal",
  "steelblue",
  "springgreen",
  "slateblue",
  "seagreen",
  "sandybrown",
  "salmon",
  "royalblue",
  "rebeccapurple",
  "peru",
  "palevioletred",
  "orchid",
  "orangered",
  "orange",
  "olivedrab",
  "mediumvioletred",
  "mediumturquoise",
  "mediumspringgreen",
  "mediumslateblue",
  "mediumseagreen",
  "mediumpurple",
  "mediumorchid",
  "mediumaquamarine",
  "limegreen",
  "lightskyblue",
  "lightseagreen",
  "lightsalmon",
  "lightgreen",
  "lightcoral",
  "indianred",
  "hotpink",
  "green",
  "goldenrod",
  "gold",
  "fuchsia",
  "forestgreen",
  "firebrick",
  "dodgerblue",
  "deepskyblue",
  "deeppink",
  "darkviolet",
  "darkturquoise",
  "darksalmon",
  "darkorchid",
  "darkorange",
  "darkmagenta",
  "darkgoldenrod",
  "cyan",
  "crimson",
  "cornflowerblue",
  "coral",
  "chocolate",
  "blueviolet",
  "aqua",
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
