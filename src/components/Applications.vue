<template>
  <div>
    <div>Sou o Applications</div>
    <div> {{aplicacoes[0].id}} </div>
    <div> {{aplicacoes[0].color}} </div>
    <Colors />
  </div>
</template>

<script>
import Colors from './Colors.vue';

export default {
    name: 'Applications',
    components: {
      Colors
    },
    data: function() {
      return {
        aplicacoes: [
          {
            id: "ACID",
            label: "br.com.unik\nACID\n1.0.7",
            color: this.colorDependencies
          },
          {
            id: "APPGUIMENU",
            label: "br.com.rtkomp\nAPPGUIMENU\n0010807",
            //color: this.colorDesktop
          },
          {
            id: "APPWEBFACES",
            label: "br.com.rtkomp\nAPPWEBFACES\n0010101",
            //color: this.colorTomcat
          },
          {
            id: "EAAtendimento",
            label: "br.com.rtkomp\nEAAtendimento-EJB\n0010808",
            //color: this.colorGlassfish
          },
          {
            id: "EABatch",
            label: "br.com.rtkomp\nEABatch\n0011206",
            //color: this.colorGlassfish
          },
          {
            id: "FCCargoAtendRMI",
            label: "br.com.rtkomp\nFCCargoAtendRMI\n0010204",
            //color: this.colorSocketRmi
          },
          {
            id: "ICFBMODRMI",
            label: "br.com.rtkomp\nICFBMODRMI\n0010503",
            //color: this.colorSocketRmi
          },
          {
            id: "ICFBusiness",
            label: "br.com.rtkomp\nICFBusiness\n0011049",
            //color: this.colorSocketRmi
          },
          {
            id: "ICFBusinessRMIServer",
            label: "br.com.rtkomp\nICFBusinessRMIServer\n0010603",
            //color: this.colorSocketRmi
          },
          {
            id: "IPOSBMOD003",
            label: "br.com.rtkomp\nIPOSBMOD003\n0010506",
            //color: this.colorSocketRmi
          },
          {
            id: "InterfaceOracle",
            label: "br.com.rtkomp\nInterfaceOracle\n0010402",
            //color: this.colorDependencies
          },
          {
            id: "InterfaceXML",
            label: "br.com.rtkomp\nInterfaceXML\n00101000",
            //color: this.colorDependencies
          },
          {
            id: "POSBrowserTP",
            label: "br.com.rtkomp\nPOSBrowserTP\n0011107",
            //color: this.colorGlassfish
          },
          {
            id: "POSBrowserWeb",
            label: "br.com.rtkomp\nPOSBrowserWeb\n0011106",
            //color: this.colorGlassfish
          },
          {
            id: "RMIAutorizationBCT",
            label: "br.com.rtkomp\nRMIAutorizationBCT\n0011231",
            //color: this.colorSocketRmi
          },
          {
            id: "ServerPefAntt",
            label: "br.com.rtkomp\nServerPefAntt\n0010501",
            //color: this.colorSocketRmi
          },
          {
            id: "Util",
            label: "br.com.rtkomp\nUtil\n0011002",
            //color: this.colorDependencies
          },
          {
            id: "UtilANTT",
            label: "br.com.rtkomp\nUtilANTT",
            //color: this.colorDependencies
          },
          {
            id: "UtilBoleto",
            label: "br.com.rtkomp\nUtilBoleto\n0010101",
            //color: this.colorDependencies
          },
          {
            id: "WSAntt",
            label: "br.com.rtkomp\nWSAntt\n0011116",
            //color: this.colorDependencies
          },
          {
            id: "WSFCUNIKCAD",
            label: "br.com.rtkomp\nWSFCUNIKCAD\n000010103",
            //color: this.colorDependencies
          },
          {
            id: "WSFretePortal",
            label: "br.com.rtkomp\nWSFretePortal\n0012012",
            //color: this.colorTomcat
          },
          {
            id: "WSFrete_Unik",
            label: "br.com.rtkomp\nWSFrete_Unik\n0011116",
            //color: this.colorTomcat
          },
          {
            id: "WebExtratoTransporte",
            label: "br.com.rtkomp\nWebExtratoTransporte\n0010401",
            //color: this.colorGlassfish
          },
          {
            id: "WebLoginPef",
            label: "br.com.rtkomp\nWebLoginPef\n0010302",
            //color: this.colorGlassfish
          },
          {
            id: "WebPef",
            label: "br.com.rtkomp\nWebPef",
            //color: this.colorGlassfish
          },
          {
            id: "WebProxyClient",
            label: "br.com.unik\nWebProxyClient",
            //color: this.colorUndefined
          },
          { id: "ArarasCli", label: "Araras-CLI", color: this.colorUndefined },
          {
            id: "WebProxy.jar",
            label: "WebProxy.jar",
            //color: this.colorUndefined
          },
          {
            id: "WSPedagio",
            label: "br.com.unik\nWSPedagio\n0010705",
            //color: this.colorTomcat
          },
          {
            id: "Valepedagio",
            label: "br.com.unik\nValepedagio\n0011910",
            //color: this.colorDependencies
          },
          {
            id: "WSPedagioPortal",
            label: "br.com.unik\nWSPedagioPortal\n0010704",
            //color: this.colorTomcat
          }
        ],
    }
    }
}
</script>

<style>

</style>
