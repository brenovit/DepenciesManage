<template>
    <button @click="hideApp();" v-bind:class="typeAppName">{{name}}</button>
</template>
<script>
import Applications from './Applications.vue'

export default {
    name: 'HideApps',
    props:{
        name:String,
        appName:String,
        typeAppName:String
    }, 
    methods: {
        hideApp: function(){
            var typeName = this.$props.typeAppName;
            var nodes = Applications.data().nodes;
            //console.log(nodes[0].type);
            var node = nodes[0];
            node.type = typeName;
            nodes[0] = node;
        }
    },
    components: {
        Applications
    }

}
</script>
<style>
button {
    -webkit-box-sizing: content-box;
    -moz-box-sizing: content-box;
    box-sizing: content-box;    
    padding: 10px;
    display: inline;
    overflow: hidden;
    border: none;
    font: normal normal bold 19px/1 "Courier New", Courier, monospace;
    color: rgba(0,0,0,1);
    text-align: center;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    border-radius: 15px;
    -webkit-box-shadow: 1px 1px 1px 0 rgba(0,0,0,0.3);
    box-shadow: 1px 1px 1px 0 rgba(0,0,0,0.3);
}
</style>

