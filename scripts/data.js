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

let aplicacoes = [
  { id: "ACID", label: "ACID\n1.0.7", color: colorDependencies, font: {} },
  { id: "APPGUIMENU", label: "APPGUIMENU\n0010807\nbr.com.rtkomp", color: colorDesktop },
  { id: "APPWEBFACES", label: "APPWEBFACES\n0010101\nbr.com.rtkomp", color: colorTomcat },
  { id: "EAAtendimento", label: "EAAtendimento-EJB\n0010808\nbr.com.rtkomp", color: colorGlassfish },
  { id: "EABatch", label: "EABatch\n0011206\nbr.com.rtkomp", color: colorGlassfish },
  { id: "FCCargoAtendRMI", label: "FCCargoAtendRMI\n0010204\nbr.com.rtkomp", color: colorSocketRmi },
  { id: "ICFBMODRMI", label: "ICFBMODRMI\n0010503\nbr.com.rtkomp", color: colorSocketRmi },
  { id: "ICFBusiness", label: "ICFBusiness\n0011049\nbr.com.rtkomp", color: colorSocketRmi },
  { id: "ICFBusinessRMIServer", label: "ICFBusinessRMIServer\n0010603\nbr.com.rtkomp", color: colorSocketRmi },
  { id: "IPOSBMOD003", label: "IPOSBMOD003\n0010506\nbr.com.rtkomp", color: colorSocketRmi },
  { id: "InterfaceOracle", label: "InterfaceOracle\n0010402\nbr.com.rtkomp", color: colorDependencies },
  { id: "InterfaceXML", label: "InterfaceXML\n00101000\nbr.com.rtkomp", color: colorDependencies },
  { id: "POSBrowserTP", label: "POSBrowserTP\n0011107\nbr.com.rtkomp", color: colorGlassfish },
  { id: "POSBrowserWeb", label: "POSBrowserWeb\n0011106\nbr.com.rtkomp", color: colorGlassfish },
  { id: "RMIAutorizationBCT", label: "RMIAutorizationBCT\n0011231\nbr.com.rtkomp", color: colorSocketRmi },
  { id: "ServerPefAntt", label: "ServerPefAntt\n0010501\nbr.com.rtkomp", color: colorSocketRmi },
  { id: "Util", label: "Util\n2.1.0", color: colorDependencies },
  { id: "UtilANTT", label: "UtilANTT", color: colorDependencies },
  { id: "UtilBoleto", label: "UtilBoleto\n0010101\nbr.com.rtkomp", color: colorDependencies },
  { id: "WSAntt", label: "WSAntt\n0011116\nbr.com.rtkomp", color: colorDependencies },
  { id: "WSFCUNIKCAD", label: "WSFCUNIKCAD\n000010103\nbr.com.rtkomp", color: colorDependencies },
  { id: "WSFretePortal", label: "WSFretePortal\n0012012\nbr.com.rtkomp", color: colorTomcat },
  { id: "WSFrete_Unik", label: "WSFrete_Unik\n0011116\nbr.com.rtkomp", color: colorTomcat },
  { id: "WebExtratoTransporte", label: "WebExtratoTransporte\n0010401\nbr.com.rtkomp", color: colorGlassfish },
  { id: "WebLoginPef", label: "WebLoginPef\n0010302\nbr.com.rtkomp", color: colorGlassfish },
  { id: "WebPef", label: "WebPef\nbr.com.rtkomp", color: colorGlassfish },
  { id: "WebProxyClient", label: "WebProxyClient", color: colorUndefined },
  { id: "FretePortalCli", label: "FretePortal-CLI", color: colorUndefined },
  { id: "ArarasCli", label: "Araras-CLI", color: colorUndefined },
  { id: "WSPedagio", label: "WSPedagio\n0010705\nbr.com.unik", color: colorTomcat },
  { id: "Valepedagio", label: "Valepedagio\n0011910\nbr.com.unik", color: colorDependencies },
  { id: "WSPedagioPortal", label: "WSPedagioPortal\n0010704\nbr.com.unik", color: colorTomcat }
];
let relacionamentos = [
  { from: "APPGUIMENU", to: "EAAtendimento", label: "" },
  { from: "APPGUIMENU", to: "FCCargoAtendRMI", label: "" },
  { from: "APPGUIMENU", to: "Util", label: "" },
  { from: "APPGUIMENU", to: "WSFCUNIKCAD", label: "" },
  { from: "APPWEBFACES", to: "FretePortalCli", label: "" },
  { from: "APPWEBFACES", to: "ArarasCli", label: "" },
  { from: "EABatch", to: "IPOSBMOD003", label: "" },
  { from: "EAAtendimento", to: "WSFCUNIKCAD", label: "" },
  { from: "EAAtendimento", to: "Util", label: "" },
  { from: "FCCargoAtendRMI", to: "EAAtendimento", label: "" },
  { from: "FCCargoAtendRMI", to: "InterfaceOracle", label: "" },
  { from: "FCCargoAtendRMI", to: "Util", label: "" },
  { from: "FCCargoAtendRMI", to: "WSFCUNIKCAD", label: "" },
  { from: "ICFBMODRMI", to: "ICFBusinessRMIServer", label: "" },
  { from: "ICFBMODRMI", to: "Util", label: "" },
  { from: "ICFBMODRMI", to: "UtilANTT", label: "" },
  { from: "ICFBMODRMI", to: "UtilBoleto", label: "" },
  { from: "ICFBMODRMI", to: "WSAntt", label: "" },
  { from: "ICFBusiness", to: "ACID", label: "" },
  { from: "ICFBusiness", to: "WSFCUNIKCAD", label: "" },
  { from: "ICFBusiness", to: "RMIAutorizationBCT", label: "" },
  { from: "ICFBusinessRMIServer", to: "WSFCUNIKCAD", label: "" },
  { from: "ICFBusinessRMIServer", to: "WebProxyClient", label: "" },
  { from: "IPOSBMOD003", to: "RMIAutorizationBCT", label: "" },
  { from: "InterfaceOracle", to: "WebProxyClient", label: "" },
  { from: "InterfaceOracle", to: "Util", label: "" },
  { from: "InterfaceXML", to: "Util", label: "" },
  { from: "POSBrowserTP", to: "InterfaceOracle", label: "" },
  { from: "POSBrowserTP", to: "RMIAutorizationBCT", label: "" },
  { from: "POSBrowserTP", to: "Util", label: "" },
  { from: "POSBrowserTP", to: "WSFCUNIKCAD", label: "" },
  { from: "POSBrowserTP", to: "WebProxyClient", label: "" },
  { from: "POSBrowserWeb", to: "InterfaceOracle", label: "" },
  { from: "POSBrowserWeb", to: "RMIAutorizationBCT", label: "" },
  { from: "POSBrowserWeb", to: "Util", label: "" },
  { from: "POSBrowserWeb", to: "WSFCUNIKCAD", label: "" },
  { from: "POSBrowserWeb", to: "WebProxyClient", label: "" },
  { from: "RMIAutorizationBCT", to: "Util", label: "" },
  { from: "RMIAutorizationBCT", to: "WSFCUNIKCAD]", label: "" },
  { from: "RMIAutorizationBCT", to: "InterfaceOracle", label: "" },
  { from: "RMIAutorizationBCT", to: "WebProxyClient", label: "" },
  { from: "ServerPefAntt", to: "UtilANTT", label: "" },
  { from: "ServerPefAntt", to: "WSAntt", label: "" },
  { from: "WSAntt", to: "UtilANTT", label: "" },
  { from: "WSFCUNIKCAD", to: "WebProxyClient", label: "" },
  { from: "WSFretePortal", to: "ACID", label: "" },
  { from: "WSFretePortal", to: "EAAtendimento", label: "" },
  { from: "WSFretePortal", to: "ICFBusiness", label: "" },
  { from: "WSFretePortal", to: "UtilANTT", label: "" },
  { from: "WSFretePortal", to: "UtilBoleto", label: "" },
  { from: "WSFretePortal", to: "WSAntt", label: "" },
  { from: "WSFretePortal", to: "WSFCUNIKCAD", label: "" },
  { from: "WSFretePortal", to: "WebProxyClient", label: "" },
  { from: "WSFrete_Unik", to: "ACID", label: "" },
  { from: "WSFrete_Unik", to: "ICFBusiness", label: "" },
  { from: "WSFrete_Unik", to: "RMIAutorizationBCT", label: "" },
  { from: "WSFrete_Unik", to: "UtilANTT", label: "" },
  { from: "WSFrete_Unik", to: "WSAntt", label: "" },
  { from: "WSFrete_Unik", to: "WSFCUNIKCAD", label: "" },
  { from: "WebExtratoTransporte", to: "Util", label: "" },
  { from: "WebExtratoTransporte", to: "WSAntt", label: "" },
  { from: "WebLoginPef", to: "Util", label: "" },
  { from: "WebPef", to: "Util", label: "" },
  { from: "WebPef", to: "UtilANTT", label: "" },
  { from: "WebPef", to: "WSAntt", label: "" },
  { from: "WSPedagio", to: "Valepedagio", label: "" }
];
