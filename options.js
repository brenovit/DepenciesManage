let options = {
  configure: {
    enabled: false,
    showButton: true
  },
  nodes: {
    shape: "box",
    font: {
      color: "#000000",
      size: 35,
      face: "verdana" //verdana, arial, tahoma,
    },
    color: {
      border: "#000000",
      background: "#f7786b",
      highlight: {
        //cor selecionado
        border: "#d96459",
        background: "#ff6f69"
      },
      hover: {
        //cor com mouse em cima
        border: "#c83349",
        background: "#e06377"
      }
    },
    size: 50,
    labelHighlightBold: true
  },
  physics: {
    enabled: true,
    hierarchicalRepulsion: {
      nodeDistance: 300
    }
  },
  layout: {
    hierarchical: {
      enabled: true,
      levelSeparation: 500,
      nodeSpacing: 100,
      treeSpacing: 200,
      direction: "LR", // UD, DU, LR, RL
      sortMethod: "directed" // hubsize, directed
    }
  },
  edges: {
    arrows: {
      to: { enabled: true, scaleFactor: 1, type: "arrow" }
    },
    arrowStrikethrough: true,
    chosen: true,
    color: {
      color: "#101010",
      highlight: "#010101",
      hover: "#151515",
      inherit: "from",
      opacity: 1.0
    },
    dashes: false,
    smooth: {
      enabled: true,
      type: "curvedCW",
      forcedDirection: "none"
    },
    font: {
      align: "top"
    },
    hoverWidth: 1.1
  },
  interaction: {
    dragNodes: false,
    dragView: true,
    hideEdgesOnDrag: false,
    hideNodesOnDrag: false,
    hover: true,
    hoverConnectedEdges: true,
    keyboard: {
      enabled: true,
      speed: { x: 10, y: 10, zoom: 0.02 },
      bindToWindow: true
    },
    multiselect: false,
    navigationButtons: true,
    selectable: true,
    selectConnectedEdges: true,
    tooltipDelay: 300,
    zoomView: true
  }
};
