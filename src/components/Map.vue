<template>
  <div>
    <Subtitle />
    <Applications />
    <Options />
    <Relations />    
    <!--<network 
        class="network"
        ref="network"
        :nodes="network.nodes"
        :edges="network.edges"
        :options="network.options"
    />-->
  </div>
</template>

<script>
import Subtitle from './Subtitle.vue';
import Applications from './Applications.vue';
import Relations from './Relations.vue';
import Options from './Options.vue';
import { Network } from 'vue2vis';

export default {
  name: "Map",
  data: function() {
    return {      
      network: {        
        nodes:{},
        edges:{},
        options:{}
      }
    }
  },
  components: {
    Subtitle,
    Applications,
    Relations,
    Options,
    Network,
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
