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
      minimum: 350
    },
    heightConstraint: {
      minimum: 100,
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
