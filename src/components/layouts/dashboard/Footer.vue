<template>
  <div class="min-h-screen pt-16 pb-12 flex flex-col bg-white">
    <footer class="flex-shrink-0 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
      <nav class="flex justify-center space-x-4">
        <a href="#" class="text-sm font-medium text-gray-500 hover:text-gray-600">Contact Support</a>
        <span class="inline-block border-l border-gray-300" aria-hidden="true" />
        <a href="#" class="text-sm font-medium text-gray-500 hover:text-gray-600">Status</a>
        <span class="inline-block border-l border-gray-300" aria-hidden="true" />
        <a href="#" class="text-sm font-medium text-gray-500 hover:text-gray-600">Twitter</a>
      </nav>
    </footer>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';

export default class NotFound extends Vue {}
</script>
