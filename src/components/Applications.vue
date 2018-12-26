<script>
import Colors from './Colors.vue';

export default {
    name: 'Applications',
    components: {
      Colors
    },
    data: function() {
      return {
        nodes: [
          {
            id: "ACID",
            label: "br.com.unik\nACID\n1.0.7",
            color: Colors.data().colorDependencies,
            type: "undefined"
          },
          {
            id: "APPGUIMENU",
            label: "br.com.rtkomp\nAPPGUIMENU\n0010807",
            color: Colors.data().colorDesktop,
            type: "desktop"
          },
          {
            id: "APPWEBFACES",
            label: "br.com.rtkomp\nAPPWEBFACES\n0010101",
            color: Colors.data().colorTomcat,
            type: "tomcat"
          },
          {
            id: "EAAtendimento",
            label: "br.com.rtkomp\nEAAtendimento-EJB\n0010808",
            color: Colors.data().colorGlassfish,
            type: "glassfish"
          },
          {
            id: "EABatch",
            label: "br.com.rtkomp\nEABatch\n0011206",
            color: Colors.data().colorGlassfish,
            type: "glassfish"
          },
          {
            id: "FCCargoAtendRMI",
            label: "br.com.rtkomp\nFCCargoAtendRMI\n0010204",
            color: Colors.data().colorSocketRmi,
            type: "socketrmi"
          },
          {
            id: "ICFBMODRMI",
            label: "br.com.rtkomp\nICFBMODRMI\n0010503",
            color: Colors.data().colorSocketRmi,
            type: "socketrmi"
          },
          {
            id: "ICFBusiness",
            label: "br.com.rtkomp\nICFBusiness\n0011049",
            color: Colors.data().colorSocketRmi,
            type: "socketrmi"
          },
          {
            id: "ICFBusinessRMIServer",
            label: "br.com.rtkomp\nICFBusinessRMIServer\n0010603",
            color: Colors.data().colorSocketRmi,
            type: "socketrmi"
          },
          {
            id: "IPOSBMOD003",
            label: "br.com.rtkomp\nIPOSBMOD003\n0010506",
            color: Colors.data().colorSocketRmi,
            type: "socketrmi"
          },
          {
            id: "InterfaceOracle",
            label: "br.com.rtkomp\nInterfaceOracle\n0010402",
            color: Colors.data().colorDependencies,
            type: "dependency"
          },
          {
            id: "InterfaceXML",
            label: "br.com.rtkomp\nInterfaceXML\n00101000",
            color: Colors.data().colorDependencies,
            type: "dependency"
          },
          {
            id: "POSBrowserTP",
            label: "br.com.rtkomp\nPOSBrowserTP\n0011107",
            color: Colors.data().colorGlassfish,
            type: "glassfish"
          },
          {
            id: "POSBrowserWeb",
            label: "br.com.rtkomp\nPOSBrowserWeb\n0011106",
            color: Colors.data().colorGlassfish,
            type: "glassfish"
          },
          {
            id: "RMIAutorizationBCT",
            label: "br.com.rtkomp\nRMIAutorizationBCT\n0011231",
            color: Colors.data().colorSocketRmi,
            type: "socketrmi"
          },
          {
            id: "ServerPefAntt",
            label: "br.com.rtkomp\nServerPefAntt\n0010501",
            color: Colors.data().colorSocketRmi,
            type: "socketrmi"
          },
          {
            id: "Util",
            label: "br.com.rtkomp\nUtil\n0011002",
            color: Colors.data().colorDependencies,
            type: "dependency"
          },
          {
            id: "UtilANTT",
            label: "br.com.rtkomp\nUtilANTT",
            color: Colors.data().colorDependencies,
            type: "dependency"
          },
          {
            id: "UtilBoleto",
            label: "br.com.rtkomp\nUtilBoleto\n0010101",
            color: Colors.data().colorDependencies,
            type: "dependency"
          },
          {
            id: "WSAntt",
            label: "br.com.rtkomp\nWSAntt\n0011116",
            color: Colors.data().colorDependencies,
            type: "dependency"
          },
          {
            id: "WSFCUNIKCAD",
            label: "br.com.rtkomp\nWSFCUNIKCAD\n000010103",
            color: Colors.data().colorDependencies,
            type: "dependency"
          },
          {
            id: "WSFretePortal",
            label: "br.com.rtkomp\nWSFretePortal\n0012012",
            color: Colors.data().colorTomcat,
            type: "tomcat"
          },
          {
            id: "AutorizadorCargaDescarga",
            label: "br.com.cargadescarga\nAutorizadorCargaDescarga\n0010301",
            color: Colors.data().colorTomcat,
            type: "tomcat"
          },
          {
            id: "WSFrete_Unik",
            label: "br.com.rtkomp\nWSFrete_Unik\n0011116",
            color: Colors.data().colorTomcat,
            type: "tomcat"
          },
          {
            id: "WebExtratoTransporte",
            label: "br.com.rtkomp\nWebExtratoTransporte\n0010401",
            color: Colors.data().colorGlassfish,
            type: "glassfish"
          },
          {
            id: "WebLoginPef",
            label: "br.com.rtkomp\nWebLoginPef\n0010302",
            color: Colors.data().colorGlassfish,
            type: "glassfish"
          },
          {
            id: "WebPef",
            label: "br.com.rtkomp\nWebPef",
            color: Colors.data().colorGlassfish,
            type: "glassfish"
          },
          {
            id: "WebProxyClient",
            label: "br.com.unik\nWebProxyClient",
            color: Colors.data().colorUndefined,
            type: "undefined"
          },
          { 
            id: "ArarasCli", 
            label: "Araras-CLI", 
            color: Colors.data().colorUndefined ,
            type: "undefined"
          },
          {
            id: "WebProxy.jar",
            label: "WebProxy.jar",
            color: Colors.data().colorUndefined,
            type: "undefined"
          },
          {
            id: "WSPedagio",
            label: "br.com.unik\nWSPedagio\n0010705",
            color: Colors.data().colorTomcat,
            type: "tomcat"
          },
          {
            id: "Valepedagio",
            label: "br.com.unik\nValepedagio\n0011910",
            color: Colors.data().colorDependencies,
            type: "dependency"
          },
          {
            id: "WSPedagioPortal",
            label: "br.com.unik\nWSPedagioPortal\n0010704",
            color: Colors.data().colorTomcat,
            type: "tomcat"
          },
        ],
        nodesBase: [
          {
            id: "ACID",
            label: "br.com.unik\nACID\n1.0.7",
            color: Colors.data().colorDependencies,
            type: "undefined"
          },
          {
            id: "APPGUIMENU",
            label: "br.com.rtkomp\nAPPGUIMENU\n0010807",
            color: Colors.data().colorDesktop,
            type: "desktop"
          },
          {
            id: "APPWEBFACES",
            label: "br.com.rtkomp\nAPPWEBFACES\n0010101",
            color: Colors.data().colorTomcat,
            type: "tomcat"
          },
          {
            id: "EAAtendimento",
            label: "br.com.rtkomp\nEAAtendimento-EJB\n0010808",
            color: Colors.data().colorGlassfish,
            type: "glassfish"
          },
          {
            id: "EABatch",
            label: "br.com.rtkomp\nEABatch\n0011206",
            color: Colors.data().colorGlassfish,
            type: "glassfish"
          },
          {
            id: "FCCargoAtendRMI",
            label: "br.com.rtkomp\nFCCargoAtendRMI\n0010204",
            color: Colors.data().colorSocketRmi,
            type: "socketrmi"
          },
          {
            id: "ICFBMODRMI",
            label: "br.com.rtkomp\nICFBMODRMI\n0010503",
            color: Colors.data().colorSocketRmi,
            type: "socketrmi"
          },
          {
            id: "ICFBusiness",
            label: "br.com.rtkomp\nICFBusiness\n0011049",
            color: Colors.data().colorSocketRmi,
            type: "socketrmi"
          },
          {
            id: "ICFBusinessRMIServer",
            label: "br.com.rtkomp\nICFBusinessRMIServer\n0010603",
            color: Colors.data().colorSocketRmi,
            type: "socketrmi"
          },
          {
            id: "IPOSBMOD003",
            label: "br.com.rtkomp\nIPOSBMOD003\n0010506",
            color: Colors.data().colorSocketRmi,
            type: "socketrmi"
          },
          {
            id: "InterfaceOracle",
            label: "br.com.rtkomp\nInterfaceOracle\n0010402",
            color: Colors.data().colorDependencies,
            type: "dependency"
          },
          {
            id: "InterfaceXML",
            label: "br.com.rtkomp\nInterfaceXML\n00101000",
            color: Colors.data().colorDependencies,
            type: "dependency"
          },
          {
            id: "POSBrowserTP",
            label: "br.com.rtkomp\nPOSBrowserTP\n0011107",
            color: Colors.data().colorGlassfish,
            type: "glassfish"
          },
          {
            id: "POSBrowserWeb",
            label: "br.com.rtkomp\nPOSBrowserWeb\n0011106",
            color: Colors.data().colorGlassfish,
            type: "glassfish"
          },
          {
            id: "RMIAutorizationBCT",
            label: "br.com.rtkomp\nRMIAutorizationBCT\n0011231",
            color: Colors.data().colorSocketRmi,
            type: "socketrmi"
          },
          {
            id: "ServerPefAntt",
            label: "br.com.rtkomp\nServerPefAntt\n0010501",
            color: Colors.data().colorSocketRmi,
            type: "socketrmi"
          },
          {
            id: "Util",
            label: "br.com.rtkomp\nUtil\n0011002",
            color: Colors.data().colorDependencies,
            type: "dependency"
          },
          {
            id: "UtilANTT",
            label: "br.com.rtkomp\nUtilANTT",
            color: Colors.data().colorDependencies,
            type: "dependency"
          },
          {
            id: "UtilBoleto",
            label: "br.com.rtkomp\nUtilBoleto\n0010101",
            color: Colors.data().colorDependencies,
            type: "dependency"
          },
          {
            id: "WSAntt",
            label: "br.com.rtkomp\nWSAntt\n0011116",
            color: Colors.data().colorDependencies,
            type: "dependency"
          },
          {
            id: "WSFCUNIKCAD",
            label: "br.com.rtkomp\nWSFCUNIKCAD\n000010103",
            color: Colors.data().colorDependencies,
            type: "dependency"
          },
          {
            id: "WSFretePortal",
            label: "br.com.rtkomp\nWSFretePortal\n0012012",
            color: Colors.data().colorTomcat,
            type: "tomcat"
          },
          {
            id: "WSFrete_Unik",
            label: "br.com.rtkomp\nWSFrete_Unik\n0011116",
            color: Colors.data().colorTomcat,
            type: "tomcat"
          },
          {
            id: "WebExtratoTransporte",
            label: "br.com.rtkomp\nWebExtratoTransporte\n0010401",
            color: Colors.data().colorGlassfish,
            type: "glassfish"
          },
          {
            id: "WebLoginPef",
            label: "br.com.rtkomp\nWebLoginPef\n0010302",
            color: Colors.data().colorGlassfish,
            type: "glassfish"
          },
          {
            id: "WebPef",
            label: "br.com.rtkomp\nWebPef",
            color: Colors.data().colorGlassfish,
            type: "glassfish"
          },
          {
            id: "WebProxyClient",
            label: "br.com.unik\nWebProxyClient",
            color: Colors.data().colorUndefined,
            type: "undefined"
          },
          { 
            id: "ArarasCli", 
            label: "Araras-CLI", 
            color: Colors.data().colorUndefined ,
            type: "undefined"
          },
          {
            id: "WebProxy.jar",
            label: "WebProxy.jar",
            color: Colors.data().colorUndefined,
            type: "undefined"
          },
          {
            id: "WSPedagio",
            label: "br.com.unik\nWSPedagio\n0010705",
            color: Colors.data().colorTomcat,
            type: "tomcat"
          },
          {
            id: "Valepedagio",
            label: "br.com.unik\nValepedagio\n0011910",
            color: Colors.data().colorDependencies,
            type: "dependency"
          },
          {
            id: "WSPedagioPortal",
            label: "br.com.unik\nWSPedagioPortal\n0010704",
            color: Colors.data().colorTomcat,
            type: "tomcat"
          },
        ]
    }
    },
}
</script>

<style>

</style>
