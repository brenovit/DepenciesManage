const colorTomcat = {
  background: "#FF9800",
  border: "#616161",
  hover: {
    background: "#F57C00",
    border: "#424242"
  },
  highlight: {
    background: "#E65100",
    border: "#212121"
  }
};
const colorSocketRmi = {
  background: "#f44336",
  border: "#616161",
  hover: {
    background: "#d32f2f",
    border: "#424242"
  },
  highlight: {
    background: "#b71c1c",
    border: "#212121"
  }
};
const colorGlassfish = {
  background: "#03A9F4",
  border: "#616161",
  hover: {
    background: "#0288D1",
    border: "#424242"
  },
  highlight: {
    background: "#01579B",
    border: "#212121"
  }
};
const colorDependencies = {
  background: "#607D8B",
  border: "#616161",
  hover: {
    background: "#455A64",
    border: "#424242"
  },
  highlight: {
    background: "#263238",
    border: "#212121"
  }
};
const colorDesktop = {
  background: "#8BC34A",
  border: "#616161",
  hover: {
    background: "#689F38",
    border: "#424242"
  },
  highlight: {
    background: "#33691E",
    border: "#212121"
  }
};
const colorUndefined = {
  background: "#BDBDBD",
  border: "#616161",
  hover: {
    background: "#9E9E9E",
    border: "#424242"
  },
  highlight: {
    background: "#757575",
    border: "#212121"
  }
};

function getColorByName(name) {
  if (Object.is(name, "colorTomcat")) {
    return colorTomcat;
  } else if (Object.is(name, "colorSocketRmi")) {
    return colorSocketRmi;
  } else if (Object.is(name, "colorGlassfish")) {
    return colorGlassfish;
  } else if (Object.is(name, "colorDependencies")) {
    return colorDependencies;
  } else if (Object.is(name, "colorDesktop")) {
    return colorDesktop;
  } else if (Object.is(name, "colorSocketRmi")) {
    return colorSocketRmi;
  } else if (Object.is(name, "colorUndefined")) {
    return colorUndefined;
  }
}
