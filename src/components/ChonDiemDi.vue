<!-- ChọnDiemDi.vue -->
<template>
  <div>
    <button
      @click="showModal = true"
      class="flex items-center gap-2 w-full p-4 border border-gray-300 rounded-md text-gray-500"
    >
        <img src="/ic_svg/location.svg" alt="ic-location" class="w-4 h-8" />

      <span>Chọn điểm đi</span>
    </button>

    <!-- Modal -->
    <div v-if="showModal" class="fixed inset-0 z-50 flex items-end bg-black/50">
      <div class="bg-white w-full rounded-t-2xl p-4 max-h-[80vh] overflow-y-auto">
        <!-- Handle bar -->
        <div class="flex justify-center mb-2">
          <div class="w-10 h-1.5 bg-gray-300 rounded-full"></div>
        </div>

        <!-- Header -->
        <div class="flex justify-between items-center mb-3">
          <h2 class="text-lg font-semibold">Điểm đi</h2>
          <button @click="showModal = false">
            <svg class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <!-- Search box -->
        <div class="mb-4">
          <input
            v-model="search"
            type="text"
            placeholder="Tìm kiếm"
            class="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>

        <!-- Danh sách tỉnh/thành phố -->
        <div>
          <p class="text-gray-500 font-medium mb-2">Tỉnh/Thành phố</p>
          <ul>
            <li
              v-for="city in filteredCities"
              :key="city"
              class="py-2 px-1 border-b border-gray-100 hover:bg-gray-50 cursor-pointer"
              @click="selectCity(city)"
            >
              {{ city }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const showModal = ref(false)
const search = ref('')

const cities = [
  'Hà Nội', 'Hồ Chí Minh', 'Đà Nẵng', 'Hải Dương', 'Hải Phòng',
  'Nam Định', 'An Giang', 'Bạc Liêu', 'Bắc Ninh', 'Bắc Kạn', 'Cần Thơ'
]

const filteredCities = computed(() => {
  return cities.filter(city =>
    city.toLowerCase().includes(search.value.toLowerCase())
  )
})

function selectCity(city) {
  alert('Bạn đã chọn: ' + city)
  showModal.value = false
}
</script>