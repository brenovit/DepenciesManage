<template>
        <network 
            class="network"
            ref="network"
            :nodes="network.nodes"
            :edges="network.edges"
            :options="network.options"
        />
</template>

<script>
import {  Network } from 'vue2vis';

export default {
  name: "DependencyChart",
  data: function() {
    return {
      colorTomcat: {
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
      },
      colorSocketRmi: {
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
      },
      colorGlassfish: {
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
      },
      colorDependencies: {
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
      },
      colorDesktop: {
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
      },
      colorUndefined: {
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
      },
      network: {
        nodes: [
          {
            id: "ACID",
            label: "br.com.unik\nACID\n1.0.7",
            color: this.colorDependencies
          },
          {
            id: "APPGUIMENU",
            label: "br.com.rtkomp\nAPPGUIMENU\n0010807",
            color: this.colorDesktop
          },
          {
            id: "APPWEBFACES",
            label: "br.com.rtkomp\nAPPWEBFACES\n0010101",
            color: this.colorTomcat
          },
          {
            id: "EAAtendimento",
            label: "br.com.rtkomp\nEAAtendimento-EJB\n0010808",
            color: this.colorGlassfish
          },
          {
            id: "EABatch",
            label: "br.com.rtkomp\nEABatch\n0011206",
            color: this.colorGlassfish
          },
          {
            id: "FCCargoAtendRMI",
            label: "br.com.rtkomp\nFCCargoAtendRMI\n0010204",
            color: this.colorSocketRmi
          },
          {
            id: "ICFBMODRMI",
            label: "br.com.rtkomp\nICFBMODRMI\n0010503",
            color: this.colorSocketRmi
          },
          {
            id: "ICFBusiness",
            label: "br.com.rtkomp\nICFBusiness\n0011049",
            color: this.colorSocketRmi
          },
          {
            id: "ICFBusinessRMIServer",
            label: "br.com.rtkomp\nICFBusinessRMIServer\n0010603",
            color: this.colorSocketRmi
          },
          {
            id: "IPOSBMOD003",
            label: "br.com.rtkomp\nIPOSBMOD003\n0010506",
            color: this.colorSocketRmi
          },
          {
            id: "InterfaceOracle",
            label: "br.com.rtkomp\nInterfaceOracle\n0010402",
            color: this.colorDependencies
          },
          {
            id: "InterfaceXML",
            label: "br.com.rtkomp\nInterfaceXML\n00101000",
            color: this.colorDependencies
          },
          {
            id: "POSBrowserTP",
            label: "br.com.rtkomp\nPOSBrowserTP\n0011107",
            color: this.colorGlassfish
          },
          {
            id: "POSBrowserWeb",
            label: "br.com.rtkomp\nPOSBrowserWeb\n0011106",
            color: this.colorGlassfish
          },
          {
            id: "RMIAutorizationBCT",
            label: "br.com.rtkomp\nRMIAutorizationBCT\n0011231",
            color: this.colorSocketRmi
          },
          {
            id: "ServerPefAntt",
            label: "br.com.rtkomp\nServerPefAntt\n0010501",
            color: this.colorSocketRmi
          },
          {
            id: "Util",
            label: "br.com.rtkomp\nUtil\n0011002",
            color: this.colorDependencies
          },
          {
            id: "UtilANTT",
            label: "br.com.rtkomp\nUtilANTT",
            color: this.colorDependencies
          },
          {
            id: "UtilBoleto",
            label: "br.com.rtkomp\nUtilBoleto\n0010101",
            color: this.colorDependencies
          },
          {
            id: "WSAntt",
            label: "br.com.rtkomp\nWSAntt\n0011116",
            color: this.colorDependencies
          },
          {
            id: "WSFCUNIKCAD",
            label: "br.com.rtkomp\nWSFCUNIKCAD\n000010103",
            color: this.colorDependencies
          },
          {
            id: "WSFretePortal",
            label: "br.com.rtkomp\nWSFretePortal\n0012012",
            color: this.colorTomcat
          },
          {
            id: "WSFrete_Unik",
            label: "br.com.rtkomp\nWSFrete_Unik\n0011116",
            color: this.colorTomcat
          },
          {
            id: "WebExtratoTransporte",
            label: "br.com.rtkomp\nWebExtratoTransporte\n0010401",
            color: this.colorGlassfish
          },
          {
            id: "WebLoginPef",
            label: "br.com.rtkomp\nWebLoginPef\n0010302",
            color: this.colorGlassfish
          },
          {
            id: "WebPef",
            label: "br.com.rtkomp\nWebPef",
            color: this.colorGlassfish
          },
          {
            id: "WebProxyClient",
            label: "br.com.unik\nWebProxyClient",
            color: this.colorUndefined
          },
          { id: "ArarasCli", label: "Araras-CLI", color: this.colorUndefined },
          {
            id: "WebProxy.jar",
            label: "WebProxy.jar",
            color: this.colorUndefined
          },
          {
            id: "WSPedagio",
            label: "br.com.unik\nWSPedagio\n0010705",
            color: this.colorTomcat
          },
          {
            id: "Valepedagio",
            label: "br.com.unik\nValepedagio\n0011910",
            color: this.colorDependencies
          },
          {
            id: "WSPedagioPortal",
            label: "br.com.unik\nWSPedagioPortal\n0010704",
            color: this.colorTomcat
          }
        ],
        edges: [
          { from: "APPGUIMENU", to: "EAAtendimento", label: "0010102" },
          { from: "APPGUIMENU", to: "FCCargoAtendRMI", label: "0010203" },
          { from: "APPGUIMENU", to: "Util", label: "0011001" },
          { from: "APPGUIMENU", to: "WSFCUNIKCAD", label: "0010102" },
          { from: "APPWEBFACES", to: "WSFretePortal", label: "FretePortalCli" },
          { from: "APPWEBFACES", to: "ArarasCli", label: "0010101" },
          { from: "EABatch", to: "Util", label: "0011002" },
          { from: "EABatch", to: "UtilBoleto", label: "0010101" },
          { from: "EABatch", to: "InterfaceOracle", label: "0010403" },
          { from: "EABatch", to: "WSFCUNIKCAD", label: "0010103" },
          { from: "EABatch", to: "WebProxyClient", label: "0040307" },
          { from: "EABatch", to: "InterfaceXML", label: "0010100" },
          { from: "EABatch", to: "WSPedagio", label: "pedagiounik-cli.jar" },
          { from: "EABatch", to: "WSFrete_Unik", label: "stubs-wsfreteunik.jar" },
          { from: "EAAtendimento", to: "WSFCUNIKCAD", label: "0010103" },
          { from: "EAAtendimento", to: "Util", label: "001102" },
          { from: "EAAtendimento", to: "WebProxy.jar", label: "" },
          { from: "FCCargoAtendRMI", to: "EAAtendimento", label: "0010808" },
          { from: "FCCargoAtendRMI", to: "InterfaceOracle", label: "0010403" },
          { from: "FCCargoAtendRMI", to: "Util", label: "0011002" },
          { from: "FCCargoAtendRMI", to: "WSFCUNIKCAD", label: "0010103" },
          { from: "ICFBMODRMI", to: "ICFBusinessRMIServer", label: "0010603" },
          { from: "ICFBMODRMI", to: "Util", label: "0010101" },
          { from: "ICFBMODRMI", to: "UtilANTT", label: "0010102" },
          { from: "ICFBMODRMI", to: "UtilBoleto", label: "0010101" },
          { from: "ICFBMODRMI", to: "WSAntt", label: "0011014" },
          { from: "ICFBusiness", to: "ACID", label: "1.0.6" },
          { from: "ICFBusiness", to: "WSFCUNIKCAD", label: "0010103" },
          { from: "ICFBusiness", to: "RMIAutorizationBCT", label: "0011231" },
          { from: "ICFBusinessRMIServer", to: "WSFCUNIKCAD", label: "0010103" },
          { from: "ICFBusinessRMIServer", to: "WebProxyClient", label: "0040307" },
          { from: "IPOSBMOD003", to: "RMIAutorizationBCT", label: "0011231" },
          { from: "InterfaceOracle", to: "WebProxyClient", label: "0040307" },
          { from: "InterfaceOracle", to: "Util", label: "0010101" },
          { from: "InterfaceXML", to: "Util", label: "0011002" },
          { from: "POSBrowserTP", to: "InterfaceOracle", label: "0010402" },
          { from: "POSBrowserTP", to: "RMIAutorizationBCT", label: "0011231" },
          { from: "POSBrowserTP", to: "WSFCUNIKCAD", label: "0010103" },
          { from: "POSBrowserTP", to: "WebProxyClient", label: "0040307" },
          { from: "POSBrowserWeb", to: "InterfaceOracle", label: "0010402" },
          { from: "POSBrowserWeb", to: "RMIAutorizationBCT", label: "0011231" },
          { from: "POSBrowserWeb", to: "Util", label: "0011002" },
          { from: "POSBrowserWeb", to: "WSFCUNIKCAD", label: "0010103" },
          { from: "POSBrowserWeb", to: "WebProxyClient", label: "0040307" },
          { from: "RMIAutorizationBCT", to: "Util", label: "0011002" },
          { from: "RMIAutorizationBCT", to: "WSFCUNIKCAD]", label: "0010103" },
          { from: "RMIAutorizationBCT", to: "InterfaceOracle", label: "000402" },
          { from: "RMIAutorizationBCT", to: "WebProxyClient", label: "0040307" },
          { from: "ServerPefAntt", to: "UtilANTT", label: "0010102" },
          { from: "ServerPefAntt", to: "WSAntt", label: "0011201" },
          { from: "WSAntt", to: "UtilANTT", label: "0010102" },
          { from: "WSFCUNIKCAD", to: "WebProxyClient", label: "0040307" },
          { from: "WSFretePortal", to: "ACID", label: "1.0.6" },
          { from: "WSFretePortal", to: "ICFBusiness", label: "0011049" },
          { from: "WSFretePortal", to: "UtilANTT", label: "0010102" },
          { from: "WSFretePortal", to: "UtilBoleto", label: "0010101" },
          { from: "WSFretePortal", to: "WSAntt", label: "0011116" },
          { from: "WSFretePortal", to: "WSFCUNIKCAD", label: "0010103" },
          { from: "WSFretePortal", to: "WebProxyClient", label: "0040307" },
          { from: "WSFrete_Unik", to: "ACID", label: "1.0.6" },
          { from: "WSFrete_Unik", to: "ICFBusiness", label: "0011049" },
          { from: "WSFrete_Unik", to: "RMIAutorizationBCT", label: "0011231" },
          { from: "WSFrete_Unik", to: "UtilANTT", label: "0011002" },
          { from: "WSFrete_Unik", to: "WSAntt", label: "0011116" },
          { from: "WSFrete_Unik", to: "WSFCUNIKCAD", label: "0010103" },
          { from: "WebExtratoTransporte", to: "Util", label: "0010101" },
          { from: "WebExtratoTransporte", to: "WSAntt", label: "0010101" },
          { from: "WebLoginPef", to: "Util", label: "0010101" },
          { from: "WebPef", to: "Util", label: "0010101" },
          { from: "WebPef", to: "UtilANTT", label: "0010101" },
          { from: "WebPef", to: "WSAntt", label: "0011000" },
          { from: "WSPedagio", to: "Valepedagio", label: "0011910" },
          { from: "WSPedagio", to: "ACID", label: "1.0.6" },
          { from: "WSPedagioPortal", to: "Valepedagio", label: "0011910" },
          { from: "WSPedagioPortal", to: "ACID", label: "1.0.6" },
          { from: "Valepedagio", to: "ACID", label: "1.0.6" },
          { from: "Valepedagio", to: "WSFretePortal", label: "" }
        ],
        options: {
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
            enabled: false,
            hierarchicalRepulsion: {
              nodeDistance: 300
            }
          },
          layout: {
            hierarchical: {
              enabled: true,
              levelSeparation: 500,
              nodeSpacing: 500,
              treeSpacing: 50,
              direction: "LR", // UD, DU, LR, RL
              sortMethod: "hubsize" // hubsize, directed
            }
          },
          edges: {
            arrows: {
              to: { enabled: true, scaleFactor: 1, type: "arrow" },
              from: { enabled: true, scaleFactor: 1, type: "bar" }
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
        }
      }
    };
  },
  components: {
    Network
  }
};
</script>

<style>
@import "../../node_modules/vue2vis/dist/vue2vis.css";
.network {
  border: 2px solid lightgray;
  height: 800px;
}
</style>
