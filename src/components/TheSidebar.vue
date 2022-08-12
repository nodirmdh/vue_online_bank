<template>
    <div class="sidebar" v-if="sidebar">
        <span class="sidebar-close" @click="close">&times;</span>
        <div class="sidebar-content">
            <p>Добро Пожаловать в систему по учету заявок в нашем банке. Здесь вы найдете исчерпывающую информацию</p>
        </div>
    </div>
</template>
<script>
import { computed } from '@vue/runtime-core'
import { useStore } from 'vuex'
export default {
    setup() {
        const store = useStore()
        const sidebar = computed(() => store.state.sidebar)

        return{
            sidebar,
            close: () => store.commit('closeSidebar')
        }
    }
}
</script>
<style lang="">
    
</style>