<template>
  <div class="">
    <header
      class="bg-red-500 text-white p-4 flex items-center justify-between relative z-10"
    >
      <div class="flex justify-center space-x-4 nav">
        <router-link to="/" class="no-underline">
          <button class="back">
            <img src="/ic_svg/chevron-left.svg" alt="Back" class="w-10 h-6" />
          </button>
        </router-link>

        <div class="text-center">
          <div
            class="font-semibold fs-4 flex items-center justify-center gap-1"
          >
            Hà Nội - Phú Quốc
            <a href="#">
              <img
                src="/ic_svg/chevron-bottom.svg"
                alt="chevron-bottom"
                height="14px"
              />
            </a>
          </div>
          <div class="text-xs mt-1">15/09/2024 - 15/09/2024</div>
        </div>

        <!-- Nút mở bộ lọc -->
        <button
          @click="isFilterVisible = true"
          class="p-3 bg-blue-500 text-white rounded-lg filter"
        >
          <img src="/ic_svg/ic_filter.svg" alt="Filter" class="w-10 h-6" />
        </button>
      </div>

      <!-- Gọi component FilterSheet -->
      <FilterSheet
        :isVisible="isFilterVisible"
        @update:isVisible="isFilterVisible = $event"
        @apply-filters="handleApplyFilters"
      />
    </header>
  </div>
</template>

<script setup>
import { ref } from "vue";
import FilterSheet from "./FilterSheet.vue";

const activeTab = ref("combo");
const isFilterVisible = ref(false);

function handleApplyFilters(filters) {
  console.log("Filters applied:", filters);
  isFilterVisible.value = false;
}
</script>

<style scoped>
header {
  background-color: #ee0033;
}

button {
  background-color: #f34c70;
  border-radius: 10px;
  color: white;
}

.nav-tab {
  background-color: #f34c70;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

.tab-active {
  background-color: white;
  color: black;
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: relative;
}

.back,
.filter {
  background-color: #ee0033;
  padding: 8px;
  z-index: 10;
}

.h-6 {
  height: 24px;
}
</style>
