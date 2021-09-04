<template>
  <div class="x-layout">
    <header data-aos="fade-down" data-aos-duration="500">Dashboard Header</header>
    <router-view />
    <footer data-aos="fade-up" data-aos-duration="500">Dashboard Footer</footer>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  name: 'DashboardLayout',
})
export default class extends Vue {}
</script>

