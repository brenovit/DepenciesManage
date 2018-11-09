<template>
    <div> 
        <header>
            <h2>Dependencies Manager</h2>
            <!-- a href="edit.html">Edit Apps</a -->
        </header>
        <Subtitle />
        <DependencyChart />
    </div>
</template>

<script>
import Subtitle from './Subtitle.vue'
import DependencyChart from './DependencyChart.vue'

export default {
    name: 'MainPage',
    components:{
        Subtitle,
        DependencyChart
    }
}
</script>

<style>

</style>
