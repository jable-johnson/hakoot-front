<template>
  <main>
    <Register />
  </main>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Register from '@/components/common/Register.vue';
@Options({
  components: { Register },
})
export default class RegisterPage extends Vue {}
</script>
