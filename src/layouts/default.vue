<template>
<div class="bg-white">
  <div class="relative overflow-hidden">
    <HomeHeader />
    <router-view></router-view>
    <HomeFooter />
  </div>
</div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

// layouts components
import HomeFooter from '@/components/layouts/home/Footer.vue'
import HomeHeader from '@/components/layouts/home/Header.vue'

@Options({
  name: 'DefaultLayout',
  components: {
    HomeFooter,
    HomeHeader,
  }
})
export default class extends Vue {}
</script>
