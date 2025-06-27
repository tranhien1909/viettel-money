<template>
  <div class="min-h-screen bg-gray-100 font-sans home-search">
    <Header_HomeSearch />
    <main>
      <SearchSection />
      <!-- <ChonDiemDi /> -->
      <FlashSaleSection />
      <FavoriteToursSection />
      <BottomNavigation />
    </main>
  </div>
</template>

<script setup>
import Header_HomeSearch from "@/components/Header_HomeSearch.vue";
import SearchSection from "@/components/SearchSection.vue";
import FlashSaleSection from "@/components/FlashSaleSection.vue";
import FavoriteToursSection from "@/components/FavoriteToursSection.vue";
import BottomNavigation from "@/components/BottomNavigation.vue";
import ChonDiemDi from '@/components/ChonDiemDi.vue'
</script>

<style></style>
