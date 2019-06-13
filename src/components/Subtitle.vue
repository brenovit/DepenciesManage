<template>
    <div class="subtitle">
        <h3>Subtitle</h3>
        <div class="menu">
            <HideApps name="Tomcat" typeAppName="tomcat" className="tomcat"/> 
            <HideApps name="GlassFish" typeAppName="glassfish" className="glassfish"/>
            <HideApps name="Socket/RMI" typeAppName="socketrmi" className="socketrmi"/>
            <HideApps name="Dependency" typeAppName="dependency" className="dependency"/>
            <HideApps name="Desktop" typeAppName="desktop" className="desktop"/>
            <HideApps name="Indefinido" typeAppName="undefined" className="undefined"/>
        </div>
    </div>
</template>

<script>
import HideApps from './HideApps.vue'

export default {
    name: 'Subtitle',   
    components: {
        HideApps
    }
}
</script>

<style>
button.tomcat{
    background: #FF9800;
}
button.tomcat:hover{
    background: #F57C00;
}
button.tomcat:active{
    background: #E65100;
}
button.glassfish{
    background: #03A9F4;
} 
button.glassfish:hover{
    background: #0288D1;
}
button.glassfish:active{
    background: #01579B;
}
button.socketrmi{
    background: #f44336;
}
button.socketrmi:hover{
    background: #d32f2f;
}
button.socketrmi:active{
    background: #b71c1c;
}
button.desktop{
    background: #8BC34A;
}
button.desktop:hover{
    background: #689F38;
}
button.desktop:active{
    background: #33691E;
}
button.dependency{
    background: #607D8B;
} 
button.dependency:hover{
    background: #455A64;
}
button.dependency:active{
    background: #263238;
}
button.undefined{
    background: #BDBDBD;
} 
button.undefined:hover{
    background: #9E9E9E;
}
button.undefined:active{
    background: #757575;
}
</style>
