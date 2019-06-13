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
      background: "#f7786b"
    },
    size: 50,
    labelHighlightBold: true,
    widthConstraint: {
      minimum: 400
    },
    heightConstraint: {
      minimum: 150,
      valign: "center"
    }
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
      nodeSpacing: 50,
      treeSpacing: 50,
      direction: "LR", // UD, DU, LR, RL
      sortMethod: "hubsize" // hubsize, directed
    }
  },
  edges: {
    arrows: {
      to: { enabled: true, scaleFactor: 1, type: "arrow" },
      from: { enabled: true, scaleFactor: 1, type: "bar" },
    },
    arrowStrikethrough: true,
    chosen: true,
    color: {
      color: "#737373",
      highlight: "#000000",
      hover: "#595959",
      inherit: "from",
      opacity: 1.0
    },
    dashes: false,
    smooth: {
      enabled: true,
      type: "curvedCW",
      forceDirection: "none"
    },
    font: {
      align: "top",
      size: 30,
      strokeWidth: 2,
      strokeColor: "#000000"
    },
    hoverWidth: 1.1
  },
  interaction: {
    dragNodes: true,
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
    multiselect: true,
    navigationButtons: true,
    selectable: true,
    selectConnectedEdges: true,
    tooltipDelay: 300,
    zoomView: true
  }
};
