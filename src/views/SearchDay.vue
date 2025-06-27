<template>
  <div class="min-h-screen bg-gray-100 font-sans searchday">
      <ImageSection :images="comboImages" />
      <main class="p-4 pt-0 bg-white">
        <ContentDetail />
      </main>
  </div>
</template>

<script setup>
import ImageSection from "../components/combo-detail/ImageSection.vue";
import ContentDetail from "../components/combo-detail/ContentDetail.vue";

const comboImages = [
  '/img/image-detail.png',
  '/img/image (1).png',
  '/img/image (2).png'
]
</script>

<style scoped>
main {
    border-radius: 20px 20px 0 0;
    margin-top: -10px;
    z-index: 8;
    position: absolute;
    width: 800px;
}

.search-day {
    position: relative;
}

</style>
