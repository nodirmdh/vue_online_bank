<template >
    <div class="container">
        <app-message></app-message>
        <router-view></router-view>
    </div>
</template>
<script>
import AppMessage from '../components/ui/AppMessage.vue'
export default {
    components: {AppMessage}
};
</script>
<style lang="">
</style>