<template>
  <div class="min-h-screen bg-gray-100 font-sans flashsale">
      <Header_Flashsale />
      <main class="p-4 pt-0">
        <ComboFlashsale />
      </main>
  </div>
</template>

<script setup>
import Header_Flashsale from "../components/Header_Flashsale.vue";
import ComboFlashsale from "../components/ComboFlashsale.vue";
</script>

<style scoped>
.flashsale {
  width: 800px;
  margin: 0 auto;
  background-color: #f4f4f4;
  display: block;
  padding: 0;
}
</style>
