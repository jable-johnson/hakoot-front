<template>
  <main>
    <HomePage />
  </main>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HomePage from '@/components/pages/home/HomePage.vue'
@Options({
  components: { HomePage },
})
export default class Home extends Vue {}
</script>
